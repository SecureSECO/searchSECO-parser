// Generated from ./src/parser/languages/python3/grammars/Python3.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Python3Listener } from "./Python3Listener";
import { Python3Visitor } from "./Python3Visitor";


export class Python3Parser extends Parser {
	public static readonly STRING = 1;
	public static readonly NUMBER = 2;
	public static readonly INTEGER = 3;
	public static readonly DEF = 4;
	public static readonly RETURN = 5;
	public static readonly RAISE = 6;
	public static readonly FROM = 7;
	public static readonly IMPORT = 8;
	public static readonly AS = 9;
	public static readonly GLOBAL = 10;
	public static readonly NONLOCAL = 11;
	public static readonly ASSERT = 12;
	public static readonly IF = 13;
	public static readonly ELIF = 14;
	public static readonly ELSE = 15;
	public static readonly WHILE = 16;
	public static readonly FOR = 17;
	public static readonly IN = 18;
	public static readonly TRY = 19;
	public static readonly FINALLY = 20;
	public static readonly WITH = 21;
	public static readonly EXCEPT = 22;
	public static readonly LAMBDA = 23;
	public static readonly OR = 24;
	public static readonly AND = 25;
	public static readonly NOT = 26;
	public static readonly IS = 27;
	public static readonly NONE = 28;
	public static readonly TRUE = 29;
	public static readonly FALSE = 30;
	public static readonly CLASS = 31;
	public static readonly YIELD = 32;
	public static readonly DEL = 33;
	public static readonly PASS = 34;
	public static readonly CONTINUE = 35;
	public static readonly BREAK = 36;
	public static readonly ASYNC = 37;
	public static readonly AWAIT = 38;
	public static readonly NEWLINE = 39;
	public static readonly NAME = 40;
	public static readonly STRING_LITERAL = 41;
	public static readonly BYTES_LITERAL = 42;
	public static readonly DECIMAL_INTEGER = 43;
	public static readonly OCT_INTEGER = 44;
	public static readonly HEX_INTEGER = 45;
	public static readonly BIN_INTEGER = 46;
	public static readonly FLOAT_NUMBER = 47;
	public static readonly IMAG_NUMBER = 48;
	public static readonly DOT = 49;
	public static readonly ELLIPSIS = 50;
	public static readonly STAR = 51;
	public static readonly OPEN_PAREN = 52;
	public static readonly CLOSE_PAREN = 53;
	public static readonly COMMA = 54;
	public static readonly COLON = 55;
	public static readonly SEMI_COLON = 56;
	public static readonly POWER = 57;
	public static readonly ASSIGN = 58;
	public static readonly OPEN_BRACK = 59;
	public static readonly CLOSE_BRACK = 60;
	public static readonly OR_OP = 61;
	public static readonly XOR = 62;
	public static readonly AND_OP = 63;
	public static readonly LEFT_SHIFT = 64;
	public static readonly RIGHT_SHIFT = 65;
	public static readonly ADD = 66;
	public static readonly MINUS = 67;
	public static readonly DIV = 68;
	public static readonly MOD = 69;
	public static readonly IDIV = 70;
	public static readonly NOT_OP = 71;
	public static readonly OPEN_BRACE = 72;
	public static readonly CLOSE_BRACE = 73;
	public static readonly LESS_THAN = 74;
	public static readonly GREATER_THAN = 75;
	public static readonly EQUALS = 76;
	public static readonly GT_EQ = 77;
	public static readonly LT_EQ = 78;
	public static readonly NOT_EQ_1 = 79;
	public static readonly NOT_EQ_2 = 80;
	public static readonly AT = 81;
	public static readonly ARROW = 82;
	public static readonly ADD_ASSIGN = 83;
	public static readonly SUB_ASSIGN = 84;
	public static readonly MULT_ASSIGN = 85;
	public static readonly AT_ASSIGN = 86;
	public static readonly DIV_ASSIGN = 87;
	public static readonly MOD_ASSIGN = 88;
	public static readonly AND_ASSIGN = 89;
	public static readonly OR_ASSIGN = 90;
	public static readonly XOR_ASSIGN = 91;
	public static readonly LEFT_SHIFT_ASSIGN = 92;
	public static readonly RIGHT_SHIFT_ASSIGN = 93;
	public static readonly POWER_ASSIGN = 94;
	public static readonly IDIV_ASSIGN = 95;
	public static readonly SKIP_ = 96;
	public static readonly UNKNOWN_CHAR = 97;
	public static readonly INDENT = 98;
	public static readonly DEDENT = 99;
	public static readonly RULE_single_input = 0;
	public static readonly RULE_file_input = 1;
	public static readonly RULE_eval_input = 2;
	public static readonly RULE_decorator = 3;
	public static readonly RULE_decorators = 4;
	public static readonly RULE_decorated = 5;
	public static readonly RULE_async_funcdef = 6;
	public static readonly RULE_funcdef = 7;
	public static readonly RULE_funcbody = 8;
	public static readonly RULE_parameters = 9;
	public static readonly RULE_typedargslist = 10;
	public static readonly RULE_tfpdef = 11;
	public static readonly RULE_varargslist = 12;
	public static readonly RULE_vfpdef = 13;
	public static readonly RULE_stmt = 14;
	public static readonly RULE_simple_stmt = 15;
	public static readonly RULE_small_stmt = 16;
	public static readonly RULE_expr_stmt = 17;
	public static readonly RULE_expr_stmt_single = 18;
	public static readonly RULE_expr_stmt_multi = 19;
	public static readonly RULE_annassign = 20;
	public static readonly RULE_testlist_star_expr = 21;
	public static readonly RULE_augassign = 22;
	public static readonly RULE_del_stmt = 23;
	public static readonly RULE_pass_stmt = 24;
	public static readonly RULE_flow_stmt = 25;
	public static readonly RULE_break_stmt = 26;
	public static readonly RULE_continue_stmt = 27;
	public static readonly RULE_return_stmt = 28;
	public static readonly RULE_yield_stmt = 29;
	public static readonly RULE_raise_stmt = 30;
	public static readonly RULE_import_stmt = 31;
	public static readonly RULE_import_name = 32;
	public static readonly RULE_import_from = 33;
	public static readonly RULE_import_as_name = 34;
	public static readonly RULE_dotted_as_name = 35;
	public static readonly RULE_import_as_names = 36;
	public static readonly RULE_dotted_as_names = 37;
	public static readonly RULE_dotted_name = 38;
	public static readonly RULE_global_stmt = 39;
	public static readonly RULE_nonlocal_stmt = 40;
	public static readonly RULE_assert_stmt = 41;
	public static readonly RULE_compound_stmt = 42;
	public static readonly RULE_async_stmt = 43;
	public static readonly RULE_if_stmt = 44;
	public static readonly RULE_while_stmt = 45;
	public static readonly RULE_for_stmt = 46;
	public static readonly RULE_try_stmt = 47;
	public static readonly RULE_with_stmt = 48;
	public static readonly RULE_with_item = 49;
	public static readonly RULE_except_clause = 50;
	public static readonly RULE_suite = 51;
	public static readonly RULE_test = 52;
	public static readonly RULE_test_nocond = 53;
	public static readonly RULE_lambdef = 54;
	public static readonly RULE_lambdef_nocond = 55;
	public static readonly RULE_or_test = 56;
	public static readonly RULE_and_test = 57;
	public static readonly RULE_not_test = 58;
	public static readonly RULE_comparison = 59;
	public static readonly RULE_comp_op = 60;
	public static readonly RULE_star_expr = 61;
	public static readonly RULE_expr = 62;
	public static readonly RULE_xor_expr = 63;
	public static readonly RULE_and_expr = 64;
	public static readonly RULE_shift_expr = 65;
	public static readonly RULE_arith_expr = 66;
	public static readonly RULE_term = 67;
	public static readonly RULE_factor = 68;
	public static readonly RULE_power = 69;
	public static readonly RULE_atom_expr = 70;
	public static readonly RULE_funccall = 71;
	public static readonly RULE_atom = 72;
	public static readonly RULE_string = 73;
	public static readonly RULE_name = 74;
	public static readonly RULE_funccallname = 75;
	public static readonly RULE_testlist_comp = 76;
	public static readonly RULE_trailer = 77;
	public static readonly RULE_subscriptlist = 78;
	public static readonly RULE_subscript = 79;
	public static readonly RULE_sliceop = 80;
	public static readonly RULE_exprlist = 81;
	public static readonly RULE_testlist = 82;
	public static readonly RULE_dictorsetmaker = 83;
	public static readonly RULE_classdef = 84;
	public static readonly RULE_arglist = 85;
	public static readonly RULE_argument = 86;
	public static readonly RULE_comp_iter = 87;
	public static readonly RULE_comp_for = 88;
	public static readonly RULE_comp_if = 89;
	public static readonly RULE_encoding_decl = 90;
	public static readonly RULE_yield_expr = 91;
	public static readonly RULE_yield_arg = 92;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"single_input", "file_input", "eval_input", "decorator", "decorators", 
		"decorated", "async_funcdef", "funcdef", "funcbody", "parameters", "typedargslist", 
		"tfpdef", "varargslist", "vfpdef", "stmt", "simple_stmt", "small_stmt", 
		"expr_stmt", "expr_stmt_single", "expr_stmt_multi", "annassign", "testlist_star_expr", 
		"augassign", "del_stmt", "pass_stmt", "flow_stmt", "break_stmt", "continue_stmt", 
		"return_stmt", "yield_stmt", "raise_stmt", "import_stmt", "import_name", 
		"import_from", "import_as_name", "dotted_as_name", "import_as_names", 
		"dotted_as_names", "dotted_name", "global_stmt", "nonlocal_stmt", "assert_stmt", 
		"compound_stmt", "async_stmt", "if_stmt", "while_stmt", "for_stmt", "try_stmt", 
		"with_stmt", "with_item", "except_clause", "suite", "test", "test_nocond", 
		"lambdef", "lambdef_nocond", "or_test", "and_test", "not_test", "comparison", 
		"comp_op", "star_expr", "expr", "xor_expr", "and_expr", "shift_expr", 
		"arith_expr", "term", "factor", "power", "atom_expr", "funccall", "atom", 
		"string", "name", "funccallname", "testlist_comp", "trailer", "subscriptlist", 
		"subscript", "sliceop", "exprlist", "testlist", "dictorsetmaker", "classdef", 
		"arglist", "argument", "comp_iter", "comp_for", "comp_if", "encoding_decl", 
		"yield_expr", "yield_arg",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'def'", "'return'", "'raise'", 
		"'from'", "'import'", "'as'", "'global'", "'nonlocal'", "'assert'", "'if'", 
		"'elif'", "'else'", "'while'", "'for'", "'in'", "'try'", "'finally'", 
		"'with'", "'except'", "'lambda'", "'or'", "'and'", "'not'", "'is'", "'None'", 
		"'True'", "'False'", "'class'", "'yield'", "'del'", "'pass'", "'continue'", 
		"'break'", "'async'", "'await'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'.'", 
		"'...'", "'*'", "'('", "')'", "','", "':'", "';'", "'**'", "'='", "'['", 
		"']'", "'|'", "'^'", "'&'", "'<<'", "'>>'", "'+'", "'-'", "'/'", "'%'", 
		"'//'", "'~'", "'{'", "'}'", "'<'", "'>'", "'=='", "'>='", "'<='", "'<>'", 
		"'!='", "'@'", "'->'", "'+='", "'-='", "'*='", "'@='", "'/='", "'%='", 
		"'&='", "'|='", "'^='", "'<<='", "'>>='", "'**='", "'//='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "STRING", "NUMBER", "INTEGER", "DEF", "RETURN", "RAISE", "FROM", 
		"IMPORT", "AS", "GLOBAL", "NONLOCAL", "ASSERT", "IF", "ELIF", "ELSE", 
		"WHILE", "FOR", "IN", "TRY", "FINALLY", "WITH", "EXCEPT", "LAMBDA", "OR", 
		"AND", "NOT", "IS", "NONE", "TRUE", "FALSE", "CLASS", "YIELD", "DEL", 
		"PASS", "CONTINUE", "BREAK", "ASYNC", "AWAIT", "NEWLINE", "NAME", "STRING_LITERAL", 
		"BYTES_LITERAL", "DECIMAL_INTEGER", "OCT_INTEGER", "HEX_INTEGER", "BIN_INTEGER", 
		"FLOAT_NUMBER", "IMAG_NUMBER", "DOT", "ELLIPSIS", "STAR", "OPEN_PAREN", 
		"CLOSE_PAREN", "COMMA", "COLON", "SEMI_COLON", "POWER", "ASSIGN", "OPEN_BRACK", 
		"CLOSE_BRACK", "OR_OP", "XOR", "AND_OP", "LEFT_SHIFT", "RIGHT_SHIFT", 
		"ADD", "MINUS", "DIV", "MOD", "IDIV", "NOT_OP", "OPEN_BRACE", "CLOSE_BRACE", 
		"LESS_THAN", "GREATER_THAN", "EQUALS", "GT_EQ", "LT_EQ", "NOT_EQ_1", "NOT_EQ_2", 
		"AT", "ARROW", "ADD_ASSIGN", "SUB_ASSIGN", "MULT_ASSIGN", "AT_ASSIGN", 
		"DIV_ASSIGN", "MOD_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "LEFT_SHIFT_ASSIGN", 
		"RIGHT_SHIFT_ASSIGN", "POWER_ASSIGN", "IDIV_ASSIGN", "SKIP_", "UNKNOWN_CHAR", 
		"INDENT", "DEDENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Python3Parser._LITERAL_NAMES, Python3Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Python3Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Python3.g4"; }

	// @Override
	public get ruleNames(): string[] { return Python3Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Python3Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Python3Parser._ATN, this);
	}
	// @RuleVersion(0)
	public single_input(): Single_inputContext {
		let _localctx: Single_inputContext = new Single_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Python3Parser.RULE_single_input);
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 186;
				this.match(Python3Parser.NEWLINE);
				}
				break;
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 187;
				this.simple_stmt();
				}
				break;
			case Python3Parser.DEF:
			case Python3Parser.IF:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
			case Python3Parser.TRY:
			case Python3Parser.WITH:
			case Python3Parser.CLASS:
			case Python3Parser.ASYNC:
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 188;
				this.compound_stmt();
				this.state = 189;
				this.match(Python3Parser.NEWLINE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public file_input(): File_inputContext {
		let _localctx: File_inputContext = new File_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Python3Parser.RULE_file_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.TRY) | (1 << Python3Parser.WITH) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.YIELD - 32)) | (1 << (Python3Parser.DEL - 32)) | (1 << (Python3Parser.PASS - 32)) | (1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.ASYNC - 32)) | (1 << (Python3Parser.AWAIT - 32)) | (1 << (Python3Parser.NEWLINE - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (Python3Parser.ADD - 66)) | (1 << (Python3Parser.MINUS - 66)) | (1 << (Python3Parser.NOT_OP - 66)) | (1 << (Python3Parser.OPEN_BRACE - 66)) | (1 << (Python3Parser.AT - 66)))) !== 0)) {
				{
				this.state = 195;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.NEWLINE:
					{
					this.state = 193;
					this.match(Python3Parser.NEWLINE);
					}
					break;
				case Python3Parser.STRING:
				case Python3Parser.NUMBER:
				case Python3Parser.DEF:
				case Python3Parser.RETURN:
				case Python3Parser.RAISE:
				case Python3Parser.FROM:
				case Python3Parser.IMPORT:
				case Python3Parser.GLOBAL:
				case Python3Parser.NONLOCAL:
				case Python3Parser.ASSERT:
				case Python3Parser.IF:
				case Python3Parser.WHILE:
				case Python3Parser.FOR:
				case Python3Parser.TRY:
				case Python3Parser.WITH:
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.CLASS:
				case Python3Parser.YIELD:
				case Python3Parser.DEL:
				case Python3Parser.PASS:
				case Python3Parser.CONTINUE:
				case Python3Parser.BREAK:
				case Python3Parser.ASYNC:
				case Python3Parser.AWAIT:
				case Python3Parser.NAME:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.STAR:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
				case Python3Parser.AT:
					{
					this.state = 194;
					this.stmt();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 200;
			this.match(Python3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eval_input(): Eval_inputContext {
		let _localctx: Eval_inputContext = new Eval_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Python3Parser.RULE_eval_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.testlist();
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.NEWLINE) {
				{
				{
				this.state = 203;
				this.match(Python3Parser.NEWLINE);
				}
				}
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 209;
			this.match(Python3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decorator(): DecoratorContext {
		let _localctx: DecoratorContext = new DecoratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Python3Parser.RULE_decorator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(Python3Parser.AT);
			this.state = 212;
			this.dotted_name();
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.OPEN_PAREN) {
				{
				this.state = 213;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.AWAIT - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.ELLIPSIS - 38)) | (1 << (Python3Parser.STAR - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.POWER - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 214;
					this.arglist();
					}
				}

				this.state = 217;
				this.match(Python3Parser.CLOSE_PAREN);
				}
			}

			this.state = 220;
			this.match(Python3Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decorators(): DecoratorsContext {
		let _localctx: DecoratorsContext = new DecoratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Python3Parser.RULE_decorators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 222;
				this.decorator();
				}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === Python3Parser.AT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decorated(): DecoratedContext {
		let _localctx: DecoratedContext = new DecoratedContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Python3Parser.RULE_decorated);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.decorators();
			this.state = 231;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.CLASS:
				{
				this.state = 228;
				this.classdef();
				}
				break;
			case Python3Parser.DEF:
				{
				this.state = 229;
				this.funcdef();
				}
				break;
			case Python3Parser.ASYNC:
				{
				this.state = 230;
				this.async_funcdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public async_funcdef(): Async_funcdefContext {
		let _localctx: Async_funcdefContext = new Async_funcdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Python3Parser.RULE_async_funcdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(Python3Parser.ASYNC);
			this.state = 234;
			this.funcdef();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcdef(): FuncdefContext {
		let _localctx: FuncdefContext = new FuncdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Python3Parser.RULE_funcdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(Python3Parser.DEF);
			this.state = 237;
			this.name();
			this.state = 238;
			this.parameters();
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.ARROW) {
				{
				this.state = 239;
				this.match(Python3Parser.ARROW);
				this.state = 240;
				this.test();
				}
			}

			this.state = 243;
			this.match(Python3Parser.COLON);
			this.state = 244;
			this.funcbody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcbody(): FuncbodyContext {
		let _localctx: FuncbodyContext = new FuncbodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Python3Parser.RULE_funcbody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Python3Parser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.match(Python3Parser.OPEN_PAREN);
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (Python3Parser.NAME - 40)) | (1 << (Python3Parser.STAR - 40)) | (1 << (Python3Parser.POWER - 40)))) !== 0)) {
				{
				this.state = 249;
				this.typedargslist();
				}
			}

			this.state = 252;
			this.match(Python3Parser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedargslist(): TypedargslistContext {
		let _localctx: TypedargslistContext = new TypedargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Python3Parser.RULE_typedargslist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NAME:
				{
				this.state = 254;
				this.tfpdef();
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.ASSIGN) {
					{
					this.state = 255;
					this.match(Python3Parser.ASSIGN);
					this.state = 256;
					this.test();
					}
				}

				this.state = 267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 259;
						this.match(Python3Parser.COMMA);
						this.state = 260;
						this.tfpdef();
						this.state = 263;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.ASSIGN) {
							{
							this.state = 261;
							this.match(Python3Parser.ASSIGN);
							this.state = 262;
							this.test();
							}
						}

						}
						}
					}
					this.state = 269;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COMMA) {
					{
					this.state = 270;
					this.match(Python3Parser.COMMA);
					this.state = 301;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STAR:
						{
						this.state = 271;
						this.match(Python3Parser.STAR);
						this.state = 273;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.NAME) {
							{
							this.state = 272;
							this.tfpdef();
							}
						}

						this.state = 283;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 275;
								this.match(Python3Parser.COMMA);
								this.state = 276;
								this.tfpdef();
								this.state = 279;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.ASSIGN) {
									{
									this.state = 277;
									this.match(Python3Parser.ASSIGN);
									this.state = 278;
									this.test();
									}
								}

								}
								}
							}
							this.state = 285;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
						}
						this.state = 294;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.COMMA) {
							{
							this.state = 286;
							this.match(Python3Parser.COMMA);
							this.state = 292;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.POWER) {
								{
								this.state = 287;
								this.match(Python3Parser.POWER);
								this.state = 288;
								this.tfpdef();
								this.state = 290;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.COMMA) {
									{
									this.state = 289;
									this.match(Python3Parser.COMMA);
									}
								}

								}
							}

							}
						}

						}
						break;
					case Python3Parser.POWER:
						{
						this.state = 296;
						this.match(Python3Parser.POWER);
						this.state = 297;
						this.tfpdef();
						this.state = 299;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.COMMA) {
							{
							this.state = 298;
							this.match(Python3Parser.COMMA);
							}
						}

						}
						break;
					case Python3Parser.CLOSE_PAREN:
						break;
					default:
						break;
					}
					}
				}

				}
				break;
			case Python3Parser.STAR:
				{
				this.state = 305;
				this.match(Python3Parser.STAR);
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.NAME) {
					{
					this.state = 306;
					this.tfpdef();
					}
				}

				this.state = 317;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 309;
						this.match(Python3Parser.COMMA);
						this.state = 310;
						this.tfpdef();
						this.state = 313;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.ASSIGN) {
							{
							this.state = 311;
							this.match(Python3Parser.ASSIGN);
							this.state = 312;
							this.test();
							}
						}

						}
						}
					}
					this.state = 319;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				}
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COMMA) {
					{
					this.state = 320;
					this.match(Python3Parser.COMMA);
					this.state = 326;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.POWER) {
						{
						this.state = 321;
						this.match(Python3Parser.POWER);
						this.state = 322;
						this.tfpdef();
						this.state = 324;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.COMMA) {
							{
							this.state = 323;
							this.match(Python3Parser.COMMA);
							}
						}

						}
					}

					}
				}

				}
				break;
			case Python3Parser.POWER:
				{
				this.state = 330;
				this.match(Python3Parser.POWER);
				this.state = 331;
				this.tfpdef();
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COMMA) {
					{
					this.state = 332;
					this.match(Python3Parser.COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tfpdef(): TfpdefContext {
		let _localctx: TfpdefContext = new TfpdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Python3Parser.RULE_tfpdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.name();
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COLON) {
				{
				this.state = 338;
				this.match(Python3Parser.COLON);
				this.state = 339;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varargslist(): VarargslistContext {
		let _localctx: VarargslistContext = new VarargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Python3Parser.RULE_varargslist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NAME:
				{
				this.state = 342;
				this.vfpdef();
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.ASSIGN) {
					{
					this.state = 343;
					this.match(Python3Parser.ASSIGN);
					this.state = 344;
					this.test();
					}
				}

				this.state = 355;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 347;
						this.match(Python3Parser.COMMA);
						this.state = 348;
						this.vfpdef();
						this.state = 351;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.ASSIGN) {
							{
							this.state = 349;
							this.match(Python3Parser.ASSIGN);
							this.state = 350;
							this.test();
							}
						}

						}
						}
					}
					this.state = 357;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				}
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COMMA) {
					{
					this.state = 358;
					this.match(Python3Parser.COMMA);
					this.state = 389;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STAR:
						{
						this.state = 359;
						this.match(Python3Parser.STAR);
						this.state = 361;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.NAME) {
							{
							this.state = 360;
							this.vfpdef();
							}
						}

						this.state = 371;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 363;
								this.match(Python3Parser.COMMA);
								this.state = 364;
								this.vfpdef();
								this.state = 367;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.ASSIGN) {
									{
									this.state = 365;
									this.match(Python3Parser.ASSIGN);
									this.state = 366;
									this.test();
									}
								}

								}
								}
							}
							this.state = 373;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
						}
						this.state = 382;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.COMMA) {
							{
							this.state = 374;
							this.match(Python3Parser.COMMA);
							this.state = 380;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.POWER) {
								{
								this.state = 375;
								this.match(Python3Parser.POWER);
								this.state = 376;
								this.vfpdef();
								this.state = 378;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.COMMA) {
									{
									this.state = 377;
									this.match(Python3Parser.COMMA);
									}
								}

								}
							}

							}
						}

						}
						break;
					case Python3Parser.POWER:
						{
						this.state = 384;
						this.match(Python3Parser.POWER);
						this.state = 385;
						this.vfpdef();
						this.state = 387;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.COMMA) {
							{
							this.state = 386;
							this.match(Python3Parser.COMMA);
							}
						}

						}
						break;
					case Python3Parser.COLON:
						break;
					default:
						break;
					}
					}
				}

				}
				break;
			case Python3Parser.STAR:
				{
				this.state = 393;
				this.match(Python3Parser.STAR);
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.NAME) {
					{
					this.state = 394;
					this.vfpdef();
					}
				}

				this.state = 405;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 397;
						this.match(Python3Parser.COMMA);
						this.state = 398;
						this.vfpdef();
						this.state = 401;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.ASSIGN) {
							{
							this.state = 399;
							this.match(Python3Parser.ASSIGN);
							this.state = 400;
							this.test();
							}
						}

						}
						}
					}
					this.state = 407;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
				}
				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COMMA) {
					{
					this.state = 408;
					this.match(Python3Parser.COMMA);
					this.state = 414;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.POWER) {
						{
						this.state = 409;
						this.match(Python3Parser.POWER);
						this.state = 410;
						this.vfpdef();
						this.state = 412;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.COMMA) {
							{
							this.state = 411;
							this.match(Python3Parser.COMMA);
							}
						}

						}
					}

					}
				}

				}
				break;
			case Python3Parser.POWER:
				{
				this.state = 418;
				this.match(Python3Parser.POWER);
				this.state = 419;
				this.vfpdef();
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COMMA) {
					{
					this.state = 420;
					this.match(Python3Parser.COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public vfpdef(): VfpdefContext {
		let _localctx: VfpdefContext = new VfpdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Python3Parser.RULE_vfpdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Python3Parser.RULE_stmt);
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.simple_stmt();
				}
				break;
			case Python3Parser.DEF:
			case Python3Parser.IF:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
			case Python3Parser.TRY:
			case Python3Parser.WITH:
			case Python3Parser.CLASS:
			case Python3Parser.ASYNC:
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
				this.compound_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simple_stmt(): Simple_stmtContext {
		let _localctx: Simple_stmtContext = new Simple_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Python3Parser.RULE_simple_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.small_stmt();
			this.state = 436;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 432;
					this.match(Python3Parser.SEMI_COLON);
					this.state = 433;
					this.small_stmt();
					}
					}
				}
				this.state = 438;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.SEMI_COLON) {
				{
				this.state = 439;
				this.match(Python3Parser.SEMI_COLON);
				}
			}

			this.state = 442;
			this.match(Python3Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public small_stmt(): Small_stmtContext {
		let _localctx: Small_stmtContext = new Small_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Python3Parser.RULE_small_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				{
				this.state = 444;
				this.expr_stmt();
				}
				break;
			case Python3Parser.DEL:
				{
				this.state = 445;
				this.del_stmt();
				}
				break;
			case Python3Parser.PASS:
				{
				this.state = 446;
				this.pass_stmt();
				}
				break;
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.YIELD:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
				{
				this.state = 447;
				this.flow_stmt();
				}
				break;
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
				{
				this.state = 448;
				this.import_stmt();
				}
				break;
			case Python3Parser.GLOBAL:
				{
				this.state = 449;
				this.global_stmt();
				}
				break;
			case Python3Parser.NONLOCAL:
				{
				this.state = 450;
				this.nonlocal_stmt();
				}
				break;
			case Python3Parser.ASSERT:
				{
				this.state = 451;
				this.assert_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr_stmt(): Expr_stmtContext {
		let _localctx: Expr_stmtContext = new Expr_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Python3Parser.RULE_expr_stmt);
		try {
			this.state = 456;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 454;
				this.expr_stmt_single();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 455;
				this.expr_stmt_multi();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr_stmt_single(): Expr_stmt_singleContext {
		let _localctx: Expr_stmt_singleContext = new Expr_stmt_singleContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Python3Parser.RULE_expr_stmt_single);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.testlist_star_expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr_stmt_multi(): Expr_stmt_multiContext {
		let _localctx: Expr_stmt_multiContext = new Expr_stmt_multiContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Python3Parser.RULE_expr_stmt_multi);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.testlist_star_expr();
			this.state = 476;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.COLON:
				{
				this.state = 461;
				this.annassign();
				}
				break;
			case Python3Parser.ADD_ASSIGN:
			case Python3Parser.SUB_ASSIGN:
			case Python3Parser.MULT_ASSIGN:
			case Python3Parser.AT_ASSIGN:
			case Python3Parser.DIV_ASSIGN:
			case Python3Parser.MOD_ASSIGN:
			case Python3Parser.AND_ASSIGN:
			case Python3Parser.OR_ASSIGN:
			case Python3Parser.XOR_ASSIGN:
			case Python3Parser.LEFT_SHIFT_ASSIGN:
			case Python3Parser.RIGHT_SHIFT_ASSIGN:
			case Python3Parser.POWER_ASSIGN:
			case Python3Parser.IDIV_ASSIGN:
				{
				this.state = 462;
				this.augassign();
				this.state = 465;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.YIELD:
					{
					this.state = 463;
					this.yield_expr();
					}
					break;
				case Python3Parser.STRING:
				case Python3Parser.NUMBER:
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.AWAIT:
				case Python3Parser.NAME:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 464;
					this.testlist();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case Python3Parser.ASSIGN:
				{
				this.state = 472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 467;
					this.match(Python3Parser.ASSIGN);
					this.state = 470;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.YIELD:
						{
						this.state = 468;
						this.yield_expr();
						}
						break;
					case Python3Parser.STRING:
					case Python3Parser.NUMBER:
					case Python3Parser.LAMBDA:
					case Python3Parser.NOT:
					case Python3Parser.NONE:
					case Python3Parser.TRUE:
					case Python3Parser.FALSE:
					case Python3Parser.AWAIT:
					case Python3Parser.NAME:
					case Python3Parser.ELLIPSIS:
					case Python3Parser.STAR:
					case Python3Parser.OPEN_PAREN:
					case Python3Parser.OPEN_BRACK:
					case Python3Parser.ADD:
					case Python3Parser.MINUS:
					case Python3Parser.NOT_OP:
					case Python3Parser.OPEN_BRACE:
						{
						this.state = 469;
						this.testlist_star_expr();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 474;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Python3Parser.ASSIGN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annassign(): AnnassignContext {
		let _localctx: AnnassignContext = new AnnassignContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Python3Parser.RULE_annassign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(Python3Parser.COLON);
			this.state = 479;
			this.test();
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.ASSIGN) {
				{
				this.state = 480;
				this.match(Python3Parser.ASSIGN);
				this.state = 481;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testlist_star_expr(): Testlist_star_exprContext {
		let _localctx: Testlist_star_exprContext = new Testlist_star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Python3Parser.RULE_testlist_star_expr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				{
				this.state = 484;
				this.test();
				}
				break;
			case Python3Parser.STAR:
				{
				this.state = 485;
				this.star_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 495;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 488;
					this.match(Python3Parser.COMMA);
					this.state = 491;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STRING:
					case Python3Parser.NUMBER:
					case Python3Parser.LAMBDA:
					case Python3Parser.NOT:
					case Python3Parser.NONE:
					case Python3Parser.TRUE:
					case Python3Parser.FALSE:
					case Python3Parser.AWAIT:
					case Python3Parser.NAME:
					case Python3Parser.ELLIPSIS:
					case Python3Parser.OPEN_PAREN:
					case Python3Parser.OPEN_BRACK:
					case Python3Parser.ADD:
					case Python3Parser.MINUS:
					case Python3Parser.NOT_OP:
					case Python3Parser.OPEN_BRACE:
						{
						this.state = 489;
						this.test();
						}
						break;
					case Python3Parser.STAR:
						{
						this.state = 490;
						this.star_expr();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 497;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			}
			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 498;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public augassign(): AugassignContext {
		let _localctx: AugassignContext = new AugassignContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Python3Parser.RULE_augassign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			_la = this._input.LA(1);
			if (!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (Python3Parser.ADD_ASSIGN - 83)) | (1 << (Python3Parser.SUB_ASSIGN - 83)) | (1 << (Python3Parser.MULT_ASSIGN - 83)) | (1 << (Python3Parser.AT_ASSIGN - 83)) | (1 << (Python3Parser.DIV_ASSIGN - 83)) | (1 << (Python3Parser.MOD_ASSIGN - 83)) | (1 << (Python3Parser.AND_ASSIGN - 83)) | (1 << (Python3Parser.OR_ASSIGN - 83)) | (1 << (Python3Parser.XOR_ASSIGN - 83)) | (1 << (Python3Parser.LEFT_SHIFT_ASSIGN - 83)) | (1 << (Python3Parser.RIGHT_SHIFT_ASSIGN - 83)) | (1 << (Python3Parser.POWER_ASSIGN - 83)) | (1 << (Python3Parser.IDIV_ASSIGN - 83)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public del_stmt(): Del_stmtContext {
		let _localctx: Del_stmtContext = new Del_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Python3Parser.RULE_del_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.match(Python3Parser.DEL);
			this.state = 504;
			this.exprlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pass_stmt(): Pass_stmtContext {
		let _localctx: Pass_stmtContext = new Pass_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Python3Parser.RULE_pass_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.match(Python3Parser.PASS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_stmt(): Flow_stmtContext {
		let _localctx: Flow_stmtContext = new Flow_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Python3Parser.RULE_flow_stmt);
		try {
			this.state = 513;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.BREAK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 508;
				this.break_stmt();
				}
				break;
			case Python3Parser.CONTINUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 509;
				this.continue_stmt();
				}
				break;
			case Python3Parser.RETURN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 510;
				this.return_stmt();
				}
				break;
			case Python3Parser.RAISE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 511;
				this.raise_stmt();
				}
				break;
			case Python3Parser.YIELD:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 512;
				this.yield_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public break_stmt(): Break_stmtContext {
		let _localctx: Break_stmtContext = new Break_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Python3Parser.RULE_break_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this.match(Python3Parser.BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continue_stmt(): Continue_stmtContext {
		let _localctx: Continue_stmtContext = new Continue_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Python3Parser.RULE_continue_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(Python3Parser.CONTINUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_stmt(): Return_stmtContext {
		let _localctx: Return_stmtContext = new Return_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Python3Parser.RULE_return_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			this.match(Python3Parser.RETURN);
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.AWAIT - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.ELLIPSIS - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
				{
				this.state = 520;
				this.testlist();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yield_stmt(): Yield_stmtContext {
		let _localctx: Yield_stmtContext = new Yield_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Python3Parser.RULE_yield_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.yield_expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raise_stmt(): Raise_stmtContext {
		let _localctx: Raise_stmtContext = new Raise_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Python3Parser.RULE_raise_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.match(Python3Parser.RAISE);
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.AWAIT - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.ELLIPSIS - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
				{
				this.state = 526;
				this.test();
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.FROM) {
					{
					this.state = 527;
					this.match(Python3Parser.FROM);
					this.state = 528;
					this.test();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_stmt(): Import_stmtContext {
		let _localctx: Import_stmtContext = new Import_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Python3Parser.RULE_import_stmt);
		try {
			this.state = 535;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 533;
				this.import_name();
				}
				break;
			case Python3Parser.FROM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 534;
				this.import_from();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_name(): Import_nameContext {
		let _localctx: Import_nameContext = new Import_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Python3Parser.RULE_import_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.match(Python3Parser.IMPORT);
			this.state = 538;
			this.dotted_as_names();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_from(): Import_fromContext {
		let _localctx: Import_fromContext = new Import_fromContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Python3Parser.RULE_import_from);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 540;
			this.match(Python3Parser.FROM);
			this.state = 553;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS) {
					{
					{
					this.state = 541;
					_la = this._input.LA(1);
					if (!(_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 546;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 547;
				this.dotted_name();
				}
				break;

			case 2:
				{
				this.state = 549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 548;
					_la = this._input.LA(1);
					if (!(_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 551;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS);
				}
				break;
			}
			this.state = 555;
			this.match(Python3Parser.IMPORT);
			this.state = 562;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STAR:
				{
				this.state = 556;
				this.match(Python3Parser.STAR);
				}
				break;
			case Python3Parser.OPEN_PAREN:
				{
				this.state = 557;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 558;
				this.import_as_names();
				this.state = 559;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.NAME:
				{
				this.state = 561;
				this.import_as_names();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_as_name(): Import_as_nameContext {
		let _localctx: Import_as_nameContext = new Import_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Python3Parser.RULE_import_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this.name();
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.AS) {
				{
				this.state = 565;
				this.match(Python3Parser.AS);
				this.state = 566;
				this.name();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotted_as_name(): Dotted_as_nameContext {
		let _localctx: Dotted_as_nameContext = new Dotted_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Python3Parser.RULE_dotted_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this.dotted_name();
			this.state = 572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.AS) {
				{
				this.state = 570;
				this.match(Python3Parser.AS);
				this.state = 571;
				this.name();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_as_names(): Import_as_namesContext {
		let _localctx: Import_as_namesContext = new Import_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Python3Parser.RULE_import_as_names);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.import_as_name();
			this.state = 579;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 575;
					this.match(Python3Parser.COMMA);
					this.state = 576;
					this.import_as_name();
					}
					}
				}
				this.state = 581;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			}
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 582;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotted_as_names(): Dotted_as_namesContext {
		let _localctx: Dotted_as_namesContext = new Dotted_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Python3Parser.RULE_dotted_as_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.dotted_as_name();
			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.COMMA) {
				{
				{
				this.state = 586;
				this.match(Python3Parser.COMMA);
				this.state = 587;
				this.dotted_as_name();
				}
				}
				this.state = 592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotted_name(): Dotted_nameContext {
		let _localctx: Dotted_nameContext = new Dotted_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Python3Parser.RULE_dotted_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.name();
			this.state = 598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.DOT) {
				{
				{
				this.state = 594;
				this.match(Python3Parser.DOT);
				this.state = 595;
				this.name();
				}
				}
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global_stmt(): Global_stmtContext {
		let _localctx: Global_stmtContext = new Global_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Python3Parser.RULE_global_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.match(Python3Parser.GLOBAL);
			this.state = 602;
			this.name();
			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.COMMA) {
				{
				{
				this.state = 603;
				this.match(Python3Parser.COMMA);
				this.state = 604;
				this.name();
				}
				}
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonlocal_stmt(): Nonlocal_stmtContext {
		let _localctx: Nonlocal_stmtContext = new Nonlocal_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Python3Parser.RULE_nonlocal_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this.match(Python3Parser.NONLOCAL);
			this.state = 611;
			this.name();
			this.state = 616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.COMMA) {
				{
				{
				this.state = 612;
				this.match(Python3Parser.COMMA);
				this.state = 613;
				this.name();
				}
				}
				this.state = 618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assert_stmt(): Assert_stmtContext {
		let _localctx: Assert_stmtContext = new Assert_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Python3Parser.RULE_assert_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this.match(Python3Parser.ASSERT);
			this.state = 620;
			this.test();
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 621;
				this.match(Python3Parser.COMMA);
				this.state = 622;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_stmt(): Compound_stmtContext {
		let _localctx: Compound_stmtContext = new Compound_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Python3Parser.RULE_compound_stmt);
		try {
			this.state = 634;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 625;
				this.if_stmt();
				}
				break;
			case Python3Parser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 626;
				this.while_stmt();
				}
				break;
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 627;
				this.for_stmt();
				}
				break;
			case Python3Parser.TRY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 628;
				this.try_stmt();
				}
				break;
			case Python3Parser.WITH:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 629;
				this.with_stmt();
				}
				break;
			case Python3Parser.DEF:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 630;
				this.funcdef();
				}
				break;
			case Python3Parser.CLASS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 631;
				this.classdef();
				}
				break;
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 632;
				this.decorated();
				}
				break;
			case Python3Parser.ASYNC:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 633;
				this.async_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public async_stmt(): Async_stmtContext {
		let _localctx: Async_stmtContext = new Async_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Python3Parser.RULE_async_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(Python3Parser.ASYNC);
			this.state = 640;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.DEF:
				{
				this.state = 637;
				this.funcdef();
				}
				break;
			case Python3Parser.WITH:
				{
				this.state = 638;
				this.with_stmt();
				}
				break;
			case Python3Parser.FOR:
				{
				this.state = 639;
				this.for_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Python3Parser.RULE_if_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this.match(Python3Parser.IF);
			this.state = 643;
			this.test();
			this.state = 644;
			this.match(Python3Parser.COLON);
			this.state = 645;
			this.suite();
			this.state = 653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.ELIF) {
				{
				{
				this.state = 646;
				this.match(Python3Parser.ELIF);
				this.state = 647;
				this.test();
				this.state = 648;
				this.match(Python3Parser.COLON);
				this.state = 649;
				this.suite();
				}
				}
				this.state = 655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.ELSE) {
				{
				this.state = 656;
				this.match(Python3Parser.ELSE);
				this.state = 657;
				this.match(Python3Parser.COLON);
				this.state = 658;
				this.suite();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public while_stmt(): While_stmtContext {
		let _localctx: While_stmtContext = new While_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Python3Parser.RULE_while_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.match(Python3Parser.WHILE);
			this.state = 662;
			this.test();
			this.state = 663;
			this.match(Python3Parser.COLON);
			this.state = 664;
			this.suite();
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.ELSE) {
				{
				this.state = 665;
				this.match(Python3Parser.ELSE);
				this.state = 666;
				this.match(Python3Parser.COLON);
				this.state = 667;
				this.suite();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_stmt(): For_stmtContext {
		let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Python3Parser.RULE_for_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 670;
			this.match(Python3Parser.FOR);
			this.state = 671;
			this.exprlist();
			this.state = 672;
			this.match(Python3Parser.IN);
			this.state = 673;
			this.testlist();
			this.state = 674;
			this.match(Python3Parser.COLON);
			this.state = 675;
			this.suite();
			this.state = 679;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.ELSE) {
				{
				this.state = 676;
				this.match(Python3Parser.ELSE);
				this.state = 677;
				this.match(Python3Parser.COLON);
				this.state = 678;
				this.suite();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public try_stmt(): Try_stmtContext {
		let _localctx: Try_stmtContext = new Try_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Python3Parser.RULE_try_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 681;
			this.match(Python3Parser.TRY);
			this.state = 682;
			this.match(Python3Parser.COLON);
			this.state = 683;
			this.suite();
			this.state = 705;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.EXCEPT:
				{
				this.state = 688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 684;
					this.except_clause();
					this.state = 685;
					this.match(Python3Parser.COLON);
					this.state = 686;
					this.suite();
					}
					}
					this.state = 690;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Python3Parser.EXCEPT);
				this.state = 695;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.ELSE) {
					{
					this.state = 692;
					this.match(Python3Parser.ELSE);
					this.state = 693;
					this.match(Python3Parser.COLON);
					this.state = 694;
					this.suite();
					}
				}

				this.state = 700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.FINALLY) {
					{
					this.state = 697;
					this.match(Python3Parser.FINALLY);
					this.state = 698;
					this.match(Python3Parser.COLON);
					this.state = 699;
					this.suite();
					}
				}

				}
				break;
			case Python3Parser.FINALLY:
				{
				this.state = 702;
				this.match(Python3Parser.FINALLY);
				this.state = 703;
				this.match(Python3Parser.COLON);
				this.state = 704;
				this.suite();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public with_stmt(): With_stmtContext {
		let _localctx: With_stmtContext = new With_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Python3Parser.RULE_with_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.match(Python3Parser.WITH);
			this.state = 708;
			this.with_item();
			this.state = 713;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.COMMA) {
				{
				{
				this.state = 709;
				this.match(Python3Parser.COMMA);
				this.state = 710;
				this.with_item();
				}
				}
				this.state = 715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 716;
			this.match(Python3Parser.COLON);
			this.state = 717;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public with_item(): With_itemContext {
		let _localctx: With_itemContext = new With_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Python3Parser.RULE_with_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this.test();
			this.state = 722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.AS) {
				{
				this.state = 720;
				this.match(Python3Parser.AS);
				this.state = 721;
				this.expr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public except_clause(): Except_clauseContext {
		let _localctx: Except_clauseContext = new Except_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Python3Parser.RULE_except_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.match(Python3Parser.EXCEPT);
			this.state = 730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.AWAIT - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.ELLIPSIS - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
				{
				this.state = 725;
				this.test();
				this.state = 728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.AS) {
					{
					this.state = 726;
					this.match(Python3Parser.AS);
					this.state = 727;
					this.name();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public suite(): SuiteContext {
		let _localctx: SuiteContext = new SuiteContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Python3Parser.RULE_suite);
		let _la: number;
		try {
			this.state = 742;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 732;
				this.simple_stmt();
				}
				break;
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 733;
				this.match(Python3Parser.NEWLINE);
				this.state = 734;
				this.match(Python3Parser.INDENT);
				this.state = 736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 735;
					this.stmt();
					}
					}
					this.state = 738;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.TRY) | (1 << Python3Parser.WITH) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.CLASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.YIELD - 32)) | (1 << (Python3Parser.DEL - 32)) | (1 << (Python3Parser.PASS - 32)) | (1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.ASYNC - 32)) | (1 << (Python3Parser.AWAIT - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (Python3Parser.ADD - 66)) | (1 << (Python3Parser.MINUS - 66)) | (1 << (Python3Parser.NOT_OP - 66)) | (1 << (Python3Parser.OPEN_BRACE - 66)) | (1 << (Python3Parser.AT - 66)))) !== 0));
				this.state = 740;
				this.match(Python3Parser.DEDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Python3Parser.RULE_test);
		let _la: number;
		try {
			this.state = 753;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 744;
				this.or_test();
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.IF) {
					{
					this.state = 745;
					this.match(Python3Parser.IF);
					this.state = 746;
					this.or_test();
					this.state = 747;
					this.match(Python3Parser.ELSE);
					this.state = 748;
					this.test();
					}
				}

				}
				break;
			case Python3Parser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 752;
				this.lambdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test_nocond(): Test_nocondContext {
		let _localctx: Test_nocondContext = new Test_nocondContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Python3Parser.RULE_test_nocond);
		try {
			this.state = 757;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 755;
				this.or_test();
				}
				break;
			case Python3Parser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
				this.lambdef_nocond();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdef(): LambdefContext {
		let _localctx: LambdefContext = new LambdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Python3Parser.RULE_lambdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.match(Python3Parser.LAMBDA);
			this.state = 761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (Python3Parser.NAME - 40)) | (1 << (Python3Parser.STAR - 40)) | (1 << (Python3Parser.POWER - 40)))) !== 0)) {
				{
				this.state = 760;
				this.varargslist();
				}
			}

			this.state = 763;
			this.match(Python3Parser.COLON);
			this.state = 764;
			this.test();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdef_nocond(): Lambdef_nocondContext {
		let _localctx: Lambdef_nocondContext = new Lambdef_nocondContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Python3Parser.RULE_lambdef_nocond);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this.match(Python3Parser.LAMBDA);
			this.state = 768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (Python3Parser.NAME - 40)) | (1 << (Python3Parser.STAR - 40)) | (1 << (Python3Parser.POWER - 40)))) !== 0)) {
				{
				this.state = 767;
				this.varargslist();
				}
			}

			this.state = 770;
			this.match(Python3Parser.COLON);
			this.state = 771;
			this.test_nocond();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public or_test(): Or_testContext {
		let _localctx: Or_testContext = new Or_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Python3Parser.RULE_or_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 773;
			this.and_test();
			this.state = 778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.OR) {
				{
				{
				this.state = 774;
				this.match(Python3Parser.OR);
				this.state = 775;
				this.and_test();
				}
				}
				this.state = 780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public and_test(): And_testContext {
		let _localctx: And_testContext = new And_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Python3Parser.RULE_and_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this.not_test();
			this.state = 786;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.AND) {
				{
				{
				this.state = 782;
				this.match(Python3Parser.AND);
				this.state = 783;
				this.not_test();
				}
				}
				this.state = 788;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public not_test(): Not_testContext {
		let _localctx: Not_testContext = new Not_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Python3Parser.RULE_not_test);
		try {
			this.state = 792;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 789;
				this.match(Python3Parser.NOT);
				this.state = 790;
				this.not_test();
				}
				break;
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 791;
				this.comparison();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Python3Parser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 794;
			this.expr();
			this.state = 800;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.IN) | (1 << Python3Parser.NOT) | (1 << Python3Parser.IS))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (Python3Parser.LESS_THAN - 74)) | (1 << (Python3Parser.GREATER_THAN - 74)) | (1 << (Python3Parser.EQUALS - 74)) | (1 << (Python3Parser.GT_EQ - 74)) | (1 << (Python3Parser.LT_EQ - 74)) | (1 << (Python3Parser.NOT_EQ_1 - 74)) | (1 << (Python3Parser.NOT_EQ_2 - 74)))) !== 0)) {
				{
				{
				this.state = 795;
				this.comp_op();
				this.state = 796;
				this.expr();
				}
				}
				this.state = 802;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comp_op(): Comp_opContext {
		let _localctx: Comp_opContext = new Comp_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Python3Parser.RULE_comp_op);
		try {
			this.state = 816;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 803;
				this.match(Python3Parser.LESS_THAN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 804;
				this.match(Python3Parser.GREATER_THAN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 805;
				this.match(Python3Parser.EQUALS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 806;
				this.match(Python3Parser.GT_EQ);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 807;
				this.match(Python3Parser.LT_EQ);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 808;
				this.match(Python3Parser.NOT_EQ_1);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 809;
				this.match(Python3Parser.NOT_EQ_2);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 810;
				this.match(Python3Parser.IN);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 811;
				this.match(Python3Parser.NOT);
				this.state = 812;
				this.match(Python3Parser.IN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 813;
				this.match(Python3Parser.IS);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 814;
				this.match(Python3Parser.IS);
				this.state = 815;
				this.match(Python3Parser.NOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public star_expr(): Star_exprContext {
		let _localctx: Star_exprContext = new Star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Python3Parser.RULE_star_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 818;
			this.match(Python3Parser.STAR);
			this.state = 819;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Python3Parser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 821;
			this.xor_expr();
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.OR_OP) {
				{
				{
				this.state = 822;
				this.match(Python3Parser.OR_OP);
				this.state = 823;
				this.xor_expr();
				}
				}
				this.state = 828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xor_expr(): Xor_exprContext {
		let _localctx: Xor_exprContext = new Xor_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Python3Parser.RULE_xor_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.and_expr();
			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.XOR) {
				{
				{
				this.state = 830;
				this.match(Python3Parser.XOR);
				this.state = 831;
				this.and_expr();
				}
				}
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public and_expr(): And_exprContext {
		let _localctx: And_exprContext = new And_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Python3Parser.RULE_and_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 837;
			this.shift_expr();
			this.state = 842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.AND_OP) {
				{
				{
				this.state = 838;
				this.match(Python3Parser.AND_OP);
				this.state = 839;
				this.shift_expr();
				}
				}
				this.state = 844;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shift_expr(): Shift_exprContext {
		let _localctx: Shift_exprContext = new Shift_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Python3Parser.RULE_shift_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this.arith_expr();
			this.state = 850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.LEFT_SHIFT || _la === Python3Parser.RIGHT_SHIFT) {
				{
				{
				this.state = 846;
				_la = this._input.LA(1);
				if (!(_la === Python3Parser.LEFT_SHIFT || _la === Python3Parser.RIGHT_SHIFT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 847;
				this.arith_expr();
				}
				}
				this.state = 852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arith_expr(): Arith_exprContext {
		let _localctx: Arith_exprContext = new Arith_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Python3Parser.RULE_arith_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 853;
			this.term();
			this.state = 858;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.ADD || _la === Python3Parser.MINUS) {
				{
				{
				this.state = 854;
				_la = this._input.LA(1);
				if (!(_la === Python3Parser.ADD || _la === Python3Parser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 855;
				this.term();
				}
				}
				this.state = 860;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Python3Parser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this.factor();
			this.state = 866;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (Python3Parser.STAR - 51)) | (1 << (Python3Parser.DIV - 51)) | (1 << (Python3Parser.MOD - 51)) | (1 << (Python3Parser.IDIV - 51)) | (1 << (Python3Parser.AT - 51)))) !== 0)) {
				{
				{
				this.state = 862;
				_la = this._input.LA(1);
				if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (Python3Parser.STAR - 51)) | (1 << (Python3Parser.DIV - 51)) | (1 << (Python3Parser.MOD - 51)) | (1 << (Python3Parser.IDIV - 51)) | (1 << (Python3Parser.AT - 51)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 863;
				this.factor();
				}
				}
				this.state = 868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, Python3Parser.RULE_factor);
		let _la: number;
		try {
			this.state = 872;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 869;
				_la = this._input.LA(1);
				if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (Python3Parser.ADD - 66)) | (1 << (Python3Parser.MINUS - 66)) | (1 << (Python3Parser.NOT_OP - 66)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 870;
				this.factor();
				}
				break;
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 871;
				this.power();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public power(): PowerContext {
		let _localctx: PowerContext = new PowerContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Python3Parser.RULE_power);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this.atom_expr();
			this.state = 877;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.POWER) {
				{
				this.state = 875;
				this.match(Python3Parser.POWER);
				this.state = 876;
				this.factor();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom_expr(): Atom_exprContext {
		let _localctx: Atom_exprContext = new Atom_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, Python3Parser.RULE_atom_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 880;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.AWAIT) {
				{
				this.state = 879;
				this.match(Python3Parser.AWAIT);
				}
			}

			this.state = 884;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 882;
				this.funccall();
				}
				break;

			case 2:
				{
				this.state = 883;
				this.atom();
				}
				break;
			}
			this.state = 889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.DOT || _la === Python3Parser.OPEN_BRACK) {
				{
				{
				this.state = 886;
				this.trailer();
				}
				}
				this.state = 891;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funccall(): FunccallContext {
		let _localctx: FunccallContext = new FunccallContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Python3Parser.RULE_funccall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 892;
			this.funccallname();
			this.state = 893;
			this.match(Python3Parser.OPEN_PAREN);
			this.state = 895;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.AWAIT - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.ELLIPSIS - 38)) | (1 << (Python3Parser.STAR - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.POWER - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
				{
				this.state = 894;
				this.arglist();
				}
			}

			this.state = 897;
			this.match(Python3Parser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Python3Parser.RULE_atom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 926;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				{
				this.state = 899;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 902;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.YIELD:
					{
					this.state = 900;
					this.yield_expr();
					}
					break;
				case Python3Parser.STRING:
				case Python3Parser.NUMBER:
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.AWAIT:
				case Python3Parser.NAME:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.STAR:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 901;
					this.testlist_comp();
					}
					break;
				case Python3Parser.CLOSE_PAREN:
					break;
				default:
					break;
				}
				this.state = 904;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.OPEN_BRACK:
				{
				this.state = 905;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 907;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.AWAIT - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.ELLIPSIS - 38)) | (1 << (Python3Parser.STAR - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 906;
					this.testlist_comp();
					}
				}

				this.state = 909;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.OPEN_BRACE:
				{
				this.state = 910;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 912;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.AWAIT - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.ELLIPSIS - 38)) | (1 << (Python3Parser.STAR - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.POWER - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 911;
					this.dictorsetmaker();
					}
				}

				this.state = 914;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			case Python3Parser.NAME:
				{
				this.state = 915;
				this.name();
				}
				break;
			case Python3Parser.NUMBER:
				{
				this.state = 916;
				this.match(Python3Parser.NUMBER);
				}
				break;
			case Python3Parser.STRING:
				{
				this.state = 918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 917;
					this.string();
					}
					}
					this.state = 920;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Python3Parser.STRING);
				}
				break;
			case Python3Parser.ELLIPSIS:
				{
				this.state = 922;
				this.match(Python3Parser.ELLIPSIS);
				}
				break;
			case Python3Parser.NONE:
				{
				this.state = 923;
				this.match(Python3Parser.NONE);
				}
				break;
			case Python3Parser.TRUE:
				{
				this.state = 924;
				this.match(Python3Parser.TRUE);
				}
				break;
			case Python3Parser.FALSE:
				{
				this.state = 925;
				this.match(Python3Parser.FALSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, Python3Parser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 928;
			this.match(Python3Parser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Python3Parser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 930;
			this.match(Python3Parser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funccallname(): FunccallnameContext {
		let _localctx: FunccallnameContext = new FunccallnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Python3Parser.RULE_funccallname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 932;
			this.match(Python3Parser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testlist_comp(): Testlist_compContext {
		let _localctx: Testlist_compContext = new Testlist_compContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Python3Parser.RULE_testlist_comp);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 936;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				{
				this.state = 934;
				this.test();
				}
				break;
			case Python3Parser.STAR:
				{
				this.state = 935;
				this.star_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 952;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
			case Python3Parser.ASYNC:
				{
				this.state = 938;
				this.comp_for();
				}
				break;
			case Python3Parser.CLOSE_PAREN:
			case Python3Parser.COMMA:
			case Python3Parser.CLOSE_BRACK:
				{
				this.state = 946;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 939;
						this.match(Python3Parser.COMMA);
						this.state = 942;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case Python3Parser.STRING:
						case Python3Parser.NUMBER:
						case Python3Parser.LAMBDA:
						case Python3Parser.NOT:
						case Python3Parser.NONE:
						case Python3Parser.TRUE:
						case Python3Parser.FALSE:
						case Python3Parser.AWAIT:
						case Python3Parser.NAME:
						case Python3Parser.ELLIPSIS:
						case Python3Parser.OPEN_PAREN:
						case Python3Parser.OPEN_BRACK:
						case Python3Parser.ADD:
						case Python3Parser.MINUS:
						case Python3Parser.NOT_OP:
						case Python3Parser.OPEN_BRACE:
							{
							this.state = 940;
							this.test();
							}
							break;
						case Python3Parser.STAR:
							{
							this.state = 941;
							this.star_expr();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						}
					}
					this.state = 948;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				}
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COMMA) {
					{
					this.state = 949;
					this.match(Python3Parser.COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailer(): TrailerContext {
		let _localctx: TrailerContext = new TrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Python3Parser.RULE_trailer);
		try {
			this.state = 962;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 954;
				this.match(Python3Parser.DOT);
				this.state = 955;
				this.funccall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 956;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 957;
				this.subscriptlist();
				this.state = 958;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 960;
				this.match(Python3Parser.DOT);
				this.state = 961;
				this.name();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscriptlist(): SubscriptlistContext {
		let _localctx: SubscriptlistContext = new SubscriptlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Python3Parser.RULE_subscriptlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this.subscript();
			this.state = 969;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 965;
					this.match(Python3Parser.COMMA);
					this.state = 966;
					this.subscript();
					}
					}
				}
				this.state = 971;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			}
			this.state = 973;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 972;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscript(): SubscriptContext {
		let _localctx: SubscriptContext = new SubscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, Python3Parser.RULE_subscript);
		let _la: number;
		try {
			this.state = 986;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 975;
				this.test();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.AWAIT - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.ELLIPSIS - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 976;
					this.test();
					}
				}

				this.state = 979;
				this.match(Python3Parser.COLON);
				this.state = 981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.AWAIT - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.ELLIPSIS - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 980;
					this.test();
					}
				}

				this.state = 984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COLON) {
					{
					this.state = 983;
					this.sliceop();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceop(): SliceopContext {
		let _localctx: SliceopContext = new SliceopContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, Python3Parser.RULE_sliceop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this.match(Python3Parser.COLON);
			this.state = 990;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.AWAIT - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.ELLIPSIS - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
				{
				this.state = 989;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprlist(): ExprlistContext {
		let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Python3Parser.RULE_exprlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 994;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				{
				this.state = 992;
				this.expr();
				}
				break;
			case Python3Parser.STAR:
				{
				this.state = 993;
				this.star_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1003;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 996;
					this.match(Python3Parser.COMMA);
					this.state = 999;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STRING:
					case Python3Parser.NUMBER:
					case Python3Parser.NONE:
					case Python3Parser.TRUE:
					case Python3Parser.FALSE:
					case Python3Parser.AWAIT:
					case Python3Parser.NAME:
					case Python3Parser.ELLIPSIS:
					case Python3Parser.OPEN_PAREN:
					case Python3Parser.OPEN_BRACK:
					case Python3Parser.ADD:
					case Python3Parser.MINUS:
					case Python3Parser.NOT_OP:
					case Python3Parser.OPEN_BRACE:
						{
						this.state = 997;
						this.expr();
						}
						break;
					case Python3Parser.STAR:
						{
						this.state = 998;
						this.star_expr();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1005;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			}
			this.state = 1007;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 1006;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testlist(): TestlistContext {
		let _localctx: TestlistContext = new TestlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, Python3Parser.RULE_testlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this.test();
			this.state = 1014;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1010;
					this.match(Python3Parser.COMMA);
					this.state = 1011;
					this.test();
					}
					}
				}
				this.state = 1016;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
			}
			this.state = 1018;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 1017;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictorsetmaker(): DictorsetmakerContext {
		let _localctx: DictorsetmakerContext = new DictorsetmakerContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Python3Parser.RULE_dictorsetmaker);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1068;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1026;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.STRING:
				case Python3Parser.NUMBER:
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.AWAIT:
				case Python3Parser.NAME:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 1020;
					this.test();
					this.state = 1021;
					this.match(Python3Parser.COLON);
					this.state = 1022;
					this.test();
					}
					break;
				case Python3Parser.POWER:
					{
					this.state = 1024;
					this.match(Python3Parser.POWER);
					this.state = 1025;
					this.expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1046;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.FOR:
				case Python3Parser.ASYNC:
					{
					this.state = 1028;
					this.comp_for();
					}
					break;
				case Python3Parser.COMMA:
				case Python3Parser.CLOSE_BRACE:
					{
					this.state = 1040;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1029;
							this.match(Python3Parser.COMMA);
							this.state = 1036;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case Python3Parser.STRING:
							case Python3Parser.NUMBER:
							case Python3Parser.LAMBDA:
							case Python3Parser.NOT:
							case Python3Parser.NONE:
							case Python3Parser.TRUE:
							case Python3Parser.FALSE:
							case Python3Parser.AWAIT:
							case Python3Parser.NAME:
							case Python3Parser.ELLIPSIS:
							case Python3Parser.OPEN_PAREN:
							case Python3Parser.OPEN_BRACK:
							case Python3Parser.ADD:
							case Python3Parser.MINUS:
							case Python3Parser.NOT_OP:
							case Python3Parser.OPEN_BRACE:
								{
								this.state = 1030;
								this.test();
								this.state = 1031;
								this.match(Python3Parser.COLON);
								this.state = 1032;
								this.test();
								}
								break;
							case Python3Parser.POWER:
								{
								this.state = 1034;
								this.match(Python3Parser.POWER);
								this.state = 1035;
								this.expr();
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							}
							}
						}
						this.state = 1042;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
					}
					this.state = 1044;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.COMMA) {
						{
						this.state = 1043;
						this.match(Python3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;

			case 2:
				{
				{
				this.state = 1050;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.STRING:
				case Python3Parser.NUMBER:
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.AWAIT:
				case Python3Parser.NAME:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 1048;
					this.test();
					}
					break;
				case Python3Parser.STAR:
					{
					this.state = 1049;
					this.star_expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1066;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.FOR:
				case Python3Parser.ASYNC:
					{
					this.state = 1052;
					this.comp_for();
					}
					break;
				case Python3Parser.COMMA:
				case Python3Parser.CLOSE_BRACE:
					{
					this.state = 1060;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1053;
							this.match(Python3Parser.COMMA);
							this.state = 1056;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case Python3Parser.STRING:
							case Python3Parser.NUMBER:
							case Python3Parser.LAMBDA:
							case Python3Parser.NOT:
							case Python3Parser.NONE:
							case Python3Parser.TRUE:
							case Python3Parser.FALSE:
							case Python3Parser.AWAIT:
							case Python3Parser.NAME:
							case Python3Parser.ELLIPSIS:
							case Python3Parser.OPEN_PAREN:
							case Python3Parser.OPEN_BRACK:
							case Python3Parser.ADD:
							case Python3Parser.MINUS:
							case Python3Parser.NOT_OP:
							case Python3Parser.OPEN_BRACE:
								{
								this.state = 1054;
								this.test();
								}
								break;
							case Python3Parser.STAR:
								{
								this.state = 1055;
								this.star_expr();
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							}
							}
						}
						this.state = 1062;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
					}
					this.state = 1064;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.COMMA) {
						{
						this.state = 1063;
						this.match(Python3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classdef(): ClassdefContext {
		let _localctx: ClassdefContext = new ClassdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, Python3Parser.RULE_classdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1070;
			this.match(Python3Parser.CLASS);
			this.state = 1071;
			this.name();
			this.state = 1077;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.OPEN_PAREN) {
				{
				this.state = 1072;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.AWAIT - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.ELLIPSIS - 38)) | (1 << (Python3Parser.STAR - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.POWER - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 1073;
					this.arglist();
					}
				}

				this.state = 1076;
				this.match(Python3Parser.CLOSE_PAREN);
				}
			}

			this.state = 1079;
			this.match(Python3Parser.COLON);
			this.state = 1080;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arglist(): ArglistContext {
		let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, Python3Parser.RULE_arglist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
			this.argument();
			this.state = 1087;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1083;
					this.match(Python3Parser.COMMA);
					this.state = 1084;
					this.argument();
					}
					}
				}
				this.state = 1089;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
			}
			this.state = 1091;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 1090;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, Python3Parser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				{
				this.state = 1093;
				this.test();
				this.state = 1095;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.FOR || _la === Python3Parser.ASYNC) {
					{
					this.state = 1094;
					this.comp_for();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1097;
				this.test();
				this.state = 1098;
				this.match(Python3Parser.ASSIGN);
				this.state = 1099;
				this.test();
				}
				break;

			case 3:
				{
				this.state = 1101;
				this.match(Python3Parser.POWER);
				this.state = 1102;
				this.test();
				}
				break;

			case 4:
				{
				this.state = 1103;
				this.match(Python3Parser.STAR);
				this.state = 1104;
				this.test();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comp_iter(): Comp_iterContext {
		let _localctx: Comp_iterContext = new Comp_iterContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, Python3Parser.RULE_comp_iter);
		try {
			this.state = 1109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
			case Python3Parser.ASYNC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1107;
				this.comp_for();
				}
				break;
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1108;
				this.comp_if();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comp_for(): Comp_forContext {
		let _localctx: Comp_forContext = new Comp_forContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, Python3Parser.RULE_comp_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.ASYNC) {
				{
				this.state = 1111;
				this.match(Python3Parser.ASYNC);
				}
			}

			this.state = 1114;
			this.match(Python3Parser.FOR);
			this.state = 1115;
			this.exprlist();
			this.state = 1116;
			this.match(Python3Parser.IN);
			this.state = 1117;
			this.or_test();
			this.state = 1119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (Python3Parser.IF - 13)) | (1 << (Python3Parser.FOR - 13)) | (1 << (Python3Parser.ASYNC - 13)))) !== 0)) {
				{
				this.state = 1118;
				this.comp_iter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comp_if(): Comp_ifContext {
		let _localctx: Comp_ifContext = new Comp_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, Python3Parser.RULE_comp_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1121;
			this.match(Python3Parser.IF);
			this.state = 1122;
			this.test_nocond();
			this.state = 1124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (Python3Parser.IF - 13)) | (1 << (Python3Parser.FOR - 13)) | (1 << (Python3Parser.ASYNC - 13)))) !== 0)) {
				{
				this.state = 1123;
				this.comp_iter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public encoding_decl(): Encoding_declContext {
		let _localctx: Encoding_declContext = new Encoding_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, Python3Parser.RULE_encoding_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1126;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yield_expr(): Yield_exprContext {
		let _localctx: Yield_exprContext = new Yield_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, Python3Parser.RULE_yield_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1128;
			this.match(Python3Parser.YIELD);
			this.state = 1130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.FROM) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.AWAIT - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.ELLIPSIS - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
				{
				this.state = 1129;
				this.yield_arg();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yield_arg(): Yield_argContext {
		let _localctx: Yield_argContext = new Yield_argContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, Python3Parser.RULE_yield_arg);
		try {
			this.state = 1135;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FROM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1132;
				this.match(Python3Parser.FROM);
				this.state = 1133;
				this.test();
				}
				break;
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1134;
				this.testlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03e\u0474\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x05\x02\xC2\n\x02\x03\x03\x03\x03\x07\x03\xC6" +
		"\n\x03\f\x03\x0E\x03\xC9\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04" +
		"\xCF\n\x04\f\x04\x0E\x04\xD2\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05\xDA\n\x05\x03\x05\x05\x05\xDD\n\x05\x03\x05\x03\x05" +
		"\x03\x06\x06\x06\xE2\n\x06\r\x06\x0E\x06\xE3\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\xEA\n\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x05\t\xF4\n\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x05\v\xFD\n\v" +
		"\x03\v\x03\v\x03\f\x03\f\x03\f\x05\f\u0104\n\f\x03\f\x03\f\x03\f\x03\f" +
		"\x05\f\u010A\n\f\x07\f\u010C\n\f\f\f\x0E\f\u010F\v\f\x03\f\x03\f\x03\f" +
		"\x05\f\u0114\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u011A\n\f\x07\f\u011C\n" +
		"\f\f\f\x0E\f\u011F\v\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0125\n\f\x05\f\u0127" +
		"\n\f\x05\f\u0129\n\f\x03\f\x03\f\x03\f\x05\f\u012E\n\f\x05\f\u0130\n\f" +
		"\x05\f\u0132\n\f\x03\f\x03\f\x05\f\u0136\n\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\u013C\n\f\x07\f\u013E\n\f\f\f\x0E\f\u0141\v\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\u0147\n\f\x05\f\u0149\n\f\x05\f\u014B\n\f\x03\f\x03\f\x03\f\x05" +
		"\f\u0150\n\f\x05\f\u0152\n\f\x03\r\x03\r\x03\r\x05\r\u0157\n\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u015C\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u0162\n\x0E\x07\x0E\u0164\n\x0E\f\x0E\x0E\x0E\u0167\v\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u016C\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u0172\n\x0E\x07\x0E\u0174\n\x0E\f\x0E\x0E\x0E\u0177\v\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u017D\n\x0E\x05\x0E\u017F\n\x0E\x05\x0E" +
		"\u0181\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0186\n\x0E\x05\x0E\u0188" +
		"\n\x0E\x05\x0E\u018A\n\x0E\x03\x0E\x03\x0E\x05\x0E\u018E\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0194\n\x0E\x07\x0E\u0196\n\x0E\f\x0E" +
		"\x0E\x0E\u0199\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u019F\n\x0E" +
		"\x05\x0E\u01A1\n\x0E\x05\x0E\u01A3\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\u01A8\n\x0E\x05\x0E\u01AA\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10" +
		"\u01B0\n\x10\x03\x11\x03\x11\x03\x11\x07\x11\u01B5\n\x11\f\x11\x0E\x11" +
		"\u01B8\v\x11\x03\x11\x05\x11\u01BB\n\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01C7\n\x12\x03" +
		"\x13\x03\x13\x05\x13\u01CB\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\u01D4\n\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01D9" +
		"\n\x15\x06\x15\u01DB\n\x15\r\x15\x0E\x15\u01DC\x05\x15\u01DF\n\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01E5\n\x16\x03\x17\x03\x17\x05\x17" +
		"\u01E9\n\x17\x03\x17\x03\x17\x03\x17\x05\x17\u01EE\n\x17\x07\x17\u01F0" +
		"\n\x17\f\x17\x0E\x17\u01F3\v\x17\x03\x17\x05\x17\u01F6\n\x17\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\u0204\n\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x05\x1E\u020C\n\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x05 " +
		"\u0214\n \x05 \u0216\n \x03!\x03!\x05!\u021A\n!\x03\"\x03\"\x03\"\x03" +
		"#\x03#\x07#\u0221\n#\f#\x0E#\u0224\v#\x03#\x03#\x06#\u0228\n#\r#\x0E#" +
		"\u0229\x05#\u022C\n#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u0235\n#" +
		"\x03$\x03$\x03$\x05$\u023A\n$\x03%\x03%\x03%\x05%\u023F\n%\x03&\x03&\x03" +
		"&\x07&\u0244\n&\f&\x0E&\u0247\v&\x03&\x05&\u024A\n&\x03\'\x03\'\x03\'" +
		"\x07\'\u024F\n\'\f\'\x0E\'\u0252\v\'\x03(\x03(\x03(\x07(\u0257\n(\f(\x0E" +
		"(\u025A\v(\x03)\x03)\x03)\x03)\x07)\u0260\n)\f)\x0E)\u0263\v)\x03*\x03" +
		"*\x03*\x03*\x07*\u0269\n*\f*\x0E*\u026C\v*\x03+\x03+\x03+\x03+\x05+\u0272" +
		"\n+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u027D\n,\x03-\x03" +
		"-\x03-\x03-\x05-\u0283\n-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x07.\u028E\n.\f.\x0E.\u0291\v.\x03.\x03.\x03.\x05.\u0296\n.\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x05/\u029F\n/\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x050\u02AA\n0\x031\x031\x031\x031\x031\x031\x031\x06" +
		"1\u02B3\n1\r1\x0E1\u02B4\x031\x031\x031\x051\u02BA\n1\x031\x031\x031\x05" +
		"1\u02BF\n1\x031\x031\x031\x051\u02C4\n1\x032\x032\x032\x032\x072\u02CA" +
		"\n2\f2\x0E2\u02CD\v2\x032\x032\x032\x033\x033\x033\x053\u02D5\n3\x034" +
		"\x034\x034\x034\x054\u02DB\n4\x054\u02DD\n4\x035\x035\x035\x035\x065\u02E3" +
		"\n5\r5\x0E5\u02E4\x035\x035\x055\u02E9\n5\x036\x036\x036\x036\x036\x03" +
		"6\x056\u02F1\n6\x036\x056\u02F4\n6\x037\x037\x057\u02F8\n7\x038\x038\x05" +
		"8\u02FC\n8\x038\x038\x038\x039\x039\x059\u0303\n9\x039\x039\x039\x03:" +
		"\x03:\x03:\x07:\u030B\n:\f:\x0E:\u030E\v:\x03;\x03;\x03;\x07;\u0313\n" +
		";\f;\x0E;\u0316\v;\x03<\x03<\x03<\x05<\u031B\n<\x03=\x03=\x03=\x03=\x07" +
		"=\u0321\n=\f=\x0E=\u0324\v=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x05>\u0333\n>\x03?\x03?\x03?\x03@\x03@\x03@\x07" +
		"@\u033B\n@\f@\x0E@\u033E\v@\x03A\x03A\x03A\x07A\u0343\nA\fA\x0EA\u0346" +
		"\vA\x03B\x03B\x03B\x07B\u034B\nB\fB\x0EB\u034E\vB\x03C\x03C\x03C\x07C" +
		"\u0353\nC\fC\x0EC\u0356\vC\x03D\x03D\x03D\x07D\u035B\nD\fD\x0ED\u035E" +
		"\vD\x03E\x03E\x03E\x07E\u0363\nE\fE\x0EE\u0366\vE\x03F\x03F\x03F\x05F" +
		"\u036B\nF\x03G\x03G\x03G\x05G\u0370\nG\x03H\x05H\u0373\nH\x03H\x03H\x05" +
		"H\u0377\nH\x03H\x07H\u037A\nH\fH\x0EH\u037D\vH\x03I\x03I\x03I\x05I\u0382" +
		"\nI\x03I\x03I\x03J\x03J\x03J\x05J\u0389\nJ\x03J\x03J\x03J\x05J\u038E\n" +
		"J\x03J\x03J\x03J\x05J\u0393\nJ\x03J\x03J\x03J\x03J\x06J\u0399\nJ\rJ\x0E" +
		"J\u039A\x03J\x03J\x03J\x03J\x05J\u03A1\nJ\x03K\x03K\x03L\x03L\x03M\x03" +
		"M\x03N\x03N\x05N\u03AB\nN\x03N\x03N\x03N\x03N\x05N\u03B1\nN\x07N\u03B3" +
		"\nN\fN\x0EN\u03B6\vN\x03N\x05N\u03B9\nN\x05N\u03BB\nN\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x03O\x05O\u03C5\nO\x03P\x03P\x03P\x07P\u03CA\nP\fP\x0E" +
		"P\u03CD\vP\x03P\x05P\u03D0\nP\x03Q\x03Q\x05Q\u03D4\nQ\x03Q\x03Q\x05Q\u03D8" +
		"\nQ\x03Q\x05Q\u03DB\nQ\x05Q\u03DD\nQ\x03R\x03R\x05R\u03E1\nR\x03S\x03" +
		"S\x05S\u03E5\nS\x03S\x03S\x03S\x05S\u03EA\nS\x07S\u03EC\nS\fS\x0ES\u03EF" +
		"\vS\x03S\x05S\u03F2\nS\x03T\x03T\x03T\x07T\u03F7\nT\fT\x0ET\u03FA\vT\x03" +
		"T\x05T\u03FD\nT\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u0405\nU\x03U\x03U" +
		"\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u040F\nU\x07U\u0411\nU\fU\x0EU\u0414" +
		"\vU\x03U\x05U\u0417\nU\x05U\u0419\nU\x03U\x03U\x05U\u041D\nU\x03U\x03" +
		"U\x03U\x03U\x05U\u0423\nU\x07U\u0425\nU\fU\x0EU\u0428\vU\x03U\x05U\u042B" +
		"\nU\x05U\u042D\nU\x05U\u042F\nU\x03V\x03V\x03V\x03V\x05V\u0435\nV\x03" +
		"V\x05V\u0438\nV\x03V\x03V\x03V\x03W\x03W\x03W\x07W\u0440\nW\fW\x0EW\u0443" +
		"\vW\x03W\x05W\u0446\nW\x03X\x03X\x05X\u044A\nX\x03X\x03X\x03X\x03X\x03" +
		"X\x03X\x03X\x03X\x05X\u0454\nX\x03Y\x03Y\x05Y\u0458\nY\x03Z\x05Z\u045B" +
		"\nZ\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u0462\nZ\x03[\x03[\x03[\x05[\u0467\n" +
		"[\x03\\\x03\\\x03]\x03]\x05]\u046D\n]\x03^\x03^\x03^\x05^\u0472\n^\x03" +
		"^\x02\x02\x02_\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
		"\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\x02\b\x03\x02Ua\x03\x0234\x03" +
		"\x02BC\x03\x02DE\x05\x0255FHSS\x04\x02DEII\x02\u04EC\x02\xC1\x03\x02\x02" +
		"\x02\x04\xC7\x03\x02\x02\x02\x06\xCC\x03\x02\x02\x02\b\xD5\x03\x02\x02" +
		"\x02\n\xE1\x03\x02\x02\x02\f\xE5\x03\x02\x02\x02\x0E\xEB\x03\x02\x02\x02" +
		"\x10\xEE\x03\x02\x02\x02\x12\xF8\x03\x02\x02\x02\x14\xFA\x03\x02\x02\x02" +
		"\x16\u0151\x03\x02\x02\x02\x18\u0153\x03\x02\x02\x02\x1A\u01A9\x03\x02" +
		"\x02\x02\x1C\u01AB\x03\x02\x02\x02\x1E\u01AF\x03\x02\x02\x02 \u01B1\x03" +
		"\x02\x02\x02\"\u01C6\x03\x02\x02\x02$\u01CA\x03\x02\x02\x02&\u01CC\x03" +
		"\x02\x02\x02(\u01CE\x03\x02\x02\x02*\u01E0\x03\x02\x02\x02,\u01E8\x03" +
		"\x02\x02\x02.\u01F7\x03\x02\x02\x020\u01F9\x03\x02\x02\x022\u01FC\x03" +
		"\x02\x02\x024\u0203\x03\x02\x02\x026\u0205\x03\x02\x02\x028\u0207\x03" +
		"\x02\x02\x02:\u0209\x03\x02\x02\x02<\u020D\x03\x02\x02\x02>\u020F\x03" +
		"\x02\x02\x02@\u0219\x03\x02\x02\x02B\u021B\x03\x02\x02\x02D\u021E\x03" +
		"\x02\x02\x02F\u0236\x03\x02\x02\x02H\u023B\x03\x02\x02\x02J\u0240\x03" +
		"\x02\x02\x02L\u024B\x03\x02\x02\x02N\u0253\x03\x02\x02\x02P\u025B\x03" +
		"\x02\x02\x02R\u0264\x03\x02\x02\x02T\u026D\x03\x02\x02\x02V\u027C\x03" +
		"\x02\x02\x02X\u027E\x03\x02\x02\x02Z\u0284\x03\x02\x02\x02\\\u0297\x03" +
		"\x02\x02\x02^\u02A0\x03\x02\x02\x02`\u02AB\x03\x02\x02\x02b\u02C5\x03" +
		"\x02\x02\x02d\u02D1\x03\x02\x02\x02f\u02D6\x03\x02\x02\x02h\u02E8\x03" +
		"\x02\x02\x02j\u02F3\x03\x02\x02\x02l\u02F7\x03\x02\x02\x02n\u02F9\x03" +
		"\x02\x02\x02p\u0300\x03\x02\x02\x02r\u0307\x03\x02\x02\x02t\u030F\x03" +
		"\x02\x02\x02v\u031A\x03\x02\x02\x02x\u031C\x03\x02\x02\x02z\u0332\x03" +
		"\x02\x02\x02|\u0334\x03\x02\x02\x02~\u0337\x03\x02\x02\x02\x80\u033F\x03" +
		"\x02\x02\x02\x82\u0347\x03\x02\x02\x02\x84\u034F\x03\x02\x02\x02\x86\u0357" +
		"\x03\x02\x02\x02\x88\u035F\x03\x02\x02\x02\x8A\u036A\x03\x02\x02\x02\x8C" +
		"\u036C\x03\x02\x02\x02\x8E\u0372\x03\x02\x02\x02\x90\u037E\x03\x02\x02" +
		"\x02\x92\u03A0\x03\x02\x02\x02\x94\u03A2\x03\x02\x02\x02\x96\u03A4\x03" +
		"\x02\x02\x02\x98\u03A6\x03\x02\x02\x02\x9A\u03AA\x03\x02\x02\x02\x9C\u03C4" +
		"\x03\x02\x02\x02\x9E\u03C6\x03\x02\x02\x02\xA0\u03DC\x03\x02\x02\x02\xA2" +
		"\u03DE\x03\x02\x02\x02\xA4\u03E4\x03\x02\x02\x02\xA6\u03F3\x03\x02\x02" +
		"\x02\xA8\u042E\x03\x02\x02\x02\xAA\u0430\x03\x02\x02\x02\xAC\u043C\x03" +
		"\x02\x02\x02\xAE\u0453\x03\x02\x02\x02\xB0\u0457\x03\x02\x02\x02\xB2\u045A" +
		"\x03\x02\x02\x02\xB4\u0463\x03\x02\x02\x02\xB6\u0468\x03\x02\x02\x02\xB8" +
		"\u046A\x03\x02\x02\x02\xBA\u0471\x03\x02\x02\x02\xBC\xC2\x07)\x02\x02" +
		"\xBD\xC2\x05 \x11\x02\xBE\xBF\x05V,\x02\xBF\xC0\x07)\x02\x02\xC0\xC2\x03" +
		"\x02\x02\x02\xC1\xBC\x03\x02\x02\x02\xC1\xBD\x03\x02\x02\x02\xC1\xBE\x03" +
		"\x02\x02\x02\xC2\x03\x03\x02\x02\x02\xC3\xC6\x07)\x02\x02\xC4\xC6\x05" +
		"\x1E\x10\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6\xC9\x03" +
		"\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xCA\x03" +
		"\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCB\x07\x02\x02\x03\xCB\x05\x03" +
		"\x02\x02\x02\xCC\xD0\x05\xA6T\x02\xCD\xCF\x07)\x02\x02\xCE\xCD\x03\x02" +
		"\x02\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02" +
		"\x02\x02\xD1\xD3\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD3\xD4\x07\x02" +
		"\x02\x03\xD4\x07\x03\x02\x02\x02\xD5\xD6\x07S\x02\x02\xD6\xDC\x05N(\x02" +
		"\xD7\xD9\x076\x02\x02\xD8\xDA\x05\xACW\x02\xD9\xD8\x03\x02\x02\x02\xD9" +
		"\xDA\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x077\x02\x02\xDC" +
		"\xD7\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE" +
		"\xDF\x07)\x02\x02\xDF\t\x03\x02\x02\x02\xE0\xE2\x05\b\x05\x02\xE1\xE0" +
		"\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4" +
		"\x03\x02\x02\x02\xE4\v\x03\x02\x02\x02\xE5\xE9\x05\n\x06\x02\xE6\xEA\x05" +
		"\xAAV\x02\xE7\xEA\x05\x10\t\x02\xE8\xEA\x05\x0E\b\x02\xE9\xE6\x03\x02" +
		"\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA\r\x03\x02" +
		"\x02\x02\xEB\xEC\x07\'\x02\x02\xEC\xED\x05\x10\t\x02\xED\x0F\x03\x02\x02" +
		"\x02\xEE\xEF\x07\x06\x02\x02\xEF\xF0\x05\x96L\x02\xF0\xF3\x05\x14\v\x02" +
		"\xF1\xF2\x07T\x02\x02\xF2\xF4\x05j6\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4" +
		"\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x079\x02\x02\xF6\xF7" +
		"\x05\x12\n\x02\xF7\x11\x03\x02\x02\x02\xF8\xF9\x05h5\x02\xF9\x13\x03\x02" +
		"\x02\x02\xFA\xFC\x076\x02\x02\xFB\xFD\x05\x16\f\x02\xFC\xFB\x03\x02\x02" +
		"\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x077\x02" +
		"\x02\xFF\x15\x03\x02\x02\x02\u0100\u0103\x05\x18\r\x02\u0101\u0102\x07" +
		"<\x02\x02\u0102\u0104\x05j6\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104" +
		"\x03\x02\x02\x02\u0104\u010D\x03\x02\x02\x02\u0105\u0106\x078\x02\x02" +
		"\u0106\u0109\x05\x18\r\x02\u0107\u0108\x07<\x02\x02\u0108\u010A\x05j6" +
		"\x02\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010C" +
		"\x03\x02\x02\x02\u010B\u0105\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02" +
		"\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u0131\x03" +
		"\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u0110\u012F\x078\x02\x02\u0111" +
		"\u0113\x075\x02\x02\u0112\u0114\x05\x18\r\x02\u0113\u0112\x03\x02\x02" +
		"\x02\u0113\u0114\x03\x02\x02\x02\u0114\u011D\x03\x02\x02\x02\u0115\u0116" +
		"\x078\x02\x02\u0116\u0119\x05\x18\r\x02\u0117\u0118\x07<\x02\x02\u0118" +
		"\u011A\x05j6\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02" +
		"\u011A\u011C\x03\x02\x02\x02\u011B\u0115\x03\x02\x02\x02\u011C\u011F\x03" +
		"\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E" +
		"\u0128\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0126\x078\x02" +
		"\x02\u0121\u0122\x07;\x02\x02\u0122\u0124\x05\x18\r\x02\u0123\u0125\x07" +
		"8\x02\x02\u0124\u0123\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125" +
		"\u0127\x03\x02\x02\x02\u0126\u0121\x03\x02\x02\x02\u0126\u0127\x03\x02" +
		"\x02\x02\u0127\u0129\x03\x02\x02\x02\u0128\u0120\x03\x02\x02\x02\u0128" +
		"\u0129\x03\x02\x02\x02\u0129\u0130\x03\x02\x02\x02\u012A\u012B\x07;\x02" +
		"\x02\u012B\u012D\x05\x18\r\x02\u012C\u012E\x078\x02\x02\u012D\u012C\x03" +
		"\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F" +
		"\u0111\x03\x02\x02\x02\u012F\u012A\x03\x02\x02\x02\u012F\u0130\x03\x02" +
		"\x02\x02\u0130\u0132\x03\x02\x02\x02\u0131\u0110\x03\x02\x02\x02\u0131" +
		"\u0132\x03\x02\x02\x02\u0132\u0152\x03\x02\x02\x02\u0133\u0135\x075\x02" +
		"\x02\u0134\u0136\x05\x18\r\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136" +
		"\x03\x02\x02\x02\u0136\u013F\x03\x02\x02\x02\u0137\u0138\x078\x02\x02" +
		"\u0138\u013B\x05\x18\r\x02\u0139\u013A\x07<\x02\x02\u013A\u013C\x05j6" +
		"\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E" +
		"\x03\x02\x02\x02\u013D\u0137\x03\x02\x02\x02\u013E\u0141\x03\x02\x02\x02" +
		"\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u014A\x03" +
		"\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0148\x078\x02\x02\u0143" +
		"\u0144\x07;\x02\x02\u0144\u0146\x05\x18\r\x02\u0145\u0147\x078\x02\x02" +
		"\u0146\u0145\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0149\x03" +
		"\x02\x02\x02\u0148\u0143\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149" +
		"\u014B\x03\x02\x02\x02\u014A\u0142\x03\x02\x02\x02\u014A\u014B\x03\x02" +
		"\x02\x02\u014B\u0152\x03\x02\x02\x02\u014C\u014D\x07;\x02\x02\u014D\u014F" +
		"\x05\x18\r\x02\u014E\u0150\x078\x02\x02\u014F\u014E\x03\x02\x02\x02\u014F" +
		"\u0150\x03\x02\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u0100\x03\x02" +
		"\x02\x02\u0151\u0133\x03\x02\x02\x02\u0151\u014C\x03\x02\x02\x02\u0152" +
		"\x17\x03\x02\x02\x02\u0153\u0156\x05\x96L\x02\u0154\u0155\x079\x02\x02" +
		"\u0155\u0157\x05j6\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02" +
		"\x02\x02\u0157\x19\x03\x02\x02\x02\u0158\u015B\x05\x1C\x0F\x02\u0159\u015A" +
		"\x07<\x02\x02\u015A\u015C\x05j6\x02\u015B\u0159\x03\x02\x02\x02\u015B" +
		"\u015C\x03\x02\x02\x02\u015C\u0165\x03\x02\x02\x02\u015D\u015E\x078\x02" +
		"\x02\u015E\u0161\x05\x1C\x0F\x02\u015F\u0160\x07<\x02\x02\u0160\u0162" +
		"\x05j6\x02\u0161\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162" +
		"\u0164\x03\x02\x02\x02\u0163\u015D\x03\x02\x02\x02\u0164\u0167\x03\x02" +
		"\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166" +
		"\u0189\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168\u0187\x078\x02" +
		"\x02\u0169\u016B\x075\x02\x02\u016A\u016C\x05\x1C\x0F\x02\u016B\u016A" +
		"\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u0175\x03\x02\x02\x02" +
		"\u016D\u016E\x078\x02\x02\u016E\u0171\x05\x1C\x0F\x02\u016F\u0170\x07" +
		"<\x02\x02\u0170\u0172\x05j6\x02\u0171\u016F\x03\x02\x02\x02\u0171\u0172" +
		"\x03\x02\x02\x02\u0172\u0174\x03\x02\x02\x02\u0173\u016D\x03\x02\x02\x02" +
		"\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03" +
		"\x02\x02\x02\u0176\u0180\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0178" +
		"\u017E\x078\x02\x02\u0179\u017A\x07;\x02\x02\u017A\u017C\x05\x1C\x0F\x02" +
		"\u017B\u017D\x078\x02\x02\u017C\u017B\x03\x02\x02\x02\u017C\u017D\x03" +
		"\x02\x02\x02\u017D\u017F\x03\x02\x02\x02\u017E\u0179\x03\x02\x02\x02\u017E" +
		"\u017F\x03\x02\x02\x02\u017F\u0181\x03\x02\x02\x02\u0180\u0178\x03\x02" +
		"\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0188\x03\x02\x02\x02\u0182" +
		"\u0183\x07;\x02\x02\u0183\u0185\x05\x1C\x0F\x02\u0184\u0186\x078\x02\x02" +
		"\u0185\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0188\x03" +
		"\x02\x02\x02\u0187\u0169\x03\x02\x02\x02\u0187\u0182\x03\x02\x02\x02\u0187" +
		"\u0188\x03\x02\x02\x02\u0188\u018A\x03\x02\x02\x02\u0189\u0168\x03\x02" +
		"\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u01AA\x03\x02\x02\x02\u018B" +
		"\u018D\x075\x02\x02\u018C\u018E\x05\x1C\x0F\x02\u018D\u018C\x03\x02\x02" +
		"\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0197\x03\x02\x02\x02\u018F\u0190" +
		"\x078\x02\x02\u0190\u0193\x05\x1C\x0F\x02\u0191\u0192\x07<\x02\x02\u0192" +
		"\u0194\x05j6\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02" +
		"\u0194\u0196\x03\x02\x02\x02\u0195\u018F\x03\x02\x02\x02\u0196\u0199\x03" +
		"\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
		"\u01A2\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u019A\u01A0\x078\x02" +
		"\x02\u019B\u019C\x07;\x02\x02\u019C\u019E\x05\x1C\x0F\x02\u019D\u019F" +
		"\x078\x02\x02\u019E\u019D\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02" +
		"\u019F\u01A1\x03\x02\x02\x02\u01A0\u019B\x03\x02\x02\x02\u01A0\u01A1\x03" +
		"\x02\x02\x02\u01A1\u01A3\x03\x02\x02\x02\u01A2\u019A\x03\x02\x02\x02\u01A2" +
		"\u01A3\x03\x02\x02\x02\u01A3\u01AA\x03\x02\x02\x02\u01A4\u01A5\x07;\x02" +
		"\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01A5\u01A7\x05\x1C\x0F\x02\u01A6\u01A8\x078\x02\x02\u01A7\u01A6\x03" +
		"\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AA\x03\x02\x02\x02\u01A9" +
		"\u0158\x03\x02\x02\x02\u01A9\u018B\x03\x02\x02\x02\u01A9\u01A4\x03\x02" +
		"\x02\x02\u01AA\x1B\x03\x02\x02\x02\u01AB\u01AC\x05\x96L\x02\u01AC\x1D" +
		"\x03\x02\x02\x02\u01AD\u01B0\x05 \x11\x02\u01AE\u01B0\x05V,\x02\u01AF" +
		"\u01AD\x03\x02\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0\x1F\x03\x02\x02" +
		"\x02\u01B1\u01B6\x05\"\x12\x02\u01B2\u01B3\x07:\x02\x02\u01B3\u01B5\x05" +
		"\"\x12\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02\u01B6" +
		"\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01BA\x03\x02" +
		"\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B9\u01BB\x07:\x02\x02\u01BA\u01B9" +
		"\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02" +
		"\u01BC\u01BD\x07)\x02\x02\u01BD!\x03\x02\x02\x02\u01BE\u01C7\x05$\x13" +
		"\x02\u01BF\u01C7\x050\x19\x02\u01C0\u01C7\x052\x1A\x02\u01C1\u01C7\x05" +
		"4\x1B\x02\u01C2\u01C7\x05@!\x02\u01C3\u01C7\x05P)\x02\u01C4\u01C7\x05" +
		"R*\x02\u01C5\u01C7\x05T+\x02\u01C6\u01BE\x03\x02\x02\x02\u01C6\u01BF\x03" +
		"\x02\x02\x02\u01C6\u01C0\x03\x02\x02\x02\u01C6\u01C1\x03\x02\x02\x02\u01C6" +
		"\u01C2\x03\x02\x02\x02\u01C6\u01C3\x03\x02\x02\x02\u01C6\u01C4\x03\x02" +
		"\x02\x02\u01C6\u01C5\x03\x02\x02\x02\u01C7#\x03\x02\x02\x02\u01C8\u01CB" +
		"\x05&\x14\x02\u01C9\u01CB\x05(\x15\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA" +
		"\u01C9\x03\x02\x02\x02\u01CB%\x03\x02\x02\x02\u01CC\u01CD\x05,\x17\x02" +
		"\u01CD\'\x03\x02\x02\x02\u01CE\u01DE\x05,\x17\x02\u01CF\u01DF\x05*\x16" +
		"\x02\u01D0\u01D3\x05.\x18\x02\u01D1\u01D4\x05\xB8]\x02\u01D2\u01D4\x05" +
		"\xA6T\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4" +
		"\u01DF\x03\x02\x02\x02\u01D5\u01D8\x07<\x02\x02\u01D6\u01D9\x05\xB8]\x02" +
		"\u01D7\u01D9\x05,\x17\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D7\x03" +
		"\x02\x02\x02\u01D9\u01DB\x03\x02\x02\x02\u01DA\u01D5\x03\x02\x02\x02\u01DB" +
		"\u01DC\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02" +
		"\x02\x02\u01DD\u01DF\x03\x02\x02\x02\u01DE\u01CF\x03\x02\x02\x02\u01DE" +
		"\u01D0\x03\x02\x02\x02\u01DE\u01DA\x03\x02\x02\x02\u01DF)\x03\x02\x02" +
		"\x02\u01E0\u01E1\x079\x02\x02\u01E1\u01E4\x05j6\x02\u01E2\u01E3\x07<\x02" +
		"\x02\u01E3\u01E5\x05j6\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03" +
		"\x02\x02\x02\u01E5+\x03\x02\x02\x02\u01E6\u01E9\x05j6\x02\u01E7\u01E9" +
		"\x05|?\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9" +
		"\u01F1\x03\x02\x02\x02\u01EA\u01ED\x078\x02\x02\u01EB\u01EE\x05j6\x02" +
		"\u01EC\u01EE\x05|?\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EC\x03\x02" +
		"\x02\x02\u01EE\u01F0\x03\x02\x02\x02\u01EF\u01EA\x03\x02\x02\x02\u01F0" +
		"\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03\x02" +
		"\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F4" +
		"\u01F6\x078\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02" +
		"\x02\u01F6-\x03\x02\x02\x02\u01F7\u01F8\t\x02\x02\x02\u01F8/\x03\x02\x02" +
		"\x02\u01F9\u01FA\x07#\x02\x02\u01FA\u01FB\x05\xA4S\x02\u01FB1\x03\x02" +
		"\x02\x02\u01FC\u01FD\x07$\x02\x02\u01FD3\x03\x02\x02\x02\u01FE\u0204\x05" +
		"6\x1C\x02\u01FF\u0204\x058\x1D\x02\u0200\u0204\x05:\x1E\x02\u0201\u0204" +
		"\x05> \x02\u0202\u0204\x05<\x1F\x02\u0203\u01FE\x03\x02\x02\x02\u0203" +
		"\u01FF\x03\x02\x02\x02\u0203\u0200\x03\x02\x02\x02\u0203\u0201\x03\x02" +
		"\x02\x02\u0203\u0202\x03\x02\x02\x02\u02045\x03\x02\x02\x02\u0205\u0206" +
		"\x07&\x02\x02\u02067\x03\x02\x02\x02\u0207\u0208\x07%\x02\x02\u02089\x03" +
		"\x02\x02\x02\u0209\u020B\x07\x07\x02\x02\u020A\u020C\x05\xA6T\x02\u020B" +
		"\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C;\x03\x02\x02" +
		"\x02\u020D\u020E\x05\xB8]\x02\u020E=\x03\x02\x02\x02\u020F\u0215\x07\b" +
		"\x02\x02\u0210\u0213\x05j6\x02\u0211\u0212\x07\t\x02\x02\u0212\u0214\x05" +
		"j6\x02\u0213\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0216" +
		"\x03\x02\x02\x02\u0215\u0210\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02" +
		"\u0216?\x03\x02\x02\x02\u0217\u021A\x05B\"\x02\u0218\u021A\x05D#\x02\u0219" +
		"\u0217\x03\x02\x02\x02\u0219\u0218\x03\x02\x02\x02\u021AA\x03\x02\x02" +
		"\x02\u021B\u021C\x07\n\x02\x02\u021C\u021D\x05L\'\x02\u021DC\x03\x02\x02" +
		"\x02\u021E\u022B\x07\t\x02\x02\u021F\u0221\t\x03\x02\x02\u0220\u021F\x03" +
		"\x02\x02\x02\u0221\u0224\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0222" +
		"\u0223\x03\x02\x02\x02\u0223\u0225\x03\x02\x02\x02\u0224\u0222\x03\x02" +
		"\x02\x02\u0225\u022C\x05N(\x02\u0226\u0228\t\x03\x02\x02\u0227\u0226\x03" +
		"\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229" +
		"\u022A\x03\x02\x02\x02\u022A\u022C\x03\x02\x02\x02\u022B\u0222\x03\x02" +
		"\x02\x02\u022B\u0227\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D" +
		"\u0234\x07\n\x02\x02\u022E\u0235\x075\x02\x02\u022F\u0230\x076\x02\x02" +
		"\u0230\u0231\x05J&\x02\u0231\u0232\x077\x02\x02\u0232\u0235\x03\x02\x02" +
		"\x02\u0233\u0235\x05J&\x02\u0234\u022E\x03\x02\x02\x02\u0234\u022F\x03" +
		"\x02\x02\x02\u0234\u0233\x03\x02\x02\x02\u0235E\x03\x02\x02\x02\u0236" +
		"\u0239\x05\x96L\x02\u0237\u0238\x07\v\x02\x02\u0238\u023A\x05\x96L\x02" +
		"\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023AG\x03\x02" +
		"\x02\x02\u023B\u023E\x05N(\x02\u023C\u023D\x07\v\x02\x02\u023D\u023F\x05" +
		"\x96L\x02\u023E\u023C\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F" +
		"I\x03\x02\x02\x02\u0240\u0245\x05F$\x02\u0241\u0242\x078\x02\x02\u0242" +
		"\u0244\x05F$\x02\u0243\u0241\x03\x02\x02\x02\u0244\u0247\x03\x02\x02\x02" +
		"\u0245\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0249\x03" +
		"\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0248\u024A\x078\x02\x02\u0249" +
		"\u0248\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024AK\x03\x02\x02" +
		"\x02\u024B\u0250\x05H%\x02\u024C\u024D\x078\x02\x02\u024D\u024F\x05H%" +
		"\x02\u024E\u024C\x03\x02\x02\x02\u024F\u0252\x03\x02\x02\x02\u0250\u024E" +
		"\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251M\x03\x02\x02\x02\u0252" +
		"\u0250\x03\x02\x02\x02\u0253\u0258\x05\x96L\x02\u0254\u0255\x073\x02\x02" +
		"\u0255\u0257\x05\x96L\x02\u0256\u0254\x03\x02\x02\x02\u0257\u025A\x03" +
		"\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259" +
		"O\x03\x02\x02\x02\u025A\u0258\x03\x02\x02\x02\u025B\u025C\x07\f\x02\x02" +
		"\u025C\u0261\x05\x96L\x02\u025D\u025E\x078\x02\x02\u025E\u0260\x05\x96" +
		"L\x02\u025F\u025D\x03\x02\x02\x02\u0260\u0263\x03\x02\x02\x02\u0261\u025F" +
		"\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262Q\x03\x02\x02\x02\u0263" +
		"\u0261\x03\x02\x02\x02\u0264\u0265\x07\r\x02\x02\u0265\u026A\x05\x96L" +
		"\x02\u0266\u0267\x078\x02\x02\u0267\u0269\x05\x96L\x02\u0268\u0266\x03" +
		"\x02\x02\x02\u0269\u026C\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026A" +
		"\u026B\x03\x02\x02\x02\u026BS\x03\x02\x02\x02\u026C\u026A\x03\x02\x02" +
		"\x02\u026D\u026E\x07\x0E\x02\x02\u026E\u0271\x05j6\x02\u026F\u0270\x07" +
		"8\x02\x02\u0270\u0272\x05j6\x02\u0271\u026F\x03\x02\x02\x02\u0271\u0272" +
		"\x03\x02\x02\x02\u0272U\x03\x02\x02\x02\u0273\u027D\x05Z.\x02\u0274\u027D" +
		"\x05\\/\x02\u0275\u027D\x05^0\x02\u0276\u027D\x05`1\x02\u0277\u027D\x05" +
		"b2\x02\u0278\u027D\x05\x10\t\x02\u0279\u027D\x05\xAAV\x02\u027A\u027D" +
		"\x05\f\x07\x02\u027B\u027D\x05X-\x02\u027C\u0273\x03\x02\x02\x02\u027C" +
		"\u0274\x03\x02\x02\x02\u027C\u0275\x03\x02\x02\x02\u027C\u0276\x03\x02" +
		"\x02\x02\u027C\u0277\x03\x02\x02\x02\u027C\u0278\x03\x02\x02\x02\u027C" +
		"\u0279\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027B\x03\x02" +
		"\x02\x02\u027DW\x03\x02\x02\x02\u027E\u0282\x07\'\x02\x02\u027F\u0283" +
		"\x05\x10\t\x02\u0280\u0283\x05b2\x02\u0281\u0283\x05^0\x02\u0282\u027F" +
		"\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0282\u0281\x03\x02\x02\x02" +
		"\u0283Y\x03\x02\x02\x02\u0284\u0285\x07\x0F\x02\x02\u0285\u0286\x05j6" +
		"\x02\u0286\u0287\x079\x02\x02\u0287\u028F\x05h5\x02\u0288\u0289\x07\x10" +
		"\x02\x02\u0289\u028A\x05j6\x02\u028A\u028B\x079\x02\x02\u028B\u028C\x05" +
		"h5\x02\u028C\u028E\x03\x02\x02\x02\u028D\u0288\x03\x02\x02\x02\u028E\u0291" +
		"\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02" +
		"\u0290\u0295\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0292\u0293\x07" +
		"\x11\x02\x02\u0293\u0294\x079\x02\x02\u0294\u0296\x05h5\x02\u0295\u0292" +
		"\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296[\x03\x02\x02\x02\u0297" +
		"\u0298\x07\x12\x02\x02\u0298\u0299\x05j6\x02\u0299\u029A\x079\x02\x02" +
		"\u029A\u029E\x05h5\x02\u029B\u029C\x07\x11\x02\x02\u029C\u029D\x079\x02" +
		"\x02\u029D\u029F\x05h5\x02\u029E\u029B\x03\x02\x02\x02\u029E\u029F\x03" +
		"\x02\x02\x02\u029F]\x03\x02\x02\x02\u02A0\u02A1\x07\x13\x02\x02\u02A1" +
		"\u02A2\x05\xA4S\x02\u02A2\u02A3\x07\x14\x02\x02\u02A3\u02A4\x05\xA6T\x02" +
		"\u02A4\u02A5\x079\x02\x02\u02A5\u02A9\x05h5\x02\u02A6\u02A7\x07\x11\x02" +
		"\x02\u02A7\u02A8\x079\x02\x02\u02A8\u02AA\x05h5\x02\u02A9\u02A6\x03\x02" +
		"\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA_\x03\x02\x02\x02\u02AB\u02AC" +
		"\x07\x15\x02\x02\u02AC\u02AD\x079\x02\x02\u02AD\u02C3\x05h5\x02\u02AE" +
		"\u02AF\x05f4\x02\u02AF\u02B0\x079\x02\x02\u02B0\u02B1\x05h5\x02\u02B1" +
		"\u02B3\x03\x02\x02\x02\u02B2\u02AE\x03\x02\x02\x02\u02B3\u02B4\x03\x02" +
		"\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5" +
		"\u02B9\x03\x02\x02\x02\u02B6\u02B7\x07\x11\x02\x02\u02B7\u02B8\x079\x02" +
		"\x02\u02B8\u02BA\x05h5\x02\u02B9\u02B6\x03\x02\x02\x02\u02B9\u02BA\x03" +
		"\x02\x02\x02\u02BA\u02BE\x03\x02\x02\x02\u02BB\u02BC\x07\x16\x02\x02\u02BC" +
		"\u02BD\x079\x02\x02\u02BD\u02BF\x05h5\x02\u02BE\u02BB\x03\x02\x02\x02" +
		"\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C4\x03\x02\x02\x02\u02C0\u02C1\x07" +
		"\x16\x02\x02\u02C1\u02C2\x079\x02\x02\u02C2\u02C4\x05h5\x02\u02C3\u02B2" +
		"\x03\x02\x02\x02\u02C3\u02C0\x03\x02\x02\x02\u02C4a\x03\x02\x02\x02\u02C5" +
		"\u02C6\x07\x17\x02\x02\u02C6\u02CB\x05d3\x02\u02C7\u02C8\x078\x02\x02" +
		"\u02C8\u02CA\x05d3\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA\u02CD\x03\x02" +
		"\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC" +
		"\u02CE\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CE\u02CF\x079\x02" +
		"\x02\u02CF\u02D0\x05h5\x02\u02D0c\x03\x02\x02\x02\u02D1\u02D4\x05j6\x02" +
		"\u02D2\u02D3\x07\v\x02\x02\u02D3\u02D5\x05~@\x02\u02D4\u02D2\x03\x02\x02" +
		"\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5e\x03\x02\x02\x02\u02D6\u02DC\x07" +
		"\x18\x02\x02\u02D7\u02DA\x05j6\x02\u02D8\u02D9\x07\v\x02\x02\u02D9\u02DB" +
		"\x05\x96L\x02\u02DA\u02D8\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02" +
		"\u02DB\u02DD\x03\x02\x02\x02\u02DC\u02D7\x03\x02\x02\x02\u02DC\u02DD\x03" +
		"\x02\x02\x02\u02DDg\x03\x02\x02\x02\u02DE\u02E9\x05 \x11\x02\u02DF\u02E0" +
		"\x07)\x02\x02\u02E0\u02E2\x07d\x02\x02\u02E1\u02E3\x05\x1E\x10\x02\u02E2" +
		"\u02E1\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E2\x03\x02" +
		"\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6" +
		"\u02E7\x07e\x02\x02\u02E7\u02E9\x03\x02\x02\x02\u02E8\u02DE\x03\x02\x02" +
		"\x02\u02E8\u02DF\x03\x02\x02\x02\u02E9i\x03\x02\x02\x02\u02EA\u02F0\x05" +
		"r:\x02\u02EB\u02EC\x07\x0F\x02\x02\u02EC\u02ED\x05r:\x02\u02ED\u02EE\x07" +
		"\x11\x02\x02\u02EE\u02EF\x05j6\x02\u02EF\u02F1\x03\x02\x02\x02\u02F0\u02EB" +
		"\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F4\x03\x02\x02\x02" +
		"\u02F2\u02F4\x05n8\x02\u02F3\u02EA\x03\x02\x02\x02\u02F3\u02F2\x03\x02" +
		"\x02\x02\u02F4k\x03\x02\x02\x02\u02F5\u02F8\x05r:\x02\u02F6\u02F8\x05" +
		"p9\x02\u02F7\u02F5\x03\x02\x02\x02\u02F7\u02F6\x03\x02\x02\x02\u02F8m" +
		"\x03\x02\x02\x02\u02F9\u02FB\x07\x19\x02\x02\u02FA\u02FC\x05\x1A\x0E\x02" +
		"\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC\u02FD\x03" +
		"\x02\x02\x02\u02FD\u02FE\x079\x02\x02\u02FE\u02FF\x05j6\x02\u02FFo\x03" +
		"\x02\x02\x02\u0300\u0302\x07\x19\x02\x02\u0301\u0303\x05\x1A\x0E\x02\u0302" +
		"\u0301\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0304\x03\x02" +
		"\x02\x02\u0304\u0305\x079\x02\x02\u0305\u0306\x05l7\x02\u0306q\x03\x02" +
		"\x02\x02\u0307\u030C\x05t;\x02\u0308\u0309\x07\x1A\x02\x02\u0309\u030B" +
		"\x05t;\x02\u030A\u0308\x03\x02\x02\x02\u030B\u030E\x03\x02\x02\x02\u030C" +
		"\u030A\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030Ds\x03\x02\x02" +
		"\x02\u030E\u030C\x03\x02\x02\x02\u030F\u0314\x05v<\x02\u0310\u0311\x07" +
		"\x1B\x02\x02\u0311\u0313\x05v<\x02\u0312\u0310\x03\x02\x02\x02\u0313\u0316" +
		"\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02" +
		"\u0315u\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0317\u0318\x07\x1C" +
		"\x02\x02\u0318\u031B\x05v<\x02\u0319\u031B\x05x=\x02\u031A\u0317\x03\x02" +
		"\x02\x02\u031A\u0319\x03\x02\x02\x02\u031Bw\x03\x02\x02\x02\u031C\u0322" +
		"\x05~@\x02\u031D\u031E\x05z>\x02\u031E\u031F\x05~@\x02\u031F\u0321\x03" +
		"\x02\x02\x02\u0320\u031D\x03\x02\x02\x02\u0321\u0324\x03\x02\x02\x02\u0322" +
		"\u0320\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323y\x03\x02\x02" +
		"\x02\u0324\u0322\x03\x02\x02\x02\u0325\u0333\x07L\x02\x02\u0326\u0333" +
		"\x07M\x02\x02\u0327\u0333\x07N\x02\x02\u0328\u0333\x07O\x02\x02\u0329" +
		"\u0333\x07P\x02\x02\u032A\u0333\x07Q\x02\x02\u032B\u0333\x07R\x02\x02" +
		"\u032C\u0333\x07\x14\x02\x02\u032D\u032E\x07\x1C\x02\x02\u032E\u0333\x07" +
		"\x14\x02\x02\u032F\u0333\x07\x1D\x02\x02\u0330\u0331\x07\x1D\x02\x02\u0331" +
		"\u0333\x07\x1C\x02\x02\u0332\u0325\x03\x02\x02\x02\u0332\u0326\x03\x02" +
		"\x02\x02\u0332\u0327\x03\x02\x02\x02\u0332\u0328\x03\x02\x02\x02\u0332" +
		"\u0329\x03\x02\x02\x02\u0332\u032A\x03\x02\x02\x02\u0332\u032B\x03\x02" +
		"\x02\x02\u0332\u032C\x03\x02\x02\x02\u0332\u032D\x03\x02\x02\x02\u0332" +
		"\u032F\x03\x02\x02\x02\u0332\u0330\x03\x02\x02\x02\u0333{\x03\x02\x02" +
		"\x02\u0334\u0335\x075\x02\x02\u0335\u0336\x05~@\x02\u0336}\x03\x02\x02" +
		"\x02\u0337\u033C\x05\x80A\x02\u0338\u0339\x07?\x02\x02\u0339\u033B\x05" +
		"\x80A\x02\u033A\u0338\x03\x02\x02\x02\u033B\u033E\x03\x02\x02\x02\u033C" +
		"\u033A\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D\x7F\x03\x02\x02" +
		"\x02\u033E\u033C\x03\x02\x02\x02\u033F\u0344\x05\x82B\x02\u0340\u0341" +
		"\x07@\x02\x02\u0341\u0343\x05\x82B\x02\u0342\u0340\x03\x02\x02\x02\u0343" +
		"\u0346\x03\x02\x02\x02\u0344\u0342\x03\x02\x02\x02\u0344\u0345\x03\x02" +
		"\x02\x02\u0345\x81\x03\x02\x02\x02\u0346\u0344\x03\x02\x02\x02\u0347\u034C" +
		"\x05\x84C\x02\u0348\u0349\x07A\x02\x02\u0349\u034B\x05\x84C\x02\u034A" +
		"\u0348\x03\x02\x02\x02\u034B\u034E\x03\x02\x02\x02\u034C\u034A\x03\x02" +
		"\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\x83\x03\x02\x02\x02\u034E\u034C" +
		"\x03\x02\x02\x02\u034F\u0354\x05\x86D\x02\u0350\u0351\t\x04\x02\x02\u0351" +
		"\u0353\x05\x86D\x02\u0352\u0350\x03\x02\x02\x02\u0353\u0356\x03\x02\x02" +
		"\x02\u0354\u0352\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\x85" +
		"\x03\x02\x02\x02\u0356\u0354\x03\x02\x02\x02\u0357\u035C\x05\x88E\x02" +
		"\u0358\u0359\t\x05\x02\x02\u0359\u035B\x05\x88E\x02\u035A\u0358\x03\x02" +
		"\x02\x02\u035B\u035E\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035C" +
		"\u035D\x03\x02\x02\x02\u035D\x87\x03\x02\x02\x02\u035E\u035C\x03\x02\x02" +
		"\x02\u035F\u0364\x05\x8AF\x02\u0360\u0361\t\x06\x02\x02\u0361\u0363\x05" +
		"\x8AF\x02\u0362\u0360\x03\x02\x02\x02\u0363\u0366\x03\x02\x02\x02\u0364" +
		"\u0362\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\x89\x03\x02\x02" +
		"\x02\u0366\u0364\x03\x02\x02\x02\u0367\u0368\t\x07\x02\x02\u0368\u036B" +
		"\x05\x8AF\x02\u0369\u036B\x05\x8CG\x02\u036A\u0367\x03\x02\x02\x02\u036A" +
		"\u0369\x03\x02\x02\x02\u036B\x8B\x03\x02\x02\x02\u036C\u036F\x05\x8EH" +
		"\x02\u036D\u036E\x07;\x02\x02\u036E\u0370\x05\x8AF\x02\u036F\u036D\x03" +
		"\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\x8D\x03\x02\x02\x02\u0371" +
		"\u0373\x07(\x02\x02\u0372\u0371\x03\x02\x02\x02\u0372\u0373\x03\x02\x02" +
		"\x02\u0373\u0376\x03\x02\x02\x02\u0374\u0377\x05\x90I\x02\u0375\u0377" +
		"\x05\x92J\x02\u0376\u0374\x03\x02\x02\x02\u0376\u0375\x03\x02\x02\x02" +
		"\u0377\u037B\x03\x02\x02\x02\u0378\u037A\x05\x9CO\x02\u0379\u0378\x03" +
		"\x02\x02\x02\u037A\u037D\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037B" +
		"\u037C\x03\x02\x02\x02\u037C\x8F\x03\x02\x02\x02\u037D\u037B\x03\x02\x02" +
		"\x02\u037E\u037F\x05\x98M\x02\u037F\u0381\x076\x02\x02\u0380\u0382\x05" +
		"\xACW\x02\u0381\u0380\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382" +
		"\u0383\x03\x02\x02\x02\u0383\u0384\x077\x02\x02\u0384\x91\x03\x02\x02" +
		"\x02\u0385\u0388\x076\x02\x02\u0386\u0389\x05\xB8]\x02\u0387\u0389\x05" +
		"\x9AN\x02\u0388\u0386\x03\x02\x02\x02\u0388\u0387\x03\x02\x02\x02\u0388" +
		"\u0389\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u03A1\x077\x02" +
		"\x02\u038B\u038D\x07=\x02\x02\u038C\u038E\x05\x9AN\x02\u038D\u038C\x03" +
		"\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F" +
		"\u03A1\x07>\x02\x02\u0390\u0392\x07J\x02\x02\u0391\u0393\x05\xA8U\x02" +
		"\u0392\u0391\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u0394\x03" +
		"\x02\x02\x02\u0394\u03A1\x07K\x02\x02\u0395\u03A1\x05\x96L\x02\u0396\u03A1" +
		"\x07\x04\x02\x02\u0397\u0399\x05\x94K\x02\u0398\u0397\x03\x02\x02\x02" +
		"\u0399\u039A\x03\x02\x02\x02\u039A\u0398\x03\x02\x02\x02\u039A\u039B\x03" +
		"\x02\x02\x02\u039B\u03A1\x03\x02\x02\x02\u039C\u03A1\x074\x02\x02\u039D" +
		"\u03A1\x07\x1E\x02\x02\u039E\u03A1\x07\x1F\x02\x02\u039F\u03A1\x07 \x02" +
		"\x02\u03A0\u0385\x03\x02\x02\x02\u03A0\u038B\x03\x02\x02\x02\u03A0\u0390" +
		"\x03\x02\x02\x02\u03A0\u0395\x03\x02\x02\x02\u03A0\u0396\x03\x02\x02\x02" +
		"\u03A0\u0398\x03\x02\x02\x02\u03A0\u039C\x03\x02\x02\x02\u03A0\u039D\x03" +
		"\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A0\u039F\x03\x02\x02\x02\u03A1" +
		"\x93\x03\x02\x02\x02\u03A2\u03A3\x07\x03\x02\x02\u03A3\x95\x03\x02\x02" +
		"\x02\u03A4\u03A5\x07*\x02\x02\u03A5\x97\x03\x02\x02\x02\u03A6\u03A7\x07" +
		"*\x02\x02\u03A7\x99\x03\x02\x02\x02\u03A8\u03AB\x05j6\x02\u03A9\u03AB" +
		"\x05|?\x02\u03AA\u03A8\x03\x02\x02\x02\u03AA\u03A9\x03\x02\x02\x02\u03AB" +
		"\u03BA\x03\x02\x02\x02\u03AC\u03BB\x05\xB2Z\x02\u03AD\u03B0\x078\x02\x02" +
		"\u03AE\u03B1\x05j6\x02\u03AF\u03B1\x05|?\x02\u03B0\u03AE\x03\x02\x02\x02" +
		"\u03B0\u03AF\x03\x02\x02\x02\u03B1\u03B3\x03\x02\x02\x02\u03B2\u03AD\x03" +
		"\x02\x02\x02\u03B3\u03B6\x03\x02\x02\x02\u03B4\u03B2\x03\x02\x02\x02\u03B4" +
		"\u03B5\x03\x02\x02\x02\u03B5\u03B8\x03\x02\x02\x02\u03B6\u03B4\x03\x02" +
		"\x02\x02\u03B7\u03B9\x078\x02\x02\u03B8\u03B7\x03\x02\x02\x02\u03B8\u03B9" +
		"\x03\x02\x02\x02\u03B9\u03BB\x03\x02\x02\x02\u03BA\u03AC\x03\x02\x02\x02" +
		"\u03BA\u03B4\x03\x02\x02\x02\u03BB\x9B\x03\x02\x02\x02\u03BC\u03BD\x07" +
		"3\x02\x02\u03BD\u03C5\x05\x90I\x02\u03BE\u03BF\x07=\x02\x02\u03BF\u03C0" +
		"\x05\x9EP\x02\u03C0\u03C1\x07>\x02\x02\u03C1\u03C5\x03\x02\x02\x02\u03C2" +
		"\u03C3\x073\x02\x02\u03C3\u03C5\x05\x96L\x02\u03C4\u03BC\x03\x02\x02\x02" +
		"\u03C4\u03BE\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C5\x9D\x03" +
		"\x02\x02\x02\u03C6\u03CB\x05\xA0Q\x02\u03C7\u03C8\x078\x02\x02\u03C8\u03CA" +
		"\x05\xA0Q\x02\u03C9\u03C7\x03\x02\x02\x02\u03CA\u03CD\x03\x02\x02\x02" +
		"\u03CB\u03C9\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u03CF\x03" +
		"\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CE\u03D0\x078\x02\x02\u03CF" +
		"\u03CE\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\x9F\x03\x02\x02" +
		"\x02\u03D1\u03DD\x05j6\x02\u03D2\u03D4\x05j6\x02\u03D3\u03D2\x03\x02\x02" +
		"\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D7" +
		"\x079\x02\x02\u03D6\u03D8\x05j6\x02\u03D7\u03D6\x03\x02\x02\x02\u03D7" +
		"\u03D8\x03\x02\x02\x02\u03D8\u03DA\x03\x02\x02\x02\u03D9\u03DB\x05\xA2" +
		"R\x02\u03DA\u03D9\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DD" +
		"\x03\x02\x02\x02\u03DC\u03D1\x03\x02\x02\x02\u03DC\u03D3\x03\x02\x02\x02" +
		"\u03DD\xA1\x03\x02\x02\x02\u03DE\u03E0\x079\x02\x02\u03DF\u03E1\x05j6" +
		"\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1\xA3" +
		"\x03\x02\x02\x02\u03E2\u03E5\x05~@\x02\u03E3\u03E5\x05|?\x02\u03E4\u03E2" +
		"\x03\x02\x02\x02\u03E4\u03E3\x03\x02\x02\x02\u03E5\u03ED\x03\x02\x02\x02" +
		"\u03E6\u03E9\x078\x02\x02\u03E7\u03EA\x05~@\x02\u03E8\u03EA\x05|?\x02" +
		"\u03E9\u03E7\x03\x02\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03EA\u03EC\x03" +
		"\x02\x02\x02\u03EB\u03E6\x03\x02\x02\x02\u03EC\u03EF\x03\x02\x02\x02\u03ED" +
		"\u03EB\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03F1\x03\x02" +
		"\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03F0\u03F2\x078\x02\x02\u03F1\u03F0" +
		"\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\xA5\x03\x02\x02\x02" +
		"\u03F3\u03F8\x05j6\x02\u03F4\u03F5\x078\x02\x02\u03F5\u03F7\x05j6\x02" +
		"\u03F6\u03F4\x03\x02\x02\x02\u03F7\u03FA\x03\x02\x02\x02\u03F8\u03F6\x03" +
		"\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9\u03FC\x03\x02\x02\x02\u03FA" +
		"\u03F8\x03\x02\x02\x02\u03FB\u03FD\x078\x02\x02\u03FC\u03FB\x03\x02\x02" +
		"\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD\xA7\x03\x02\x02\x02\u03FE\u03FF" +
		"\x05j6\x02\u03FF\u0400\x079\x02\x02\u0400\u0401\x05j6\x02\u0401\u0405" +
		"\x03\x02\x02\x02\u0402\u0403\x07;\x02\x02\u0403\u0405\x05~@\x02\u0404" +
		"\u03FE\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0405\u0418\x03\x02" +
		"\x02\x02\u0406\u0419\x05\xB2Z\x02\u0407\u040E\x078\x02\x02\u0408\u0409" +
		"\x05j6\x02\u0409\u040A\x079\x02\x02\u040A\u040B\x05j6\x02\u040B\u040F" +
		"\x03\x02\x02\x02\u040C\u040D\x07;\x02\x02\u040D\u040F\x05~@\x02\u040E" +
		"\u0408\x03\x02\x02\x02\u040E\u040C\x03\x02\x02\x02\u040F\u0411\x03\x02" +
		"\x02\x02\u0410\u0407\x03\x02\x02\x02\u0411\u0414\x03\x02\x02\x02\u0412" +
		"\u0410\x03\x02\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413\u0416\x03\x02" +
		"\x02\x02\u0414\u0412\x03\x02\x02\x02\u0415\u0417\x078\x02\x02\u0416\u0415" +
		"\x03\x02\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417\u0419\x03\x02\x02\x02" +
		"\u0418\u0406\x03\x02\x02\x02\u0418\u0412\x03\x02\x02\x02\u0419\u042F\x03" +
		"\x02\x02\x02\u041A\u041D\x05j6\x02\u041B\u041D\x05|?\x02\u041C\u041A\x03" +
		"\x02\x02\x02\u041C\u041B\x03\x02\x02\x02\u041D\u042C\x03\x02\x02\x02\u041E" +
		"\u042D\x05\xB2Z\x02\u041F\u0422\x078\x02\x02\u0420\u0423\x05j6\x02\u0421" +
		"\u0423\x05|?\x02\u0422\u0420\x03\x02\x02\x02\u0422\u0421\x03\x02\x02\x02" +
		"\u0423\u0425\x03\x02\x02\x02\u0424\u041F\x03\x02\x02\x02\u0425\u0428\x03" +
		"\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427" +
		"\u042A\x03\x02\x02\x02\u0428\u0426\x03\x02\x02\x02\u0429\u042B\x078\x02" +
		"\x02\u042A\u0429\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u042D" +
		"\x03\x02\x02\x02\u042C\u041E\x03\x02\x02\x02\u042C\u0426\x03\x02\x02\x02" +
		"\u042D\u042F\x03\x02\x02\x02\u042E\u0404\x03\x02\x02\x02\u042E\u041C\x03" +
		"\x02\x02\x02\u042F\xA9\x03\x02\x02\x02\u0430\u0431\x07!\x02\x02\u0431" +
		"\u0437\x05\x96L\x02\u0432\u0434\x076\x02\x02\u0433\u0435\x05\xACW\x02" +
		"\u0434\u0433\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0436\x03" +
		"\x02\x02\x02\u0436\u0438\x077\x02\x02\u0437\u0432\x03\x02\x02\x02\u0437" +
		"\u0438\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043A\x079\x02" +
		"\x02\u043A\u043B\x05h5\x02\u043B\xAB\x03\x02\x02\x02\u043C\u0441\x05\xAE" +
		"X\x02\u043D\u043E\x078\x02\x02\u043E\u0440\x05\xAEX\x02\u043F\u043D\x03" +
		"\x02\x02\x02\u0440\u0443\x03\x02\x02\x02\u0441\u043F\x03\x02\x02\x02\u0441" +
		"\u0442\x03\x02\x02\x02\u0442\u0445\x03\x02\x02\x02\u0443\u0441\x03\x02" +
		"\x02\x02\u0444\u0446\x078\x02\x02\u0445\u0444\x03\x02\x02\x02\u0445\u0446" +
		"\x03\x02\x02\x02\u0446\xAD\x03\x02\x02\x02\u0447\u0449\x05j6\x02\u0448" +
		"\u044A\x05\xB2Z\x02\u0449\u0448\x03\x02\x02\x02\u0449\u044A\x03\x02\x02" +
		"\x02\u044A\u0454\x03\x02\x02\x02\u044B\u044C\x05j6\x02\u044C\u044D\x07" +
		"<\x02\x02\u044D\u044E\x05j6\x02\u044E\u0454\x03\x02\x02\x02\u044F\u0450";
	private static readonly _serializedATNSegment2: string =
		"\x07;\x02\x02\u0450\u0454\x05j6\x02\u0451\u0452\x075\x02\x02\u0452\u0454" +
		"\x05j6\x02\u0453\u0447\x03\x02\x02\x02\u0453\u044B\x03\x02\x02\x02\u0453" +
		"\u044F\x03\x02\x02\x02\u0453\u0451\x03\x02\x02\x02\u0454\xAF\x03\x02\x02" +
		"\x02\u0455\u0458\x05\xB2Z\x02\u0456\u0458\x05\xB4[\x02\u0457\u0455\x03" +
		"\x02\x02\x02\u0457\u0456\x03\x02\x02\x02\u0458\xB1\x03\x02\x02\x02\u0459" +
		"\u045B\x07\'\x02\x02\u045A\u0459\x03\x02\x02\x02\u045A\u045B\x03\x02\x02" +
		"\x02\u045B\u045C\x03\x02\x02\x02\u045C\u045D\x07\x13\x02\x02\u045D\u045E" +
		"\x05\xA4S\x02\u045E\u045F\x07\x14\x02\x02\u045F\u0461\x05r:\x02\u0460" +
		"\u0462\x05\xB0Y\x02\u0461\u0460\x03\x02\x02\x02\u0461\u0462\x03\x02\x02" +
		"\x02\u0462\xB3\x03\x02\x02\x02\u0463\u0464\x07\x0F\x02\x02\u0464\u0466" +
		"\x05l7\x02\u0465\u0467\x05\xB0Y\x02\u0466\u0465\x03\x02\x02\x02\u0466" +
		"\u0467\x03\x02\x02\x02\u0467\xB5\x03\x02\x02\x02\u0468\u0469\x05\x96L" +
		"\x02\u0469\xB7\x03\x02\x02\x02\u046A\u046C\x07\"\x02\x02\u046B\u046D\x05" +
		"\xBA^\x02\u046C\u046B\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D" +
		"\xB9\x03\x02\x02\x02\u046E\u046F\x07\t\x02\x02\u046F\u0472\x05j6\x02\u0470" +
		"\u0472\x05\xA6T\x02\u0471\u046E\x03\x02\x02\x02\u0471\u0470\x03\x02\x02" +
		"\x02\u0472\xBB\x03\x02\x02\x02\xAA\xC1\xC5\xC7\xD0\xD9\xDC\xE3\xE9\xF3" +
		"\xFC\u0103\u0109\u010D\u0113\u0119\u011D\u0124\u0126\u0128\u012D\u012F" +
		"\u0131\u0135\u013B\u013F\u0146\u0148\u014A\u014F\u0151\u0156\u015B\u0161" +
		"\u0165\u016B\u0171\u0175\u017C\u017E\u0180\u0185\u0187\u0189\u018D\u0193" +
		"\u0197\u019E\u01A0\u01A2\u01A7\u01A9\u01AF\u01B6\u01BA\u01C6\u01CA\u01D3" +
		"\u01D8\u01DC\u01DE\u01E4\u01E8\u01ED\u01F1\u01F5\u0203\u020B\u0213\u0215" +
		"\u0219\u0222\u0229\u022B\u0234\u0239\u023E\u0245\u0249\u0250\u0258\u0261" +
		"\u026A\u0271\u027C\u0282\u028F\u0295\u029E\u02A9\u02B4\u02B9\u02BE\u02C3" +
		"\u02CB\u02D4\u02DA\u02DC\u02E4\u02E8\u02F0\u02F3\u02F7\u02FB\u0302\u030C" +
		"\u0314\u031A\u0322\u0332\u033C\u0344\u034C\u0354\u035C\u0364\u036A\u036F" +
		"\u0372\u0376\u037B\u0381\u0388\u038D\u0392\u039A\u03A0\u03AA\u03B0\u03B4" +
		"\u03B8\u03BA\u03C4\u03CB\u03CF\u03D3\u03D7\u03DA\u03DC\u03E0\u03E4\u03E9" +
		"\u03ED\u03F1\u03F8\u03FC\u0404\u040E\u0412\u0416\u0418\u041C\u0422\u0426" +
		"\u042A\u042C\u042E\u0434\u0437\u0441\u0445\u0449\u0453\u0457\u045A\u0461" +
		"\u0466\u046C\u0471";
	public static readonly _serializedATN: string = Utils.join(
		[
			Python3Parser._serializedATNSegment0,
			Python3Parser._serializedATNSegment1,
			Python3Parser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Python3Parser.__ATN) {
			Python3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Python3Parser._serializedATN));
		}

		return Python3Parser.__ATN;
	}

}

export class Single_inputContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NEWLINE, 0); }
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_single_input; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSingle_input) {
			listener.enterSingle_input(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSingle_input) {
			listener.exitSingle_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSingle_input) {
			return visitor.visitSingle_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class File_inputContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(Python3Parser.EOF, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NEWLINE);
		} else {
			return this.getToken(Python3Parser.NEWLINE, i);
		}
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_file_input; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFile_input) {
			listener.enterFile_input(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFile_input) {
			listener.exitFile_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFile_input) {
			return visitor.visitFile_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Eval_inputContext extends ParserRuleContext {
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public EOF(): TerminalNode { return this.getToken(Python3Parser.EOF, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NEWLINE);
		} else {
			return this.getToken(Python3Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_eval_input; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterEval_input) {
			listener.enterEval_input(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitEval_input) {
			listener.exitEval_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitEval_input) {
			return visitor.visitEval_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecoratorContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Python3Parser.AT, 0); }
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(Python3Parser.NEWLINE, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_decorator; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDecorator) {
			listener.enterDecorator(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDecorator) {
			listener.exitDecorator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDecorator) {
			return visitor.visitDecorator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecoratorsContext extends ParserRuleContext {
	public decorator(): DecoratorContext[];
	public decorator(i: number): DecoratorContext;
	public decorator(i?: number): DecoratorContext | DecoratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecoratorContext);
		} else {
			return this.getRuleContext(i, DecoratorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_decorators; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDecorators) {
			listener.enterDecorators(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDecorators) {
			listener.exitDecorators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDecorators) {
			return visitor.visitDecorators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecoratedContext extends ParserRuleContext {
	public decorators(): DecoratorsContext {
		return this.getRuleContext(0, DecoratorsContext);
	}
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	public async_funcdef(): Async_funcdefContext | undefined {
		return this.tryGetRuleContext(0, Async_funcdefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_decorated; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDecorated) {
			listener.enterDecorated(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDecorated) {
			listener.exitDecorated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDecorated) {
			return visitor.visitDecorated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Async_funcdefContext extends ParserRuleContext {
	public ASYNC(): TerminalNode { return this.getToken(Python3Parser.ASYNC, 0); }
	public funcdef(): FuncdefContext {
		return this.getRuleContext(0, FuncdefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_async_funcdef; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAsync_funcdef) {
			listener.enterAsync_funcdef(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAsync_funcdef) {
			listener.exitAsync_funcdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAsync_funcdef) {
			return visitor.visitAsync_funcdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncdefContext extends ParserRuleContext {
	public DEF(): TerminalNode { return this.getToken(Python3Parser.DEF, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public funcbody(): FuncbodyContext {
		return this.getRuleContext(0, FuncbodyContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ARROW, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_funcdef; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFuncdef) {
			listener.enterFuncdef(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFuncdef) {
			listener.exitFuncdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFuncdef) {
			return visitor.visitFuncdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncbodyContext extends ParserRuleContext {
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_funcbody; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFuncbody) {
			listener.enterFuncbody(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFuncbody) {
			listener.exitFuncbody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFuncbody) {
			return visitor.visitFuncbody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(Python3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(Python3Parser.CLOSE_PAREN, 0); }
	public typedargslist(): TypedargslistContext | undefined {
		return this.tryGetRuleContext(0, TypedargslistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_parameters; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedargslistContext extends ParserRuleContext {
	public tfpdef(): TfpdefContext[];
	public tfpdef(i: number): TfpdefContext;
	public tfpdef(i?: number): TfpdefContext | TfpdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TfpdefContext);
		} else {
			return this.getRuleContext(i, TfpdefContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.STAR, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.POWER, 0); }
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ASSIGN);
		} else {
			return this.getToken(Python3Parser.ASSIGN, i);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_typedargslist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTypedargslist) {
			listener.enterTypedargslist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTypedargslist) {
			listener.exitTypedargslist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTypedargslist) {
			return visitor.visitTypedargslist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TfpdefContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.COLON, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_tfpdef; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTfpdef) {
			listener.enterTfpdef(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTfpdef) {
			listener.exitTfpdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTfpdef) {
			return visitor.visitTfpdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarargslistContext extends ParserRuleContext {
	public vfpdef(): VfpdefContext[];
	public vfpdef(i: number): VfpdefContext;
	public vfpdef(i?: number): VfpdefContext | VfpdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VfpdefContext);
		} else {
			return this.getRuleContext(i, VfpdefContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.STAR, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.POWER, 0); }
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ASSIGN);
		} else {
			return this.getToken(Python3Parser.ASSIGN, i);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_varargslist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterVarargslist) {
			listener.enterVarargslist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitVarargslist) {
			listener.exitVarargslist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitVarargslist) {
			return visitor.visitVarargslist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VfpdefContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_vfpdef; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterVfpdef) {
			listener.enterVfpdef(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitVfpdef) {
			listener.exitVfpdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitVfpdef) {
			return visitor.visitVfpdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_stmtContext extends ParserRuleContext {
	public small_stmt(): Small_stmtContext[];
	public small_stmt(i: number): Small_stmtContext;
	public small_stmt(i?: number): Small_stmtContext | Small_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Small_stmtContext);
		} else {
			return this.getRuleContext(i, Small_stmtContext);
		}
	}
	public NEWLINE(): TerminalNode { return this.getToken(Python3Parser.NEWLINE, 0); }
	public SEMI_COLON(): TerminalNode[];
	public SEMI_COLON(i: number): TerminalNode;
	public SEMI_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.SEMI_COLON);
		} else {
			return this.getToken(Python3Parser.SEMI_COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_simple_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSimple_stmt) {
			listener.enterSimple_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSimple_stmt) {
			listener.exitSimple_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSimple_stmt) {
			return visitor.visitSimple_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Small_stmtContext extends ParserRuleContext {
	public expr_stmt(): Expr_stmtContext | undefined {
		return this.tryGetRuleContext(0, Expr_stmtContext);
	}
	public del_stmt(): Del_stmtContext | undefined {
		return this.tryGetRuleContext(0, Del_stmtContext);
	}
	public pass_stmt(): Pass_stmtContext | undefined {
		return this.tryGetRuleContext(0, Pass_stmtContext);
	}
	public flow_stmt(): Flow_stmtContext | undefined {
		return this.tryGetRuleContext(0, Flow_stmtContext);
	}
	public import_stmt(): Import_stmtContext | undefined {
		return this.tryGetRuleContext(0, Import_stmtContext);
	}
	public global_stmt(): Global_stmtContext | undefined {
		return this.tryGetRuleContext(0, Global_stmtContext);
	}
	public nonlocal_stmt(): Nonlocal_stmtContext | undefined {
		return this.tryGetRuleContext(0, Nonlocal_stmtContext);
	}
	public assert_stmt(): Assert_stmtContext | undefined {
		return this.tryGetRuleContext(0, Assert_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_small_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSmall_stmt) {
			listener.enterSmall_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSmall_stmt) {
			listener.exitSmall_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSmall_stmt) {
			return visitor.visitSmall_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_stmtContext extends ParserRuleContext {
	public expr_stmt_single(): Expr_stmt_singleContext | undefined {
		return this.tryGetRuleContext(0, Expr_stmt_singleContext);
	}
	public expr_stmt_multi(): Expr_stmt_multiContext | undefined {
		return this.tryGetRuleContext(0, Expr_stmt_multiContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_expr_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExpr_stmt) {
			listener.enterExpr_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExpr_stmt) {
			listener.exitExpr_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExpr_stmt) {
			return visitor.visitExpr_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_stmt_singleContext extends ParserRuleContext {
	public testlist_star_expr(): Testlist_star_exprContext {
		return this.getRuleContext(0, Testlist_star_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_expr_stmt_single; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExpr_stmt_single) {
			listener.enterExpr_stmt_single(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExpr_stmt_single) {
			listener.exitExpr_stmt_single(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExpr_stmt_single) {
			return visitor.visitExpr_stmt_single(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_stmt_multiContext extends ParserRuleContext {
	public testlist_star_expr(): Testlist_star_exprContext[];
	public testlist_star_expr(i: number): Testlist_star_exprContext;
	public testlist_star_expr(i?: number): Testlist_star_exprContext | Testlist_star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Testlist_star_exprContext);
		} else {
			return this.getRuleContext(i, Testlist_star_exprContext);
		}
	}
	public annassign(): AnnassignContext | undefined {
		return this.tryGetRuleContext(0, AnnassignContext);
	}
	public augassign(): AugassignContext | undefined {
		return this.tryGetRuleContext(0, AugassignContext);
	}
	public yield_expr(): Yield_exprContext[];
	public yield_expr(i: number): Yield_exprContext;
	public yield_expr(i?: number): Yield_exprContext | Yield_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Yield_exprContext);
		} else {
			return this.getRuleContext(i, Yield_exprContext);
		}
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ASSIGN);
		} else {
			return this.getToken(Python3Parser.ASSIGN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_expr_stmt_multi; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExpr_stmt_multi) {
			listener.enterExpr_stmt_multi(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExpr_stmt_multi) {
			listener.exitExpr_stmt_multi(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExpr_stmt_multi) {
			return visitor.visitExpr_stmt_multi(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnassignContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_annassign; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAnnassign) {
			listener.enterAnnassign(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAnnassign) {
			listener.exitAnnassign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAnnassign) {
			return visitor.visitAnnassign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Testlist_star_exprContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_testlist_star_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTestlist_star_expr) {
			listener.enterTestlist_star_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTestlist_star_expr) {
			listener.exitTestlist_star_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTestlist_star_expr) {
			return visitor.visitTestlist_star_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AugassignContext extends ParserRuleContext {
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.SUB_ASSIGN, 0); }
	public MULT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.MULT_ASSIGN, 0); }
	public AT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AT_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.MOD_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.XOR_ASSIGN, 0); }
	public LEFT_SHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.LEFT_SHIFT_ASSIGN, 0); }
	public RIGHT_SHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.RIGHT_SHIFT_ASSIGN, 0); }
	public POWER_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.POWER_ASSIGN, 0); }
	public IDIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IDIV_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_augassign; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAugassign) {
			listener.enterAugassign(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAugassign) {
			listener.exitAugassign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAugassign) {
			return visitor.visitAugassign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Del_stmtContext extends ParserRuleContext {
	public DEL(): TerminalNode { return this.getToken(Python3Parser.DEL, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_del_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDel_stmt) {
			listener.enterDel_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDel_stmt) {
			listener.exitDel_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDel_stmt) {
			return visitor.visitDel_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pass_stmtContext extends ParserRuleContext {
	public PASS(): TerminalNode { return this.getToken(Python3Parser.PASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_pass_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterPass_stmt) {
			listener.enterPass_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitPass_stmt) {
			listener.exitPass_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitPass_stmt) {
			return visitor.visitPass_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_stmtContext extends ParserRuleContext {
	public break_stmt(): Break_stmtContext | undefined {
		return this.tryGetRuleContext(0, Break_stmtContext);
	}
	public continue_stmt(): Continue_stmtContext | undefined {
		return this.tryGetRuleContext(0, Continue_stmtContext);
	}
	public return_stmt(): Return_stmtContext | undefined {
		return this.tryGetRuleContext(0, Return_stmtContext);
	}
	public raise_stmt(): Raise_stmtContext | undefined {
		return this.tryGetRuleContext(0, Raise_stmtContext);
	}
	public yield_stmt(): Yield_stmtContext | undefined {
		return this.tryGetRuleContext(0, Yield_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_flow_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFlow_stmt) {
			listener.enterFlow_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFlow_stmt) {
			listener.exitFlow_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFlow_stmt) {
			return visitor.visitFlow_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Break_stmtContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(Python3Parser.BREAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_break_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterBreak_stmt) {
			listener.enterBreak_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitBreak_stmt) {
			listener.exitBreak_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitBreak_stmt) {
			return visitor.visitBreak_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Continue_stmtContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(Python3Parser.CONTINUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_continue_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterContinue_stmt) {
			listener.enterContinue_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitContinue_stmt) {
			listener.exitContinue_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitContinue_stmt) {
			return visitor.visitContinue_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_stmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(Python3Parser.RETURN, 0); }
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_return_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterReturn_stmt) {
			listener.enterReturn_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitReturn_stmt) {
			listener.exitReturn_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitReturn_stmt) {
			return visitor.visitReturn_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yield_stmtContext extends ParserRuleContext {
	public yield_expr(): Yield_exprContext {
		return this.getRuleContext(0, Yield_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_yield_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterYield_stmt) {
			listener.enterYield_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitYield_stmt) {
			listener.exitYield_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitYield_stmt) {
			return visitor.visitYield_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raise_stmtContext extends ParserRuleContext {
	public RAISE(): TerminalNode { return this.getToken(Python3Parser.RAISE, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FROM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_raise_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterRaise_stmt) {
			listener.enterRaise_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitRaise_stmt) {
			listener.exitRaise_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitRaise_stmt) {
			return visitor.visitRaise_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_stmtContext extends ParserRuleContext {
	public import_name(): Import_nameContext | undefined {
		return this.tryGetRuleContext(0, Import_nameContext);
	}
	public import_from(): Import_fromContext | undefined {
		return this.tryGetRuleContext(0, Import_fromContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_import_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_stmt) {
			listener.enterImport_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_stmt) {
			listener.exitImport_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_stmt) {
			return visitor.visitImport_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_nameContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Python3Parser.IMPORT, 0); }
	public dotted_as_names(): Dotted_as_namesContext {
		return this.getRuleContext(0, Dotted_as_namesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_import_name; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_name) {
			listener.enterImport_name(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_name) {
			listener.exitImport_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_name) {
			return visitor.visitImport_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_fromContext extends ParserRuleContext {
	public FROM(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FROM, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IMPORT, 0); }
	public dotted_name(): Dotted_nameContext | undefined {
		return this.tryGetRuleContext(0, Dotted_nameContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.STAR, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); }
	public import_as_names(): Import_as_namesContext | undefined {
		return this.tryGetRuleContext(0, Import_as_namesContext);
	}
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.DOT);
		} else {
			return this.getToken(Python3Parser.DOT, i);
		}
	}
	public ELLIPSIS(): TerminalNode[];
	public ELLIPSIS(i: number): TerminalNode;
	public ELLIPSIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ELLIPSIS);
		} else {
			return this.getToken(Python3Parser.ELLIPSIS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_import_from; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_from) {
			listener.enterImport_from(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_from) {
			listener.exitImport_from(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_from) {
			return visitor.visitImport_from(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_as_nameContext extends ParserRuleContext {
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_import_as_name; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_as_name) {
			listener.enterImport_as_name(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_as_name) {
			listener.exitImport_as_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_as_name) {
			return visitor.visitImport_as_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dotted_as_nameContext extends ParserRuleContext {
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_dotted_as_name; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDotted_as_name) {
			listener.enterDotted_as_name(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDotted_as_name) {
			listener.exitDotted_as_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDotted_as_name) {
			return visitor.visitDotted_as_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_as_namesContext extends ParserRuleContext {
	public import_as_name(): Import_as_nameContext[];
	public import_as_name(i: number): Import_as_nameContext;
	public import_as_name(i?: number): Import_as_nameContext | Import_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Import_as_nameContext);
		} else {
			return this.getRuleContext(i, Import_as_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_import_as_names; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_as_names) {
			listener.enterImport_as_names(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_as_names) {
			listener.exitImport_as_names(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_as_names) {
			return visitor.visitImport_as_names(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dotted_as_namesContext extends ParserRuleContext {
	public dotted_as_name(): Dotted_as_nameContext[];
	public dotted_as_name(i: number): Dotted_as_nameContext;
	public dotted_as_name(i?: number): Dotted_as_nameContext | Dotted_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dotted_as_nameContext);
		} else {
			return this.getRuleContext(i, Dotted_as_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_dotted_as_names; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDotted_as_names) {
			listener.enterDotted_as_names(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDotted_as_names) {
			listener.exitDotted_as_names(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDotted_as_names) {
			return visitor.visitDotted_as_names(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dotted_nameContext extends ParserRuleContext {
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.DOT);
		} else {
			return this.getToken(Python3Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_dotted_name; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDotted_name) {
			listener.enterDotted_name(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDotted_name) {
			listener.exitDotted_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDotted_name) {
			return visitor.visitDotted_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_stmtContext extends ParserRuleContext {
	public GLOBAL(): TerminalNode { return this.getToken(Python3Parser.GLOBAL, 0); }
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_global_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterGlobal_stmt) {
			listener.enterGlobal_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitGlobal_stmt) {
			listener.exitGlobal_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitGlobal_stmt) {
			return visitor.visitGlobal_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Nonlocal_stmtContext extends ParserRuleContext {
	public NONLOCAL(): TerminalNode { return this.getToken(Python3Parser.NONLOCAL, 0); }
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_nonlocal_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterNonlocal_stmt) {
			listener.enterNonlocal_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitNonlocal_stmt) {
			listener.exitNonlocal_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitNonlocal_stmt) {
			return visitor.visitNonlocal_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assert_stmtContext extends ParserRuleContext {
	public ASSERT(): TerminalNode { return this.getToken(Python3Parser.ASSERT, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_assert_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAssert_stmt) {
			listener.enterAssert_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAssert_stmt) {
			listener.exitAssert_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAssert_stmt) {
			return visitor.visitAssert_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_stmtContext extends ParserRuleContext {
	public if_stmt(): If_stmtContext | undefined {
		return this.tryGetRuleContext(0, If_stmtContext);
	}
	public while_stmt(): While_stmtContext | undefined {
		return this.tryGetRuleContext(0, While_stmtContext);
	}
	public for_stmt(): For_stmtContext | undefined {
		return this.tryGetRuleContext(0, For_stmtContext);
	}
	public try_stmt(): Try_stmtContext | undefined {
		return this.tryGetRuleContext(0, Try_stmtContext);
	}
	public with_stmt(): With_stmtContext | undefined {
		return this.tryGetRuleContext(0, With_stmtContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public decorated(): DecoratedContext | undefined {
		return this.tryGetRuleContext(0, DecoratedContext);
	}
	public async_stmt(): Async_stmtContext | undefined {
		return this.tryGetRuleContext(0, Async_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_compound_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterCompound_stmt) {
			listener.enterCompound_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitCompound_stmt) {
			listener.exitCompound_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitCompound_stmt) {
			return visitor.visitCompound_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Async_stmtContext extends ParserRuleContext {
	public ASYNC(): TerminalNode { return this.getToken(Python3Parser.ASYNC, 0); }
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	public with_stmt(): With_stmtContext | undefined {
		return this.tryGetRuleContext(0, With_stmtContext);
	}
	public for_stmt(): For_stmtContext | undefined {
		return this.tryGetRuleContext(0, For_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_async_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAsync_stmt) {
			listener.enterAsync_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAsync_stmt) {
			listener.exitAsync_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAsync_stmt) {
			return visitor.visitAsync_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_stmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Python3Parser.IF, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COLON);
		} else {
			return this.getToken(Python3Parser.COLON, i);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public ELIF(): TerminalNode[];
	public ELIF(i: number): TerminalNode;
	public ELIF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ELIF);
		} else {
			return this.getToken(Python3Parser.ELIF, i);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_if_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterIf_stmt) {
			listener.enterIf_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitIf_stmt) {
			listener.exitIf_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitIf_stmt) {
			return visitor.visitIf_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_stmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(Python3Parser.WHILE, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COLON);
		} else {
			return this.getToken(Python3Parser.COLON, i);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_while_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterWhile_stmt) {
			listener.enterWhile_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitWhile_stmt) {
			listener.exitWhile_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitWhile_stmt) {
			return visitor.visitWhile_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_stmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Python3Parser.FOR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public IN(): TerminalNode { return this.getToken(Python3Parser.IN, 0); }
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COLON);
		} else {
			return this.getToken(Python3Parser.COLON, i);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_for_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFor_stmt) {
			listener.enterFor_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFor_stmt) {
			listener.exitFor_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFor_stmt) {
			return visitor.visitFor_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Try_stmtContext extends ParserRuleContext {
	public TRY(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.TRY, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COLON);
		} else {
			return this.getToken(Python3Parser.COLON, i);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FINALLY, 0); }
	public except_clause(): Except_clauseContext[];
	public except_clause(i: number): Except_clauseContext;
	public except_clause(i?: number): Except_clauseContext | Except_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Except_clauseContext);
		} else {
			return this.getRuleContext(i, Except_clauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_try_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTry_stmt) {
			listener.enterTry_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTry_stmt) {
			listener.exitTry_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTry_stmt) {
			return visitor.visitTry_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class With_stmtContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(Python3Parser.WITH, 0); }
	public with_item(): With_itemContext[];
	public with_item(i: number): With_itemContext;
	public with_item(i?: number): With_itemContext | With_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(With_itemContext);
		} else {
			return this.getRuleContext(i, With_itemContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_with_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterWith_stmt) {
			listener.enterWith_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitWith_stmt) {
			listener.exitWith_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitWith_stmt) {
			return visitor.visitWith_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class With_itemContext extends ParserRuleContext {
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_with_item; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterWith_item) {
			listener.enterWith_item(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitWith_item) {
			listener.exitWith_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitWith_item) {
			return visitor.visitWith_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Except_clauseContext extends ParserRuleContext {
	public EXCEPT(): TerminalNode { return this.getToken(Python3Parser.EXCEPT, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_except_clause; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExcept_clause) {
			listener.enterExcept_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExcept_clause) {
			listener.exitExcept_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExcept_clause) {
			return visitor.visitExcept_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuiteContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NEWLINE, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DEDENT, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_suite; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSuite) {
			listener.enterSuite(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSuite) {
			listener.exitSuite(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSuite) {
			return visitor.visitSuite(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestContext extends ParserRuleContext {
	public or_test(): Or_testContext[];
	public or_test(i: number): Or_testContext;
	public or_test(i?: number): Or_testContext | Or_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Or_testContext);
		} else {
			return this.getRuleContext(i, Or_testContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public lambdef(): LambdefContext | undefined {
		return this.tryGetRuleContext(0, LambdefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_test; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTest) {
			listener.enterTest(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTest) {
			listener.exitTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTest) {
			return visitor.visitTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Test_nocondContext extends ParserRuleContext {
	public or_test(): Or_testContext | undefined {
		return this.tryGetRuleContext(0, Or_testContext);
	}
	public lambdef_nocond(): Lambdef_nocondContext | undefined {
		return this.tryGetRuleContext(0, Lambdef_nocondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_test_nocond; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTest_nocond) {
			listener.enterTest_nocond(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTest_nocond) {
			listener.exitTest_nocond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTest_nocond) {
			return visitor.visitTest_nocond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdefContext extends ParserRuleContext {
	public LAMBDA(): TerminalNode { return this.getToken(Python3Parser.LAMBDA, 0); }
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_lambdef; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterLambdef) {
			listener.enterLambdef(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitLambdef) {
			listener.exitLambdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitLambdef) {
			return visitor.visitLambdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambdef_nocondContext extends ParserRuleContext {
	public LAMBDA(): TerminalNode { return this.getToken(Python3Parser.LAMBDA, 0); }
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public test_nocond(): Test_nocondContext {
		return this.getRuleContext(0, Test_nocondContext);
	}
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_lambdef_nocond; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterLambdef_nocond) {
			listener.enterLambdef_nocond(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitLambdef_nocond) {
			listener.exitLambdef_nocond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitLambdef_nocond) {
			return visitor.visitLambdef_nocond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Or_testContext extends ParserRuleContext {
	public and_test(): And_testContext[];
	public and_test(i: number): And_testContext;
	public and_test(i?: number): And_testContext | And_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_testContext);
		} else {
			return this.getRuleContext(i, And_testContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.OR);
		} else {
			return this.getToken(Python3Parser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_or_test; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterOr_test) {
			listener.enterOr_test(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitOr_test) {
			listener.exitOr_test(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitOr_test) {
			return visitor.visitOr_test(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_testContext extends ParserRuleContext {
	public not_test(): Not_testContext[];
	public not_test(i: number): Not_testContext;
	public not_test(i?: number): Not_testContext | Not_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Not_testContext);
		} else {
			return this.getRuleContext(i, Not_testContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.AND);
		} else {
			return this.getToken(Python3Parser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_and_test; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAnd_test) {
			listener.enterAnd_test(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAnd_test) {
			listener.exitAnd_test(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAnd_test) {
			return visitor.visitAnd_test(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Not_testContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT, 0); }
	public not_test(): Not_testContext | undefined {
		return this.tryGetRuleContext(0, Not_testContext);
	}
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_not_test; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterNot_test) {
			listener.enterNot_test(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitNot_test) {
			listener.exitNot_test(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitNot_test) {
			return visitor.visitNot_test(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public comp_op(): Comp_opContext[];
	public comp_op(i: number): Comp_opContext;
	public comp_op(i?: number): Comp_opContext | Comp_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comp_opContext);
		} else {
			return this.getRuleContext(i, Comp_opContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_comparison; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_opContext extends ParserRuleContext {
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.LESS_THAN, 0); }
	public GREATER_THAN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.GREATER_THAN, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.EQUALS, 0); }
	public GT_EQ(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.GT_EQ, 0); }
	public LT_EQ(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.LT_EQ, 0); }
	public NOT_EQ_1(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT_EQ_1, 0); }
	public NOT_EQ_2(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT_EQ_2, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_comp_op; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_op) {
			listener.enterComp_op(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_op) {
			listener.exitComp_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComp_op) {
			return visitor.visitComp_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_exprContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(Python3Parser.STAR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_star_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterStar_expr) {
			listener.enterStar_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitStar_expr) {
			listener.exitStar_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitStar_expr) {
			return visitor.visitStar_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public xor_expr(): Xor_exprContext[];
	public xor_expr(i: number): Xor_exprContext;
	public xor_expr(i?: number): Xor_exprContext | Xor_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xor_exprContext);
		} else {
			return this.getRuleContext(i, Xor_exprContext);
		}
	}
	public OR_OP(): TerminalNode[];
	public OR_OP(i: number): TerminalNode;
	public OR_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.OR_OP);
		} else {
			return this.getToken(Python3Parser.OR_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xor_exprContext extends ParserRuleContext {
	public and_expr(): And_exprContext[];
	public and_expr(i: number): And_exprContext;
	public and_expr(i?: number): And_exprContext | And_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_exprContext);
		} else {
			return this.getRuleContext(i, And_exprContext);
		}
	}
	public XOR(): TerminalNode[];
	public XOR(i: number): TerminalNode;
	public XOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.XOR);
		} else {
			return this.getToken(Python3Parser.XOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_xor_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterXor_expr) {
			listener.enterXor_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitXor_expr) {
			listener.exitXor_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitXor_expr) {
			return visitor.visitXor_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_exprContext extends ParserRuleContext {
	public shift_expr(): Shift_exprContext[];
	public shift_expr(i: number): Shift_exprContext;
	public shift_expr(i?: number): Shift_exprContext | Shift_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Shift_exprContext);
		} else {
			return this.getRuleContext(i, Shift_exprContext);
		}
	}
	public AND_OP(): TerminalNode[];
	public AND_OP(i: number): TerminalNode;
	public AND_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.AND_OP);
		} else {
			return this.getToken(Python3Parser.AND_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_and_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAnd_expr) {
			listener.enterAnd_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAnd_expr) {
			listener.exitAnd_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAnd_expr) {
			return visitor.visitAnd_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shift_exprContext extends ParserRuleContext {
	public arith_expr(): Arith_exprContext[];
	public arith_expr(i: number): Arith_exprContext;
	public arith_expr(i?: number): Arith_exprContext | Arith_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Arith_exprContext);
		} else {
			return this.getRuleContext(i, Arith_exprContext);
		}
	}
	public LEFT_SHIFT(): TerminalNode[];
	public LEFT_SHIFT(i: number): TerminalNode;
	public LEFT_SHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.LEFT_SHIFT);
		} else {
			return this.getToken(Python3Parser.LEFT_SHIFT, i);
		}
	}
	public RIGHT_SHIFT(): TerminalNode[];
	public RIGHT_SHIFT(i: number): TerminalNode;
	public RIGHT_SHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.RIGHT_SHIFT);
		} else {
			return this.getToken(Python3Parser.RIGHT_SHIFT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_shift_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterShift_expr) {
			listener.enterShift_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitShift_expr) {
			listener.exitShift_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitShift_expr) {
			return visitor.visitShift_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arith_exprContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public ADD(): TerminalNode[];
	public ADD(i: number): TerminalNode;
	public ADD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ADD);
		} else {
			return this.getToken(Python3Parser.ADD, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.MINUS);
		} else {
			return this.getToken(Python3Parser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_arith_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterArith_expr) {
			listener.enterArith_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitArith_expr) {
			listener.exitArith_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitArith_expr) {
			return visitor.visitArith_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.STAR);
		} else {
			return this.getToken(Python3Parser.STAR, i);
		}
	}
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.AT);
		} else {
			return this.getToken(Python3Parser.AT, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.DIV);
		} else {
			return this.getToken(Python3Parser.DIV, i);
		}
	}
	public MOD(): TerminalNode[];
	public MOD(i: number): TerminalNode;
	public MOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.MOD);
		} else {
			return this.getToken(Python3Parser.MOD, i);
		}
	}
	public IDIV(): TerminalNode[];
	public IDIV(i: number): TerminalNode;
	public IDIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.IDIV);
		} else {
			return this.getToken(Python3Parser.IDIV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_term; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ADD, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.MINUS, 0); }
	public NOT_OP(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT_OP, 0); }
	public power(): PowerContext | undefined {
		return this.tryGetRuleContext(0, PowerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_factor; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowerContext extends ParserRuleContext {
	public atom_expr(): Atom_exprContext {
		return this.getRuleContext(0, Atom_exprContext);
	}
	public POWER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.POWER, 0); }
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_power; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterPower) {
			listener.enterPower(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitPower) {
			listener.exitPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitPower) {
			return visitor.visitPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Atom_exprContext extends ParserRuleContext {
	public funccall(): FunccallContext | undefined {
		return this.tryGetRuleContext(0, FunccallContext);
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AWAIT, 0); }
	public trailer(): TrailerContext[];
	public trailer(i: number): TrailerContext;
	public trailer(i?: number): TrailerContext | TrailerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TrailerContext);
		} else {
			return this.getRuleContext(i, TrailerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_atom_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAtom_expr) {
			listener.enterAtom_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAtom_expr) {
			listener.exitAtom_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAtom_expr) {
			return visitor.visitAtom_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunccallContext extends ParserRuleContext {
	public funccallname(): FunccallnameContext {
		return this.getRuleContext(0, FunccallnameContext);
	}
	public OPEN_PAREN(): TerminalNode { return this.getToken(Python3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(Python3Parser.CLOSE_PAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_funccall; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFunccall) {
			listener.enterFunccall(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFunccall) {
			listener.exitFunccall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFunccall) {
			return visitor.visitFunccall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); }
	public OPEN_BRACK(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_BRACK, 0); }
	public CLOSE_BRACK(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_BRACK, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_BRACE, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NUMBER, 0); }
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELLIPSIS, 0); }
	public NONE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NONE, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FALSE, 0); }
	public yield_expr(): Yield_exprContext | undefined {
		return this.tryGetRuleContext(0, Yield_exprContext);
	}
	public testlist_comp(): Testlist_compContext | undefined {
		return this.tryGetRuleContext(0, Testlist_compContext);
	}
	public dictorsetmaker(): DictorsetmakerContext | undefined {
		return this.tryGetRuleContext(0, DictorsetmakerContext);
	}
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_atom; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(Python3Parser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_string; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_name; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunccallnameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_funccallname; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFunccallname) {
			listener.enterFunccallname(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFunccallname) {
			listener.exitFunccallname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFunccallname) {
			return visitor.visitFunccallname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Testlist_compContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_testlist_comp; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTestlist_comp) {
			listener.enterTestlist_comp(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTestlist_comp) {
			listener.exitTestlist_comp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTestlist_comp) {
			return visitor.visitTestlist_comp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrailerContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DOT, 0); }
	public funccall(): FunccallContext | undefined {
		return this.tryGetRuleContext(0, FunccallContext);
	}
	public OPEN_BRACK(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_BRACK, 0); }
	public subscriptlist(): SubscriptlistContext | undefined {
		return this.tryGetRuleContext(0, SubscriptlistContext);
	}
	public CLOSE_BRACK(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_BRACK, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_trailer; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTrailer) {
			listener.enterTrailer(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTrailer) {
			listener.exitTrailer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTrailer) {
			return visitor.visitTrailer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptlistContext extends ParserRuleContext {
	public subscript(): SubscriptContext[];
	public subscript(i: number): SubscriptContext;
	public subscript(i?: number): SubscriptContext | SubscriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptContext);
		} else {
			return this.getRuleContext(i, SubscriptContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_subscriptlist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSubscriptlist) {
			listener.enterSubscriptlist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSubscriptlist) {
			listener.exitSubscriptlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSubscriptlist) {
			return visitor.visitSubscriptlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.COLON, 0); }
	public sliceop(): SliceopContext | undefined {
		return this.tryGetRuleContext(0, SliceopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_subscript; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceopContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_sliceop; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSliceop) {
			listener.enterSliceop(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSliceop) {
			listener.exitSliceop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSliceop) {
			return visitor.visitSliceop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprlistContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_exprlist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExprlist) {
			listener.enterExprlist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExprlist) {
			listener.exitExprlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExprlist) {
			return visitor.visitExprlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestlistContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_testlist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTestlist) {
			listener.enterTestlist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTestlist) {
			listener.exitTestlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTestlist) {
			return visitor.visitTestlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictorsetmakerContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COLON);
		} else {
			return this.getToken(Python3Parser.COLON, i);
		}
	}
	public POWER(): TerminalNode[];
	public POWER(i: number): TerminalNode;
	public POWER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.POWER);
		} else {
			return this.getToken(Python3Parser.POWER, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_dictorsetmaker; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDictorsetmaker) {
			listener.enterDictorsetmaker(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDictorsetmaker) {
			listener.exitDictorsetmaker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDictorsetmaker) {
			return visitor.visitDictorsetmaker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassdefContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(Python3Parser.CLASS, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_classdef; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterClassdef) {
			listener.enterClassdef(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitClassdef) {
			listener.exitClassdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitClassdef) {
			return visitor.visitClassdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArglistContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_arglist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterArglist) {
			listener.enterArglist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitArglist) {
			listener.exitArglist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitArglist) {
			return visitor.visitArglist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ASSIGN, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.POWER, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.STAR, 0); }
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_argument; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_iterContext extends ParserRuleContext {
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public comp_if(): Comp_ifContext | undefined {
		return this.tryGetRuleContext(0, Comp_ifContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_comp_iter; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_iter) {
			listener.enterComp_iter(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_iter) {
			listener.exitComp_iter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComp_iter) {
			return visitor.visitComp_iter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_forContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Python3Parser.FOR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public IN(): TerminalNode { return this.getToken(Python3Parser.IN, 0); }
	public or_test(): Or_testContext {
		return this.getRuleContext(0, Or_testContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ASYNC, 0); }
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_comp_for; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_for) {
			listener.enterComp_for(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_for) {
			listener.exitComp_for(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComp_for) {
			return visitor.visitComp_for(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_ifContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Python3Parser.IF, 0); }
	public test_nocond(): Test_nocondContext {
		return this.getRuleContext(0, Test_nocondContext);
	}
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_comp_if; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_if) {
			listener.enterComp_if(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_if) {
			listener.exitComp_if(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComp_if) {
			return visitor.visitComp_if(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Encoding_declContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_encoding_decl; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterEncoding_decl) {
			listener.enterEncoding_decl(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitEncoding_decl) {
			listener.exitEncoding_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitEncoding_decl) {
			return visitor.visitEncoding_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yield_exprContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(Python3Parser.YIELD, 0); }
	public yield_arg(): Yield_argContext | undefined {
		return this.tryGetRuleContext(0, Yield_argContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_yield_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterYield_expr) {
			listener.enterYield_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitYield_expr) {
			listener.exitYield_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitYield_expr) {
			return visitor.visitYield_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yield_argContext extends ParserRuleContext {
	public FROM(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FROM, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_yield_arg; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterYield_arg) {
			listener.enterYield_arg(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitYield_arg) {
			listener.exitYield_arg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitYield_arg) {
			return visitor.visitYield_arg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


