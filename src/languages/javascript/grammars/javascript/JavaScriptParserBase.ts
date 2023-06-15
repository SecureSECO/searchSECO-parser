/* eslint-disable @typescript-eslint/no-explicit-any */
import { Parser, Lexer, TokenStream } from 'antlr4ts';
import { JavaScriptParser } from '../../lib/JavaScriptParser';

export default abstract class JavaScriptParserBase extends Parser {

    constructor(input: TokenStream) {
        super(input);
    }

    p(str: any) {
        return this.prev(str);
    }

    prev(str: any) {
        return  this._input.LT(-1).text === str;
    }

    // Short form for next(String str)
    n(str: any)
    {
        return this.next(str);
    }

    // Whether the next token value equals to @param str
    next(str: any)
    {
        return  this._input.LT(1).text === str;
    }

    notLineTerminator() {
        return !this.here(JavaScriptParser.LineTerminator);
    }

    notOpenBraceAndNotFunction() {
        const nextTokenType = this._input.LT(1).type;
        return (
                nextTokenType !== JavaScriptParser.OpenBrace &&
                nextTokenType !== JavaScriptParser.Function_
               );
    }

    closeBrace() {
        return this._input.LT(1).type === JavaScriptParser.CloseBrace;
    }

    here(type: any) {
        const possibleIndexEosToken = this.currentToken.tokenIndex - 1;
        const ahead = this._input.get(possibleIndexEosToken);
        return ahead.channel === Lexer.HIDDEN && ahead.type === type;
    }

    lineTerminatorAhead() {
        let possibleIndexEosToken = this.currentToken.tokenIndex - 1;
        let ahead = this._input.get(possibleIndexEosToken);
        if (ahead.channel !== Lexer.HIDDEN) {
            return false;
        }
        if (ahead.type === JavaScriptParser.LineTerminator) {
            return true;
        }
        if (ahead.type === JavaScriptParser.WhiteSpaces) {
            possibleIndexEosToken = this.currentToken.tokenIndex - 2;
            ahead = this._input.get(possibleIndexEosToken);
        }
        const text = ahead.text??'';
        const type = ahead.type??'';
        return (
                (type === JavaScriptParser.MultiLineComment &&
                 (text.includes("\r") || text.includes("\n"))) ||
                type === JavaScriptParser.LineTerminator
               );
    }
}
