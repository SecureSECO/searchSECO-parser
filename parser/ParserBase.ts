import HashData from "../../utils/HashData"

/**
 * The interface each language parser must implement
 */
export interface IParser {
    /**
     * The files pending to be parsed.
     * @param filename stores the name of the file
     * @param data stores the string data contained in the file
     */
    readonly buffer: { filename: string, filepath: string, data: string }[]

    /**
     * Parses the files stored in the buffer.
     * @returns A promise which resolves to a HashData array
     */
    Parse(): Promise<HashData[]>

    /**
     * Adds a file to the buffer.
     * @param data The filedata to store
     * @param filename The filename to store
     */
    AddFile(filename: string, filepath: string, data: string): void
}

/** 
 * The parser base encapsulating common functionality between all language parsers.
 * Each language parser deriving from this base has to implement `parseSingle()` themselves.
 */
export abstract class ParserBase implements IParser {
    public readonly buffer: { filename: string, filepath: string, data: string}[] = []
    private readonly _usePath: boolean

    constructor(usePath: boolean) {
        this._usePath = usePath
    }

    public AddFile(filename: string, filepath: string, data: string): void {
        this.buffer.push({filename, filepath, data})
    }

    /**
     * Parses a single file.
     * @param data The string data of the file
     * @param filename The filename
     * @returns a `HashData` array describing each method in the file.
     */
    protected abstract parseSingle(data: string, filename: string): Promise<HashData[]>;

    public async Parse(): Promise<HashData[]> {
        const result: HashData[] = []
        return Promise.resolve().then(async () => {
            await Promise.all(this.buffer.map(async ({ filename, filepath, data }) => {
                const singleResult = await this.parseSingle(data, this._usePath ? filepath : filename)
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
