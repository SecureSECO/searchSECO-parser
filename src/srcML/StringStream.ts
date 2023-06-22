/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



export default class StringStream {
    private _buffer: string
    private _lineNumber = 0
    private _readHead = 0

    constructor(initialBuffer = '') {
        this._buffer = initialBuffer
    }

    public Add(buffer: string) {
        this._buffer = this._buffer.concat(buffer)
    }

    public NextChar(): string {
        const char = this._buffer[this._readHead]
        this._readHead++
        return char
    }

    public Empty(): boolean {
        return this._readHead >= this._buffer.length - 1
    }

    public GetLastLineNumber(): number {
        return this._lineNumber
    }

    public GetDataUntil(breakOn: string[], removeWhiteSpace: boolean) : {
        output: string,
        brokeOn: string
    } {
        let output = ''
        while (this._readHead < this._buffer.length) {
            const next = this.NextChar()
            for (let i = 0; i < breakOn.length; i++)
                if (breakOn[i] === next) {
                    return {
                        output, 
                        brokeOn: next
                    }
                }
            if (next === "\n") {
                this._lineNumber++
                continue
            }
            if (removeWhiteSpace && (next === ' ' || next === '\r' || next === '\t'))
                continue
            output += next
        }
        return {
            output,
            brokeOn: ''
        }
    }
}
