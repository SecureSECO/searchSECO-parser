/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * � Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { 
	Language, 
	MIN_FUNCTION_CHARS, 
	MIN_METHOD_LINES,
	 ParserConstructors 
} from './src/Parser';
import HashData from './src/HashData';
import { 
	Worker, 
	isMainThread, 
	parentPort, 
	workerData } 
from 'worker_threads';
import fs from 'fs';
import { 
	IParser, 
	ProcessMessage,
	 ProcessData, 
	 ParentMessage, 
	 Message, 
	 UPDATE_BREAK_POINT,
	 ParseableFile} 
from './src/ParserBase';
import EventEmitter from 'events'


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

	public get JSON(): string {
		return JSON.stringify({
			jobData: this.jobData,
			jobId: this.jobId
		})
	}
}

const enum WorkerMessage {
	HASHES,
	UNPARSED_BLOCK,
	MESSAGE,
	IDLE
}

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
		if (!item)
			return undefined

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

function Print(type: ProcessMessage, msg: string | number) {
	process.send ? process.send(new Message(type, msg)) : console.log(`${type} | ${msg}`)
}

async function readFileBlock(filename: string, fpath: string, start: number, end: number): Promise<string> {
	return await new Promise((resolve) => {
		const stream = fs.createReadStream(fpath, { start, end })
		const chunks: Buffer[] = []
		stream.on('data', chunk => chunks.push(Buffer.from(chunk)))
		stream.on('end', () => {
			stream.destroy()
			resolve(Buffer.concat(chunks).toString('utf-8'))
		})
	})
}

function createBlocks(filename: string, data: string): CodeBlock[] {
	let blockId = 0
	let mutableData = Array.from(data)

	const result: CodeBlock[] = []
	while (PARTIAL_FILE_PARSING && mutableData.length > BLOCK_SIZE)
		result.push(new CodeBlock(filename, mutableData.splice(0, BLOCK_SIZE).join(''), blockId++))
	result.push(new CodeBlock(filename, mutableData.join(''), blockId++))
	return result
}	

function readFileData(filename: string, data: string): File {
	return {
		filename,
		size: data.length,
		codeBlocks: createBlocks(filename, data)
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
	parentPort.postMessage(new Message(WorkerMessage.MESSAGE, `Parsing ${job.jobData.filename}`));
	const hashes = parser.ParseSingle(job.jobData.filename, job.jobData.block, job.jobId % UPDATE_BREAK_POINT == 0)
	parentPort.postMessage(
		new Message(
			WorkerMessage.MESSAGE, 
			`Finished parsing file ${job.jobData.filename}. Number of methods found: ${hashes.length}`
		)
	);

	// substitute for actual unparsed data
	const unparsedData = ''
	const unparsedCodeBlock = unparsedData ? new CodeBlock(job.jobData.filename, unparsedData, job.jobData.blockId) : undefined
	return [hashes, unparsedCodeBlock];
}

class WorkerPool<TResult> extends EventEmitter {
	private _workers: Set<Worker>;
	private _jobs: Queue<Job<CodeBlock>>;
	private _unparsedBlocks: Map<string, CodeBlock[]>
	private _handledBreakpoint: number = 0
	private _totalJobs: number = 0
	private _processed: number = 0
	private _processing: Set<string>
	private _result: TResult[][];
	private static _isClosed: boolean = false

	constructor(genericData: any, threadCount: number) {
		super()

		this._workers = new Set();
		this._jobs = new Queue();
		this._unparsedBlocks = new Map()
		this._processing = new Set()

		this._result = [];

		for (let i = 0; i < threadCount; i++) 
			this._workers.add(new Worker(__filename, { workerData: genericData }));

		this.initialize()
	}

	public AddJob(data: CodeBlock) {
		this._jobs.enqueue(Job.Create(data));
		this._totalJobs++
	}

	public static Close() {
		this._isClosed = true
	}

	static get IsClosed() {
		return this._isClosed
	}

	private initialize() {
		const self = this

		self.on('start', () => {
			self._workers.forEach(worker => {
				if (self._jobs.length > 0) {
					const job = self._jobs.dequeue()
					self._processing.add(job.jobData.filename)
					worker.postMessage(job);
				}
			})
		})

		
		self._workers.forEach((worker) => {
			worker.on('error', err => { throw err });
			worker.on('exit', () => {
				self._workers.delete(worker);
				if (self._workers.size == 0)
					self.emit('done', self._result.flat())
			});
			worker.on('message', (message) => {
				switch (message.type) {
					case WorkerMessage.HASHES:

						const { filename, hashes } = message.data
						self._result.push(hashes);

						self._processed++
						self._processing.delete(filename)

						if (self._processed % UPDATE_BREAK_POINT == 0 && self._handledBreakpoint !== self._processed) {
							Print(ProcessMessage.UPDATE_STMT, self._processed);
							self._handledBreakpoint = self._processed
						}
						
						const job = this._jobs.dequeue()
						if (job) self._processing.add(job.jobData.filename)
						worker.postMessage(job);
						break;
					
					case WorkerMessage.UNPARSED_BLOCK:
						if (!self._unparsedBlocks.has(message.data.filename))
							self._unparsedBlocks.set(message.data.filename, [])
						self._unparsedBlocks.get(message.data.filename).push(message.data)
						if (self._unparsedBlocks.get(message.data.filename).length > 1) {
							const newBlocks = ConcatCodeBlocks(message.data.fielname, self._unparsedBlocks.get(message.data.filename))
							newBlocks.codeBlocks.forEach(block => this.AddJob(block))
						}
						break;
					
					case WorkerMessage.IDLE:
						if (WorkerPool.IsClosed && self._jobs.length == 0 && self._processing.size == 0)
							worker.emit('exit')
						else 
							self.emit('empty')
						worker.postMessage(self._jobs.dequeue())
						break

					case WorkerMessage.MESSAGE:
						Print(ProcessMessage.PRINT_STMT, message.data)
						break;
						
				}
			});
		})
	}

	public async Process<K = TResult[]>(finishCallback?: (result: TResult[]) => K): Promise<K> {
		const self = this
		return new Promise((resolve) => {
			self.on('done', () => {
				if (finishCallback) resolve(finishCallback(self._result.flat()))
				else resolve(self._result.flat() as K)
			})
		})
	}
}


(async () => {
	if (isMainThread) {
		let workerPool: WorkerPool<HashData>
		let language: Language
		let basePath: string
		let threadCount: number
		let dataSent: boolean = false

		process.on('message', async (incoming: Message<ParentMessage, ProcessData>) => {
			switch (incoming.type) {
				case ParentMessage.DATA:
					let files: ParseableFile[]
					({ language, threadCount, basePath, files } = incoming.data)

					if (!workerPool) {
						workerPool = new WorkerPool<HashData>({ basePath, language }, threadCount)
						workerPool.on('empty', () => {
							if (!WorkerPool.IsClosed) 
								process.send(new Message(ProcessMessage.INPUT_REQUESTED))
						})
						workerPool.on('done', (results) => {
							if (!dataSent) process.send(new Message(ProcessMessage.DATA, results))
							dataSent = true
						})
					}

					const data = files.map(({ filename, filedata }) => readFileData(filename, filedata))
					data.map(d => d.codeBlocks).flat().forEach(c => workerPool.AddJob(c))
					workerPool.emit('start')
					break

				case ParentMessage.DATA_END:
					WorkerPool.Close()
					break;

				case ParentMessage.EXIT:
					process.exit(0)
			}
		})

		

	} else {
		const { language, basePath } = workerData as { language: Language, basePath: string };

		let parser: IParser;
		if (!parser) 
			parser = new (ParserConstructors.get(language))(basePath, MIN_METHOD_LINES, MIN_FUNCTION_CHARS, language);

		parentPort.on('message', async (incoming: Job<CodeBlock> |  undefined) => {
			if (!incoming) {
				parentPort.postMessage(new Message(WorkerMessage.IDLE))
				return
			}

			const [hashes, unparsedCodeBlock] = await parse(incoming, parser)
			if (unparsedCodeBlock) 
				parentPort.postMessage(new Message(WorkerMessage.UNPARSED_BLOCK, unparsedCodeBlock))
			parentPort.postMessage(new Message(WorkerMessage.HASHES, { filename: incoming.jobData.filename, hashes}));
		});
	}
})();
