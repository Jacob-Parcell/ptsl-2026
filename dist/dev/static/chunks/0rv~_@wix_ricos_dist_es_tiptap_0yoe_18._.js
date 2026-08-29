(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/find-parent-node-closest-to-pos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findParentNodeClosestToPos",
    ()=>findParentNodeClosestToPos
]);
const findParentNodeClosestToPos = ($pos, predicate)=>{
    for(let i = $pos.depth; i > 0; i -= 1){
        const node = $pos.node(i);
        if (predicate(node)) {
            return {
                pos: i > 0 ? $pos.before(i) : 0,
                start: $pos.start(i),
                depth: i,
                node
            };
        }
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/is-regexp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRegExp",
    ()=>isRegExp
]);
const isRegExp = (value)=>{
    return Object.prototype.toString.call(value) === "[object RegExp]";
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/object-includes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "objectIncludes",
    ()=>objectIncludes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$is$2d$regexp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/is-regexp.js [app-client] (ecmascript)");
;
const objectIncludes = (object1, object2, options = {
    strict: true
})=>{
    const keys = Object.keys(object2);
    if (!keys.length) {
        return true;
    }
    return keys.every((key)=>{
        if (options.strict) {
            return object2[key] === object1[key];
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$is$2d$regexp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRegExp"])(object2[key])) {
            return object2[key].test(object1[key]);
        }
        return object2[key] === object1[key];
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/get-mark-type.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMarkType",
    ()=>getMarkType
]);
const getMarkType = (nameOrType, schema)=>{
    if (typeof nameOrType === "string") {
        if (!schema.marks[nameOrType]) {
            throw Error(`There is no mark type named '${nameOrType}'. Maybe you forgot to add the extension?`);
        }
        return schema.marks[nameOrType];
    }
    return nameOrType;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/is-mark-active.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMarkActive",
    ()=>isMarkActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/object-includes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/get-mark-type.js [app-client] (ecmascript)");
;
;
const isMarkActive = (state, typeOrName, attributes = {})=>{
    const { empty, ranges } = state.selection;
    const type = typeOrName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkType"])(typeOrName, state.schema) : null;
    if (empty) {
        return !!(state.storedMarks || state.selection.$from.marks()).filter((mark)=>{
            if (!type) {
                return true;
            }
            return type.name === mark.type.name;
        }).find((mark)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectIncludes"])(mark.attrs, attributes, {
                strict: false
            }));
    }
    let selectionRange = 0;
    const markRanges = [];
    ranges.forEach(({ $from, $to })=>{
        const from = $from.pos;
        const to = $to.pos;
        state.doc.nodesBetween(from, to, (node, pos)=>{
            if (!node.isText && !node.marks.length) {
                return;
            }
            const relativeFrom = Math.max(from, pos);
            const relativeTo = Math.min(to, pos + node.nodeSize);
            const range2 = relativeTo - relativeFrom;
            selectionRange += range2;
            markRanges.push(...node.marks.map((mark)=>({
                    mark,
                    from: relativeFrom,
                    to: relativeTo
                })));
        });
    });
    if (selectionRange === 0) {
        return false;
    }
    const matchedRange = markRanges.filter((markRange)=>{
        if (!type) {
            return true;
        }
        return type.name === markRange.mark.type.name;
    }).filter((markRange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectIncludes"])(markRange.mark.attrs, attributes, {
            strict: false
        })).reduce((sum, markRange)=>sum + markRange.to - markRange.from, 0);
    const excludedRange = markRanges.filter((markRange)=>{
        if (!type) {
            return true;
        }
        return markRange.mark.type !== type && markRange.mark.type.excludes(type);
    }).reduce((sum, markRange)=>sum + markRange.to - markRange.from, 0);
    const range = matchedRange > 0 ? matchedRange + excludedRange : matchedRange;
    return range >= selectionRange;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/merge-attributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeAttributes",
    ()=>mergeAttributes
]);
const mergeAttributes = (...objects)=>{
    return objects.filter((item)=>!!item).reduce((items, item)=>{
        const mergedAttributes = {
            ...items
        };
        Object.entries(item).forEach(([key, value])=>{
            const exists = mergedAttributes[key];
            if (!exists) {
                mergedAttributes[key] = value;
                return;
            }
            if (key === "class") {
                const valueClasses = value ? value.split(" ") : [];
                const existingClasses = mergedAttributes[key] ? mergedAttributes[key].split(" ") : [];
                const insertClasses = valueClasses.filter((valueClass)=>!existingClasses.includes(valueClass));
                mergedAttributes[key] = [
                    ...existingClasses,
                    ...insertClasses
                ].join(" ");
            } else if (key === "style") {
                const newStyles = value ? value.split(";").map((style)=>style.trim()).filter(Boolean) : [];
                const existingStyles = mergedAttributes[key] ? mergedAttributes[key].split(";").map((style)=>style.trim()).filter(Boolean) : [];
                const styleMap = /* @__PURE__ */ new Map();
                existingStyles.forEach((style)=>{
                    const [property, val] = style.split(":").map((part)=>part.trim());
                    styleMap.set(property, val);
                });
                newStyles.forEach((style)=>{
                    const [property, val] = style.split(":").map((part)=>part.trim());
                    styleMap.set(property, val);
                });
                mergedAttributes[key] = Array.from(styleMap.entries()).map(([property, val])=>`${property}: ${val}`).join("; ");
            } else {
                mergedAttributes[key] = value;
            }
        });
        return mergedAttributes;
    }, {});
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-regexp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRegExp",
    ()=>isRegExp
]);
function isRegExp(value) {
    return Object.prototype.toString.call(value) === "[object RegExp]";
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/object-includes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "objectIncludes",
    ()=>objectIncludes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$regexp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-regexp.js [app-client] (ecmascript)");
;
function objectIncludes(object1, object2, options = {
    strict: true
}) {
    const keys = Object.keys(object2);
    if (!keys.length) {
        return true;
    }
    return keys.every((key)=>{
        if (options.strict) {
            return object2[key] === object1[key];
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$regexp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRegExp"])(object2[key])) {
            return object2[key].test(object1[key]);
        }
        return object2[key] === object1[key];
    });
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-range.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMarkRange",
    ()=>getMarkRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/object-includes.js [app-client] (ecmascript)");
;
function findMarkInSet(marks, type, attributes = {}) {
    return marks.find((item)=>{
        return item.type === type && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectIncludes"])(item.attrs, attributes);
    });
}
function isMarkInSet(marks, type, attributes = {}) {
    return !!findMarkInSet(marks, type, attributes);
}
function getMarkRange($pos, type, attributes = {}) {
    if (!$pos || !type) {
        return;
    }
    let start = $pos.parent.childAfter($pos.parentOffset);
    if ($pos.parentOffset === start.offset && start.offset !== 0) {
        start = $pos.parent.childBefore($pos.parentOffset);
    }
    if (!start.node) {
        return;
    }
    const mark = findMarkInSet([
        ...start.node.marks
    ], type, attributes);
    if (!mark) {
        return;
    }
    let startIndex = start.index;
    let startPos = $pos.start() + start.offset;
    let endIndex = startIndex + 1;
    let endPos = startPos + start.node.nodeSize;
    findMarkInSet([
        ...start.node.marks
    ], type, attributes);
    while(startIndex > 0 && mark.isInSet($pos.parent.child(startIndex - 1).marks)){
        startIndex -= 1;
        startPos -= $pos.parent.child(startIndex).nodeSize;
    }
    while(endIndex < $pos.parent.childCount && isMarkInSet([
        ...$pos.parent.child(endIndex).marks
    ], type, attributes)){
        endPos += $pos.parent.child(endIndex).nodeSize;
        endIndex += 1;
    }
    return {
        from: startPos,
        to: endPos
    };
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-marks-between.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMarksBetween",
    ()=>getMarksBetween
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-range.js [app-client] (ecmascript)");
;
function getMarksBetween(from, to, doc) {
    const marks = [];
    if (from === to) {
        doc.resolve(from).marks().forEach((mark)=>{
            const $pos = doc.resolve(from);
            const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkRange"])($pos, mark.type);
            if (!range) {
                return;
            }
            marks.push({
                mark,
                ...range
            });
        });
    } else {
        doc.nodesBetween(from, to, (node, pos)=>{
            if (!node || node?.nodeSize === void 0) {
                return;
            }
            marks.push(...node.marks.map((mark)=>({
                    from: pos,
                    to: pos + node.nodeSize,
                    mark
                })));
        });
    }
    return marks;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/create-chainable-state.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createChainableState",
    ()=>createChainableState
]);
function createChainableState(config) {
    const { state, transaction } = config;
    let { selection } = transaction;
    let { doc } = transaction;
    let { storedMarks } = transaction;
    return {
        ...state,
        apply: state.apply.bind(state),
        applyTransaction: state.applyTransaction.bind(state),
        plugins: state.plugins,
        schema: state.schema,
        reconfigure: state.reconfigure.bind(state),
        toJSON: state.toJSON.bind(state),
        get storedMarks () {
            return storedMarks;
        },
        get selection () {
            return selection;
        },
        get doc () {
            return doc;
        },
        get tr () {
            selection = transaction.selection;
            doc = transaction.doc;
            storedMarks = transaction.storedMarks;
            return transaction;
        }
    };
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/command-manager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandManager",
    ()=>CommandManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$chainable$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/create-chainable-state.js [app-client] (ecmascript)");
;
class CommandManager {
    constructor(props){
        this.editor = props.editor;
        this.rawCommands = this.editor.extensionManager.commands;
        this.customState = props.state;
    }
    get hasCustomState() {
        return !!this.customState;
    }
    get state() {
        return this.customState || this.editor.state;
    }
    get commands() {
        const { rawCommands, editor, state } = this;
        const { view } = editor;
        const { tr } = state;
        const props = this.buildProps(tr);
        return Object.fromEntries(Object.entries(rawCommands).map(([name, command])=>{
            const method = (...args)=>{
                const callback = command(...args)(props);
                if (!tr.getMeta("preventDispatch") && !this.hasCustomState) {
                    view.dispatch(tr);
                }
                return callback;
            };
            return [
                name,
                method
            ];
        }));
    }
    get chain() {
        return ()=>this.createChain();
    }
    get can() {
        return ()=>this.createCan();
    }
    createChain(startTr, shouldDispatch = true) {
        const { rawCommands, editor, state } = this;
        const { view } = editor;
        const callbacks = [];
        const hasStartTransaction = !!startTr;
        const tr = startTr || state.tr;
        const run = ()=>{
            if (!hasStartTransaction && shouldDispatch && !tr.getMeta("preventDispatch") && !this.hasCustomState) {
                view.dispatch(tr);
            }
            return callbacks.every((callback)=>callback === true);
        };
        const chain = {
            ...Object.fromEntries(Object.entries(rawCommands).map(([name, command])=>{
                const chainedCommand = (...args)=>{
                    const props = this.buildProps(tr, shouldDispatch);
                    const callback = command(...args)(props);
                    callbacks.push(callback);
                    return chain;
                };
                return [
                    name,
                    chainedCommand
                ];
            })),
            run
        };
        return chain;
    }
    createCan(startTr) {
        const { rawCommands, state } = this;
        const dispatch = false;
        const tr = startTr || state.tr;
        const props = this.buildProps(tr, dispatch);
        const formattedCommands = Object.fromEntries(Object.entries(rawCommands).map(([name, command])=>{
            return [
                name,
                (...args)=>command(...args)({
                        ...props,
                        dispatch: void 0
                    })
            ];
        }));
        return {
            ...formattedCommands,
            chain: ()=>this.createChain(tr, dispatch)
        };
    }
    buildProps(tr, shouldDispatch = true) {
        const { rawCommands, editor, state } = this;
        const { view } = editor;
        const props = {
            tr,
            editor,
            view,
            state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$chainable$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChainableState"])({
                state,
                transaction: tr
            }),
            dispatch: shouldDispatch ? ()=>void 0 : void 0,
            chain: ()=>this.createChain(tr, shouldDispatch),
            can: ()=>this.createCan(tr),
            get commands () {
                return Object.fromEntries(Object.entries(rawCommands).map(([name, command])=>{
                    return [
                        name,
                        (...args)=>command(...args)(props)
                    ];
                }));
            }
        };
        return props;
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-text-content-from-nodes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTextContentFromNodes",
    ()=>getTextContentFromNodes
]);
const getTextContentFromNodes = ($from, maxMatch = 500)=>{
    let textBefore = "";
    const sliceEndPos = $from.parentOffset;
    $from.parent.nodesBetween(Math.max(0, sliceEndPos - maxMatch), sliceEndPos, (node, pos, parent, index)=>{
        const chunk = node.type.spec.toText?.({
            node,
            pos,
            parent,
            index
        }) || node.textContent || "%leaf%";
        textBefore += node.isAtom && !node.isText ? chunk : chunk.slice(0, Math.max(0, sliceEndPos - pos));
    });
    return textBefore;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/input-rule.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputRule",
    ()=>InputRule,
    "inputRulesPlugin",
    ()=>inputRulesPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$command$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/command-manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$chainable$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/create-chainable-state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$text$2d$content$2d$from$2d$nodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-text-content-from-nodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$regexp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-regexp.js [app-client] (ecmascript)");
;
;
;
;
;
class InputRule {
    constructor(config){
        this.find = config.find;
        this.handler = config.handler;
    }
}
const inputRuleMatcherHandler = (text, find)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$regexp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRegExp"])(find)) {
        return find.exec(text);
    }
    const inputRuleMatch = find(text);
    if (!inputRuleMatch) {
        return null;
    }
    const result = [
        inputRuleMatch.text
    ];
    result.index = inputRuleMatch.index;
    result.input = text;
    result.data = inputRuleMatch.data;
    if (inputRuleMatch.replaceWith) {
        if (!inputRuleMatch.text.includes(inputRuleMatch.replaceWith)) {
            console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".');
        }
        result.push(inputRuleMatch.replaceWith);
    }
    return result;
};
function run(config) {
    const { editor, from, to, text, rules, plugin } = config;
    const { view } = editor;
    if (view.composing) {
        return false;
    }
    const $from = view.state.doc.resolve(from);
    if (// check for code node
    $from.parent.type.spec.code || // check for code mark
    !!($from.nodeBefore || $from.nodeAfter)?.marks.find((mark)=>mark.type.spec.code)) {
        return false;
    }
    let matched = false;
    const textBefore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$text$2d$content$2d$from$2d$nodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextContentFromNodes"])($from) + text;
    rules.forEach((rule)=>{
        if (matched) {
            return;
        }
        const match = inputRuleMatcherHandler(textBefore, rule.find);
        if (!match) {
            return;
        }
        const tr = view.state.tr;
        const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$chainable$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChainableState"])({
            state: view.state,
            transaction: tr
        });
        const range = {
            from: from - (match[0].length - text.length),
            to
        };
        const { commands, chain, can } = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$command$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandManager"]({
            editor,
            state
        });
        const handler = rule.handler({
            state,
            range,
            match,
            commands,
            chain,
            can
        });
        if (handler === null || !tr.steps.length) {
            return;
        }
        tr.setMeta(plugin, {
            transform: tr,
            from,
            to,
            text
        });
        view.dispatch(tr);
        matched = true;
    });
    return matched;
}
function inputRulesPlugin(props) {
    const { editor, rules } = props;
    const plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
        state: {
            init () {
                return null;
            },
            apply (tr, prev) {
                const stored = tr.getMeta(plugin);
                if (stored) {
                    return stored;
                }
                const simulatedInputMeta = tr.getMeta("applyInputRules");
                const isSimulatedInput = !!simulatedInputMeta;
                if (isSimulatedInput) {
                    setTimeout(()=>{
                        const { from, text } = simulatedInputMeta;
                        const to = from + text.length;
                        run({
                            editor,
                            from,
                            to,
                            text,
                            rules,
                            plugin
                        });
                    });
                }
                return tr.selectionSet || tr.docChanged ? null : prev;
            }
        },
        props: {
            handleTextInput (view, from, to, text) {
                return run({
                    editor,
                    from,
                    to,
                    text,
                    rules,
                    plugin
                });
            },
            handleDOMEvents: {
                compositionend: (view)=>{
                    setTimeout(()=>{
                        const { $cursor } = view.state.selection;
                        if ($cursor) {
                            run({
                                editor,
                                from: $cursor.pos,
                                to: $cursor.pos,
                                text: "",
                                rules,
                                plugin
                            });
                        }
                    });
                    return false;
                }
            },
            // add support for input rules to trigger on enter
            // this is useful for example for code blocks
            handleKeyDown (view, event) {
                if (event.key !== "Enter") {
                    return false;
                }
                const { $cursor } = view.state.selection;
                if ($cursor) {
                    return run({
                        editor,
                        from: $cursor.pos,
                        to: $cursor.pos,
                        text: "\n",
                        rules,
                        plugin
                    });
                }
                return false;
            }
        },
        // @ts-ignore
        isInputRules: true
    });
    return plugin;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-function.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFunction",
    ()=>isFunction
]);
function isFunction(value) {
    return typeof value === "function";
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/call-or-return.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callOrReturn",
    ()=>callOrReturn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-function.js [app-client] (ecmascript)");
;
function callOrReturn(value, context = void 0, ...props) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(value)) {
        if (context) {
            return value.bind(context)(...props);
        }
        return value(...props);
    }
    return value;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/input-rules/mark-input-rule.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markInputRule",
    ()=>markInputRule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$marks$2d$between$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-marks-between.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$input$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/input-rule.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/call-or-return.js [app-client] (ecmascript)");
;
;
;
function markInputRule(config) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$input$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputRule"]({
        find: config.find,
        handler: ({ state, range, match })=>{
            const attributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])(config.getAttributes, void 0, match);
            if (attributes === false || attributes === null) {
                return null;
            }
            const { tr } = state;
            const captureGroup = match[match.length - 1];
            const fullMatch = match[0];
            if (captureGroup) {
                const startSpaces = fullMatch.search(/\S/);
                const textStart = range.from + fullMatch.indexOf(captureGroup);
                const textEnd = textStart + captureGroup.length;
                const excludedMarks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$marks$2d$between$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarksBetween"])(range.from, range.to, state.doc).filter((item)=>{
                    const excluded = item.mark.type.excluded;
                    return excluded.find((type)=>type === config.type && type !== item.mark.type);
                }).filter((item)=>item.to > textStart);
                if (excludedMarks.length) {
                    return null;
                }
                if (textEnd < range.to) {
                    tr.delete(textEnd, range.to);
                }
                if (textStart > range.from) {
                    tr.delete(range.from + startSpaces, textStart);
                }
                const markEnd = range.from + startSpaces + captureGroup.length;
                tr.addMark(range.from + startSpaces, markEnd, config.type.create(attributes || {}));
                tr.removeStoredMark(config.type);
            }
        }
    });
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-number.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNumber",
    ()=>isNumber
]);
function isNumber(value) {
    return typeof value === "number";
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/paste-rule.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PasteRule",
    ()=>PasteRule,
    "pasteRulesPlugin",
    ()=>pasteRulesPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$command$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/command-manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$chainable$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/create-chainable-state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$regexp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-regexp.js [app-client] (ecmascript)");
;
;
;
;
;
class PasteRule {
    constructor(config){
        this.find = config.find;
        this.handler = config.handler;
    }
}
const pasteRuleMatcherHandler = (text, find, event)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$regexp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRegExp"])(find)) {
        return [
            ...text.matchAll(find)
        ];
    }
    const matches = find(text, event);
    if (!matches) {
        return [];
    }
    return matches.map((pasteRuleMatch)=>{
        const result = [
            pasteRuleMatch.text
        ];
        result.index = pasteRuleMatch.index;
        result.input = text;
        result.data = pasteRuleMatch.data;
        if (pasteRuleMatch.replaceWith) {
            if (!pasteRuleMatch.text.includes(pasteRuleMatch.replaceWith)) {
                console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".');
            }
            result.push(pasteRuleMatch.replaceWith);
        }
        return result;
    });
};
function run(config) {
    const { editor, state, from, to, rule, pasteEvent, dropEvent } = config;
    const { commands, chain, can } = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$command$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandManager"]({
        editor,
        state
    });
    const handlers = [];
    state.doc.nodesBetween(from, to, (node, pos)=>{
        if (!node.isTextblock || node.type.spec.code) {
            return;
        }
        const resolvedFrom = Math.max(from, pos);
        const resolvedTo = Math.min(to, pos + node.content.size);
        const textToMatch = node.textBetween(resolvedFrom - pos, resolvedTo - pos, void 0, "￼");
        const matches = pasteRuleMatcherHandler(textToMatch, rule.find, pasteEvent);
        matches.forEach((match)=>{
            if (match.index === void 0) {
                return;
            }
            const start = resolvedFrom + match.index + 1;
            const end = start + match[0].length;
            const range = {
                from: state.tr.mapping.map(start),
                to: state.tr.mapping.map(end)
            };
            const handler = rule.handler({
                state,
                range,
                match,
                commands,
                chain,
                can,
                pasteEvent,
                dropEvent
            });
            handlers.push(handler);
        });
    });
    const success = handlers.every((handler)=>handler !== null);
    return success;
}
const createClipboardPasteEvent = (text)=>{
    const event = new ClipboardEvent("paste", {
        clipboardData: new DataTransfer()
    });
    event.clipboardData?.setData("text/html", text);
    return event;
};
function pasteRulesPlugin(props) {
    const { editor, rules } = props;
    let dragSourceElement = null;
    let isPastedFromProseMirror = false;
    let isDroppedFromProseMirror = false;
    let pasteEvent = typeof ClipboardEvent !== "undefined" ? new ClipboardEvent("paste") : null;
    let dropEvent = typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
    const processEvent = ({ state, from, to, rule, pasteEvt })=>{
        const tr = state.tr;
        const chainableState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$chainable$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChainableState"])({
            state,
            transaction: tr
        });
        const handler = run({
            editor,
            state: chainableState,
            from: Math.max(from - 1, 0),
            to: to.b - 1,
            rule,
            pasteEvent: pasteEvt,
            dropEvent
        });
        if (!handler || !tr.steps.length) {
            return;
        }
        dropEvent = typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
        pasteEvent = typeof ClipboardEvent !== "undefined" ? new ClipboardEvent("paste") : null;
        return tr;
    };
    const plugins = rules.map((rule)=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
            // we register a global drag handler to track the current drag source element
            view (view) {
                const handleDragstart = (event)=>{
                    dragSourceElement = view.dom.parentElement?.contains(event.target) ? view.dom.parentElement : null;
                };
                window.addEventListener("dragstart", handleDragstart);
                return {
                    destroy () {
                        window.removeEventListener("dragstart", handleDragstart);
                    }
                };
            },
            props: {
                handleDOMEvents: {
                    drop: (view, event)=>{
                        isDroppedFromProseMirror = dragSourceElement === view.dom.parentElement;
                        dropEvent = event;
                        return false;
                    },
                    paste: (_view, event)=>{
                        const html = event.clipboardData?.getData("text/html");
                        pasteEvent = event;
                        isPastedFromProseMirror = !!html?.includes("data-pm-slice");
                        return false;
                    }
                }
            },
            appendTransaction: (transactions, oldState, state)=>{
                const transaction = transactions[0];
                const isPaste = transaction.getMeta("uiEvent") === "paste" && !isPastedFromProseMirror;
                const isDrop = transaction.getMeta("uiEvent") === "drop" && !isDroppedFromProseMirror;
                const simulatedPasteMeta = transaction.getMeta("applyPasteRules");
                const isSimulatedPaste = !!simulatedPasteMeta;
                if (!isPaste && !isDrop && !isSimulatedPaste) {
                    return;
                }
                if (isSimulatedPaste) {
                    const { from: from2, text } = simulatedPasteMeta;
                    const to2 = from2 + text.length;
                    const pasteEvt = createClipboardPasteEvent(text);
                    return processEvent({
                        rule,
                        state,
                        from: from2,
                        to: {
                            b: to2
                        },
                        pasteEvt
                    });
                }
                const from = oldState.doc.content.findDiffStart(state.doc.content);
                const to = oldState.doc.content.findDiffEnd(state.doc.content);
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(from) || !to || from === to.b) {
                    return;
                }
                return processEvent({
                    rule,
                    state,
                    from,
                    to,
                    pasteEvt: pasteEvent
                });
            }
        });
    });
    return plugins;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/paste-rules/mark-paste-rule.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markPasteRule",
    ()=>markPasteRule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$marks$2d$between$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-marks-between.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$paste$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/paste-rule.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/call-or-return.js [app-client] (ecmascript)");
;
;
;
function markPasteRule(config) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$paste$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PasteRule"]({
        find: config.find,
        handler: ({ state, range, match, pasteEvent })=>{
            const attributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])(config.getAttributes, void 0, match, pasteEvent);
            if (attributes === false || attributes === null) {
                return null;
            }
            const { tr } = state;
            const captureGroup = match[match.length - 1];
            const fullMatch = match[0];
            let markEnd = range.to;
            if (captureGroup) {
                const startSpaces = fullMatch.search(/\S/);
                const textStart = range.from + fullMatch.indexOf(captureGroup);
                const textEnd = textStart + captureGroup.length;
                const excludedMarks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$marks$2d$between$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarksBetween"])(range.from, range.to, state.doc).filter((item)=>{
                    const excluded = item.mark.type.excluded;
                    return excluded.find((type)=>type === config.type && type !== item.mark.type);
                }).filter((item)=>item.to > textStart);
                if (excludedMarks.length) {
                    return null;
                }
                if (textEnd < range.to) {
                    tr.delete(textEnd, range.to);
                }
                if (textStart > range.from) {
                    tr.delete(range.from + startSpaces, textStart);
                }
                markEnd = range.from + startSpaces + captureGroup.length;
                tr.addMark(range.from + startSpaces, markEnd, config.type.create(attributes || {}));
                tr.removeStoredMark(config.type);
            }
        }
    });
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/get-mark-range.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMarkRange",
    ()=>getMarkRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/object-includes.js [app-client] (ecmascript)");
;
const findMarkInSet = (marks, type, attributes = {})=>{
    return marks.find((item)=>{
        return item.type === type && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectIncludes"])(item.attrs, attributes);
    });
};
const isMarkInSet = (marks, type, attributes = {})=>{
    return !!findMarkInSet(marks, type, attributes);
};
const getMarkRange = ($pos, type, attributes = {})=>{
    if (!$pos || !type) {
        return;
    }
    let start = $pos.parent.childAfter($pos.parentOffset);
    if ($pos.parentOffset === start.offset && start.offset !== 0) {
        start = $pos.parent.childBefore($pos.parentOffset);
    }
    if (!start.node) {
        return;
    }
    const mark = findMarkInSet([
        ...start.node.marks
    ], type, attributes);
    if (!mark) {
        return;
    }
    let startIndex = start.index;
    let startPos = $pos.start() + start.offset;
    let endIndex = startIndex + 1;
    let endPos = startPos + start.node.nodeSize;
    findMarkInSet([
        ...start.node.marks
    ], type, attributes);
    while(startIndex > 0 && mark.isInSet($pos.parent.child(startIndex - 1).marks)){
        startIndex -= 1;
        startPos -= $pos.parent.child(startIndex).nodeSize;
    }
    while(endIndex < $pos.parent.childCount && isMarkInSet([
        ...$pos.parent.child(endIndex).marks
    ], type, attributes)){
        endPos += $pos.parent.child(endIndex).nodeSize;
        endIndex += 1;
    }
    return {
        from: startPos,
        to: endPos
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/get-marks-between.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMarksBetween",
    ()=>getMarksBetween
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$get$2d$mark$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/get-mark-range.js [app-client] (ecmascript)");
;
const getMarksBetween = (from, to, doc)=>{
    const marks = [];
    if (from === to) {
        doc.resolve(from).marks().forEach((mark)=>{
            const $pos = doc.resolve(from);
            const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$get$2d$mark$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkRange"])($pos, mark.type);
            if (!range) {
                return;
            }
            marks.push({
                mark,
                ...range
            });
        });
    } else {
        doc.nodesBetween(from, to, (node, pos)=>{
            if (!node || node?.nodeSize === void 0) {
                return;
            }
            marks.push(...node.marks.map((mark)=>({
                    from: pos,
                    to: pos + node.nodeSize,
                    mark
                })));
        });
    }
    return marks;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/get-node-type.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNodeType",
    ()=>getNodeType
]);
const getNodeType = (nameOrType, schema)=>{
    if (typeof nameOrType === "string") {
        if (!schema.nodes[nameOrType]) {
            throw Error(`There is no node type named '${nameOrType}'. Maybe you forgot to add the extension?`);
        }
        return schema.nodes[nameOrType];
    }
    return nameOrType;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/is-node-active.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeActive",
    ()=>isNodeActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/object-includes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/get-node-type.js [app-client] (ecmascript)");
;
;
const isNodeActive = (state, typeOrName, attributes = {})=>{
    const { from, to, empty } = state.selection;
    const type = typeOrName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema) : null;
    const nodeRanges = [];
    state.doc.nodesBetween(from, to, (node, pos)=>{
        if (node.isText) {
            return;
        }
        const relativeFrom = Math.max(from, pos);
        const relativeTo = Math.min(to, pos + node.nodeSize);
        nodeRanges.push({
            node,
            from: relativeFrom,
            to: relativeTo
        });
    });
    const selectionRange = to - from;
    const matchedNodeRanges = nodeRanges.filter((nodeRange)=>{
        if (!type) {
            return true;
        }
        return type.name === nodeRange.node.type.name;
    }).filter((nodeRange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectIncludes"])(nodeRange.node.attrs, attributes, {
            strict: false
        }));
    if (empty) {
        return !!matchedNodeRanges.length;
    }
    const range = matchedNodeRanges.reduce((sum, nodeRange)=>sum + nodeRange.to - nodeRange.from, 0);
    return range >= selectionRange;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/is-function.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFunction",
    ()=>isFunction
]);
const isFunction = (value)=>{
    return typeof value === "function";
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/call-or-return.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callOrReturn",
    ()=>callOrReturn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$is$2d$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/is-function.js [app-client] (ecmascript)");
;
const callOrReturn = (value, context = void 0, ...props)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$is$2d$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(value)) {
        if (context) {
            return value.bind(context)(...props);
        }
        return value(...props);
    }
    return value;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNodeType",
    ()=>getNodeType
]);
function getNodeType(nameOrType, schema) {
    if (typeof nameOrType === "string") {
        if (!schema.nodes[nameOrType]) {
            throw Error(`There is no node type named '${nameOrType}'. Maybe you forgot to add the extension?`);
        }
        return schema.nodes[nameOrType];
    }
    return nameOrType;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-node-active.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeActive",
    ()=>isNodeActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/object-includes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
;
;
function isNodeActive(state, typeOrName, attributes = {}) {
    const { from, to, empty } = state.selection;
    const type = typeOrName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema) : null;
    const nodeRanges = [];
    state.doc.nodesBetween(from, to, (node, pos)=>{
        if (node.isText) {
            return;
        }
        const relativeFrom = Math.max(from, pos);
        const relativeTo = Math.min(to, pos + node.nodeSize);
        nodeRanges.push({
            node,
            from: relativeFrom,
            to: relativeTo
        });
    });
    const selectionRange = to - from;
    const matchedNodeRanges = nodeRanges.filter((nodeRange)=>{
        if (!type) {
            return true;
        }
        return type.name === nodeRange.node.type.name;
    }).filter((nodeRange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectIncludes"])(nodeRange.node.attrs, attributes, {
            strict: false
        }));
    if (empty) {
        return !!matchedNodeRanges.length;
    }
    const range = matchedNodeRanges.reduce((sum, nodeRange)=>sum + nodeRange.to - nodeRange.from, 0);
    return range >= selectionRange;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/merge-attributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeAttributes",
    ()=>mergeAttributes
]);
function mergeAttributes(...objects) {
    return objects.filter((item)=>!!item).reduce((items, item)=>{
        const mergedAttributes = {
            ...items
        };
        Object.entries(item).forEach(([key, value])=>{
            const exists = mergedAttributes[key];
            if (!exists) {
                mergedAttributes[key] = value;
                return;
            }
            if (key === "class") {
                const valueClasses = value ? value.split(" ") : [];
                const existingClasses = mergedAttributes[key] ? mergedAttributes[key].split(" ") : [];
                const insertClasses = valueClasses.filter((valueClass)=>!existingClasses.includes(valueClass));
                mergedAttributes[key] = [
                    ...existingClasses,
                    ...insertClasses
                ].join(" ");
            } else if (key === "style") {
                const newStyles = value ? value.split(";").map((style)=>style.trim()).filter(Boolean) : [];
                const existingStyles = mergedAttributes[key] ? mergedAttributes[key].split(";").map((style)=>style.trim()).filter(Boolean) : [];
                const styleMap = /* @__PURE__ */ new Map();
                existingStyles.forEach((style)=>{
                    const [property, val] = style.split(":").map((part)=>part.trim());
                    styleMap.set(property, val);
                });
                newStyles.forEach((style)=>{
                    const [property, val] = style.split(":").map((part)=>part.trim());
                    styleMap.set(property, val);
                });
                mergedAttributes[key] = Array.from(styleMap.entries()).map(([property, val])=>`${property}: ${val}`).join("; ");
            } else {
                mergedAttributes[key] = value;
            }
        });
        return mergedAttributes;
    }, {});
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/find-children.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findChildren",
    ()=>findChildren
]);
const findChildren = (node, predicate)=>{
    const nodesWithPos = [];
    node.descendants((child, pos)=>{
        if (predicate(child)) {
            nodesWithPos.push({
                node: child,
                pos
            });
        }
    });
    return nodesWithPos;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/min-max.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minMax",
    ()=>minMax
]);
const minMax = (value = 0, min = 0, max = 0)=>{
    return Math.min(Math.max(value, min), max);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/pos-to-dom-rect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "posToDOMRect",
    ()=>posToDOMRect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/min-max.js [app-client] (ecmascript)");
;
const posToDOMRect = (view, from, to)=>{
    const minPos = 0;
    const maxPos = view.state.doc.content.size;
    const resolvedFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(from, minPos, maxPos);
    const resolvedEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(to, minPos, maxPos);
    const start = view.coordsAtPos(resolvedFrom);
    const end = view.coordsAtPos(resolvedEnd, -1);
    const top = Math.min(start.top, end.top);
    const bottom = Math.max(start.bottom, end.bottom);
    const left = Math.min(start.left, end.left);
    const right = Math.max(start.right, end.right);
    const width = right - left;
    const height = bottom - top;
    const x = left;
    const y = top;
    const data = {
        top,
        bottom,
        left,
        right,
        width,
        height,
        x,
        y
    };
    return {
        ...data,
        toJSON: ()=>data
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/find-parent-node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findParentNode",
    ()=>findParentNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/find-parent-node-closest-to-pos.js [app-client] (ecmascript)");
;
const findParentNode = (predicate)=>{
    return (selection)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, predicate);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-extension-field.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getExtensionField",
    ()=>getExtensionField
]);
function getExtensionField(extension, field, context) {
    if (extension.config[field] === void 0 && extension.parent) {
        return getExtensionField(extension.parent, field, context);
    }
    if (typeof extension.config[field] === "function") {
        const value = extension.config[field].bind({
            ...context,
            parent: extension.parent ? getExtensionField(extension.parent, field, context) : null
        });
        return value;
    }
    return extension.config[field];
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/split-extensions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "splitExtensions",
    ()=>splitExtensions
]);
function splitExtensions(extensions) {
    const baseExtensions = extensions.filter((extension)=>extension.type === "extension");
    const nodeExtensions = extensions.filter((extension)=>extension.type === "node");
    const markExtensions = extensions.filter((extension)=>extension.type === "mark");
    return {
        baseExtensions,
        nodeExtensions,
        markExtensions
    };
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isList",
    ()=>isList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-extension-field.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/call-or-return.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$split$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/split-extensions.js [app-client] (ecmascript)");
;
;
;
function isList(name, extensions) {
    const { nodeExtensions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$split$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitExtensions"])(extensions);
    const extension = nodeExtensions.find((item)=>item.name === name);
    if (!extension) {
        return false;
    }
    const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage
    };
    const group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "group", context));
    if (typeof group !== "string") {
        return false;
    }
    return group.split(" ").includes("list");
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/is-node-selection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeSelection",
    ()=>isNodeSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
;
const isNodeSelection = (value)=>{
    return value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"];
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/get-extension-field.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getExtensionField",
    ()=>getExtensionField
]);
const getExtensionField = (extension, field, context)=>{
    if (extension.config[field] === void 0 && extension.parent) {
        return getExtensionField(extension.parent, field, context);
    }
    if (typeof extension.config[field] === "function") {
        const value = extension.config[field].bind({
            ...context,
            parent: extension.parent ? getExtensionField(extension.parent, field, context) : null
        });
        return value;
    }
    return extension.config[field];
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/escape-for-regex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "escapeForRegEx",
    ()=>escapeForRegEx
]);
function escapeForRegEx(string) {
    return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/suggestion/find-suggestion-match.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findSuggestionMatch",
    ()=>findSuggestionMatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$escape$2d$for$2d$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/escape-for-regex.js [app-client] (ecmascript)");
;
const findSuggestionMatch = (config)=>{
    const { char, allowSpaces, allowedPrefixes, startOfLine, $position } = config;
    const escapedChar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$escape$2d$for$2d$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeForRegEx"])(char);
    const suffix = new RegExp(`\\s${escapedChar}$`);
    const prefix = startOfLine ? "^" : "";
    const regexp = allowSpaces ? new RegExp(`${prefix}${escapedChar}.*?(?=\\s${escapedChar}|$)`, "gm") : new RegExp(`${prefix}(?:^)?${escapedChar}[^\\s${escapedChar}]*`, "gm");
    const text = $position.nodeBefore?.isText && $position.nodeBefore.text;
    if (!text) {
        return null;
    }
    const textFrom = $position.pos - text.length;
    const match = Array.from(text.matchAll(regexp)).pop();
    if (!match || match.input === void 0 || match.index === void 0) {
        return null;
    }
    const matchPrefix = match.input.slice(Math.max(0, match.index - 1), match.index);
    const matchPrefixIsAllowed = new RegExp(`^[${allowedPrefixes?.join("")}\0]?$`).test(matchPrefix);
    if (allowedPrefixes !== null && !matchPrefixIsAllowed) {
        return null;
    }
    const from = textFrom + match.index;
    let to = from + match[0].length;
    if (allowSpaces && suffix.test(text.slice(to - 1, to + 1))) {
        match[0] += " ";
        to += 1;
    }
    if (from < $position.pos && to >= $position.pos) {
        return {
            range: {
                from,
                to
            },
            query: match[0].slice(char.length),
            text: match[0]
        };
    }
    return null;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/suggestion/suggestion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Suggestion",
    ()=>Suggestion,
    "SuggestionPluginKey",
    ()=>SuggestionPluginKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-view@1.42.2/node_modules/prosemirror-view/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$suggestion$2f$find$2d$suggestion$2d$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/suggestion/find-suggestion-match.js [app-client] (ecmascript)");
;
;
;
const SuggestionPluginKey = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("suggestion");
const Suggestion = ({ pluginKey = SuggestionPluginKey, editor, char = "@", allowSpaces = false, allowedPrefixes = [
    " "
], startOfLine = false, decorationTag = "span", decorationClass = "suggestion", command = ()=>null, items = ()=>[], render = ()=>({}), allow = ()=>true, findSuggestionMatch = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$suggestion$2f$find$2d$suggestion$2d$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSuggestionMatch"] })=>{
    let props;
    const renderer = render?.();
    const plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
        key: pluginKey,
        view () {
            return {
                update: async (view, prevState)=>{
                    const prev = this.key?.getState(prevState);
                    const next = this.key?.getState(view.state);
                    const moved = prev.active && next.active && prev.range.from !== next.range.from;
                    const started = !prev.active && next.active;
                    const stopped = prev.active && !next.active;
                    const changed = !started && !stopped && prev.query !== next.query;
                    const handleStart = started || moved && changed;
                    const handleChange = changed || moved;
                    const handleExit = stopped || moved && changed;
                    if (!handleStart && !handleChange && !handleExit) {
                        return;
                    }
                    const state = handleExit && !handleStart ? prev : next;
                    const decorationNode = view.dom.querySelector(`[data-decoration-id="${state.decorationId}"]`);
                    props = {
                        editor,
                        range: state.range,
                        query: state.query,
                        text: state.text,
                        items: [],
                        command: (commandProps)=>{
                            return command({
                                editor,
                                range: state.range,
                                props: commandProps
                            });
                        },
                        decorationNode,
                        // virtual node for popper.js or tippy.js
                        // this can be used for building popups without a DOM node
                        clientRect: decorationNode ? ()=>{
                            const { decorationId } = this.key?.getState(editor.state);
                            const currentDecorationNode = view.dom.querySelector(`[data-decoration-id="${decorationId}"]`);
                            return currentDecorationNode?.getBoundingClientRect() || null;
                        } : null
                    };
                    if (handleStart) {
                        renderer?.onBeforeStart?.(props);
                    }
                    if (handleChange) {
                        renderer?.onBeforeUpdate?.(props);
                    }
                    if (handleChange || handleStart) {
                        props.items = await items({
                            editor,
                            query: state.query
                        });
                    }
                    if (handleExit) {
                        renderer?.onExit?.(props);
                    }
                    if (handleChange) {
                        renderer?.onUpdate?.(props);
                    }
                    if (handleStart) {
                        renderer?.onStart?.(props);
                    }
                },
                destroy: ()=>{
                    if (!props) {
                        return;
                    }
                    renderer?.onExit?.(props);
                }
            };
        },
        state: {
            // Initialize the plugin's internal state.
            init () {
                const state = {
                    active: false,
                    range: {
                        from: 0,
                        to: 0
                    },
                    query: null,
                    text: null,
                    composing: false
                };
                return state;
            },
            // Apply changes to the plugin state from a view transaction.
            apply (transaction, prev, _oldState, state) {
                const { isEditable } = editor;
                const { composing } = editor.view;
                const { selection } = transaction;
                const { empty, from } = selection;
                const next = {
                    ...prev
                };
                next.composing = composing;
                if (isEditable && (empty || editor.view.composing)) {
                    if ((from < prev.range.from || from > prev.range.to) && !composing && !prev.composing) {
                        next.active = false;
                    }
                    const match = findSuggestionMatch({
                        char,
                        allowSpaces,
                        allowedPrefixes,
                        startOfLine,
                        $position: selection.$from
                    });
                    const decorationId = `id_${Math.floor(Math.random() * 4294967295)}`;
                    if (match && allow({
                        editor,
                        state,
                        range: match.range,
                        isActive: prev.active
                    })) {
                        next.active = true;
                        next.decorationId = prev.decorationId ? prev.decorationId : decorationId;
                        next.range = match.range;
                        next.query = match.query;
                        next.text = match.text;
                    } else {
                        next.active = false;
                    }
                } else {
                    next.active = false;
                }
                if (!next.active) {
                    next.decorationId = null;
                    next.range = {
                        from: 0,
                        to: 0
                    };
                    next.query = null;
                    next.text = null;
                }
                return next;
            }
        },
        props: {
            // Call the keydown hook if suggestion is active.
            handleKeyDown (view, event) {
                const { active, range } = plugin.getState(view.state);
                if (!active) {
                    return false;
                }
                return renderer?.onKeyDown?.({
                    view,
                    event,
                    range
                }) || false;
            },
            // Setup decorator on the currently active suggestion.
            decorations (state) {
                const { active, range, decorationId } = plugin.getState(state);
                if (!active) {
                    return null;
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(state.doc, [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].inline(range.from, range.to, {
                        nodeName: decorationTag,
                        class: decorationClass,
                        "data-decoration-id": decorationId
                    })
                ]);
            }
        }
    });
    return plugin;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/event-emitter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventEmitter",
    ()=>EventEmitter
]);
class EventEmitter {
    constructor(){
        this.callbacks = {};
    }
    on(event, fn) {
        if (!this.callbacks[event]) {
            this.callbacks[event] = [];
        }
        this.callbacks[event].push(fn);
        return this;
    }
    emit(event, ...args) {
        const callbacks = this.callbacks[event];
        if (callbacks) {
            callbacks.forEach((callback)=>callback.apply(this, args));
        }
        return this;
    }
    off(event, fn) {
        const callbacks = this.callbacks[event];
        if (callbacks) {
            if (fn) {
                this.callbacks[event] = callbacks.filter((callback)=>callback !== fn);
            } else {
                delete this.callbacks[event];
            }
        }
        return this;
    }
    removeAllListeners() {
        this.callbacks = {};
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-attributes-from-extensions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAttributesFromExtensions",
    ()=>getAttributesFromExtensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-extension-field.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$split$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/split-extensions.js [app-client] (ecmascript)");
;
;
function getAttributesFromExtensions(extensions) {
    const extensionAttributes = [];
    const { nodeExtensions, markExtensions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$split$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitExtensions"])(extensions);
    const nodeAndMarkExtensions = [
        ...nodeExtensions,
        ...markExtensions
    ];
    const defaultAttribute = {
        default: null,
        rendered: true,
        renderHTML: null,
        parseHTML: null,
        keepOnSplit: true,
        isRequired: false
    };
    extensions.forEach((extension)=>{
        const context = {
            name: extension.name,
            options: extension.options,
            storage: extension.storage,
            extensions: nodeAndMarkExtensions
        };
        const addGlobalAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addGlobalAttributes", context);
        if (!addGlobalAttributes) {
            return;
        }
        const globalAttributes = addGlobalAttributes();
        globalAttributes.forEach((globalAttribute)=>{
            globalAttribute.types.forEach((type)=>{
                Object.entries(globalAttribute.attributes).forEach(([name, attribute])=>{
                    extensionAttributes.push({
                        type,
                        name,
                        attribute: {
                            ...defaultAttribute,
                            ...attribute
                        }
                    });
                });
            });
        });
    });
    nodeAndMarkExtensions.forEach((extension)=>{
        const context = {
            name: extension.name,
            options: extension.options,
            storage: extension.storage
        };
        const addAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addAttributes", context);
        if (!addAttributes) {
            return;
        }
        const attributes = addAttributes();
        Object.entries(attributes).forEach(([name, attribute])=>{
            const mergedAttr = {
                ...defaultAttribute,
                ...attribute
            };
            if (typeof mergedAttr?.default === "function") {
                mergedAttr.default = mergedAttr.default();
            }
            if (mergedAttr?.isRequired && mergedAttr?.default === void 0) {
                delete mergedAttr.default;
            }
            extensionAttributes.push({
                type: extension.name,
                name,
                attribute: mergedAttr
            });
        });
    });
    return extensionAttributes;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-rendered-attributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRenderedAttributes",
    ()=>getRenderedAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$merge$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/merge-attributes.js [app-client] (ecmascript)");
;
function getRenderedAttributes(nodeOrMark, extensionAttributes) {
    return extensionAttributes.filter((attribute)=>attribute.type === nodeOrMark.type.name).filter((item)=>item.attribute.rendered).map((item)=>{
        if (!item.attribute.renderHTML) {
            return {
                [item.name]: nodeOrMark.attrs[item.name]
            };
        }
        return item.attribute.renderHTML(nodeOrMark.attrs) || {};
    }).reduce((attributes, attribute)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$merge$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(attributes, attribute), {});
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-empty-object.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEmptyObject",
    ()=>isEmptyObject
]);
function isEmptyObject(value = {}) {
    return Object.keys(value).length === 0 && value.constructor === Object;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/from-string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromString",
    ()=>fromString
]);
function fromString(value) {
    if (typeof value !== "string") {
        return value;
    }
    if (value.match(/^[+-]?(?:\d*\.)?\d+$/)) {
        return Number(value);
    }
    if (value === "true") {
        return true;
    }
    if (value === "false") {
        return false;
    }
    return value;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/inject-extension-attributes-to-parse-rule.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "injectExtensionAttributesToParseRule",
    ()=>injectExtensionAttributesToParseRule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/from-string.js [app-client] (ecmascript)");
;
function injectExtensionAttributesToParseRule(parseRule, extensionAttributes) {
    if ("style" in parseRule) {
        return parseRule;
    }
    return {
        ...parseRule,
        getAttrs: (node)=>{
            const oldAttributes = parseRule.getAttrs ? parseRule.getAttrs(node) : parseRule.attrs;
            if (oldAttributes === false) {
                return false;
            }
            const newAttributes = extensionAttributes.reduce((items, item)=>{
                const value = item.attribute.parseHTML ? item.attribute.parseHTML(node) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(node.getAttribute(item.name));
                if (value === null || value === void 0) {
                    return items;
                }
                return {
                    ...items,
                    [item.name]: value
                };
            }, {});
            return {
                ...oldAttributes,
                ...newAttributes
            };
        }
    };
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-schema-by-resolved-extensions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSchemaByResolvedExtensions",
    ()=>getSchemaByResolvedExtensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/call-or-return.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$empty$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-empty-object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$attributes$2d$from$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-attributes-from-extensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-extension-field.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$rendered$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-rendered-attributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$inject$2d$extension$2d$attributes$2d$to$2d$parse$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/inject-extension-attributes-to-parse-rule.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$split$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/split-extensions.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function cleanUpSchemaItem(data) {
    return Object.fromEntries(// @ts-ignore
    Object.entries(data).filter(([key, value])=>{
        if (key === "attrs" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$empty$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyObject"])(value)) {
            return false;
        }
        return value !== null && value !== void 0;
    }));
}
function getSchemaByResolvedExtensions(extensions, editor) {
    const allAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$attributes$2d$from$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttributesFromExtensions"])(extensions);
    const { nodeExtensions, markExtensions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$split$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitExtensions"])(extensions);
    const topNode = nodeExtensions.find((extension)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "topNode"))?.name;
    const nodes = Object.fromEntries(nodeExtensions.map((extension)=>{
        const extensionAttributes = allAttributes.filter((attribute)=>attribute.type === extension.name);
        const context = {
            name: extension.name,
            options: extension.options,
            storage: extension.storage,
            editor
        };
        const extraNodeFields = extensions.reduce((fields, e)=>{
            const extendNodeSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(e, "extendNodeSchema", context);
            return {
                ...fields,
                ...extendNodeSchema ? extendNodeSchema(extension) : {}
            };
        }, {});
        const schema = cleanUpSchemaItem({
            ...extraNodeFields,
            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "content", context)),
            marks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "marks", context)),
            group: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "group", context)),
            inline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "inline", context)),
            atom: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "atom", context)),
            selectable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "selectable", context)),
            draggable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "draggable", context)),
            code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "code", context)),
            whitespace: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "whitespace", context)),
            defining: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "defining", context)),
            isolating: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "isolating", context)),
            attrs: Object.fromEntries(extensionAttributes.map((extensionAttribute)=>{
                return [
                    extensionAttribute.name,
                    {
                        default: extensionAttribute?.attribute?.default
                    }
                ];
            }))
        });
        const parseHTML = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "parseHTML", context));
        if (parseHTML) {
            schema.parseDOM = parseHTML.map((parseRule)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$inject$2d$extension$2d$attributes$2d$to$2d$parse$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectExtensionAttributesToParseRule"])(parseRule, extensionAttributes));
        }
        const renderHTML = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "renderHTML", context);
        if (renderHTML) {
            schema.toDOM = (node)=>renderHTML({
                    node,
                    HTMLAttributes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$rendered$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRenderedAttributes"])(node, extensionAttributes)
                });
        }
        const renderText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "renderText", context);
        if (renderText) {
            schema.toText = renderText;
        }
        return [
            extension.name,
            schema
        ];
    }));
    const marks = Object.fromEntries(markExtensions.map((extension)=>{
        const extensionAttributes = allAttributes.filter((attribute)=>attribute.type === extension.name);
        const context = {
            name: extension.name,
            options: extension.options,
            storage: extension.storage,
            editor
        };
        const extraMarkFields = extensions.reduce((fields, e)=>{
            const extendMarkSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(e, "extendMarkSchema", context);
            return {
                ...fields,
                ...extendMarkSchema ? extendMarkSchema(extension) : {}
            };
        }, {});
        const schema = cleanUpSchemaItem({
            ...extraMarkFields,
            inclusive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "inclusive", context)),
            excludes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "excludes", context)),
            group: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "group", context)),
            spanning: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "spanning", context)),
            code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "code", context)),
            attrs: Object.fromEntries(extensionAttributes.map((extensionAttribute)=>{
                return [
                    extensionAttribute.name,
                    {
                        default: extensionAttribute?.attribute?.default
                    }
                ];
            }))
        });
        const parseHTML = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "parseHTML", context));
        if (parseHTML) {
            schema.parseDOM = parseHTML.map((parseRule)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$inject$2d$extension$2d$attributes$2d$to$2d$parse$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectExtensionAttributesToParseRule"])(parseRule, extensionAttributes));
        }
        const renderHTML = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "renderHTML", context);
        if (renderHTML) {
            schema.toDOM = (mark)=>renderHTML({
                    mark,
                    HTMLAttributes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$rendered$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRenderedAttributes"])(mark, extensionAttributes)
                });
        }
        return [
            extension.name,
            schema
        ];
    }));
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schema"]({
        topNode,
        nodes,
        marks
    });
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-schema-type-by-name.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSchemaTypeByName",
    ()=>getSchemaTypeByName
]);
function getSchemaTypeByName(name, schema) {
    return schema.nodes[name] || schema.marks[name] || null;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-extension-rules-enabled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isExtensionRulesEnabled",
    ()=>isExtensionRulesEnabled
]);
function isExtensionRulesEnabled(extension, enabled) {
    if (Array.isArray(enabled)) {
        return enabled.some((enabledExtension)=>{
            const name = typeof enabledExtension === "string" ? enabledExtension : enabledExtension.name;
            return name === extension.name;
        });
    }
    return enabled;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-plain-object.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPlainObject",
    ()=>isPlainObject
]);
function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}
function isPlainObject(value) {
    if (getType(value) !== "Object") {
        return false;
    }
    return value.constructor === Object && Object.getPrototypeOf(value) === Object.prototype;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/merge-deep.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeDeep",
    ()=>mergeDeep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$plain$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-plain-object.js [app-client] (ecmascript)");
;
function mergeDeep(target, source) {
    const output = {
        ...target
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$plain$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(target) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$plain$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(source)) {
        Object.keys(source).forEach((key)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$plain$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(source[key]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$plain$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(target[key])) {
                output[key] = mergeDeep(target[key], source[key]);
            } else {
                output[key] = source[key];
            }
        });
    }
    return output;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/mark.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mark",
    ()=>Mark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-extension-field.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/call-or-return.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$merge$2d$deep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/merge-deep.js [app-client] (ecmascript)");
;
;
;
class Mark {
    constructor(config = {}){
        this.type = "mark";
        this.name = "mark";
        this.parent = null;
        this.child = null;
        this.config = {
            name: this.name,
            defaultOptions: {}
        };
        this.config = {
            ...this.config,
            ...config
        };
        this.name = this.config.name;
        if (config.defaultOptions && Object.keys(config.defaultOptions).length > 0) {
            console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
        }
        this.options = this.config.defaultOptions;
        if (this.config.addOptions) {
            this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(this, "addOptions", {
                name: this.name
            }));
        }
        this.storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(this, "addStorage", {
            name: this.name,
            options: this.options
        })) || {};
    }
    static create(config = {}) {
        return new Mark(config);
    }
    configure(options = {}) {
        const extension = this.extend({
            ...this.config,
            addOptions: ()=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$merge$2d$deep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDeep"])(this.options, options);
            }
        });
        extension.name = this.name;
        extension.parent = this.parent;
        return extension;
    }
    extend(extendedConfig = {}) {
        const extension = new Mark(extendedConfig);
        extension.parent = this;
        this.child = extension;
        extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
        if (extendedConfig.defaultOptions && Object.keys(extendedConfig.defaultOptions).length > 0) {
            console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
        }
        extension.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addOptions", {
            name: extension.name
        }));
        extension.storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addStorage", {
            name: extension.name,
            options: extension.options
        }));
        return extension;
    }
    static handleExit({ editor, mark }) {
        const { tr } = editor.state;
        const currentPos = editor.state.selection.$from;
        const isAtEnd = currentPos.pos === currentPos.end();
        if (isAtEnd) {
            const currentMarks = currentPos.marks();
            const isInMark = !!currentMarks.find((m)=>m?.type.name === mark.name);
            if (!isInMark) {
                return false;
            }
            const removeMark = currentMarks.find((m)=>m?.type.name === mark.name);
            if (removeMark) {
                tr.removeStoredMark(removeMark);
            }
            tr.insertText(" ", currentPos.pos);
            editor.view.dispatch(tr);
            return true;
        }
        return false;
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/find-duplicates.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findDuplicates",
    ()=>findDuplicates
]);
function findDuplicates(items) {
    const filtered = items.filter((el, index)=>items.indexOf(el) !== index);
    return Array.from(new Set(filtered));
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extension-manager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExtensionManager",
    ()=>ExtensionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$keymap$40$1$2e$2$2e$3$2f$node_modules$2f$prosemirror$2d$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-keymap@1.2.3/node_modules/prosemirror-keymap/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$attributes$2d$from$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-attributes-from-extensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-extension-field.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$rendered$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-rendered-attributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$by$2d$resolved$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-schema-by-resolved-extensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$type$2d$by$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-schema-type-by-name.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$extension$2d$rules$2d$enabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-extension-rules-enabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$split$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/split-extensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$input$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/input-rule.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/mark.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$paste$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/paste-rule.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/call-or-return.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$find$2d$duplicates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/find-duplicates.js [app-client] (ecmascript)");
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
;
;
;
class ExtensionManager {
    constructor(extensions, editor){
        this.splittableMarks = [];
        this.editor = editor;
        this.extensions = ExtensionManager.resolve(extensions);
        this.schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$by$2d$resolved$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaByResolvedExtensions"])(this.extensions, editor);
        this.setupExtensions();
    }
    /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */ static resolve(extensions) {
        const resolvedExtensions = ExtensionManager.sort(ExtensionManager.flatten(extensions));
        const duplicatedNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$find$2d$duplicates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDuplicates"])(resolvedExtensions.map((extension)=>extension.name));
        if (duplicatedNames.length) {
            console.warn(`[tiptap warn]: Duplicate extension names found: [${duplicatedNames.map((item)=>`'${item}'`).join(", ")}]. This can lead to issues.`);
        }
        return resolvedExtensions;
    }
    /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */ static flatten(extensions) {
        return extensions.map((extension)=>{
            const context = {
                name: extension.name,
                options: extension.options,
                storage: extension.storage
            };
            const addExtensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addExtensions", context);
            if (addExtensions) {
                return [
                    extension,
                    ...this.flatten(addExtensions())
                ];
            }
            return extension;
        }).flat(10);
    }
    /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */ static sort(extensions) {
        const defaultPriority = 100;
        return extensions.sort((a, b)=>{
            const priorityA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(a, "priority") || defaultPriority;
            const priorityB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(b, "priority") || defaultPriority;
            if (priorityA > priorityB) {
                return -1;
            }
            if (priorityA < priorityB) {
                return 1;
            }
            return 0;
        });
    }
    /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */ get commands() {
        return this.extensions.reduce((commands, extension)=>{
            const context = {
                name: extension.name,
                options: extension.options,
                storage: extension.storage,
                editor: this.editor,
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$type$2d$by$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaTypeByName"])(extension.name, this.schema)
            };
            const addCommands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addCommands", context);
            if (!addCommands) {
                return commands;
            }
            return {
                ...commands,
                ...addCommands()
            };
        }, {});
    }
    /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */ get plugins() {
        const { editor } = this;
        const extensions = ExtensionManager.sort([
            ...this.extensions
        ].reverse());
        const inputRules = [];
        const pasteRules = [];
        const allPlugins = extensions.map((extension)=>{
            const context = {
                name: extension.name,
                options: extension.options,
                storage: extension.storage,
                editor,
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$type$2d$by$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaTypeByName"])(extension.name, this.schema)
            };
            const plugins = [];
            const addKeyboardShortcuts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addKeyboardShortcuts", context);
            let defaultBindings = {};
            if (extension.type === "mark" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "exitable", context)) {
                defaultBindings.ArrowRight = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].handleExit({
                        editor,
                        mark: extension
                    });
            }
            if (addKeyboardShortcuts) {
                const bindings = Object.fromEntries(Object.entries(addKeyboardShortcuts()).map(([shortcut, method])=>{
                    return [
                        shortcut,
                        ()=>method({
                                editor
                            })
                    ];
                }));
                defaultBindings = {
                    ...defaultBindings,
                    ...bindings
                };
            }
            const keyMapPlugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$keymap$40$1$2e$2$2e$3$2f$node_modules$2f$prosemirror$2d$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keymap"])(defaultBindings);
            plugins.push(keyMapPlugin);
            const addInputRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addInputRules", context);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$extension$2d$rules$2d$enabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExtensionRulesEnabled"])(extension, editor.options.enableInputRules) && addInputRules) {
                inputRules.push(...addInputRules());
            }
            const addPasteRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addPasteRules", context);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$extension$2d$rules$2d$enabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExtensionRulesEnabled"])(extension, editor.options.enablePasteRules) && addPasteRules) {
                pasteRules.push(...addPasteRules());
            }
            const addProseMirrorPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addProseMirrorPlugins", context);
            if (addProseMirrorPlugins) {
                const proseMirrorPlugins = addProseMirrorPlugins();
                plugins.push(...proseMirrorPlugins);
            }
            return plugins;
        }).flat();
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$input$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputRulesPlugin"])({
                editor,
                rules: inputRules
            }),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$paste$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pasteRulesPlugin"])({
                editor,
                rules: pasteRules
            }),
            ...allPlugins
        ];
    }
    /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */ get attributes() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$attributes$2d$from$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttributesFromExtensions"])(this.extensions);
    }
    /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */ get nodeViews() {
        const { editor } = this;
        const { nodeExtensions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$split$2d$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitExtensions"])(this.extensions);
        return Object.fromEntries(nodeExtensions.filter((extension)=>!!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addNodeView")).map((extension)=>{
            const extensionAttributes = this.attributes.filter((attribute)=>attribute.type === extension.name);
            const context = {
                name: extension.name,
                options: extension.options,
                storage: extension.storage,
                editor,
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(extension.name, this.schema)
            };
            const addNodeView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addNodeView", context);
            if (!addNodeView) {
                return [];
            }
            const nodeview = (node, view, getPos, decorations, innerDecorations)=>{
                const HTMLAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$rendered$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRenderedAttributes"])(node, extensionAttributes);
                return addNodeView()({
                    // pass-through
                    node,
                    view,
                    getPos,
                    decorations,
                    innerDecorations,
                    // tiptap-specific
                    editor,
                    extension,
                    HTMLAttributes
                });
            };
            return [
                extension.name,
                nodeview
            ];
        }));
    }
    /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */ setupExtensions() {
        this.extensions.forEach((extension)=>{
            this.editor.extensionStorage[extension.name] = extension.storage;
            const context = {
                name: extension.name,
                options: extension.options,
                storage: extension.storage,
                editor: this.editor,
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$type$2d$by$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaTypeByName"])(extension.name, this.schema)
            };
            if (extension.type === "mark") {
                const keepOnSplit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "keepOnSplit", context)) ?? true;
                if (keepOnSplit) {
                    this.splittableMarks.push(extension.name);
                }
            }
            const onBeforeCreate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "onBeforeCreate", context);
            const onCreate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "onCreate", context);
            const onUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "onUpdate", context);
            const onSelectionUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "onSelectionUpdate", context);
            const onTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "onTransaction", context);
            const onFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "onFocus", context);
            const onBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "onBlur", context);
            const onDestroy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "onDestroy", context);
            if (onBeforeCreate) {
                this.editor.on("beforeCreate", onBeforeCreate);
            }
            if (onCreate) {
                this.editor.on("create", onCreate);
            }
            if (onUpdate) {
                this.editor.on("update", onUpdate);
            }
            if (onSelectionUpdate) {
                this.editor.on("selectionUpdate", onSelectionUpdate);
            }
            if (onTransaction) {
                this.editor.on("transaction", onTransaction);
            }
            if (onFocus) {
                this.editor.on("focus", onFocus);
            }
            if (onBlur) {
                this.editor.on("blur", onBlur);
            }
            if (onDestroy) {
                this.editor.on("destroy", onDestroy);
            }
        });
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extension.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Extension",
    ()=>Extension
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-extension-field.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/call-or-return.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$merge$2d$deep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/merge-deep.js [app-client] (ecmascript)");
;
;
;
class Extension {
    constructor(config = {}){
        this.type = "extension";
        this.name = "extension";
        this.parent = null;
        this.child = null;
        this.config = {
            name: this.name,
            defaultOptions: {}
        };
        this.config = {
            ...this.config,
            ...config
        };
        this.name = this.config.name;
        if (config.defaultOptions && Object.keys(config.defaultOptions).length > 0) {
            console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
        }
        this.options = this.config.defaultOptions;
        if (this.config.addOptions) {
            this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(this, "addOptions", {
                name: this.name
            }));
        }
        this.storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(this, "addStorage", {
            name: this.name,
            options: this.options
        })) || {};
    }
    static create(config = {}) {
        return new Extension(config);
    }
    configure(options = {}) {
        const extension = this.extend({
            ...this.config,
            addOptions: ()=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$merge$2d$deep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDeep"])(this.options, options);
            }
        });
        extension.name = this.name;
        extension.parent = this.parent;
        return extension;
    }
    extend(extendedConfig = {}) {
        const extension = new Extension({
            ...this.config,
            ...extendedConfig
        });
        extension.parent = this;
        this.child = extension;
        extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
        if (extendedConfig.defaultOptions && Object.keys(extendedConfig.defaultOptions).length > 0) {
            console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
        }
        extension.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addOptions", {
            name: extension.name
        }));
        extension.storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addStorage", {
            name: extension.name,
            options: extension.options
        }));
        return extension;
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-text-between.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTextBetween",
    ()=>getTextBetween
]);
function getTextBetween(startNode, range, options) {
    const { from, to } = range;
    const { blockSeparator = "\n\n", textSerializers = {} } = options || {};
    let text = "";
    startNode.nodesBetween(from, to, (node, pos, parent, index)=>{
        if (node.isBlock && pos > from) {
            text += blockSeparator;
        }
        const textSerializer = textSerializers?.[node.type.name];
        if (textSerializer) {
            if (parent) {
                text += textSerializer({
                    node,
                    pos,
                    parent,
                    index,
                    range
                });
            }
            return false;
        }
        if (node.isText) {
            text += node?.text?.slice(Math.max(from, pos) - pos, to - pos);
        }
    });
    return text;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-text-serializers-from-schema.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTextSerializersFromSchema",
    ()=>getTextSerializersFromSchema
]);
function getTextSerializersFromSchema(schema) {
    return Object.fromEntries(Object.entries(schema.nodes).filter(([, node])=>node.spec.toText).map(([name, node])=>[
            name,
            node.spec.toText
        ]));
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/clipboard-text-serializer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClipboardTextSerializer",
    ()=>ClipboardTextSerializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$text$2d$between$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-text-between.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$text$2d$serializers$2d$from$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-text-serializers-from-schema.js [app-client] (ecmascript)");
;
;
;
;
const ClipboardTextSerializer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "clipboardTextSerializer",
    addOptions () {
        return {
            blockSeparator: void 0
        };
    },
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("clipboardTextSerializer"),
                props: {
                    clipboardTextSerializer: ()=>{
                        const { editor } = this;
                        const { state, schema } = editor;
                        const { doc, selection } = state;
                        const { ranges } = selection;
                        const from = Math.min(...ranges.map((range2)=>range2.$from.pos));
                        const to = Math.max(...ranges.map((range2)=>range2.$to.pos));
                        const textSerializers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$text$2d$serializers$2d$from$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextSerializersFromSchema"])(schema);
                        const range = {
                            from,
                            to
                        };
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$text$2d$between$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextBetween"])(doc, range, {
                            ...this.options.blockSeparator !== void 0 ? {
                                blockSeparator: this.options.blockSeparator
                            } : {},
                            textSerializers
                        });
                    }
                }
            })
        ];
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
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
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/blur.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blur",
    ()=>blur
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
;
const blur = ()=>({ editor, view, tr, dispatch })=>{
        if (dispatch && !tr.selection.empty) {
            const { $anchor } = tr.selection;
            tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].between($anchor, $anchor));
        }
        requestAnimationFrame(()=>{
            if (editor.isDestroyed) {
                return;
            }
            const nativeSelection = window?.getSelection();
            const anchorNode = nativeSelection?.anchorNode;
            const ownsNativeRange = !!anchorNode && view.dom.contains(anchorNode);
            view.dom.blur();
            if (ownsNativeRange) {
                nativeSelection?.removeAllRanges();
            }
        });
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/clear-content.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearContent",
    ()=>clearContent
]);
const clearContent = (emitUpdate = false)=>({ commands })=>{
        return commands.setContent("", emitUpdate);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/clear-nodes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearNodes",
    ()=>clearNodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
;
const clearNodes = ()=>({ state, tr, dispatch })=>{
        const { selection } = tr;
        const { ranges } = selection;
        if (!dispatch) {
            return true;
        }
        ranges.forEach(({ $from, $to })=>{
            state.doc.nodesBetween($from.pos, $to.pos, (node, pos)=>{
                if (node.type.isText) {
                    return;
                }
                const { doc, mapping } = tr;
                const $mappedFrom = doc.resolve(mapping.map(pos));
                const $mappedTo = doc.resolve(mapping.map(pos + node.nodeSize));
                const nodeRange = $mappedFrom.blockRange($mappedTo);
                if (!nodeRange) {
                    return;
                }
                const targetLiftDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftTarget"])(nodeRange);
                if (node.type.isTextblock) {
                    const { defaultType } = $mappedFrom.parent.contentMatchAt($mappedFrom.index());
                    tr.setNodeMarkup(nodeRange.start, defaultType);
                }
                if (targetLiftDepth || targetLiftDepth === 0) {
                    tr.lift(nodeRange, targetLiftDepth);
                }
            });
        });
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/command.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "command",
    ()=>command
]);
const command = (fn)=>(props)=>{
        return fn(props);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/create-paragraph-near.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createParagraphNear",
    ()=>createParagraphNear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const createParagraphNear = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createParagraphNear"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/cut.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cut",
    ()=>cut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
;
const cut = (originRange, targetPos)=>({ editor, tr })=>{
        const { state } = editor;
        const contentSlice = state.doc.slice(originRange.from, originRange.to);
        tr.deleteRange(originRange.from, originRange.to);
        const newPos = tr.mapping.map(targetPos);
        tr.insert(newPos, contentSlice.content);
        tr.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"](tr.doc.resolve(newPos - 1)));
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/delete-current-node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCurrentNode",
    ()=>deleteCurrentNode
]);
const deleteCurrentNode = ()=>({ tr, dispatch })=>{
        const { selection } = tr;
        const currentNode = selection.$anchor.node();
        if (currentNode.content.size > 0) {
            return false;
        }
        const $pos = tr.selection.$anchor;
        for(let depth = $pos.depth; depth > 0; depth -= 1){
            const node = $pos.node(depth);
            if (node.type === currentNode.type) {
                if (dispatch) {
                    const from = $pos.before(depth);
                    const to = $pos.after(depth);
                    tr.delete(from, to).scrollIntoView();
                }
                return true;
            }
        }
        return false;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/delete-node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteNode",
    ()=>deleteNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
;
const deleteNode = (typeOrName)=>({ tr, state, dispatch })=>{
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
        const $pos = tr.selection.$anchor;
        for(let depth = $pos.depth; depth > 0; depth -= 1){
            const node = $pos.node(depth);
            if (node.type === type) {
                if (dispatch) {
                    const from = $pos.before(depth);
                    const to = $pos.after(depth);
                    tr.delete(from, to).scrollIntoView();
                }
                return true;
            }
        }
        return false;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/delete-range.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteRange",
    ()=>deleteRange
]);
const deleteRange = (range)=>({ tr, dispatch })=>{
        const { from, to } = range;
        if (dispatch) {
            tr.delete(from, to);
        }
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/delete-selection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteSelection",
    ()=>deleteSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const deleteSelection = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSelection"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/enter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enter",
    ()=>enter
]);
const enter = ()=>({ commands })=>{
        return commands.keyboardShortcut("Enter");
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/exit-code.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exitCode",
    ()=>exitCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const exitCode = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exitCode"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-type.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMarkType",
    ()=>getMarkType
]);
function getMarkType(nameOrType, schema) {
    if (typeof nameOrType === "string") {
        if (!schema.marks[nameOrType]) {
            throw Error(`There is no mark type named '${nameOrType}'. Maybe you forgot to add the extension?`);
        }
        return schema.marks[nameOrType];
    }
    return nameOrType;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/extend-mark-range.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendMarkRange",
    ()=>extendMarkRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-type.js [app-client] (ecmascript)");
;
;
;
const extendMarkRange = (typeOrName, attributes = {})=>({ tr, state, dispatch })=>{
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkType"])(typeOrName, state.schema);
        const { doc, selection } = tr;
        const { $from, from, to } = selection;
        if (dispatch) {
            const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkRange"])($from, type, attributes);
            if (range && range.from <= from && range.to >= to) {
                const newSelection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(doc, range.from, range.to);
                tr.setSelection(newSelection);
            }
        }
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/first.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "first",
    ()=>first
]);
const first = (commands)=>(props)=>{
        const items = typeof commands === "function" ? commands(props) : commands;
        for(let i = 0; i < items.length; i += 1){
            if (items[i](props)) {
                return true;
            }
        }
        return false;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-text-selection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTextSelection",
    ()=>isTextSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
;
function isTextSelection(value) {
    return value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"];
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/min-max.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minMax",
    ()=>minMax
]);
function minMax(value = 0, min = 0, max = 0) {
    return Math.min(Math.max(value, min), max);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/resolve-focus-position.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveFocusPosition",
    ()=>resolveFocusPosition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/min-max.js [app-client] (ecmascript)");
;
;
function resolveFocusPosition(doc, position = null) {
    if (!position) {
        return null;
    }
    const selectionAtStart = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"].atStart(doc);
    const selectionAtEnd = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"].atEnd(doc);
    if (position === "start" || position === true) {
        return selectionAtStart;
    }
    if (position === "end") {
        return selectionAtEnd;
    }
    const minPos = selectionAtStart.from;
    const maxPos = selectionAtEnd.to;
    if (position === "all") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(doc, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(0, minPos, maxPos), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(doc.content.size, minPos, maxPos));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(doc, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(position, minPos, maxPos), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(position, minPos, maxPos));
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-ios.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isiOS",
    ()=>isiOS
]);
function isiOS() {
    return [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
    ].includes(navigator.platform) || // iPad on iOS 13 detection
    navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/focus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "focus",
    ()=>focus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$text$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-text-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$resolve$2d$focus$2d$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/resolve-focus-position.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$ios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-ios.js [app-client] (ecmascript)");
;
;
;
const focus = (position = null, options = {})=>({ editor, view, tr, dispatch })=>{
        options = {
            scrollIntoView: true,
            ...options
        };
        const delayedFocus = ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$ios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isiOS"])()) {
                view.dom.focus();
            }
            requestAnimationFrame(()=>{
                if (!editor.isDestroyed) {
                    view.focus();
                    if (options?.scrollIntoView) {
                        editor.commands.scrollIntoView();
                    }
                }
            });
        };
        if (view.hasFocus() && position === null || position === false) {
            return true;
        }
        if (dispatch && position === null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$text$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextSelection"])(editor.state.selection)) {
            delayedFocus();
            return true;
        }
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$resolve$2d$focus$2d$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFocusPosition"])(tr.doc, position) || editor.state.selection;
        const isSameSelection = editor.state.selection.eq(selection);
        if (dispatch) {
            if (!isSameSelection) {
                tr.setSelection(selection);
            }
            if (isSameSelection && tr.storedMarks) {
                tr.setStoredMarks(tr.storedMarks);
            }
            delayedFocus();
        }
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/for-each.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forEach",
    ()=>forEach
]);
const forEach = (items, fn)=>(props)=>{
        return items.every((item, index)=>fn(item, {
                ...props,
                index
            }));
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/insert-content.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "insertContent",
    ()=>insertContent
]);
const insertContent = (value, options)=>({ tr, commands })=>{
        return commands.insertContentAt({
            from: tr.selection.from,
            to: tr.selection.to
        }, value, options);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/element-from-string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "elementFromString",
    ()=>elementFromString
]);
const removeWhitespaces = (node)=>{
    const children = node.childNodes;
    for(let i = children.length - 1; i >= 0; i -= 1){
        const child = children[i];
        if (child.nodeType === 3 && child.nodeValue && /^(\n\s\s|\n)$/.test(child.nodeValue)) {
            node.removeChild(child);
        } else if (child.nodeType === 1) {
            removeWhitespaces(child);
        }
    }
    return node;
};
function elementFromString(value) {
    const wrappedValue = `<body>${value}</body>`;
    const html = new window.DOMParser().parseFromString(wrappedValue, "text/html").body;
    return removeWhitespaces(html);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/create-node-from-content.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNodeFromContent",
    ()=>createNodeFromContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$element$2d$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/element-from-string.js [app-client] (ecmascript)");
;
;
function createNodeFromContent(content, schema, options) {
    options = {
        slice: true,
        parseOptions: {},
        ...options
    };
    const isJSONContent = typeof content === "object" && content !== null;
    const isTextContent = typeof content === "string";
    if (isJSONContent) {
        try {
            const isArrayContent = Array.isArray(content) && content.length > 0;
            if (isArrayContent) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].fromArray(content.map((item)=>schema.nodeFromJSON(item)));
            }
            const node = schema.nodeFromJSON(content);
            if (options.errorOnInvalidContent) {
                node.check();
            }
            return node;
        } catch (error) {
            if (options.errorOnInvalidContent) {
                throw new Error("[tiptap error]: Invalid JSON content", {
                    cause: error
                });
            }
            console.warn("[tiptap warn]: Invalid content.", "Passed value:", content, "Error:", error);
            return createNodeFromContent("", schema, options);
        }
    }
    if (isTextContent) {
        if (options.errorOnInvalidContent) {
            let hasInvalidContent = false;
            let invalidContent = "";
            const contentCheckSchema = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schema"]({
                topNode: schema.spec.topNode,
                marks: schema.spec.marks,
                // Prosemirror's schemas are executed such that: the last to execute, matches last
                // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
                nodes: schema.spec.nodes.append({
                    __tiptap__private__unknown__catch__all__node: {
                        content: "inline*",
                        group: "block",
                        parseDOM: [
                            {
                                tag: "*",
                                getAttrs: (e)=>{
                                    hasInvalidContent = true;
                                    invalidContent = typeof e === "string" ? e : e.outerHTML;
                                    return null;
                                }
                            }
                        ]
                    }
                })
            });
            if (options.slice) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMParser"].fromSchema(contentCheckSchema).parseSlice((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$element$2d$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elementFromString"])(content), options.parseOptions);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMParser"].fromSchema(contentCheckSchema).parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$element$2d$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elementFromString"])(content), options.parseOptions);
            }
            if (options.errorOnInvalidContent && hasInvalidContent) {
                throw new Error("[tiptap error]: Invalid HTML content", {
                    cause: new Error(`Invalid element found: ${invalidContent}`)
                });
            }
        }
        const parser = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMParser"].fromSchema(schema);
        if (options.slice) {
            return parser.parseSlice((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$element$2d$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elementFromString"])(content), options.parseOptions).content;
        }
        return parser.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$element$2d$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elementFromString"])(content), options.parseOptions);
    }
    return createNodeFromContent("", schema, options);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/selection-to-insertion-end.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectionToInsertionEnd",
    ()=>selectionToInsertionEnd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
;
;
function selectionToInsertionEnd(tr, startLen, bias) {
    const last = tr.steps.length - 1;
    if (last < startLen) {
        return;
    }
    const step = tr.steps[last];
    if (!(step instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceStep"] || step instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceAroundStep"])) {
        return;
    }
    const map = tr.mapping.maps[last];
    let end = 0;
    map.forEach((_from, _to, _newFrom, newTo)=>{
        if (end === 0) {
            end = newTo;
        }
    });
    tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"].near(tr.doc.resolve(end), bias));
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/insert-content-at.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "insertContentAt",
    ()=>insertContentAt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$node$2d$from$2d$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/create-node-from-content.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$selection$2d$to$2d$insertion$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/selection-to-insertion-end.js [app-client] (ecmascript)");
;
;
const isFragment = (nodeOrFragment)=>{
    return !("type" in nodeOrFragment);
};
const insertContentAt = (position, value, options)=>({ tr, dispatch, editor })=>{
        if (dispatch) {
            options = {
                parseOptions: {},
                updateSelection: true,
                applyInputRules: false,
                applyPasteRules: false,
                ...options
            };
            let content;
            try {
                content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$node$2d$from$2d$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNodeFromContent"])(value, editor.schema, {
                    parseOptions: {
                        preserveWhitespace: "full",
                        ...options.parseOptions
                    },
                    errorOnInvalidContent: options.errorOnInvalidContent ?? editor.options.enableContentCheck
                });
            } catch (e) {
                editor.emit("contentError", {
                    editor,
                    error: e,
                    disableCollaboration: ()=>{
                        console.error("[tiptap error]: Unable to disable collaboration at this point in time");
                    }
                });
                return false;
            }
            let { from, to } = typeof position === "number" ? {
                from: position,
                to: position
            } : {
                from: position.from,
                to: position.to
            };
            let isOnlyTextContent = true;
            let isOnlyBlockContent = true;
            const nodes = isFragment(content) ? content : [
                content
            ];
            nodes.forEach((node)=>{
                node.check();
                isOnlyTextContent = isOnlyTextContent ? node.isText && node.marks.length === 0 : false;
                isOnlyBlockContent = isOnlyBlockContent ? node.isBlock : false;
            });
            if (from === to && isOnlyBlockContent) {
                const { parent } = tr.doc.resolve(from);
                const isEmptyTextBlock = parent.isTextblock && !parent.type.spec.code && !parent.childCount;
                if (isEmptyTextBlock) {
                    from -= 1;
                    to += 1;
                }
            }
            let newContent;
            if (isOnlyTextContent) {
                if (Array.isArray(value)) {
                    newContent = value.map((v)=>v.text || "").join("");
                } else if (typeof value === "object" && !!value && !!value.text) {
                    newContent = value.text;
                } else {
                    newContent = value;
                }
                tr.insertText(newContent, from, to);
            } else {
                newContent = content;
                tr.replaceWith(from, to, newContent);
            }
            if (options.updateSelection) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$selection$2d$to$2d$insertion$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectionToInsertionEnd"])(tr, tr.steps.length - 1, -1);
            }
            if (options.applyInputRules) {
                tr.setMeta("applyInputRules", {
                    from,
                    text: newContent
                });
            }
            if (options.applyPasteRules) {
                tr.setMeta("applyPasteRules", {
                    from,
                    text: newContent
                });
            }
        }
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/join.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "joinBackward",
    ()=>joinBackward,
    "joinDown",
    ()=>joinDown,
    "joinForward",
    ()=>joinForward,
    "joinUp",
    ()=>joinUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const joinUp = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinUp"])(state, dispatch);
    };
const joinDown = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinDown"])(state, dispatch);
    };
const joinBackward = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinBackward"])(state, dispatch);
    };
const joinForward = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinForward"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/join-item-backward.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "joinItemBackward",
    ()=>joinItemBackward
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
;
const joinItemBackward = ()=>({ state, dispatch, tr })=>{
        try {
            const point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinPoint"])(state.doc, state.selection.$from.pos, -1);
            if (point === null || point === void 0) {
                return false;
            }
            tr.join(point, 2);
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        } catch  {
            return false;
        }
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/join-item-forward.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "joinItemForward",
    ()=>joinItemForward
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
;
const joinItemForward = ()=>({ state, dispatch, tr })=>{
        try {
            const point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinPoint"])(state.doc, state.selection.$from.pos, 1);
            if (point === null || point === void 0) {
                return false;
            }
            tr.join(point, 2);
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        } catch  {
            return false;
        }
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/join-textblock-backward.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "joinTextblockBackward",
    ()=>joinTextblockBackward
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const joinTextblockBackward = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinTextblockBackward"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/join-textblock-forward.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "joinTextblockForward",
    ()=>joinTextblockForward
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const joinTextblockForward = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinTextblockForward"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-mac-os.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMacOS",
    ()=>isMacOS
]);
function isMacOS() {
    return typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/keyboard-shortcut.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "keyboardShortcut",
    ()=>keyboardShortcut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$ios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-ios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$mac$2d$os$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-mac-os.js [app-client] (ecmascript)");
;
;
function normalizeKeyName(name) {
    const parts = name.split(/-(?!$)/);
    let result = parts[parts.length - 1];
    if (result === "Space") {
        result = " ";
    }
    let alt;
    let ctrl;
    let shift;
    let meta;
    for(let i = 0; i < parts.length - 1; i += 1){
        const mod = parts[i];
        if (/^(cmd|meta|m)$/i.test(mod)) {
            meta = true;
        } else if (/^a(lt)?$/i.test(mod)) {
            alt = true;
        } else if (/^(c|ctrl|control)$/i.test(mod)) {
            ctrl = true;
        } else if (/^s(hift)?$/i.test(mod)) {
            shift = true;
        } else if (/^mod$/i.test(mod)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$ios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isiOS"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$mac$2d$os$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacOS"])()) {
                meta = true;
            } else {
                ctrl = true;
            }
        } else {
            throw new Error(`Unrecognized modifier name: ${mod}`);
        }
    }
    if (alt) {
        result = `Alt-${result}`;
    }
    if (ctrl) {
        result = `Ctrl-${result}`;
    }
    if (meta) {
        result = `Meta-${result}`;
    }
    if (shift) {
        result = `Shift-${result}`;
    }
    return result;
}
const keyboardShortcut = (name)=>({ editor, view, tr, dispatch })=>{
        const keys = normalizeKeyName(name).split(/-(?!$)/);
        const key = keys.find((item)=>![
                "Alt",
                "Ctrl",
                "Meta",
                "Shift"
            ].includes(item));
        const event = new KeyboardEvent("keydown", {
            key: key === "Space" ? " " : key,
            altKey: keys.includes("Alt"),
            ctrlKey: keys.includes("Ctrl"),
            metaKey: keys.includes("Meta"),
            shiftKey: keys.includes("Shift"),
            bubbles: true,
            cancelable: true
        });
        const capturedTransaction = editor.captureTransaction(()=>{
            view.someProp("handleKeyDown", (f)=>f(view, event));
        });
        capturedTransaction?.steps.forEach((step)=>{
            const newStep = step.map(tr.mapping);
            if (newStep && dispatch) {
                tr.maybeStep(newStep);
            }
        });
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/lift.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lift",
    ()=>lift
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-node-active.js [app-client] (ecmascript)");
;
;
;
const lift = (typeOrName, attributes = {})=>({ state, dispatch })=>{
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
        const isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeActive"])(state, type, attributes);
        if (!isActive) {
            return false;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/lift-empty-block.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "liftEmptyBlock",
    ()=>liftEmptyBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const liftEmptyBlock = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftEmptyBlock"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/lift-list-item.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "liftListItem",
    ()=>liftListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-schema-list@1.5.1/node_modules/prosemirror-schema-list/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
;
;
const liftListItem = (typeOrName)=>({ state, dispatch })=>{
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftListItem"])(type)(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/newline-in-code.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "newlineInCode",
    ()=>newlineInCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const newlineInCode = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newlineInCode"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-schema-type-name-by-name.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSchemaTypeNameByName",
    ()=>getSchemaTypeNameByName
]);
function getSchemaTypeNameByName(name, schema) {
    if (schema.nodes[name]) {
        return "node";
    }
    if (schema.marks[name]) {
        return "mark";
    }
    return null;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/delete-props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteProps",
    ()=>deleteProps
]);
function deleteProps(obj, propOrProps) {
    const props = typeof propOrProps === "string" ? [
        propOrProps
    ] : propOrProps;
    return Object.keys(obj).reduce((newObj, prop)=>{
        if (!props.includes(prop)) {
            newObj[prop] = obj[prop];
        }
        return newObj;
    }, {});
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/reset-attributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resetAttributes",
    ()=>resetAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$type$2d$name$2d$by$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-schema-type-name-by-name.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$delete$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/delete-props.js [app-client] (ecmascript)");
;
;
;
;
const resetAttributes = (typeOrName, attributes)=>({ tr, state, dispatch })=>{
        let nodeType = null;
        let markType = null;
        const schemaType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$type$2d$name$2d$by$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaTypeNameByName"])(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
        if (!schemaType) {
            return false;
        }
        if (schemaType === "node") {
            nodeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
        }
        if (schemaType === "mark") {
            markType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkType"])(typeOrName, state.schema);
        }
        if (dispatch) {
            tr.selection.ranges.forEach((range)=>{
                state.doc.nodesBetween(range.$from.pos, range.$to.pos, (node, pos)=>{
                    if (nodeType && nodeType === node.type) {
                        tr.setNodeMarkup(pos, void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$delete$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProps"])(node.attrs, attributes));
                    }
                    if (markType && node.marks.length) {
                        node.marks.forEach((mark)=>{
                            if (markType === mark.type) {
                                tr.addMark(pos, pos + node.nodeSize, markType.create((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$delete$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProps"])(mark.attrs, attributes)));
                            }
                        });
                    }
                });
            });
        }
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/scroll-into-view.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollIntoView",
    ()=>scrollIntoView
]);
const scrollIntoView = ()=>({ tr, dispatch })=>{
        if (dispatch) {
            tr.scrollIntoView();
        }
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/select-all.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectAll",
    ()=>selectAll
]);
const selectAll = ()=>({ tr, commands })=>{
        return commands.setTextSelection({
            from: 0,
            to: tr.doc.content.size
        });
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/select-node-backward.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectNodeBackward",
    ()=>selectNodeBackward
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const selectNodeBackward = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectNodeBackward"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/select-node-forward.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectNodeForward",
    ()=>selectNodeForward
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const selectNodeForward = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectNodeForward"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/select-parent-node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectParentNode",
    ()=>selectParentNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const selectParentNode = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectParentNode"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/select-textblock-end.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectTextblockEnd",
    ()=>selectTextblockEnd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const selectTextblockEnd = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectTextblockEnd"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/select-textblock-start.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectTextblockStart",
    ()=>selectTextblockStart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
;
const selectTextblockStart = ()=>({ state, dispatch })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectTextblockStart"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/create-document.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDocument",
    ()=>createDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$node$2d$from$2d$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/create-node-from-content.js [app-client] (ecmascript)");
;
function createDocument(content, schema, parseOptions = {}, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$node$2d$from$2d$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNodeFromContent"])(content, schema, {
        slice: false,
        parseOptions,
        errorOnInvalidContent: options.errorOnInvalidContent
    });
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/set-content.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setContent",
    ()=>setContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/create-document.js [app-client] (ecmascript)");
;
const setContent = (content, emitUpdate = false, parseOptions = {}, options = {})=>({ editor, tr, dispatch, commands })=>{
        const { doc } = tr;
        if (parseOptions.preserveWhitespace !== "full") {
            const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDocument"])(content, editor.schema, parseOptions, {
                errorOnInvalidContent: options.errorOnInvalidContent ?? editor.options.enableContentCheck
            });
            if (dispatch) {
                tr.replaceWith(0, doc.content.size, document).setMeta("preventUpdate", !emitUpdate);
            }
            return true;
        }
        if (dispatch) {
            tr.setMeta("preventUpdate", !emitUpdate);
        }
        return commands.insertContentAt({
            from: 0,
            to: doc.content.size
        }, content, {
            parseOptions,
            errorOnInvalidContent: options.errorOnInvalidContent ?? editor.options.enableContentCheck
        });
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-attributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMarkAttributes",
    ()=>getMarkAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-type.js [app-client] (ecmascript)");
;
function getMarkAttributes(state, typeOrName) {
    const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkType"])(typeOrName, state.schema);
    const { from, to, empty } = state.selection;
    const marks = [];
    if (empty) {
        if (state.storedMarks) {
            marks.push(...state.storedMarks);
        }
        marks.push(...state.selection.$head.marks());
    } else {
        state.doc.nodesBetween(from, to, (node)=>{
            marks.push(...node.marks);
        });
    }
    const mark = marks.find((markItem)=>markItem.type.name === type.name);
    if (!mark) {
        return {};
    }
    return {
        ...mark.attrs
    };
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/set-mark.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setMark",
    ()=>setMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-attributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$text$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-text-selection.js [app-client] (ecmascript)");
;
;
;
function canSetMark(state, tr, newMarkType) {
    const { selection } = tr;
    let cursor = null;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$text$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextSelection"])(selection)) {
        cursor = selection.$cursor;
    }
    if (cursor) {
        const currentMarks = state.storedMarks ?? cursor.marks();
        return !!newMarkType.isInSet(currentMarks) || !currentMarks.some((mark)=>mark.type.excludes(newMarkType));
    }
    const { ranges } = selection;
    return ranges.some(({ $from, $to })=>{
        let someNodeSupportsMark = $from.depth === 0 ? state.doc.inlineContent && state.doc.type.allowsMarkType(newMarkType) : false;
        state.doc.nodesBetween($from.pos, $to.pos, (node, _pos, parent)=>{
            if (someNodeSupportsMark) {
                return false;
            }
            if (node.isInline) {
                const parentAllowsMarkType = !parent || parent.type.allowsMarkType(newMarkType);
                const currentMarksAllowMarkType = !!newMarkType.isInSet(node.marks) || !node.marks.some((otherMark)=>otherMark.type.excludes(newMarkType));
                someNodeSupportsMark = parentAllowsMarkType && currentMarksAllowMarkType;
            }
            return !someNodeSupportsMark;
        });
        return someNodeSupportsMark;
    });
}
const setMark = (typeOrName, attributes = {})=>({ tr, state, dispatch })=>{
        const { selection } = tr;
        const { empty, ranges } = selection;
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkType"])(typeOrName, state.schema);
        if (dispatch) {
            if (empty) {
                const oldAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkAttributes"])(state, type);
                tr.addStoredMark(type.create({
                    ...oldAttributes,
                    ...attributes
                }));
            } else {
                ranges.forEach((range)=>{
                    const from = range.$from.pos;
                    const to = range.$to.pos;
                    state.doc.nodesBetween(from, to, (node, pos)=>{
                        const trimmedFrom = Math.max(pos, from);
                        const trimmedTo = Math.min(pos + node.nodeSize, to);
                        const someHasMark = node.marks.find((mark)=>mark.type === type);
                        if (someHasMark) {
                            node.marks.forEach((mark)=>{
                                if (type === mark.type) {
                                    tr.addMark(trimmedFrom, trimmedTo, type.create({
                                        ...mark.attrs,
                                        ...attributes
                                    }));
                                }
                            });
                        } else {
                            tr.addMark(trimmedFrom, trimmedTo, type.create(attributes));
                        }
                    });
                });
            }
        }
        return canSetMark(state, tr, type);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/set-meta.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setMeta",
    ()=>setMeta
]);
const setMeta = (key, value)=>({ tr })=>{
        tr.setMeta(key, value);
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/set-node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setNode",
    ()=>setNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
;
;
const setNode = (typeOrName, attributes = {})=>({ state, dispatch, chain })=>{
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
        if (!type.isTextblock) {
            console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.');
            return false;
        }
        return chain().command(({ commands })=>{
            const canSetBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBlockType"])(type, attributes)(state);
            if (canSetBlock) {
                return true;
            }
            return commands.clearNodes();
        }).command(({ state: updatedState })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBlockType"])(type, attributes)(updatedState, dispatch);
        }).run();
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/set-node-selection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setNodeSelection",
    ()=>setNodeSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/min-max.js [app-client] (ecmascript)");
;
;
const setNodeSelection = (position)=>({ tr, dispatch })=>{
        if (dispatch) {
            const { doc } = tr;
            const from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(position, 0, doc.content.size);
            const selection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"].create(doc, from);
            tr.setSelection(selection);
        }
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/set-text-selection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setTextSelection",
    ()=>setTextSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/min-max.js [app-client] (ecmascript)");
;
;
const setTextSelection = (position)=>({ tr, dispatch })=>{
        if (dispatch) {
            const { doc } = tr;
            const { from, to } = typeof position === "number" ? {
                from: position,
                to: position
            } : position;
            const minPos = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].atStart(doc).from;
            const maxPos = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].atEnd(doc).to;
            const resolvedFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(from, minPos, maxPos);
            const resolvedEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(to, minPos, maxPos);
            const selection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(doc, resolvedFrom, resolvedEnd);
            tr.setSelection(selection);
        }
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/sink-list-item.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sinkListItem",
    ()=>sinkListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-schema-list@1.5.1/node_modules/prosemirror-schema-list/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
;
;
const sinkListItem = (typeOrName)=>({ state, dispatch })=>{
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sinkListItem"])(type)(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/default-block-at.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultBlockAt",
    ()=>defaultBlockAt
]);
function defaultBlockAt(match) {
    for(let i = 0; i < match.edgeCount; i += 1){
        const { type } = match.edge(i);
        if (type.isTextblock && !type.hasRequiredAttrs()) {
            return type;
        }
    }
    return null;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-splitted-attributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSplittedAttributes",
    ()=>getSplittedAttributes
]);
function getSplittedAttributes(extensionAttributes, typeName, attributes) {
    return Object.fromEntries(Object.entries(attributes).filter(([name])=>{
        const extensionAttribute = extensionAttributes.find((item)=>{
            return item.type === typeName && item.name === name;
        });
        if (!extensionAttribute) {
            return false;
        }
        return extensionAttribute.attribute.keepOnSplit;
    }));
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/split-block.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "splitBlock",
    ()=>splitBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$default$2d$block$2d$at$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/default-block-at.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$splitted$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-splitted-attributes.js [app-client] (ecmascript)");
;
;
;
;
function ensureMarks(state, splittableMarks) {
    const marks = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();
    if (marks) {
        const filteredMarks = marks.filter((mark)=>splittableMarks?.includes(mark.type.name));
        state.tr.ensureMarks(filteredMarks);
    }
}
const splitBlock = ({ keepMarks = true } = {})=>({ tr, state, dispatch, editor })=>{
        const { selection, doc } = tr;
        const { $from, $to } = selection;
        const extensionAttributes = editor.extensionManager.attributes;
        const newAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$splitted$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSplittedAttributes"])(extensionAttributes, $from.node().type.name, $from.node().attrs);
        if (selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"] && selection.node.isBlock) {
            if (!$from.parentOffset || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canSplit"])(doc, $from.pos)) {
                return false;
            }
            if (dispatch) {
                if (keepMarks) {
                    ensureMarks(state, editor.extensionManager.splittableMarks);
                }
                tr.split($from.pos).scrollIntoView();
            }
            return true;
        }
        if (!$from.parent.isBlock) {
            return false;
        }
        const atEnd = $to.parentOffset === $to.parent.content.size;
        const deflt = $from.depth === 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$default$2d$block$2d$at$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultBlockAt"])($from.node(-1).contentMatchAt($from.indexAfter(-1)));
        let types = atEnd && deflt ? [
            {
                type: deflt,
                attrs: newAttributes
            }
        ] : void 0;
        let can = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canSplit"])(tr.doc, tr.mapping.map($from.pos), 1, types);
        if (!types && !can && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canSplit"])(tr.doc, tr.mapping.map($from.pos), 1, deflt ? [
            {
                type: deflt
            }
        ] : void 0)) {
            can = true;
            types = deflt ? [
                {
                    type: deflt,
                    attrs: newAttributes
                }
            ] : void 0;
        }
        if (dispatch) {
            if (can) {
                if (selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"]) {
                    tr.deleteSelection();
                }
                tr.split(tr.mapping.map($from.pos), 1, types);
                if (deflt && !atEnd && !$from.parentOffset && $from.parent.type !== deflt) {
                    const first = tr.mapping.map($from.before());
                    const $first = tr.doc.resolve(first);
                    if ($from.node(-1).canReplaceWith($first.index(), $first.index() + 1, deflt)) {
                        tr.setNodeMarkup(tr.mapping.map($from.before()), deflt);
                    }
                }
            }
            if (keepMarks) {
                ensureMarks(state, editor.extensionManager.splittableMarks);
            }
            tr.scrollIntoView();
        }
        return can;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/split-list-item.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "splitListItem",
    ()=>splitListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$splitted$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-splitted-attributes.js [app-client] (ecmascript)");
;
;
;
;
;
const splitListItem = (typeOrName, overrideAttrs = {})=>({ tr, state, dispatch, editor })=>{
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
        const { $from, $to } = state.selection;
        const node = state.selection.node;
        if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) {
            return false;
        }
        const grandParent = $from.node(-1);
        if (grandParent.type !== type) {
            return false;
        }
        const extensionAttributes = editor.extensionManager.attributes;
        if ($from.parent.content.size === 0 && $from.node(-1).childCount === $from.indexAfter(-1)) {
            if ($from.depth === 2 || $from.node(-3).type !== type || $from.index(-2) !== $from.node(-2).childCount - 1) {
                return false;
            }
            if (dispatch) {
                let wrap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty;
                const depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
                for(let d = $from.depth - depthBefore; d >= $from.depth - 3; d -= 1){
                    wrap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from($from.node(d).copy(wrap));
                }
                const depthAfter = $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
                const newNextTypeAttributes2 = {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$splitted$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSplittedAttributes"])(extensionAttributes, $from.node().type.name, $from.node().attrs),
                    ...overrideAttrs
                };
                const nextType2 = type.contentMatch.defaultType?.createAndFill(newNextTypeAttributes2) || void 0;
                wrap = wrap.append(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(type.createAndFill(null, nextType2) || void 0));
                const start = $from.before($from.depth - (depthBefore - 1));
                tr.replace(start, $from.after(-depthAfter), new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](wrap, 4 - depthBefore, 0));
                let sel = -1;
                tr.doc.nodesBetween(start, tr.doc.content.size, (n, pos)=>{
                    if (sel > -1) {
                        return false;
                    }
                    if (n.isTextblock && n.content.size === 0) {
                        sel = pos + 1;
                    }
                });
                if (sel > -1) {
                    tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].near(tr.doc.resolve(sel)));
                }
                tr.scrollIntoView();
            }
            return true;
        }
        const nextType = $to.pos === $from.end() ? grandParent.contentMatchAt(0).defaultType : null;
        const newTypeAttributes = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$splitted$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSplittedAttributes"])(extensionAttributes, grandParent.type.name, grandParent.attrs),
            ...overrideAttrs
        };
        const newNextTypeAttributes = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$splitted$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSplittedAttributes"])(extensionAttributes, $from.node().type.name, $from.node().attrs),
            ...overrideAttrs
        };
        tr.delete($from.pos, $to.pos);
        const types = nextType ? [
            {
                type,
                attrs: newTypeAttributes
            },
            {
                type: nextType,
                attrs: newNextTypeAttributes
            }
        ] : [
            {
                type,
                attrs: newTypeAttributes
            }
        ];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canSplit"])(tr.doc, $from.pos, 2)) {
            return false;
        }
        if (dispatch) {
            const { selection, storedMarks } = state;
            const { splittableMarks } = editor.extensionManager;
            const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
            tr.split($from.pos, 2, types).scrollIntoView();
            if (!marks || !dispatch) {
                return true;
            }
            const filteredMarks = marks.filter((mark)=>splittableMarks.includes(mark.type.name));
            tr.ensureMarks(filteredMarks);
        }
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/find-parent-node-closest-to-pos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findParentNodeClosestToPos",
    ()=>findParentNodeClosestToPos
]);
function findParentNodeClosestToPos($pos, predicate) {
    for(let i = $pos.depth; i > 0; i -= 1){
        const node = $pos.node(i);
        if (predicate(node)) {
            return {
                pos: i > 0 ? $pos.before(i) : 0,
                start: $pos.start(i),
                depth: i,
                node
            };
        }
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/find-parent-node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findParentNode",
    ()=>findParentNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/find-parent-node-closest-to-pos.js [app-client] (ecmascript)");
;
function findParentNode(predicate) {
    return (selection)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, predicate);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/toggle-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toggleList",
    ()=>toggleList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$find$2d$parent$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/find-parent-node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-list.js [app-client] (ecmascript)");
;
;
;
;
const joinListBackwards = (tr, listType)=>{
    const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$find$2d$parent$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNode"])((node)=>node.type === listType)(tr.selection);
    if (!list) {
        return true;
    }
    const before = tr.doc.resolve(Math.max(0, list.pos - 1)).before(list.depth);
    if (before === void 0) {
        return true;
    }
    const nodeBefore = tr.doc.nodeAt(before);
    const canJoinBackwards = list.node.type === nodeBefore?.type && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canJoin"])(tr.doc, list.pos);
    if (!canJoinBackwards) {
        return true;
    }
    tr.join(list.pos);
    return true;
};
const joinListForwards = (tr, listType)=>{
    const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$find$2d$parent$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNode"])((node)=>node.type === listType)(tr.selection);
    if (!list) {
        return true;
    }
    const after = tr.doc.resolve(list.start).after(list.depth);
    if (after === void 0) {
        return true;
    }
    const nodeAfter = tr.doc.nodeAt(after);
    const canJoinForwards = list.node.type === nodeAfter?.type && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canJoin"])(tr.doc, after);
    if (!canJoinForwards) {
        return true;
    }
    tr.join(after);
    return true;
};
const toggleList = (listTypeOrName, itemTypeOrName, keepMarks, attributes = {})=>({ editor, tr, state, dispatch, chain, commands, can })=>{
        const { extensions, splittableMarks } = editor.extensionManager;
        const listType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(listTypeOrName, state.schema);
        const itemType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(itemTypeOrName, state.schema);
        const { selection, storedMarks } = state;
        const { $from, $to } = selection;
        const range = $from.blockRange($to);
        const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
        if (!range) {
            return false;
        }
        const parentList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$find$2d$parent$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNode"])((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isList"])(node.type.name, extensions))(selection);
        if (range.depth >= 1 && parentList && range.depth - parentList.depth <= 1) {
            if (parentList.node.type === listType) {
                return commands.liftListItem(itemType);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isList"])(parentList.node.type.name, extensions) && listType.validContent(parentList.node.content) && dispatch) {
                return chain().command(()=>{
                    tr.setNodeMarkup(parentList.pos, listType);
                    return true;
                }).command(()=>joinListBackwards(tr, listType)).command(()=>joinListForwards(tr, listType)).run();
            }
        }
        if (!keepMarks || !marks || !dispatch) {
            return chain().command(()=>{
                const canWrapInList = can().wrapInList(listType, attributes);
                if (canWrapInList) {
                    return true;
                }
                return commands.clearNodes();
            }).wrapInList(listType, attributes).command(()=>joinListBackwards(tr, listType)).command(()=>joinListForwards(tr, listType)).run();
        }
        return chain().command(()=>{
            const canWrapInList = can().wrapInList(listType, attributes);
            const filteredMarks = marks.filter((mark)=>splittableMarks.includes(mark.type.name));
            tr.ensureMarks(filteredMarks);
            if (canWrapInList) {
                return true;
            }
            return commands.clearNodes();
        }).wrapInList(listType, attributes).command(()=>joinListBackwards(tr, listType)).command(()=>joinListForwards(tr, listType)).run();
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-mark-active.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMarkActive",
    ()=>isMarkActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/object-includes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-type.js [app-client] (ecmascript)");
;
;
function isMarkActive(state, typeOrName, attributes = {}) {
    const { empty, ranges } = state.selection;
    const type = typeOrName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkType"])(typeOrName, state.schema) : null;
    if (empty) {
        return !!(state.storedMarks || state.selection.$from.marks()).filter((mark)=>{
            if (!type) {
                return true;
            }
            return type.name === mark.type.name;
        }).find((mark)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectIncludes"])(mark.attrs, attributes, {
                strict: false
            }));
    }
    let selectionRange = 0;
    const markRanges = [];
    ranges.forEach(({ $from, $to })=>{
        const from = $from.pos;
        const to = $to.pos;
        state.doc.nodesBetween(from, to, (node, pos)=>{
            if (!node.isText && !node.marks.length) {
                return;
            }
            const relativeFrom = Math.max(from, pos);
            const relativeTo = Math.min(to, pos + node.nodeSize);
            const range2 = relativeTo - relativeFrom;
            selectionRange += range2;
            markRanges.push(...node.marks.map((mark)=>({
                    mark,
                    from: relativeFrom,
                    to: relativeTo
                })));
        });
    });
    if (selectionRange === 0) {
        return false;
    }
    const matchedRange = markRanges.filter((markRange)=>{
        if (!type) {
            return true;
        }
        return type.name === markRange.mark.type.name;
    }).filter((markRange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$object$2d$includes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectIncludes"])(markRange.mark.attrs, attributes, {
            strict: false
        })).reduce((sum, markRange)=>sum + markRange.to - markRange.from, 0);
    const excludedRange = markRanges.filter((markRange)=>{
        if (!type) {
            return true;
        }
        return markRange.mark.type !== type && markRange.mark.type.excludes(type);
    }).reduce((sum, markRange)=>sum + markRange.to - markRange.from, 0);
    const range = matchedRange > 0 ? matchedRange + excludedRange : matchedRange;
    return range >= selectionRange;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/toggle-mark.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toggleMark",
    ()=>toggleMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$mark$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-mark-active.js [app-client] (ecmascript)");
;
;
const toggleMark = (typeOrName, attributes = {}, options = {})=>({ state, commands })=>{
        const { extendEmptyMarkRange = false } = options;
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkType"])(typeOrName, state.schema);
        const isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$mark$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMarkActive"])(state, type, attributes);
        if (isActive) {
            return commands.unsetMark(type, {
                extendEmptyMarkRange
            });
        }
        return commands.setMark(type, attributes);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/toggle-node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toggleNode",
    ()=>toggleNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-node-active.js [app-client] (ecmascript)");
;
;
const toggleNode = (typeOrName, toggleTypeOrName, attributes = {})=>({ state, commands })=>{
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
        const toggleType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(toggleTypeOrName, state.schema);
        const isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeActive"])(state, type, attributes);
        let attributesToCopy;
        if (state.selection.$anchor.sameParent(state.selection.$head)) {
            attributesToCopy = state.selection.$anchor.parent.attrs;
        }
        if (isActive) {
            return commands.setNode(toggleType, attributesToCopy);
        }
        return commands.setNode(type, {
            ...attributesToCopy,
            ...attributes
        });
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/toggle-wrap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toggleWrap",
    ()=>toggleWrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-node-active.js [app-client] (ecmascript)");
;
;
const toggleWrap = (typeOrName, attributes = {})=>({ state, commands })=>{
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
        const isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeActive"])(state, type, attributes);
        if (isActive) {
            return commands.lift(type);
        }
        return commands.wrapIn(type, attributes);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/undo-input-rule.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "undoInputRule",
    ()=>undoInputRule
]);
const undoInputRule = ()=>({ state, dispatch })=>{
        const plugins = state.plugins;
        for(let i = 0; i < plugins.length; i += 1){
            const plugin = plugins[i];
            let undoable;
            if (plugin.spec.isInputRules && (undoable = plugin.getState(state))) {
                if (dispatch) {
                    const tr = state.tr;
                    const toUndo = undoable.transform;
                    for(let j = toUndo.steps.length - 1; j >= 0; j -= 1){
                        tr.step(toUndo.steps[j].invert(toUndo.docs[j]));
                    }
                    if (undoable.text) {
                        const marks = tr.doc.resolve(undoable.from).marks();
                        tr.replaceWith(undoable.from, undoable.to, state.schema.text(undoable.text, marks));
                    } else {
                        tr.delete(undoable.from, undoable.to);
                    }
                }
                return true;
            }
        }
        return false;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/unset-all-marks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unsetAllMarks",
    ()=>unsetAllMarks
]);
const unsetAllMarks = ()=>({ tr, dispatch })=>{
        const { selection } = tr;
        const { empty, ranges } = selection;
        if (empty) {
            return true;
        }
        if (dispatch) {
            ranges.forEach((range)=>{
                tr.removeMark(range.$from.pos, range.$to.pos);
            });
        }
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/unset-mark.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unsetMark",
    ()=>unsetMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-type.js [app-client] (ecmascript)");
;
;
const unsetMark = (typeOrName, options = {})=>({ tr, state, dispatch })=>{
        const { extendEmptyMarkRange = false } = options;
        const { selection } = tr;
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkType"])(typeOrName, state.schema);
        const { $from, empty, ranges } = selection;
        if (!dispatch) {
            return true;
        }
        if (empty && extendEmptyMarkRange) {
            let { from, to } = selection;
            const attrs = $from.marks().find((mark)=>mark.type === type)?.attrs;
            const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkRange"])($from, type, attrs);
            if (range) {
                from = range.from;
                to = range.to;
            }
            tr.removeMark(from, to, type);
        } else {
            ranges.forEach((range)=>{
                tr.removeMark(range.$from.pos, range.$to.pos, type);
            });
        }
        tr.removeStoredMark(type);
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/update-attributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateAttributes",
    ()=>updateAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$type$2d$name$2d$by$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-schema-type-name-by-name.js [app-client] (ecmascript)");
;
;
;
const updateAttributes = (typeOrName, attributes = {})=>({ tr, state, dispatch })=>{
        let nodeType = null;
        let markType = null;
        const schemaType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$type$2d$name$2d$by$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaTypeNameByName"])(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
        if (!schemaType) {
            return false;
        }
        if (schemaType === "node") {
            nodeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
        }
        if (schemaType === "mark") {
            markType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkType"])(typeOrName, state.schema);
        }
        if (dispatch) {
            tr.selection.ranges.forEach((range)=>{
                const from = range.$from.pos;
                const to = range.$to.pos;
                state.doc.nodesBetween(from, to, (node, pos)=>{
                    if (nodeType && nodeType === node.type) {
                        tr.setNodeMarkup(pos, void 0, {
                            ...node.attrs,
                            ...attributes
                        });
                    }
                    if (markType && node.marks.length) {
                        node.marks.forEach((mark)=>{
                            if (markType === mark.type) {
                                const trimmedFrom = Math.max(pos, from);
                                const trimmedTo = Math.min(pos + node.nodeSize, to);
                                tr.addMark(trimmedFrom, trimmedTo, markType.create({
                                    ...mark.attrs,
                                    ...attributes
                                }));
                            }
                        });
                    }
                });
            });
        }
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/wrap-in.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapIn",
    ()=>wrapIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-commands@1.7.2/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
;
;
const wrapIn = (typeOrName, attributes = {})=>({ state, dispatch })=>{
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$2$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapIn"])(type, attributes)(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/wrap-in-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapInList",
    ()=>wrapInList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-schema-list@1.5.1/node_modules/prosemirror-schema-list/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
;
;
const wrapInList = (typeOrName, attributes = {})=>({ state, dispatch })=>{
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$schema$2d$list$40$1$2e$5$2e$1$2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapInList"])(type, attributes)(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blur",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$blur$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blur"],
    "clearContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$clear$2d$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearContent"],
    "clearNodes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$clear$2d$nodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNodes"],
    "command",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["command"],
    "createParagraphNear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$create$2d$paragraph$2d$near$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createParagraphNear"],
    "cut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$cut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cut"],
    "deleteCurrentNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$delete$2d$current$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCurrentNode"],
    "deleteNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$delete$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteNode"],
    "deleteRange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$delete$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteRange"],
    "deleteSelection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$delete$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSelection"],
    "enter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$enter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enter"],
    "exitCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$exit$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exitCode"],
    "extendMarkRange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$extend$2d$mark$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendMarkRange"],
    "first",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$first$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["first"],
    "focus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focus"],
    "forEach",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$for$2d$each$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"],
    "insertContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$insert$2d$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertContent"],
    "insertContentAt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$insert$2d$content$2d$at$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertContentAt"],
    "joinBackward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinBackward"],
    "joinDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinDown"],
    "joinForward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinForward"],
    "joinItemBackward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2d$item$2d$backward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinItemBackward"],
    "joinItemForward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2d$item$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinItemForward"],
    "joinTextblockBackward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2d$textblock$2d$backward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinTextblockBackward"],
    "joinTextblockForward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2d$textblock$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinTextblockForward"],
    "joinUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinUp"],
    "keyboardShortcut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$keyboard$2d$shortcut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyboardShortcut"],
    "lift",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"],
    "liftEmptyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$lift$2d$empty$2d$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftEmptyBlock"],
    "liftListItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$lift$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftListItem"],
    "newlineInCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$newline$2d$in$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newlineInCode"],
    "resetAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$reset$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetAttributes"],
    "scrollIntoView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$scroll$2d$into$2d$view$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollIntoView"],
    "selectAll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$select$2d$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectAll"],
    "selectNodeBackward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$select$2d$node$2d$backward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectNodeBackward"],
    "selectNodeForward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$select$2d$node$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectNodeForward"],
    "selectParentNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$select$2d$parent$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectParentNode"],
    "selectTextblockEnd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$select$2d$textblock$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectTextblockEnd"],
    "selectTextblockStart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$select$2d$textblock$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectTextblockStart"],
    "setContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$set$2d$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setContent"],
    "setMark",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$set$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMark"],
    "setMeta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$set$2d$meta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMeta"],
    "setNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$set$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNode"],
    "setNodeSelection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$set$2d$node$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNodeSelection"],
    "setTextSelection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$set$2d$text$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTextSelection"],
    "sinkListItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$sink$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sinkListItem"],
    "splitBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$split$2d$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitBlock"],
    "splitListItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$split$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitListItem"],
    "toggleList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$toggle$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleList"],
    "toggleMark",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$toggle$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleMark"],
    "toggleNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$toggle$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleNode"],
    "toggleWrap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$toggle$2d$wrap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleWrap"],
    "undoInputRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$undo$2d$input$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["undoInputRule"],
    "unsetAllMarks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$unset$2d$all$2d$marks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsetAllMarks"],
    "unsetMark",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$unset$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsetMark"],
    "updateAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$update$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAttributes"],
    "wrapIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$wrap$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapIn"],
    "wrapInList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$wrap$2d$in$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapInList"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$blur$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/blur.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$clear$2d$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/clear-content.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$clear$2d$nodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/clear-nodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/command.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$create$2d$paragraph$2d$near$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/create-paragraph-near.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$cut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/cut.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$delete$2d$current$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/delete-current-node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$delete$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/delete-node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$delete$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/delete-range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$delete$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/delete-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$enter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/enter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$exit$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/exit-code.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$extend$2d$mark$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/extend-mark-range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$first$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/first.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/focus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$for$2d$each$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/for-each.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$insert$2d$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/insert-content.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$insert$2d$content$2d$at$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/insert-content-at.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/join.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2d$item$2d$backward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/join-item-backward.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2d$item$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/join-item-forward.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2d$textblock$2d$backward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/join-textblock-backward.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$join$2d$textblock$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/join-textblock-forward.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$keyboard$2d$shortcut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/keyboard-shortcut.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/lift.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$lift$2d$empty$2d$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/lift-empty-block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$lift$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/lift-list-item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$newline$2d$in$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/newline-in-code.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$reset$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/reset-attributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$scroll$2d$into$2d$view$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/scroll-into-view.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$select$2d$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/select-all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$select$2d$node$2d$backward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/select-node-backward.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$select$2d$node$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/select-node-forward.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$select$2d$parent$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/select-parent-node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$select$2d$textblock$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/select-textblock-end.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$select$2d$textblock$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/select-textblock-start.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$set$2d$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/set-content.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$set$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/set-mark.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$set$2d$meta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/set-meta.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$set$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/set-node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$set$2d$node$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/set-node-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$set$2d$text$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/set-text-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$sink$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/sink-list-item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$split$2d$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/split-block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$split$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/split-list-item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$toggle$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/toggle-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$toggle$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/toggle-mark.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$toggle$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/toggle-node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$toggle$2d$wrap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/toggle-wrap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$undo$2d$input$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/undo-input-rule.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$unset$2d$all$2d$marks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/unset-all-marks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$unset$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/unset-mark.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$update$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/update-attributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$wrap$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/wrap-in.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$wrap$2d$in$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/wrap-in-list.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/commands.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Commands",
    ()=>Commands
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/commands/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extension.js [app-client] (ecmascript)");
;
;
;
const Commands = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "commands",
    addCommands () {
        return {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$commands$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
        };
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/drop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Drop",
    ()=>Drop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extension.js [app-client] (ecmascript)");
;
;
const Drop = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "drop",
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("tiptapDrop"),
                props: {
                    handleDrop: (_, e, slice, moved)=>{
                        this.editor.emit("drop", {
                            editor: this.editor,
                            event: e,
                            slice,
                            moved
                        });
                    }
                }
            })
        ];
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/editable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Editable",
    ()=>Editable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extension.js [app-client] (ecmascript)");
;
;
const Editable = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "editable",
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("editable"),
                props: {
                    editable: ()=>this.editor.options.editable
                }
            })
        ];
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/focus-events.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusEvents",
    ()=>FocusEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extension.js [app-client] (ecmascript)");
;
;
const FocusEvents = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "focusEvents",
    addProseMirrorPlugins () {
        const { editor } = this;
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("focusEvents"),
                props: {
                    handleDOMEvents: {
                        focus: (view, event)=>{
                            editor.isFocused = true;
                            const transaction = editor.state.tr.setMeta("focus", {
                                event
                            }).setMeta("addToHistory", false);
                            view.dispatch(transaction);
                            return false;
                        },
                        blur: (view, event)=>{
                            editor.isFocused = false;
                            const transaction = editor.state.tr.setMeta("blur", {
                                event
                            }).setMeta("addToHistory", false);
                            view.dispatch(transaction);
                            return false;
                        }
                    }
                }
            })
        ];
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-node-empty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeEmpty",
    ()=>isNodeEmpty
]);
function isNodeEmpty(node, { checkChildren = true, ignoreWhitespace = false } = {}) {
    if (ignoreWhitespace) {
        if (node.type.name === "hardBreak") {
            return true;
        }
        if (node.isText) {
            return /^\s*$/m.test(node.text ?? "");
        }
    }
    if (node.isText) {
        return !node.text;
    }
    if (node.isAtom || node.isLeaf) {
        return false;
    }
    if (node.content.childCount === 0) {
        return true;
    }
    if (checkChildren) {
        let isContentEmpty = true;
        node.content.forEach((childNode)=>{
            if (isContentEmpty === false) {
                return;
            }
            if (!isNodeEmpty(childNode, {
                ignoreWhitespace,
                checkChildren
            })) {
                isContentEmpty = false;
            }
        });
        return isContentEmpty;
    }
    return false;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/keymap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Keymap",
    ()=>Keymap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$command$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/command-manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$chainable$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/create-chainable-state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-node-empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$ios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-ios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$mac$2d$os$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-mac-os.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const Keymap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "keymap",
    addKeyboardShortcuts () {
        const handleBackspace = ()=>this.editor.commands.first(({ commands })=>[
                    ()=>commands.undoInputRule(),
                    // maybe convert first text block node to default node
                    ()=>commands.command(({ tr })=>{
                            const { selection, doc } = tr;
                            const { empty, $anchor } = selection;
                            const { pos, parent } = $anchor;
                            const $parentPos = $anchor.parent.isTextblock && pos > 0 ? tr.doc.resolve(pos - 1) : $anchor;
                            const parentIsIsolating = $parentPos.parent.type.spec.isolating;
                            const parentPos = $anchor.pos - $anchor.parentOffset;
                            const isAtStart = parentIsIsolating && $parentPos.parent.childCount === 1 ? parentPos === $anchor.pos : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"].atStart(doc).from === pos;
                            if (!empty || !parent.type.isTextblock || parent.textContent.length || !isAtStart || isAtStart && $anchor.parent.type.name === "paragraph") {
                                return false;
                            }
                            return commands.clearNodes();
                        }),
                    ()=>commands.deleteSelection(),
                    ()=>commands.joinBackward(),
                    ()=>commands.selectNodeBackward()
                ]);
        const handleDelete = ()=>this.editor.commands.first(({ commands })=>[
                    ()=>commands.deleteSelection(),
                    ()=>commands.deleteCurrentNode(),
                    ()=>commands.joinForward(),
                    ()=>commands.selectNodeForward()
                ]);
        const handleEnter = ()=>this.editor.commands.first(({ commands })=>[
                    ()=>commands.newlineInCode(),
                    ()=>commands.createParagraphNear(),
                    ()=>commands.liftEmptyBlock(),
                    ()=>commands.splitBlock()
                ]);
        const baseKeymap = {
            Enter: handleEnter,
            "Mod-Enter": ()=>this.editor.commands.exitCode(),
            Backspace: handleBackspace,
            "Mod-Backspace": handleBackspace,
            "Shift-Backspace": handleBackspace,
            Delete: handleDelete,
            "Mod-Delete": handleDelete,
            "Mod-a": ()=>this.editor.commands.selectAll()
        };
        const pcKeymap = {
            ...baseKeymap
        };
        const macKeymap = {
            ...baseKeymap,
            "Ctrl-h": handleBackspace,
            "Alt-Backspace": handleBackspace,
            "Ctrl-d": handleDelete,
            "Ctrl-Alt-Backspace": handleDelete,
            "Alt-Delete": handleDelete,
            "Alt-d": handleDelete,
            "Ctrl-a": ()=>this.editor.commands.selectTextblockStart(),
            "Ctrl-e": ()=>this.editor.commands.selectTextblockEnd()
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$ios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isiOS"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$mac$2d$os$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacOS"])()) {
            return macKeymap;
        }
        return pcKeymap;
    },
    addProseMirrorPlugins () {
        return [
            // With this plugin we check if the whole document was selected and deleted.
            // In this case we will additionally call `clearNodes()` to convert e.g. a heading
            // to a paragraph if necessary.
            // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
            // with many other commands.
            new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("clearDocument"),
                appendTransaction: (transactions, oldState, newState)=>{
                    const docChanges = transactions.some((transaction)=>transaction.docChanged) && !oldState.doc.eq(newState.doc);
                    const ignoreTr = transactions.some((transaction)=>transaction.getMeta("preventClearDocument"));
                    if (!docChanges || ignoreTr) {
                        return;
                    }
                    const { empty, from, to } = oldState.selection;
                    const allFrom = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"].atStart(oldState.doc).from;
                    const allEnd = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"].atEnd(oldState.doc).to;
                    const allWasSelected = from === allFrom && to === allEnd;
                    if (empty || !allWasSelected) {
                        return;
                    }
                    const isEmpty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeEmpty"])(newState.doc);
                    if (!isEmpty) {
                        return;
                    }
                    const tr = newState.tr;
                    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$chainable$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChainableState"])({
                        state: newState,
                        transaction: tr
                    });
                    const { commands } = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$command$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandManager"]({
                        editor: this.editor,
                        state
                    });
                    commands.clearNodes();
                    if (!tr.steps.length) {
                        return;
                    }
                    return tr;
                }
            })
        ];
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/paste.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Paste",
    ()=>Paste
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extension.js [app-client] (ecmascript)");
;
;
const Paste = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "paste",
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("tiptapPaste"),
                props: {
                    handlePaste: (_view, e, slice)=>{
                        this.editor.emit("paste", {
                            editor: this.editor,
                            event: e,
                            slice
                        });
                    }
                }
            })
        ];
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/tabindex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabindex",
    ()=>Tabindex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extension.js [app-client] (ecmascript)");
;
;
const Tabindex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "tabindex",
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("tabindex"),
                props: {
                    attributes: ()=>this.editor.isEditable ? {
                            tabindex: "0"
                        } : {}
                }
            })
        ];
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-attributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNodeAttributes",
    ()=>getNodeAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-type.js [app-client] (ecmascript)");
;
function getNodeAttributes(state, typeOrName) {
    const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
    const { from, to } = state.selection;
    const nodes = [];
    state.doc.nodesBetween(from, to, (node2)=>{
        nodes.push(node2);
    });
    const node = nodes.reverse().find((nodeItem)=>nodeItem.type.name === type.name);
    if (!node) {
        return {};
    }
    return {
        ...node.attrs
    };
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-attributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAttributes",
    ()=>getAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-mark-attributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-node-attributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$type$2d$name$2d$by$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-schema-type-name-by-name.js [app-client] (ecmascript)");
;
;
;
function getAttributes(state, typeOrName) {
    const schemaType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$type$2d$name$2d$by$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaTypeNameByName"])(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
    if (schemaType === "node") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$node$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeAttributes"])(state, typeOrName);
    }
    if (schemaType === "mark") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$mark$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkAttributes"])(state, typeOrName);
    }
    return {};
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-html-from-fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHTMLFromFragment",
    ()=>getHTMLFromFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
;
function getHTMLFromFragment(fragment, schema) {
    const documentFragment = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMSerializer"].fromSchema(schema).serializeFragment(fragment);
    const temporaryDocument = document.implementation.createHTMLDocument();
    const container = temporaryDocument.createElement("div");
    container.appendChild(documentFragment);
    return container.innerHTML;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getText",
    ()=>getText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$text$2d$between$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-text-between.js [app-client] (ecmascript)");
;
function getText(node, options) {
    const range = {
        from: 0,
        to: node.content.size
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$text$2d$between$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextBetween"])(node, range, options);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-active.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isActive",
    ()=>isActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$type$2d$name$2d$by$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-schema-type-name-by-name.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$mark$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-mark-active.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-node-active.js [app-client] (ecmascript)");
;
;
;
function isActive(state, name, attributes = {}) {
    if (!name) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeActive"])(state, null, attributes) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$mark$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMarkActive"])(state, null, attributes);
    }
    const schemaType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$schema$2d$type$2d$name$2d$by$2d$name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaTypeNameByName"])(name, state.schema);
    if (schemaType === "node") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeActive"])(state, name, attributes);
    }
    if (schemaType === "mark") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$mark$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMarkActive"])(state, name, attributes);
    }
    return false;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/node-pos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodePos",
    ()=>NodePos
]);
class NodePos {
    constructor(pos, editor, isBlock = false, node = null){
        this.currentNode = null;
        this.actualDepth = null;
        this.isBlock = isBlock;
        this.resolvedPos = pos;
        this.editor = editor;
        this.currentNode = node;
    }
    get name() {
        return this.node.type.name;
    }
    get node() {
        return this.currentNode || this.resolvedPos.node();
    }
    get element() {
        return this.editor.view.domAtPos(this.pos).node;
    }
    get depth() {
        return this.actualDepth ?? this.resolvedPos.depth;
    }
    get pos() {
        return this.resolvedPos.pos;
    }
    get content() {
        return this.node.content;
    }
    set content(content) {
        let from = this.from;
        let to = this.to;
        if (this.isBlock) {
            if (this.content.size === 0) {
                console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
                return;
            }
            from = this.from + 1;
            to = this.to - 1;
        }
        this.editor.commands.insertContentAt({
            from,
            to
        }, content);
    }
    get attributes() {
        return this.node.attrs;
    }
    get textContent() {
        return this.node.textContent;
    }
    get size() {
        return this.node.nodeSize;
    }
    get from() {
        if (this.isBlock) {
            return this.pos;
        }
        return this.resolvedPos.start(this.resolvedPos.depth);
    }
    get range() {
        return {
            from: this.from,
            to: this.to
        };
    }
    get to() {
        if (this.isBlock) {
            return this.pos + this.size;
        }
        return this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
    }
    get parent() {
        if (this.depth === 0) {
            return null;
        }
        const parentPos = this.resolvedPos.start(this.resolvedPos.depth - 1);
        const $pos = this.resolvedPos.doc.resolve(parentPos);
        return new NodePos($pos, this.editor);
    }
    get before() {
        let $pos = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
        if ($pos.depth !== this.depth) {
            $pos = this.resolvedPos.doc.resolve(this.from - 3);
        }
        return new NodePos($pos, this.editor);
    }
    get after() {
        let $pos = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
        if ($pos.depth !== this.depth) {
            $pos = this.resolvedPos.doc.resolve(this.to + 3);
        }
        return new NodePos($pos, this.editor);
    }
    get children() {
        const children = [];
        this.node.content.forEach((node, offset)=>{
            const isBlock = node.isBlock && !node.isTextblock;
            const targetPos = this.pos + offset + 1;
            const $pos = this.resolvedPos.doc.resolve(targetPos);
            if (!isBlock && $pos.depth <= this.depth) {
                return;
            }
            const childNodePos = new NodePos($pos, this.editor, isBlock, isBlock ? node : null);
            if (isBlock) {
                childNodePos.actualDepth = this.depth + 1;
            }
            children.push(new NodePos($pos, this.editor, isBlock, isBlock ? node : null));
        });
        return children;
    }
    get firstChild() {
        return this.children[0] || null;
    }
    get lastChild() {
        const children = this.children;
        return children[children.length - 1] || null;
    }
    closest(selector, attributes = {}) {
        let node = null;
        let currentNode = this.parent;
        while(currentNode && !node){
            if (currentNode.node.type.name === selector) {
                if (Object.keys(attributes).length > 0) {
                    const nodeAttributes = currentNode.node.attrs;
                    const attrKeys = Object.keys(attributes);
                    for(let index = 0; index < attrKeys.length; index += 1){
                        const key = attrKeys[index];
                        if (nodeAttributes[key] !== attributes[key]) {
                            break;
                        }
                    }
                } else {
                    node = currentNode;
                }
            }
            currentNode = currentNode.parent;
        }
        return node;
    }
    querySelector(selector, attributes = {}) {
        return this.querySelectorAll(selector, attributes, true)[0] || null;
    }
    querySelectorAll(selector, attributes = {}, firstItemOnly = false) {
        let nodes = [];
        if (!this.children || this.children.length === 0) {
            return nodes;
        }
        const attrKeys = Object.keys(attributes);
        this.children.forEach((childPos)=>{
            if (firstItemOnly && nodes.length > 0) {
                return;
            }
            if (childPos.node.type.name === selector) {
                const doesAllAttributesMatch = attrKeys.every((key)=>attributes[key] === childPos.node.attrs[key]);
                if (doesAllAttributesMatch) {
                    nodes.push(childPos);
                }
            }
            if (firstItemOnly && nodes.length > 0) {
                return;
            }
            nodes = nodes.concat(childPos.querySelectorAll(selector, attributes, firstItemOnly));
        });
        return nodes;
    }
    setAttribute(attributes) {
        const oldSelection = this.editor.state.selection;
        this.editor.chain().setTextSelection(this.from).updateAttributes(this.node.type.name, attributes).setTextSelection(oldSelection.from).run();
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/style.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "style",
    ()=>style
]);
const style = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/create-style-tag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStyleTag",
    ()=>createStyleTag
]);
function createStyleTag(style, nonce, suffix) {
    const tiptapStyleTag = document.querySelector(`style[data-tiptap-style${suffix ? `-${suffix}` : ""}]`);
    if (tiptapStyleTag !== null) {
        return tiptapStyleTag;
    }
    const styleNode = document.createElement("style");
    if (nonce) {
        styleNode.setAttribute("nonce", nonce);
    }
    styleNode.setAttribute(`data-tiptap-style${suffix ? `-${suffix}` : ""}`, "");
    styleNode.innerHTML = style;
    document.getElementsByTagName("head")[0].appendChild(styleNode);
    return styleNode;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$clipboard$2d$text$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/clipboard-text-serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/commands.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/drop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$editable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/editable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$focus$2d$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/focus-events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$keymap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/keymap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$paste$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/paste.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$tabindex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/tabindex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClipboardTextSerializer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$clipboard$2d$text$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClipboardTextSerializer"],
    "Commands",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Commands"],
    "Drop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drop"],
    "Editable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$editable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editable"],
    "FocusEvents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$focus$2d$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusEvents"],
    "Keymap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$keymap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keymap"],
    "Paste",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$paste$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paste"],
    "Tabindex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$tabindex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabindex"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$clipboard$2d$text$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/clipboard-text-serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/commands.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/drop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$editable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/editable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$focus$2d$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/focus-events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$keymap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/keymap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$paste$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/paste.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$tabindex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/tabindex.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/editor.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Editor",
    ()=>Editor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-view@1.42.2/node_modules/prosemirror-view/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$command$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/command-manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$event$2d$emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/event-emitter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extension-manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$clipboard$2d$text$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/clipboard-text-serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/commands.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/drop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$editable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/editable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$focus$2d$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/focus-events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$keymap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/keymap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$paste$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/paste.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$tabindex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/tabindex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/create-document.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-attributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$html$2d$from$2d$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-html-from-fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$text$2d$serializers$2d$from$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-text-serializers-from-schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-active.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/is-node-empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$resolve$2d$focus$2d$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/resolve-focus-position.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$node$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/node-pos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$create$2d$style$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/create-style-tag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extensions/index.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
class Editor extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$event$2d$emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"] {
    constructor(options = {}){
        super();
        this.isFocused = false;
        /**
     * The editor is considered initialized after the `create` event has been emitted.
     */ this.isInitialized = false;
        this.extensionStorage = {};
        this.options = {
            element: document.createElement("div"),
            content: "",
            injectCSS: true,
            injectNonce: void 0,
            extensions: [],
            autofocus: false,
            editable: true,
            editorProps: {},
            parseOptions: {},
            coreExtensionOptions: {},
            enableInputRules: true,
            enablePasteRules: true,
            enableCoreExtensions: true,
            enableContentCheck: false,
            onBeforeCreate: ()=>null,
            onCreate: ()=>null,
            onUpdate: ()=>null,
            onSelectionUpdate: ()=>null,
            onTransaction: ()=>null,
            onFocus: ()=>null,
            onBlur: ()=>null,
            onDestroy: ()=>null,
            onContentError: ({ error })=>{
                throw error;
            },
            onPaste: ()=>null,
            onDrop: ()=>null
        };
        this.isCapturingTransaction = false;
        this.capturedTransaction = null;
        this.setOptions(options);
        this.createExtensionManager();
        this.createCommandManager();
        this.createSchema();
        this.on("beforeCreate", this.options.onBeforeCreate);
        this.emit("beforeCreate", {
            editor: this
        });
        this.on("contentError", this.options.onContentError);
        this.createView();
        this.injectCSS();
        this.on("create", this.options.onCreate);
        this.on("update", this.options.onUpdate);
        this.on("selectionUpdate", this.options.onSelectionUpdate);
        this.on("transaction", this.options.onTransaction);
        this.on("focus", this.options.onFocus);
        this.on("blur", this.options.onBlur);
        this.on("destroy", this.options.onDestroy);
        this.on("drop", ({ event, slice, moved })=>this.options.onDrop(event, slice, moved));
        this.on("paste", ({ event, slice })=>this.options.onPaste(event, slice));
        window.setTimeout(()=>{
            if (this.isDestroyed) {
                return;
            }
            this.commands.focus(this.options.autofocus);
            this.emit("create", {
                editor: this
            });
            this.isInitialized = true;
        }, 0);
    }
    /**
   * Returns the editor storage.
   */ get storage() {
        return this.extensionStorage;
    }
    /**
   * An object of all registered commands.
   */ get commands() {
        return this.commandManager.commands;
    }
    /**
   * Create a command chain to call multiple commands at once.
   */ chain() {
        return this.commandManager.chain();
    }
    /**
   * Check if a command or a command chain can be executed. Without executing it.
   */ can() {
        return this.commandManager.can();
    }
    /**
   * Inject CSS styles.
   */ injectCSS() {
        if (this.options.injectCSS && document) {
            this.css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$create$2d$style$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyleTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"], this.options.injectNonce);
        }
    }
    /**
   * Update editor options.
   *
   * @param options A list of options
   */ setOptions(options = {}) {
        this.options = {
            ...this.options,
            ...options
        };
        if (!this.view || !this.state || this.isDestroyed) {
            return;
        }
        if (this.options.editorProps) {
            this.view.setProps(this.options.editorProps);
        }
        this.view.updateState(this.state);
    }
    /**
   * Update editable state of the editor.
   */ setEditable(editable, emitUpdate = true) {
        this.setOptions({
            editable
        });
        if (emitUpdate) {
            this.emit("update", {
                editor: this,
                transaction: this.state.tr
            });
        }
    }
    /**
   * Returns whether the editor is editable.
   */ get isEditable() {
        return this.options.editable && this.view && this.view.editable;
    }
    /**
   * Returns the editor state.
   */ get state() {
        return this.view.state;
    }
    /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */ registerPlugin(plugin, handlePlugins) {
        const plugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(handlePlugins) ? handlePlugins(plugin, [
            ...this.state.plugins
        ]) : [
            ...this.state.plugins,
            plugin
        ];
        const state = this.state.reconfigure({
            plugins
        });
        this.view.updateState(state);
        return state;
    }
    /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKey The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */ unregisterPlugin(nameOrPluginKey) {
        if (this.isDestroyed) {
            return void 0;
        }
        const name = typeof nameOrPluginKey === "string" ? `${nameOrPluginKey}$` : nameOrPluginKey.key;
        const state = this.state.reconfigure({
            // @ts-ignore
            plugins: this.state.plugins.filter((plugin)=>!plugin.key.startsWith(name))
        });
        this.view.updateState(state);
        return state;
    }
    /**
   * Creates an extension manager.
   */ createExtensionManager() {
        const coreExtensions = this.options.enableCoreExtensions ? [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$editable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editable"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$clipboard$2d$text$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClipboardTextSerializer"].configure({
                blockSeparator: this.options.coreExtensionOptions?.clipboardTextSerializer?.blockSeparator
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Commands"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$focus$2d$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusEvents"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$keymap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keymap"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$tabindex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabindex"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$drop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drop"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extensions$2f$paste$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paste"]
        ].filter((ext)=>{
            if (typeof this.options.enableCoreExtensions === "object") {
                return this.options.enableCoreExtensions[ext.name] !== false;
            }
            return true;
        }) : [];
        const allExtensions = [
            ...coreExtensions,
            ...this.options.extensions
        ].filter((extension)=>{
            return [
                "extension",
                "node",
                "mark"
            ].includes(extension?.type);
        });
        this.extensionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtensionManager"](allExtensions, this);
    }
    /**
   * Creates an command manager.
   */ createCommandManager() {
        this.commandManager = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$command$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandManager"]({
            editor: this
        });
    }
    /**
   * Creates a ProseMirror schema.
   */ createSchema() {
        this.schema = this.extensionManager.schema;
    }
    /**
   * Creates a ProseMirror view.
   */ createView() {
        let doc;
        try {
            doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDocument"])(this.options.content, this.schema, this.options.parseOptions, {
                errorOnInvalidContent: this.options.enableContentCheck
            });
        } catch (e) {
            if (!(e instanceof Error) || ![
                "[tiptap error]: Invalid JSON content",
                "[tiptap error]: Invalid HTML content"
            ].includes(e.message)) {
                throw e;
            }
            this.emit("contentError", {
                editor: this,
                error: e,
                disableCollaboration: ()=>{
                    this.options.extensions = this.options.extensions.filter((extension)=>extension.name !== "collaboration");
                    this.createExtensionManager();
                }
            });
            doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$create$2d$document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDocument"])(this.options.content, this.schema, this.options.parseOptions, {
                errorOnInvalidContent: false
            });
        }
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$resolve$2d$focus$2d$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFocusPosition"])(doc, this.options.autofocus);
        this.view = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"](this.options.element, {
            ...this.options.editorProps,
            dispatchTransaction: this.dispatchTransaction.bind(this),
            state: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorState"].create({
                doc,
                selection: selection || void 0
            })
        });
        const newState = this.state.reconfigure({
            plugins: this.extensionManager.plugins
        });
        this.view.updateState(newState);
        this.createNodeViews();
        this.prependClass();
        const dom = this.view.dom;
        dom.editor = this;
    }
    /**
   * Creates all node views.
   */ createNodeViews() {
        if (this.view.isDestroyed) {
            return;
        }
        this.view.setProps({
            nodeViews: this.extensionManager.nodeViews
        });
    }
    /**
   * Prepend class name to element.
   */ prependClass() {
        this.view.dom.className = `tiptap ${this.view.dom.className}`;
    }
    captureTransaction(fn) {
        this.isCapturingTransaction = true;
        fn();
        this.isCapturingTransaction = false;
        const tr = this.capturedTransaction;
        this.capturedTransaction = null;
        return tr;
    }
    /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */ dispatchTransaction(transaction) {
        if (this.view.isDestroyed) {
            return;
        }
        if (this.isCapturingTransaction) {
            if (!this.capturedTransaction) {
                this.capturedTransaction = transaction;
                return;
            }
            transaction.steps.forEach((step)=>this.capturedTransaction?.step(step));
            return;
        }
        const state = this.state.apply(transaction);
        const selectionHasChanged = !this.state.selection.eq(state.selection);
        this.emit("beforeTransaction", {
            editor: this,
            transaction,
            nextState: state
        });
        this.view.updateState(state);
        this.emit("transaction", {
            editor: this,
            transaction
        });
        if (selectionHasChanged) {
            this.emit("selectionUpdate", {
                editor: this,
                transaction
            });
        }
        const focus = transaction.getMeta("focus");
        const blur = transaction.getMeta("blur");
        if (focus) {
            this.emit("focus", {
                editor: this,
                event: focus.event,
                transaction
            });
        }
        if (blur) {
            this.emit("blur", {
                editor: this,
                event: blur.event,
                transaction
            });
        }
        if (!transaction.docChanged || transaction.getMeta("preventUpdate")) {
            return;
        }
        this.emit("update", {
            editor: this,
            transaction
        });
    }
    /**
   * Get attributes of the currently selected node or mark.
   */ getAttributes(nameOrType) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttributes"])(this.state, nameOrType);
    }
    isActive(nameOrAttributes, attributesOrUndefined) {
        const name = typeof nameOrAttributes === "string" ? nameOrAttributes : null;
        const attributes = typeof nameOrAttributes === "string" ? attributesOrUndefined : nameOrAttributes;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActive"])(this.state, name, attributes);
    }
    /**
   * Get the document as JSON.
   */ getJSON() {
        return this.state.doc.toJSON();
    }
    /**
   * Get the document as HTML.
   */ getHTML() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$html$2d$from$2d$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHTMLFromFragment"])(this.state.doc.content, this.schema);
    }
    /**
   * Get the document as text.
   */ getText(options) {
        const { blockSeparator = "\n\n", textSerializers = {} } = options || {};
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getText"])(this.state.doc, {
            blockSeparator,
            textSerializers: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$text$2d$serializers$2d$from$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextSerializersFromSchema"])(this.schema),
                ...textSerializers
            }
        });
    }
    /**
   * Check if there is no content.
   */ get isEmpty() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$is$2d$node$2d$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeEmpty"])(this.state.doc);
    }
    /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */ getCharacterCount() {
        console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.');
        return this.state.doc.content.size - 2;
    }
    /**
   * Destroy the editor.
   */ destroy() {
        this.emit("destroy");
        if (this.view) {
            const dom = this.view.dom;
            if (dom && dom.editor) {
                delete dom.editor;
            }
            this.view.destroy();
        }
        this.removeAllListeners();
    }
    /**
   * Check if the editor is already destroyed.
   */ get isDestroyed() {
        return !this.view?.docView;
    }
    $node(selector, attributes) {
        return this.$doc?.querySelector(selector, attributes) || null;
    }
    $nodes(selector, attributes) {
        return this.$doc?.querySelectorAll(selector, attributes) || null;
    }
    $pos(pos) {
        const $pos = this.state.doc.resolve(pos);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$node$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodePos"]($pos, this);
    }
    get $doc() {
        return this.$pos(0);
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/find-children-in-range.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findChildrenInRange",
    ()=>findChildrenInRange
]);
const findChildrenInRange = (node, range, predicate)=>{
    const nodesWithPos = [];
    node.nodesBetween(range.from, range.to, (child, pos)=>{
        if (predicate(child)) {
            nodesWithPos.push({
                node: child,
                pos
            });
        }
    });
    return nodesWithPos;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/input-rules/textblock-type-input-rule.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "textblockTypeInputRule",
    ()=>textblockTypeInputRule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$input$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/input-rule.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/call-or-return.js [app-client] (ecmascript)");
;
;
function textblockTypeInputRule(config) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$input$2d$rule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputRule"]({
        find: config.find,
        handler: ({ state, range, match })=>{
            const $start = state.doc.resolve(range.from);
            const attributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])(config.getAttributes, void 0, match) || {};
            if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), config.type)) {
                return null;
            }
            state.tr.delete(range.from, range.to).setBlockType(range.from, range.from, config.type, attributes);
        }
    });
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Node",
    ()=>Node
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-extension-field.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/call-or-return.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$merge$2d$deep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/merge-deep.js [app-client] (ecmascript)");
;
;
;
class Node {
    constructor(config = {}){
        this.type = "node";
        this.name = "node";
        this.parent = null;
        this.child = null;
        this.config = {
            name: this.name,
            defaultOptions: {}
        };
        this.config = {
            ...this.config,
            ...config
        };
        this.name = this.config.name;
        if (config.defaultOptions && Object.keys(config.defaultOptions).length > 0) {
            console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
        }
        this.options = this.config.defaultOptions;
        if (this.config.addOptions) {
            this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(this, "addOptions", {
                name: this.name
            }));
        }
        this.storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(this, "addStorage", {
            name: this.name,
            options: this.options
        })) || {};
    }
    static create(config = {}) {
        return new Node(config);
    }
    configure(options = {}) {
        const extension = this.extend({
            ...this.config,
            addOptions: ()=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$merge$2d$deep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDeep"])(this.options, options);
            }
        });
        extension.name = this.name;
        extension.parent = this.parent;
        return extension;
    }
    extend(extendedConfig = {}) {
        const extension = new Node(extendedConfig);
        extension.parent = this;
        this.child = extension;
        extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
        if (extendedConfig.defaultOptions && Object.keys(extendedConfig.defaultOptions).length > 0) {
            console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
        }
        extension.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addOptions", {
            name: extension.name
        }));
        extension.storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "addStorage", {
            name: extension.name,
            options: extension.options
        }));
        return extension;
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/react/use-react-node-view.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactNodeViewContext",
    ()=>ReactNodeViewContext,
    "useReactNodeView",
    ()=>useReactNodeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ReactNodeViewContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    onDragStart: void 0
});
const useReactNodeView = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ReactNodeViewContext);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/react/node-view-content.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeViewContent",
    ()=>NodeViewContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$react$2f$use$2d$react$2d$node$2d$view$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/react/use-react-node-view.js [app-client] (ecmascript)");
;
;
const NodeViewContent = (props)=>{
    const Tag = props.as || "div";
    const { nodeViewContentRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$react$2f$use$2d$react$2d$node$2d$view$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReactNodeView"])();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Tag, {
        ...props,
        ref: nodeViewContentRef,
        "data-node-view-content": "",
        style: {
            whiteSpace: "pre-wrap",
            ...props.style
        }
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/is-ios.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isiOS",
    ()=>isiOS
]);
const isiOS = ()=>{
    return [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
    ].includes(navigator.platform) || // iPad on iOS 13 detection
    navigator.userAgent.includes("Mac") && "ontouchend" in document;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/react/react-renderer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactRenderer",
    ()=>ReactRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
;
const isClassComponent = (Component)=>{
    return !!(typeof Component === "function" && Component.prototype && Component.prototype.isReactComponent);
};
const isForwardRefComponent = (Component)=>{
    return !!(typeof Component === "object" && Component?.$$typeof?.toString() === "Symbol(react.forward_ref)");
};
class ReactRenderer {
    /**
   * Immediately creates element and renders the provided React component.
   */ constructor(component, { editor, props = {}, as = "div", className = "" }){
        this.ref = null;
        this.id = Math.floor(Math.random() * 4294967295).toString();
        this.component = component;
        this.editor = editor;
        this.props = props;
        this.element = document.createElement(as);
        this.element.classList.add("react-renderer");
        if (className) {
            this.element.classList.add(...className.split(" "));
        }
        if (this.editor.isInitialized) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
                this.render();
            });
        } else {
            this.render();
        }
    }
    /**
   * Render the React component.
   */ render() {
        const Component = this.component;
        const props = this.props;
        const editor = this.editor;
        if (isClassComponent(Component) || isForwardRefComponent(Component)) {
            props.ref = (ref)=>{
                this.ref = ref;
            };
        }
        this.reactElement = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, props);
        editor?.contentComponent?.setRenderer(this.id, this);
    }
    /**
   * Re-renders the React component with new props.
   */ updateProps(props = {}) {
        this.props = {
            ...this.props,
            ...props
        };
        this.render();
    }
    /**
   * Destroy the React component.
   */ destroy() {
        const editor = this.editor;
        editor?.contentComponent?.removeRenderer(this.id);
    }
    /**
   * Update the attributes of the element that holds the React component.
   */ updateAttributes(attributes) {
        Object.keys(attributes).forEach((key)=>{
            this.element.setAttribute(key, attributes[key]);
        });
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-android.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAndroid",
    ()=>isAndroid
]);
function isAndroid() {
    return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/node-view.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeView",
    ()=>NodeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$android$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-android.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$ios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/is-ios.js [app-client] (ecmascript)");
;
;
;
class NodeView {
    constructor(component, props, options){
        this.isDragging = false;
        this.component = component;
        this.editor = props.editor;
        this.options = {
            stopEvent: null,
            ignoreMutation: null,
            ...options
        };
        this.extension = props.extension;
        this.node = props.node;
        this.decorations = props.decorations;
        this.innerDecorations = props.innerDecorations;
        this.view = props.view;
        this.HTMLAttributes = props.HTMLAttributes;
        this.getPos = props.getPos;
        this.mount();
    }
    mount() {
        return;
    }
    get dom() {
        return this.editor.view.dom;
    }
    get contentDOM() {
        return null;
    }
    onDragStart(event) {
        const { view } = this.editor;
        const target = event.target;
        const dragHandle = target.nodeType === 3 ? target.parentElement?.closest("[data-drag-handle]") : target.closest("[data-drag-handle]");
        if (!this.dom || this.contentDOM?.contains(target) || !dragHandle) {
            return;
        }
        let x = 0;
        let y = 0;
        if (this.dom !== dragHandle) {
            const domBox = this.dom.getBoundingClientRect();
            const handleBox = dragHandle.getBoundingClientRect();
            const offsetX = event.offsetX ?? event.nativeEvent?.offsetX;
            const offsetY = event.offsetY ?? event.nativeEvent?.offsetY;
            x = handleBox.x - domBox.x + offsetX;
            y = handleBox.y - domBox.y + offsetY;
        }
        event.dataTransfer?.setDragImage(this.dom, x, y);
        const pos = this.getPos();
        if (typeof pos !== "number") {
            return;
        }
        const selection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"].create(view.state.doc, pos);
        const transaction = view.state.tr.setSelection(selection);
        view.dispatch(transaction);
    }
    stopEvent(event) {
        if (!this.dom) {
            return false;
        }
        if (typeof this.options.stopEvent === "function") {
            return this.options.stopEvent({
                event
            });
        }
        const target = event.target;
        const isInElement = this.dom.contains(target) && !this.contentDOM?.contains(target);
        if (!isInElement) {
            return false;
        }
        const isDragEvent = event.type.startsWith("drag");
        const isDropEvent = event.type === "drop";
        const isInput = [
            "INPUT",
            "BUTTON",
            "SELECT",
            "TEXTAREA"
        ].includes(target.tagName) || target.isContentEditable;
        if (isInput && !isDropEvent && !isDragEvent) {
            return true;
        }
        const { isEditable } = this.editor;
        const { isDragging } = this;
        const isDraggable = !!this.node.type.spec.draggable;
        const isSelectable = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"].isSelectable(this.node);
        const isCopyEvent = event.type === "copy";
        const isPasteEvent = event.type === "paste";
        const isCutEvent = event.type === "cut";
        const isClickEvent = event.type === "mousedown";
        if (!isDraggable && isSelectable && isDragEvent) {
            event.preventDefault();
        }
        if (isDraggable && isDragEvent && !isDragging) {
            event.preventDefault();
            return false;
        }
        if (isDraggable && isEditable && !isDragging && isClickEvent) {
            const dragHandle = target.closest("[data-drag-handle]");
            const isValidDragHandle = dragHandle && (this.dom === dragHandle || this.dom.contains(dragHandle));
            if (isValidDragHandle) {
                this.isDragging = true;
                document.addEventListener("dragend", ()=>{
                    this.isDragging = false;
                }, {
                    once: true
                });
                document.addEventListener("drop", ()=>{
                    this.isDragging = false;
                }, {
                    once: true
                });
                document.addEventListener("mouseup", ()=>{
                    this.isDragging = false;
                }, {
                    once: true
                });
            }
        }
        if (isDragging || isDropEvent || isCopyEvent || isPasteEvent || isCutEvent || isClickEvent && isSelectable) {
            return false;
        }
        return true;
    }
    /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */ ignoreMutation(mutation) {
        if (!this.dom || !this.contentDOM) {
            return true;
        }
        if (typeof this.options.ignoreMutation === "function") {
            return this.options.ignoreMutation({
                mutation
            });
        }
        if (this.node.isLeaf || this.node.isAtom) {
            return true;
        }
        if (mutation.type === "selection") {
            return false;
        }
        if (this.dom.contains(mutation.target) && mutation.type === "childList" && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$ios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isiOS"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$is$2d$android$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAndroid"])()) && this.editor.isFocused) {
            const changedNodes = [
                ...Array.from(mutation.addedNodes),
                ...Array.from(mutation.removedNodes)
            ];
            if (changedNodes.every((node)=>node.isContentEditable)) {
                return false;
            }
        }
        if (this.contentDOM === mutation.target && mutation.type === "attributes") {
            return true;
        }
        if (this.contentDOM.contains(mutation.target)) {
            return false;
        }
        return true;
    }
    /**
   * Update the attributes of the prosemirror node.
   */ updateAttributes(attributes) {
        this.editor.commands.command(({ tr })=>{
            const pos = this.getPos();
            if (typeof pos !== "number") {
                return false;
            }
            tr.setNodeMarkup(pos, void 0, {
                ...this.node.attrs,
                ...attributes
            });
            return true;
        });
    }
    /**
   * Delete the node.
   */ deleteNode() {
        const from = this.getPos();
        if (typeof from !== "number") {
            return;
        }
        const to = from + this.node.nodeSize;
        this.editor.commands.deleteRange({
            from,
            to
        });
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/react/editor-content.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorContent",
    ()=>EditorContent,
    "PureEditorContent",
    ()=>PureEditorContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.4/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)");
;
;
;
const mergeRefs = (...refs)=>{
    return (node)=>{
        refs.forEach((ref)=>{
            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                ref.current = node;
            }
        });
    };
};
const Portals = ({ contentComponent })=>{
    const renderers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(contentComponent.subscribe, contentComponent.getSnapshot, contentComponent.getServerSnapshot);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, Object.values(renderers));
};
const getInstance = ()=>{
    const subscribers = /* @__PURE__ */ new Set();
    let renderers = {};
    return {
        /**
     * Subscribe to the editor instance's changes.
     */ subscribe (callback) {
            subscribers.add(callback);
            return ()=>{
                subscribers.delete(callback);
            };
        },
        getSnapshot () {
            return renderers;
        },
        getServerSnapshot () {
            return renderers;
        },
        /**
     * Adds a new NodeView Renderer to the editor.
     */ setRenderer (id, renderer) {
            renderers = {
                ...renderers,
                [id]: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(renderer.reactElement, renderer.element, id)
            };
            subscribers.forEach((subscriber)=>subscriber());
        },
        /**
     * Removes a NodeView Renderer from the editor.
     */ removeRenderer (id) {
            const nextRenderers = {
                ...renderers
            };
            delete nextRenderers[id];
            renderers = nextRenderers;
            subscribers.forEach((subscriber)=>subscriber());
        }
    };
};
class PureEditorContent extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(props){
        super(props);
        this.editorContentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef();
        this.initialized = false;
        this.state = {
            hasContentComponentInitialized: Boolean(props.editor?.contentComponent)
        };
    }
    componentDidMount() {
        this.init();
    }
    componentDidUpdate() {
        this.init();
    }
    init() {
        const editor = this.props.editor;
        if (!editor || editor.isDestroyed || !editor.options.element) {
            return;
        }
        const element = this.editorContentRef.current;
        if (!element) {
            return;
        }
        if (editor.contentComponent) {
            if (this.props.preserveDomOnUnmount && editor.options.element !== element && editor.options.element.firstChild) {
                element.append(...editor.options.element.childNodes);
                editor.setOptions({
                    element
                });
            }
            return;
        }
        element.append(...editor.options.element.childNodes);
        editor.setOptions({
            element
        });
        editor.contentComponent = getInstance();
        if (!this.state.hasContentComponentInitialized) {
            this.unsubscribeToContentComponent = editor.contentComponent.subscribe(()=>{
                this.setState((prevState)=>{
                    if (!prevState.hasContentComponentInitialized) {
                        return {
                            hasContentComponentInitialized: true
                        };
                    }
                    return prevState;
                });
                if (this.unsubscribeToContentComponent) {
                    this.unsubscribeToContentComponent();
                }
            });
        }
        editor.createNodeViews();
        this.initialized = true;
    }
    componentWillUnmount() {
        const editor = this.props.editor;
        if (!editor) {
            return;
        }
        const el = editor.options.element;
        if (this.props.preserveDomOnUnmount && el.isConnected) {
            return;
        }
        this.initialized = false;
        if (!editor.isDestroyed) {
            editor.view.setProps({
                nodeViews: {}
            });
        }
        if (this.unsubscribeToContentComponent) {
            this.unsubscribeToContentComponent();
        }
        editor.contentComponent = null;
        if (!el.firstChild) {
            return;
        }
        const holder = document.createElement("div");
        holder.append(...el.childNodes);
        editor.setOptions({
            element: holder
        });
    }
    render() {
        const { editor, innerRef, preserveDomOnUnmount, ...rest } = this.props;
        const editorCast = editor;
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: mergeRefs(innerRef, this.editorContentRef),
            ...rest
        }), editorCast?.contentComponent && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Portals, {
            contentComponent: editorCast.contentComponent
        }));
    }
}
const EditorContentWithKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "EditorContentWithKey.useMemo[key]": ()=>{
            return Math.floor(Math.random() * 4294967295).toString();
        }
    }["EditorContentWithKey.useMemo[key]"], [
        props.editor
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PureEditorContent, {
        key,
        innerRef: ref,
        ...props
    });
});
EditorContentWithKey.displayName = "EditorContentWithKey";
const EditorContent = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(EditorContentWithKey);
;
}),
]);

//# sourceMappingURL=0rv~_%40wix_ricos_dist_es_tiptap_0yoe_18._.js.map