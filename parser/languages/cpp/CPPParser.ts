import HashData from "../../../../utils/HashData";
import { ParserBase } from "../../ParserBase";
import { ANTLRInputStream, CommonTokenStream, TokenStreamRewriter } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { CPP14Lexer } from "./lib/CPP14Lexer";
import { CPP14Parser } from "./lib/CPP14Parser"
import CPP14Listener from "./lib/CPP14ParserListenerDerived";
import CPPListener from "./lib/CPP14ParserListenerDerived";


/**
 * The implementation of a Javascript parser. This parser inherits from `ParserBase`.
 */
export default class Javascript extends ParserBase {
    constructor() {
        super(false)
    }

    protected override parseSingle(data: string, filename: string): Promise<HashData[]> {
        const chars = new ANTLRInputStream(data)
        const lexer = new CPP14Lexer(chars)
        const tokens = new CommonTokenStream(lexer)
        tokens.fill()

        const parser = new CPP14Parser(tokens)
        const rewriter = new TokenStreamRewriter(tokens)

        parser.buildParseTree = true

        const tree = parser.translationUnit()

        console.log(tree.toStringTree(parser))

        const listener = new CPPListener(rewriter, filename, 0, 0)

        ParseTreeWalker.DEFAULT.walk(listener, tree)

        return Promise.resolve(listener.GetData())
    }
}

