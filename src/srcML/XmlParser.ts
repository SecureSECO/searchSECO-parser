import md5 from "md5";
import HashData from "../HashData";
import { Language } from "../Parser";
import { ParserBase } from "../ParserBase";
import { execSync } from 'child_process'
import { Node, TagData } from './Node'
import StringStream from "./StringStream";
import { AbstractionData, GetHashable } from "./AbstractionData";


export default class XMLParser extends ParserBase {
    private readonly _language: Language
    private _inFunction: boolean = false
    private _parseFurther: boolean = true
    private _hashes: HashData[] = []
    private _current: Node
    private _tree: Node
    private readonly _minFunctionChars: number
    private readonly _minFunctionLines: number
    private _lineNumber: number = 0
    private _startLastFunction: number = 0
    private _currentFileName: string = ''
    private _functionCount: number = 0


    constructor(lang: Language, minFunctionChars: number = 0, minFunctionLines: number = 0) {
        super(true)
        this._language = lang
        this._minFunctionChars = minFunctionChars
        this._minFunctionLines = minFunctionLines
    }

    private getNextTag(stream: StringStream): TagData {
        const textBefore = stream.GetDataUntil([ '<' ], true).output
        let textIn = ''
        const { output: tag, brokeOn } = stream.GetDataUntil([ ' ', '>' ], false)
        if (brokeOn === ' ') {
            textIn = stream.GetDataUntil([ '>' ], false).output
        }
        this._lineNumber = stream.GetLastLineNumber()
        return new TagData(tag, textBefore, textIn)
    }

    private handleClosingTag(tagData: TagData) {
        if (tagData.tag.substring(1) !== this._current.GetTag()) {
            this._tree = new Node("unknown")
            this._current = this._tree
            this._inFunction = false
            return
        }
        const prev = this._current.GetPrevious()
        if (this._current.GetTag() === "function" && this._parseFurther) {
            const ab = GetHashable(this._current)
            if (ab.GetString().length > this._minFunctionChars  && this._lineNumber - this._startLastFunction > this._minFunctionLines) { 
                this._hashes.push(new HashData(
                    md5(ab.GetString()), 
                    this._currentFileName, 
                    ab.GetFunctionName(), 
                    this._startLastFunction, 
                    this._lineNumber
                ))
                this._functionCount++
            }

            prev.RemoveNode(this._current)
            this._inFunction = false
            this._current = undefined
        }
        this._current = prev
    }

    private handleOpeningTag(tagData: TagData) {
        if (tagData.tag !== "function" && !this._inFunction) {
            if (tagData.tag === "unit")
                this.handleUnitTag(tagData)
            return
        }
        else if (tagData.tag === "function") {
            this._inFunction = true
            this._startLastFunction = this._lineNumber
        }

        if (tagData.tag[tagData.tag.length - 1] === "/")
            tagData.tag = tagData.tag.slice(0,-1) + " /"

        const node = new Node(tagData.tag, tagData.textInTag, this._current)
        this._current.AddNode(node)
        if (!(tagData.textInTag.length > 0 && tagData.textInTag[tagData.textInTag.length-1] === "/")) {
            this._current = node
        }
    }

    
    private handleUnitTag(tagData: TagData) {
        // Do nothing for now
    }

    private parseXMLStream(input: string): HashData[] {
		const stream = new StringStream(input)

        this._tree = new Node("unknown")
        const firstTag = this.getNextTag(stream)
        if (stream.Empty() && firstTag.tag === "")
            return
		if (firstTag.tag !== "?xml") {
            this._tree = undefined
			return []
        }
		this._current = this._tree

		while (!stream.Empty()) {
			const tagData = this.getNextTag(stream)

			if (tagData.textBefore !== "" && this._inFunction)
				this._current.AddNode(new Node(this._current.GetTag(), tagData.textBefore, this._current))

			if (tagData.tag[0] === "/" && this._inFunction)
                this.handleClosingTag(tagData)

			else if (tagData.tag.substring(0,7) === "comment")
				while (this.getNextTag(stream).tag !== "/comment") {}
			else {
                this.handleOpeningTag(tagData)
			}
		}
        return this._hashes
    }

    private async parseToXML(path: string): Promise<string> {
        const cmd = `srcml ${path} -l ${this._language}`
        try {
            const stdout = execSync(cmd)
            return stdout.toString()
        }
        catch (err) {
            console.log(err.toString())
            return ''
        }
    }

    protected async parseSingle(data: string, filename: string): Promise<HashData[]> {
        this._currentFileName = filename
        const xmlString = await this.parseToXML(filename)
        const parsed = this.parseXMLStream(xmlString)
        this.Reset()
        return parsed
    }

    private Reset() {
        this._inFunction = false
        this._parseFurther = true
        this._hashes = []
        this._current = undefined
        this._tree = undefined
        this._lineNumber = 0
        this._startLastFunction = 0
        this._currentFileName = ''
        this._functionCount = 0
    }
}