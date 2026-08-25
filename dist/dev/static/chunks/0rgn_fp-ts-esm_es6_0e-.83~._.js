(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */ __turbopack_context__.s([
    "SK",
    ()=>SK,
    "absurd",
    ()=>absurd,
    "apply",
    ()=>apply,
    "constFalse",
    ()=>constFalse,
    "constNull",
    ()=>constNull,
    "constTrue",
    ()=>constTrue,
    "constUndefined",
    ()=>constUndefined,
    "constVoid",
    ()=>constVoid,
    "constant",
    ()=>constant,
    "decrement",
    ()=>decrement,
    "dual",
    ()=>dual,
    "flip",
    ()=>flip,
    "flow",
    ()=>flow,
    "getBooleanAlgebra",
    ()=>getBooleanAlgebra,
    "getEndomorphismMonoid",
    ()=>getEndomorphismMonoid,
    "getMonoid",
    ()=>getMonoid,
    "getRing",
    ()=>getRing,
    "getSemigroup",
    ()=>getSemigroup,
    "getSemiring",
    ()=>getSemiring,
    "hole",
    ()=>hole,
    "identity",
    ()=>identity,
    "increment",
    ()=>increment,
    "not",
    ()=>not,
    "pipe",
    ()=>pipe,
    "tuple",
    ()=>tuple,
    "tupled",
    ()=>tupled,
    "unsafeCoerce",
    ()=>unsafeCoerce,
    "untupled",
    ()=>untupled
]);
const getBooleanAlgebra = (B)=>()=>({
            meet: (x, y)=>(a)=>B.meet(x(a), y(a)),
            join: (x, y)=>(a)=>B.join(x(a), y(a)),
            zero: ()=>B.zero,
            one: ()=>B.one,
            implies: (x, y)=>(a)=>B.implies(x(a), y(a)),
            not: (x)=>(a)=>B.not(x(a))
        });
const getSemigroup = (S)=>()=>({
            concat: (f, g)=>(a)=>S.concat(f(a), g(a))
        });
const getMonoid = (M)=>{
    const getSemigroupM = getSemigroup(M);
    return ()=>({
            concat: getSemigroupM().concat,
            empty: ()=>M.empty
        });
};
const getSemiring = (S)=>({
        add: (f, g)=>(x)=>S.add(f(x), g(x)),
        zero: ()=>S.zero,
        mul: (f, g)=>(x)=>S.mul(f(x), g(x)),
        one: ()=>S.one
    });
const getRing = (R)=>{
    const S = getSemiring(R);
    return {
        add: S.add,
        mul: S.mul,
        one: S.one,
        zero: S.zero,
        sub: (f, g)=>(x)=>R.sub(f(x), g(x))
    };
};
const apply = (a)=>(f)=>f(a);
function identity(a) {
    return a;
}
const unsafeCoerce = identity;
function constant(a) {
    return ()=>a;
}
const constTrue = /*#__PURE__*/ constant(true);
const constFalse = /*#__PURE__*/ constant(false);
const constNull = /*#__PURE__*/ constant(null);
const constUndefined = /*#__PURE__*/ constant(undefined);
const constVoid = constUndefined;
function flip(f) {
    return (...args)=>{
        if (args.length > 1) {
            return f(args[1], args[0]);
        }
        return (a)=>f(a)(args[0]);
    };
}
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch(arguments.length){
        case 1:
            return ab;
        case 2:
            return function() {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function() {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function() {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function() {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function() {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function() {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function() {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function() {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
    return;
}
function tuple(...t) {
    return t;
}
function increment(n) {
    return n + 1;
}
function decrement(n) {
    return n - 1;
}
function absurd(_) {
    throw new Error('Called `absurd` function which should be uncallable');
}
function tupled(f) {
    return (a)=>f(...a);
}
function untupled(f) {
    return (...a)=>f(a);
}
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
    switch(arguments.length){
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        default:
            {
                let ret = arguments[0];
                for(let i = 1; i < arguments.length; i++){
                    ret = arguments[i](ret);
                }
                return ret;
            }
    }
}
const hole = absurd;
const SK = (_, b)=>b;
function not(predicate) {
    return (a)=>!predicate(a);
}
const getEndomorphismMonoid = ()=>({
        concat: (first, second)=>flow(first, second),
        empty: identity
    });
const dual = (arity, body)=>{
    const isDataFirst = typeof arity === 'number' ? (args)=>args.length >= arity : arity;
    return function() {
        const args = Array.from(arguments);
        if (isDataFirst(arguments)) {
            return body.apply(this, args);
        }
        return (self)=>body(self, ...args);
    };
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emptyReadonlyArray",
    ()=>emptyReadonlyArray,
    "emptyRecord",
    ()=>emptyRecord,
    "flatMapEither",
    ()=>flatMapEither,
    "flatMapIO",
    ()=>flatMapIO,
    "flatMapNullable",
    ()=>flatMapNullable,
    "flatMapOption",
    ()=>flatMapOption,
    "flatMapReader",
    ()=>flatMapReader,
    "flatMapTask",
    ()=>flatMapTask,
    "fromReadonlyNonEmptyArray",
    ()=>fromReadonlyNonEmptyArray,
    "has",
    ()=>has,
    "head",
    ()=>head,
    "isLeft",
    ()=>isLeft,
    "isNonEmpty",
    ()=>isNonEmpty,
    "isNone",
    ()=>isNone,
    "isRight",
    ()=>isRight,
    "isSome",
    ()=>isSome,
    "left",
    ()=>left,
    "liftNullable",
    ()=>liftNullable,
    "liftOption",
    ()=>liftOption,
    "none",
    ()=>none,
    "right",
    ()=>right,
    "singleton",
    ()=>singleton,
    "some",
    ()=>some,
    "tail",
    ()=>tail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
;
const isNone = (fa)=>fa._tag === 'None';
const isSome = (fa)=>fa._tag === 'Some';
const none = {
    _tag: 'None'
};
const some = (a)=>({
        _tag: 'Some',
        value: a
    });
const isLeft = (ma)=>ma._tag === 'Left';
const isRight = (ma)=>ma._tag === 'Right';
const left = (e)=>({
        _tag: 'Left',
        left: e
    });
const right = (a)=>({
        _tag: 'Right',
        right: a
    });
const singleton = (a)=>[
        a
    ];
const isNonEmpty = (as)=>as.length > 0;
const head = (as)=>as[0];
const tail = (as)=>as.slice(1);
const emptyReadonlyArray = [];
const emptyRecord = {};
const has = Object.prototype.hasOwnProperty;
const fromReadonlyNonEmptyArray = (as)=>[
        as[0],
        ...as.slice(1)
    ];
const liftNullable = (F)=>(f, onNullable)=>(...a)=>{
            const o = f(...a);
            return F.fromEither(o == null ? left(onNullable(...a)) : right(o));
        };
const liftOption = (F)=>(f, onNone)=>(...a)=>{
            const o = f(...a);
            return F.fromEither(isNone(o) ? left(onNone(...a)) : right(o.value));
        };
const flatMapNullable = (F, M)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, f, onNullable)=>M.flatMap(self, liftNullable(F)(f, onNullable)));
};
const flatMapOption = (F, M)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(3, (self, f, onNone)=>M.flatMap(self, liftOption(F)(f, onNone)));
};
const flatMapEither = (F, M)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>M.flatMap(self, (a)=>F.fromEither(f(a))));
};
const flatMapIO = (F, M)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>M.flatMap(self, (a)=>F.fromIO(f(a))));
};
const flatMapTask = (F, M)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>M.flatMap(self, (a)=>F.fromTask(f(a))));
};
const flatMapReader = (F, M)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, f)=>M.flatMap(self, (a)=>F.fromReader(f(a))));
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Apply.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ap",
    ()=>ap,
    "apFirst",
    ()=>apFirst,
    "apS",
    ()=>apS,
    "apSecond",
    ()=>apSecond,
    "getApplySemigroup",
    ()=>getApplySemigroup,
    "sequenceS",
    ()=>sequenceS,
    "sequenceT",
    ()=>sequenceT
]);
/**
 * The `Apply` class provides the `ap` which is used to apply a function to an argument under a type constructor.
 *
 * `Apply` can be used to lift functions of two or more arguments to work on values wrapped with the type constructor
 * `f`.
 *
 * Instances must satisfy the following law in addition to the `Functor` laws:
 *
 * 1. Associative composition: `F.ap(F.ap(F.map(fbc, bc => ab => a => bc(ab(a))), fab), fa) <-> F.ap(fbc, F.ap(fab, fa))`
 *
 * Formally, `Apply` represents a strong lax semi-monoidal endofunctor.
 *
 * @example
 * import * as O from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * const f = (a: string) => (b: number) => (c: boolean) => a + String(b) + String(c)
 * const fa: O.Option<string> = O.some('s')
 * const fb: O.Option<number> = O.some(1)
 * const fc: O.Option<boolean> = O.some(true)
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     // lift a function
 *     O.some(f),
 *     // apply the first argument
 *     O.ap(fa),
 *     // apply the second argument
 *     O.ap(fb),
 *     // apply the third argument
 *     O.ap(fc)
 *   ),
 *   O.some('s1true')
 * )
 *
 * @since 2.0.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
;
;
function ap(F, G) {
    return (fa)=>(fab)=>F.ap(F.map(fab, (gab)=>(ga)=>G.ap(gab, ga)), fa);
}
function apFirst(A) {
    return (second)=>(first)=>A.ap(A.map(first, (a)=>()=>a), second);
}
function apSecond(A) {
    return (second)=>(first)=>A.ap(A.map(first, ()=>(b)=>b), second);
}
function apS(F) {
    return (name, fb)=>(fa)=>F.ap(F.map(fa, (a)=>(b)=>Object.assign({}, a, {
                        [name]: b
                    })), fb);
}
function getApplySemigroup(F) {
    return (S)=>({
            concat: (first, second)=>F.ap(F.map(first, (x)=>(y)=>S.concat(x, y)), second)
        });
}
function curried(f, n, acc) {
    return function(x) {
        const combined = Array(acc.length + 1);
        for(let i = 0; i < acc.length; i++){
            combined[i] = acc[i];
        }
        combined[acc.length] = x;
        return n === 0 ? f.apply(null, combined) : curried(f, n - 1, combined);
    };
}
const tupleConstructors = {
    1: (a)=>[
            a
        ],
    2: (a)=>(b)=>[
                a,
                b
            ],
    3: (a)=>(b)=>(c)=>[
                    a,
                    b,
                    c
                ],
    4: (a)=>(b)=>(c)=>(d)=>[
                        a,
                        b,
                        c,
                        d
                    ],
    5: (a)=>(b)=>(c)=>(d)=>(e)=>[
                            a,
                            b,
                            c,
                            d,
                            e
                        ]
};
function getTupleConstructor(len) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(tupleConstructors, len)) {
        tupleConstructors[len] = curried(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tuple"], len - 1, []);
    }
    return tupleConstructors[len];
}
function sequenceT(F) {
    return (...args)=>{
        const len = args.length;
        const f = getTupleConstructor(len);
        let fas = F.map(args[0], f);
        for(let i = 1; i < len; i++){
            fas = F.ap(fas, args[i]);
        }
        return fas;
    };
}
function getRecordConstructor(keys) {
    const len = keys.length;
    switch(len){
        case 1:
            return (a)=>({
                    [keys[0]]: a
                });
        case 2:
            return (a)=>(b)=>({
                        [keys[0]]: a,
                        [keys[1]]: b
                    });
        case 3:
            return (a)=>(b)=>(c)=>({
                            [keys[0]]: a,
                            [keys[1]]: b,
                            [keys[2]]: c
                        });
        case 4:
            return (a)=>(b)=>(c)=>(d)=>({
                                [keys[0]]: a,
                                [keys[1]]: b,
                                [keys[2]]: c,
                                [keys[3]]: d
                            });
        case 5:
            return (a)=>(b)=>(c)=>(d)=>(e)=>({
                                    [keys[0]]: a,
                                    [keys[1]]: b,
                                    [keys[2]]: c,
                                    [keys[3]]: d,
                                    [keys[4]]: e
                                });
        default:
            return curried((...args)=>{
                const r = {};
                for(let i = 0; i < len; i++){
                    r[keys[i]] = args[i];
                }
                return r;
            }, len - 1, []);
    }
}
function sequenceS(F) {
    return (r)=>{
        const keys = Object.keys(r);
        const len = keys.length;
        const f = getRecordConstructor(keys);
        let fr = F.map(r[keys[0]], f);
        for(let i = 1; i < len; i++){
            fr = F.ap(fr, r[keys[i]]);
        }
        return fr;
    };
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Chain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bind",
    ()=>bind,
    "chainFirst",
    ()=>chainFirst,
    "tap",
    ()=>tap
]);
function chainFirst(M) {
    const tapM = tap(M);
    return (f)=>(first)=>tapM(first, f);
}
function tap(M) {
    return (first, f)=>M.chain(first, (a)=>M.map(f(a), ()=>a));
}
function bind(M) {
    return (name, f)=>(ma)=>M.chain(ma, (a)=>M.map(f(a), (b)=>Object.assign({}, a, {
                        [name]: b
                    })));
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/FromEither.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chainEitherK",
    ()=>chainEitherK,
    "chainFirstEitherK",
    ()=>chainFirstEitherK,
    "chainOptionK",
    ()=>chainOptionK,
    "filterOrElse",
    ()=>filterOrElse,
    "fromEitherK",
    ()=>fromEitherK,
    "fromOption",
    ()=>fromOption,
    "fromOptionK",
    ()=>fromOptionK,
    "fromPredicate",
    ()=>fromPredicate,
    "tapEither",
    ()=>tapEither
]);
/**
 * The `FromEither` type class represents those data types which support errors.
 *
 * @since 2.10.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
;
;
;
function fromOption(F) {
    return (onNone)=>(ma)=>F.fromEither(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"](ma) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"](onNone()) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"](ma.value));
}
function fromPredicate(F) {
    return (predicate, onFalse)=>(a)=>F.fromEither(predicate(a) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"](a) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"](onFalse(a)));
}
function fromOptionK(F) {
    const fromOptionF = fromOption(F);
    return (onNone)=>{
        const from = fromOptionF(onNone);
        return (f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(f, from);
    };
}
function chainOptionK(F, M) {
    const fromOptionKF = fromOptionK(F);
    return (onNone)=>{
        const from = fromOptionKF(onNone);
        return (f)=>(ma)=>M.chain(ma, from(f));
    };
}
function fromEitherK(F) {
    return (f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(f, F.fromEither);
}
function chainEitherK(F, M) {
    const fromEitherKF = fromEitherK(F);
    return (f)=>(ma)=>M.chain(ma, fromEitherKF(f));
}
function chainFirstEitherK(F, M) {
    const tapEitherM = tapEither(F, M);
    return (f)=>(ma)=>tapEitherM(ma, f);
}
function filterOrElse(F, M) {
    return (predicate, onFalse)=>(ma)=>M.chain(ma, (a)=>F.fromEither(predicate(a) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"](a) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"](onFalse(a))));
}
function tapEither(F, M) {
    const fromEither = fromEitherK(F);
    const tapM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tap"])(M);
    return (self, f)=>tapM(self, fromEither(f));
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "as",
    ()=>as,
    "asUnit",
    ()=>asUnit,
    "bindTo",
    ()=>bindTo,
    "flap",
    ()=>flap,
    "getFunctorComposition",
    ()=>getFunctorComposition,
    "let",
    ()=>let_,
    "map",
    ()=>map
]);
/**
 * A `Functor` is a type constructor which supports a mapping operation `map`.
 *
 * `map` can be used to turn functions `a -> b` into functions `f a -> f b` whose argument and return types use the type
 * constructor `f` to represent some computational context.
 *
 * Instances must satisfy the following laws:
 *
 * 1. Identity: `F.map(fa, a => a) <-> fa`
 * 2. Composition: `F.map(fa, a => bc(ab(a))) <-> F.map(F.map(fa, ab), bc)`
 *
 * @since 2.0.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
;
function map(F, G) {
    return (f)=>(fa)=>F.map(fa, (ga)=>G.map(ga, f));
}
function flap(F) {
    return (a)=>(fab)=>F.map(fab, (f)=>f(a));
}
function bindTo(F) {
    return (name)=>(fa)=>F.map(fa, (a)=>({
                    [name]: a
                }));
}
function let_(F) {
    return (name, f)=>(fa)=>F.map(fa, (a)=>Object.assign({}, a, {
                    [name]: f(a)
                }));
}
;
function getFunctorComposition(F, G) {
    const _map = map(F, G);
    return {
        map: (fga, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fga, _map(f))
    };
}
function as(F) {
    return (self, b)=>F.map(self, ()=>b);
}
function asUnit(F) {
    const asM = as(F);
    return (self)=>asM(self, undefined);
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Eq.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contravariant",
    ()=>Contravariant,
    "URI",
    ()=>URI,
    "contramap",
    ()=>contramap,
    "eq",
    ()=>eq,
    "eqBoolean",
    ()=>eqBoolean,
    "eqDate",
    ()=>eqDate,
    "eqNumber",
    ()=>eqNumber,
    "eqStrict",
    ()=>eqStrict,
    "eqString",
    ()=>eqString,
    "fromEquals",
    ()=>fromEquals,
    "getMonoid",
    ()=>getMonoid,
    "getSemigroup",
    ()=>getSemigroup,
    "getStructEq",
    ()=>getStructEq,
    "getTupleEq",
    ()=>getTupleEq,
    "strictEqual",
    ()=>strictEqual,
    "struct",
    ()=>struct,
    "tuple",
    ()=>tuple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
;
const fromEquals = (equals)=>({
        equals: (x, y)=>x === y || equals(x, y)
    });
const struct = (eqs)=>fromEquals((first, second)=>{
        for(const key in eqs){
            if (!eqs[key].equals(first[key], second[key])) {
                return false;
            }
        }
        return true;
    });
const tuple = (...eqs)=>fromEquals((first, second)=>eqs.every((E, i)=>E.equals(first[i], second[i])));
/* istanbul ignore next */ const contramap_ = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, contramap(f));
const contramap = (f)=>(fa)=>fromEquals((x, y)=>fa.equals(f(x), f(y)));
const URI = 'Eq';
const eqStrict = {
    equals: (a, b)=>a === b
};
const empty = {
    equals: ()=>true
};
const getSemigroup = ()=>({
        concat: (x, y)=>fromEquals((a, b)=>x.equals(a, b) && y.equals(a, b))
    });
const getMonoid = ()=>({
        concat: getSemigroup().concat,
        empty
    });
const Contravariant = {
    URI,
    contramap: contramap_
};
const getTupleEq = tuple;
const getStructEq = struct;
const strictEqual = eqStrict.equals;
const eq = Contravariant;
const eqBoolean = eqStrict;
const eqString = eqStrict;
const eqNumber = eqStrict;
const eqDate = {
    equals: (first, second)=>first.valueOf() === second.valueOf()
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Ord.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contravariant",
    ()=>Contravariant,
    "URI",
    ()=>URI,
    "between",
    ()=>between,
    "clamp",
    ()=>clamp,
    "contramap",
    ()=>contramap,
    "equals",
    ()=>equals,
    "equalsDefault",
    ()=>equalsDefault,
    "fromCompare",
    ()=>fromCompare,
    "geq",
    ()=>geq,
    "getDualOrd",
    ()=>getDualOrd,
    "getMonoid",
    ()=>getMonoid,
    "getSemigroup",
    ()=>getSemigroup,
    "getTupleOrd",
    ()=>getTupleOrd,
    "gt",
    ()=>gt,
    "leq",
    ()=>leq,
    "lt",
    ()=>lt,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "ord",
    ()=>ord,
    "ordBoolean",
    ()=>ordBoolean,
    "ordDate",
    ()=>ordDate,
    "ordNumber",
    ()=>ordNumber,
    "ordString",
    ()=>ordString,
    "reverse",
    ()=>reverse,
    "trivial",
    ()=>trivial,
    "tuple",
    ()=>tuple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Eq.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
;
;
const equalsDefault = (compare)=>(first, second)=>first === second || compare(first, second) === 0;
const fromCompare = (compare)=>({
        equals: equalsDefault(compare),
        compare: (first, second)=>first === second ? 0 : compare(first, second)
    });
const tuple = (...ords)=>fromCompare((first, second)=>{
        let i = 0;
        for(; i < ords.length - 1; i++){
            const r = ords[i].compare(first[i], second[i]);
            if (r !== 0) {
                return r;
            }
        }
        return ords[i].compare(first[i], second[i]);
    });
const reverse = (O)=>fromCompare((first, second)=>O.compare(second, first));
/* istanbul ignore next */ const contramap_ = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, contramap(f));
const contramap = (f)=>(fa)=>fromCompare((first, second)=>fa.compare(f(first), f(second)));
const URI = 'Ord';
const getSemigroup = ()=>({
        concat: (first, second)=>fromCompare((a, b)=>{
                const ox = first.compare(a, b);
                return ox !== 0 ? ox : second.compare(a, b);
            })
    });
const getMonoid = ()=>({
        concat: getSemigroup().concat,
        empty: fromCompare(()=>0)
    });
const Contravariant = {
    URI,
    contramap: contramap_
};
const trivial = {
    equals: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constTrue"],
    compare: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constant"])(0)
};
const equals = (O)=>(second)=>(first)=>first === second || O.compare(first, second) === 0;
const lt = (O)=>(first, second)=>O.compare(first, second) === -1;
const gt = (O)=>(first, second)=>O.compare(first, second) === 1;
const leq = (O)=>(first, second)=>O.compare(first, second) !== 1;
const geq = (O)=>(first, second)=>O.compare(first, second) !== -1;
const min = (O)=>(first, second)=>first === second || O.compare(first, second) < 1 ? first : second;
const max = (O)=>(first, second)=>first === second || O.compare(first, second) > -1 ? first : second;
const clamp = (O)=>{
    const minO = min(O);
    const maxO = max(O);
    return (low, hi)=>(a)=>maxO(minO(a, hi), low);
};
const between = (O)=>{
    const ltO = lt(O);
    const gtO = gt(O);
    return (low, hi)=>(a)=>ltO(a, low) || gtO(a, hi) ? false : true;
};
const getTupleOrd = tuple;
const getDualOrd = reverse;
const ord = Contravariant;
// default compare for primitive types
function compare(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
}
const strictOrd = {
    equals: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eqStrict"].equals,
    compare
};
const ordBoolean = strictOrd;
const ordString = strictOrd;
const ordNumber = strictOrd;
const ordDate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ordNumber, /*#__PURE__*/ contramap((date)=>date.valueOf()));
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Magma.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A `Magma` is a pair `(A, concat)` in which `A` is a non-empty set and `concat` is a binary operation on `A`
 *
 * See [Semigroup](https://gcanti.github.io/fp-ts/modules/Semigroup.ts.html) for some instances.
 *
 * @since 2.0.0
 */ // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * The dual of a `Magma`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { reverse, concatAll } from 'fp-ts/Magma'
 * import * as N from 'fp-ts/number'
 *
 * const subAll = concatAll(reverse(N.MagmaSub))(0)
 *
 * assert.deepStrictEqual(subAll([1, 2, 3]), 2)
 *
 * @since 2.11.0
 */ __turbopack_context__.s([
    "concatAll",
    ()=>concatAll,
    "endo",
    ()=>endo,
    "filterFirst",
    ()=>filterFirst,
    "filterSecond",
    ()=>filterSecond,
    "reverse",
    ()=>reverse
]);
const reverse = (M)=>({
        concat: (first, second)=>M.concat(second, first)
    });
const filterFirst = (predicate)=>(M)=>({
            concat: (first, second)=>predicate(first) ? M.concat(first, second) : second
        });
const filterSecond = (predicate)=>(M)=>({
            concat: (first, second)=>predicate(second) ? M.concat(first, second) : first
        });
const endo = (f)=>(M)=>({
            concat: (first, second)=>M.concat(f(first), f(second))
        });
const concatAll = (M)=>(startWith)=>(as)=>as.reduce((a, acc)=>M.concat(a, acc), startWith);
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Semigroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concatAll",
    ()=>concatAll,
    "constant",
    ()=>constant,
    "first",
    ()=>first,
    "fold",
    ()=>fold,
    "getDualSemigroup",
    ()=>getDualSemigroup,
    "getFirstSemigroup",
    ()=>getFirstSemigroup,
    "getFunctionSemigroup",
    ()=>getFunctionSemigroup,
    "getIntercalateSemigroup",
    ()=>getIntercalateSemigroup,
    "getJoinSemigroup",
    ()=>getJoinSemigroup,
    "getLastSemigroup",
    ()=>getLastSemigroup,
    "getMeetSemigroup",
    ()=>getMeetSemigroup,
    "getObjectSemigroup",
    ()=>getObjectSemigroup,
    "getStructSemigroup",
    ()=>getStructSemigroup,
    "getTupleSemigroup",
    ()=>getTupleSemigroup,
    "intercalate",
    ()=>intercalate,
    "last",
    ()=>last,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "reverse",
    ()=>reverse,
    "semigroupAll",
    ()=>semigroupAll,
    "semigroupAny",
    ()=>semigroupAny,
    "semigroupProduct",
    ()=>semigroupProduct,
    "semigroupString",
    ()=>semigroupString,
    "semigroupSum",
    ()=>semigroupSum,
    "semigroupVoid",
    ()=>semigroupVoid,
    "struct",
    ()=>struct,
    "tuple",
    ()=>tuple
]);
/**
 * If a type `A` can form a `Semigroup` it has an **associative** binary operation.
 *
 * ```ts
 * interface Semigroup<A> {
 *   readonly concat: (x: A, y: A) => A
 * }
 * ```
 *
 * Associativity means the following equality must hold for any choice of `x`, `y`, and `z`.
 *
 * ```ts
 * concat(x, concat(y, z)) = concat(concat(x, y), z)
 * ```
 *
 * A common example of a semigroup is the type `string` with the operation `+`.
 *
 * ```ts
 * import { Semigroup } from 'fp-ts/Semigroup'
 *
 * const semigroupString: Semigroup<string> = {
 *   concat: (x, y) => x + y
 * }
 *
 * const x = 'x'
 * const y = 'y'
 * const z = 'z'
 *
 * semigroupString.concat(x, y) // 'xy'
 *
 * semigroupString.concat(x, semigroupString.concat(y, z)) // 'xyz'
 *
 * semigroupString.concat(semigroupString.concat(x, y), z) // 'xyz'
 * ```
 *
 * *Adapted from https://typelevel.org/cats*
 *
 * @since 2.0.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Magma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Magma.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Ord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Ord.js [app-client] (ecmascript)");
;
;
;
;
const min = (O)=>({
        concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Ord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"](O)
    });
const max = (O)=>({
        concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Ord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](O)
    });
const constant = (a)=>({
        concat: ()=>a
    });
const reverse = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Magma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverse"];
const struct = (semigroups)=>({
        concat: (first, second)=>{
            const r = {};
            for(const k in semigroups){
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(semigroups, k)) {
                    r[k] = semigroups[k].concat(first[k], second[k]);
                }
            }
            return r;
        }
    });
const tuple = (...semigroups)=>({
        concat: (first, second)=>semigroups.map((s, i)=>s.concat(first[i], second[i]))
    });
const intercalate = (middle)=>(S)=>({
            concat: (x, y)=>S.concat(x, S.concat(middle, y))
        });
const first = ()=>({
        concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]
    });
const last = ()=>({
        concat: (_, y)=>y
    });
const concatAll = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Magma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatAll"];
const semigroupVoid = constant(undefined);
const getObjectSemigroup = ()=>({
        concat: (first, second)=>Object.assign({}, first, second)
    });
const getLastSemigroup = last;
const getFirstSemigroup = first;
const getTupleSemigroup = tuple;
const getStructSemigroup = struct;
const getDualSemigroup = reverse;
const getJoinSemigroup = max;
const getMeetSemigroup = min;
const getIntercalateSemigroup = intercalate;
function fold(S) {
    const concatAllS = concatAll(S);
    return (startWith, as)=>as === undefined ? concatAllS(startWith) : concatAllS(startWith)(as);
}
const semigroupAll = {
    concat: (x, y)=>x && y
};
const semigroupAny = {
    concat: (x, y)=>x || y
};
const getFunctionSemigroup = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSemigroup"];
const semigroupString = {
    concat: (x, y)=>x + y
};
const semigroupSum = {
    concat: (x, y)=>x + y
};
const semigroupProduct = {
    concat: (x, y)=>x * y
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyNonEmptyArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alt",
    ()=>Alt,
    "Applicative",
    ()=>Applicative,
    "Apply",
    ()=>Apply,
    "Chain",
    ()=>Chain,
    "Comonad",
    ()=>Comonad,
    "Do",
    ()=>Do,
    "Foldable",
    ()=>Foldable,
    "FoldableWithIndex",
    ()=>FoldableWithIndex,
    "Functor",
    ()=>Functor,
    "FunctorWithIndex",
    ()=>FunctorWithIndex,
    "Monad",
    ()=>Monad,
    "Pointed",
    ()=>Pointed,
    "Traversable",
    ()=>Traversable,
    "TraversableWithIndex",
    ()=>TraversableWithIndex,
    "URI",
    ()=>URI,
    "alt",
    ()=>alt,
    "altW",
    ()=>altW,
    "ap",
    ()=>ap,
    "apFirst",
    ()=>apFirst,
    "apS",
    ()=>apS,
    "apSecond",
    ()=>apSecond,
    "append",
    ()=>append,
    "appendW",
    ()=>appendW,
    "bind",
    ()=>bind,
    "bindTo",
    ()=>bindTo,
    "chain",
    ()=>chain,
    "chainFirst",
    ()=>chainFirst,
    "chainWithIndex",
    ()=>chainWithIndex,
    "chop",
    ()=>chop,
    "chunksOf",
    ()=>chunksOf,
    "concat",
    ()=>concat,
    "concatAll",
    ()=>concatAll,
    "concatW",
    ()=>concatW,
    "cons",
    ()=>cons,
    "duplicate",
    ()=>duplicate,
    "empty",
    ()=>empty,
    "extend",
    ()=>extend,
    "extract",
    ()=>extract,
    "filter",
    ()=>filter,
    "filterWithIndex",
    ()=>filterWithIndex,
    "flap",
    ()=>flap,
    "flatMap",
    ()=>flatMap,
    "flatten",
    ()=>flatten,
    "fold",
    ()=>fold,
    "foldMap",
    ()=>foldMap,
    "foldMapWithIndex",
    ()=>foldMapWithIndex,
    "fromArray",
    ()=>fromArray,
    "fromReadonlyArray",
    ()=>fromReadonlyArray,
    "getEq",
    ()=>getEq,
    "getSemigroup",
    ()=>getSemigroup,
    "getShow",
    ()=>getShow,
    "getUnionSemigroup",
    ()=>getUnionSemigroup,
    "group",
    ()=>group,
    "groupBy",
    ()=>groupBy,
    "groupSort",
    ()=>groupSort,
    "head",
    ()=>head,
    "init",
    ()=>init,
    "insertAt",
    ()=>insertAt,
    "intercalate",
    ()=>intercalate,
    "intersperse",
    ()=>intersperse,
    "isNonEmpty",
    ()=>isNonEmpty,
    "isOutOfBound",
    ()=>isOutOfBound,
    "last",
    ()=>last,
    "let",
    ()=>let_,
    "makeBy",
    ()=>makeBy,
    "map",
    ()=>map,
    "mapWithIndex",
    ()=>mapWithIndex,
    "matchLeft",
    ()=>matchLeft,
    "matchRight",
    ()=>matchRight,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "modifyAt",
    ()=>modifyAt,
    "modifyHead",
    ()=>modifyHead,
    "modifyLast",
    ()=>modifyLast,
    "of",
    ()=>of,
    "prepend",
    ()=>prepend,
    "prependAll",
    ()=>prependAll,
    "prependToAll",
    ()=>prependToAll,
    "prependW",
    ()=>prependW,
    "range",
    ()=>range,
    "readonlyNonEmptyArray",
    ()=>readonlyNonEmptyArray,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "reduceRightWithIndex",
    ()=>reduceRightWithIndex,
    "reduceWithIndex",
    ()=>reduceWithIndex,
    "replicate",
    ()=>replicate,
    "reverse",
    ()=>reverse,
    "rotate",
    ()=>rotate,
    "sequence",
    ()=>sequence,
    "snoc",
    ()=>snoc,
    "sort",
    ()=>sort,
    "sortBy",
    ()=>sortBy,
    "splitAt",
    ()=>splitAt,
    "tail",
    ()=>tail,
    "traverse",
    ()=>traverse,
    "traverseWithIndex",
    ()=>traverseWithIndex,
    "unappend",
    ()=>unappend,
    "uncons",
    ()=>uncons,
    "union",
    ()=>union,
    "uniq",
    ()=>uniq,
    "unprepend",
    ()=>unprepend,
    "unsafeInsertAt",
    ()=>unsafeInsertAt,
    "unsafeUpdateAt",
    ()=>unsafeUpdateAt,
    "unsnoc",
    ()=>unsnoc,
    "unzip",
    ()=>unzip,
    "updateAt",
    ()=>updateAt,
    "updateHead",
    ()=>updateHead,
    "updateLast",
    ()=>updateLast,
    "zip",
    ()=>zip,
    "zipWith",
    ()=>zipWith
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Apply.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Eq.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Ord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Ord.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Semigroup.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const empty = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyReadonlyArray"];
const isNonEmpty = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonEmpty"];
const isOutOfBound = (i, as)=>i < 0 || i >= as.length;
const prependW = (head)=>(tail)=>[
            head,
            ...tail
        ];
const prepend = prependW;
const appendW = (end)=>(init)=>[
            ...init,
            end
        ];
const append = appendW;
const unsafeInsertAt = (i, a, as)=>{
    if (isNonEmpty(as)) {
        const xs = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromReadonlyNonEmptyArray"](as);
        xs.splice(i, 0, a);
        return xs;
    }
    return [
        a
    ];
};
const unsafeUpdateAt = (i, a, as)=>{
    if (as[i] === a) {
        return as;
    } else {
        const xs = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromReadonlyNonEmptyArray"](as);
        xs[i] = a;
        return xs;
    }
};
const uniq = (E)=>(as)=>{
        if (as.length === 1) {
            return as;
        }
        const out = [
            head(as)
        ];
        const rest = tail(as);
        for (const a of rest){
            if (out.every((o)=>!E.equals(o, a))) {
                out.push(a);
            }
        }
        return out;
    };
const sortBy = (ords)=>{
    if (isNonEmpty(ords)) {
        const M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Ord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonoid"])();
        return sort(ords.reduce(M.concat, M.empty));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
};
const union = (E)=>{
    const uniqE = uniq(E);
    return (second)=>(first)=>uniqE((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(first, concat(second)));
};
const rotate = (n)=>(as)=>{
        const len = as.length;
        const m = Math.round(n) % len;
        if (isOutOfBound(Math.abs(m), as) || m === 0) {
            return as;
        }
        if (m < 0) {
            const [f, s] = splitAt(-m)(as);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(s, concat(f));
        } else {
            return rotate(m - len)(as);
        }
    };
const fromReadonlyArray = (as)=>isNonEmpty(as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](as) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
const makeBy = (f)=>(n)=>{
        const j = Math.max(0, Math.floor(n));
        const out = [
            f(0)
        ];
        for(let i = 1; i < j; i++){
            out.push(f(i));
        }
        return out;
    };
const replicate = (a)=>makeBy(()=>a);
const range = (start, end)=>start <= end ? makeBy((i)=>start + i)(end - start + 1) : [
        start
    ];
const unprepend = (as)=>[
        head(as),
        tail(as)
    ];
const unappend = (as)=>[
        init(as),
        last(as)
    ];
const fromArray = (as)=>fromReadonlyArray(as.slice());
function concatW(second) {
    return (first)=>first.concat(second);
}
function concat(x, y) {
    return y ? x.concat(y) : (y)=>y.concat(x);
}
const reverse = (as)=>as.length === 1 ? as : [
        last(as),
        ...as.slice(0, -1).reverse()
    ];
function group(E) {
    return (as)=>{
        const len = as.length;
        if (len === 0) {
            return empty;
        }
        const out = [];
        let head = as[0];
        let nea = [
            head
        ];
        for(let i = 1; i < len; i++){
            const a = as[i];
            if (E.equals(a, head)) {
                nea.push(a);
            } else {
                out.push(nea);
                head = a;
                nea = [
                    head
                ];
            }
        }
        out.push(nea);
        return out;
    };
}
const groupBy = (f)=>(as)=>{
        const out = {};
        for (const a of as){
            const k = f(a);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(out, k)) {
                out[k].push(a);
            } else {
                out[k] = [
                    a
                ];
            }
        }
        return out;
    };
const sort = (O)=>(as)=>as.length === 1 ? as : as.slice().sort(O.compare);
const updateAt = (i, a)=>modifyAt(i, ()=>a);
const modifyAt = (i, f)=>(as)=>isOutOfBound(i, as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](unsafeUpdateAt(i, f(as[i]), as));
const zipWith = (as, bs, f)=>{
    const cs = [
        f(as[0], bs[0])
    ];
    const len = Math.min(as.length, bs.length);
    for(let i = 1; i < len; i++){
        cs[i] = f(as[i], bs[i]);
    }
    return cs;
};
function zip(as, bs) {
    if (bs === undefined) {
        return (bs)=>zip(bs, as);
    }
    return zipWith(as, bs, (a, b)=>[
            a,
            b
        ]);
}
const unzip = (abs)=>{
    const fa = [
        abs[0][0]
    ];
    const fb = [
        abs[0][1]
    ];
    for(let i = 1; i < abs.length; i++){
        fa[i] = abs[i][0];
        fb[i] = abs[i][1];
    }
    return [
        fa,
        fb
    ];
};
const prependAll = (middle)=>(as)=>{
        const out = [
            middle,
            as[0]
        ];
        for(let i = 1; i < as.length; i++){
            out.push(middle, as[i]);
        }
        return out;
    };
const intersperse = (middle)=>(as)=>{
        const rest = tail(as);
        return isNonEmpty(rest) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(rest, prependAll(middle), prepend(head(as))) : as;
    };
const chainWithIndex = (f)=>(as)=>{
        const out = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromReadonlyNonEmptyArray"](f(0, head(as)));
        for(let i = 1; i < as.length; i++){
            const bs = f(i, as[i]);
            for(let j = 0; j < bs.length; j++){
                out.push(bs[j]);
            }
        }
        return out;
    };
const chop = (f)=>(as)=>{
        const [b, rest] = f(as);
        const out = [
            b
        ];
        let next = rest;
        while(isNonEmpty(next)){
            const [b, rest] = f(next);
            out.push(b);
            next = rest;
        }
        return out;
    };
const splitAt = (n)=>(as)=>{
        const m = Math.max(1, n);
        return m >= as.length ? [
            as,
            empty
        ] : [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(as.slice(1, m), prepend(head(as))),
            as.slice(m)
        ];
    };
const chunksOf = (n)=>chop(splitAt(n));
const _map = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f));
/* istanbul ignore next */ const _mapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, mapWithIndex(f));
const _ap = (fab, fa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fab, ap(fa));
/* istanbul ignore next */ const _extend = (wa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(wa, extend(f));
/* istanbul ignore next */ const _reduce = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduce(b, f));
/* istanbul ignore next */ const _foldMap = (M)=>{
    const foldMapM = foldMap(M);
    return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapM(f));
};
/* istanbul ignore next */ const _reduceRight = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRight(b, f));
/* istanbul ignore next */ const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseF(f));
};
/* istanbul ignore next */ const _alt = (fa, that)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, alt(that));
/* istanbul ignore next */ const _reduceWithIndex = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceWithIndex(b, f));
/* istanbul ignore next */ const _foldMapWithIndex = (M)=>{
    const foldMapWithIndexM = foldMapWithIndex(M);
    return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapWithIndexM(f));
};
/* istanbul ignore next */ const _reduceRightWithIndex = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRightWithIndex(b, f));
/* istanbul ignore next */ const _traverseWithIndex = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseWithIndexF(f));
};
const of = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["singleton"];
const altW = (that)=>(as)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(as, concatW(that()));
const alt = altW;
const ap = (as)=>flatMap((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(as, map(f)));
const flatMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (ma, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ma, chainWithIndex((i, a)=>f(a, i))));
const extend = (f)=>(as)=>{
        let next = tail(as);
        const out = [
            f(as)
        ];
        while(isNonEmpty(next)){
            out.push(f(next));
            next = tail(next);
        }
        return out;
    };
const duplicate = /*#__PURE__*/ extend(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const flatten = /*#__PURE__*/ flatMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const map = (f)=>mapWithIndex((_, a)=>f(a));
const mapWithIndex = (f)=>(as)=>{
        const out = [
            f(0, head(as))
        ];
        for(let i = 1; i < as.length; i++){
            out.push(f(i, as[i]));
        }
        return out;
    };
const reduce = (b, f)=>reduceWithIndex(b, (_, b, a)=>f(b, a));
const foldMap = (S)=>(f)=>(as)=>as.slice(1).reduce((s, a)=>S.concat(s, f(a)), f(as[0]));
const reduceRight = (b, f)=>reduceRightWithIndex(b, (_, b, a)=>f(b, a));
const reduceWithIndex = (b, f)=>(as)=>as.reduce((b, a, i)=>f(i, b, a), b);
const foldMapWithIndex = (S)=>(f)=>(as)=>as.slice(1).reduce((s, a, i)=>S.concat(s, f(i + 1, a)), f(0, as[0]));
const reduceRightWithIndex = (b, f)=>(as)=>as.reduceRight((b, a, i)=>f(i, a, b), b);
const traverse = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (f)=>traverseWithIndexF((_, a)=>f(a));
};
const sequence = (F)=>traverseWithIndex(F)(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SK"]);
const traverseWithIndex = (F)=>(f)=>(as)=>{
            let out = F.map(f(0, head(as)), of);
            for(let i = 1; i < as.length; i++){
                out = F.ap(F.map(out, (bs)=>(b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(bs, append(b))), f(i, as[i]));
            }
            return out;
        };
const extract = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["head"];
const URI = 'ReadonlyNonEmptyArray';
const getShow = (S)=>({
        show: (as)=>`[${as.map(S.show).join(', ')}]`
    });
const getSemigroup = ()=>({
        concat
    });
const getEq = (E)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEquals"])((xs, ys)=>xs.length === ys.length && xs.every((x, i)=>E.equals(x, ys[i])));
const getUnionSemigroup = (E)=>{
    const unionE = union(E);
    return {
        concat: (first, second)=>unionE(second)(first)
    };
};
const Functor = {
    URI,
    map: _map
};
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const Pointed = {
    URI,
    of
};
const FunctorWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const apFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apFirst"])(Apply);
const apSecond = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apSecond"])(Apply);
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of
};
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
const chainFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chainFirst"])(Chain);
const Monad = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap
};
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const FoldableWithIndex = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const TraversableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex
};
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const Comonad = {
    URI,
    map: _map,
    extend: _extend,
    extract
};
const Do = /*#__PURE__*/ of(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRecord"]);
const bindTo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindTo"])(Functor);
const let_ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["let"])(Functor);
;
const bind = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(Chain);
const apS = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apS"])(Apply);
const head = extract;
const tail = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tail"];
const last = (as)=>as[as.length - 1];
const init = (as)=>as.slice(0, -1);
const min = (O)=>{
    const S = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"](O);
    return (as)=>as.reduce(S.concat);
};
const max = (O)=>{
    const S = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](O);
    return (as)=>as.reduce(S.concat);
};
const concatAll = (S)=>(as)=>as.reduce(S.concat);
const matchLeft = (f)=>(as)=>f(head(as), tail(as));
const matchRight = (f)=>(as)=>f(init(as), last(as));
const modifyHead = (f)=>(as)=>[
            f(head(as)),
            ...tail(as)
        ];
const updateHead = (a)=>modifyHead(()=>a);
const modifyLast = (f)=>(as)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(init(as), append(f(last(as))));
const updateLast = (a)=>modifyLast(()=>a);
const intercalate = (S)=>{
    const concatAllS = concatAll(S);
    return (middle)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(intersperse(middle), concatAllS);
};
const chain = flatMap;
function groupSort(O) {
    const sortO = sort(O);
    const groupO = group(O);
    return (as)=>isNonEmpty(as) ? groupO(sortO(as)) : empty;
}
function filter(predicate) {
    return filterWithIndex((_, a)=>predicate(a));
}
const filterWithIndex = (predicate)=>(as)=>fromReadonlyArray(as.filter((a, i)=>predicate(i, a)));
const uncons = unprepend;
const unsnoc = unappend;
function cons(head, tail) {
    return tail === undefined ? prepend(head) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(tail, prepend(head));
}
const snoc = (init, end)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(init, concat([
        end
    ]));
const insertAt = (i, a)=>(as)=>i < 0 || i > as.length ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](unsafeInsertAt(i, a, as));
const prependToAll = prependAll;
const fold = concatAll;
const readonlyNonEmptyArray = {
    URI,
    of,
    map: _map,
    mapWithIndex: _mapWithIndex,
    ap: _ap,
    chain: flatMap,
    extend: _extend,
    extract: extract,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    alt: _alt
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/NonEmptyArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alt",
    ()=>Alt,
    "Applicative",
    ()=>Applicative,
    "Apply",
    ()=>Apply,
    "Chain",
    ()=>Chain,
    "Comonad",
    ()=>Comonad,
    "Do",
    ()=>Do,
    "Foldable",
    ()=>Foldable,
    "FoldableWithIndex",
    ()=>FoldableWithIndex,
    "Functor",
    ()=>Functor,
    "FunctorWithIndex",
    ()=>FunctorWithIndex,
    "Monad",
    ()=>Monad,
    "Pointed",
    ()=>Pointed,
    "Traversable",
    ()=>Traversable,
    "TraversableWithIndex",
    ()=>TraversableWithIndex,
    "URI",
    ()=>URI,
    "alt",
    ()=>alt,
    "altW",
    ()=>altW,
    "ap",
    ()=>ap,
    "apFirst",
    ()=>apFirst,
    "apS",
    ()=>apS,
    "apSecond",
    ()=>apSecond,
    "append",
    ()=>append,
    "appendW",
    ()=>appendW,
    "bind",
    ()=>bind,
    "bindTo",
    ()=>bindTo,
    "chain",
    ()=>chain,
    "chainFirst",
    ()=>chainFirst,
    "chainWithIndex",
    ()=>chainWithIndex,
    "chop",
    ()=>chop,
    "chunksOf",
    ()=>chunksOf,
    "concat",
    ()=>concat,
    "concatAll",
    ()=>concatAll,
    "concatW",
    ()=>concatW,
    "cons",
    ()=>cons,
    "copy",
    ()=>copy,
    "duplicate",
    ()=>duplicate,
    "extend",
    ()=>extend,
    "extract",
    ()=>extract,
    "filter",
    ()=>filter,
    "filterWithIndex",
    ()=>filterWithIndex,
    "flap",
    ()=>flap,
    "flatMap",
    ()=>flatMap,
    "flatten",
    ()=>flatten,
    "fold",
    ()=>fold,
    "foldMap",
    ()=>foldMap,
    "foldMapWithIndex",
    ()=>foldMapWithIndex,
    "fromArray",
    ()=>fromArray,
    "fromReadonlyNonEmptyArray",
    ()=>fromReadonlyNonEmptyArray,
    "getEq",
    ()=>getEq,
    "getSemigroup",
    ()=>getSemigroup,
    "getShow",
    ()=>getShow,
    "getUnionSemigroup",
    ()=>getUnionSemigroup,
    "group",
    ()=>group,
    "groupBy",
    ()=>groupBy,
    "groupSort",
    ()=>groupSort,
    "head",
    ()=>head,
    "init",
    ()=>init,
    "insertAt",
    ()=>insertAt,
    "intercalate",
    ()=>intercalate,
    "intersperse",
    ()=>intersperse,
    "isNonEmpty",
    ()=>isNonEmpty,
    "isOutOfBound",
    ()=>isOutOfBound,
    "last",
    ()=>last,
    "let",
    ()=>let_,
    "makeBy",
    ()=>makeBy,
    "map",
    ()=>map,
    "mapWithIndex",
    ()=>mapWithIndex,
    "matchLeft",
    ()=>matchLeft,
    "matchRight",
    ()=>matchRight,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "modifyAt",
    ()=>modifyAt,
    "modifyHead",
    ()=>modifyHead,
    "modifyLast",
    ()=>modifyLast,
    "nonEmptyArray",
    ()=>nonEmptyArray,
    "of",
    ()=>of,
    "prepend",
    ()=>prepend,
    "prependAll",
    ()=>prependAll,
    "prependToAll",
    ()=>prependToAll,
    "prependW",
    ()=>prependW,
    "range",
    ()=>range,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "reduceRightWithIndex",
    ()=>reduceRightWithIndex,
    "reduceWithIndex",
    ()=>reduceWithIndex,
    "replicate",
    ()=>replicate,
    "reverse",
    ()=>reverse,
    "rotate",
    ()=>rotate,
    "sequence",
    ()=>sequence,
    "snoc",
    ()=>snoc,
    "sort",
    ()=>sort,
    "sortBy",
    ()=>sortBy,
    "splitAt",
    ()=>splitAt,
    "tail",
    ()=>tail,
    "traverse",
    ()=>traverse,
    "traverseWithIndex",
    ()=>traverseWithIndex,
    "unappend",
    ()=>unappend,
    "uncons",
    ()=>uncons,
    "union",
    ()=>union,
    "uniq",
    ()=>uniq,
    "unprepend",
    ()=>unprepend,
    "unsafeInsertAt",
    ()=>unsafeInsertAt,
    "unsafeUpdateAt",
    ()=>unsafeUpdateAt,
    "unsnoc",
    ()=>unsnoc,
    "unzip",
    ()=>unzip,
    "updateAt",
    ()=>updateAt,
    "updateHead",
    ()=>updateHead,
    "updateLast",
    ()=>updateLast,
    "zip",
    ()=>zip,
    "zipWith",
    ()=>zipWith
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Apply.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Ord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Ord.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyNonEmptyArray.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const isNonEmpty = (as)=>as.length > 0;
const isOutOfBound = (i, as)=>i < 0 || i >= as.length;
const prependW = (head)=>(tail)=>[
            head,
            ...tail
        ];
const prepend = prependW;
const appendW = (end)=>(init)=>[
            ...init,
            end
        ];
const append = appendW;
const unsafeInsertAt = (i, a, as)=>{
    if (isNonEmpty(as)) {
        const xs = fromReadonlyNonEmptyArray(as);
        xs.splice(i, 0, a);
        return xs;
    }
    return [
        a
    ];
};
const unsafeUpdateAt = (i, a, as)=>{
    const xs = fromReadonlyNonEmptyArray(as);
    xs[i] = a;
    return xs;
};
const uniq = (E)=>(as)=>{
        if (as.length === 1) {
            return copy(as);
        }
        const out = [
            head(as)
        ];
        const rest = tail(as);
        for (const a of rest){
            if (out.every((o)=>!E.equals(o, a))) {
                out.push(a);
            }
        }
        return out;
    };
const sortBy = (ords)=>{
    if (isNonEmpty(ords)) {
        const M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Ord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonoid"])();
        return sort(ords.reduce(M.concat, M.empty));
    }
    return copy;
};
const union = (E)=>{
    const uniqE = uniq(E);
    return (second)=>(first)=>uniqE((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(first, concat(second)));
};
const rotate = (n)=>(as)=>{
        const len = as.length;
        const m = Math.round(n) % len;
        if (isOutOfBound(Math.abs(m), as) || m === 0) {
            return copy(as);
        }
        if (m < 0) {
            const [f, s] = splitAt(-m)(as);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(s, concat(f));
        } else {
            return rotate(m - len)(as);
        }
    };
const fromReadonlyNonEmptyArray = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromReadonlyNonEmptyArray"];
const fromArray = (as)=>isNonEmpty(as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](as) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
const makeBy = (f)=>(n)=>{
        const j = Math.max(0, Math.floor(n));
        const out = [
            f(0)
        ];
        for(let i = 1; i < j; i++){
            out.push(f(i));
        }
        return out;
    };
const replicate = (a)=>makeBy(()=>a);
const range = (start, end)=>start <= end ? makeBy((i)=>start + i)(end - start + 1) : [
        start
    ];
const unprepend = (as)=>[
        head(as),
        tail(as)
    ];
const unappend = (as)=>[
        init(as),
        last(as)
    ];
function concatW(second) {
    return (first)=>first.concat(second);
}
function concat(x, y) {
    return y ? x.concat(y) : (y)=>y.concat(x);
}
const reverse = (as)=>[
        last(as),
        ...as.slice(0, -1).reverse()
    ];
function group(E) {
    return (as)=>{
        const len = as.length;
        if (len === 0) {
            return [];
        }
        const out = [];
        let head = as[0];
        let nea = [
            head
        ];
        for(let i = 1; i < len; i++){
            const a = as[i];
            if (E.equals(a, head)) {
                nea.push(a);
            } else {
                out.push(nea);
                head = a;
                nea = [
                    head
                ];
            }
        }
        out.push(nea);
        return out;
    };
}
const groupBy = (f)=>(as)=>{
        const out = {};
        for (const a of as){
            const k = f(a);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(out, k)) {
                out[k].push(a);
            } else {
                out[k] = [
                    a
                ];
            }
        }
        return out;
    };
const sort = (O)=>(as)=>as.slice().sort(O.compare);
const insertAt = (i, a)=>(as)=>i < 0 || i > as.length ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](unsafeInsertAt(i, a, as));
const updateAt = (i, a)=>modifyAt(i, ()=>a);
const modifyAt = (i, f)=>(as)=>isOutOfBound(i, as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](unsafeUpdateAt(i, f(as[i]), as));
const copy = fromReadonlyNonEmptyArray;
const of = (a)=>[
        a
    ];
const zipWith = (as, bs, f)=>{
    const cs = [
        f(as[0], bs[0])
    ];
    const len = Math.min(as.length, bs.length);
    for(let i = 1; i < len; i++){
        cs[i] = f(as[i], bs[i]);
    }
    return cs;
};
function zip(as, bs) {
    if (bs === undefined) {
        return (bs)=>zip(bs, as);
    }
    return zipWith(as, bs, (a, b)=>[
            a,
            b
        ]);
}
const unzip = (abs)=>{
    const fa = [
        abs[0][0]
    ];
    const fb = [
        abs[0][1]
    ];
    for(let i = 1; i < abs.length; i++){
        fa[i] = abs[i][0];
        fb[i] = abs[i][1];
    }
    return [
        fa,
        fb
    ];
};
const prependAll = (middle)=>(as)=>{
        const out = [
            middle,
            as[0]
        ];
        for(let i = 1; i < as.length; i++){
            out.push(middle, as[i]);
        }
        return out;
    };
const intersperse = (middle)=>(as)=>{
        const rest = tail(as);
        return isNonEmpty(rest) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(rest, prependAll(middle), prepend(head(as))) : copy(as);
    };
const foldMapWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foldMapWithIndex"];
const foldMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foldMap"];
const chainWithIndex = (f)=>(as)=>{
        const out = fromReadonlyNonEmptyArray(f(0, head(as)));
        for(let i = 1; i < as.length; i++){
            const bs = f(i, as[i]);
            for(let j = 0; j < bs.length; j++){
                out.push(bs[j]);
            }
        }
        return out;
    };
const chop = (f)=>(as)=>{
        const [b, rest] = f(as);
        const out = [
            b
        ];
        let next = rest;
        while(isNonEmpty(next)){
            const [b, rest] = f(next);
            out.push(b);
            next = rest;
        }
        return out;
    };
const splitAt = (n)=>(as)=>{
        const m = Math.max(1, n);
        return m >= as.length ? [
            copy(as),
            []
        ] : [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(as.slice(1, m), prepend(head(as))),
            as.slice(m)
        ];
    };
const chunksOf = (n)=>chop(splitAt(n));
/* istanbul ignore next */ const _map = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f));
/* istanbul ignore next */ const _mapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, mapWithIndex(f));
/* istanbul ignore next */ const _ap = (fab, fa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fab, ap(fa));
/* istanbul ignore next */ const _extend = (wa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(wa, extend(f));
/* istanbul ignore next */ const _reduce = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduce(b, f));
/* istanbul ignore next */ const _foldMap = (M)=>{
    const foldMapM = foldMap(M);
    return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapM(f));
};
/* istanbul ignore next */ const _reduceRight = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRight(b, f));
/* istanbul ignore next */ const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseF(f));
};
/* istanbul ignore next */ const _alt = (fa, that)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, alt(that));
/* istanbul ignore next */ const _reduceWithIndex = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceWithIndex(b, f));
/* istanbul ignore next */ const _foldMapWithIndex = (M)=>{
    const foldMapWithIndexM = foldMapWithIndex(M);
    return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapWithIndexM(f));
};
/* istanbul ignore next */ const _reduceRightWithIndex = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRightWithIndex(b, f));
/* istanbul ignore next */ const _traverseWithIndex = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseWithIndexF(f));
};
const altW = (that)=>(as)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(as, concatW(that()));
const alt = altW;
const ap = (as)=>flatMap((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(as, map(f)));
const flatMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (ma, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ma, chainWithIndex((i, a)=>f(a, i))));
const extend = (f)=>(as)=>{
        let next = tail(as);
        const out = [
            f(as)
        ];
        while(isNonEmpty(next)){
            out.push(f(next));
            next = tail(next);
        }
        return out;
    };
const duplicate = /*#__PURE__*/ extend(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const flatten = /*#__PURE__*/ flatMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const map = (f)=>mapWithIndex((_, a)=>f(a));
const mapWithIndex = (f)=>(as)=>{
        const out = [
            f(0, head(as))
        ];
        for(let i = 1; i < as.length; i++){
            out.push(f(i, as[i]));
        }
        return out;
    };
const reduce = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"];
const reduceWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceWithIndex"];
const reduceRight = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRight"];
const reduceRightWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRightWithIndex"];
const traverse = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (f)=>traverseWithIndexF((_, a)=>f(a));
};
const sequence = (F)=>traverseWithIndex(F)((_, a)=>a);
const traverseWithIndex = (F)=>(f)=>(as)=>{
            let out = F.map(f(0, head(as)), of);
            for(let i = 1; i < as.length; i++){
                out = F.ap(F.map(out, (bs)=>(b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(bs, append(b))), f(i, as[i]));
            }
            return out;
        };
const extract = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["head"];
const URI = 'NonEmptyArray';
const getShow = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShow"];
const getSemigroup = ()=>({
        concat
    });
const getEq = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEq"];
const getUnionSemigroup = (E)=>{
    const unionE = union(E);
    return {
        concat: (first, second)=>unionE(second)(first)
    };
};
const Functor = {
    URI,
    map: _map
};
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const Pointed = {
    URI,
    of
};
const FunctorWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const apFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apFirst"])(Apply);
const apSecond = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apSecond"])(Apply);
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of
};
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
const chainFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chainFirst"])(Chain);
const Monad = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap
};
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const FoldableWithIndex = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const TraversableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex
};
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const Comonad = {
    URI,
    map: _map,
    extend: _extend,
    extract
};
const Do = /*#__PURE__*/ of(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRecord"]);
const bindTo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindTo"])(Functor);
const let_ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["let"])(Functor);
;
const bind = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(Chain);
const apS = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apS"])(Apply);
const head = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["head"];
const tail = (as)=>as.slice(1);
const last = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"];
const init = (as)=>as.slice(0, -1);
const min = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"];
const max = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"];
const concatAll = (S)=>(as)=>as.reduce(S.concat);
const matchLeft = (f)=>(as)=>f(head(as), tail(as));
const matchRight = (f)=>(as)=>f(init(as), last(as));
const modifyHead = (f)=>(as)=>[
            f(head(as)),
            ...tail(as)
        ];
const updateHead = (a)=>modifyHead(()=>a);
const modifyLast = (f)=>(as)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(init(as), append(f(last(as))));
const updateLast = (a)=>modifyLast(()=>a);
const intercalate = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intercalate"];
const chain = flatMap;
function groupSort(O) {
    const sortO = sort(O);
    const groupO = group(O);
    return (as)=>isNonEmpty(as) ? groupO(sortO(as)) : [];
}
function filter(predicate) {
    return filterWithIndex((_, a)=>predicate(a));
}
const filterWithIndex = (predicate)=>(as)=>fromArray(as.filter((a, i)=>predicate(i, a)));
const uncons = unprepend;
const unsnoc = unappend;
function cons(head, tail) {
    return tail === undefined ? prepend(head) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(tail, prepend(head));
}
const snoc = (init, end)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(init, append(end));
const prependToAll = prependAll;
const fold = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatAll"];
const nonEmptyArray = {
    URI,
    of,
    map: _map,
    mapWithIndex: _mapWithIndex,
    ap: _ap,
    chain: flatMap,
    extend: _extend,
    extract: extract,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    alt: _alt
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/number.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------
/**
 * @category refinements
 * @since 2.11.0
 */ __turbopack_context__.s([
    "Bounded",
    ()=>Bounded,
    "Eq",
    ()=>Eq,
    "Field",
    ()=>Field,
    "MagmaSub",
    ()=>MagmaSub,
    "MonoidProduct",
    ()=>MonoidProduct,
    "MonoidSum",
    ()=>MonoidSum,
    "Ord",
    ()=>Ord,
    "SemigroupProduct",
    ()=>SemigroupProduct,
    "SemigroupSum",
    ()=>SemigroupSum,
    "Show",
    ()=>Show,
    "isNumber",
    ()=>isNumber
]);
const isNumber = (u)=>typeof u === 'number';
const Eq = {
    equals: (first, second)=>first === second
};
const Ord = {
    equals: Eq.equals,
    compare: (first, second)=>first < second ? -1 : first > second ? 1 : 0
};
const Bounded = {
    equals: Eq.equals,
    compare: Ord.compare,
    top: Infinity,
    bottom: -Infinity
};
const Show = {
    show: (n)=>JSON.stringify(n)
};
const MagmaSub = {
    concat: (first, second)=>first - second
};
const SemigroupSum = {
    concat: (first, second)=>first + second
};
const SemigroupProduct = {
    concat: (first, second)=>first * second
};
const MonoidSum = {
    concat: SemigroupSum.concat,
    empty: 0
};
const MonoidProduct = {
    concat: SemigroupProduct.concat,
    empty: 1
};
const Field = {
    add: SemigroupSum.concat,
    zero: 0,
    mul: SemigroupProduct.concat,
    one: 1,
    sub: MagmaSub.concat,
    degree: (_)=>1,
    div: (first, second)=>first / second,
    mod: (first, second)=>first % second
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Separated.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bifunctor",
    ()=>Bifunctor,
    "Functor",
    ()=>Functor,
    "URI",
    ()=>URI,
    "bimap",
    ()=>bimap,
    "flap",
    ()=>flap,
    "left",
    ()=>left,
    "map",
    ()=>map,
    "mapLeft",
    ()=>mapLeft,
    "right",
    ()=>right,
    "separated",
    ()=>separated
]);
/**
 * ```ts
 * interface Separated<E, A> {
 *    readonly left: E
 *    readonly right: A
 * }
 * ```
 *
 * Represents a result of separating a whole into two parts.
 *
 * @since 2.10.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
;
;
const separated = (left, right)=>({
        left,
        right
    });
const _map = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f));
const _mapLeft = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, mapLeft(f));
const _bimap = (fa, g, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, bimap(g, f));
const map = (f)=>(fa)=>separated(left(fa), f(right(fa)));
const mapLeft = (f)=>(fa)=>separated(f(left(fa)), right(fa));
const bimap = (f, g)=>(fa)=>separated(f(left(fa)), g(right(fa)));
const URI = 'Separated';
const Bifunctor = {
    URI,
    mapLeft: _mapLeft,
    bimap: _bimap
};
const Functor = {
    URI,
    map: _map
};
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const left = (s)=>s.left;
const right = (s)=>s.right;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Witherable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterE",
    ()=>filterE,
    "wiltDefault",
    ()=>wiltDefault,
    "witherDefault",
    ()=>witherDefault
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
;
function wiltDefault(T, C) {
    return (F)=>{
        const traverseF = T.traverse(F);
        return (wa, f)=>F.map(traverseF(wa, f), C.separate);
    };
}
function witherDefault(T, C) {
    return (F)=>{
        const traverseF = T.traverse(F);
        return (wa, f)=>F.map(traverseF(wa, f), C.compact);
    };
}
function filterE(W) {
    return (F)=>{
        const witherF = W.wither(F);
        return (predicate)=>(ga)=>witherF(ga, (a)=>F.map(predicate(a), (b)=>b ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](a) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"]));
    };
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Zero.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "guard",
    ()=>guard
]);
function guard(F, P) {
    return (b)=>b ? P.of(undefined) : F.zero();
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alt",
    ()=>Alt,
    "Alternative",
    ()=>Alternative,
    "Applicative",
    ()=>Applicative,
    "Apply",
    ()=>Apply,
    "Chain",
    ()=>Chain,
    "ChainRecBreadthFirst",
    ()=>ChainRecBreadthFirst,
    "ChainRecDepthFirst",
    ()=>ChainRecDepthFirst,
    "Compactable",
    ()=>Compactable,
    "Do",
    ()=>Do,
    "Extend",
    ()=>Extend,
    "Filterable",
    ()=>Filterable,
    "FilterableWithIndex",
    ()=>FilterableWithIndex,
    "Foldable",
    ()=>Foldable,
    "FoldableWithIndex",
    ()=>FoldableWithIndex,
    "FromEither",
    ()=>FromEither,
    "Functor",
    ()=>Functor,
    "FunctorWithIndex",
    ()=>FunctorWithIndex,
    "Monad",
    ()=>Monad,
    "Pointed",
    ()=>Pointed,
    "Traversable",
    ()=>Traversable,
    "TraversableWithIndex",
    ()=>TraversableWithIndex,
    "URI",
    ()=>URI,
    "Unfoldable",
    ()=>Unfoldable,
    "Witherable",
    ()=>Witherable,
    "Zero",
    ()=>Zero,
    "_chainRecBreadthFirst",
    ()=>_chainRecBreadthFirst,
    "_chainRecDepthFirst",
    ()=>_chainRecDepthFirst,
    "alt",
    ()=>alt,
    "altW",
    ()=>altW,
    "ap",
    ()=>ap,
    "apFirst",
    ()=>apFirst,
    "apS",
    ()=>apS,
    "apSecond",
    ()=>apSecond,
    "append",
    ()=>append,
    "appendW",
    ()=>appendW,
    "bind",
    ()=>bind,
    "bindTo",
    ()=>bindTo,
    "chain",
    ()=>chain,
    "chainFirst",
    ()=>chainFirst,
    "chainRecBreadthFirst",
    ()=>chainRecBreadthFirst,
    "chainRecDepthFirst",
    ()=>chainRecDepthFirst,
    "chainWithIndex",
    ()=>chainWithIndex,
    "chop",
    ()=>chop,
    "chunksOf",
    ()=>chunksOf,
    "compact",
    ()=>compact,
    "comprehension",
    ()=>comprehension,
    "concat",
    ()=>concat,
    "concatW",
    ()=>concatW,
    "cons",
    ()=>cons,
    "deleteAt",
    ()=>deleteAt,
    "difference",
    ()=>difference,
    "dropLeft",
    ()=>dropLeft,
    "dropLeftWhile",
    ()=>dropLeftWhile,
    "dropRight",
    ()=>dropRight,
    "duplicate",
    ()=>duplicate,
    "elem",
    ()=>elem,
    "empty",
    ()=>empty,
    "every",
    ()=>every,
    "exists",
    ()=>exists,
    "extend",
    ()=>extend,
    "filter",
    ()=>filter,
    "filterE",
    ()=>filterE,
    "filterMap",
    ()=>filterMap,
    "filterMapWithIndex",
    ()=>filterMapWithIndex,
    "filterWithIndex",
    ()=>filterWithIndex,
    "findFirst",
    ()=>findFirst,
    "findFirstMap",
    ()=>findFirstMap,
    "findIndex",
    ()=>findIndex,
    "findLast",
    ()=>findLast,
    "findLastIndex",
    ()=>findLastIndex,
    "findLastMap",
    ()=>findLastMap,
    "flap",
    ()=>flap,
    "flatMap",
    ()=>flatMap,
    "flatten",
    ()=>flatten,
    "foldLeft",
    ()=>foldLeft,
    "foldMap",
    ()=>foldMap,
    "foldMapWithIndex",
    ()=>foldMapWithIndex,
    "foldRight",
    ()=>foldRight,
    "fromArray",
    ()=>fromArray,
    "fromEither",
    ()=>fromEither,
    "fromEitherK",
    ()=>fromEitherK,
    "fromOption",
    ()=>fromOption,
    "fromOptionK",
    ()=>fromOptionK,
    "fromPredicate",
    ()=>fromPredicate,
    "getDifferenceMagma",
    ()=>getDifferenceMagma,
    "getEq",
    ()=>getEq,
    "getIntersectionSemigroup",
    ()=>getIntersectionSemigroup,
    "getMonoid",
    ()=>getMonoid,
    "getOrd",
    ()=>getOrd,
    "getSemigroup",
    ()=>getSemigroup,
    "getShow",
    ()=>getShow,
    "getUnionMonoid",
    ()=>getUnionMonoid,
    "getUnionSemigroup",
    ()=>getUnionSemigroup,
    "guard",
    ()=>guard,
    "head",
    ()=>head,
    "init",
    ()=>init,
    "insertAt",
    ()=>insertAt,
    "intercalate",
    ()=>intercalate,
    "intersection",
    ()=>intersection,
    "intersperse",
    ()=>intersperse,
    "isEmpty",
    ()=>isEmpty,
    "isNonEmpty",
    ()=>isNonEmpty,
    "isOutOfBound",
    ()=>isOutOfBound,
    "last",
    ()=>last,
    "lefts",
    ()=>lefts,
    "let",
    ()=>let_,
    "lookup",
    ()=>lookup,
    "makeBy",
    ()=>makeBy,
    "map",
    ()=>map,
    "mapWithIndex",
    ()=>mapWithIndex,
    "match",
    ()=>match,
    "matchLeft",
    ()=>matchLeft,
    "matchLeftW",
    ()=>matchLeftW,
    "matchRight",
    ()=>matchRight,
    "matchRightW",
    ()=>matchRightW,
    "matchW",
    ()=>matchW,
    "modifyAt",
    ()=>modifyAt,
    "of",
    ()=>of,
    "partition",
    ()=>partition,
    "partitionMap",
    ()=>partitionMap,
    "partitionMapWithIndex",
    ()=>partitionMapWithIndex,
    "partitionWithIndex",
    ()=>partitionWithIndex,
    "prepend",
    ()=>prepend,
    "prependAll",
    ()=>prependAll,
    "prependToAll",
    ()=>prependToAll,
    "prependW",
    ()=>prependW,
    "range",
    ()=>range,
    "readonlyArray",
    ()=>readonlyArray,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "reduceRightWithIndex",
    ()=>reduceRightWithIndex,
    "reduceWithIndex",
    ()=>reduceWithIndex,
    "replicate",
    ()=>replicate,
    "reverse",
    ()=>reverse,
    "rights",
    ()=>rights,
    "rotate",
    ()=>rotate,
    "scanLeft",
    ()=>scanLeft,
    "scanRight",
    ()=>scanRight,
    "separate",
    ()=>separate,
    "sequence",
    ()=>sequence,
    "size",
    ()=>size,
    "snoc",
    ()=>snoc,
    "some",
    ()=>some,
    "sort",
    ()=>sort,
    "sortBy",
    ()=>sortBy,
    "spanLeft",
    ()=>spanLeft,
    "splitAt",
    ()=>splitAt,
    "tail",
    ()=>tail,
    "takeLeft",
    ()=>takeLeft,
    "takeLeftWhile",
    ()=>takeLeftWhile,
    "takeRight",
    ()=>takeRight,
    "toArray",
    ()=>toArray,
    "traverse",
    ()=>traverse,
    "traverseWithIndex",
    ()=>traverseWithIndex,
    "unfold",
    ()=>unfold,
    "union",
    ()=>union,
    "uniq",
    ()=>uniq,
    "unsafeDeleteAt",
    ()=>unsafeDeleteAt,
    "unsafeInsertAt",
    ()=>unsafeInsertAt,
    "unsafeUpdateAt",
    ()=>unsafeUpdateAt,
    "unzip",
    ()=>unzip,
    "updateAt",
    ()=>updateAt,
    "wilt",
    ()=>wilt,
    "wither",
    ()=>wither,
    "zero",
    ()=>zero,
    "zip",
    ()=>zip,
    "zipWith",
    ()=>zipWith
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Apply.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Eq.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/FromEither.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Ord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Ord.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyNonEmptyArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Separated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Witherable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Zero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Zero.js [app-client] (ecmascript)");
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
const isEmpty = (as)=>as.length === 0;
const isNonEmpty = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonEmpty"];
const prepend = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepend"];
const prependW = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prependW"];
const append = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"];
const appendW = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendW"];
const makeBy = (n, f)=>n <= 0 ? empty : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeBy"](f)(n);
const replicate = (n, a)=>makeBy(n, ()=>a);
function fromPredicate(predicate) {
    return (a)=>predicate(a) ? [
            a
        ] : empty;
}
const fromOption = (ma)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"](ma) ? empty : [
        ma.value
    ];
const fromEither = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeft"](e) ? empty : [
        e.right
    ];
const matchW = (onEmpty, onNonEmpty)=>(as)=>isNonEmpty(as) ? onNonEmpty(as) : onEmpty();
const match = matchW;
const matchLeftW = (onEmpty, onNonEmpty)=>(as)=>isNonEmpty(as) ? onNonEmpty(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["head"](as), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tail"](as)) : onEmpty();
const matchLeft = matchLeftW;
const foldLeft = matchLeft;
const matchRightW = (onEmpty, onNonEmpty)=>(as)=>isNonEmpty(as) ? onNonEmpty(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"](as), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"](as)) : onEmpty();
const matchRight = matchRightW;
const foldRight = matchRight;
const chainWithIndex = (f)=>(as)=>{
        if (isEmpty(as)) {
            return empty;
        }
        const out = [];
        for(let i = 0; i < as.length; i++){
            const bs = f(i, as[i]);
            for(let j = 0; j < bs.length; j++){
                out.push(bs[j]);
            }
        }
        return out;
    };
const scanLeft = (b, f)=>(as)=>{
        const len = as.length;
        const out = new Array(len + 1);
        out[0] = b;
        for(let i = 0; i < len; i++){
            out[i + 1] = f(out[i], as[i]);
        }
        return out;
    };
const scanRight = (b, f)=>(as)=>{
        const len = as.length;
        const out = new Array(len + 1);
        out[len] = b;
        for(let i = len - 1; i >= 0; i--){
            out[i] = f(as[i], out[i + 1]);
        }
        return out;
    };
const size = (as)=>as.length;
const isOutOfBound = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOutOfBound"];
function lookup(i, as) {
    return as === undefined ? (as)=>lookup(i, as) : isOutOfBound(i, as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](as[i]);
}
const head = (as)=>isNonEmpty(as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["head"](as)) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
const last = (as)=>isNonEmpty(as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"](as)) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
const tail = (as)=>isNonEmpty(as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tail"](as)) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
const init = (as)=>isNonEmpty(as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"](as)) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
const takeLeft = (n)=>(as)=>isOutOfBound(n, as) ? as : n === 0 ? empty : as.slice(0, n);
const takeRight = (n)=>(as)=>isOutOfBound(n, as) ? as : n === 0 ? empty : as.slice(-n);
function takeLeftWhile(predicate) {
    return (as)=>{
        const out = [];
        for (const a of as){
            if (!predicate(a)) {
                break;
            }
            out.push(a);
        }
        const len = out.length;
        return len === as.length ? as : len === 0 ? empty : out;
    };
}
const spanLeftIndex = (as, predicate)=>{
    const l = as.length;
    let i = 0;
    for(; i < l; i++){
        if (!predicate(as[i])) {
            break;
        }
    }
    return i;
};
function spanLeft(predicate) {
    return (as)=>{
        const [init, rest] = splitAt(spanLeftIndex(as, predicate))(as);
        return {
            init,
            rest
        };
    };
}
const dropLeft = (n)=>(as)=>n <= 0 || isEmpty(as) ? as : n >= as.length ? empty : as.slice(n, as.length);
const dropRight = (n)=>(as)=>n <= 0 || isEmpty(as) ? as : n >= as.length ? empty : as.slice(0, as.length - n);
function dropLeftWhile(predicate) {
    return (as)=>{
        const i = spanLeftIndex(as, predicate);
        return i === 0 ? as : i === as.length ? empty : as.slice(i);
    };
}
const findIndex = (predicate)=>(as)=>{
        for(let i = 0; i < as.length; i++){
            if (predicate(as[i])) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](i);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
    };
function findFirst(predicate) {
    return (as)=>{
        for(let i = 0; i < as.length; i++){
            if (predicate(as[i])) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](as[i]);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
    };
}
const findFirstMap = (f)=>(as)=>{
        for(let i = 0; i < as.length; i++){
            const out = f(as[i]);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](out)) {
                return out;
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
    };
function findLast(predicate) {
    return (as)=>{
        for(let i = as.length - 1; i >= 0; i--){
            if (predicate(as[i])) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](as[i]);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
    };
}
const findLastMap = (f)=>(as)=>{
        for(let i = as.length - 1; i >= 0; i--){
            const out = f(as[i]);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](out)) {
                return out;
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
    };
const findLastIndex = (predicate)=>(as)=>{
        for(let i = as.length - 1; i >= 0; i--){
            if (predicate(as[i])) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](i);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
    };
const insertAt = (i, a)=>(as)=>i < 0 || i > as.length ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeInsertAt"](i, a, as));
const updateAt = (i, a)=>modifyAt(i, ()=>a);
const deleteAt = (i)=>(as)=>isOutOfBound(i, as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](unsafeDeleteAt(i, as));
const modifyAt = (i, f)=>(as)=>isOutOfBound(i, as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](unsafeUpdateAt(i, f(as[i]), as));
const reverse = (as)=>as.length <= 1 ? as : as.slice().reverse();
const rights = (as)=>{
    const r = [];
    for(let i = 0; i < as.length; i++){
        const a = as[i];
        if (a._tag === 'Right') {
            r.push(a.right);
        }
    }
    return r;
};
const lefts = (as)=>{
    const r = [];
    for(let i = 0; i < as.length; i++){
        const a = as[i];
        if (a._tag === 'Left') {
            r.push(a.left);
        }
    }
    return r;
};
const sort = (O)=>(as)=>as.length <= 1 ? as : as.slice().sort(O.compare);
const zipWith = (fa, fb, f)=>{
    const fc = [];
    const len = Math.min(fa.length, fb.length);
    for(let i = 0; i < len; i++){
        fc[i] = f(fa[i], fb[i]);
    }
    return fc;
};
function zip(as, bs) {
    if (bs === undefined) {
        return (bs)=>zip(bs, as);
    }
    return zipWith(as, bs, (a, b)=>[
            a,
            b
        ]);
}
const unzip = (as)=>{
    const fa = [];
    const fb = [];
    for(let i = 0; i < as.length; i++){
        fa[i] = as[i][0];
        fb[i] = as[i][1];
    }
    return [
        fa,
        fb
    ];
};
const prependAll = (middle)=>{
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prependAll"](middle);
    return (as)=>isNonEmpty(as) ? f(as) : as;
};
const intersperse = (middle)=>{
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intersperse"](middle);
    return (as)=>isNonEmpty(as) ? f(as) : as;
};
const rotate = (n)=>{
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotate"](n);
    return (as)=>isNonEmpty(as) ? f(as) : as;
};
function elem(E) {
    return (a, as)=>{
        if (as === undefined) {
            const elemE = elem(E);
            return (as)=>elemE(a, as);
        }
        const predicate = (element)=>E.equals(element, a);
        let i = 0;
        for(; i < as.length; i++){
            if (predicate(as[i])) {
                return true;
            }
        }
        return false;
    };
}
const uniq = (E)=>{
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uniq"](E);
    return (as)=>isNonEmpty(as) ? f(as) : as;
};
const sortBy = (ords)=>{
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortBy"](ords);
    return (as)=>isNonEmpty(as) ? f(as) : as;
};
const chop = (f)=>{
    const g = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chop"](f);
    return (as)=>isNonEmpty(as) ? g(as) : empty;
};
const splitAt = (n)=>(as)=>n >= 1 && isNonEmpty(as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitAt"](n)(as) : isEmpty(as) ? [
            as,
            empty
        ] : [
            empty,
            as
        ];
const chunksOf = (n)=>{
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chunksOf"](n);
    return (as)=>isNonEmpty(as) ? f(as) : empty;
};
const fromOptionK = (f)=>(...a)=>fromOption(f(...a));
function comprehension(input, f, g = ()=>true) {
    const go = (scope, input)=>isNonEmpty(input) ? flatMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["head"](input), (a)=>go((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(scope, append(a)), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tail"](input))) : g(...scope) ? [
            f(...scope)
        ] : empty;
    return go(empty, input);
}
const concatW = (second)=>(first)=>isEmpty(first) ? second : isEmpty(second) ? first : first.concat(second);
const concat = concatW;
function union(E) {
    const unionE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"](E);
    return (first, second)=>{
        if (second === undefined) {
            const unionE = union(E);
            return (second)=>unionE(second, first);
        }
        return isNonEmpty(first) && isNonEmpty(second) ? unionE(second)(first) : isNonEmpty(first) ? first : second;
    };
}
function intersection(E) {
    const elemE = elem(E);
    return (xs, ys)=>{
        if (ys === undefined) {
            const intersectionE = intersection(E);
            return (ys)=>intersectionE(ys, xs);
        }
        return xs.filter((a)=>elemE(a, ys));
    };
}
function difference(E) {
    const elemE = elem(E);
    return (xs, ys)=>{
        if (ys === undefined) {
            const differenceE = difference(E);
            return (ys)=>differenceE(ys, xs);
        }
        return xs.filter((a)=>!elemE(a, ys));
    };
}
const _map = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f));
const _mapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, mapWithIndex(f));
const _ap = (fab, fa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fab, ap(fa));
const _filter = (fa, predicate)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filter(predicate));
const _filterMap = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filterMap(f));
const _partition = (fa, predicate)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partition(predicate));
const _partitionMap = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partitionMap(f));
const _partitionWithIndex = (fa, predicateWithIndex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partitionWithIndex(predicateWithIndex));
const _partitionMapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partitionMapWithIndex(f));
const _alt = (fa, that)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, alt(that));
const _reduce = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduce(b, f));
const _foldMap = (M)=>{
    const foldMapM = foldMap(M);
    return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapM(f));
};
const _reduceRight = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRight(b, f));
const _reduceWithIndex = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceWithIndex(b, f));
const _foldMapWithIndex = (M)=>{
    const foldMapWithIndexM = foldMapWithIndex(M);
    return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapWithIndexM(f));
};
const _reduceRightWithIndex = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRightWithIndex(b, f));
const _filterMapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filterMapWithIndex(f));
const _filterWithIndex = (fa, predicateWithIndex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filterWithIndex(predicateWithIndex));
const _extend = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, extend(f));
const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseF(f));
};
/* istanbul ignore next */ const _traverseWithIndex = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseWithIndexF(f));
};
const _chainRecDepthFirst = (a, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(a, chainRecDepthFirst(f));
const _chainRecBreadthFirst = (a, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(a, chainRecBreadthFirst(f));
const of = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["of"];
const zero = ()=>empty;
const altW = (that)=>(fa)=>fa.concat(that());
const alt = altW;
const ap = (fa)=>flatMap((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f)));
const flatMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (ma, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ma, chainWithIndex((i, a)=>f(a, i))));
const flatten = /*#__PURE__*/ flatMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const map = (f)=>(fa)=>fa.map((a)=>f(a));
const mapWithIndex = (f)=>(fa)=>fa.map((a, i)=>f(i, a));
const separate = (fa)=>{
    const left = [];
    const right = [];
    for (const e of fa){
        if (e._tag === 'Left') {
            left.push(e.left);
        } else {
            right.push(e.right);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
};
const filter = (predicate)=>(as)=>as.filter(predicate);
const filterMapWithIndex = (f)=>(fa)=>{
        const out = [];
        for(let i = 0; i < fa.length; i++){
            const optionB = f(i, fa[i]);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](optionB)) {
                out.push(optionB.value);
            }
        }
        return out;
    };
const filterMap = (f)=>filterMapWithIndex((_, a)=>f(a));
const compact = /*#__PURE__*/ filterMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const partition = (predicate)=>partitionWithIndex((_, a)=>predicate(a));
const partitionWithIndex = (predicateWithIndex)=>(as)=>{
        const left = [];
        const right = [];
        for(let i = 0; i < as.length; i++){
            const a = as[i];
            if (predicateWithIndex(i, a)) {
                right.push(a);
            } else {
                left.push(a);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
    };
const partitionMap = (f)=>partitionMapWithIndex((_, a)=>f(a));
const partitionMapWithIndex = (f)=>(fa)=>{
        const left = [];
        const right = [];
        for(let i = 0; i < fa.length; i++){
            const e = f(i, fa[i]);
            if (e._tag === 'Left') {
                left.push(e.left);
            } else {
                right.push(e.right);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
    };
const filterWithIndex = (predicateWithIndex)=>(as)=>as.filter((a, i)=>predicateWithIndex(i, a));
const extend = (f)=>(wa)=>wa.map((_, i)=>f(wa.slice(i)));
const duplicate = /*#__PURE__*/ extend(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const foldMapWithIndex = (M)=>(f)=>(fa)=>fa.reduce((b, a, i)=>M.concat(b, f(i, a)), M.empty);
const reduce = (b, f)=>reduceWithIndex(b, (_, b, a)=>f(b, a));
const foldMap = (M)=>{
    const foldMapWithIndexM = foldMapWithIndex(M);
    return (f)=>foldMapWithIndexM((_, a)=>f(a));
};
const reduceWithIndex = (b, f)=>(fa)=>{
        const len = fa.length;
        let out = b;
        for(let i = 0; i < len; i++){
            out = f(i, out, fa[i]);
        }
        return out;
    };
const reduceRight = (b, f)=>reduceRightWithIndex(b, (_, a, b)=>f(a, b));
const reduceRightWithIndex = (b, f)=>(fa)=>fa.reduceRight((b, a, i)=>f(i, a, b), b);
const traverse = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (f)=>traverseWithIndexF((_, a)=>f(a));
};
const sequence = (F)=>(ta)=>{
        return _reduce(ta, F.of(zero()), (fas, fa)=>F.ap(F.map(fas, (as)=>(a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(as, append(a))), fa));
    };
const traverseWithIndex = (F)=>(f)=>reduceWithIndex(F.of(zero()), (i, fbs, a)=>F.ap(F.map(fbs, (bs)=>(b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(bs, append(b))), f(i, a)));
const wither = (F)=>{
    const _witherF = _wither(F);
    return (f)=>(fa)=>_witherF(fa, f);
};
const wilt = (F)=>{
    const _wiltF = _wilt(F);
    return (f)=>(fa)=>_wiltF(fa, f);
};
const unfold = (b, f)=>{
    const out = [];
    let bb = b;
    // eslint-disable-next-line no-constant-condition
    while(true){
        const mt = f(bb);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](mt)) {
            const [a, b] = mt.value;
            out.push(a);
            bb = b;
        } else {
            break;
        }
    }
    return out;
};
const URI = 'ReadonlyArray';
const getShow = (S)=>({
        show: (as)=>`[${as.map(S.show).join(', ')}]`
    });
const getSemigroup = ()=>({
        concat: (first, second)=>isEmpty(first) ? second : isEmpty(second) ? first : first.concat(second)
    });
const getMonoid = ()=>({
        concat: getSemigroup().concat,
        empty
    });
const getEq = (E)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEquals"])((xs, ys)=>xs.length === ys.length && xs.every((x, i)=>E.equals(x, ys[i])));
const getOrd = (O)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Ord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromCompare"])((a, b)=>{
        const aLen = a.length;
        const bLen = b.length;
        const len = Math.min(aLen, bLen);
        for(let i = 0; i < len; i++){
            const ordering = O.compare(a[i], b[i]);
            if (ordering !== 0) {
                return ordering;
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"].compare(aLen, bLen);
    });
const getUnionSemigroup = (E)=>{
    const unionE = union(E);
    return {
        concat: (first, second)=>unionE(second)(first)
    };
};
const getUnionMonoid = (E)=>({
        concat: getUnionSemigroup(E).concat,
        empty
    });
const getIntersectionSemigroup = (E)=>{
    const intersectionE = intersection(E);
    return {
        concat: (first, second)=>intersectionE(second)(first)
    };
};
const getDifferenceMagma = (E)=>{
    const differenceE = difference(E);
    return {
        concat: (first, second)=>differenceE(second)(first)
    };
};
const Functor = {
    URI,
    map: _map
};
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const Pointed = {
    URI,
    of
};
const FunctorWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const apFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apFirst"])(Apply);
const apSecond = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apSecond"])(Apply);
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of
};
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
const Monad = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap
};
const chainFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chainFirst"])(Chain);
const Unfoldable = {
    URI,
    unfold
};
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const Zero = {
    URI,
    zero
};
const guard = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Zero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guard"])(Zero, Pointed);
const Alternative = {
    URI,
    map: _map,
    ap: _ap,
    of,
    alt: _alt,
    zero
};
const Extend = {
    URI,
    map: _map,
    extend: _extend
};
const Compactable = {
    URI,
    compact,
    separate
};
const Filterable = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
const FilterableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex
};
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const FoldableWithIndex = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const TraversableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverse: _traverse,
    sequence,
    traverseWithIndex: _traverseWithIndex
};
const chainRecDepthFirst = (f)=>(a)=>{
        const todo = [
            ...f(a)
        ];
        const out = [];
        while(todo.length > 0){
            const e = todo.shift();
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeft"](e)) {
                todo.unshift(...f(e.left));
            } else {
                out.push(e.right);
            }
        }
        return out;
    };
const ChainRecDepthFirst = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRecDepthFirst
};
const chainRecBreadthFirst = (f)=>(a)=>{
        const initial = f(a);
        const todo = [];
        const out = [];
        function go(e) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeft"](e)) {
                f(e.left).forEach((v)=>todo.push(v));
            } else {
                out.push(e.right);
            }
        }
        for (const e of initial){
            go(e);
        }
        while(todo.length > 0){
            go(todo.shift());
        }
        return out;
    };
const ChainRecBreadthFirst = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRecBreadthFirst
};
const _wither = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["witherDefault"])(Traversable, Compactable);
const _wilt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wiltDefault"])(Traversable, Compactable);
const Witherable = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    wither: _wither,
    wilt: _wilt
};
const filterE = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterE"])(Witherable);
const FromEither = {
    URI,
    fromEither
};
const fromEitherK = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEitherK"])(FromEither);
const unsafeInsertAt = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeInsertAt"];
const unsafeUpdateAt = (i, a, as)=>isNonEmpty(as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeUpdateAt"](i, a, as) : as;
const unsafeDeleteAt = (i, as)=>{
    const xs = as.slice();
    xs.splice(i, 1);
    return xs;
};
const toArray = (as)=>as.slice();
const fromArray = (as)=>isEmpty(as) ? empty : as.slice();
const empty = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["empty"];
function every(predicate) {
    return (as)=>as.every(predicate);
}
const some = (predicate)=>(as)=>as.some(predicate);
const exists = some;
const intercalate = (M)=>{
    const intercalateM = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intercalate"](M);
    return (middle)=>match(()=>M.empty, intercalateM(middle));
};
const Do = /*#__PURE__*/ of(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRecord"]);
const bindTo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindTo"])(Functor);
const let_ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["let"])(Functor);
;
const bind = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(Chain);
const apS = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apS"])(Apply);
const chain = flatMap;
const range = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"];
const cons = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cons"];
const snoc = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snoc"];
const prependToAll = prependAll;
const readonlyArray = {
    URI,
    compact,
    separate,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    alt: _alt,
    zero,
    unfold,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    extend: _extend,
    wither: _wither,
    wilt: _wilt
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alt",
    ()=>Alt,
    "Alternative",
    ()=>Alternative,
    "Applicative",
    ()=>Applicative,
    "Apply",
    ()=>Apply,
    "Chain",
    ()=>Chain,
    "ChainRecBreadthFirst",
    ()=>ChainRecBreadthFirst,
    "ChainRecDepthFirst",
    ()=>ChainRecDepthFirst,
    "Compactable",
    ()=>Compactable,
    "Do",
    ()=>Do,
    "Extend",
    ()=>Extend,
    "Filterable",
    ()=>Filterable,
    "FilterableWithIndex",
    ()=>FilterableWithIndex,
    "Foldable",
    ()=>Foldable,
    "FoldableWithIndex",
    ()=>FoldableWithIndex,
    "FromEither",
    ()=>FromEither,
    "Functor",
    ()=>Functor,
    "FunctorWithIndex",
    ()=>FunctorWithIndex,
    "Monad",
    ()=>Monad,
    "Pointed",
    ()=>Pointed,
    "Traversable",
    ()=>Traversable,
    "TraversableWithIndex",
    ()=>TraversableWithIndex,
    "URI",
    ()=>URI,
    "Unfoldable",
    ()=>Unfoldable,
    "Witherable",
    ()=>Witherable,
    "Zero",
    ()=>Zero,
    "alt",
    ()=>alt,
    "altW",
    ()=>altW,
    "ap",
    ()=>ap,
    "apFirst",
    ()=>apFirst,
    "apS",
    ()=>apS,
    "apSecond",
    ()=>apSecond,
    "append",
    ()=>append,
    "appendW",
    ()=>appendW,
    "array",
    ()=>array,
    "bind",
    ()=>bind,
    "bindTo",
    ()=>bindTo,
    "chain",
    ()=>chain,
    "chainFirst",
    ()=>chainFirst,
    "chainRecBreadthFirst",
    ()=>chainRecBreadthFirst,
    "chainRecDepthFirst",
    ()=>chainRecDepthFirst,
    "chainWithIndex",
    ()=>chainWithIndex,
    "chop",
    ()=>chop,
    "chunksOf",
    ()=>chunksOf,
    "compact",
    ()=>compact,
    "comprehension",
    ()=>comprehension,
    "concat",
    ()=>concat,
    "concatW",
    ()=>concatW,
    "cons",
    ()=>cons,
    "copy",
    ()=>copy,
    "deleteAt",
    ()=>deleteAt,
    "difference",
    ()=>difference,
    "dropLeft",
    ()=>dropLeft,
    "dropLeftWhile",
    ()=>dropLeftWhile,
    "dropRight",
    ()=>dropRight,
    "duplicate",
    ()=>duplicate,
    "elem",
    ()=>elem,
    "empty",
    ()=>empty,
    "every",
    ()=>every,
    "exists",
    ()=>exists,
    "extend",
    ()=>extend,
    "filter",
    ()=>filter,
    "filterE",
    ()=>filterE,
    "filterMap",
    ()=>filterMap,
    "filterMapWithIndex",
    ()=>filterMapWithIndex,
    "filterWithIndex",
    ()=>filterWithIndex,
    "findFirst",
    ()=>findFirst,
    "findFirstMap",
    ()=>findFirstMap,
    "findIndex",
    ()=>findIndex,
    "findLast",
    ()=>findLast,
    "findLastIndex",
    ()=>findLastIndex,
    "findLastMap",
    ()=>findLastMap,
    "flap",
    ()=>flap,
    "flatMap",
    ()=>flatMap,
    "flatten",
    ()=>flatten,
    "foldLeft",
    ()=>foldLeft,
    "foldMap",
    ()=>foldMap,
    "foldMapWithIndex",
    ()=>foldMapWithIndex,
    "foldRight",
    ()=>foldRight,
    "fromEither",
    ()=>fromEither,
    "fromEitherK",
    ()=>fromEitherK,
    "fromOption",
    ()=>fromOption,
    "fromOptionK",
    ()=>fromOptionK,
    "fromPredicate",
    ()=>fromPredicate,
    "getDifferenceMagma",
    ()=>getDifferenceMagma,
    "getEq",
    ()=>getEq,
    "getIntersectionSemigroup",
    ()=>getIntersectionSemigroup,
    "getMonoid",
    ()=>getMonoid,
    "getOrd",
    ()=>getOrd,
    "getSemigroup",
    ()=>getSemigroup,
    "getShow",
    ()=>getShow,
    "getUnionMonoid",
    ()=>getUnionMonoid,
    "getUnionSemigroup",
    ()=>getUnionSemigroup,
    "guard",
    ()=>guard,
    "head",
    ()=>head,
    "init",
    ()=>init,
    "insertAt",
    ()=>insertAt,
    "intercalate",
    ()=>intercalate,
    "intersection",
    ()=>intersection,
    "intersperse",
    ()=>intersperse,
    "isEmpty",
    ()=>isEmpty,
    "isNonEmpty",
    ()=>isNonEmpty,
    "isOutOfBound",
    ()=>isOutOfBound,
    "last",
    ()=>last,
    "lefts",
    ()=>lefts,
    "let",
    ()=>let_,
    "lookup",
    ()=>lookup,
    "makeBy",
    ()=>makeBy,
    "map",
    ()=>map,
    "mapWithIndex",
    ()=>mapWithIndex,
    "match",
    ()=>match,
    "matchLeft",
    ()=>matchLeft,
    "matchLeftW",
    ()=>matchLeftW,
    "matchRight",
    ()=>matchRight,
    "matchRightW",
    ()=>matchRightW,
    "matchW",
    ()=>matchW,
    "modifyAt",
    ()=>modifyAt,
    "of",
    ()=>of,
    "partition",
    ()=>partition,
    "partitionMap",
    ()=>partitionMap,
    "partitionMapWithIndex",
    ()=>partitionMapWithIndex,
    "partitionWithIndex",
    ()=>partitionWithIndex,
    "prepend",
    ()=>prepend,
    "prependAll",
    ()=>prependAll,
    "prependToAll",
    ()=>prependToAll,
    "prependW",
    ()=>prependW,
    "range",
    ()=>range,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "reduceRightWithIndex",
    ()=>reduceRightWithIndex,
    "reduceWithIndex",
    ()=>reduceWithIndex,
    "replicate",
    ()=>replicate,
    "reverse",
    ()=>reverse,
    "rights",
    ()=>rights,
    "rotate",
    ()=>rotate,
    "scanLeft",
    ()=>scanLeft,
    "scanRight",
    ()=>scanRight,
    "separate",
    ()=>separate,
    "sequence",
    ()=>sequence,
    "size",
    ()=>size,
    "snoc",
    ()=>snoc,
    "some",
    ()=>some,
    "sort",
    ()=>sort,
    "sortBy",
    ()=>sortBy,
    "spanLeft",
    ()=>spanLeft,
    "splitAt",
    ()=>splitAt,
    "tail",
    ()=>tail,
    "takeLeft",
    ()=>takeLeft,
    "takeLeftWhile",
    ()=>takeLeftWhile,
    "takeRight",
    ()=>takeRight,
    "traverse",
    ()=>traverse,
    "traverseWithIndex",
    ()=>traverseWithIndex,
    "unfold",
    ()=>unfold,
    "union",
    ()=>union,
    "uniq",
    ()=>uniq,
    "unsafeDeleteAt",
    ()=>unsafeDeleteAt,
    "unsafeInsertAt",
    ()=>unsafeInsertAt,
    "unsafeUpdateAt",
    ()=>unsafeUpdateAt,
    "unzip",
    ()=>unzip,
    "updateAt",
    ()=>updateAt,
    "wilt",
    ()=>wilt,
    "wither",
    ()=>wither,
    "zero",
    ()=>zero,
    "zip",
    ()=>zip,
    "zipWith",
    ()=>zipWith
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Apply.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/FromEither.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/NonEmptyArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Separated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Witherable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Zero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Zero.js [app-client] (ecmascript)");
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
const isEmpty = (as)=>as.length === 0;
const isNonEmpty = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonEmpty"];
const prepend = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepend"];
const prependW = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prependW"];
const append = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"];
const appendW = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendW"];
const makeBy = (n, f)=>n <= 0 ? [] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeBy"](f)(n);
const replicate = (n, a)=>makeBy(n, ()=>a);
function fromPredicate(predicate) {
    return (a)=>predicate(a) ? [
            a
        ] : [];
}
const fromOption = (ma)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"](ma) ? [] : [
        ma.value
    ];
const fromEither = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeft"](e) ? [] : [
        e.right
    ];
const matchW = (onEmpty, onNonEmpty)=>(as)=>isNonEmpty(as) ? onNonEmpty(as) : onEmpty();
const match = matchW;
const matchLeftW = (onEmpty, onNonEmpty)=>(as)=>isNonEmpty(as) ? onNonEmpty(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["head"](as), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tail"](as)) : onEmpty();
const matchLeft = matchLeftW;
const foldLeft = matchLeft;
const matchRightW = (onEmpty, onNonEmpty)=>(as)=>isNonEmpty(as) ? onNonEmpty(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"](as), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"](as)) : onEmpty();
const matchRight = matchRightW;
const foldRight = matchRight;
const chainWithIndex = (f)=>(as)=>{
        const out = [];
        for(let i = 0; i < as.length; i++){
            const bs = f(i, as[i]);
            for(let j = 0; j < bs.length; j++){
                out.push(bs[j]);
            }
        }
        return out;
    };
const scanLeft = (b, f)=>(as)=>{
        const len = as.length;
        const out = new Array(len + 1);
        out[0] = b;
        for(let i = 0; i < len; i++){
            out[i + 1] = f(out[i], as[i]);
        }
        return out;
    };
const scanRight = (b, f)=>(as)=>{
        const len = as.length;
        const out = new Array(len + 1);
        out[len] = b;
        for(let i = len - 1; i >= 0; i--){
            out[i] = f(as[i], out[i + 1]);
        }
        return out;
    };
const size = (as)=>as.length;
const isOutOfBound = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOutOfBound"];
const lookup = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookup"];
const head = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["head"];
const last = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"];
const tail = (as)=>isNonEmpty(as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tail"](as)) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
const init = (as)=>isNonEmpty(as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"](as)) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
const takeLeft = (n)=>(as)=>isOutOfBound(n, as) ? copy(as) : as.slice(0, n);
const takeRight = (n)=>(as)=>isOutOfBound(n, as) ? copy(as) : n === 0 ? [] : as.slice(-n);
function takeLeftWhile(predicate) {
    return (as)=>{
        const out = [];
        for (const a of as){
            if (!predicate(a)) {
                break;
            }
            out.push(a);
        }
        return out;
    };
}
const spanLeftIndex = (as, predicate)=>{
    const l = as.length;
    let i = 0;
    for(; i < l; i++){
        if (!predicate(as[i])) {
            break;
        }
    }
    return i;
};
function spanLeft(predicate) {
    return (as)=>{
        const [init, rest] = splitAt(spanLeftIndex(as, predicate))(as);
        return {
            init,
            rest
        };
    };
}
const dropLeft = (n)=>(as)=>n <= 0 || isEmpty(as) ? copy(as) : n >= as.length ? [] : as.slice(n, as.length);
const dropRight = (n)=>(as)=>n <= 0 || isEmpty(as) ? copy(as) : n >= as.length ? [] : as.slice(0, as.length - n);
function dropLeftWhile(predicate) {
    return (as)=>as.slice(spanLeftIndex(as, predicate));
}
const findIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findIndex"];
function findFirst(predicate) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findFirst"](predicate);
}
const findFirstMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findFirstMap"];
function findLast(predicate) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLast"](predicate);
}
const findLastMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLastMap"];
const findLastIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLastIndex"];
const copy = (as)=>as.slice();
const insertAt = (i, a)=>(as)=>i < 0 || i > as.length ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](unsafeInsertAt(i, a, as));
const updateAt = (i, a)=>modifyAt(i, ()=>a);
const deleteAt = (i)=>(as)=>isOutOfBound(i, as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](unsafeDeleteAt(i, as));
const modifyAt = (i, f)=>(as)=>isOutOfBound(i, as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](unsafeUpdateAt(i, f(as[i]), as));
const reverse = (as)=>isEmpty(as) ? [] : as.slice().reverse();
const rights = (as)=>{
    const r = [];
    for(let i = 0; i < as.length; i++){
        const a = as[i];
        if (a._tag === 'Right') {
            r.push(a.right);
        }
    }
    return r;
};
const lefts = (as)=>{
    const r = [];
    for(let i = 0; i < as.length; i++){
        const a = as[i];
        if (a._tag === 'Left') {
            r.push(a.left);
        }
    }
    return r;
};
const sort = (O)=>(as)=>as.length <= 1 ? copy(as) : as.slice().sort(O.compare);
const zipWith = (fa, fb, f)=>{
    const fc = [];
    const len = Math.min(fa.length, fb.length);
    for(let i = 0; i < len; i++){
        fc[i] = f(fa[i], fb[i]);
    }
    return fc;
};
function zip(as, bs) {
    if (bs === undefined) {
        return (bs)=>zip(bs, as);
    }
    return zipWith(as, bs, (a, b)=>[
            a,
            b
        ]);
}
const unzip = (as)=>{
    const fa = [];
    const fb = [];
    for(let i = 0; i < as.length; i++){
        fa[i] = as[i][0];
        fb[i] = as[i][1];
    }
    return [
        fa,
        fb
    ];
};
const prependAll = (middle)=>{
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prependAll"](middle);
    return (as)=>isNonEmpty(as) ? f(as) : [];
};
const intersperse = (middle)=>{
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intersperse"](middle);
    return (as)=>isNonEmpty(as) ? f(as) : copy(as);
};
const rotate = (n)=>{
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotate"](n);
    return (as)=>isNonEmpty(as) ? f(as) : copy(as);
};
const elem = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elem"];
const uniq = (E)=>{
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uniq"](E);
    return (as)=>isNonEmpty(as) ? f(as) : copy(as);
};
const sortBy = (ords)=>{
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortBy"](ords);
    return (as)=>isNonEmpty(as) ? f(as) : copy(as);
};
const chop = (f)=>{
    const g = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chop"](f);
    return (as)=>isNonEmpty(as) ? g(as) : [];
};
const splitAt = (n)=>(as)=>n >= 1 && isNonEmpty(as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitAt"](n)(as) : isEmpty(as) ? [
            copy(as),
            []
        ] : [
            [],
            copy(as)
        ];
const chunksOf = (n)=>{
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chunksOf"](n);
    return (as)=>isNonEmpty(as) ? f(as) : [];
};
const fromOptionK = (f)=>(...a)=>fromOption(f(...a));
function comprehension(input, f, g = ()=>true) {
    const go = (scope, input)=>isNonEmpty(input) ? flatMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["head"](input), (a)=>go((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(scope, append(a)), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tail"](input))) : g(...scope) ? [
            f(...scope)
        ] : [];
    return go([], input);
}
const concatW = (second)=>(first)=>isEmpty(first) ? copy(second) : isEmpty(second) ? copy(first) : first.concat(second);
const concat = concatW;
function union(E) {
    const unionE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"](E);
    return (first, second)=>{
        if (second === undefined) {
            const unionE = union(E);
            return (second)=>unionE(second, first);
        }
        return isNonEmpty(first) && isNonEmpty(second) ? unionE(second)(first) : isNonEmpty(first) ? copy(first) : copy(second);
    };
}
function intersection(E) {
    const elemE = elem(E);
    return (xs, ys)=>{
        if (ys === undefined) {
            const intersectionE = intersection(E);
            return (ys)=>intersectionE(ys, xs);
        }
        return xs.filter((a)=>elemE(a, ys));
    };
}
function difference(E) {
    const elemE = elem(E);
    return (xs, ys)=>{
        if (ys === undefined) {
            const differenceE = difference(E);
            return (ys)=>differenceE(ys, xs);
        }
        return xs.filter((a)=>!elemE(a, ys));
    };
}
const _map = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f));
/* istanbul ignore next */ const _mapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, mapWithIndex(f));
const _ap = (fab, fa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fab, ap(fa));
/* istanbul ignore next */ const _filter = (fa, predicate)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filter(predicate));
/* istanbul ignore next */ const _filterMap = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filterMap(f));
/* istanbul ignore next */ const _partition = (fa, predicate)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partition(predicate));
/* istanbul ignore next */ const _partitionMap = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partitionMap(f));
/* istanbul ignore next */ const _partitionWithIndex = (fa, predicateWithIndex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partitionWithIndex(predicateWithIndex));
/* istanbul ignore next */ const _partitionMapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partitionMapWithIndex(f));
/* istanbul ignore next */ const _alt = (fa, that)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, alt(that));
const _reduce = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduce(b, f));
/* istanbul ignore next */ const _foldMap = (M)=>{
    const foldMapM = foldMap(M);
    return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapM(f));
};
/* istanbul ignore next */ const _reduceRight = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRight(b, f));
/* istanbul ignore next */ const _reduceWithIndex = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceWithIndex(b, f));
/* istanbul ignore next */ const _foldMapWithIndex = (M)=>{
    const foldMapWithIndexM = foldMapWithIndex(M);
    return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapWithIndexM(f));
};
/* istanbul ignore next */ const _reduceRightWithIndex = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRightWithIndex(b, f));
/* istanbul ignore next */ const _filterMapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filterMapWithIndex(f));
/* istanbul ignore next */ const _filterWithIndex = (fa, predicateWithIndex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filterWithIndex(predicateWithIndex));
/* istanbul ignore next */ const _extend = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, extend(f));
/* istanbul ignore next */ const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseF(f));
};
/* istanbul ignore next */ const _traverseWithIndex = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseWithIndexF(f));
};
const _chainRecDepthFirst = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_chainRecDepthFirst"];
const _chainRecBreadthFirst = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_chainRecBreadthFirst"];
const of = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["of"];
const zero = ()=>[];
const map = (f)=>(fa)=>fa.map((a)=>f(a));
const ap = (fa)=>flatMap((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f)));
const flatMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (ma, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ma, chainWithIndex((i, a)=>f(a, i))));
const flatten = /*#__PURE__*/ flatMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const mapWithIndex = (f)=>(fa)=>fa.map((a, i)=>f(i, a));
const filterMapWithIndex = (f)=>(fa)=>{
        const out = [];
        for(let i = 0; i < fa.length; i++){
            const optionB = f(i, fa[i]);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](optionB)) {
                out.push(optionB.value);
            }
        }
        return out;
    };
const filterMap = (f)=>filterMapWithIndex((_, a)=>f(a));
const compact = /*#__PURE__*/ filterMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const separate = (fa)=>{
    const left = [];
    const right = [];
    for (const e of fa){
        if (e._tag === 'Left') {
            left.push(e.left);
        } else {
            right.push(e.right);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
};
const filter = (predicate)=>(as)=>as.filter(predicate);
const partition = (predicate)=>partitionWithIndex((_, a)=>predicate(a));
const partitionWithIndex = (predicateWithIndex)=>(as)=>{
        const left = [];
        const right = [];
        for(let i = 0; i < as.length; i++){
            const b = as[i];
            if (predicateWithIndex(i, b)) {
                right.push(b);
            } else {
                left.push(b);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
    };
const partitionMap = (f)=>partitionMapWithIndex((_, a)=>f(a));
const partitionMapWithIndex = (f)=>(fa)=>{
        const left = [];
        const right = [];
        for(let i = 0; i < fa.length; i++){
            const e = f(i, fa[i]);
            if (e._tag === 'Left') {
                left.push(e.left);
            } else {
                right.push(e.right);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
    };
const altW = (that)=>(fa)=>fa.concat(that());
const alt = altW;
const filterWithIndex = (predicateWithIndex)=>(as)=>as.filter((b, i)=>predicateWithIndex(i, b));
const extend = (f)=>(wa)=>wa.map((_, i)=>f(wa.slice(i)));
const duplicate = /*#__PURE__*/ extend(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const foldMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foldMap"];
const foldMapWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foldMapWithIndex"];
const reduce = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"];
const reduceWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceWithIndex"];
const reduceRight = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRight"];
const reduceRightWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRightWithIndex"];
const traverse = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (f)=>traverseWithIndexF((_, a)=>f(a));
};
const sequence = (F)=>(ta)=>{
        return _reduce(ta, F.of(zero()), (fas, fa)=>F.ap(F.map(fas, (as)=>(a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(as, append(a))), fa));
    };
const traverseWithIndex = (F)=>(f)=>reduceWithIndex(F.of(zero()), (i, fbs, a)=>F.ap(F.map(fbs, (bs)=>(b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(bs, append(b))), f(i, a)));
const wither = (F)=>{
    const _witherF = _wither(F);
    return (f)=>(fa)=>_witherF(fa, f);
};
const wilt = (F)=>{
    const _wiltF = _wilt(F);
    return (f)=>(fa)=>_wiltF(fa, f);
};
const unfold = (b, f)=>{
    const out = [];
    let bb = b;
    // eslint-disable-next-line no-constant-condition
    while(true){
        const mt = f(bb);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](mt)) {
            const [a, b] = mt.value;
            out.push(a);
            bb = b;
        } else {
            break;
        }
    }
    return out;
};
const URI = 'Array';
const getShow = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShow"];
const getSemigroup = ()=>({
        concat: (first, second)=>first.concat(second)
    });
const getMonoid = ()=>({
        concat: getSemigroup().concat,
        empty: []
    });
const getEq = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEq"];
const getOrd = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrd"];
const getUnionSemigroup = (E)=>{
    const unionE = union(E);
    return {
        concat: (first, second)=>unionE(second)(first)
    };
};
const getUnionMonoid = (E)=>({
        concat: getUnionSemigroup(E).concat,
        empty: []
    });
const getIntersectionSemigroup = (E)=>{
    const intersectionE = intersection(E);
    return {
        concat: (first, second)=>intersectionE(second)(first)
    };
};
const getDifferenceMagma = (E)=>{
    const differenceE = difference(E);
    return {
        concat: (first, second)=>differenceE(second)(first)
    };
};
const Functor = {
    URI,
    map: _map
};
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const Pointed = {
    URI,
    of
};
const FunctorWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const apFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apFirst"])(Apply);
const apSecond = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apSecond"])(Apply);
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of
};
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
const chainFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chainFirst"])(Chain);
const Monad = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap
};
const Unfoldable = {
    URI,
    unfold
};
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const Zero = {
    URI,
    zero
};
const guard = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Zero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guard"])(Zero, Pointed);
const Alternative = {
    URI,
    map: _map,
    ap: _ap,
    of,
    alt: _alt,
    zero
};
const Extend = {
    URI,
    map: _map,
    extend: _extend
};
const Compactable = {
    URI,
    compact,
    separate
};
const Filterable = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
const FilterableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex
};
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const FoldableWithIndex = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const TraversableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverse: _traverse,
    sequence,
    traverseWithIndex: _traverseWithIndex
};
const _wither = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["witherDefault"])(Traversable, Compactable);
const _wilt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wiltDefault"])(Traversable, Compactable);
const Witherable = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    wither: _wither,
    wilt: _wilt
};
const chainRecDepthFirst = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chainRecDepthFirst"];
const ChainRecDepthFirst = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRecDepthFirst
};
const chainRecBreadthFirst = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chainRecBreadthFirst"];
const ChainRecBreadthFirst = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRecBreadthFirst
};
const filterE = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterE"])(Witherable);
const FromEither = {
    URI,
    fromEither
};
const fromEitherK = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEitherK"])(FromEither);
const unsafeInsertAt = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeInsertAt"];
const unsafeUpdateAt = (i, a, as)=>isNonEmpty(as) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeUpdateAt"](i, a, as) : [];
const unsafeDeleteAt = (i, as)=>{
    const xs = as.slice();
    xs.splice(i, 1);
    return xs;
};
const every = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["every"];
const some = (predicate)=>(as)=>as.some(predicate);
const exists = some;
const intercalate = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intercalate"];
const Do = /*#__PURE__*/ of(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRecord"]);
const bindTo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindTo"])(Functor);
const let_ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["let"])(Functor);
;
const bind = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(Chain);
const apS = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apS"])(Apply);
const chain = flatMap;
const range = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"];
const empty = [];
const cons = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cons"];
const snoc = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$NonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snoc"];
const prependToAll = prependAll;
const array = {
    URI,
    compact,
    separate,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    alt: _alt,
    zero,
    unfold,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    extend: _extend,
    wither: _wither,
    wilt: _wilt
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Applicative.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getApplicativeComposition",
    ()=>getApplicativeComposition,
    "getApplicativeMonoid",
    ()=>getApplicativeMonoid
]);
/**
 * The `Applicative` type class extends the `Apply` type class with a `of` function, which can be used to create values
 * of type `f a` from values of type `a`.
 *
 * Where `Apply` provides the ability to lift functions of two or more arguments to functions whose arguments are
 * wrapped using `f`, and `Functor` provides the ability to lift functions of one argument, `pure` can be seen as the
 * function which lifts functions of _zero_ arguments. That is, `Applicative` functors support a lifting operation for
 * any number of function arguments.
 *
 * Instances must satisfy the following laws in addition to the `Apply` laws:
 *
 * 1. Identity: `A.ap(A.of(a => a), fa) <-> fa`
 * 2. Homomorphism: `A.ap(A.of(ab), A.of(a)) <-> A.of(ab(a))`
 * 3. Interchange: `A.ap(fab, A.of(a)) <-> A.ap(A.of(ab => ab(a)), fab)`
 *
 * Note. `Functor`'s `map` can be derived: `A.map(x, f) = A.ap(A.of(f), x)`
 *
 * @since 2.0.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Apply.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
;
;
;
function getApplicativeMonoid(F) {
    const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApplySemigroup"])(F);
    return (M)=>({
            concat: f(M).concat,
            empty: F.of(M.empty)
        });
}
function getApplicativeComposition(F, G) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctorComposition"])(F, G).map;
    const _ap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ap"])(F, G);
    return {
        map,
        of: (a)=>F.of(G.of(a)),
        ap: (fgab, fga)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fgab, _ap(fga))
    };
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Predicate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contravariant",
    ()=>Contravariant,
    "URI",
    ()=>URI,
    "and",
    ()=>and,
    "contramap",
    ()=>contramap,
    "getMonoidAll",
    ()=>getMonoidAll,
    "getMonoidAny",
    ()=>getMonoidAny,
    "getSemigroupAll",
    ()=>getSemigroupAll,
    "getSemigroupAny",
    ()=>getSemigroupAny,
    "not",
    ()=>not,
    "or",
    ()=>or
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
;
const contramap_ = (predicate, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(predicate, contramap(f));
const contramap = (f)=>(predicate)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(f, predicate);
const URI = 'Predicate';
const getSemigroupAny = ()=>({
        concat: (first, second)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(first, or(second))
    });
const getMonoidAny = ()=>({
        concat: getSemigroupAny().concat,
        empty: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constFalse"]
    });
const getSemigroupAll = ()=>({
        concat: (first, second)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(first, and(second))
    });
const getMonoidAll = ()=>({
        concat: getSemigroupAll().concat,
        empty: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constTrue"]
    });
const Contravariant = {
    URI,
    contramap: contramap_
};
const not = (predicate)=>(a)=>!predicate(a);
const or = (second)=>(first)=>(a)=>first(a) || second(a);
const and = (second)=>(first)=>(a)=>first(a) && second(a);
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Option.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alt",
    ()=>Alt,
    "Alternative",
    ()=>Alternative,
    "ApT",
    ()=>ApT,
    "Applicative",
    ()=>Applicative,
    "Apply",
    ()=>Apply,
    "Chain",
    ()=>Chain,
    "Compactable",
    ()=>Compactable,
    "Do",
    ()=>Do,
    "Extend",
    ()=>Extend,
    "Filterable",
    ()=>Filterable,
    "Foldable",
    ()=>Foldable,
    "FromEither",
    ()=>FromEither,
    "Functor",
    ()=>Functor,
    "Monad",
    ()=>Monad,
    "MonadThrow",
    ()=>MonadThrow,
    "Pointed",
    ()=>Pointed,
    "Traversable",
    ()=>Traversable,
    "URI",
    ()=>URI,
    "Witherable",
    ()=>Witherable,
    "Zero",
    ()=>Zero,
    "alt",
    ()=>alt,
    "altW",
    ()=>altW,
    "ap",
    ()=>ap,
    "apFirst",
    ()=>apFirst,
    "apS",
    ()=>apS,
    "apSecond",
    ()=>apSecond,
    "as",
    ()=>as,
    "asUnit",
    ()=>asUnit,
    "bind",
    ()=>bind,
    "bindTo",
    ()=>bindTo,
    "chain",
    ()=>chain,
    "chainEitherK",
    ()=>chainEitherK,
    "chainFirst",
    ()=>chainFirst,
    "chainFirstEitherK",
    ()=>chainFirstEitherK,
    "chainNullableK",
    ()=>chainNullableK,
    "compact",
    ()=>compact,
    "duplicate",
    ()=>duplicate,
    "elem",
    ()=>elem,
    "exists",
    ()=>exists,
    "extend",
    ()=>extend,
    "filter",
    ()=>filter,
    "filterMap",
    ()=>filterMap,
    "flap",
    ()=>flap,
    "flatMap",
    ()=>flatMap,
    "flatten",
    ()=>flatten,
    "fold",
    ()=>fold,
    "foldMap",
    ()=>foldMap,
    "foldW",
    ()=>foldW,
    "fromEither",
    ()=>fromEither,
    "fromEitherK",
    ()=>fromEitherK,
    "fromNullable",
    ()=>fromNullable,
    "fromNullableK",
    ()=>fromNullableK,
    "fromPredicate",
    ()=>fromPredicate,
    "getApplyMonoid",
    ()=>getApplyMonoid,
    "getApplySemigroup",
    ()=>getApplySemigroup,
    "getEq",
    ()=>getEq,
    "getFirstMonoid",
    ()=>getFirstMonoid,
    "getLastMonoid",
    ()=>getLastMonoid,
    "getLeft",
    ()=>getLeft,
    "getMonoid",
    ()=>getMonoid,
    "getOrElse",
    ()=>getOrElse,
    "getOrElseW",
    ()=>getOrElseW,
    "getOrd",
    ()=>getOrd,
    "getRefinement",
    ()=>getRefinement,
    "getRight",
    ()=>getRight,
    "getShow",
    ()=>getShow,
    "guard",
    ()=>guard,
    "isNone",
    ()=>isNone,
    "isSome",
    ()=>isSome,
    "let",
    ()=>let_,
    "map",
    ()=>map,
    "mapNullable",
    ()=>mapNullable,
    "match",
    ()=>match,
    "matchW",
    ()=>matchW,
    "none",
    ()=>none,
    "of",
    ()=>of,
    "option",
    ()=>option,
    "orElse",
    ()=>orElse,
    "partition",
    ()=>partition,
    "partitionMap",
    ()=>partitionMap,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "separate",
    ()=>separate,
    "sequence",
    ()=>sequence,
    "sequenceArray",
    ()=>sequenceArray,
    "some",
    ()=>some,
    "tap",
    ()=>tap,
    "tapEither",
    ()=>tapEither,
    "throwError",
    ()=>throwError,
    "toNullable",
    ()=>toNullable,
    "toUndefined",
    ()=>toUndefined,
    "traverse",
    ()=>traverse,
    "traverseArray",
    ()=>traverseArray,
    "traverseArrayWithIndex",
    ()=>traverseArrayWithIndex,
    "traverseReadonlyArrayWithIndex",
    ()=>traverseReadonlyArrayWithIndex,
    "traverseReadonlyNonEmptyArrayWithIndex",
    ()=>traverseReadonlyNonEmptyArrayWithIndex,
    "tryCatch",
    ()=>tryCatch,
    "tryCatchK",
    ()=>tryCatchK,
    "wilt",
    ()=>wilt,
    "wither",
    ()=>wither,
    "zero",
    ()=>zero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Applicative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Applicative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Apply.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/FromEither.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Semigroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Separated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Witherable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Zero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Zero.js [app-client] (ecmascript)");
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
const none = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
const some = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"];
function fromPredicate(predicate) {
    return (a)=>predicate(a) ? some(a) : none;
}
const getLeft = (ma)=>ma._tag === 'Right' ? none : some(ma.left);
const getRight = (ma)=>ma._tag === 'Left' ? none : some(ma.right);
const _map = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f));
const _ap = (fab, fa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fab, ap(fa));
const _reduce = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduce(b, f));
const _foldMap = (M)=>{
    const foldMapM = foldMap(M);
    return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapM(f));
};
const _reduceRight = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRight(b, f));
const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseF(f));
};
/* istanbul ignore next */ const _alt = (fa, that)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, alt(that));
const _filter = (fa, predicate)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filter(predicate));
/* istanbul ignore next */ const _filterMap = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filterMap(f));
/* istanbul ignore next */ const _extend = (wa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(wa, extend(f));
/* istanbul ignore next */ const _partition = (fa, predicate)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partition(predicate));
/* istanbul ignore next */ const _partitionMap = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partitionMap(f));
const URI = 'Option';
const getShow = (S)=>({
        show: (ma)=>isNone(ma) ? 'none' : `some(${S.show(ma.value)})`
    });
const getEq = (E)=>({
        equals: (x, y)=>x === y || (isNone(x) ? isNone(y) : isNone(y) ? false : E.equals(x.value, y.value))
    });
const getOrd = (O)=>({
        equals: getEq(O).equals,
        compare: (x, y)=>x === y ? 0 : isSome(x) ? isSome(y) ? O.compare(x.value, y.value) : 1 : -1
    });
const getMonoid = (S)=>({
        concat: (x, y)=>isNone(x) ? y : isNone(y) ? x : some(S.concat(x.value, y.value)),
        empty: none
    });
const map = (f)=>(fa)=>isNone(fa) ? none : some(f(fa.value));
const Functor = {
    URI,
    map: _map
};
const as = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["as"])(Functor));
const asUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUnit"])(Functor);
const of = some;
const Pointed = {
    URI,
    of
};
const ap = (fa)=>(fab)=>isNone(fab) ? none : isNone(fa) ? none : some(fab.value(fa.value));
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of
};
const flatMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (ma, f)=>isNone(ma) ? none : f(ma.value));
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
const Monad = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap
};
const reduce = (b, f)=>(fa)=>isNone(fa) ? b : f(b, fa.value);
const foldMap = (M)=>(f)=>(fa)=>isNone(fa) ? M.empty : f(fa.value);
const reduceRight = (b, f)=>(fa)=>isNone(fa) ? b : f(fa.value, b);
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const orElse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (self, that)=>isNone(self) ? that() : self);
const altW = orElse;
const alt = orElse;
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const zero = ()=>none;
const Zero = {
    URI,
    zero
};
const guard = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Zero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guard"])(Zero, Pointed);
const Alternative = {
    URI,
    map: _map,
    ap: _ap,
    of,
    alt: _alt,
    zero
};
const extend = (f)=>(wa)=>isNone(wa) ? none : some(f(wa));
const Extend = {
    URI,
    map: _map,
    extend: _extend
};
const compact = /*#__PURE__*/ flatMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const defaultSeparated = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(none, none);
const separate = (ma)=>isNone(ma) ? defaultSeparated : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(getLeft(ma.value), getRight(ma.value));
const Compactable = {
    URI,
    compact,
    separate
};
const filter = (predicate)=>(fa)=>isNone(fa) ? none : predicate(fa.value) ? fa : none;
const filterMap = (f)=>(fa)=>isNone(fa) ? none : f(fa.value);
const partition = (predicate)=>(fa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(_filter(fa, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["not"])(predicate)), _filter(fa, predicate));
const partitionMap = (f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(map(f), separate);
const Filterable = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
const traverse = (F)=>(f)=>(ta)=>isNone(ta) ? F.of(none) : F.map(f(ta.value), some);
const sequence = (F)=>(ta)=>isNone(ta) ? F.of(none) : F.map(ta.value, some);
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const _wither = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["witherDefault"])(Traversable, Compactable);
const _wilt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wiltDefault"])(Traversable, Compactable);
const wither = (F)=>{
    const _witherF = _wither(F);
    return (f)=>(fa)=>_witherF(fa, f);
};
const wilt = (F)=>{
    const _wiltF = _wilt(F);
    return (f)=>(fa)=>_wiltF(fa, f);
};
const Witherable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
const throwError = ()=>none;
const MonadThrow = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap,
    throwError
};
const fromEither = getRight;
const FromEither = {
    URI,
    fromEither
};
const isSome = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"];
const isNone = (fa)=>fa._tag === 'None';
const matchW = (onNone, onSome)=>(ma)=>isNone(ma) ? onNone() : onSome(ma.value);
const foldW = matchW;
const match = matchW;
const fold = match;
const getOrElseW = (onNone)=>(ma)=>isNone(ma) ? onNone() : ma.value;
const getOrElse = getOrElseW;
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const apFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apFirst"])(Apply);
const apSecond = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apSecond"])(Apply);
const flatten = compact;
const tap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tap"](Chain));
const tapEither = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tapEither"])(FromEither, Chain));
const duplicate = /*#__PURE__*/ extend(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const fromEitherK = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEitherK"])(FromEither);
const chainEitherK = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chainEitherK"])(FromEither, Chain);
const chainFirstEitherK = tapEither;
const fromNullable = (a)=>a == null ? none : some(a);
const tryCatch = (f)=>{
    try {
        return some(f());
    } catch (e) {
        return none;
    }
};
const tryCatchK = (f)=>(...a)=>tryCatch(()=>f(...a));
const fromNullableK = (f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(f, fromNullable);
const chainNullableK = (f)=>(ma)=>isNone(ma) ? none : fromNullable(f(ma.value));
const toNullable = /*#__PURE__*/ match(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constNull"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const toUndefined = /*#__PURE__*/ match(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constUndefined"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
function elem(E) {
    return (a, ma)=>{
        if (ma === undefined) {
            const elemE = elem(E);
            return (ma)=>elemE(a, ma);
        }
        return isNone(ma) ? false : E.equals(a, ma.value);
    };
}
const exists = (predicate)=>(ma)=>isNone(ma) ? false : predicate(ma.value);
const Do = /*#__PURE__*/ of(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRecord"]);
const bindTo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindTo"])(Functor);
const let_ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["let"])(Functor);
;
const bind = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](Chain);
const apS = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apS"])(Apply);
const ApT = /*#__PURE__*/ of(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyReadonlyArray"]);
const traverseReadonlyNonEmptyArrayWithIndex = (f)=>(as)=>{
        const o = f(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["head"](as));
        if (isNone(o)) {
            return none;
        }
        const out = [
            o.value
        ];
        for(let i = 1; i < as.length; i++){
            const o = f(i, as[i]);
            if (isNone(o)) {
                return none;
            }
            out.push(o.value);
        }
        return some(out);
    };
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonEmpty"](as) ? g(as) : ApT;
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const chain = flatMap;
const chainFirst = tap;
function getRefinement(getOption) {
    return (a)=>isSome(getOption(a));
}
const mapNullable = chainNullableK;
const option = {
    URI,
    map: _map,
    of,
    ap: _ap,
    chain: flatMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    zero,
    alt: _alt,
    extend: _extend,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt,
    throwError
};
const getApplySemigroup = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApplySemigroup"])(Apply);
const getApplyMonoid = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Applicative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApplicativeMonoid"])(Applicative);
const getFirstMonoid = ()=>getMonoid((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["first"])());
const getLastMonoid = ()=>getMonoid((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])());
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Tree.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Applicative",
    ()=>Applicative,
    "Apply",
    ()=>Apply,
    "Chain",
    ()=>Chain,
    "Comonad",
    ()=>Comonad,
    "Do",
    ()=>Do,
    "Foldable",
    ()=>Foldable,
    "Functor",
    ()=>Functor,
    "Monad",
    ()=>Monad,
    "Pointed",
    ()=>Pointed,
    "Traversable",
    ()=>Traversable,
    "URI",
    ()=>URI,
    "ap",
    ()=>ap,
    "apFirst",
    ()=>apFirst,
    "apS",
    ()=>apS,
    "apSecond",
    ()=>apSecond,
    "bind",
    ()=>bind,
    "bindTo",
    ()=>bindTo,
    "chain",
    ()=>chain,
    "chainFirst",
    ()=>chainFirst,
    "drawForest",
    ()=>drawForest,
    "drawTree",
    ()=>drawTree,
    "duplicate",
    ()=>duplicate,
    "elem",
    ()=>elem,
    "exists",
    ()=>exists,
    "extend",
    ()=>extend,
    "extract",
    ()=>extract,
    "flap",
    ()=>flap,
    "flatMap",
    ()=>flatMap,
    "flatten",
    ()=>flatten,
    "fold",
    ()=>fold,
    "foldMap",
    ()=>foldMap,
    "getEq",
    ()=>getEq,
    "getShow",
    ()=>getShow,
    "let",
    ()=>let_,
    "make",
    ()=>make,
    "map",
    ()=>map,
    "of",
    ()=>of,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "sequence",
    ()=>sequence,
    "traverse",
    ()=>traverse,
    "tree",
    ()=>tree,
    "unfoldForest",
    ()=>unfoldForest,
    "unfoldForestM",
    ()=>unfoldForestM,
    "unfoldTree",
    ()=>unfoldTree,
    "unfoldTreeM",
    ()=>unfoldTreeM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Apply.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Eq.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function make(value, forest = []) {
    return {
        value,
        forest
    };
}
function getShow(S) {
    const show = (t)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmpty"](t.forest) ? `make(${S.show(t.value)})` : `make(${S.show(t.value)}, [${t.forest.map(show).join(', ')}])`;
    };
    return {
        show
    };
}
function getEq(E) {
    // eslint-disable-next-line prefer-const
    let SA;
    const R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEquals"])((x, y)=>E.equals(x.value, y.value) && SA.equals(x.forest, y.forest));
    SA = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEq"](R);
    return R;
}
const draw = (indentation, forest)=>{
    let r = '';
    const len = forest.length;
    let tree;
    for(let i = 0; i < len; i++){
        tree = forest[i];
        const isLast = i === len - 1;
        r += indentation + (isLast ? '└' : '├') + '─ ' + tree.value;
        r += draw(indentation + (len > 1 && !isLast ? '│  ' : '   '), tree.forest);
    }
    return r;
};
function drawForest(forest) {
    return draw('\n', forest);
}
function drawTree(tree) {
    return tree.value + drawForest(tree.forest);
}
function unfoldTree(b, f) {
    const [a, bs] = f(b);
    return {
        value: a,
        forest: unfoldForest(bs, f)
    };
}
function unfoldForest(bs, f) {
    return bs.map((b)=>unfoldTree(b, f));
}
function unfoldTreeM(M) {
    const unfoldForestMM = unfoldForestM(M);
    return (b, f)=>M.chain(f(b), ([a, bs])=>M.map(unfoldForestMM(bs, f), (ts)=>({
                    value: a,
                    forest: ts
                })));
}
function unfoldForestM(M) {
    const traverseM = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traverse"](M);
    return (bs, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(bs, traverseM((b)=>unfoldTreeM(M)(b, f)));
}
function fold(f) {
    const go = (tree)=>f(tree.value, tree.forest.map(go));
    return go;
}
/* istanbul ignore next */ const _map = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f));
const _ap = (fab, fa)=>flatMap(fab, (f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f)));
/* istanbul ignore next */ const _reduce = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduce(b, f));
/* istanbul ignore next */ const _foldMap = (M)=>{
    const foldMapM = foldMap(M);
    return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapM(f));
};
/* istanbul ignore next */ const _reduceRight = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRight(b, f));
/* istanbul ignore next */ const _extend = (wa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(wa, extend(f));
/* istanbul ignore next */ const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseF(f));
};
const ap = (fa)=>(fab)=>_ap(fab, fa);
const flatMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (ma, f)=>{
    const { value, forest } = f(ma.value);
    const concat = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonoid"]().concat;
    return {
        value,
        forest: concat(forest, ma.forest.map(flatMap(f)))
    };
});
const extend = (f)=>(wa)=>({
            value: f(wa),
            forest: wa.forest.map(extend(f))
        });
const duplicate = /*#__PURE__*/ extend(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const flatten = /*#__PURE__*/ flatMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const map = (f)=>(fa)=>({
            value: f(fa.value),
            forest: fa.forest.map(map(f))
        });
const reduce = (b, f)=>(fa)=>{
        let r = f(b, fa.value);
        const len = fa.forest.length;
        for(let i = 0; i < len; i++){
            r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa.forest[i], reduce(r, f));
        }
        return r;
    };
const foldMap = (M)=>(f)=>reduce(M.empty, (acc, a)=>M.concat(acc, f(a)));
const reduceRight = (b, f)=>(fa)=>{
        let r = b;
        const len = fa.forest.length;
        for(let i = len - 1; i >= 0; i--){
            r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa.forest[i], reduceRight(r, f));
        }
        return f(fa.value, r);
    };
const extract = (wa)=>wa.value;
const traverse = (F)=>{
    const traverseF = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traverse"](F);
    const out = (f)=>(ta)=>F.ap(F.map(f(ta.value), (value)=>(forest)=>({
                        value,
                        forest
                    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta.forest, traverseF(out(f))));
    return out;
};
const sequence = (F)=>traverse(F)(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const of = (a)=>make(a);
const URI = 'Tree';
const Functor = {
    URI,
    map: _map
};
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const Pointed = {
    URI,
    of
};
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const apFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apFirst"])(Apply);
const apSecond = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apSecond"])(Apply);
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of
};
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
const Monad = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap
};
const chainFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chainFirst"])(Chain);
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const Comonad = {
    URI,
    map: _map,
    extend: _extend,
    extract
};
const Do = /*#__PURE__*/ of(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRecord"]);
const bindTo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindTo"])(Functor);
const let_ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["let"])(Functor);
;
const bind = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(Chain);
const apS = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apS"])(Apply);
function elem(E) {
    const go = (a, fa)=>E.equals(a, fa.value) || fa.forest.some((tree)=>go(a, tree));
    return go;
}
const exists = (predicate)=>(ma)=>predicate(ma.value) || ma.forest.some(exists(predicate));
const chain = flatMap;
const tree = {
    URI,
    map: _map,
    of,
    ap: _ap,
    chain: flatMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    extract,
    extend: _extend
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Const.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bifunctor",
    ()=>Bifunctor,
    "Contravariant",
    ()=>Contravariant,
    "Functor",
    ()=>Functor,
    "URI",
    ()=>URI,
    "bimap",
    ()=>bimap,
    "const_",
    ()=>const_,
    "contramap",
    ()=>contramap,
    "flap",
    ()=>flap,
    "getApplicative",
    ()=>getApplicative,
    "getApply",
    ()=>getApply,
    "getBooleanAlgebra",
    ()=>getBooleanAlgebra,
    "getBounded",
    ()=>getBounded,
    "getEq",
    ()=>getEq,
    "getHeytingAlgebra",
    ()=>getHeytingAlgebra,
    "getMonoid",
    ()=>getMonoid,
    "getOrd",
    ()=>getOrd,
    "getRing",
    ()=>getRing,
    "getSemigroup",
    ()=>getSemigroup,
    "getSemiring",
    ()=>getSemiring,
    "getShow",
    ()=>getShow,
    "make",
    ()=>make,
    "map",
    ()=>map,
    "mapLeft",
    ()=>mapLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
;
;
const make = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCoerce"];
function getShow(S) {
    return {
        show: (c)=>`make(${S.show(c)})`
    };
}
const getEq = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
const getOrd = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
const getBounded = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
const getSemigroup = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
const getMonoid = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
const getSemiring = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
const getRing = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
const getHeytingAlgebra = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
const getBooleanAlgebra = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
function getApply(S) {
    return {
        URI,
        _E: undefined,
        map: _map,
        ap: (fab, fa)=>make(S.concat(fab, fa))
    };
}
function getApplicative(M) {
    const A = getApply(M);
    return {
        URI,
        _E: undefined,
        map: A.map,
        ap: A.ap,
        of: ()=>make(M.empty)
    };
}
const _contramap = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, contramap(f));
/* istanbul ignore next */ const _map = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f));
/* istanbul ignore next */ const _bimap = (fa, f, g)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, bimap(f, g));
/* istanbul ignore next */ const _mapLeft = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, mapLeft(f));
const contramap = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCoerce"];
const map = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeCoerce"];
const bimap = (f)=>(fa)=>make(f(fa));
const mapLeft = (f)=>(fa)=>make(f(fa));
const URI = 'Const';
const Functor = {
    URI,
    map: _map
};
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const Contravariant = {
    URI,
    contramap: _contramap
};
const Bifunctor = {
    URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
const const_ = {
    URI,
    map: _map,
    contramap: _contramap,
    bimap: _bimap,
    mapLeft: _mapLeft
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Endomorphism.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "URI",
    ()=>URI,
    "getMonoid",
    ()=>getMonoid,
    "getSemigroup",
    ()=>getSemigroup
]);
/**
 * @since 2.11.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
;
const URI = 'Endomorphism';
const getSemigroup = ()=>({
        concat: (first, second)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(first, second)
    });
const getMonoid = ()=>({
        concat: getSemigroup().concat,
        empty: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]
    });
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Monoid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concatAll",
    ()=>concatAll,
    "fold",
    ()=>fold,
    "getDualMonoid",
    ()=>getDualMonoid,
    "getEndomorphismMonoid",
    ()=>getEndomorphismMonoid,
    "getFunctionMonoid",
    ()=>getFunctionMonoid,
    "getJoinMonoid",
    ()=>getJoinMonoid,
    "getMeetMonoid",
    ()=>getMeetMonoid,
    "getStructMonoid",
    ()=>getStructMonoid,
    "getTupleMonoid",
    ()=>getTupleMonoid,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "monoidAll",
    ()=>monoidAll,
    "monoidAny",
    ()=>monoidAny,
    "monoidProduct",
    ()=>monoidProduct,
    "monoidString",
    ()=>monoidString,
    "monoidSum",
    ()=>monoidSum,
    "monoidVoid",
    ()=>monoidVoid,
    "reverse",
    ()=>reverse,
    "struct",
    ()=>struct,
    "tuple",
    ()=>tuple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Endomorphism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Endomorphism.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Semigroup.js [app-client] (ecmascript)");
;
;
;
;
const min = (B)=>({
        concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"](B).concat,
        empty: B.top
    });
const max = (B)=>({
        concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](B).concat,
        empty: B.bottom
    });
const reverse = (M)=>({
        concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverse"](M).concat,
        empty: M.empty
    });
const struct = (monoids)=>{
    const empty = {};
    for(const k in monoids){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(monoids, k)) {
            empty[k] = monoids[k].empty;
        }
    }
    return {
        concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["struct"](monoids).concat,
        empty
    };
};
const tuple = (...monoids)=>({
        concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tuple"](...monoids).concat,
        empty: monoids.map((m)=>m.empty)
    });
const concatAll = (M)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatAll"](M)(M.empty);
const monoidVoid = {
    concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semigroupVoid"].concat,
    empty: undefined
};
const getTupleMonoid = tuple;
const getStructMonoid = struct;
const getDualMonoid = reverse;
const getJoinMonoid = max;
const getMeetMonoid = min;
const fold = concatAll;
const monoidAll = {
    concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semigroupAll"].concat,
    empty: true
};
const monoidAny = {
    concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semigroupAny"].concat,
    empty: false
};
const getFunctionMonoid = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonoid"];
const getEndomorphismMonoid = ()=>reverse((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Endomorphism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonoid"])());
const monoidString = {
    concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semigroupString"].concat,
    empty: ''
};
const monoidSum = {
    concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semigroupSum"].concat,
    empty: 0
};
const monoidProduct = {
    concat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semigroupProduct"].concat,
    empty: 1
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/pipeable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alt",
    ()=>alt,
    "ap",
    ()=>ap,
    "bimap",
    ()=>bimap,
    "chain",
    ()=>chain,
    "compose",
    ()=>compose,
    "contramap",
    ()=>contramap,
    "extend",
    ()=>extend,
    "filter",
    ()=>filter,
    "filterMap",
    ()=>filterMap,
    "filterMapWithIndex",
    ()=>filterMapWithIndex,
    "filterWithIndex",
    ()=>filterWithIndex,
    "foldMap",
    ()=>foldMap,
    "foldMapWithIndex",
    ()=>foldMapWithIndex,
    "map",
    ()=>map,
    "mapLeft",
    ()=>mapLeft,
    "mapWithIndex",
    ()=>mapWithIndex,
    "partition",
    ()=>partition,
    "partitionMap",
    ()=>partitionMap,
    "partitionMapWithIndex",
    ()=>partitionMapWithIndex,
    "partitionWithIndex",
    ()=>partitionWithIndex,
    "pipe",
    ()=>pipe,
    "pipeable",
    ()=>pipeable,
    "promap",
    ()=>promap,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "reduceRightWithIndex",
    ()=>reduceRightWithIndex,
    "reduceWithIndex",
    ()=>reduceWithIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Apply.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
;
;
;
function map(F) {
    return (f)=>(fa)=>F.map(fa, f);
}
function contramap(F) {
    return (f)=>(fa)=>F.contramap(fa, f);
}
function mapWithIndex(F) {
    return (f)=>(fa)=>F.mapWithIndex(fa, f);
}
function ap(F) {
    return (fa)=>(fab)=>F.ap(fab, fa);
}
function chain(F) {
    return (f)=>(fa)=>F.chain(fa, f);
}
function bimap(F) {
    return (f, g)=>(fea)=>F.bimap(fea, f, g);
}
function mapLeft(F) {
    return (f)=>(fea)=>F.mapLeft(fea, f);
}
function extend(F) {
    return (f)=>(wa)=>F.extend(wa, f);
}
function reduce(F) {
    return (b, f)=>(fa)=>F.reduce(fa, b, f);
}
function foldMap(F) {
    return (M)=>{
        const foldMapM = F.foldMap(M);
        return (f)=>(fa)=>foldMapM(fa, f);
    };
}
function reduceRight(F) {
    return (b, f)=>(fa)=>F.reduceRight(fa, b, f);
}
function reduceWithIndex(F) {
    return (b, f)=>(fa)=>F.reduceWithIndex(fa, b, f);
}
function foldMapWithIndex(F) {
    return (M)=>{
        const foldMapWithIndexM = F.foldMapWithIndex(M);
        return (f)=>(fa)=>foldMapWithIndexM(fa, f);
    };
}
function reduceRightWithIndex(F) {
    return (b, f)=>(fa)=>F.reduceRightWithIndex(fa, b, f);
}
function alt(F) {
    return (that)=>(fa)=>F.alt(fa, that);
}
function filter(F) {
    return (predicate)=>(fa)=>F.filter(fa, predicate);
}
function filterMap(F) {
    return (f)=>(fa)=>F.filterMap(fa, f);
}
function partition(F) {
    return (f)=>(fa)=>F.partition(fa, f);
}
function partitionMap(F) {
    return (f)=>(fa)=>F.partitionMap(fa, f);
}
function filterWithIndex(F) {
    return (predicate)=>(fa)=>F.filterWithIndex(fa, predicate);
}
function filterMapWithIndex(F) {
    return (f)=>(fa)=>F.filterMapWithIndex(fa, f);
}
function partitionWithIndex(F) {
    return (f)=>(fa)=>F.partitionWithIndex(fa, f);
}
function partitionMapWithIndex(F) {
    return (f)=>(fa)=>F.partitionMapWithIndex(fa, f);
}
function promap(F) {
    return (f, g)=>(fbc)=>F.promap(fbc, f, g);
}
function compose(F) {
    return (ea)=>(ab)=>F.compose(ab, ea);
}
const isFunctor = (I)=>typeof I.map === 'function';
const isContravariant = (I)=>typeof I.contramap === 'function';
const isFunctorWithIndex = (I)=>typeof I.mapWithIndex === 'function';
const isApply = (I)=>typeof I.ap === 'function';
const isChain = (I)=>typeof I.chain === 'function';
const isBifunctor = (I)=>typeof I.bimap === 'function';
const isExtend = (I)=>typeof I.extend === 'function';
const isFoldable = (I)=>typeof I.reduce === 'function';
const isFoldableWithIndex = (I)=>typeof I.reduceWithIndex === 'function';
const isAlt = (I)=>typeof I.alt === 'function';
const isCompactable = (I)=>typeof I.compact === 'function';
const isFilterable = (I)=>typeof I.filter === 'function';
const isFilterableWithIndex = (I)=>typeof I.filterWithIndex === 'function';
const isProfunctor = (I)=>typeof I.promap === 'function';
const isSemigroupoid = (I)=>typeof I.compose === 'function';
const isMonadThrow = (I)=>typeof I.throwError === 'function';
function pipeable(I) {
    const r = {};
    if (isFunctor(I)) {
        r.map = map(I);
    }
    if (isContravariant(I)) {
        r.contramap = contramap(I);
    }
    if (isFunctorWithIndex(I)) {
        r.mapWithIndex = mapWithIndex(I);
    }
    if (isApply(I)) {
        r.ap = ap(I);
        r.apFirst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apFirst"])(I);
        r.apSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apSecond"])(I);
    }
    if (isChain(I)) {
        r.chain = chain(I);
        r.chainFirst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chainFirst"])(I);
        r.flatten = r.chain(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
    }
    if (isBifunctor(I)) {
        r.bimap = bimap(I);
        r.mapLeft = mapLeft(I);
    }
    if (isExtend(I)) {
        r.extend = extend(I);
        r.duplicate = r.extend(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
    }
    if (isFoldable(I)) {
        r.reduce = reduce(I);
        r.foldMap = foldMap(I);
        r.reduceRight = reduceRight(I);
    }
    if (isFoldableWithIndex(I)) {
        r.reduceWithIndex = reduceWithIndex(I);
        r.foldMapWithIndex = foldMapWithIndex(I);
        r.reduceRightWithIndex = reduceRightWithIndex(I);
    }
    if (isAlt(I)) {
        r.alt = alt(I);
    }
    if (isCompactable(I)) {
        r.compact = I.compact;
        r.separate = I.separate;
    }
    if (isFilterable(I)) {
        r.filter = filter(I);
        r.filterMap = filterMap(I);
        r.partition = partition(I);
        r.partitionMap = partitionMap(I);
    }
    if (isFilterableWithIndex(I)) {
        r.filterWithIndex = filterWithIndex(I);
        r.filterMapWithIndex = filterMapWithIndex(I);
        r.partitionWithIndex = partitionWithIndex(I);
        r.partitionMapWithIndex = partitionMapWithIndex(I);
    }
    if (isProfunctor(I)) {
        r.promap = promap(I);
    }
    if (isSemigroupoid(I)) {
        r.compose = compose(I);
    }
    if (isMonadThrow(I)) {
        const fromOption = (onNone)=>(ma)=>ma._tag === 'None' ? I.throwError(onNone()) : I.of(ma.value);
        const fromEither = (ma)=>ma._tag === 'Left' ? I.throwError(ma.left) : I.of(ma.right);
        const fromPredicate = (predicate, onFalse)=>(a)=>predicate(a) ? I.of(a) : I.throwError(onFalse(a));
        const filterOrElse = (predicate, onFalse)=>(ma)=>I.chain(ma, (a)=>predicate(a) ? I.of(a) : I.throwError(onFalse(a)));
        r.fromOption = fromOption;
        r.fromEither = fromEither;
        r.fromPredicate = fromPredicate;
        r.filterOrElse = filterOrElse;
    }
    return r;
}
const pipe = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"];
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Compactable",
    ()=>Compactable,
    "Filterable",
    ()=>Filterable,
    "Functor",
    ()=>Functor,
    "URI",
    ()=>URI,
    "collect",
    ()=>collect,
    "compact",
    ()=>compact,
    "deleteAt",
    ()=>deleteAt,
    "difference",
    ()=>difference,
    "elem",
    ()=>elem,
    "empty",
    ()=>empty,
    "filter",
    ()=>filter,
    "filterMap",
    ()=>filterMap,
    "filterMapWithIndex",
    ()=>filterMapWithIndex,
    "filterWithIndex",
    ()=>filterWithIndex,
    "flap",
    ()=>flap,
    "foldMap",
    ()=>foldMap,
    "foldMapWithIndex",
    ()=>foldMapWithIndex,
    "fromFoldable",
    ()=>fromFoldable,
    "fromMap",
    ()=>fromMap,
    "getDifferenceMagma",
    ()=>getDifferenceMagma,
    "getEq",
    ()=>getEq,
    "getFilterableWithIndex",
    ()=>getFilterableWithIndex,
    "getFoldable",
    ()=>getFoldable,
    "getFoldableWithIndex",
    ()=>getFoldableWithIndex,
    "getFunctorWithIndex",
    ()=>getFunctorWithIndex,
    "getIntersectionSemigroup",
    ()=>getIntersectionSemigroup,
    "getMonoid",
    ()=>getMonoid,
    "getShow",
    ()=>getShow,
    "getTraversable",
    ()=>getTraversable,
    "getTraversableWithIndex",
    ()=>getTraversableWithIndex,
    "getUnionMonoid",
    ()=>getUnionMonoid,
    "getUnionSemigroup",
    ()=>getUnionSemigroup,
    "getWitherable",
    ()=>getWitherable,
    "insertAt",
    ()=>insertAt,
    "intersection",
    ()=>intersection,
    "isEmpty",
    ()=>isEmpty,
    "isSubmap",
    ()=>isSubmap,
    "keys",
    ()=>keys,
    "lookup",
    ()=>lookup,
    "lookupWithKey",
    ()=>lookupWithKey,
    "map",
    ()=>map,
    "mapWithIndex",
    ()=>mapWithIndex,
    "member",
    ()=>member,
    "modifyAt",
    ()=>modifyAt,
    "partition",
    ()=>partition,
    "partitionMap",
    ()=>partitionMap,
    "partitionMapWithIndex",
    ()=>partitionMapWithIndex,
    "partitionWithIndex",
    ()=>partitionWithIndex,
    "pop",
    ()=>pop,
    "readonlyMap",
    ()=>readonlyMap,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "reduceRightWithIndex",
    ()=>reduceRightWithIndex,
    "reduceWithIndex",
    ()=>reduceWithIndex,
    "separate",
    ()=>separate,
    "singleton",
    ()=>singleton,
    "size",
    ()=>size,
    "toMap",
    ()=>toMap,
    "toReadonlyArray",
    ()=>toReadonlyArray,
    "toUnfoldable",
    ()=>toUnfoldable,
    "union",
    ()=>union,
    "updateAt",
    ()=>updateAt,
    "upsertAt",
    ()=>upsertAt,
    "values",
    ()=>values
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Eq.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Separated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Witherable.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const fromMap = (m)=>new Map(m);
function toMap(m) {
    return new Map(m);
}
function getShow(SK, SA) {
    return {
        show: (m)=>{
            const entries = [];
            m.forEach((a, k)=>{
                entries.push(`[${SK.show(k)}, ${SA.show(a)}]`);
            });
            return `new Map([${entries.sort().join(', ')}])`;
        }
    };
}
const size = (m)=>m.size;
const isEmpty = (m)=>m.size === 0;
function member(E) {
    const lookupE = lookup(E);
    return (k, m)=>{
        if (m === undefined) {
            const memberE = member(E);
            return (m)=>memberE(k, m);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](lookupE(k, m));
    };
}
function elem(E) {
    return (a, m)=>{
        if (m === undefined) {
            const elemE = elem(E);
            return (m)=>elemE(a, m);
        }
        const values = m.values();
        let e;
        while(!(e = values.next()).done){
            const v = e.value;
            if (E.equals(a, v)) {
                return true;
            }
        }
        return false;
    };
}
const keys = (O)=>(m)=>Array.from(m.keys()).sort(O.compare);
const values = (O)=>(m)=>Array.from(m.values()).sort(O.compare);
function collect(O) {
    const keysO = keys(O);
    return (f)=>(m)=>{
            const out = [];
            const ks = keysO(m);
            for (const key of ks){
                out.push(f(key, m.get(key)));
            }
            return out;
        };
}
const toReadonlyArray = (O)=>collect(O)((k, a)=>[
            k,
            a
        ]);
function toUnfoldable(ord, U) {
    const toReadonlyArrayO = toReadonlyArray(ord);
    return (d)=>{
        const kas = toReadonlyArrayO(d);
        const len = kas.length;
        return U.unfold(0, (b)=>b < len ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"]([
                kas[b],
                b + 1
            ]) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"]);
    };
}
const upsertAt = (E)=>{
    const lookupWithKeyE = lookupWithKey(E);
    return (k, a)=>{
        const lookupWithKeyEk = lookupWithKeyE(k);
        return (m)=>{
            const found = lookupWithKeyEk(m);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"](found)) {
                const out = new Map(m);
                out.set(k, a);
                return out;
            } else if (found.value[1] !== a) {
                const out = new Map(m);
                out.set(found.value[0], a);
                return out;
            }
            return m;
        };
    };
};
const deleteAt = (E)=>{
    const lookupWithKeyE = lookupWithKey(E);
    return (k)=>(m)=>{
            const found = lookupWithKeyE(k, m);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](found)) {
                const r = new Map(m);
                r.delete(found.value[0]);
                return r;
            }
            return m;
        };
};
const updateAt = (E)=>{
    const modifyAtE = modifyAt(E);
    return (k, a)=>modifyAtE(k, ()=>a);
};
const modifyAt = (E)=>{
    const lookupWithKeyE = lookupWithKey(E);
    return (k, f)=>(m)=>{
            const found = lookupWithKeyE(k, m);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"](found)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
            }
            const [fk, fv] = found.value;
            const next = f(fv);
            if (next === fv) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](m);
            }
            const r = new Map(m);
            r.set(fk, next);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](r);
        };
};
function pop(E) {
    const lookupE = lookup(E);
    const deleteAtE = deleteAt(E);
    return (k)=>{
        const deleteAtEk = deleteAtE(k);
        return (m)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(lookupE(k, m), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"]((a)=>[
                    a,
                    deleteAtEk(m)
                ]));
    };
}
function lookupWithKey(E) {
    return (k, m)=>{
        if (m === undefined) {
            const lookupWithKeyE = lookupWithKey(E);
            return (m)=>lookupWithKeyE(k, m);
        }
        const entries = m.entries();
        let e;
        while(!(e = entries.next()).done){
            const [ka, a] = e.value;
            if (E.equals(ka, k)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"]([
                    ka,
                    a
                ]);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
    };
}
function lookup(E) {
    const lookupWithKeyE = lookupWithKey(E);
    return (k, m)=>{
        if (m === undefined) {
            const lookupE = lookup(E);
            return (m)=>lookupE(k, m);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(lookupWithKeyE(k, m), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](([_, a])=>a));
    };
}
function isSubmap(SK, SA) {
    const lookupWithKeyS = lookupWithKey(SK);
    return (me, that)=>{
        if (that === undefined) {
            const isSubmapSKSA = isSubmap(SK, SA);
            return (that)=>isSubmapSKSA(that, me);
        }
        const entries = me.entries();
        let e;
        while(!(e = entries.next()).done){
            const [k, a] = e.value;
            const d2OptA = lookupWithKeyS(k, that);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"](d2OptA) || !SK.equals(k, d2OptA.value[0]) || !SA.equals(a, d2OptA.value[1])) {
                return false;
            }
        }
        return true;
    };
}
const empty = // the type annotation here is intended (otherwise it doesn't type-check)
new Map();
function getEq(SK, SA) {
    const isSubmapSKSA = isSubmap(SK, SA);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEquals"])((x, y)=>isSubmapSKSA(x, y) && isSubmapSKSA(y, x));
}
function getMonoid(SK, SA) {
    const lookupWithKeyS = lookupWithKey(SK);
    return {
        concat: (mx, my)=>{
            if (isEmpty(mx)) {
                return my;
            }
            if (isEmpty(my)) {
                return mx;
            }
            const r = new Map(mx);
            const entries = my.entries();
            let e;
            while(!(e = entries.next()).done){
                const [k, a] = e.value;
                const mxOptA = lookupWithKeyS(k, mx);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](mxOptA)) {
                    r.set(mxOptA.value[0], SA.concat(mxOptA.value[1], a));
                } else {
                    r.set(k, a);
                }
            }
            return r;
        },
        empty
    };
}
const singleton = (k, a)=>new Map([
        [
            k,
            a
        ]
    ]);
function fromFoldable(E, M, F) {
    return (fka)=>{
        const lookupWithKeyE = lookupWithKey(E);
        return F.reduce(fka, new Map(), (b, [k, a])=>{
            const bOpt = lookupWithKeyE(k, b);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](bOpt)) {
                b.set(bOpt.value[0], M.concat(bOpt.value[1], a));
            } else {
                b.set(k, a);
            }
            return b;
        });
    };
}
const _mapWithIndex = (fa, f)=>{
    const m = new Map();
    const entries = fa.entries();
    let e;
    while(!(e = entries.next()).done){
        const [key, a] = e.value;
        m.set(key, f(key, a));
    }
    return m;
};
const partitionMapWithIndex = (f)=>(fa)=>{
        const left = new Map();
        const right = new Map();
        const entries = fa.entries();
        let e;
        while(!(e = entries.next()).done){
            const [k, a] = e.value;
            const ei = f(k, a);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeft"](ei)) {
                left.set(k, ei.left);
            } else {
                right.set(k, ei.right);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
    };
function partitionWithIndex(predicateWithIndex) {
    return (m)=>{
        const left = new Map();
        const right = new Map();
        const entries = m.entries();
        let e;
        while(!(e = entries.next()).done){
            const [k, a] = e.value;
            if (predicateWithIndex(k, a)) {
                right.set(k, a);
            } else {
                left.set(k, a);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
    };
}
const filterMapWithIndex = (f)=>(fa)=>{
        const m = new Map();
        const entries = fa.entries();
        let e;
        while(!(e = entries.next()).done){
            const [k, a] = e.value;
            const o = f(k, a);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](o)) {
                m.set(k, o.value);
            }
        }
        return m;
    };
function filterWithIndex(predicateWithIndex) {
    return (m)=>{
        const out = new Map();
        const entries = m.entries();
        let e;
        while(!(e = entries.next()).done){
            const [k, a] = e.value;
            if (predicateWithIndex(k, a)) {
                out.set(k, a);
            }
        }
        return out;
    };
}
const _map = (fa, f)=>_mapWithIndex(fa, (_, a)=>f(a));
const _filter = (fa, p)=>_filterWithIndex(fa, (_, a)=>p(a));
const _filterMap = (fa, f)=>_filterMapWithIndex(fa, (_, a)=>f(a));
const _partition = (fa, predicate)=>_partitionWithIndex(fa, (_, a)=>predicate(a));
const _partitionMap = (fa, f)=>_partitionMapWithIndex(fa, (_, a)=>f(a));
const _filterWithIndex = (fa, p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filterWithIndex(p));
const _filterMapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filterMapWithIndex(f));
const _partitionWithIndex = (fa, p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partitionWithIndex(p));
const _partitionMapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partitionMapWithIndex(f));
const compact = (fa)=>{
    const m = new Map();
    const entries = fa.entries();
    let e;
    while(!(e = entries.next()).done){
        const [k, oa] = e.value;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](oa)) {
            m.set(k, oa.value);
        }
    }
    return m;
};
const filter = (predicate)=>(fa)=>_filter(fa, predicate);
const filterMap = (f)=>(fa)=>_filterMap(fa, f);
const map = (f)=>(fa)=>_map(fa, f);
const mapWithIndex = (f)=>(fa)=>_mapWithIndex(fa, f);
const partition = (predicate)=>(fa)=>_partition(fa, predicate);
const partitionMap = (f)=>(fa)=>_partitionMap(fa, f);
const separate = (fa)=>{
    const left = new Map();
    const right = new Map();
    const entries = fa.entries();
    let e;
    while(!(e = entries.next()).done){
        const [k, ei] = e.value;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeft"](ei)) {
            left.set(k, ei.left);
        } else {
            right.set(k, ei.right);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
};
const URI = 'ReadonlyMap';
const getUnionSemigroup = (E, S)=>{
    const unionES = union(E, S);
    return {
        concat: (first, second)=>unionES(second)(first)
    };
};
const getUnionMonoid = (E, S)=>({
        concat: getUnionSemigroup(E, S).concat,
        empty
    });
const getIntersectionSemigroup = (E, S)=>{
    const intersectionES = intersection(E, S);
    return {
        concat: (first, second)=>intersectionES(second)(first)
    };
};
const getDifferenceMagma = (E)=>()=>{
        const differenceE = difference(E);
        return {
            concat: (first, second)=>differenceE(second)(first)
        };
    };
function getFilterableWithIndex() {
    return {
        URI,
        _E: undefined,
        map: _map,
        mapWithIndex: _mapWithIndex,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex
    };
}
const Functor = {
    URI,
    map: _map
};
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const getFunctorWithIndex = ()=>({
        URI,
        _E: undefined,
        map: _map,
        mapWithIndex: _mapWithIndex
    });
const Compactable = {
    URI,
    compact,
    separate
};
const Filterable = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
const reduce = (O)=>{
    const reduceWithIndexO = reduceWithIndex(O);
    return (b, f)=>reduceWithIndexO(b, (_, b, a)=>f(b, a));
};
const foldMap = (O)=>{
    const foldMapWithIndexO = foldMapWithIndex(O);
    return (M)=>{
        const foldMapWithIndexOM = foldMapWithIndexO(M);
        return (f)=>foldMapWithIndexOM((_, a)=>f(a));
    };
};
const reduceRight = (O)=>{
    const reduceRightWithIndexO = reduceRightWithIndex(O);
    return (b, f)=>reduceRightWithIndexO(b, (_, b, a)=>f(b, a));
};
const getFoldable = (O)=>{
    const reduceO = reduce(O);
    const foldMapO = foldMap(O);
    const reduceRightO = reduceRight(O);
    return {
        URI,
        _E: undefined,
        reduce: (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceO(b, f)),
        foldMap: (M)=>{
            const foldMapOM = foldMapO(M);
            return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapOM(f));
        },
        reduceRight: (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRightO(b, f))
    };
};
const reduceWithIndex = (O)=>{
    const keysO = keys(O);
    return (b, f)=>(m)=>{
            let out = b;
            for (const k of keysO(m)){
                out = f(k, out, m.get(k));
            }
            return out;
        };
};
const foldMapWithIndex = (O)=>{
    const keysO = keys(O);
    return (M)=>(f)=>(m)=>{
                let out = M.empty;
                for (const k of keysO(m)){
                    out = M.concat(out, f(k, m.get(k)));
                }
                return out;
            };
};
const reduceRightWithIndex = (O)=>{
    const keysO = keys(O);
    return (b, f)=>(m)=>{
            let out = b;
            const ks = keysO(m);
            const len = ks.length;
            for(let i = len - 1; i >= 0; i--){
                const k = ks[i];
                out = f(k, m.get(k), out);
            }
            return out;
        };
};
const getFoldableWithIndex = (O)=>{
    const F = getFoldable(O);
    const reduceWithIndexO = reduceWithIndex(O);
    const foldMapWithIndexO = foldMapWithIndex(O);
    const reduceRightWithIndexO = reduceRightWithIndex(O);
    return {
        URI,
        _E: undefined,
        reduce: F.reduce,
        foldMap: F.foldMap,
        reduceRight: F.reduceRight,
        reduceWithIndex: (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceWithIndexO(b, f)),
        foldMapWithIndex: (M)=>{
            const foldMapWithIndexOM = foldMapWithIndexO(M);
            return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapWithIndexOM(f));
        },
        reduceRightWithIndex: (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRightWithIndexO(b, f))
    };
};
const getTraversable = (O)=>{
    const TWI = getTraversableWithIndex(O);
    const F = getFoldable(O);
    return {
        URI,
        _E: undefined,
        map: _map,
        reduce: F.reduce,
        foldMap: F.foldMap,
        reduceRight: F.reduceRight,
        traverse: TWI.traverse,
        sequence: TWI.sequence
    };
};
const getTraversableWithIndex = (O)=>{
    const FWI = getFoldableWithIndex(O);
    const keysO = keys(O);
    const traverseWithIndex = (F)=>{
        return (ta, f)=>{
            let fm = F.of(new Map());
            const ks = keysO(ta);
            const len = ks.length;
            for(let i = 0; i < len; i++){
                const key = ks[i];
                const a = ta.get(key);
                fm = F.ap(F.map(fm, (m)=>(b)=>m.set(key, b)), f(key, a));
            }
            return fm;
        };
    };
    const traverse = (F)=>{
        const traverseWithIndexF = traverseWithIndex(F);
        return (ta, f)=>traverseWithIndexF(ta, (_, a)=>f(a));
    };
    const sequence = (F)=>{
        const traverseWithIndexF = traverseWithIndex(F);
        return (ta)=>traverseWithIndexF(ta, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SK"]);
    };
    return {
        URI,
        _E: undefined,
        map: _map,
        mapWithIndex: _mapWithIndex,
        reduce: FWI.reduce,
        foldMap: FWI.foldMap,
        reduceRight: FWI.reduceRight,
        reduceWithIndex: FWI.reduceWithIndex,
        foldMapWithIndex: FWI.foldMapWithIndex,
        reduceRightWithIndex: FWI.reduceRightWithIndex,
        traverse,
        sequence,
        traverseWithIndex
    };
};
function getWitherable(O) {
    const TWI = getTraversableWithIndex(O);
    return {
        URI,
        _E: undefined,
        map: _map,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        reduce: TWI.reduce,
        foldMap: TWI.foldMap,
        reduceRight: TWI.reduceRight,
        traverse: TWI.traverse,
        sequence: TWI.sequence,
        mapWithIndex: _mapWithIndex,
        reduceWithIndex: TWI.reduceWithIndex,
        foldMapWithIndex: TWI.foldMapWithIndex,
        reduceRightWithIndex: TWI.reduceRightWithIndex,
        traverseWithIndex: TWI.traverseWithIndex,
        wilt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wiltDefault"])(TWI, Compactable),
        wither: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["witherDefault"])(TWI, Compactable)
    };
}
const union = (E, M)=>{
    const lookupE = lookup(E);
    return (second)=>(first)=>{
            if (isEmpty(first)) {
                return second;
            }
            if (isEmpty(second)) {
                return first;
            }
            const out = new Map();
            const firstEntries = first.entries();
            let e;
            while(!(e = firstEntries.next()).done){
                const [k, a] = e.value;
                const oka = lookupE(k)(second);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](oka)) {
                    out.set(k, M.concat(a, oka.value));
                } else {
                    out.set(k, a);
                }
            }
            const secondEntries = second.entries();
            while(!(e = secondEntries.next()).done){
                const [k, a] = e.value;
                const oka = lookupE(k)(out);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"](oka)) {
                    out.set(k, a);
                }
            }
            return out;
        };
};
const intersection = (E, M)=>{
    const lookupE = lookup(E);
    return (second)=>(first)=>{
            if (isEmpty(first) || isEmpty(second)) {
                return empty;
            }
            const out = new Map();
            const entries = first.entries();
            let e;
            while(!(e = entries.next()).done){
                const [k, a] = e.value;
                const oka = lookupE(k)(second);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](oka)) {
                    out.set(k, M.concat(a, oka.value));
                }
            }
            return out;
        };
};
const difference = (E)=>{
    const memberE = member(E);
    return (second)=>(first)=>{
            if (isEmpty(first)) {
                return second;
            }
            if (isEmpty(second)) {
                return first;
            }
            const out = new Map();
            const firstEntries = first.entries();
            let e;
            while(!(e = firstEntries.next()).done){
                const [k, a] = e.value;
                if (!memberE(k)(second)) {
                    out.set(k, a);
                }
            }
            const secondEntries = second.entries();
            while(!(e = secondEntries.next()).done){
                const [k, a] = e.value;
                if (!memberE(k)(first)) {
                    out.set(k, a);
                }
            }
            return out;
        };
};
const insertAt = upsertAt;
const readonlyMap = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlySet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "URI",
    ()=>URI,
    "chain",
    ()=>chain,
    "compact",
    ()=>compact,
    "difference",
    ()=>difference,
    "elem",
    ()=>elem,
    "empty",
    ()=>empty,
    "every",
    ()=>every,
    "filter",
    ()=>filter,
    "filterMap",
    ()=>filterMap,
    "foldMap",
    ()=>foldMap,
    "fromArray",
    ()=>fromArray,
    "fromReadonlyArray",
    ()=>fromReadonlyArray,
    "fromSet",
    ()=>fromSet,
    "getDifferenceMagma",
    ()=>getDifferenceMagma,
    "getEq",
    ()=>getEq,
    "getIntersectionSemigroup",
    ()=>getIntersectionSemigroup,
    "getShow",
    ()=>getShow,
    "getUnionMonoid",
    ()=>getUnionMonoid,
    "getUnionSemigroup",
    ()=>getUnionSemigroup,
    "insert",
    ()=>insert,
    "intersection",
    ()=>intersection,
    "isEmpty",
    ()=>isEmpty,
    "isSubset",
    ()=>isSubset,
    "map",
    ()=>map,
    "partition",
    ()=>partition,
    "partitionMap",
    ()=>partitionMap,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "remove",
    ()=>remove,
    "separate",
    ()=>separate,
    "singleton",
    ()=>singleton,
    "size",
    ()=>size,
    "some",
    ()=>some,
    "toReadonlyArray",
    ()=>toReadonlyArray,
    "toSet",
    ()=>toSet,
    "toggle",
    ()=>toggle,
    "union",
    ()=>union
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Eq.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Predicate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Separated.js [app-client] (ecmascript)");
;
;
;
;
const fromSet = (s)=>new Set(s);
const singleton = (a)=>new Set([
        a
    ]);
const fromReadonlyArray = (E)=>(as)=>{
        const len = as.length;
        const out = new Set();
        const has = elem(E);
        for(let i = 0; i < len; i++){
            const a = as[i];
            if (!has(a, out)) {
                out.add(a);
            }
        }
        return out;
    };
function toSet(s) {
    return new Set(s);
}
function map(E) {
    const elemE = elem(E);
    return (f)=>(set)=>{
            const r = new Set();
            set.forEach((e)=>{
                const v = f(e);
                if (!elemE(v, r)) {
                    r.add(v);
                }
            });
            return r;
        };
}
function chain(E) {
    const elemE = elem(E);
    return (f)=>(set)=>{
            const r = new Set();
            set.forEach((e)=>{
                f(e).forEach((e)=>{
                    if (!elemE(e, r)) {
                        r.add(e);
                    }
                });
            });
            return r;
        };
}
function filter(predicate) {
    return (set)=>{
        const values = set.values();
        let e;
        const r = new Set();
        while(!(e = values.next()).done){
            const a = e.value;
            if (predicate(a)) {
                r.add(a);
            }
        }
        return r;
    };
}
function partition(predicate) {
    return (set)=>{
        const values = set.values();
        let e;
        const right = new Set();
        const left = new Set();
        while(!(e = values.next()).done){
            const a = e.value;
            if (predicate(a)) {
                right.add(a);
            } else {
                left.add(a);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
    };
}
function union(E) {
    const elemE = elem(E);
    return (me, that)=>{
        if (that === undefined) {
            const unionE = union(E);
            return (that)=>unionE(me, that);
        }
        if (isEmpty(me)) {
            return that;
        }
        if (isEmpty(that)) {
            return me;
        }
        const r = new Set(me);
        that.forEach((e)=>{
            if (!elemE(e, r)) {
                r.add(e);
            }
        });
        return r;
    };
}
function intersection(E) {
    const elemE = elem(E);
    return (me, that)=>{
        if (that === undefined) {
            const intersectionE = intersection(E);
            return (that)=>intersectionE(that, me);
        }
        if (isEmpty(me) || isEmpty(that)) {
            return empty;
        }
        const r = new Set();
        me.forEach((e)=>{
            if (elemE(e, that)) {
                r.add(e);
            }
        });
        return r;
    };
}
function partitionMap(EB, EC) {
    return (f)=>(set)=>{
            const values = set.values();
            let e;
            const left = new Set();
            const right = new Set();
            const hasB = elem(EB);
            const hasC = elem(EC);
            while(!(e = values.next()).done){
                const v = f(e.value);
                switch(v._tag){
                    case 'Left':
                        if (!hasB(v.left, left)) {
                            left.add(v.left);
                        }
                        break;
                    case 'Right':
                        if (!hasC(v.right, right)) {
                            right.add(v.right);
                        }
                        break;
                }
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
        };
}
function difference(E) {
    const elemE = elem(E);
    return (me, that)=>{
        if (that === undefined) {
            const differenceE = difference(E);
            return (that)=>differenceE(that, me);
        }
        return filter((a)=>!elemE(a, that))(me);
    };
}
function reduce(O) {
    const toReadonlyArrayO = toReadonlyArray(O);
    return (b, f)=>(fa)=>toReadonlyArrayO(fa).reduce(f, b);
}
function foldMap(O, M) {
    const toReadonlyArrayO = toReadonlyArray(O);
    return (f)=>(fa)=>toReadonlyArrayO(fa).reduce((b, a)=>M.concat(b, f(a)), M.empty);
}
const reduceRight = (O)=>{
    const toReadonlyArrayO = toReadonlyArray(O);
    return (b, f)=>(fa)=>toReadonlyArrayO(fa).reduceRight((b, a)=>f(a, b), b);
};
function insert(E) {
    const elemE = elem(E);
    return (a)=>(set)=>{
            if (!elemE(a)(set)) {
                const r = new Set(set);
                r.add(a);
                return r;
            } else {
                return set;
            }
        };
}
const remove = (E)=>(a)=>(set)=>filter((ax)=>!E.equals(a, ax))(set);
const toggle = (E)=>{
    const elemE = elem(E);
    const removeE = remove(E);
    const insertE = insert(E);
    return (a)=>(set)=>(elemE(a, set) ? removeE : insertE)(a)(set);
};
const compact = (E)=>filterMap(E)(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
function separate(EE, EA) {
    return (fa)=>{
        const elemEE = elem(EE);
        const elemEA = elem(EA);
        const left = new Set();
        const right = new Set();
        fa.forEach((e)=>{
            switch(e._tag){
                case 'Left':
                    if (!elemEE(e.left, left)) {
                        left.add(e.left);
                    }
                    break;
                case 'Right':
                    if (!elemEA(e.right, right)) {
                        right.add(e.right);
                    }
                    break;
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
    };
}
function filterMap(E) {
    const elemE = elem(E);
    return (f)=>(fa)=>{
            const r = new Set();
            fa.forEach((a)=>{
                const ob = f(a);
                if (ob._tag === 'Some' && !elemE(ob.value, r)) {
                    r.add(ob.value);
                }
            });
            return r;
        };
}
const empty = new Set();
const isEmpty = (set)=>set.size === 0;
const size = (set)=>set.size;
const some = (predicate)=>(set)=>{
        const values = set.values();
        let e;
        let found = false;
        while(!found && !(e = values.next()).done){
            found = predicate(e.value);
        }
        return found;
    };
function every(predicate) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["not"])(some((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Predicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["not"])(predicate)));
}
function isSubset(E) {
    const elemE = elem(E);
    return (me, that)=>{
        if (that === undefined) {
            const isSubsetE = isSubset(E);
            return (that)=>isSubsetE(that, me);
        }
        return every((a)=>elemE(a, that))(me);
    };
}
function elem(E) {
    return (a, set)=>{
        if (set === undefined) {
            const elemE = elem(E);
            return (set)=>elemE(a, set);
        }
        const values = set.values();
        let e;
        let found = false;
        while(!found && !(e = values.next()).done){
            found = E.equals(a, e.value);
        }
        return found;
    };
}
const toReadonlyArray = (O)=>(set)=>{
        const out = [];
        set.forEach((e)=>out.push(e));
        return out.sort(O.compare);
    };
const URI = 'ReadonlySet';
function getShow(S) {
    return {
        show: (s)=>{
            const entries = [];
            s.forEach((a)=>{
                entries.push(S.show(a));
            });
            return `new Set([${entries.sort().join(', ')}])`;
        }
    };
}
function getEq(E) {
    const subsetE = isSubset(E);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEquals"])((x, y)=>subsetE(x, y) && subsetE(y, x));
}
const getUnionSemigroup = (E)=>({
        concat: union(E)
    });
const getUnionMonoid = (E)=>({
        concat: getUnionSemigroup(E).concat,
        empty
    });
const getIntersectionSemigroup = (E)=>({
        concat: intersection(E)
    });
const getDifferenceMagma = (E)=>({
        concat: difference(E)
    });
const fromArray = fromReadonlyArray;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eq",
    ()=>Eq,
    "Monoid",
    ()=>Monoid,
    "Ord",
    ()=>Ord,
    "Semigroup",
    ()=>Semigroup,
    "Show",
    ()=>Show,
    "empty",
    ()=>empty,
    "endsWith",
    ()=>endsWith,
    "includes",
    ()=>includes,
    "isEmpty",
    ()=>isEmpty,
    "isString",
    ()=>isString,
    "replace",
    ()=>replace,
    "size",
    ()=>size,
    "slice",
    ()=>slice,
    "split",
    ()=>split,
    "startsWith",
    ()=>startsWith,
    "toLowerCase",
    ()=>toLowerCase,
    "toUpperCase",
    ()=>toUpperCase,
    "trim",
    ()=>trim,
    "trimLeft",
    ()=>trimLeft,
    "trimRight",
    ()=>trimRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyNonEmptyArray.js [app-client] (ecmascript)");
;
const Eq = {
    equals: (first, second)=>first === second
};
const Semigroup = {
    concat: (first, second)=>first + second
};
const empty = '';
const Monoid = {
    concat: Semigroup.concat,
    empty
};
const Ord = {
    equals: Eq.equals,
    compare: (first, second)=>first < second ? -1 : first > second ? 1 : 0
};
const Show = {
    show: (s)=>JSON.stringify(s)
};
const isString = (u)=>typeof u === 'string';
const toUpperCase = (s)=>s.toUpperCase();
const toLowerCase = (s)=>s.toLowerCase();
const replace = (searchValue, replaceValue)=>(s)=>s.replace(searchValue, replaceValue);
const trim = (s)=>s.trim();
const trimLeft = (s)=>s.trimLeft();
const trimRight = (s)=>s.trimRight();
const slice = (start, end)=>(s)=>s.slice(start, end);
const isEmpty = (s)=>s.length === 0;
const size = (s)=>s.length;
const split = (separator)=>(s)=>{
        const out = s.split(separator);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyNonEmptyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonEmpty"])(out) ? out : [
            s
        ];
    };
const includes = (searchString, position)=>(s)=>s.includes(searchString, position);
const startsWith = (searchString, position)=>(s)=>s.startsWith(searchString, position);
const endsWith = (searchString, position)=>(s)=>s.endsWith(searchString, position);
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyRecord.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Compactable",
    ()=>Compactable,
    "Filterable",
    ()=>Filterable,
    "FilterableWithIndex",
    ()=>FilterableWithIndex,
    "Foldable",
    ()=>Foldable,
    "FoldableWithIndex",
    ()=>FoldableWithIndex,
    "Functor",
    ()=>Functor,
    "FunctorWithIndex",
    ()=>FunctorWithIndex,
    "Traversable",
    ()=>Traversable,
    "TraversableWithIndex",
    ()=>TraversableWithIndex,
    "URI",
    ()=>URI,
    "Witherable",
    ()=>Witherable,
    "_filter",
    ()=>_filter,
    "_filterMap",
    ()=>_filterMap,
    "_filterMapWithIndex",
    ()=>_filterMapWithIndex,
    "_filterWithIndex",
    ()=>_filterWithIndex,
    "_foldMap",
    ()=>_foldMap,
    "_foldMapWithIndex",
    ()=>_foldMapWithIndex,
    "_map",
    ()=>_map,
    "_mapWithIndex",
    ()=>_mapWithIndex,
    "_partition",
    ()=>_partition,
    "_partitionMap",
    ()=>_partitionMap,
    "_partitionMapWithIndex",
    ()=>_partitionMapWithIndex,
    "_partitionWithIndex",
    ()=>_partitionWithIndex,
    "_reduce",
    ()=>_reduce,
    "_reduceRight",
    ()=>_reduceRight,
    "_reduceRightWithIndex",
    ()=>_reduceRightWithIndex,
    "_reduceWithIndex",
    ()=>_reduceWithIndex,
    "_sequence",
    ()=>_sequence,
    "_traverse",
    ()=>_traverse,
    "collect",
    ()=>collect,
    "compact",
    ()=>compact,
    "deleteAt",
    ()=>deleteAt,
    "difference",
    ()=>difference,
    "elem",
    ()=>elem,
    "empty",
    ()=>empty,
    "every",
    ()=>every,
    "filter",
    ()=>filter,
    "filterMap",
    ()=>filterMap,
    "filterMapWithIndex",
    ()=>filterMapWithIndex,
    "filterWithIndex",
    ()=>filterWithIndex,
    "flap",
    ()=>flap,
    "foldMap",
    ()=>foldMap,
    "foldMapWithIndex",
    ()=>foldMapWithIndex,
    "fromEntries",
    ()=>fromEntries,
    "fromFoldable",
    ()=>fromFoldable,
    "fromFoldableMap",
    ()=>fromFoldableMap,
    "fromRecord",
    ()=>fromRecord,
    "getDifferenceMagma",
    ()=>getDifferenceMagma,
    "getEq",
    ()=>getEq,
    "getFoldable",
    ()=>getFoldable,
    "getFoldableWithIndex",
    ()=>getFoldableWithIndex,
    "getIntersectionSemigroup",
    ()=>getIntersectionSemigroup,
    "getMonoid",
    ()=>getMonoid,
    "getShow",
    ()=>getShow,
    "getTraversable",
    ()=>getTraversable,
    "getTraversableWithIndex",
    ()=>getTraversableWithIndex,
    "getUnionMonoid",
    ()=>getUnionMonoid,
    "getUnionSemigroup",
    ()=>getUnionSemigroup,
    "getWitherable",
    ()=>getWitherable,
    "has",
    ()=>has,
    "hasOwnProperty",
    ()=>hasOwnProperty,
    "insertAt",
    ()=>insertAt,
    "intersection",
    ()=>intersection,
    "isEmpty",
    ()=>isEmpty,
    "isSubrecord",
    ()=>isSubrecord,
    "keys",
    ()=>keys,
    "lookup",
    ()=>lookup,
    "map",
    ()=>map,
    "mapWithIndex",
    ()=>mapWithIndex,
    "modifyAt",
    ()=>modifyAt,
    "partition",
    ()=>partition,
    "partitionMap",
    ()=>partitionMap,
    "partitionMapWithIndex",
    ()=>partitionMapWithIndex,
    "partitionWithIndex",
    ()=>partitionWithIndex,
    "pop",
    ()=>pop,
    "readonlyRecord",
    ()=>readonlyRecord,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "reduceRightWithIndex",
    ()=>reduceRightWithIndex,
    "reduceWithIndex",
    ()=>reduceWithIndex,
    "separate",
    ()=>separate,
    "sequence",
    ()=>sequence,
    "singleton",
    ()=>singleton,
    "size",
    ()=>size,
    "some",
    ()=>some,
    "toEntries",
    ()=>toEntries,
    "toReadonlyArray",
    ()=>toReadonlyArray,
    "toRecord",
    ()=>toRecord,
    "toUnfoldable",
    ()=>toUnfoldable,
    "traverse",
    ()=>traverse,
    "traverseWithIndex",
    ()=>traverseWithIndex,
    "union",
    ()=>union,
    "updateAt",
    ()=>updateAt,
    "upsertAt",
    ()=>upsertAt,
    "wilt",
    ()=>wilt,
    "wither",
    ()=>wither
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Eq.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Separated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Witherable.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const fromRecord = (r)=>Object.assign({}, r);
const toRecord = (r)=>Object.assign({}, r);
const size = (r)=>Object.keys(r).length;
const isEmpty = (r)=>{
    for(const k in r){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k)) {
            return false;
        }
    }
    return true;
};
const keys_ = (O)=>(r)=>Object.keys(r).sort(O.compare);
const keys = /*#__PURE__*/ keys_(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]);
function collect(O) {
    if (typeof O === 'function') {
        return collect(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(O);
    }
    const keysO = keys_(O);
    return (f)=>(r)=>{
            const out = [];
            for (const key of keysO(r)){
                out.push(f(key, r[key]));
            }
            return out;
        };
}
const toReadonlyArray = /*#__PURE__*/ collect(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])((k, a)=>[
        k,
        a
    ]);
function toUnfoldable(U) {
    return (r)=>{
        const sas = toReadonlyArray(r);
        const len = sas.length;
        return U.unfold(0, (b)=>b < len ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"]([
                sas[b],
                b + 1
            ]) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"]);
    };
}
const upsertAt = (k, a)=>(r)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k) && r[k] === a) {
            return r;
        }
        const out = Object.assign({}, r);
        out[k] = a;
        return out;
    };
const has = (k, r)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k);
function deleteAt(k) {
    return (r)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k)) {
            return r;
        }
        const out = Object.assign({}, r);
        delete out[k];
        return out;
    };
}
const updateAt = (k, a)=>(r)=>{
        if (!has(k, r)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
        }
        if (r[k] === a) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](r);
        }
        const out = Object.assign({}, r);
        out[k] = a;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](out);
    };
const modifyAt = (k, f)=>(r)=>{
        if (!has(k, r)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
        }
        const next = f(r[k]);
        if (next === r[k]) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](r);
        }
        const out = Object.assign({}, r);
        out[k] = next;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](out);
    };
function pop(k) {
    const deleteAtk = deleteAt(k);
    return (r)=>{
        const oa = lookup(k, r);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"](oa) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"]([
            oa.value,
            deleteAtk(r)
        ]);
    };
}
function isSubrecord(E) {
    return (me, that)=>{
        if (that === undefined) {
            const isSubrecordE = isSubrecord(E);
            return (that)=>isSubrecordE(that, me);
        }
        for(const k in me){
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(that, k) || !E.equals(me[k], that[k])) {
                return false;
            }
        }
        return true;
    };
}
function lookup(k, r) {
    if (r === undefined) {
        return (r)=>lookup(k, r);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](r[k]) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
}
const empty = {};
function mapWithIndex(f) {
    return (r)=>{
        const out = {};
        for(const k in r){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k)) {
                out[k] = f(k, r[k]);
            }
        }
        return out;
    };
}
function map(f) {
    return mapWithIndex((_, a)=>f(a));
}
function reduceWithIndex(...args) {
    if (args.length === 2) {
        return reduceWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(...args);
    }
    const keysO = keys_(args[0]);
    return (b, f)=>(fa)=>{
            let out = b;
            const ks = keysO(fa);
            const len = ks.length;
            for(let i = 0; i < len; i++){
                const k = ks[i];
                out = f(k, out, fa[k]);
            }
            return out;
        };
}
function foldMapWithIndex(O) {
    if ('compare' in O) {
        const keysO = keys_(O);
        return (M)=>(f)=>(fa)=>{
                    let out = M.empty;
                    const ks = keysO(fa);
                    const len = ks.length;
                    for(let i = 0; i < len; i++){
                        const k = ks[i];
                        out = M.concat(out, f(k, fa[k]));
                    }
                    return out;
                };
    }
    return foldMapWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(O);
}
function reduceRightWithIndex(...args) {
    if (args.length === 2) {
        return reduceRightWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(...args);
    }
    const keysO = keys_(args[0]);
    return (b, f)=>(fa)=>{
            let out = b;
            const ks = keysO(fa);
            const len = ks.length;
            for(let i = len - 1; i >= 0; i--){
                const k = ks[i];
                out = f(k, fa[k], out);
            }
            return out;
        };
}
const singleton = (k, a)=>({
        [k]: a
    });
function traverseWithIndex(F) {
    const traverseWithIndexOF = _traverseWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(F);
    return (f)=>(ta)=>traverseWithIndexOF(ta, f);
}
function traverse(F) {
    const traverseOF = _traverse(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(F);
    return (f)=>(ta)=>traverseOF(ta, f);
}
function sequence(F) {
    return _sequence(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(F);
}
const wither = (F)=>{
    const traverseF = traverse(F);
    return (f)=>(fa)=>F.map((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, traverseF(f)), compact);
};
const wilt = (F)=>{
    const traverseF = traverse(F);
    return (f)=>(fa)=>F.map((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, traverseF(f)), separate);
};
function partitionMapWithIndex(f) {
    return (r)=>{
        const left = {};
        const right = {};
        for(const k in r){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k)) {
                const e = f(k, r[k]);
                switch(e._tag){
                    case 'Left':
                        left[k] = e.left;
                        break;
                    case 'Right':
                        right[k] = e.right;
                        break;
                }
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
    };
}
function partitionWithIndex(predicateWithIndex) {
    return (r)=>{
        const left = {};
        const right = {};
        for(const k in r){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k)) {
                const a = r[k];
                if (predicateWithIndex(k, a)) {
                    right[k] = a;
                } else {
                    left[k] = a;
                }
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
    };
}
function filterMapWithIndex(f) {
    return (r)=>{
        const out = {};
        for(const k in r){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k)) {
                const ob = f(k, r[k]);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](ob)) {
                    out[k] = ob.value;
                }
            }
        }
        return out;
    };
}
function filterWithIndex(predicateWithIndex) {
    return (fa)=>{
        const out = {};
        let changed = false;
        for(const key in fa){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(fa, key)) {
                const a = fa[key];
                if (predicateWithIndex(key, a)) {
                    out[key] = a;
                } else {
                    changed = true;
                }
            }
        }
        return changed ? out : fa;
    };
}
function fromFoldable(M, F) {
    const fromFoldableMapM = fromFoldableMap(M, F);
    return (fka)=>fromFoldableMapM(fka, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
}
function fromFoldableMap(M, F) {
    return (ta, f)=>{
        return F.reduce(ta, {}, (r, a)=>{
            const [k, b] = f(a);
            r[k] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k) ? M.concat(r[k], b) : b;
            return r;
        });
    };
}
const toEntries = toReadonlyArray;
const fromEntries = (fa)=>{
    const out = {};
    for (const a of fa){
        out[a[0]] = a[1];
    }
    return out;
};
function every(predicate) {
    return (r)=>{
        for(const k in r){
            if (!predicate(r[k])) {
                return false;
            }
        }
        return true;
    };
}
function some(predicate) {
    return (r)=>{
        for(const k in r){
            if (predicate(r[k])) {
                return true;
            }
        }
        return false;
    };
}
function elem(E) {
    return (a, fa)=>{
        if (fa === undefined) {
            const elemE = elem(E);
            return (fa)=>elemE(a, fa);
        }
        for(const k in fa){
            if (E.equals(fa[k], a)) {
                return true;
            }
        }
        return false;
    };
}
const union = (M)=>(second)=>(first)=>{
            if (isEmpty(first)) {
                return second;
            }
            if (isEmpty(second)) {
                return first;
            }
            const out = {};
            for(const k in first){
                if (has(k, second)) {
                    out[k] = M.concat(first[k], second[k]);
                } else {
                    out[k] = first[k];
                }
            }
            for(const k in second){
                if (!has(k, out)) {
                    out[k] = second[k];
                }
            }
            return out;
        };
const intersection = (M)=>(second)=>(first)=>{
            if (isEmpty(first) || isEmpty(second)) {
                return empty;
            }
            const out = {};
            for(const k in first){
                if (has(k, second)) {
                    out[k] = M.concat(first[k], second[k]);
                }
            }
            return out;
        };
const difference = (second)=>(first)=>{
        if (isEmpty(first)) {
            return second;
        }
        if (isEmpty(second)) {
            return first;
        }
        const out = {};
        for(const k in first){
            if (!has(k, second)) {
                out[k] = first[k];
            }
        }
        for(const k in second){
            if (!has(k, first)) {
                out[k] = second[k];
            }
        }
        return out;
    };
const _map = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f));
const _mapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, mapWithIndex(f));
const _reduce = (O)=>{
    const reduceO = reduce(O);
    return (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceO(b, f));
};
const _foldMap = (O)=>(M)=>{
        const foldMapM = foldMap(O)(M);
        return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapM(f));
    };
const _reduceRight = (O)=>{
    const reduceRightO = reduceRight(O);
    return (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRightO(b, f));
};
const _filter = (fa, predicate)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filter(predicate));
const _filterMap = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filterMap(f));
const _partition = (fa, predicate)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partition(predicate));
const _partitionMap = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partitionMap(f));
const _reduceWithIndex = (O)=>{
    const reduceWithIndexO = reduceWithIndex(O);
    return (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceWithIndexO(b, f));
};
const _foldMapWithIndex = (O)=>{
    const foldMapWithIndexO = foldMapWithIndex(O);
    return (M)=>{
        const foldMapWithIndexM = foldMapWithIndexO(M);
        return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapWithIndexM(f));
    };
};
const _reduceRightWithIndex = (O)=>{
    const reduceRightWithIndexO = reduceRightWithIndex(O);
    return (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRightWithIndexO(b, f));
};
const _partitionMapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partitionMapWithIndex(f));
const _partitionWithIndex = (fa, predicateWithIndex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, partitionWithIndex(predicateWithIndex));
const _filterMapWithIndex = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filterMapWithIndex(f));
const _filterWithIndex = (fa, predicateWithIndex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, filterWithIndex(predicateWithIndex));
const _traverse = (O)=>{
    const traverseWithIndexO = _traverseWithIndex(O);
    return (F)=>{
        const traverseWithIndexOF = traverseWithIndexO(F);
        return (ta, f)=>traverseWithIndexOF(ta, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SK"], f));
    };
};
const _sequence = (O)=>{
    const traverseO = _traverse(O);
    return (F)=>{
        const traverseOF = traverseO(F);
        return (ta)=>traverseOF(ta, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
    };
};
const _traverseWithIndex = (O)=>(F)=>{
        const keysO = keys_(O);
        return (ta, f)=>{
            const ks = keysO(ta);
            if (ks.length === 0) {
                return F.of(empty);
            }
            let fr = F.of({});
            for (const key of ks){
                fr = F.ap(F.map(fr, (r)=>(b)=>Object.assign({}, r, {
                            [key]: b
                        })), f(key, ta[key]));
            }
            return fr;
        };
    };
const filter = (predicate)=>filterWithIndex((_, a)=>predicate(a));
const filterMap = (f)=>filterMapWithIndex((_, a)=>f(a));
const partition = (predicate)=>partitionWithIndex((_, a)=>predicate(a));
const partitionMap = (f)=>partitionMapWithIndex((_, a)=>f(a));
function reduce(...args) {
    if (args.length === 1) {
        const reduceWithIndexO = reduceWithIndex(args[0]);
        return (b, f)=>reduceWithIndexO(b, (_, b, a)=>f(b, a));
    }
    return reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(...args);
}
function foldMap(O) {
    if ('compare' in O) {
        const foldMapWithIndexO = foldMapWithIndex(O);
        return (M)=>{
            const foldMapWithIndexM = foldMapWithIndexO(M);
            return (f)=>foldMapWithIndexM((_, a)=>f(a));
        };
    }
    return foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(O);
}
function reduceRight(...args) {
    if (args.length === 1) {
        const reduceRightWithIndexO = reduceRightWithIndex(args[0]);
        return (b, f)=>reduceRightWithIndexO(b, (_, b, a)=>f(b, a));
    }
    return reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(...args);
}
const compact = (r)=>{
    const out = {};
    for(const k in r){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k)) {
            const oa = r[k];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSome"](oa)) {
                out[k] = oa.value;
            }
        }
    }
    return out;
};
const separate = (r)=>{
    const left = {};
    const right = {};
    for(const k in r){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k)) {
            const e = r[k];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeft"](e)) {
                left[k] = e.left;
            } else {
                right[k] = e.right;
            }
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(left, right);
};
const URI = 'ReadonlyRecord';
function getShow(O) {
    if ('compare' in O) {
        return (S)=>({
                show: (r)=>{
                    const elements = collect(O)((k, a)=>`${JSON.stringify(k)}: ${S.show(a)}`)(r).join(', ');
                    return elements === '' ? '{}' : `{ ${elements} }`;
                }
            });
    }
    return getShow(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(O);
}
function getEq(E) {
    const isSubrecordE = isSubrecord(E);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEquals"])((x, y)=>isSubrecordE(x)(y) && isSubrecordE(y)(x));
}
function getMonoid(S) {
    return {
        concat: (first, second)=>{
            if (isEmpty(first)) {
                return second;
            }
            if (isEmpty(second)) {
                return first;
            }
            const r = Object.assign({}, first);
            for(const k in second){
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(second, k)) {
                    r[k] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(first, k) ? S.concat(first[k], second[k]) : second[k];
                }
            }
            return r;
        },
        empty
    };
}
const Functor = {
    URI,
    map: _map
};
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const FunctorWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
const getFoldable = (O)=>({
        URI,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O)
    });
const getFoldableWithIndex = (O)=>({
        URI,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        reduceWithIndex: _reduceWithIndex(O),
        foldMapWithIndex: _foldMapWithIndex(O),
        reduceRightWithIndex: _reduceRightWithIndex(O)
    });
const Compactable = {
    URI,
    compact,
    separate
};
const Filterable = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
const FilterableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex
};
const getTraversable = (O)=>({
        URI,
        map: _map,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        traverse: _traverse(O),
        sequence: _sequence(O)
    });
const getTraversableWithIndex = (O)=>({
        URI,
        map: _map,
        mapWithIndex: _mapWithIndex,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        reduceWithIndex: _reduceWithIndex(O),
        foldMapWithIndex: _foldMapWithIndex(O),
        reduceRightWithIndex: _reduceRightWithIndex(O),
        traverse: _traverse(O),
        sequence: _sequence(O),
        traverseWithIndex: _traverseWithIndex(O)
    });
const getWitherable = (O)=>{
    const T = getTraversable(O);
    return {
        URI,
        map: _map,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        traverse: T.traverse,
        sequence: T.sequence,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        wither: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["witherDefault"])(T, Compactable),
        wilt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wiltDefault"])(T, Compactable)
    };
};
const getUnionSemigroup = (S)=>{
    const unionS = union(S);
    return {
        concat: (first, second)=>unionS(second)(first)
    };
};
const getUnionMonoid = (S)=>({
        concat: getUnionSemigroup(S).concat,
        empty
    });
const getIntersectionSemigroup = (S)=>{
    const intersectionS = intersection(S);
    return {
        concat: (first, second)=>intersectionS(second)(first)
    };
};
const getDifferenceMagma = ()=>({
        concat: (first, second)=>difference(second)(first)
    });
const Foldable = {
    URI,
    reduce: /*#__PURE__*/ _reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMap: /*#__PURE__*/ _foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRight: /*#__PURE__*/ _reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])
};
const FoldableWithIndex = {
    URI,
    reduce: /*#__PURE__*/ _reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMap: /*#__PURE__*/ _foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRight: /*#__PURE__*/ _reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])
};
const Traversable = {
    URI,
    map: _map,
    reduce: /*#__PURE__*/ _reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMap: /*#__PURE__*/ _foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRight: /*#__PURE__*/ _reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    traverse: /*#__PURE__*/ _traverse(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    sequence
};
const TraversableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: /*#__PURE__*/ _reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMap: /*#__PURE__*/ _foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRight: /*#__PURE__*/ _reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    traverse: /*#__PURE__*/ _traverse(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    sequence,
    traverseWithIndex: /*#__PURE__*/ _traverseWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])
};
const _wither = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["witherDefault"])(Traversable, Compactable);
const _wilt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wiltDefault"])(Traversable, Compactable);
const Witherable = {
    URI,
    map: _map,
    reduce: /*#__PURE__*/ _reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMap: /*#__PURE__*/ _foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRight: /*#__PURE__*/ _reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    traverse: /*#__PURE__*/ _traverse(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    sequence,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
const insertAt = upsertAt;
function hasOwnProperty(k, r) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r === undefined ? this : r, k);
}
const readonlyRecord = {
    URI,
    map: _map,
    reduce: /*#__PURE__*/ _reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMap: /*#__PURE__*/ _foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRight: /*#__PURE__*/ _reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    traverse: /*#__PURE__*/ _traverse(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    sequence,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    traverseWithIndex: /*#__PURE__*/ _traverseWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    wither: _wither,
    wilt: _wilt
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ChainRec.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @since 2.0.0
 */ __turbopack_context__.s([
    "tailRec",
    ()=>tailRec
]);
const tailRec = (startWith, f)=>{
    let ab = f(startWith);
    while(ab._tag === 'Left'){
        ab = f(ab.left);
    }
    return ab.right;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Either.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alt",
    ()=>Alt,
    "ApT",
    ()=>ApT,
    "Applicative",
    ()=>Applicative,
    "Apply",
    ()=>Apply,
    "Bifunctor",
    ()=>Bifunctor,
    "Chain",
    ()=>Chain,
    "ChainRec",
    ()=>ChainRec,
    "Do",
    ()=>Do,
    "Extend",
    ()=>Extend,
    "Foldable",
    ()=>Foldable,
    "FromEither",
    ()=>FromEither,
    "Functor",
    ()=>Functor,
    "Monad",
    ()=>Monad,
    "MonadThrow",
    ()=>MonadThrow,
    "Pointed",
    ()=>Pointed,
    "Traversable",
    ()=>Traversable,
    "URI",
    ()=>URI,
    "alt",
    ()=>alt,
    "altW",
    ()=>altW,
    "ap",
    ()=>ap,
    "apFirst",
    ()=>apFirst,
    "apFirstW",
    ()=>apFirstW,
    "apS",
    ()=>apS,
    "apSW",
    ()=>apSW,
    "apSecond",
    ()=>apSecond,
    "apSecondW",
    ()=>apSecondW,
    "apW",
    ()=>apW,
    "as",
    ()=>as,
    "asUnit",
    ()=>asUnit,
    "bimap",
    ()=>bimap,
    "bind",
    ()=>bind,
    "bindTo",
    ()=>bindTo,
    "bindW",
    ()=>bindW,
    "chain",
    ()=>chain,
    "chainFirst",
    ()=>chainFirst,
    "chainFirstW",
    ()=>chainFirstW,
    "chainNullableK",
    ()=>chainNullableK,
    "chainOptionK",
    ()=>chainOptionK,
    "chainOptionKW",
    ()=>chainOptionKW,
    "chainW",
    ()=>chainW,
    "duplicate",
    ()=>duplicate,
    "either",
    ()=>either,
    "elem",
    ()=>elem,
    "exists",
    ()=>exists,
    "extend",
    ()=>extend,
    "filterOrElse",
    ()=>filterOrElse,
    "filterOrElseW",
    ()=>filterOrElseW,
    "flap",
    ()=>flap,
    "flatMap",
    ()=>flatMap,
    "flatMapNullable",
    ()=>flatMapNullable,
    "flatMapOption",
    ()=>flatMapOption,
    "flatten",
    ()=>flatten,
    "flattenW",
    ()=>flattenW,
    "fold",
    ()=>fold,
    "foldMap",
    ()=>foldMap,
    "foldW",
    ()=>foldW,
    "fromNullable",
    ()=>fromNullable,
    "fromNullableK",
    ()=>fromNullableK,
    "fromOption",
    ()=>fromOption,
    "fromOptionK",
    ()=>fromOptionK,
    "fromPredicate",
    ()=>fromPredicate,
    "getAltValidation",
    ()=>getAltValidation,
    "getApplicativeValidation",
    ()=>getApplicativeValidation,
    "getApplyMonoid",
    ()=>getApplyMonoid,
    "getApplySemigroup",
    ()=>getApplySemigroup,
    "getCompactable",
    ()=>getCompactable,
    "getEq",
    ()=>getEq,
    "getFilterable",
    ()=>getFilterable,
    "getOrElse",
    ()=>getOrElse,
    "getOrElseW",
    ()=>getOrElseW,
    "getSemigroup",
    ()=>getSemigroup,
    "getShow",
    ()=>getShow,
    "getValidation",
    ()=>getValidation,
    "getValidationMonoid",
    ()=>getValidationMonoid,
    "getValidationSemigroup",
    ()=>getValidationSemigroup,
    "getWitherable",
    ()=>getWitherable,
    "isLeft",
    ()=>isLeft,
    "isRight",
    ()=>isRight,
    "left",
    ()=>left,
    "let",
    ()=>let_,
    "liftNullable",
    ()=>liftNullable,
    "liftOption",
    ()=>liftOption,
    "map",
    ()=>map,
    "mapLeft",
    ()=>mapLeft,
    "match",
    ()=>match,
    "matchW",
    ()=>matchW,
    "of",
    ()=>of,
    "orElse",
    ()=>orElse,
    "orElseW",
    ()=>orElseW,
    "parseJSON",
    ()=>parseJSON,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "right",
    ()=>right,
    "sequence",
    ()=>sequence,
    "sequenceArray",
    ()=>sequenceArray,
    "stringifyJSON",
    ()=>stringifyJSON,
    "swap",
    ()=>swap,
    "tap",
    ()=>tap,
    "throwError",
    ()=>throwError,
    "toError",
    ()=>toError,
    "toUnion",
    ()=>toUnion,
    "traverse",
    ()=>traverse,
    "traverseArray",
    ()=>traverseArray,
    "traverseArrayWithIndex",
    ()=>traverseArrayWithIndex,
    "traverseReadonlyArrayWithIndex",
    ()=>traverseReadonlyArrayWithIndex,
    "traverseReadonlyNonEmptyArrayWithIndex",
    ()=>traverseReadonlyNonEmptyArrayWithIndex,
    "tryCatch",
    ()=>tryCatch,
    "tryCatchK",
    ()=>tryCatchK
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Applicative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Applicative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Apply.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ChainRec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ChainRec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/FromEither.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Separated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Witherable.js [app-client] (ecmascript)");
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
const left = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"];
const right = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"];
const flatMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (ma, f)=>isLeft(ma) ? ma : f(ma.right));
const _map = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, map(f));
const _ap = (fab, fa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fab, ap(fa));
/* istanbul ignore next */ const _reduce = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduce(b, f));
/* istanbul ignore next */ const _foldMap = (M)=>(fa, f)=>{
        const foldMapM = foldMap(M);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapM(f));
    };
/* istanbul ignore next */ const _reduceRight = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRight(b, f));
const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseF(f));
};
const _bimap = (fa, f, g)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, bimap(f, g));
const _mapLeft = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, mapLeft(f));
/* istanbul ignore next */ const _alt = (fa, that)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, alt(that));
/* istanbul ignore next */ const _extend = (wa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(wa, extend(f));
const _chainRec = (a, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ChainRec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tailRec"])(f(a), (e)=>isLeft(e) ? right(left(e.left)) : isLeft(e.right) ? left(f(e.right.left)) : right(right(e.right.right)));
const URI = 'Either';
const getShow = (SE, SA)=>({
        show: (ma)=>isLeft(ma) ? `left(${SE.show(ma.left)})` : `right(${SA.show(ma.right)})`
    });
const getEq = (EL, EA)=>({
        equals: (x, y)=>x === y || (isLeft(x) ? isLeft(y) && EL.equals(x.left, y.left) : isRight(y) && EA.equals(x.right, y.right))
    });
const getSemigroup = (S)=>({
        concat: (x, y)=>isLeft(y) ? x : isLeft(x) ? y : right(S.concat(x.right, y.right))
    });
const getCompactable = (M)=>{
    const empty = left(M.empty);
    return {
        URI,
        _E: undefined,
        compact: (ma)=>isLeft(ma) ? ma : ma.right._tag === 'None' ? empty : right(ma.right.value),
        separate: (ma)=>isLeft(ma) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(ma, ma) : isLeft(ma.right) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(right(ma.right.left), empty) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(empty, right(ma.right.right))
    };
};
const getFilterable = (M)=>{
    const empty = left(M.empty);
    const { compact, separate } = getCompactable(M);
    const filter = (ma, predicate)=>isLeft(ma) ? ma : predicate(ma.right) ? ma : empty;
    const partition = (ma, p)=>{
        return isLeft(ma) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(ma, ma) : p(ma.right) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(empty, right(ma.right)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(right(ma.right), empty);
    };
    return {
        URI,
        _E: undefined,
        map: _map,
        compact,
        separate,
        filter,
        filterMap: (ma, f)=>{
            if (isLeft(ma)) {
                return ma;
            }
            const ob = f(ma.right);
            return ob._tag === 'None' ? empty : right(ob.value);
        },
        partition,
        partitionMap: (ma, f)=>{
            if (isLeft(ma)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(ma, ma);
            }
            const e = f(ma.right);
            return isLeft(e) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(right(e.left), empty) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Separated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separated"])(empty, right(e.right));
        }
    };
};
const getWitherable = (M)=>{
    const F_ = getFilterable(M);
    const C = getCompactable(M);
    return {
        URI,
        _E: undefined,
        map: _map,
        compact: F_.compact,
        separate: F_.separate,
        filter: F_.filter,
        filterMap: F_.filterMap,
        partition: F_.partition,
        partitionMap: F_.partitionMap,
        traverse: _traverse,
        sequence,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        wither: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["witherDefault"])(Traversable, C),
        wilt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wiltDefault"])(Traversable, C)
    };
};
const getApplicativeValidation = (SE)=>({
        URI,
        _E: undefined,
        map: _map,
        ap: (fab, fa)=>isLeft(fab) ? isLeft(fa) ? left(SE.concat(fab.left, fa.left)) : fab : isLeft(fa) ? fa : right(fab.right(fa.right)),
        of
    });
const getAltValidation = (SE)=>({
        URI,
        _E: undefined,
        map: _map,
        alt: (me, that)=>{
            if (isRight(me)) {
                return me;
            }
            const ea = that();
            return isLeft(ea) ? left(SE.concat(me.left, ea.left)) : ea;
        }
    });
const map = (f)=>(fa)=>isLeft(fa) ? fa : right(f(fa.right));
const Functor = {
    URI,
    map: _map
};
const as = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["as"])(Functor));
const asUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUnit"])(Functor);
const of = right;
const Pointed = {
    URI,
    of
};
const apW = (fa)=>(fab)=>isLeft(fab) ? fab : isLeft(fa) ? fa : right(fab.right(fa.right));
const ap = apW;
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of
};
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
const Monad = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap
};
const reduce = (b, f)=>(fa)=>isLeft(fa) ? b : f(b, fa.right);
const foldMap = (M)=>(f)=>(fa)=>isLeft(fa) ? M.empty : f(fa.right);
const reduceRight = (b, f)=>(fa)=>isLeft(fa) ? b : f(fa.right, b);
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const traverse = (F)=>(f)=>(ta)=>isLeft(ta) ? F.of(left(ta.left)) : F.map(f(ta.right), right);
const sequence = (F)=>(ma)=>{
        return isLeft(ma) ? F.of(left(ma.left)) : F.map(ma.right, right);
    };
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const bimap = (f, g)=>(fa)=>isLeft(fa) ? left(f(fa.left)) : right(g(fa.right));
const mapLeft = (f)=>(fa)=>isLeft(fa) ? left(f(fa.left)) : fa;
const Bifunctor = {
    URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
const altW = (that)=>(fa)=>isLeft(fa) ? that() : fa;
const alt = altW;
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const extend = (f)=>(wa)=>isLeft(wa) ? wa : right(f(wa));
const Extend = {
    URI,
    map: _map,
    extend: _extend
};
const ChainRec = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRec
};
const throwError = left;
const MonadThrow = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap,
    throwError
};
const FromEither = {
    URI,
    fromEither: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]
};
const fromPredicate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromPredicate"])(FromEither);
const fromOption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromOption"])(FromEither);
const isLeft = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeft"];
const isRight = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRight"];
const matchW = (onLeft, onRight)=>(ma)=>isLeft(ma) ? onLeft(ma.left) : onRight(ma.right);
const foldW = matchW;
const match = matchW;
const fold = match;
const getOrElseW = (onLeft)=>(ma)=>isLeft(ma) ? onLeft(ma.left) : ma.right;
const getOrElse = getOrElseW;
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const apFirst = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apFirst"])(Apply);
const apFirstW = apFirst;
const apSecond = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apSecond"])(Apply);
const apSecondW = apSecond;
const tap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dual"])(2, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tap"](Chain));
const flattenW = /*#__PURE__*/ flatMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const flatten = flattenW;
const duplicate = /*#__PURE__*/ extend(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const fromOptionK = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromOptionK"])(FromEither);
const chainOptionK = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chainOptionK"])(FromEither, Chain);
const chainOptionKW = chainOptionK;
/** @internal */ const _FromEither = {
    fromEither: FromEither.fromEither
};
const liftNullable = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftNullable"](_FromEither);
const liftOption = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftOption"](_FromEither);
/** @internal */ const _FlatMap = {
    flatMap
};
const flatMapNullable = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flatMapNullable"](_FromEither, _FlatMap);
const flatMapOption = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flatMapOption"](_FromEither, _FlatMap);
const filterOrElse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$FromEither$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterOrElse"])(FromEither, Chain);
const filterOrElseW = filterOrElse;
const swap = (ma)=>isLeft(ma) ? right(ma.left) : left(ma.right);
const orElseW = (onLeft)=>(ma)=>isLeft(ma) ? onLeft(ma.left) : ma;
const orElse = orElseW;
const fromNullable = (e)=>(a)=>a == null ? left(e) : right(a);
const tryCatch = (f, onThrow)=>{
    try {
        return right(f());
    } catch (e) {
        return left(onThrow(e));
    }
};
const tryCatchK = (f, onThrow)=>(...a)=>tryCatch(()=>f(...a), onThrow);
const fromNullableK = (e)=>{
    const from = fromNullable(e);
    return (f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(f, from);
};
const chainNullableK = (e)=>{
    const from = fromNullableK(e);
    return (f)=>flatMap(from(f));
};
const toUnion = /*#__PURE__*/ foldW(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
function toError(e) {
    try {
        return e instanceof Error ? e : new Error(String(e));
    } catch (error) {
        return new Error();
    }
}
function elem(E) {
    return (a, ma)=>{
        if (ma === undefined) {
            const elemE = elem(E);
            return (ma)=>elemE(a, ma);
        }
        return isLeft(ma) ? false : E.equals(a, ma.right);
    };
}
const exists = (predicate)=>(ma)=>isLeft(ma) ? false : predicate(ma.right);
const Do = /*#__PURE__*/ of(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRecord"]);
const bindTo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindTo"])(Functor);
const let_ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["let"])(Functor);
;
const bind = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](Chain);
const bindW = bind;
const apS = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apS"])(Apply);
const apSW = apS;
const ApT = /*#__PURE__*/ of(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyReadonlyArray"]);
const traverseReadonlyNonEmptyArrayWithIndex = (f)=>(as)=>{
        const e = f(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["head"](as));
        if (isLeft(e)) {
            return e;
        }
        const out = [
            e.right
        ];
        for(let i = 1; i < as.length; i++){
            const e = f(i, as[i]);
            if (isLeft(e)) {
                return e;
            }
            out.push(e.right);
        }
        return right(out);
    };
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonEmpty"](as) ? g(as) : ApT;
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const chainW = flatMap;
const chain = flatMap;
const chainFirst = tap;
const chainFirstW = tap;
function parseJSON(s, onError) {
    return tryCatch(()=>JSON.parse(s), onError);
}
const stringifyJSON = (u, onError)=>tryCatch(()=>{
        const s = JSON.stringify(u);
        if (typeof s !== 'string') {
            throw new Error('Converting unsupported structure to JSON');
        }
        return s;
    }, onError);
const either = {
    URI,
    map: _map,
    of,
    ap: _ap,
    chain: flatMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt,
    extend: _extend,
    chainRec: _chainRec,
    throwError: throwError
};
const getApplySemigroup = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApplySemigroup"])(Apply);
const getApplyMonoid = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Applicative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApplicativeMonoid"])(Applicative);
const getValidationSemigroup = (SE, SA)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Apply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApplySemigroup"])(getApplicativeValidation(SE))(SA);
const getValidationMonoid = (SE, MA)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Applicative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApplicativeMonoid"])(getApplicativeValidation(SE))(MA);
function getValidation(SE) {
    const ap = getApplicativeValidation(SE).ap;
    const alt = getAltValidation(SE).alt;
    return {
        URI,
        _E: undefined,
        map: _map,
        of,
        chain: flatMap,
        bimap: _bimap,
        mapLeft: _mapLeft,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        extend: _extend,
        traverse: _traverse,
        sequence,
        chainRec: _chainRec,
        throwError,
        ap,
        alt
    };
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Record.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Compactable",
    ()=>Compactable,
    "Filterable",
    ()=>Filterable,
    "FilterableWithIndex",
    ()=>FilterableWithIndex,
    "Foldable",
    ()=>Foldable,
    "FoldableWithIndex",
    ()=>FoldableWithIndex,
    "Functor",
    ()=>Functor,
    "FunctorWithIndex",
    ()=>FunctorWithIndex,
    "Traversable",
    ()=>Traversable,
    "TraversableWithIndex",
    ()=>TraversableWithIndex,
    "URI",
    ()=>URI,
    "Witherable",
    ()=>Witherable,
    "collect",
    ()=>collect,
    "compact",
    ()=>compact,
    "deleteAt",
    ()=>deleteAt,
    "difference",
    ()=>difference,
    "elem",
    ()=>elem,
    "empty",
    ()=>empty,
    "every",
    ()=>every,
    "filter",
    ()=>filter,
    "filterMap",
    ()=>filterMap,
    "filterMapWithIndex",
    ()=>filterMapWithIndex,
    "filterWithIndex",
    ()=>filterWithIndex,
    "flap",
    ()=>flap,
    "foldMap",
    ()=>foldMap,
    "foldMapWithIndex",
    ()=>foldMapWithIndex,
    "fromEntries",
    ()=>fromEntries,
    "fromFoldable",
    ()=>fromFoldable,
    "fromFoldableMap",
    ()=>fromFoldableMap,
    "getDifferenceMagma",
    ()=>getDifferenceMagma,
    "getEq",
    ()=>getEq,
    "getFoldable",
    ()=>getFoldable,
    "getFoldableWithIndex",
    ()=>getFoldableWithIndex,
    "getIntersectionSemigroup",
    ()=>getIntersectionSemigroup,
    "getMonoid",
    ()=>getMonoid,
    "getShow",
    ()=>getShow,
    "getTraversable",
    ()=>getTraversable,
    "getTraversableWithIndex",
    ()=>getTraversableWithIndex,
    "getUnionMonoid",
    ()=>getUnionMonoid,
    "getUnionSemigroup",
    ()=>getUnionSemigroup,
    "getWitherable",
    ()=>getWitherable,
    "has",
    ()=>has,
    "hasOwnProperty",
    ()=>hasOwnProperty,
    "insertAt",
    ()=>insertAt,
    "intersection",
    ()=>intersection,
    "isEmpty",
    ()=>isEmpty,
    "isSubrecord",
    ()=>isSubrecord,
    "keys",
    ()=>keys,
    "lookup",
    ()=>lookup,
    "map",
    ()=>map,
    "mapWithIndex",
    ()=>mapWithIndex,
    "modifyAt",
    ()=>modifyAt,
    "partition",
    ()=>partition,
    "partitionMap",
    ()=>partitionMap,
    "partitionMapWithIndex",
    ()=>partitionMapWithIndex,
    "partitionWithIndex",
    ()=>partitionWithIndex,
    "pop",
    ()=>pop,
    "record",
    ()=>record,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "reduceRightWithIndex",
    ()=>reduceRightWithIndex,
    "reduceWithIndex",
    ()=>reduceWithIndex,
    "separate",
    ()=>separate,
    "sequence",
    ()=>sequence,
    "singleton",
    ()=>singleton,
    "size",
    ()=>size,
    "some",
    ()=>some,
    "toArray",
    ()=>toArray,
    "toEntries",
    ()=>toEntries,
    "toUnfoldable",
    ()=>toUnfoldable,
    "traverse",
    ()=>traverse,
    "traverseWithIndex",
    ()=>traverseWithIndex,
    "union",
    ()=>union,
    "updateAt",
    ()=>updateAt,
    "upsertAt",
    ()=>upsertAt,
    "wilt",
    ()=>wilt,
    "wither",
    ()=>wither
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyRecord.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Semigroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Witherable.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const size = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"];
const isEmpty = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmpty"];
const keys_ = (O)=>(r)=>Object.keys(r).sort(O.compare);
const keys = /*#__PURE__*/ keys_(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]);
function collect(O) {
    if (typeof O === 'function') {
        return collect(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(O);
    }
    const keysO = keys_(O);
    return (f)=>(r)=>{
            const out = [];
            for (const key of keysO(r)){
                out.push(f(key, r[key]));
            }
            return out;
        };
}
const toArray = /*#__PURE__*/ collect(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])((k, a)=>[
        k,
        a
    ]);
function toUnfoldable(U) {
    return (r)=>{
        const sas = toArray(r);
        const len = sas.length;
        return U.unfold(0, (b)=>b < len ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"]([
                sas[b],
                b + 1
            ]) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"]);
    };
}
const upsertAt = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertAt"];
const has = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"];
function deleteAt(k) {
    return (r)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has"].call(r, k)) {
            return r;
        }
        const out = Object.assign({}, r);
        delete out[k];
        return out;
    };
}
const updateAt = (k, a)=>modifyAt(k, ()=>a);
const modifyAt = (k, f)=>(r)=>{
        if (!has(k, r)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
        }
        const out = Object.assign({}, r);
        out[k] = f(r[k]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](out);
    };
function pop(k) {
    const deleteAtk = deleteAt(k);
    return (r)=>{
        const oa = lookup(k, r);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"](oa) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"]([
            oa.value,
            deleteAtk(r)
        ]);
    };
}
const isSubrecord = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSubrecord"];
const lookup = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookup"];
const mapWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapWithIndex"];
const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"];
function reduceWithIndex(...args) {
    return args.length === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceWithIndex"](args[0]) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceWithIndex"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(...args);
}
function foldMapWithIndex(O) {
    return 'compare' in O ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foldMapWithIndex"](O) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foldMapWithIndex"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(O);
}
function reduceRightWithIndex(...args) {
    return args.length === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRightWithIndex"](args[0]) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRightWithIndex"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(...args);
}
const singleton = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["singleton"];
function traverseWithIndex(F) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traverseWithIndex"](F);
}
function traverse(F) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traverse"](F);
}
function sequence(F) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sequence"](F);
}
const wither = (F)=>{
    const traverseF = traverse(F);
    return (f)=>(fa)=>F.map((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, traverseF(f)), compact);
};
const wilt = (F)=>{
    const traverseF = traverse(F);
    return (f)=>(fa)=>F.map((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, traverseF(f)), separate);
};
const partitionMapWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partitionMapWithIndex"];
function partitionWithIndex(predicateWithIndex) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partitionWithIndex"](predicateWithIndex);
}
const filterMapWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterMapWithIndex"];
function filterWithIndex(predicateWithIndex) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterWithIndex"](predicateWithIndex);
}
function fromFoldable(M, F) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromFoldable"](M, F);
}
const toEntries = toArray;
const fromEntries = (fa)=>fromFoldable(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Semigroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"](), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Foldable"])(fa);
function fromFoldableMap(M, F) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromFoldableMap"](M, F);
}
const every = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["every"];
const some = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"];
const elem = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elem"];
const union = (M)=>{
    const unionM = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"](M);
    return (second)=>(first)=>{
            if (isEmpty(first)) {
                return {
                    ...second
                };
            }
            if (isEmpty(second)) {
                return {
                    ...first
                };
            }
            return unionM(second)(first);
        };
};
const intersection = (M)=>(second)=>(first)=>{
            if (isEmpty(first) || isEmpty(second)) {
                return {};
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intersection"](M)(second)(first);
        };
const difference = (second)=>(first)=>{
        if (isEmpty(first)) {
            return {
                ...second
            };
        }
        if (isEmpty(second)) {
            return {
                ...first
            };
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["difference"](second)(first);
    };
const _map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_map"];
const _mapWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_mapWithIndex"];
const _reduce = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_reduce"];
const _foldMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_foldMap"];
const _reduceRight = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_reduceRight"];
const _filter = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_filter"];
const _filterMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_filterMap"];
const _partition = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_partition"];
const _partitionMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_partitionMap"];
const _reduceWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_reduceWithIndex"];
const _foldMapWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_foldMapWithIndex"];
const _reduceRightWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_reduceRightWithIndex"];
const _partitionMapWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_partitionMapWithIndex"];
const _partitionWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_partitionWithIndex"];
const _filterMapWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_filterMapWithIndex"];
const _filterWithIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_filterWithIndex"];
const _traverse = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_traverse"];
const _sequence = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_sequence"];
const _traverseWithIndex = (O)=>(F)=>{
        const keysO = keys_(O);
        return (ta, f)=>{
            const ks = keysO(ta);
            if (ks.length === 0) {
                return F.of({});
            }
            let fr = F.of({});
            for (const key of ks){
                fr = F.ap(F.map(fr, (r)=>(b)=>{
                        r[key] = b;
                        return r;
                    }), f(key, ta[key]));
            }
            return fr;
        };
    };
const filter = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"];
const filterMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterMap"];
const partition = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partition"];
const partitionMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partitionMap"];
function reduce(...args) {
    return args.length === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"](args[0]) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(...args);
}
function foldMap(O) {
    return 'compare' in O ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foldMap"](O) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foldMap"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(O);
}
function reduceRight(...args) {
    return args.length === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRight"](args[0]) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRight"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(...args);
}
const compact = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compact"];
const separate = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separate"];
const URI = 'Record';
function getShow(O) {
    return 'compare' in O ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShow"](O) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShow"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])(O);
}
const getEq = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEq"];
const getMonoid = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonoid"];
const Functor = {
    URI,
    map: _map
};
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const FunctorWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
const getFoldable = (O)=>({
        URI,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O)
    });
const getFoldableWithIndex = (O)=>({
        URI,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        reduceWithIndex: _reduceWithIndex(O),
        foldMapWithIndex: _foldMapWithIndex(O),
        reduceRightWithIndex: _reduceRightWithIndex(O)
    });
const Compactable = {
    URI,
    compact,
    separate
};
const Filterable = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
const FilterableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex
};
const getTraversable = (O)=>({
        URI,
        map: _map,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        traverse: _traverse(O),
        sequence: _sequence(O)
    });
const getTraversableWithIndex = (O)=>({
        URI,
        map: _map,
        mapWithIndex: _mapWithIndex,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        reduceWithIndex: _reduceWithIndex(O),
        foldMapWithIndex: _foldMapWithIndex(O),
        reduceRightWithIndex: _reduceRightWithIndex(O),
        traverse: _traverse(O),
        sequence: _sequence(O),
        traverseWithIndex: _traverseWithIndex(O)
    });
const getWitherable = (O)=>{
    const T = getTraversable(O);
    return {
        URI,
        map: _map,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        traverse: T.traverse,
        sequence: T.sequence,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        wither: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["witherDefault"])(T, Compactable),
        wilt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wiltDefault"])(T, Compactable)
    };
};
const getUnionSemigroup = (S)=>{
    const unionS = union(S);
    return {
        concat: (first, second)=>unionS(second)(first)
    };
};
const getUnionMonoid = (S)=>({
        concat: getUnionSemigroup(S).concat,
        empty: {}
    });
const getIntersectionSemigroup = (S)=>{
    const intersectionS = intersection(S);
    return {
        concat: (first, second)=>intersectionS(second)(first)
    };
};
const getDifferenceMagma = ()=>({
        concat: (first, second)=>difference(second)(first)
    });
const Foldable = {
    URI,
    reduce: /*#__PURE__*/ _reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMap: /*#__PURE__*/ _foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRight: /*#__PURE__*/ _reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])
};
const FoldableWithIndex = {
    URI,
    reduce: /*#__PURE__*/ _reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMap: /*#__PURE__*/ _foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRight: /*#__PURE__*/ _reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])
};
const Traversable = {
    URI,
    map: _map,
    reduce: /*#__PURE__*/ _reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMap: /*#__PURE__*/ _foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRight: /*#__PURE__*/ _reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    traverse: /*#__PURE__*/ _traverse(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    sequence
};
const TraversableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: /*#__PURE__*/ _reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMap: /*#__PURE__*/ _foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRight: /*#__PURE__*/ _reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    traverse: /*#__PURE__*/ _traverse(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    sequence,
    traverseWithIndex: /*#__PURE__*/ _traverseWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"])
};
const _wither = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["witherDefault"])(Traversable, Compactable);
const _wilt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Witherable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wiltDefault"])(Traversable, Compactable);
const Witherable = {
    URI,
    map: _map,
    reduce: /*#__PURE__*/ _reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMap: /*#__PURE__*/ _foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRight: /*#__PURE__*/ _reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    traverse: /*#__PURE__*/ _traverse(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    sequence,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
const empty = {};
const insertAt = upsertAt;
const hasOwnProperty = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwnProperty"];
const record = {
    URI,
    map: _map,
    reduce: /*#__PURE__*/ _reduce(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMap: /*#__PURE__*/ _foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRight: /*#__PURE__*/ _reduceRight(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    traverse: /*#__PURE__*/ _traverse(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    sequence,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    traverseWithIndex: /*#__PURE__*/ _traverseWithIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ord"]),
    wither: _wither,
    wilt: _wilt
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyTuple.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bifunctor",
    ()=>Bifunctor,
    "Comonad",
    ()=>Comonad,
    "Foldable",
    ()=>Foldable,
    "Functor",
    ()=>Functor,
    "Semigroupoid",
    ()=>Semigroupoid,
    "Traversable",
    ()=>Traversable,
    "URI",
    ()=>URI,
    "bimap",
    ()=>bimap,
    "compose",
    ()=>compose,
    "duplicate",
    ()=>duplicate,
    "extend",
    ()=>extend,
    "extract",
    ()=>extract,
    "flap",
    ()=>flap,
    "foldMap",
    ()=>foldMap,
    "fst",
    ()=>fst,
    "getApplicative",
    ()=>getApplicative,
    "getApply",
    ()=>getApply,
    "getChain",
    ()=>getChain,
    "getChainRec",
    ()=>getChainRec,
    "getMonad",
    ()=>getMonad,
    "map",
    ()=>map,
    "mapFst",
    ()=>mapFst,
    "mapLeft",
    ()=>mapLeft,
    "mapSnd",
    ()=>mapSnd,
    "readonlyTuple",
    ()=>readonlyTuple,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "sequence",
    ()=>sequence,
    "snd",
    ()=>snd,
    "swap",
    ()=>swap,
    "traverse",
    ()=>traverse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
;
;
function fst(ea) {
    return ea[0];
}
function snd(ea) {
    return ea[1];
}
const swap = (ea)=>[
        snd(ea),
        fst(ea)
    ];
function getApply(S) {
    return {
        URI,
        _E: undefined,
        map: _map,
        ap: (fab, fa)=>[
                fst(fab)(fst(fa)),
                S.concat(snd(fab), snd(fa))
            ]
    };
}
const of = (M)=>(a)=>{
        return [
            a,
            M.empty
        ];
    };
function getApplicative(M) {
    const A = getApply(M);
    return {
        URI,
        _E: undefined,
        map: _map,
        ap: A.ap,
        of: of(M)
    };
}
function getChain(S) {
    const A = getApply(S);
    return {
        URI,
        _E: undefined,
        map: _map,
        ap: A.ap,
        chain: (ma, f)=>{
            const [b, s] = f(fst(ma));
            return [
                b,
                S.concat(snd(ma), s)
            ];
        }
    };
}
function getMonad(M) {
    const C = getChain(M);
    return {
        URI,
        _E: undefined,
        map: _map,
        ap: C.ap,
        chain: C.chain,
        of: of(M)
    };
}
function getChainRec(M) {
    const chainRec = (a, f)=>{
        let result = f(a);
        let acc = M.empty;
        let s = fst(result);
        while(s._tag === 'Left'){
            acc = M.concat(acc, snd(result));
            result = f(s.left);
            s = fst(result);
        }
        return [
            s.right,
            M.concat(acc, snd(result))
        ];
    };
    const C = getChain(M);
    return {
        URI,
        _E: undefined,
        map: _map,
        ap: C.ap,
        chain: C.chain,
        chainRec
    };
}
/* istanbul ignore next */ const _compose = (bc, ab)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(bc, compose(ab));
/* istanbul ignore next */ const _map = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, mapFst(f));
/* istanbul ignore next */ const _bimap = (fa, f, g)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, bimap(f, g));
/* istanbul ignore next */ const _mapLeft = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, mapSnd(f));
/* istanbul ignore next */ const _extend = (wa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(wa, extend(f));
/* istanbul ignore next */ const _reduce = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduce(b, f));
/* istanbul ignore next */ const _foldMap = (M)=>{
    const foldMapM = foldMap(M);
    return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapM(f));
};
/* istanbul ignore next */ const _reduceRight = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRight(b, f));
/* istanbul ignore next */ const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseF(f));
};
const bimap = (f, g)=>(fa)=>[
            g(fst(fa)),
            f(snd(fa))
        ];
const mapFst = (f)=>(fa)=>[
            f(fst(fa)),
            snd(fa)
        ];
const mapSnd = (f)=>(fa)=>[
            fst(fa),
            f(snd(fa))
        ];
const compose = (ab)=>(bc)=>[
            fst(bc),
            snd(ab)
        ];
const extend = (f)=>(wa)=>[
            f(wa),
            snd(wa)
        ];
const extract = fst;
const duplicate = /*#__PURE__*/ extend(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const reduce = (b, f)=>(fa)=>f(b, fst(fa));
const foldMap = ()=>{
    return (f)=>(fa)=>f(fst(fa));
};
const reduceRight = (b, f)=>(fa)=>f(fst(fa), b);
const traverse = (F)=>{
    return (f)=>(ta)=>F.map(f(fst(ta)), (b)=>[
                    b,
                    snd(ta)
                ]);
};
const sequence = (F)=>(fas)=>{
        return F.map(fst(fas), (a)=>[
                a,
                snd(fas)
            ]);
    };
const URI = 'ReadonlyTuple';
const Functor = {
    URI,
    map: _map
};
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const map = mapFst;
const mapLeft = mapSnd;
const Bifunctor = {
    URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
const Semigroupoid = {
    URI,
    compose: _compose
};
const Comonad = {
    URI,
    map: _map,
    extend: _extend,
    extract
};
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const readonlyTuple = {
    URI,
    compose: _compose,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft,
    extract,
    extend: _extend,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Tuple.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bifunctor",
    ()=>Bifunctor,
    "Comonad",
    ()=>Comonad,
    "Foldable",
    ()=>Foldable,
    "Functor",
    ()=>Functor,
    "Semigroupoid",
    ()=>Semigroupoid,
    "Traversable",
    ()=>Traversable,
    "URI",
    ()=>URI,
    "bimap",
    ()=>bimap,
    "compose",
    ()=>compose,
    "duplicate",
    ()=>duplicate,
    "extend",
    ()=>extend,
    "extract",
    ()=>extract,
    "flap",
    ()=>flap,
    "foldMap",
    ()=>foldMap,
    "fst",
    ()=>fst,
    "getApplicative",
    ()=>getApplicative,
    "getApply",
    ()=>getApply,
    "getChain",
    ()=>getChain,
    "getChainRec",
    ()=>getChainRec,
    "getMonad",
    ()=>getMonad,
    "map",
    ()=>map,
    "mapFst",
    ()=>mapFst,
    "mapLeft",
    ()=>mapLeft,
    "mapSnd",
    ()=>mapSnd,
    "reduce",
    ()=>reduce,
    "reduceRight",
    ()=>reduceRight,
    "sequence",
    ()=>sequence,
    "snd",
    ()=>snd,
    "swap",
    ()=>swap,
    "traverse",
    ()=>traverse,
    "tuple",
    ()=>tuple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Functor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyTuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyTuple.js [app-client] (ecmascript)");
;
;
;
const fst = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyTuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fst"];
const snd = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyTuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snd"];
const swap = (ea)=>[
        snd(ea),
        fst(ea)
    ];
function getApply(S) {
    return {
        URI,
        _E: undefined,
        map: _map,
        ap: (fab, fa)=>[
                fst(fab)(fst(fa)),
                S.concat(snd(fab), snd(fa))
            ]
    };
}
const of = (M)=>(a)=>{
        return [
            a,
            M.empty
        ];
    };
function getApplicative(M) {
    const A = getApply(M);
    return {
        URI,
        _E: undefined,
        map: A.map,
        ap: A.ap,
        of: of(M)
    };
}
function getChain(S) {
    const A = getApply(S);
    return {
        URI,
        _E: undefined,
        map: A.map,
        ap: A.ap,
        chain: (ma, f)=>{
            const [b, s] = f(fst(ma));
            return [
                b,
                S.concat(snd(ma), s)
            ];
        }
    };
}
function getMonad(M) {
    const C = getChain(M);
    return {
        URI,
        _E: undefined,
        map: C.map,
        ap: C.ap,
        chain: C.chain,
        of: of(M)
    };
}
function getChainRec(M) {
    const chainRec = (a, f)=>{
        let result = f(a);
        let acc = M.empty;
        let s = fst(result);
        while(s._tag === 'Left'){
            acc = M.concat(acc, snd(result));
            result = f(s.left);
            s = fst(result);
        }
        return [
            s.right,
            M.concat(acc, snd(result))
        ];
    };
    const C = getChain(M);
    return {
        URI,
        _E: undefined,
        map: C.map,
        ap: C.ap,
        chain: C.chain,
        chainRec
    };
}
/* istanbul ignore next */ const _compose = (bc, ab)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(bc, compose(ab));
/* istanbul ignore next */ const _map = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, mapFst(f));
/* istanbul ignore next */ const _bimap = (fa, f, g)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, bimap(f, g));
/* istanbul ignore next */ const _mapLeft = (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, mapSnd(f));
/* istanbul ignore next */ const _extend = (wa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(wa, extend(f));
/* istanbul ignore next */ const _reduce = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduce(b, f));
/* istanbul ignore next */ const _foldMap = (M)=>{
    const foldMapM = foldMap(M);
    return (fa, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, foldMapM(f));
};
/* istanbul ignore next */ const _reduceRight = (fa, b, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(fa, reduceRight(b, f));
/* istanbul ignore next */ function _traverse(F) {
    const traverseF = traverse(F);
    return (ta, f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ta, traverseF(f));
}
const bimap = (f, g)=>(fa)=>[
            g(fst(fa)),
            f(snd(fa))
        ];
const mapFst = (f)=>(fa)=>[
            f(fst(fa)),
            snd(fa)
        ];
const mapSnd = (f)=>(fa)=>[
            fst(fa),
            f(snd(fa))
        ];
const compose = (ab)=>(bc)=>[
            fst(bc),
            snd(ab)
        ];
const extend = (f)=>(wa)=>[
            f(wa),
            snd(wa)
        ];
const duplicate = /*#__PURE__*/ extend(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const extract = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyTuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extract"];
const foldMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyTuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foldMap"];
const reduce = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyTuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"];
const reduceRight = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyTuple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceRight"];
const traverse = (F)=>{
    return (f)=>(ta)=>F.map(f(fst(ta)), (b)=>[
                    b,
                    snd(ta)
                ]);
};
const sequence = (F)=>(fas)=>{
        return F.map(fst(fas), (a)=>[
                a,
                snd(fas)
            ]);
    };
const URI = 'Tuple';
const Functor = {
    URI,
    map: _map
};
const flap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Functor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flap"])(Functor);
const Bifunctor = {
    URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
const Semigroupoid = {
    URI,
    compose: _compose
};
const Comonad = {
    URI,
    map: _map,
    extend: _extend,
    extract
};
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const map = mapFst;
const mapLeft = mapSnd;
const tuple = {
    URI,
    compose: _compose,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft,
    extract,
    extend: _extend,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/boolean.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------
/**
 * @category refinements
 * @since 2.11.0
 */ __turbopack_context__.s([
    "BooleanAlgebra",
    ()=>BooleanAlgebra,
    "Eq",
    ()=>Eq,
    "MonoidAll",
    ()=>MonoidAll,
    "MonoidAny",
    ()=>MonoidAny,
    "Ord",
    ()=>Ord,
    "SemigroupAll",
    ()=>SemigroupAll,
    "SemigroupAny",
    ()=>SemigroupAny,
    "Show",
    ()=>Show,
    "fold",
    ()=>fold,
    "foldW",
    ()=>foldW,
    "isBoolean",
    ()=>isBoolean,
    "match",
    ()=>match,
    "matchW",
    ()=>matchW
]);
const isBoolean = (u)=>typeof u === 'boolean';
const matchW = (onFalse, onTrue)=>(value)=>value ? onTrue() : onFalse();
const foldW = matchW;
const match = foldW;
const fold = match;
const Eq = {
    equals: (first, second)=>first === second
};
const BooleanAlgebra = {
    meet: (first, second)=>first && second,
    join: (first, second)=>first || second,
    zero: false,
    one: true,
    implies: (first, second)=>!first || second,
    not: (b)=>!b
};
const SemigroupAll = {
    concat: (first, second)=>first && second
};
const SemigroupAny = {
    concat: (first, second)=>first || second
};
const MonoidAll = {
    concat: SemigroupAll.concat,
    empty: true
};
const MonoidAny = {
    concat: SemigroupAny.concat,
    empty: false
};
const Ord = {
    equals: Eq.equals,
    compare: (first, second)=>first < second ? -1 : first > second ? 1 : 0
};
const Show = {
    show: (b)=>JSON.stringify(b)
};
}),
]);

//# sourceMappingURL=0rgn_fp-ts-esm_es6_0e-.83~._.js.map