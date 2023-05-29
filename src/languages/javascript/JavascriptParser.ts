import HashData from "../../HashData";
import { ParserBase } from "../../ParserBase";
import { ANTLRInputStream, CommonTokenStream, TokenStreamRewriter } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { JavaScriptLexer } from "./lib/JavaScriptLexer";
import { JavaScriptParser } from "./lib/JavaScriptParser"
import JSListener from "./lib/JavaScriptParserListenerDerived";

/**
 * The implementation of a Javascript parser. This parser inherits from `ParserBase`.
 */
export default class Javascript extends ParserBase {
    private _minMethodSize: number
    private _minFunctionChars: number

    constructor(minMethodSize: number, minFunctionChars: number) {
        super(false)
        this._minMethodSize = minMethodSize
        this._minFunctionChars = minFunctionChars
    }

    protected override parseSingle(data: string, filename: string): Promise<HashData[]> {
        const chars = new ANTLRInputStream(data)
        const lexer = new JavaScriptLexer(chars)
        const tokens = new CommonTokenStream(lexer)
        tokens.fill()

        const parser = new JavaScriptParser(tokens)
        const rewriter = new TokenStreamRewriter(tokens)

        parser.buildParseTree = true

        const tree = parser.program()
        const listener = new JSListener(rewriter, filename, this._minMethodSize, this._minFunctionChars)

        ParseTreeWalker.DEFAULT.walk(listener, tree)

        return Promise.resolve(listener.GetData())
    }
}

