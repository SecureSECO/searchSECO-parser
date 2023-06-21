/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import HashData from "../../HashData";
import { ParserBase } from "../../ParserBase";
import { ANTLRInputStream, TokenStreamRewriter, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { Python3Lexer } from "./lib/Python3Lexer";
import { File_inputContext, Python3Parser } from "./lib/Python3Parser"
import Python3Listener from "./lib/Python3ListenerDerived";
import Logger from "../../searchSECO-logger/src/Logger";
import fs from 'fs'
import path from 'path'

/**
 * The implementation of a Python3 parser. This parser inherits from `ParserBase`.
 */
export default class PythonParser extends ParserBase {
    private _minMethodSize: number
    private _minFunctionChars: number

    constructor(basePath: string, minMethodSize: number, minFunctionChars: number) {
        super(basePath)
        this._minMethodSize = minMethodSize
        this._minFunctionChars = minFunctionChars
    }

    protected override async parseSingle(basePath: string, fileName: string): Promise<HashData[]> {
        let data = ''
        try {
            data = fs.readFileSync(path.join(basePath, fileName), 'utf-8')
        } catch(e) {
            Logger.Debug(`Cannot read file ${fileName}. Skipping`, Logger.GetCallerLocation())
            return Promise.resolve([])
        }

        const chars = new ANTLRInputStream(data)
        const lexer = new Python3Lexer(chars)
        const tokens = new CommonTokenStream(lexer)

        try {
            tokens.fill()
        } catch(e) {
            Logger.Warning(`Error while tokenizing file: ${fileName}, skipping. Error: ${e}`, Logger.GetCallerLocation())
            return Promise.resolve([])
        }

        const parser = new Python3Parser(tokens)

        parser.removeErrorListeners()

        const rewriter = new TokenStreamRewriter(tokens)

        parser.buildParseTree = true

        let tree: File_inputContext
        try {
            tree = parser.file_input()
        } catch (e) {
            Logger.Warning(`Error while walking file: ${fileName}, skipping. Error: ${e}`, Logger.GetCallerLocation())
            return Promise.resolve([])
        }

        const listener = new Python3Listener(rewriter, fileName, this._minMethodSize, this._minFunctionChars)

        ParseTreeWalker.DEFAULT.walk(listener, tree)

        const hashes = listener.GetData()
        Logger.Debug(`Finished parsing file ${fileName}. Number of functions found: ${hashes.length}`, Logger.GetCallerLocation())
        return Promise.resolve(hashes)
    }
}

