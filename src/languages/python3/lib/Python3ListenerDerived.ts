/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * � Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TokenStreamRewriter } from "antlr4ts";
import { Python3Listener } from "./Python3Listener";
import { FuncbodyContext, FunccallnameContext, FuncdefContext, NameContext, StringContext } from "./Python3Parser";
import HashData from "../../../HashData";
import md5 from "md5";

export default class CustomPython3Listener implements Python3Listener {
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
    protected inFunction = false
    protected inSingleStatement = false

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
        // console.log(`Method ${functionName}\t${functionBody.length}\t${functionBody}`);
        if (functionBody.length >= this.minFunctionChars && stop - start >= this.minMethodSize) {
            const hashData = new HashData(md5(functionBody), this.filename, functionName, start, stop)
            this.output.push(hashData)
        }

        this.inFunction = false

        this.tsrs.pop()
        if (this.tsrs.length > 0) {
            this.tsrs[this.tsrs.length - 1].replace(ctx.start.tokenIndex, ctx.stop?.tokenIndex || 0, "")
        }
    }

    enterFuncbody() {
        this.inFunction = true
    }

    exitFuncbody(ctx: FuncbodyContext) {
        this.functionBodies.pop()

        const tsr = this.tsrs[this.tsrs.length - 1]
        this.functionBodies.push(tsr.getText(ctx.sourceInterval))
    }

    enterName(ctx: NameContext) {
        if (this.tsrs.length > 0) {
            const name = this.functionNames[this.functionNames.length - 1]
            if (!name) {
                this.functionNames.push(ctx.start.text || '')
            }
            if (this.inFunction)
                this.tsrs[this.tsrs.length - 1].replaceSingle(ctx.start, "var")

        }
    }

    enterFunccallname(ctx: FunccallnameContext) {
        if (this.tsrs.length > 0) {
            this.tsrs[this.tsrs.length - 1].replaceSingle(ctx.start, "funccall")
        }
    }

    enterExpr_stmt_single() {
        this.inSingleStatement = true
    }

    exitExpr_stmt_single() {
        this.inSingleStatement = false
    }

    enterString(ctx: StringContext) {
        if (this.inSingleStatement && this.tsrs.length > 0) {
            this.tsrs[this.tsrs.length - 1].replace(ctx.start.tokenIndex, ctx.start.tokenIndex, "")
        }
    }

    visitTerminal() {
        /* empty */
    }

    visitErrorNode() {
        /* empty */
    }

    enterEveryRule() {
        /* empty */
    }

    exitEveryRule() {
        /* empty */
    }



    GetData() {
        return this.output
    }

}
