import HashData from "../../HashData";
import { ParserBase } from "../../ParserBase";
import { ANTLRInputStream, TokenStreamRewriter, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { Python3Lexer } from "./lib/Python3Lexer";
import { Python3Parser } from "./lib/Python3Parser"
import Python3Listener from "./lib/Python3ListenerDerived";

/**
 * The implementation of a Python3 parser. This parser inherits from `ParserBase`.
 */
export default class Python extends ParserBase {
    constructor() {
        super(false)
    }

    protected override parseSingle(data: string, filename: string): Promise<HashData[]> {
        const chars = new ANTLRInputStream(data)
        const lexer = new Python3Lexer(chars)
        const tokens = new CommonTokenStream(lexer)
        tokens.fill()

        const parser = new Python3Parser(tokens)
        const rewriter = new TokenStreamRewriter(tokens)

        parser.buildParseTree = true

        const tree = parser.file_input()

        const listener = new Python3Listener(rewriter, filename, 0, 0)

        ParseTreeWalker.DEFAULT.walk(listener, tree)

        return Promise.resolve(listener.GetData()) 
    }
}

