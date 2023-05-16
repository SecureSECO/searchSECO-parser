import { JavaScriptParserListener } from "./JavaScriptParserListener";
import md5 from 'md5'
import HashData from "../../../../../utils/HashData";
import { TokenStreamRewriter } from "antlr4ts";
import Interval from "antlr4/misc/Interval";
import { 
    AnonymousFunctionDeclContext, 
    FunctionBodyContext, 
    FunctionDeclarationContext, 
    IdentifierContext } 
    from "./JavaScriptParser";

export default class JSListener implements JavaScriptParserListener {
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
    protected inNonAbsoluteFunctionDef: boolean

    constructor(tsr: TokenStreamRewriter, filename: string, minMethodSize: number, minFunctionChars: number) {
        this.minMethodSize = minMethodSize || 0
        this.minFunctionChars = minFunctionChars || 0

        this.baseTSR = tsr
        this.filename = filename
        this.output = [] as HashData[]
        this.starts = [] as number[]
        this.tsrs = [] as TokenStreamRewriter[]
        this.functionNames = [] as string[]
        this.functionBodies = [] as string[]
        this.stop = 0

        this.inNonAbsoluteFunctionDef = true
    }

    enterAnonymousFunctionDecl(ctx: AnonymousFunctionDeclContext) {
        this.tsrs.push(new TokenStreamRewriter(this.baseTSR.getTokenStream()))
        this.starts.push(ctx.start.line)

        this.functionBodies.push("")
        this.functionNames.push("<anonymous>")

        this.inNonAbsoluteFunctionDef = false
    }

    exitAnonymousFunctionDecl(ctx: AnonymousFunctionDeclContext) {
        const functionName = this.functionNames.pop() || ''
        const functionBody = (this.functionBodies.pop() || '').replace(/\s+/gm, '')

        const start = this.starts.pop() || 0
        const stop = ctx.stop?.line || 0

        if (stop - start >= this.minMethodSize)
            this.output.push(new HashData(md5(functionBody), this.filename, functionName, start, stop))

        this.tsrs.pop()
        if (this.tsrs.length > 0) {
            this.tsrs[this.tsrs.length-1].replace(ctx.start.tokenIndex, ctx.stop?.tokenIndex||0, "var")
        }
    }

    enterFunctionDeclaration(ctx: FunctionDeclarationContext) {
        this.tsrs.push(new TokenStreamRewriter(this.baseTSR.getTokenStream()))
        this.starts.push(ctx.start.line)

        this.functionBodies.push("")
        this.functionNames.push("")

        this.inNonAbsoluteFunctionDef = true
    }

    exitFunctionDeclaration(ctx: FunctionDeclarationContext) {
        const functionName = this.functionNames.pop() || ''
        const functionBody = (this.functionBodies.pop() ||'').replace(/\s+/gm, '')

        const start = this.starts.pop() || 0
        const stop = ctx.stop?.line || 0

        if (stop - start >= this.minMethodSize) {
            const hashData = new HashData(md5(functionBody), this.filename, functionName, start, stop)
            this.output.push(hashData)
        }

        this.tsrs.pop()
        if (this.tsrs.length > 0) {
            this.tsrs[this.tsrs.length-1].replace(ctx.start.tokenIndex, ctx.stop?.tokenIndex || 0, "var")
        }
    }

    enterFunctionBody(ctx: FunctionBodyContext) {
        this.inNonAbsoluteFunctionDef = false
    }

    exitFunctionBody(ctx: FunctionBodyContext) {
        this.functionBodies.pop()

        const tsr = this.tsrs[this.tsrs.length-1]
        this.functionBodies.push(tsr.getText(ctx.sourceInterval))
    }

    enterIdentifier(ctx: IdentifierContext) {
        const name = this.functionNames.pop() || ''
        if (this.inNonAbsoluteFunctionDef && !name) {
            this.functionNames.push(ctx.start.text||'')
        }

        if (name)
            this.functionNames.push(name)
        
        if (this.tsrs.length > 0) {
            this.tsrs[this.tsrs.length-1].replaceSingle(ctx.start, "var")
        } 
    }

    visitTerminal(ctx: any) {}
    visitErrorNode(ctx: any) {}
    enterEveryRule(ctx: any) {}
    exitEveryRule(ctx: any) {}

    GetData() {
        return this.output
    }

}