import HashData from "../../HashData";
import { ParserBase } from "../../ParserBase";
import { ANTLRInputStream, TokenStreamRewriter, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { Python3Lexer } from "./lib/Python3Lexer";
import { File_inputContext, Python3Parser } from "./lib/Python3Parser"
import Python3Listener from "./lib/Python3ListenerDerived";
import Logger from "../../searchSECO-logger/src/Logger";

/**
 * The implementation of a Python3 parser. This parser inherits from `ParserBase`.
 */
export default class Python extends ParserBase {
    private _minMethodSize: number
    private _minFunctionChars: number

    constructor(minMethodSize: number, minFunctionChars: number) {
        super(false)
        this._minMethodSize = minMethodSize
        this._minFunctionChars = minFunctionChars
    }

    protected override parseSingle(data: string, filename: string): Promise<HashData[]> {
        const chars = new ANTLRInputStream(data)
        const lexer = new Python3Lexer(chars)
        const tokens = new CommonTokenStream(lexer)

        try {
            tokens.fill()
        } catch(e) {
            Logger.Warning(`Error while tokenizing file: ${filename}, skipping. Error: ${e}`, Logger.GetCallerLocation())
            return Promise.resolve([])
        }

        const parser = new Python3Parser(tokens)
        const rewriter = new TokenStreamRewriter(tokens)

        parser.buildParseTree = true

        let tree: File_inputContext
        try {
            tree = parser.file_input()
        } catch (e) {
            Logger.Warning(`Error while walking file: ${filename}, skipping. Error: ${e}`, Logger.GetCallerLocation())
            return Promise.resolve([])
        }

        const listener = new Python3Listener(rewriter, filename, this._minMethodSize, this._minFunctionChars)

        ParseTreeWalker.DEFAULT.walk(listener, tree)

        const hashes = listener.GetData()
        Logger.Debug(`Finished parsing file ${filename}. Number of functions found: ${hashes.length}`, Logger.GetCallerLocation())
        return Promise.resolve(hashes)
    }
}

