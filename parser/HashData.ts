
/**
 * The HashData object to store data about parsed functions.
 */
export default class HashData {
    public Hash: string
    public FileName: string
    public FunctionName: string
    public LineNumber: number
    public LineNumberEnd: number

    constructor(hash?: string, filename?: string, functionName?: string, lineNumber?: number, lineNumberEnd?: number) {
        this.Hash = hash || ''
        this.FileName = filename || ''
        this.FunctionName = functionName || ''
        this.LineNumber = lineNumber || -1
        this.LineNumberEnd = lineNumberEnd || -1
    }
}
