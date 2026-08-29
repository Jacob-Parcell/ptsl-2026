(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/clone.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>clone
]);
function cloneRegExp(re) {
    var _a;
    const regexMatch = /^\/(.*)\/([gimyu]*)$/.exec(re.toString());
    if (!regexMatch) {
        throw new Error("Invalid RegExp");
    }
    return new RegExp((_a = regexMatch[1]) !== null && _a !== void 0 ? _a : "", regexMatch[2]);
}
function clone(arg) {
    if (typeof arg !== "object") {
        return arg;
    }
    if (arg === null) {
        return null;
    }
    if (Array.isArray(arg)) {
        return arg.map(clone);
    }
    if (arg instanceof Date) {
        return new Date(arg.getTime());
    }
    if (arg instanceof RegExp) {
        return cloneRegExp(arg);
    }
    const cloned = {};
    for(const name in arg){
        if (Object.prototype.hasOwnProperty.call(arg, name)) {
            cloned[name] = clone(arg[name]);
        }
    }
    return cloned;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/assertions/arrays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertArrayHasAtLeast2",
    ()=>assertArrayHasAtLeast2,
    "assertArrayHasExactly1",
    ()=>assertArrayHasExactly1,
    "assertArrayHasExactly2",
    ()=>assertArrayHasExactly2,
    "assertNonEmptyArray",
    ()=>assertNonEmptyArray,
    "isArrayWithAtLeast2",
    ()=>isArrayWithAtLeast2,
    "isArrayWithAtLeast3",
    ()=>isArrayWithAtLeast3,
    "isArrayWithExactly1",
    ()=>isArrayWithExactly1,
    "isArrayWithExactly2",
    ()=>isArrayWithExactly2,
    "isArrayWithExactly3",
    ()=>isArrayWithExactly3,
    "isNonEmptyArray",
    ()=>isNonEmptyArray,
    "lastNonEmpty",
    ()=>lastNonEmpty
]);
function assertNonEmptyArray(arr, message) {
    if (arr.length === 0) {
        throw new Error(message || "Expected a non-empty array");
    }
}
function assertArrayHasExactly2(arr, message) {
    if (arr.length !== 2) {
        throw new Error(message || "Expected an array with exactly 2 items");
    }
}
function assertArrayHasExactly1(arr, message) {
    if (arr.length !== 1) {
        throw new Error(message || "Expected an array with exactly 1 item");
    }
}
function assertArrayHasAtLeast2(arr, message) {
    if (arr.length < 2) {
        throw new Error(message || "Expected an array with at least 2 items");
    }
}
function isNonEmptyArray(arr) {
    return arr.length > 0;
}
function isArrayWithAtLeast2(arr) {
    return arr.length >= 2;
}
function isArrayWithAtLeast3(arr) {
    return arr.length >= 3;
}
function isArrayWithExactly1(arr) {
    return arr.length === 1;
}
function isArrayWithExactly2(arr) {
    return arr.length === 2;
}
function isArrayWithExactly3(arr) {
    return arr.length === 3;
}
const lastNonEmpty = (arr)=>arr[arr.length - 1];
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Context
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$assertions$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/assertions/arrays.js [app-client] (ecmascript)");
;
class Context {
    setResult(result) {
        this.result = result;
        this.hasResult = true;
        return this;
    }
    exit() {
        this.exiting = true;
        return this;
    }
    push(child, name) {
        child.parent = this;
        if (typeof name !== "undefined") {
            child.childName = name;
        }
        child.root = this.root || this;
        child.options = child.options || this.options;
        if (!this.children) {
            this.children = [
                child
            ];
            this.nextAfterChildren = this.next || null;
            this.next = child;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$assertions$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNonEmptyArray"])(this.children);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$assertions$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastNonEmpty"])(this.children).next = child;
            this.children.push(child);
        }
        child.next = this;
        return this;
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/diff.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/clone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/context.js [app-client] (ecmascript)");
;
;
class DiffContext extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(left, right){
        super();
        this.left = left;
        this.right = right;
        this.pipe = "diff";
    }
    prepareDeltaResult(result) {
        var _a, _b, _c, _d;
        if (typeof result === "object") {
            if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.omitRemovedValues) && Array.isArray(result) && result.length > 1 && (result.length === 2 || // modified
            result[2] === 0 || // deleted
            result[2] === 3) // moved
            ) {
                // omit the left/old value (this delta will be more compact but irreversible)
                result[0] = 0;
            }
            if ((_b = this.options) === null || _b === void 0 ? void 0 : _b.cloneDiffValues) {
                const clone = typeof ((_c = this.options) === null || _c === void 0 ? void 0 : _c.cloneDiffValues) === "function" ? (_d = this.options) === null || _d === void 0 ? void 0 : _d.cloneDiffValues : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
                if (typeof result[0] === "object") {
                    result[0] = clone(result[0]);
                }
                if (typeof result[1] === "object") {
                    result[1] = clone(result[1]);
                }
            }
        }
        return result;
    }
    setResult(result) {
        this.prepareDeltaResult(result);
        return super.setResult(result);
    }
}
const __TURBOPACK__default__export__ = DiffContext;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/patch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/context.js [app-client] (ecmascript)");
;
class PatchContext extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(left, delta){
        super();
        this.left = left;
        this.delta = delta;
        this.pipe = "patch";
    }
}
const __TURBOPACK__default__export__ = PatchContext;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/reverse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/context.js [app-client] (ecmascript)");
;
class ReverseContext extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(delta){
        super();
        this.delta = delta;
        this.pipe = "reverse";
    }
}
const __TURBOPACK__default__export__ = ReverseContext;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/pipe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class Pipe {
    constructor(name){
        this.name = name;
        this.filters = [];
    }
    process(input) {
        if (!this.processor) {
            throw new Error("add this pipe to a processor before using it");
        }
        const debug = this.debug;
        const length = this.filters.length;
        const context = input;
        for(let index = 0; index < length; index++){
            const filter = this.filters[index];
            if (!filter) continue;
            if (debug) {
                this.log(`filter: ${filter.filterName}`);
            }
            filter(context);
            if (typeof context === "object" && context.exiting) {
                context.exiting = false;
                break;
            }
        }
        if (!context.next && this.resultCheck) {
            this.resultCheck(context);
        }
    }
    log(msg) {
        console.log(`[jsondiffpatch] ${this.name} pipe, ${msg}`);
    }
    append(...args) {
        this.filters.push(...args);
        return this;
    }
    prepend(...args) {
        this.filters.unshift(...args);
        return this;
    }
    indexOf(filterName) {
        if (!filterName) {
            throw new Error("a filter name is required");
        }
        for(let index = 0; index < this.filters.length; index++){
            const filter = this.filters[index];
            if ((filter === null || filter === void 0 ? void 0 : filter.filterName) === filterName) {
                return index;
            }
        }
        throw new Error(`filter not found: ${filterName}`);
    }
    list() {
        return this.filters.map((f)=>f.filterName);
    }
    after(filterName, ...params) {
        const index = this.indexOf(filterName);
        this.filters.splice(index + 1, 0, ...params);
        return this;
    }
    before(filterName, ...params) {
        const index = this.indexOf(filterName);
        this.filters.splice(index, 0, ...params);
        return this;
    }
    replace(filterName, ...params) {
        const index = this.indexOf(filterName);
        this.filters.splice(index, 1, ...params);
        return this;
    }
    remove(filterName) {
        const index = this.indexOf(filterName);
        this.filters.splice(index, 1);
        return this;
    }
    clear() {
        this.filters.length = 0;
        return this;
    }
    shouldHaveResult(should) {
        if (should === false) {
            this.resultCheck = null;
            return this;
        }
        if (this.resultCheck) {
            return this;
        }
        this.resultCheck = (context)=>{
            if (!context.hasResult) {
                console.log(context);
                const error = new Error(`${this.name} failed`);
                error.noResult = true;
                throw error;
            }
        };
        return this;
    }
}
const __TURBOPACK__default__export__ = Pipe;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/processor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
class Processor {
    constructor(options){
        this.selfOptions = options || {};
        this.pipes = {};
    }
    options(options) {
        if (options) {
            this.selfOptions = options;
        }
        return this.selfOptions;
    }
    pipe(name, pipeArg) {
        let pipe = pipeArg;
        if (typeof name === "string") {
            if (typeof pipe === "undefined") {
                return this.pipes[name];
            }
            this.pipes[name] = pipe;
        }
        if (name && name.name) {
            pipe = name;
            if (pipe.processor === this) {
                return pipe;
            }
            this.pipes[pipe.name] = pipe;
        }
        if (!pipe) {
            throw new Error(`pipe is not defined: ${name}`);
        }
        pipe.processor = this;
        return pipe;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    process(input, pipe) {
        let context = input;
        context.options = this.options();
        let nextPipe = pipe || input.pipe || "default";
        let lastPipe = undefined;
        while(nextPipe){
            if (typeof context.nextAfterChildren !== "undefined") {
                // children processed and coming back to parent
                context.next = context.nextAfterChildren;
                context.nextAfterChildren = null;
            }
            if (typeof nextPipe === "string") {
                nextPipe = this.pipe(nextPipe);
            }
            nextPipe.process(context);
            lastPipe = nextPipe;
            nextPipe = null;
            if (context) {
                if (context.next) {
                    context = context.next;
                    nextPipe = context.pipe || lastPipe;
                }
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return context.hasResult ? context.result : undefined;
    }
}
const __TURBOPACK__default__export__ = Processor;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/filters/lcs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*

LCS implementation that supports arrays or strings

reference: http://en.wikipedia.org/wiki/Longest_common_subsequence_problem

*/ const defaultMatch = (array1, array2, index1, index2)=>array1[index1] === array2[index2];
const lengthMatrix = (array1, array2, match, context)=>{
    var _a, _b, _c;
    const len1 = array1.length;
    const len2 = array2.length;
    let x;
    let y;
    // initialize empty matrix of len1+1 x len2+1
    const matrix = new Array(len1 + 1);
    for(x = 0; x < len1 + 1; x++){
        const matrixNewRow = new Array(len2 + 1);
        for(y = 0; y < len2 + 1; y++){
            matrixNewRow[y] = 0;
        }
        matrix[x] = matrixNewRow;
    }
    matrix.match = match;
    // save sequence lengths for each coordinate
    for(x = 1; x < len1 + 1; x++){
        const matrixRowX = matrix[x];
        if (matrixRowX === undefined) {
            throw new Error("LCS matrix row is undefined");
        }
        const matrixRowBeforeX = matrix[x - 1];
        if (matrixRowBeforeX === undefined) {
            throw new Error("LCS matrix row is undefined");
        }
        for(y = 1; y < len2 + 1; y++){
            if (match(array1, array2, x - 1, y - 1, context)) {
                matrixRowX[y] = ((_a = matrixRowBeforeX[y - 1]) !== null && _a !== void 0 ? _a : 0) + 1;
            } else {
                matrixRowX[y] = Math.max((_b = matrixRowBeforeX[y]) !== null && _b !== void 0 ? _b : 0, (_c = matrixRowX[y - 1]) !== null && _c !== void 0 ? _c : 0);
            }
        }
    }
    return matrix;
};
const backtrack = (matrix, array1, array2, context)=>{
    let index1 = array1.length;
    let index2 = array2.length;
    const subsequence = {
        sequence: [],
        indices1: [],
        indices2: []
    };
    while(index1 !== 0 && index2 !== 0){
        if (matrix.match === undefined) {
            throw new Error("LCS matrix match function is undefined");
        }
        const sameLetter = matrix.match(array1, array2, index1 - 1, index2 - 1, context);
        if (sameLetter) {
            subsequence.sequence.unshift(array1[index1 - 1]);
            subsequence.indices1.unshift(index1 - 1);
            subsequence.indices2.unshift(index2 - 1);
            --index1;
            --index2;
        } else {
            const matrixRowIndex1 = matrix[index1];
            if (matrixRowIndex1 === undefined) {
                throw new Error("LCS matrix row is undefined");
            }
            const valueAtMatrixAbove = matrixRowIndex1[index2 - 1];
            if (valueAtMatrixAbove === undefined) {
                throw new Error("LCS matrix value is undefined");
            }
            const matrixRowBeforeIndex1 = matrix[index1 - 1];
            if (matrixRowBeforeIndex1 === undefined) {
                throw new Error("LCS matrix row is undefined");
            }
            const valueAtMatrixLeft = matrixRowBeforeIndex1[index2];
            if (valueAtMatrixLeft === undefined) {
                throw new Error("LCS matrix value is undefined");
            }
            if (valueAtMatrixAbove > valueAtMatrixLeft) {
                --index2;
            } else {
                --index1;
            }
        }
    }
    return subsequence;
};
const get = (array1, array2, match, context)=>{
    const innerContext = context || {};
    const matrix = lengthMatrix(array1, array2, match || defaultMatch, innerContext);
    return backtrack(matrix, array1, array2, innerContext);
};
const __TURBOPACK__default__export__ = {
    get
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/filters/arrays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectChildrenPatchFilter",
    ()=>collectChildrenPatchFilter,
    "collectChildrenReverseFilter",
    ()=>collectChildrenReverseFilter,
    "diffFilter",
    ()=>diffFilter,
    "patchFilter",
    ()=>patchFilter,
    "reverseFilter",
    ()=>reverseFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/diff.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/patch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/reverse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$lcs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/filters/lcs.js [app-client] (ecmascript)");
;
;
;
;
const ARRAY_MOVE = 3;
function arraysHaveMatchByRef(array1, array2, len1, len2) {
    for(let index1 = 0; index1 < len1; index1++){
        const val1 = array1[index1];
        for(let index2 = 0; index2 < len2; index2++){
            const val2 = array2[index2];
            if (index1 !== index2 && val1 === val2) {
                return true;
            }
        }
    }
    return false;
}
function matchItems(array1, array2, index1, index2, context) {
    const value1 = array1[index1];
    const value2 = array2[index2];
    if (value1 === value2) {
        return true;
    }
    if (typeof value1 !== "object" || typeof value2 !== "object") {
        return false;
    }
    const objectHash = context.objectHash;
    if (!objectHash) {
        // no way to match objects was provided, try match by position
        return context.matchByPosition && index1 === index2;
    }
    context.hashCache1 = context.hashCache1 || [];
    let hash1 = context.hashCache1[index1];
    if (typeof hash1 === "undefined") {
        context.hashCache1[index1] = hash1 = objectHash(value1, index1);
    }
    if (typeof hash1 === "undefined") {
        return false;
    }
    context.hashCache2 = context.hashCache2 || [];
    let hash2 = context.hashCache2[index2];
    if (typeof hash2 === "undefined") {
        context.hashCache2[index2] = hash2 = objectHash(value2, index2);
    }
    if (typeof hash2 === "undefined") {
        return false;
    }
    return hash1 === hash2;
}
const diffFilter = function arraysDiffFilter(context) {
    var _a, _b, _c, _d, _e;
    if (!context.leftIsArray) {
        return;
    }
    const matchContext = {
        objectHash: (_a = context.options) === null || _a === void 0 ? void 0 : _a.objectHash,
        matchByPosition: (_b = context.options) === null || _b === void 0 ? void 0 : _b.matchByPosition
    };
    let commonHead = 0;
    let commonTail = 0;
    let index;
    let index1;
    let index2;
    const array1 = context.left;
    const array2 = context.right;
    const len1 = array1.length;
    const len2 = array2.length;
    let child;
    if (len1 > 0 && len2 > 0 && !matchContext.objectHash && typeof matchContext.matchByPosition !== "boolean") {
        matchContext.matchByPosition = !arraysHaveMatchByRef(array1, array2, len1, len2);
    }
    // separate common head
    while(commonHead < len1 && commonHead < len2 && matchItems(array1, array2, commonHead, commonHead, matchContext)){
        index = commonHead;
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](array1[index], array2[index]);
        context.push(child, index);
        commonHead++;
    }
    // separate common tail
    while(commonTail + commonHead < len1 && commonTail + commonHead < len2 && matchItems(array1, array2, len1 - 1 - commonTail, len2 - 1 - commonTail, matchContext)){
        index1 = len1 - 1 - commonTail;
        index2 = len2 - 1 - commonTail;
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](array1[index1], array2[index2]);
        context.push(child, index2);
        commonTail++;
    }
    let result;
    if (commonHead + commonTail === len1) {
        if (len1 === len2) {
            // arrays are identical
            context.setResult(undefined).exit();
            return;
        }
        // trivial case, a block (1 or more consecutive items) was added
        result = result || {
            _t: "a"
        };
        for(index = commonHead; index < len2 - commonTail; index++){
            result[index] = [
                array2[index]
            ];
            context.prepareDeltaResult(result[index]);
        }
        context.setResult(result).exit();
        return;
    }
    if (commonHead + commonTail === len2) {
        // trivial case, a block (1 or more consecutive items) was removed
        result = result || {
            _t: "a"
        };
        for(index = commonHead; index < len1 - commonTail; index++){
            const key = `_${index}`;
            result[key] = [
                array1[index],
                0,
                0
            ];
            context.prepareDeltaResult(result[key]);
        }
        context.setResult(result).exit();
        return;
    }
    // reset hash cache
    matchContext.hashCache1 = undefined;
    matchContext.hashCache2 = undefined;
    // diff is not trivial, find the LCS (Longest Common Subsequence)
    const trimmed1 = array1.slice(commonHead, len1 - commonTail);
    const trimmed2 = array2.slice(commonHead, len2 - commonTail);
    const seq = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$lcs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(trimmed1, trimmed2, matchItems, matchContext);
    const removedItems = [];
    result = result || {
        _t: "a"
    };
    for(index = commonHead; index < len1 - commonTail; index++){
        if (seq.indices1.indexOf(index - commonHead) < 0) {
            // removed
            const key = `_${index}`;
            result[key] = [
                array1[index],
                0,
                0
            ];
            context.prepareDeltaResult(result[key]);
            removedItems.push(index);
        }
    }
    let detectMove = true;
    if (((_c = context.options) === null || _c === void 0 ? void 0 : _c.arrays) && context.options.arrays.detectMove === false) {
        detectMove = false;
    }
    let includeValueOnMove = false;
    if ((_e = (_d = context.options) === null || _d === void 0 ? void 0 : _d.arrays) === null || _e === void 0 ? void 0 : _e.includeValueOnMove) {
        includeValueOnMove = true;
    }
    const removedItemsLength = removedItems.length;
    for(index = commonHead; index < len2 - commonTail; index++){
        const indexOnArray2 = seq.indices2.indexOf(index - commonHead);
        if (indexOnArray2 < 0) {
            // added, try to match with a removed item and register as position move
            let isMove = false;
            if (detectMove && removedItemsLength > 0) {
                for(let removeItemIndex1 = 0; removeItemIndex1 < removedItemsLength; removeItemIndex1++){
                    index1 = removedItems[removeItemIndex1];
                    const resultItem = index1 === undefined ? undefined : result[`_${index1}`];
                    if (index1 !== undefined && resultItem && matchItems(trimmed1, trimmed2, index1 - commonHead, index - commonHead, matchContext)) {
                        // store position move as: [originalValue, newPosition, ARRAY_MOVE]
                        resultItem.splice(1, 2, index, ARRAY_MOVE);
                        resultItem.splice(1, 2, index, ARRAY_MOVE);
                        if (!includeValueOnMove) {
                            // don't include moved value on diff, to save bytes
                            resultItem[0] = "";
                        }
                        index2 = index;
                        child = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](array1[index1], array2[index2]);
                        context.push(child, index2);
                        removedItems.splice(removeItemIndex1, 1);
                        isMove = true;
                        break;
                    }
                }
            }
            if (!isMove) {
                // added
                result[index] = [
                    array2[index]
                ];
                context.prepareDeltaResult(result[index]);
            }
        } else {
            // match, do inner diff
            if (seq.indices1[indexOnArray2] === undefined) {
                throw new Error(`Invalid indexOnArray2: ${indexOnArray2}, seq.indices1: ${seq.indices1}`);
            }
            index1 = seq.indices1[indexOnArray2] + commonHead;
            if (seq.indices2[indexOnArray2] === undefined) {
                throw new Error(`Invalid indexOnArray2: ${indexOnArray2}, seq.indices2: ${seq.indices2}`);
            }
            index2 = seq.indices2[indexOnArray2] + commonHead;
            child = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](array1[index1], array2[index2]);
            context.push(child, index2);
        }
    }
    context.setResult(result).exit();
};
diffFilter.filterName = "arrays";
const compare = {
    numerically (a, b) {
        return a - b;
    },
    numericallyBy (name) {
        return (a, b)=>a[name] - b[name];
    }
};
const patchFilter = function nestedPatchFilter(context) {
    var _a;
    if (!context.nested) {
        return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t !== "a") {
        return;
    }
    let index;
    let index1;
    const delta = nestedDelta;
    const array = context.left;
    // first, separate removals, insertions and modifications
    let toRemove = [];
    let toInsert = [];
    const toModify = [];
    for(index in delta){
        if (index !== "_t") {
            if (index[0] === "_") {
                const removedOrMovedIndex = index;
                // removed item from original array
                if (delta[removedOrMovedIndex] !== undefined && (delta[removedOrMovedIndex][2] === 0 || delta[removedOrMovedIndex][2] === ARRAY_MOVE)) {
                    toRemove.push(Number.parseInt(index.slice(1), 10));
                } else {
                    throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${(_a = delta[removedOrMovedIndex]) === null || _a === void 0 ? void 0 : _a[2]}`);
                }
            } else {
                const numberIndex = index;
                if (delta[numberIndex].length === 1) {
                    // added item at new array
                    toInsert.push({
                        index: Number.parseInt(numberIndex, 10),
                        value: delta[numberIndex][0]
                    });
                } else {
                    // modified item at new array
                    toModify.push({
                        index: Number.parseInt(numberIndex, 10),
                        delta: delta[numberIndex]
                    });
                }
            }
        }
    }
    // remove items, in reverse order to avoid sawing our own floor
    toRemove = toRemove.sort(compare.numerically);
    for(index = toRemove.length - 1; index >= 0; index--){
        index1 = toRemove[index];
        if (index1 === undefined) continue;
        const indexDiff = delta[`_${index1}`];
        const removedValue = array.splice(index1, 1)[0];
        if ((indexDiff === null || indexDiff === void 0 ? void 0 : indexDiff[2]) === ARRAY_MOVE) {
            // reinsert later
            toInsert.push({
                index: indexDiff[1],
                value: removedValue
            });
        }
    }
    // insert items, in reverse order to avoid moving our own floor
    toInsert = toInsert.sort(compare.numericallyBy("index"));
    const toInsertLength = toInsert.length;
    for(index = 0; index < toInsertLength; index++){
        const insertion = toInsert[index];
        if (insertion === undefined) continue;
        array.splice(insertion.index, 0, insertion.value);
    }
    // apply modifications
    const toModifyLength = toModify.length;
    if (toModifyLength > 0) {
        for(index = 0; index < toModifyLength; index++){
            const modification = toModify[index];
            if (modification === undefined) continue;
            const child = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](array[modification.index], modification.delta);
            context.push(child, modification.index);
        }
    }
    if (!context.children) {
        context.setResult(array).exit();
        return;
    }
    context.exit();
};
patchFilter.filterName = "arrays";
const collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
    if (!context || !context.children) {
        return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t !== "a") {
        return;
    }
    const array = context.left;
    const length = context.children.length;
    for(let index = 0; index < length; index++){
        const child = context.children[index];
        if (child === undefined) continue;
        const arrayIndex = child.childName;
        array[arrayIndex] = child.result;
    }
    context.setResult(array).exit();
};
collectChildrenPatchFilter.filterName = "arraysCollectChildren";
const reverseFilter = function arraysReverseFilter(context) {
    if (!context.nested) {
        const nonNestedDelta = context.delta;
        if (nonNestedDelta[2] === ARRAY_MOVE) {
            const arrayMoveDelta = nonNestedDelta;
            context.newName = `_${arrayMoveDelta[1]}`;
            context.setResult([
                arrayMoveDelta[0],
                Number.parseInt(context.childName.substring(1), 10),
                ARRAY_MOVE
            ]).exit();
        }
        return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t !== "a") {
        return;
    }
    const arrayDelta = nestedDelta;
    for(const name in arrayDelta){
        if (name === "_t") {
            continue;
        }
        const child = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](arrayDelta[name]);
        context.push(child, name);
    }
    context.exit();
};
reverseFilter.filterName = "arrays";
const reverseArrayDeltaIndex = (delta, index, itemDelta)=>{
    if (typeof index === "string" && index[0] === "_") {
        return Number.parseInt(index.substring(1), 10);
    }
    if (Array.isArray(itemDelta) && itemDelta[2] === 0) {
        return `_${index}`;
    }
    let reverseIndex = +index;
    for(const deltaIndex in delta){
        const deltaItem = delta[deltaIndex];
        if (Array.isArray(deltaItem)) {
            if (deltaItem[2] === ARRAY_MOVE) {
                const moveFromIndex = Number.parseInt(deltaIndex.substring(1), 10);
                const moveToIndex = deltaItem[1];
                if (moveToIndex === +index) {
                    return moveFromIndex;
                }
                if (moveFromIndex <= reverseIndex && moveToIndex > reverseIndex) {
                    reverseIndex++;
                } else if (moveFromIndex >= reverseIndex && moveToIndex < reverseIndex) {
                    reverseIndex--;
                }
            } else if (deltaItem[2] === 0) {
                const deleteIndex = Number.parseInt(deltaIndex.substring(1), 10);
                if (deleteIndex <= reverseIndex) {
                    reverseIndex++;
                }
            } else if (deltaItem.length === 1 && Number.parseInt(deltaIndex, 10) <= reverseIndex) {
                reverseIndex--;
            }
        }
    }
    return reverseIndex;
};
const collectChildrenReverseFilter = (context)=>{
    if (!context || !context.children) {
        return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t !== "a") {
        return;
    }
    const arrayDelta = deltaWithChildren;
    const length = context.children.length;
    const delta = {
        _t: "a"
    };
    for(let index = 0; index < length; index++){
        const child = context.children[index];
        if (child === undefined) continue;
        let name = child.newName;
        if (typeof name === "undefined") {
            if (child.childName === undefined) {
                throw new Error("child.childName is undefined");
            }
            name = reverseArrayDeltaIndex(arrayDelta, child.childName, child.result);
        }
        if (delta[name] !== child.result) {
            // There's no way to type this well.
            delta[name] = child.result;
        }
    }
    context.setResult(delta).exit();
};
collectChildrenReverseFilter.filterName = "arraysCollectChildren";
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/filters/dates.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "diffFilter",
    ()=>diffFilter
]);
const diffFilter = function datesDiffFilter(context) {
    if (context.left instanceof Date) {
        if (context.right instanceof Date) {
            if (context.left.getTime() !== context.right.getTime()) {
                context.setResult([
                    context.left,
                    context.right
                ]);
            } else {
                context.setResult(undefined);
            }
        } else {
            context.setResult([
                context.left,
                context.right
            ]);
        }
        context.exit();
    } else if (context.right instanceof Date) {
        context.setResult([
            context.left,
            context.right
        ]).exit();
    }
};
diffFilter.filterName = "dates";
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/filters/nested.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectChildrenDiffFilter",
    ()=>collectChildrenDiffFilter,
    "collectChildrenPatchFilter",
    ()=>collectChildrenPatchFilter,
    "collectChildrenReverseFilter",
    ()=>collectChildrenReverseFilter,
    "objectsDiffFilter",
    ()=>objectsDiffFilter,
    "patchFilter",
    ()=>patchFilter,
    "reverseFilter",
    ()=>reverseFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/diff.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/patch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/reverse.js [app-client] (ecmascript)");
;
;
;
// '__proto__' must never be used as a property key — it bypasses normal
// property assignment and directly modifies the object's prototype chain.
// 'constructor' and 'prototype' are handled by the hasOwnProperty guard below
// (we only traverse own properties of left, so inherited 'constructor' is
// never followed into Object.prototype).
const UNSAFE_KEYS = new Set([
    "__proto__"
]);
const collectChildrenDiffFilter = (context)=>{
    if (!context || !context.children) {
        return;
    }
    const length = context.children.length;
    let result = context.result;
    for(let index = 0; index < length; index++){
        const child = context.children[index];
        if (child === undefined) continue;
        if (typeof child.result === "undefined") {
            continue;
        }
        result = result || {};
        if (child.childName === undefined) {
            throw new Error("diff child.childName is undefined");
        }
        result[child.childName] = child.result;
    }
    if (result && context.leftIsArray) {
        result._t = "a";
    }
    context.setResult(result).exit();
};
collectChildrenDiffFilter.filterName = "collectChildren";
const objectsDiffFilter = (context)=>{
    var _a;
    if (context.leftIsArray || context.leftType !== "object") {
        return;
    }
    const left = context.left;
    const right = context.right;
    const propertyFilter = (_a = context.options) === null || _a === void 0 ? void 0 : _a.propertyFilter;
    for(const name in left){
        if (!Object.prototype.hasOwnProperty.call(left, name)) {
            continue;
        }
        if (propertyFilter && !propertyFilter(name, context)) {
            continue;
        }
        const child = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](left[name], right[name]);
        context.push(child, name);
    }
    for(const name in right){
        if (!Object.prototype.hasOwnProperty.call(right, name)) {
            continue;
        }
        if (propertyFilter && !propertyFilter(name, context)) {
            continue;
        }
        if (typeof left[name] === "undefined") {
            const child = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](undefined, right[name]);
            context.push(child, name);
        }
    }
    if (!context.children || context.children.length === 0) {
        context.setResult(undefined).exit();
        return;
    }
    context.exit();
};
objectsDiffFilter.filterName = "objects";
const patchFilter = function nestedPatchFilter(context) {
    if (!context.nested) {
        return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t) {
        return;
    }
    const objectDelta = nestedDelta;
    let childrenPushed = false;
    for(const name in objectDelta){
        if (UNSAFE_KEYS.has(name)) continue;
        if (!Object.prototype.hasOwnProperty.call(objectDelta, name)) continue;
        const left = context.left;
        // Only read own properties from left to avoid traversing inherited
        // properties (e.g. constructor.prototype → Object.prototype)
        const leftValue = left !== null && typeof left === "object" && Object.prototype.hasOwnProperty.call(left, name) ? left[name] : undefined;
        const child = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](leftValue, objectDelta[name]);
        context.push(child, name);
        childrenPushed = true;
    }
    if (!childrenPushed) {
        // All delta keys were unsafe or filtered out — return left unchanged.
        context.setResult(context.left).exit();
        return;
    }
    context.exit();
};
patchFilter.filterName = "objects";
const collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
    if (!context || !context.children) {
        return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t) {
        return;
    }
    // If left is not a real object we cannot patch it — return left as-is.
    if (context.left === null || typeof context.left !== "object") {
        context.setResult(context.left).exit();
        return;
    }
    const object = context.left;
    const length = context.children.length;
    for(let index = 0; index < length; index++){
        const child = context.children[index];
        if (child === undefined) continue;
        const property = child.childName;
        if (UNSAFE_KEYS.has(property)) continue;
        if (Object.prototype.hasOwnProperty.call(context.left, property) && child.result === undefined) {
            delete object[property];
        } else if (object[property] !== child.result) {
            object[property] = child.result;
        }
    }
    context.setResult(object).exit();
};
collectChildrenPatchFilter.filterName = "collectChildren";
const reverseFilter = function nestedReverseFilter(context) {
    if (!context.nested) {
        return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t) {
        return;
    }
    const objectDelta = context.delta;
    let childrenPushed = false;
    for(const name in objectDelta){
        if (UNSAFE_KEYS.has(name)) continue;
        if (!Object.prototype.hasOwnProperty.call(objectDelta, name)) continue;
        const child = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](objectDelta[name]);
        context.push(child, name);
        childrenPushed = true;
    }
    if (!childrenPushed) {
        // All delta keys were unsafe — return an empty reversed delta.
        context.setResult({}).exit();
        return;
    }
    context.exit();
};
reverseFilter.filterName = "objects";
const collectChildrenReverseFilter = (context)=>{
    if (!context || !context.children) {
        return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t) {
        return;
    }
    const length = context.children.length;
    const delta = {};
    for(let index = 0; index < length; index++){
        const child = context.children[index];
        if (child === undefined) continue;
        const property = child.childName;
        if (UNSAFE_KEYS.has(property)) continue;
        if (delta[property] !== child.result) {
            delta[property] = child.result;
        }
    }
    context.setResult(delta).exit();
};
collectChildrenReverseFilter.filterName = "collectChildren";
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/filters/texts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "diffFilter",
    ()=>diffFilter,
    "patchFilter",
    ()=>patchFilter,
    "reverseFilter",
    ()=>reverseFilter
]);
const TEXT_DIFF = 2;
const DEFAULT_MIN_LENGTH = 60;
let cachedDiffPatch = null;
function getDiffMatchPatch(options, required) {
    var _a;
    if (!cachedDiffPatch) {
        let instance;
        if ((_a = options === null || options === void 0 ? void 0 : options.textDiff) === null || _a === void 0 ? void 0 : _a.diffMatchPatch) {
            instance = new options.textDiff.diffMatchPatch();
        } else {
            if (!required) {
                return null;
            }
            const error = new Error("The diff-match-patch library was not provided. Pass the library in through the options or use the `jsondiffpatch/with-text-diffs` entry-point.");
            // eslint-disable-next-line camelcase
            error.diff_match_patch_not_found = true;
            throw error;
        }
        cachedDiffPatch = {
            diff: (txt1, txt2)=>instance.patch_toText(instance.patch_make(txt1, txt2)),
            patch: (txt1, patch)=>{
                const results = instance.patch_apply(instance.patch_fromText(patch), txt1);
                for (const resultOk of results[1]){
                    if (!resultOk) {
                        const error = new Error("text patch failed");
                        error.textPatchFailed = true;
                        throw error;
                    }
                }
                return results[0];
            }
        };
    }
    return cachedDiffPatch;
}
const diffFilter = function textsDiffFilter(context) {
    var _a, _b;
    if (context.leftType !== "string") {
        return;
    }
    const left = context.left;
    const right = context.right;
    const minLength = ((_b = (_a = context.options) === null || _a === void 0 ? void 0 : _a.textDiff) === null || _b === void 0 ? void 0 : _b.minLength) || DEFAULT_MIN_LENGTH;
    if (left.length < minLength || right.length < minLength) {
        context.setResult([
            left,
            right
        ]).exit();
        return;
    }
    // large text, try to use a text-diff algorithm
    const diffMatchPatch = getDiffMatchPatch(context.options);
    if (!diffMatchPatch) {
        // diff-match-patch library not available,
        // fallback to regular string replace
        context.setResult([
            left,
            right
        ]).exit();
        return;
    }
    const diff = diffMatchPatch.diff;
    context.setResult([
        diff(left, right),
        0,
        TEXT_DIFF
    ]).exit();
};
diffFilter.filterName = "texts";
const patchFilter = function textsPatchFilter(context) {
    if (context.nested) {
        return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta[2] !== TEXT_DIFF) {
        return;
    }
    const textDiffDelta = nonNestedDelta;
    // text-diff, use a text-patch algorithm
    const patch = getDiffMatchPatch(context.options, true).patch;
    context.setResult(patch(context.left, textDiffDelta[0])).exit();
};
patchFilter.filterName = "texts";
const textDeltaReverse = (delta)=>{
    var _a, _b, _c;
    const headerRegex = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;
    const lines = delta.split("\n");
    for(let i = 0; i < lines.length; i++){
        const line = lines[i];
        if (line === undefined) continue;
        const lineStart = line.slice(0, 1);
        if (lineStart === "@") {
            const header = headerRegex.exec(line);
            if (header !== null) {
                const lineHeader = i;
                // fix header
                lines[lineHeader] = `@@ -${header[3]},${header[4]} +${header[1]},${header[2]} @@`;
            }
        } else if (lineStart === "+") {
            lines[i] = `-${(_a = lines[i]) === null || _a === void 0 ? void 0 : _a.slice(1)}`;
            if (((_b = lines[i - 1]) === null || _b === void 0 ? void 0 : _b.slice(0, 1)) === "+") {
                // swap lines to keep default order (-+)
                const lineTmp = lines[i];
                lines[i] = lines[i - 1];
                lines[i - 1] = lineTmp;
            }
        } else if (lineStart === "-") {
            lines[i] = `+${(_c = lines[i]) === null || _c === void 0 ? void 0 : _c.slice(1)}`;
        }
    }
    return lines.join("\n");
};
const reverseFilter = function textsReverseFilter(context) {
    if (context.nested) {
        return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta[2] !== TEXT_DIFF) {
        return;
    }
    const textDiffDelta = nonNestedDelta;
    // text-diff, use a text-diff algorithm
    context.setResult([
        textDeltaReverse(textDiffDelta[0]),
        0,
        TEXT_DIFF
    ]).exit();
};
reverseFilter.filterName = "texts";
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/filters/trivial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "diffFilter",
    ()=>diffFilter,
    "patchFilter",
    ()=>patchFilter,
    "reverseFilter",
    ()=>reverseFilter
]);
const diffFilter = function trivialMatchesDiffFilter(context) {
    if (context.left === context.right) {
        context.setResult(undefined).exit();
        return;
    }
    if (typeof context.left === "undefined") {
        if (typeof context.right === "function") {
            throw new Error("functions are not supported");
        }
        context.setResult([
            context.right
        ]).exit();
        return;
    }
    if (typeof context.right === "undefined") {
        context.setResult([
            context.left,
            0,
            0
        ]).exit();
        return;
    }
    if (typeof context.left === "function" || typeof context.right === "function") {
        throw new Error("functions are not supported");
    }
    context.leftType = context.left === null ? "null" : typeof context.left;
    context.rightType = context.right === null ? "null" : typeof context.right;
    if (context.leftType !== context.rightType) {
        context.setResult([
            context.left,
            context.right
        ]).exit();
        return;
    }
    if (context.leftType === "boolean" || context.leftType === "number") {
        context.setResult([
            context.left,
            context.right
        ]).exit();
        return;
    }
    if (context.leftType === "object") {
        context.leftIsArray = Array.isArray(context.left);
    }
    if (context.rightType === "object") {
        context.rightIsArray = Array.isArray(context.right);
    }
    if (context.leftIsArray !== context.rightIsArray) {
        context.setResult([
            context.left,
            context.right
        ]).exit();
        return;
    }
    if (context.left instanceof RegExp) {
        if (context.right instanceof RegExp) {
            context.setResult([
                context.left.toString(),
                context.right.toString()
            ]).exit();
        } else {
            context.setResult([
                context.left,
                context.right
            ]).exit();
        }
    }
};
diffFilter.filterName = "trivial";
const patchFilter = function trivialMatchesPatchFilter(context) {
    if (typeof context.delta === "undefined") {
        context.setResult(context.left).exit();
        return;
    }
    context.nested = !Array.isArray(context.delta);
    if (context.nested) {
        return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta.length === 1) {
        context.setResult(nonNestedDelta[0]).exit();
        return;
    }
    if (nonNestedDelta.length === 2) {
        if (context.left instanceof RegExp) {
            const regexArgs = /^\/(.*)\/([gimyu]+)$/.exec(nonNestedDelta[1]);
            if (regexArgs === null || regexArgs === void 0 ? void 0 : regexArgs[1]) {
                context.setResult(new RegExp(regexArgs[1], regexArgs[2])).exit();
                return;
            }
        }
        context.setResult(nonNestedDelta[1]).exit();
        return;
    }
    if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
        context.setResult(undefined).exit();
    }
};
patchFilter.filterName = "trivial";
const reverseFilter = function trivialReferseFilter(context) {
    if (typeof context.delta === "undefined") {
        context.setResult(context.delta).exit();
        return;
    }
    context.nested = !Array.isArray(context.delta);
    if (context.nested) {
        return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta.length === 1) {
        context.setResult([
            nonNestedDelta[0],
            0,
            0
        ]).exit();
        return;
    }
    if (nonNestedDelta.length === 2) {
        context.setResult([
            nonNestedDelta[1],
            nonNestedDelta[0]
        ]).exit();
        return;
    }
    if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
        context.setResult([
            nonNestedDelta[0]
        ]).exit();
    }
};
reverseFilter.filterName = "trivial";
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/diffpatcher.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/clone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/diff.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/patch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/contexts/reverse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$pipe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/pipe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$processor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/processor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/filters/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/filters/dates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/filters/nested.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$texts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/filters/texts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$trivial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/filters/trivial.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
class DiffPatcher {
    constructor(options){
        this.processor = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$processor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](options);
        this.processor.pipe(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$pipe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]("diff").append(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectChildrenDiffFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$trivial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diffFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$dates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diffFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$texts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diffFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectsDiffFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diffFilter"]).shouldHaveResult());
        this.processor.pipe(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$pipe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]("patch").append(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectChildrenPatchFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectChildrenPatchFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$trivial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$texts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchFilter"]).shouldHaveResult());
        this.processor.pipe(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$pipe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]("reverse").append(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectChildrenReverseFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectChildrenReverseFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$trivial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$texts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseFilter"]).shouldHaveResult());
    }
    options(options) {
        return this.processor.options(options);
    }
    diff(left, right) {
        return this.processor.process(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](left, right));
    }
    patch(left, delta) {
        return this.processor.process(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](left, delta));
    }
    reverse(delta) {
        return this.processor.process(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](delta));
    }
    unpatch(right, delta) {
        return this.patch(right, this.reverse(delta));
    }
    clone(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
    }
}
const __TURBOPACK__default__export__ = DiffPatcher;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/diffpatcher.js [app-client] (ecmascript) <export default as DiffPatcher>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiffPatcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/diffpatcher.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-dev-tools@4.3.0_59232af45f321962caab1bb50c8f6f17/node_modules/prosemirror-dev-tools/dist/esm/state/idle-scheduler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IdleScheduler",
    ()=>IdleScheduler
]);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _readOnlyError(r) {
    throw new TypeError('"' + r + '" is read-only');
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var IdleScheduler = /*#__PURE__*/ function() {
    function IdleScheduler() {
        _classCallCheck(this, IdleScheduler);
        _defineProperty(this, "task", undefined);
    }
    return _createClass(IdleScheduler, [
        {
            key: "request",
            value: function request() {
                this.cancel();
                var request = window.requestIdleCallback || window.requestAnimationFrame;
                return new Promise(function(resolve) {
                    return request(resolve);
                });
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                var cancel = window.cancelIdleCallack || window.cancelAnimationFrame;
                if (this.task) {
                    cancel(this.task);
                }
            }
        }
    ]);
}();
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-dev-tools@4.3.0_59232af45f321962caab1bb50c8f6f17/node_modules/prosemirror-dev-tools/dist/esm/state/json-diff-main.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JsonDiffMain",
    ()=>JsonDiffMain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DiffPatcher$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jsondiffpatch@0.7.6/node_modules/jsondiffpatch/lib/diffpatcher.js [app-client] (ecmascript) <export default as DiffPatcher>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$dev$2d$tools$40$4$2e$3$2e$0_59232af45f321962caab1bb50c8f6f17$2f$node_modules$2f$prosemirror$2d$dev$2d$tools$2f$dist$2f$esm$2f$state$2f$idle$2d$scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-dev-tools@4.3.0_59232af45f321962caab1bb50c8f6f17/node_modules/prosemirror-dev-tools/dist/esm/state/idle-scheduler.js [app-client] (ecmascript)");
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _regenerator() {
    var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
        var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype);
        return _regeneratorDefine2(u, "_invoke", function(r, n, o) {
            var i, c, u, f = 0, p = o || [], y = !1, G = {
                p: 0,
                n: 0,
                v: e,
                a: d,
                f: d.bind(e, 4),
                d: function d(t, r) {
                    return i = t, c = 0, u = e, G.n = r, a;
                }
            };
            function d(r, n) {
                for(c = r, u = n, t = 0; !y && f && !o && t < p.length; t++){
                    var o, i = p[t], d = G.p, l = i[2];
                    r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
                }
                if (o || r > 1) return a;
                throw y = !0, n;
            }
            return function(o, p, l) {
                if (f > 1) throw TypeError("Generator is already running");
                for(y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;){
                    i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
                    try {
                        if (f = 2, i) {
                            if (c || (o = "next"), t = i[o]) {
                                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                                if (!t.done) return t;
                                u = t.value, c < 2 && (c = 0);
                            } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                            i = e;
                        } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
                    } catch (t) {
                        i = e, c = 1, u = t;
                    } finally{
                        f = 1;
                    }
                }
                return {
                    value: t,
                    done: y
                };
            };
        }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function() {
        return this;
    }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function() {
        return this;
    }), _regeneratorDefine2(u, "toString", function() {
        return "[object Generator]";
    }), (_regenerator = function _regenerator() {
        return {
            w: i,
            m: f
        };
    })();
}
function _regeneratorDefine2(e, r, n, t) {
    var i = Object.defineProperty;
    try {
        i({}, "", {});
    } catch (e) {
        i = 0;
    }
    _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {
        function o(r, n) {
            _regeneratorDefine2(e, r, function(e) {
                return this._invoke(r, n, e);
            });
        }
        r ? i ? i(e, r, {
            value: n,
            enumerable: !t,
            configurable: !t,
            writable: !t
        }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, _regeneratorDefine2(e, r, n, t);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
var JsonDiffMain = /*#__PURE__*/ function() {
    function JsonDiffMain() {
        _classCallCheck(this, JsonDiffMain);
        _defineProperty(this, "diffPatcher", new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jsondiffpatch$40$0$2e$7$2e$6$2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DiffPatcher$3e$__["DiffPatcher"]({
            arrays: {
                detectMove: false,
                includeValueOnMove: false
            },
            textDiff: {
                minLength: 1,
                diffMatchPatch: undefined
            }
        }));
        _defineProperty(this, "scheduler", new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$dev$2d$tools$40$4$2e$3$2e$0_59232af45f321962caab1bb50c8f6f17$2f$node_modules$2f$prosemirror$2d$dev$2d$tools$2f$dist$2f$esm$2f$state$2f$idle$2d$scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdleScheduler"]());
    }
    return _createClass(JsonDiffMain, [
        {
            key: "diff",
            value: function() {
                var _diff = _asyncToGenerator(/*#__PURE__*/ _regenerator().m(function _callee(input) {
                    return _regenerator().w(function(_context) {
                        while(1)switch(_context.n){
                            case 0:
                                _context.n = 1;
                                return this.scheduler.request();
                            case 1:
                                return _context.a(2, {
                                    id: input.id,
                                    delta: this.diffPatcher.diff(input.a, input.b)
                                });
                        }
                    }, _callee, this);
                }));
                function diff(_x) {
                    return _diff.apply(this, arguments);
                }
                return diff;
            }()
        }
    ]);
}();
}),
]);

//# sourceMappingURL=0ov4__pnpm_04tsg5r._.js.map