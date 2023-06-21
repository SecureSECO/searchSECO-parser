/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Node } from './Node'

function collapseNodes(node: Node, abstraction: AbstractionData, inFunction: boolean) {
    const children = node.GetBranches()
    nodeToString(node, abstraction, inFunction)

    children.forEach((child: Node) => {
        collapseNodes(child, abstraction, inFunction)
    })
}

function nodeToString(node: Node, abstraction: AbstractionData, inFunction: boolean) {
    if (node.GetBranches().length > 0)
        return
    
    const content = node.GetContent()
    if (!content)
        return
    
    const tag = node.GetTag()
    switch (tag) {
        case "name": {
            let parent = node.GetPrevious()
            if (parent) {
                while (parent.GetTag() === "name") 
                    parent = parent.GetPrevious()

                if (parent.GetTag() === "type") {
                    if (inFunction) 
                        abstraction.AddString(content)
                    return
                } else if (parent.GetTag() === "call") {
                    if (inFunction)
                        abstraction.AddString("funccall")
                    return
                } else if (parent.GetTag() === "function") {
                    if (inFunction)
                        abstraction.AddString("funcname")
                    abstraction.SetFunctionName(content)
                    return
                }
            }

            if (inFunction)
                abstraction.AddString("var")
            break
        }
        default: {
            if (inFunction)
                abstraction.AddString(content)
            break
        }
    }
}

export function GetHashable(node: Node): AbstractionData {
    const abstraction = new AbstractionData()
    node.GetBranches().forEach((child: Node) => {
        if (child.GetTag() === "block") {
            child.GetBranches().forEach((grandChild: Node) => {
                if (grandChild.GetTag() === "block_content") {
                    collapseNodes(grandChild, abstraction, true)
                }
            })
        } else {
            collapseNodes(child, abstraction, false)
        }
    })
    return abstraction
}

export class AbstractionData {
    private _data: string
    private _funcName: string

    constructor(string = '', funcName = '') {
        this._data = string
        this._funcName = funcName
    }

    public GetString() {
        return this._data
    }

    public GetFunctionName() {
        return this._funcName
    }

    public AddString(str: string) {
        this._data = this._data.concat(str)
    }

    public SetFunctionName(name: string) {
        this._funcName = name
    }
}
