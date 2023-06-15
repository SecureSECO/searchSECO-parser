import HashData from "../../HashData";
import { ParserBase } from "../../ParserBase";
import { ANTLRInputStream, CommonTokenStream, TokenStreamRewriter } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { JavaScriptLexer } from "./lib/JavaScriptLexer";
import { JavaScriptParser, ProgramContext } from "./lib/JavaScriptParser"
import JSListener from "./lib/JavaScriptParserListenerDerived";
import Logger from "../../searchSECO-logger/src/Logger";
import fs from 'fs'
import path from 'path'

/**
 * The implementation of a Javascript parser. This parser inherits from `ParserBase`.
 */
export default class Javascript extends ParserBase {
    private _minMethodSize: number
    private _minFunctionChars: number

    constructor(basePath: string, minMethodSize: number, minFunctionChars: number) {
        super(basePath)
        this._minMethodSize = minMethodSize
        this._minFunctionChars = minFunctionChars
    }

    protected override parseSingle(basePath: string, fileName: string): Promise<HashData[]> {
        let data = ''
        try {
            data = fs.readFileSync(path.join(basePath, fileName), 'utf-8')
        } catch(e) {
            Logger.Debug(`Cannot read file ${fileName}. Skipping`, Logger.GetCallerLocation())
            return
        }

        const chars = new ANTLRInputStream(data)
        const lexer = new JavaScriptLexer(chars)
        const tokens = new CommonTokenStream(lexer)

        try {
            tokens.fill()
        } catch(e) {
            Logger.Warning(`Error while tokenizing file: ${fileName}, skipping. Error: ${e}`, Logger.GetCallerLocation())
            return Promise.resolve([])
        }

        const parser = new JavaScriptParser(tokens)
        parser.removeErrorListeners()
        const rewriter = new TokenStreamRewriter(tokens)

        parser.buildParseTree = true

        let tree: ProgramContext
        try {
            tree = parser.program()
        } catch (e) {
            Logger.Warning(`Error while walking file: ${fileName}, skipping. Error: ${e}`, Logger.GetCallerLocation())
            return Promise.resolve([])
        }

        const listener = new JSListener(rewriter, fileName, this._minMethodSize, this._minFunctionChars)

        ParseTreeWalker.DEFAULT.walk(listener, tree)

        const hashes = listener.GetData()
        Logger.Debug(`Finished parsing file ${fileName}. Number of functions found: ${hashes.length}`, Logger.GetCallerLocation())
        return Promise.resolve(hashes)
    }
}

