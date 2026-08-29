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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/is-mac-os.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMacOS",
    ()=>isMacOS
]);
const isMacOS = ()=>{
    return typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
};
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/combine-transaction-steps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combineTransactionSteps",
    ()=>combineTransactionSteps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
;
function combineTransactionSteps(oldDoc, transactions) {
    const transform = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"](oldDoc);
    transactions.forEach((transaction)=>{
        transaction.steps.forEach((step)=>{
            transform.step(step);
        });
    });
    return transform;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/remove-duplicates.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeDuplicates",
    ()=>removeDuplicates
]);
function removeDuplicates(array, by = JSON.stringify) {
    const seen = {};
    return array.filter((item)=>{
        const key = by(item);
        return Object.prototype.hasOwnProperty.call(seen, key) ? false : seen[key] = true;
    });
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/get-changed-ranges.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChangedRanges",
    ()=>getChangedRanges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$remove$2d$duplicates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/remove-duplicates.js [app-client] (ecmascript)");
;
function simplifyChangedRanges(changes) {
    const uniqueChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$remove$2d$duplicates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeDuplicates"])(changes);
    return uniqueChanges.length === 1 ? uniqueChanges : uniqueChanges.filter((change, index)=>{
        const rest = uniqueChanges.filter((_, i)=>i !== index);
        return !rest.some((otherChange)=>{
            return change.oldRange.from >= otherChange.oldRange.from && change.oldRange.to <= otherChange.oldRange.to && change.newRange.from >= otherChange.newRange.from && change.newRange.to <= otherChange.newRange.to;
        });
    });
}
function getChangedRanges(transform) {
    const { mapping, steps } = transform;
    const changes = [];
    mapping.maps.forEach((stepMap, index)=>{
        const ranges = [];
        if (!stepMap.ranges.length) {
            const { from, to } = steps[index];
            if (from === void 0 || to === void 0) {
                return;
            }
            ranges.push({
                from,
                to
            });
        } else {
            stepMap.forEach((from, to)=>{
                ranges.push({
                    from,
                    to
                });
            });
        }
        ranges.forEach(({ from, to })=>{
            const newStart = mapping.slice(index).map(from, -1);
            const newEnd = mapping.slice(index).map(to);
            const oldStart = mapping.invert().map(newStart, -1);
            const oldEnd = mapping.invert().map(newEnd);
            changes.push({
                oldRange: {
                    from: oldStart,
                    to: oldEnd
                },
                newRange: {
                    from: newStart,
                    to: newEnd
                }
            });
        });
    });
    return simplifyChangedRanges(changes);
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/pos-to-dom-rect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "posToDOMRect",
    ()=>posToDOMRect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/min-max.js [app-client] (ecmascript)");
;
function posToDOMRect(view, from, to) {
    const minPos = 0;
    const maxPos = view.state.doc.content.size;
    const resolvedFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(from, minPos, maxPos);
    const resolvedEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(to, minPos, maxPos);
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/extension-collaboration/collaboration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Collaboration",
    ()=>Collaboration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$y$2d$prosemirror$40$1$2e$3$2e$7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$undo$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/y-prosemirror@1.3.7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159/node_modules/y-prosemirror/src/plugins/undo-plugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$y$2d$prosemirror$40$1$2e$3$2e$7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$sync$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/y-prosemirror@1.3.7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159/node_modules/y-prosemirror/src/plugins/sync-plugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$y$2d$prosemirror$40$1$2e$3$2e$7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/y-prosemirror@1.3.7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159/node_modules/y-prosemirror/src/plugins/keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$y$2d$prosemirror$40$1$2e$3$2e$7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/y-prosemirror@1.3.7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159/node_modules/y-prosemirror/src/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
;
;
;
const Collaboration = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "collaboration",
    priority: 1e3,
    addOptions () {
        return {
            document: null,
            field: "default",
            fragment: null
        };
    },
    addStorage () {
        return {
            isDisabled: false
        };
    },
    onCreate () {
        if (this.editor.extensionManager.extensions.find((extension)=>extension.name === "history")) {
            console.warn('[tiptap warn]: "./" comes with its own history support and is not compatible with "@tiptap/extension-history".');
        }
    },
    addCommands () {
        return {
            undo: ()=>({ tr, state, dispatch })=>{
                    tr.setMeta("preventDispatch", true);
                    const undoManager = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$y$2d$prosemirror$40$1$2e$3$2e$7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yUndoPluginKey"].getState(state).undoManager;
                    if (undoManager.undoStack.length === 0) {
                        return false;
                    }
                    if (!dispatch) {
                        return true;
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$y$2d$prosemirror$40$1$2e$3$2e$7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$undo$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["undo"])(state);
                },
            redo: ()=>({ tr, state, dispatch })=>{
                    tr.setMeta("preventDispatch", true);
                    const undoManager = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$y$2d$prosemirror$40$1$2e$3$2e$7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yUndoPluginKey"].getState(state).undoManager;
                    if (undoManager.redoStack.length === 0) {
                        return false;
                    }
                    if (!dispatch) {
                        return true;
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$y$2d$prosemirror$40$1$2e$3$2e$7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$undo$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redo"])(state);
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-z": ()=>this.editor.commands.undo(),
            "Mod-y": ()=>this.editor.commands.redo(),
            "Shift-Mod-z": ()=>this.editor.commands.redo()
        };
    },
    addProseMirrorPlugins () {
        const fragment = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field);
        const yUndoPluginInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$y$2d$prosemirror$40$1$2e$3$2e$7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$undo$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yUndoPlugin"])(this.options.yUndoOptions);
        const originalUndoPluginView = yUndoPluginInstance.spec.view;
        yUndoPluginInstance.spec.view = (view)=>{
            const { undoManager } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$y$2d$prosemirror$40$1$2e$3$2e$7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yUndoPluginKey"].getState(view.state);
            if (undoManager.restore) {
                undoManager.restore();
                undoManager.restore = ()=>{};
            }
            const viewRet = originalUndoPluginView ? originalUndoPluginView(view) : void 0;
            return {
                destroy: ()=>{
                    const hasUndoManSelf = undoManager.trackedOrigins.has(undoManager);
                    const observers = undoManager._observers;
                    undoManager.restore = ()=>{
                        if (hasUndoManSelf) {
                            undoManager.trackedOrigins.add(undoManager);
                        }
                        undoManager.doc.on("afterTransaction", undoManager.afterTransactionHandler);
                        undoManager._observers = observers;
                    };
                    if (viewRet?.destroy) {
                        viewRet.destroy();
                    }
                }
            };
        };
        const ySyncPluginOptions = {
            ...this.options.ySyncOptions,
            onFirstRender: this.options.onFirstRender
        };
        const ySyncPluginInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$y$2d$prosemirror$40$1$2e$3$2e$7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$plugins$2f$sync$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ySyncPlugin"])(fragment, ySyncPluginOptions);
        if (this.editor.options.enableContentCheck) {
            fragment.doc?.on("beforeTransaction", ()=>{
                try {
                    const jsonContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$y$2d$prosemirror$40$1$2e$3$2e$7_prosemi_e74a5ace6441fb3e63df78b0bb4e8159$2f$node_modules$2f$y$2d$prosemirror$2f$src$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yXmlFragmentToProsemirrorJSON"])(fragment);
                    if (jsonContent.content.length === 0) {
                        return;
                    }
                    this.editor.schema.nodeFromJSON(jsonContent).check();
                } catch (error) {
                    this.editor.emit("contentError", {
                        error,
                        editor: this.editor,
                        disableCollaboration: ()=>{
                            fragment.doc?.destroy();
                            this.storage.isDisabled = true;
                        }
                    });
                    return false;
                }
            });
        }
        return [
            ySyncPluginInstance,
            yUndoPluginInstance,
            // Only add the filterInvalidContent plugin if content checking is enabled
            this.editor.options.enableContentCheck && new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("filterInvalidContent"),
                filterTransaction: ()=>{
                    if (this.storage.isDisabled) {
                        fragment.doc?.destroy();
                        return true;
                    }
                    return true;
                }
            })
        ].filter(Boolean);
    }
});
;
}),
]);

//# sourceMappingURL=0rv~_%40wix_ricos_dist_es_tiptap_0rp1~vg._.js.map