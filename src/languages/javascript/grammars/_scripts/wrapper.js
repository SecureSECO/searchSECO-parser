/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// eslump fuzz test warpper. we haven't pass it yet...
var cp = require("child_process");
var fs = require("fs");
var os = require("os");
module.exports = ({
    code,
    sourceType,
    reproductionData = {}
}) => {
    fs.writeFileSync("gen/temp.js", code);
    var posixcmd = "cd gen && grun JavaScript program temp.js 2>&1 1>/dev/null";
    var cmd = {
        aix: posixcmd,
        // android: posixcmd
        darwin: posixcmd,
        freebsd: posixcmd,
        linux: posixcmd,
        openbsd: posixcmd,
        // sunos: posixcmd,
        win32: "cd gen && grun JavaScript program temp.js 2>&1 1>NUL",

    }
    var child = cp.execSync(cmd[os.platform()]).toString()
    
    if (child.length > 0) {
        console.log('')
        console.log(child)
        return {
            child,
            reproductionData
        };
    }
};
