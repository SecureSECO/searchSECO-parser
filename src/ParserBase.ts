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
import { spawn } from 'child_process';
import path from 'path';

export const BATCH_SIZE = 10;

/**
 * The interface each language parser must implement
 */
export interface IParser {
	/**
	 * The files pending to be parsed.
	 * @param fileName stores the name of the file
	 * @param basePath stores the base directory path
	 */
	readonly buffer: Map<string, string>;

	/**
	 * Base path of all files
	 */
	readonly basePath: string;

	readonly language: Language;
	/**
	 * Parses the files stored in the buffer.
	 * @returns A promise which resolves to a HashData array
	 */
	Parse(options?: { batchSize: number }): Promise<HashData[]>;
	ParallelParse(options: { threadCount: number }): Promise<HashData[]>;
	ParseSingle(fileName: string, data: string, clearCache?: boolean): HashData[];

	/**
	 * Adds a file to the buffer.
	 * @param fileName The fileName to store
	 * @param basePath The base path of the root directory
	 */
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

		const threads = threadCount >= this.buffer.size ? this.buffer.size : threadCount;
		Logger.Debug(`Parsing ${this.language.toLowerCase()} with ${threads} threads`, Logger.GetCallerLocation());

		const args: string[] = [];

		args.push(this.language, threads.toString(), `${this.basePath}`);

		Array.from(this.buffer).forEach(([file]) => {
			args.push(`${file}`);
		});

		const result = (await this._spawnParallelParsers(args)).split('\n').filter((x) => x);
		return result.map((res) => JSON.parse(res));
	}

	/**
	 * Spawns a child process with the specified arguments.
	 * @param args The command line arguments to give to the process
	 * @returns the `stdio` string of the process. Lines from `stdio` starting with '# ' will be handled as a print statement and will not be returned.
	 */
	private _spawnParallelParsers(args: string[]): Promise<string> {
		const originalSize = args.length - 3;
		let buffer = '';

		const TARGET_PATH = path.join(__dirname, '../../../../dist/modules/searchSECO-parser/parallel.js');
		return new Promise((resolve) => {
			const process = spawn('node', [TARGET_PATH, ...args]);
			process.stdout.on('data', (data: Buffer) => {
				const dataString = data.toString();
				if (dataString.startsWith('#')) {
					const messages = dataString
						.split('# ')
						.filter((x) => x)
						.map((x) => x.replace('\n', ''));
					messages.forEach((msg) => {
						if (!isNaN(Number(msg)))
							Logger.Info(
								`${this.name}: ${(100 - (Number(msg) / originalSize) * 100).toFixed(2)}% done`,
								Logger.GetCallerLocation()
							);
						else Logger.Debug(msg, Logger.GetCallerLocation());
					});
				} else {
					Logger.Info(`${this.name}: 100.00% done`, Logger.GetCallerLocation());
					buffer = dataString;
				}
			});

			process.on('close', () => {
				resolve(buffer);
			});

			process.on('error', (err) => {
				console.log(err);
			});
		});
	}

	/**
	 * Clears the file buffer
	 */
	private clear(): void {
		this.buffer.clear();
	}
}
