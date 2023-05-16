import StringStream from "./StringStream";


export enum Tag {
    "name",
	"block",
	"break",
	"case",
	"continue",
	"default",
	"do",
	"empty_stmt",
	"expr_stmt",
	"for",
	"goto",
	"if_stmt",
	"label",
	"return",
	"switch",
	"while",
	"block_content",
	"condition",
	"control",
	"else",
	"expr",
	"if",
	"incr",
	"then",
	"type",
	"specifier",
	"extern",
	"decl",
	"init",
	"range",
	"function_decl",
	"function",
	"modifier",
	"typedef",
	"decl_stmt",
	"enum_decl",
	"enum",
	"struct_decl",
	"struct",
	"union_decl",
	"union",
	"index",
	"call",
	"ternary",
	"alignas",
	"alignof",
	"atomic",
	"generic_selection",
	"asm",
	"association",
	"association_list",
	"selector",
	"sizeof",
	"annotation",
	"annotation_defn",
	"assert",
	"attribute",
	"by",
	"capture",
	"cast",
	"catch",
	"checked",
	"class",
	"class_decl",
	"comment",
	"constraint",
	"constructor",
	"constructor_decl",
	"decltype",
	"delegate",
	"destructor",
	"destructor_decl",
	"equals",
	"escape",
	"event",
	"extends",
	"finally",
	"fixed",
	"foreach",
	"forever",
	"friend",
	"from",
	"group",
	"implements",
	"import",
	"in",
	"interface",
	"interface_decl",
	"into",
	"join",
	"lambda",
	"let",
	"linq",
	"literal",
	"lock",
	"namespace",
	"noexcept",
	"on",
	"operator",
	"orderby",
	"package",
	"parameter_list",
	"private",
	"protected",
	"public",
	"ref_qualifier",
	"select",
	"static",
	"super_list",
	"synchronized",
	"template",
	"throw",
	"throws",
	"try",
	"typeid",
	"typename",
	"typeof",
	"unchecked",
	"unsafe",
	"using",
	"where",
	"omp:argument",
	"omp:argument_list",
	"omp:clause",
	"omp:directive",
	"omp:expr",
	"omp:name",
	"cpp:define",
	"cpp:directive",
	"cpp:elif",
	"cpp:else",
	"cpp:empty",
	"cpp:endif",
	"cpp:endregion",
	"cpp:error",
	"cpp:file",
	"cpp:if",
	"cpp:ifdef",
	"cpp:ifndef",
	"cpp:include",
	"cpp:line",
	"cpp:literal",
	"cpp:macro",
	"cpp:number",
	"cpp:pragma",
	"cpp:region",
	"cpp:undef",
	"cpp:value",
	"cpp:warning",
	"argument_list",
	"parameter",
	"argument",
	"macro",
    "unknown",
	""
}

export class TagData {
    public tag: string;
    public textBefore: string;
    public textInTag: string;

    constructor(tag: string, textBefore: string, textInTag: string) {
        this.tag = tag,
        this.textBefore = textBefore,
        this.textInTag = textInTag
    }
}


export class Node {
    private _children: Node[] = []
    private _previous: Node | undefined = undefined
    private _content: string = ''
    private _tag: string

    constructor(tag: string, content?: string, previous?: Node) {
        if (previous) this._previous = previous
        if (content) this._content = content
        this._tag = tag
    }

    public GetBranches(): Node[] {
        return this._children
    }

    public GetContent(): string {
        return this._content
    }

    public AddNode(node: Node): void {
        this._children.push(node)
    }

    public RemoveNode(node: Node): void {
        for (let i = 0; i < this._children.length; i++) {
            if (this._children[i] == node) {
                this._children = this._children.slice(i,i)
            }
        }
    }

    public SetContent(content: string) {
        this._content = content
    }

    public GetPrevious() : Node {
        return this._previous
    }

    public GetTag() {
        return this._tag
    }

    public IsEqual(node: Node): boolean {
        const other = node.GetBranches()
        if (other.length != this._children.length)
            return false
        for (let i = 0; i < this._children.length; i++) {
            if (!this._children[i].IsEqual(other[i]))
                return false
        }
        return this._tag == node.GetTag() && this._content === node.GetContent()
    }

}