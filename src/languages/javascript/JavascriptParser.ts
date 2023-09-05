/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * � Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import HashData from '../../HashData';
import { ParserBase } from '../../ParserBase';
import { ANTLRInputStream, CommonTokenStream, TokenStreamRewriter } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { JavaScriptLexer } from './lib/JavaScriptLexer';
import { JavaScriptParser, ProgramContext } from './lib/JavaScriptParser';
import JSListener from './lib/JavaScriptParserListenerDerived';
import Logger from '../../searchSECO-logger/src/Logger';
import { Language } from '../../Parser';

/**
 * The implementation of a Javascript parser. This parser inherits from `ParserBase`.
 */
export default class JavascriptParser extends ParserBase {
	private _minMethodSize: number;
	private _minMethodChars: number;

	constructor(basePath: string, minMethodSize: number, minMethodChars: number) {
		super(basePath, 'Javascript Parser', Language.JS);
		this._minMethodSize = minMethodSize;
		this._minMethodChars = minMethodChars;
	}

	public override ParseSingle(fileName: string, data: string, clearCache: boolean): HashData[] {
		const chars = new ANTLRInputStream(data);
		const lexer = new JavaScriptLexer(chars);
		const tokens = new CommonTokenStream(lexer);

		try {
			tokens.fill();
		} catch (e) {
			Logger.Warning(`Error while tokenizing file: ${fileName}, skipping. Error: ${e}`, Logger.GetCallerLocation());
			return [];
		}

		const parser = new JavaScriptParser(tokens);
		parser.removeErrorListeners();
		const rewriter = new TokenStreamRewriter(tokens);

		parser.buildParseTree = true;

		let tree: ProgramContext;
		try {
			tree = parser.program();
		} catch (e) {
			Logger.Warning(`Error while walking file: ${fileName}, skipping. Error: ${e}`, Logger.GetCallerLocation());
			return [];
		}

		const listener = new JSListener(rewriter, fileName, this._minMethodSize, this._minMethodChars);

		ParseTreeWalker.DEFAULT.walk(listener, tree);

		const hashes = listener.GetData();

		tree = undefined;

		if (clearCache) {
			lexer.atn.clearDFA();
			parser.atn.clearDFA();
		}

		return hashes;
	}
}
