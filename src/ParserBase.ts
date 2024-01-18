/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * � Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import HashData from './HashData';
import { Language } from './Parser';
import Logger from './searchSECO-logger/src/Logger';
import { fork } from 'child_process';
import path from 'path';

export const BATCH_SIZE = 10;
export const PARALLEL_BATCH_SIZE = 100;
export const UPDATE_BREAK_POINT = 25;

export class Message<TMsg, TData = undefined> {
	public type: TMsg;
	public data: TData;
	constructor(type: TMsg, data?: TData) {
		(this.type = type), (this.data = data);
	}
}

export const enum ParentMessage {
	DATA,
	DATA_END,
	EXIT,
}

export const enum ProcessMessage {
	PRINT_STMT = 'MESSAGE',
	UPDATE_STMT = 'UPDATE',
	DATA = 'DATA',
	INPUT_REQUESTED = 'INPUT',
}

export type ParseableFile = {
	filename: string;
	filedata: string;
};

export class ProcessData {
	public language: Language;
	public threadCount: number;
	public basePath: string;
	public files: ParseableFile[];
	constructor(language: Language, threadCount: number, basePath: string, files: ParseableFile[]) {
		this.language = language;
		this.threadCount = threadCount;
		this.basePath = basePath;
		this.files = files;
	}

	public Slice(start: number, end: number) {
		return new ProcessData(this.language, this.threadCount, this.basePath, this.files.slice(start, end));
	}
}

/**
 * The interface each language parser must implement
 */
export interface IParser {
	readonly buffer: Map<string, string>;
	readonly basePath: string;
	readonly language: Language;

	Parse(options?: { batchSize: number }): Promise<HashData[]>;
	ParallelParse(options: { threadCount: number }): Promise<HashData[]>;
	ParseSingle(fileName: string, data: string, clearCache?: boolean): HashData[];

	AddFile(fileName: string, data: string): void;
}

export interface ParserConstructor<T> {
	new (basePath: string, minMethodSize: number, minMethodChars: number, language?: string): T;
}

/**
 * The parser base encapsulating common functionality between all language parsers.
 * Each language parser deriving from this base has to implement `parseSingle()` themselves.
 */
export abstract class ParserBase implements IParser {
	public readonly buffer = new Map<string, string>();
	public readonly basePath: string;
	public readonly name: string;
	public readonly language: Language;

	constructor(basePath: string, name: string, lang: Language) {
		this.basePath = basePath;
		this.name = name;
		this.language = lang;
	}

	public AddFile(fileName: string, data: string): void {
		this.buffer.set(fileName, data);
	}

	/**
	 * Parses a single file.
	 * @param basePath The root directory
	 * @param fileName The filename
	 * @returns a `HashData` array describing each method in the file.
	 */
	public abstract ParseSingle(fileName: string, data: string, clearCache: boolean): HashData[];

	/**
	 * Parses the buffer pseudo-parallel. It uses the `Promise` API to await each parse process and returns the accumulated result
	 * @param param0
	 * @returns
	 */
	public async Parse({ batchSize } = { batchSize: BATCH_SIZE }): Promise<HashData[]> {
		if (this.buffer.size == 0) return [];

		const accumulator: HashData[] = [];
		const bufferArray = Array.from(this.buffer);

		const originalSize = bufferArray.length;
		while (bufferArray.length > 0) {
			const batch = bufferArray.splice(0, batchSize);
			const promises = batch.map(([fileName, data], idx) => {
				// clear antlr cache at the end of the batch
				Logger.Debug(`Parsing ${fileName}`, Logger.GetCallerLocation());
				const clearCache = idx == batchSize - 1;
				const hashes = this.ParseSingle(fileName, data, clearCache);
				Logger.Debug(
					`Finished parsing file ${fileName}. Number of methods found: ${hashes.length}`,
					Logger.GetCallerLocation()
				);
				return hashes;
			});
			const parsed = await Promise.all(promises);
			Logger.Info(
				`${this.name}: ${(100 - (bufferArray.length / originalSize) * 100).toFixed(2)}% done`,
				Logger.GetCallerLocation()
			);
			accumulator.push(...parsed.flat());
		}
		return accumulator;
	}

	/**
	 * Parses the buffer in parallel
	 * @param threadCount The number of worker threads to use
	 * @returns A HashData array containing the function information
	 */
	public async ParallelParse({ threadCount }: { threadCount: number }): Promise<HashData[]> {
		if (this.buffer.size == 0) return [];

		const fileArray = Array.from(this.buffer).map(([filename, filedata]) => ({ filename, filedata }));

		const threads = threadCount >= this.buffer.size ? this.buffer.size : threadCount;
		Logger.Debug(`Parsing ${this.language.toLowerCase()} with ${threads} threads`, Logger.GetCallerLocation());

		const data = new ProcessData(this.language, threads, this.basePath, fileArray);

		return await this.spawnParallelParser(data);
	}

	private spawnParallelParser(data: ProcessData): Promise<HashData[]> {
		const originalSize = data.files.length;
		let batchStart = 0;

		return new Promise((resolve, reject) => {
			const process = fork(path.join(__dirname, '../parallel.js'));

			const batches: ProcessData[] = [];
			while (batchStart < originalSize) batches.push(data.Slice(batchStart, (batchStart += PARALLEL_BATCH_SIZE)));

			process.on('message', (msg: Message<ProcessMessage, unknown>) => {
				switch (msg.type) {
					case ProcessMessage.PRINT_STMT:
						Logger.Debug(msg.data as string, Logger.GetCallerLocation());
						break;

					case ProcessMessage.UPDATE_STMT:
						Logger.Info(
							`${this.name}: ${(((msg.data as number) / originalSize) * 100).toFixed(2)}% done`,
							Logger.GetCallerLocation()
						);
						break;

					case ProcessMessage.DATA:
						Logger.Info(`${this.name}: 100.00% done`, Logger.GetCallerLocation());
						process.send(new Message(ParentMessage.EXIT));
						resolve(msg.data as HashData[]);
						break;

					case ProcessMessage.INPUT_REQUESTED:
						if (batches.length == 0) process.send(new Message(ParentMessage.DATA_END));
						else process.send(new Message(ParentMessage.DATA, batches.pop()));
						break;
				}
			});

			process.on('error', (err) => {
				Logger.Error(err.toString(), Logger.GetCallerLocation());
				reject(err);
			});

			process.send(new Message(ParentMessage.DATA, batches.pop()));
		});
	}
}
