(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/internal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplicativeIdentity",
    ()=>ApplicativeIdentity,
    "at",
    ()=>at,
    "atReadonlyRecord",
    ()=>atReadonlyRecord,
    "fromTraversable",
    ()=>fromTraversable,
    "index",
    ()=>index,
    "indexReadonlyArray",
    ()=>indexReadonlyArray,
    "indexReadonlyNonEmptyArray",
    ()=>indexReadonlyNonEmptyArray,
    "indexReadonlyRecord",
    ()=>indexReadonlyRecord,
    "iso",
    ()=>iso,
    "isoAsLens",
    ()=>isoAsLens,
    "isoAsOptional",
    ()=>isoAsOptional,
    "isoAsPrism",
    ()=>isoAsPrism,
    "isoAsTraversal",
    ()=>isoAsTraversal,
    "lens",
    ()=>lens,
    "lensAsOptional",
    ()=>lensAsOptional,
    "lensAsTraversal",
    ()=>lensAsTraversal,
    "lensAtKey",
    ()=>lensAtKey,
    "lensComponent",
    ()=>lensComponent,
    "lensComposeLens",
    ()=>lensComposeLens,
    "lensComposePrism",
    ()=>lensComposePrism,
    "lensId",
    ()=>lensId,
    "lensProp",
    ()=>lensProp,
    "lensProps",
    ()=>lensProps,
    "optional",
    ()=>optional,
    "optionalAsTraversal",
    ()=>optionalAsTraversal,
    "optionalComposeOptional",
    ()=>optionalComposeOptional,
    "optionalFindFirst",
    ()=>optionalFindFirst,
    "optionalFindFirstNonEmpty",
    ()=>optionalFindFirstNonEmpty,
    "optionalIndex",
    ()=>optionalIndex,
    "optionalIndexNonEmpty",
    ()=>optionalIndexNonEmpty,
    "optionalKey",
    ()=>optionalKey,
    "optionalModify",
    ()=>optionalModify,
    "optionalModifyOption",
    ()=>optionalModifyOption,
    "prism",
    ()=>prism,
    "prismAsOptional",
    ()=>prismAsOptional,
    "prismAsTraversal",
    ()=>prismAsTraversal,
    "prismComposeLens",
    ()=>prismComposeLens,
    "prismComposePrism",
    ()=>prismComposePrism,
    "prismFromNullable",
    ()=>prismFromNullable,
    "prismFromPredicate",
    ()=>prismFromPredicate,
    "prismLeft",
    ()=>prismLeft,
    "prismModify",
    ()=>prismModify,
    "prismModifyOption",
    ()=>prismModifyOption,
    "prismRight",
    ()=>prismRight,
    "prismSet",
    ()=>prismSet,
    "prismSome",
    ()=>prismSome,
    "traversal",
    ()=>traversal,
    "traversalComposeTraversal",
    ()=>traversalComposeTraversal,
    "traversalTraverse",
    ()=>traversalTraverse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyRecord.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Either.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/pipeable.js [app-client] (ecmascript)");
;
;
;
;
;
;
const iso = (get, reverseGet)=>({
        get,
        reverseGet
    });
const isoAsLens = (sa)=>lens(sa.get, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(sa.reverseGet, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constant"]));
const isoAsPrism = (sa)=>prism((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(sa.get, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"]), sa.reverseGet);
const isoAsOptional = (sa)=>optional((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(sa.get, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(sa.reverseGet, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constant"]));
const isoAsTraversal = (sa)=>traversal((F)=>(f)=>(s)=>// @ts-expect-error
                F.map(f(sa.get(s)), (a)=>sa.reverseGet(a)));
const lens = (get, set)=>({
        get,
        set
    });
const lensAsOptional = (sa)=>optional((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(sa.get, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"]), sa.set);
const lensAsTraversal = (sa)=>// @ts-expect-error
    traversal((F)=>(f)=>(s)=>F.map(f(sa.get(s)), (a)=>sa.set(a)(s)));
const lensComposeLens = (ab)=>(sa)=>lens((s)=>ab.get(sa.get(s)), (b)=>(s)=>sa.set(ab.set(b)(sa.get(s)))(s));
const prismComposePrism = (ab)=>(sa)=>prism((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(sa.getOption, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"](ab.getOption)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(ab.reverseGet, sa.reverseGet));
const lensComposePrism = (ab)=>(sa)=>optionalComposeOptional(prismAsOptional(ab))(lensAsOptional(sa));
const lensId = ()=>lens(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constant"]);
const lensProp = (prop)=>(sa)=>lens((s)=>sa.get(s)[prop], (ap)=>(s)=>{
                const oa = sa.get(s);
                if (ap === oa[prop]) {
                    return s;
                }
                return sa.set(Object.assign({}, oa, {
                    [prop]: ap
                }))(s);
            });
const lensProps = (...props)=>(sa)=>lens((s)=>{
            const a = sa.get(s);
            const r = {};
            for (const k of props){
                r[k] = a[k];
            }
            return r;
        }, (a)=>(s)=>{
                const oa = sa.get(s);
                for (const k of props){
                    if (a[k] !== oa[k]) {
                        return sa.set(Object.assign({}, oa, a))(s);
                    }
                }
                return s;
            });
const lensComponent = (prop)=>(sa)=>lens((s)=>sa.get(s)[prop], (ap)=>(s)=>{
                const oa = sa.get(s);
                if (ap === oa[prop]) {
                    return s;
                }
                const copy = oa.slice();
                copy[prop] = ap;
                return sa.set(copy)(s);
            });
const lensAtKey = (key)=>(sa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa, lensComposeLens(atReadonlyRecord().at(key)));
const prism = (getOption, reverseGet)=>({
        getOption,
        reverseGet
    });
const prismAsOptional = (sa)=>optional(sa.getOption, (a)=>prismSet(a)(sa));
const prismAsTraversal = (sa)=>traversal((F)=>(f)=>(s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa.getOption(s), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fold"](()=>F.of(s), // @ts-expect-error
                (a)=>F.map(f(a), (a)=>prismSet(a)(sa)(s)))));
const prismModifyOption = (f)=>(sa)=>(s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa.getOption(s), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"]((o)=>{
                const n = f(o);
                return n === o ? s : sa.reverseGet(n);
            }));
const prismModify = (f)=>(sa)=>{
        const g = prismModifyOption(f)(sa);
        return (s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(g(s), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrElse"](()=>s));
    };
const prismSet = (a)=>prismModify(()=>a);
const prismComposeLens = (ab)=>(sa)=>optionalComposeOptional(lensAsOptional(ab))(prismAsOptional(sa));
const prismFromNullable = ()=>prism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNullable"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const prismFromPredicate = (predicate)=>prism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromPredicate"](predicate), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const prismSome = ()=>prism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"]);
const prismRight = ()=>prism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEither"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"]);
const prismLeft = ()=>prism((s)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLeft"](s) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](s.left) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Either$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"]);
const optional = (getOption, set)=>({
        getOption,
        set
    });
const optionalAsTraversal = (sa)=>traversal((F)=>(f)=>(s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa.getOption(s), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fold"](()=>F.of(s), (a)=>F.map(f(a), (a)=>sa.set(a)(s)))));
const optionalModifyOption = (f)=>(optional)=>(s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(optional.getOption(s), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"]((a)=>{
                const n = f(a);
                return n === a ? s : optional.set(n)(s);
            }));
const optionalModify = (f)=>(optional)=>{
        const g = optionalModifyOption(f)(optional);
        return (s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(g(s), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrElse"](()=>s));
    };
const optionalComposeOptional = (ab)=>(sa)=>optional((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(sa.getOption, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"](ab.getOption)), (b)=>optionalModify(ab.set(b))(sa));
const optionalIndex = (i)=>(sa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa, optionalComposeOptional(indexReadonlyArray().index(i)));
const optionalIndexNonEmpty = (i)=>(sa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa, optionalComposeOptional(indexReadonlyNonEmptyArray().index(i)));
const optionalKey = (key)=>(sa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa, optionalComposeOptional(indexReadonlyRecord().index(key)));
const optionalFindFirst = (predicate)=>optional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findFirst"](predicate), (a)=>(s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findIndex"](predicate)(s), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fold"](()=>s, (i)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeUpdateAt"](i, a, s))));
const unsafeUpdateAt = (i, a, as)=>{
    if (as[i] === a) {
        return as;
    } else {
        const xs = [
            as[0],
            ...as.slice(1)
        ];
        xs[i] = a;
        return xs;
    }
};
const optionalFindFirstNonEmpty = (predicate)=>optional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findFirst"](predicate), (a)=>(as)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findIndex"](predicate)(as), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fold"](()=>as, (i)=>unsafeUpdateAt(i, a, as))));
const traversal = (modifyF)=>({
        modifyF
    });
function traversalComposeTraversal(ab) {
    return (sa)=>traversal((F)=>(f)=>sa.modifyF(F)(ab.modifyF(F)(f)));
}
const ApplicativeIdentity = {
    URI: 'Identity',
    map: (fa, f)=>f(fa),
    of: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"],
    ap: /* istanbul ignore next */ (fab, fa)=>fab(fa)
};
const isIdentity = (F)=>F.URI === 'Identity';
function fromTraversable(T) {
    return ()=>traversal((F)=>{
            // if `F` is `Identity` then `traverseF = map`
            const traverseF = isIdentity(F) ? T.map : T.traverse(F);
            return (f)=>(s)=>traverseF(s, f);
        });
}
function traversalTraverse(T) {
    return traversalComposeTraversal(fromTraversable(T)());
}
const index = (index)=>({
        index
    });
const indexReadonlyArray = ()=>index((i)=>optional((as)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookup"](i, as), (a)=>(as)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookup"](i, as), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fold"](()=>as, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeUpdateAt"](i, a, as)))));
const indexReadonlyNonEmptyArray = ()=>index((i)=>optional((as)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookup"](i, as), (a)=>(as)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookup"](i, as), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fold"](()=>as, ()=>unsafeUpdateAt(i, a, as)))));
const indexReadonlyRecord = ()=>index((k)=>optional((r)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookup"](k, r), (a)=>(r)=>{
                if (r[k] === a || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookup"](k, r))) {
                    return r;
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertAt"](k, a)(r);
            }));
const at = (at)=>({
        at
    });
function atReadonlyRecord() {
    return at((key)=>lens((r)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookup"](key, r), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fold"](()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteAt"](key), (a)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertAt"](key, a))));
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/At.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "at",
    ()=>at,
    "atReadonlyMap",
    ()=>atReadonlyMap,
    "atReadonlyRecord",
    ()=>atReadonlyRecord,
    "atReadonlySet",
    ()=>atReadonlySet,
    "atRecord",
    ()=>atRecord,
    "fromIso",
    ()=>fromIso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/pipeable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlySet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlySet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/internal.js [app-client] (ecmascript)");
;
;
;
;
;
const at = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"];
const fromIso = (iso)=>(sia)=>at((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(iso, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoAsLens"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensComposeLens"](sia.at(i))));
const atReadonlyRecord = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atReadonlyRecord"];
const atReadonlyMap = (E)=>{
    const lookupE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookup"](E);
    const deleteAtE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteAt"](E);
    const insertAtE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertAt"](E);
    return ()=>at((key)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lens"]((s)=>lookupE(key, s), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fold"](()=>deleteAtE(key), (a)=>insertAtE(key, a))));
};
const atReadonlySet = (E)=>{
    const elemE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlySet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elem"](E);
    const insertE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlySet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"](E);
    const removeE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlySet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove"](E);
    return at((a)=>{
        const insert = insertE(a);
        const remove = removeE(a);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lens"]((s)=>elemE(a, s), (b)=>(s)=>b ? insert(s) : remove(s));
    });
};
const atRecord = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atReadonlyRecord"];
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/Iso.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Category",
    ()=>Category,
    "Invariant",
    ()=>Invariant,
    "Semigroupoid",
    ()=>Semigroupoid,
    "URI",
    ()=>URI,
    "asLens",
    ()=>asLens,
    "asOptional",
    ()=>asOptional,
    "asPrism",
    ()=>asPrism,
    "asTraversal",
    ()=>asTraversal,
    "atKey",
    ()=>atKey,
    "component",
    ()=>component,
    "compose",
    ()=>compose,
    "composeIso",
    ()=>composeIso,
    "composeLens",
    ()=>composeLens,
    "composeOptional",
    ()=>composeOptional,
    "composePrism",
    ()=>composePrism,
    "composeTraversal",
    ()=>composeTraversal,
    "filter",
    ()=>filter,
    "findFirst",
    ()=>findFirst,
    "findFirstNonEmpty",
    ()=>findFirstNonEmpty,
    "fromNullable",
    ()=>fromNullable,
    "id",
    ()=>id,
    "imap",
    ()=>imap,
    "index",
    ()=>index,
    "indexNonEmpty",
    ()=>indexNonEmpty,
    "iso",
    ()=>iso,
    "key",
    ()=>key,
    "left",
    ()=>left,
    "modify",
    ()=>modify,
    "modifyF",
    ()=>modifyF,
    "prop",
    ()=>prop,
    "props",
    ()=>props,
    "reverse",
    ()=>reverse,
    "right",
    ()=>right,
    "some",
    ()=>some,
    "traverse",
    ()=>traverse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/pipeable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/internal.js [app-client] (ecmascript)");
;
;
;
const iso = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iso"];
const id = ()=>iso(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const asLens = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoAsLens"];
const asPrism = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoAsPrism"];
const asOptional = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoAsOptional"];
const asTraversal = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoAsTraversal"];
const compose = (ab)=>(sa)=>iso((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(sa.get, ab.get), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(ab.reverseGet, sa.reverseGet));
const composeIso = compose;
const composeLens = (ab)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asLens, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensComposeLens"](ab));
const composePrism = (ab)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asPrism, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismComposePrism"](ab));
const composeOptional = (ab)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asOptional, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalComposeOptional"](ab));
const composeTraversal = (ab)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asTraversal, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalComposeTraversal"](ab));
const reverse = (sa)=>iso(sa.reverseGet, sa.get);
const modify = (f)=>(sa)=>(s)=>sa.reverseGet(f(sa.get(s)));
function modifyF(F) {
    return (f)=>(sa)=>(s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa.get(s), f, (fa)=>F.map(fa, sa.reverseGet));
}
const fromNullable = (sa)=>composePrism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismFromNullable"]())(sa);
function filter(predicate) {
    return composePrism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismFromPredicate"](predicate));
}
const prop = (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asLens, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensProp"](prop));
const props = (...props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asLens, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensProps"](...props));
const component = (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asLens, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensComponent"](prop));
const index = (i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asOptional, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalIndex"](i));
const indexNonEmpty = (i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asOptional, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalIndexNonEmpty"](i));
const key = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asOptional, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalKey"](key));
const atKey = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asLens, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAtKey"](key));
const some = /*#__PURE__*/ composePrism(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismSome"]());
const right = /*#__PURE__*/ composePrism(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismRight"]());
const left = /*#__PURE__*/ composePrism(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismLeft"]());
function traverse(T) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asTraversal, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalTraverse"](T));
}
function findFirst(predicate) {
    return composeOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalFindFirst"](predicate));
}
function findFirstNonEmpty(predicate) {
    return composeOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalFindFirstNonEmpty"](predicate));
}
const imap = (f, g)=>(ea)=>imap_(ea, f, g);
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
const imap_ = (ea, ab, ba)=>iso((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(ea.get, ab), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(ba, ea.reverseGet));
const URI = 'monocle-ts/Iso';
const Invariant = {
    URI,
    imap: imap_
};
const Semigroupoid = {
    URI,
    compose: (ab, ea)=>compose(ab)(ea)
};
const Category = {
    URI,
    compose: Semigroupoid.compose,
    id
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/Ix.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromAt",
    ()=>fromAt,
    "fromIso",
    ()=>fromIso,
    "index",
    ()=>index,
    "indexArray",
    ()=>indexArray,
    "indexReadonlyArray",
    ()=>indexReadonlyArray,
    "indexReadonlyMap",
    ()=>indexReadonlyMap,
    "indexReadonlyNonEmptyArray",
    ()=>indexReadonlyNonEmptyArray,
    "indexReadonlyRecord",
    ()=>indexReadonlyRecord,
    "indexRecord",
    ()=>indexRecord
]);
/**
 * **This module is experimental**
 *
 * Experimental features are published in order to get early feedback from the community.
 *
 * A feature tagged as _Experimental_ is in a high state of flux, you're at risk of it changing without notice.
 *
 * @since 2.3.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/pipeable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyMap.js [app-client] (ecmascript)");
;
;
;
;
const index = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["index"];
const fromAt = (at)=>index((i)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensComposePrism"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismSome"]())(at.at(i)));
const fromIso = (iso)=>(sia)=>index((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(iso, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoAsOptional"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalComposeOptional"](sia.index(i))));
const indexReadonlyArray = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexReadonlyArray"];
const indexReadonlyNonEmptyArray = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexReadonlyNonEmptyArray"];
const indexReadonlyRecord = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexReadonlyRecord"];
const indexReadonlyMap = (E)=>{
    const lookupE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookup"](E);
    const insertAtE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertAt"](E);
    return ()=>index((key)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"]((s)=>lookupE(key, s), (next)=>{
                const insert = insertAtE(key, next);
                return (s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(lookupE(key, s), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fold"](()=>s, (prev)=>next === prev ? s : insert(s)));
            }));
};
const indexArray = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexReadonlyArray"];
const indexRecord = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexReadonlyRecord"];
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/Lens.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Category",
    ()=>Category,
    "Invariant",
    ()=>Invariant,
    "Semigroupoid",
    ()=>Semigroupoid,
    "URI",
    ()=>URI,
    "asOptional",
    ()=>asOptional,
    "asTraversal",
    ()=>asTraversal,
    "atKey",
    ()=>atKey,
    "component",
    ()=>component,
    "compose",
    ()=>compose,
    "composeIso",
    ()=>composeIso,
    "composeLens",
    ()=>composeLens,
    "composeOptional",
    ()=>composeOptional,
    "composePrism",
    ()=>composePrism,
    "composeTraversal",
    ()=>composeTraversal,
    "filter",
    ()=>filter,
    "findFirst",
    ()=>findFirst,
    "findFirstNonEmpty",
    ()=>findFirstNonEmpty,
    "fromNullable",
    ()=>fromNullable,
    "id",
    ()=>id,
    "imap",
    ()=>imap,
    "index",
    ()=>index,
    "indexNonEmpty",
    ()=>indexNonEmpty,
    "key",
    ()=>key,
    "left",
    ()=>left,
    "lens",
    ()=>lens,
    "modify",
    ()=>modify,
    "modifyF",
    ()=>modifyF,
    "prop",
    ()=>prop,
    "props",
    ()=>props,
    "right",
    ()=>right,
    "some",
    ()=>some,
    "traverse",
    ()=>traverse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/pipeable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/internal.js [app-client] (ecmascript)");
;
;
;
const lens = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lens"];
const id = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensId"];
const asOptional = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAsOptional"];
const asTraversal = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAsTraversal"];
const compose = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensComposeLens"];
const composeLens = compose;
const composeIso = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoAsLens"], compose);
const composePrism = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensComposePrism"];
const composeOptional = (ab)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asOptional, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalComposeOptional"](ab));
const composeTraversal = (ab)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asTraversal, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalComposeTraversal"](ab));
const modify = (f)=>(sa)=>(s)=>{
            const o = sa.get(s);
            const n = f(o);
            return o === n ? s : sa.set(n)(s);
        };
function modifyF(F) {
    // @ts-expect-error
    return (f)=>(sa)=>(s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa.get(s), f, (fa)=>F.map(fa, (a)=>sa.set(a)(s)));
}
const fromNullable = (sa)=>composePrism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismFromNullable"]())(sa);
function filter(predicate) {
    return composePrism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismFromPredicate"](predicate));
}
const prop = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensProp"];
const props = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensProps"];
const component = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensComponent"];
const index = (i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asOptional, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalIndex"](i));
const indexNonEmpty = (i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asOptional, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalIndexNonEmpty"](i));
const key = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asOptional, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalKey"](key));
const atKey = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAtKey"];
const some = /*#__PURE__*/ composePrism(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismSome"]());
const right = /*#__PURE__*/ composePrism(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismRight"]());
const left = /*#__PURE__*/ composePrism(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismLeft"]());
function traverse(T) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asTraversal, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalTraverse"](T));
}
function findFirst(predicate) {
    return composeOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalFindFirst"](predicate));
}
function findFirstNonEmpty(predicate) {
    return composeOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalFindFirstNonEmpty"](predicate));
}
const imap = (f, g)=>(ea)=>imap_(ea, f, g);
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
const imap_ = (ea, ab, ba)=>lens((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(ea.get, ab), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(ba, ea.set));
const URI = 'monocle-ts/Lens';
const Invariant = {
    URI,
    imap: imap_
};
const Semigroupoid = {
    URI,
    compose: (ab, ea)=>compose(ab)(ea)
};
const Category = {
    URI,
    compose: Semigroupoid.compose,
    id
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/Optional.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Category",
    ()=>Category,
    "Invariant",
    ()=>Invariant,
    "Semigroupoid",
    ()=>Semigroupoid,
    "URI",
    ()=>URI,
    "asTraversal",
    ()=>asTraversal,
    "atKey",
    ()=>atKey,
    "component",
    ()=>component,
    "compose",
    ()=>compose,
    "composeIso",
    ()=>composeIso,
    "composeLens",
    ()=>composeLens,
    "composeOptional",
    ()=>composeOptional,
    "composePrism",
    ()=>composePrism,
    "composeTraversal",
    ()=>composeTraversal,
    "filter",
    ()=>filter,
    "findFirst",
    ()=>findFirst,
    "findFirstNonEmpty",
    ()=>findFirstNonEmpty,
    "fromNullable",
    ()=>fromNullable,
    "id",
    ()=>id,
    "imap",
    ()=>imap,
    "index",
    ()=>index,
    "indexNonEmpty",
    ()=>indexNonEmpty,
    "key",
    ()=>key,
    "left",
    ()=>left,
    "modify",
    ()=>modify,
    "modifyF",
    ()=>modifyF,
    "modifyOption",
    ()=>modifyOption,
    "optional",
    ()=>optional,
    "prop",
    ()=>prop,
    "props",
    ()=>props,
    "right",
    ()=>right,
    "setOption",
    ()=>setOption,
    "some",
    ()=>some,
    "traverse",
    ()=>traverse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/pipeable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/internal.js [app-client] (ecmascript)");
;
;
;
;
const optional = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"];
const id = ()=>optional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constant"]);
const asTraversal = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalAsTraversal"];
const compose = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalComposeOptional"];
const composeOptional = compose;
const composeIso = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoAsOptional"], compose);
const composeLens = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAsOptional"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalComposeOptional"]);
const composePrism = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsOptional"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalComposeOptional"]);
const composeTraversal = (ab)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asTraversal, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalComposeTraversal"](ab));
const modifyOption = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalModifyOption"];
const setOption = (a)=>modifyOption(()=>a);
const modify = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalModify"];
function modifyF(F) {
    return (f)=>(sa)=>(s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa.getOption(s), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fold"](()=>F.of(s), // @ts-expect-error
                (a)=>F.map(f(a), (a)=>sa.set(a)(s))));
}
const fromNullable = /*#__PURE__*/ compose(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsOptional"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismFromNullable"]()));
function filter(predicate) {
    return compose(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsOptional"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismFromPredicate"](predicate)));
}
const prop = (prop)=>compose((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensId"](), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensProp"](prop), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAsOptional"]));
const props = (...props)=>compose((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensId"](), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensProps"](...props), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAsOptional"]));
const component = (prop)=>compose((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensId"](), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensComponent"](prop), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAsOptional"]));
const index = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalIndex"];
const indexNonEmpty = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalIndexNonEmpty"];
const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalKey"];
const atKey = (key)=>(sa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa, compose(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAsOptional"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atReadonlyRecord"]().at(key))));
const some = /*#__PURE__*/ compose(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsOptional"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismSome"]()));
const right = /*#__PURE__*/ compose(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsOptional"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismRight"]()));
const left = /*#__PURE__*/ compose(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsOptional"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismLeft"]()));
function traverse(T) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asTraversal, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalTraverse"](T));
}
function findFirst(predicate) {
    return compose(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalFindFirst"](predicate));
}
function findFirstNonEmpty(predicate) {
    return compose(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalFindFirstNonEmpty"](predicate));
}
const imap = (f, g)=>(ea)=>imap_(ea, f, g);
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
const imap_ = (ea, ab, ba)=>optional((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(ea.getOption, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](ab)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(ba, ea.set));
const URI = 'monocle-ts/Optional';
const Invariant = {
    URI,
    imap: imap_
};
const Semigroupoid = {
    URI,
    compose: (ab, ea)=>compose(ab)(ea)
};
const Category = {
    URI,
    compose: Semigroupoid.compose,
    id
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/Prism.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Category",
    ()=>Category,
    "Invariant",
    ()=>Invariant,
    "Semigroupoid",
    ()=>Semigroupoid,
    "URI",
    ()=>URI,
    "asOptional",
    ()=>asOptional,
    "asTraversal",
    ()=>asTraversal,
    "atKey",
    ()=>atKey,
    "component",
    ()=>component,
    "compose",
    ()=>compose,
    "composeIso",
    ()=>composeIso,
    "composeLens",
    ()=>composeLens,
    "composeOptional",
    ()=>composeOptional,
    "composePrism",
    ()=>composePrism,
    "composeTraversal",
    ()=>composeTraversal,
    "filter",
    ()=>filter,
    "findFirst",
    ()=>findFirst,
    "findFirstNonEmpty",
    ()=>findFirstNonEmpty,
    "fromNullable",
    ()=>fromNullable,
    "fromPredicate",
    ()=>fromPredicate,
    "id",
    ()=>id,
    "imap",
    ()=>imap,
    "index",
    ()=>index,
    "indexNonEmpty",
    ()=>indexNonEmpty,
    "key",
    ()=>key,
    "left",
    ()=>left,
    "modify",
    ()=>modify,
    "modifyF",
    ()=>modifyF,
    "modifyOption",
    ()=>modifyOption,
    "prism",
    ()=>prism,
    "prop",
    ()=>prop,
    "props",
    ()=>props,
    "right",
    ()=>right,
    "set",
    ()=>set,
    "some",
    ()=>some,
    "traverse",
    ()=>traverse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/pipeable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/internal.js [app-client] (ecmascript)");
;
;
;
;
const prism = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prism"];
const id = ()=>prism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const fromPredicate = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismFromPredicate"];
const asOptional = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsOptional"];
const asTraversal = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsTraversal"];
const compose = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismComposePrism"];
const composePrism = compose;
const composeIso = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoAsPrism"], compose);
const composeLens = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismComposeLens"];
const composeOptional = (ab)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asOptional, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalComposeOptional"](ab));
const composeTraversal = (ab)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asTraversal, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalComposeTraversal"](ab));
const set = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismSet"];
const modifyOption = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismModifyOption"];
const modify = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismModify"];
function modifyF(F) {
    return (f)=>(sa)=>(s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa.getOption(s), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fold"](()=>F.of(s), (a)=>F.map(f(a), sa.reverseGet)));
}
const fromNullable = /*#__PURE__*/ compose(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismFromNullable"]());
function filter(predicate) {
    return compose(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismFromPredicate"](predicate));
}
const prop = (prop)=>composeLens((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensId"](), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensProp"](prop))); // TODO: simplify?
const props = (...props)=>composeLens((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensId"](), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensProps"](...props)));
const component = (prop)=>composeLens((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensId"](), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensComponent"](prop)));
const index = (i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asOptional, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalIndex"](i));
const indexNonEmpty = (i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asOptional, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalIndexNonEmpty"](i));
const key = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asOptional, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalKey"](key));
const atKey = (key)=>(sa)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismComposeLens"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atReadonlyRecord"]().at(key))(sa);
const some = /*#__PURE__*/ compose(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismSome"]());
const right = /*#__PURE__*/ compose(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismRight"]());
const left = /*#__PURE__*/ compose(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismLeft"]());
function traverse(T) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(asTraversal, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalTraverse"](T));
}
function findFirst(predicate) {
    return composeOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalFindFirst"](predicate));
}
function findFirstNonEmpty(predicate) {
    return composeOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalFindFirstNonEmpty"](predicate));
}
const imap = (f, g)=>(ea)=>imap_(ea, f, g);
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
const imap_ = (ea, ab, ba)=>prism((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(ea.getOption, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](ab)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(ba, ea.reverseGet));
const URI = 'monocle-ts/Prism';
const Invariant = {
    URI,
    imap: imap_
};
const Semigroupoid = {
    URI,
    compose: (ab, ea)=>compose(ab)(ea)
};
const Category = {
    URI,
    compose: Semigroupoid.compose,
    id
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/Traversal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Category",
    ()=>Category,
    "Semigroupoid",
    ()=>Semigroupoid,
    "URI",
    ()=>URI,
    "atKey",
    ()=>atKey,
    "component",
    ()=>component,
    "compose",
    ()=>compose,
    "composeIso",
    ()=>composeIso,
    "composeLens",
    ()=>composeLens,
    "composeOptional",
    ()=>composeOptional,
    "composePrism",
    ()=>composePrism,
    "composeTraversal",
    ()=>composeTraversal,
    "filter",
    ()=>filter,
    "findFirst",
    ()=>findFirst,
    "findFirstNonEmpty",
    ()=>findFirstNonEmpty,
    "fold",
    ()=>fold,
    "foldMap",
    ()=>foldMap,
    "fromNullable",
    ()=>fromNullable,
    "fromTraversable",
    ()=>fromTraversable,
    "getAll",
    ()=>getAll,
    "id",
    ()=>id,
    "index",
    ()=>index,
    "indexNonEmpty",
    ()=>indexNonEmpty,
    "key",
    ()=>key,
    "left",
    ()=>left,
    "modify",
    ()=>modify,
    "prop",
    ()=>prop,
    "props",
    ()=>props,
    "right",
    ()=>right,
    "set",
    ()=>set,
    "some",
    ()=>some,
    "traversal",
    ()=>traversal,
    "traverse",
    ()=>traverse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Const.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/pipeable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/ReadonlyArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/internal.js [app-client] (ecmascript)");
;
;
;
;
;
const traversal = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversal"];
const id = ()=>traversal((_)=>(f)=>f);
const fromTraversable = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromTraversable"];
const compose = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalComposeTraversal"];
const composeTraversal = compose;
const composeIso = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoAsTraversal"], compose);
const composeLens = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAsTraversal"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalComposeTraversal"]);
const composePrism = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsTraversal"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalComposeTraversal"]);
const composeOptional = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flow"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalAsTraversal"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalComposeTraversal"]);
const modify = (f)=>(sa)=>sa.modifyF(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApplicativeIdentity"])(f);
const set = (a)=>modify(()=>a);
const fromNullable = (sa)=>composePrism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismFromNullable"]())(sa);
function filter(predicate) {
    return compose(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsTraversal"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismFromPredicate"](predicate)));
}
const prop = (prop)=>compose((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensId"](), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensProp"](prop), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAsTraversal"]));
const props = (...props)=>compose((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensId"](), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensProps"](...props), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAsTraversal"]));
const component = (prop)=>compose((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensId"](), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensComponent"](prop), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAsTraversal"]));
const index = (i)=>(sa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa, compose(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalAsTraversal"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexReadonlyArray"]().index(i))));
const indexNonEmpty = (i)=>(sa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa, compose(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalAsTraversal"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexReadonlyNonEmptyArray"]().index(i))));
const key = (key)=>(sa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa, compose(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalAsTraversal"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexReadonlyRecord"]().index(key))));
const atKey = (key)=>(sa)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(sa, compose(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensAsTraversal"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atReadonlyRecord"]().at(key))));
const some = /*#__PURE__*/ compose(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsTraversal"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismSome"]()));
const right = /*#__PURE__*/ compose(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsTraversal"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismRight"]()));
const left = /*#__PURE__*/ compose(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismAsTraversal"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prismLeft"]()));
const traverse = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traversalTraverse"];
function findFirst(predicate) {
    return composeOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalFindFirst"](predicate));
}
function findFirstNonEmpty(predicate) {
    return composeOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalFindFirstNonEmpty"](predicate));
}
const foldMap = (M)=>(f)=>(sa)=>sa.modifyF(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApplicative"](M))((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["make"](f(a)));
const fold = (M)=>foldMap(M)(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
const getAll = (s)=>(sa)=>foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonoid"]())(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$ReadonlyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["of"])(sa)(s);
const URI = 'monocle-ts/Traversal';
const Semigroupoid = {
    URI,
    compose: (ab, ea)=>compose(ab)(ea)
};
const Category = {
    URI,
    compose: Semigroupoid.compose,
    id
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "At",
    ()=>At,
    "Fold",
    ()=>Fold,
    "Getter",
    ()=>Getter,
    "Index",
    ()=>Index,
    "Iso",
    ()=>Iso,
    "Lens",
    ()=>Lens,
    "Optional",
    ()=>Optional,
    "Prism",
    ()=>Prism,
    "Setter",
    ()=>Setter,
    "Traversal",
    ()=>Traversal,
    "fromFoldable",
    ()=>fromFoldable,
    "fromTraversable",
    ()=>fromTraversable
]);
/**
 * @since 1.0.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Const.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Monoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Monoid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/fp-ts-esm@2.16.10/node_modules/fp-ts-esm/es6/pipeable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$At$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/At.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/Iso.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Ix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/Ix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/Lens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Optional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/Optional.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/Prism.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/monocle-ts-esm@2.3.13_fp-ts-esm@2.16.10/node_modules/monocle-ts-esm/es6/Traversal.js [app-client] (ecmascript)");
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
//
// compat
//
const fromIso = (iso)=>new Iso(iso.get, iso.reverseGet);
const fromLens = (lens)=>new Lens(lens.get, lens.set);
const fromPrism = (prism)=>new Prism(prism.getOption, prism.reverseGet);
const fromOptional = (optional)=>new Optional(optional.getOption, optional.set);
const fromTraversal = (traversal)=>new Traversal(traversal.modifyF);
const fromAt = (at)=>new At((i)=>fromLens(at.at(i)));
const fromIndex = (ix)=>new Index((i)=>fromOptional(ix.index(i)));
//
// old APIs
//
const update = (o, k, a)=>{
    return a === o[k] ? o : Object.assign({}, o, {
        [k]: a
    });
};
class Iso {
    constructor(get, reverseGet){
        this.get = get;
        this.reverseGet = reverseGet;
        /**
         * @since 1.0.0
         */ this._tag = 'Iso';
        /**
         * @since 1.0.0
         */ this.unwrap = this.get;
        /**
         * @since 1.0.0
         */ this.to = this.get;
        /**
         * @since 1.0.0
         */ this.wrap = this.reverseGet;
        /**
         * @since 1.0.0
         */ this.from = this.reverseGet;
    }
    /**
     * reverse the `Iso`: the source becomes the target and the target becomes the source
     * @since 1.0.0
     */ reverse() {
        return fromIso(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverse"](this));
    }
    /**
     * @since 1.0.0
     */ modify(f) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modify"](f)(this);
    }
    /**
     * view an `Iso` as a `Lens`
     *
     * @since 1.0.0
     */ asLens() {
        return fromLens(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLens"](this));
    }
    /**
     * view an `Iso` as a `Prism`
     *
     * @since 1.0.0
     */ asPrism() {
        return fromPrism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPrism"](this));
    }
    /**
     * view an `Iso` as a `Optional`
     *
     * @since 1.0.0
     */ asOptional() {
        return fromOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asOptional"](this));
    }
    /**
     * view an `Iso` as a `Traversal`
     *
     * @since 1.0.0
     */ asTraversal() {
        return fromTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTraversal"](this));
    }
    /**
     * view an `Iso` as a `Fold`
     *
     * @since 1.0.0
     */ asFold() {
        return new Fold(()=>(f)=>(s)=>f(this.get(s)));
    }
    /**
     * view an `Iso` as a `Getter`
     *
     * @since 1.0.0
     */ asGetter() {
        return new Getter((s)=>this.get(s));
    }
    /**
     * view an `Iso` as a `Setter`
     *
     * @since 1.0.0
     */ asSetter() {
        return new Setter((f)=>this.modify(f));
    }
    /**
     * compose an `Iso` with an `Iso`
     *
     * @since 1.0.0
     */ compose(ab) {
        return fromIso(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)(this));
    }
    /**
     * Alias of `compose`
     *
     * @since 1.0.0
     */ composeIso(ab) {
        return this.compose(ab);
    }
    /**
     * compose an `Iso` with a `Lens `
     *
     * @since 1.0.0
     */ composeLens(ab) {
        return fromLens((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLens"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)));
    }
    /**
     * compose an `Iso` with a `Prism`
     *
     * @since 1.0.0
     */ composePrism(ab) {
        return fromPrism((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPrism"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)));
    }
    /**
     * compose an `Iso` with an `Optional`
     *
     * @since 1.0.0
     */ composeOptional(ab) {
        return fromOptional((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asOptional"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Optional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)));
    }
    /**
     * compose an `Iso` with a `Traversal`
     *
     * @since 1.0.0
     */ composeTraversal(ab) {
        return fromTraversal((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTraversal"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)));
    }
    /**
     * compose an `Iso` with a `Fold`
     *
     * @since 1.0.0
     */ composeFold(ab) {
        return this.asFold().compose(ab);
    }
    /**
     * compose an `Iso` with a `Getter`
     *
     * @since 1.0.0
     */ composeGetter(ab) {
        return this.asGetter().compose(ab);
    }
    /**
     * compose an `Iso` with a `Setter`
     *
     * @since 1.0.0
     */ composeSetter(ab) {
        return this.asSetter().compose(ab);
    }
}
class Lens {
    constructor(get, set){
        this.get = get;
        this.set = set;
        /**
         * @since 1.0.0
         */ this._tag = 'Lens';
    }
    /**
     * @example
     * import { Lens } from 'monocle-ts'
     *
     * type Person = {
     *   name: string
     *   age: number
     *   address: {
     *     city: string
     *   }
     * }
     *
     * const city = Lens.fromPath<Person>()(['address', 'city'])
     *
     * const person: Person = { name: 'Giulio', age: 43, address: { city: 'Milan' } }
     *
     * assert.strictEqual(city.get(person), 'Milan')
     * assert.deepStrictEqual(city.set('London')(person), { name: 'Giulio', age: 43, address: { city: 'London' } })
     *
     * @since 1.0.0
     */ static fromPath() {
        const fromProp = Lens.fromProp();
        return (path)=>{
            const lens = fromProp(path[0]);
            return path.slice(1).reduce((acc, prop)=>acc.compose(fromProp(prop)), lens);
        };
    }
    /**
     * Returns a `Lens` from a type and a prop
     *
     * @example
     * import { Lens } from 'monocle-ts'
     *
     * type Person = {
     *   name: string
     *   age: number
     * }
     *
     * const age = Lens.fromProp<Person>()('age')
     *
     * const person: Person = { name: 'Giulio', age: 43 }
     *
     * assert.strictEqual(age.get(person), 43)
     * assert.deepStrictEqual(age.set(44)(person), { name: 'Giulio', age: 44 })
     *
     * @since 1.0.0
     */ static fromProp() {
        return (prop)=>fromLens((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["id"](), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prop"](prop)));
    }
    static fromProps() {
        return (props)=>fromLens((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["id"](), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["props"](...props)));
    }
    /**
     * Returns a `Lens` from a nullable (`A | null | undefined`) prop
     *
     * @example
     * import { Lens } from 'monocle-ts'
     *
     * interface Outer {
     *   inner?: Inner
     * }
     *
     * interface Inner {
     *   value: number
     *   foo: string
     * }
     *
     * const inner = Lens.fromNullableProp<Outer>()('inner', { value: 0, foo: 'foo' })
     * const value = Lens.fromProp<Inner>()('value')
     * const lens = inner.compose(value)
     *
     * assert.deepStrictEqual(lens.set(1)({}), { inner: { value: 1, foo: 'foo' } })
     * assert.strictEqual(lens.get({}), 0)
     * assert.deepStrictEqual(lens.set(1)({ inner: { value: 1, foo: 'bar' } }), { inner: { value: 1, foo: 'bar' } })
     * assert.strictEqual(lens.get({ inner: { value: 1, foo: 'bar' } }), 1)
     *
     * @since 1.0.0
     */ static fromNullableProp() {
        return (k, defaultValue)=>new Lens((s)=>{
                const osk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNullable"])(s[k]);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"])(osk)) {
                    return defaultValue;
                } else {
                    return osk.value;
                }
            }, (a)=>(s)=>update(s, k, a));
    }
    /**
     * @since 1.0.0
     */ modify(f) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modify"](f)(this);
    }
    /**
     * view a `Lens` as a Optional
     *
     * @since 1.0.0
     */ asOptional() {
        return fromOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asOptional"](this));
    }
    /**
     * view a `Lens` as a `Traversal`
     *
     * @since 1.0.0
     */ asTraversal() {
        return fromTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTraversal"](this));
    }
    /**
     * view a `Lens` as a `Setter`
     *
     * @since 1.0.0
     */ asSetter() {
        return new Setter((f)=>this.modify(f));
    }
    /**
     * view a `Lens` as a `Getter`
     *
     * @since 1.0.0
     */ asGetter() {
        return new Getter((s)=>this.get(s));
    }
    /**
     * view a `Lens` as a `Fold`
     *
     * @since 1.0.0
     */ asFold() {
        return new Fold(()=>(f)=>(s)=>f(this.get(s)));
    }
    /**
     * compose a `Lens` with a `Lens`
     *
     * @since 1.0.0
     */ compose(ab) {
        return fromLens(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)(this));
    }
    /**
     * Alias of `compose`
     *
     * @since 1.0.0
     */ composeLens(ab) {
        return this.compose(ab);
    }
    /**
     * compose a `Lens` with a `Getter`
     *
     * @since 1.0.0
     */ composeGetter(ab) {
        return this.asGetter().compose(ab);
    }
    /**
     * compose a `Lens` with a `Fold`
     *
     * @since 1.0.0
     */ composeFold(ab) {
        return this.asFold().compose(ab);
    }
    /**
     * compose a `Lens` with an `Optional`
     *
     * @since 1.0.0
     */ composeOptional(ab) {
        return fromOptional((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asOptional"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Optional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)));
    }
    /**
     * compose a `Lens` with an `Traversal`
     *
     * @since 1.0.0
     */ composeTraversal(ab) {
        return fromTraversal((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTraversal"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)));
    }
    /**
     * compose a `Lens` with an `Setter`
     *
     * @since 1.0.0
     */ composeSetter(ab) {
        return this.asSetter().compose(ab);
    }
    /**
     * compose a `Lens` with an `Iso`
     *
     * @since 1.0.0
     */ composeIso(ab) {
        return fromLens((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ab, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asLens"]))));
    }
    /**
     * compose a `Lens` with a `Prism`
     *
     * @since 1.0.0
     */ composePrism(ab) {
        return fromOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composePrism"](ab)(this));
    }
}
class Prism {
    constructor(getOption, reverseGet){
        this.getOption = getOption;
        this.reverseGet = reverseGet;
        /**
         * @since 1.0.0
         */ this._tag = 'Prism';
    }
    static fromPredicate(predicate) {
        return fromPrism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromPredicate"](predicate));
    }
    /**
     * @since 1.0.0
     */ static some() {
        return somePrism;
    }
    /**
     * @since 1.0.0
     */ modify(f) {
        return (s)=>{
            const os = this.modifyOption(f)(s);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"])(os)) {
                return s;
            } else {
                return os.value;
            }
        };
    }
    /**
     * @since 1.0.0
     */ modifyOption(f) {
        return (s)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["option"].map(this.getOption(s), (v)=>{
                // @ts-expect-error
                const n = f(v);
                return n === v ? s : this.reverseGet(n);
            });
    }
    /**
     * set the target of a `Prism` with a value
     *
     * @since 1.0.0
     */ set(a) {
        return this.modify(()=>a);
    }
    /**
     * view a `Prism` as a `Optional`
     *
     * @since 1.0.0
     */ asOptional() {
        return fromOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asOptional"](this));
    }
    /**
     * view a `Prism` as a `Traversal`
     *
     * @since 1.0.0
     */ asTraversal() {
        return fromTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTraversal"](this));
    }
    /**
     * view a `Prism` as a `Setter`
     *
     * @since 1.0.0
     */ asSetter() {
        return new Setter((f)=>this.modify(f));
    }
    /**
     * view a `Prism` as a `Fold`
     *
     * @since 1.0.0
     */ asFold() {
        return new Fold((M)=>(f)=>(s)=>{
                    const oa = this.getOption(s);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"])(oa) ? M.empty : f(oa.value);
                });
    }
    /**
     * compose a `Prism` with a `Prism`
     *
     * @since 1.0.0
     */ compose(ab) {
        return fromPrism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)(this));
    }
    /**
     * Alias of `compose`
     *
     * @since 1.0.0
     */ composePrism(ab) {
        return this.compose(ab);
    }
    /**
     * compose a `Prism` with a `Optional`
     *
     * @since 1.0.0
     */ composeOptional(ab) {
        return fromOptional((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asOptional"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Optional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)));
    }
    /**
     * compose a `Prism` with a `Traversal`
     *
     * @since 1.0.0
     */ composeTraversal(ab) {
        return fromTraversal((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTraversal"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)));
    }
    /**
     * compose a `Prism` with a `Fold`
     *
     * @since 1.0.0
     */ composeFold(ab) {
        return this.asFold().compose(ab);
    }
    /**
     * compose a `Prism` with a `Setter`
     *
     * @since 1.0.0
     */ composeSetter(ab) {
        return this.asSetter().compose(ab);
    }
    /**
     * compose a `Prism` with a `Iso`
     *
     * @since 1.0.0
     */ composeIso(ab) {
        return fromPrism((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ab, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asPrism"]))));
    }
    /**
     * compose a `Prism` with a `Lens`
     *
     * @since 1.0.0
     */ composeLens(ab) {
        return fromOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeLens"](ab)(this));
    }
    /**
     * compose a `Prism` with a `Getter`
     *
     * @since 1.0.0
     */ composeGetter(ab) {
        return this.asFold().compose(ab.asFold());
    }
}
const somePrism = /*#__PURE__*/ new Prism(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"]);
class Optional {
    constructor(getOption, set){
        this.getOption = getOption;
        this.set = set;
        /**
         * @since 1.0.0
         */ this._tag = 'Optional';
    }
    /**
     * Returns an `Optional` from a nullable (`A | null | undefined`) prop
     *
     * @example
     * import { Optional } from 'monocle-ts'
     *
     * interface Phone {
     *   number: string
     * }
     * interface Employment {
     *   phone?: Phone
     * }
     * interface Info {
     *   employment?: Employment
     * }
     * interface Response {
     *   info?: Info
     * }
     *
     * const numberFromResponse = Optional.fromPath<Response>()(['info', 'employment', 'phone', 'number'])
     *
     * const response1: Response = {
     *   info: {
     *     employment: {
     *       phone: {
     *         number: '555-1234'
     *       }
     *     }
     *   }
     * }
     * const response2: Response = {
     *   info: {
     *     employment: {}
     *   }
     * }
     *
     * numberFromResponse.getOption(response1) // some('555-1234')
     * numberFromResponse.getOption(response2) // none
     *
     * @since 2.1.0
     */ static fromPath() {
        const fromNullableProp = Optional.fromNullableProp();
        return (path)=>{
            const optional = fromNullableProp(path[0]);
            return path.slice(1).reduce((acc, prop)=>acc.compose(fromNullableProp(prop)), optional);
        };
    }
    /**
     * @example
     * import { Optional } from 'monocle-ts'
     *
     * interface S {
     *   a: number | undefined | null
     * }
     *
     * const optional = Optional.fromNullableProp<S>()('a')
     *
     * const s1: S = { a: undefined }
     * const s2: S = { a: null }
     * const s3: S = { a: 1 }
     *
     * assert.deepStrictEqual(optional.set(2)(s1), s1)
     * assert.deepStrictEqual(optional.set(2)(s2), s2)
     * assert.deepStrictEqual(optional.set(2)(s3), { a: 2 })
     *
     * @since 1.0.0
     */ static fromNullableProp() {
        return (k)=>new Optional((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromNullable"])(s[k]), (a)=>(s)=>s[k] == null ? s : update(s, k, a));
    }
    /**
     * Returns an `Optional` from an option (`Option<A>`) prop
     *
     * @example
     * import { Optional } from 'monocle-ts'
     * import * as O from 'fp-ts/Option'
     *
     * interface S {
     *   a: O.Option<number>
     * }
     *
     * const optional = Optional.fromOptionProp<S>()('a')
     * const s1: S = { a: O.none }
     * const s2: S = { a: O.some(1) }
     * assert.deepStrictEqual(optional.set(2)(s1), s1)
     * assert.deepStrictEqual(optional.set(2)(s2), { a: O.some(2) })
     *
     * @since 1.0.0
     */ static fromOptionProp() {
        const formProp = Lens.fromProp();
        return (prop)=>formProp(prop).composePrism(somePrism);
    }
    /**
     * @since 1.0.0
     */ modify(f) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Optional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modify"](f)(this);
    }
    /**
     * @since 1.0.0
     */ modifyOption(f) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Optional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifyOption"](f)(this);
    }
    /**
     * view a `Optional` as a `Traversal`
     *
     * @since 1.0.0
     */ asTraversal() {
        return fromTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Optional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTraversal"](this));
    }
    /**
     * view an `Optional` as a `Fold`
     *
     * @since 1.0.0
     */ asFold() {
        return new Fold((M)=>(f)=>(s)=>{
                    const oa = this.getOption(s);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"])(oa) ? M.empty : f(oa.value);
                });
    }
    /**
     * view an `Optional` as a `Setter`
     *
     * @since 1.0.0
     */ asSetter() {
        return new Setter((f)=>this.modify(f));
    }
    /**
     * compose a `Optional` with a `Optional`
     *
     * @since 1.0.0
     */ compose(ab) {
        return fromOptional(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Optional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)(this));
    }
    /**
     * Alias of `compose`
     *
     * @since 1.0.0
     */ composeOptional(ab) {
        return this.compose(ab);
    }
    /**
     * compose an `Optional` with a `Traversal`
     *
     * @since 1.0.0
     */ composeTraversal(ab) {
        return fromTraversal((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Optional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTraversal"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)));
    }
    /**
     * compose an `Optional` with a `Fold`
     *
     * @since 1.0.0
     */ composeFold(ab) {
        return this.asFold().compose(ab);
    }
    /**
     * compose an `Optional` with a `Setter`
     *
     * @since 1.0.0
     */ composeSetter(ab) {
        return this.asSetter().compose(ab);
    }
    /**
     * compose an `Optional` with a `Lens`
     *
     * @since 1.0.0
     */ composeLens(ab) {
        return fromOptional((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Optional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ab, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asOptional"]))));
    }
    /**
     * compose an `Optional` with a `Prism`
     *
     * @since 1.0.0
     */ composePrism(ab) {
        return fromOptional((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Optional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ab, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asOptional"]))));
    }
    /**
     * compose an `Optional` with a `Iso`
     *
     * @since 1.0.0
     */ composeIso(ab) {
        return fromOptional((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Optional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ab, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asOptional"]))));
    }
    /**
     * compose an `Optional` with a `Getter`
     *
     * @since 1.0.0
     */ composeGetter(ab) {
        return this.asFold().compose(ab.asFold());
    }
}
class Traversal {
    constructor(// Van Laarhoven representation
    modifyF){
        this.modifyF = modifyF;
        /**
         * @since 1.0.0
         */ this._tag = 'Traversal';
    }
    /**
     * @since 1.0.0
     */ modify(f) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modify"](f)(this);
    }
    /**
     * @since 1.0.0
     */ set(a) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"](a)(this);
    }
    filter(predicate) {
        return fromTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"](predicate)(this));
    }
    /**
     * view a `Traversal` as a `Fold`
     *
     * @since 1.0.0
     */ asFold() {
        return new Fold((M)=>(f)=>this.modifyF((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApplicative"])(M))((a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["make"])(f(a))));
    }
    /**
     * view a `Traversal` as a `Setter`
     *
     * @since 1.0.0
     */ asSetter() {
        return new Setter((f)=>this.modify(f));
    }
    /**
     * compose a `Traversal` with a `Traversal`
     *
     * @since 1.0.0
     */ compose(ab) {
        return fromTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"](ab)(this));
    }
    /**
     * Alias of `compose`
     *
     * @since 1.0.0
     */ composeTraversal(ab) {
        return this.compose(ab);
    }
    /**
     * compose a `Traversal` with a `Fold`
     *
     * @since 1.0.0
     */ composeFold(ab) {
        return this.asFold().compose(ab);
    }
    /**
     * compose a `Traversal` with a `Setter`
     *
     * @since 1.0.0
     */ composeSetter(ab) {
        return this.asSetter().compose(ab);
    }
    /**
     * compose a `Traversal` with a `Optional`
     *
     * @since 1.0.0
     */ composeOptional(ab) {
        return this.compose(ab.asTraversal());
    }
    /**
     * compose a `Traversal` with a `Lens`
     *
     * @since 1.0.0
     */ composeLens(ab) {
        return fromTraversal((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ab, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Lens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTraversal"]))));
    }
    /**
     * compose a `Traversal` with a `Prism`
     *
     * @since 1.0.0
     */ composePrism(ab) {
        return fromTraversal((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ab, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTraversal"]))));
    }
    /**
     * compose a `Traversal` with a `Iso`
     *
     * @since 1.0.0
     */ composeIso(ab) {
        return fromTraversal((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$pipeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(ab, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTraversal"]))));
    }
    /**
     * compose a `Traversal` with a `Getter`
     *
     * @since 1.0.0
     */ composeGetter(ab) {
        return this.asFold().compose(ab.asFold());
    }
}
class At {
    constructor(at){
        this.at = at;
        /**
         * @since 1.0.0
         */ this._tag = 'At';
    }
    /**
     * lift an instance of `At` using an `Iso`
     *
     * @since 1.2.0
     */ fromIso(iso) {
        return fromAt(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$At$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromIso"](iso)(this));
    }
}
class Index {
    constructor(index){
        this.index = index;
        /**
         * @since 1.0.0
         */ this._tag = 'Index';
    }
    /**
     * @since 1.2.0
     */ static fromAt(at) {
        return fromIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Ix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromAt"](at));
    }
    /**
     * lift an instance of `Index` using an `Iso`
     *
     * @since 1.2.0
     */ fromIso(iso) {
        return fromIndex(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Ix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromIso"](iso)(this));
    }
}
class Getter {
    constructor(get){
        this.get = get;
        /**
         * @since 1.0.0
         */ this._tag = 'Getter';
    }
    /**
     * view a `Getter` as a `Fold`
     *
     * @since 1.0.0
     */ asFold() {
        return new Fold(()=>(f)=>(s)=>f(this.get(s)));
    }
    /**
     * compose a `Getter` with a `Getter`
     *
     * @since 1.0.0
     */ compose(ab) {
        return new Getter((s)=>ab.get(this.get(s)));
    }
    /**
     * Alias of `compose`
     *
     * @since 1.0.0
     */ composeGetter(ab) {
        return this.compose(ab);
    }
    /**
     * compose a `Getter` with a `Fold`
     *
     * @since 1.0.0
     */ composeFold(ab) {
        return this.asFold().compose(ab);
    }
    /**
     * compose a `Getter` with a `Lens`
     *
     * @since 1.0.0
     */ composeLens(ab) {
        return this.compose(ab.asGetter());
    }
    /**
     * compose a `Getter` with a `Iso`
     *
     * @since 1.0.0
     */ composeIso(ab) {
        return this.compose(ab.asGetter());
    }
    /**
     * compose a `Getter` with a `Optional`
     *
     * @since 1.0.0
     */ composeTraversal(ab) {
        return this.asFold().compose(ab.asFold());
    }
    /**
     * compose a `Getter` with a `Optional`
     *
     * @since 1.0.0
     */ composeOptional(ab) {
        return this.asFold().compose(ab.asFold());
    }
    /**
     * compose a `Getter` with a `Prism`
     *
     * @since 1.0.0
     */ composePrism(ab) {
        return this.asFold().compose(ab.asFold());
    }
}
class Fold {
    constructor(foldMap){
        this.foldMap = foldMap;
        /**
         * @since 1.0.0
         */ this._tag = 'Fold';
        this.getAll = foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonoid"]())(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["of"]);
        this.exist = foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Monoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monoidAny"]);
        this.all = foldMap(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Monoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monoidAll"]);
        this.foldMapFirst = foldMap((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirstMonoid"])());
    }
    /**
     * compose a `Fold` with a `Fold`
     *
     * @since 1.0.0
     */ compose(ab) {
        return new Fold((M)=>(f)=>this.foldMap(M)(ab.foldMap(M)(f)));
    }
    /**
     * Alias of `compose`
     *
     * @since 1.0.0
     */ composeFold(ab) {
        return this.compose(ab);
    }
    /**
     * compose a `Fold` with a `Getter`
     *
     * @since 1.0.0
     */ composeGetter(ab) {
        return this.compose(ab.asFold());
    }
    /**
     * compose a `Fold` with a `Traversal`
     *
     * @since 1.0.0
     */ composeTraversal(ab) {
        return this.compose(ab.asFold());
    }
    /**
     * compose a `Fold` with a `Optional`
     *
     * @since 1.0.0
     */ composeOptional(ab) {
        return this.compose(ab.asFold());
    }
    /**
     * compose a `Fold` with a `Lens`
     *
     * @since 1.0.0
     */ composeLens(ab) {
        return this.compose(ab.asFold());
    }
    /**
     * compose a `Fold` with a `Prism`
     *
     * @since 1.0.0
     */ composePrism(ab) {
        return this.compose(ab.asFold());
    }
    /**
     * compose a `Fold` with a `Iso`
     *
     * @since 1.0.0
     */ composeIso(ab) {
        return this.compose(ab.asFold());
    }
    find(p) {
        return this.foldMapFirst((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromPredicate"])(p));
    }
    /**
     * get the first target of a `Fold`
     *
     * @since 1.0.0
     */ headOption(s) {
        return this.find(()=>true)(s);
    }
}
class Setter {
    constructor(modify){
        this.modify = modify;
        /**
         * @since 1.0.0
         */ this._tag = 'Setter';
    }
    /**
     * @since 1.0.0
     */ set(a) {
        return this.modify((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$fp$2d$ts$2d$esm$2f$es6$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constant"])(a));
    }
    /**
     * compose a `Setter` with a `Setter`
     *
     * @since 1.0.0
     */ compose(ab) {
        return new Setter((f)=>this.modify(ab.modify(f)));
    }
    /**
     * Alias of `compose`
     *
     * @since 1.0.0
     */ composeSetter(ab) {
        return this.compose(ab);
    }
    /**
     * compose a `Setter` with a `Traversal`
     *
     * @since 1.0.0
     */ composeTraversal(ab) {
        return this.compose(ab.asSetter());
    }
    /**
     * compose a `Setter` with a `Optional`
     *
     * @since 1.0.0
     */ composeOptional(ab) {
        return this.compose(ab.asSetter());
    }
    /**
     * compose a `Setter` with a `Lens`
     *
     * @since 1.0.0
     */ composeLens(ab) {
        return this.compose(ab.asSetter());
    }
    /**
     * compose a `Setter` with a `Prism`
     *
     * @since 1.0.0
     */ composePrism(ab) {
        return this.compose(ab.asSetter());
    }
    /**
     * compose a `Setter` with a `Iso`
     *
     * @since 1.0.0
     */ composeIso(ab) {
        return this.compose(ab.asSetter());
    }
}
function fromTraversable(T) {
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$monocle$2d$ts$2d$esm$40$2$2e$3$2e$13_fp$2d$ts$2d$esm$40$2$2e$16$2e$10$2f$node_modules$2f$monocle$2d$ts$2d$esm$2f$es6$2f$Traversal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromTraversable"](T);
    return ()=>fromTraversal(f());
}
function fromFoldable(F) {
    return ()=>new Fold((M)=>{
            const foldMapFM = F.foldMap(M);
            return (f)=>(s)=>foldMapFM(s, f);
        });
}
}),
]);

//# sourceMappingURL=0cxr_monocle-ts-esm_es6_0-12j.-._.js.map