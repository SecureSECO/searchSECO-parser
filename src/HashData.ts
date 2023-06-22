/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


/**
 * The HashData object to store data about parsed functions.
 */
export default class HashData {
    public Hash: string
    public FileName: string
    public FunctionName: string
    public LineNumber: number
    public LineNumberEnd: number
    public VulnCode = ''

    constructor(hash?: string, filename?: string, functionName?: string, lineNumber?: number, lineNumberEnd?: number) {
        this.Hash = hash || ''
        this.FileName = filename || ''
        this.FunctionName = functionName || ''
        this.LineNumber = lineNumber || -1
        this.LineNumberEnd = lineNumberEnd || -1
    }
}
