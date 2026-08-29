(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/nanoid@5.1.16/node_modules/nanoid/url-alphabet/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlAlphabet",
    ()=>urlAlphabet
]);
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/nanoid@5.1.16/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customAlphabet",
    ()=>customAlphabet,
    "customRandom",
    ()=>customRandom,
    "nanoid",
    ()=>nanoid,
    "random",
    ()=>random
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$16$2f$node_modules$2f$nanoid$2f$url$2d$alphabet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/nanoid@5.1.16/node_modules/nanoid/url-alphabet/index.js [app-client] (ecmascript)");
;
;
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let safeByteCutoff = 256 - 256 % alphabet.length;
    if (safeByteCutoff === 256) {
        let mask = alphabet.length - 1;
        return (size = defaultSize)=>{
            if (!size) return '';
            let id = '';
            while(true){
                let bytes = getRandom(size);
                let j = size;
                while(j--){
                    id += alphabet[bytes[j] & mask];
                    if (id.length >= size) return id;
                }
            }
        };
    }
    let step = Math.ceil(1.6 * 256 * defaultSize / safeByteCutoff);
    return (size = defaultSize)=>{
        if (!size) return '';
        let id = '';
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                if (bytes[j] < safeByteCutoff) {
                    id += alphabet[bytes[j] % alphabet.length];
                    if (id.length >= size) return id;
                }
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size | 0, random);
let nanoid = (size = 21)=>{
    let id = '';
    let bytes = crypto.getRandomValues(new Uint8Array(size |= 0));
    while(size--){
        id += __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$16$2f$node_modules$2f$nanoid$2f$url$2d$alphabet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlAlphabet"][bytes[size] & 63];
    }
    return id;
};
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-dev-tools@4.3.0_59232af45f321962caab1bb50c8f6f17/node_modules/prosemirror-dev-tools/dist/esm/state/json-diff-worker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JsonDiffWorker",
    ()=>JsonDiffWorker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$16$2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/nanoid@5.1.16/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>");
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
var JsonDiffWorker = /*#__PURE__*/ function() {
    function JsonDiffWorker(worker) {
        var _this = this;
        _classCallCheck(this, JsonDiffWorker);
        _defineProperty(this, "queue", new Map());
        _defineProperty(this, "scheduler", new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$dev$2d$tools$40$4$2e$3$2e$0_59232af45f321962caab1bb50c8f6f17$2f$node_modules$2f$prosemirror$2d$dev$2d$tools$2f$dist$2f$esm$2f$state$2f$idle$2d$scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdleScheduler"]());
        _defineProperty(this, "worker", void 0);
        this.worker = worker;
        this.worker.addEventListener("message", function(e) {
            var deferred = _this.queue.get(e.data.id);
            if (deferred) {
                _this.queue["delete"](e.data.id);
                deferred.resolve(e.data.returns);
            }
        });
    }
    return _createClass(JsonDiffWorker, [
        {
            key: "diff",
            value: function() {
                var _diff = _asyncToGenerator(/*#__PURE__*/ _regenerator().m(function _callee(input) {
                    var id, deferred;
                    return _regenerator().w(function(_context) {
                        while(1)switch(_context.n){
                            case 0:
                                _context.n = 1;
                                return this.scheduler.request();
                            case 1:
                                id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$nanoid$40$5$2e$1$2e$16$2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])();
                                deferred = createDeferrable();
                                this.queue.set(id, deferred);
                                this.worker.postMessage({
                                    method: "diff",
                                    id: id,
                                    args: [
                                        input
                                    ]
                                });
                                return _context.a(2, deferred);
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
function createDeferrable() {
    var r;
    var p = new Promise(function(resolve) {
        r = resolve;
    });
    p.resolve = function() {
        return r.apply(void 0, arguments);
    };
    return p;
}
}),
]);

//# sourceMappingURL=0ov4__pnpm_1210rig._.js.map