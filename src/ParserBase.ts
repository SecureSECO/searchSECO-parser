import HashData from "./HashData"
import path from 'path'

/**
 * The interface each language parser must implement
 */
export interface IParser {
    /**
     * The files pending to be parsed.
     * @param fileName stores the name of the file
     * @param basePath stores the base directory path
     * @param data stores the string data contained in the file
     */
    readonly buffer: { fileName: string, basePath: string }[]

    /**
     * Parses the files stored in the buffer.
     * @returns A promise which resolves to a HashData array
     */
    Parse(): Promise<HashData[]>

    /**
     * Adds a file to the buffer.
     * @param data The filedata to store
     * @param basePath The base path of the root directory
     * @param fileName The fileName to store
     */
    AddFile(fileName: string, basePath: string): void
}

/** 
 * The parser base encapsulating common functionality between all language parsers.
 * Each language parser deriving from this base has to implement `parseSingle()` themselves.
 */
export abstract class ParserBase implements IParser {
    public readonly buffer: { fileName: string, basePath: string }[] = []

    public AddFile(fileName: string, basePath: string): void {
        this.buffer.push({fileName, basePath})
    }

    /**
     * Parses a single file.
     * @param basePath The root directory
     * @param fileName The filename
     * @returns a `HashData` array describing each method in the file.
     */
    protected abstract parseSingle(basePath: string, fileName: string): Promise<HashData[]>;

    public async Parse(): Promise<HashData[]> {
        const result: HashData[] = []
        return Promise.resolve().then(async () => {
            await Promise.all(this.buffer.map(async ({ fileName, basePath }) => {
                const singleResult = await this.parseSingle(basePath, fileName)
                result.push(...singleResult)
            }))
            this.clear()
            return result
        })
    }

    /**
     * Clears the file buffer
     */
    private clear(): void {
        this.buffer.length = 0
    }
}
