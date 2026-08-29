(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-error-boundary@5.0.0_react@19.2.4/node_modules/react-error-boundary/dist/react-error-boundary.development.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary,
    "ErrorBoundaryContext",
    ()=>ErrorBoundaryContext,
    "useErrorBoundary",
    ()=>useErrorBoundary,
    "withErrorBoundary",
    ()=>withErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const ErrorBoundaryContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const initialState = {
    didCatch: false,
    error: null
};
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
        this.state = initialState;
    }
    static getDerivedStateFromError(error) {
        return {
            didCatch: true,
            error
        };
    }
    resetErrorBoundary() {
        const { error } = this.state;
        if (error !== null) {
            var _this$props$onReset, _this$props;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            (_this$props$onReset = (_this$props = this.props).onReset) === null || _this$props$onReset === void 0 ? void 0 : _this$props$onReset.call(_this$props, {
                args,
                reason: "imperative-api"
            });
            this.setState(initialState);
        }
    }
    componentDidCatch(error, info) {
        var _this$props$onError, _this$props2;
        (_this$props$onError = (_this$props2 = this.props).onError) === null || _this$props$onError === void 0 ? void 0 : _this$props$onError.call(_this$props2, error, info);
    }
    componentDidUpdate(prevProps, prevState) {
        const { didCatch } = this.state;
        const { resetKeys } = this.props;
        // There's an edge case where if the thing that triggered the error happens to *also* be in the resetKeys array,
        // we'd end up resetting the error boundary immediately.
        // This would likely trigger a second error to be thrown.
        // So we make sure that we don't check the resetKeys on the first call of cDU after the error is set.
        if (didCatch && prevState.error !== null && hasArrayChanged(prevProps.resetKeys, resetKeys)) {
            var _this$props$onReset2, _this$props3;
            (_this$props$onReset2 = (_this$props3 = this.props).onReset) === null || _this$props$onReset2 === void 0 ? void 0 : _this$props$onReset2.call(_this$props3, {
                next: resetKeys,
                prev: prevProps.resetKeys,
                reason: "keys"
            });
            this.setState(initialState);
        }
    }
    render() {
        const { children, fallbackRender, FallbackComponent, fallback } = this.props;
        const { didCatch, error } = this.state;
        let childToRender = children;
        if (didCatch) {
            const props = {
                error,
                resetErrorBoundary: this.resetErrorBoundary
            };
            if (typeof fallbackRender === "function") {
                childToRender = fallbackRender(props);
            } else if (FallbackComponent) {
                childToRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(FallbackComponent, props);
            } else if (fallback !== undefined) {
                childToRender = fallback;
            } else {
                {
                    console.error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
                }
                throw error;
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(ErrorBoundaryContext.Provider, {
            value: {
                didCatch,
                error,
                resetErrorBoundary: this.resetErrorBoundary
            }
        }, childToRender);
    }
}
function hasArrayChanged() {
    let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return a.length !== b.length || a.some((item, index)=>!Object.is(item, b[index]));
}
function assertErrorBoundaryContext(value) {
    if (value == null || typeof value.didCatch !== "boolean" || typeof value.resetErrorBoundary !== "function") {
        throw new Error("ErrorBoundaryContext not found");
    }
}
function useErrorBoundary() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ErrorBoundaryContext);
    assertErrorBoundaryContext(context);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        error: null,
        hasError: false
    });
    const memoized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useErrorBoundary.useMemo[memoized]": ()=>({
                resetBoundary: ({
                    "useErrorBoundary.useMemo[memoized]": ()=>{
                        context.resetErrorBoundary();
                        setState({
                            error: null,
                            hasError: false
                        });
                    }
                })["useErrorBoundary.useMemo[memoized]"],
                showBoundary: ({
                    "useErrorBoundary.useMemo[memoized]": (error)=>setState({
                            error,
                            hasError: true
                        })
                })["useErrorBoundary.useMemo[memoized]"]
            })
    }["useErrorBoundary.useMemo[memoized]"], [
        context.resetErrorBoundary
    ]);
    if (state.hasError) {
        throw state.error;
    }
    return memoized;
}
function withErrorBoundary(component, errorBoundaryProps) {
    const Wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(ErrorBoundary, errorBoundaryProps, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(component, {
            ...props,
            ref
        })));
    // Format for display in DevTools
    const name = component.displayName || component.name || "Unknown";
    Wrapped.displayName = "withErrorBoundary(".concat(name, ")");
    return Wrapped;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/orderedmap@2.1.1/node_modules/orderedmap/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// ::- Persistent data structure representing an ordered mapping from
// strings to values, with some convenient update methods.
function OrderedMap(content) {
    this.content = content;
}
OrderedMap.prototype = {
    constructor: OrderedMap,
    find: function(key) {
        for(var i = 0; i < this.content.length; i += 2)if (this.content[i] === key) return i;
        return -1;
    },
    // :: (string) → ?any
    // Retrieve the value stored under `key`, or return undefined when
    // no such key exists.
    get: function(key) {
        var found = this.find(key);
        return found == -1 ? undefined : this.content[found + 1];
    },
    // :: (string, any, ?string) → OrderedMap
    // Create a new map by replacing the value of `key` with a new
    // value, or adding a binding to the end of the map. If `newKey` is
    // given, the key of the binding will be replaced with that key.
    update: function(key, value, newKey) {
        var self = newKey && newKey != key ? this.remove(newKey) : this;
        var found = self.find(key), content = self.content.slice();
        if (found == -1) {
            content.push(newKey || key, value);
        } else {
            content[found + 1] = value;
            if (newKey) content[found] = newKey;
        }
        return new OrderedMap(content);
    },
    // :: (string) → OrderedMap
    // Return a map with the given key removed, if it existed.
    remove: function(key) {
        var found = this.find(key);
        if (found == -1) return this;
        var content = this.content.slice();
        content.splice(found, 2);
        return new OrderedMap(content);
    },
    // :: (string, any) → OrderedMap
    // Add a new key to the start of the map.
    addToStart: function(key, value) {
        return new OrderedMap([
            key,
            value
        ].concat(this.remove(key).content));
    },
    // :: (string, any) → OrderedMap
    // Add a new key to the end of the map.
    addToEnd: function(key, value) {
        var content = this.remove(key).content.slice();
        content.push(key, value);
        return new OrderedMap(content);
    },
    // :: (string, string, any) → OrderedMap
    // Add a key after the given key. If `place` is not found, the new
    // key is added to the end.
    addBefore: function(place, key, value) {
        var without = this.remove(key), content = without.content.slice();
        var found = without.find(place);
        content.splice(found == -1 ? content.length : found, 0, key, value);
        return new OrderedMap(content);
    },
    // :: ((key: string, value: any))
    // Call the given function for each key/value pair in the map, in
    // order.
    forEach: function(f) {
        for(var i = 0; i < this.content.length; i += 2)f(this.content[i], this.content[i + 1]);
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a new map by prepending the keys in this map that don't
    // appear in `map` before the keys in `map`.
    prepend: function(map) {
        map = OrderedMap.from(map);
        if (!map.size) return this;
        return new OrderedMap(map.content.concat(this.subtract(map).content));
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a new map by appending the keys in this map that don't
    // appear in `map` after the keys in `map`.
    append: function(map) {
        map = OrderedMap.from(map);
        if (!map.size) return this;
        return new OrderedMap(this.subtract(map).content.concat(map.content));
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a map containing all the keys in this map that don't
    // appear in `map`.
    subtract: function(map) {
        var result = this;
        map = OrderedMap.from(map);
        for(var i = 0; i < map.content.length; i += 2)result = result.remove(map.content[i]);
        return result;
    },
    // :: () → Object
    // Turn ordered map into a plain object.
    toObject: function() {
        var result = {};
        this.forEach(function(key, value) {
            result[key] = value;
        });
        return result;
    },
    // :: number
    // The amount of keys in this map.
    get size () {
        return this.content.length >> 1;
    }
};
// :: (?union<Object, OrderedMap>) → OrderedMap
// Return a map with the given content. If null, create an empty
// map. If given an ordered map, return that map itself. If given an
// object, create a map from the object's properties.
OrderedMap.from = function(value) {
    if (value instanceof OrderedMap) return value;
    var content = [];
    if (value) for(var prop in value)content.push(prop, value[prop]);
    return new OrderedMap(content);
};
const __TURBOPACK__default__export__ = OrderedMap;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentMatch",
    ()=>ContentMatch,
    "DOMParser",
    ()=>DOMParser,
    "DOMSerializer",
    ()=>DOMSerializer,
    "Fragment",
    ()=>Fragment,
    "Mark",
    ()=>Mark,
    "MarkType",
    ()=>MarkType,
    "Node",
    ()=>Node,
    "NodeRange",
    ()=>NodeRange,
    "NodeType",
    ()=>NodeType,
    "ReplaceError",
    ()=>ReplaceError,
    "ResolvedPos",
    ()=>ResolvedPos,
    "Schema",
    ()=>Schema,
    "Slice",
    ()=>Slice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$orderedmap$40$2$2e$1$2e$1$2f$node_modules$2f$orderedmap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/orderedmap@2.1.1/node_modules/orderedmap/dist/index.js [app-client] (ecmascript)");
;
function findDiffStart(a, b, pos) {
    for(let i = 0;; i++){
        if (i == a.childCount || i == b.childCount) return a.childCount == b.childCount ? null : pos;
        let childA = a.child(i), childB = b.child(i);
        if (childA == childB) {
            pos += childA.nodeSize;
            continue;
        }
        if (!childA.sameMarkup(childB)) return pos;
        if (childA.isText && childA.text != childB.text) {
            let tA = childA.text, tB = childB.text, j = 0;
            for(; tA[j] == tB[j]; j++)pos++;
            if (j && j < tA.length && j < tB.length && surrogateHigh(tA.charCodeAt(j - 1)) && surrogateLow(tA.charCodeAt(j))) pos--;
            return pos;
        }
        if (childA.content.size || childB.content.size) {
            let inner = findDiffStart(childA.content, childB.content, pos + 1);
            if (inner != null) return inner;
        }
        pos += childA.nodeSize;
    }
}
function findDiffEnd(a, b, posA, posB) {
    for(let iA = a.childCount, iB = b.childCount;;){
        if (iA == 0 || iB == 0) return iA == iB ? null : {
            a: posA,
            b: posB
        };
        let childA = a.child(--iA), childB = b.child(--iB), size = childA.nodeSize;
        if (childA == childB) {
            posA -= size;
            posB -= size;
            continue;
        }
        if (!childA.sameMarkup(childB)) return {
            a: posA,
            b: posB
        };
        if (childA.isText && childA.text != childB.text) {
            let tA = childA.text, tB = childB.text, iA = tA.length, iB = tB.length;
            while(iA > 0 && iB > 0 && tA[iA - 1] == tB[iB - 1]){
                iA--;
                iB--;
                posA--;
                posB--;
            }
            if (iA && iB && iA < tA.length && surrogateHigh(tA.charCodeAt(iA - 1)) && surrogateLow(tA.charCodeAt(iA))) {
                posA++;
                posB++;
            }
            return {
                a: posA,
                b: posB
            };
        }
        if (childA.content.size || childB.content.size) {
            let inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
            if (inner) return inner;
        }
        posA -= size;
        posB -= size;
    }
}
function surrogateLow(ch) {
    return ch >= 0xDC00 && ch < 0xE000;
}
function surrogateHigh(ch) {
    return ch >= 0xD800 && ch < 0xDC00;
}
/**
A fragment represents a node's collection of child nodes.

Like nodes, fragments are persistent data structures, and you
should not mutate them or their content. Rather, you create new
instances whenever needed. The API tries to make this easy.
*/ class Fragment {
    /**
    @internal
    */ constructor(/**
    The child nodes in this fragment.
    */ content, size){
        this.content = content;
        this.size = size || 0;
        if (size == null) for(let i = 0; i < content.length; i++)this.size += content[i].nodeSize;
    }
    /**
    Invoke a callback for all descendant nodes between the given two
    positions (relative to start of this fragment). Doesn't descend
    into a node when the callback returns `false`.
    */ nodesBetween(from, to, f, nodeStart = 0, parent) {
        for(let i = 0, pos = 0; pos < to; i++){
            let child = this.content[i], end = pos + child.nodeSize;
            if (end > from && f(child, nodeStart + pos, parent || null, i) !== false && child.content.size) {
                let start = pos + 1;
                child.nodesBetween(Math.max(0, from - start), Math.min(child.content.size, to - start), f, nodeStart + start);
            }
            pos = end;
        }
    }
    /**
    Call the given callback for every descendant node. `pos` will be
    relative to the start of the fragment. The callback may return
    `false` to prevent traversal of a given node's children.
    */ descendants(f) {
        this.nodesBetween(0, this.size, f);
    }
    /**
    Extract the text between `from` and `to`. See the same method on
    [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
    */ textBetween(from, to, blockSeparator, leafText) {
        let text = "", first = true;
        this.nodesBetween(from, to, (node, pos)=>{
            let nodeText = node.isText ? node.text.slice(Math.max(from, pos) - pos, to - pos) : !node.isLeaf ? "" : leafText ? typeof leafText === "function" ? leafText(node) : leafText : node.type.spec.leafText ? node.type.spec.leafText(node) : "";
            if (node.isBlock && (node.isLeaf && nodeText || node.isTextblock) && blockSeparator) {
                if (first) first = false;
                else text += blockSeparator;
            }
            text += nodeText;
        }, 0);
        return text;
    }
    /**
    Create a new fragment containing the combined content of this
    fragment and the other.
    */ append(other) {
        if (!other.size) return this;
        if (!this.size) return other;
        let last = this.lastChild, first = other.firstChild, content = this.content.slice(), i = 0;
        if (last.isText && last.sameMarkup(first)) {
            content[content.length - 1] = last.withText(last.text + first.text);
            i = 1;
        }
        for(; i < other.content.length; i++)content.push(other.content[i]);
        return new Fragment(content, this.size + other.size);
    }
    /**
    Cut out the sub-fragment between the two given positions.
    */ cut(from, to = this.size) {
        if (from == 0 && to == this.size) return this;
        let result = [], size = 0;
        if (to > from) for(let i = 0, pos = 0; pos < to; i++){
            let child = this.content[i], end = pos + child.nodeSize;
            if (end > from) {
                if (pos < from || end > to) {
                    if (child.isText) child = child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos));
                    else child = child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1));
                }
                result.push(child);
                size += child.nodeSize;
            }
            pos = end;
        }
        return new Fragment(result, size);
    }
    /**
    @internal
    */ cutByIndex(from, to) {
        if (from == to) return Fragment.empty;
        if (from == 0 && to == this.content.length) return this;
        return new Fragment(this.content.slice(from, to));
    }
    /**
    Create a new fragment in which the node at the given index is
    replaced by the given node.
    */ replaceChild(index, node) {
        let current = this.content[index];
        if (current == node) return this;
        let copy = this.content.slice();
        let size = this.size + node.nodeSize - current.nodeSize;
        copy[index] = node;
        return new Fragment(copy, size);
    }
    /**
    Create a new fragment by prepending the given node to this
    fragment.
    */ addToStart(node) {
        return new Fragment([
            node
        ].concat(this.content), this.size + node.nodeSize);
    }
    /**
    Create a new fragment by appending the given node to this
    fragment.
    */ addToEnd(node) {
        return new Fragment(this.content.concat(node), this.size + node.nodeSize);
    }
    /**
    Compare this fragment to another one.
    */ eq(other) {
        if (this.content.length != other.content.length) return false;
        for(let i = 0; i < this.content.length; i++)if (!this.content[i].eq(other.content[i])) return false;
        return true;
    }
    /**
    The first child of the fragment, or `null` if it is empty.
    */ get firstChild() {
        return this.content.length ? this.content[0] : null;
    }
    /**
    The last child of the fragment, or `null` if it is empty.
    */ get lastChild() {
        return this.content.length ? this.content[this.content.length - 1] : null;
    }
    /**
    The number of child nodes in this fragment.
    */ get childCount() {
        return this.content.length;
    }
    /**
    Get the child node at the given index. Raise an error when the
    index is out of range.
    */ child(index) {
        let found = this.content[index];
        if (!found) throw new RangeError("Index " + index + " out of range for " + this);
        return found;
    }
    /**
    Get the child node at the given index, if it exists.
    */ maybeChild(index) {
        return this.content[index] || null;
    }
    /**
    Call `f` for every child node, passing the node, its offset
    into this parent node, and its index.
    */ forEach(f) {
        for(let i = 0, p = 0; i < this.content.length; i++){
            let child = this.content[i];
            f(child, p, i);
            p += child.nodeSize;
        }
    }
    /**
    Find the first position at which this fragment and another
    fragment differ, or `null` if they are the same.
    */ findDiffStart(other, pos = 0) {
        return findDiffStart(this, other, pos);
    }
    /**
    Find the first position, searching from the end, at which this
    fragment and the given fragment differ, or `null` if they are
    the same. Since this position will not be the same in both
    nodes, an object with two separate positions is returned.
    */ findDiffEnd(other, pos = this.size, otherPos = other.size) {
        return findDiffEnd(this, other, pos, otherPos);
    }
    /**
    Find the index and inner offset corresponding to a given relative
    position in this fragment. The result object will be reused
    (overwritten) the next time the function is called. @internal
    */ findIndex(pos) {
        if (pos == 0) return retIndex(0, pos);
        if (pos == this.size) return retIndex(this.content.length, pos);
        if (pos > this.size || pos < 0) throw new RangeError(`Position ${pos} outside of fragment (${this})`);
        for(let i = 0, curPos = 0;; i++){
            let cur = this.child(i), end = curPos + cur.nodeSize;
            if (end >= pos) {
                if (end == pos) return retIndex(i + 1, end);
                return retIndex(i, curPos);
            }
            curPos = end;
        }
    }
    /**
    Return a debugging string that describes this fragment.
    */ toString() {
        return "<" + this.toStringInner() + ">";
    }
    /**
    @internal
    */ toStringInner() {
        return this.content.join(", ");
    }
    /**
    Create a JSON-serializeable representation of this fragment.
    */ toJSON() {
        return this.content.length ? this.content.map((n)=>n.toJSON()) : null;
    }
    /**
    Deserialize a fragment from its JSON representation.
    */ static fromJSON(schema, value) {
        if (!value) return Fragment.empty;
        if (!Array.isArray(value)) throw new RangeError("Invalid input for Fragment.fromJSON");
        return Fragment.fromArray(value.map(schema.nodeFromJSON));
    }
    /**
    Build a fragment from an array of nodes. Ensures that adjacent
    text nodes with the same marks are joined together.
    */ static fromArray(array) {
        if (!array.length) return Fragment.empty;
        let joined, size = 0;
        for(let i = 0; i < array.length; i++){
            let node = array[i];
            size += node.nodeSize;
            if (i && node.isText && array[i - 1].sameMarkup(node)) {
                if (!joined) joined = array.slice(0, i);
                joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
            } else if (joined) {
                joined.push(node);
            }
        }
        return new Fragment(joined || array, size);
    }
    /**
    Create a fragment from something that can be interpreted as a
    set of nodes. For `null`, it returns the empty fragment. For a
    fragment, the fragment itself. For a node or array of nodes, a
    fragment containing those nodes.
    */ static from(nodes) {
        if (!nodes) return Fragment.empty;
        if (nodes instanceof Fragment) return nodes;
        if (Array.isArray(nodes)) return this.fromArray(nodes);
        if (nodes.attrs) return new Fragment([
            nodes
        ], nodes.nodeSize);
        throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
    }
}
/**
An empty fragment. Intended to be reused whenever a node doesn't
contain anything (rather than allocating a new empty fragment for
each leaf node).
*/ Fragment.empty = new Fragment([], 0);
const found = {
    index: 0,
    offset: 0
};
function retIndex(index, offset) {
    found.index = index;
    found.offset = offset;
    return found;
}
function compareDeep(a, b) {
    if (a === b) return true;
    if (!(a && typeof a == "object") || !(b && typeof b == "object")) return false;
    let array = Array.isArray(a);
    if (Array.isArray(b) != array) return false;
    if (array) {
        if (a.length != b.length) return false;
        for(let i = 0; i < a.length; i++)if (!compareDeep(a[i], b[i])) return false;
    } else {
        for(let p in a)if (!(p in b) || !compareDeep(a[p], b[p])) return false;
        for(let p in b)if (!(p in a)) return false;
    }
    return true;
}
/**
A mark is a piece of information that can be attached to a node,
such as it being emphasized, in code font, or a link. It has a
type and optionally a set of attributes that provide further
information (such as the target of the link). Marks are created
through a `Schema`, which controls which types exist and which
attributes they have.
*/ class Mark {
    /**
    @internal
    */ constructor(/**
    The type of this mark.
    */ type, /**
    The attributes associated with this mark.
    */ attrs){
        this.type = type;
        this.attrs = attrs;
    }
    /**
    Given a set of marks, create a new set which contains this one as
    well, in the right position. If this mark is already in the set,
    the set itself is returned. If any marks that are set to be
    [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
    those are replaced by this one.
    */ addToSet(set) {
        let copy, placed = false;
        for(let i = 0; i < set.length; i++){
            let other = set[i];
            if (this.eq(other)) return set;
            if (this.type.excludes(other.type)) {
                if (!copy) copy = set.slice(0, i);
            } else if (other.type.excludes(this.type)) {
                return set;
            } else {
                if (!placed && other.type.rank > this.type.rank) {
                    if (!copy) copy = set.slice(0, i);
                    copy.push(this);
                    placed = true;
                }
                if (copy) copy.push(other);
            }
        }
        if (!copy) copy = set.slice();
        if (!placed) copy.push(this);
        return copy;
    }
    /**
    Remove this mark from the given set, returning a new set. If this
    mark is not in the set, the set itself is returned.
    */ removeFromSet(set) {
        for(let i = 0; i < set.length; i++)if (this.eq(set[i])) return set.slice(0, i).concat(set.slice(i + 1));
        return set;
    }
    /**
    Test whether this mark is in the given set of marks.
    */ isInSet(set) {
        for(let i = 0; i < set.length; i++)if (this.eq(set[i])) return true;
        return false;
    }
    /**
    Test whether this mark has the same type and attributes as
    another mark.
    */ eq(other) {
        return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
    }
    /**
    Convert this mark to a JSON-serializeable representation.
    */ toJSON() {
        let obj = {
            type: this.type.name
        };
        for(let _ in this.attrs){
            obj.attrs = this.attrs;
            break;
        }
        return obj;
    }
    /**
    Deserialize a mark from JSON.
    */ static fromJSON(schema, json) {
        if (!json) throw new RangeError("Invalid input for Mark.fromJSON");
        let type = schema.marks[json.type];
        if (!type) throw new RangeError(`There is no mark type ${json.type} in this schema`);
        let mark = type.create(json.attrs);
        type.checkAttrs(mark.attrs);
        return mark;
    }
    /**
    Test whether two sets of marks are identical.
    */ static sameSet(a, b) {
        if (a == b) return true;
        if (a.length != b.length) return false;
        for(let i = 0; i < a.length; i++)if (!a[i].eq(b[i])) return false;
        return true;
    }
    /**
    Create a properly sorted mark set from null, a single mark, or an
    unsorted array of marks.
    */ static setFrom(marks) {
        if (!marks || Array.isArray(marks) && marks.length == 0) return Mark.none;
        if (marks instanceof Mark) return [
            marks
        ];
        let copy = marks.slice();
        copy.sort((a, b)=>a.type.rank - b.type.rank);
        return copy;
    }
}
/**
The empty set of marks.
*/ Mark.none = [];
/**
Error type raised by [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) when
given an invalid replacement.
*/ class ReplaceError extends Error {
}
/**
A slice represents a piece cut out of a larger document. It
stores not only a fragment, but also the depth up to which nodes on
both side are ‘open’ (cut through).
*/ class Slice {
    /**
    Create a slice. When specifying a non-zero open depth, you must
    make sure that there are nodes of at least that depth at the
    appropriate side of the fragment—i.e. if the fragment is an
    empty paragraph node, `openStart` and `openEnd` can't be greater
    than 1.
    
    It is not necessary for the content of open nodes to conform to
    the schema's content constraints, though it should be a valid
    start/end/middle for such a node, depending on which sides are
    open.
    */ constructor(/**
    The slice's content.
    */ content, /**
    The open depth at the start of the fragment.
    */ openStart, /**
    The open depth at the end.
    */ openEnd){
        this.content = content;
        this.openStart = openStart;
        this.openEnd = openEnd;
    }
    /**
    The size this slice would add when inserted into a document.
    */ get size() {
        return this.content.size - this.openStart - this.openEnd;
    }
    /**
    @internal
    */ insertAt(pos, fragment) {
        let content = insertInto(this.content, pos + this.openStart, fragment, this.openStart + 1, this.openEnd + 1);
        return content && new Slice(content, this.openStart, this.openEnd);
    }
    /**
    @internal
    */ removeBetween(from, to) {
        return new Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd);
    }
    /**
    Tests whether this slice is equal to another slice.
    */ eq(other) {
        return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
    }
    /**
    @internal
    */ toString() {
        return this.content + "(" + this.openStart + "," + this.openEnd + ")";
    }
    /**
    Convert a slice to a JSON-serializable representation.
    */ toJSON() {
        if (!this.content.size) return null;
        let json = {
            content: this.content.toJSON()
        };
        if (this.openStart > 0) json.openStart = this.openStart;
        if (this.openEnd > 0) json.openEnd = this.openEnd;
        return json;
    }
    /**
    Deserialize a slice from its JSON representation.
    */ static fromJSON(schema, json) {
        if (!json) return Slice.empty;
        let openStart = json.openStart || 0, openEnd = json.openEnd || 0;
        if (typeof openStart != "number" || typeof openEnd != "number") throw new RangeError("Invalid input for Slice.fromJSON");
        return new Slice(Fragment.fromJSON(schema, json.content), openStart, openEnd);
    }
    /**
    Create a slice from a fragment by taking the maximum possible
    open value on both side of the fragment.
    */ static maxOpen(fragment, openIsolating = true) {
        let openStart = 0, openEnd = 0;
        for(let n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild)openStart++;
        for(let n = fragment.lastChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.lastChild)openEnd++;
        return new Slice(fragment, openStart, openEnd);
    }
}
/**
The empty slice.
*/ Slice.empty = new Slice(Fragment.empty, 0, 0);
function removeRange(content, from, to) {
    let { index, offset } = content.findIndex(from), child = content.maybeChild(index);
    let { index: indexTo, offset: offsetTo } = content.findIndex(to);
    if (offset == from || child.isText) {
        if (offsetTo != to && !content.child(indexTo).isText) throw new RangeError("Removing non-flat range");
        return content.cut(0, from).append(content.cut(to));
    }
    if (index != indexTo) throw new RangeError("Removing non-flat range");
    return content.replaceChild(index, child.copy(removeRange(child.content, from - offset - 1, to - offset - 1)));
}
function insertInto(content, dist, insert, openStart, openEnd, parent) {
    let { index, offset } = content.findIndex(dist), child = content.maybeChild(index);
    if (offset == dist || child.isText) {
        if (parent && openStart <= 0 && openEnd <= 0 && !parent.canReplace(index, index, insert)) return null;
        return content.cut(0, dist).append(insert).append(content.cut(dist));
    }
    let inner = insertInto(child.content, dist - offset - 1, insert, index == 0 ? openStart - 1 : 0, index == content.childCount - 1 ? openEnd - 1 : 0, child);
    return inner && content.replaceChild(index, child.copy(inner));
}
function replace($from, $to, slice) {
    if (slice.openStart > $from.depth) throw new ReplaceError("Inserted content deeper than insertion position");
    if ($from.depth - slice.openStart != $to.depth - slice.openEnd) throw new ReplaceError("Inconsistent open depths");
    return replaceOuter($from, $to, slice, 0);
}
function replaceOuter($from, $to, slice, depth) {
    let index = $from.index(depth), node = $from.node(depth);
    if (index == $to.index(depth) && depth < $from.depth - slice.openStart) {
        let inner = replaceOuter($from, $to, slice, depth + 1);
        return node.copy(node.content.replaceChild(index, inner));
    } else if (!slice.content.size) {
        return close(node, replaceTwoWay($from, $to, depth));
    } else if (!slice.openStart && !slice.openEnd && $from.depth == depth && $to.depth == depth) {
        let parent = $from.parent, content = parent.content;
        return close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)));
    } else {
        let { start, end } = prepareSliceForReplace(slice, $from);
        return close(node, replaceThreeWay($from, start, end, $to, depth));
    }
}
function checkJoin(main, sub) {
    if (!sub.type.compatibleContent(main.type)) throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name);
}
function joinable($before, $after, depth) {
    let node = $before.node(depth);
    checkJoin(node, $after.node(depth));
    return node;
}
function addNode(child, target) {
    let last = target.length - 1;
    if (last >= 0 && child.isText && child.sameMarkup(target[last])) target[last] = child.withText(target[last].text + child.text);
    else target.push(child);
}
function addRange($start, $end, depth, target) {
    let node = ($end || $start).node(depth);
    let startIndex = 0, endIndex = $end ? $end.index(depth) : node.childCount;
    if ($start) {
        startIndex = $start.index(depth);
        if ($start.depth > depth) {
            startIndex++;
        } else if ($start.textOffset) {
            addNode($start.nodeAfter, target);
            startIndex++;
        }
    }
    for(let i = startIndex; i < endIndex; i++)addNode(node.child(i), target);
    if ($end && $end.depth == depth && $end.textOffset) addNode($end.nodeBefore, target);
}
function close(node, content) {
    if (!node.type.validContent(content)) throw new ReplaceError("Invalid content for node " + node.type.name);
    return node.copy(content);
}
function replaceThreeWay($from, $start, $end, $to, depth) {
    let openStart = $from.depth > depth && joinable($from, $start, depth + 1);
    let openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
    let content = [];
    addRange(null, $from, depth, content);
    if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
        checkJoin(openStart, openEnd);
        addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
    } else {
        if (openStart) addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
        addRange($start, $end, depth, content);
        if (openEnd) addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
    }
    addRange($to, null, depth, content);
    return new Fragment(content);
}
function replaceTwoWay($from, $to, depth) {
    let content = [];
    addRange(null, $from, depth, content);
    if ($from.depth > depth) {
        let type = joinable($from, $to, depth + 1);
        addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
    }
    addRange($to, null, depth, content);
    return new Fragment(content);
}
function prepareSliceForReplace(slice, $along) {
    let extra = $along.depth - slice.openStart, parent = $along.node(extra);
    let node = parent.copy(slice.content);
    for(let i = extra - 1; i >= 0; i--)node = $along.node(i).copy(Fragment.from(node));
    return {
        start: node.resolveNoCache(slice.openStart + extra),
        end: node.resolveNoCache(node.content.size - slice.openEnd - extra)
    };
}
/**
You can [_resolve_](https://prosemirror.net/docs/ref/#model.Node.resolve) a position to get more
information about it. Objects of this class represent such a
resolved position, providing various pieces of context
information, and some helper methods.

Throughout this interface, methods that take an optional `depth`
parameter will interpret undefined as `this.depth` and negative
numbers as `this.depth + value`.
*/ class ResolvedPos {
    /**
    @internal
    */ constructor(/**
    The position that was resolved.
    */ pos, /**
    @internal
    */ path, /**
    The offset this position has into its parent node.
    */ parentOffset){
        this.pos = pos;
        this.path = path;
        this.parentOffset = parentOffset;
        this.depth = path.length / 3 - 1;
    }
    /**
    @internal
    */ resolveDepth(val) {
        if (val == null) return this.depth;
        if (val < 0) return this.depth + val;
        return val;
    }
    /**
    The parent node that the position points into. Note that even if
    a position points into a text node, that node is not considered
    the parent—text nodes are ‘flat’ in this model, and have no content.
    */ get parent() {
        return this.node(this.depth);
    }
    /**
    The root node in which the position was resolved.
    */ get doc() {
        return this.node(0);
    }
    /**
    The ancestor node at the given level. `p.node(p.depth)` is the
    same as `p.parent`.
    */ node(depth) {
        return this.path[this.resolveDepth(depth) * 3];
    }
    /**
    The index into the ancestor at the given level. If this points
    at the 3rd node in the 2nd paragraph on the top level, for
    example, `p.index(0)` is 1 and `p.index(1)` is 2.
    */ index(depth) {
        return this.path[this.resolveDepth(depth) * 3 + 1];
    }
    /**
    The index pointing after this position into the ancestor at the
    given level.
    */ indexAfter(depth) {
        depth = this.resolveDepth(depth);
        return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
    }
    /**
    The (absolute) position at the start of the node at the given
    level.
    */ start(depth) {
        depth = this.resolveDepth(depth);
        return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
    }
    /**
    The (absolute) position at the end of the node at the given
    level.
    */ end(depth) {
        depth = this.resolveDepth(depth);
        return this.start(depth) + this.node(depth).content.size;
    }
    /**
    The (absolute) position directly before the wrapping node at the
    given level, or, when `depth` is `this.depth + 1`, the original
    position.
    */ before(depth) {
        depth = this.resolveDepth(depth);
        if (!depth) throw new RangeError("There is no position before the top-level node");
        return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
    }
    /**
    The (absolute) position directly after the wrapping node at the
    given level, or the original position when `depth` is `this.depth + 1`.
    */ after(depth) {
        depth = this.resolveDepth(depth);
        if (!depth) throw new RangeError("There is no position after the top-level node");
        return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
    }
    /**
    When this position points into a text node, this returns the
    distance between the position and the start of the text node.
    Will be zero for positions that point between nodes.
    */ get textOffset() {
        return this.pos - this.path[this.path.length - 1];
    }
    /**
    Get the node directly after the position, if any. If the position
    points into a text node, only the part of that node after the
    position is returned.
    */ get nodeAfter() {
        let parent = this.parent, index = this.index(this.depth);
        if (index == parent.childCount) return null;
        let dOff = this.pos - this.path[this.path.length - 1], child = parent.child(index);
        return dOff ? parent.child(index).cut(dOff) : child;
    }
    /**
    Get the node directly before the position, if any. If the
    position points into a text node, only the part of that node
    before the position is returned.
    */ get nodeBefore() {
        let index = this.index(this.depth);
        let dOff = this.pos - this.path[this.path.length - 1];
        if (dOff) return this.parent.child(index).cut(0, dOff);
        return index == 0 ? null : this.parent.child(index - 1);
    }
    /**
    Get the position at the given index in the parent node at the
    given depth (which defaults to `this.depth`).
    */ posAtIndex(index, depth) {
        depth = this.resolveDepth(depth);
        let node = this.path[depth * 3], pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
        for(let i = 0; i < index; i++)pos += node.child(i).nodeSize;
        return pos;
    }
    /**
    Get the marks at this position, factoring in the surrounding
    marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
    position is at the start of a non-empty node, the marks of the
    node after it (if any) are returned.
    */ marks() {
        let parent = this.parent, index = this.index();
        // In an empty parent, return the empty array
        if (parent.content.size == 0) return Mark.none;
        // When inside a text node, just return the text node's marks
        if (this.textOffset) return parent.child(index).marks;
        let main = parent.maybeChild(index - 1), other = parent.maybeChild(index);
        // If the `after` flag is true of there is no node before, make
        // the node after this position the main reference.
        if (!main) {
            let tmp = main;
            main = other;
            other = tmp;
        }
        // Use all marks in the main node, except those that have
        // `inclusive` set to false and are not present in the other node.
        let marks = main.marks;
        for(var i = 0; i < marks.length; i++)if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks))) marks = marks[i--].removeFromSet(marks);
        return marks;
    }
    /**
    Get the marks after the current position, if any, except those
    that are non-inclusive and not present at position `$end`. This
    is mostly useful for getting the set of marks to preserve after a
    deletion. Will return `null` if this position is at the end of
    its parent node or its parent node isn't a textblock (in which
    case no marks should be preserved).
    */ marksAcross($end) {
        let after = this.parent.maybeChild(this.index());
        if (!after || !after.isInline) return null;
        let marks = after.marks, next = $end.parent.maybeChild($end.index());
        for(var i = 0; i < marks.length; i++)if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks))) marks = marks[i--].removeFromSet(marks);
        return marks;
    }
    /**
    The depth up to which this position and the given (non-resolved)
    position share the same parent nodes.
    */ sharedDepth(pos) {
        for(let depth = this.depth; depth > 0; depth--)if (this.start(depth) <= pos && this.end(depth) >= pos) return depth;
        return 0;
    }
    /**
    Returns a range based on the place where this position and the
    given position diverge around block content. If both point into
    the same textblock, for example, a range around that textblock
    will be returned. If they point into different blocks, the range
    around those blocks in their shared ancestor is returned. You can
    pass in an optional predicate that will be called with a parent
    node to see if a range into that parent is acceptable.
    */ blockRange(other = this, pred) {
        if (other.pos < this.pos) return other.blockRange(this);
        for(let d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--)if (other.pos <= this.end(d) && (!pred || pred(this.node(d)))) return new NodeRange(this, other, d);
        return null;
    }
    /**
    Query whether the given position shares the same parent node.
    */ sameParent(other) {
        return this.pos - this.parentOffset == other.pos - other.parentOffset;
    }
    /**
    Return the greater of this and the given position.
    */ max(other) {
        return other.pos > this.pos ? other : this;
    }
    /**
    Return the smaller of this and the given position.
    */ min(other) {
        return other.pos < this.pos ? other : this;
    }
    /**
    @internal
    */ toString() {
        let str = "";
        for(let i = 1; i <= this.depth; i++)str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
        return str + ":" + this.parentOffset;
    }
    /**
    @internal
    */ static resolve(doc, pos) {
        if (!(pos >= 0 && pos <= doc.content.size)) throw new RangeError("Position " + pos + " out of range");
        let path = [];
        let start = 0, parentOffset = pos;
        for(let node = doc;;){
            let { index, offset } = node.content.findIndex(parentOffset);
            let rem = parentOffset - offset;
            path.push(node, index, start + offset);
            if (!rem) break;
            node = node.child(index);
            if (node.isText) break;
            parentOffset = rem - 1;
            start += offset + 1;
        }
        return new ResolvedPos(pos, path, parentOffset);
    }
    /**
    @internal
    */ static resolveCached(doc, pos) {
        let cache = resolveCache.get(doc);
        if (cache) {
            for(let i = 0; i < cache.elts.length; i++){
                let elt = cache.elts[i];
                if (elt.pos == pos) return elt;
            }
        } else {
            resolveCache.set(doc, cache = new ResolveCache);
        }
        let result = cache.elts[cache.i] = ResolvedPos.resolve(doc, pos);
        cache.i = (cache.i + 1) % resolveCacheSize;
        return result;
    }
}
class ResolveCache {
    constructor(){
        this.elts = [];
        this.i = 0;
    }
}
const resolveCacheSize = 12, resolveCache = new WeakMap();
/**
Represents a flat range of content, i.e. one that starts and
ends in the same node.
*/ class NodeRange {
    /**
    Construct a node range. `$from` and `$to` should point into the
    same node until at least the given `depth`, since a node range
    denotes an adjacent set of nodes in a single parent node.
    */ constructor(/**
    A resolved position along the start of the content. May have a
    `depth` greater than this object's `depth` property, since
    these are the positions that were used to compute the range,
    not re-resolved positions directly at its boundaries.
    */ $from, /**
    A position along the end of the content. See
    caveat for [`$from`](https://prosemirror.net/docs/ref/#model.NodeRange.$from).
    */ $to, /**
    The depth of the node that this range points into.
    */ depth){
        this.$from = $from;
        this.$to = $to;
        this.depth = depth;
    }
    /**
    The position at the start of the range.
    */ get start() {
        return this.$from.before(this.depth + 1);
    }
    /**
    The position at the end of the range.
    */ get end() {
        return this.$to.after(this.depth + 1);
    }
    /**
    The parent node that the range points into.
    */ get parent() {
        return this.$from.node(this.depth);
    }
    /**
    The start index of the range in the parent node.
    */ get startIndex() {
        return this.$from.index(this.depth);
    }
    /**
    The end index of the range in the parent node.
    */ get endIndex() {
        return this.$to.indexAfter(this.depth);
    }
}
const emptyAttrs = Object.create(null);
/**
This class represents a node in the tree that makes up a
ProseMirror document. So a document is an instance of `Node`, with
children that are also instances of `Node`.

Nodes are persistent data structures. Instead of changing them, you
create new ones with the content you want. Old ones keep pointing
at the old document shape. This is made cheaper by sharing
structure between the old and new data as much as possible, which a
tree shape like this (without back pointers) makes easy.

**Do not** directly mutate the properties of a `Node` object. See
[the guide](https://prosemirror.net/docs/guide/#doc) for more information.
*/ class Node {
    /**
    @internal
    */ constructor(/**
    The type of node that this is.
    */ type, /**
    An object mapping attribute names to values. The kind of
    attributes allowed and required are
    [determined](https://prosemirror.net/docs/ref/#model.NodeSpec.attrs) by the node type.
    */ attrs, // A fragment holding the node's children.
    content, /**
    The marks (things like whether it is emphasized or part of a
    link) applied to this node.
    */ marks = Mark.none){
        this.type = type;
        this.attrs = attrs;
        this.marks = marks;
        this.content = content || Fragment.empty;
    }
    /**
    The array of this node's child nodes.
    */ get children() {
        return this.content.content;
    }
    /**
    The size of this node, as defined by the integer-based [indexing
    scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
    amount of characters. For other leaf nodes, it is one. For
    non-leaf nodes, it is the size of the content plus two (the
    start and end token).
    */ get nodeSize() {
        return this.isLeaf ? 1 : 2 + this.content.size;
    }
    /**
    The number of children that the node has.
    */ get childCount() {
        return this.content.childCount;
    }
    /**
    Get the child node at the given index. Raises an error when the
    index is out of range.
    */ child(index) {
        return this.content.child(index);
    }
    /**
    Get the child node at the given index, if it exists.
    */ maybeChild(index) {
        return this.content.maybeChild(index);
    }
    /**
    Call `f` for every child node, passing the node, its offset
    into this parent node, and its index.
    */ forEach(f) {
        this.content.forEach(f);
    }
    /**
    Invoke a callback for all descendant nodes recursively overlapping
    the given two positions that are relative to start of this
    node's content. This includes all ancestors of the nodes
    containing the two positions. The callback is invoked with the
    node, its position relative to the original node (method receiver),
    its parent node, and its child index. When the callback returns
    false for a given node, that node's children will not be
    recursed over. The last parameter can be used to specify a
    starting position to count from.
    */ nodesBetween(from, to, f, startPos = 0) {
        this.content.nodesBetween(from, to, f, startPos, this);
    }
    /**
    Call the given callback for every descendant node. Doesn't
    descend into a node when the callback returns `false`.
    */ descendants(f) {
        this.nodesBetween(0, this.content.size, f);
    }
    /**
    Concatenates all the text nodes found in this fragment and its
    children.
    */ get textContent() {
        return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
    }
    /**
    Get all text between positions `from` and `to`. When
    `blockSeparator` is given, it will be inserted to separate text
    from different block nodes. If `leafText` is given, it'll be
    inserted for every non-text leaf node encountered, otherwise
    [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
    */ textBetween(from, to, blockSeparator, leafText) {
        return this.content.textBetween(from, to, blockSeparator, leafText);
    }
    /**
    Returns this node's first child, or `null` if there are no
    children.
    */ get firstChild() {
        return this.content.firstChild;
    }
    /**
    Returns this node's last child, or `null` if there are no
    children.
    */ get lastChild() {
        return this.content.lastChild;
    }
    /**
    Test whether two nodes represent the same piece of document.
    */ eq(other) {
        return this == other || this.sameMarkup(other) && this.content.eq(other.content);
    }
    /**
    Compare the markup (type, attributes, and marks) of this node to
    those of another. Returns `true` if both have the same markup.
    */ sameMarkup(other) {
        return this.hasMarkup(other.type, other.attrs, other.marks);
    }
    /**
    Check whether this node's markup correspond to the given type,
    attributes, and marks.
    */ hasMarkup(type, attrs, marks) {
        return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks || Mark.none);
    }
    /**
    Create a new node with the same markup as this node, containing
    the given content (or empty, if no content is given).
    */ copy(content = null) {
        if (content == this.content) return this;
        return new Node(this.type, this.attrs, content, this.marks);
    }
    /**
    Create a copy of this node, with the given set of marks instead
    of the node's own marks.
    */ mark(marks) {
        return marks == this.marks ? this : new Node(this.type, this.attrs, this.content, marks);
    }
    /**
    Create a copy of this node with only the content between the
    given positions. If `to` is not given, it defaults to the end of
    the node.
    */ cut(from, to = this.content.size) {
        if (from == 0 && to == this.content.size) return this;
        return this.copy(this.content.cut(from, to));
    }
    /**
    Cut out the part of the document between the given positions, and
    return it as a `Slice` object.
    */ slice(from, to = this.content.size, includeParents = false) {
        if (from == to) return Slice.empty;
        let $from = this.resolve(from), $to = this.resolve(to);
        let depth = includeParents ? 0 : $from.sharedDepth(to);
        let start = $from.start(depth), node = $from.node(depth);
        let content = node.content.cut($from.pos - start, $to.pos - start);
        return new Slice(content, $from.depth - depth, $to.depth - depth);
    }
    /**
    Replace the part of the document between the given positions with
    the given slice. The slice must 'fit', meaning its open sides
    must be able to connect to the surrounding content, and its
    content nodes must be valid children for the node they are placed
    into. If any of this is violated, an error of type
    [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
    */ replace(from, to, slice) {
        return replace(this.resolve(from), this.resolve(to), slice);
    }
    /**
    Find the node directly after the given position.
    */ nodeAt(pos) {
        for(let node = this;;){
            let { index, offset } = node.content.findIndex(pos);
            node = node.maybeChild(index);
            if (!node) return null;
            if (offset == pos || node.isText) return node;
            pos -= offset + 1;
        }
    }
    /**
    Find the (direct) child node after the given offset, if any,
    and return it along with its index and offset relative to this
    node.
    */ childAfter(pos) {
        let { index, offset } = this.content.findIndex(pos);
        return {
            node: this.content.maybeChild(index),
            index,
            offset
        };
    }
    /**
    Find the (direct) child node before the given offset, if any,
    and return it along with its index and offset relative to this
    node.
    */ childBefore(pos) {
        if (pos == 0) return {
            node: null,
            index: 0,
            offset: 0
        };
        let { index, offset } = this.content.findIndex(pos);
        if (offset < pos) return {
            node: this.content.child(index),
            index,
            offset
        };
        let node = this.content.child(index - 1);
        return {
            node,
            index: index - 1,
            offset: offset - node.nodeSize
        };
    }
    /**
    Resolve the given position in the document, returning an
    [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
    */ resolve(pos) {
        return ResolvedPos.resolveCached(this, pos);
    }
    /**
    @internal
    */ resolveNoCache(pos) {
        return ResolvedPos.resolve(this, pos);
    }
    /**
    Test whether a given mark or mark type occurs in this document
    between the two given positions.
    */ rangeHasMark(from, to, type) {
        let found = false;
        if (to > from) this.nodesBetween(from, to, (node)=>{
            if (type.isInSet(node.marks)) found = true;
            return !found;
        });
        return found;
    }
    /**
    True when this is a block (non-inline node)
    */ get isBlock() {
        return this.type.isBlock;
    }
    /**
    True when this is a textblock node, a block node with inline
    content.
    */ get isTextblock() {
        return this.type.isTextblock;
    }
    /**
    True when this node allows inline content.
    */ get inlineContent() {
        return this.type.inlineContent;
    }
    /**
    True when this is an inline node (a text node or a node that can
    appear among text).
    */ get isInline() {
        return this.type.isInline;
    }
    /**
    True when this is a text node.
    */ get isText() {
        return this.type.isText;
    }
    /**
    True when this is a leaf node.
    */ get isLeaf() {
        return this.type.isLeaf;
    }
    /**
    True when this is an atom, i.e. when it does not have directly
    editable content. This is usually the same as `isLeaf`, but can
    be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
    on a node's spec (typically used when the node is displayed as
    an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
    */ get isAtom() {
        return this.type.isAtom;
    }
    /**
    Return a string representation of this node for debugging
    purposes.
    */ toString() {
        if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
        let name = this.type.name;
        if (this.content.size) name += "(" + this.content.toStringInner() + ")";
        return wrapMarks(this.marks, name);
    }
    /**
    Get the content match in this node at the given index.
    */ contentMatchAt(index) {
        let match = this.type.contentMatch.matchFragment(this.content, 0, index);
        if (!match) throw new Error("Called contentMatchAt on a node with invalid content");
        return match;
    }
    /**
    Test whether replacing the range between `from` and `to` (by
    child index) with the given replacement fragment (which defaults
    to the empty fragment) would leave the node's content valid. You
    can optionally pass `start` and `end` indices into the
    replacement fragment.
    */ canReplace(from, to, replacement = Fragment.empty, start = 0, end = replacement.childCount) {
        let one = this.contentMatchAt(from).matchFragment(replacement, start, end);
        let two = one && one.matchFragment(this.content, to);
        if (!two || !two.validEnd) return false;
        for(let i = start; i < end; i++)if (!this.type.allowsMarks(replacement.child(i).marks)) return false;
        return true;
    }
    /**
    Test whether replacing the range `from` to `to` (by index) with
    a node of the given type would leave the node's content valid.
    */ canReplaceWith(from, to, type, marks) {
        if (marks && !this.type.allowsMarks(marks)) return false;
        let start = this.contentMatchAt(from).matchType(type);
        let end = start && start.matchFragment(this.content, to);
        return end ? end.validEnd : false;
    }
    /**
    Test whether the given node's content could be appended to this
    node. If that node is empty, this will only return true if there
    is at least one node type that can appear in both nodes (to avoid
    merging completely incompatible nodes).
    */ canAppend(other) {
        if (other.content.size) return this.canReplace(this.childCount, this.childCount, other.content);
        else return this.type.compatibleContent(other.type);
    }
    /**
    Check whether this node and its descendants conform to the
    schema, and raise an exception when they do not.
    */ check() {
        this.type.checkContent(this.content);
        this.type.checkAttrs(this.attrs);
        let copy = Mark.none;
        for(let i = 0; i < this.marks.length; i++){
            let mark = this.marks[i];
            mark.type.checkAttrs(mark.attrs);
            copy = mark.addToSet(copy);
        }
        if (!Mark.sameSet(copy, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((m)=>m.type.name)}`);
        this.content.forEach((node)=>node.check());
    }
    /**
    Return a JSON-serializeable representation of this node.
    */ toJSON() {
        let obj = {
            type: this.type.name
        };
        for(let _ in this.attrs){
            obj.attrs = this.attrs;
            break;
        }
        if (this.content.size) obj.content = this.content.toJSON();
        if (this.marks.length) obj.marks = this.marks.map((n)=>n.toJSON());
        return obj;
    }
    /**
    Deserialize a node from its JSON representation.
    */ static fromJSON(schema, json) {
        if (!json) throw new RangeError("Invalid input for Node.fromJSON");
        let marks = undefined;
        if (json.marks) {
            if (!Array.isArray(json.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
            marks = json.marks.map(schema.markFromJSON);
        }
        if (json.type == "text") {
            if (typeof json.text != "string") throw new RangeError("Invalid text node in JSON");
            return schema.text(json.text, marks);
        }
        let content = Fragment.fromJSON(schema, json.content);
        let node = schema.nodeType(json.type).create(json.attrs, content, marks);
        node.type.checkAttrs(node.attrs);
        return node;
    }
}
Node.prototype.text = undefined;
class TextNode extends Node {
    /**
    @internal
    */ constructor(type, attrs, content, marks){
        super(type, attrs, null, marks);
        if (!content) throw new RangeError("Empty text nodes are not allowed");
        this.text = content;
    }
    toString() {
        if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
        return wrapMarks(this.marks, JSON.stringify(this.text));
    }
    get textContent() {
        return this.text;
    }
    textBetween(from, to) {
        return this.text.slice(from, to);
    }
    get nodeSize() {
        return this.text.length;
    }
    mark(marks) {
        return marks == this.marks ? this : new TextNode(this.type, this.attrs, this.text, marks);
    }
    withText(text) {
        if (text == this.text) return this;
        return new TextNode(this.type, this.attrs, text, this.marks);
    }
    cut(from = 0, to = this.text.length) {
        if (from == 0 && to == this.text.length) return this;
        return this.withText(this.text.slice(from, to));
    }
    eq(other) {
        return this.sameMarkup(other) && this.text == other.text;
    }
    toJSON() {
        let base = super.toJSON();
        base.text = this.text;
        return base;
    }
}
function wrapMarks(marks, str) {
    for(let i = marks.length - 1; i >= 0; i--)str = marks[i].type.name + "(" + str + ")";
    return str;
}
/**
Instances of this class represent a match state of a node type's
[content expression](https://prosemirror.net/docs/ref/#model.NodeSpec.content), and can be used to
find out whether further content matches here, and whether a given
position is a valid end of the node.
*/ class ContentMatch {
    /**
    @internal
    */ constructor(/**
    True when this match state represents a valid end of the node.
    */ validEnd){
        this.validEnd = validEnd;
        /**
        @internal
        */ this.next = [];
        /**
        @internal
        */ this.wrapCache = [];
    }
    /**
    @internal
    */ static parse(string, nodeTypes) {
        let stream = new TokenStream(string, nodeTypes);
        if (stream.next == null) return ContentMatch.empty;
        let expr = parseExpr(stream);
        if (stream.next) stream.err("Unexpected trailing text");
        let match = dfa(nfa(expr));
        checkForDeadEnds(match, stream);
        return match;
    }
    /**
    Match a node type, returning a match after that node if
    successful.
    */ matchType(type) {
        for(let i = 0; i < this.next.length; i++)if (this.next[i].type == type) return this.next[i].next;
        return null;
    }
    /**
    Try to match a fragment. Returns the resulting match when
    successful.
    */ matchFragment(frag, start = 0, end = frag.childCount) {
        let cur = this;
        for(let i = start; cur && i < end; i++)cur = cur.matchType(frag.child(i).type);
        return cur;
    }
    /**
    @internal
    */ get inlineContent() {
        return this.next.length != 0 && this.next[0].type.isInline;
    }
    /**
    Get the first matching node type at this match position that can
    be generated.
    */ get defaultType() {
        for(let i = 0; i < this.next.length; i++){
            let { type } = this.next[i];
            if (!(type.isText || type.hasRequiredAttrs())) return type;
        }
        return null;
    }
    /**
    @internal
    */ compatible(other) {
        for(let i = 0; i < this.next.length; i++)for(let j = 0; j < other.next.length; j++)if (this.next[i].type == other.next[j].type) return true;
        return false;
    }
    /**
    Try to match the given fragment, and if that fails, see if it can
    be made to match by inserting nodes in front of it. When
    successful, return a fragment of inserted nodes (which may be
    empty if nothing had to be inserted). When `toEnd` is true, only
    return a fragment if the resulting match goes to the end of the
    content expression.
    */ fillBefore(after, toEnd = false, startIndex = 0) {
        let seen = [
            this
        ];
        function search(match, types) {
            let finished = match.matchFragment(after, startIndex);
            if (finished && (!toEnd || finished.validEnd)) return Fragment.from(types.map((tp)=>tp.createAndFill()));
            for(let i = 0; i < match.next.length; i++){
                let { type, next } = match.next[i];
                if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
                    seen.push(next);
                    let found = search(next, types.concat(type));
                    if (found) return found;
                }
            }
            return null;
        }
        return search(this, []);
    }
    /**
    Find a set of wrapping node types that would allow a node of the
    given type to appear at this position. The result may be empty
    (when it fits directly) and will be null when no such wrapping
    exists.
    */ findWrapping(target) {
        for(let i = 0; i < this.wrapCache.length; i += 2)if (this.wrapCache[i] == target) return this.wrapCache[i + 1];
        let computed = this.computeWrapping(target);
        this.wrapCache.push(target, computed);
        return computed;
    }
    /**
    @internal
    */ computeWrapping(target) {
        let seen = Object.create(null), active = [
            {
                match: this,
                type: null,
                via: null
            }
        ];
        while(active.length){
            let current = active.shift(), match = current.match;
            if (match.matchType(target)) {
                let result = [];
                for(let obj = current; obj.type; obj = obj.via)result.push(obj.type);
                return result.reverse();
            }
            for(let i = 0; i < match.next.length; i++){
                let { type, next } = match.next[i];
                if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || next.validEnd)) {
                    active.push({
                        match: type.contentMatch,
                        type,
                        via: current
                    });
                    seen[type.name] = true;
                }
            }
        }
        return null;
    }
    /**
    The number of outgoing edges this node has in the finite
    automaton that describes the content expression.
    */ get edgeCount() {
        return this.next.length;
    }
    /**
    Get the _n_​th outgoing edge from this node in the finite
    automaton that describes the content expression.
    */ edge(n) {
        if (n >= this.next.length) throw new RangeError(`There's no ${n}th edge in this content match`);
        return this.next[n];
    }
    /**
    @internal
    */ toString() {
        let seen = [];
        function scan(m) {
            seen.push(m);
            for(let i = 0; i < m.next.length; i++)if (seen.indexOf(m.next[i].next) == -1) scan(m.next[i].next);
        }
        scan(this);
        return seen.map((m, i)=>{
            let out = i + (m.validEnd ? "*" : " ") + " ";
            for(let i = 0; i < m.next.length; i++)out += (i ? ", " : "") + m.next[i].type.name + "->" + seen.indexOf(m.next[i].next);
            return out;
        }).join("\n");
    }
}
/**
@internal
*/ ContentMatch.empty = new ContentMatch(true);
class TokenStream {
    constructor(string, nodeTypes){
        this.string = string;
        this.nodeTypes = nodeTypes;
        this.inline = null;
        this.pos = 0;
        this.tokens = string.split(/\s*(?=\b|\W|$)/);
        if (this.tokens[this.tokens.length - 1] == "") this.tokens.pop();
        if (this.tokens[0] == "") this.tokens.shift();
    }
    get next() {
        return this.tokens[this.pos];
    }
    eat(tok) {
        return this.next == tok && (this.pos++ || true);
    }
    err(str) {
        throw new SyntaxError(str + " (in content expression '" + this.string + "')");
    }
}
function parseExpr(stream) {
    let exprs = [];
    do {
        exprs.push(parseExprSeq(stream));
    }while (stream.eat("|"))
    return exprs.length == 1 ? exprs[0] : {
        type: "choice",
        exprs
    };
}
function parseExprSeq(stream) {
    let exprs = [];
    do {
        exprs.push(parseExprSubscript(stream));
    }while (stream.next && stream.next != ")" && stream.next != "|")
    return exprs.length == 1 ? exprs[0] : {
        type: "seq",
        exprs
    };
}
function parseExprSubscript(stream) {
    let expr = parseExprAtom(stream);
    for(;;){
        if (stream.eat("+")) expr = {
            type: "plus",
            expr
        };
        else if (stream.eat("*")) expr = {
            type: "star",
            expr
        };
        else if (stream.eat("?")) expr = {
            type: "opt",
            expr
        };
        else if (stream.eat("{")) expr = parseExprRange(stream, expr);
        else break;
    }
    return expr;
}
function parseNum(stream) {
    if (/\D/.test(stream.next)) stream.err("Expected number, got '" + stream.next + "'");
    let result = Number(stream.next);
    stream.pos++;
    return result;
}
function parseExprRange(stream, expr) {
    let min = parseNum(stream), max = min;
    if (stream.eat(",")) {
        if (stream.next != "}") max = parseNum(stream);
        else max = -1;
    }
    if (!stream.eat("}")) stream.err("Unclosed braced range");
    return {
        type: "range",
        min,
        max,
        expr
    };
}
function resolveName(stream, name) {
    let types = stream.nodeTypes, type = types[name];
    if (type) return [
        type
    ];
    let result = [];
    for(let typeName in types){
        let type = types[typeName];
        if (type.isInGroup(name)) result.push(type);
    }
    if (result.length == 0) stream.err("No node type or group '" + name + "' found");
    return result;
}
function parseExprAtom(stream) {
    if (stream.eat("(")) {
        let expr = parseExpr(stream);
        if (!stream.eat(")")) stream.err("Missing closing paren");
        return expr;
    } else if (!/\W/.test(stream.next)) {
        let exprs = resolveName(stream, stream.next).map((type)=>{
            if (stream.inline == null) stream.inline = type.isInline;
            else if (stream.inline != type.isInline) stream.err("Mixing inline and block content");
            return {
                type: "name",
                value: type
            };
        });
        stream.pos++;
        return exprs.length == 1 ? exprs[0] : {
            type: "choice",
            exprs
        };
    } else {
        stream.err("Unexpected token '" + stream.next + "'");
    }
}
// Construct an NFA from an expression as returned by the parser. The
// NFA is represented as an array of states, which are themselves
// arrays of edges, which are `{term, to}` objects. The first state is
// the entry state and the last node is the success state.
//
// Note that unlike typical NFAs, the edge ordering in this one is
// significant, in that it is used to contruct filler content when
// necessary.
function nfa(expr) {
    let nfa = [
        []
    ];
    connect(compile(expr, 0), node());
    return nfa;
    //TURBOPACK unreachable
    ;
    function node() {
        return nfa.push([]) - 1;
    }
    function edge(from, to, term) {
        let edge = {
            term,
            to
        };
        nfa[from].push(edge);
        return edge;
    }
    function connect(edges, to) {
        edges.forEach((edge)=>edge.to = to);
    }
    function compile(expr, from) {
        if (expr.type == "choice") {
            return expr.exprs.reduce((out, expr)=>out.concat(compile(expr, from)), []);
        } else if (expr.type == "seq") {
            for(let i = 0;; i++){
                let next = compile(expr.exprs[i], from);
                if (i == expr.exprs.length - 1) return next;
                connect(next, from = node());
            }
        } else if (expr.type == "star") {
            let loop = node();
            edge(from, loop);
            connect(compile(expr.expr, loop), loop);
            return [
                edge(loop)
            ];
        } else if (expr.type == "plus") {
            let loop = node();
            connect(compile(expr.expr, from), loop);
            connect(compile(expr.expr, loop), loop);
            return [
                edge(loop)
            ];
        } else if (expr.type == "opt") {
            return [
                edge(from)
            ].concat(compile(expr.expr, from));
        } else if (expr.type == "range") {
            let cur = from;
            for(let i = 0; i < expr.min; i++){
                let next = node();
                connect(compile(expr.expr, cur), next);
                cur = next;
            }
            if (expr.max == -1) {
                connect(compile(expr.expr, cur), cur);
            } else {
                for(let i = expr.min; i < expr.max; i++){
                    let next = node();
                    edge(cur, next);
                    connect(compile(expr.expr, cur), next);
                    cur = next;
                }
            }
            return [
                edge(cur)
            ];
        } else if (expr.type == "name") {
            return [
                edge(from, undefined, expr.value)
            ];
        } else {
            throw new Error("Unknown expr type");
        }
    }
}
function cmp(a, b) {
    return b - a;
}
// Get the set of nodes reachable by null edges from `node`. Omit
// nodes with only a single null-out-edge, since they may lead to
// needless duplicated nodes.
function nullFrom(nfa, node) {
    let result = [];
    scan(node);
    return result.sort(cmp);
    //TURBOPACK unreachable
    ;
    function scan(node) {
        let edges = nfa[node];
        if (edges.length == 1 && !edges[0].term) return scan(edges[0].to);
        result.push(node);
        for(let i = 0; i < edges.length; i++){
            let { term, to } = edges[i];
            if (!term && result.indexOf(to) == -1) scan(to);
        }
    }
}
// Compiles an NFA as produced by `nfa` into a DFA, modeled as a set
// of state objects (`ContentMatch` instances) with transitions
// between them.
function dfa(nfa) {
    let labeled = Object.create(null);
    return explore(nullFrom(nfa, 0));
    //TURBOPACK unreachable
    ;
    function explore(states) {
        let out = [];
        states.forEach((node)=>{
            nfa[node].forEach(({ term, to })=>{
                if (!term) return;
                let set;
                for(let i = 0; i < out.length; i++)if (out[i][0] == term) set = out[i][1];
                nullFrom(nfa, to).forEach((node)=>{
                    if (!set) out.push([
                        term,
                        set = []
                    ]);
                    if (set.indexOf(node) == -1) set.push(node);
                });
            });
        });
        let state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa.length - 1) > -1);
        for(let i = 0; i < out.length; i++){
            let states = out[i][1].sort(cmp);
            state.next.push({
                type: out[i][0],
                next: labeled[states.join(",")] || explore(states)
            });
        }
        return state;
    }
}
function checkForDeadEnds(match, stream) {
    for(let i = 0, work = [
        match
    ]; i < work.length; i++){
        let state = work[i], dead = !state.validEnd, nodes = [];
        for(let j = 0; j < state.next.length; j++){
            let { type, next } = state.next[j];
            nodes.push(type.name);
            if (dead && !(type.isText || type.hasRequiredAttrs())) dead = false;
            if (work.indexOf(next) == -1) work.push(next);
        }
        if (dead) stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
    }
}
// For node types where all attrs have a default value (or which don't
// have any attributes), build up a single reusable default attribute
// object, and use it for all nodes that don't specify specific
// attributes.
function defaultAttrs(attrs) {
    let defaults = Object.create(null);
    for(let attrName in attrs){
        let attr = attrs[attrName];
        if (!attr.hasDefault) return null;
        defaults[attrName] = attr.default;
    }
    return defaults;
}
function computeAttrs(attrs, value) {
    let built = Object.create(null);
    for(let name in attrs){
        let given = value && value[name];
        if (given === undefined) {
            let attr = attrs[name];
            if (attr.hasDefault) given = attr.default;
            else throw new RangeError("No value supplied for attribute " + name);
        }
        built[name] = given;
    }
    return built;
}
function checkAttrs(attrs, values, type, name) {
    for(let attr in values)if (!(attr in attrs)) throw new RangeError(`Unsupported attribute ${attr} for ${type} of type ${name}`);
    for(let attr in attrs){
        if (attrs[attr].validate) attrs[attr].validate(values[attr]);
    }
}
function initAttrs(typeName, attrs) {
    let result = Object.create(null);
    if (attrs) for(let name in attrs)result[name] = new Attribute(typeName, name, attrs[name]);
    return result;
}
/**
Node types are objects allocated once per `Schema` and used to
[tag](https://prosemirror.net/docs/ref/#model.Node.type) `Node` instances. They contain information
about the node type, such as its name and what kind of node it
represents.
*/ class NodeType {
    /**
    @internal
    */ constructor(/**
    The name the node type has in this schema.
    */ name, /**
    A link back to the `Schema` the node type belongs to.
    */ schema, /**
    The spec that this type is based on
    */ spec){
        this.name = name;
        this.schema = schema;
        this.spec = spec;
        /**
        The set of marks allowed in this node. `null` means all marks
        are allowed.
        */ this.markSet = null;
        this.groups = spec.group ? spec.group.split(" ") : [];
        this.attrs = initAttrs(name, spec.attrs);
        this.defaultAttrs = defaultAttrs(this.attrs);
        this.contentMatch = null;
        this.inlineContent = null;
        this.isBlock = !(spec.inline || name == "text");
        this.isText = name == "text";
    }
    /**
    True if this is an inline type.
    */ get isInline() {
        return !this.isBlock;
    }
    /**
    True if this is a textblock type, a block that contains inline
    content.
    */ get isTextblock() {
        return this.isBlock && this.inlineContent;
    }
    /**
    True for node types that allow no content.
    */ get isLeaf() {
        return this.contentMatch == ContentMatch.empty;
    }
    /**
    True when this node is an atom, i.e. when it does not have
    directly editable content.
    */ get isAtom() {
        return this.isLeaf || !!this.spec.atom;
    }
    /**
    Return true when this node type is part of the given
    [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
    */ isInGroup(group) {
        return this.groups.indexOf(group) > -1;
    }
    /**
    The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
    */ get whitespace() {
        return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
    }
    /**
    Tells you whether this node type has any required attributes.
    */ hasRequiredAttrs() {
        for(let n in this.attrs)if (this.attrs[n].isRequired) return true;
        return false;
    }
    /**
    Indicates whether this node allows some of the same content as
    the given node type.
    */ compatibleContent(other) {
        return this == other || this.contentMatch.compatible(other.contentMatch);
    }
    /**
    @internal
    */ computeAttrs(attrs) {
        if (!attrs && this.defaultAttrs) return this.defaultAttrs;
        else return computeAttrs(this.attrs, attrs);
    }
    /**
    Create a `Node` of this type. The given attributes are
    checked and defaulted (you can pass `null` to use the type's
    defaults entirely, if no required attributes exist). `content`
    may be a `Fragment`, a node, an array of nodes, or
    `null`. Similarly `marks` may be `null` to default to the empty
    set of marks.
    */ create(attrs = null, content, marks) {
        if (this.isText) throw new Error("NodeType.create can't construct text nodes");
        return new Node(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks));
    }
    /**
    Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
    against the node type's content restrictions, and throw an error
    if it doesn't match.
    */ createChecked(attrs = null, content, marks) {
        content = Fragment.from(content);
        this.checkContent(content);
        return new Node(this, this.computeAttrs(attrs), content, Mark.setFrom(marks));
    }
    /**
    Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
    necessary to add nodes to the start or end of the given fragment
    to make it fit the node. If no fitting wrapping can be found,
    return null. Note that, due to the fact that required nodes can
    always be created, this will always succeed if you pass null or
    `Fragment.empty` as content.
    */ createAndFill(attrs = null, content, marks) {
        attrs = this.computeAttrs(attrs);
        content = Fragment.from(content);
        if (content.size) {
            let before = this.contentMatch.fillBefore(content);
            if (!before) return null;
            content = before.append(content);
        }
        let matched = this.contentMatch.matchFragment(content);
        let after = matched && matched.fillBefore(Fragment.empty, true);
        if (!after) return null;
        return new Node(this, attrs, content.append(after), Mark.setFrom(marks));
    }
    /**
    Returns true if the given fragment is valid content for this node
    type.
    */ validContent(content) {
        let result = this.contentMatch.matchFragment(content);
        if (!result || !result.validEnd) return false;
        for(let i = 0; i < content.childCount; i++)if (!this.allowsMarks(content.child(i).marks)) return false;
        return true;
    }
    /**
    Throws a RangeError if the given fragment is not valid content for this
    node type.
    @internal
    */ checkContent(content) {
        if (!this.validContent(content)) throw new RangeError(`Invalid content for node ${this.name}: ${content.toString().slice(0, 50)}`);
    }
    /**
    @internal
    */ checkAttrs(attrs) {
        checkAttrs(this.attrs, attrs, "node", this.name);
    }
    /**
    Check whether the given mark type is allowed in this node.
    */ allowsMarkType(markType) {
        return this.markSet == null || this.markSet.indexOf(markType) > -1;
    }
    /**
    Test whether the given set of marks are allowed in this node.
    */ allowsMarks(marks) {
        if (this.markSet == null) return true;
        for(let i = 0; i < marks.length; i++)if (!this.allowsMarkType(marks[i].type)) return false;
        return true;
    }
    /**
    Removes the marks that are not allowed in this node from the given set.
    */ allowedMarks(marks) {
        if (this.markSet == null) return marks;
        let copy;
        for(let i = 0; i < marks.length; i++){
            if (!this.allowsMarkType(marks[i].type)) {
                if (!copy) copy = marks.slice(0, i);
            } else if (copy) {
                copy.push(marks[i]);
            }
        }
        return !copy ? marks : copy.length ? copy : Mark.none;
    }
    /**
    @internal
    */ static compile(nodes, schema) {
        let result = Object.create(null);
        nodes.forEach((name, spec)=>result[name] = new NodeType(name, schema, spec));
        let topType = schema.spec.topNode || "doc";
        if (!result[topType]) throw new RangeError("Schema is missing its top node type ('" + topType + "')");
        if (!result.text) throw new RangeError("Every schema needs a 'text' type");
        for(let _ in result.text.attrs)throw new RangeError("The text node type should not have attributes");
        return result;
    }
}
function validateType(typeName, attrName, type) {
    let types = type.split("|");
    return (value)=>{
        let name = value === null ? "null" : typeof value;
        if (types.indexOf(name) < 0) throw new RangeError(`Expected value of type ${types} for attribute ${attrName} on type ${typeName}, got ${name}`);
    };
}
// Attribute descriptors
class Attribute {
    constructor(typeName, attrName, options){
        this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
        this.default = options.default;
        this.validate = typeof options.validate == "string" ? validateType(typeName, attrName, options.validate) : options.validate;
    }
    get isRequired() {
        return !this.hasDefault;
    }
}
// Marks
/**
Like nodes, marks (which are associated with nodes to signify
things like emphasis or being part of a link) are
[tagged](https://prosemirror.net/docs/ref/#model.Mark.type) with type objects, which are
instantiated once per `Schema`.
*/ class MarkType {
    /**
    @internal
    */ constructor(/**
    The name of the mark type.
    */ name, /**
    @internal
    */ rank, /**
    The schema that this mark type instance is part of.
    */ schema, /**
    The spec on which the type is based.
    */ spec){
        this.name = name;
        this.rank = rank;
        this.schema = schema;
        this.spec = spec;
        this.attrs = initAttrs(name, spec.attrs);
        this.excluded = null;
        let defaults = defaultAttrs(this.attrs);
        this.instance = defaults ? new Mark(this, defaults) : null;
    }
    /**
    Create a mark of this type. `attrs` may be `null` or an object
    containing only some of the mark's attributes. The others, if
    they have defaults, will be added.
    */ create(attrs = null) {
        if (!attrs && this.instance) return this.instance;
        return new Mark(this, computeAttrs(this.attrs, attrs));
    }
    /**
    @internal
    */ static compile(marks, schema) {
        let result = Object.create(null), rank = 0;
        marks.forEach((name, spec)=>result[name] = new MarkType(name, rank++, schema, spec));
        return result;
    }
    /**
    When there is a mark of this type in the given set, a new set
    without it is returned. Otherwise, the input set is returned.
    */ removeFromSet(set) {
        for(var i = 0; i < set.length; i++)if (set[i].type == this) {
            set = set.slice(0, i).concat(set.slice(i + 1));
            i--;
        }
        return set;
    }
    /**
    Tests whether there is a mark of this type in the given set.
    */ isInSet(set) {
        for(let i = 0; i < set.length; i++)if (set[i].type == this) return set[i];
    }
    /**
    @internal
    */ checkAttrs(attrs) {
        checkAttrs(this.attrs, attrs, "mark", this.name);
    }
    /**
    Queries whether a given mark type is
    [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
    */ excludes(other) {
        return this.excluded.indexOf(other) > -1;
    }
}
/**
A document schema. Holds [node](https://prosemirror.net/docs/ref/#model.NodeType) and [mark
type](https://prosemirror.net/docs/ref/#model.MarkType) objects for the nodes and marks that may
occur in conforming documents, and provides functionality for
creating and deserializing such documents.

When given, the type parameters provide the names of the nodes and
marks in this schema.
*/ class Schema {
    /**
    Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
    */ constructor(spec){
        /**
        The [linebreak
        replacement](https://prosemirror.net/docs/ref/#model.NodeSpec.linebreakReplacement) node defined
        in this schema, if any.
        */ this.linebreakReplacement = null;
        /**
        An object for storing whatever values modules may want to
        compute and cache per schema. (If you want to store something
        in it, try to use property names unlikely to clash.)
        */ this.cached = Object.create(null);
        let instanceSpec = this.spec = {};
        for(let prop in spec)instanceSpec[prop] = spec[prop];
        instanceSpec.nodes = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$orderedmap$40$2$2e$1$2e$1$2f$node_modules$2f$orderedmap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(spec.nodes), instanceSpec.marks = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$orderedmap$40$2$2e$1$2e$1$2f$node_modules$2f$orderedmap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(spec.marks || {}), this.nodes = NodeType.compile(this.spec.nodes, this);
        this.marks = MarkType.compile(this.spec.marks, this);
        let contentExprCache = Object.create(null);
        for(let prop in this.nodes){
            if (prop in this.marks) throw new RangeError(prop + " can not be both a node and a mark");
            let type = this.nodes[prop], contentExpr = type.spec.content || "", markExpr = type.spec.marks;
            type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
            type.inlineContent = type.contentMatch.inlineContent;
            if (type.spec.linebreakReplacement) {
                if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
                if (!type.isInline || !type.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
                this.linebreakReplacement = type;
            }
            type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
        }
        for(let prop in this.marks){
            let type = this.marks[prop], excl = type.spec.excludes;
            type.excluded = excl == null ? [
                type
            ] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
        }
        this.nodeFromJSON = (json)=>Node.fromJSON(this, json);
        this.markFromJSON = (json)=>Mark.fromJSON(this, json);
        this.topNodeType = this.nodes[this.spec.topNode || "doc"];
        this.cached.wrappings = Object.create(null);
    }
    /**
    Create a node in this schema. The `type` may be a string or a
    `NodeType` instance. Attributes will be extended with defaults,
    `content` may be a `Fragment`, `null`, a `Node`, or an array of
    nodes.
    */ node(type, attrs = null, content, marks) {
        if (typeof type == "string") type = this.nodeType(type);
        else if (!(type instanceof NodeType)) throw new RangeError("Invalid node type: " + type);
        else if (type.schema != this) throw new RangeError("Node type from different schema used (" + type.name + ")");
        return type.createChecked(attrs, content, marks);
    }
    /**
    Create a text node in the schema. Empty text nodes are not
    allowed.
    */ text(text, marks) {
        let type = this.nodes.text;
        return new TextNode(type, type.defaultAttrs, text, Mark.setFrom(marks));
    }
    /**
    Create a mark with the given type and attributes.
    */ mark(type, attrs) {
        if (typeof type == "string") type = this.marks[type];
        return type.create(attrs);
    }
    /**
    @internal
    */ nodeType(name) {
        let found = this.nodes[name];
        if (!found) throw new RangeError("Unknown node type: " + name);
        return found;
    }
}
function gatherMarks(schema, marks) {
    let found = [];
    for(let i = 0; i < marks.length; i++){
        let name = marks[i], mark = schema.marks[name], ok = mark;
        if (mark) {
            found.push(mark);
        } else {
            for(let prop in schema.marks){
                let mark = schema.marks[prop];
                if (name == "_" || mark.spec.group && mark.spec.group.split(" ").indexOf(name) > -1) found.push(ok = mark);
            }
        }
        if (!ok) throw new SyntaxError("Unknown mark type: '" + marks[i] + "'");
    }
    return found;
}
function isTagRule(rule) {
    return rule.tag != null;
}
function isStyleRule(rule) {
    return rule.style != null;
}
/**
A DOM parser represents a strategy for parsing DOM content into a
ProseMirror document conforming to a given schema. Its behavior is
defined by an array of [rules](https://prosemirror.net/docs/ref/#model.ParseRule).
*/ class DOMParser {
    /**
    Create a parser that targets the given schema, using the given
    parsing rules.
    */ constructor(/**
    The schema into which the parser parses.
    */ schema, /**
    The set of [parse rules](https://prosemirror.net/docs/ref/#model.ParseRule) that the parser
    uses, in order of precedence.
    */ rules){
        this.schema = schema;
        this.rules = rules;
        /**
        @internal
        */ this.tags = [];
        /**
        @internal
        */ this.styles = [];
        let matchedStyles = this.matchedStyles = [];
        rules.forEach((rule)=>{
            if (isTagRule(rule)) {
                this.tags.push(rule);
            } else if (isStyleRule(rule)) {
                let prop = /[^=]*/.exec(rule.style)[0];
                if (matchedStyles.indexOf(prop) < 0) matchedStyles.push(prop);
                this.styles.push(rule);
            }
        });
        // Only normalize list elements when lists in the schema can't directly contain themselves
        this.normalizeLists = !this.tags.some((r)=>{
            if (!/^(ul|ol)\b/.test(r.tag) || !r.node) return false;
            let node = schema.nodes[r.node];
            return node.contentMatch.matchType(node);
        });
    }
    /**
    Parse a document from the content of a DOM node.
    */ parse(dom, options = {}) {
        let context = new ParseContext(this, options, false);
        context.addAll(dom, Mark.none, options.from, options.to);
        return context.finish();
    }
    /**
    Parses the content of the given DOM node, like
    [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
    options. But unlike that method, which produces a whole node,
    this one returns a slice that is open at the sides, meaning that
    the schema constraints aren't applied to the start of nodes to
    the left of the input and the end of nodes at the end.
    */ parseSlice(dom, options = {}) {
        let context = new ParseContext(this, options, true);
        context.addAll(dom, Mark.none, options.from, options.to);
        return Slice.maxOpen(context.finish());
    }
    /**
    @internal
    */ matchTag(dom, context, after) {
        for(let i = after ? this.tags.indexOf(after) + 1 : 0; i < this.tags.length; i++){
            let rule = this.tags[i];
            if (matches(dom, rule.tag) && (rule.namespace === undefined || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
                if (rule.getAttrs) {
                    let result = rule.getAttrs(dom);
                    if (result === false) continue;
                    rule.attrs = result || undefined;
                }
                return rule;
            }
        }
    }
    /**
    @internal
    */ matchStyle(prop, value, context, after) {
        for(let i = after ? this.styles.indexOf(after) + 1 : 0; i < this.styles.length; i++){
            let rule = this.styles[i], style = rule.style;
            if (style.indexOf(prop) != 0 || rule.context && !context.matchesContext(rule.context) || // Test that the style string either precisely matches the prop,
            // or has an '=' sign after the prop, followed by the given
            // value.
            style.length > prop.length && (style.charCodeAt(prop.length) != 61 || style.slice(prop.length + 1) != value)) continue;
            if (rule.getAttrs) {
                let result = rule.getAttrs(value);
                if (result === false) continue;
                rule.attrs = result || undefined;
            }
            return rule;
        }
    }
    /**
    @internal
    */ static schemaRules(schema) {
        let result = [];
        function insert(rule) {
            let priority = rule.priority == null ? 50 : rule.priority, i = 0;
            for(; i < result.length; i++){
                let next = result[i], nextPriority = next.priority == null ? 50 : next.priority;
                if (nextPriority < priority) break;
            }
            result.splice(i, 0, rule);
        }
        for(let name in schema.marks){
            let rules = schema.marks[name].spec.parseDOM;
            if (rules) rules.forEach((rule)=>{
                insert(rule = copy(rule));
                if (!(rule.mark || rule.ignore || rule.clearMark)) rule.mark = name;
            });
        }
        for(let name in schema.nodes){
            let rules = schema.nodes[name].spec.parseDOM;
            if (rules) rules.forEach((rule)=>{
                insert(rule = copy(rule));
                if (!(rule.node || rule.ignore || rule.mark)) rule.node = name;
            });
        }
        return result;
    }
    /**
    Construct a DOM parser using the parsing rules listed in a
    schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
    [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
    */ static fromSchema(schema) {
        return schema.cached.domParser || (schema.cached.domParser = new DOMParser(schema, DOMParser.schemaRules(schema)));
    }
}
const blockTags = {
    address: true,
    article: true,
    aside: true,
    blockquote: true,
    body: true,
    canvas: true,
    dd: true,
    div: true,
    dl: true,
    fieldset: true,
    figcaption: true,
    figure: true,
    footer: true,
    form: true,
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    h5: true,
    h6: true,
    header: true,
    hgroup: true,
    hr: true,
    li: true,
    noscript: true,
    ol: true,
    output: true,
    p: true,
    pre: true,
    section: true,
    table: true,
    tfoot: true,
    ul: true
};
const ignoreTags = {
    head: true,
    noscript: true,
    object: true,
    script: true,
    style: true,
    title: true
};
const listTags = {
    ol: true,
    ul: true
};
// Using a bitfield for node context options
const OPT_PRESERVE_WS = 1, OPT_PRESERVE_WS_FULL = 2, OPT_OPEN_LEFT = 4;
function wsOptionsFor(type, preserveWhitespace, base) {
    if (preserveWhitespace != null) return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
    return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base & ~OPT_OPEN_LEFT;
}
class NodeContext {
    constructor(type, attrs, marks, solid, match, options){
        this.type = type;
        this.attrs = attrs;
        this.marks = marks;
        this.solid = solid;
        this.options = options;
        this.content = [];
        // Marks applied to the node's children
        this.activeMarks = Mark.none;
        this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
    }
    findWrapping(node) {
        if (!this.match) {
            if (!this.type) return [];
            let fill = this.type.contentMatch.fillBefore(Fragment.from(node));
            if (fill) {
                this.match = this.type.contentMatch.matchFragment(fill);
            } else {
                let start = this.type.contentMatch, wrap;
                if (wrap = start.findWrapping(node.type)) {
                    this.match = start;
                    return wrap;
                } else {
                    return null;
                }
            }
        }
        return this.match.findWrapping(node.type);
    }
    finish(openEnd) {
        if (!(this.options & OPT_PRESERVE_WS)) {
            let last = this.content[this.content.length - 1], m;
            if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
                let text = last;
                if (last.text.length == m[0].length) this.content.pop();
                else this.content[this.content.length - 1] = text.withText(text.text.slice(0, text.text.length - m[0].length));
            }
        }
        let content = Fragment.from(this.content);
        if (!openEnd && this.match) content = content.append(this.match.fillBefore(Fragment.empty, true));
        return this.type ? this.type.create(this.attrs, content, this.marks) : content;
    }
    inlineContext(node) {
        if (this.type) return this.type.inlineContent;
        if (this.content.length) return this.content[0].isInline;
        return node.parentNode && !blockTags.hasOwnProperty(node.parentNode.nodeName.toLowerCase());
    }
}
class ParseContext {
    constructor(// The parser we are using.
    parser, // The options passed to this parse.
    options, isOpen){
        this.parser = parser;
        this.options = options;
        this.isOpen = isOpen;
        this.open = 0;
        this.localPreserveWS = false;
        let topNode = options.topNode, topContext;
        let topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (isOpen ? OPT_OPEN_LEFT : 0);
        if (topNode) topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, true, options.topMatch || topNode.type.contentMatch, topOptions);
        else if (isOpen) topContext = new NodeContext(null, null, Mark.none, true, null, topOptions);
        else topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, true, null, topOptions);
        this.nodes = [
            topContext
        ];
        this.find = options.findPositions;
        this.needsBlock = false;
    }
    get top() {
        return this.nodes[this.open];
    }
    // Add a DOM node to the content. Text is inserted as text node,
    // otherwise, the node is passed to `addElement` or, if it has a
    // `style` attribute, `addElementWithStyles`.
    addDOM(dom, marks) {
        if (dom.nodeType == 3) this.addTextNode(dom, marks);
        else if (dom.nodeType == 1) this.addElement(dom, marks);
    }
    addTextNode(dom, marks) {
        let value = dom.nodeValue;
        let top = this.top, preserveWS = top.options & OPT_PRESERVE_WS_FULL ? "full" : this.localPreserveWS || (top.options & OPT_PRESERVE_WS) > 0;
        let { schema } = this.parser;
        if (preserveWS === "full" || top.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value)) {
            if (!preserveWS) {
                value = value.replace(/[ \t\r\n\u000c]+/g, " ");
                // If this starts with whitespace, and there is no node before it, or
                // a hard break, or a text node that ends with whitespace, strip the
                // leading space.
                if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
                    let nodeBefore = top.content[top.content.length - 1];
                    let domNodeBefore = dom.previousSibling;
                    if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == 'BR' || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text)) value = value.slice(1);
                }
            } else if (preserveWS === "full") {
                value = value.replace(/\r\n?/g, "\n");
            } else if (schema.linebreakReplacement && /[\r\n]/.test(value) && this.top.findWrapping(schema.linebreakReplacement.create())) {
                let lines = value.split(/\r?\n|\r/);
                for(let i = 0; i < lines.length; i++){
                    if (i) this.insertNode(schema.linebreakReplacement.create(), marks, true);
                    if (lines[i]) this.insertNode(schema.text(lines[i]), marks, !/\S/.test(lines[i]));
                }
                value = "";
            } else {
                value = value.replace(/\r?\n|\r/g, " ");
            }
            if (value) this.insertNode(schema.text(value), marks, !/\S/.test(value));
            this.findInText(dom);
        } else {
            this.findInside(dom);
        }
    }
    // Try to find a handler for the given tag and use that to parse. If
    // none is found, the element's content nodes are added directly.
    addElement(dom, marks, matchAfter) {
        let outerWS = this.localPreserveWS, top = this.top;
        if (dom.tagName == "PRE" || /pre/.test(dom.style && dom.style.whiteSpace)) this.localPreserveWS = true;
        let name = dom.nodeName.toLowerCase(), ruleID;
        if (listTags.hasOwnProperty(name) && this.parser.normalizeLists) normalizeList(dom);
        let rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));
        out: if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
            this.findInside(dom);
            this.ignoreFallback(dom, marks);
        } else if (!rule || rule.skip || rule.closeParent) {
            if (rule && rule.closeParent) this.open = Math.max(0, this.open - 1);
            else if (rule && rule.skip.nodeType) dom = rule.skip;
            let sync, oldNeedsBlock = this.needsBlock;
            if (blockTags.hasOwnProperty(name)) {
                if (top.content.length && top.content[0].isInline && this.open) {
                    this.open--;
                    top = this.top;
                }
                sync = true;
                if (!top.type) this.needsBlock = true;
            } else if (!dom.firstChild) {
                this.leafFallback(dom, marks);
                break out;
            }
            let innerMarks = rule && rule.skip ? marks : this.readStyles(dom, marks);
            if (innerMarks) this.addAll(dom, innerMarks);
            if (sync) this.sync(top);
            this.needsBlock = oldNeedsBlock;
        } else {
            let innerMarks = this.readStyles(dom, marks);
            if (innerMarks) this.addElementByRule(dom, rule, innerMarks, rule.consuming === false ? ruleID : undefined);
        }
        this.localPreserveWS = outerWS;
    }
    // Called for leaf DOM nodes that would otherwise be ignored
    leafFallback(dom, marks) {
        if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent) this.addTextNode(dom.ownerDocument.createTextNode("\n"), marks);
    }
    // Called for ignored nodes
    ignoreFallback(dom, marks) {
        // Ignored BR nodes should at least create an inline context
        if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent)) this.findPlace(this.parser.schema.text("-"), marks, true);
    }
    // Run any style parser associated with the node's styles. Either
    // return an updated array of marks, or null to indicate some of the
    // styles had a rule with `ignore` set.
    readStyles(dom, marks) {
        let styles = dom.style;
        // Because many properties will only show up in 'normalized' form
        // in `style.item` (i.e. text-decoration becomes
        // text-decoration-line, text-decoration-color, etc), we directly
        // query the styles mentioned in our rules instead of iterating
        // over the items.
        if (styles && styles.length) for(let i = 0; i < this.parser.matchedStyles.length; i++){
            let name = this.parser.matchedStyles[i], value = styles.getPropertyValue(name);
            if (value) for(let after = undefined;;){
                let rule = this.parser.matchStyle(name, value, this, after);
                if (!rule) break;
                if (rule.ignore) return null;
                if (rule.clearMark) marks = marks.filter((m)=>!rule.clearMark(m));
                else marks = marks.concat(this.parser.schema.marks[rule.mark].create(rule.attrs));
                if (rule.consuming === false) after = rule;
                else break;
            }
        }
        return marks;
    }
    // Look up a handler for the given node. If none are found, return
    // false. Otherwise, apply it, use its return value to drive the way
    // the node's content is wrapped, and return true.
    addElementByRule(dom, rule, marks, continueAfter) {
        let sync, nodeType;
        if (rule.node) {
            nodeType = this.parser.schema.nodes[rule.node];
            if (!nodeType.isLeaf) {
                let inner = this.enter(nodeType, rule.attrs || null, marks, rule.preserveWhitespace);
                if (inner) {
                    sync = true;
                    marks = inner;
                }
            } else if (!this.insertNode(nodeType.create(rule.attrs), marks, dom.nodeName == "BR")) {
                this.leafFallback(dom, marks);
            }
        } else {
            let markType = this.parser.schema.marks[rule.mark];
            marks = marks.concat(markType.create(rule.attrs));
        }
        let startIn = this.top;
        if (nodeType && nodeType.isLeaf) {
            this.findInside(dom);
        } else if (continueAfter) {
            this.addElement(dom, marks, continueAfter);
        } else if (rule.getContent) {
            this.findInside(dom);
            rule.getContent(dom, this.parser.schema).forEach((node)=>this.insertNode(node, marks, false));
        } else {
            let contentDOM = dom;
            if (typeof rule.contentElement == "string") contentDOM = dom.querySelector(rule.contentElement);
            else if (typeof rule.contentElement == "function") contentDOM = rule.contentElement(dom);
            else if (rule.contentElement) contentDOM = rule.contentElement;
            this.findAround(dom, contentDOM, true);
            this.addAll(contentDOM, marks);
            this.findAround(dom, contentDOM, false);
        }
        if (sync && this.sync(startIn)) this.open--;
    }
    // Add all child nodes between `startIndex` and `endIndex` (or the
    // whole node, if not given). If `sync` is passed, use it to
    // synchronize after every block element.
    addAll(parent, marks, startIndex, endIndex) {
        let index = startIndex || 0;
        for(let dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end = endIndex == null ? null : parent.childNodes[endIndex]; dom != end; dom = dom.nextSibling, ++index){
            this.findAtPoint(parent, index);
            this.addDOM(dom, marks);
        }
        this.findAtPoint(parent, index);
    }
    // Try to find a way to fit the given node type into the current
    // context. May add intermediate wrappers and/or leave non-solid
    // nodes that we're in.
    findPlace(node, marks, cautious) {
        let route, sync;
        for(let depth = this.open, penalty = 0; depth >= 0; depth--){
            let cx = this.nodes[depth];
            let found = cx.findWrapping(node);
            if (found && (!route || route.length > found.length + penalty)) {
                route = found;
                sync = cx;
                if (!found.length) break;
            }
            if (cx.solid) {
                if (cautious) break;
                penalty += 2;
            }
        }
        if (!route) return null;
        this.sync(sync);
        for(let i = 0; i < route.length; i++)marks = this.enterInner(route[i], null, marks, false);
        return marks;
    }
    // Try to insert the given node, adjusting the context when needed.
    insertNode(node, marks, cautious) {
        if (node.isInline && this.needsBlock && !this.top.type) {
            let block = this.textblockFromContext();
            if (block) marks = this.enterInner(block, null, marks);
        }
        let innerMarks = this.findPlace(node, marks, cautious);
        if (innerMarks) {
            this.closeExtra();
            let top = this.top;
            if (top.match) top.match = top.match.matchType(node.type);
            let nodeMarks = Mark.none;
            for (let m of innerMarks.concat(node.marks))if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, node.type)) nodeMarks = m.addToSet(nodeMarks);
            top.content.push(node.mark(nodeMarks));
            return true;
        }
        return false;
    }
    // Try to start a node of the given type, adjusting the context when
    // necessary.
    enter(type, attrs, marks, preserveWS) {
        let innerMarks = this.findPlace(type.create(attrs), marks, false);
        if (innerMarks) innerMarks = this.enterInner(type, attrs, marks, true, preserveWS);
        return innerMarks;
    }
    // Open a node of the given type
    enterInner(type, attrs, marks, solid = false, preserveWS) {
        this.closeExtra();
        let top = this.top;
        top.match = top.match && top.match.matchType(type);
        let options = wsOptionsFor(type, preserveWS, top.options);
        if (top.options & OPT_OPEN_LEFT && top.content.length == 0) options |= OPT_OPEN_LEFT;
        let applyMarks = Mark.none;
        marks = marks.filter((m)=>{
            if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, type)) {
                applyMarks = m.addToSet(applyMarks);
                return false;
            }
            return true;
        });
        this.nodes.push(new NodeContext(type, attrs, applyMarks, solid, null, options));
        this.open++;
        return marks;
    }
    // Make sure all nodes above this.open are finished and added to
    // their parents
    closeExtra(openEnd = false) {
        let i = this.nodes.length - 1;
        if (i > this.open) {
            for(; i > this.open; i--)this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
            this.nodes.length = this.open + 1;
        }
    }
    finish() {
        this.open = 0;
        this.closeExtra(this.isOpen);
        return this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
    }
    sync(to) {
        for(let i = this.open; i >= 0; i--){
            if (this.nodes[i] == to) {
                this.open = i;
                return true;
            } else if (this.localPreserveWS) {
                this.nodes[i].options |= OPT_PRESERVE_WS;
            }
        }
        return false;
    }
    get currentPos() {
        this.closeExtra();
        let pos = 0;
        for(let i = this.open; i >= 0; i--){
            let content = this.nodes[i].content;
            for(let j = content.length - 1; j >= 0; j--)pos += content[j].nodeSize;
            if (i) pos++;
        }
        return pos;
    }
    findAtPoint(parent, offset) {
        if (this.find) for(let i = 0; i < this.find.length; i++){
            if (this.find[i].node == parent && this.find[i].offset == offset) this.find[i].pos = this.currentPos;
        }
    }
    findInside(parent) {
        if (this.find) for(let i = 0; i < this.find.length; i++){
            if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) this.find[i].pos = this.currentPos;
        }
    }
    findAround(parent, content, before) {
        if (parent != content && this.find) for(let i = 0; i < this.find.length; i++){
            if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
                let pos = content.compareDocumentPosition(this.find[i].node);
                if (pos & (before ? 2 : 4)) this.find[i].pos = this.currentPos;
            }
        }
    }
    findInText(textNode) {
        if (this.find) for(let i = 0; i < this.find.length; i++){
            if (this.find[i].node == textNode) this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
        }
    }
    // Determines whether the given context string matches this context.
    matchesContext(context) {
        if (context.indexOf("|") > -1) return context.split(/\s*\|\s*/).some(this.matchesContext, this);
        let parts = context.split("/");
        let option = this.options.context;
        let useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
        let minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
        let match = (i, depth)=>{
            for(; i >= 0; i--){
                let part = parts[i];
                if (part == "") {
                    if (i == parts.length - 1 || i == 0) continue;
                    for(; depth >= minDepth; depth--)if (match(i - 1, depth)) return true;
                    return false;
                } else {
                    let next = depth > 0 || depth == 0 && useRoot ? this.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
                    if (!next || next.name != part && !next.isInGroup(part)) return false;
                    depth--;
                }
            }
            return true;
        };
        return match(parts.length - 1, this.open);
    }
    textblockFromContext() {
        let $context = this.options.context;
        if ($context) for(let d = $context.depth; d >= 0; d--){
            let deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
            if (deflt && deflt.isTextblock && deflt.defaultAttrs) return deflt;
        }
        for(let name in this.parser.schema.nodes){
            let type = this.parser.schema.nodes[name];
            if (type.isTextblock && type.defaultAttrs) return type;
        }
    }
}
// Kludge to work around directly nested list nodes produced by some
// tools and allowed by browsers to mean that the nested list is
// actually part of the list item above it.
function normalizeList(dom) {
    for(let child = dom.firstChild, prevItem = null; child; child = child.nextSibling){
        let name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
        if (name && listTags.hasOwnProperty(name) && prevItem) {
            prevItem.appendChild(child);
            child = prevItem;
        } else if (name == "li") {
            prevItem = child;
        } else if (name) {
            prevItem = null;
        }
    }
}
// Apply a CSS selector.
function matches(dom, selector) {
    return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
}
function copy(obj) {
    let copy = {};
    for(let prop in obj)copy[prop] = obj[prop];
    return copy;
}
// Used when finding a mark at the top level of a fragment parse.
// Checks whether it would be reasonable to apply a given mark type to
// a given node, by looking at the way the mark occurs in the schema.
function markMayApply(markType, nodeType) {
    let nodes = nodeType.schema.nodes;
    for(let name in nodes){
        let parent = nodes[name];
        if (!parent.allowsMarkType(markType)) continue;
        let seen = [], scan = (match)=>{
            seen.push(match);
            for(let i = 0; i < match.edgeCount; i++){
                let { type, next } = match.edge(i);
                if (type == nodeType) return true;
                if (seen.indexOf(next) < 0 && scan(next)) return true;
            }
        };
        if (scan(parent.contentMatch)) return true;
    }
}
/**
A DOM serializer knows how to convert ProseMirror nodes and
marks of various types to DOM nodes.
*/ class DOMSerializer {
    /**
    Create a serializer. `nodes` should map node names to functions
    that take a node and return a description of the corresponding
    DOM. `marks` does the same for mark names, but also gets an
    argument that tells it whether the mark's content is block or
    inline content (for typical use, it'll always be inline). A mark
    serializer may be `null` to indicate that marks of that type
    should not be serialized.
    */ constructor(/**
    The node serialization functions.
    */ nodes, /**
    The mark serialization functions.
    */ marks){
        this.nodes = nodes;
        this.marks = marks;
    }
    /**
    Serialize the content of this fragment to a DOM fragment. When
    not in the browser, the `document` option, containing a DOM
    document, should be passed so that the serializer can create
    nodes.
    */ serializeFragment(fragment, options = {}, target) {
        if (!target) target = doc(options).createDocumentFragment();
        let top = target, active = [];
        fragment.forEach((node)=>{
            if (active.length || node.marks.length) {
                let keep = 0, rendered = 0;
                while(keep < active.length && rendered < node.marks.length){
                    let next = node.marks[rendered];
                    if (!this.marks[next.type.name]) {
                        rendered++;
                        continue;
                    }
                    if (!next.eq(active[keep][0]) || next.type.spec.spanning === false) break;
                    keep++;
                    rendered++;
                }
                while(keep < active.length)top = active.pop()[1];
                while(rendered < node.marks.length){
                    let add = node.marks[rendered++];
                    let markDOM = this.serializeMark(add, node.isInline, options);
                    if (markDOM) {
                        active.push([
                            add,
                            top
                        ]);
                        top.appendChild(markDOM.dom);
                        top = markDOM.contentDOM || markDOM.dom;
                    }
                }
            }
            top.appendChild(this.serializeNodeInner(node, options));
        });
        return target;
    }
    /**
    @internal
    */ serializeNodeInner(node, options) {
        if (node.isText) return doc(options).createTextNode(node.text);
        let { dom, contentDOM } = renderSpec(doc(options), this.nodes[node.type.name](node), null, node.attrs);
        if (contentDOM) {
            if (node.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(node.content, options, contentDOM);
        }
        return dom;
    }
    /**
    Serialize this node to a DOM node. This can be useful when you
    need to serialize a part of a document, as opposed to the whole
    document. To serialize a whole document, use
    [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
    its [content](https://prosemirror.net/docs/ref/#model.Node.content).
    */ serializeNode(node, options = {}) {
        let dom = this.serializeNodeInner(node, options);
        for(let i = node.marks.length - 1; i >= 0; i--){
            let wrap = this.serializeMark(node.marks[i], node.isInline, options);
            if (wrap) {
                (wrap.contentDOM || wrap.dom).appendChild(dom);
                dom = wrap.dom;
            }
        }
        return dom;
    }
    /**
    @internal
    */ serializeMark(mark, inline, options = {}) {
        let toDOM = this.marks[mark.type.name];
        return toDOM && renderSpec(doc(options), toDOM(mark, inline), null, mark.attrs);
    }
    static renderSpec(doc, structure, xmlNS = null, blockArraysIn) {
        // Kludge for backwards-compatibility with accidental original behavious
        if (typeof structure == "string") return {
            dom: doc.createTextNode(structure)
        };
        return renderSpec(doc, structure, xmlNS, blockArraysIn);
    }
    /**
    Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
    properties in a schema's node and mark specs.
    */ static fromSchema(schema) {
        return schema.cached.domSerializer || (schema.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)));
    }
    /**
    Gather the serializers in a schema's node specs into an object.
    This can be useful as a base to build a custom serializer from.
    */ static nodesFromSchema(schema) {
        let result = gatherToDOM(schema.nodes);
        if (!result.text) result.text = (node)=>node.text;
        return result;
    }
    /**
    Gather the serializers in a schema's mark specs into an object.
    */ static marksFromSchema(schema) {
        return gatherToDOM(schema.marks);
    }
}
function gatherToDOM(obj) {
    let result = {};
    for(let name in obj){
        let toDOM = obj[name].spec.toDOM;
        if (toDOM) result[name] = toDOM;
    }
    return result;
}
function doc(options) {
    return options.document || window.document;
}
const suspiciousAttributeCache = new WeakMap();
function suspiciousAttributes(attrs) {
    let value = suspiciousAttributeCache.get(attrs);
    if (value === undefined) suspiciousAttributeCache.set(attrs, value = suspiciousAttributesInner(attrs));
    return value;
}
function suspiciousAttributesInner(attrs) {
    let result = null;
    function scan(value) {
        if (value && typeof value == "object") {
            if (Array.isArray(value)) {
                if (typeof value[0] == "string") {
                    if (!result) result = [];
                    result.push(value);
                } else {
                    for(let i = 0; i < value.length; i++)scan(value[i]);
                }
            } else {
                for(let prop in value)scan(value[prop]);
            }
        }
    }
    scan(attrs);
    return result;
}
function renderSpec(doc, structure, xmlNS, blockArraysIn) {
    if (structure.nodeType == 1) return {
        dom: structure
    };
    if (structure.dom && structure.dom.nodeType == 1) return structure;
    let tagName = structure[0], suspicious;
    if (typeof tagName != "string") throw new RangeError("Invalid array passed to renderSpec");
    if (blockArraysIn && (suspicious = suspiciousAttributes(blockArraysIn)) && suspicious.indexOf(structure) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
    let space = tagName.indexOf(" ");
    if (space > 0) {
        xmlNS = tagName.slice(0, space);
        tagName = tagName.slice(space + 1);
    }
    let contentDOM;
    let dom = xmlNS ? doc.createElementNS(xmlNS, tagName) : doc.createElement(tagName);
    let attrs = structure[1], start = 1;
    if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
        start = 2;
        for(let name in attrs)if (attrs[name] != null) {
            let space = name.indexOf(" ");
            if (space > 0) dom.setAttributeNS(name.slice(0, space), name.slice(space + 1), attrs[name]);
            else if (name == "style" && dom.style) dom.style.cssText = attrs[name];
            else dom.setAttribute(name, attrs[name]);
        }
    }
    for(let i = start; i < structure.length; i++){
        let child = structure[i];
        if (child === 0) {
            if (i < structure.length - 1 || i > start) throw new RangeError("Content hole must be the only child of its parent node");
            return {
                dom,
                contentDOM: dom
            };
        } else if (typeof child == "string") {
            dom.appendChild(doc.createTextNode(child));
        } else {
            let { dom: inner, contentDOM: innerContent } = renderSpec(doc, child, xmlNS, blockArraysIn);
            dom.appendChild(inner);
            if (innerContent) {
                if (contentDOM) throw new RangeError("Multiple content holes");
                contentDOM = innerContent;
            }
        }
    }
    return {
        dom,
        contentDOM
    };
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddMarkStep",
    ()=>AddMarkStep,
    "AddNodeMarkStep",
    ()=>AddNodeMarkStep,
    "AttrStep",
    ()=>AttrStep,
    "DocAttrStep",
    ()=>DocAttrStep,
    "MapResult",
    ()=>MapResult,
    "Mapping",
    ()=>Mapping,
    "RemoveMarkStep",
    ()=>RemoveMarkStep,
    "RemoveNodeMarkStep",
    ()=>RemoveNodeMarkStep,
    "ReplaceAroundStep",
    ()=>ReplaceAroundStep,
    "ReplaceStep",
    ()=>ReplaceStep,
    "Step",
    ()=>Step,
    "StepMap",
    ()=>StepMap,
    "StepResult",
    ()=>StepResult,
    "Transform",
    ()=>Transform,
    "TransformError",
    ()=>TransformError,
    "canJoin",
    ()=>canJoin,
    "canSplit",
    ()=>canSplit,
    "dropPoint",
    ()=>dropPoint,
    "findWrapping",
    ()=>findWrapping,
    "insertPoint",
    ()=>insertPoint,
    "joinPoint",
    ()=>joinPoint,
    "liftTarget",
    ()=>liftTarget,
    "replaceStep",
    ()=>replaceStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
;
// Recovery values encode a range index and an offset. They are
// represented as numbers, because tons of them will be created when
// mapping, for example, a large number of decorations. The number's
// lower 16 bits provide the index, the remaining bits the offset.
//
// Note: We intentionally don't use bit shift operators to en- and
// decode these, since those clip to 32 bits, which we might in rare
// cases want to overflow. A 64-bit float can represent 48-bit
// integers precisely.
const lower16 = 0xffff;
const factor16 = Math.pow(2, 16);
function makeRecover(index, offset) {
    return index + offset * factor16;
}
function recoverIndex(value) {
    return value & lower16;
}
function recoverOffset(value) {
    return (value - (value & lower16)) / factor16;
}
const DEL_BEFORE = 1, DEL_AFTER = 2, DEL_ACROSS = 4, DEL_SIDE = 8;
/**
An object representing a mapped position with extra
information.
*/ class MapResult {
    /**
    @internal
    */ constructor(/**
    The mapped version of the position.
    */ pos, /**
    @internal
    */ delInfo, /**
    @internal
    */ recover){
        this.pos = pos;
        this.delInfo = delInfo;
        this.recover = recover;
    }
    /**
    Tells you whether the position was deleted, that is, whether the
    step removed the token on the side queried (via the `assoc`)
    argument from the document.
    */ get deleted() {
        return (this.delInfo & DEL_SIDE) > 0;
    }
    /**
    Tells you whether the token before the mapped position was deleted.
    */ get deletedBefore() {
        return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
    }
    /**
    True when the token after the mapped position was deleted.
    */ get deletedAfter() {
        return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
    }
    /**
    Tells whether any of the steps mapped through deletes across the
    position (including both the token before and after the
    position).
    */ get deletedAcross() {
        return (this.delInfo & DEL_ACROSS) > 0;
    }
}
/**
A map describing the deletions and insertions made by a step, which
can be used to find the correspondence between positions in the
pre-step version of a document and the same position in the
post-step version.
*/ class StepMap {
    /**
    Create a position map. The modifications to the document are
    represented as an array of numbers, in which each group of three
    represents a modified chunk as `[start, oldSize, newSize]`.
    */ constructor(/**
    @internal
    */ ranges, /**
    @internal
    */ inverted = false){
        this.ranges = ranges;
        this.inverted = inverted;
        if (!ranges.length && StepMap.empty) return StepMap.empty;
    }
    /**
    @internal
    */ recover(value) {
        let diff = 0, index = recoverIndex(value);
        if (!this.inverted) for(let i = 0; i < index; i++)diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
        return this.ranges[index * 3] + diff + recoverOffset(value);
    }
    mapResult(pos, assoc = 1) {
        return this._map(pos, assoc, false);
    }
    map(pos, assoc = 1) {
        return this._map(pos, assoc, true);
    }
    /**
    @internal
    */ _map(pos, assoc, simple) {
        let diff = 0, oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
        for(let i = 0; i < this.ranges.length; i += 3){
            let start = this.ranges[i] - (this.inverted ? diff : 0);
            if (start > pos) break;
            let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex], end = start + oldSize;
            if (pos <= end) {
                let side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
                let result = start + diff + (side < 0 ? 0 : newSize);
                if (simple) return result;
                let recover = pos == (assoc < 0 ? start : end) ? null : makeRecover(i / 3, pos - start);
                let del = pos == start ? DEL_AFTER : pos == end ? DEL_BEFORE : DEL_ACROSS;
                if (assoc < 0 ? pos != start : pos != end) del |= DEL_SIDE;
                return new MapResult(result, del, recover);
            }
            diff += newSize - oldSize;
        }
        return simple ? pos + diff : new MapResult(pos + diff, 0, null);
    }
    /**
    @internal
    */ touches(pos, recover) {
        let diff = 0, index = recoverIndex(recover);
        let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
        for(let i = 0; i < this.ranges.length; i += 3){
            let start = this.ranges[i] - (this.inverted ? diff : 0);
            if (start > pos) break;
            let oldSize = this.ranges[i + oldIndex], end = start + oldSize;
            if (pos <= end && i == index * 3) return true;
            diff += this.ranges[i + newIndex] - oldSize;
        }
        return false;
    }
    /**
    Calls the given function on each of the changed ranges included in
    this map.
    */ forEach(f) {
        let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
        for(let i = 0, diff = 0; i < this.ranges.length; i += 3){
            let start = this.ranges[i], oldStart = start - (this.inverted ? diff : 0), newStart = start + (this.inverted ? 0 : diff);
            let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex];
            f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
            diff += newSize - oldSize;
        }
    }
    /**
    Create an inverted version of this map. The result can be used to
    map positions in the post-step document to the pre-step document.
    */ invert() {
        return new StepMap(this.ranges, !this.inverted);
    }
    /**
    @internal
    */ toString() {
        return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
    }
    /**
    Create a map that moves all positions by offset `n` (which may be
    negative). This can be useful when applying steps meant for a
    sub-document to a larger document, or vice-versa.
    */ static offset(n) {
        return n == 0 ? StepMap.empty : new StepMap(n < 0 ? [
            0,
            -n,
            0
        ] : [
            0,
            0,
            n
        ]);
    }
}
/**
A StepMap that contains no changed ranges.
*/ StepMap.empty = new StepMap([]);
/**
A mapping represents a pipeline of zero or more [step
maps](https://prosemirror.net/docs/ref/#transform.StepMap). It has special provisions for losslessly
handling mapping positions through a series of steps in which some
steps are inverted versions of earlier steps. (This comes up when
‘[rebasing](https://prosemirror.net/docs/guide/#transform.rebasing)’ steps for
collaboration or history management.)
*/ class Mapping {
    /**
    Create a new mapping with the given position maps.
    */ constructor(maps, /**
    @internal
    */ mirror, /**
    The starting position in the `maps` array, used when `map` or
    `mapResult` is called.
    */ from = 0, /**
    The end position in the `maps` array.
    */ to = maps ? maps.length : 0){
        this.mirror = mirror;
        this.from = from;
        this.to = to;
        this._maps = maps || [];
        this.ownData = !(maps || mirror);
    }
    /**
    The step maps in this mapping.
    */ get maps() {
        return this._maps;
    }
    /**
    Create a mapping that maps only through a part of this one.
    */ slice(from = 0, to = this.maps.length) {
        return new Mapping(this._maps, this.mirror, from, to);
    }
    /**
    Add a step map to the end of this mapping. If `mirrors` is
    given, it should be the index of the step map that is the mirror
    image of this one.
    */ appendMap(map, mirrors) {
        if (!this.ownData) {
            this._maps = this._maps.slice();
            this.mirror = this.mirror && this.mirror.slice();
            this.ownData = true;
        }
        this.to = this._maps.push(map);
        if (mirrors != null) this.setMirror(this._maps.length - 1, mirrors);
    }
    /**
    Add all the step maps in a given mapping to this one (preserving
    mirroring information).
    */ appendMapping(mapping) {
        for(let i = 0, startSize = this._maps.length; i < mapping._maps.length; i++){
            let mirr = mapping.getMirror(i);
            this.appendMap(mapping._maps[i], mirr != null && mirr < i ? startSize + mirr : undefined);
        }
    }
    /**
    Finds the offset of the step map that mirrors the map at the
    given offset, in this mapping (as per the second argument to
    `appendMap`).
    */ getMirror(n) {
        if (this.mirror) {
            for(let i = 0; i < this.mirror.length; i++)if (this.mirror[i] == n) return this.mirror[i + (i % 2 ? -1 : 1)];
        }
    }
    /**
    @internal
    */ setMirror(n, m) {
        if (!this.mirror) this.mirror = [];
        this.mirror.push(n, m);
    }
    /**
    Append the inverse of the given mapping to this one.
    */ appendMappingInverted(mapping) {
        for(let i = mapping.maps.length - 1, totalSize = this._maps.length + mapping._maps.length; i >= 0; i--){
            let mirr = mapping.getMirror(i);
            this.appendMap(mapping._maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : undefined);
        }
    }
    /**
    Create an inverted version of this mapping.
    */ invert() {
        let inverse = new Mapping;
        inverse.appendMappingInverted(this);
        return inverse;
    }
    /**
    Map a position through this mapping.
    */ map(pos, assoc = 1) {
        if (this.mirror) return this._map(pos, assoc, true);
        for(let i = this.from; i < this.to; i++)pos = this._maps[i].map(pos, assoc);
        return pos;
    }
    /**
    Map a position through this mapping, returning a mapping
    result.
    */ mapResult(pos, assoc = 1) {
        return this._map(pos, assoc, false);
    }
    /**
    @internal
    */ _map(pos, assoc, simple) {
        let delInfo = 0;
        for(let i = this.from; i < this.to; i++){
            let map = this._maps[i], result = map.mapResult(pos, assoc);
            if (result.recover != null) {
                let corr = this.getMirror(i);
                if (corr != null && corr > i && corr < this.to) {
                    i = corr;
                    pos = this._maps[corr].recover(result.recover);
                    continue;
                }
            }
            delInfo |= result.delInfo;
            pos = result.pos;
        }
        return simple ? pos : new MapResult(pos, delInfo, null);
    }
}
const stepsByID = Object.create(null);
/**
A step object represents an atomic change. It generally applies
only to the document it was created for, since the positions
stored in it will only make sense for that document.

New steps are defined by creating classes that extend `Step`,
overriding the `apply`, `invert`, `map`, `getMap` and `fromJSON`
methods, and registering your class with a unique
JSON-serialization identifier using
[`Step.jsonID`](https://prosemirror.net/docs/ref/#transform.Step^jsonID).
*/ class Step {
    /**
    Get the step map that represents the changes made by this step,
    and which can be used to transform between positions in the old
    and the new document.
    */ getMap() {
        return StepMap.empty;
    }
    /**
    Try to merge this step with another one, to be applied directly
    after it. Returns the merged step when possible, null if the
    steps can't be merged.
    */ merge(other) {
        return null;
    }
    /**
    Deserialize a step from its JSON representation. Will call
    through to the step class' own implementation of this method.
    */ static fromJSON(schema, json) {
        if (!json || !json.stepType) throw new RangeError("Invalid input for Step.fromJSON");
        let type = stepsByID[json.stepType];
        if (!type) throw new RangeError(`No step type ${json.stepType} defined`);
        return type.fromJSON(schema, json);
    }
    /**
    To be able to serialize steps to JSON, each step needs a string
    ID to attach to its JSON representation. Use this method to
    register an ID for your step classes. Try to pick something
    that's unlikely to clash with steps from other modules.
    */ static jsonID(id, stepClass) {
        if (id in stepsByID) throw new RangeError("Duplicate use of step JSON ID " + id);
        stepsByID[id] = stepClass;
        stepClass.prototype.jsonID = id;
        return stepClass;
    }
}
/**
The result of [applying](https://prosemirror.net/docs/ref/#transform.Step.apply) a step. Contains either a
new document or a failure value.
*/ class StepResult {
    /**
    @internal
    */ constructor(/**
    The transformed document, if successful.
    */ doc, /**
    The failure message, if unsuccessful.
    */ failed){
        this.doc = doc;
        this.failed = failed;
    }
    /**
    Create a successful step result.
    */ static ok(doc) {
        return new StepResult(doc, null);
    }
    /**
    Create a failed step result.
    */ static fail(message) {
        return new StepResult(null, message);
    }
    /**
    Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
    arguments. Create a successful result if it succeeds, and a
    failed one if it throws a `ReplaceError`.
    */ static fromReplace(doc, from, to, slice) {
        try {
            return StepResult.ok(doc.replace(from, to, slice));
        } catch (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceError"]) return StepResult.fail(e.message);
            throw e;
        }
    }
}
function mapFragment(fragment, f, parent) {
    let mapped = [];
    for(let i = 0; i < fragment.childCount; i++){
        let child = fragment.child(i);
        if (child.content.size) child = child.copy(mapFragment(child.content, f, child));
        if (child.isInline) child = f(child, parent, i);
        mapped.push(child);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].fromArray(mapped);
}
/**
Add a mark to all inline content between two positions.
*/ class AddMarkStep extends Step {
    /**
    Create a mark step.
    */ constructor(/**
    The start of the marked range.
    */ from, /**
    The end of the marked range.
    */ to, /**
    The mark to add.
    */ mark){
        super();
        this.from = from;
        this.to = to;
        this.mark = mark;
    }
    apply(doc) {
        let oldSlice = doc.slice(this.from, this.to), $from = doc.resolve(this.from);
        let parent = $from.node($from.sharedDepth(this.to));
        let slice = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](mapFragment(oldSlice.content, (node, parent)=>{
            if (!node.isAtom || !parent.type.allowsMarkType(this.mark.type)) return node;
            return node.mark(this.mark.addToSet(node.marks));
        }, parent), oldSlice.openStart, oldSlice.openEnd);
        return StepResult.fromReplace(doc, this.from, this.to, slice);
    }
    invert() {
        return new RemoveMarkStep(this.from, this.to, this.mark);
    }
    map(mapping) {
        let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
        if (from.deleted && to.deleted || from.pos >= to.pos) return null;
        return new AddMarkStep(from.pos, to.pos, this.mark);
    }
    merge(other) {
        if (other instanceof AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
        return null;
    }
    toJSON() {
        return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        };
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
        return new AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
    }
}
Step.jsonID("addMark", AddMarkStep);
/**
Remove a mark from all inline content between two positions.
*/ class RemoveMarkStep extends Step {
    /**
    Create a mark-removing step.
    */ constructor(/**
    The start of the unmarked range.
    */ from, /**
    The end of the unmarked range.
    */ to, /**
    The mark to remove.
    */ mark){
        super();
        this.from = from;
        this.to = to;
        this.mark = mark;
    }
    apply(doc) {
        let oldSlice = doc.slice(this.from, this.to);
        let slice = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](mapFragment(oldSlice.content, (node)=>{
            return node.mark(this.mark.removeFromSet(node.marks));
        }, doc), oldSlice.openStart, oldSlice.openEnd);
        return StepResult.fromReplace(doc, this.from, this.to, slice);
    }
    invert() {
        return new AddMarkStep(this.from, this.to, this.mark);
    }
    map(mapping) {
        let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
        if (from.deleted && to.deleted || from.pos >= to.pos) return null;
        return new RemoveMarkStep(from.pos, to.pos, this.mark);
    }
    merge(other) {
        if (other instanceof RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
        return null;
    }
    toJSON() {
        return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        };
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
        return new RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
    }
}
Step.jsonID("removeMark", RemoveMarkStep);
/**
Add a mark to a specific node.
*/ class AddNodeMarkStep extends Step {
    /**
    Create a node mark step.
    */ constructor(/**
    The position of the target node.
    */ pos, /**
    The mark to add.
    */ mark){
        super();
        this.pos = pos;
        this.mark = mark;
    }
    apply(doc) {
        let node = doc.nodeAt(this.pos);
        if (!node) return StepResult.fail("No node at mark step's position");
        let updated = node.type.create(node.attrs, null, this.mark.addToSet(node.marks));
        return StepResult.fromReplace(doc, this.pos, this.pos + 1, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(updated), 0, node.isLeaf ? 0 : 1));
    }
    invert(doc) {
        let node = doc.nodeAt(this.pos);
        if (node) {
            let newSet = this.mark.addToSet(node.marks);
            if (newSet.length == node.marks.length) {
                for(let i = 0; i < node.marks.length; i++)if (!node.marks[i].isInSet(newSet)) return new AddNodeMarkStep(this.pos, node.marks[i]);
                return new AddNodeMarkStep(this.pos, this.mark);
            }
        }
        return new RemoveNodeMarkStep(this.pos, this.mark);
    }
    map(mapping) {
        let pos = mapping.mapResult(this.pos, 1);
        return pos.deletedAfter ? null : new AddNodeMarkStep(pos.pos, this.mark);
    }
    toJSON() {
        return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        };
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
        return new AddNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
    }
}
Step.jsonID("addNodeMark", AddNodeMarkStep);
/**
Remove a mark from a specific node.
*/ class RemoveNodeMarkStep extends Step {
    /**
    Create a mark-removing step.
    */ constructor(/**
    The position of the target node.
    */ pos, /**
    The mark to remove.
    */ mark){
        super();
        this.pos = pos;
        this.mark = mark;
    }
    apply(doc) {
        let node = doc.nodeAt(this.pos);
        if (!node) return StepResult.fail("No node at mark step's position");
        let updated = node.type.create(node.attrs, null, this.mark.removeFromSet(node.marks));
        return StepResult.fromReplace(doc, this.pos, this.pos + 1, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(updated), 0, node.isLeaf ? 0 : 1));
    }
    invert(doc) {
        let node = doc.nodeAt(this.pos);
        if (!node || !this.mark.isInSet(node.marks)) return this;
        return new AddNodeMarkStep(this.pos, this.mark);
    }
    map(mapping) {
        let pos = mapping.mapResult(this.pos, 1);
        return pos.deletedAfter ? null : new RemoveNodeMarkStep(pos.pos, this.mark);
    }
    toJSON() {
        return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        };
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
        return new RemoveNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
    }
}
Step.jsonID("removeNodeMark", RemoveNodeMarkStep);
/**
Replace a part of the document with a slice of new content.
*/ class ReplaceStep extends Step {
    /**
    The given `slice` should fit the 'gap' between `from` and
    `to`—the depths must line up, and the surrounding nodes must be
    able to be joined with the open sides of the slice. When
    `structure` is true, the step will fail if the content between
    from and to is not just a sequence of closing and then opening
    tokens (this is to guard against rebased replace steps
    overwriting something they weren't supposed to).
    */ constructor(/**
    The start position of the replaced range.
    */ from, /**
    The end position of the replaced range.
    */ to, /**
    The slice to insert.
    */ slice, /**
    @internal
    */ structure = false){
        super();
        this.from = from;
        this.to = to;
        this.slice = slice;
        this.structure = structure;
    }
    apply(doc) {
        if (this.structure && contentBetween(doc, this.from, this.to)) return StepResult.fail("Structure replace would overwrite content");
        return StepResult.fromReplace(doc, this.from, this.to, this.slice);
    }
    getMap() {
        return new StepMap([
            this.from,
            this.to - this.from,
            this.slice.size
        ]);
    }
    invert(doc) {
        return new ReplaceStep(this.from, this.from + this.slice.size, doc.slice(this.from, this.to));
    }
    map(mapping) {
        let to = mapping.mapResult(this.to, -1);
        let from = this.from == this.to && ReplaceStep.MAP_BIAS < 0 ? to : mapping.mapResult(this.from, 1);
        if (from.deletedAcross && to.deletedAcross) return null;
        return new ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice, this.structure);
    }
    merge(other) {
        if (!(other instanceof ReplaceStep) || other.structure || this.structure) return null;
        if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
            let slice = this.slice.size + other.slice.size == 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
            return new ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure);
        } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
            let slice = this.slice.size + other.slice.size == 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
            return new ReplaceStep(other.from, this.to, slice, this.structure);
        } else {
            return null;
        }
    }
    toJSON() {
        let json = {
            stepType: "replace",
            from: this.from,
            to: this.to
        };
        if (this.slice.size) json.slice = this.slice.toJSON();
        if (this.structure) json.structure = true;
        return json;
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
        return new ReplaceStep(json.from, json.to, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].fromJSON(schema, json.slice), !!json.structure);
    }
}
/**
By default, for backwards compatibility, an inserting step
mapped over an insertion at that same position fill move after
the inserted content. In a collaborative editing situation, that
can make redone insertions appear in unexpected places. You can
set this to -1 to make such mapping keep the step before the
insertion instead.
*/ ReplaceStep.MAP_BIAS = 1;
Step.jsonID("replace", ReplaceStep);
/**
Replace a part of the document with a slice of content, but
preserve a range of the replaced content by moving it into the
slice.
*/ class ReplaceAroundStep extends Step {
    /**
    Create a replace-around step with the given range and gap.
    `insert` should be the point in the slice into which the content
    of the gap should be moved. `structure` has the same meaning as
    it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
    */ constructor(/**
    The start position of the replaced range.
    */ from, /**
    The end position of the replaced range.
    */ to, /**
    The start of preserved range.
    */ gapFrom, /**
    The end of preserved range.
    */ gapTo, /**
    The slice to insert.
    */ slice, /**
    The position in the slice where the preserved range should be
    inserted.
    */ insert, /**
    @internal
    */ structure = false){
        super();
        this.from = from;
        this.to = to;
        this.gapFrom = gapFrom;
        this.gapTo = gapTo;
        this.slice = slice;
        this.insert = insert;
        this.structure = structure;
    }
    apply(doc) {
        if (this.structure && (contentBetween(doc, this.from, this.gapFrom) || contentBetween(doc, this.gapTo, this.to))) return StepResult.fail("Structure gap-replace would overwrite content");
        let gap = doc.slice(this.gapFrom, this.gapTo);
        if (gap.openStart || gap.openEnd) return StepResult.fail("Gap is not a flat range");
        let inserted = this.slice.insertAt(this.insert, gap.content);
        if (!inserted) return StepResult.fail("Content does not fit in gap");
        return StepResult.fromReplace(doc, this.from, this.to, inserted);
    }
    getMap() {
        return new StepMap([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert
        ]);
    }
    invert(doc) {
        let gap = this.gapTo - this.gapFrom;
        return new ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
    }
    map(mapping) {
        let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
        let gapFrom = this.from == this.gapFrom ? from.pos : mapping.map(this.gapFrom, -1);
        let gapTo = this.to == this.gapTo ? to.pos : mapping.map(this.gapTo, 1);
        if (from.deletedAcross && to.deletedAcross || gapFrom < from.pos || gapTo > to.pos) return null;
        return new ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
    }
    toJSON() {
        let json = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
        };
        if (this.slice.size) json.slice = this.slice.toJSON();
        if (this.structure) json.structure = true;
        return json;
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
        return new ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].fromJSON(schema, json.slice), json.insert, !!json.structure);
    }
}
Step.jsonID("replaceAround", ReplaceAroundStep);
function contentBetween(doc, from, to) {
    let $from = doc.resolve(from), dist = to - from, depth = $from.depth;
    while(dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount){
        depth--;
        dist--;
    }
    if (dist > 0) {
        let next = $from.node(depth).maybeChild($from.indexAfter(depth));
        while(dist > 0){
            if (!next || next.isLeaf) return true;
            next = next.firstChild;
            dist--;
        }
    }
    return false;
}
function addMark(tr, from, to, mark) {
    let removed = [], added = [];
    let removing, adding;
    tr.doc.nodesBetween(from, to, (node, pos, parent)=>{
        if (!node.isInline) return;
        let marks = node.marks;
        if (!mark.isInSet(marks) && parent.type.allowsMarkType(mark.type)) {
            let start = Math.max(pos, from), end = Math.min(pos + node.nodeSize, to);
            let newSet = mark.addToSet(marks);
            for(let i = 0; i < marks.length; i++){
                if (!marks[i].isInSet(newSet)) {
                    if (removing && removing.to == start && removing.mark.eq(marks[i])) removing.to = end;
                    else removed.push(removing = new RemoveMarkStep(start, end, marks[i]));
                }
            }
            if (adding && adding.to == start) adding.to = end;
            else added.push(adding = new AddMarkStep(start, end, mark));
        }
    });
    removed.forEach((s)=>tr.step(s));
    added.forEach((s)=>tr.step(s));
}
function removeMark(tr, from, to, mark) {
    let matched = [], step = 0;
    tr.doc.nodesBetween(from, to, (node, pos)=>{
        if (!node.isInline) return;
        step++;
        let toRemove = null;
        if (mark instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkType"]) {
            let set = node.marks, found;
            while(found = mark.isInSet(set)){
                (toRemove || (toRemove = [])).push(found);
                set = found.removeFromSet(set);
            }
        } else if (mark) {
            if (mark.isInSet(node.marks)) toRemove = [
                mark
            ];
        } else {
            toRemove = node.marks;
        }
        if (toRemove && toRemove.length) {
            let end = Math.min(pos + node.nodeSize, to);
            for(let i = 0; i < toRemove.length; i++){
                let style = toRemove[i], found;
                for(let j = 0; j < matched.length; j++){
                    let m = matched[j];
                    if (m.step == step - 1 && style.eq(matched[j].style)) found = m;
                }
                if (found) {
                    found.to = end;
                    found.step = step;
                } else {
                    matched.push({
                        style,
                        from: Math.max(pos, from),
                        to: end,
                        step
                    });
                }
            }
        }
    });
    matched.forEach((m)=>tr.step(new RemoveMarkStep(m.from, m.to, m.style)));
}
function clearIncompatible(tr, pos, parentType, match = parentType.contentMatch, clearNewlines = true) {
    let node = tr.doc.nodeAt(pos);
    let replSteps = [], cur = pos + 1;
    for(let i = 0; i < node.childCount; i++){
        let child = node.child(i), end = cur + child.nodeSize;
        let allowed = match.matchType(child.type);
        if (!allowed) {
            replSteps.push(new ReplaceStep(cur, end, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty));
        } else {
            match = allowed;
            for(let j = 0; j < child.marks.length; j++)if (!parentType.allowsMarkType(child.marks[j].type)) tr.step(new RemoveMarkStep(cur, end, child.marks[j]));
            if (clearNewlines && child.isText && parentType.whitespace != "pre") {
                let m, newline = /\r?\n|\r/g, slice;
                while(m = newline.exec(child.text)){
                    if (!slice) slice = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(parentType.schema.text(" ", parentType.allowedMarks(child.marks))), 0, 0);
                    replSteps.push(new ReplaceStep(cur + m.index, cur + m.index + m[0].length, slice));
                }
            }
        }
        cur = end;
    }
    if (!match.validEnd) {
        let fill = match.fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, true);
        tr.replace(cur, cur, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](fill, 0, 0));
    }
    for(let i = replSteps.length - 1; i >= 0; i--)tr.step(replSteps[i]);
}
function canCut(node, start, end) {
    return (start == 0 || node.canReplace(start, node.childCount)) && (end == node.childCount || node.canReplace(0, end));
}
/**
Try to find a target depth to which the content in the given range
can be lifted. Will not go across
[isolating](https://prosemirror.net/docs/ref/#model.NodeSpec.isolating) parent nodes.
*/ function liftTarget(range) {
    let parent = range.parent;
    let content = parent.content.cutByIndex(range.startIndex, range.endIndex);
    for(let depth = range.depth, contentBefore = 0, contentAfter = 0;; --depth){
        let node = range.$from.node(depth);
        let index = range.$from.index(depth) + contentBefore, endIndex = range.$to.indexAfter(depth) - contentAfter;
        if (depth < range.depth && node.canReplace(index, endIndex, content)) return depth;
        if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex)) break;
        if (index) contentBefore = 1;
        if (endIndex < node.childCount) contentAfter = 1;
    }
    return null;
}
function lift(tr, range, target) {
    let { $from, $to, depth } = range;
    let gapStart = $from.before(depth + 1), gapEnd = $to.after(depth + 1);
    let start = gapStart, end = gapEnd;
    let before = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, openStart = 0;
    for(let d = depth, splitting = false; d > target; d--)if (splitting || $from.index(d) > 0) {
        splitting = true;
        before = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from($from.node(d).copy(before));
        openStart++;
    } else {
        start--;
    }
    let after = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, openEnd = 0;
    for(let d = depth, splitting = false; d > target; d--)if (splitting || $to.after(d + 1) < $to.end(d)) {
        splitting = true;
        after = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from($to.node(d).copy(after));
        openEnd++;
    } else {
        end++;
    }
    tr.step(new ReplaceAroundStep(start, end, gapStart, gapEnd, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](before.append(after), openStart, openEnd), before.size - openStart, true));
}
/**
Try to find a valid way to wrap the content in the given range in a
node of the given type. May introduce extra nodes around and inside
the wrapper node, if necessary. Returns null if no valid wrapping
could be found. When `innerRange` is given, that range's content is
used as the content to fit into the wrapping, instead of the
content of `range`.
*/ function findWrapping(range, nodeType, attrs = null, innerRange = range) {
    let around = findWrappingOutside(range, nodeType);
    let inner = around && findWrappingInside(innerRange, nodeType);
    if (!inner) return null;
    return around.map(withAttrs).concat({
        type: nodeType,
        attrs
    }).concat(inner.map(withAttrs));
}
function withAttrs(type) {
    return {
        type,
        attrs: null
    };
}
function findWrappingOutside(range, type) {
    let { parent, startIndex, endIndex } = range;
    let around = parent.contentMatchAt(startIndex).findWrapping(type);
    if (!around) return null;
    let outer = around.length ? around[0] : type;
    return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
}
function findWrappingInside(range, type) {
    let { parent, startIndex, endIndex } = range;
    let inner = parent.child(startIndex);
    let inside = type.contentMatch.findWrapping(inner.type);
    if (!inside) return null;
    let lastType = inside.length ? inside[inside.length - 1] : type;
    let innerMatch = lastType.contentMatch;
    for(let i = startIndex; innerMatch && i < endIndex; i++)innerMatch = innerMatch.matchType(parent.child(i).type);
    if (!innerMatch || !innerMatch.validEnd) return null;
    return inside;
}
function wrap(tr, range, wrappers) {
    let content = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty;
    for(let i = wrappers.length - 1; i >= 0; i--){
        if (content.size) {
            let match = wrappers[i].type.contentMatch.matchFragment(content);
            if (!match || !match.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
        }
        content = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(wrappers[i].type.create(wrappers[i].attrs, content));
    }
    let start = range.start, end = range.end;
    tr.step(new ReplaceAroundStep(start, end, start, end, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](content, 0, 0), wrappers.length, true));
}
function setBlockType(tr, from, to, type, attrs) {
    if (!type.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
    let mapFrom = tr.steps.length;
    tr.doc.nodesBetween(from, to, (node, pos)=>{
        let attrsHere = typeof attrs == "function" ? attrs(node) : attrs;
        if (node.isTextblock && !node.hasMarkup(type, attrsHere) && canChangeType(tr.doc, tr.mapping.slice(mapFrom).map(pos), type)) {
            let convertNewlines = null;
            if (type.schema.linebreakReplacement) {
                let pre = type.whitespace == "pre", supportLinebreak = !!type.contentMatch.matchType(type.schema.linebreakReplacement);
                if (pre && !supportLinebreak) convertNewlines = false;
                else if (!pre && supportLinebreak) convertNewlines = true;
            }
            // Ensure all markup that isn't allowed in the new node type is cleared
            if (convertNewlines === false) replaceLinebreaks(tr, node, pos, mapFrom);
            clearIncompatible(tr, tr.mapping.slice(mapFrom).map(pos, 1), type, undefined, convertNewlines === null);
            let mapping = tr.mapping.slice(mapFrom);
            let startM = mapping.map(pos, 1), endM = mapping.map(pos + node.nodeSize, 1);
            tr.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(type.create(attrsHere, null, node.marks)), 0, 0), 1, true));
            if (convertNewlines === true) replaceNewlines(tr, node, pos, mapFrom);
            return false;
        }
    });
}
function replaceNewlines(tr, node, pos, mapFrom) {
    node.forEach((child, offset)=>{
        if (child.isText) {
            let m, newline = /\r?\n|\r/g;
            while(m = newline.exec(child.text)){
                let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset + m.index);
                tr.replaceWith(start, start + 1, node.type.schema.linebreakReplacement.create());
            }
        }
    });
}
function replaceLinebreaks(tr, node, pos, mapFrom) {
    node.forEach((child, offset)=>{
        if (child.type == child.type.schema.linebreakReplacement) {
            let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset);
            tr.replaceWith(start, start + 1, node.type.schema.text("\n"));
        }
    });
}
function canChangeType(doc, pos, type) {
    let $pos = doc.resolve(pos), index = $pos.index();
    return $pos.parent.canReplaceWith(index, index + 1, type);
}
/**
Change the type, attributes, and/or marks of the node at `pos`.
When `type` isn't given, the existing node type is preserved,
*/ function setNodeMarkup(tr, pos, type, attrs, marks) {
    let node = tr.doc.nodeAt(pos);
    if (!node) throw new RangeError("No node at given position");
    if (!type) type = node.type;
    let newNode = type.create(attrs, null, marks || node.marks);
    if (node.isLeaf) return tr.replaceWith(pos, pos + node.nodeSize, newNode);
    if (!type.validContent(node.content)) throw new RangeError("Invalid content for node type " + type.name);
    tr.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(newNode), 0, 0), 1, true));
}
/**
Check whether splitting at the given position is allowed.
*/ function canSplit(doc, pos, depth = 1, typesAfter) {
    let $pos = doc.resolve(pos), base = $pos.depth - depth;
    let innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
    if (base < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) return false;
    for(let d = $pos.depth - 1, i = depth - 2; d > base; d--, i--){
        let node = $pos.node(d), index = $pos.index(d);
        if (node.type.spec.isolating) return false;
        let rest = node.content.cutByIndex(index, node.childCount);
        let overrideChild = typesAfter && typesAfter[i + 1];
        if (overrideChild) rest = rest.replaceChild(0, overrideChild.type.create(overrideChild.attrs));
        let after = typesAfter && typesAfter[i] || node;
        if (!node.canReplace(index + 1, node.childCount) || !after.type.validContent(rest)) return false;
    }
    let index = $pos.indexAfter(base);
    let baseType = typesAfter && typesAfter[0];
    return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type);
}
function split(tr, pos, depth = 1, typesAfter) {
    let $pos = tr.doc.resolve(pos), before = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, after = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty;
    for(let d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--){
        before = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from($pos.node(d).copy(before));
        let typeAfter = typesAfter && typesAfter[i];
        after = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
    }
    tr.step(new ReplaceStep(pos, pos, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](before.append(after), depth, depth), true));
}
/**
Test whether the blocks before and after a given position can be
joined.
*/ function canJoin(doc, pos) {
    let $pos = doc.resolve(pos), index = $pos.index();
    return joinable($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index, index + 1);
}
function canAppendWithSubstitutedLinebreaks(a, b) {
    if (!b.content.size) a.type.compatibleContent(b.type);
    let match = a.contentMatchAt(a.childCount);
    let { linebreakReplacement } = a.type.schema;
    for(let i = 0; i < b.childCount; i++){
        let child = b.child(i);
        let type = child.type == linebreakReplacement ? a.type.schema.nodes.text : child.type;
        match = match.matchType(type);
        if (!match) return false;
        if (!a.type.allowsMarks(child.marks)) return false;
    }
    return match.validEnd;
}
function joinable(a, b) {
    return !!(a && b && !a.isLeaf && canAppendWithSubstitutedLinebreaks(a, b));
}
/**
Find an ancestor of the given position that can be joined to the
block before (or after if `dir` is positive). Returns the joinable
point, if any.
*/ function joinPoint(doc, pos, dir = -1) {
    let $pos = doc.resolve(pos);
    for(let d = $pos.depth;; d--){
        let before, after, index = $pos.index(d);
        if (d == $pos.depth) {
            before = $pos.nodeBefore;
            after = $pos.nodeAfter;
        } else if (dir > 0) {
            before = $pos.node(d + 1);
            index++;
            after = $pos.node(d).maybeChild(index);
        } else {
            before = $pos.node(d).maybeChild(index - 1);
            after = $pos.node(d + 1);
        }
        if (before && !before.isTextblock && joinable(before, after) && $pos.node(d).canReplace(index, index + 1)) return pos;
        if (d == 0) break;
        pos = dir < 0 ? $pos.before(d) : $pos.after(d);
    }
}
function join(tr, pos, depth) {
    let convertNewlines = null;
    let { linebreakReplacement } = tr.doc.type.schema;
    let $before = tr.doc.resolve(pos - depth), beforeType = $before.node().type;
    if (linebreakReplacement && beforeType.inlineContent) {
        let pre = beforeType.whitespace == "pre";
        let supportLinebreak = !!beforeType.contentMatch.matchType(linebreakReplacement);
        if (pre && !supportLinebreak) convertNewlines = false;
        else if (!pre && supportLinebreak) convertNewlines = true;
    }
    let mapFrom = tr.steps.length;
    if (convertNewlines === false) {
        let $after = tr.doc.resolve(pos + depth);
        replaceLinebreaks(tr, $after.node(), $after.before(), mapFrom);
    }
    if (beforeType.inlineContent) clearIncompatible(tr, pos + depth - 1, beforeType, $before.node().contentMatchAt($before.index()), convertNewlines == null);
    let mapping = tr.mapping.slice(mapFrom), start = mapping.map(pos - depth);
    tr.step(new ReplaceStep(start, mapping.map(pos + depth, -1), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty, true));
    if (convertNewlines === true) {
        let $full = tr.doc.resolve(start);
        replaceNewlines(tr, $full.node(), $full.before(), tr.steps.length);
    }
    return tr;
}
/**
Try to find a point where a node of the given type can be inserted
near `pos`, by searching up the node hierarchy when `pos` itself
isn't a valid place but is at the start or end of a node. Return
null if no position was found.
*/ function insertPoint(doc, pos, nodeType) {
    let $pos = doc.resolve(pos);
    if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) return pos;
    if ($pos.parentOffset == 0) for(let d = $pos.depth - 1; d >= 0; d--){
        let index = $pos.index(d);
        if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.before(d + 1);
        if (index > 0) return null;
    }
    if ($pos.parentOffset == $pos.parent.content.size) for(let d = $pos.depth - 1; d >= 0; d--){
        let index = $pos.indexAfter(d);
        if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.after(d + 1);
        if (index < $pos.node(d).childCount) return null;
    }
    return null;
}
/**
Finds a position at or around the given position where the given
slice can be inserted. Will look at parent nodes' nearest boundary
and try there, even if the original position wasn't directly at the
start or end of that node. Returns null when no position was found.
*/ function dropPoint(doc, pos, slice) {
    let $pos = doc.resolve(pos);
    if (!slice.content.size) return pos;
    let content = slice.content;
    for(let i = 0; i < slice.openStart; i++)content = content.firstChild.content;
    for(let pass = 1; pass <= (slice.openStart == 0 && slice.size ? 2 : 1); pass++){
        for(let d = $pos.depth; d >= 0; d--){
            let bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
            let insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
            let parent = $pos.node(d), fits = false;
            if (pass == 1) {
                fits = parent.canReplace(insertPos, insertPos, content);
            } else {
                let wrapping = parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);
                fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
            }
            if (fits) return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
        }
    }
    return null;
}
/**
‘Fit’ a slice into a given position in the document, producing a
[step](https://prosemirror.net/docs/ref/#transform.Step) that inserts it. Will return null if
there's no meaningful way to insert the slice here, or inserting it
would be a no-op (an empty slice over an empty range).
*/ function replaceStep(doc, from, to = from, slice = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
    if (from == to && !slice.size) return null;
    let $from = doc.resolve(from), $to = doc.resolve(to);
    // Optimization -- avoid work if it's obvious that it's not needed.
    if (fitsTrivially($from, $to, slice)) return new ReplaceStep(from, to, slice);
    return new Fitter($from, $to, slice).fit();
}
function fitsTrivially($from, $to, slice) {
    return !slice.openStart && !slice.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice.content);
}
// Algorithm for 'placing' the elements of a slice into a gap:
//
// We consider the content of each node that is open to the left to be
// independently placeable. I.e. in <p("foo"), p("bar")>, when the
// paragraph on the left is open, "foo" can be placed (somewhere on
// the left side of the replacement gap) independently from p("bar").
//
// This class tracks the state of the placement progress in the
// following properties:
//
//  - `frontier` holds a stack of `{type, match}` objects that
//    represent the open side of the replacement. It starts at
//    `$from`, then moves forward as content is placed, and is finally
//    reconciled with `$to`.
//
//  - `unplaced` is a slice that represents the content that hasn't
//    been placed yet.
//
//  - `placed` is a fragment of placed content. Its open-start value
//    is implicit in `$from`, and its open-end value in `frontier`.
class Fitter {
    constructor($from, $to, unplaced){
        this.$from = $from;
        this.$to = $to;
        this.unplaced = unplaced;
        this.frontier = [];
        this.placed = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty;
        for(let i = 0; i <= $from.depth; i++){
            let node = $from.node(i);
            this.frontier.push({
                type: node.type,
                match: node.contentMatchAt($from.indexAfter(i))
            });
        }
        for(let i = $from.depth; i > 0; i--)this.placed = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from($from.node(i).copy(this.placed));
    }
    get depth() {
        return this.frontier.length - 1;
    }
    fit() {
        // As long as there's unplaced content, try to place some of it.
        // If that fails, either increase the open score of the unplaced
        // slice, or drop nodes from it, and then try again.
        while(this.unplaced.size){
            let fit = this.findFittable();
            if (fit) this.placeNodes(fit);
            else this.openMore() || this.dropNode();
        }
        // When there's inline content directly after the frontier _and_
        // directly after `this.$to`, we must generate a `ReplaceAround`
        // step that pulls that content into the node after the frontier.
        // That means the fitting must be done to the end of the textblock
        // node after `this.$to`, not `this.$to` itself.
        let moveInline = this.mustMoveInline(), placedSize = this.placed.size - this.depth - this.$from.depth;
        let $from = this.$from, $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
        if (!$to) return null;
        // If closing to `$to` succeeded, create a step
        let content = this.placed, openStart = $from.depth, openEnd = $to.depth;
        while(openStart && openEnd && content.childCount == 1){
            content = content.firstChild.content;
            openStart--;
            openEnd--;
        }
        let slice = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](content, openStart, openEnd);
        if (moveInline > -1) return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice, placedSize);
        if (slice.size || $from.pos != this.$to.pos) return new ReplaceStep($from.pos, $to.pos, slice);
        return null;
    }
    // Find a position on the start spine of `this.unplaced` that has
    // content that can be moved somewhere on the frontier. Returns two
    // depths, one for the slice and one for the frontier.
    findFittable() {
        let startDepth = this.unplaced.openStart;
        for(let cur = this.unplaced.content, d = 0, openEnd = this.unplaced.openEnd; d < startDepth; d++){
            let node = cur.firstChild;
            if (cur.childCount > 1) openEnd = 0;
            if (node.type.spec.isolating && openEnd <= d) {
                startDepth = d;
                break;
            }
            cur = node.content;
        }
        // Only try wrapping nodes (pass 2) after finding a place without
        // wrapping failed.
        for(let pass = 1; pass <= 2; pass++){
            for(let sliceDepth = pass == 1 ? startDepth : this.unplaced.openStart; sliceDepth >= 0; sliceDepth--){
                let fragment, parent = null;
                if (sliceDepth) {
                    parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
                    fragment = parent.content;
                } else {
                    fragment = this.unplaced.content;
                }
                let first = fragment.firstChild;
                for(let frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--){
                    let { type, match } = this.frontier[frontierDepth], wrap, inject = null;
                    // In pass 1, if the next node matches, or there is no next
                    // node but the parents look compatible, we've found a
                    // place.
                    if (pass == 1 && (first ? match.matchType(first.type) || (inject = match.fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(first), false)) : parent && type.compatibleContent(parent.type))) return {
                        sliceDepth,
                        frontierDepth,
                        parent,
                        inject
                    };
                    else if (pass == 2 && first && (wrap = match.findWrapping(first.type))) return {
                        sliceDepth,
                        frontierDepth,
                        parent,
                        wrap
                    };
                    // Don't continue looking further up if the parent node
                    // would fit here.
                    if (parent && match.matchType(parent.type)) break;
                }
            }
        }
    }
    openMore() {
        let { content, openStart, openEnd } = this.unplaced;
        let inner = contentAt(content, openStart);
        if (!inner.childCount || inner.firstChild.isLeaf) return false;
        this.unplaced = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
        return true;
    }
    dropNode() {
        let { content, openStart, openEnd } = this.unplaced;
        let inner = contentAt(content, openStart);
        if (inner.childCount <= 1 && openStart > 0) {
            let openAtEnd = content.size - openStart <= openStart + inner.size;
            this.unplaced = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
        } else {
            this.unplaced = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](dropFromFragment(content, openStart, 1), openStart, openEnd);
        }
    }
    // Move content from the unplaced slice at `sliceDepth` to the
    // frontier node at `frontierDepth`. Close that frontier node when
    // applicable.
    placeNodes({ sliceDepth, frontierDepth, parent, inject, wrap }) {
        while(this.depth > frontierDepth)this.closeFrontierNode();
        if (wrap) for(let i = 0; i < wrap.length; i++)this.openFrontierNode(wrap[i]);
        let slice = this.unplaced, fragment = parent ? parent.content : slice.content;
        let openStart = slice.openStart - sliceDepth;
        let taken = 0, add = [];
        let { match, type } = this.frontier[frontierDepth];
        if (inject) {
            for(let i = 0; i < inject.childCount; i++)add.push(inject.child(i));
            match = match.matchFragment(inject);
        }
        // Computes the amount of (end) open nodes at the end of the
        // fragment. When 0, the parent is open, but no more. When
        // negative, nothing is open.
        let openEndCount = fragment.size + sliceDepth - (slice.content.size - slice.openEnd);
        // Scan over the fragment, fitting as many child nodes as
        // possible.
        while(taken < fragment.childCount){
            let next = fragment.child(taken), matches = match.matchType(next.type);
            if (!matches) break;
            taken++;
            if (taken > 1 || openStart == 0 || next.content.size) {
                match = matches;
                add.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
            }
        }
        let toEnd = taken == fragment.childCount;
        if (!toEnd) openEndCount = -1;
        this.placed = addToFragment(this.placed, frontierDepth, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(add));
        this.frontier[frontierDepth].match = match;
        // If the parent types match, and the entire node was moved, and
        // it's not open, close this frontier node right away.
        if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1) this.closeFrontierNode();
        // Add new frontier nodes for any open nodes at the end.
        for(let i = 0, cur = fragment; i < openEndCount; i++){
            let node = cur.lastChild;
            this.frontier.push({
                type: node.type,
                match: node.contentMatchAt(node.childCount)
            });
            cur = node.content;
        }
        // Update `this.unplaced`. Drop the entire node from which we
        // placed it we got to its end, otherwise just drop the placed
        // nodes.
        this.unplaced = !toEnd ? new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](dropFromFragment(slice.content, sliceDepth, taken), slice.openStart, slice.openEnd) : sliceDepth == 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](dropFromFragment(slice.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice.openEnd : sliceDepth - 1);
    }
    mustMoveInline() {
        if (!this.$to.parent.isTextblock) return -1;
        let top = this.frontier[this.depth], level;
        if (!top.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top.type, top.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth) return -1;
        let { depth } = this.$to, after = this.$to.after(depth);
        while(depth > 1 && after == this.$to.end(--depth))++after;
        return after;
    }
    findCloseLevel($to) {
        scan: for(let i = Math.min(this.depth, $to.depth); i >= 0; i--){
            let { match, type } = this.frontier[i];
            let dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
            let fit = contentAfterFits($to, i, type, match, dropInner);
            if (!fit) continue;
            for(let d = i - 1; d >= 0; d--){
                let { match, type } = this.frontier[d];
                let matches = contentAfterFits($to, d, type, match, true);
                if (!matches || matches.childCount) continue scan;
            }
            return {
                depth: i,
                fit,
                move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to
            };
        }
    }
    close($to) {
        let close = this.findCloseLevel($to);
        if (!close) return null;
        while(this.depth > close.depth)this.closeFrontierNode();
        if (close.fit.childCount) this.placed = addToFragment(this.placed, close.depth, close.fit);
        $to = close.move;
        for(let d = close.depth + 1; d <= $to.depth; d++){
            let node = $to.node(d), add = node.type.contentMatch.fillBefore(node.content, true, $to.index(d));
            this.openFrontierNode(node.type, node.attrs, add);
        }
        return $to;
    }
    openFrontierNode(type, attrs = null, content) {
        let top = this.frontier[this.depth];
        top.match = top.match.matchType(type);
        this.placed = addToFragment(this.placed, this.depth, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(type.create(attrs, content)));
        this.frontier.push({
            type,
            match: type.contentMatch
        });
    }
    closeFrontierNode() {
        let open = this.frontier.pop();
        let add = open.match.fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, true);
        if (add.childCount) this.placed = addToFragment(this.placed, this.frontier.length, add);
    }
}
function dropFromFragment(fragment, depth, count) {
    if (depth == 0) return fragment.cutByIndex(count, fragment.childCount);
    return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
}
function addToFragment(fragment, depth, content) {
    if (depth == 0) return fragment.append(content);
    return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
}
function contentAt(fragment, depth) {
    for(let i = 0; i < depth; i++)fragment = fragment.firstChild.content;
    return fragment;
}
function closeNodeStart(node, openStart, openEnd) {
    if (openStart <= 0) return node;
    let frag = node.content;
    if (openStart > 1) frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
    if (openStart > 0) {
        frag = node.type.contentMatch.fillBefore(frag).append(frag);
        if (openEnd <= 0) frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, true));
    }
    return node.copy(frag);
}
function contentAfterFits($to, depth, type, match, open) {
    let node = $to.node(depth), index = open ? $to.indexAfter(depth) : $to.index(depth);
    if (index == node.childCount && !type.compatibleContent(node.type)) return null;
    let fit = match.fillBefore(node.content, true, index);
    return fit && !invalidMarks(type, node.content, index) ? fit : null;
}
function invalidMarks(type, fragment, start) {
    for(let i = start; i < fragment.childCount; i++)if (!type.allowsMarks(fragment.child(i).marks)) return true;
    return false;
}
function definesContent(type) {
    return type.spec.defining || type.spec.definingForContent;
}
function replaceRange(tr, from, to, slice) {
    if (!slice.size) return tr.deleteRange(from, to);
    let $from = tr.doc.resolve(from), $to = tr.doc.resolve(to);
    if (fitsTrivially($from, $to, slice)) return tr.step(new ReplaceStep(from, to, slice));
    let targetDepths = coveredDepths($from, $to);
    // Can't replace the whole document, so remove 0 if it's present
    if (targetDepths[targetDepths.length - 1] == 0) targetDepths.pop();
    // Negative numbers represent not expansion over the whole node at
    // that depth, but replacing from $from.before(-D) to $to.pos.
    let preferredTarget = -($from.depth + 1);
    targetDepths.unshift(preferredTarget);
    // This loop picks a preferred target depth, if one of the covering
    // depths is not outside of a defining node, and adds negative
    // depths for any depth that has $from at its start and does not
    // cross a defining node.
    for(let d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--){
        let spec = $from.node(d).type.spec;
        if (spec.defining || spec.definingAsContext || spec.isolating) break;
        if (targetDepths.indexOf(d) > -1) preferredTarget = d;
        else if ($from.before(d) == pos) targetDepths.splice(1, 0, -d);
    }
    // Try to fit each possible depth of the slice into each possible
    // target depth, starting with the preferred depths.
    let preferredTargetIndex = targetDepths.indexOf(preferredTarget);
    let leftNodes = [], preferredDepth = slice.openStart;
    for(let content = slice.content, i = 0;; i++){
        let node = content.firstChild;
        leftNodes.push(node);
        if (i == slice.openStart) break;
        content = node.content;
    }
    // Back up preferredDepth to cover defining textblocks directly
    // above it, possibly skipping a non-defining textblock.
    for(let d = preferredDepth - 1; d >= 0; d--){
        let leftNode = leftNodes[d], def = definesContent(leftNode.type);
        if (def && !leftNode.sameMarkup($from.node(Math.abs(preferredTarget) - 1))) preferredDepth = d;
        else if (def || !leftNode.type.isTextblock) break;
    }
    for(let j = slice.openStart; j >= 0; j--){
        let openDepth = (j + preferredDepth + 1) % (slice.openStart + 1);
        let insert = leftNodes[openDepth];
        if (!insert) continue;
        for(let i = 0; i < targetDepths.length; i++){
            // Loop over possible expansion levels, starting with the
            // preferred one
            let targetDepth = targetDepths[(i + preferredTargetIndex) % targetDepths.length], expand = true;
            if (targetDepth < 0) {
                expand = false;
                targetDepth = -targetDepth;
            }
            let parent = $from.node(targetDepth - 1), index = $from.index(targetDepth - 1);
            if (parent.canReplaceWith(index, index, insert.type, insert.marks)) return tr.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](closeFragment(slice.content, 0, slice.openStart, openDepth), openDepth, slice.openEnd));
        }
    }
    let startSteps = tr.steps.length;
    for(let i = targetDepths.length - 1; i >= 0; i--){
        tr.replace(from, to, slice);
        if (tr.steps.length > startSteps) break;
        let depth = targetDepths[i];
        if (depth < 0) continue;
        from = $from.before(depth);
        to = $to.after(depth);
    }
}
function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
    if (depth < oldOpen) {
        let first = fragment.firstChild;
        fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
    }
    if (depth > newOpen) {
        let match = parent.contentMatchAt(0);
        let start = match.fillBefore(fragment).append(fragment);
        fragment = start.append(match.matchFragment(start).fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, true));
    }
    return fragment;
}
function replaceRangeWith(tr, from, to, node) {
    if (!node.isInline && from == to && tr.doc.resolve(from).parent.content.size) {
        let point = insertPoint(tr.doc, from, node.type);
        if (point != null) from = to = point;
    }
    tr.replaceRange(from, to, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(node), 0, 0));
}
function deleteRange(tr, from, to) {
    let $from = tr.doc.resolve(from), $to = tr.doc.resolve(to);
    // When the deleted range spans from the start of one textblock to
    // the start of another one, move out of the start of both blocks.
    if ($from.parent.isTextblock && $to.parent.isTextblock && $from.start() != $to.start() && $from.parentOffset == 0 && $to.parentOffset == 0) {
        let shared = $from.sharedDepth(to), isolated = false;
        for(let d = $from.depth; d > shared; d--)if ($from.node(d).type.spec.isolating) isolated = true;
        for(let d = $to.depth; d > shared; d--)if ($to.node(d).type.spec.isolating) isolated = true;
        if (!isolated) {
            for(let d = $from.depth; d > 0 && from == $from.start(d); d--)from = $from.before(d);
            for(let d = $to.depth; d > 0 && to == $to.start(d); d--)to = $to.before(d);
            $from = tr.doc.resolve(from);
            $to = tr.doc.resolve(to);
        }
    }
    let covered = coveredDepths($from, $to);
    for(let i = 0; i < covered.length; i++){
        let depth = covered[i], last = i == covered.length - 1;
        if (last && depth == 0 || $from.node(depth).type.contentMatch.validEnd) return tr.delete($from.start(depth), $to.end(depth));
        if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1)))) return tr.delete($from.before(depth), $to.after(depth));
    }
    for(let d = 1; d <= $from.depth && d <= $to.depth; d++){
        if (from - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d && $from.start(d - 1) == $to.start(d - 1) && $from.node(d - 1).canReplace($from.index(d - 1), $to.index(d - 1))) return tr.delete($from.before(d), to);
    }
    tr.delete(from, to);
}
// Returns an array of all depths for which $from - $to spans the
// whole content of the nodes at that depth.
function coveredDepths($from, $to) {
    let result = [], minDepth = Math.min($from.depth, $to.depth);
    for(let d = minDepth; d >= 0; d--){
        let start = $from.start(d);
        if (start < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating) break;
        if (start == $to.start(d) || d == $from.depth && d == $to.depth && $from.parent.inlineContent && $to.parent.inlineContent && d && $to.start(d - 1) == start - 1) result.push(d);
    }
    return result;
}
/**
Update an attribute in a specific node.
*/ class AttrStep extends Step {
    /**
    Construct an attribute step.
    */ constructor(/**
    The position of the target node.
    */ pos, /**
    The attribute to set.
    */ attr, // The attribute's new value.
    value){
        super();
        this.pos = pos;
        this.attr = attr;
        this.value = value;
    }
    apply(doc) {
        let node = doc.nodeAt(this.pos);
        if (!node) return StepResult.fail("No node at attribute step's position");
        let attrs = Object.create(null);
        for(let name in node.attrs)attrs[name] = node.attrs[name];
        attrs[this.attr] = this.value;
        let updated = node.type.create(attrs, null, node.marks);
        return StepResult.fromReplace(doc, this.pos, this.pos + 1, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(updated), 0, node.isLeaf ? 0 : 1));
    }
    getMap() {
        return StepMap.empty;
    }
    invert(doc) {
        return new AttrStep(this.pos, this.attr, doc.nodeAt(this.pos).attrs[this.attr]);
    }
    map(mapping) {
        let pos = mapping.mapResult(this.pos, 1);
        return pos.deletedAfter ? null : new AttrStep(pos.pos, this.attr, this.value);
    }
    toJSON() {
        return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value
        };
    }
    static fromJSON(schema, json) {
        if (typeof json.pos != "number" || typeof json.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
        return new AttrStep(json.pos, json.attr, json.value);
    }
}
Step.jsonID("attr", AttrStep);
/**
Update an attribute in the doc node.
*/ class DocAttrStep extends Step {
    /**
    Construct an attribute step.
    */ constructor(/**
    The attribute to set.
    */ attr, // The attribute's new value.
    value){
        super();
        this.attr = attr;
        this.value = value;
    }
    apply(doc) {
        let attrs = Object.create(null);
        for(let name in doc.attrs)attrs[name] = doc.attrs[name];
        attrs[this.attr] = this.value;
        let updated = doc.type.create(attrs, doc.content, doc.marks);
        return StepResult.ok(updated);
    }
    getMap() {
        return StepMap.empty;
    }
    invert(doc) {
        return new DocAttrStep(this.attr, doc.attrs[this.attr]);
    }
    map(mapping) {
        return this;
    }
    toJSON() {
        return {
            stepType: "docAttr",
            attr: this.attr,
            value: this.value
        };
    }
    static fromJSON(schema, json) {
        if (typeof json.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
        return new DocAttrStep(json.attr, json.value);
    }
}
Step.jsonID("docAttr", DocAttrStep);
/**
@internal
*/ let TransformError = class extends Error {
};
TransformError = function TransformError(message) {
    let err = Error.call(this, message);
    err.__proto__ = TransformError.prototype;
    return err;
};
TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError";
/**
Abstraction to build up and track an array of
[steps](https://prosemirror.net/docs/ref/#transform.Step) representing a document transformation.

Most transforming methods return the `Transform` object itself, so
that they can be chained.
*/ class Transform {
    /**
    Create a transform that starts with the given document.
    */ constructor(/**
    The current document (the result of applying the steps in the
    transform).
    */ doc){
        this.doc = doc;
        /**
        The steps in this transform.
        */ this.steps = [];
        /**
        The documents before each of the steps.
        */ this.docs = [];
        /**
        A mapping with the maps for each of the steps in this transform.
        */ this.mapping = new Mapping;
    }
    /**
    The starting document.
    */ get before() {
        return this.docs.length ? this.docs[0] : this.doc;
    }
    /**
    Apply a new step in this transform, saving the result. Throws an
    error when the step fails.
    */ step(step) {
        let result = this.maybeStep(step);
        if (result.failed) throw new TransformError(result.failed);
        return this;
    }
    /**
    Try to apply a step in this transformation, ignoring it if it
    fails. Returns the step result.
    */ maybeStep(step) {
        let result = step.apply(this.doc);
        if (!result.failed) this.addStep(step, result.doc);
        return result;
    }
    /**
    True when the document has been changed (when there are any
    steps).
    */ get docChanged() {
        return this.steps.length > 0;
    }
    /**
    Return a single range, in post-transform document positions,
    that covers all content changed by this transform. Returns null
    if no replacements are made. Note that this will ignore changes
    that add/remove marks without replacing the underlying content.
    */ changedRange() {
        let from = 1e9, to = -1e9;
        for(let i = 0; i < this.mapping.maps.length; i++){
            let map = this.mapping.maps[i];
            if (i) {
                from = map.map(from, 1);
                to = map.map(to, -1);
            }
            map.forEach((_f, _t, fromB, toB)=>{
                from = Math.min(from, fromB);
                to = Math.max(to, toB);
            });
        }
        return from == 1e9 ? null : {
            from,
            to
        };
    }
    /**
    @internal
    */ addStep(step, doc) {
        this.docs.push(this.doc);
        this.steps.push(step);
        this.mapping.appendMap(step.getMap());
        this.doc = doc;
    }
    /**
    Replace the part of the document between `from` and `to` with the
    given `slice`.
    */ replace(from, to = from, slice = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
        let step = replaceStep(this.doc, from, to, slice);
        if (step) this.step(step);
        return this;
    }
    /**
    Replace the given range with the given content, which may be a
    fragment, node, or array of nodes.
    */ replaceWith(from, to, content) {
        return this.replace(from, to, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(content), 0, 0));
    }
    /**
    Delete the content between the given positions.
    */ delete(from, to) {
        return this.replace(from, to, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty);
    }
    /**
    Insert the given content at the given position.
    */ insert(pos, content) {
        return this.replaceWith(pos, pos, content);
    }
    /**
    Replace a range of the document with a given slice, using
    `from`, `to`, and the slice's
    [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
    than fixed start and end points. This method may grow the
    replaced area or close open nodes in the slice in order to get a
    fit that is more in line with WYSIWYG expectations, by dropping
    fully covered parent nodes of the replaced region when they are
    marked [non-defining as
    context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
    open parent node from the slice that _is_ marked as [defining
    its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
    
    This is the method, for example, to handle paste. The similar
    [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
    primitive tool which will _not_ move the start and end of its given
    range, and is useful in situations where you need more precise
    control over what happens.
    */ replaceRange(from, to, slice) {
        replaceRange(this, from, to, slice);
        return this;
    }
    /**
    Replace the given range with a node, but use `from` and `to` as
    hints, rather than precise positions. When from and to are the same
    and are at the start or end of a parent node in which the given
    node doesn't fit, this method may _move_ them out towards a parent
    that does allow the given node to be placed. When the given range
    completely covers a parent node, this method may completely replace
    that parent node.
    */ replaceRangeWith(from, to, node) {
        replaceRangeWith(this, from, to, node);
        return this;
    }
    /**
    Delete the given range, expanding it to cover fully covered
    parent nodes until a valid replace is found.
    */ deleteRange(from, to) {
        deleteRange(this, from, to);
        return this;
    }
    /**
    Split the content in the given range off from its parent, if there
    is sibling content before or after it, and move it up the tree to
    the depth specified by `target`. You'll probably want to use
    [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
    sure the lift is valid.
    */ lift(range, target) {
        lift(this, range, target);
        return this;
    }
    /**
    Join the blocks around the given position. If depth is 2, their
    last and first siblings are also joined, and so on.
    */ join(pos, depth = 1) {
        join(this, pos, depth);
        return this;
    }
    /**
    Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
    The wrappers are assumed to be valid in this position, and should
    probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
    */ wrap(range, wrappers) {
        wrap(this, range, wrappers);
        return this;
    }
    /**
    Set the type of all textblocks (partly) between `from` and `to` to
    the given node type with the given attributes.
    */ setBlockType(from, to = from, type, attrs = null) {
        setBlockType(this, from, to, type, attrs);
        return this;
    }
    /**
    Change the type, attributes, and/or marks of the node at `pos`.
    When `type` isn't given, the existing node type is preserved,
    */ setNodeMarkup(pos, type, attrs = null, marks) {
        setNodeMarkup(this, pos, type, attrs, marks);
        return this;
    }
    /**
    Set a single attribute on a given node to a new value.
    The `pos` addresses the document content. Use `setDocAttribute`
    to set attributes on the document itself.
    */ setNodeAttribute(pos, attr, value) {
        this.step(new AttrStep(pos, attr, value));
        return this;
    }
    /**
    Set a single attribute on the document to a new value.
    */ setDocAttribute(attr, value) {
        this.step(new DocAttrStep(attr, value));
        return this;
    }
    /**
    Add a mark to the node at position `pos`.
    */ addNodeMark(pos, mark) {
        this.step(new AddNodeMarkStep(pos, mark));
        return this;
    }
    /**
    Remove a mark (or all marks of the given type) from the node at
    position `pos`.
    */ removeNodeMark(pos, mark) {
        let node = this.doc.nodeAt(pos);
        if (!node) throw new RangeError("No node at position " + pos);
        if (mark instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"]) {
            if (mark.isInSet(node.marks)) this.step(new RemoveNodeMarkStep(pos, mark));
        } else {
            let set = node.marks, found, steps = [];
            while(found = mark.isInSet(set)){
                steps.push(new RemoveNodeMarkStep(pos, found));
                set = found.removeFromSet(set);
            }
            for(let i = steps.length - 1; i >= 0; i--)this.step(steps[i]);
        }
        return this;
    }
    /**
    Split the node at the given position, and optionally, if `depth` is
    greater than one, any number of nodes above that. By default, the
    parts split off will inherit the node type of the original node.
    This can be changed by passing an array of types and attributes to
    use after the split (with the outermost nodes coming first).
    */ split(pos, depth = 1, typesAfter) {
        split(this, pos, depth, typesAfter);
        return this;
    }
    /**
    Add the given mark to the inline content between `from` and `to`.
    */ addMark(from, to, mark) {
        addMark(this, from, to, mark);
        return this;
    }
    /**
    Remove marks from inline nodes between `from` and `to`. When
    `mark` is a single mark, remove precisely that mark. When it is
    a mark type, remove all marks of that type. When it is null,
    remove all marks of any type.
    */ removeMark(from, to, mark) {
        removeMark(this, from, to, mark);
        return this;
    }
    /**
    Removes all marks and nodes from the content of the node at
    `pos` that don't match the given new parent node type. Accepts
    an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
    third argument.
    */ clearIncompatible(pos, parentType, match) {
        clearIncompatible(this, pos, parentType, match);
        return this;
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AllSelection",
    ()=>AllSelection,
    "EditorState",
    ()=>EditorState,
    "NodeSelection",
    ()=>NodeSelection,
    "Plugin",
    ()=>Plugin,
    "PluginKey",
    ()=>PluginKey,
    "Selection",
    ()=>Selection,
    "SelectionRange",
    ()=>SelectionRange,
    "TextSelection",
    ()=>TextSelection,
    "Transaction",
    ()=>Transaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
;
;
const classesById = Object.create(null);
/**
Superclass for editor selections. Every selection type should
extend this. Should not be instantiated directly.
*/ class Selection {
    /**
    Initialize a selection with the head and anchor and ranges. If no
    ranges are given, constructs a single range across `$anchor` and
    `$head`.
    */ constructor(/**
    The resolved anchor of the selection (the side that stays in
    place when the selection is modified).
    */ $anchor, /**
    The resolved head of the selection (the side that moves when
    the selection is modified).
    */ $head, ranges){
        this.$anchor = $anchor;
        this.$head = $head;
        this.ranges = ranges || [
            new SelectionRange($anchor.min($head), $anchor.max($head))
        ];
    }
    /**
    The selection's anchor, as an unresolved position.
    */ get anchor() {
        return this.$anchor.pos;
    }
    /**
    The selection's head.
    */ get head() {
        return this.$head.pos;
    }
    /**
    The lower bound of the selection's main range.
    */ get from() {
        return this.$from.pos;
    }
    /**
    The upper bound of the selection's main range.
    */ get to() {
        return this.$to.pos;
    }
    /**
    The resolved lower  bound of the selection's main range.
    */ get $from() {
        return this.ranges[0].$from;
    }
    /**
    The resolved upper bound of the selection's main range.
    */ get $to() {
        return this.ranges[0].$to;
    }
    /**
    Indicates whether the selection contains any content.
    */ get empty() {
        let ranges = this.ranges;
        for(let i = 0; i < ranges.length; i++)if (ranges[i].$from.pos != ranges[i].$to.pos) return false;
        return true;
    }
    /**
    Get the content of this selection as a slice.
    */ content() {
        return this.$from.doc.slice(this.from, this.to, true);
    }
    /**
    Replace the selection with a slice or, if no slice is given,
    delete the selection. Will append to the given transaction.
    */ replace(tr, content = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
        // Put the new selection at the position after the inserted
        // content. When that ended in an inline node, search backwards,
        // to get the position after that node. If not, search forward.
        let lastNode = content.content.lastChild, lastParent = null;
        for(let i = 0; i < content.openEnd; i++){
            lastParent = lastNode;
            lastNode = lastNode.lastChild;
        }
        let mapFrom = tr.steps.length, ranges = this.ranges;
        for(let i = 0; i < ranges.length; i++){
            let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
            tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty : content);
            if (i == 0) selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
        }
    }
    /**
    Replace the selection with the given node, appending the changes
    to the given transaction.
    */ replaceWith(tr, node) {
        let mapFrom = tr.steps.length, ranges = this.ranges;
        for(let i = 0; i < ranges.length; i++){
            let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
            let from = mapping.map($from.pos), to = mapping.map($to.pos);
            if (i) {
                tr.deleteRange(from, to);
            } else {
                tr.replaceRangeWith(from, to, node);
                selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
            }
        }
    }
    /**
    Find a valid cursor or leaf node selection starting at the given
    position and searching back if `dir` is negative, and forward if
    positive. When `textOnly` is true, only consider cursor
    selections. Will return null when no valid selection position is
    found.
    */ static findFrom($pos, dir, textOnly = false) {
        let inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
        if (inner) return inner;
        for(let depth = $pos.depth - 1; depth >= 0; depth--){
            let found = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
            if (found) return found;
        }
        return null;
    }
    /**
    Find a valid cursor or leaf node selection near the given
    position. Searches forward first by default, but if `bias` is
    negative, it will search backwards first.
    */ static near($pos, bias = 1) {
        return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
    }
    /**
    Find the cursor or leaf node selection closest to the start of
    the given document. Will return an
    [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
    exists.
    */ static atStart(doc) {
        return findSelectionIn(doc, doc, 0, 0, 1) || new AllSelection(doc);
    }
    /**
    Find the cursor or leaf node selection closest to the end of the
    given document.
    */ static atEnd(doc) {
        return findSelectionIn(doc, doc, doc.content.size, doc.childCount, -1) || new AllSelection(doc);
    }
    /**
    Deserialize the JSON representation of a selection. Must be
    implemented for custom classes (as a static class method).
    */ static fromJSON(doc, json) {
        if (!json || !json.type) throw new RangeError("Invalid input for Selection.fromJSON");
        let cls = classesById[json.type];
        if (!cls) throw new RangeError(`No selection type ${json.type} defined`);
        return cls.fromJSON(doc, json);
    }
    /**
    To be able to deserialize selections from JSON, custom selection
    classes must register themselves with an ID string, so that they
    can be disambiguated. Try to pick something that's unlikely to
    clash with classes from other modules.
    */ static jsonID(id, selectionClass) {
        if (id in classesById) throw new RangeError("Duplicate use of selection JSON ID " + id);
        classesById[id] = selectionClass;
        selectionClass.prototype.jsonID = id;
        return selectionClass;
    }
    /**
    Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
    which is a value that can be mapped without having access to a
    current document, and later resolved to a real selection for a
    given document again. (This is used mostly by the history to
    track and restore old selections.) The default implementation of
    this method just converts the selection to a text selection and
    returns the bookmark for that.
    */ getBookmark() {
        return TextSelection.between(this.$anchor, this.$head).getBookmark();
    }
}
Selection.prototype.visible = true;
/**
Represents a selected range in a document.
*/ class SelectionRange {
    /**
    Create a range.
    */ constructor(/**
    The lower bound of the range.
    */ $from, /**
    The upper bound of the range.
    */ $to){
        this.$from = $from;
        this.$to = $to;
    }
}
let warnedAboutTextSelection = false;
function checkTextSelection($pos) {
    if (!warnedAboutTextSelection && !$pos.parent.inlineContent) {
        warnedAboutTextSelection = true;
        console["warn"]("TextSelection endpoint not pointing into a node with inline content (" + $pos.parent.type.name + ")");
    }
}
/**
A text selection represents a classical editor selection, with a
head (the moving side) and anchor (immobile side), both of which
point into textblock nodes. It can be empty (a regular cursor
position).
*/ class TextSelection extends Selection {
    /**
    Construct a text selection between the given points.
    */ constructor($anchor, $head = $anchor){
        checkTextSelection($anchor);
        checkTextSelection($head);
        super($anchor, $head);
    }
    /**
    Returns a resolved position if this is a cursor selection (an
    empty text selection), and null otherwise.
    */ get $cursor() {
        return this.$anchor.pos == this.$head.pos ? this.$head : null;
    }
    map(doc, mapping) {
        let $head = doc.resolve(mapping.map(this.head));
        if (!$head.parent.inlineContent) return Selection.near($head);
        let $anchor = doc.resolve(mapping.map(this.anchor));
        return new TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
    }
    replace(tr, content = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
        super.replace(tr, content);
        if (content == __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
            let marks = this.$from.marksAcross(this.$to);
            if (marks) tr.ensureMarks(marks);
        }
    }
    eq(other) {
        return other instanceof TextSelection && other.anchor == this.anchor && other.head == this.head;
    }
    getBookmark() {
        return new TextBookmark(this.anchor, this.head);
    }
    toJSON() {
        return {
            type: "text",
            anchor: this.anchor,
            head: this.head
        };
    }
    /**
    @internal
    */ static fromJSON(doc, json) {
        if (typeof json.anchor != "number" || typeof json.head != "number") throw new RangeError("Invalid input for TextSelection.fromJSON");
        return new TextSelection(doc.resolve(json.anchor), doc.resolve(json.head));
    }
    /**
    Create a text selection from non-resolved positions.
    */ static create(doc, anchor, head = anchor) {
        let $anchor = doc.resolve(anchor);
        return new this($anchor, head == anchor ? $anchor : doc.resolve(head));
    }
    /**
    Return a text selection that spans the given positions or, if
    they aren't text positions, find a text selection near them.
    `bias` determines whether the method searches forward (default)
    or backwards (negative number) first. Will fall back to calling
    [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
    doesn't contain a valid text position.
    */ static between($anchor, $head, bias) {
        let dPos = $anchor.pos - $head.pos;
        if (!bias || dPos) bias = dPos >= 0 ? 1 : -1;
        if (!$head.parent.inlineContent) {
            let found = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);
            if (found) $head = found.$head;
            else return Selection.near($head, bias);
        }
        if (!$anchor.parent.inlineContent) {
            if (dPos == 0) {
                $anchor = $head;
            } else {
                $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;
                if ($anchor.pos < $head.pos != dPos < 0) $anchor = $head;
            }
        }
        return new TextSelection($anchor, $head);
    }
}
Selection.jsonID("text", TextSelection);
class TextBookmark {
    constructor(anchor, head){
        this.anchor = anchor;
        this.head = head;
    }
    map(mapping) {
        return new TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
    }
    resolve(doc) {
        return TextSelection.between(doc.resolve(this.anchor), doc.resolve(this.head));
    }
}
/**
A node selection is a selection that points at a single node. All
nodes marked [selectable](https://prosemirror.net/docs/ref/#model.NodeSpec.selectable) can be the
target of a node selection. In such a selection, `from` and `to`
point directly before and after the selected node, `anchor` equals
`from`, and `head` equals `to`..
*/ class NodeSelection extends Selection {
    /**
    Create a node selection. Does not verify the validity of its
    argument.
    */ constructor($pos){
        let node = $pos.nodeAfter;
        let $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
        super($pos, $end);
        this.node = node;
    }
    map(doc, mapping) {
        let { deleted, pos } = mapping.mapResult(this.anchor);
        let $pos = doc.resolve(pos);
        if (deleted) return Selection.near($pos);
        return new NodeSelection($pos);
    }
    content() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(this.node), 0, 0);
    }
    eq(other) {
        return other instanceof NodeSelection && other.anchor == this.anchor;
    }
    toJSON() {
        return {
            type: "node",
            anchor: this.anchor
        };
    }
    getBookmark() {
        return new NodeBookmark(this.anchor);
    }
    /**
    @internal
    */ static fromJSON(doc, json) {
        if (typeof json.anchor != "number") throw new RangeError("Invalid input for NodeSelection.fromJSON");
        return new NodeSelection(doc.resolve(json.anchor));
    }
    /**
    Create a node selection from non-resolved positions.
    */ static create(doc, from) {
        return new NodeSelection(doc.resolve(from));
    }
    /**
    Determines whether the given node may be selected as a node
    selection.
    */ static isSelectable(node) {
        return !node.isText && node.type.spec.selectable !== false;
    }
}
NodeSelection.prototype.visible = false;
Selection.jsonID("node", NodeSelection);
class NodeBookmark {
    constructor(anchor){
        this.anchor = anchor;
    }
    map(mapping) {
        let { deleted, pos } = mapping.mapResult(this.anchor);
        return deleted ? new TextBookmark(pos, pos) : new NodeBookmark(pos);
    }
    resolve(doc) {
        let $pos = doc.resolve(this.anchor), node = $pos.nodeAfter;
        if (node && NodeSelection.isSelectable(node)) return new NodeSelection($pos);
        return Selection.near($pos);
    }
}
/**
A selection type that represents selecting the whole document
(which can not necessarily be expressed with a text selection, when
there are for example leaf block nodes at the start or end of the
document).
*/ class AllSelection extends Selection {
    /**
    Create an all-selection over the given document.
    */ constructor(doc){
        super(doc.resolve(0), doc.resolve(doc.content.size));
    }
    replace(tr, content = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
        if (content == __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
            tr.delete(0, tr.doc.content.size);
            let sel = Selection.atStart(tr.doc);
            if (!sel.eq(tr.selection)) tr.setSelection(sel);
        } else {
            super.replace(tr, content);
        }
    }
    toJSON() {
        return {
            type: "all"
        };
    }
    /**
    @internal
    */ static fromJSON(doc) {
        return new AllSelection(doc);
    }
    map(doc) {
        return new AllSelection(doc);
    }
    eq(other) {
        return other instanceof AllSelection;
    }
    getBookmark() {
        return AllBookmark;
    }
}
Selection.jsonID("all", AllSelection);
const AllBookmark = {
    map () {
        return this;
    },
    resolve (doc) {
        return new AllSelection(doc);
    }
};
// FIXME we'll need some awareness of text direction when scanning for selections
// Try to find a selection inside the given node. `pos` points at the
// position where the search starts. When `text` is true, only return
// text selections.
function findSelectionIn(doc, node, pos, index, dir, text = false) {
    if (node.inlineContent) return TextSelection.create(doc, pos);
    for(let i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir){
        let child = node.child(i);
        if (!child.isAtom) {
            let inner = findSelectionIn(doc, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);
            if (inner) return inner;
        } else if (!text && NodeSelection.isSelectable(child)) {
            return NodeSelection.create(doc, pos - (dir < 0 ? child.nodeSize : 0));
        }
        pos += child.nodeSize * dir;
    }
    return null;
}
function selectionToInsertionEnd(tr, startLen, bias) {
    let last = tr.steps.length - 1;
    if (last < startLen) return;
    let step = tr.steps[last];
    if (!(step instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceStep"] || step instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceAroundStep"])) return;
    let map = tr.mapping.maps[last], end;
    map.forEach((_from, _to, _newFrom, newTo)=>{
        if (end == null) end = newTo;
    });
    tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
}
const UPDATED_SEL = 1, UPDATED_MARKS = 2, UPDATED_SCROLL = 4;
/**
An editor state transaction, which can be applied to a state to
create an updated state. Use
[`EditorState.tr`](https://prosemirror.net/docs/ref/#state.EditorState.tr) to create an instance.

Transactions track changes to the document (they are a subclass of
[`Transform`](https://prosemirror.net/docs/ref/#transform.Transform)), but also other state changes,
like selection updates and adjustments of the set of [stored
marks](https://prosemirror.net/docs/ref/#state.EditorState.storedMarks). In addition, you can store
metadata properties in a transaction, which are extra pieces of
information that client code or plugins can use to describe what a
transaction represents, so that they can update their [own
state](https://prosemirror.net/docs/ref/#state.StateField) accordingly.

The [editor view](https://prosemirror.net/docs/ref/#view.EditorView) uses a few metadata
properties: it will attach a property `"pointer"` with the value
`true` to selection transactions directly caused by mouse or touch
input, a `"composition"` property holding an ID identifying the
composition that caused it to transactions caused by composed DOM
input, and a `"uiEvent"` property of that may be `"paste"`,
`"cut"`, or `"drop"`.
*/ class Transaction extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"] {
    /**
    @internal
    */ constructor(state){
        super(state.doc);
        // The step count for which the current selection is valid.
        this.curSelectionFor = 0;
        // Bitfield to track which aspects of the state were updated by
        // this transaction.
        this.updated = 0;
        // Object used to store metadata properties for the transaction.
        this.meta = Object.create(null);
        this.time = Date.now();
        this.curSelection = state.selection;
        this.storedMarks = state.storedMarks;
    }
    /**
    The transaction's current selection. This defaults to the editor
    selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
    transaction, but can be overwritten with
    [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
    */ get selection() {
        if (this.curSelectionFor < this.steps.length) {
            this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
            this.curSelectionFor = this.steps.length;
        }
        return this.curSelection;
    }
    /**
    Update the transaction's current selection. Will determine the
    selection that the editor gets when the transaction is applied.
    */ setSelection(selection) {
        if (selection.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
        this.curSelection = selection;
        this.curSelectionFor = this.steps.length;
        this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS;
        this.storedMarks = null;
        return this;
    }
    /**
    Whether the selection was explicitly updated by this transaction.
    */ get selectionSet() {
        return (this.updated & UPDATED_SEL) > 0;
    }
    /**
    Set the current stored marks.
    */ setStoredMarks(marks) {
        this.storedMarks = marks;
        this.updated |= UPDATED_MARKS;
        return this;
    }
    /**
    Make sure the current stored marks or, if that is null, the marks
    at the selection, match the given set of marks. Does nothing if
    this is already the case.
    */ ensureMarks(marks) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].sameSet(this.storedMarks || this.selection.$from.marks(), marks)) this.setStoredMarks(marks);
        return this;
    }
    /**
    Add a mark to the set of stored marks.
    */ addStoredMark(mark) {
        return this.ensureMarks(mark.addToSet(this.storedMarks || this.selection.$head.marks()));
    }
    /**
    Remove a mark or mark type from the set of stored marks.
    */ removeStoredMark(mark) {
        return this.ensureMarks(mark.removeFromSet(this.storedMarks || this.selection.$head.marks()));
    }
    /**
    Whether the stored marks were explicitly set for this transaction.
    */ get storedMarksSet() {
        return (this.updated & UPDATED_MARKS) > 0;
    }
    /**
    @internal
    */ addStep(step, doc) {
        super.addStep(step, doc);
        this.updated = this.updated & ~UPDATED_MARKS;
        this.storedMarks = null;
    }
    /**
    Update the timestamp for the transaction.
    */ setTime(time) {
        this.time = time;
        return this;
    }
    /**
    Replace the current selection with the given slice.
    */ replaceSelection(slice) {
        this.selection.replace(this, slice);
        return this;
    }
    /**
    Replace the selection with the given node. When `inheritMarks` is
    true and the content is inline, it inherits the marks from the
    place where it is inserted.
    */ replaceSelectionWith(node, inheritMarks = true) {
        let selection = this.selection;
        if (inheritMarks) node = node.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].none));
        selection.replaceWith(this, node);
        return this;
    }
    /**
    Delete the selection.
    */ deleteSelection() {
        this.selection.replace(this);
        return this;
    }
    /**
    Replace the given range, or the selection if no range is given,
    with a text node containing the given string.
    */ insertText(text, from, to) {
        let schema = this.doc.type.schema;
        if (from == null) {
            if (!text) return this.deleteSelection();
            return this.replaceSelectionWith(schema.text(text), true);
        } else {
            if (to == null) to = from;
            if (!text) return this.deleteRange(from, to);
            let marks = this.storedMarks;
            if (!marks) {
                let $from = this.doc.resolve(from);
                marks = to == from ? $from.marks() : $from.marksAcross(this.doc.resolve(to));
            }
            this.replaceRangeWith(from, to, schema.text(text, marks));
            if (!this.selection.empty && this.selection.to == from + text.length) this.setSelection(Selection.near(this.selection.$to));
            return this;
        }
    }
    /**
    Store a metadata property in this transaction, keyed either by
    name or by plugin.
    */ setMeta(key, value) {
        this.meta[typeof key == "string" ? key : key.key] = value;
        return this;
    }
    /**
    Retrieve a metadata property for a given name or plugin.
    */ getMeta(key) {
        return this.meta[typeof key == "string" ? key : key.key];
    }
    /**
    Returns true if this transaction doesn't contain any metadata,
    and can thus safely be extended.
    */ get isGeneric() {
        for(let _ in this.meta)return false;
        return true;
    }
    /**
    Indicate that the editor should scroll the selection into view
    when updated to the state produced by this transaction.
    */ scrollIntoView() {
        this.updated |= UPDATED_SCROLL;
        return this;
    }
    /**
    True when this transaction has had `scrollIntoView` called on it.
    */ get scrolledIntoView() {
        return (this.updated & UPDATED_SCROLL) > 0;
    }
}
function bind(f, self) {
    return !self || !f ? f : f.bind(self);
}
class FieldDesc {
    constructor(name, desc, self){
        this.name = name;
        this.init = bind(desc.init, self);
        this.apply = bind(desc.apply, self);
    }
}
const baseFields = [
    new FieldDesc("doc", {
        init (config) {
            return config.doc || config.schema.topNodeType.createAndFill();
        },
        apply (tr) {
            return tr.doc;
        }
    }),
    new FieldDesc("selection", {
        init (config, instance) {
            return config.selection || Selection.atStart(instance.doc);
        },
        apply (tr) {
            return tr.selection;
        }
    }),
    new FieldDesc("storedMarks", {
        init (config) {
            return config.storedMarks || null;
        },
        apply (tr, _marks, _old, state) {
            return state.selection.$cursor ? tr.storedMarks : null;
        }
    }),
    new FieldDesc("scrollToSelection", {
        init () {
            return 0;
        },
        apply (tr, prev) {
            return tr.scrolledIntoView ? prev + 1 : prev;
        }
    })
];
// Object wrapping the part of a state object that stays the same
// across transactions. Stored in the state's `config` property.
class Configuration {
    constructor(schema, plugins){
        this.schema = schema;
        this.plugins = [];
        this.pluginsByKey = Object.create(null);
        this.fields = baseFields.slice();
        if (plugins) plugins.forEach((plugin)=>{
            if (this.pluginsByKey[plugin.key]) throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")");
            this.plugins.push(plugin);
            this.pluginsByKey[plugin.key] = plugin;
            if (plugin.spec.state) this.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin));
        });
    }
}
/**
The state of a ProseMirror editor is represented by an object of
this type. A state is a persistent data structure—it isn't
updated, but rather a new state value is computed from an old one
using the [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) method.

A state holds a number of built-in fields, and plugins can
[define](https://prosemirror.net/docs/ref/#state.PluginSpec.state) additional fields.
*/ class EditorState {
    /**
    @internal
    */ constructor(/**
    @internal
    */ config){
        this.config = config;
    }
    /**
    The schema of the state's document.
    */ get schema() {
        return this.config.schema;
    }
    /**
    The plugins that are active in this state.
    */ get plugins() {
        return this.config.plugins;
    }
    /**
    Apply the given transaction to produce a new state.
    */ apply(tr) {
        return this.applyTransaction(tr).state;
    }
    /**
    @internal
    */ filterTransaction(tr, ignore = -1) {
        for(let i = 0; i < this.config.plugins.length; i++)if (i != ignore) {
            let plugin = this.config.plugins[i];
            if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this)) return false;
        }
        return true;
    }
    /**
    Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
    returns the precise transactions that were applied (which might
    be influenced by the [transaction
    hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
    plugins) along with the new state.
    */ applyTransaction(rootTr) {
        if (!this.filterTransaction(rootTr)) return {
            state: this,
            transactions: []
        };
        let trs = [
            rootTr
        ], newState = this.applyInner(rootTr), seen = null;
        // This loop repeatedly gives plugins a chance to respond to
        // transactions as new transactions are added, making sure to only
        // pass the transactions the plugin did not see before.
        for(;;){
            let haveNew = false;
            for(let i = 0; i < this.config.plugins.length; i++){
                let plugin = this.config.plugins[i];
                if (plugin.spec.appendTransaction) {
                    let n = seen ? seen[i].n : 0, oldState = seen ? seen[i].state : this;
                    let tr = n < trs.length && plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);
                    if (tr && newState.filterTransaction(tr, i)) {
                        tr.setMeta("appendedTransaction", rootTr);
                        if (!seen) {
                            seen = [];
                            for(let j = 0; j < this.config.plugins.length; j++)seen.push(j < i ? {
                                state: newState,
                                n: trs.length
                            } : {
                                state: this,
                                n: 0
                            });
                        }
                        trs.push(tr);
                        newState = newState.applyInner(tr);
                        haveNew = true;
                    }
                    if (seen) seen[i] = {
                        state: newState,
                        n: trs.length
                    };
                }
            }
            if (!haveNew) return {
                state: newState,
                transactions: trs
            };
        }
    }
    /**
    @internal
    */ applyInner(tr) {
        if (!tr.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
        let newInstance = new EditorState(this.config), fields = this.config.fields;
        for(let i = 0; i < fields.length; i++){
            let field = fields[i];
            newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
        }
        return newInstance;
    }
    /**
    Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
    */ get tr() {
        return new Transaction(this);
    }
    /**
    Create a new state.
    */ static create(config) {
        let $config = new Configuration(config.doc ? config.doc.type.schema : config.schema, config.plugins);
        let instance = new EditorState($config);
        for(let i = 0; i < $config.fields.length; i++)instance[$config.fields[i].name] = $config.fields[i].init(config, instance);
        return instance;
    }
    /**
    Create a new state based on this one, but with an adjusted set
    of active plugins. State fields that exist in both sets of
    plugins are kept unchanged. Those that no longer exist are
    dropped, and those that are new are initialized using their
    [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
    configuration object..
    */ reconfigure(config) {
        let $config = new Configuration(this.schema, config.plugins);
        let fields = $config.fields, instance = new EditorState($config);
        for(let i = 0; i < fields.length; i++){
            let name = fields[i].name;
            instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config, instance);
        }
        return instance;
    }
    /**
    Serialize this state to JSON. If you want to serialize the state
    of plugins, pass an object mapping property names to use in the
    resulting JSON object to plugin objects. The argument may also be
    a string or number, in which case it is ignored, to support the
    way `JSON.stringify` calls `toString` methods.
    */ toJSON(pluginFields) {
        let result = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON()
        };
        if (this.storedMarks) result.storedMarks = this.storedMarks.map((m)=>m.toJSON());
        if (pluginFields && typeof pluginFields == 'object') for(let prop in pluginFields){
            if (prop == "doc" || prop == "selection") throw new RangeError("The JSON fields `doc` and `selection` are reserved");
            let plugin = pluginFields[prop], state = plugin.spec.state;
            if (state && state.toJSON) result[prop] = state.toJSON.call(plugin, this[plugin.key]);
        }
        return result;
    }
    /**
    Deserialize a JSON representation of a state. `config` should
    have at least a `schema` field, and should contain array of
    plugins to initialize the state with. `pluginFields` can be used
    to deserialize the state of plugins, by associating plugin
    instances with the property names they use in the JSON object.
    */ static fromJSON(config, json, pluginFields) {
        if (!json) throw new RangeError("Invalid input for EditorState.fromJSON");
        if (!config.schema) throw new RangeError("Required config field 'schema' missing");
        let $config = new Configuration(config.schema, config.plugins);
        let instance = new EditorState($config);
        $config.fields.forEach((field)=>{
            if (field.name == "doc") {
                instance.doc = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].fromJSON(config.schema, json.doc);
            } else if (field.name == "selection") {
                instance.selection = Selection.fromJSON(instance.doc, json.selection);
            } else if (field.name == "storedMarks") {
                if (json.storedMarks) instance.storedMarks = json.storedMarks.map(config.schema.markFromJSON);
            } else {
                if (pluginFields) for(let prop in pluginFields){
                    let plugin = pluginFields[prop], state = plugin.spec.state;
                    if (plugin.key == field.name && state && state.fromJSON && Object.prototype.hasOwnProperty.call(json, prop)) {
                        instance[field.name] = state.fromJSON.call(plugin, config, json[prop], instance);
                        return;
                    }
                }
                instance[field.name] = field.init(config, instance);
            }
        });
        return instance;
    }
}
function bindProps(obj, self, target) {
    for(let prop in obj){
        let val = obj[prop];
        if (val instanceof Function) val = val.bind(self);
        else if (prop == "handleDOMEvents") val = bindProps(val, self, {});
        target[prop] = val;
    }
    return target;
}
/**
Plugins bundle functionality that can be added to an editor.
They are part of the [editor state](https://prosemirror.net/docs/ref/#state.EditorState) and
may influence that state and the view that contains it.
*/ class Plugin {
    /**
    Create a plugin.
    */ constructor(/**
    The plugin's [spec object](https://prosemirror.net/docs/ref/#state.PluginSpec).
    */ spec){
        this.spec = spec;
        /**
        The [props](https://prosemirror.net/docs/ref/#view.EditorProps) exported by this plugin.
        */ this.props = {};
        if (spec.props) bindProps(spec.props, this, this.props);
        this.key = spec.key ? spec.key.key : createKey("plugin");
    }
    /**
    Extract the plugin's state field from an editor state.
    */ getState(state) {
        return state[this.key];
    }
}
const keys = Object.create(null);
function createKey(name) {
    if (name in keys) return name + "$" + ++keys[name];
    keys[name] = 0;
    return name + "$";
}
/**
A key is used to [tag](https://prosemirror.net/docs/ref/#state.PluginSpec.key) plugins in a way
that makes it possible to find them, given an editor state.
Assigning a key does mean only one plugin of that type can be
active in a state.
*/ class PluginKey {
    /**
    Create a plugin key.
    */ constructor(name = "key"){
        this.key = createKey(name);
    }
    /**
    Get the active plugin with this key, if any, from an editor
    state.
    */ get(state) {
        return state.config.pluginsByKey[this.key];
    }
    /**
    Get the plugin's state from an editor state.
    */ getState(state) {
        return state[this.key];
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/tabbable@6.5.0/node_modules/tabbable/dist/index.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "focusable",
    ()=>focusable,
    "getTabIndex",
    ()=>getTabIndex,
    "isFocusable",
    ()=>isFocusable,
    "isTabbable",
    ()=>isTabbable,
    "tabbable",
    ()=>tabbable
]);
/*!
* tabbable 6.5.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/ // NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
var candidateSelectors = [
    'input:not([inert]):not([inert] *)',
    'select:not([inert]):not([inert] *)',
    'textarea:not([inert]):not([inert] *)',
    'a[href]:not([inert]):not([inert] *)',
    'area[href]:not([inert]):not([inert] *)',
    'button:not([inert]):not([inert] *)',
    '[tabindex]:not(slot):not([inert]):not([inert] *)',
    'audio[controls]:not([inert]):not([inert] *)',
    'video[controls]:not([inert]):not([inert] *)',
    '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',
    'details>summary:first-of-type:not([inert]):not([inert] *)',
    'details:not([inert]):not([inert] *)'
];
var candidateSelector = /* #__PURE__ */ candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
    var _element$getRootNode;
    return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
    return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Node} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */ var _isInert = function isInert(node, lookUp) {
    var _node$getAttribute;
    if (lookUp === void 0) {
        lookUp = true;
    }
    // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
    //  JS API property; we have to check the attribute, which can either be empty or 'true';
    //  if it's `null` (not specified) or 'false', it's an active element
    var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
    var inert = inertAtt === '' || inertAtt === 'true';
    // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
    //  if it weren't for `matches()` not being a function on shadow roots; the following
    //  code works for any kind of node
    var result = inert || lookUp && node && (// closest does not exist on shadow roots, so we fall back to a manual
    // lookup upward, in case it is not defined.
    typeof node.closest === 'function' ? node.closest('[inert]') : _isInert(node.parentNode));
    return result;
};
/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */ var isContentEditable = function isContentEditable(node) {
    var _node$getAttribute2;
    // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
    //  to use the attribute directly to check for this, which can either be empty or 'true';
    //  if it's `null` (not specified) or 'false', it's a non-editable element
    var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
    return attValue === '' || attValue === 'true';
};
/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */ var getCandidates = function getCandidates(el, includeContainer, filter) {
    // even if `includeContainer=false`, we still have to check it for inertness because
    //  if it's inert (either by itself or via its parent), then all its children are inert
    if (_isInert(el)) {
        return [];
    }
    var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
    if (includeContainer && matches.call(el, candidateSelector)) {
        candidates.unshift(el);
    }
    candidates = candidates.filter(filter);
    return candidates;
};
/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */ /**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */ /**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */ /**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */ /**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */ var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
    var candidates = [];
    var elementsToCheck = Array.from(elements);
    while(elementsToCheck.length){
        var element = elementsToCheck.shift();
        if (_isInert(element, false)) {
            continue;
        }
        if (element.tagName === 'SLOT') {
            // add shadow dom slot scope (slot itself cannot be focusable)
            var assigned = element.assignedElements();
            var content = assigned.length ? assigned : element.children;
            var nestedCandidates = _getCandidatesIteratively(content, true, options);
            if (options.flatten) {
                candidates.push.apply(candidates, nestedCandidates);
            } else {
                candidates.push({
                    scopeParent: element,
                    candidates: nestedCandidates
                });
            }
        } else {
            // check candidate element
            var validCandidate = matches.call(element, candidateSelector);
            if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
                candidates.push(element);
            }
            // iterate over shadow content if possible
            var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
            typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);
            // no inert look up because we're already drilling down and checking for inertness
            //  on the way down, so all containers to this root node should have already been
            //  vetted as non-inert
            var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
            if (shadowRoot && validShadowRoot) {
                // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
                //  shadow exists, so look at light dom children as fallback BUT create a scope for any
                //  child candidates found because they're likely slotted elements (elements that are
                //  children of the web component element (which has the shadow), in the light dom, but
                //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
                //  _after_ we return from this recursive call
                var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
                if (options.flatten) {
                    candidates.push.apply(candidates, _nestedCandidates);
                } else {
                    candidates.push({
                        scopeParent: element,
                        candidates: _nestedCandidates
                    });
                }
            } else {
                // there's not shadow so just dig into the element's (light dom) children
                //  __without__ giving the element special scope treatment
                elementsToCheck.unshift.apply(elementsToCheck, element.children);
            }
        }
    }
    return candidates;
};
/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */ var hasTabIndex = function hasTabIndex(node) {
    return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};
/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */ var getTabIndex = function getTabIndex(node) {
    if (!node) {
        throw new Error('No node provided');
    }
    if (node.tabIndex < 0) {
        // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
        // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
        // yet they are still part of the regular tab order; in FF, they get a default
        // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
        // order, consider their tab index to be 0.
        // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
        // so if they don't have a tabindex attribute specifically set, assume it's 0.
        if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
            return 0;
        }
    }
    return node.tabIndex;
};
/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */ var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
    var tabIndex = getTabIndex(node);
    if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
        return 0;
    }
    return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
    return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
    return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
    var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function(child) {
        return child.tagName === 'SUMMARY';
    });
    return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
    for(var i = 0; i < nodes.length; i++){
        if (nodes[i].checked && nodes[i].form === form) {
            return nodes[i];
        }
    }
};
var isTabbableRadio = function isTabbableRadio(node) {
    if (!node.name) {
        return true;
    }
    var radioScope = node.form || getRootNode(node);
    var queryRadios = function queryRadios(name) {
        return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };
    var radioSet;
    if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
        radioSet = queryRadios(window.CSS.escape(node.name));
    } else {
        try {
            radioSet = queryRadios(node.name);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
            return false;
        }
    }
    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
};
var isRadio = function isRadio(node) {
    return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
    return isRadio(node) && !isTabbableRadio(node);
};
// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
    var _nodeRoot;
    // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
    //  (but NOT _the_ document; see second 'If' comment below for more).
    // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
    //  is attached, and the one we need to check if it's in the document or not (because the
    //  shadow, and all nodes it contains, is never considered in the document since shadows
    //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
    //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
    //  visibility, including all the nodes it contains). The host could be any normal node,
    //  or a custom element (i.e. web component). Either way, that's the one that is considered
    //  part of the document, not the shadow root, nor any of its children (i.e. the node being
    //  tested).
    // To further complicate things, we have to look all the way up until we find a shadow HOST
    //  that is attached (or find none) because the node might be in nested shadows...
    // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
    //  document (per the docs) and while it's a Document-type object, that document does not
    //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
    //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
    //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
    //  node is actually detached.
    // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
    //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
    //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
    //  `ownerDocument` will be `null`, hence the optional chaining on it.
    var nodeRoot = node && getRootNode(node);
    var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
    // in some cases, a detached node will return itself as the root instead of a document or
    //  shadow root object, in which case, we shouldn't try to look further up the host chain
    var attached = false;
    if (nodeRoot && nodeRoot !== node) {
        var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
        attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
        while(!attached && nodeRootHost){
            var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
            // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
            //  which means we need to get the host's host and check if that parent host is contained
            //  in (i.e. attached to) the document
            nodeRoot = getRootNode(nodeRootHost);
            nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
            attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
        }
    }
    return attached;
};
var isZeroArea = function isZeroArea(node) {
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
    return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
    var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
    if (displayCheck === 'full-native') {
        if ('checkVisibility' in node) {
            // Chrome >= 105, Edge >= 105, Firefox >= 106, Safari >= 17.4
            // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/checkVisibility#browser_compatibility
            var visible = node.checkVisibility({
                // Checking opacity might be desirable for some use cases, but natively,
                // opacity zero elements _are_ focusable and tabbable.
                checkOpacity: false,
                opacityProperty: false,
                contentVisibilityAuto: true,
                visibilityProperty: true,
                // This is an alias for `visibilityProperty`. Contemporary browsers
                // support both. However, this alias has wider browser support (Chrome
                // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
                // we include it anyway.
                checkVisibilityCSS: true
            });
            return !visible;
        }
    // Fall through to manual visibility checks
    }
    // NOTE: visibility will be `undefined` if node is detached from the document
    //  (see notes about this further down), which means we will consider it visible
    //  (this is legacy behavior from a very long way back)
    // NOTE: we check this regardless of `displayCheck="none"` because this is a
    //  _visibility_ check, not a _display_ check
    var _getComputedStyle = getComputedStyle(node), visibility = _getComputedStyle.visibility;
    if (visibility === 'hidden' || visibility === 'collapse') {
        return true;
    }
    var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
    if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
        return true;
    }
    if (!displayCheck || displayCheck === 'full' || // full-native can run this branch when it falls through in case
    // Element#checkVisibility is unsupported
    displayCheck === 'full-native' || displayCheck === 'legacy-full') {
        if (typeof getShadowRoot === 'function') {
            // figure out if we should consider the node to be in an undisclosed shadow and use the
            //  'non-zero-area' fallback
            var originalNode = node;
            while(node){
                var parentElement = node.parentElement;
                var rootNode = getRootNode(node);
                if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
                ) {
                    // node has an undisclosed shadow which means we can only treat it as a black box, so we
                    //  fall back to a non-zero-area test
                    return isZeroArea(node);
                } else if (node.assignedSlot) {
                    // iterate up slot
                    node = node.assignedSlot;
                } else if (!parentElement && rootNode !== node.ownerDocument) {
                    // cross shadow boundary
                    node = rootNode.host;
                } else {
                    // iterate up normal dom
                    node = parentElement;
                }
            }
            node = originalNode;
        }
        // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
        //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
        //  it might be a falsy value, which means shadow DOM support is disabled
        // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
        //  now we can just test to see if it would normally be visible or not, provided it's
        //  attached to the main document.
        // NOTE: We must consider case where node is inside a shadow DOM and given directly to
        //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.
        if (isNodeAttached(node)) {
            // this works wherever the node is: if there's at least one client rect, it's
            //  somehow displayed; it also covers the CSS 'display: contents' case where the
            //  node itself is hidden in place of its contents; and there's no need to search
            //  up the hierarchy either
            return !node.getClientRects().length;
        }
        // Else, the node isn't attached to the document, which means the `getClientRects()`
        //  API will __always__ return zero rects (this can happen, for example, if React
        //  is used to render nodes onto a detached tree, as confirmed in this thread:
        //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
        //
        // It also means that even window.getComputedStyle(node).display will return `undefined`
        //  because styles are only computed for nodes that are in the document.
        //
        // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
        //  somehow. Though it was never stated officially, anyone who has ever used tabbable
        //  APIs on nodes in detached containers has actually implicitly used tabbable in what
        //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
        //  considering __everything__ to be visible because of the innability to determine styles.
        //
        // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
        //  nodes as visible with the 'none' fallback.__
        if (displayCheck !== 'legacy-full') {
            return true; // hidden
        }
    // else, fallback to 'none' mode and consider the node visible
    } else if (displayCheck === 'non-zero-area') {
        // NOTE: Even though this tests that the node's client rect is non-zero to determine
        //  whether it's displayed, and that a detached node will __always__ have a zero-area
        //  client rect, we don't special-case for whether the node is attached or not. In
        //  this mode, we do want to consider nodes that have a zero area to be hidden at all
        //  times, and that includes attached or not.
        return isZeroArea(node);
    }
    // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
    //  it's visible
    return false;
};
// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
        var parentNode = node.parentElement;
        // check if `node` is contained in a disabled <fieldset>
        while(parentNode){
            if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
                // look for the first <legend> among the children of the disabled <fieldset>
                for(var i = 0; i < parentNode.children.length; i++){
                    var child = parentNode.children.item(i);
                    // when the first <legend> (in document order) is found
                    if (child.tagName === 'LEGEND') {
                        // if its parent <fieldset> is not nested in another disabled <fieldset>,
                        // return whether `node` is a descendant of its first <legend>
                        return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
                    }
                }
                // the disabled <fieldset> containing `node` has no <legend>
                return true;
            }
            parentNode = parentNode.parentElement;
        }
    }
    // else, node's tabbable/focusable state should not be affected by a fieldset's
    //  enabled/disabled state
    return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
    if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
    isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
        return false;
    }
    return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
    if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
        return false;
    }
    return true;
};
var isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
    var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
    if (isNaN(tabIndex) || tabIndex >= 0) {
        return true;
    }
    // If a custom element has an explicit negative tabindex,
    // browsers will not allow tab targeting said element's children.
    return false;
};
/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */ var _sortByOrder = function sortByOrder(candidates) {
    var regularTabbables = [];
    var orderedTabbables = [];
    candidates.forEach(function(item, i) {
        var isScope = !!item.scopeParent;
        var element = isScope ? item.scopeParent : item;
        var candidateTabindex = getSortOrderTabIndex(element, isScope);
        var elements = isScope ? _sortByOrder(item.candidates) : element;
        if (candidateTabindex === 0) {
            isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
        } else {
            orderedTabbables.push({
                documentOrder: i,
                tabIndex: candidateTabindex,
                item: item,
                isScope: isScope,
                content: elements
            });
        }
    });
    return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
        sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
        return acc;
    }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) {
        candidates = _getCandidatesIteratively([
            container
        ], options.includeContainer, {
            filter: isNodeMatchingSelectorTabbable.bind(null, options),
            flatten: false,
            getShadowRoot: options.getShadowRoot,
            shadowRootFilter: isShadowRootTabbable
        });
    } else {
        candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
    }
    return _sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) {
        candidates = _getCandidatesIteratively([
            container
        ], options.includeContainer, {
            filter: isNodeMatchingSelectorFocusable.bind(null, options),
            flatten: true,
            getShadowRoot: options.getShadowRoot
        });
    } else {
        candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
    }
    return candidates;
};
var isTabbable = function isTabbable(node, options) {
    options = options || {};
    if (!node) {
        throw new Error('No node provided');
    }
    if (matches.call(node, candidateSelector) === false) {
        return false;
    }
    return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */ candidateSelectors.concat('iframe:not([inert]):not([inert] *)').join(',');
var isFocusable = function isFocusable(node, options) {
    options = options || {};
    if (!node) {
        throw new Error('No node provided');
    }
    if (matches.call(node, focusableCandidateSelector) === false) {
        return false;
    }
    return isNodeMatchingSelectorFocusable(options, node);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/focus-trap@7.8.0/node_modules/focus-trap/dist/focus-trap.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFocusTrap",
    ()=>createFocusTrap
]);
/*!
* focus-trap 7.8.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/tabbable@6.5.0/node_modules/tabbable/dist/index.esm.js [app-client] (ecmascript)");
;
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
        if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
            t && (r = t);
            var n = 0, F = function() {};
            return {
                s: F,
                n: function() {
                    return n >= r.length ? {
                        done: true
                    } : {
                        done: false,
                        value: r[n++]
                    };
                },
                e: function(r) {
                    throw r;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o, a = true, u = false;
    return {
        s: function() {
            t = t.call(r);
        },
        n: function() {
            var r = t.next();
            return a = r.done, r;
        },
        e: function(r) {
            u = true, o = r;
        },
        f: function() {
            try {
                a || null == t.return || t.return();
            } finally{
                if (u) throw o;
            }
        }
    };
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
    }) : e[r] = t, e;
}
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r);
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
var activeFocusTraps = {
    // Returns the trap from the top of the stack.
    getActiveTrap: function getActiveTrap(trapStack) {
        if ((trapStack === null || trapStack === void 0 ? void 0 : trapStack.length) > 0) {
            return trapStack[trapStack.length - 1];
        }
        return null;
    },
    // Pauses the currently active trap, then adds a new trap to the stack.
    activateTrap: function activateTrap(trapStack, trap) {
        var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
        if (trap !== activeTrap) {
            activeFocusTraps.pauseTrap(trapStack);
        }
        var trapIndex = trapStack.indexOf(trap);
        if (trapIndex === -1) {
            trapStack.push(trap);
        } else {
            // move this existing trap to the front of the queue
            trapStack.splice(trapIndex, 1);
            trapStack.push(trap);
        }
    },
    // Removes the trap from the top of the stack, then unpauses the next trap down.
    deactivateTrap: function deactivateTrap(trapStack, trap) {
        var trapIndex = trapStack.indexOf(trap);
        if (trapIndex !== -1) {
            trapStack.splice(trapIndex, 1);
        }
        activeFocusTraps.unpauseTrap(trapStack);
    },
    // Pauses the trap at the top of the stack.
    pauseTrap: function pauseTrap(trapStack) {
        var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
        activeTrap === null || activeTrap === void 0 || activeTrap._setPausedState(true);
    },
    // Unpauses the trap at the top of the stack.
    unpauseTrap: function unpauseTrap(trapStack) {
        var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
        if (activeTrap && !activeTrap._isManuallyPaused()) {
            activeTrap._setPausedState(false);
        }
    }
};
var isSelectableInput = function isSelectableInput(node) {
    return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};
var isEscapeEvent = function isEscapeEvent(e) {
    return (e === null || e === void 0 ? void 0 : e.key) === 'Escape' || (e === null || e === void 0 ? void 0 : e.key) === 'Esc' || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
};
var isTabEvent = function isTabEvent(e) {
    return (e === null || e === void 0 ? void 0 : e.key) === 'Tab' || (e === null || e === void 0 ? void 0 : e.keyCode) === 9;
};
// checks for TAB by default
var isKeyForward = function isKeyForward(e) {
    return isTabEvent(e) && !e.shiftKey;
};
// checks for SHIFT+TAB by default
var isKeyBackward = function isKeyBackward(e) {
    return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
    return setTimeout(fn, 0);
};
/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */ var valueOrHandler = function valueOrHandler(value) {
    for(var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        params[_key - 1] = arguments[_key];
    }
    return typeof value === 'function' ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
    // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
    //  shadow host. However, event.target.composedPath() will be an array of
    //  nodes "clicked" from inner-most (the actual element inside the shadow) to
    //  outer-most (the host HTML document). If we have access to composedPath(),
    //  then use its first element; otherwise, fall back to event.target (and
    //  this only works for an _open_ shadow DOM; otherwise,
    //  composedPath()[0] === event.target always).
    return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};
// NOTE: this must be _outside_ `createFocusTrap()` to make sure all traps in this
//  current instance use the same stack if `userOptions.trapStack` isn't specified
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
    // SSR: a live trap shouldn't be created in this type of environment so this
    //  should be safe code to execute if the `document` option isn't specified
    var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
    var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
    var config = _objectSpread2({
        returnFocusOnDeactivate: true,
        escapeDeactivates: true,
        delayInitialFocus: true,
        isolateSubtrees: false,
        isKeyForward: isKeyForward,
        isKeyBackward: isKeyBackward
    }, userOptions);
    var state = {
        // containers given to createFocusTrap()
        /** @type {Array<HTMLElement>} */ containers: [],
        // list of objects identifying tabbable nodes in `containers` in the trap
        // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
        //  is active, but the trap should never get to a state where there isn't at least one group
        //  with at least one tabbable node in it (that would lead to an error condition that would
        //  result in an error being thrown)
        /** @type {Array<{
     *    container: HTMLElement,
     *    tabbableNodes: Array<HTMLElement>, // empty if none
     *    focusableNodes: Array<HTMLElement>, // empty if none
     *    posTabIndexesFound: boolean,
     *    firstTabbableNode: HTMLElement|undefined,
     *    lastTabbableNode: HTMLElement|undefined,
     *    firstDomTabbableNode: HTMLElement|undefined,
     *    lastDomTabbableNode: HTMLElement|undefined,
     *    nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
     *  }>}
     */ containerGroups: [],
        // same order/length as `containers` list
        // references to objects in `containerGroups`, but only those that actually have
        //  tabbable nodes in them
        // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
        //  the same length
        tabbableGroups: [],
        // references to nodes that are siblings to the ancestors of this trap's containers.
        /** @type {Set<HTMLElement>} */ adjacentElements: new Set(),
        // references to nodes that were inert or aria-hidden before the trap was activated.
        /** @type {Set<HTMLElement>} */ alreadySilent: new Set(),
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: false,
        paused: false,
        manuallyPaused: false,
        // timer ID for when delayInitialFocus is true and initial focus in this trap
        //  has been delayed during activation
        delayInitialFocusTimer: undefined,
        // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
        recentNavEvent: undefined
    };
    var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later
    /**
   * Gets a configuration option value.
   * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
   *  value will be taken from this object. Otherwise, value will be taken from base configuration.
   * @param {string} optionName Name of the option whose value is sought.
   * @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
   *  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
   */ var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
        return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
    };
    /**
   * Finds the index of the container that contains the element.
   * @param {HTMLElement} element
   * @param {Event} [event] If available, and `element` isn't directly found in any container,
   *  the event's composed path is used to see if includes any known trap containers in the
   *  case where the element is inside a Shadow DOM.
   * @returns {number} Index of the container in either `state.containers` or
   *  `state.containerGroups` (the order/length of these lists are the same); -1
   *  if the element isn't found.
   */ var findContainerIndex = function findContainerIndex(element, event) {
        var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === 'function' ? event.composedPath() : undefined;
        // NOTE: search `containerGroups` because it's possible a group contains no tabbable
        //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
        //  and we still need to find the element in there
        return state.containerGroups.findIndex(function(_ref) {
            var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
            return container.contains(element) || (//  web components if the `tabbableOptions.getShadowRoot` option was used for
            //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
            //  look inside web components even if open)
            composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function(node) {
                return node === element;
            });
        });
    };
    /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @param {Object} options
   * @param {boolean} [options.hasFallback] True if the option could be a selector string
   *  and the option allows for a fallback scenario in the case where the selector is
   *  valid but does not match a node (i.e. the queried node doesn't exist in the DOM).
   * @param {Array} [options.params] Params to pass to the option if it's a function.
   * @returns {undefined | null | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `null` if the option didn't resolve
   *  to a node but `options.hasFallback=true`, `false` if the option resolved to `false`
   *  (node explicitly not given); otherwise, the resolved DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node, unless the option is a selector string and `options.hasFallback=true`.
   */ var getNodeForOption = function getNodeForOption(optionName) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref2$hasFallback = _ref2.hasFallback, hasFallback = _ref2$hasFallback === void 0 ? false : _ref2$hasFallback, _ref2$params = _ref2.params, params = _ref2$params === void 0 ? [] : _ref2$params;
        var optionValue = config[optionName];
        if (typeof optionValue === 'function') {
            optionValue = optionValue.apply(void 0, _toConsumableArray(params));
        }
        if (optionValue === true) {
            optionValue = undefined; // use default value
        }
        if (!optionValue) {
            if (optionValue === undefined || optionValue === false) {
                return optionValue;
            }
            // else, empty string (invalid), null (invalid), 0 (invalid)
            throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
        }
        var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point
        if (typeof optionValue === 'string') {
            try {
                node = doc.querySelector(optionValue); // resolve to node, or null if fails
            } catch (err) {
                throw new Error("`".concat(optionName, "` appears to be an invalid selector; error=\"").concat(err.message, "\""));
            }
            if (!node) {
                if (!hasFallback) {
                    throw new Error("`".concat(optionName, "` as selector refers to no known node"));
                }
            // else, `node` MUST be `null` because that's what `Document.querySelector()` returns
            //  if the selector is valid but doesn't match anything
            }
        }
        return node;
    };
    var getInitialFocusNode = function getInitialFocusNode() {
        var node = getNodeForOption('initialFocus', {
            hasFallback: true
        });
        // false explicitly indicates we want no initialFocus at all
        if (node === false) {
            return false;
        }
        if (node === undefined || node && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFocusable"])(node, config.tabbableOptions)) {
            // option not specified nor focusable: use fallback options
            if (findContainerIndex(doc.activeElement) >= 0) {
                node = doc.activeElement;
            } else {
                var firstTabbableGroup = state.tabbableGroups[0];
                var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
                // NOTE: `fallbackFocus` option function cannot return `false` (not supported)
                node = firstTabbableNode || getNodeForOption('fallbackFocus');
            }
        } else if (node === null) {
            // option is a VALID selector string that doesn't yield a node: use the `fallbackFocus`
            //  option instead of the default behavior when the option isn't specified at all
            node = getNodeForOption('fallbackFocus');
        }
        if (!node) {
            throw new Error('Your focus-trap needs to have at least one focusable element');
        }
        return node;
    };
    var updateTabbableNodes = function updateTabbableNodes() {
        state.containerGroups = state.containers.map(function(container) {
            var tabbableNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tabbable"])(container, config.tabbableOptions);
            // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
            //  are a superset of tabbable nodes since nodes with negative `tabindex` attributes
            //  are focusable but not tabbable
            var focusableNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusable"])(container, config.tabbableOptions);
            var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : undefined;
            var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : undefined;
            var firstDomTabbableNode = focusableNodes.find(function(node) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabbable"])(node);
            });
            var lastDomTabbableNode = focusableNodes.slice().reverse().find(function(node) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabbable"])(node);
            });
            var posTabIndexesFound = !!tabbableNodes.find(function(node) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTabIndex"])(node) > 0;
            });
            return {
                container: container,
                tabbableNodes: tabbableNodes,
                focusableNodes: focusableNodes,
                /** True if at least one node with positive `tabindex` was found in this container. */ posTabIndexesFound: posTabIndexesFound,
                /** First tabbable node in container, __tabindex__ order; `undefined` if none. */ firstTabbableNode: firstTabbableNode,
                /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */ lastTabbableNode: lastTabbableNode,
                // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
                //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
                //  because that API doesn't work with Shadow DOM as well as it should (@see
                //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
                //  to address an edge case related to positive tabindex support, this seems like a much easier,
                //  "close enough most of the time" alternative for positive tabindexes which should generally
                //  be avoided anyway...
                /** First tabbable node in container, __DOM__ order; `undefined` if none. */ firstDomTabbableNode: firstDomTabbableNode,
                /** Last tabbable node in container, __DOM__ order; `undefined` if none. */ lastDomTabbableNode: lastDomTabbableNode,
                /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */ nextTabbableNode: function nextTabbableNode(node) {
                    var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    var nodeIdx = tabbableNodes.indexOf(node);
                    if (nodeIdx < 0) {
                        // either not tabbable nor focusable, or was focused but not tabbable (negative tabindex):
                        //  since `node` should at least have been focusable, we assume that's the case and mimic
                        //  what browsers do, which is set focus to the next node in __document position order__,
                        //  regardless of positive tabindexes, if any -- and for reasons explained in the NOTE
                        //  above related to `firstDomTabbable` and `lastDomTabbable` properties, we fall back to
                        //  basic DOM order
                        if (forward) {
                            return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function(el) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabbable"])(el);
                            });
                        }
                        return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function(el) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabbable"])(el);
                        });
                    }
                    return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
                }
            };
        });
        state.tabbableGroups = state.containerGroups.filter(function(group) {
            return group.tabbableNodes.length > 0;
        });
        // throw if no groups have tabbable nodes and we don't have a fallback focus node either
        if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
        ) {
            throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
        }
        // NOTE: Positive tabindexes are only properly supported in single-container traps because
        //  doing it across multiple containers where tabindexes could be all over the place
        //  would require Tabbable to support multiple containers, would require additional
        //  specialized Shadow DOM support, and would require Tabbable's multi-container support
        //  to look at those containers in document position order rather than user-provided
        //  order (as they are treated in Focus-trap, for legacy reasons). See discussion on
        //  https://github.com/focus-trap/focus-trap/issues/375 for more details.
        if (state.containerGroups.find(function(g) {
            return g.posTabIndexesFound;
        }) && state.containerGroups.length > 1) {
            throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
        }
    };
    /**
   * Gets the current activeElement. If it's a web-component and has open shadow-root
   * it will recursively search inside shadow roots for the "true" activeElement.
   *
   * @param {Document | ShadowRoot} el
   *
   * @returns {HTMLElement} The element that currently has the focus
   **/ var _getActiveElement = function getActiveElement(el) {
        var activeElement = el.activeElement;
        if (!activeElement) {
            return;
        }
        if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) {
            return _getActiveElement(activeElement.shadowRoot);
        }
        return activeElement;
    };
    var _tryFocus = function tryFocus(node) {
        if (node === false) {
            return;
        }
        if (node === _getActiveElement(document)) {
            return;
        }
        if (!node || !node.focus) {
            _tryFocus(getInitialFocusNode());
            return;
        }
        node.focus({
            preventScroll: !!config.preventScroll
        });
        // NOTE: focus() API does not trigger focusIn event so set MRU node manually
        state.mostRecentlyFocusedNode = node;
        if (isSelectableInput(node)) {
            node.select();
        }
    };
    var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
        var node = getNodeForOption('setReturnFocus', {
            params: [
                previousActiveElement
            ]
        });
        return node ? node : node === false ? false : previousActiveElement;
    };
    /**
   * Finds the next node (in either direction) where focus should move according to a
   *  keyboard focus-in event.
   * @param {Object} params
   * @param {Node} [params.target] Known target __from which__ to navigate, if any.
   * @param {KeyboardEvent|FocusEvent} [params.event] Event to use if `target` isn't known (event
   *  will be used to determine the `target`). Ignored if `target` is specified.
   * @param {boolean} [params.isBackward] True if focus should move backward.
   * @returns {Node|undefined} The next node, or `undefined` if a next node couldn't be
   *  determined given the current state of the trap.
   */ var findNextNavNode = function findNextNavNode(_ref3) {
        var target = _ref3.target, event = _ref3.event, _ref3$isBackward = _ref3.isBackward, isBackward = _ref3$isBackward === void 0 ? false : _ref3$isBackward;
        target = target || getActualTarget(event);
        updateTabbableNodes();
        var destinationNode = null;
        if (state.tabbableGroups.length > 0) {
            // make sure the target is actually contained in a group
            // NOTE: the target may also be the container itself if it's focusable
            //  with tabIndex='-1' and was given initial focus
            var containerIndex = findContainerIndex(target, event);
            var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;
            if (containerIndex < 0) {
                // target not found in any group: quite possible focus has escaped the trap,
                //  so bring it back into...
                if (isBackward) {
                    // ...the last node in the last group
                    destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
                } else {
                    // ...the first node in the first group
                    destinationNode = state.tabbableGroups[0].firstTabbableNode;
                }
            } else if (isBackward) {
                // REVERSE
                // is the target the first tabbable node in a group?
                var startOfGroupIndex = state.tabbableGroups.findIndex(function(_ref4) {
                    var firstTabbableNode = _ref4.firstTabbableNode;
                    return target === firstTabbableNode;
                });
                if (startOfGroupIndex < 0 && (containerGroup.container === target || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFocusable"])(target, config.tabbableOptions) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabbable"])(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
                    // an exception case where the target is either the container itself, or
                    //  a non-tabbable node that was given focus (i.e. tabindex is negative
                    //  and user clicked on it or node was programmatically given focus)
                    //  and is not followed by any other tabbable node, in which
                    //  case, we should handle shift+tab as if focus were on the container's
                    //  first tabbable node, and go to the last tabbable node of the LAST group
                    startOfGroupIndex = containerIndex;
                }
                if (startOfGroupIndex >= 0) {
                    // YES: then shift+tab should go to the last tabbable node in the
                    //  previous group (and wrap around to the last tabbable node of
                    //  the LAST group if it's the first tabbable node of the FIRST group)
                    var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
                    var destinationGroup = state.tabbableGroups[destinationGroupIndex];
                    destinationNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTabIndex"])(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
                } else if (!isTabEvent(event)) {
                    // user must have customized the nav keys so we have to move focus manually _within_
                    //  the active group: do this based on the order determined by tabbable()
                    destinationNode = containerGroup.nextTabbableNode(target, false);
                }
            } else {
                // FORWARD
                // is the target the last tabbable node in a group?
                var lastOfGroupIndex = state.tabbableGroups.findIndex(function(_ref5) {
                    var lastTabbableNode = _ref5.lastTabbableNode;
                    return target === lastTabbableNode;
                });
                if (lastOfGroupIndex < 0 && (containerGroup.container === target || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFocusable"])(target, config.tabbableOptions) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabbable"])(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
                    // an exception case where the target is the container itself, or
                    //  a non-tabbable node that was given focus (i.e. tabindex is negative
                    //  and user clicked on it or node was programmatically given focus)
                    //  and is not followed by any other tabbable node, in which
                    //  case, we should handle tab as if focus were on the container's
                    //  last tabbable node, and go to the first tabbable node of the FIRST group
                    lastOfGroupIndex = containerIndex;
                }
                if (lastOfGroupIndex >= 0) {
                    // YES: then tab should go to the first tabbable node in the next
                    //  group (and wrap around to the first tabbable node of the FIRST
                    //  group if it's the last tabbable node of the LAST group)
                    var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
                    var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
                    destinationNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTabIndex"])(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
                } else if (!isTabEvent(event)) {
                    // user must have customized the nav keys so we have to move focus manually _within_
                    //  the active group: do this based on the order determined by tabbable()
                    destinationNode = containerGroup.nextTabbableNode(target);
                }
            }
        } else {
            // no groups available
            // NOTE: the fallbackFocus option does not support returning false to opt-out
            destinationNode = getNodeForOption('fallbackFocus');
        }
        return destinationNode;
    };
    // This needs to be done on mousedown and touchstart instead of click
    // so that it precedes the focus event.
    var checkPointerDown = function checkPointerDown(e) {
        var target = getActualTarget(e);
        if (findContainerIndex(target, e) >= 0) {
            // allow the click since it ocurred inside the trap
            return;
        }
        if (valueOrHandler(config.clickOutsideDeactivates, e)) {
            // immediately deactivate the trap
            trap.deactivate({
                // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
                //  which will result in the outside click setting focus to the node
                //  that was clicked (and if not focusable, to "nothing"); by setting
                //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
                //  on activation (or the configured `setReturnFocus` node), whether the
                //  outside click was on a focusable node or not
                returnFocus: config.returnFocusOnDeactivate
            });
            return;
        }
        // This is needed for mobile devices.
        // (If we'll only let `click` events through,
        // then on mobile they will be blocked anyways if `touchstart` is blocked.)
        if (valueOrHandler(config.allowOutsideClick, e)) {
            // allow the click outside the trap to take place
            return;
        }
        // otherwise, prevent the click
        e.preventDefault();
    };
    // In case focus escapes the trap for some strange reason, pull it back in.
    // NOTE: the focusIn event is NOT cancelable, so if focus escapes, it may cause unexpected
    //  scrolling if the node that got focused was out of view; there's nothing we can do to
    //  prevent that from happening by the time we discover that focus escaped
    var checkFocusIn = function checkFocusIn(event) {
        var target = getActualTarget(event);
        var targetContained = findContainerIndex(target, event) >= 0;
        // In Firefox when you Tab out of an iframe the Document is briefly focused.
        if (targetContained || target instanceof Document) {
            if (targetContained) {
                state.mostRecentlyFocusedNode = target;
            }
        } else {
            // escaped! pull it back in to where it just left
            event.stopImmediatePropagation();
            // focus will escape if the MRU node had a positive tab index and user tried to nav forward;
            //  it will also escape if the MRU node had a 0 tab index and user tried to nav backward
            //  toward a node with a positive tab index
            var nextNode; // next node to focus, if we find one
            var navAcrossContainers = true;
            if (state.mostRecentlyFocusedNode) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTabIndex"])(state.mostRecentlyFocusedNode) > 0) {
                    // MRU container index must be >=0 otherwise we wouldn't have it as an MRU node...
                    var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
                    // there MAY not be any tabbable nodes in the container if there are at least 2 containers
                    //  and the MRU node is focusable but not tabbable (focus-trap requires at least 1 container
                    //  with at least one tabbable node in order to function, so this could be the other container
                    //  with nothing tabbable in it)
                    var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
                    if (tabbableNodes.length > 0) {
                        // MRU tab index MAY not be found if the MRU node is focusable but not tabbable
                        var mruTabIdx = tabbableNodes.findIndex(function(node) {
                            return node === state.mostRecentlyFocusedNode;
                        });
                        if (mruTabIdx >= 0) {
                            if (config.isKeyForward(state.recentNavEvent)) {
                                if (mruTabIdx + 1 < tabbableNodes.length) {
                                    nextNode = tabbableNodes[mruTabIdx + 1];
                                    navAcrossContainers = false;
                                }
                            // else, don't wrap within the container as focus should move to next/previous
                            //  container
                            } else {
                                if (mruTabIdx - 1 >= 0) {
                                    nextNode = tabbableNodes[mruTabIdx - 1];
                                    navAcrossContainers = false;
                                }
                            // else, don't wrap within the container as focus should move to next/previous
                            //  container
                            }
                        // else, don't find in container order without considering direction too
                        }
                    }
                // else, no tabbable nodes in that container (which means we must have at least one other
                //  container with at least one tabbable node in it, otherwise focus-trap would've thrown
                //  an error the last time updateTabbableNodes() was run): find next node among all known
                //  containers
                } else {
                    // check to see if there's at least one tabbable node with a positive tab index inside
                    //  the trap because focus seems to escape when navigating backward from a tabbable node
                    //  with tabindex=0 when this is the case (instead of wrapping to the tabbable node with
                    //  the greatest positive tab index like it should)
                    if (!state.containerGroups.some(function(g) {
                        return g.tabbableNodes.some(function(n) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$5$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTabIndex"])(n) > 0;
                        });
                    })) {
                        // no containers with tabbable nodes with positive tab indexes which means the focus
                        //  escaped for some other reason and we should just execute the fallback to the
                        //  MRU node or initial focus node, if any
                        navAcrossContainers = false;
                    }
                }
            } else {
                // no MRU node means we're likely in some initial condition when the trap has just
                //  been activated and initial focus hasn't been given yet, in which case we should
                //  fall through to trying to focus the initial focus node, which is what should
                //  happen below at this point in the logic
                navAcrossContainers = false;
            }
            if (navAcrossContainers) {
                nextNode = findNextNavNode({
                    // move FROM the MRU node, not event-related node (which will be the node that is
                    //  outside the trap causing the focus escape we're trying to fix)
                    target: state.mostRecentlyFocusedNode,
                    isBackward: config.isKeyBackward(state.recentNavEvent)
                });
            }
            if (nextNode) {
                _tryFocus(nextNode);
            } else {
                _tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
            }
        }
        state.recentNavEvent = undefined; // clear
    };
    // Hijack key nav events on the first and last focusable nodes of the trap,
    // in order to prevent focus from escaping. If it escapes for even a
    // moment it can end up scrolling the page and causing confusion so we
    // kind of need to capture the action at the keydown phase.
    var checkKeyNav = function checkKeyNav(event) {
        var isBackward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        state.recentNavEvent = event;
        var destinationNode = findNextNavNode({
            event: event,
            isBackward: isBackward
        });
        if (destinationNode) {
            if (isTabEvent(event)) {
                // since tab natively moves focus, we wouldn't have a destination node unless we
                //  were on the edge of a container and had to move to the next/previous edge, in
                //  which case we want to prevent default to keep the browser from moving focus
                //  to where it normally would
                event.preventDefault();
            }
            _tryFocus(destinationNode);
        }
    // else, let the browser take care of [shift+]tab and move the focus
    };
    var checkTabKey = function checkTabKey(event) {
        if (config.isKeyForward(event) || config.isKeyBackward(event)) {
            checkKeyNav(event, config.isKeyBackward(event));
        }
    };
    // we use a different event phase for the Escape key to allow canceling the event and checking for this in escapeDeactivates
    var checkEscapeKey = function checkEscapeKey(event) {
        if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
            event.preventDefault();
            trap.deactivate();
        }
    };
    var checkClick = function checkClick(e) {
        var target = getActualTarget(e);
        if (findContainerIndex(target, e) >= 0) {
            return;
        }
        if (valueOrHandler(config.clickOutsideDeactivates, e)) {
            return;
        }
        if (valueOrHandler(config.allowOutsideClick, e)) {
            return;
        }
        e.preventDefault();
        e.stopImmediatePropagation();
    };
    //
    // EVENT LISTENERS
    //
    var addListeners = function addListeners() {
        if (!state.active) {
            return;
        }
        // There can be only one listening focus trap at a time
        activeFocusTraps.activateTrap(trapStack, trap);
        // Delay ensures that the focused element doesn't capture the event
        // that caused the focus trap activation.
        state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
            _tryFocus(getInitialFocusNode());
        }) : _tryFocus(getInitialFocusNode());
        doc.addEventListener('focusin', checkFocusIn, true);
        doc.addEventListener('mousedown', checkPointerDown, {
            capture: true,
            passive: false
        });
        doc.addEventListener('touchstart', checkPointerDown, {
            capture: true,
            passive: false
        });
        doc.addEventListener('click', checkClick, {
            capture: true,
            passive: false
        });
        doc.addEventListener('keydown', checkTabKey, {
            capture: true,
            passive: false
        });
        doc.addEventListener('keydown', checkEscapeKey);
        return trap;
    };
    /**
   * Traverses up the DOM from each of `containers`, collecting references to
   * the elements that are siblings to `container` or an ancestor of `container`.
   * @param {Array<HTMLElement>} containers
   */ var collectAdjacentElements = function collectAdjacentElements(containers) {
        // Re-activate all adjacent elements & clear previous collection.
        if (state.active && !state.paused) {
            trap._setSubtreeIsolation(false);
        }
        state.adjacentElements.clear();
        state.alreadySilent.clear();
        // Collect all ancestors of all containers to avoid redundant processing.
        var containerAncestors = new Set();
        var adjacentElements = new Set();
        // Compile all elements adjacent to the focus trap containers & lineage.
        var _iterator = _createForOfIteratorHelper(containers), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var container = _step.value;
                containerAncestors.add(container);
                var insideShadowRoot = typeof ShadowRoot !== 'undefined' && container.getRootNode() instanceof ShadowRoot;
                var current = container;
                while(current){
                    containerAncestors.add(current);
                    var parent = current.parentElement;
                    var siblings = [];
                    if (parent) {
                        siblings = parent.children;
                    } else if (!parent && insideShadowRoot) {
                        siblings = current.getRootNode().children;
                        parent = current.getRootNode().host;
                        insideShadowRoot = typeof ShadowRoot !== 'undefined' && parent.getRootNode() instanceof ShadowRoot;
                    }
                    // Add all the children, we'll remove container lineage later.
                    var _iterator2 = _createForOfIteratorHelper(siblings), _step2;
                    try {
                        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                            var child = _step2.value;
                            adjacentElements.add(child);
                        }
                    } catch (err) {
                        _iterator2.e(err);
                    } finally{
                        _iterator2.f();
                    }
                    current = parent;
                }
            }
        // Multi-container traps may overlap.
        // Remove elements within container lineages.
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
        containerAncestors.forEach(function(el) {
            adjacentElements["delete"](el);
        });
        state.adjacentElements = adjacentElements;
    };
    var removeListeners = function removeListeners() {
        if (!state.active) {
            return;
        }
        doc.removeEventListener('focusin', checkFocusIn, true);
        doc.removeEventListener('mousedown', checkPointerDown, true);
        doc.removeEventListener('touchstart', checkPointerDown, true);
        doc.removeEventListener('click', checkClick, true);
        doc.removeEventListener('keydown', checkTabKey, true);
        doc.removeEventListener('keydown', checkEscapeKey);
        return trap;
    };
    //
    // MUTATION OBSERVER
    //
    var checkDomRemoval = function checkDomRemoval(mutations) {
        var isFocusedNodeRemoved = mutations.some(function(mutation) {
            var removedNodes = Array.from(mutation.removedNodes);
            return removedNodes.some(function(node) {
                return node === state.mostRecentlyFocusedNode;
            });
        });
        // If the currently focused is removed then browsers will move focus to the
        // <body> element. If this happens, try to move focus back into the trap.
        if (isFocusedNodeRemoved) {
            _tryFocus(getInitialFocusNode());
        }
    };
    // Use MutationObserver - if supported - to detect if focused node is removed
    // from the DOM.
    var mutationObserver = typeof window !== 'undefined' && 'MutationObserver' in window ? new MutationObserver(checkDomRemoval) : undefined;
    var updateObservedNodes = function updateObservedNodes() {
        if (!mutationObserver) {
            return;
        }
        mutationObserver.disconnect();
        if (state.active && !state.paused) {
            state.containers.map(function(container) {
                mutationObserver.observe(container, {
                    subtree: true,
                    childList: true
                });
            });
        }
    };
    //
    // TRAP DEFINITION
    //
    trap = {
        get active () {
            return state.active;
        },
        get paused () {
            return state.paused;
        },
        activate: function activate(activateOptions) {
            if (state.active) {
                return this;
            }
            var onActivate = getOption(activateOptions, 'onActivate');
            var onPostActivate = getOption(activateOptions, 'onPostActivate');
            var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');
            // If a currently-active trap is isolating its subtree, we need to remove
            // that isolation to allow the new trap to find tabbable nodes.
            var preexistingTrap = activeFocusTraps.getActiveTrap(trapStack);
            var revertState = false;
            if (preexistingTrap && !preexistingTrap.paused) {
                var _preexistingTrap$_set;
                // [#1729] method MAY not exist if using `trapStack` option to share stack with older
                //  versions of Focus-trap in the same DOM so use optional chaining here just in case
                //  since this is a trap we may not have created from this instance of the library
                (_preexistingTrap$_set = preexistingTrap._setSubtreeIsolation) === null || _preexistingTrap$_set === void 0 || _preexistingTrap$_set.call(preexistingTrap, false);
                revertState = true;
            }
            try {
                if (!checkCanFocusTrap) {
                    updateTabbableNodes();
                }
                state.active = true;
                state.paused = false;
                state.nodeFocusedBeforeActivation = _getActiveElement(doc);
                onActivate === null || onActivate === void 0 || onActivate();
                var finishActivation = function finishActivation() {
                    if (checkCanFocusTrap) {
                        updateTabbableNodes();
                    }
                    addListeners();
                    updateObservedNodes();
                    if (config.isolateSubtrees) {
                        trap._setSubtreeIsolation(true);
                    }
                    onPostActivate === null || onPostActivate === void 0 || onPostActivate();
                };
                if (checkCanFocusTrap) {
                    checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
                    return this;
                }
                finishActivation();
            } catch (error) {
                // If our activation throws an exception and the stack hasn't changed,
                // we need to re-enable the prior trap's subtree isolation.
                if (preexistingTrap === activeFocusTraps.getActiveTrap(trapStack) && revertState) {
                    var _preexistingTrap$_set2;
                    // [#1729] method MAY not exist if using `trapStack` option to share stack with older
                    //  versions of Focus-trap in the same DOM so use optional chaining here just in case
                    //  since this is a trap we may not have created from this instance of the library
                    (_preexistingTrap$_set2 = preexistingTrap._setSubtreeIsolation) === null || _preexistingTrap$_set2 === void 0 || _preexistingTrap$_set2.call(preexistingTrap, true);
                }
                throw error;
            }
            return this;
        },
        deactivate: function deactivate(deactivateOptions) {
            if (!state.active) {
                return this;
            }
            var options = _objectSpread2({
                onDeactivate: config.onDeactivate,
                onPostDeactivate: config.onPostDeactivate,
                checkCanReturnFocus: config.checkCanReturnFocus
            }, deactivateOptions);
            clearTimeout(state.delayInitialFocusTimer); // noop if undefined
            state.delayInitialFocusTimer = undefined;
            // Prior to removing this trap from the trapStack, we need to remove any applications of `inert`.
            // This allows the next trap down to update its tabbable nodes properly.
            //
            // If this trap is not top of the stack, don't change any current isolation.
            if (!state.paused) {
                trap._setSubtreeIsolation(false);
            }
            state.alreadySilent.clear();
            removeListeners();
            state.active = false;
            state.paused = false;
            updateObservedNodes();
            activeFocusTraps.deactivateTrap(trapStack, trap);
            var onDeactivate = getOption(options, 'onDeactivate');
            var onPostDeactivate = getOption(options, 'onPostDeactivate');
            var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
            var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');
            onDeactivate === null || onDeactivate === void 0 || onDeactivate();
            var finishDeactivation = function finishDeactivation() {
                delay(function() {
                    if (returnFocus) {
                        _tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
                    }
                    onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
                });
            };
            if (returnFocus && checkCanReturnFocus) {
                checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
                return this;
            }
            finishDeactivation();
            return this;
        },
        pause: function pause(pauseOptions) {
            if (!state.active) {
                return this;
            }
            state.manuallyPaused = true;
            return this._setPausedState(true, pauseOptions);
        },
        unpause: function unpause(unpauseOptions) {
            if (!state.active) {
                return this;
            }
            state.manuallyPaused = false;
            if (trapStack[trapStack.length - 1] !== this) {
                return this;
            }
            return this._setPausedState(false, unpauseOptions);
        },
        updateContainerElements: function updateContainerElements(containerElements) {
            var elementsAsArray = [].concat(containerElements).filter(Boolean);
            state.containers = elementsAsArray.map(function(element) {
                return typeof element === 'string' ? doc.querySelector(element) : element;
            });
            if (config.isolateSubtrees) {
                collectAdjacentElements(state.containers);
            }
            if (state.active) {
                updateTabbableNodes();
                if (config.isolateSubtrees && !state.paused) {
                    trap._setSubtreeIsolation(true);
                }
            }
            updateObservedNodes();
            return this;
        }
    };
    Object.defineProperties(trap, {
        _isManuallyPaused: {
            value: function value() {
                return state.manuallyPaused;
            }
        },
        _setPausedState: {
            value: function value(paused, options) {
                if (state.paused === paused) {
                    return this;
                }
                state.paused = paused;
                if (paused) {
                    var onPause = getOption(options, 'onPause');
                    var onPostPause = getOption(options, 'onPostPause');
                    onPause === null || onPause === void 0 || onPause();
                    removeListeners();
                    updateObservedNodes();
                    trap._setSubtreeIsolation(false);
                    onPostPause === null || onPostPause === void 0 || onPostPause();
                } else {
                    var onUnpause = getOption(options, 'onUnpause');
                    var onPostUnpause = getOption(options, 'onPostUnpause');
                    onUnpause === null || onUnpause === void 0 || onUnpause();
                    trap._setSubtreeIsolation(true);
                    updateTabbableNodes();
                    addListeners();
                    updateObservedNodes();
                    onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
                }
                return this;
            }
        },
        _setSubtreeIsolation: {
            value: function value(isEnabled) {
                if (config.isolateSubtrees) {
                    state.adjacentElements.forEach(function(el) {
                        var _el$getAttribute;
                        if (isEnabled) {
                            switch(config.isolateSubtrees){
                                case 'aria-hidden':
                                    // check both attribute and property to ensure initial state is captured
                                    // correctly across different browsers and test environments (like JSDOM)
                                    if (el.ariaHidden === 'true' || ((_el$getAttribute = el.getAttribute('aria-hidden')) === null || _el$getAttribute === void 0 ? void 0 : _el$getAttribute.toLowerCase()) === 'true') {
                                        state.alreadySilent.add(el);
                                    }
                                    el.setAttribute('aria-hidden', 'true');
                                    break;
                                default:
                                    // check both attribute and property to ensure initial state is captured
                                    // correctly across different browsers and test environments (like JSDOM)
                                    if (el.inert || el.hasAttribute('inert')) {
                                        state.alreadySilent.add(el);
                                    }
                                    el.setAttribute('inert', true);
                                    break;
                            }
                        } else {
                            if (state.alreadySilent.has(el)) ;
                            else {
                                switch(config.isolateSubtrees){
                                    case 'aria-hidden':
                                        el.removeAttribute('aria-hidden');
                                        break;
                                    default:
                                        el.removeAttribute('inert');
                                        break;
                                }
                            }
                        }
                    });
                }
            }
        }
    });
    // initialize container elements
    trap.updateContainerElements(elements);
    return trap;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObject.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_freeGlobal.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
module.exports = freeGlobal;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_root.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var freeGlobal = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_freeGlobal.js [app-client] (ecmascript)");
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/now.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var root = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_root.js [app-client] (ecmascript)");
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
module.exports = now;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_trimmedEndIndex.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Used to match a single whitespace character. */ var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && reWhitespace.test(string.charAt(index))){}
    return index;
}
module.exports = trimmedEndIndex;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseTrim.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var trimmedEndIndex = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_trimmedEndIndex.js [app-client] (ecmascript)");
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}
module.exports = baseTrim;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var root = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_root.js [app-client] (ecmascript)");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getRawTag.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js [app-client] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}
module.exports = getRawTag;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_objectToString.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js [app-client] (ecmascript)"), getRawTag = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getRawTag.js [app-client] (ecmascript)"), objectToString = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_objectToString.js [app-client] (ecmascript)");
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
module.exports = isObjectLike;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isSymbol.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseGetTag = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js [app-client] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)");
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toNumber.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseTrim = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseTrim.js [app-client] (ecmascript)"), isObject = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObject.js [app-client] (ecmascript)"), isSymbol = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isSymbol.js [app-client] (ecmascript)");
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = toNumber;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/debounce.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var isObject = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObject.js [app-client] (ecmascript)"), now = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/now.js [app-client] (ecmascript)"), toNumber = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toNumber.js [app-client] (ecmascript)");
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
module.exports = debounce;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayMap.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length){
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
module.exports = arrayMap;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArray.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseToString.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js [app-client] (ecmascript)"), arrayMap = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayMap.js [app-client] (ecmascript)"), isArray = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArray.js [app-client] (ecmascript)"), isSymbol = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isSymbol.js [app-client] (ecmascript)");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
        return value;
    }
    if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = baseToString;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toString.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseToString = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseToString.js [app-client] (ecmascript)");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? '' : baseToString(value);
}
module.exports = toString;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/uniqueId.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toString = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toString.js [app-client] (ecmascript)");
/** Used to generate unique IDs. */ var idCounter = 0;
/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */ function uniqueId(prefix) {
    var id = ++idCounter;
    return toString(prefix) + id;
}
module.exports = uniqueId;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_overArg.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getPrototype.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var overArg = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_overArg.js [app-client] (ecmascript)");
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isPlainObject.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseGetTag = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js [app-client] (ecmascript)"), getPrototype = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getPrototype.js [app-client] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)");
/** `Object#toString` result references. */ var objectTag = '[object Object]';
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isElement.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var isObjectLike = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)"), isPlainObject = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isPlainObject.js [app-client] (ecmascript)");
/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */ function isElement(value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}
module.exports = isElement;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/shallowequal@1.1.0/node_modules/shallowequal/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

//
module.exports = function shallowEqual(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (ret !== void 0) {
        return !!ret;
    }
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++){
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
            return false;
        }
    }
    return true;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inheritsLoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)");
;
function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, o);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_assertThisInitialized
]);
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_typeof
]);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPrimitive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
;
function toPrimitive(t, r) {
    if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPropertyKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-client] (ecmascript)");
;
;
function toPropertyKey(t) {
    var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, "string");
    return "symbol" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i) ? i : i + "";
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_defineProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)");
;
function _defineProperty(e, r, t) {
    return (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectSpread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectSpread
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
;
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? Object(arguments[r]) : {}, o = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), o.forEach(function(r) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e, r, t[r]);
        });
    }
    return e;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_classCallCheck
]);
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_createClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)");
;
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_possibleConstructorReturn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)");
;
;
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_getPrototypeOf
]);
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inherits.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inherits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)");
;
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, e);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gud@1.0.0/node_modules/gud/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// @flow
var key = '__global_unique_id__';
module.exports = function() {
    return /*TURBOPACK member replacement*/ __turbopack_context__.g[key] = (/*TURBOPACK member replacement*/ __turbopack_context__.g[key] || 0) + 1;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
var warning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++){
            args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++){
            args[key - 2] = arguments[key];
        }
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
            printWarning.apply(null, [
                format
            ].concat(args));
        }
    };
}
module.exports = warning;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@hypnosphi+create-react-con_af0e748afbb80077d71aa3e03fc5627c/node_modules/@hypnosphi/create-react-context/lib/implementation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
exports.__esModule = true;
var _react = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _propTypes = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _gud = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gud@1.0.0/node_modules/gud/index.js [app-client] (ecmascript)");
var _gud2 = _interopRequireDefault(_gud);
var _warning = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js [app-client] (ecmascript)");
var _warning2 = _interopRequireDefault(_warning);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var MAX_SIGNED_31_BIT_INT = 1073741823;
// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
function createEventEmitter(value) {
    var handlers = [];
    return {
        on: function on(handler) {
            handlers.push(handler);
        },
        off: function off(handler) {
            handlers = handlers.filter(function(h) {
                return h !== handler;
            });
        },
        get: function get() {
            return value;
        },
        set: function set(newValue, changedBits) {
            value = newValue;
            handlers.forEach(function(handler) {
                return handler(value, changedBits);
            });
        }
    };
}
function onlyChild(children) {
    return Array.isArray(children) ? children[0] : children;
}
function createReactContext(defaultValue, calculateChangedBits) {
    var _Provider$childContex, _Consumer$contextType;
    var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';
    var Provider = function(_Component) {
        _inherits(Provider, _Component);
        function Provider() {
            var _temp, _this, _ret;
            _classCallCheck(this, Provider);
            for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [
                this
            ].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
        }
        Provider.prototype.getChildContext = function getChildContext() {
            var _ref;
            return _ref = {}, _ref[contextProp] = this.emitter, _ref;
        };
        Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            if (this.props.value !== nextProps.value) {
                var oldValue = this.props.value;
                var newValue = nextProps.value;
                var changedBits = void 0;
                if (objectIs(oldValue, newValue)) {
                    changedBits = 0; // No change
                } else {
                    changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
                    if ("TURBOPACK compile-time truthy", 1) {
                        (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
                    }
                    changedBits |= 0;
                    if (changedBits !== 0) {
                        this.emitter.set(nextProps.value, changedBits);
                    }
                }
            }
        };
        Provider.prototype.render = function render() {
            return this.props.children;
        };
        return Provider;
    }(_react.Component);
    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);
    var Consumer = function(_Component2) {
        _inherits(Consumer, _Component2);
        function Consumer() {
            var _temp2, _this2, _ret2;
            _classCallCheck(this, Consumer);
            for(var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
                args[_key2] = arguments[_key2];
            }
            return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [
                this
            ].concat(args))), _this2), _this2.state = {
                value: _this2.getValue()
            }, _this2.onUpdate = function(newValue, changedBits) {
                var observedBits = _this2.observedBits | 0;
                if ((observedBits & changedBits) !== 0) {
                    _this2.setState({
                        value: _this2.getValue()
                    });
                }
            }, _temp2), _possibleConstructorReturn(_this2, _ret2);
        }
        Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            var observedBits = nextProps.observedBits;
            this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
             : observedBits;
        };
        Consumer.prototype.componentDidMount = function componentDidMount() {
            if (this.context[contextProp]) {
                this.context[contextProp].on(this.onUpdate);
            }
            var observedBits = this.props.observedBits;
            this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
             : observedBits;
        };
        Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
            if (this.context[contextProp]) {
                this.context[contextProp].off(this.onUpdate);
            }
        };
        Consumer.prototype.getValue = function getValue() {
            if (this.context[contextProp]) {
                return this.context[contextProp].get();
            } else {
                return defaultValue;
            }
        };
        Consumer.prototype.render = function render() {
            return onlyChild(this.props.children)(this.state.value);
        };
        return Consumer;
    }(_react.Component);
    Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);
    return {
        Provider: Provider,
        Consumer: Consumer
    };
}
exports.default = createReactContext;
module.exports = exports['default'];
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@hypnosphi+create-react-con_af0e748afbb80077d71aa3e03fc5627c/node_modules/@hypnosphi/create-react-context/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
var _react = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _implementation = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@hypnosphi+create-react-con_af0e748afbb80077d71aa3e03fc5627c/node_modules/@hypnosphi/create-react-context/lib/implementation.js [app-client] (ecmascript)");
var _implementation2 = _interopRequireDefault(_implementation);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Manager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManagerReferenceNodeContext",
    ()=>ManagerReferenceNodeContext,
    "ManagerReferenceNodeSetterContext",
    ()=>ManagerReferenceNodeSetterContext,
    "default",
    ()=>Manager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$hypnosphi$2b$create$2d$react$2d$con_af0e748afbb80077d71aa3e03fc5627c$2f$node_modules$2f40$hypnosphi$2f$create$2d$react$2d$context$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@hypnosphi+create-react-con_af0e748afbb80077d71aa3e03fc5627c/node_modules/@hypnosphi/create-react-context/lib/index.js [app-client] (ecmascript)");
;
;
;
;
;
var ManagerReferenceNodeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$hypnosphi$2b$create$2d$react$2d$con_af0e748afbb80077d71aa3e03fc5627c$2f$node_modules$2f40$hypnosphi$2f$create$2d$react$2d$context$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
var ManagerReferenceNodeSetterContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$hypnosphi$2b$create$2d$react$2d$con_af0e748afbb80077d71aa3e03fc5627c$2f$node_modules$2f40$hypnosphi$2f$create$2d$react$2d$context$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
var Manager = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Manager, _React$Component);
    function Manager() {
        var _this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [
            this
        ].concat(args)) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "referenceNode", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "setReferenceNode", function(newReferenceNode) {
            if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
                _this.referenceNode = newReferenceNode;
                _this.forceUpdate();
            }
        });
        return _this;
    }
    var _proto = Manager.prototype;
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.referenceNode = null;
    };
    _proto.render = function render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ManagerReferenceNodeContext.Provider, {
            value: this.referenceNode
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ManagerReferenceNodeSetterContext.Provider, {
            value: this.setReferenceNode
        }, this.props.children));
    };
    return Manager;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Manager.js [app-client] (ecmascript) <export default as Manager>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Manager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Manager.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */ __turbopack_context__.s([
    "safeInvoke",
    ()=>safeInvoke,
    "setRef",
    ()=>setRef,
    "shallowEqual",
    ()=>shallowEqual,
    "unwrapArray",
    ()=>unwrapArray
]);
var unwrapArray = function unwrapArray(arg) {
    return Array.isArray(arg) ? arg[0] : arg;
};
var safeInvoke = function safeInvoke(fn) {
    if (typeof fn === "function") {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return fn.apply(void 0, args);
    }
};
var shallowEqual = function shallowEqual(objA, objB) {
    var aKeys = Object.keys(objA);
    var bKeys = Object.keys(objB);
    if (bKeys.length !== aKeys.length) {
        return false;
    }
    for(var i = 0; i < bKeys.length; i++){
        var key = aKeys[i];
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
};
var setRef = function setRef(ref, node) {
    // if its a function call it
    if (typeof ref === "function") {
        return safeInvoke(ref, node);
    } else if (ref != null) {
        ref.current = node;
    }
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Reference.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$warning$40$4$2e$0$2e$3$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var InnerReference = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(InnerReference, _React$Component);
    function InnerReference() {
        var _this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [
            this
        ].concat(args)) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "refHandler", function(node) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRef"])(_this.props.innerRef, node);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeInvoke"])(_this.props.setReferenceNode, node);
        });
        return _this;
    }
    var _proto = InnerReference.prototype;
    _proto.componentWillUnmount = function componentWillUnmount() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRef"])(this.props.innerRef, null);
    };
    _proto.render = function render() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$warning$40$4$2e$0$2e$3$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unwrapArray"])(this.props.children)({
            ref: this.refHandler
        });
    };
    return InnerReference;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
function Reference(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManagerReferenceNodeSetterContext"].Consumer, null, function(setReferenceNode) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](InnerReference, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            setReferenceNode: setReferenceNode
        }, props));
    });
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Reference.js [app-client] (ecmascript) <export default as Reference>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Reference.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Popper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InnerPopper",
    ()=>InnerPopper,
    "default",
    ()=>Popper,
    "placements",
    ()=>placements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$deep$2d$equal$40$1$2e$1$2e$2$2f$node_modules$2f$deep$2d$equal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/deep-equal@1.1.2/node_modules/deep-equal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$popper$2e$js$40$1$2e$16$2e$1$2f$node_modules$2f$popper$2e$js$2f$dist$2f$esm$2f$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/popper.js@1.16.1/node_modules/popper.js/dist/esm/popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/utils.js [app-client] (ecmascript)");
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
var initialStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(InnerPopper, _React$Component);
    function InnerPopper() {
        var _this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [
            this
        ].concat(args)) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "state", {
            data: undefined,
            placement: undefined
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "popperInstance", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "popperNode", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "arrowNode", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "setPopperNode", function(popperNode) {
            if (!popperNode || _this.popperNode === popperNode) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRef"])(_this.props.innerRef, popperNode);
            _this.popperNode = popperNode;
            _this.updatePopperInstance();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "setArrowNode", function(arrowNode) {
            _this.arrowNode = arrowNode;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "updateStateModifier", {
            enabled: true,
            order: 900,
            fn: function fn(data) {
                var placement = data.placement;
                _this.setState({
                    data: data,
                    placement: placement
                });
                return data;
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "getOptions", function() {
            return {
                placement: _this.props.placement,
                eventsEnabled: _this.props.eventsEnabled,
                positionFixed: _this.props.positionFixed,
                modifiers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props.modifiers, {
                    arrow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props.modifiers && _this.props.modifiers.arrow, {
                        enabled: !!_this.arrowNode,
                        element: _this.arrowNode
                    }),
                    applyStyle: {
                        enabled: false
                    },
                    updateStateModifier: _this.updateStateModifier
                })
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "getPopperStyle", function() {
            return !_this.popperNode || !_this.state.data ? initialStyle : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                position: _this.state.data.offsets.popper.position
            }, _this.state.data.styles);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "getPopperPlacement", function() {
            return !_this.state.data ? undefined : _this.state.placement;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "getArrowStyle", function() {
            return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "getOutOfBoundariesState", function() {
            return _this.state.data ? _this.state.data.hide : undefined;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "destroyPopperInstance", function() {
            if (!_this.popperInstance) return;
            _this.popperInstance.destroy();
            _this.popperInstance = null;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "updatePopperInstance", function() {
            _this.destroyPopperInstance();
            var _assertThisInitialize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), popperNode = _assertThisInitialize.popperNode;
            var referenceElement = _this.props.referenceElement;
            if (!referenceElement || !popperNode) return;
            _this.popperInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$popper$2e$js$40$1$2e$16$2e$1$2f$node_modules$2f$popper$2e$js$2f$dist$2f$esm$2f$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](referenceElement, popperNode, _this.getOptions());
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "scheduleUpdate", function() {
            if (_this.popperInstance) {
                _this.popperInstance.scheduleUpdate();
            }
        });
        return _this;
    }
    var _proto = InnerPopper.prototype;
    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        // If the Popper.js options have changed, update the instance (destroy + create)
        if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$deep$2d$equal$40$1$2e$1$2e$2$2f$node_modules$2f$deep$2d$equal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.props.modifiers, prevProps.modifiers, {
            strict: true
        })) {
            // develop only check that modifiers isn't being updated needlessly
            if ("TURBOPACK compile-time truthy", 1) {
                if (this.props.modifiers !== prevProps.modifiers && this.props.modifiers != null && prevProps.modifiers != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(this.props.modifiers, prevProps.modifiers)) {
                    console.warn("'modifiers' prop reference updated even though all values appear the same.\nConsider memoizing the 'modifiers' object to avoid needless rendering.");
                }
            }
            this.updatePopperInstance();
        } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
            this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
        } // A placement difference in state means popper determined a new placement
        // apart from the props value. By the time the popper element is rendered with
        // the new position Popper has already measured it, if the place change triggers
        // a size change it will result in a misaligned popper. So we schedule an update to be sure.
        if (prevState.placement !== this.state.placement) {
            this.scheduleUpdate();
        }
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRef"])(this.props.innerRef, null);
        this.destroyPopperInstance();
    };
    _proto.render = function render() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unwrapArray"])(this.props.children)({
            ref: this.setPopperNode,
            style: this.getPopperStyle(),
            placement: this.getPopperPlacement(),
            outOfBoundaries: this.getOutOfBoundariesState(),
            scheduleUpdate: this.scheduleUpdate,
            arrowProps: {
                ref: this.setArrowNode,
                style: this.getArrowStyle()
            }
        });
    };
    return InnerPopper;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(InnerPopper, "defaultProps", {
    placement: 'bottom',
    eventsEnabled: true,
    referenceElement: undefined,
    positionFixed: false
});
var placements = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$popper$2e$js$40$1$2e$16$2e$1$2f$node_modules$2f$popper$2e$js$2f$dist$2f$esm$2f$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].placements;
;
function Popper(_ref) {
    var referenceElement = _ref.referenceElement, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, [
        "referenceElement"
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManagerReferenceNodeContext"].Consumer, null, function(referenceNode) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](InnerPopper, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
        }, props));
    });
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Popper.js [app-client] (ecmascript) <export default as Popper>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Popper.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) {
        isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
    }
    return isArgs;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/implementation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js [app-client] (ecmascript)"); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, 'toString');
    var hasProtoEnumBug = isEnumerable.call(function() {}, 'prototype');
    var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === 'undefined') {
            return false;
        }
        for(var k in window){
            try {
                if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
                    try {
                        equalsConstructorPrototype(window[k]);
                    } catch (e) {
                        return true;
                    }
                }
            } catch (e) {
                return true;
            }
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
            return equalsConstructorPrototype(o);
        }
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === 'object';
        var isFunction = toStr.call(object) === '[object Function]';
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === '[object String]';
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) {
            throw new TypeError('Object.keys called on a non-object');
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
            for(var i = 0; i < object.length; ++i){
                theKeys.push(String(i));
            }
        }
        if (isArguments && object.length > 0) {
            for(var j = 0; j < object.length; ++j){
                theKeys.push(String(j));
            }
        } else {
            for(var name in object){
                if (!(skipProto && name === 'prototype') && has.call(object, name)) {
                    theKeys.push(String(name));
                }
            }
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k){
                if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
                    theKeys.push(dontEnums[k]);
                }
            }
        }
        return theKeys;
    };
}
module.exports = keysShim;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var slice = Array.prototype.slice;
var isArgs = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js [app-client] (ecmascript)");
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/implementation.js [app-client] (ecmascript)");
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) {
            Object.keys = function keys(object) {
                if (isArgs(object)) {
                    return originalKeys(slice.call(object));
                }
                return originalKeys(object);
            };
        }
    } else {
        Object.keys = keysShim;
    }
    return Object.keys || keysShim;
};
module.exports = keysShim;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasSymbols = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-object-atoms@1.1.2/node_modules/es-object-atoms/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js [app-client] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js [app-client] (ecmascript)");
if ($gOPD) {
    try {
        $gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        $gOPD = null;
    }
}
module.exports = $gOPD;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = false;
    }
}
module.exports = $defineProperty;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-object-atoms@1.1.2/node_modules/es-object-atoms/index.js [app-client] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js [app-client] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js [app-client] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') {
        throw new TypeError('getProto: not an object');
    }
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js [app-client] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-client] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js [app-client] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js [app-client] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/applyBind.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-client] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)");
var actualApply = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js [app-client] (ecmascript)");
/** @type {import('./applyBind')} */ module.exports = function applyBind() {
    return actualApply(bind, $apply, arguments);
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
        throw e;
    }
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/hasown@2.0.4/node_modules/hasown/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-object-atoms@1.1.2/node_modules/es-object-atoms/index.js [app-client] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js [app-client] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js [app-client] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js [app-client] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js [app-client] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js [app-client] (ecmascript)");
var abs = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js [app-client] (ecmascript)");
var floor = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js [app-client] (ecmascript)");
var max = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js [app-client] (ecmascript)");
var min = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js [app-client] (ecmascript)");
var pow = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js [app-client] (ecmascript)");
var round = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js [app-client] (ecmascript)");
var sign = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js [app-client] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-client] (ecmascript)");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js [app-client] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js [app-client] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js [app-client] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js [app-client] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS['%Error.prototype%'] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-client] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/hasown@2.0.4/node_modules/hasown/index.js [app-client] (ecmascript)");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js [app-client] (ecmascript)");
var callBindBasic = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)");
/** @type {(thisArg: string, searchString: string, position?: number) => number} */ var $indexOf = callBindBasic([
    GetIntrinsic('%String.prototype.indexOf%')
]);
/** @type {import('.')} */ module.exports = function callBoundIntrinsic(name, allowMissing) {
    /* eslint no-extra-parens: 0 */ var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
        return callBindBasic([
            intrinsic
        ]);
    }
    return intrinsic;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-arguments@1.2.0/node_modules/is-arguments/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasToStringTag = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js [app-client] (ecmascript)")();
var callBound = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js [app-client] (ecmascript)");
var $toString = callBound('Object.prototype.toString');
/** @type {import('.')} */ var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
        return false;
    }
    return $toString(value) === '[object Arguments]';
};
/** @type {import('.')} */ var isLegacyArguments = function isArguments(value) {
    if (isStandardArguments(value)) {
        return true;
    }
    return value !== null && typeof value === 'object' && 'length' in value && typeof value.length === 'number' && value.length >= 0 && $toString(value) !== '[object Array]' && 'callee' in value && $toString(value.callee) === '[object Function]';
};
var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
}();
// @ts-expect-error TODO make this not error
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
/** @type {import('.')} */ module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $defineProperty = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-client] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)");
var gopd = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = function defineDataProperty(obj, property, value) {
    if (!obj || typeof obj !== 'object' && typeof obj !== 'function') {
        throw new $TypeError('`obj` must be an object or a function`');
    }
    if (typeof property !== 'string' && typeof property !== 'symbol') {
        throw new $TypeError('`property` must be a string or a symbol`');
    }
    if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
        throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
    }
    if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
        throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
    }
    if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
        throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
    }
    if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
        throw new $TypeError('`loose`, if provided, must be a boolean');
    }
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!gopd && gopd(obj, property);
    if ($defineProperty) {
        $defineProperty(obj, property, {
            configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
            enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
            value: value,
            writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
    } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
        obj[property] = value; // eslint-disable-line no-param-reassign
    } else {
        throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
    }
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $defineProperty = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-client] (ecmascript)");
var hasPropertyDescriptors = function hasPropertyDescriptors() {
    return !!$defineProperty;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!$defineProperty) {
        return null;
    }
    try {
        return $defineProperty([], 'length', {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = hasPropertyDescriptors;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var keys = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js [app-client] (ecmascript)");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var defineDataProperty = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js [app-client] (ecmascript)");
var isFunction = function(fn) {
    return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};
var supportsDescriptors = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js [app-client] (ecmascript)")();
var defineProperty = function(object, name, value, predicate) {
    if (name in object) {
        if (predicate === true) {
            if (object[name] === value) {
                return;
            }
        } else if (!isFunction(predicate) || !predicate()) {
            return;
        }
    }
    if (supportsDescriptors) {
        defineDataProperty(object, name, value, true);
    } else {
        defineDataProperty(object, name, value);
    }
};
var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys(map);
    if (hasSymbols) {
        props = concat.call(props, Object.getOwnPropertySymbols(map));
    }
    for(var i = 0; i < props.length; i += 1){
        defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
    }
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/set-function-length@1.2.2/node_modules/set-function-length/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js [app-client] (ecmascript)");
var define = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js [app-client] (ecmascript)");
var hasDescriptors = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js [app-client] (ecmascript)")();
var gOPD = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)");
var $floor = GetIntrinsic('%Math.floor%');
/** @type {import('.')} */ module.exports = function setFunctionLength(fn, length) {
    if (typeof fn !== 'function') {
        throw new $TypeError('`fn` is not a function');
    }
    if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
        throw new $TypeError('`length` must be a positive 32-bit integer');
    }
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ('length' in fn && gOPD) {
        var desc = gOPD(fn, 'length');
        if (desc && !desc.configurable) {
            functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
            functionLengthIsWritable = false;
        }
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
            define(fn, 'length', length, true, true);
        } else {
            define(fn, 'length', length);
        }
    }
    return fn;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind@1.0.9/node_modules/call-bind/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var setFunctionLength = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/set-function-length@1.2.2/node_modules/set-function-length/index.js [app-client] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-client] (ecmascript)");
var callBindBasic = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)");
var applyBind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/applyBind.js [app-client] (ecmascript)");
module.exports = function callBind(originalFunction) {
    var func = callBindBasic(arguments);
    var adjustedLength = 1 + originalFunction.length - (arguments.length - 1);
    return setFunctionLength(func, adjustedLength > 0 ? adjustedLength : 0, true);
};
if ($defineProperty) {
    $defineProperty(module.exports, 'apply', {
        value: applyBind
    });
} else {
    module.exports.apply = applyBind;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/implementation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var numberIsNaN = function(value) {
    return value !== value;
};
module.exports = function is(a, b) {
    if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
    }
    if (a === b) {
        return true;
    }
    if (numberIsNaN(a) && numberIsNaN(b)) {
        return true;
    }
    return false;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/polyfill.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/implementation.js [app-client] (ecmascript)");
module.exports = function getPolyfill() {
    return typeof Object.is === 'function' ? Object.is : implementation;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/shim.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var getPolyfill = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/polyfill.js [app-client] (ecmascript)");
var define = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js [app-client] (ecmascript)");
module.exports = function shimObjectIs() {
    var polyfill = getPolyfill();
    define(Object, {
        is: polyfill
    }, {
        is: function testObjectIs() {
            return Object.is !== polyfill;
        }
    });
    return polyfill;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var define = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js [app-client] (ecmascript)");
var callBind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind@1.0.9/node_modules/call-bind/index.js [app-client] (ecmascript)");
var implementation = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/implementation.js [app-client] (ecmascript)");
var getPolyfill = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/polyfill.js [app-client] (ecmascript)");
var shim = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/shim.js [app-client] (ecmascript)");
var polyfill = callBind(getPolyfill(), Object);
define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-regex@1.2.1/node_modules/is-regex/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBound = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js [app-client] (ecmascript)");
var hasToStringTag = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js [app-client] (ecmascript)")();
var hasOwn = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/hasown@2.0.4/node_modules/hasown/index.js [app-client] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)");
/** @type {import('.')} */ var fn;
if (hasToStringTag) {
    /** @type {(receiver: ThisParameterType<typeof RegExp.prototype.exec>, ...args: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */ var $exec = callBound('RegExp.prototype.exec');
    /** @type {object} */ var isRegexMarker = {};
    var throwRegexMarker = function() {
        throw isRegexMarker;
    };
    /** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */ var badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
    };
    if (typeof Symbol.toPrimitive === 'symbol') {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
    }
    /** @type {import('.')} */ // @ts-expect-error TS can't figure out that the $exec call always throws
    // eslint-disable-next-line consistent-return
    fn = function isRegex(value) {
        if (!value || typeof value !== 'object') {
            return false;
        }
        // eslint-disable-next-line no-extra-parens
        var descriptor = /** @type {NonNullable<typeof gOPD>} */ gOPD(value, 'lastIndex');
        var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, 'value');
        if (!hasLastIndexDataProperty) {
            return false;
        }
        try {
            // eslint-disable-next-line no-extra-parens
            $exec(value, badStringifier);
        } catch (e) {
            return e === isRegexMarker;
        }
    };
} else {
    /** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */ var $toString = callBound('Object.prototype.toString');
    /** @const @type {'[object RegExp]'} */ var regexClass = '[object RegExp]';
    /** @type {import('.')} */ fn = function isRegex(value) {
        // In older browsers, typeof regex incorrectly returns 'function'
        if (!value || typeof value !== 'object' && typeof value !== 'function') {
            return false;
        }
        return $toString(value) === regexClass;
    };
}
module.exports = fn;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/functions-have-names@1.2.3/node_modules/functions-have-names/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var functionsHaveNames = function functionsHaveNames() {
    return typeof (function f() {}).name === 'string';
};
var gOPD = Object.getOwnPropertyDescriptor;
if (gOPD) {
    try {
        gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        gOPD = null;
    }
}
functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
    if (!functionsHaveNames() || !gOPD) {
        return false;
    }
    var desc = gOPD(function() {}, 'name');
    return !!desc && !!desc.configurable;
};
var $bind = Function.prototype.bind;
functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
    return functionsHaveNames() && typeof $bind === 'function' && (function f() {}).bind().name !== '';
};
module.exports = functionsHaveNames;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/set-function-name@2.0.2/node_modules/set-function-name/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var define = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js [app-client] (ecmascript)");
var hasDescriptors = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js [app-client] (ecmascript)")();
var functionsHaveConfigurableNames = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/functions-have-names@1.2.3/node_modules/functions-have-names/index.js [app-client] (ecmascript)").functionsHaveConfigurableNames();
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = function setFunctionName(fn, name) {
    if (typeof fn !== 'function') {
        throw new $TypeError('`fn` is not a function');
    }
    var loose = arguments.length > 2 && !!arguments[2];
    if (!loose || functionsHaveConfigurableNames) {
        if (hasDescriptors) {
            define(fn, 'name', name, true, true);
        } else {
            define(fn, 'name', name);
        }
    }
    return fn;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/implementation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var setFunctionName = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/set-function-name@2.0.2/node_modules/set-function-name/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)");
var $Object = Object;
module.exports = setFunctionName(function flags() {
    if (this == null || this !== $Object(this)) {
        throw new $TypeError('RegExp.prototype.flags getter called on non-object');
    }
    var result = '';
    if (this.hasIndices) {
        result += 'd';
    }
    if (this.global) {
        result += 'g';
    }
    if (this.ignoreCase) {
        result += 'i';
    }
    if (this.multiline) {
        result += 'm';
    }
    if (this.dotAll) {
        result += 's';
    }
    if (this.unicode) {
        result += 'u';
    }
    if (this.unicodeSets) {
        result += 'v';
    }
    if (this.sticky) {
        result += 'y';
    }
    return result;
}, 'get flags', true);
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/polyfill.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/implementation.js [app-client] (ecmascript)");
var supportsDescriptors = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js [app-client] (ecmascript)").supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
module.exports = function getPolyfill() {
    if (supportsDescriptors && /a/mig.flags === 'gim') {
        var descriptor = $gOPD(RegExp.prototype, 'flags');
        if (descriptor && typeof descriptor.get === 'function' && 'dotAll' in RegExp.prototype && 'hasIndices' in RegExp.prototype) {
            /* eslint getter-return: 0 */ var calls = '';
            var o = {};
            Object.defineProperty(o, 'hasIndices', {
                get: function() {
                    calls += 'd';
                }
            });
            Object.defineProperty(o, 'sticky', {
                get: function() {
                    calls += 'y';
                }
            });
            descriptor.get.call(o);
            if (calls === 'dy') {
                return descriptor.get;
            }
        }
    }
    return implementation;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/shim.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var supportsDescriptors = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js [app-client] (ecmascript)").supportsDescriptors;
var getPolyfill = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/polyfill.js [app-client] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)");
var defineProperty = Object.defineProperty;
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js [app-client] (ecmascript)");
var getProto = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js [app-client] (ecmascript)");
var regex = /a/;
module.exports = function shimFlags() {
    if (!supportsDescriptors || !getProto) {
        throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
    }
    var polyfill = getPolyfill();
    var proto = getProto(regex);
    var descriptor = gOPD(proto, 'flags');
    if (!descriptor || descriptor.get !== polyfill) {
        defineProperty(proto, 'flags', {
            configurable: true,
            enumerable: false,
            get: polyfill
        });
    }
    return polyfill;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var define = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js [app-client] (ecmascript)");
var callBind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind@1.0.9/node_modules/call-bind/index.js [app-client] (ecmascript)");
var implementation = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/implementation.js [app-client] (ecmascript)");
var getPolyfill = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/polyfill.js [app-client] (ecmascript)");
var shim = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/shim.js [app-client] (ecmascript)");
var flagsBound = callBind(getPolyfill());
define(flagsBound, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = flagsBound;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-date-object@1.1.0/node_modules/is-date-object/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBound = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js [app-client] (ecmascript)");
var getDay = callBound('Date.prototype.getDay');
/** @type {import('.')} */ var tryDateObject = function tryDateGetDayCall(value) {
    try {
        getDay(value);
        return true;
    } catch (e) {
        return false;
    }
};
/** @type {(value: unknown) => string} */ var toStr = callBound('Object.prototype.toString');
var dateClass = '[object Date]';
var hasToStringTag = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js [app-client] (ecmascript)")();
/** @type {import('.')} */ module.exports = function isDateObject(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    return hasToStringTag ? tryDateObject(value) : toStr(value) === dateClass;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/deep-equal@1.1.2/node_modules/deep-equal/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var objectKeys = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js [app-client] (ecmascript)");
var isArguments = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-arguments@1.2.0/node_modules/is-arguments/index.js [app-client] (ecmascript)");
var is = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/index.js [app-client] (ecmascript)");
var isRegex = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-regex@1.2.1/node_modules/is-regex/index.js [app-client] (ecmascript)");
var flags = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/index.js [app-client] (ecmascript)");
var isDate = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-date-object@1.1.0/node_modules/is-date-object/index.js [app-client] (ecmascript)");
var getTime = Date.prototype.getTime;
function deepEqual(actual, expected, options) {
    var opts = options || {};
    // 7.1. All identical values are equivalent, as determined by ===.
    if (opts.strict ? is(actual, expected) : actual === expected) {
        return true;
    }
    // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
    if (!actual || !expected || typeof actual !== 'object' && typeof expected !== 'object') {
        return opts.strict ? is(actual, expected) : actual == expected;
    }
    /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */ // eslint-disable-next-line no-use-before-define
    return objEquiv(actual, expected, opts);
}
function isUndefinedOrNull(value) {
    return value === null || value === undefined;
}
function isBuffer(x) {
    if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
        return false;
    }
    if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
        return false;
    }
    if (x.length > 0 && typeof x[0] !== 'number') {
        return false;
    }
    return true;
}
function objEquiv(a, b, opts) {
    /* eslint max-statements: [2, 50] */ var i, key;
    if (typeof a !== typeof b) {
        return false;
    }
    if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) {
        return false;
    }
    // an identical 'prototype' property.
    if (a.prototype !== b.prototype) {
        return false;
    }
    if (isArguments(a) !== isArguments(b)) {
        return false;
    }
    var aIsRegex = isRegex(a);
    var bIsRegex = isRegex(b);
    if (aIsRegex !== bIsRegex) {
        return false;
    }
    if (aIsRegex || bIsRegex) {
        return a.source === b.source && flags(a) === flags(b);
    }
    if (isDate(a) && isDate(b)) {
        return getTime.call(a) === getTime.call(b);
    }
    var aIsBuffer = isBuffer(a);
    var bIsBuffer = isBuffer(b);
    if (aIsBuffer !== bIsBuffer) {
        return false;
    }
    if (aIsBuffer || bIsBuffer) {
        if (a.length !== b.length) {
            return false;
        }
        for(i = 0; i < a.length; i++){
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    try {
        var ka = objectKeys(a);
        var kb = objectKeys(b);
    } catch (e) {
        return false;
    }
    // having the same number of owned properties (keys incorporates hasOwnProperty)
    if (ka.length !== kb.length) {
        return false;
    }
    // the same set of keys (although not necessarily the same order),
    ka.sort();
    kb.sort();
    // ~~~cheap key test
    for(i = ka.length - 1; i >= 0; i--){
        if (ka[i] != kb[i]) {
            return false;
        }
    }
    // equivalent values for every corresponding key, and ~~~possibly expensive deep test
    for(i = ka.length - 1; i >= 0; i--){
        key = ka[i];
        if (!deepEqual(a[key], b[key], opts)) {
            return false;
        }
    }
    return true;
}
module.exports = deepEqual;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/popper.js@1.16.1/node_modules/popper.js/dist/esm/popper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';
var timeoutDuration = function() {
    var longerTimeoutBrowsers = [
        'Edge',
        'Trident',
        'Firefox'
    ];
    for(var i = 0; i < longerTimeoutBrowsers.length; i += 1){
        if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
            return 1;
        }
    }
    return 0;
}();
function microtaskDebounce(fn) {
    var called = false;
    return function() {
        if (called) {
            return;
        }
        called = true;
        window.Promise.resolve().then(function() {
            called = false;
            fn();
        });
    };
}
function taskDebounce(fn) {
    var scheduled = false;
    return function() {
        if (!scheduled) {
            scheduled = true;
            setTimeout(function() {
                scheduled = false;
                fn();
            }, timeoutDuration);
        }
    };
}
var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/ var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */ function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */ function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    var window1 = element.ownerDocument.defaultView;
    var css = window1.getComputedStyle(element, null);
    return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */ function getParentNode(element) {
    if (element.nodeName === 'HTML') {
        return element;
    }
    return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */ function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
        return document.body;
    }
    switch(element.nodeName){
        case 'HTML':
        case 'BODY':
            return element.ownerDocument.body;
        case '#document':
            return element.body;
    }
    // Firefox want us to check `-x` and `-y` variations as well
    var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
        return element;
    }
    return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */ function getReferenceNode(reference) {
    return reference && reference.referenceNode ? reference.referenceNode : reference;
}
var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */ function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */ function getOffsetParent(element) {
    if (!element) {
        return document.documentElement;
    }
    var noOffsetParent = isIE(10) ? document.body : null;
    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while(offsetParent === noOffsetParent && element.nextElementSibling){
        offsetParent = (element = element.nextElementSibling).offsetParent;
    }
    var nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return element ? element.ownerDocument.documentElement : document.documentElement;
    }
    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if ([
        'TH',
        'TD',
        'TABLE'
    ].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
    }
    return offsetParent;
}
function isOffsetContainer(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY') {
        return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */ function getRoot(node) {
    if (node.parentNode !== null) {
        return getRoot(node.parentNode);
    }
    return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */ function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
    }
    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;
    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;
    // Both nodes are inside #document
    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
        }
        return getOffsetParent(commonAncestorContainer);
    }
    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
    } else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
    }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */ function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        var html = element.ownerDocument.documentElement;
        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }
    return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */ function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */ function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}
function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}
function getWindowSizes(document1) {
    var body = document1.body;
    var html = document1.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);
    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}
var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};
var createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var defineProperty = function(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
};
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */ function getClientRect(offsets) {
    return _extends({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
    });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */ function getBoundingClientRect(element) {
    var rect = {};
    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
        if (isIE(10)) {
            rect = element.getBoundingClientRect();
            var scrollTop = getScroll(element, 'top');
            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
        } else {
            rect = element.getBoundingClientRect();
        }
    } catch (e) {}
    var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.width;
    var height = sizes.height || element.clientHeight || result.height;
    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;
    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
    }
    return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;
    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
        var marginTop = parseFloat(styles.marginTop);
        var marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }
    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
    }
    return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    var offset = {
        top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
        left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
        width: width,
        height: height
    };
    return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */ function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
        return false;
    }
    return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */ function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
    }
    var el = element.parentElement;
    while(el && getStyleComputedProperty(el, 'transform') === 'none'){
        el = el.parentElement;
    }
    return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */ function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    // NOTE: 1 DOM access here
    var boundaries = {
        top: 0,
        left: 0
    };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    // Handle viewport case
    if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
        // Handle other cases based on DOM element used as boundaries
        var boundariesNode = void 0;
        if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(reference));
            if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = popper.ownerDocument.documentElement;
            }
        } else if (boundariesElement === 'window') {
            boundariesNode = popper.ownerDocument.documentElement;
        } else {
            boundariesNode = boundariesElement;
        }
        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(popper.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = height + offsets.top;
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = width + offsets.left;
        } else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
        }
    }
    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
    return boundaries;
}
function getArea(_ref) {
    var width = _ref.width, height = _ref.height;
    return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
    var rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    var sortedAreas = Object.keys(rects).map(function(key) {
        return _extends({
            key: key
        }, rects[key], {
            area: getArea(rects[key])
        });
    }).sort(function(a, b) {
        return b.area - a.area;
    });
    var filteredAreas = sortedAreas.filter(function(_ref2) {
        var width = _ref2.width, height = _ref2.height;
        return width >= popper.clientWidth && height >= popper.clientHeight;
    });
    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
    var variation = placement.split('-')[1];
    return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */ function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */ function getOuterSizes(element) {
    var window1 = element.ownerDocument.defaultView;
    var styles = window1.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
        width: element.offsetWidth + y,
        height: element.offsetHeight + x
    };
    return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */ function getOppositePlacement(placement) {
    var hash = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom'
    };
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */ function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];
    // Get popper node sizes
    var popperRect = getOuterSizes(popper);
    // Add position, width and height to our offsets object
    var popperOffsets = {
        width: popperRect.width,
        height: popperRect.height
    };
    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = [
        'right',
        'left'
    ].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';
    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
        popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
        popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }
    return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */ function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
        return arr.find(check);
    }
    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */ function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
        return arr.findIndex(function(cur) {
            return cur[prop] === value;
        });
    }
    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function(obj) {
        return obj[prop] === value;
    });
    return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */ function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
    modifiersToRun.forEach(function(modifier) {
        if (modifier['function']) {
            // eslint-disable-line dot-notation
            console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        }
        var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
        if (modifier.enabled && isFunction(fn)) {
            // Add properties to offsets to make them a complete clientRect object
            // we do this before each modifier to make sure the previous one doesn't
            // mess with these values
            data.offsets.popper = getClientRect(data.offsets.popper);
            data.offsets.reference = getClientRect(data.offsets.reference);
            data = fn(data, modifier);
        }
    });
    return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */ function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
        return;
    }
    var data = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: false,
        offsets: {}
    };
    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;
    data.positionFixed = this.options.positionFixed;
    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';
    // run the modifiers
    data = runModifiers(this.modifiers, data);
    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
        this.state.isCreated = true;
        this.options.onCreate(data);
    } else {
        this.options.onUpdate(data);
    }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */ function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function(_ref) {
        var name = _ref.name, enabled = _ref.enabled;
        return enabled && name === modifierName;
    });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */ function getSupportedPropertyName(property) {
    var prefixes = [
        false,
        'ms',
        'Webkit',
        'Moz',
        'O'
    ];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
    for(var i = 0; i < prefixes.length; i++){
        var prefix = prefixes[i];
        var toCheck = prefix ? '' + prefix + upperProp : property;
        if (typeof document.body.style[toCheck] !== 'undefined') {
            return toCheck;
        }
    }
    return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */ function destroy() {
    this.state.isDestroyed = true;
    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
        this.popper.removeAttribute('x-placement');
        this.popper.style.position = '';
        this.popper.style.top = '';
        this.popper.style.left = '';
        this.popper.style.right = '';
        this.popper.style.bottom = '';
        this.popper.style.willChange = '';
        this.popper.style[getSupportedPropertyName('transform')] = '';
    }
    this.disableEventListeners();
    // remove the popper if user explicitly asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
        this.popper.parentNode.removeChild(this.popper);
    }
    return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */ function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, {
        passive: true
    });
    if (!isBody) {
        attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */ function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, {
        passive: true
    });
    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;
    return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */ function enableEventListeners() {
    if (!this.state.eventsEnabled) {
        this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */ function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);
    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function(target) {
        target.removeEventListener('scroll', state.updateBound);
    });
    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */ function disableEventListeners() {
    if (this.state.eventsEnabled) {
        cancelAnimationFrame(this.scheduleUpdate);
        this.state = removeEventListeners(this.reference, this.state);
    }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */ function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */ function setStyles(element, styles) {
    Object.keys(styles).forEach(function(prop) {
        var unit = '';
        // add unit if the value is numeric and is one of the following
        if ([
            'width',
            'height',
            'top',
            'right',
            'bottom',
            'left'
        ].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
            unit = 'px';
        }
        element.style[prop] = styles[prop] + unit;
    });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */ function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function(prop) {
        var value = attributes[prop];
        if (value !== false) {
            element.setAttribute(prop, attributes[prop]);
        } else {
            element.removeAttribute(prop);
        }
    });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */ function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);
    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);
    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
        setStyles(data.arrowElement, data.arrowStyles);
    }
    return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */ function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
    popper.setAttribute('x-placement', placement);
    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, {
        position: options.positionFixed ? 'fixed' : 'absolute'
    });
    return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */ function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var round = Math.round, floor = Math.floor;
    var noRound = function noRound(v) {
        return v;
    };
    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);
    var isVertical = [
        'left',
        'right'
    ].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;
    return {
        left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
        top: verticalToInteger(popper.top),
        bottom: verticalToInteger(popper.bottom),
        right: horizontalToInteger(popper.right)
    };
}
var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function computeStyle(data, options) {
    var x = options.x, y = options.y;
    var popper = data.offsets.popper;
    // Remove this legacy support in Popper.js v2
    var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
        return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
        console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);
    // Styles
    var styles = {
        position: popper.position
    };
    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';
    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');
    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0, top = void 0;
    if (sideA === 'bottom') {
        // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
        // and not the bottom of the html element
        if (offsetParent.nodeName === 'HTML') {
            top = -offsetParent.clientHeight + offsets.bottom;
        } else {
            top = -offsetParentRect.height + offsets.bottom;
        }
    } else {
        top = offsets.top;
    }
    if (sideB === 'right') {
        if (offsetParent.nodeName === 'HTML') {
            left = -offsetParent.clientWidth + offsets.right;
        } else {
            left = -offsetParentRect.width + offsets.right;
        }
    } else {
        left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
        styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
        styles[sideA] = 0;
        styles[sideB] = 0;
        styles.willChange = 'transform';
    } else {
        // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
        var invertTop = sideA === 'bottom' ? -1 : 1;
        var invertLeft = sideB === 'right' ? -1 : 1;
        styles[sideA] = top * invertTop;
        styles[sideB] = left * invertLeft;
        styles.willChange = sideA + ', ' + sideB;
    }
    // Attributes
    var attributes = {
        'x-placement': data.placement
    };
    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
    return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */ function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function(_ref) {
        var name = _ref.name;
        return name === requestingName;
    });
    var isRequired = !!requesting && modifiers.some(function(modifier) {
        return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });
    if (!isRequired) {
        var _requesting = '`' + requestingName + '`';
        var requested = '`' + requestedName + '`';
        console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function arrow(data, options) {
    var _data$offsets$arrow;
    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
        return data;
    }
    var arrowElement = options.element;
    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = data.instance.popper.querySelector(arrowElement);
        // if arrowElement is not found, don't run the modifier
        if (!arrowElement) {
            return data;
        }
    } else {
        // if the arrowElement isn't a query selector we must check that the
        // provided DOM node is child of its popper node
        if (!data.instance.popper.contains(arrowElement)) {
            console.warn('WARNING: `arrow.element` must be child of its popper element!');
            return data;
        }
    }
    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var isVertical = [
        'left',
        'right'
    ].indexOf(placement) !== -1;
    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];
    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //
    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
        data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
        data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);
    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
    return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */ function getOppositeVariation(variation) {
    if (variation === 'end') {
        return 'start';
    } else if (variation === 'start') {
        return 'end';
    }
    return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */ var placements = [
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start'
];
// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */ function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
        return data;
    }
    if (data.flipped && data.placement === data.originalPlacement) {
        // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
        return data;
    }
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';
    var flipOrder = [];
    switch(options.behavior){
        case BEHAVIORS.FLIP:
            flipOrder = [
                placement,
                placementOpposite
            ];
            break;
        case BEHAVIORS.CLOCKWISE:
            flipOrder = clockwise(placement);
            break;
        case BEHAVIORS.COUNTERCLOCKWISE:
            flipOrder = clockwise(placement, true);
            break;
        default:
            flipOrder = options.behavior;
    }
    flipOrder.forEach(function(step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split('-')[0];
        placementOpposite = getOppositePlacement(placement);
        var popperOffsets = data.offsets.popper;
        var refOffsets = data.offsets.reference;
        // using floor because the reference offsets may contain decimals we are not going to consider here
        var floor = Math.floor;
        var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
        var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
        var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
        var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
        var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;
        // flip the variation if required
        var isVertical = [
            'top',
            'bottom'
        ].indexOf(placement) !== -1;
        // flips variation if reference element overflows boundaries
        var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);
        // flips variation if popper content overflows boundaries
        var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
        var flippedVariation = flippedVariationByRef || flippedVariationByContent;
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            // this boolean to detect any flip loop
            data.flipped = true;
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? '-' + variation : '');
            // this object contains `position`, we want to preserve it along with
            // any additional property we may add in the future
            data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
            data = runModifiers(data.instance.modifiers, data, 'flip');
        }
    });
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function keepTogether(data) {
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = [
        'top',
        'bottom'
    ].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    if (popper[side] < floor(reference[opSide])) {
        data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
        data.offsets.popper[opSide] = floor(reference[side]);
    }
    return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */ function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];
    // If it's not a number it's an operator, I guess
    if (!value) {
        return str;
    }
    if (unit.indexOf('%') === 0) {
        var element = void 0;
        switch(unit){
            case '%p':
                element = popperOffsets;
                break;
            case '%':
            case '%r':
            default:
                element = referenceOffsets;
        }
        var rect = getClientRect(element);
        return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
        // if is a vh or vw, we calculate the size based on the viewport
        var size = void 0;
        if (unit === 'vh') {
            size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        } else {
            size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        }
        return size / 100 * value;
    } else {
        // if is an explicit pixel unit, we get rid of the unit and keep the value
        // if is an implicit unit, it's px, and we return just the value
        return value;
    }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */ function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [
        0,
        0
    ];
    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = [
        'right',
        'left'
    ].indexOf(basePlacement) !== -1;
    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function(frag) {
        return frag.trim();
    });
    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function(frag) {
        return frag.search(/,|\s/) !== -1;
    }));
    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }
    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [
        fragments.slice(0, divider).concat([
            fragments[divider].split(splitRegex)[0]
        ]),
        [
            fragments[divider].split(splitRegex)[1]
        ].concat(fragments.slice(divider + 1))
    ] : [
        fragments
    ];
    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function(op, index) {
        // Most of the units rely on the orientation of the popper
        var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
        var mergeWithPrevious = false;
        return op// This aggregates any `+` or `-` sign that aren't considered operators
        // e.g.: 10 + +5 => [10, +, +5]
        .reduce(function(a, b) {
            if (a[a.length - 1] === '' && [
                '+',
                '-'
            ].indexOf(b) !== -1) {
                a[a.length - 1] = b;
                mergeWithPrevious = true;
                return a;
            } else if (mergeWithPrevious) {
                a[a.length - 1] += b;
                mergeWithPrevious = false;
                return a;
            } else {
                return a.concat(b);
            }
        }, [])// Here we convert the string values into number values (in px)
        .map(function(str) {
            return toValue(str, measurement, popperOffsets, referenceOffsets);
        });
    });
    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function(op, index) {
        op.forEach(function(frag, index2) {
            if (isNumeric(frag)) {
                offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
            }
        });
    });
    return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */ function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var basePlacement = placement.split('-')[0];
    var offsets = void 0;
    if (isNumeric(+offset)) {
        offsets = [
            +offset,
            0
        ];
    } else {
        offsets = parseOffset(offset, popper, reference, basePlacement);
    }
    if (basePlacement === 'left') {
        popper.top += offsets[0];
        popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
        popper.top += offsets[0];
        popper.left += offsets[1];
    } else if (basePlacement === 'top') {
        popper.left += offsets[0];
        popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
        popper.left += offsets[0];
        popper.top += offsets[1];
    }
    data.popper = popper;
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
        boundariesElement = getOffsetParent(boundariesElement);
    }
    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top, left = popperStyles.left, transform = popperStyles[transformProp];
    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;
    options.boundaries = boundaries;
    var order = options.priority;
    var popper = data.offsets.popper;
    var check = {
        primary: function primary(placement) {
            var value = popper[placement];
            if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
                value = Math.max(popper[placement], boundaries[placement]);
            }
            return defineProperty({}, placement, value);
        },
        secondary: function secondary(placement) {
            var mainSide = placement === 'right' ? 'left' : 'top';
            var value = popper[mainSide];
            if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
                value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
            }
            return defineProperty({}, mainSide, value);
        }
    };
    order.forEach(function(placement) {
        var side = [
            'left',
            'top'
        ].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        popper = _extends({}, popper, check[side](placement));
    });
    data.offsets.popper = popper;
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];
    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
        var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
        var isVertical = [
            'bottom',
            'top'
        ].indexOf(basePlacement) !== -1;
        var side = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';
        var shiftOffsets = {
            start: defineProperty({}, side, reference[side]),
            end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
        };
        data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
        return data;
    }
    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function(modifier) {
        return modifier.name === 'preventOverflow';
    }).boundaries;
    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === true) {
            return data;
        }
        data.hide = true;
        data.attributes['x-out-of-boundaries'] = '';
    } else {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === false) {
            return data;
        }
        data.hide = false;
        data.attributes['x-out-of-boundaries'] = false;
    }
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var isHoriz = [
        'left',
        'right'
    ].indexOf(basePlacement) !== -1;
    var subtractLength = [
        'top',
        'left'
    ].indexOf(basePlacement) === -1;
    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);
    return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */ /**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */ var modifiers = {
    /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */ shift: {
        /** @prop {number} order=100 - Index used to define the order of execution */ order: 100,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: shift
    },
    /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */ offset: {
        /** @prop {number} order=200 - Index used to define the order of execution */ order: 200,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: offset,
        /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */ offset: 0
    },
    /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */ preventOverflow: {
        /** @prop {number} order=300 - Index used to define the order of execution */ order: 300,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: preventOverflow,
        /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */ priority: [
            'left',
            'right',
            'top',
            'bottom'
        ],
        /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */ padding: 5,
        /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */ boundariesElement: 'scrollParent'
    },
    /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */ keepTogether: {
        /** @prop {number} order=400 - Index used to define the order of execution */ order: 400,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: keepTogether
    },
    /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */ arrow: {
        /** @prop {number} order=500 - Index used to define the order of execution */ order: 500,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: arrow,
        /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */ element: '[x-arrow]'
    },
    /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */ flip: {
        /** @prop {number} order=600 - Index used to define the order of execution */ order: 600,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: flip,
        /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */ behavior: 'flip',
        /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */ padding: 5,
        /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */ boundariesElement: 'viewport',
        /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */ flipVariations: false,
        /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */ flipVariationsByContent: false
    },
    /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */ inner: {
        /** @prop {number} order=700 - Index used to define the order of execution */ order: 700,
        /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */ enabled: false,
        /** @prop {ModifierFn} */ fn: inner
    },
    /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */ hide: {
        /** @prop {number} order=800 - Index used to define the order of execution */ order: 800,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: hide
    },
    /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */ computeStyle: {
        /** @prop {number} order=850 - Index used to define the order of execution */ order: 850,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: computeStyle,
        /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */ gpuAcceleration: true,
        /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */ x: 'bottom',
        /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */ y: 'right'
    },
    /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */ applyStyle: {
        /** @prop {number} order=900 - Index used to define the order of execution */ order: 900,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: applyStyle,
        /** @prop {Function} */ onLoad: applyStyleOnLoad,
        /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */ gpuAcceleration: undefined
    }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */ /**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */ var Defaults = {
    /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */ placement: 'bottom',
    /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */ positionFixed: false,
    /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */ eventsEnabled: true,
    /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */ removeOnDestroy: false,
    /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */ onCreate: function onCreate() {},
    /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */ onUpdate: function onUpdate() {},
    /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */ modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */ /**
 * @callback onUpdate
 * @param {dataObject} data
 */ // Utils
// Methods
var Popper = function() {
    /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */ function Popper(reference, popper) {
        var _this = this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        classCallCheck(this, Popper);
        this.scheduleUpdate = function() {
            return requestAnimationFrame(_this.update);
        };
        // make update() debounced, so that it only runs at most once-per-tick
        this.update = debounce(this.update.bind(this));
        // with {} we create a new object with the options inside it
        this.options = _extends({}, Popper.Defaults, options);
        // init state
        this.state = {
            isDestroyed: false,
            isCreated: false,
            scrollParents: []
        };
        // get reference and popper elements (allow jQuery wrappers)
        this.reference = reference && reference.jquery ? reference[0] : reference;
        this.popper = popper && popper.jquery ? popper[0] : popper;
        // Deep merge modifiers options
        this.options.modifiers = {};
        Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function(name) {
            _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
        });
        // Refactoring modifiers' list (Object => Array)
        this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
            return _extends({
                name: name
            }, _this.options.modifiers[name]);
        })// sort the modifiers by order
        .sort(function(a, b) {
            return a.order - b.order;
        });
        // modifiers have the ability to execute arbitrary code when Popper.js get inited
        // such code is executed in the same order of its modifier
        // they could add new properties to their options configuration
        // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
        this.modifiers.forEach(function(modifierOptions) {
            if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
                modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
            }
        });
        // fire the first update to position the popper in the right place
        this.update();
        var eventsEnabled = this.options.eventsEnabled;
        if (eventsEnabled) {
            // setup event listeners, they will take care of update the position in specific situations
            this.enableEventListeners();
        }
        this.state.eventsEnabled = eventsEnabled;
    }
    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs
    createClass(Popper, [
        {
            key: 'update',
            value: function update$$1() {
                return update.call(this);
            }
        },
        {
            key: 'destroy',
            value: function destroy$$1() {
                return destroy.call(this);
            }
        },
        {
            key: 'enableEventListeners',
            value: function enableEventListeners$$1() {
                return enableEventListeners.call(this);
            }
        },
        {
            key: 'disableEventListeners',
            value: function disableEventListeners$$1() {
                return disableEventListeners.call(this);
            }
        }
    ]);
    return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */ Popper.Utils = (typeof window !== 'undefined' ? window : /*TURBOPACK member replacement*/ __turbopack_context__.g).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
const __TURBOPACK__default__export__ = Popper;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */ __turbopack_context__.s([
    "default",
    ()=>hasClass
]);
function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/addClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>addClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hasClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js [app-client] (ecmascript)");
;
function addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hasClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;
    else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>removeClass
]);
function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    } else if (typeof element.className === 'string') {
        element.className = replaceClassName(element.className, className);
    } else {
        element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    disabled: false
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/utils/PropTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classNamesShape",
    ()=>classNamesShape,
    "timeoutsShape",
    ()=>timeoutsShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
var timeoutsShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        appear: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number
    }).isRequired
]) : "TURBOPACK unreachable";
var classNamesShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        active: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        enterDone: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        enterActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        exitDone: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        exitActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    })
]) : "TURBOPACK unreachable";
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/utils/reflow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forceReflow",
    ()=>forceReflow
]);
var forceReflow = function forceReflow(node) {
    return node.scrollTop;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/Transition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTERED",
    ()=>ENTERED,
    "ENTERING",
    ()=>ENTERING,
    "EXITED",
    ()=>EXITED,
    "EXITING",
    ()=>EXITING,
    "UNMOUNTED",
    ()=>UNMOUNTED,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/utils/PropTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/utils/reflow.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */ var Transition = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Transition, _React$Component);
    function Transition(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
            if (appear) {
                initialStatus = EXITED;
                _this.appearStatus = ENTERING;
            } else {
                initialStatus = ENTERED;
            }
        } else {
            if (props.unmountOnExit || props.mountOnEnter) {
                initialStatus = UNMOUNTED;
            } else {
                initialStatus = EXITED;
            }
        }
        _this.state = {
            status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) {
            return {
                status: EXITED
            };
        }
        return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    ;
    var _proto = Transition.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
            var status = this.state.status;
            if (this.props.in) {
                if (status !== ENTERING && status !== ENTERED) {
                    nextStatus = ENTERING;
                }
            } else {
                if (status === ENTERING || status === ENTERED) {
                    nextStatus = EXITING;
                }
            }
        }
        this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== 'number') {
            exit = timeout.exit;
            enter = timeout.enter; // TODO: remove fallback for next major
            appear = timeout.appear !== undefined ? timeout.appear : enter;
        }
        return {
            exit: exit,
            enter: enter,
            appear: appear
        };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
            mounting = false;
        }
        if (nextStatus !== null) {
            // nextStatus will always be ENTERING or EXITING.
            this.cancelNextCallback();
            if (nextStatus === ENTERING) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                    // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                    // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
                    if (node) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forceReflow"])(node);
                }
                this.performEnter(mounting);
            } else {
                this.performExit();
            }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
            this.setState({
                status: UNMOUNTED
            });
        }
    };
    _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [
            appearing
        ] : [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this),
            appearing
        ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set
        if (!mounting && !enter || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: ENTERED
            }, function() {
                _this2.props.onEntered(maybeNode);
            });
            return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
            status: ENTERING
        }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
                _this2.safeSetState({
                    status: ENTERED
                }, function() {
                    _this2.props.onEntered(maybeNode, maybeAppearing);
                });
            });
        });
    };
    _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this); // no exit animation skip right to EXITED
        if (!exit || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: EXITED
            }, function() {
                _this3.props.onExited(maybeNode);
            });
            return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
            status: EXITING
        }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
                _this3.safeSetState({
                    status: EXITED
                }, function() {
                    _this3.props.onExited(maybeNode);
                });
            });
        });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
            if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
            }
        };
        this.nextCallback.cancel = function() {
            active = false;
        };
        return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
            setTimeout(this.nextCallback, 0);
            return;
        }
        if (this.props.addEndListener) {
            var _ref3 = this.props.nodeRef ? [
                this.nextCallback
            ] : [
                node,
                this.nextCallback
            ], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
            this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout != null) {
            setTimeout(this.nextCallback, timeout);
        }
    };
    _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
            return null;
        }
        var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef"
        ]);
        return(/*#__PURE__*/ // allows for nested Transitions
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: null
        }, typeof children === 'function' ? children(status, childProps) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.only(children), childProps)));
    };
    return Transition;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component);
Transition.contextType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Transition.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */ nodeRef: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        current: typeof Element === 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].any : function(propValue, key, componentName, location, propFullName, secret) {
            var value = propValue[key];
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
        }
    }),
    /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].element.isRequired
    ]).isRequired,
    /**
   * Show the component; triggers the enter or exit states
   */ in: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */ mountOnEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */ unmountOnExit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */ appear: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable enter transitions.
   */ enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable exit transitions.
   */ exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */ timeout: function timeout(props) {
        var pt = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutsShape"];
        if (!props.addEndListener) pt = pt.isRequired;
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return pt.apply(void 0, [
            props
        ].concat(args));
    },
    /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */ addEndListener: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
} : "TURBOPACK unreachable"; // Name the function so it is clearer in the documentation
function noop() {}
Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
const __TURBOPACK__default__export__ = Transition;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/CSSTransition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/addClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/Transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/utils/PropTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/utils/reflow.js [app-client] (ecmascript)");
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
var _addClass = function addClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function(c) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, c);
    });
};
var removeClass = function removeClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function(c) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, c);
    });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */ var CSSTransition = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(CSSTransition, _React$Component);
    function CSSTransition() {
        var _this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [
            this
        ].concat(args)) || this;
        _this.appliedClasses = {
            appear: {},
            enter: {},
            exit: {}
        };
        _this.onEnter = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
            _this.removeClasses(node, 'exit');
            _this.addClass(node, appearing ? 'appear' : 'enter', 'base');
            if (_this.props.onEnter) {
                _this.props.onEnter(maybeNode, maybeAppearing);
            }
        };
        _this.onEntering = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
            var type = appearing ? 'appear' : 'enter';
            _this.addClass(node, type, 'active');
            if (_this.props.onEntering) {
                _this.props.onEntering(maybeNode, maybeAppearing);
            }
        };
        _this.onEntered = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
            var type = appearing ? 'appear' : 'enter';
            _this.removeClasses(node, type);
            _this.addClass(node, type, 'done');
            if (_this.props.onEntered) {
                _this.props.onEntered(maybeNode, maybeAppearing);
            }
        };
        _this.onExit = function(maybeNode) {
            var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
            _this.removeClasses(node, 'appear');
            _this.removeClasses(node, 'enter');
            _this.addClass(node, 'exit', 'base');
            if (_this.props.onExit) {
                _this.props.onExit(maybeNode);
            }
        };
        _this.onExiting = function(maybeNode) {
            var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
            _this.addClass(node, 'exit', 'active');
            if (_this.props.onExiting) {
                _this.props.onExiting(maybeNode);
            }
        };
        _this.onExited = function(maybeNode) {
            var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
            _this.removeClasses(node, 'exit');
            _this.addClass(node, 'exit', 'done');
            if (_this.props.onExited) {
                _this.props.onExited(maybeNode);
            }
        };
        _this.resolveArguments = function(maybeNode, maybeAppearing) {
            return _this.props.nodeRef ? [
                _this.props.nodeRef.current,
                maybeNode
            ] // here `maybeNode` is actually `appearing`
             : [
                maybeNode,
                maybeAppearing
            ];
        };
        _this.getClassNames = function(type) {
            var classNames = _this.props.classNames;
            var isStringClassNames = typeof classNames === 'string';
            var prefix = isStringClassNames && classNames ? classNames + "-" : '';
            var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
            var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
            var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
            return {
                baseClassName: baseClassName,
                activeClassName: activeClassName,
                doneClassName: doneClassName
            };
        };
        return _this;
    }
    var _proto = CSSTransition.prototype;
    _proto.addClass = function addClass(node, type, phase) {
        var className = this.getClassNames(type)[phase + "ClassName"];
        var _this$getClassNames = this.getClassNames('enter'), doneClassName = _this$getClassNames.doneClassName;
        if (type === 'appear' && phase === 'done' && doneClassName) {
            className += " " + doneClassName;
        } // This is to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        if (phase === 'active') {
            if (node) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forceReflow"])(node);
        }
        if (className) {
            this.appliedClasses[type][phase] = className;
            _addClass(node, className);
        }
    };
    _proto.removeClasses = function removeClasses(node, type) {
        var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
        this.appliedClasses[type] = {};
        if (baseClassName) {
            removeClass(node, baseClassName);
        }
        if (activeClassName) {
            removeClass(node, activeClassName);
        }
        if (doneClassName) {
            removeClass(node, doneClassName);
        }
    };
    _proto.render = function render() {
        var _this$props = this.props, _ = _this$props.classNames, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "classNames"
        ]);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited
        }));
    };
    return CSSTransition;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component);
CSSTransition.defaultProps = {
    classNames: ''
};
CSSTransition.propTypes = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].propTypes, {
    /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */ classNames: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNamesShape"],
    /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
}) : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = CSSTransition;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/CSSTransition.js [app-client] (ecmascript) <export default as CSSTransition>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSSTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$CSSTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$CSSTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/CSSTransition.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reactIs = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js [app-client] (ecmascript)");
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    } // React v16.12 and above
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for(var i = 0; i < keys.length; ++i){
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
module.exports = hoistNonReactStatics;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/hoist-non-react-methods@1.1.0/node_modules/hoist-non-react-methods/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = hoistNonReactMethods;
var REACT_PROTOTYPE = {
    autobind: true,
    childContextTypes: true,
    componentDidMount: true,
    componentDidUpdate: true,
    componentWillMount: true,
    componentWillReceiveProps: true,
    componentWillUnmount: true,
    componentWillUpdate: true,
    contextTypes: true,
    displayName: true,
    forceUpdate: true,
    getChildContext: true,
    getDefaultProps: true,
    getDOMNode: true,
    getInitialState: true,
    isMounted: true,
    mixins: true,
    propTypes: true,
    render: true,
    replaceProps: true,
    replaceState: true,
    setProps: true,
    setState: true,
    shouldComponentUpdate: true,
    statics: true,
    updateComponent: true
};
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};
var defaultConfig = {
    delegateTo: function delegateTo(w) {
        return w.refs.child;
    },
    hoistStatics: true
};
function hoistNonReactMethods(targetComponent, sourceComponent, config) {
    var targetComponentName = targetComponent.displayName || targetComponent.name || 'Wrapper';
    var sourceComponentName = sourceComponent.displayName || sourceComponent.name || 'WrappedComponent';
    var hoistStatics = config && typeof config.hoistStatics !== 'undefined' ? config.hoistStatics : defaultConfig.hoistStatics;
    var delegateTo = config && typeof config.delegateTo !== 'undefined' ? config.delegateTo : defaultConfig.delegateTo;
    // backwards compatible where config option is delegateTo function
    if (typeof config === 'function') delegateTo = config;
    if (hoistStatics) {
        var statics = Object.getOwnPropertyNames(sourceComponent).filter(function(k) {
            return !REACT_STATICS[k] && !KNOWN_STATICS[k];
        });
        statics.forEach(function(methodName) {
            if (targetComponent[methodName]) console.warn('Static method ' + methodName + ' already exists in wrapper component ' + targetComponentName + ', and won\'t be hoisted. Consider changing the name on ' + sourceComponentName + '.');
            targetComponent[methodName] = sourceComponent[methodName];
        });
    }
    var methods = Object.getOwnPropertyNames(sourceComponent.prototype).filter(function(k) {
        return !REACT_PROTOTYPE[k];
    });
    methods.forEach(function(methodName) {
        if (targetComponent.prototype[methodName]) {
            console.warn('Method ' + methodName + ' already exists in wrapper component ' + targetComponentName + ', and won\'t be hoisted. Consider changing the name on ' + sourceComponentName + '.');
            return;
        }
        targetComponent.prototype[methodName] = function() {
            var _sourceComponent$prot;
            for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return (_sourceComponent$prot = sourceComponent.prototype[methodName]).call.apply(_sourceComponent$prot, [
                delegateTo.call(this, this)
            ].concat(args));
        };
    });
    return targetComponent;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/i18next@19.9.2/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectSpread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inherits.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var consoleLogger = {
    type: 'logger',
    log: function log(args) {
        this.output('log', args);
    },
    warn: function warn(args) {
        this.output('warn', args);
    },
    error: function error(args) {
        this.output('error', args);
    },
    output: function output(type, args) {
        if (console && console[type]) console[type].apply(console, args);
    }
};
var Logger = function() {
    function Logger(concreteLogger) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, Logger);
        this.init(concreteLogger, options);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Logger, [
        {
            key: "init",
            value: function init(concreteLogger) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                this.prefix = options.prefix || 'i18next:';
                this.logger = concreteLogger || consoleLogger;
                this.options = options;
                this.debug = options.debug;
            }
        },
        {
            key: "setDebug",
            value: function setDebug(bool) {
                this.debug = bool;
            }
        },
        {
            key: "log",
            value: function log() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                return this.forward(args, 'log', '', true);
            }
        },
        {
            key: "warn",
            value: function warn() {
                for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
                    args[_key2] = arguments[_key2];
                }
                return this.forward(args, 'warn', '', true);
            }
        },
        {
            key: "error",
            value: function error() {
                for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++){
                    args[_key3] = arguments[_key3];
                }
                return this.forward(args, 'error', '');
            }
        },
        {
            key: "deprecate",
            value: function deprecate() {
                for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++){
                    args[_key4] = arguments[_key4];
                }
                return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
            }
        },
        {
            key: "forward",
            value: function forward(args, lvl, prefix, debugOnly) {
                if (debugOnly && !this.debug) return null;
                if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
                return this.logger[lvl](args);
            }
        },
        {
            key: "create",
            value: function create(moduleName) {
                return new Logger(this.logger, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, {
                    prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
                }, this.options));
            }
        }
    ]);
    return Logger;
}();
var baseLogger = new Logger();
var EventEmitter = function() {
    function EventEmitter() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, EventEmitter);
        this.observers = {};
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(EventEmitter, [
        {
            key: "on",
            value: function on(events, listener) {
                var _this = this;
                events.split(' ').forEach(function(event) {
                    _this.observers[event] = _this.observers[event] || [];
                    _this.observers[event].push(listener);
                });
                return this;
            }
        },
        {
            key: "off",
            value: function off(event, listener) {
                if (!this.observers[event]) return;
                if (!listener) {
                    delete this.observers[event];
                    return;
                }
                this.observers[event] = this.observers[event].filter(function(l) {
                    return l !== listener;
                });
            }
        },
        {
            key: "emit",
            value: function emit(event) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                if (this.observers[event]) {
                    var cloned = [].concat(this.observers[event]);
                    cloned.forEach(function(observer) {
                        observer.apply(void 0, args);
                    });
                }
                if (this.observers['*']) {
                    var _cloned = [].concat(this.observers['*']);
                    _cloned.forEach(function(observer) {
                        observer.apply(observer, [
                            event
                        ].concat(args));
                    });
                }
            }
        }
    ]);
    return EventEmitter;
}();
function defer() {
    var res;
    var rej;
    var promise = new Promise(function(resolve, reject) {
        res = resolve;
        rej = reject;
    });
    promise.resolve = res;
    promise.reject = rej;
    return promise;
}
function makeString(object) {
    if (object == null) return '';
    return '' + object;
}
function copy(a, s, t) {
    a.forEach(function(m) {
        if (s[m]) t[m] = s[m];
    });
}
function getLastOfPath(object, path, Empty) {
    function cleanKey(key) {
        return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
    }
    function canNotTraverseDeeper() {
        return !object || typeof object === 'string';
    }
    var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
    while(stack.length > 1){
        if (canNotTraverseDeeper()) return {};
        var key = cleanKey(stack.shift());
        if (!object[key] && Empty) object[key] = new Empty();
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            object = object[key];
        } else {
            object = {};
        }
    }
    if (canNotTraverseDeeper()) return {};
    return {
        obj: object,
        k: cleanKey(stack.shift())
    };
}
function setPath(object, path, newValue) {
    var _getLastOfPath = getLastOfPath(object, path, Object), obj = _getLastOfPath.obj, k = _getLastOfPath.k;
    obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
    var _getLastOfPath2 = getLastOfPath(object, path, Object), obj = _getLastOfPath2.obj, k = _getLastOfPath2.k;
    obj[k] = obj[k] || [];
    if (concat) obj[k] = obj[k].concat(newValue);
    if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
    var _getLastOfPath3 = getLastOfPath(object, path), obj = _getLastOfPath3.obj, k = _getLastOfPath3.k;
    if (!obj) return undefined;
    return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
    var value = getPath(data, key);
    if (value !== undefined) {
        return value;
    }
    return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
    for(var prop in source){
        if (prop !== '__proto__' && prop !== 'constructor') {
            if (prop in target) {
                if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
                    if (overwrite) target[prop] = source[prop];
                } else {
                    deepExtend(target[prop], source[prop], overwrite);
                }
            } else {
                target[prop] = source[prop];
            }
        }
    }
    return target;
}
function regexEscape(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
};
function escape(data) {
    if (typeof data === 'string') {
        return data.replace(/[&<>"'\/]/g, function(s) {
            return _entityMap[s];
        });
    }
    return data;
}
var isIE10 = typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
var ResourceStore = function(_EventEmitter) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ResourceStore, _EventEmitter);
    function ResourceStore(data) {
        var _this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            ns: [
                'translation'
            ],
            defaultNS: 'translation'
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, ResourceStore);
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ResourceStore).call(this));
        if (isIE10) {
            EventEmitter.call((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this));
        }
        _this.data = data || {};
        _this.options = options;
        if (_this.options.keySeparator === undefined) {
            _this.options.keySeparator = '.';
        }
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ResourceStore, [
        {
            key: "addNamespaces",
            value: function addNamespaces(ns) {
                if (this.options.ns.indexOf(ns) < 0) {
                    this.options.ns.push(ns);
                }
            }
        },
        {
            key: "removeNamespaces",
            value: function removeNamespaces(ns) {
                var index = this.options.ns.indexOf(ns);
                if (index > -1) {
                    this.options.ns.splice(index, 1);
                }
            }
        },
        {
            key: "getResource",
            value: function getResource(lng, ns, key) {
                var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
                var path = [
                    lng,
                    ns
                ];
                if (key && typeof key !== 'string') path = path.concat(key);
                if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);
                if (lng.indexOf('.') > -1) {
                    path = lng.split('.');
                }
                return getPath(this.data, path);
            }
        },
        {
            key: "addResource",
            value: function addResource(lng, ns, key, value) {
                var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
                    silent: false
                };
                var keySeparator = this.options.keySeparator;
                if (keySeparator === undefined) keySeparator = '.';
                var path = [
                    lng,
                    ns
                ];
                if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
                if (lng.indexOf('.') > -1) {
                    path = lng.split('.');
                    value = ns;
                    ns = path[1];
                }
                this.addNamespaces(ns);
                setPath(this.data, path, value);
                if (!options.silent) this.emit('added', lng, ns, key, value);
            }
        },
        {
            key: "addResources",
            value: function addResources(lng, ns, resources) {
                var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
                    silent: false
                };
                for(var m in resources){
                    if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
                        silent: true
                    });
                }
                if (!options.silent) this.emit('added', lng, ns, resources);
            }
        },
        {
            key: "addResourceBundle",
            value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
                var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
                    silent: false
                };
                var path = [
                    lng,
                    ns
                ];
                if (lng.indexOf('.') > -1) {
                    path = lng.split('.');
                    deep = resources;
                    resources = ns;
                    ns = path[1];
                }
                this.addNamespaces(ns);
                var pack = getPath(this.data, path) || {};
                if (deep) {
                    deepExtend(pack, resources, overwrite);
                } else {
                    pack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, pack, resources);
                }
                setPath(this.data, path, pack);
                if (!options.silent) this.emit('added', lng, ns, resources);
            }
        },
        {
            key: "removeResourceBundle",
            value: function removeResourceBundle(lng, ns) {
                if (this.hasResourceBundle(lng, ns)) {
                    delete this.data[lng][ns];
                }
                this.removeNamespaces(ns);
                this.emit('removed', lng, ns);
            }
        },
        {
            key: "hasResourceBundle",
            value: function hasResourceBundle(lng, ns) {
                return this.getResource(lng, ns) !== undefined;
            }
        },
        {
            key: "getResourceBundle",
            value: function getResourceBundle(lng, ns) {
                if (!ns) ns = this.options.defaultNS;
                if (this.options.compatibilityAPI === 'v1') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, {}, this.getResource(lng, ns));
                return this.getResource(lng, ns);
            }
        },
        {
            key: "getDataByLanguage",
            value: function getDataByLanguage(lng) {
                return this.data[lng];
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                return this.data;
            }
        }
    ]);
    return ResourceStore;
}(EventEmitter);
var postProcessor = {
    processors: {},
    addPostProcessor: function addPostProcessor(module) {
        this.processors[module.name] = module;
    },
    handle: function handle(processors, value, key, options, translator) {
        var _this = this;
        processors.forEach(function(processor) {
            if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
        });
        return value;
    }
};
var checkedLoadedFor = {};
var Translator = function(_EventEmitter) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Translator, _EventEmitter);
    function Translator(services) {
        var _this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, Translator);
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Translator).call(this));
        if (isIE10) {
            EventEmitter.call((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this));
        }
        copy([
            'resourceStore',
            'languageUtils',
            'pluralResolver',
            'interpolator',
            'backendConnector',
            'i18nFormat',
            'utils'
        ], services, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this));
        _this.options = options;
        if (_this.options.keySeparator === undefined) {
            _this.options.keySeparator = '.';
        }
        _this.logger = baseLogger.create('translator');
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Translator, [
        {
            key: "changeLanguage",
            value: function changeLanguage(lng) {
                if (lng) this.language = lng;
            }
        },
        {
            key: "exists",
            value: function exists(key) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                    interpolation: {}
                };
                var resolved = this.resolve(key, options);
                return resolved && resolved.res !== undefined;
            }
        },
        {
            key: "extractFromKey",
            value: function extractFromKey(key, options) {
                var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
                if (nsSeparator === undefined) nsSeparator = ':';
                var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
                var namespaces = options.ns || this.options.defaultNS;
                if (nsSeparator && key.indexOf(nsSeparator) > -1) {
                    var m = key.match(this.interpolator.nestingRegexp);
                    if (m && m.length > 0) {
                        return {
                            key: key,
                            namespaces: namespaces
                        };
                    }
                    var parts = key.split(nsSeparator);
                    if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
                    key = parts.join(keySeparator);
                }
                if (typeof namespaces === 'string') namespaces = [
                    namespaces
                ];
                return {
                    key: key,
                    namespaces: namespaces
                };
            }
        },
        {
            key: "translate",
            value: function translate(keys, options, lastKey) {
                var _this2 = this;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
                    options = this.options.overloadTranslationOptionHandler(arguments);
                }
                if (!options) options = {};
                if (keys === undefined || keys === null) return '';
                if (!Array.isArray(keys)) keys = [
                    String(keys)
                ];
                var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
                var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options), key = _this$extractFromKey.key, namespaces = _this$extractFromKey.namespaces;
                var namespace = namespaces[namespaces.length - 1];
                var lng = options.lng || this.language;
                var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                if (lng && lng.toLowerCase() === 'cimode') {
                    if (appendNamespaceToCIMode) {
                        var nsSeparator = options.nsSeparator || this.options.nsSeparator;
                        return namespace + nsSeparator + key;
                    }
                    return key;
                }
                var resolved = this.resolve(keys, options);
                var res = resolved && resolved.res;
                var resUsedKey = resolved && resolved.usedKey || key;
                var resExactUsedKey = resolved && resolved.exactUsedKey || key;
                var resType = Object.prototype.toString.apply(res);
                var noObject = [
                    '[object Number]',
                    '[object Function]',
                    '[object RegExp]'
                ];
                var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
                var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
                var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';
                if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
                    if (!options.returnObjects && !this.options.returnObjects) {
                        this.logger.warn('accessing an object - but returnObjects options is not enabled!');
                        return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, options) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
                    }
                    if (keySeparator) {
                        var resTypeIsArray = resType === '[object Array]';
                        var copy = resTypeIsArray ? [] : {};
                        var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
                        for(var m in res){
                            if (Object.prototype.hasOwnProperty.call(res, m)) {
                                var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
                                copy[m] = this.translate(deepKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, options, {
                                    joinArrays: false,
                                    ns: namespaces
                                }));
                                if (copy[m] === deepKey) copy[m] = res[m];
                            }
                        }
                        res = copy;
                    }
                } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
                    res = res.join(joinArrays);
                    if (res) res = this.extendTranslation(res, keys, options, lastKey);
                } else {
                    var usedDefault = false;
                    var usedKey = false;
                    var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
                    var hasDefaultValue = Translator.hasDefaultValue(options);
                    var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count) : '';
                    var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;
                    if (!this.isValidLookup(res) && hasDefaultValue) {
                        usedDefault = true;
                        res = defaultValue;
                    }
                    if (!this.isValidLookup(res)) {
                        usedKey = true;
                        res = key;
                    }
                    var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
                    if (usedKey || usedDefault || updateMissing) {
                        this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
                        if (keySeparator) {
                            var fk = this.resolve(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, options, {
                                keySeparator: false
                            }));
                            if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
                        }
                        var lngs = [];
                        var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
                        if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
                            for(var i = 0; i < fallbackLngs.length; i++){
                                lngs.push(fallbackLngs[i]);
                            }
                        } else if (this.options.saveMissingTo === 'all') {
                            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
                        } else {
                            lngs.push(options.lng || this.language);
                        }
                        var send = function send(l, k, fallbackValue) {
                            if (_this2.options.missingKeyHandler) {
                                _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? fallbackValue : res, updateMissing, options);
                            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
                                _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? fallbackValue : res, updateMissing, options);
                            }
                            _this2.emit('missingKey', l, namespace, k, res);
                        };
                        if (this.options.saveMissing) {
                            if (this.options.saveMissingPlurals && needsPluralHandling) {
                                lngs.forEach(function(language) {
                                    _this2.pluralResolver.getSuffixes(language).forEach(function(suffix) {
                                        send([
                                            language
                                        ], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                                    });
                                });
                            } else {
                                send(lngs, key, defaultValue);
                            }
                        }
                    }
                    res = this.extendTranslation(res, keys, options, resolved, lastKey);
                    if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);
                    if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
                }
                return res;
            }
        },
        {
            key: "extendTranslation",
            value: function extendTranslation(res, key, options, resolved, lastKey) {
                var _this3 = this;
                if (this.i18nFormat && this.i18nFormat.parse) {
                    res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
                        resolved: resolved
                    });
                } else if (!options.skipInterpolation) {
                    if (options.interpolation) this.interpolator.init((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, options, {
                        interpolation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, this.options.interpolation, options.interpolation)
                    }));
                    var skipOnVariables = options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                    var nestBef;
                    if (skipOnVariables) {
                        var nb = res.match(this.interpolator.nestingRegexp);
                        nestBef = nb && nb.length;
                    }
                    var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
                    if (this.options.interpolation.defaultVariables) data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, this.options.interpolation.defaultVariables, data);
                    res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
                    if (skipOnVariables) {
                        var na = res.match(this.interpolator.nestingRegexp);
                        var nestAft = na && na.length;
                        if (nestBef < nestAft) options.nest = false;
                    }
                    if (options.nest !== false) res = this.interpolator.nest(res, function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        if (lastKey && lastKey[0] === args[0] && !options.context) {
                            _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
                            return null;
                        }
                        return _this3.translate.apply(_this3, args.concat([
                            key
                        ]));
                    }, options);
                    if (options.interpolation) this.interpolator.reset();
                }
                var postProcess = options.postProcess || this.options.postProcess;
                var postProcessorNames = typeof postProcess === 'string' ? [
                    postProcess
                ] : postProcess;
                if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
                    res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        i18nResolved: resolved
                    }, options) : options, this);
                }
                return res;
            }
        },
        {
            key: "resolve",
            value: function resolve(keys) {
                var _this4 = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var found;
                var usedKey;
                var exactUsedKey;
                var usedLng;
                var usedNS;
                if (typeof keys === 'string') keys = [
                    keys
                ];
                keys.forEach(function(k) {
                    if (_this4.isValidLookup(found)) return;
                    var extracted = _this4.extractFromKey(k, options);
                    var key = extracted.key;
                    usedKey = key;
                    var namespaces = extracted.namespaces;
                    if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
                    var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
                    var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';
                    var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
                    namespaces.forEach(function(ns) {
                        if (_this4.isValidLookup(found)) return;
                        usedNS = ns;
                        if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
                            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
                            _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
                        }
                        codes.forEach(function(code) {
                            if (_this4.isValidLookup(found)) return;
                            usedLng = code;
                            var finalKey = key;
                            var finalKeys = [
                                finalKey
                            ];
                            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
                                _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
                            } else {
                                var pluralSuffix;
                                if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count);
                                if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);
                                if (needsContextHandling) finalKeys.push(finalKey += "".concat(_this4.options.contextSeparator).concat(options.context));
                                if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
                            }
                            var possibleKey;
                            while(possibleKey = finalKeys.pop()){
                                if (!_this4.isValidLookup(found)) {
                                    exactUsedKey = possibleKey;
                                    found = _this4.getResource(code, ns, possibleKey, options);
                                }
                            }
                        });
                    });
                });
                return {
                    res: found,
                    usedKey: usedKey,
                    exactUsedKey: exactUsedKey,
                    usedLng: usedLng,
                    usedNS: usedNS
                };
            }
        },
        {
            key: "isValidLookup",
            value: function isValidLookup(res) {
                return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
            }
        },
        {
            key: "getResource",
            value: function getResource(code, ns, key) {
                var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
                return this.resourceStore.getResource(code, ns, key, options);
            }
        }
    ], [
        {
            key: "hasDefaultValue",
            value: function hasDefaultValue(options) {
                var prefix = 'defaultValue';
                for(var option in options){
                    if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
                        return true;
                    }
                }
                return false;
            }
        }
    ]);
    return Translator;
}(EventEmitter);
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var LanguageUtil = function() {
    function LanguageUtil(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, LanguageUtil);
        this.options = options;
        this.whitelist = this.options.supportedLngs || false;
        this.supportedLngs = this.options.supportedLngs || false;
        this.logger = baseLogger.create('languageUtils');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(LanguageUtil, [
        {
            key: "getScriptPartFromCode",
            value: function getScriptPartFromCode(code) {
                if (!code || code.indexOf('-') < 0) return null;
                var p = code.split('-');
                if (p.length === 2) return null;
                p.pop();
                if (p[p.length - 1].toLowerCase() === 'x') return null;
                return this.formatLanguageCode(p.join('-'));
            }
        },
        {
            key: "getLanguagePartFromCode",
            value: function getLanguagePartFromCode(code) {
                if (!code || code.indexOf('-') < 0) return code;
                var p = code.split('-');
                return this.formatLanguageCode(p[0]);
            }
        },
        {
            key: "formatLanguageCode",
            value: function formatLanguageCode(code) {
                if (typeof code === 'string' && code.indexOf('-') > -1) {
                    var specialCases = [
                        'hans',
                        'hant',
                        'latn',
                        'cyrl',
                        'cans',
                        'mong',
                        'arab'
                    ];
                    var p = code.split('-');
                    if (this.options.lowerCaseLng) {
                        p = p.map(function(part) {
                            return part.toLowerCase();
                        });
                    } else if (p.length === 2) {
                        p[0] = p[0].toLowerCase();
                        p[1] = p[1].toUpperCase();
                        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
                    } else if (p.length === 3) {
                        p[0] = p[0].toLowerCase();
                        if (p[1].length === 2) p[1] = p[1].toUpperCase();
                        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
                        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
                        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
                    }
                    return p.join('-');
                }
                return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
            }
        },
        {
            key: "isWhitelisted",
            value: function isWhitelisted(code) {
                this.logger.deprecate('languageUtils.isWhitelisted', 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.');
                return this.isSupportedCode(code);
            }
        },
        {
            key: "isSupportedCode",
            value: function isSupportedCode(code) {
                if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
                    code = this.getLanguagePartFromCode(code);
                }
                return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
            }
        },
        {
            key: "getBestMatchFromCodes",
            value: function getBestMatchFromCodes(codes) {
                var _this = this;
                if (!codes) return null;
                var found;
                codes.forEach(function(code) {
                    if (found) return;
                    var cleanedLng = _this.formatLanguageCode(code);
                    if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
                });
                if (!found && this.options.supportedLngs) {
                    codes.forEach(function(code) {
                        if (found) return;
                        var lngOnly = _this.getLanguagePartFromCode(code);
                        if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
                        found = _this.options.supportedLngs.find(function(supportedLng) {
                            if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
                        });
                    });
                }
                if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
                return found;
            }
        },
        {
            key: "getFallbackCodes",
            value: function getFallbackCodes(fallbacks, code) {
                if (!fallbacks) return [];
                if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
                if (typeof fallbacks === 'string') fallbacks = [
                    fallbacks
                ];
                if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
                if (!code) return fallbacks["default"] || [];
                var found = fallbacks[code];
                if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
                if (!found) found = fallbacks[this.formatLanguageCode(code)];
                if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
                if (!found) found = fallbacks["default"];
                return found || [];
            }
        },
        {
            key: "toResolveHierarchy",
            value: function toResolveHierarchy(code, fallbackCode) {
                var _this2 = this;
                var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
                var codes = [];
                var addCode = function addCode(c) {
                    if (!c) return;
                    if (_this2.isSupportedCode(c)) {
                        codes.push(c);
                    } else {
                        _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
                    }
                };
                if (typeof code === 'string' && code.indexOf('-') > -1) {
                    if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
                    if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
                    if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
                } else if (typeof code === 'string') {
                    addCode(this.formatLanguageCode(code));
                }
                fallbackCodes.forEach(function(fc) {
                    if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
                });
                return codes;
            }
        }
    ]);
    return LanguageUtil;
}();
var sets = [
    {
        lngs: [
            'ach',
            'ak',
            'am',
            'arn',
            'br',
            'fil',
            'gun',
            'ln',
            'mfe',
            'mg',
            'mi',
            'oc',
            'pt',
            'pt-BR',
            'tg',
            'tl',
            'ti',
            'tr',
            'uz',
            'wa'
        ],
        nr: [
            1,
            2
        ],
        fc: 1
    },
    {
        lngs: [
            'af',
            'an',
            'ast',
            'az',
            'bg',
            'bn',
            'ca',
            'da',
            'de',
            'dev',
            'el',
            'en',
            'eo',
            'es',
            'et',
            'eu',
            'fi',
            'fo',
            'fur',
            'fy',
            'gl',
            'gu',
            'ha',
            'hi',
            'hu',
            'hy',
            'ia',
            'it',
            'kn',
            'ku',
            'lb',
            'mai',
            'ml',
            'mn',
            'mr',
            'nah',
            'nap',
            'nb',
            'ne',
            'nl',
            'nn',
            'no',
            'nso',
            'pa',
            'pap',
            'pms',
            'ps',
            'pt-PT',
            'rm',
            'sco',
            'se',
            'si',
            'so',
            'son',
            'sq',
            'sv',
            'sw',
            'ta',
            'te',
            'tk',
            'ur',
            'yo'
        ],
        nr: [
            1,
            2
        ],
        fc: 2
    },
    {
        lngs: [
            'ay',
            'bo',
            'cgg',
            'fa',
            'ht',
            'id',
            'ja',
            'jbo',
            'ka',
            'kk',
            'km',
            'ko',
            'ky',
            'lo',
            'ms',
            'sah',
            'su',
            'th',
            'tt',
            'ug',
            'vi',
            'wo',
            'zh'
        ],
        nr: [
            1
        ],
        fc: 3
    },
    {
        lngs: [
            'be',
            'bs',
            'cnr',
            'dz',
            'hr',
            'ru',
            'sr',
            'uk'
        ],
        nr: [
            1,
            2,
            5
        ],
        fc: 4
    },
    {
        lngs: [
            'ar'
        ],
        nr: [
            0,
            1,
            2,
            3,
            11,
            100
        ],
        fc: 5
    },
    {
        lngs: [
            'cs',
            'sk'
        ],
        nr: [
            1,
            2,
            5
        ],
        fc: 6
    },
    {
        lngs: [
            'csb',
            'pl'
        ],
        nr: [
            1,
            2,
            5
        ],
        fc: 7
    },
    {
        lngs: [
            'cy'
        ],
        nr: [
            1,
            2,
            3,
            8
        ],
        fc: 8
    },
    {
        lngs: [
            'fr'
        ],
        nr: [
            1,
            2
        ],
        fc: 9
    },
    {
        lngs: [
            'ga'
        ],
        nr: [
            1,
            2,
            3,
            7,
            11
        ],
        fc: 10
    },
    {
        lngs: [
            'gd'
        ],
        nr: [
            1,
            2,
            3,
            20
        ],
        fc: 11
    },
    {
        lngs: [
            'is'
        ],
        nr: [
            1,
            2
        ],
        fc: 12
    },
    {
        lngs: [
            'jv'
        ],
        nr: [
            0,
            1
        ],
        fc: 13
    },
    {
        lngs: [
            'kw'
        ],
        nr: [
            1,
            2,
            3,
            4
        ],
        fc: 14
    },
    {
        lngs: [
            'lt'
        ],
        nr: [
            1,
            2,
            10
        ],
        fc: 15
    },
    {
        lngs: [
            'lv'
        ],
        nr: [
            1,
            2,
            0
        ],
        fc: 16
    },
    {
        lngs: [
            'mk'
        ],
        nr: [
            1,
            2
        ],
        fc: 17
    },
    {
        lngs: [
            'mnk'
        ],
        nr: [
            0,
            1,
            2
        ],
        fc: 18
    },
    {
        lngs: [
            'mt'
        ],
        nr: [
            1,
            2,
            11,
            20
        ],
        fc: 19
    },
    {
        lngs: [
            'or'
        ],
        nr: [
            2,
            1
        ],
        fc: 2
    },
    {
        lngs: [
            'ro'
        ],
        nr: [
            1,
            2,
            20
        ],
        fc: 20
    },
    {
        lngs: [
            'sl'
        ],
        nr: [
            5,
            1,
            2,
            3
        ],
        fc: 21
    },
    {
        lngs: [
            'he',
            'iw'
        ],
        nr: [
            1,
            2,
            20,
            21
        ],
        fc: 22
    }
];
var _rulesPluralsTypes = {
    1: function _(n) {
        return Number(n > 1);
    },
    2: function _(n) {
        return Number(n != 1);
    },
    3: function _(n) {
        return 0;
    },
    4: function _(n) {
        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    },
    5: function _(n) {
        return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
    },
    6: function _(n) {
        return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
    },
    7: function _(n) {
        return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    },
    8: function _(n) {
        return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
    },
    9: function _(n) {
        return Number(n >= 2);
    },
    10: function _(n) {
        return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
    },
    11: function _(n) {
        return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
    },
    12: function _(n) {
        return Number(n % 10 != 1 || n % 100 == 11);
    },
    13: function _(n) {
        return Number(n !== 0);
    },
    14: function _(n) {
        return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
    },
    15: function _(n) {
        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    },
    16: function _(n) {
        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
    },
    17: function _(n) {
        return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
    },
    18: function _(n) {
        return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
    },
    19: function _(n) {
        return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
    },
    20: function _(n) {
        return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
    },
    21: function _(n) {
        return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
    },
    22: function _(n) {
        return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
    }
};
function createRules() {
    var rules = {};
    sets.forEach(function(set) {
        set.lngs.forEach(function(l) {
            rules[l] = {
                numbers: set.nr,
                plurals: _rulesPluralsTypes[set.fc]
            };
        });
    });
    return rules;
}
var PluralResolver = function() {
    function PluralResolver(languageUtils) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, PluralResolver);
        this.languageUtils = languageUtils;
        this.options = options;
        this.logger = baseLogger.create('pluralResolver');
        this.rules = createRules();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(PluralResolver, [
        {
            key: "addRule",
            value: function addRule(lng, obj) {
                this.rules[lng] = obj;
            }
        },
        {
            key: "getRule",
            value: function getRule(code) {
                return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
            }
        },
        {
            key: "needsPlural",
            value: function needsPlural(code) {
                var rule = this.getRule(code);
                return rule && rule.numbers.length > 1;
            }
        },
        {
            key: "getPluralFormsOfKey",
            value: function getPluralFormsOfKey(code, key) {
                return this.getSuffixes(code).map(function(suffix) {
                    return key + suffix;
                });
            }
        },
        {
            key: "getSuffixes",
            value: function getSuffixes(code) {
                var _this = this;
                var rule = this.getRule(code);
                if (!rule) {
                    return [];
                }
                return rule.numbers.map(function(number) {
                    return _this.getSuffix(code, number);
                });
            }
        },
        {
            key: "getSuffix",
            value: function getSuffix(code, count) {
                var _this2 = this;
                var rule = this.getRule(code);
                if (rule) {
                    var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
                    var suffix = rule.numbers[idx];
                    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
                        if (suffix === 2) {
                            suffix = 'plural';
                        } else if (suffix === 1) {
                            suffix = '';
                        }
                    }
                    var returnSuffix = function returnSuffix() {
                        return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
                    };
                    if (this.options.compatibilityJSON === 'v1') {
                        if (suffix === 1) return '';
                        if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
                        return returnSuffix();
                    } else if (this.options.compatibilityJSON === 'v2') {
                        return returnSuffix();
                    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
                        return returnSuffix();
                    }
                    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
                }
                this.logger.warn("no plural rule found for: ".concat(code));
                return '';
            }
        }
    ]);
    return PluralResolver;
}();
var Interpolator = function() {
    function Interpolator() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, Interpolator);
        this.logger = baseLogger.create('interpolator');
        this.options = options;
        this.format = options.interpolation && options.interpolation.format || function(value) {
            return value;
        };
        this.init(options);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Interpolator, [
        {
            key: "init",
            value: function init() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (!options.interpolation) options.interpolation = {
                    escapeValue: true
                };
                var iOpts = options.interpolation;
                this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
                this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
                this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
                this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
                this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
                this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
                this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
                this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
                this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
                this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
                this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
                this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
                this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
                this.resetRegExp();
            }
        },
        {
            key: "reset",
            value: function reset() {
                if (this.options) this.init(this.options);
            }
        },
        {
            key: "resetRegExp",
            value: function resetRegExp() {
                var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                this.regexp = new RegExp(regexpStr, 'g');
                var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
                var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
            }
        },
        {
            key: "interpolate",
            value: function interpolate(str, data, lng, options) {
                var _this = this;
                var match;
                var value;
                var replaces;
                var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
                function regexSafe(val) {
                    return val.replace(/\$/g, '$$$$');
                }
                var handleFormat = function handleFormat(key) {
                    if (key.indexOf(_this.formatSeparator) < 0) {
                        var path = getPathWithDefaults(data, defaultData, key);
                        return _this.alwaysFormat ? _this.format(path, undefined, lng) : path;
                    }
                    var p = key.split(_this.formatSeparator);
                    var k = p.shift().trim();
                    var f = p.join(_this.formatSeparator).trim();
                    return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, options);
                };
                this.resetRegExp();
                var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
                var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                var todos = [
                    {
                        regex: this.regexpUnescape,
                        safeValue: function safeValue(val) {
                            return regexSafe(val);
                        }
                    },
                    {
                        regex: this.regexp,
                        safeValue: function safeValue(val) {
                            return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
                        }
                    }
                ];
                todos.forEach(function(todo) {
                    replaces = 0;
                    while(match = todo.regex.exec(str)){
                        value = handleFormat(match[1].trim());
                        if (value === undefined) {
                            if (typeof missingInterpolationHandler === 'function') {
                                var temp = missingInterpolationHandler(str, match, options);
                                value = typeof temp === 'string' ? temp : '';
                            } else if (skipOnVariables) {
                                value = match[0];
                                continue;
                            } else {
                                _this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));
                                value = '';
                            }
                        } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
                            value = makeString(value);
                        }
                        str = str.replace(match[0], todo.safeValue(value));
                        todo.regex.lastIndex = 0;
                        replaces++;
                        if (replaces >= _this.maxReplaces) {
                            break;
                        }
                    }
                });
                return str;
            }
        },
        {
            key: "nest",
            value: function nest(str, fc) {
                var _this2 = this;
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                var match;
                var value;
                var clonedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, options);
                clonedOptions.applyPostProcessor = false;
                delete clonedOptions.defaultValue;
                function handleHasOptions(key, inheritedOptions) {
                    var sep = this.nestingOptionsSeparator;
                    if (key.indexOf(sep) < 0) return key;
                    var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
                    var optionsString = "{".concat(c[1]);
                    key = c[0];
                    optionsString = this.interpolate(optionsString, clonedOptions);
                    optionsString = optionsString.replace(/'/g, '"');
                    try {
                        clonedOptions = JSON.parse(optionsString);
                        if (inheritedOptions) clonedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, inheritedOptions, clonedOptions);
                    } catch (e) {
                        this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
                        return "".concat(key).concat(sep).concat(optionsString);
                    }
                    delete clonedOptions.defaultValue;
                    return key;
                }
                while(match = this.nestingRegexp.exec(str)){
                    var formatters = [];
                    var doReduce = false;
                    if (match[0].includes(this.formatSeparator) && !/{.*}/.test(match[1])) {
                        var r = match[1].split(this.formatSeparator).map(function(elem) {
                            return elem.trim();
                        });
                        match[1] = r.shift();
                        formatters = r;
                        doReduce = true;
                    }
                    value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
                    if (value && match[0] === str && typeof value !== 'string') return value;
                    if (typeof value !== 'string') value = makeString(value);
                    if (!value) {
                        this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
                        value = '';
                    }
                    if (doReduce) {
                        value = formatters.reduce(function(v, f) {
                            return _this2.format(v, f, options.lng, options);
                        }, value.trim());
                    }
                    str = str.replace(match[0], value);
                    this.regexp.lastIndex = 0;
                }
                return str;
            }
        }
    ]);
    return Interpolator;
}();
function remove(arr, what) {
    var found = arr.indexOf(what);
    while(found !== -1){
        arr.splice(found, 1);
        found = arr.indexOf(what);
    }
}
var Connector = function(_EventEmitter) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Connector, _EventEmitter);
    function Connector(backend, store, services) {
        var _this;
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, Connector);
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Connector).call(this));
        if (isIE10) {
            EventEmitter.call((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this));
        }
        _this.backend = backend;
        _this.store = store;
        _this.services = services;
        _this.languageUtils = services.languageUtils;
        _this.options = options;
        _this.logger = baseLogger.create('backendConnector');
        _this.state = {};
        _this.queue = [];
        if (_this.backend && _this.backend.init) {
            _this.backend.init(services, options.backend, options);
        }
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Connector, [
        {
            key: "queueLoad",
            value: function queueLoad(languages, namespaces, options, callback) {
                var _this2 = this;
                var toLoad = [];
                var pending = [];
                var toLoadLanguages = [];
                var toLoadNamespaces = [];
                languages.forEach(function(lng) {
                    var hasAllNamespaces = true;
                    namespaces.forEach(function(ns) {
                        var name = "".concat(lng, "|").concat(ns);
                        if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
                            _this2.state[name] = 2;
                        } else if (_this2.state[name] < 0) ;
                        else if (_this2.state[name] === 1) {
                            if (pending.indexOf(name) < 0) pending.push(name);
                        } else {
                            _this2.state[name] = 1;
                            hasAllNamespaces = false;
                            if (pending.indexOf(name) < 0) pending.push(name);
                            if (toLoad.indexOf(name) < 0) toLoad.push(name);
                            if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
                        }
                    });
                    if (!hasAllNamespaces) toLoadLanguages.push(lng);
                });
                if (toLoad.length || pending.length) {
                    this.queue.push({
                        pending: pending,
                        loaded: {},
                        errors: [],
                        callback: callback
                    });
                }
                return {
                    toLoad: toLoad,
                    pending: pending,
                    toLoadLanguages: toLoadLanguages,
                    toLoadNamespaces: toLoadNamespaces
                };
            }
        },
        {
            key: "loaded",
            value: function loaded(name, err, data) {
                var s = name.split('|');
                var lng = s[0];
                var ns = s[1];
                if (err) this.emit('failedLoading', lng, ns, err);
                if (data) {
                    this.store.addResourceBundle(lng, ns, data);
                }
                this.state[name] = err ? -1 : 2;
                var loaded = {};
                this.queue.forEach(function(q) {
                    pushPath(q.loaded, [
                        lng
                    ], ns);
                    remove(q.pending, name);
                    if (err) q.errors.push(err);
                    if (q.pending.length === 0 && !q.done) {
                        Object.keys(q.loaded).forEach(function(l) {
                            if (!loaded[l]) loaded[l] = [];
                            if (q.loaded[l].length) {
                                q.loaded[l].forEach(function(ns) {
                                    if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
                                });
                            }
                        });
                        q.done = true;
                        if (q.errors.length) {
                            q.callback(q.errors);
                        } else {
                            q.callback();
                        }
                    }
                });
                this.emit('loaded', loaded);
                this.queue = this.queue.filter(function(q) {
                    return !q.done;
                });
            }
        },
        {
            key: "read",
            value: function read(lng, ns, fcName) {
                var _this3 = this;
                var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 350;
                var callback = arguments.length > 5 ? arguments[5] : undefined;
                if (!lng.length) return callback(null, {});
                return this.backend[fcName](lng, ns, function(err, data) {
                    if (err && data && tried < 5) {
                        setTimeout(function() {
                            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
                        }, wait);
                        return;
                    }
                    callback(err, data);
                });
            }
        },
        {
            key: "prepareLoading",
            value: function prepareLoading(languages, namespaces) {
                var _this4 = this;
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                var callback = arguments.length > 3 ? arguments[3] : undefined;
                if (!this.backend) {
                    this.logger.warn('No backend was added via i18next.use. Will not load resources.');
                    return callback && callback();
                }
                if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
                if (typeof namespaces === 'string') namespaces = [
                    namespaces
                ];
                var toLoad = this.queueLoad(languages, namespaces, options, callback);
                if (!toLoad.toLoad.length) {
                    if (!toLoad.pending.length) callback();
                    return null;
                }
                toLoad.toLoad.forEach(function(name) {
                    _this4.loadOne(name);
                });
            }
        },
        {
            key: "load",
            value: function load(languages, namespaces, callback) {
                this.prepareLoading(languages, namespaces, {}, callback);
            }
        },
        {
            key: "reload",
            value: function reload(languages, namespaces, callback) {
                this.prepareLoading(languages, namespaces, {
                    reload: true
                }, callback);
            }
        },
        {
            key: "loadOne",
            value: function loadOne(name) {
                var _this5 = this;
                var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
                var s = name.split('|');
                var lng = s[0];
                var ns = s[1];
                this.read(lng, ns, 'read', undefined, undefined, function(err, data) {
                    if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
                    if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
                    _this5.loaded(name, err, data);
                });
            }
        },
        {
            key: "saveMissing",
            value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
                var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
                if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
                    this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
                    return;
                }
                if (key === undefined || key === null || key === '') return;
                if (this.backend && this.backend.create) {
                    this.backend.create(languages, namespace, key, fallbackValue, null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, options, {
                        isUpdate: isUpdate
                    }));
                }
                if (!languages || !languages[0]) return;
                this.store.addResource(languages[0], namespace, key, fallbackValue);
            }
        }
    ]);
    return Connector;
}(EventEmitter);
function get() {
    return {
        debug: false,
        initImmediate: true,
        ns: [
            'translation'
        ],
        defaultNS: [
            'translation'
        ],
        fallbackLng: [
            'dev'
        ],
        fallbackNS: false,
        whitelist: false,
        nonExplicitWhitelist: false,
        supportedLngs: false,
        nonExplicitSupportedLngs: false,
        load: 'all',
        preload: false,
        simplifyPluralSuffix: true,
        keySeparator: '.',
        nsSeparator: ':',
        pluralSeparator: '_',
        contextSeparator: '_',
        partialBundledLanguages: false,
        saveMissing: false,
        updateMissing: false,
        saveMissingTo: 'fallback',
        saveMissingPlurals: true,
        missingKeyHandler: false,
        missingInterpolationHandler: false,
        postProcess: false,
        postProcessPassResolved: false,
        returnNull: true,
        returnEmptyString: true,
        returnObjects: false,
        joinArrays: false,
        returnedObjectHandler: false,
        parseMissingKeyHandler: false,
        appendNamespaceToMissingKey: false,
        appendNamespaceToCIMode: false,
        overloadTranslationOptionHandler: function handle(args) {
            var ret = {};
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(args[1]) === 'object') ret = args[1];
            if (typeof args[1] === 'string') ret.defaultValue = args[1];
            if (typeof args[2] === 'string') ret.tDescription = args[2];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(args[2]) === 'object' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(args[3]) === 'object') {
                var options = args[3] || args[2];
                Object.keys(options).forEach(function(key) {
                    ret[key] = options[key];
                });
            }
            return ret;
        },
        interpolation: {
            escapeValue: true,
            format: function format(value, _format, lng, options) {
                return value;
            },
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1000,
            skipOnVariables: false
        }
    };
}
function transformOptions(options) {
    if (typeof options.ns === 'string') options.ns = [
        options.ns
    ];
    if (typeof options.fallbackLng === 'string') options.fallbackLng = [
        options.fallbackLng
    ];
    if (typeof options.fallbackNS === 'string') options.fallbackNS = [
        options.fallbackNS
    ];
    if (options.whitelist) {
        if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
            options.whitelist = options.whitelist.concat([
                'cimode'
            ]);
        }
        options.supportedLngs = options.whitelist;
    }
    if (options.nonExplicitWhitelist) {
        options.nonExplicitSupportedLngs = options.nonExplicitWhitelist;
    }
    if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
        options.supportedLngs = options.supportedLngs.concat([
            'cimode'
        ]);
    }
    return options;
}
function noop() {}
var I18n = function(_EventEmitter) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(I18n, _EventEmitter);
    function I18n() {
        var _this;
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var callback = arguments.length > 1 ? arguments[1] : undefined;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, I18n);
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(I18n).call(this));
        if (isIE10) {
            EventEmitter.call((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this));
        }
        _this.options = transformOptions(options);
        _this.services = {};
        _this.logger = baseLogger;
        _this.modules = {
            external: []
        };
        if (callback && !_this.isInitialized && !options.isClone) {
            if (!_this.options.initImmediate) {
                _this.init(options, callback);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this));
            }
            setTimeout(function() {
                _this.init(options, callback);
            }, 0);
        }
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(I18n, [
        {
            key: "init",
            value: function init() {
                var _this2 = this;
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var callback = arguments.length > 1 ? arguments[1] : undefined;
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                if (options.whitelist && !options.supportedLngs) {
                    this.logger.deprecate('whitelist', 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.');
                }
                if (options.nonExplicitWhitelist && !options.nonExplicitSupportedLngs) {
                    this.logger.deprecate('whitelist', 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.');
                }
                this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, get(), this.options, transformOptions(options));
                this.format = this.options.interpolation.format;
                if (!callback) callback = noop;
                function createClassOnDemand(ClassOrObject) {
                    if (!ClassOrObject) return null;
                    if (typeof ClassOrObject === 'function') return new ClassOrObject();
                    return ClassOrObject;
                }
                if (!this.options.isClone) {
                    if (this.modules.logger) {
                        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
                    } else {
                        baseLogger.init(null, this.options);
                    }
                    var lu = new LanguageUtil(this.options);
                    this.store = new ResourceStore(this.options.resources, this.options);
                    var s = this.services;
                    s.logger = baseLogger;
                    s.resourceStore = this.store;
                    s.languageUtils = lu;
                    s.pluralResolver = new PluralResolver(lu, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    });
                    s.interpolator = new Interpolator(this.options);
                    s.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                    };
                    s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
                    s.backendConnector.on('*', function(event) {
                        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                            args[_key - 1] = arguments[_key];
                        }
                        _this2.emit.apply(_this2, [
                            event
                        ].concat(args));
                    });
                    if (this.modules.languageDetector) {
                        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
                        s.languageDetector.init(s, this.options.detection, this.options);
                    }
                    if (this.modules.i18nFormat) {
                        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
                        if (s.i18nFormat.init) s.i18nFormat.init(this);
                    }
                    this.translator = new Translator(this.services, this.options);
                    this.translator.on('*', function(event) {
                        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                            args[_key2 - 1] = arguments[_key2];
                        }
                        _this2.emit.apply(_this2, [
                            event
                        ].concat(args));
                    });
                    this.modules.external.forEach(function(m) {
                        if (m.init) m.init(_this2);
                    });
                }
                if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                    var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                    if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
                }
                if (!this.services.languageDetector && !this.options.lng) {
                    this.logger.warn('init: no languageDetector is used and no lng is defined');
                }
                var storeApi = [
                    'getResource',
                    'hasResourceBundle',
                    'getResourceBundle',
                    'getDataByLanguage'
                ];
                storeApi.forEach(function(fcName) {
                    _this2[fcName] = function() {
                        var _this2$store;
                        return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
                    };
                });
                var storeApiChained = [
                    'addResource',
                    'addResources',
                    'addResourceBundle',
                    'removeResourceBundle'
                ];
                storeApiChained.forEach(function(fcName) {
                    _this2[fcName] = function() {
                        var _this2$store2;
                        (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
                        return _this2;
                    };
                });
                var deferred = defer();
                var load = function load() {
                    var finish = function finish(err, t) {
                        if (_this2.isInitialized) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
                        _this2.isInitialized = true;
                        if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);
                        _this2.emit('initialized', _this2.options);
                        deferred.resolve(t);
                        callback(err, t);
                    };
                    if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));
                    _this2.changeLanguage(_this2.options.lng, finish);
                };
                if (this.options.resources || !this.options.initImmediate) {
                    load();
                } else {
                    setTimeout(load, 0);
                }
                return deferred;
            }
        },
        {
            key: "loadResources",
            value: function loadResources(language) {
                var _this3 = this;
                var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
                var usedCallback = callback;
                var usedLng = typeof language === 'string' ? language : this.language;
                if (typeof language === 'function') usedCallback = language;
                if (!this.options.resources || this.options.partialBundledLanguages) {
                    if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
                    var toLoad = [];
                    var append = function append(lng) {
                        if (!lng) return;
                        var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
                        lngs.forEach(function(l) {
                            if (toLoad.indexOf(l) < 0) toLoad.push(l);
                        });
                    };
                    if (!usedLng) {
                        var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        fallbacks.forEach(function(l) {
                            return append(l);
                        });
                    } else {
                        append(usedLng);
                    }
                    if (this.options.preload) {
                        this.options.preload.forEach(function(l) {
                            return append(l);
                        });
                    }
                    this.services.backendConnector.load(toLoad, this.options.ns, usedCallback);
                } else {
                    usedCallback(null);
                }
            }
        },
        {
            key: "reloadResources",
            value: function reloadResources(lngs, ns, callback) {
                var deferred = defer();
                if (!lngs) lngs = this.languages;
                if (!ns) ns = this.options.ns;
                if (!callback) callback = noop;
                this.services.backendConnector.reload(lngs, ns, function(err) {
                    deferred.resolve();
                    callback(err);
                });
                return deferred;
            }
        },
        {
            key: "use",
            value: function use(module) {
                if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
                if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
                if (module.type === 'backend') {
                    this.modules.backend = module;
                }
                if (module.type === 'logger' || module.log && module.warn && module.error) {
                    this.modules.logger = module;
                }
                if (module.type === 'languageDetector') {
                    this.modules.languageDetector = module;
                }
                if (module.type === 'i18nFormat') {
                    this.modules.i18nFormat = module;
                }
                if (module.type === 'postProcessor') {
                    postProcessor.addPostProcessor(module);
                }
                if (module.type === '3rdParty') {
                    this.modules.external.push(module);
                }
                return this;
            }
        },
        {
            key: "changeLanguage",
            value: function changeLanguage(lng, callback) {
                var _this4 = this;
                this.isLanguageChangingTo = lng;
                var deferred = defer();
                this.emit('languageChanging', lng);
                var done = function done(err, l) {
                    if (l) {
                        _this4.language = l;
                        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
                        _this4.translator.changeLanguage(l);
                        _this4.isLanguageChangingTo = undefined;
                        _this4.emit('languageChanged', l);
                        _this4.logger.log('languageChanged', l);
                    } else {
                        _this4.isLanguageChangingTo = undefined;
                    }
                    deferred.resolve(function() {
                        return _this4.t.apply(_this4, arguments);
                    });
                    if (callback) callback(err, function() {
                        return _this4.t.apply(_this4, arguments);
                    });
                };
                var setLng = function setLng(lngs) {
                    var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
                    if (l) {
                        if (!_this4.language) {
                            _this4.language = l;
                            _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
                        }
                        if (!_this4.translator.language) _this4.translator.changeLanguage(l);
                        if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
                    }
                    _this4.loadResources(l, function(err) {
                        done(err, l);
                    });
                };
                if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
                    setLng(this.services.languageDetector.detect());
                } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
                    this.services.languageDetector.detect(setLng);
                } else {
                    setLng(lng);
                }
                return deferred;
            }
        },
        {
            key: "getFixedT",
            value: function getFixedT(lng, ns) {
                var _this5 = this;
                var fixedT = function fixedT(key, opts) {
                    var options;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(opts) !== 'object') {
                        for(var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++){
                            rest[_key3 - 2] = arguments[_key3];
                        }
                        options = _this5.options.overloadTranslationOptionHandler([
                            key,
                            opts
                        ].concat(rest));
                    } else {
                        options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, opts);
                    }
                    options.lng = options.lng || fixedT.lng;
                    options.lngs = options.lngs || fixedT.lngs;
                    options.ns = options.ns || fixedT.ns;
                    return _this5.t(key, options);
                };
                if (typeof lng === 'string') {
                    fixedT.lng = lng;
                } else {
                    fixedT.lngs = lng;
                }
                fixedT.ns = ns;
                return fixedT;
            }
        },
        {
            key: "t",
            value: function t() {
                var _this$translator;
                return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
            }
        },
        {
            key: "exists",
            value: function exists() {
                var _this$translator2;
                return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
            }
        },
        {
            key: "setDefaultNamespace",
            value: function setDefaultNamespace(ns) {
                this.options.defaultNS = ns;
            }
        },
        {
            key: "hasLoadedNamespace",
            value: function hasLoadedNamespace(ns) {
                var _this6 = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (!this.isInitialized) {
                    this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
                    return false;
                }
                if (!this.languages || !this.languages.length) {
                    this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
                    return false;
                }
                var lng = this.languages[0];
                var fallbackLng = this.options ? this.options.fallbackLng : false;
                var lastLng = this.languages[this.languages.length - 1];
                if (lng.toLowerCase() === 'cimode') return true;
                var loadNotPending = function loadNotPending(l, n) {
                    var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];
                    return loadState === -1 || loadState === 2;
                };
                if (options.precheck) {
                    var preResult = options.precheck(this, loadNotPending);
                    if (preResult !== undefined) return preResult;
                }
                if (this.hasResourceBundle(lng, ns)) return true;
                if (!this.services.backendConnector.backend) return true;
                if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
                return false;
            }
        },
        {
            key: "loadNamespaces",
            value: function loadNamespaces(ns, callback) {
                var _this7 = this;
                var deferred = defer();
                if (!this.options.ns) {
                    callback && callback();
                    return Promise.resolve();
                }
                if (typeof ns === 'string') ns = [
                    ns
                ];
                ns.forEach(function(n) {
                    if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
                });
                this.loadResources(function(err) {
                    deferred.resolve();
                    if (callback) callback(err);
                });
                return deferred;
            }
        },
        {
            key: "loadLanguages",
            value: function loadLanguages(lngs, callback) {
                var deferred = defer();
                if (typeof lngs === 'string') lngs = [
                    lngs
                ];
                var preloaded = this.options.preload || [];
                var newLngs = lngs.filter(function(lng) {
                    return preloaded.indexOf(lng) < 0;
                });
                if (!newLngs.length) {
                    if (callback) callback();
                    return Promise.resolve();
                }
                this.options.preload = preloaded.concat(newLngs);
                this.loadResources(function(err) {
                    deferred.resolve();
                    if (callback) callback(err);
                });
                return deferred;
            }
        },
        {
            key: "dir",
            value: function dir(lng) {
                if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
                if (!lng) return 'rtl';
                var rtlLngs = [
                    'ar',
                    'shu',
                    'sqr',
                    'ssh',
                    'xaa',
                    'yhd',
                    'yud',
                    'aao',
                    'abh',
                    'abv',
                    'acm',
                    'acq',
                    'acw',
                    'acx',
                    'acy',
                    'adf',
                    'ads',
                    'aeb',
                    'aec',
                    'afb',
                    'ajp',
                    'apc',
                    'apd',
                    'arb',
                    'arq',
                    'ars',
                    'ary',
                    'arz',
                    'auz',
                    'avl',
                    'ayh',
                    'ayl',
                    'ayn',
                    'ayp',
                    'bbz',
                    'pga',
                    'he',
                    'iw',
                    'ps',
                    'pbt',
                    'pbu',
                    'pst',
                    'prp',
                    'prd',
                    'ug',
                    'ur',
                    'ydd',
                    'yds',
                    'yih',
                    'ji',
                    'yi',
                    'hbo',
                    'men',
                    'xmn',
                    'fa',
                    'jpr',
                    'peo',
                    'pes',
                    'prs',
                    'dv',
                    'sam'
                ];
                return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
            }
        },
        {
            key: "createInstance",
            value: function createInstance() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var callback = arguments.length > 1 ? arguments[1] : undefined;
                return new I18n(options, callback);
            }
        },
        {
            key: "cloneInstance",
            value: function cloneInstance() {
                var _this8 = this;
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
                var mergedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, this.options, options, {
                    isClone: true
                });
                var clone = new I18n(mergedOptions);
                var membersToCopy = [
                    'store',
                    'services',
                    'language'
                ];
                membersToCopy.forEach(function(m) {
                    clone[m] = _this8[m];
                });
                clone.services = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, this.services);
                clone.services.utils = {
                    hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
                };
                clone.translator = new Translator(clone.services, clone.options);
                clone.translator.on('*', function(event) {
                    for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++){
                        args[_key4 - 1] = arguments[_key4];
                    }
                    clone.emit.apply(clone, [
                        event
                    ].concat(args));
                });
                clone.init(mergedOptions, callback);
                clone.translator.options = clone.options;
                clone.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
                };
                return clone;
            }
        }
    ]);
    return I18n;
}(EventEmitter);
var i18next = new I18n();
const __TURBOPACK__default__export__ = i18next;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/i18next@19.9.2/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript) <export default as i18next>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i18next",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$i18next$40$19$2e$9$2e$2$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$i18next$40$19$2e$9$2e$2$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/i18next@19.9.2/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/properties/Any/regex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/Cc/regex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /[\0-\x1F\x7F-\x9F]/;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/Cf/regex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/P/regex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/S/regex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/Z/regex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$properties$2f$Any$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/properties/Any/regex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$Cc$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/Cc/regex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$Cf$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/Cf/regex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$P$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/P/regex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$S$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/S/regex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$Z$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/Z/regex.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/properties/Any/regex.mjs [app-client] (ecmascript) <export default as Any>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Any",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$properties$2f$Any$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$properties$2f$Any$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/properties/Any/regex.mjs [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/Cc/regex.mjs [app-client] (ecmascript) <export default as Cc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$Cc$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$Cc$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/Cc/regex.mjs [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/Z/regex.mjs [app-client] (ecmascript) <export default as Z>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$Z$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$Z$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/Z/regex.mjs [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/P/regex.mjs [app-client] (ecmascript) <export default as P>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "P",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$P$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$P$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/P/regex.mjs [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/linkify-it@5.0.2/node_modules/linkify-it/lib/re.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$properties$2f$Any$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Any$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/properties/Any/regex.mjs [app-client] (ecmascript) <export default as Any>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$Cc$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cc$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/Cc/regex.mjs [app-client] (ecmascript) <export default as Cc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$Z$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Z$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/Z/regex.mjs [app-client] (ecmascript) <export default as Z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$P$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__P$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/uc.micro@2.1.0/node_modules/uc.micro/categories/P/regex.mjs [app-client] (ecmascript) <export default as P>");
;
function __TURBOPACK__default__export__(opts) {
    const re = {};
    opts = opts || {};
    re.src_Any = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$properties$2f$Any$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Any$3e$__["Any"].source;
    re.src_Cc = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$Cc$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cc$3e$__["Cc"].source;
    re.src_Z = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$Z$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Z$3e$__["Z"].source;
    re.src_P = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$uc$2e$micro$40$2$2e$1$2e$0$2f$node_modules$2f$uc$2e$micro$2f$categories$2f$P$2f$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__P$3e$__["P"].source;
    // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
    re.src_ZPCc = [
        re.src_Z,
        re.src_P,
        re.src_Cc
    ].join('|');
    // \p{\Z\Cc} (white spaces + control)
    re.src_ZCc = [
        re.src_Z,
        re.src_Cc
    ].join('|');
    // Experimental. List of chars, completely prohibited in links
    // because can separate it from other part of text
    const text_separators = '[><\uff5c]';
    // All possible word characters (everything without punctuation, spaces & controls)
    // Defined via punctuation & spaces to save space
    // Should be something like \p{\L\N\S\M} (\w but without `_`)
    re.src_pseudo_letter = `(?:(?!${text_separators}|${re.src_ZPCc})${re.src_Any})`;
    // The same as abothe but without [0-9]
    // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';
    re.src_ip4 = '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';
    // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
    // Length is capped to exclude possible rescans till the end and avoid O(n^2)
    // DoS. No standard limit, just take something reasonable.
    re.src_auth = `(?:(?:(?!${re.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`;
    re.src_port = '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';
    re.src_host_terminator = `(?=$|${text_separators}|${re.src_ZPCc})` + `(?!${opts['---'] ? '-(?!--)|' : '-|'}_|:\\d|\\.-|\\.(?!$|${re.src_ZPCc}))`;
    re.src_path = '(?:' + '[/?#]' + '(?:' + `(?!${re.src_ZCc}|${text_separators}|[()[\\]{}.,"'?!\\-;]).|` + `\\[(?:(?!${re.src_ZCc}|\\]).)*\\]|` + `\\((?:(?!${re.src_ZCc}|[)]).)*\\)|` + `\\{(?:(?!${re.src_ZCc}|[}]).)*\\}|` + `\\"(?:(?!${re.src_ZCc}|["]).)+\\"|` + `\\'(?:(?!${re.src_ZCc}|[']).)+\\'|` + // allow `I'm_king` if no pair found
    `\\'(?=${re.src_pseudo_letter}|[-])|` + // google has many dots in "google search" links (#66, #81).
    // github has ... in commit range links,
    // Restrict to
    // - english
    // - percent-encoded
    // - parts of file path
    // - params separator
    // until more examples found.
    '\\.{2,}[a-zA-Z0-9%/&]|' + `\\.(?!${re.src_ZCc}|[.]|$)|` + (opts['---'] ? '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
     : '\\-+|') + // allow `,,,` in paths
    `,(?!${re.src_ZCc}|$)|` + // allow `;` if not followed by space-like char
    `;(?!${re.src_ZCc}|$)|` + // allow `!!!` in paths, but not at the end
    `\\!+(?!${re.src_ZCc}|[!]|$)|` + `\\?(?!${re.src_ZCc}|[?]|$)` + ')+' + '|\\/' + ')?';
    // Allow anything in markdown spec, forbid quote (") at the first position
    // because emails enclosed in quotes are far more common
    // Max name length capped to 64 chars (RFC 5321). This also prevents O(n^2)
    // rescans to the end on inputs like `mailto:mailto:...`
    re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}';
    re.src_xn = 'xn--[a-z0-9\\-]{1,59}';
    // More to read about domain names
    // http://serverfault.com/questions/638260/
    re.src_domain_root = // Allow letters & digits (http://test1)
    '(?:' + re.src_xn + '|' + `${re.src_pseudo_letter}{1,63}` + ')';
    re.src_domain = '(?:' + re.src_xn + '|' + `(?:${re.src_pseudo_letter})` + '|' + `(?:${re.src_pseudo_letter}(?:-|${re.src_pseudo_letter}){0,61}${re.src_pseudo_letter})` + ')';
    re.src_host = '(?:' + // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
    `(?:(?:(?:${re.src_domain})\\.)*${re.src_domain})` + ')';
    re.tpl_host_fuzzy = '(?:' + re.src_ip4 + '|' + `(?:(?:(?:${re.src_domain})\\.)+(?:%TLDS%))` + ')';
    re.tpl_host_no_ip_fuzzy = `(?:(?:(?:${re.src_domain})\\.)+(?:%TLDS%))`;
    re.src_host_strict = re.src_host + re.src_host_terminator;
    re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
    re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
    re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
    re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
    //
    // Main rules
    //
    // Rude test fuzzy links by host, for quick deny
    re.tpl_host_fuzzy_test = `localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${re.src_ZPCc}|>|$))`;
    re.tpl_email_fuzzy = `(^|${text_separators}|"|\\(|${re.src_ZCc})` + `(${re.src_email_name}@${re.tpl_host_fuzzy_strict})`;
    re.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    `(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${re.src_ZPCc}))` + `((?![$+<=>^\`|\uff5c])${re.tpl_host_port_fuzzy_strict}${re.src_path})`;
    re.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    `(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${re.src_ZPCc}))` + `((?![$+<=>^\`|\uff5c])${re.tpl_host_port_no_ip_fuzzy_strict}${re.src_path})`;
    return re;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/linkify-it@5.0.2/node_modules/linkify-it/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$linkify$2d$it$40$5$2e$0$2e$2$2f$node_modules$2f$linkify$2d$it$2f$lib$2f$re$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/linkify-it@5.0.2/node_modules/linkify-it/lib/re.mjs [app-client] (ecmascript)");
;
//
// Helpers
//
// Merge objects
//
function assign(obj /* from1, from2, from3, ... */ ) {
    const sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach(function(source) {
        if (!source) {
            return;
        }
        Object.keys(source).forEach(function(key) {
            obj[key] = source[key];
        });
    });
    return obj;
}
function _class(obj) {
    return Object.prototype.toString.call(obj);
}
function isString(obj) {
    return _class(obj) === '[object String]';
}
function isObject(obj) {
    return _class(obj) === '[object Object]';
}
function isRegExp(obj) {
    return _class(obj) === '[object RegExp]';
}
function isFunction(obj) {
    return _class(obj) === '[object Function]';
}
function escapeRE(str) {
    return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}
//
const defaultOptions = {
    fuzzyLink: true,
    fuzzyEmail: true,
    fuzzyIP: false
};
function isOptionsObj(obj) {
    return Object.keys(obj || {}).reduce(function(acc, k) {
        /* eslint-disable-next-line no-prototype-builtins */ return acc || defaultOptions.hasOwnProperty(k);
    }, false);
}
const defaultSchemas = {
    'http:': {
        validate: function(text, pos, self) {
            const tail = text.slice(pos);
            if (!self.re.http) {
                // compile lazily, because "host"-containing variables can change on tlds update.
                self.re.http = new RegExp(`^\\/\\/${self.re.src_auth}${self.re.src_host_port_strict}${self.re.src_path}`, 'i');
            }
            if (self.re.http.test(tail)) {
                return tail.match(self.re.http)[0].length;
            }
            return 0;
        }
    },
    'https:': 'http:',
    'ftp:': 'http:',
    '//': {
        validate: function(text, pos, self) {
            const tail = text.slice(pos);
            if (!self.re.no_http) {
                // compile lazily, because "host"-containing variables can change on tlds update.
                self.re.no_http = new RegExp('^' + self.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
                // with code comments
                `(?:localhost|(?:(?:${self.re.src_domain})\\.)+${self.re.src_domain_root})` + self.re.src_port + self.re.src_host_terminator + self.re.src_path, 'i');
            }
            if (self.re.no_http.test(tail)) {
                // should not be `://` & `///`, that protects from errors in protocol name
                if (pos >= 3 && text[pos - 3] === ':') {
                    return 0;
                }
                if (pos >= 3 && text[pos - 3] === '/') {
                    return 0;
                }
                return tail.match(self.re.no_http)[0].length;
            }
            return 0;
        }
    },
    'mailto:': {
        validate: function(text, pos, self) {
            const tail = text.slice(pos);
            if (!self.re.mailto) {
                self.re.mailto = new RegExp(`^${self.re.src_email_name}@${self.re.src_host_strict}`, 'i');
            }
            if (self.re.mailto.test(tail)) {
                return tail.match(self.re.mailto)[0].length;
            }
            return 0;
        }
    }
};
// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
const tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';
// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
const tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');
function createValidator(re) {
    return function(text, pos) {
        const tail = text.slice(pos);
        if (re.test(tail)) {
            return tail.match(re)[0].length;
        }
        return 0;
    };
}
function createNormalizer() {
    return function(match, self) {
        self.normalize(match);
    };
}
// Schemas compiler. Build regexps.
//
function compile(self) {
    // Load & clone RE patterns.
    const re = self.re = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$linkify$2d$it$40$5$2e$0$2e$2$2f$node_modules$2f$linkify$2d$it$2f$lib$2f$re$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(self.__opts__);
    // Define dynamic patterns
    const tlds = self.__tlds__.slice();
    self.onCompile();
    if (!self.__tlds_replaced__) {
        tlds.push(tlds_2ch_src_re);
    }
    tlds.push(re.src_xn);
    re.src_tlds = tlds.join('|');
    function untpl(tpl) {
        return tpl.replace('%TLDS%', re.src_tlds);
    }
    re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), 'i');
    re.email_fuzzy_global = RegExp(untpl(re.tpl_email_fuzzy), 'ig');
    re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), 'i');
    re.link_fuzzy_global = RegExp(untpl(re.tpl_link_fuzzy), 'ig');
    re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
    re.link_no_ip_fuzzy_global = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'ig');
    re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');
    //
    // Compile each schema
    //
    const aliases = [];
    self.__compiled__ = {}; // Reset compiled data
    function schemaError(name, val) {
        throw new Error(`(LinkifyIt) Invalid schema "${name}": ${val}`);
    }
    Object.keys(self.__schemas__).forEach(function(name) {
        const val = self.__schemas__[name];
        // skip disabled methods
        if (val === null) {
            return;
        }
        const compiled = {
            validate: null,
            link: null
        };
        self.__compiled__[name] = compiled;
        if (isObject(val)) {
            if (isRegExp(val.validate)) {
                compiled.validate = createValidator(val.validate);
            } else if (isFunction(val.validate)) {
                compiled.validate = val.validate;
            } else {
                schemaError(name, val);
            }
            if (isFunction(val.normalize)) {
                compiled.normalize = val.normalize;
            } else if (!val.normalize) {
                compiled.normalize = createNormalizer();
            } else {
                schemaError(name, val);
            }
            return;
        }
        if (isString(val)) {
            aliases.push(name);
            return;
        }
        schemaError(name, val);
    });
    //
    // Compile postponed aliases
    //
    aliases.forEach(function(alias) {
        if (!self.__compiled__[self.__schemas__[alias]]) {
            // Silently fail on missed schemas to avoid errons on disable.
            // schemaError(alias, self.__schemas__[alias]);
            return;
        }
        self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
        self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
    });
    //
    // Fake record for guessed links
    //
    self.__compiled__[''] = {
        validate: null,
        normalize: createNormalizer()
    };
    //
    // Build schema condition
    //
    const slist = Object.keys(self.__compiled__).filter(function(name) {
        // Filter disabled & fake schemas
        return name.length > 0 && self.__compiled__[name];
    }).map(escapeRE).join('|');
    // (?!_) cause 1.5x slowdown
    self.re.schema_test = RegExp(`(^|(?!_)(?:[><\uff5c]|${re.src_ZPCc}))(${slist})`, 'i');
    self.re.schema_search = RegExp(`(^|(?!_)(?:[><\uff5c]|${re.src_ZPCc}))(${slist})`, 'ig');
    self.re.schema_at_start = RegExp(`^${self.re.schema_search.source}`, 'i');
    self.re.pretest = RegExp(`(${self.re.schema_test.source})|(${self.re.host_fuzzy_test.source})|@`, 'i');
}
/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/ function Match(text, schema, index, lastIndex) {
    const raw = text.slice(index, lastIndex);
    /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/ this.schema = schema.toLowerCase();
    /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/ this.index = index;
    /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/ this.lastIndex = lastIndex;
    /**
   * Match#raw -> String
   *
   * Matched string.
   **/ this.raw = raw;
    /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/ this.text = raw;
    /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/ this.url = raw;
}
/**
 * class LinkifyIt
 **/ /**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/ function LinkifyIt(schemas, options) {
    if (!(this instanceof LinkifyIt)) {
        return new LinkifyIt(schemas, options);
    }
    if (!options) {
        if (isOptionsObj(schemas)) {
            options = schemas;
            schemas = {};
        }
    }
    this.__opts__ = assign({}, defaultOptions, options);
    this.__schemas__ = assign({}, defaultSchemas, schemas);
    this.__compiled__ = {};
    this.__tlds__ = tlds_default;
    this.__tlds_replaced__ = false;
    this.re = {};
    compile(this);
}
/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/ LinkifyIt.prototype.add = function add(schema, definition) {
    this.__schemas__[schema] = definition;
    compile(this);
    return this;
};
/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/ LinkifyIt.prototype.set = function set(options) {
    this.__opts__ = assign(this.__opts__, options);
    return this;
};
/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/ LinkifyIt.prototype.test = function test(text) {
    if (!text.length) {
        return false;
    }
    let m, re;
    // try to scan for link with schema - that's the most simple rule
    if (this.re.schema_test.test(text)) {
        re = this.re.schema_search;
        re.lastIndex = 0;
        while((m = re.exec(text)) !== null){
            if (this.testSchemaAt(text, m[2], re.lastIndex)) {
                return true;
            }
        }
    }
    if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
        // guess schemaless links
        if (text.search(this.re.host_fuzzy_test) >= 0) {
            if (text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy) !== null) {
                return true;
            }
        }
    }
    if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
        // guess schemaless emails
        if (text.indexOf('@') >= 0) {
            // We can't skip this check, because this cases are possible:
            // 192.168.1.1@gmail.com, my.in@example.com
            if (text.match(this.re.email_fuzzy) !== null) {
                return true;
            }
        }
    }
    return false;
};
/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/ LinkifyIt.prototype.pretest = function pretest(text) {
    return this.re.pretest.test(text);
};
/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/ LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
    // If not supported schema check requested - terminate
    if (!this.__compiled__[schema.toLowerCase()]) {
        return 0;
    }
    return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};
/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/ LinkifyIt.prototype.match = function match(text) {
    const result = [];
    const type_schemed = [];
    const type_fuzzy_link = [];
    const type_fuzzy_email = [];
    let m, len, re;
    function choose(a, b) {
        if (!a) {
            return b;
        }
        if (!b) {
            return a;
        }
        if (a.index !== b.index) {
            return a.index < b.index ? a : b;
        }
        return a.lastIndex >= b.lastIndex ? a : b;
    }
    if (!text.length) {
        return null;
    }
    // scan for links with schema
    if (this.re.schema_test.test(text)) {
        re = this.re.schema_search;
        re.lastIndex = 0;
        while((m = re.exec(text)) !== null){
            len = this.testSchemaAt(text, m[2], re.lastIndex);
            if (len) {
                type_schemed.push({
                    schema: m[2],
                    index: m.index + m[1].length,
                    lastIndex: m.index + m[0].length + len
                });
            }
        }
    }
    if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
        re = this.__opts__.fuzzyIP ? this.re.link_fuzzy_global : this.re.link_no_ip_fuzzy_global;
        re.lastIndex = 0;
        while((m = re.exec(text)) !== null){
            type_fuzzy_link.push({
                schema: '',
                index: m.index + m[1].length,
                lastIndex: m.index + m[0].length
            });
        }
    }
    if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
        re = this.re.email_fuzzy_global;
        re.lastIndex = 0;
        while((m = re.exec(text)) !== null){
            type_fuzzy_email.push({
                schema: 'mailto:',
                index: m.index + m[1].length,
                lastIndex: m.index + m[0].length
            });
        }
    }
    const indexes = [
        0,
        0,
        0
    ];
    let lastIndex = 0;
    for(;;){
        const candidates = [
            type_schemed[indexes[0]],
            type_fuzzy_email[indexes[1]],
            type_fuzzy_link[indexes[2]]
        ];
        const candidate = choose(choose(candidates[0], candidates[1]), candidates[2]);
        if (!candidate) {
            break;
        }
        if (candidate === candidates[0]) {
            indexes[0]++;
        } else if (candidate === candidates[1]) {
            indexes[1]++;
        } else {
            indexes[2]++;
        }
        if (candidate.index < lastIndex) {
            continue;
        }
        const match = new Match(text, candidate.schema, candidate.index, candidate.lastIndex);
        this.__compiled__[match.schema].normalize(match, this);
        result.push(match);
        lastIndex = candidate.lastIndex;
    }
    if (result.length) {
        return result;
    }
    return null;
};
/**
 * LinkifyIt#matchAtStart(text) -> Match|null
 *
 * Returns fully-formed (not fuzzy) link if it starts at the beginning
 * of the string, and null otherwise.
 **/ LinkifyIt.prototype.matchAtStart = function matchAtStart(text) {
    if (!text.length) return null;
    const m = this.re.schema_at_start.exec(text);
    if (!m) return null;
    const len = this.testSchemaAt(text, m[2], m[0].length);
    if (!len) return null;
    const match = new Match(text, m[2], m.index + m[1].length, m.index + m[0].length + len);
    this.__compiled__[match.schema].normalize(match, this);
    return match;
};
/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/ LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
    list = Array.isArray(list) ? list : [
        list
    ];
    if (!keepOld) {
        this.__tlds__ = list.slice();
        this.__tlds_replaced__ = true;
        compile(this);
        return this;
    }
    this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
        return el !== arr[idx - 1];
    }).reverse();
    compile(this);
    return this;
};
/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/ LinkifyIt.prototype.normalize = function normalize(match) {
    // Do minimal possible changes by default. Need to collect feedback prior
    // to move forward https://github.com/markdown-it/linkify-it/issues/1
    if (!match.schema) {
        match.url = `http://${match.url}`;
    }
    if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
        match.url = `mailto:${match.url}`;
    }
};
/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/ LinkifyIt.prototype.onCompile = function onCompile() {};
const __TURBOPACK__default__export__ = LinkifyIt;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/load-script@2.0.0/node_modules/load-script/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function load(src, opts, cb) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }
    opts = opts || {};
    cb = cb || function() {};
    script.type = opts.type || 'text/javascript';
    script.charset = opts.charset || 'utf8';
    script.async = 'async' in opts ? !!opts.async : true;
    script.src = src;
    if (opts.attrs) {
        setAttributes(script, opts.attrs);
    }
    if (opts.text) {
        script.text = '' + opts.text;
    }
    var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
    onend(script, cb);
    // some good legacy browsers (firefox) fail the 'in' detection above
    // so as a fallback we always set onload
    // old IE will ignore this and new IE will set onload
    if (!script.onload) {
        stdOnEnd(script, cb);
    }
    head.appendChild(script);
};
function setAttributes(script, attrs) {
    for(var attr in attrs){
        script.setAttribute(attr, attrs[attr]);
    }
}
function stdOnEnd(script, cb) {
    script.onload = function() {
        this.onerror = this.onload = null;
        cb(null, script);
    };
    script.onerror = function() {
        // this.onload = null here is necessary
        // because even IE9 works not like others
        this.onerror = this.onload = null;
        cb(new Error('Failed to load ' + this.src), script);
    };
}
function ieOnEnd(script, cb) {
    script.onreadystatechange = function() {
        if (this.readyState != 'complete' && this.readyState != 'loaded') return;
        this.onreadystatechange = null;
        cb(null, script); // there is no way to catch loading errors in IE8
    };
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+image-kit@1.125.0/node_modules/@wix/image-kit/dist/esm/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+image-kit@1.125.0/node_modules/@wix/image-kit/dist/esm/api/max/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MEDIA_ROOT_URL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$api$2f$max$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MEDIA_ROOT_URL"],
    "STATIC_MEDIA_URL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$api$2f$max$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STATIC_MEDIA_URL"],
    "alignTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$imageServiceConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alignTypes"],
    "fileType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$imageServiceConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileType"],
    "fittingTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$imageServiceConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fittingTypes"],
    "getData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$api$2f$max$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getData"],
    "getFileExtension",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$imageServiceUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFileExtension"],
    "getPlaceholder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$api$2f$max$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlaceholder"],
    "getResponsiveImageProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$responsiveImageUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveImageProps"],
    "htmlTag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$imageServiceConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTag"],
    "isWEBP",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$imageServiceUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWEBP"],
    "populateGlobalFeatureSupport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$populateFeatureSupport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["populateGlobalFeatureSupport"],
    "sdk",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$api$2f$max$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sdk"],
    "upscaleMethods",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$imageServiceConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upscaleMethods"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$api$2f$max$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+image-kit@1.125.0/node_modules/@wix/image-kit/dist/esm/api/max/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$imageServiceConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+image-kit@1.125.0/node_modules/@wix/image-kit/dist/esm/helpers/imageServiceConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$imageServiceUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+image-kit@1.125.0/node_modules/@wix/image-kit/dist/esm/helpers/imageServiceUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$populateFeatureSupport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+image-kit@1.125.0/node_modules/@wix/image-kit/dist/esm/helpers/populateFeatureSupport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$api$2f$max$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+image-kit@1.125.0/node_modules/@wix/image-kit/dist/esm/api/max/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$helpers$2f$responsiveImageUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+image-kit@1.125.0/node_modules/@wix/image-kit/dist/esm/helpers/responsiveImageUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$125$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+image-kit@1.125.0/node_modules/@wix/image-kit/dist/esm/types.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fastdom@1.0.12/node_modules/fastdom/fastdom.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(win) {
    /**
 * FastDom
 *
 * Eliminates layout thrashing
 * by batching DOM read/write
 * interactions.
 *
 * @author Wilson Page <wilsonpage@me.com>
 * @author Kornel Lesinski <kornel.lesinski@ft.com>
 */ 'use strict';
    /**
 * Mini logger
 *
 * @return {Function}
 */ var debug = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function() {};
    /**
 * Normalized rAF
 *
 * @type {Function}
 */ var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function(cb) {
        return setTimeout(cb, 16);
    };
    /**
 * Initialize a `FastDom`.
 *
 * @constructor
 */ function FastDom() {
        var self = this;
        self.reads = [];
        self.writes = [];
        self.raf = raf.bind(win); // test hook
        debug('initialized', self);
    }
    FastDom.prototype = {
        constructor: FastDom,
        /**
   * We run this inside a try catch
   * so that if any jobs error, we
   * are able to recover and continue
   * to flush the batch until it's empty.
   *
   * @param {Array} tasks
   */ runTasks: function(tasks) {
            debug('run tasks');
            var task;
            while(task = tasks.shift())task();
        },
        /**
   * Adds a job to the read batch and
   * schedules a new frame if need be.
   *
   * @param  {Function} fn
   * @param  {Object} ctx the context to be bound to `fn` (optional).
   * @public
   */ measure: function(fn, ctx) {
            debug('measure');
            var task = !ctx ? fn : fn.bind(ctx);
            this.reads.push(task);
            scheduleFlush(this);
            return task;
        },
        /**
   * Adds a job to the
   * write batch and schedules
   * a new frame if need be.
   *
   * @param  {Function} fn
   * @param  {Object} ctx the context to be bound to `fn` (optional).
   * @public
   */ mutate: function(fn, ctx) {
            debug('mutate');
            var task = !ctx ? fn : fn.bind(ctx);
            this.writes.push(task);
            scheduleFlush(this);
            return task;
        },
        /**
   * Clears a scheduled 'read' or 'write' task.
   *
   * @param {Object} task
   * @return {Boolean} success
   * @public
   */ clear: function(task) {
            debug('clear', task);
            return remove(this.reads, task) || remove(this.writes, task);
        },
        /**
   * Extend this FastDom with some
   * custom functionality.
   *
   * Because fastdom must *always* be a
   * singleton, we're actually extending
   * the fastdom instance. This means tasks
   * scheduled by an extension still enter
   * fastdom's global task queue.
   *
   * The 'super' instance can be accessed
   * from `this.fastdom`.
   *
   * @example
   *
   * var myFastdom = fastdom.extend({
   *   initialize: function() {
   *     // runs on creation
   *   },
   *
   *   // override a method
   *   measure: function(fn) {
   *     // do extra stuff ...
   *
   *     // then call the original
   *     return this.fastdom.measure(fn);
   *   },
   *
   *   ...
   * });
   *
   * @param  {Object} props  properties to mixin
   * @return {FastDom}
   */ extend: function(props) {
            debug('extend', props);
            if (typeof props != 'object') throw new Error('expected object');
            var child = Object.create(this);
            mixin(child, props);
            child.fastdom = this;
            // run optional creation hook
            if (child.initialize) child.initialize();
            return child;
        },
        // override this with a function
        // to prevent Errors in console
        // when tasks throw
        catch: null
    };
    /**
 * Schedules a new read/write
 * batch if one isn't pending.
 *
 * @private
 */ function scheduleFlush(fastdom) {
        if (!fastdom.scheduled) {
            fastdom.scheduled = true;
            fastdom.raf(flush.bind(null, fastdom));
            debug('flush scheduled');
        }
    }
    /**
 * Runs queued `read` and `write` tasks.
 *
 * Errors are caught and thrown by default.
 * If a `.catch` function has been defined
 * it is called instead.
 *
 * @private
 */ function flush(fastdom) {
        debug('flush');
        var writes = fastdom.writes;
        var reads = fastdom.reads;
        var error;
        try {
            debug('flushing reads', reads.length);
            fastdom.runTasks(reads);
            debug('flushing writes', writes.length);
            fastdom.runTasks(writes);
        } catch (e) {
            error = e;
        }
        fastdom.scheduled = false;
        // If the batch errored we may still have tasks queued
        if (reads.length || writes.length) scheduleFlush(fastdom);
        if (error) {
            debug('task errored', error.message);
            if (fastdom.catch) fastdom.catch(error);
            else throw error;
        }
    }
    /**
 * Remove an item from an Array.
 *
 * @param  {Array} array
 * @param  {*} item
 * @return {Boolean}
 */ function remove(array, item) {
        var index = array.indexOf(item);
        return !!~index && !!array.splice(index, 1);
    }
    /**
 * Mixin own properties of source
 * object into the target.
 *
 * @param  {Object} target
 * @param  {Object} source
 */ function mixin(target, source) {
        for(var key in source){
            if (source.hasOwnProperty(key)) target[key] = source[key];
        }
    }
    // There should never be more than
    // one instance of `FastDom` in an app
    var exports = win.fastdom = win.fastdom || new FastDom(); // jshint ignore:line
    // Expose to CJS & AMD
    if (typeof define == 'function') ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
        return exports;
    }(__turbopack_context__.r, exports, module));
    else if ("TURBOPACK compile-time truthy", 1) module.exports = exports;
}(typeof window !== 'undefined' ? window : typeof /*TURBOPACK member replacement*/ __turbopack_context__.e != 'undefined' ? /*TURBOPACK member replacement*/ __turbopack_context__.e : globalThis);
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/svgson@5.3.1/node_modules/svgson/dist/svgson.umd.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(global, factory) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = factory() : "TURBOPACK unreachable";
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    'use strict';
    /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */ // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    var isBuffer_1 = function(obj) {
        return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
    };
    function isBuffer(obj) {
        return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
    }
    // For Node v0.10 support. Remove this eventually.
    function isSlowBuffer(obj) {
        return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
    }
    var toString = Object.prototype.toString;
    /**
   * Get the native `typeof` a value.
   *
   * @param  {*} `val`
   * @return {*} Native javascript type
   */ var kindOf = function kindOf(val) {
        // primitivies
        if (typeof val === 'undefined') {
            return 'undefined';
        }
        if (val === null) {
            return 'null';
        }
        if (val === true || val === false || val instanceof Boolean) {
            return 'boolean';
        }
        if (typeof val === 'string' || val instanceof String) {
            return 'string';
        }
        if (typeof val === 'number' || val instanceof Number) {
            return 'number';
        }
        // functions
        if (typeof val === 'function' || val instanceof Function) {
            return 'function';
        }
        // array
        if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
            return 'array';
        }
        // check for instances of RegExp and Date before calling `toString`
        if (val instanceof RegExp) {
            return 'regexp';
        }
        if (val instanceof Date) {
            return 'date';
        }
        // other objects
        var type = toString.call(val);
        if (type === '[object RegExp]') {
            return 'regexp';
        }
        if (type === '[object Date]') {
            return 'date';
        }
        if (type === '[object Arguments]') {
            return 'arguments';
        }
        if (type === '[object Error]') {
            return 'error';
        }
        // buffer
        if (isBuffer_1(val)) {
            return 'buffer';
        }
        // es6: Map, WeakMap, Set, WeakSet
        if (type === '[object Set]') {
            return 'set';
        }
        if (type === '[object WeakSet]') {
            return 'weakset';
        }
        if (type === '[object Map]') {
            return 'map';
        }
        if (type === '[object WeakMap]') {
            return 'weakmap';
        }
        if (type === '[object Symbol]') {
            return 'symbol';
        }
        // typed arrays
        if (type === '[object Int8Array]') {
            return 'int8array';
        }
        if (type === '[object Uint8Array]') {
            return 'uint8array';
        }
        if (type === '[object Uint8ClampedArray]') {
            return 'uint8clampedarray';
        }
        if (type === '[object Int16Array]') {
            return 'int16array';
        }
        if (type === '[object Uint16Array]') {
            return 'uint16array';
        }
        if (type === '[object Int32Array]') {
            return 'int32array';
        }
        if (type === '[object Uint32Array]') {
            return 'uint32array';
        }
        if (type === '[object Float32Array]') {
            return 'float32array';
        }
        if (type === '[object Float64Array]') {
            return 'float64array';
        }
        // must be a plain object
        return 'object';
    };
    function createCommonjsModule(fn, module1) {
        return module1 = {
            exports: {}
        }, fn(module1, module1.exports), module1.exports;
    }
    var renameKeys = createCommonjsModule(function(module1) {
        (function() {
            function rename(obj, fn) {
                if (typeof fn !== 'function') {
                    return obj;
                }
                var res = {};
                for(var key in obj){
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        res[fn(key, obj[key]) || key] = obj[key];
                    }
                }
                return res;
            }
            if (module1.exports) {
                module1.exports = rename;
            } else {
                {
                    window.rename = rename;
                }
            }
        })();
    });
    /**
   * Expose `renameDeep`
   */ var deepRenameKeys = function renameDeep(obj, cb) {
        var type = kindOf(obj);
        if (type !== 'object' && type !== 'array') {
            throw new Error('expected an object');
        }
        var res = [];
        if (type === 'object') {
            obj = renameKeys(obj, cb);
            res = {};
        }
        for(var key in obj){
            if (obj.hasOwnProperty(key)) {
                var val = obj[key];
                if (kindOf(val) === 'object' || kindOf(val) === 'array') {
                    res[key] = renameDeep(val, cb);
                } else {
                    res[key] = val;
                }
            }
        }
        return res;
    };
    var eventemitter3 = createCommonjsModule(function(module1) {
        var has = Object.prototype.hasOwnProperty, prefix = '~';
        /**
   * Constructor to create a storage for our `EE` objects.
   * An `Events` instance is a plain object whose properties are event names.
   *
   * @constructor
   * @api private
   */ function Events() {}
        //
        // We try to not inherit from `Object.prototype`. In some engines creating an
        // instance in this way is faster than calling `Object.create(null)` directly.
        // If `Object.create(null)` is not supported we prefix the event names with a
        // character to make sure that the built-in object properties are not
        // overridden or used as an attack vector.
        //
        if (Object.create) {
            Events.prototype = Object.create(null);
            //
            // This hack is needed because the `__proto__` property is still inherited in
            // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
            //
            if (!new Events().__proto__) prefix = false;
        }
        /**
   * Representation of a single event listener.
   *
   * @param {Function} fn The listener function.
   * @param {Mixed} context The context to invoke the listener with.
   * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
   * @constructor
   * @api private
   */ function EE(fn, context, once) {
            this.fn = fn;
            this.context = context;
            this.once = once || false;
        }
        /**
   * Minimal `EventEmitter` interface that is molded against the Node.js
   * `EventEmitter` interface.
   *
   * @constructor
   * @api public
   */ function EventEmitter() {
            this._events = new Events();
            this._eventsCount = 0;
        }
        /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @api public
   */ EventEmitter.prototype.eventNames = function eventNames() {
            var names = [], events, name;
            if (this._eventsCount === 0) return names;
            for(name in events = this._events){
                if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
            }
            if (Object.getOwnPropertySymbols) {
                return names.concat(Object.getOwnPropertySymbols(events));
            }
            return names;
        };
        /**
   * Return the listeners registered for a given event.
   *
   * @param {String|Symbol} event The event name.
   * @param {Boolean} exists Only check if there are listeners.
   * @returns {Array|Boolean}
   * @api public
   */ EventEmitter.prototype.listeners = function listeners(event, exists) {
            var evt = prefix ? prefix + event : event, available = this._events[evt];
            if (exists) return !!available;
            if (!available) return [];
            if (available.fn) return [
                available.fn
            ];
            for(var i = 0, l = available.length, ee = new Array(l); i < l; i++){
                ee[i] = available[i].fn;
            }
            return ee;
        };
        /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {String|Symbol} event The event name.
   * @returns {Boolean} `true` if the event had listeners, else `false`.
   * @api public
   */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
            var evt = prefix ? prefix + event : event;
            if (!this._events[evt]) return false;
            var listeners = this._events[evt], len = arguments.length, args, i;
            if (listeners.fn) {
                if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
                switch(len){
                    case 1:
                        return listeners.fn.call(listeners.context), true;
                    case 2:
                        return listeners.fn.call(listeners.context, a1), true;
                    case 3:
                        return listeners.fn.call(listeners.context, a1, a2), true;
                    case 4:
                        return listeners.fn.call(listeners.context, a1, a2, a3), true;
                    case 5:
                        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
                    case 6:
                        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
                }
                for(i = 1, args = new Array(len - 1); i < len; i++){
                    args[i - 1] = arguments[i];
                }
                listeners.fn.apply(listeners.context, args);
            } else {
                var length = listeners.length, j;
                for(i = 0; i < length; i++){
                    if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
                    switch(len){
                        case 1:
                            listeners[i].fn.call(listeners[i].context);
                            break;
                        case 2:
                            listeners[i].fn.call(listeners[i].context, a1);
                            break;
                        case 3:
                            listeners[i].fn.call(listeners[i].context, a1, a2);
                            break;
                        case 4:
                            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                            break;
                        default:
                            if (!args) for(j = 1, args = new Array(len - 1); j < len; j++){
                                args[j - 1] = arguments[j];
                            }
                            listeners[i].fn.apply(listeners[i].context, args);
                    }
                }
            }
            return true;
        };
        /**
   * Add a listener for a given event.
   *
   * @param {String|Symbol} event The event name.
   * @param {Function} fn The listener function.
   * @param {Mixed} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @api public
   */ EventEmitter.prototype.on = function on(event, fn, context) {
            var listener = new EE(fn, context || this), evt = prefix ? prefix + event : event;
            if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
            else if (!this._events[evt].fn) this._events[evt].push(listener);
            else this._events[evt] = [
                this._events[evt],
                listener
            ];
            return this;
        };
        /**
   * Add a one-time listener for a given event.
   *
   * @param {String|Symbol} event The event name.
   * @param {Function} fn The listener function.
   * @param {Mixed} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @api public
   */ EventEmitter.prototype.once = function once(event, fn, context) {
            var listener = new EE(fn, context || this, true), evt = prefix ? prefix + event : event;
            if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
            else if (!this._events[evt].fn) this._events[evt].push(listener);
            else this._events[evt] = [
                this._events[evt],
                listener
            ];
            return this;
        };
        /**
   * Remove the listeners of a given event.
   *
   * @param {String|Symbol} event The event name.
   * @param {Function} fn Only remove the listeners that match this function.
   * @param {Mixed} context Only remove the listeners that have this context.
   * @param {Boolean} once Only remove one-time listeners.
   * @returns {EventEmitter} `this`.
   * @api public
   */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
            var evt = prefix ? prefix + event : event;
            if (!this._events[evt]) return this;
            if (!fn) {
                if (--this._eventsCount === 0) this._events = new Events();
                else delete this._events[evt];
                return this;
            }
            var listeners = this._events[evt];
            if (listeners.fn) {
                if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
                    if (--this._eventsCount === 0) this._events = new Events();
                    else delete this._events[evt];
                }
            } else {
                for(var i = 0, events = [], length = listeners.length; i < length; i++){
                    if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                        events.push(listeners[i]);
                    }
                }
                //
                // Reset the array, or remove it completely if we have no more listeners.
                //
                if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
                else if (--this._eventsCount === 0) this._events = new Events();
                else delete this._events[evt];
            }
            return this;
        };
        /**
   * Remove all listeners, or those of the specified event.
   *
   * @param {String|Symbol} [event] The event name.
   * @returns {EventEmitter} `this`.
   * @api public
   */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
            var evt;
            if (event) {
                evt = prefix ? prefix + event : event;
                if (this._events[evt]) {
                    if (--this._eventsCount === 0) this._events = new Events();
                    else delete this._events[evt];
                }
            } else {
                this._events = new Events();
                this._eventsCount = 0;
            }
            return this;
        };
        //
        // Alias methods names because people roll like that.
        //
        EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        //
        // This function doesn't apply anymore.
        //
        EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
            return this;
        };
        //
        // Expose the prefix.
        //
        EventEmitter.prefixed = prefix;
        //
        // Allow `EventEmitter` to be imported as module namespace.
        //
        EventEmitter.EventEmitter = EventEmitter;
        //
        // Expose the module.
        //
        {
            module1.exports = EventEmitter;
        }
    });
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    var noop = function noop() {};
    var State = {
        data: 'state-data',
        cdata: 'state-cdata',
        tagBegin: 'state-tag-begin',
        tagName: 'state-tag-name',
        tagEnd: 'state-tag-end',
        attributeNameStart: 'state-attribute-name-start',
        attributeName: 'state-attribute-name',
        attributeNameEnd: 'state-attribute-name-end',
        attributeValueBegin: 'state-attribute-value-begin',
        attributeValue: 'state-attribute-value'
    };
    var Action = {
        lt: 'action-lt',
        gt: 'action-gt',
        space: 'action-space',
        equal: 'action-equal',
        quote: 'action-quote',
        slash: 'action-slash',
        char: 'action-char',
        error: 'action-error'
    };
    var Type$1 = {
        text: 'text',
        openTag: 'open-tag',
        closeTag: 'close-tag',
        attributeName: 'attribute-name',
        attributeValue: 'attribute-value'
    };
    var charToAction = {
        ' ': Action.space,
        '\t': Action.space,
        '\n': Action.space,
        '\r': Action.space,
        '<': Action.lt,
        '>': Action.gt,
        '"': Action.quote,
        "'": Action.quote,
        '=': Action.equal,
        '/': Action.slash
    };
    var getAction = function getAction(char) {
        return charToAction[char] || Action.char;
    };
    /**
   * @param  {Object} options
   * @param  {Boolean} options.debug
   * @return {Object}
   */ var create$1 = function create(options) {
        var _State$data, _State$tagBegin, _State$tagName, _State$tagEnd, _State$attributeNameS, _State$attributeName, _State$attributeNameE, _State$attributeValue, _State$attributeValue2, _lexer$stateMachine;
        options = Object.assign({
            debug: false
        }, options);
        var lexer = new eventemitter3();
        var state = State.data;
        var data = '';
        var tagName = '';
        var attrName = '';
        var attrValue = '';
        var isClosing = '';
        var openingQuote = '';
        var emit = function emit(type, value) {
            // for now, ignore tags like: '?xml', '!DOCTYPE' or comments
            if (tagName[0] === '?' || tagName[0] === '!') {
                return;
            }
            var event = {
                type: type,
                value: value
            };
            if (options.debug) {
                console.log('emit:', event);
            }
            lexer.emit('data', event);
        };
        lexer.stateMachine = (_lexer$stateMachine = {}, _defineProperty(_lexer$stateMachine, State.data, (_State$data = {}, _defineProperty(_State$data, Action.lt, function() {
            if (data.trim()) {
                emit(Type$1.text, data);
            }
            tagName = '';
            isClosing = false;
            state = State.tagBegin;
        }), _defineProperty(_State$data, Action.char, function(char) {
            data += char;
        }), _State$data)), _defineProperty(_lexer$stateMachine, State.cdata, _defineProperty({}, Action.char, function(char) {
            data += char;
            if (data.substr(-3) === ']]>') {
                emit(Type$1.text, data.slice(0, -3));
                data = '';
                state = State.data;
            }
        })), _defineProperty(_lexer$stateMachine, State.tagBegin, (_State$tagBegin = {}, _defineProperty(_State$tagBegin, Action.space, noop), _defineProperty(_State$tagBegin, Action.char, function(char) {
            tagName = char;
            state = State.tagName;
        }), _defineProperty(_State$tagBegin, Action.slash, function() {
            tagName = '';
            isClosing = true;
        }), _State$tagBegin)), _defineProperty(_lexer$stateMachine, State.tagName, (_State$tagName = {}, _defineProperty(_State$tagName, Action.space, function() {
            if (isClosing) {
                state = State.tagEnd;
            } else {
                state = State.attributeNameStart;
                emit(Type$1.openTag, tagName);
            }
        }), _defineProperty(_State$tagName, Action.gt, function() {
            if (isClosing) {
                emit(Type$1.closeTag, tagName);
            } else {
                emit(Type$1.openTag, tagName);
            }
            data = '';
            state = State.data;
        }), _defineProperty(_State$tagName, Action.slash, function() {
            state = State.tagEnd;
            emit(Type$1.openTag, tagName);
        }), _defineProperty(_State$tagName, Action.char, function(char) {
            tagName += char;
            if (tagName === '![CDATA[') {
                state = State.cdata;
                data = '';
                tagName = '';
            }
        }), _State$tagName)), _defineProperty(_lexer$stateMachine, State.tagEnd, (_State$tagEnd = {}, _defineProperty(_State$tagEnd, Action.gt, function() {
            emit(Type$1.closeTag, tagName);
            data = '';
            state = State.data;
        }), _defineProperty(_State$tagEnd, Action.char, noop), _State$tagEnd)), _defineProperty(_lexer$stateMachine, State.attributeNameStart, (_State$attributeNameS = {}, _defineProperty(_State$attributeNameS, Action.char, function(char) {
            attrName = char;
            state = State.attributeName;
        }), _defineProperty(_State$attributeNameS, Action.gt, function() {
            data = '';
            state = State.data;
        }), _defineProperty(_State$attributeNameS, Action.space, noop), _defineProperty(_State$attributeNameS, Action.slash, function() {
            isClosing = true;
            state = State.tagEnd;
        }), _State$attributeNameS)), _defineProperty(_lexer$stateMachine, State.attributeName, (_State$attributeName = {}, _defineProperty(_State$attributeName, Action.space, function() {
            state = State.attributeNameEnd;
        }), _defineProperty(_State$attributeName, Action.equal, function() {
            emit(Type$1.attributeName, attrName);
            state = State.attributeValueBegin;
        }), _defineProperty(_State$attributeName, Action.gt, function() {
            attrValue = '';
            emit(Type$1.attributeName, attrName);
            emit(Type$1.attributeValue, attrValue);
            data = '';
            state = State.data;
        }), _defineProperty(_State$attributeName, Action.slash, function() {
            isClosing = true;
            attrValue = '';
            emit(Type$1.attributeName, attrName);
            emit(Type$1.attributeValue, attrValue);
            state = State.tagEnd;
        }), _defineProperty(_State$attributeName, Action.char, function(char) {
            attrName += char;
        }), _State$attributeName)), _defineProperty(_lexer$stateMachine, State.attributeNameEnd, (_State$attributeNameE = {}, _defineProperty(_State$attributeNameE, Action.space, noop), _defineProperty(_State$attributeNameE, Action.equal, function() {
            emit(Type$1.attributeName, attrName);
            state = State.attributeValueBegin;
        }), _defineProperty(_State$attributeNameE, Action.gt, function() {
            attrValue = '';
            emit(Type$1.attributeName, attrName);
            emit(Type$1.attributeValue, attrValue);
            data = '';
            state = State.data;
        }), _defineProperty(_State$attributeNameE, Action.char, function(char) {
            attrValue = '';
            emit(Type$1.attributeName, attrName);
            emit(Type$1.attributeValue, attrValue);
            attrName = char;
            state = State.attributeName;
        }), _State$attributeNameE)), _defineProperty(_lexer$stateMachine, State.attributeValueBegin, (_State$attributeValue = {}, _defineProperty(_State$attributeValue, Action.space, noop), _defineProperty(_State$attributeValue, Action.quote, function(char) {
            openingQuote = char;
            attrValue = '';
            state = State.attributeValue;
        }), _defineProperty(_State$attributeValue, Action.gt, function() {
            attrValue = '';
            emit(Type$1.attributeValue, attrValue);
            data = '';
            state = State.data;
        }), _defineProperty(_State$attributeValue, Action.char, function(char) {
            openingQuote = '';
            attrValue = char;
            state = State.attributeValue;
        }), _State$attributeValue)), _defineProperty(_lexer$stateMachine, State.attributeValue, (_State$attributeValue2 = {}, _defineProperty(_State$attributeValue2, Action.space, function(char) {
            if (openingQuote) {
                attrValue += char;
            } else {
                emit(Type$1.attributeValue, attrValue);
                state = State.attributeNameStart;
            }
        }), _defineProperty(_State$attributeValue2, Action.quote, function(char) {
            if (openingQuote === char) {
                emit(Type$1.attributeValue, attrValue);
                state = State.attributeNameStart;
            } else {
                attrValue += char;
            }
        }), _defineProperty(_State$attributeValue2, Action.gt, function(char) {
            if (openingQuote) {
                attrValue += char;
            } else {
                emit(Type$1.attributeValue, attrValue);
                data = '';
                state = State.data;
            }
        }), _defineProperty(_State$attributeValue2, Action.slash, function(char) {
            if (openingQuote) {
                attrValue += char;
            } else {
                emit(Type$1.attributeValue, attrValue);
                isClosing = true;
                state = State.tagEnd;
            }
        }), _defineProperty(_State$attributeValue2, Action.char, function(char) {
            attrValue += char;
        }), _State$attributeValue2)), _lexer$stateMachine);
        var step = function step(char) {
            if (options.debug) {
                console.log(state, char);
            }
            var actions = lexer.stateMachine[state];
            var action = actions[getAction(char)] || actions[Action.error] || actions[Action.char];
            action(char);
        };
        lexer.write = function(str) {
            var len = str.length;
            for(var i = 0; i < len; i++){
                step(str[i]);
            }
        };
        return lexer;
    };
    var lexer = {
        State: State,
        Action: Action,
        Type: Type$1,
        create: create$1
    };
    var Type = lexer.Type;
    var NodeType = {
        element: 'element',
        text: 'text'
    };
    var createNode = function createNode(params) {
        return Object.assign({
            name: '',
            type: NodeType.element,
            value: '',
            parent: null,
            attributes: {},
            children: []
        }, params);
    };
    var create = function create(options) {
        options = Object.assign({
            stream: false,
            parentNodes: true,
            doneEvent: 'done',
            tagPrefix: 'tag:',
            emitTopLevelOnly: false,
            debug: false
        }, options);
        var lexer$1 = void 0, rootNode = void 0, current = void 0, attrName = void 0;
        var reader = new eventemitter3();
        var handleLexerData = function handleLexerData(data) {
            switch(data.type){
                case Type.openTag:
                    if (current === null) {
                        current = rootNode;
                        current.name = data.value;
                    } else {
                        var node = createNode({
                            name: data.value,
                            parent: current
                        });
                        current.children.push(node);
                        current = node;
                    }
                    break;
                case Type.closeTag:
                    var parent = current.parent;
                    if (!options.parentNodes) {
                        current.parent = null;
                    }
                    if (current.name !== data.value) {
                        break;
                    }
                    if (options.stream && parent === rootNode) {
                        rootNode.children = [];
                        // do not expose parent node in top level nodes
                        current.parent = null;
                    }
                    if (!options.emitTopLevelOnly || parent === rootNode) {
                        reader.emit(options.tagPrefix + current.name, current);
                        reader.emit('tag', current.name, current);
                    }
                    if (current === rootNode) {
                        // end of document, stop listening
                        lexer$1.removeAllListeners('data');
                        reader.emit(options.doneEvent, current);
                        rootNode = null;
                    }
                    current = parent;
                    break;
                case Type.text:
                    if (current) {
                        current.children.push(createNode({
                            type: NodeType.text,
                            value: data.value,
                            parent: options.parentNodes ? current : null
                        }));
                    }
                    break;
                case Type.attributeName:
                    attrName = data.value;
                    current.attributes[attrName] = '';
                    break;
                case Type.attributeValue:
                    current.attributes[attrName] = data.value;
                    break;
            }
        };
        reader.reset = function() {
            lexer$1 = lexer.create({
                debug: options.debug
            });
            lexer$1.on('data', handleLexerData);
            rootNode = createNode();
            current = null;
            attrName = '';
            reader.parse = lexer$1.write;
        };
        reader.reset();
        return reader;
    };
    var parseSync = function parseSync(xml, options) {
        options = Object.assign({}, options, {
            stream: false,
            tagPrefix: ':'
        });
        var reader = create(options);
        var res = void 0;
        reader.on('done', function(ast) {
            res = ast;
        });
        reader.parse(xml);
        return res;
    };
    var reader = {
        parseSync: parseSync,
        create: create,
        NodeType: NodeType
    };
    var reader_1 = reader.parseSync;
    var parseInput = function parseInput(input) {
        var parsed = reader_1("<root>".concat(input, "</root>"), {
            parentNodes: false
        });
        var isValid = parsed.children && parsed.children.length > 0 && parsed.children.every(function(node) {
            return node.name === 'svg';
        });
        if (isValid) {
            return parsed.children.length === 1 ? parsed.children[0] : parsed.children;
        } else {
            throw Error('nothing to parse');
        }
    };
    var camelize = function camelize(node) {
        return deepRenameKeys(node, function(key) {
            if (!notCamelcase(key)) {
                return toCamelCase(key);
            }
            return key;
        });
    };
    var toCamelCase = function toCamelCase(prop) {
        return prop.replace(/[-|:]([a-z])/gi, function(all, letter) {
            return letter.toUpperCase();
        });
    };
    var notCamelcase = function notCamelcase(prop) {
        return /^(data|aria)(-\w+)/.test(prop);
    };
    var escapeText = function escapeText(text) {
        if (text) {
            var str = String(text);
            return /[&<>]/.test(str) ? "<![CDATA[".concat(str.replace(/]]>/, ']]]]><![CDATA[>'), "]]>") : str;
        }
        return '';
    };
    var escapeAttr = function escapeAttr(attr) {
        return String(attr).replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    };
    var svgsonSync = function svgsonSync(input) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$transformNode = _ref.transformNode, transformNode = _ref$transformNode === void 0 ? function(node) {
            return node;
        } : _ref$transformNode, _ref$camelcase = _ref.camelcase, camelcase = _ref$camelcase === void 0 ? false : _ref$camelcase;
        var applyFilters = function applyFilters(input) {
            var n;
            n = transformNode(input);
            if (camelcase) {
                n = camelize(n);
            }
            return n;
        };
        return applyFilters(parseInput(input));
    };
    function svgson() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return new Promise(function(resolve, reject) {
            try {
                var res = svgsonSync.apply(void 0, args);
                resolve(res);
            } catch (e) {
                reject(e);
            }
        });
    }
    var stringify = function stringify(_ast) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$transformAttr = _ref.transformAttr, transformAttr = _ref$transformAttr === void 0 ? function(key, value, escape) {
            return "".concat(key, "=\"").concat(escape(value), "\"");
        } : _ref$transformAttr, _ref$transformNode = _ref.transformNode, transformNode = _ref$transformNode === void 0 ? function(node) {
            return node;
        } : _ref$transformNode, _ref$selfClose = _ref.selfClose, selfClose = _ref$selfClose === void 0 ? true : _ref$selfClose;
        if (Array.isArray(_ast)) {
            return _ast.map(function(ast) {
                return stringify(ast, {
                    transformAttr: transformAttr,
                    selfClose: selfClose,
                    transformNode: transformNode
                });
            }).join('');
        }
        var ast = transformNode(_ast);
        if (ast.type === 'text') {
            return escapeText(ast.value);
        }
        var attributes = '';
        for(var attr in ast.attributes){
            var attrStr = transformAttr(attr, ast.attributes[attr], escapeAttr, ast.name);
            attributes += attrStr ? " ".concat(attrStr) : '';
        }
        return ast.children && ast.children.length > 0 || !selfClose ? "<".concat(ast.name).concat(attributes, ">").concat(stringify(ast.children, {
            transformAttr: transformAttr,
            transformNode: transformNode,
            selfClose: selfClose
        }), "</").concat(ast.name, ">") : "<".concat(ast.name).concat(attributes, "/>");
    };
    var indexUmd = Object.assign({}, {
        parse: svgson,
        parseSync: svgsonSync,
        stringify: stringify
    });
    return indexUmd;
});
}),
]);

//# sourceMappingURL=0ov4__pnpm_06zgukd._.js.map