import { TokenStreamRewriter } from 'antlr4ts'
import { CPP14ParserListener } from './CPP14ParserListener'
import HashData from '../../../../../utils/HashData'
import { DeclarationContext, FunctionBodyContext, FunctionDefinitionContext, IdExpressionContext, PrimaryExpressionContext } from './CPP14Parser'
import md5 from 'md5'

export default class CPPListener implements CPP14ParserListener {
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
    protected inFunction: boolean

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

        this.inFunction = true
    }

    enterFunctionDefinition(ctx: FunctionDefinitionContext) {
        this.tsrs.push(new TokenStreamRewriter(this.baseTSR.getTokenStream()))
        this.starts.push(ctx.start.line)

        this.functionBodies.push("")
        this.functionNames.push("")

        this.inFunction = true
    }

    exitFunctionDefinition(ctx: FunctionDefinitionContext) {
        const functionName = this.functionNames.pop() || ''
        const functionBody = (this.functionBodies.pop() || '').replace(/\s+/gm, '')

        const start = this.starts.pop() || 0
        const stop = ctx.stop?.line || 0

        console.log(functionName, functionBody)

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
        this.inFunction = true
    }

    exitFunctionBody(ctx: FunctionBodyContext) {
        this.functionBodies.pop()

        const tsr = this.tsrs[this.tsrs.length-1]
        this.functionBodies.push(tsr.getText(ctx.sourceInterval))
    }


    enterIdExpression(ctx: IdExpressionContext) {
        const name = this.functionNames.pop() || ''
        if (this.inFunction && !name) {
            this.functionNames.push(ctx.start.text)
        }

        if (name)
            this.functionNames.push(name)
        
        if (this.tsrs.length > 0) {
            this.tsrs[this.tsrs.length-1].replaceSingle(ctx.start, "var")
        } 
    };

    visitTerminal(ctx: any) {}
    visitErrorNode(ctx: any) {}
    enterEveryRule(ctx: any) {}
    exitEveryRule(ctx: any) {}

    GetData() {
        return this.output
    }
}