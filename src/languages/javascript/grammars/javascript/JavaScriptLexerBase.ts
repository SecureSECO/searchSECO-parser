/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * � Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Lexer, Token, CharStream } from 'antlr4ts';
import { JavaScriptLexer } from '../../lib/JavaScriptLexer';

export default abstract class JavaScriptLexerBase extends Lexer {
	private scopeStrictModes: boolean[] = [];
	private lastToken: Token | null = null;
	private useStrictDefault = false;
	private useStrictCurrent = false;
	private templateDepth = 0;

	constructor(input: CharStream) {
		super(input);
		// this.scopeStrictModes = new Array();
		// this.lastToken = null;
		// this.useStrictDefault = false;
		// this.useStrictCurrent = false;
		// this.templateDepth = 0;
	}

	getStrictDefault() {
		return this.useStrictDefault;
	}

	setUseStrictDefault(value: boolean) {
		this.useStrictDefault = value;
		this.useStrictCurrent = value;
	}

	IsStrictMode() {
		return this.useStrictCurrent;
	}

	IsInTemplateString() {
		return this.templateDepth > 0;
	}

	getCurrentToken() {
		return this.nextToken();
	}

	nextToken() {
		const next = super.nextToken();

		if (next.channel === Token.DEFAULT_CHANNEL) {
			this.lastToken = next;
		}
		return next;
	}

	ProcessOpenBrace() {
		this.useStrictCurrent =
			this.scopeStrictModes.length > 0 && this.scopeStrictModes[this.scopeStrictModes.length - 1]
				? true
				: this.useStrictDefault;
		this.scopeStrictModes.push(this.useStrictCurrent);
	}

	ProcessCloseBrace() {
		this.useStrictCurrent = this.scopeStrictModes.length > 0 ? this.scopeStrictModes.pop() : this.useStrictDefault;
	}

	ProcessStringLiteral() {
		if (this.lastToken === null || this.lastToken.type === JavaScriptLexer.OpenBrace) {
			if (super.text === '"use strict"' || super.text === "'use strict'") {
				if (this.scopeStrictModes.length > 0) {
					this.scopeStrictModes.pop();
				}
				this.useStrictCurrent = true;
				this.scopeStrictModes.push(this.useStrictCurrent);
			}
		}
	}

	IncreaseTemplateDepth() {
		this.templateDepth++;
	}

	DecreaseTemplateDepth() {
		this.templateDepth--;
	}

	IsRegexPossible() {
		if (this.lastToken === null) {
			return true;
		}

		switch (this.lastToken.type) {
			case JavaScriptLexer.Identifier:
			case JavaScriptLexer.NullLiteral:
			case JavaScriptLexer.BooleanLiteral:
			case JavaScriptLexer.This:
			case JavaScriptLexer.CloseBracket:
			case JavaScriptLexer.CloseParen:
			case JavaScriptLexer.OctalIntegerLiteral:
			case JavaScriptLexer.DecimalLiteral:
			case JavaScriptLexer.HexIntegerLiteral:
			case JavaScriptLexer.StringLiteral:
			case JavaScriptLexer.PlusPlus:
			case JavaScriptLexer.MinusMinus:
				return false;
			default:
				return true;
		}
	}

	IsStartOfFile() {
		return this.lastToken === null;
	}
}
