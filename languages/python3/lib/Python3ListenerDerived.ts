import { TokenStreamRewriter } from "antlr4ts";
import { Python3Listener } from "./Python3Listener";
import { Expr_stmt_singleContext, FuncbodyContext, FunccallnameContext, FuncdefContext, NameContext, StringContext, SuiteContext } from "./Python3Parser";
import HashData from "../../../../../utils/HashData";
import md5 from "md5";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

export default class P3Listener implements Python3Listener {
    protected minMethodSize: number
    protected minFunctionChars: number
    protected readonly baseTSR: TokenStreamRewriter
    protected readonly filename: string
    protected readonly output: HashData[]
    protected readonly starts: number[]
    protected readonly tsrs: TokenStreamRewriter[]
    protected readonly functionNames: string[]
    protected readonly functionBodies: string[]
    protected stop: number
    protected inFunction: boolean = false
    protected inSingleStatement: boolean = false
    
    constructor(tsr: TokenStreamRewriter, filename: string, minMethodSize: number, minFunctionChars: number) {
        this.baseTSR = tsr
        this.filename = filename
        this.output = []
        this.starts = []
        this.tsrs = []
        this.functionBodies = []
        this.functionNames = []
        this.stop = 0
        this.minMethodSize = minMethodSize
        this.minFunctionChars = minFunctionChars
    }

    enterFuncdef(ctx: FuncdefContext) {
        this.tsrs.push(new TokenStreamRewriter(this.baseTSR.getTokenStream()))
        this.starts.push(ctx.start.line)

        this.functionBodies.push("")
        this.functionNames.push("")
    }

    exitFuncdef(ctx: FuncdefContext) {
        const functionName = this.functionNames.pop() || ''
        const functionBody = (this.functionBodies.pop() || '').replace(/\s+/gm, '')

        const start = this.starts.pop() || 0
        const stop = ctx.stop?.line || 0

        if (stop - start >= this.minMethodSize) {
            const hashData = new HashData(md5(functionBody), this.filename, functionName, start, stop)
            this.output.push(hashData)
        }

        this.inFunction = false

        this.tsrs.pop()
        if (this.tsrs.length > 0) {
            this.tsrs[this.tsrs.length-1].replace(ctx.start.tokenIndex, ctx.stop?.tokenIndex || 0, "")
        }
    }

    enterFuncbody(ctx: FuncbodyContext) {
        this.inFunction = true
    }

    exitFuncbody(ctx: FuncbodyContext) {
        this.functionBodies.pop()

        const tsr = this.tsrs[this.tsrs.length-1]
        this.functionBodies.push(tsr.getText(ctx.sourceInterval))
    }

    enterName(ctx: NameContext) {
        
        if (this.tsrs.length > 0) {
            const name = this.functionNames[this.functionNames.length-1]
            if (!name) {
                this.functionNames.push(ctx.start.text || '')
            }
    
            if (this.inFunction)
                this.tsrs[this.tsrs.length-1].replaceSingle(ctx.start, "var")
            
        } 
    }

    enterFunccallname(ctx: FunccallnameContext) {
        if (this.tsrs.length > 0) {
            this.tsrs[this.tsrs.length-1].replaceSingle(ctx.start, "funccall")
        } 
    }

    enterExpr_stmt_single(ctx: Expr_stmt_singleContext){
        this.inSingleStatement = true
    }

    exitExpr_stmt_single(ctx: Expr_stmt_singleContext){
        this.inSingleStatement = false
    }

    enterString(ctx: StringContext) {
        if (this.inSingleStatement && this.tsrs.length > 0) {
            this.tsrs[this.tsrs.length-1].replace(ctx.start.tokenIndex, ctx.start.tokenIndex, "")
        }
    }

    visitTerminal(ctx: any) {

    }

    visitErrorNode(ctx: any) {

    }

    enterEveryRule(ctx: any) {

    }

    exitEveryRule(ctx: any) {

    }



    GetData() {
        return this.output
    }

}