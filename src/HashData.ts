/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * � Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The HashData object to store data about parsed methods.
 */
export default class HashData {
	public Hash: string;
	public FileName: string;
	public MethodName: string;
	public LineNumber: number;
	public LineNumberEnd: number;
	public VulnCode = '';

	constructor(hash?: string, filename?: string, methodName?: string, lineNumber?: number, lineNumberEnd?: number) {
		this.Hash = hash || '';
		this.FileName = filename || '';
		this.MethodName = methodName || '';
		this.LineNumber = lineNumber || -1;
		this.LineNumberEnd = lineNumberEnd || -1;
	}

	public Equals(other: HashData): boolean {
		const thisValues = Object.values(this).map(x => x.toString())
		const otherValues = Object.values(other).map(x => x.toString())
		return thisValues.reduce((isSame, currVal, i) => isSame && currVal === otherValues[i],true)
	}
}
