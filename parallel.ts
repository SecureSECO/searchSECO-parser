/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * � Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Language, MIN_FUNCTION_CHARS, MIN_METHOD_LINES, ParserConstructors } from './src/Parser';
import HashData from './src/HashData';
import { Worker, isMainThread, parentPort, workerData, threadId } from 'worker_threads';
import fs from 'fs';
import path from 'path';
import { IParser, BATCH_SIZE } from './src/ParserBase';


// Arbitrary block size of 15 kB
// note: cannot exceed 64 KiB
const BLOCK_SIZE = 15_360 
const PARTIAL_FILE_PARSING = false

type File = {
	filename: string,
	size: number
	codeBlocks: CodeBlock[]
}

class CodeBlock {
	public readonly filename: string
	public block: string
	public blockId: number
	constructor(filename: string, block: string, blockId: number) {
		this.filename = filename
		this.block = block
		this.blockId = blockId
	}

	public Concat(other: CodeBlock): CodeBlock {
		// can only concat blocks of the same file
		if (this.filename !== other.filename)
			return this

		if (this.blockId > other.blockId)
			this.block = other.block + this.block
		else this.block += other.block
		this.blockId = Math.min(this.blockId, other.blockId)
		return this
	}
}

class Job<T> {
	public readonly jobData: T
	public readonly jobId: number
	private static _currentJobId: number = 0
	private constructor(jobData: T, jobId: number) {
		this.jobData = jobData
		this.jobId = jobId
	}

	public static Create<T>(data: T): Job<T> {
		return new this(data, this._currentJobId++)
	}

	public ToJSON(): string {
		return JSON.stringify({
			jobData: this.jobData,
			jobId: this.jobId
		})
	}
}

const enum WorkerMessage {
	SEND_HASHES,
	SEND_UNPARSED_BLOCK,
	SEND_MESSAGE
}

const WorkerMessages = [
	WorkerMessage.SEND_HASHES,
	WorkerMessage.SEND_UNPARSED_BLOCK,
	WorkerMessage.SEND_MESSAGE
] as const


class Queue<T> {
	private _elements: { [key: number]: T } = {};
	private _head = 0;
	private _tail = 0;

	enqueue(element: T): void {
		this._elements[this._tail] = element;
		this._tail++;
	}

	dequeue(): T | undefined {
		const item = this._elements[this._head];
		delete this._elements[this._head];
		this._head++;
		return item;
	}

	peek(): T | undefined {
		return this._elements[this._head];
	}

	get length(): number {
		return Math.max(0, this._tail - this._head);
	}

	get isEmpty(): boolean {
		return this.length === 0;
	}
}

function ShuffleArray<T>(array: T[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

function Message(msg: string) {
	console.log(`# ${msg}`);
}

async function readPartialFile(path: string, start: number, end: number): Promise<string> {
	return await new Promise((resolve) => {
		const stream = fs.createReadStream(path, { start, end })
		const chunks: Buffer[] = []
		stream.on('data', chunk => chunks.push(Buffer.from(chunk)))
		stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')))
	})
}

function createBlocks(filename: string, data: string): CodeBlock[] {
	let blockId = 0
	let mutableData = Array.from(data)
	const result: CodeBlock[] = []
	while (mutableData.length > BLOCK_SIZE)
		result.push(new CodeBlock(filename, mutableData.splice(0, BLOCK_SIZE).join(''), blockId++))
	result.push(new CodeBlock(filename, mutableData.join(''), blockId++))
	return result
}


async function ReadFile(filename: string, fpath: string, createBlocks: boolean): Promise<File> {
	const abspath = path.join(fpath, filename)
	const size = fs.statSync(abspath).size
	return {
		filename,
		size,
		codeBlocks: await (async () => {
			let blockStart = 0
			let blockId = 0
			const result: CodeBlock[] = []
			while (createBlocks && blockStart + BLOCK_SIZE < size) {
				result.push(new CodeBlock(filename, await readPartialFile(abspath, blockStart, blockStart += BLOCK_SIZE), blockId++))
			}
			result.push(new CodeBlock(filename, await readPartialFile(abspath, blockStart, size), blockId++))
			return result
		})()
	}
}	

function ConcatCodeBlocks(filename: string, blocks: CodeBlock[]): File {
	blocks.sort((a: CodeBlock, b: CodeBlock) => a.blockId - b.blockId)
	const concatenated = blocks.reduce((prevBlock, currBlock) => prevBlock.Concat(currBlock))
	return {
		filename,
		codeBlocks: createBlocks(filename, concatenated.block),
		size: concatenated.block.length
	}
}


/**
 * Parses (partial) file data.
 * @param job The job object
 * @param parser 
 * @returns 
 */
async function parse(job: Job<CodeBlock>, parser: IParser): Promise<[HashData[], CodeBlock | undefined]> {
	parentPort.postMessage(WorkerMessage.SEND_MESSAGE)
	parentPort.postMessage(`Parsing ${job.jobData.filename}`);
	const hashes = parser.ParseSingle(job.jobData.filename, job.jobData.block, job.jobId % BATCH_SIZE == 0)
	parentPort.postMessage(`Finished parsing file ${job.jobData.filename}. Number of methods found: ${hashes.length}`);

	// substitute for actual unparsed data
	const unparsedData = ''
	const unparsedCodeBlock = unparsedData ? new CodeBlock(job.jobData.filename, unparsedData, job.jobData.blockId) : undefined
	return [hashes, unparsedCodeBlock];
}

class WorkerPool<TResult> {
	private _workers: Set<Worker>;
	private _jobs: Queue<Job<CodeBlock>>;
	private _result: TResult[][];

	constructor(genericData: any, threadCount: number) {
		this._workers = new Set<Worker>();
		this._jobs = new Queue<Job<CodeBlock>>();
		this._result = [];

		for (let i = 0; i < threadCount; i++) 
			this._workers.add(new Worker(__filename, { workerData: genericData }));
	}

	public AddJob(data: CodeBlock) {
		this._jobs.enqueue(Job.Create(data));
	}

	public async Process<K>(finishCallback: (result: TResult[]) => K): Promise<K> {
		const self = this;
		
		const incomingMessages = new Map<Worker, keyof typeof WorkerMessages>()
		const unparsedBlocks = new Map<string, CodeBlock[]>()

		return new Promise((resolve, reject) => {
			self._workers.forEach((worker) => {
				worker.on('error', err => reject(err));
				worker.on('exit', () => {
					self._workers.delete(worker);
					if (self._workers.size == 0) 
						resolve(finishCallback(self._result.flat()))
				});
				worker.on('message', (incoming) => {
					if (WorkerMessages.find(validMessage => validMessage == incoming) !== undefined) {
						incomingMessages.set(worker, incoming as keyof typeof WorkerMessages)
						return
					}

					const currentMessage = incomingMessages.get(worker)
					switch (currentMessage) {
						case WorkerMessage.SEND_HASHES:
							if (self._jobs.length % BATCH_SIZE == 0 && self._jobs.length != 0)
								Message(self._jobs.length.toString());
							self._result.push(...incoming);
							worker.postMessage(self._jobs.dequeue());
							break;
						
						case WorkerMessage.SEND_UNPARSED_BLOCK:
							if (!unparsedBlocks.has(incoming.filename))
								unparsedBlocks.set(incoming.filename, [])
							unparsedBlocks.get(incoming.filename).push(incoming)
							if (unparsedBlocks.get(incoming.filename).length > 1) {
								const newBlocks = ConcatCodeBlocks(incoming.filename, unparsedBlocks.get(incoming.filename))
								newBlocks.codeBlocks.forEach(block => this.AddJob(block))
							}
							break;

						case WorkerMessage.SEND_MESSAGE:
							Message(incoming)
							break;
							
					}
				});
				worker.postMessage(this._jobs.dequeue());
			});
		})
	}

	public static InvokeWorkerFunction(hook: () => void) {
		hook()
	}
}


/**
 * Parses data in parallel using multithreading. Outputs the result to `stdio`.
 * @param data The file names to process
 * @param threadCount The number of worker threads to use
 * @param basePath The base path of the directory to parse
 * @param lang The target language
 */
async function ParallelParse(data: File[], threadCount: number, basePath: string, lang: string): Promise<void> {
	if (isMainThread) {
		const workerPool = new WorkerPool<HashData>({ basePath, lang }, threadCount);
		data.map(d => d.codeBlocks).flat().forEach(codeBlocks => {
			workerPool.AddJob(codeBlocks)
		})

		const jsonArray = await workerPool.Process((result: HashData[]) => {
			return result.map((x) => JSON.stringify(x));
		});
		console.log(jsonArray.join('\n'))
	} else {
		WorkerPool.InvokeWorkerFunction(() => {
			const { lang, basePath } = workerData as { lang: Language, basePath: string };

			let parser: IParser;
			if (!parser) 
				parser = new (ParserConstructors.get(lang))(basePath, MIN_METHOD_LINES, MIN_FUNCTION_CHARS, lang);
	
			parentPort.on('message', async (incoming) => {
				if (incoming !== undefined) {
					const [hashes, unparsedCodeBlock] = await parse(incoming, parser)
					parentPort.postMessage(WorkerMessage.SEND_HASHES)
					parentPort.postMessage(hashes);

					if (unparsedCodeBlock) {
						parentPort.postMessage(WorkerMessage.SEND_UNPARSED_BLOCK)
						parentPort.postMessage(unparsedCodeBlock)
					}
				}
				else {
					parentPort.close();
				}
			});
		})
	}
}

(async () => {
	const language = process.argv[2];
	const threadCount = +process.argv[3];
	const basePath = process.argv[4];
	const filenames = process.argv.slice(5);

	const data: File[] = await Promise.all(filenames.map((filename) => ReadFile(filename, basePath, PARTIAL_FILE_PARSING)))
	ShuffleArray(data)
	await ParallelParse(data, threadCount, basePath, language);

})();
