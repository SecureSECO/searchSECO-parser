/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * � Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MIN_FUNCTION_CHARS, MIN_METHOD_LINES, ParserConstructors } from './src/Parser';
import HashData from './src/HashData';
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import fs from 'fs';
import path from 'path';
import { IParser, BATCH_SIZE } from './src/ParserBase';

type Item = [string, string];
type Job = {
	job: Item;
	id: number;
};
type Batch = Item[];

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray<T>(array: T[]) {
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

/**
 * The parse function each individual worker thread uses
 * @param batch The batch to process
 * @param basePath The base path of the directory to parse
 * @param lang The target language
 * @returns A HashData array containing function information
 */
function parse({ job: [filename, data], id }: Job, parser: IParser): HashData[] {
	const hashes: HashData[] = [];

	parentPort.postMessage(`Parsing ${filename}`);
	hashes.push(...parser.ParseSingle(filename, data, id % BATCH_SIZE == 0));
	parentPort.postMessage(`Finished parsing file ${filename}. Number of methods found: ${hashes.length}`);

	return hashes;
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

class WorkerPool {
	private _workers: Set<Worker>;
	private _jobs: Queue<Job>;
	private _result: HashData[][];

	constructor(threadCount: number, basePath: string, lang: string) {
		this._workers = new Set<Worker>();
		this._jobs = new Queue<Job>();
		this._result = [];

		// initialize worker pool
		for (let i = 0; i < threadCount; i++) {
			const worker = new Worker(__filename, { workerData: { lang, basePath } });
			this._workers.add(worker);
		}
	}

	public AddJobs(jobs: Item[]) {
		// shuffle jobs for a (hopefully) even load distribution
		shuffleArray(jobs);
		jobs.forEach((job, idx) => {
			this._jobs.enqueue({ job, id: idx });
		});
	}

	public Process(callback: (result: HashData[]) => void) {
		const self = this;
		self._workers.forEach((worker) => {
			worker.on('error', (err) => {
				throw err;
			});
			worker.on('exit', () => {
				self._workers.delete(worker);
				if (self._workers.size == 0) callback(self._result.flat());
			});
			worker.on('message', (incoming) => {
				if (typeof incoming !== 'object') Message(incoming);
				else {
					if (self._jobs.length % BATCH_SIZE == 0 && self._jobs.length != 0) {
						Message(self._jobs.length.toString());
					}
					self._result.push(...incoming);
					worker.postMessage(self._jobs.dequeue());
				}
			});
			worker.postMessage(this._jobs.dequeue());
		});
	}
}

/**
 * Parses data in parallel using multithreading. Outputs the result to `stdio`.
 * @param data The file names to process
 * @param threadCount The number of worker threads to use
 * @param basePath The base path of the directory to parse
 * @param lang The target language
 */
async function ParallelParse(
	data: [string, string][],
	threadCount: number,
	basePath: string,
	lang: string
): Promise<void> {
	if (isMainThread) {
		const workerPool = new WorkerPool(threadCount, basePath, lang);
		workerPool.AddJobs(data);
		workerPool.Process((result: HashData[]) => {
			console.log(result.map((x) => JSON.stringify(x)).join('\n'));
		});
	} else {
		const { lang, basePath } = workerData;

		let parser: IParser;
		if (!parser) parser = new (ParserConstructors.get(lang))(basePath, MIN_METHOD_LINES, MIN_FUNCTION_CHARS, lang);

		parentPort.on('message', (job) => {
			if (job !== undefined) parentPort.postMessage(parse(job, parser));
			else {
				parentPort.close();
			}
		});
	}
}

(async () => {
	const language = process.argv[2];
	const threadCount = +process.argv[3];
	const basePath = process.argv[4];
	const filenames = process.argv.slice(5);

	const data: [string, string][] = filenames.map((filename) => [
		filename,
		fs.readFileSync(path.join(basePath, filename), 'utf-8'),
	]);

	ParallelParse(data, threadCount, basePath, language);
})();
