(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/vanilla/internals.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERNAL_addPendingPromiseToDependency",
    ()=>addPendingPromiseToDependency,
    "INTERNAL_buildStoreRev3",
    ()=>buildStore,
    "INTERNAL_getBuildingBlocksRev3",
    ()=>getBuildingBlocks,
    "INTERNAL_getMountedOrPendingDependents",
    ()=>getMountedOrPendingDependents,
    "INTERNAL_hasInitialValue",
    ()=>hasInitialValue,
    "INTERNAL_initializeStoreHooksRev3",
    ()=>initializeStoreHooks,
    "INTERNAL_isActuallyWritableAtom",
    ()=>isActuallyWritableAtom,
    "INTERNAL_isAtomStateInitialized",
    ()=>isAtomStateInitialized,
    "INTERNAL_isPromiseLike",
    ()=>isPromiseLike,
    "INTERNAL_returnAtomValue",
    ()=>returnAtomValue,
    "INTERNAL_shouldThrowSynchronously",
    ()=>shouldThrowSynchronously
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/vanilla/internals.mjs")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
function hasInitialValue(atom) {
    return "init" in atom;
}
function isActuallyWritableAtom(atom) {
    return typeof atom.write === "function";
}
function hasOnMount(atom) {
    return !!atom.onMount;
}
function isAtomStateInitialized(atomState) {
    return "v" in atomState || "e" in atomState;
}
function returnAtomValue(atomState) {
    if ("e" in atomState) {
        throw atomState.e;
    }
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !("v" in atomState)) {
        throw new Error("[Bug] atom state is not initialized");
    }
    return atomState.v;
}
function isPromiseLike(p) {
    return typeof (p == null ? void 0 : p.then) === "function";
}
function shouldThrowSynchronously(error) {
    if (!(error instanceof Error)) {
        return false;
    }
    const name = error.name;
    const message = error.message.toLowerCase();
    return (name === "RangeError" || name === "InternalError") && (message.includes("call stack") || message.includes("too much recursion") || message.includes("stack overflow"));
}
function addPendingPromiseToDependency(atom, promise, dependencyAtomState) {
    if (!dependencyAtomState.p.has(atom)) {
        dependencyAtomState.p.add(atom);
        const cleanup = ()=>dependencyAtomState.p.delete(atom);
        promise.then(cleanup, cleanup);
    }
}
function getMountedOrPendingDependents(atom, atomState, mountedMap) {
    const mounted = mountedMap.get(atom);
    const mountedDependents = mounted == null ? void 0 : mounted.t;
    const pendingDependents = atomState.p;
    if (!(mountedDependents == null ? void 0 : mountedDependents.size)) {
        return pendingDependents;
    }
    if (!pendingDependents.size) {
        return mountedDependents;
    }
    const dependents = new Set(mountedDependents);
    for (const a of pendingDependents){
        dependents.add(a);
    }
    return dependents;
}
const createStoreHook = ()=>{
    const callbacks = /* @__PURE__ */ new Set();
    const notify = ()=>callbacks.forEach((fn)=>fn());
    notify.add = (fn)=>{
        callbacks.add(fn);
        return ()=>callbacks.delete(fn);
    };
    return notify;
};
const createStoreHookForAtoms = ()=>{
    const all = {};
    const callbacks = /* @__PURE__ */ new WeakMap();
    const notify = (atom)=>{
        var _a, _b;
        (_a = callbacks.get(all)) == null ? void 0 : _a.forEach((fn)=>fn(atom));
        (_b = callbacks.get(atom)) == null ? void 0 : _b.forEach((fn)=>fn());
    };
    notify.add = (atom, fn)=>{
        const key = atom || all;
        let fns = callbacks.get(key);
        if (!fns) {
            fns = /* @__PURE__ */ new Set();
            callbacks.set(key, fns);
        }
        fns.add(fn);
        return ()=>{
            fns.delete(fn);
            if (!fns.size) {
                callbacks.delete(key);
            }
        };
    };
    return notify;
};
function initializeStoreHooks(storeHooks) {
    storeHooks.i || (storeHooks.i = createStoreHookForAtoms());
    storeHooks.r || (storeHooks.r = createStoreHookForAtoms());
    storeHooks.c || (storeHooks.c = createStoreHookForAtoms());
    storeHooks.m || (storeHooks.m = createStoreHookForAtoms());
    storeHooks.u || (storeHooks.u = createStoreHookForAtoms());
    storeHooks.f || (storeHooks.f = createStoreHook());
    return storeHooks;
}
function hasOnInit(atom) {
    return !!atom.INTERNAL_onInit;
}
const BUILDING_BLOCK_atomRead = (_buildingBlocks, _store, atom, ...params)=>atom.read(...params);
const BUILDING_BLOCK_atomWrite = (_buildingBlocks, _store, atom, ...params)=>atom.write(...params);
const BUILDING_BLOCK_atomOnInit = (_buildingBlocks, store, atom)=>atom.INTERNAL_onInit(store);
const BUILDING_BLOCK_atomOnMount = (_buildingBlocks, _store, atom, setAtom)=>{
    var _a;
    return (_a = atom.onMount) == null ? void 0 : _a.call(atom, setAtom);
};
const BUILDING_BLOCK_ensureAtomState = (buildingBlocks, store, atom)=>{
    var _a;
    const atomStateMap = buildingBlocks[0];
    let atomState = atomStateMap.get(atom);
    if (!atomState) {
        const storeHooks = buildingBlocks[6];
        const atomOnInit = buildingBlocks[9];
        atomState = {
            d: /* @__PURE__ */ new Map(),
            p: /* @__PURE__ */ new Set(),
            n: 0
        };
        atomStateMap.set(atom, atomState);
        (_a = storeHooks.i) == null ? void 0 : _a.call(storeHooks, atom);
        if (hasOnInit(atom)) {
            atomOnInit(buildingBlocks, store, atom);
        }
    }
    return atomState;
};
const BUILDING_BLOCK_flushCallbacks = (buildingBlocks, store)=>{
    var _a;
    const mountedMap = buildingBlocks[1];
    const changedAtoms = buildingBlocks[3];
    const mountCallbacks = buildingBlocks[4];
    const unmountCallbacks = buildingBlocks[5];
    const storeHooks = buildingBlocks[6];
    const recomputeInvalidatedAtoms = buildingBlocks[13];
    if (!storeHooks.f && !changedAtoms.size && !mountCallbacks.size && !unmountCallbacks.size) {
        return;
    }
    const errors = [];
    const call = (fn)=>{
        try {
            fn();
        } catch (e) {
            errors.push(e);
        }
    };
    do {
        if (storeHooks.f) {
            call(storeHooks.f);
        }
        const callbacks = /* @__PURE__ */ new Set();
        for (const atom of changedAtoms){
            const listeners = (_a = mountedMap.get(atom)) == null ? void 0 : _a.l;
            if (listeners) {
                for (const listener of listeners){
                    callbacks.add(listener);
                }
            }
        }
        changedAtoms.clear();
        for (const fn of unmountCallbacks){
            callbacks.add(fn);
        }
        unmountCallbacks.clear();
        for (const fn of mountCallbacks){
            callbacks.add(fn);
        }
        mountCallbacks.clear();
        for (const fn of callbacks){
            call(fn);
        }
        if (changedAtoms.size) {
            recomputeInvalidatedAtoms(buildingBlocks, store);
        }
    }while (changedAtoms.size || unmountCallbacks.size || mountCallbacks.size)
    if (errors.length) {
        throw new AggregateError(errors);
    }
};
const BUILDING_BLOCK_recomputeInvalidatedAtoms = (buildingBlocks, store)=>{
    const mountedMap = buildingBlocks[1];
    const invalidatedAtoms = buildingBlocks[2];
    const changedAtoms = buildingBlocks[3];
    const ensureAtomState = buildingBlocks[11];
    const readAtomState = buildingBlocks[14];
    const mountDependencies = buildingBlocks[17];
    if (!changedAtoms.size) {
        return;
    }
    const sortedReversedAtoms = [];
    const sortedReversedStates = [];
    const visiting = /* @__PURE__ */ new WeakSet();
    const visited = /* @__PURE__ */ new WeakSet();
    const stackAtoms = [];
    const stackStates = [];
    for (const atom of changedAtoms){
        stackAtoms.push(atom);
        stackStates.push(ensureAtomState(buildingBlocks, store, atom));
    }
    while(stackAtoms.length){
        const top = stackAtoms.length - 1;
        const a = stackAtoms[top];
        const aState = stackStates[top];
        if (visited.has(a)) {
            stackAtoms.pop();
            stackStates.pop();
            continue;
        }
        if (visiting.has(a)) {
            if (invalidatedAtoms.get(a) === aState.n) {
                sortedReversedAtoms.push(a);
                sortedReversedStates.push(aState);
            } else if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && invalidatedAtoms.has(a)) {
                throw new Error("[Bug] invalidated atom exists");
            }
            visited.add(a);
            stackAtoms.pop();
            stackStates.pop();
            continue;
        }
        visiting.add(a);
        for (const d of getMountedOrPendingDependents(a, aState, mountedMap)){
            if (!visiting.has(d)) {
                stackAtoms.push(d);
                stackStates.push(ensureAtomState(buildingBlocks, store, d));
            }
        }
    }
    for(let i = sortedReversedAtoms.length - 1; i >= 0; --i){
        const a = sortedReversedAtoms[i];
        const aState = sortedReversedStates[i];
        let hasChangedDeps = false;
        for (const dep of aState.d.keys()){
            if (dep !== a && changedAtoms.has(dep)) {
                hasChangedDeps = true;
                break;
            }
        }
        if (hasChangedDeps) {
            invalidatedAtoms.set(a, aState.n);
            readAtomState(buildingBlocks, store, a);
            mountDependencies(buildingBlocks, store, a);
        }
        invalidatedAtoms.delete(a);
    }
};
const storeMutationSet = /* @__PURE__ */ new WeakSet();
const BUILDING_BLOCK_readAtomState = (buildingBlocks, store, atom)=>{
    var _a, _b;
    const mountedMap = buildingBlocks[1];
    const invalidatedAtoms = buildingBlocks[2];
    const changedAtoms = buildingBlocks[3];
    const storeHooks = buildingBlocks[6];
    const atomRead = buildingBlocks[7];
    const ensureAtomState = buildingBlocks[11];
    const flushCallbacks = buildingBlocks[12];
    const recomputeInvalidatedAtoms = buildingBlocks[13];
    const readAtomState = buildingBlocks[14];
    const writeAtomState = buildingBlocks[16];
    const mountDependencies = buildingBlocks[17];
    const setAtomStateValueOrPromise = buildingBlocks[20];
    const registerAbortHandler = buildingBlocks[26];
    const storeEpochHolder = buildingBlocks[28];
    const atomState = ensureAtomState(buildingBlocks, store, atom);
    const storeEpochNumber = storeEpochHolder[0];
    if (isAtomStateInitialized(atomState)) {
        if (// If the atom is mounted, we can use cached atom state,
        // because it should have been updated by dependencies.
        // We can't use the cache if the atom is invalidated.
        mountedMap.has(atom) && invalidatedAtoms.get(atom) !== atomState.n || // If atom is not mounted, we can use cached atom state,
        // only if store hasn't been mutated.
        atomState.m === storeEpochNumber) {
            atomState.m = storeEpochNumber;
            return atomState;
        }
        let hasChangedDeps = false;
        for (const [a, n] of atomState.d){
            if (readAtomState(buildingBlocks, store, a).n !== n) {
                hasChangedDeps = true;
                break;
            }
        }
        if (!hasChangedDeps) {
            atomState.m = storeEpochNumber;
            return atomState;
        }
    }
    let isSync = true;
    const prevDeps = new Set(atomState.d.keys());
    const pruneDependencies = ()=>{
        for (const a of prevDeps){
            atomState.d.delete(a);
        }
    };
    const mountDependenciesIfAsync = ()=>{
        if (mountedMap.has(atom)) {
            const shouldRecompute = !changedAtoms.size;
            mountDependencies(buildingBlocks, store, atom);
            if (shouldRecompute) {
                recomputeInvalidatedAtoms(buildingBlocks, store);
                flushCallbacks(buildingBlocks, store);
            }
        }
    };
    const getter = (a)=>{
        var _a2;
        if (a === atom) {
            const aState2 = ensureAtomState(buildingBlocks, store, a);
            if (!isAtomStateInitialized(aState2)) {
                if (hasInitialValue(a)) {
                    setAtomStateValueOrPromise(buildingBlocks, store, a, a.init);
                } else {
                    throw new Error("no atom init");
                }
            }
            return returnAtomValue(aState2);
        }
        const aState = readAtomState(buildingBlocks, store, a);
        try {
            return returnAtomValue(aState);
        } finally{
            prevDeps.delete(a);
            atomState.d.set(a, aState.n);
            if (isPromiseLike(atomState.v)) {
                addPendingPromiseToDependency(atom, atomState.v, aState);
            }
            if (mountedMap.has(atom)) {
                (_a2 = mountedMap.get(a)) == null ? void 0 : _a2.t.add(atom);
            }
            if (!isSync) {
                mountDependenciesIfAsync();
            }
        }
    };
    let controller;
    let setSelf;
    const options = {
        get signal () {
            if (!controller) {
                controller = new AbortController();
            }
            return controller.signal;
        },
        get setSelf () {
            if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
                console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3.");
            }
            if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !isActuallyWritableAtom(atom)) {
                console.warn("setSelf function cannot be used with read-only atom");
            }
            if (!setSelf && isActuallyWritableAtom(atom)) {
                setSelf = (...args)=>{
                    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && isSync) {
                        console.warn("setSelf function cannot be called in sync");
                    }
                    if (!isSync) {
                        try {
                            return writeAtomState(buildingBlocks, store, atom, args);
                        } finally{
                            recomputeInvalidatedAtoms(buildingBlocks, store);
                            flushCallbacks(buildingBlocks, store);
                        }
                    }
                };
            }
            return setSelf;
        }
    };
    const prevEpochNumber = atomState.n;
    const prevInvalidated = invalidatedAtoms.get(atom) === prevEpochNumber;
    try {
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            storeMutationSet.delete(store);
        }
        const valueOrPromise = atomRead(buildingBlocks, store, atom, getter, options);
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && storeMutationSet.has(store)) {
            console.warn("Detected store mutation during atom read. This is not supported.");
        }
        setAtomStateValueOrPromise(buildingBlocks, store, atom, valueOrPromise);
        if (isPromiseLike(valueOrPromise)) {
            registerAbortHandler(buildingBlocks, store, valueOrPromise, ()=>controller == null ? void 0 : controller.abort());
            const settle = ()=>{
                pruneDependencies();
                mountDependenciesIfAsync();
            };
            valueOrPromise.then(settle, settle);
        } else {
            pruneDependencies();
        }
        (_a = storeHooks.r) == null ? void 0 : _a.call(storeHooks, atom);
        atomState.m = storeEpochNumber;
        return atomState;
    } catch (error) {
        if (shouldThrowSynchronously(error)) {
            throw error;
        }
        delete atomState.v;
        atomState.e = error;
        ++atomState.n;
        atomState.m = storeEpochNumber;
        return atomState;
    } finally{
        isSync = false;
        if (atomState.n !== prevEpochNumber && prevInvalidated) {
            invalidatedAtoms.set(atom, atomState.n);
            changedAtoms.add(atom);
            (_b = storeHooks.c) == null ? void 0 : _b.call(storeHooks, atom);
        }
    }
};
const BUILDING_BLOCK_invalidateDependents = (buildingBlocks, store, atom)=>{
    const mountedMap = buildingBlocks[1];
    const invalidatedAtoms = buildingBlocks[2];
    const ensureAtomState = buildingBlocks[11];
    const stack = [
        atom
    ];
    while(stack.length){
        const a = stack.pop();
        const aState = ensureAtomState(buildingBlocks, store, a);
        for (const d of getMountedOrPendingDependents(a, aState, mountedMap)){
            const dState = ensureAtomState(buildingBlocks, store, d);
            if (invalidatedAtoms.get(d) !== dState.n) {
                invalidatedAtoms.set(d, dState.n);
                stack.push(d);
            }
        }
    }
};
const BUILDING_BLOCK_writeAtomState = (buildingBlocks, store, atom, args)=>{
    const changedAtoms = buildingBlocks[3];
    const storeHooks = buildingBlocks[6];
    const atomWrite = buildingBlocks[8];
    const ensureAtomState = buildingBlocks[11];
    const flushCallbacks = buildingBlocks[12];
    const recomputeInvalidatedAtoms = buildingBlocks[13];
    const readAtomState = buildingBlocks[14];
    const invalidateDependents = buildingBlocks[15];
    const writeAtomState = buildingBlocks[16];
    const mountDependencies = buildingBlocks[17];
    const setAtomStateValueOrPromise = buildingBlocks[20];
    const storeEpochHolder = buildingBlocks[28];
    let isSync = true;
    const getter = (a)=>returnAtomValue(readAtomState(buildingBlocks, store, a));
    const setter = (a, ...args2)=>{
        var _a;
        const aState = ensureAtomState(buildingBlocks, store, a);
        try {
            if (a === atom) {
                if (!hasInitialValue(a)) {
                    throw new Error("atom not writable");
                }
                if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
                    storeMutationSet.add(store);
                }
                const prevEpochNumber = aState.n;
                const v = args2[0];
                setAtomStateValueOrPromise(buildingBlocks, store, a, v);
                mountDependencies(buildingBlocks, store, a);
                if (prevEpochNumber !== aState.n) {
                    ++storeEpochHolder[0];
                    changedAtoms.add(a);
                    invalidateDependents(buildingBlocks, store, a);
                    (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a);
                }
                return void 0;
            } else {
                return writeAtomState(buildingBlocks, store, a, args2);
            }
        } finally{
            if (!isSync) {
                recomputeInvalidatedAtoms(buildingBlocks, store);
                flushCallbacks(buildingBlocks, store);
            }
        }
    };
    try {
        return atomWrite(buildingBlocks, store, atom, getter, setter, ...args);
    } finally{
        isSync = false;
    }
};
const BUILDING_BLOCK_mountDependencies = (buildingBlocks, store, atom)=>{
    var _a;
    const mountedMap = buildingBlocks[1];
    const changedAtoms = buildingBlocks[3];
    const storeHooks = buildingBlocks[6];
    const ensureAtomState = buildingBlocks[11];
    const invalidateDependents = buildingBlocks[15];
    const mountAtom = buildingBlocks[18];
    const unmountAtom = buildingBlocks[19];
    const atomState = ensureAtomState(buildingBlocks, store, atom);
    const mounted = mountedMap.get(atom);
    if (mounted && atomState.d.size > 0) {
        for (const [a, n] of atomState.d){
            if (!mounted.d.has(a)) {
                const aState = ensureAtomState(buildingBlocks, store, a);
                const aMounted = mountAtom(buildingBlocks, store, a);
                aMounted.t.add(atom);
                mounted.d.add(a);
                if (n !== aState.n) {
                    changedAtoms.add(a);
                    invalidateDependents(buildingBlocks, store, a);
                    (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a);
                }
            }
        }
        for (const a of mounted.d){
            if (!atomState.d.has(a)) {
                mounted.d.delete(a);
                const aMounted = unmountAtom(buildingBlocks, store, a);
                aMounted == null ? void 0 : aMounted.t.delete(atom);
            }
        }
    }
};
const BUILDING_BLOCK_mountAtom = (buildingBlocks, store, atom)=>{
    var _a;
    const mountedMap = buildingBlocks[1];
    const mountCallbacks = buildingBlocks[4];
    const storeHooks = buildingBlocks[6];
    const atomOnMount = buildingBlocks[10];
    const ensureAtomState = buildingBlocks[11];
    const flushCallbacks = buildingBlocks[12];
    const recomputeInvalidatedAtoms = buildingBlocks[13];
    const readAtomState = buildingBlocks[14];
    const writeAtomState = buildingBlocks[16];
    const mountAtom = buildingBlocks[18];
    const atomState = ensureAtomState(buildingBlocks, store, atom);
    let mounted = mountedMap.get(atom);
    if (!mounted) {
        readAtomState(buildingBlocks, store, atom);
        for (const a of atomState.d.keys()){
            const aMounted = mountAtom(buildingBlocks, store, a);
            aMounted.t.add(atom);
        }
        mounted = {
            l: /* @__PURE__ */ new Set(),
            d: new Set(atomState.d.keys()),
            t: /* @__PURE__ */ new Set()
        };
        mountedMap.set(atom, mounted);
        if (isActuallyWritableAtom(atom) && hasOnMount(atom)) {
            const processOnMount = ()=>{
                let isSync = true;
                const setAtom = (...args)=>{
                    try {
                        return writeAtomState(buildingBlocks, store, atom, args);
                    } finally{
                        if (!isSync) {
                            recomputeInvalidatedAtoms(buildingBlocks, store);
                            flushCallbacks(buildingBlocks, store);
                        }
                    }
                };
                try {
                    const onUnmount = atomOnMount(buildingBlocks, store, atom, setAtom);
                    if (onUnmount) {
                        mounted.u = ()=>{
                            isSync = true;
                            try {
                                onUnmount();
                            } finally{
                                isSync = false;
                            }
                        };
                    }
                } finally{
                    isSync = false;
                }
            };
            mountCallbacks.add(processOnMount);
        }
        (_a = storeHooks.m) == null ? void 0 : _a.call(storeHooks, atom);
    }
    return mounted;
};
const BUILDING_BLOCK_unmountAtom = (buildingBlocks, store, atom)=>{
    var _a, _b;
    const mountedMap = buildingBlocks[1];
    const unmountCallbacks = buildingBlocks[5];
    const storeHooks = buildingBlocks[6];
    const ensureAtomState = buildingBlocks[11];
    const unmountAtom = buildingBlocks[19];
    const atomState = ensureAtomState(buildingBlocks, store, atom);
    let mounted = mountedMap.get(atom);
    if (!mounted || mounted.l.size) {
        return mounted;
    }
    let isDependent = false;
    for (const a of mounted.t){
        if ((_a = mountedMap.get(a)) == null ? void 0 : _a.d.has(atom)) {
            isDependent = true;
            break;
        }
    }
    if (!isDependent) {
        if (mounted.u) {
            unmountCallbacks.add(mounted.u);
        }
        mounted = void 0;
        mountedMap.delete(atom);
        for (const a of atomState.d.keys()){
            const aMounted = unmountAtom(buildingBlocks, store, a);
            aMounted == null ? void 0 : aMounted.t.delete(atom);
        }
        (_b = storeHooks.u) == null ? void 0 : _b.call(storeHooks, atom);
        return void 0;
    }
    return mounted;
};
const BUILDING_BLOCK_setAtomStateValueOrPromise = (buildingBlocks, store, atom, valueOrPromise)=>{
    const ensureAtomState = buildingBlocks[11];
    const abortPromise = buildingBlocks[27];
    const atomState = ensureAtomState(buildingBlocks, store, atom);
    const hasPrevValue = "v" in atomState;
    const prevValue = atomState.v;
    if (isPromiseLike(valueOrPromise)) {
        for (const a of atomState.d.keys()){
            addPendingPromiseToDependency(atom, valueOrPromise, ensureAtomState(buildingBlocks, store, a));
        }
    }
    atomState.v = valueOrPromise;
    delete atomState.e;
    if (!hasPrevValue || !Object.is(prevValue, atomState.v)) {
        ++atomState.n;
        if (isPromiseLike(prevValue)) {
            abortPromise(buildingBlocks, store, prevValue);
        }
    }
};
const BUILDING_BLOCK_storeGet = (buildingBlocks, store, atom)=>{
    const readAtomState = buildingBlocks[14];
    return returnAtomValue(readAtomState(buildingBlocks, store, atom));
};
const BUILDING_BLOCK_storeSet = (buildingBlocks, store, atom, ...args)=>{
    const changedAtoms = buildingBlocks[3];
    const flushCallbacks = buildingBlocks[12];
    const recomputeInvalidatedAtoms = buildingBlocks[13];
    const writeAtomState = buildingBlocks[16];
    const prevChangedAtomsSize = changedAtoms.size;
    try {
        return writeAtomState(buildingBlocks, store, atom, args);
    } finally{
        if (changedAtoms.size !== prevChangedAtomsSize) {
            recomputeInvalidatedAtoms(buildingBlocks, store);
            flushCallbacks(buildingBlocks, store);
        }
    }
};
const BUILDING_BLOCK_storeSub = (buildingBlocks, store, atom, listener)=>{
    const flushCallbacks = buildingBlocks[12];
    const recomputeInvalidatedAtoms = buildingBlocks[13];
    const mountAtom = buildingBlocks[18];
    const unmountAtom = buildingBlocks[19];
    const mounted = mountAtom(buildingBlocks, store, atom);
    const listeners = mounted.l;
    listeners.add(listener);
    recomputeInvalidatedAtoms(buildingBlocks, store);
    flushCallbacks(buildingBlocks, store);
    return ()=>{
        listeners.delete(listener);
        unmountAtom(buildingBlocks, store, atom);
        recomputeInvalidatedAtoms(buildingBlocks, store);
        flushCallbacks(buildingBlocks, store);
    };
};
const BUILDING_BLOCK_registerAbortHandler = (buildingBlocks, _store, promise, abortHandler)=>{
    const abortHandlersMap = buildingBlocks[25];
    let abortHandlers = abortHandlersMap.get(promise);
    if (!abortHandlers) {
        abortHandlers = /* @__PURE__ */ new Set();
        abortHandlersMap.set(promise, abortHandlers);
        const cleanup = ()=>abortHandlersMap.delete(promise);
        promise.then(cleanup, cleanup);
    }
    abortHandlers.add(abortHandler);
};
const BUILDING_BLOCK_abortPromise = (buildingBlocks, _store, promise)=>{
    const abortHandlersMap = buildingBlocks[25];
    const abortHandlers = abortHandlersMap.get(promise);
    abortHandlers == null ? void 0 : abortHandlers.forEach((fn)=>fn());
};
const buildingBlockMap = /* @__PURE__ */ new WeakMap();
function getBuildingBlocks(store) {
    const buildingBlocks = buildingBlockMap.get(store);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !buildingBlocks) {
        throw new Error("Store must be created by buildStore to read its building blocks");
    }
    const enhanceBuildingBlocks = buildingBlocks[24];
    if (enhanceBuildingBlocks) {
        return enhanceBuildingBlocks(buildingBlocks, store);
    }
    return buildingBlocks;
}
function buildStore(...partialBuildingBlocks) {
    const store = {
        get (atom) {
            return storeGet(buildingBlocks, store, atom);
        },
        set (atom, ...args) {
            return storeSet(buildingBlocks, store, atom, ...args);
        },
        sub (atom, listener) {
            return storeSub(buildingBlocks, store, atom, listener);
        }
    };
    const buildingBlocks = [
        // store state
        /* @__PURE__ */ new WeakMap(),
        // atomStateMap
        /* @__PURE__ */ new WeakMap(),
        // mountedMap
        /* @__PURE__ */ new WeakMap(),
        // invalidatedAtoms
        /* @__PURE__ */ new Set(),
        // changedAtoms
        /* @__PURE__ */ new Set(),
        // mountCallbacks
        /* @__PURE__ */ new Set(),
        // unmountCallbacks
        {},
        // storeHooks
        // atom interceptors
        BUILDING_BLOCK_atomRead,
        BUILDING_BLOCK_atomWrite,
        BUILDING_BLOCK_atomOnInit,
        BUILDING_BLOCK_atomOnMount,
        // building-block functions
        BUILDING_BLOCK_ensureAtomState,
        BUILDING_BLOCK_flushCallbacks,
        BUILDING_BLOCK_recomputeInvalidatedAtoms,
        BUILDING_BLOCK_readAtomState,
        BUILDING_BLOCK_invalidateDependents,
        BUILDING_BLOCK_writeAtomState,
        BUILDING_BLOCK_mountDependencies,
        BUILDING_BLOCK_mountAtom,
        BUILDING_BLOCK_unmountAtom,
        BUILDING_BLOCK_setAtomStateValueOrPromise,
        BUILDING_BLOCK_storeGet,
        BUILDING_BLOCK_storeSet,
        BUILDING_BLOCK_storeSub,
        void 0,
        // enhanceBuildingBlocks
        // abortable promise support
        /* @__PURE__ */ new WeakMap(),
        // abortHandlersMap
        BUILDING_BLOCK_registerAbortHandler,
        BUILDING_BLOCK_abortPromise,
        // store epoch
        [
            0
        ]
    ].map((fn, i)=>partialBuildingBlocks[i] || fn);
    buildingBlockMap.set(store, Object.freeze(buildingBlocks));
    const storeGet = buildingBlocks[21];
    const storeSet = buildingBlocks[22];
    const storeSub = buildingBlocks[23];
    return store;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERNAL_overrideCreateStore",
    ()=>INTERNAL_overrideCreateStore,
    "atom",
    ()=>atom,
    "createStore",
    ()=>createStore,
    "getDefaultStore",
    ()=>getDefaultStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/vanilla/internals.mjs [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/vanilla.mjs")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
let keyCount = 0;
function atom(read, write) {
    const key = `atom${++keyCount}`;
    const config = {
        toString () {
            return (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && this.debugLabel ? key + ":" + this.debugLabel : key;
        }
    };
    if (typeof read === "function") {
        config.read = read;
    } else {
        config.init = read;
        config.read = defaultRead;
        config.write = defaultWrite;
    }
    if (write) {
        config.write = write;
    }
    return config;
}
function defaultRead(get) {
    return get(this);
}
function defaultWrite(get, set, arg) {
    return set(this, typeof arg === "function" ? arg(get(this)) : arg);
}
let overriddenCreateStore;
function INTERNAL_overrideCreateStore(fn) {
    overriddenCreateStore = fn(overriddenCreateStore);
}
function createStore() {
    if (overriddenCreateStore) {
        return overriddenCreateStore();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERNAL_buildStoreRev3"])();
}
let defaultStore;
function getDefaultStore() {
    if (!defaultStore) {
        defaultStore = createStore();
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
            if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
                console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044");
            }
        }
    }
    return defaultStore;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/react.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>Provider,
    "useAtom",
    ()=>useAtom,
    "useAtomValue",
    ()=>useAtomValue,
    "useSetAtom",
    ()=>useSetAtom,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/vanilla/internals.mjs [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/react.mjs")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
'use client';
;
;
;
const StoreContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function useStore(options) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
    return (options == null ? void 0 : options.store) || store || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultStore"])();
}
function Provider({ children, store }) {
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (store) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(StoreContext.Provider, {
            value: store
        }, children);
    }
    if (storeRef.current === null) {
        storeRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(StoreContext.Provider, {
        // TODO: If this is not a false positive, consider using useState instead of useRef like https://github.com/pmndrs/jotai/pull/2771
        // eslint-disable-next-line react-hooks/refs
        value: storeRef.current
    }, children);
}
const isPromiseLike = (x)=>typeof (x == null ? void 0 : x.then) === "function";
const attachPromiseStatus = (promise)=>{
    if (!promise.status) {
        promise.status = "pending";
        promise.then((v)=>{
            promise.status = "fulfilled";
            promise.value = v;
        }, (e)=>{
            promise.status = "rejected";
            promise.reason = e;
        });
    }
};
const use = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use || // A shim for older React versions
((promise)=>{
    if (promise.status === "pending") {
        throw promise;
    } else if (promise.status === "fulfilled") {
        return promise.value;
    } else if (promise.status === "rejected") {
        throw promise.reason;
    } else {
        attachPromiseStatus(promise);
        throw promise;
    }
});
const continuablePromiseMap = /* @__PURE__ */ new WeakMap();
const createContinuablePromise = (store, promise, getValue)=>{
    const buildingBlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERNAL_getBuildingBlocksRev3"])(store);
    const registerAbortHandler = buildingBlocks[26];
    let continuablePromise = continuablePromiseMap.get(promise);
    if (!continuablePromise) {
        continuablePromise = new Promise((resolve, reject)=>{
            let curr = promise;
            const onFulfilled = (me)=>(v)=>{
                    if (curr === me) {
                        resolve(v);
                    }
                };
            const onRejected = (me)=>(e)=>{
                    if (curr === me) {
                        reject(e);
                    }
                };
            const onAbort = ()=>{
                try {
                    const nextValue = getValue();
                    if (isPromiseLike(nextValue)) {
                        continuablePromiseMap.set(nextValue, continuablePromise);
                        curr = nextValue;
                        nextValue.then(onFulfilled(nextValue), onRejected(nextValue));
                        registerAbortHandler(buildingBlocks, store, nextValue, onAbort);
                    } else {
                        resolve(nextValue);
                    }
                } catch (e) {
                    reject(e);
                }
            };
            promise.then(onFulfilled(promise), onRejected(promise));
            registerAbortHandler(buildingBlocks, store, promise, onAbort);
        });
        continuablePromiseMap.set(promise, continuablePromise);
    }
    return continuablePromise;
};
function useAtomValue(atom, options) {
    const { delay, unstable_promiseStatus: promiseStatus = !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use } = options || {};
    const store = useStore(options);
    const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
        "useAtomValue.useReducer": (prev)=>{
            const nextValue = store.get(atom);
            if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom) {
                return prev;
            }
            return [
                nextValue,
                store,
                atom
            ];
        }
    }["useAtomValue.useReducer"], void 0, {
        "useAtomValue.useReducer": ()=>[
                store.get(atom),
                store,
                atom
            ]
    }["useAtomValue.useReducer"]);
    let value = valueFromReducer;
    if (storeFromReducer !== store || atomFromReducer !== atom) {
        rerender();
        value = store.get(atom);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAtomValue.useEffect": ()=>{
            const unsub = store.sub(atom, {
                "useAtomValue.useEffect.unsub": ()=>{
                    if (promiseStatus) {
                        try {
                            const value2 = store.get(atom);
                            if (isPromiseLike(value2)) {
                                attachPromiseStatus(createContinuablePromise(store, value2, {
                                    "useAtomValue.useEffect.unsub": ()=>store.get(atom)
                                }["useAtomValue.useEffect.unsub"]));
                            }
                        } catch (e) {}
                    }
                    if (typeof delay === "number") {
                        console.warn(`[DEPRECATED] delay option is deprecated and will be removed in v3.

Migration guide:

Create a custom hook like the following.

function useAtomValueWithDelay<Value>(
  atom: Atom<Value>,
  options: { delay: number },
): Value {
  const { delay } = options
  const store = useStore(options)
  const [value, setValue] = useState(() => store.get(atom))
  useEffect(() => {
    const unsub = store.sub(atom, () => {
      setTimeout(() => setValue(store.get(atom)), delay)
    })
    return unsub
  }, [store, atom, delay])
  return value
}
`);
                        setTimeout(rerender, delay);
                        return;
                    }
                    rerender();
                }
            }["useAtomValue.useEffect.unsub"]);
            rerender();
            return unsub;
        }
    }["useAtomValue.useEffect"], [
        store,
        atom,
        delay,
        promiseStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(value);
    if (isPromiseLike(value)) {
        const promise = createContinuablePromise(store, value, ()=>store.get(atom));
        if (promiseStatus) {
            attachPromiseStatus(promise);
        }
        return use(promise);
    }
    return value;
}
function useSetAtom(atom, options) {
    const store = useStore(options);
    const setAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSetAtom.useCallback[setAtom]": (...args)=>{
            if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !("write" in atom)) {
                throw new Error("not writable atom");
            }
            return store.set(atom, ...args);
        }
    }["useSetAtom.useCallback[setAtom]"], [
        store,
        atom
    ]);
    return setAtom;
}
function useAtom(atom, options) {
    return [
        useAtomValue(atom, options),
        // We do wrong type assertion here, which results in throwing an error.
        useSetAtom(atom, options)
    ];
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/vanilla/utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RESET",
    ()=>RESET,
    "atomFamily",
    ()=>atomFamily,
    "atomWithDefault",
    ()=>atomWithDefault,
    "atomWithLazy",
    ()=>atomWithLazy,
    "atomWithObservable",
    ()=>atomWithObservable,
    "atomWithReducer",
    ()=>atomWithReducer,
    "atomWithRefresh",
    ()=>atomWithRefresh,
    "atomWithReset",
    ()=>atomWithReset,
    "atomWithStorage",
    ()=>atomWithStorage,
    "createJSONStorage",
    ()=>createJSONStorage,
    "freezeAtom",
    ()=>freezeAtom,
    "freezeAtomCreator",
    ()=>freezeAtomCreator,
    "loadable",
    ()=>loadable,
    "selectAtom",
    ()=>selectAtom,
    "splitAtom",
    ()=>splitAtom,
    "unstable_withStorageValidator",
    ()=>withStorageValidator,
    "unwrap",
    ()=>unwrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/vanilla/utils.mjs")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
const RESET = /* @__PURE__ */ Symbol((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" ? "RESET" : "");
function atomWithReset(initialValue) {
    const anAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(initialValue, (get, set, update)=>{
        const nextValue = typeof update === "function" ? update(get(anAtom)) : update;
        set(anAtom, nextValue === RESET ? initialValue : nextValue);
    });
    return anAtom;
}
function atomWithReducer(initialValue, reducer) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(initialValue, function(get, set, action) {
        set(this, reducer(get(this), action));
    });
}
let didWarnDeprecation$1 = false;
function atomFamily(initializeAtom, areEqual) {
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !didWarnDeprecation$1) {
        console.warn("[DEPRECATED] atomFamily is deprecated and will be removed in v3. Please use the `jotai-family` package instead: https://github.com/jotaijs/jotai-family");
        didWarnDeprecation$1 = true;
    }
    let shouldRemove = null;
    const atoms = /* @__PURE__ */ new Map();
    const listeners = /* @__PURE__ */ new Set();
    const createAtom = (param)=>{
        let item;
        if (areEqual === void 0) {
            item = atoms.get(param);
        } else {
            for (const [key, value] of atoms){
                if (areEqual(key, param)) {
                    item = value;
                    break;
                }
            }
        }
        if (item !== void 0) {
            if (shouldRemove == null ? void 0 : shouldRemove(item[1], param)) {
                createAtom.remove(param);
            } else {
                return item[0];
            }
        }
        const newAtom = initializeAtom(param);
        atoms.set(param, [
            newAtom,
            Date.now()
        ]);
        notifyListeners("CREATE", param, newAtom);
        return newAtom;
    };
    const notifyListeners = (type, param, atom)=>{
        for (const listener of listeners){
            listener({
                type,
                param,
                atom
            });
        }
    };
    createAtom.unstable_listen = (callback)=>{
        listeners.add(callback);
        return ()=>{
            listeners.delete(callback);
        };
    };
    createAtom.getParams = ()=>atoms.keys();
    createAtom.remove = (param)=>{
        if (areEqual === void 0) {
            if (!atoms.has(param)) return;
            const [atom] = atoms.get(param);
            atoms.delete(param);
            notifyListeners("REMOVE", param, atom);
        } else {
            for (const [key, [atom]] of atoms){
                if (areEqual(key, param)) {
                    atoms.delete(key);
                    notifyListeners("REMOVE", key, atom);
                    break;
                }
            }
        }
    };
    createAtom.setShouldRemove = (fn)=>{
        shouldRemove = fn;
        if (!shouldRemove) return;
        for (const [key, [atom, createdAt]] of atoms){
            if (shouldRemove(createdAt, key)) {
                atoms.delete(key);
                notifyListeners("REMOVE", key, atom);
            }
        }
    };
    return createAtom;
}
const getCached$2 = (c, m, k)=>(m.has(k) ? m : m.set(k, c())).get(k);
const cache1$3 = /* @__PURE__ */ new WeakMap();
const memo3 = (create, dep1, dep2, dep3)=>{
    const cache2 = getCached$2(()=>/* @__PURE__ */ new WeakMap(), cache1$3, dep1);
    const cache3 = getCached$2(()=>/* @__PURE__ */ new WeakMap(), cache2, dep2);
    return getCached$2(create, cache3, dep3);
};
function selectAtom(anAtom, selector, equalityFn = Object.is) {
    return memo3(()=>{
        const EMPTY = /* @__PURE__ */ Symbol();
        const selectValue = ([value, prevSlice])=>{
            if (prevSlice === EMPTY) {
                return selector(value);
            }
            const slice = selector(value, prevSlice);
            return equalityFn(prevSlice, slice) ? prevSlice : slice;
        };
        const derivedAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>{
            const prev = get(derivedAtom);
            const value = get(anAtom);
            return selectValue([
                value,
                prev
            ]);
        });
        derivedAtom.init = EMPTY;
        return derivedAtom;
    }, anAtom, selector, equalityFn);
}
const frozenAtoms = /* @__PURE__ */ new WeakSet();
const deepFreeze = (value)=>{
    if (typeof value !== "object" || value === null) {
        return value;
    }
    Object.freeze(value);
    const propNames = Object.getOwnPropertyNames(value);
    for (const name of propNames){
        deepFreeze(value[name]);
    }
    return value;
};
function freezeAtom(anAtom) {
    if (frozenAtoms.has(anAtom)) {
        return anAtom;
    }
    frozenAtoms.add(anAtom);
    const origRead = anAtom.read;
    anAtom.read = function(get, options) {
        return deepFreeze(origRead.call(this, get, options));
    };
    if ("write" in anAtom) {
        const origWrite = anAtom.write;
        anAtom.write = function(get, set, ...args) {
            return origWrite.call(this, get, (...setArgs)=>{
                if (setArgs[0] === anAtom) {
                    setArgs[1] = deepFreeze(setArgs[1]);
                }
                return set(...setArgs);
            }, ...args);
        };
    }
    return anAtom;
}
function freezeAtomCreator(createAtom) {
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("[DEPRECATED] freezeAtomCreator is deprecated, define it on users end");
    }
    return (...args)=>freezeAtom(createAtom(...args));
}
const getCached$1 = (c, m, k)=>(m.has(k) ? m : m.set(k, c())).get(k);
const cache1$2 = /* @__PURE__ */ new WeakMap();
const memo2$1 = (create, dep1, dep2)=>{
    const cache2 = getCached$1(()=>/* @__PURE__ */ new WeakMap(), cache1$2, dep1);
    return getCached$1(create, cache2, dep2);
};
const cacheKeyForEmptyKeyExtractor = {};
const isWritable = (atom2)=>!!atom2.write;
const isFunction = (x)=>typeof x === "function";
function splitAtom(arrAtom, keyExtractor) {
    return memo2$1(()=>{
        const mappingCache = /* @__PURE__ */ new WeakMap();
        const getMapping = (arr, prev)=>{
            let mapping = mappingCache.get(arr);
            if (mapping) {
                return mapping;
            }
            const prevMapping = prev && mappingCache.get(prev);
            const atomList = [];
            const keyList = [];
            arr.forEach((item, index)=>{
                const key = keyExtractor ? keyExtractor(item) : index;
                keyList[index] = key;
                const cachedAtom = prevMapping && prevMapping.atomList[prevMapping.keyList.indexOf(key)];
                if (cachedAtom) {
                    atomList[index] = cachedAtom;
                    return;
                }
                const read = (get)=>{
                    const prev2 = get(mappingAtom);
                    const currArr = get(arrAtom);
                    const mapping2 = getMapping(currArr, prev2 == null ? void 0 : prev2.arr);
                    const index2 = mapping2.keyList.indexOf(key);
                    if (index2 < 0 || index2 >= currArr.length) {
                        const prevItem = arr[getMapping(arr).keyList.indexOf(key)];
                        if (prevItem) {
                            return prevItem;
                        }
                        throw new Error("splitAtom: index out of bounds for read");
                    }
                    return currArr[index2];
                };
                const write = (get, set, update)=>{
                    const prev2 = get(mappingAtom);
                    const arr2 = get(arrAtom);
                    const mapping2 = getMapping(arr2, prev2 == null ? void 0 : prev2.arr);
                    const index2 = mapping2.keyList.indexOf(key);
                    if (index2 < 0 || index2 >= arr2.length) {
                        throw new Error("splitAtom: index out of bounds for write");
                    }
                    const nextItem = isFunction(update) ? update(arr2[index2]) : update;
                    if (!Object.is(arr2[index2], nextItem)) {
                        set(arrAtom, [
                            ...arr2.slice(0, index2),
                            nextItem,
                            ...arr2.slice(index2 + 1)
                        ]);
                    }
                };
                atomList[index] = isWritable(arrAtom) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(read, write) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(read);
            });
            if (prevMapping && prevMapping.keyList.length === keyList.length && prevMapping.keyList.every((x, i)=>x === keyList[i])) {
                mapping = prevMapping;
            } else {
                mapping = {
                    arr,
                    atomList,
                    keyList
                };
            }
            mappingCache.set(arr, mapping);
            return mapping;
        };
        const mappingAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>{
            const prev = get(mappingAtom);
            const arr = get(arrAtom);
            const mapping = getMapping(arr, prev == null ? void 0 : prev.arr);
            return mapping;
        });
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            mappingAtom.debugPrivate = true;
        }
        mappingAtom.init = void 0;
        const splittedAtom = isWritable(arrAtom) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>get(mappingAtom).atomList, (get, set, action)=>{
            switch(action.type){
                case "remove":
                    {
                        const index = get(splittedAtom).indexOf(action.atom);
                        if (index >= 0) {
                            const arr = get(arrAtom);
                            set(arrAtom, [
                                ...arr.slice(0, index),
                                ...arr.slice(index + 1)
                            ]);
                        }
                        break;
                    }
                case "insert":
                    {
                        const index = action.before ? get(splittedAtom).indexOf(action.before) : get(splittedAtom).length;
                        if (index >= 0) {
                            const arr = get(arrAtom);
                            set(arrAtom, [
                                ...arr.slice(0, index),
                                action.value,
                                ...arr.slice(index)
                            ]);
                        }
                        break;
                    }
                case "move":
                    {
                        const index1 = get(splittedAtom).indexOf(action.atom);
                        const index2 = action.before ? get(splittedAtom).indexOf(action.before) : get(splittedAtom).length;
                        if (index1 >= 0 && index2 >= 0) {
                            const arr = get(arrAtom);
                            if (index1 < index2) {
                                set(arrAtom, [
                                    ...arr.slice(0, index1),
                                    ...arr.slice(index1 + 1, index2),
                                    arr[index1],
                                    ...arr.slice(index2)
                                ]);
                            } else {
                                set(arrAtom, [
                                    ...arr.slice(0, index2),
                                    arr[index1],
                                    ...arr.slice(index2, index1),
                                    ...arr.slice(index1 + 1)
                                ]);
                            }
                        }
                        break;
                    }
            }
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>get(mappingAtom).atomList);
        return splittedAtom;
    }, arrAtom, keyExtractor || cacheKeyForEmptyKeyExtractor);
}
function atomWithDefault(getDefault) {
    const EMPTY = /* @__PURE__ */ Symbol();
    const overwrittenAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(EMPTY);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        overwrittenAtom.debugPrivate = true;
    }
    const anAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get, options)=>{
        const overwritten = get(overwrittenAtom);
        if (overwritten !== EMPTY) {
            return overwritten;
        }
        return getDefault(get, options);
    }, (get, set, update)=>{
        const newValue = typeof update === "function" ? update(get(anAtom)) : update;
        set(overwrittenAtom, newValue === RESET ? EMPTY : newValue);
    });
    return anAtom;
}
const isPromiseLike$2 = (x)=>typeof (x == null ? void 0 : x.then) === "function";
function withStorageValidator(validator) {
    return (unknownStorage)=>{
        const storage = {
            ...unknownStorage,
            getItem: (key, initialValue)=>{
                const validate = (value2)=>{
                    if (!validator(value2)) {
                        return initialValue;
                    }
                    return value2;
                };
                const value = unknownStorage.getItem(key, initialValue);
                if (isPromiseLike$2(value)) {
                    return value.then(validate);
                }
                return validate(value);
            }
        };
        return storage;
    };
}
function createJSONStorage(getStringStorage = ()=>{
    try {
        return window.localStorage;
    } catch (e) {
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            if (typeof window !== "undefined") {
                console.warn(e);
            }
        }
        return void 0;
    }
}, options) {
    var _a;
    let lastStr;
    let lastValue;
    const storage = {
        getItem: (key, initialValue)=>{
            var _a2, _b;
            const parse = (str2)=>{
                str2 = str2 || "";
                if (lastStr !== str2) {
                    try {
                        lastValue = JSON.parse(str2, options == null ? void 0 : options.reviver);
                    } catch (e) {
                        return initialValue;
                    }
                    lastStr = str2;
                }
                return lastValue;
            };
            const str = (_b = (_a2 = getStringStorage()) == null ? void 0 : _a2.getItem(key)) != null ? _b : null;
            if (isPromiseLike$2(str)) {
                return str.then(parse);
            }
            return parse(str);
        },
        setItem: (key, newValue)=>{
            var _a2;
            return (_a2 = getStringStorage()) == null ? void 0 : _a2.setItem(key, JSON.stringify(newValue, options == null ? void 0 : options.replacer));
        },
        removeItem: (key)=>{
            var _a2;
            return (_a2 = getStringStorage()) == null ? void 0 : _a2.removeItem(key);
        }
    };
    const createHandleSubscribe = (subscriber2)=>(key, callback, initialValue)=>subscriber2(key, (v)=>{
                let newValue;
                try {
                    newValue = JSON.parse(v || "", options == null ? void 0 : options.reviver);
                } catch (e) {
                    newValue = initialValue;
                }
                callback(newValue);
            });
    let subscriber;
    try {
        subscriber = (_a = getStringStorage()) == null ? void 0 : _a.subscribe;
    } catch (e) {}
    if (!subscriber && typeof window !== "undefined" && typeof window.addEventListener === "function" && window.Storage) {
        subscriber = (key, callback)=>{
            if (!(getStringStorage() instanceof window.Storage)) {
                return ()=>{};
            }
            const storageEventCallback = (e)=>{
                if (e.storageArea === getStringStorage() && e.key === key) {
                    callback(e.newValue);
                }
            };
            window.addEventListener("storage", storageEventCallback);
            return ()=>{
                window.removeEventListener("storage", storageEventCallback);
            };
        };
    }
    if (subscriber) {
        storage.subscribe = createHandleSubscribe(subscriber);
    }
    return storage;
}
const defaultStorage = createJSONStorage();
function atomWithStorage(key, initialValue, storage = defaultStorage, options) {
    const getOnInit = options == null ? void 0 : options.getOnInit;
    const baseAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(getOnInit ? storage.getItem(key, initialValue) : initialValue);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        baseAtom.debugPrivate = true;
    }
    baseAtom.onMount = (setAtom)=>{
        var _a;
        setAtom(storage.getItem(key, initialValue));
        return (_a = storage.subscribe) == null ? void 0 : _a.call(storage, key, setAtom, initialValue);
    };
    const anAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>get(baseAtom), (get, set, update)=>{
        const nextValue = typeof update === "function" ? update(get(baseAtom)) : update;
        if (nextValue === RESET) {
            set(baseAtom, initialValue);
            return storage.removeItem(key);
        }
        if (isPromiseLike$2(nextValue)) {
            return nextValue.then((resolvedValue)=>{
                set(baseAtom, resolvedValue);
                return storage.setItem(key, resolvedValue);
            });
        }
        set(baseAtom, nextValue);
        return storage.setItem(key, nextValue);
    });
    return anAtom;
}
const isPromiseLike$1 = (x)=>typeof (x == null ? void 0 : x.then) === "function";
function atomWithObservable(getObservable, options) {
    const returnResultData = (result)=>{
        if ("e" in result) {
            throw result.e;
        }
        return result.d;
    };
    const observableResultAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>{
        var _a;
        const observable = getObservable(get);
        const subscribable = ((_a = observable[Symbol.observable]) == null ? void 0 : _a.call(observable)) || observable;
        let resolve;
        const makePending = ()=>new Promise((r)=>{
                resolve = r;
            });
        const initialResult = options && "initialValue" in options ? {
            d: typeof options.initialValue === "function" ? options.initialValue() : options.initialValue
        } : makePending();
        let setResult;
        let lastResult;
        const listener = (result)=>{
            lastResult = result;
            resolve == null ? void 0 : resolve(result);
            setResult == null ? void 0 : setResult(result);
        };
        let subscription;
        let timer;
        const isNotMounted = ()=>!setResult;
        const unsubscribe = ()=>{
            if (subscription) {
                subscription.unsubscribe();
                subscription = void 0;
            }
        };
        const start = ()=>{
            if (subscription) {
                clearTimeout(timer);
                subscription.unsubscribe();
            }
            subscription = subscribable.subscribe({
                next: (d)=>listener({
                        d
                    }),
                error: (e)=>listener({
                        e
                    }),
                complete: ()=>{}
            });
            if (isNotMounted() && (options == null ? void 0 : options.unstable_timeout)) {
                timer = setTimeout(unsubscribe, options.unstable_timeout);
            }
        };
        start();
        const resultAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(lastResult || initialResult);
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            resultAtom.debugPrivate = true;
        }
        resultAtom.onMount = (update)=>{
            setResult = update;
            if (lastResult) {
                update(lastResult);
            }
            if (subscription) {
                clearTimeout(timer);
            } else {
                start();
            }
            return ()=>{
                setResult = void 0;
                if (options == null ? void 0 : options.unstable_timeout) {
                    timer = setTimeout(unsubscribe, options.unstable_timeout);
                } else {
                    unsubscribe();
                }
            };
        };
        return [
            resultAtom,
            observable,
            makePending,
            start,
            isNotMounted
        ];
    });
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        observableResultAtom.debugPrivate = true;
    }
    const observableAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>{
        const [resultAtom] = get(observableResultAtom);
        const result = get(resultAtom);
        if (isPromiseLike$1(result)) {
            return result.then(returnResultData);
        }
        return returnResultData(result);
    }, (get, set, data)=>{
        const [resultAtom, observable, makePending, start, isNotMounted] = get(observableResultAtom);
        if ("next" in observable) {
            if (isNotMounted()) {
                set(resultAtom, makePending());
                start();
            }
            observable.next(data);
        } else {
            throw new Error("observable is not subject");
        }
    });
    return observableAtom;
}
const getCached = (c, m, k)=>(m.has(k) ? m : m.set(k, c())).get(k);
const cache1$1 = /* @__PURE__ */ new WeakMap();
const memo2 = (create, dep1, dep2)=>{
    const cache2 = getCached(()=>/* @__PURE__ */ new WeakMap(), cache1$1, dep1);
    return getCached(create, cache2, dep2);
};
const isPromiseLike = (p)=>typeof (p == null ? void 0 : p.then) === "function";
const defaultFallback = ()=>void 0;
function unwrap(anAtom, fallback = defaultFallback) {
    return memo2(()=>{
        const promiseErrorCache = /* @__PURE__ */ new WeakMap();
        const promiseResultCache = /* @__PURE__ */ new WeakMap();
        const refreshAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(0);
        const triggerRefreshAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])([]);
        triggerRefreshAtom.INTERNAL_onInit = (store)=>{
            store.set(triggerRefreshAtom, [
                ()=>store.set(refreshAtom, (c)=>c + 1)
            ]);
        };
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            refreshAtom.debugPrivate = true;
            triggerRefreshAtom.debugPrivate = true;
        }
        const promiseAndValueAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>{
            get(refreshAtom);
            let prev;
            try {
                prev = get(promiseAndValueAtom);
            } catch (e) {}
            const promise = get(anAtom);
            if (!isPromiseLike(promise)) {
                return {
                    v: promise
                };
            }
            if (promise !== (prev == null ? void 0 : prev.p)) {
                promise.then((v)=>{
                    promiseResultCache.set(promise, v);
                    const [triggerRefresh] = get(triggerRefreshAtom);
                    triggerRefresh();
                }, (e)=>{
                    promiseErrorCache.set(promise, e);
                    const [triggerRefresh] = get(triggerRefreshAtom);
                    triggerRefresh();
                });
            }
            if (promiseErrorCache.has(promise)) {
                throw promiseErrorCache.get(promise);
            }
            if (promiseResultCache.has(promise)) {
                return {
                    p: promise,
                    v: promiseResultCache.get(promise)
                };
            }
            if (prev && "v" in prev) {
                return {
                    p: promise,
                    f: fallback(prev.v),
                    v: prev.v
                };
            }
            return {
                p: promise,
                f: fallback()
            };
        });
        promiseAndValueAtom.init = void 0;
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            promiseAndValueAtom.debugPrivate = true;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>{
            const state = get(promiseAndValueAtom);
            if ("f" in state) {
                return state.f;
            }
            return state.v;
        }, (_get, set, ...args)=>set(anAtom, ...args));
    }, anAtom, fallback);
}
const cache1 = /* @__PURE__ */ new WeakMap();
const memo1 = (create, dep1)=>(cache1.has(dep1) ? cache1 : cache1.set(dep1, create())).get(dep1);
let didWarnDeprecation = false;
function loadable(anAtom) {
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !didWarnDeprecation) {
        console.warn("[DEPRECATED] loadable is deprecated and will be removed in v3. Please use a userland util with the `unwrap` util: https://github.com/pmndrs/jotai/pull/3217");
        didWarnDeprecation = true;
    }
    return memo1(()=>{
        const LOADING = {
            state: "loading"
        };
        const unwrappedAtom = unwrap(anAtom, ()=>LOADING);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>{
            try {
                const data = get(unwrappedAtom);
                if (data === LOADING) {
                    return LOADING;
                }
                return {
                    state: "hasData",
                    data
                };
            } catch (error) {
                return {
                    state: "hasError",
                    error
                };
            }
        });
    }, anAtom);
}
function atomWithRefresh(read, write) {
    const refreshAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(0);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        refreshAtom.debugPrivate = true;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get, options)=>{
        get(refreshAtom);
        return read(get, options);
    }, (get, set, ...args)=>{
        if (args.length === 0) {
            set(refreshAtom, (c)=>c + 1);
        } else if (write) {
            return write(get, set, ...args);
        } else if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            throw new Error("refresh must be called without arguments");
        }
    });
}
function atomWithLazy(makeInitial) {
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(void 0);
    delete a.init;
    Object.defineProperty(a, "init", {
        get () {
            return makeInitial();
        }
    });
    return a;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/react/utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAtomCallback",
    ()=>useAtomCallback,
    "useHydrateAtoms",
    ()=>useHydrateAtoms,
    "useReducerAtom",
    ()=>useReducerAtom,
    "useResetAtom",
    ()=>useResetAtom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/vanilla/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Documents/Github/ptsl-2026/node_modules/.pnpm/jotai@2.20.2_@babel+core@7._7105f476b51bb9428d6c8ac88f19fb0f/node_modules/jotai/esm/react/utils.mjs")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
'use client';
;
;
;
;
function useResetAtom(anAtom, options) {
    const setAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(anAtom, options);
    const resetAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useResetAtom.useCallback[resetAtom]": ()=>setAtom(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESET"])
    }["useResetAtom.useCallback[resetAtom]"], [
        setAtom
    ]);
    return resetAtom;
}
function useReducerAtom(anAtom, reducer, options) {
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("[DEPRECATED] useReducerAtom is deprecated and will be removed in the future. Please create your own version using the recipe. https://github.com/pmndrs/jotai/pull/2467");
    }
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtom"])(anAtom, options);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReducerAtom.useCallback[dispatch]": (action)=>{
            setState({
                "useReducerAtom.useCallback[dispatch]": (prev)=>reducer(prev, action)
            }["useReducerAtom.useCallback[dispatch]"]);
        }
    }["useReducerAtom.useCallback[dispatch]"], [
        setState,
        reducer
    ]);
    return [
        state,
        dispatch
    ];
}
function useAtomCallback(callback, options) {
    const anAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAtomCallback.useMemo[anAtom]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(null, {
                "useAtomCallback.useMemo[anAtom]": (get, set, ...args)=>callback(get, set, ...args)
            }["useAtomCallback.useMemo[anAtom]"])
    }["useAtomCallback.useMemo[anAtom]"], [
        callback
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(anAtom, options);
}
const hydratedMap = /* @__PURE__ */ new WeakMap();
function useHydrateAtoms(values, options) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$20$2e$2_$40$babel$2b$core$40$7$2e$_7105f476b51bb9428d6c8ac88f19fb0f$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(options);
    const hydratedSet = getHydratedSet(store);
    for (const [atom, ...args] of values){
        if (!hydratedSet.has(atom) || (options == null ? void 0 : options.dangerouslyForceHydrate)) {
            hydratedSet.add(atom);
            store.set(atom, ...args);
        }
    }
}
const getHydratedSet = (store)=>{
    let hydratedSet = hydratedMap.get(store);
    if (!hydratedSet) {
        hydratedSet = /* @__PURE__ */ new WeakSet();
        hydratedMap.set(store, hydratedSet);
    }
    return hydratedSet;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/ax.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ax
]);
/**
 * This length includes the underscore,
 * e.g. `"_1s4A"` would be a valid atomic group hash.
 */ const ATOMIC_GROUP_LENGTH = 5;
function ax(classNames) {
    // Shortcut: nothing to do
    if (!classNames.length) {
        return;
    }
    // Shortcut: don't need to do anything if we only have a single classname
    if (classNames.length === 1 && classNames[0] && // checking to see if `classNames[0]` is a string that contains other classnames
    !classNames[0].includes(' ')) {
        return classNames[0];
    }
    // Using an object rather than a `Map` as it performed better in our benchmarks.
    // Would be happy to move to `Map` if it proved to be better under real conditions.
    const map = {};
    // Note: using loops to minimize iterations over the collection
    for (const value of classNames){
        // Exclude all falsy values, which leaves us with populated strings
        if (!value) {
            continue;
        }
        // a `value` can contain multiple classnames
        const list = value.split(' ');
        for (const className of list){
            /**
             * For atomic style classnames: the `key` is the `group`
             *
             * - Later atomic classnames with the same `group` will override earlier ones
             *   (which is what we want).
             * - Assumes atomic classnames are the only things that start with `_`
             * - Could use a regex to ensure that atomic classnames are structured how we expect,
             *   but did not add that for now as it did slow things down a bit.
             *
             * For other classnames: the `key` is the whole classname
             * - Okay to remove duplicates as doing so does not impact specificity
             *
             * */ const key = className.startsWith('_') ? className.slice(0, ATOMIC_GROUP_LENGTH) : className;
            map[key] = className;
        }
    }
    /**
     * We are converting the `map` into a string.
     *
     * The simple way to do this would be `Object.values(map).join(' ')`.
     * However, the approach below performs 10%-20% better in benchmarks.
     *
     * For `ax()` it feels right to squeeze as much runtime performance out as we can.
     */ let result = '';
    for(const key in map){
        result += map[key] + ' ';
    }
    // If we have an empty string, then our `map` was empty.
    if (!result) {
        return;
    }
    // remove last " " from the result (we added " " at the end of every value)
    return result.trimEnd();
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/ax.js [app-client] (ecmascript) <export default as ax>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ax",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$ax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$ax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/ax.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/css-custom-property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns a CSS custom property value with an optional suffix & prefix.
 * Prefix will only be added if there is a suffix.
 * If the value is undefined a fallback value will be returned to prevent children inheriting parent values.
 *
 * @param value
 * @param suffix
 * @param prefix
 */ __turbopack_context__.s([
    "default",
    ()=>cssCustomPropertyValue
]);
function cssCustomPropertyValue(value, suffix, prefix) {
    if (value != undefined) {
        if (suffix) {
            if (prefix) {
                return prefix + value + suffix;
            }
            return value + suffix;
        }
        return value;
    }
    // Currently React trims these values so we can't use a space " " to block the value.
    // Instead we use a CSS variable that doesn't exist which falls back to " ".
    // Bug raised here: https://github.com/facebook/react/issues/20497
    return 'var(--c-, )';
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/css-custom-property.js [app-client] (ecmascript) <export default as ix>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$css$2d$custom$2d$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$css$2d$custom$2d$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/css-custom-property.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/is-server-environment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isServerEnvironment",
    ()=>isServerEnvironment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @see https://github.com/jsdom/jsdom/releases/tag/12.0.0
 * @see https://github.com/jsdom/jsdom/issues/1537
 */ const isJsDomEnvironment = ()=>window.name === 'nodejs' || (navigator === null || navigator === void 0 ? void 0 : navigator.userAgent.includes('Node.js')) || (navigator === null || navigator === void 0 ? void 0 : navigator.userAgent.includes('jsdom'));
const isServerEnvironment = ()=>{
    if (typeof window === 'undefined' || typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions != null && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node != null) {
        return true;
    }
    if (isJsDomEnvironment()) {
        return true;
    }
    return false;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/style-cache.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useCache",
    ()=>useCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$is$2d$server$2d$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/is-server-environment.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Cache to hold already used styles.
 * React Context on the server - singleton object on the client.
 */ const Cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$is$2d$server$2d$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServerEnvironment"])() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null) : {};
if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$is$2d$server$2d$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServerEnvironment"])() && typeof document !== 'undefined') {
    /**
     * Iterates through all found style elements generated when server side rendering.
     *
     * @param cb
     */ const ssrStyles = document.querySelectorAll('style[data-cmpld]');
    for(let i = 0; i < ssrStyles.length; i++){
        // Move all found server-side rendered style elements to the head before React hydration happens.
        document.head.appendChild(ssrStyles[i]);
    }
}
const useCache = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$is$2d$server$2d$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServerEnvironment"])()) {
        // On the server we use React Context to we don't leak the cache between SSR calls.
        // During runtime this hook isn't conditionally called - it is at build time that the flow gets decided.
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Cache) || {};
    }
    // On the client we use the object singleton.
    return Cache;
};
/**
 * On the server this ensures the minimal amount of styles will be rendered
 * safely using React Context.
 *
 * On the browser this turns into a fragment with no React Context.
 */ const StyleCacheProvider = (props)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$is$2d$server$2d$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServerEnvironment"])()) {
        // This code path isn't conditionally called at build time - safe to ignore.
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const inserted = useCache();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Cache.Provider, {
            value: inserted
        }, props.children);
    }
    return props.children;
};
const __TURBOPACK__default__export__ = StyleCacheProvider;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/style-cache.js [app-client] (ecmascript) <export default as CC>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CC",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$style$2d$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$style$2d$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/style-cache.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/dev-warnings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeCssInDev",
    ()=>analyzeCssInDev
]);
const selectorsToWarn = [
    ':first-child',
    ':nth-child'
];
const hasWarned = {};
const warn = (str, ...args)=>console.error(`
 ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗██╗     ███████╗██████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║██║     ██╔════╝██╔══██╗
██║     ██║   ██║██╔████╔██║██████╔╝██║██║     █████╗  ██║  ██║
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║██║     ██╔══╝  ██║  ██║
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║███████╗███████╗██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝╚═════╝

  @compiled/react/runtime - DEV WARNING

  ${str}
`, ...args);
const analyzeCssInDev = (sheet)=>{
    if (hasWarned[sheet]) {
        return;
    }
    const shouldWarnAboutSelectors = selectorsToWarn.map((selector)=>sheet.includes(selector)).filter(Boolean).length > 0;
    if (shouldWarnAboutSelectors) {
        warn(`Selectors "${selectorsToWarn.join(', ')}" are dangerous to use when server side rendering.
  Alternatively try and use ":nth-of-type", or placing data attributes and targetting those instead.
  Read https://compiledcssinjs.com/docs/server-side-rendering for more advice.`);
    }
    hasWarned[sheet] = true;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/shorthand.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getShorthandDepth",
    ()=>getShorthandDepth
]);
// Copied from packages/utils/src/shorthand.ts so that we avoid
// inflating the bundle size of @compiled/react/runtime with the contents
// of @compiled/utils
//
// Keep this `shorthandBuckets` in sync with the `shorthandBuckets` defined in
// packages/utils/src/shorthand.ts
const shorthandBuckets = {
    all: 0,
    animation: 1,
    'animation-range': 1,
    background: 1,
    border: 1,
    'border-color': 2,
    'border-style': 2,
    'border-width': 2,
    'border-block': 3,
    'border-inline': 3,
    'border-top': 4,
    'border-right': 4,
    'border-bottom': 4,
    'border-left': 4,
    'border-block-start': 5,
    'border-block-end': 5,
    'border-inline-start': 5,
    'border-inline-end': 5,
    'border-image': 1,
    'border-radius': 1,
    'column-rule': 1,
    columns: 1,
    'contain-intrinsic-size': 1,
    container: 1,
    flex: 1,
    'flex-flow': 1,
    font: 1,
    'font-synthesis': 1,
    'font-variant': 2,
    gap: 1,
    grid: 1,
    'grid-area': 1,
    'grid-column': 2,
    'grid-row': 2,
    'grid-template': 2,
    inset: 1,
    'inset-block': 2,
    'inset-inline': 2,
    'list-style': 1,
    margin: 1,
    'margin-block': 2,
    'margin-inline': 2,
    mask: 1,
    'mask-border': 1,
    offset: 1,
    outline: 1,
    overflow: 1,
    'overscroll-behavior': 1,
    padding: 1,
    'padding-block': 2,
    'padding-inline': 2,
    'place-content': 1,
    'place-items': 1,
    'place-self': 1,
    'position-try': 1,
    'scroll-margin': 1,
    'scroll-margin-block': 2,
    'scroll-margin-inline': 2,
    'scroll-padding': 1,
    'scroll-padding-block': 2,
    'scroll-padding-inline': 2,
    'scroll-timeline': 1,
    'text-decoration': 1,
    'text-emphasis': 1,
    'text-wrap': 1,
    transition: 1,
    'view-timeline': 1
};
const getShorthandDepth = (shorthand)=>{
    var _a;
    return (_a = shorthandBuckets[shorthand]) !== null && _a !== void 0 ? _a : null;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/sheet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>insertRule,
    "getStyleBucketName",
    ()=>getStyleBucketName,
    "styleBucketOrdering",
    ()=>styleBucketOrdering
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$shorthand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/shorthand.js [app-client] (ecmascript)");
;
;
const styleBucketOrdering = [
    // shorthand properties
    's-0',
    's-1',
    's-2',
    's-3',
    's-4',
    's-5',
    // catch-all
    '',
    // link
    'l',
    // visited
    'v',
    // focus-within
    'w',
    // focus
    'f',
    // focus-visible
    'i',
    // hover
    'h',
    // active
    'a',
    // at-rules
    'm'
];
/**
 * Holds all style buckets in memory that have been added to the head.
 */ const styleBucketsInHead = {};
/**
 * Maps the long pseudo name to the short pseudo name.
 * Pseudos that match here will be ordered,
 * everything else will make their way to the catch all style bucket.
 * We reduce the pseudo name to save bundlesize.
 * Thankfully there aren't any overlaps, see: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes.
 */ const pseudosMap = {
    // link
    k: 'l',
    // visited
    ited: 'v',
    // focus-within
    'us-within': 'w',
    // focus
    us: 'f',
    // focus-visible
    'us-visible': 'i',
    // hover
    er: 'h',
    // active
    ive: 'a'
};
/**
 * Lazily adds a `<style>` bucket to the `<head>`.
 * This will ensure that the style buckets are ordered.
 *
 * @param bucket Bucket to insert in the head.
 */ function lazyAddStyleBucketToHead(bucketName, opts) {
    if (!styleBucketsInHead[bucketName]) {
        let currentBucketIndex = styleBucketOrdering.indexOf(bucketName) + 1;
        let nextBucketFromCache = null;
        // Find the next bucket which we will add our new style bucket before.
        for(; currentBucketIndex < styleBucketOrdering.length; currentBucketIndex++){
            const nextBucket = styleBucketsInHead[styleBucketOrdering[currentBucketIndex]];
            if (nextBucket) {
                nextBucketFromCache = nextBucket;
                break;
            }
        }
        const tag = document.createElement('style');
        opts.nonce && tag.setAttribute('nonce', opts.nonce);
        tag.appendChild(document.createTextNode(''));
        document.head.insertBefore(tag, nextBucketFromCache);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        styleBucketsInHead[bucketName] = tag;
    }
    return styleBucketsInHead[bucketName];
}
const getStyleBucketName = (sheet)=>{
    // We are grouping all the at-rules like @media, @supports etc under `m` bucket.
    if (sheet.charCodeAt(0) === 64 /* "@" */ ) {
        return 'm';
    }
    const firstBracket = sheet.indexOf('{');
    /**
     * We assume that classname will always be 9 character long,
     * using this the 10th characters could be a pseudo declaration.
     */ if (sheet.charCodeAt(10) === 58 /* ":" */ ) {
        // We send through a subset of the string instead of the full pseudo name.
        // For example `"focus-visible"` name would instead of `"us-visible"`.
        // Return a mapped pseudo else the default catch all bucket.
        const mapped = pseudosMap[sheet.slice(14, firstBracket)];
        if (mapped) return mapped;
    }
    const property = sheet.slice(firstBracket + 1, sheet.indexOf(':', firstBracket)).trim();
    const shorthandDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$shorthand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShorthandDepth"])(property);
    if (typeof shorthandDepth === 'number') {
        return `s-${shorthandDepth}`;
    }
    // Return default catch all bucket
    return '';
};
function insertRule(css, opts) {
    const bucketName = getStyleBucketName(css);
    const style = lazyAddStyleBucketToHead(bucketName, opts);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        style.appendChild(document.createTextNode(css));
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/style.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Style
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$dev$2d$warnings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/dev-warnings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$is$2d$server$2d$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/is-server-environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$sheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/sheet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$style$2d$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/style-cache.js [app-client] (ecmascript)");
;
;
;
;
;
function Style(props) {
    const inserted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$style$2d$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCache"])();
    if ("TURBOPACK compile-time truthy", 1) {
        props.children.forEach(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$dev$2d$warnings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeCssInDev"]);
    }
    if (props.children.length) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$is$2d$server$2d$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServerEnvironment"])()) {
            const bucketedSheets = {};
            let hasSheets = false;
            for(let i = 0; i < props.children.length; i++){
                const sheet = props.children[i];
                if (inserted[sheet]) {
                    continue;
                } else {
                    inserted[sheet] = true;
                    hasSheets = true;
                }
                const bucketName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$sheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleBucketName"])(sheet);
                bucketedSheets[bucketName] = (bucketedSheets[bucketName] || '') + sheet;
            }
            if (!hasSheets) {
                return null;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("style", {
                "data-cmpld": true,
                nonce: props.nonce,
                dangerouslySetInnerHTML: {
                    __html: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$sheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleBucketOrdering"].map((bucket)=>bucketedSheets[bucket]).join('')
                }
            });
        } else {
            for(let i = 0; i < props.children.length; i++){
                const sheet = props.children[i];
                if (inserted[sheet]) {
                    continue;
                }
                inserted[sheet] = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$sheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(sheet, props);
            }
        }
    }
    return null;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/style.js [app-client] (ecmascript) <export default as CS>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CS",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$compiled$2b$react$40$0$2e$19$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$compiled$2f$react$2f$dist$2f$esm$2f$runtime$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@compiled+react@0.19.1_react@19.2.4/node_modules/@compiled/react/dist/esm/runtime/style.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-dock@0.8.0_@types+react@19.2.17_react@19.2.4/node_modules/react-dock/lib/autoprefix.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>autoprefix
]);
// Same as https://github.com/SimenB/react-vendor-prefixes/blob/master/src/index.js,
// but dumber
const vendorSpecificProperties = [
    'animation',
    'animationDelay',
    'animationDirection',
    'animationDuration',
    'animationFillMode',
    'animationIterationCount',
    'animationName',
    'animationPlayState',
    'animationTimingFunction',
    'appearance',
    'backfaceVisibility',
    'backgroundClip',
    'borderImage',
    'borderImageSlice',
    'boxSizing',
    'boxShadow',
    'contentColumns',
    'transform',
    'transformOrigin',
    'transformStyle',
    'transition',
    'transitionDelay',
    'transitionDuration',
    'transitionProperty',
    'transitionTimingFunction',
    'perspective',
    'perspectiveOrigin',
    'userSelect'
];
const prefixes = [
    'Moz',
    'Webkit',
    'ms',
    'O'
];
function prefixProp(key, value) {
    return prefixes.reduce((obj, pre)=>(obj[pre + key[0].toUpperCase() + key.substr(1)] = value, obj), {});
}
function autoprefix(style) {
    return Object.keys(style).reduce((obj, key)=>vendorSpecificProperties.includes(key) ? {
            ...obj,
            ...prefixProp(key, style[key])
        } : obj, style);
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-dock@0.8.0_@types+react@19.2.17_react@19.2.4/node_modules/react-dock/lib/Dock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$18$2e$1$2f$node_modules$2f$lodash$2d$es$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__debounce$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/debounce.js [app-client] (ecmascript) <export default as debounce>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$dock$40$0$2e$8$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$dock$2f$lib$2f$autoprefix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-dock@0.8.0_@types+react@19.2.17_react@19.2.4/node_modules/react-dock/lib/autoprefix.js [app-client] (ecmascript)");
;
;
;
function autoprefixes(styles) {
    return Object.keys(styles).reduce((obj, key)=>(obj[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$dock$40$0$2e$8$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$dock$2f$lib$2f$autoprefix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(styles[key]), obj), {});
}
const styles = autoprefixes({
    wrapper: {
        position: 'fixed',
        width: 0,
        height: 0,
        top: 0,
        left: 0
    },
    dim: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 0,
        background: 'rgba(0, 0, 0, 0.2)',
        opacity: 1
    },
    dimAppear: {
        opacity: 0
    },
    dimTransparent: {
        pointerEvents: 'none'
    },
    dimHidden: {
        opacity: 0
    },
    dock: {
        position: 'fixed',
        zIndex: 1,
        boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
        background: 'white',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
    },
    dockHidden: {
        opacity: 0
    },
    dockResizing: {
        transition: 'none'
    },
    dockContent: {
        width: '100%',
        height: '100%',
        overflow: 'auto'
    },
    resizer: {
        position: 'absolute',
        zIndex: 2,
        opacity: 0
    }
});
function getTransitions(duration) {
    return [
        'left',
        'top',
        'width',
        'height'
    ].map((p)=>`${p} ${duration / 1000}s ease-out`);
}
function getDockStyles({ fluid, dockStyle, dockHiddenStyle, duration, position, isVisible }, { size, isResizing, fullWidth, fullHeight }) {
    let posStyle;
    const absSize = fluid ? `${size * 100}%` : `${size}px`;
    function getRestSize(fullSize) {
        return fluid ? `${100 - size * 100}%` : `${fullSize - size}px`;
    }
    switch(position){
        case 'left':
            posStyle = {
                width: absSize,
                left: isVisible ? 0 : '-' + absSize
            };
            break;
        case 'right':
            posStyle = {
                left: isVisible ? getRestSize(fullWidth) : fullWidth,
                width: absSize
            };
            break;
        case 'top':
            posStyle = {
                top: isVisible ? 0 : '-' + absSize,
                height: absSize
            };
            break;
        case 'bottom':
            posStyle = {
                top: isVisible ? getRestSize(fullHeight) : fullHeight,
                height: absSize
            };
            break;
    }
    const transitions = getTransitions(duration);
    return [
        styles.dock,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$dock$40$0$2e$8$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$dock$2f$lib$2f$autoprefix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            transition: [
                ...transitions,
                !isVisible && `opacity 0.01s linear ${duration / 1000}s`
            ].filter((t)=>t).join(',')
        }),
        dockStyle,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$dock$40$0$2e$8$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$dock$2f$lib$2f$autoprefix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(posStyle),
        isResizing && styles.dockResizing,
        !isVisible && styles.dockHidden,
        !isVisible && dockHiddenStyle
    ];
}
function getDimStyles({ dimMode, dimStyle, duration, isVisible }, { isTransitionStarted }) {
    return [
        styles.dim,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$dock$40$0$2e$8$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$dock$2f$lib$2f$autoprefix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            transition: `opacity ${duration / 1000}s ease-out`
        }),
        dimStyle,
        dimMode === 'transparent' && styles.dimTransparent,
        !isVisible && styles.dimHidden,
        isTransitionStarted && isVisible && styles.dimAppear,
        isTransitionStarted && !isVisible && styles.dimDisappear
    ];
}
function getResizerStyles(position) {
    let resizerStyle;
    const size = 10;
    switch(position){
        case 'left':
            resizerStyle = {
                right: -size / 2,
                width: size,
                top: 0,
                height: '100%',
                cursor: 'col-resize'
            };
            break;
        case 'right':
            resizerStyle = {
                left: -size / 2,
                width: size,
                top: 0,
                height: '100%',
                cursor: 'col-resize'
            };
            break;
        case 'top':
            resizerStyle = {
                bottom: -size / 2,
                height: size,
                left: 0,
                width: '100%',
                cursor: 'row-resize'
            };
            break;
        case 'bottom':
            resizerStyle = {
                top: -size / 2,
                height: size,
                left: 0,
                width: '100%',
                cursor: 'row-resize'
            };
            break;
    }
    return [
        styles.resizer,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$dock$40$0$2e$8$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$dock$2f$lib$2f$autoprefix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(resizerStyle)
    ];
}
function getFullSize(position, fullWidth, fullHeight) {
    return position === 'left' || position === 'right' ? fullWidth : fullHeight;
}
class Dock extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        this.state = {
            isControlled: typeof this.props.size !== 'undefined',
            size: this.props.size || this.props.defaultSize,
            isDimHidden: !this.props.isVisible,
            fullWidth: window.innerWidth,
            fullHeight: window.innerHeight,
            isTransitionStarted: false,
            isWindowResizing: false
        };
        this.transitionEnd = ()=>{
            this.setState({
                isTransitionStarted: false
            });
        };
        this.hideDim = ()=>{
            if (!this.props.isVisible) {
                this.setState({
                    isDimHidden: true
                });
            }
        };
        this.handleDimClick = ()=>{
            if (this.props.dimMode === 'opaque') {
                if (this.props.onVisibleChange) this.props.onVisibleChange(false);
            }
        };
        this.handleResize = ()=>{
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(this.updateWindowSize.bind(this, true));
            } else {
                this.updateWindowSize(true);
            }
        };
        this.updateWindowSize = (windowResize)=>{
            const sizeState = {
                fullWidth: window.innerWidth,
                fullHeight: window.innerHeight
            };
            if (windowResize) {
                this.setState({
                    ...sizeState,
                    isResizing: true,
                    isWindowResizing: windowResize
                });
                this.debouncedUpdateWindowSizeEnd();
            } else {
                this.setState(sizeState);
            }
        };
        this.updateWindowSizeEnd = ()=>{
            this.setState({
                isResizing: false,
                isWindowResizing: false
            });
        };
        this.debouncedUpdateWindowSizeEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$18$2e$1$2f$node_modules$2f$lodash$2d$es$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__debounce$3e$__["debounce"])(this.updateWindowSizeEnd, 30);
        this.handleWrapperLeave = ()=>{
            this.setState({
                isResizing: false
            });
        };
        this.handleMouseDown = ()=>{
            this.setState({
                isResizing: true
            });
        };
        this.handleMouseUp = ()=>{
            this.setState({
                isResizing: false
            });
        };
        this.handleMouseMove = (e)=>{
            if (!this.state.isResizing || this.state.isWindowResizing) return;
            if (!e.touches) e.preventDefault();
            const { position, fluid } = this.props;
            const { fullWidth, fullHeight, isControlled } = this.state;
            let { clientX: x, clientY: y } = e;
            if (e.touches) {
                x = e.touches[0].clientX;
                y = e.touches[0].clientY;
            }
            let size;
            switch(position){
                case 'left':
                    size = fluid ? x / fullWidth : x;
                    break;
                case 'right':
                    size = fluid ? (fullWidth - x) / fullWidth : fullWidth - x;
                    break;
                case 'top':
                    size = fluid ? y / fullHeight : y;
                    break;
                case 'bottom':
                    size = fluid ? (fullHeight - y) / fullHeight : fullHeight - y;
                    break;
            }
            if (this.props.onSizeChange) this.props.onSizeChange(size);
            if (!isControlled) {
                this.setState({
                    size
                });
            }
        };
    }
    componentDidMount() {
        window.addEventListener('touchend', this.handleMouseUp);
        window.addEventListener('mouseup', this.handleMouseUp);
        window.addEventListener('touchmove', this.handleMouseMove);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('resize', this.handleResize);
        this.updateWindowSize();
    }
    componentWillUnmount() {
        window.removeEventListener('touchend', this.handleMouseUp);
        window.removeEventListener('mouseup', this.handleMouseUp);
        window.removeEventListener('touchmove', this.handleMouseMove);
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('resize', this.handleResize);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const isControlled = typeof nextProps.size !== 'undefined';
        this.setState({
            isControlled
        });
        if (isControlled && nextProps.size && this.props.size !== nextProps.size) {
            this.setState({
                size: nextProps.size
            });
        } else if (this.props.fluid !== nextProps.fluid) {
            this.updateSize(nextProps);
        }
        if (this.props.isVisible !== nextProps.isVisible) {
            this.setState({
                isTransitionStarted: true
            });
        }
    }
    updateSize(props) {
        const { fullWidth, fullHeight } = this.state;
        this.setState({
            size: props.fluid ? this.state.size / getFullSize(props.position, fullWidth, fullHeight) : getFullSize(props.position, fullWidth, fullHeight) * this.state.size
        });
    }
    componentDidUpdate(prevProps) {
        if (this.props.isVisible !== prevProps.isVisible) {
            if (!this.props.isVisible) {
                window.setTimeout(()=>this.hideDim(), this.props.duration);
            } else {
                this.setState({
                    isDimHidden: false
                });
            }
            window.setTimeout(()=>this.setState({
                    isTransitionStarted: false
                }), 0);
        }
    }
    render() {
        const { children, zIndex, dimMode, position, isVisible } = this.props;
        const { isResizing, size, isDimHidden } = this.state;
        const dimStyles = Object.assign({}, ...getDimStyles(this.props, this.state));
        const dockStyles = Object.assign({}, ...getDockStyles(this.props, this.state));
        const resizerStyles = Object.assign({}, ...getResizerStyles(position));
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style: Object.assign({}, styles.wrapper, {
                zIndex
            })
        }, dimMode !== 'none' && !isDimHidden && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style: dimStyles,
            onClick: this.handleDimClick
        }), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style: dockStyles
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style: resizerStyles,
            onMouseDown: this.handleMouseDown,
            onTouchStart: this.handleMouseDown
        }), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style: styles.dockContent
        }, typeof children === 'function' ? children({
            position,
            isResizing,
            size,
            isVisible
        }) : children)));
    }
}
Dock.defaultProps = {
    position: 'left',
    zIndex: 99999999,
    fluid: true,
    defaultSize: 0.3,
    dimMode: 'opaque',
    duration: 200
};
const __TURBOPACK__default__export__ = Dock;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-dock@0.8.0_@types+react@19.2.17_react@19.2.4/node_modules/react-dock/lib/Dock.js [app-client] (ecmascript) <export default as Dock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$dock$40$0$2e$8$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$dock$2f$lib$2f$Dock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$dock$40$0$2e$8$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$dock$2f$lib$2f$Dock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-dock@0.8.0_@types+react@19.2.17_react@19.2.4/node_modules/react-dock/lib/Dock.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    "aliceblue": [
        240,
        248,
        255
    ],
    "antiquewhite": [
        250,
        235,
        215
    ],
    "aqua": [
        0,
        255,
        255
    ],
    "aquamarine": [
        127,
        255,
        212
    ],
    "azure": [
        240,
        255,
        255
    ],
    "beige": [
        245,
        245,
        220
    ],
    "bisque": [
        255,
        228,
        196
    ],
    "black": [
        0,
        0,
        0
    ],
    "blanchedalmond": [
        255,
        235,
        205
    ],
    "blue": [
        0,
        0,
        255
    ],
    "blueviolet": [
        138,
        43,
        226
    ],
    "brown": [
        165,
        42,
        42
    ],
    "burlywood": [
        222,
        184,
        135
    ],
    "cadetblue": [
        95,
        158,
        160
    ],
    "chartreuse": [
        127,
        255,
        0
    ],
    "chocolate": [
        210,
        105,
        30
    ],
    "coral": [
        255,
        127,
        80
    ],
    "cornflowerblue": [
        100,
        149,
        237
    ],
    "cornsilk": [
        255,
        248,
        220
    ],
    "crimson": [
        220,
        20,
        60
    ],
    "cyan": [
        0,
        255,
        255
    ],
    "darkblue": [
        0,
        0,
        139
    ],
    "darkcyan": [
        0,
        139,
        139
    ],
    "darkgoldenrod": [
        184,
        134,
        11
    ],
    "darkgray": [
        169,
        169,
        169
    ],
    "darkgreen": [
        0,
        100,
        0
    ],
    "darkgrey": [
        169,
        169,
        169
    ],
    "darkkhaki": [
        189,
        183,
        107
    ],
    "darkmagenta": [
        139,
        0,
        139
    ],
    "darkolivegreen": [
        85,
        107,
        47
    ],
    "darkorange": [
        255,
        140,
        0
    ],
    "darkorchid": [
        153,
        50,
        204
    ],
    "darkred": [
        139,
        0,
        0
    ],
    "darksalmon": [
        233,
        150,
        122
    ],
    "darkseagreen": [
        143,
        188,
        143
    ],
    "darkslateblue": [
        72,
        61,
        139
    ],
    "darkslategray": [
        47,
        79,
        79
    ],
    "darkslategrey": [
        47,
        79,
        79
    ],
    "darkturquoise": [
        0,
        206,
        209
    ],
    "darkviolet": [
        148,
        0,
        211
    ],
    "deeppink": [
        255,
        20,
        147
    ],
    "deepskyblue": [
        0,
        191,
        255
    ],
    "dimgray": [
        105,
        105,
        105
    ],
    "dimgrey": [
        105,
        105,
        105
    ],
    "dodgerblue": [
        30,
        144,
        255
    ],
    "firebrick": [
        178,
        34,
        34
    ],
    "floralwhite": [
        255,
        250,
        240
    ],
    "forestgreen": [
        34,
        139,
        34
    ],
    "fuchsia": [
        255,
        0,
        255
    ],
    "gainsboro": [
        220,
        220,
        220
    ],
    "ghostwhite": [
        248,
        248,
        255
    ],
    "gold": [
        255,
        215,
        0
    ],
    "goldenrod": [
        218,
        165,
        32
    ],
    "gray": [
        128,
        128,
        128
    ],
    "green": [
        0,
        128,
        0
    ],
    "greenyellow": [
        173,
        255,
        47
    ],
    "grey": [
        128,
        128,
        128
    ],
    "honeydew": [
        240,
        255,
        240
    ],
    "hotpink": [
        255,
        105,
        180
    ],
    "indianred": [
        205,
        92,
        92
    ],
    "indigo": [
        75,
        0,
        130
    ],
    "ivory": [
        255,
        255,
        240
    ],
    "khaki": [
        240,
        230,
        140
    ],
    "lavender": [
        230,
        230,
        250
    ],
    "lavenderblush": [
        255,
        240,
        245
    ],
    "lawngreen": [
        124,
        252,
        0
    ],
    "lemonchiffon": [
        255,
        250,
        205
    ],
    "lightblue": [
        173,
        216,
        230
    ],
    "lightcoral": [
        240,
        128,
        128
    ],
    "lightcyan": [
        224,
        255,
        255
    ],
    "lightgoldenrodyellow": [
        250,
        250,
        210
    ],
    "lightgray": [
        211,
        211,
        211
    ],
    "lightgreen": [
        144,
        238,
        144
    ],
    "lightgrey": [
        211,
        211,
        211
    ],
    "lightpink": [
        255,
        182,
        193
    ],
    "lightsalmon": [
        255,
        160,
        122
    ],
    "lightseagreen": [
        32,
        178,
        170
    ],
    "lightskyblue": [
        135,
        206,
        250
    ],
    "lightslategray": [
        119,
        136,
        153
    ],
    "lightslategrey": [
        119,
        136,
        153
    ],
    "lightsteelblue": [
        176,
        196,
        222
    ],
    "lightyellow": [
        255,
        255,
        224
    ],
    "lime": [
        0,
        255,
        0
    ],
    "limegreen": [
        50,
        205,
        50
    ],
    "linen": [
        250,
        240,
        230
    ],
    "magenta": [
        255,
        0,
        255
    ],
    "maroon": [
        128,
        0,
        0
    ],
    "mediumaquamarine": [
        102,
        205,
        170
    ],
    "mediumblue": [
        0,
        0,
        205
    ],
    "mediumorchid": [
        186,
        85,
        211
    ],
    "mediumpurple": [
        147,
        112,
        219
    ],
    "mediumseagreen": [
        60,
        179,
        113
    ],
    "mediumslateblue": [
        123,
        104,
        238
    ],
    "mediumspringgreen": [
        0,
        250,
        154
    ],
    "mediumturquoise": [
        72,
        209,
        204
    ],
    "mediumvioletred": [
        199,
        21,
        133
    ],
    "midnightblue": [
        25,
        25,
        112
    ],
    "mintcream": [
        245,
        255,
        250
    ],
    "mistyrose": [
        255,
        228,
        225
    ],
    "moccasin": [
        255,
        228,
        181
    ],
    "navajowhite": [
        255,
        222,
        173
    ],
    "navy": [
        0,
        0,
        128
    ],
    "oldlace": [
        253,
        245,
        230
    ],
    "olive": [
        128,
        128,
        0
    ],
    "olivedrab": [
        107,
        142,
        35
    ],
    "orange": [
        255,
        165,
        0
    ],
    "orangered": [
        255,
        69,
        0
    ],
    "orchid": [
        218,
        112,
        214
    ],
    "palegoldenrod": [
        238,
        232,
        170
    ],
    "palegreen": [
        152,
        251,
        152
    ],
    "paleturquoise": [
        175,
        238,
        238
    ],
    "palevioletred": [
        219,
        112,
        147
    ],
    "papayawhip": [
        255,
        239,
        213
    ],
    "peachpuff": [
        255,
        218,
        185
    ],
    "peru": [
        205,
        133,
        63
    ],
    "pink": [
        255,
        192,
        203
    ],
    "plum": [
        221,
        160,
        221
    ],
    "powderblue": [
        176,
        224,
        230
    ],
    "purple": [
        128,
        0,
        128
    ],
    "rebeccapurple": [
        102,
        51,
        153
    ],
    "red": [
        255,
        0,
        0
    ],
    "rosybrown": [
        188,
        143,
        143
    ],
    "royalblue": [
        65,
        105,
        225
    ],
    "saddlebrown": [
        139,
        69,
        19
    ],
    "salmon": [
        250,
        128,
        114
    ],
    "sandybrown": [
        244,
        164,
        96
    ],
    "seagreen": [
        46,
        139,
        87
    ],
    "seashell": [
        255,
        245,
        238
    ],
    "sienna": [
        160,
        82,
        45
    ],
    "silver": [
        192,
        192,
        192
    ],
    "skyblue": [
        135,
        206,
        235
    ],
    "slateblue": [
        106,
        90,
        205
    ],
    "slategray": [
        112,
        128,
        144
    ],
    "slategrey": [
        112,
        128,
        144
    ],
    "snow": [
        255,
        250,
        250
    ],
    "springgreen": [
        0,
        255,
        127
    ],
    "steelblue": [
        70,
        130,
        180
    ],
    "tan": [
        210,
        180,
        140
    ],
    "teal": [
        0,
        128,
        128
    ],
    "thistle": [
        216,
        191,
        216
    ],
    "tomato": [
        255,
        99,
        71
    ],
    "turquoise": [
        64,
        224,
        208
    ],
    "violet": [
        238,
        130,
        238
    ],
    "wheat": [
        245,
        222,
        179
    ],
    "white": [
        255,
        255,
        255
    ],
    "whitesmoke": [
        245,
        245,
        245
    ],
    "yellow": [
        255,
        255,
        0
    ],
    "yellowgreen": [
        154,
        205,
        50
    ]
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-arrayish@0.3.4/node_modules/is-arrayish/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function isArrayish(obj) {
    if (!obj || typeof obj === 'string') {
        return false;
    }
    return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== 'String');
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/simple-swizzle@0.2.4/node_modules/simple-swizzle/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isArrayish = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-arrayish@0.3.4/node_modules/is-arrayish/index.js [app-client] (ecmascript)");
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle = module.exports = function swizzle(args) {
    var results = [];
    for(var i = 0, len = args.length; i < len; i++){
        var arg = args[i];
        if (isArrayish(arg)) {
            // http://jsperf.com/javascript-array-concat-vs-push/98
            results = concat.call(results, slice.call(arg));
        } else {
            results.push(arg);
        }
    }
    return results;
};
swizzle.wrap = function(fn) {
    return function() {
        return fn(swizzle(arguments));
    };
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color-string@1.9.1/node_modules/color-string/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* MIT license */ var colorNames = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js [app-client] (ecmascript)");
var swizzle = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/simple-swizzle@0.2.4/node_modules/simple-swizzle/index.js [app-client] (ecmascript)");
var hasOwnProperty = Object.hasOwnProperty;
var reverseNames = Object.create(null);
// create a list of reverse color names
for(var name in colorNames){
    if (hasOwnProperty.call(colorNames, name)) {
        reverseNames[colorNames[name]] = name;
    }
}
var cs = module.exports = {
    to: {},
    get: {}
};
cs.get = function(string) {
    var prefix = string.substring(0, 3).toLowerCase();
    var val;
    var model;
    switch(prefix){
        case 'hsl':
            val = cs.get.hsl(string);
            model = 'hsl';
            break;
        case 'hwb':
            val = cs.get.hwb(string);
            model = 'hwb';
            break;
        default:
            val = cs.get.rgb(string);
            model = 'rgb';
            break;
    }
    if (!val) {
        return null;
    }
    return {
        model: model,
        value: val
    };
};
cs.get.rgb = function(string) {
    if (!string) {
        return null;
    }
    var abbr = /^#([a-f0-9]{3,4})$/i;
    var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var keyword = /^(\w+)$/;
    var rgb = [
        0,
        0,
        0,
        1
    ];
    var match;
    var i;
    var hexAlpha;
    if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for(i = 0; i < 3; i++){
            // https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
            var i2 = i * 2;
            rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
        }
        if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
    } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for(i = 0; i < 3; i++){
            rgb[i] = parseInt(match[i] + match[i], 16);
        }
        if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
    } else if (match = string.match(rgba)) {
        for(i = 0; i < 3; i++){
            rgb[i] = parseInt(match[i + 1], 0);
        }
        if (match[4]) {
            if (match[5]) {
                rgb[3] = parseFloat(match[4]) * 0.01;
            } else {
                rgb[3] = parseFloat(match[4]);
            }
        }
    } else if (match = string.match(per)) {
        for(i = 0; i < 3; i++){
            rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
        }
        if (match[4]) {
            if (match[5]) {
                rgb[3] = parseFloat(match[4]) * 0.01;
            } else {
                rgb[3] = parseFloat(match[4]);
            }
        }
    } else if (match = string.match(keyword)) {
        if (match[1] === 'transparent') {
            return [
                0,
                0,
                0,
                0
            ];
        }
        if (!hasOwnProperty.call(colorNames, match[1])) {
            return null;
        }
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
    } else {
        return null;
    }
    for(i = 0; i < 3; i++){
        rgb[i] = clamp(rgb[i], 0, 255);
    }
    rgb[3] = clamp(rgb[3], 0, 1);
    return rgb;
};
cs.get.hsl = function(string) {
    if (!string) {
        return null;
    }
    var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hsl);
    if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var s = clamp(parseFloat(match[2]), 0, 100);
        var l = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [
            h,
            s,
            l,
            a
        ];
    }
    return null;
};
cs.get.hwb = function(string) {
    if (!string) {
        return null;
    }
    var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hwb);
    if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var w = clamp(parseFloat(match[2]), 0, 100);
        var b = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [
            h,
            w,
            b,
            a
        ];
    }
    return null;
};
cs.to.hex = function() {
    var rgba = swizzle(arguments);
    return '#' + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : '');
};
cs.to.rgb = function() {
    var rgba = swizzle(arguments);
    return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')' : 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};
cs.to.rgb.percent = function() {
    var rgba = swizzle(arguments);
    var r = Math.round(rgba[0] / 255 * 100);
    var g = Math.round(rgba[1] / 255 * 100);
    var b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)' : 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};
cs.to.hsl = function() {
    var hsla = swizzle(arguments);
    return hsla.length < 4 || hsla[3] === 1 ? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)' : 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};
// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function() {
    var hwba = swizzle(arguments);
    var a = '';
    if (hwba.length >= 4 && hwba[3] !== 1) {
        a = ', ' + hwba[3];
    }
    return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};
cs.to.keyword = function(rgb) {
    return reverseNames[rgb.slice(0, 3)];
};
// helpers
function clamp(num, min, max) {
    return Math.min(Math.max(min, num), max);
}
function hexDouble(num) {
    var str = Math.round(num).toString(16).toUpperCase();
    return str.length < 2 ? '0' + str : str;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* MIT license */ /* eslint-disable no-mixed-operators */ const cssKeywords = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js [app-client] (ecmascript)");
// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)
const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)){
    reverseKeywords[cssKeywords[key]] = key;
}
const convert = {
    rgb: {
        channels: 3,
        labels: 'rgb'
    },
    hsl: {
        channels: 3,
        labels: 'hsl'
    },
    hsv: {
        channels: 3,
        labels: 'hsv'
    },
    hwb: {
        channels: 3,
        labels: 'hwb'
    },
    cmyk: {
        channels: 4,
        labels: 'cmyk'
    },
    xyz: {
        channels: 3,
        labels: 'xyz'
    },
    lab: {
        channels: 3,
        labels: 'lab'
    },
    lch: {
        channels: 3,
        labels: 'lch'
    },
    hex: {
        channels: 1,
        labels: [
            'hex'
        ]
    },
    keyword: {
        channels: 1,
        labels: [
            'keyword'
        ]
    },
    ansi16: {
        channels: 1,
        labels: [
            'ansi16'
        ]
    },
    ansi256: {
        channels: 1,
        labels: [
            'ansi256'
        ]
    },
    hcg: {
        channels: 3,
        labels: [
            'h',
            'c',
            'g'
        ]
    },
    apple: {
        channels: 3,
        labels: [
            'r16',
            'g16',
            'b16'
        ]
    },
    gray: {
        channels: 1,
        labels: [
            'gray'
        ]
    }
};
module.exports = convert;
// Hide .channels and .labels properties
for (const model of Object.keys(convert)){
    if (!('channels' in convert[model])) {
        throw new Error('missing channels property: ' + model);
    }
    if (!('labels' in convert[model])) {
        throw new Error('missing channel labels property: ' + model);
    }
    if (convert[model].labels.length !== convert[model].channels) {
        throw new Error('channel and label counts mismatch: ' + model);
    }
    const { channels, labels } = convert[model];
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], 'channels', {
        value: channels
    });
    Object.defineProperty(convert[model], 'labels', {
        value: labels
    });
}
convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) {
        h = 0;
    } else if (r === max) {
        h = (g - b) / delta;
    } else if (g === max) {
        h = 2 + (b - r) / delta;
    } else if (b === max) {
        h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
        h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
        s = 0;
    } else if (l <= 0.5) {
        s = delta / (max + min);
    } else {
        s = delta / (2 - max - min);
    }
    return [
        h,
        s * 100,
        l * 100
    ];
};
convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
        h = 0;
        s = 0;
    } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
            h = bdif - gdif;
        } else if (g === v) {
            h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
            h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }
    return [
        h * 360,
        s * 100,
        v * 100
    ];
};
convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [
        h,
        w * 100,
        b * 100
    ];
};
convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
    ];
};
function comparativeDistance(x, y) {
    /*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/ return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
convert.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
        return reversed;
    }
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys(cssKeywords)){
        const value = cssKeywords[keyword];
        // Compute comparative distance
        const distance = comparativeDistance(rgb, value);
        // Check if its less, if so set as closest
        if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
        }
    }
    return currentClosestKeyword;
};
convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
};
convert.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    // Assume sRGB
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [
        x * 100,
        y * 100,
        z * 100
    ];
};
convert.rgb.lab = function(rgb) {
    const xyz = convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
        val = l * 255;
        return [
            val,
            val,
            val
        ];
    }
    if (l < 0.5) {
        t2 = l * (1 + s);
    } else {
        t2 = l + s - l * s;
    }
    const t1 = 2 * l - t2;
    const rgb = [
        0,
        0,
        0
    ];
    for(let i = 0; i < 3; i++){
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
            t3++;
        }
        if (t3 > 1) {
            t3--;
        }
        if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
            val = t2;
        } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
            val = t1;
        }
        rgb[i] = val * 255;
    }
    return rgb;
};
convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [
        h,
        sv * 100,
        v * 100
    ];
};
convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch(hi){
        case 0:
            return [
                v,
                t,
                p
            ];
        case 1:
            return [
                q,
                v,
                p
            ];
        case 2:
            return [
                p,
                v,
                t
            ];
        case 3:
            return [
                p,
                q,
                v
            ];
        case 4:
            return [
                t,
                p,
                v
            ];
        case 5:
            return [
                v,
                p,
                q
            ];
    }
};
convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [
        h,
        sl * 100,
        l * 100
    ];
};
// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    // Wh + bl cant be > 1
    if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 0x01) !== 0) {
        f = 1 - f;
    }
    const n = wh + f * (v - wh); // Linear interpolation
    let r;
    let g;
    let b;
    /* eslint-disable max-statements-per-line,no-multi-spaces */ switch(i){
        default:
        case 6:
        case 0:
            r = v;
            g = n;
            b = wh;
            break;
        case 1:
            r = n;
            g = v;
            b = wh;
            break;
        case 2:
            r = wh;
            g = v;
            b = n;
            break;
        case 3:
            r = wh;
            g = n;
            b = v;
            break;
        case 4:
            r = n;
            g = wh;
            b = v;
            break;
        case 5:
            r = v;
            g = wh;
            b = n;
            break;
    }
    /* eslint-enable max-statements-per-line,no-multi-spaces */ return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.2040 + z * 1.0570;
    // Assume sRGB
    r = r > 0.0031308 ? 1.055 * r ** (1.0 / 2.4) - 0.055 : r * 12.92;
    g = g > 0.0031308 ? 1.055 * g ** (1.0 / 2.4) - 0.055 : g * 12.92;
    b = b > 0.0031308 ? 1.055 * b ** (1.0 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [
        x,
        y,
        z
    ];
};
convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
        h += 360;
    }
    const c = Math.sqrt(a * a + b * b);
    return [
        l,
        c,
        h
    ];
};
convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [
        l,
        a,
        b
    ];
};
convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization
    value = Math.round(value / 50);
    if (value === 0) {
        return 30;
    }
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
        ansi += 60;
    }
    return ansi;
};
convert.hsv.ansi16 = function(args) {
    // Optimization here; we already know the value and don't need to get
    // it converted for us.
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};
convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    // We use the extended greyscale palette here, with the exception of
    // black and white. normal palette only has 4 greyscale shades.
    if (r === g && g === b) {
        if (r < 8) {
            return 16;
        }
        if (r > 248) {
            return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
};
convert.ansi16.rgb = function(args) {
    let color = args % 10;
    // Handle greyscale
    if (color === 0 || color === 7) {
        if (args > 50) {
            color += 3.5;
        }
        color = color / 10.5 * 255;
        return [
            color,
            color,
            color
        ];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [
        r,
        g,
        b
    ];
};
convert.ansi256.rgb = function(args) {
    // Handle greyscale
    if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [
            c,
            c,
            c
        ];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [
        r,
        g,
        b
    ];
};
convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
        return [
            0,
            0,
            0
        ];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
        colorString = colorString.split('').map((char)=>{
            return char + char;
        }).join('');
    }
    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 0xFF;
    const g = integer >> 8 & 0xFF;
    const b = integer & 0xFF;
    return [
        r,
        g,
        b
    ];
};
convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) {
        grayscale = min / (1 - chroma);
    } else {
        grayscale = 0;
    }
    if (chroma <= 0) {
        hue = 0;
    } else if (max === r) {
        hue = (g - b) / chroma % 6;
    } else if (max === g) {
        hue = 2 + (b - r) / chroma;
    } else {
        hue = 4 + (r - g) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [
        hue * 360,
        chroma * 100,
        grayscale * 100
    ];
};
convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);
    let f = 0;
    if (c < 1.0) {
        f = (l - 0.5 * c) / (1.0 - c);
    }
    return [
        hsl[0],
        c * 100,
        f * 100
    ];
};
convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1.0) {
        f = (v - c) / (1 - c);
    }
    return [
        hsv[0],
        c * 100,
        f * 100
    ];
};
convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0.0) {
        return [
            g * 255,
            g * 255,
            g * 255
        ];
    }
    const pure = [
        0,
        0,
        0
    ];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    /* eslint-disable max-statements-per-line */ switch(Math.floor(hi)){
        case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
        case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
        case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
        case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
        case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
        default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
    }
    /* eslint-enable max-statements-per-line */ mg = (1.0 - c) * g;
    return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
    ];
};
convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    let f = 0;
    if (v > 0.0) {
        f = c / v;
    }
    return [
        hcg[0],
        f * 100,
        v * 100
    ];
};
convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1.0 - c) + 0.5 * c;
    let s = 0;
    if (l > 0.0 && l < 0.5) {
        s = c / (2 * l);
    } else if (l >= 0.5 && l < 1.0) {
        s = c / (2 * (1 - l));
    }
    return [
        hcg[0],
        s * 100,
        l * 100
    ];
};
convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    return [
        hcg[0],
        (v - c) * 100,
        (1 - v) * 100
    ];
};
convert.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) {
        g = (v - c) / (1 - c);
    }
    return [
        hwb[0],
        c * 100,
        g * 100
    ];
};
convert.apple.rgb = function(apple) {
    return [
        apple[0] / 65535 * 255,
        apple[1] / 65535 * 255,
        apple[2] / 65535 * 255
    ];
};
convert.rgb.apple = function(rgb) {
    return [
        rgb[0] / 255 * 65535,
        rgb[1] / 255 * 65535,
        rgb[2] / 255 * 65535
    ];
};
convert.gray.rgb = function(args) {
    return [
        args[0] / 100 * 255,
        args[0] / 100 * 255,
        args[0] / 100 * 255
    ];
};
convert.gray.hsl = function(args) {
    return [
        0,
        0,
        args[0]
    ];
};
convert.gray.hsv = convert.gray.hsl;
convert.gray.hwb = function(gray) {
    return [
        0,
        100,
        gray[0]
    ];
};
convert.gray.cmyk = function(gray) {
    return [
        0,
        0,
        0,
        gray[0]
    ];
};
convert.gray.lab = function(gray) {
    return [
        gray[0],
        0,
        0
    ];
};
convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 0xFF;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [
        val / 255 * 100
    ];
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const conversions = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js [app-client] (ecmascript)");
/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/ function buildGraph() {
    const graph = {};
    // https://jsperf.com/object-keys-vs-for-in-with-closure/3
    const models = Object.keys(conversions);
    for(let len = models.length, i = 0; i < len; i++){
        graph[models[i]] = {
            // http://jsperf.com/1-vs-infinity
            // micro-opt, but this is simple.
            distance: -1,
            parent: null
        };
    }
    return graph;
}
// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [
        fromModel
    ]; // Unshift -> queue -> pop
    graph[fromModel].distance = 0;
    while(queue.length){
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for(let len = adjacents.length, i = 0; i < len; i++){
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
                node.distance = graph[current].distance + 1;
                node.parent = current;
                queue.unshift(adjacent);
            }
        }
    }
    return graph;
}
function link(from, to) {
    return function(args) {
        return to(from(args));
    };
}
function wrapConversion(toModel, graph) {
    const path = [
        graph[toModel].parent,
        toModel
    ];
    let fn = conversions[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while(graph[cur].parent){
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
}
module.exports = function(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models = Object.keys(graph);
    for(let len = models.length, i = 0; i < len; i++){
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
            continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const conversions = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js [app-client] (ecmascript)");
const route = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js [app-client] (ecmascript)");
const convert = {};
const models = Object.keys(conversions);
function wrapRaw(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) {
            return arg0;
        }
        if (arg0.length > 1) {
            args = arg0;
        }
        return fn(args);
    };
    // Preserve .conversion property if there is one
    if ('conversion' in fn) {
        wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
}
function wrapRounded(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) {
            return arg0;
        }
        if (arg0.length > 1) {
            args = arg0;
        }
        const result = fn(args);
        // We're assuming the result is an array here.
        // see notice in conversions.js; don't use box types
        // in conversion functions.
        if (typeof result === 'object') {
            for(let len = result.length, i = 0; i < len; i++){
                result[i] = Math.round(result[i]);
            }
        }
        return result;
    };
    // Preserve .conversion property if there is one
    if ('conversion' in fn) {
        wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
}
models.forEach((fromModel)=>{
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], 'channels', {
        value: conversions[fromModel].channels
    });
    Object.defineProperty(convert[fromModel], 'labels', {
        value: conversions[fromModel].labels
    });
    const routes = route(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel)=>{
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
    });
});
module.exports = convert;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color@4.2.3/node_modules/color/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const colorString = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color-string@1.9.1/node_modules/color-string/index.js [app-client] (ecmascript)");
const convert = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js [app-client] (ecmascript)");
const skippedModels = [
    // To be honest, I don't really feel like keyword belongs in color convert, but eh.
    'keyword',
    // Gray conflicts with some method names, and has its own method defined.
    'gray',
    // Shouldn't really be in color-convert either...
    'hex'
];
const hashedModelKeys = {};
for (const model of Object.keys(convert)){
    hashedModelKeys[[
        ...convert[model].labels
    ].sort().join('')] = model;
}
const limiters = {};
function Color(object, model) {
    if (!(this instanceof Color)) {
        return new Color(object, model);
    }
    if (model && model in skippedModels) {
        model = null;
    }
    if (model && !(model in convert)) {
        throw new Error('Unknown model: ' + model);
    }
    let i;
    let channels;
    if (object == null) {
        this.model = 'rgb';
        this.color = [
            0,
            0,
            0
        ];
        this.valpha = 1;
    } else if (object instanceof Color) {
        this.model = object.model;
        this.color = [
            ...object.color
        ];
        this.valpha = object.valpha;
    } else if (typeof object === 'string') {
        const result = colorString.get(object);
        if (result === null) {
            throw new Error('Unable to parse color from string: ' + object);
        }
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
    } else if (object.length > 0) {
        this.model = model || 'rgb';
        channels = convert[this.model].channels;
        const newArray = Array.prototype.slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
    } else if (typeof object === 'number') {
        // This is always RGB - can be converted later on.
        this.model = 'rgb';
        this.color = [
            object >> 16 & 0xFF,
            object >> 8 & 0xFF,
            object & 0xFF
        ];
        this.valpha = 1;
    } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ('alpha' in object) {
            keys.splice(keys.indexOf('alpha'), 1);
            this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join('');
        if (!(hashedKeys in hashedModelKeys)) {
            throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        const { labels } = convert[this.model];
        const color = [];
        for(i = 0; i < labels.length; i++){
            color.push(object[labels[i]]);
        }
        this.color = zeroArray(color);
    }
    // Perform limitations (clamping, etc.)
    if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for(i = 0; i < channels; i++){
            const limit = limiters[this.model][i];
            if (limit) {
                this.color[i] = limit(this.color[i]);
            }
        }
    }
    this.valpha = Math.max(0, Math.min(1, this.valpha));
    if (Object.freeze) {
        Object.freeze(this);
    }
}
Color.prototype = {
    toString () {
        return this.string();
    },
    toJSON () {
        return this[this.model]();
    },
    string (places) {
        let self = this.model in colorString.to ? this : this.rgb();
        self = self.round(typeof places === 'number' ? places : 1);
        const args = self.valpha === 1 ? self.color : [
            ...self.color,
            this.valpha
        ];
        return colorString.to[self.model](args);
    },
    percentString (places) {
        const self = this.rgb().round(typeof places === 'number' ? places : 1);
        const args = self.valpha === 1 ? self.color : [
            ...self.color,
            this.valpha
        ];
        return colorString.to.rgb.percent(args);
    },
    array () {
        return this.valpha === 1 ? [
            ...this.color
        ] : [
            ...this.color,
            this.valpha
        ];
    },
    object () {
        const result = {};
        const { channels } = convert[this.model];
        const { labels } = convert[this.model];
        for(let i = 0; i < channels; i++){
            result[labels[i]] = this.color[i];
        }
        if (this.valpha !== 1) {
            result.alpha = this.valpha;
        }
        return result;
    },
    unitArray () {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
            rgb.push(this.valpha);
        }
        return rgb;
    },
    unitObject () {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
            rgb.alpha = this.valpha;
        }
        return rgb;
    },
    round (places) {
        places = Math.max(places || 0, 0);
        return new Color([
            ...this.color.map(roundToPlace(places)),
            this.valpha
        ], this.model);
    },
    alpha (value) {
        if (value !== undefined) {
            return new Color([
                ...this.color,
                Math.max(0, Math.min(1, value))
            ], this.model);
        }
        return this.valpha;
    },
    // Rgb
    red: getset('rgb', 0, maxfn(255)),
    green: getset('rgb', 1, maxfn(255)),
    blue: getset('rgb', 2, maxfn(255)),
    hue: getset([
        'hsl',
        'hsv',
        'hsl',
        'hwb',
        'hcg'
    ], 0, (value)=>(value % 360 + 360) % 360),
    saturationl: getset('hsl', 1, maxfn(100)),
    lightness: getset('hsl', 2, maxfn(100)),
    saturationv: getset('hsv', 1, maxfn(100)),
    value: getset('hsv', 2, maxfn(100)),
    chroma: getset('hcg', 1, maxfn(100)),
    gray: getset('hcg', 2, maxfn(100)),
    white: getset('hwb', 1, maxfn(100)),
    wblack: getset('hwb', 2, maxfn(100)),
    cyan: getset('cmyk', 0, maxfn(100)),
    magenta: getset('cmyk', 1, maxfn(100)),
    yellow: getset('cmyk', 2, maxfn(100)),
    black: getset('cmyk', 3, maxfn(100)),
    x: getset('xyz', 0, maxfn(95.047)),
    y: getset('xyz', 1, maxfn(100)),
    z: getset('xyz', 2, maxfn(108.833)),
    l: getset('lab', 0, maxfn(100)),
    a: getset('lab', 1),
    b: getset('lab', 2),
    keyword (value) {
        if (value !== undefined) {
            return new Color(value);
        }
        return convert[this.model].keyword(this.color);
    },
    hex (value) {
        if (value !== undefined) {
            return new Color(value);
        }
        return colorString.to.hex(this.rgb().round().color);
    },
    hexa (value) {
        if (value !== undefined) {
            return new Color(value);
        }
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) {
            alphaHex = '0' + alphaHex;
        }
        return colorString.to.hex(rgbArray) + alphaHex;
    },
    rgbNumber () {
        const rgb = this.rgb().color;
        return (rgb[0] & 0xFF) << 16 | (rgb[1] & 0xFF) << 8 | rgb[2] & 0xFF;
    },
    luminosity () {
        // http://www.w3.org/TR/WCAG20/#relativeluminancedef
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i, element] of rgb.entries()){
            const chan = element / 255;
            lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
    contrast (color2) {
        // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) {
            return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
    },
    level (color2) {
        // https://www.w3.org/TR/WCAG/#contrast-enhanced
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7) {
            return 'AAA';
        }
        return contrastRatio >= 4.5 ? 'AA' : '';
    },
    isDark () {
        // YIQ equation from http://24ways.org/2010/calculating-color-contrast
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
        return yiq < 128;
    },
    isLight () {
        return !this.isDark();
    },
    negate () {
        const rgb = this.rgb();
        for(let i = 0; i < 3; i++){
            rgb.color[i] = 255 - rgb.color[i];
        }
        return rgb;
    },
    lighten (ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
    },
    darken (ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
    },
    saturate (ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
    },
    desaturate (ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
    },
    whiten (ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
    },
    blacken (ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
    },
    grayscale () {
        // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color.rgb(value, value, value);
    },
    fade (ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
    },
    opaquer (ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
    },
    rotate (degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
    },
    mix (mixinColor, weight) {
        // Ported from sass implementation in C
        // https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
        if (!mixinColor || !mixinColor.rgb) {
            throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p = weight === undefined ? 0.5 : weight;
        const w = 2 * p - 1;
        const a = color1.alpha() - color2.alpha();
        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        const w2 = 1 - w1;
        return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
    }
};
// Model conversion methods and static constructors
for (const model of Object.keys(convert)){
    if (skippedModels.includes(model)) {
        continue;
    }
    const { channels } = convert[model];
    // Conversion methods
    Color.prototype[model] = function(...args) {
        if (this.model === model) {
            return new Color(this);
        }
        if (args.length > 0) {
            return new Color(args, model);
        }
        return new Color([
            ...assertArray(convert[this.model][model].raw(this.color)),
            this.valpha
        ], model);
    };
    // 'static' construction methods
    Color[model] = function(...args) {
        let color = args[0];
        if (typeof color === 'number') {
            color = zeroArray(args, channels);
        }
        return new Color(color, model);
    };
}
function roundTo(number, places) {
    return Number(number.toFixed(places));
}
function roundToPlace(places) {
    return function(number) {
        return roundTo(number, places);
    };
}
function getset(model, channel, modifier) {
    model = Array.isArray(model) ? model : [
        model
    ];
    for (const m of model){
        (limiters[m] || (limiters[m] = []))[channel] = modifier;
    }
    model = model[0];
    return function(value) {
        let result;
        if (value !== undefined) {
            if (modifier) {
                value = modifier(value);
            }
            result = this[model]();
            result.color[channel] = value;
            return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
            result = modifier(result);
        }
        return result;
    };
}
function maxfn(max) {
    return function(v) {
        return Math.max(0, Math.min(max, v));
    };
}
function assertArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}
function zeroArray(array, length) {
    for(let i = 0; i < length; i++){
        if (typeof array[i] !== 'number') {
            array[i] = 0;
        }
    }
    return array;
}
module.exports = Color;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/colorConverters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rgb2yuv",
    ()=>rgb2yuv,
    "yuv2rgb",
    ()=>yuv2rgb
]);
function yuv2rgb(yuv) {
    const y = yuv[0], u = yuv[1], v = yuv[2];
    let r, g, b;
    r = y * 1 + u * 0 + v * 1.13983;
    g = y * 1 + u * -0.39465 + v * -0.5806;
    b = y * 1 + u * 2.02311 + v * 0;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
}
function rgb2yuv(rgb) {
    const r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255;
    const y = r * 0.299 + g * 0.587 + b * 0.114;
    const u = r * -0.14713 + g * -0.28886 + b * 0.436;
    const v = r * 0.615 + g * -0.51499 + b * -0.10001;
    return [
        y,
        u,
        v
    ];
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/threezerotwofour.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'threezerotwofour',
    author: 'jan t. sott (http://github.com/idleberg)',
    base00: '#090300',
    base01: '#3a3432',
    base02: '#4a4543',
    base03: '#5c5855',
    base04: '#807d7c',
    base05: '#a5a2a2',
    base06: '#d6d5d4',
    base07: '#f7f7f7',
    base08: '#db2d20',
    base09: '#e8bbd0',
    base0A: '#fded02',
    base0B: '#01a252',
    base0C: '#b5e4f4',
    base0D: '#01a0e4',
    base0E: '#a16a94',
    base0F: '#cdab53'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/apathy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'apathy',
    author: 'jannik siebert (https://github.com/janniks)',
    base00: '#031A16',
    base01: '#0B342D',
    base02: '#184E45',
    base03: '#2B685E',
    base04: '#5F9C92',
    base05: '#81B5AC',
    base06: '#A7CEC8',
    base07: '#D2E7E4',
    base08: '#3E9688',
    base09: '#3E7996',
    base0A: '#3E4C96',
    base0B: '#883E96',
    base0C: '#963E4C',
    base0D: '#96883E',
    base0E: '#4C963E',
    base0F: '#3E965B'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/ashes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'ashes',
    author: 'jannik siebert (https://github.com/janniks)',
    base00: '#1C2023',
    base01: '#393F45',
    base02: '#565E65',
    base03: '#747C84',
    base04: '#ADB3BA',
    base05: '#C7CCD1',
    base06: '#DFE2E5',
    base07: '#F3F4F5',
    base08: '#C7AE95',
    base09: '#C7C795',
    base0A: '#AEC795',
    base0B: '#95C7AE',
    base0C: '#95AEC7',
    base0D: '#AE95C7',
    base0E: '#C795AE',
    base0F: '#C79595'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/atelier-dune.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'atelier dune',
    author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
    base00: '#20201d',
    base01: '#292824',
    base02: '#6e6b5e',
    base03: '#7d7a68',
    base04: '#999580',
    base05: '#a6a28c',
    base06: '#e8e4cf',
    base07: '#fefbec',
    base08: '#d73737',
    base09: '#b65611',
    base0A: '#cfb017',
    base0B: '#60ac39',
    base0C: '#1fad83',
    base0D: '#6684e1',
    base0E: '#b854d4',
    base0F: '#d43552'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/atelier-forest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'atelier forest',
    author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
    base00: '#1b1918',
    base01: '#2c2421',
    base02: '#68615e',
    base03: '#766e6b',
    base04: '#9c9491',
    base05: '#a8a19f',
    base06: '#e6e2e0',
    base07: '#f1efee',
    base08: '#f22c40',
    base09: '#df5320',
    base0A: '#d5911a',
    base0B: '#5ab738',
    base0C: '#00ad9c',
    base0D: '#407ee7',
    base0E: '#6666ea',
    base0F: '#c33ff3'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/atelier-heath.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'atelier heath',
    author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
    base00: '#1b181b',
    base01: '#292329',
    base02: '#695d69',
    base03: '#776977',
    base04: '#9e8f9e',
    base05: '#ab9bab',
    base06: '#d8cad8',
    base07: '#f7f3f7',
    base08: '#ca402b',
    base09: '#a65926',
    base0A: '#bb8a35',
    base0B: '#379a37',
    base0C: '#159393',
    base0D: '#516aec',
    base0E: '#7b59c0',
    base0F: '#cc33cc'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/atelier-lakeside.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'atelier lakeside',
    author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
    base00: '#161b1d',
    base01: '#1f292e',
    base02: '#516d7b',
    base03: '#5a7b8c',
    base04: '#7195a8',
    base05: '#7ea2b4',
    base06: '#c1e4f6',
    base07: '#ebf8ff',
    base08: '#d22d72',
    base09: '#935c25',
    base0A: '#8a8a0f',
    base0B: '#568c3b',
    base0C: '#2d8f6f',
    base0D: '#257fad',
    base0E: '#5d5db1',
    base0F: '#b72dd2'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/atelier-seaside.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'atelier seaside',
    author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
    base00: '#131513',
    base01: '#242924',
    base02: '#5e6e5e',
    base03: '#687d68',
    base04: '#809980',
    base05: '#8ca68c',
    base06: '#cfe8cf',
    base07: '#f0fff0',
    base08: '#e6193c',
    base09: '#87711d',
    base0A: '#c3c322',
    base0B: '#29a329',
    base0C: '#1999b3',
    base0D: '#3d62f5',
    base0E: '#ad2bee',
    base0F: '#e619c3'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/bespin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'bespin',
    author: 'jan t. sott',
    base00: '#28211c',
    base01: '#36312e',
    base02: '#5e5d5c',
    base03: '#666666',
    base04: '#797977',
    base05: '#8a8986',
    base06: '#9d9b97',
    base07: '#baae9e',
    base08: '#cf6a4c',
    base09: '#cf7d34',
    base0A: '#f9ee98',
    base0B: '#54be0d',
    base0C: '#afc4db',
    base0D: '#5ea6ea',
    base0E: '#9b859d',
    base0F: '#937121'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/brewer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'brewer',
    author: 'timothée poisot (http://github.com/tpoisot)',
    base00: '#0c0d0e',
    base01: '#2e2f30',
    base02: '#515253',
    base03: '#737475',
    base04: '#959697',
    base05: '#b7b8b9',
    base06: '#dadbdc',
    base07: '#fcfdfe',
    base08: '#e31a1c',
    base09: '#e6550d',
    base0A: '#dca060',
    base0B: '#31a354',
    base0C: '#80b1d3',
    base0D: '#3182bd',
    base0E: '#756bb1',
    base0F: '#b15928'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/bright.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'bright',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#000000',
    base01: '#303030',
    base02: '#505050',
    base03: '#b0b0b0',
    base04: '#d0d0d0',
    base05: '#e0e0e0',
    base06: '#f5f5f5',
    base07: '#ffffff',
    base08: '#fb0120',
    base09: '#fc6d24',
    base0A: '#fda331',
    base0B: '#a1c659',
    base0C: '#76c7b7',
    base0D: '#6fb3d2',
    base0E: '#d381c3',
    base0F: '#be643c'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/chalk.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'chalk',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#151515',
    base01: '#202020',
    base02: '#303030',
    base03: '#505050',
    base04: '#b0b0b0',
    base05: '#d0d0d0',
    base06: '#e0e0e0',
    base07: '#f5f5f5',
    base08: '#fb9fb1',
    base09: '#eda987',
    base0A: '#ddb26f',
    base0B: '#acc267',
    base0C: '#12cfc0',
    base0D: '#6fc2ef',
    base0E: '#e1a3ee',
    base0F: '#deaf8f'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/codeschool.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'codeschool',
    author: 'brettof86',
    base00: '#232c31',
    base01: '#1c3657',
    base02: '#2a343a',
    base03: '#3f4944',
    base04: '#84898c',
    base05: '#9ea7a6',
    base06: '#a7cfa3',
    base07: '#b5d8f6',
    base08: '#2a5491',
    base09: '#43820d',
    base0A: '#a03b1e',
    base0B: '#237986',
    base0C: '#b02f30',
    base0D: '#484d79',
    base0E: '#c59820',
    base0F: '#c98344'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/colors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'colors',
    author: 'mrmrs (http://clrs.cc)',
    base00: '#111111',
    base01: '#333333',
    base02: '#555555',
    base03: '#777777',
    base04: '#999999',
    base05: '#bbbbbb',
    base06: '#dddddd',
    base07: '#ffffff',
    base08: '#ff4136',
    base09: '#ff851b',
    base0A: '#ffdc00',
    base0B: '#2ecc40',
    base0C: '#7fdbff',
    base0D: '#0074d9',
    base0E: '#b10dc9',
    base0F: '#85144b'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/default.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'default',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#181818',
    base01: '#282828',
    base02: '#383838',
    base03: '#585858',
    base04: '#b8b8b8',
    base05: '#d8d8d8',
    base06: '#e8e8e8',
    base07: '#f8f8f8',
    base08: '#ab4642',
    base09: '#dc9656',
    base0A: '#f7ca88',
    base0B: '#a1b56c',
    base0C: '#86c1b9',
    base0D: '#7cafc2',
    base0E: '#ba8baf',
    base0F: '#a16946'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/eighties.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'eighties',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#2d2d2d',
    base01: '#393939',
    base02: '#515151',
    base03: '#747369',
    base04: '#a09f93',
    base05: '#d3d0c8',
    base06: '#e8e6df',
    base07: '#f2f0ec',
    base08: '#f2777a',
    base09: '#f99157',
    base0A: '#ffcc66',
    base0B: '#99cc99',
    base0C: '#66cccc',
    base0D: '#6699cc',
    base0E: '#cc99cc',
    base0F: '#d27b53'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/embers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'embers',
    author: 'jannik siebert (https://github.com/janniks)',
    base00: '#16130F',
    base01: '#2C2620',
    base02: '#433B32',
    base03: '#5A5047',
    base04: '#8A8075',
    base05: '#A39A90',
    base06: '#BEB6AE',
    base07: '#DBD6D1',
    base08: '#826D57',
    base09: '#828257',
    base0A: '#6D8257',
    base0B: '#57826D',
    base0C: '#576D82',
    base0D: '#6D5782',
    base0E: '#82576D',
    base0F: '#825757'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/flat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'flat',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#2C3E50',
    base01: '#34495E',
    base02: '#7F8C8D',
    base03: '#95A5A6',
    base04: '#BDC3C7',
    base05: '#e0e0e0',
    base06: '#f5f5f5',
    base07: '#ECF0F1',
    base08: '#E74C3C',
    base09: '#E67E22',
    base0A: '#F1C40F',
    base0B: '#2ECC71',
    base0C: '#1ABC9C',
    base0D: '#3498DB',
    base0E: '#9B59B6',
    base0F: '#be643c'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/google.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'google',
    author: 'seth wright (http://sethawright.com)',
    base00: '#1d1f21',
    base01: '#282a2e',
    base02: '#373b41',
    base03: '#969896',
    base04: '#b4b7b4',
    base05: '#c5c8c6',
    base06: '#e0e0e0',
    base07: '#ffffff',
    base08: '#CC342B',
    base09: '#F96A38',
    base0A: '#FBA922',
    base0B: '#198844',
    base0C: '#3971ED',
    base0D: '#3971ED',
    base0E: '#A36AC7',
    base0F: '#3971ED'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/grayscale.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'grayscale',
    author: 'alexandre gavioli (https://github.com/alexx2/)',
    base00: '#101010',
    base01: '#252525',
    base02: '#464646',
    base03: '#525252',
    base04: '#ababab',
    base05: '#b9b9b9',
    base06: '#e3e3e3',
    base07: '#f7f7f7',
    base08: '#7c7c7c',
    base09: '#999999',
    base0A: '#a0a0a0',
    base0B: '#8e8e8e',
    base0C: '#868686',
    base0D: '#686868',
    base0E: '#747474',
    base0F: '#5e5e5e'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/greenscreen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'green screen',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#001100',
    base01: '#003300',
    base02: '#005500',
    base03: '#007700',
    base04: '#009900',
    base05: '#00bb00',
    base06: '#00dd00',
    base07: '#00ff00',
    base08: '#007700',
    base09: '#009900',
    base0A: '#007700',
    base0B: '#00bb00',
    base0C: '#005500',
    base0D: '#009900',
    base0E: '#00bb00',
    base0F: '#005500'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/harmonic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'harmonic16',
    author: 'jannik siebert (https://github.com/janniks)',
    base00: '#0b1c2c',
    base01: '#223b54',
    base02: '#405c79',
    base03: '#627e99',
    base04: '#aabcce',
    base05: '#cbd6e2',
    base06: '#e5ebf1',
    base07: '#f7f9fb',
    base08: '#bf8b56',
    base09: '#bfbf56',
    base0A: '#8bbf56',
    base0B: '#56bf8b',
    base0C: '#568bbf',
    base0D: '#8b56bf',
    base0E: '#bf568b',
    base0F: '#bf5656'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/hopscotch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'hopscotch',
    author: 'jan t. sott',
    base00: '#322931',
    base01: '#433b42',
    base02: '#5c545b',
    base03: '#797379',
    base04: '#989498',
    base05: '#b9b5b8',
    base06: '#d5d3d5',
    base07: '#ffffff',
    base08: '#dd464c',
    base09: '#fd8b19',
    base0A: '#fdcc59',
    base0B: '#8fc13e',
    base0C: '#149b93',
    base0D: '#1290bf',
    base0E: '#c85e7c',
    base0F: '#b33508'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/isotope.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'isotope',
    author: 'jan t. sott',
    base00: '#000000',
    base01: '#404040',
    base02: '#606060',
    base03: '#808080',
    base04: '#c0c0c0',
    base05: '#d0d0d0',
    base06: '#e0e0e0',
    base07: '#ffffff',
    base08: '#ff0000',
    base09: '#ff9900',
    base0A: '#ff0099',
    base0B: '#33ff00',
    base0C: '#00ffff',
    base0D: '#0066ff',
    base0E: '#cc00ff',
    base0F: '#3300ff'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/marrakesh.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'marrakesh',
    author: 'alexandre gavioli (http://github.com/alexx2/)',
    base00: '#201602',
    base01: '#302e00',
    base02: '#5f5b17',
    base03: '#6c6823',
    base04: '#86813b',
    base05: '#948e48',
    base06: '#ccc37a',
    base07: '#faf0a5',
    base08: '#c35359',
    base09: '#b36144',
    base0A: '#a88339',
    base0B: '#18974e',
    base0C: '#75a738',
    base0D: '#477ca1',
    base0E: '#8868b3',
    base0F: '#b3588e'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/mocha.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'mocha',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#3B3228',
    base01: '#534636',
    base02: '#645240',
    base03: '#7e705a',
    base04: '#b8afad',
    base05: '#d0c8c6',
    base06: '#e9e1dd',
    base07: '#f5eeeb',
    base08: '#cb6077',
    base09: '#d28b71',
    base0A: '#f4bc87',
    base0B: '#beb55b',
    base0C: '#7bbda4',
    base0D: '#8ab3b5',
    base0E: '#a89bb9',
    base0F: '#bb9584'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/monokai.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/nicinabox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'nicinabox',
    author: 'nicinabox (http://github.com/nicinabox)',
    base00: '#2A2F3A',
    base01: '#3C444F',
    base02: '#4F5A65',
    base03: '#BEBEBE',
    base04: '#b0b0b0',
    base05: '#d0d0d0',
    base06: '#FFFFFF',
    base07: '#f5f5f5',
    base08: '#fb9fb1',
    base09: '#FC6D24',
    base0A: '#ddb26f',
    base0B: '#A1C659',
    base0C: '#12cfc0',
    base0D: '#6FB3D2',
    base0E: '#D381C3',
    base0F: '#deaf8f'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/ocean.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'ocean',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#2b303b',
    base01: '#343d46',
    base02: '#4f5b66',
    base03: '#65737e',
    base04: '#a7adba',
    base05: '#c0c5ce',
    base06: '#dfe1e8',
    base07: '#eff1f5',
    base08: '#bf616a',
    base09: '#d08770',
    base0A: '#ebcb8b',
    base0B: '#a3be8c',
    base0C: '#96b5b4',
    base0D: '#8fa1b3',
    base0E: '#b48ead',
    base0F: '#ab7967'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/paraiso.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'paraiso',
    author: 'jan t. sott',
    base00: '#2f1e2e',
    base01: '#41323f',
    base02: '#4f424c',
    base03: '#776e71',
    base04: '#8d8687',
    base05: '#a39e9b',
    base06: '#b9b6b0',
    base07: '#e7e9db',
    base08: '#ef6155',
    base09: '#f99b15',
    base0A: '#fec418',
    base0B: '#48b685',
    base0C: '#5bc4bf',
    base0D: '#06b6ef',
    base0E: '#815ba4',
    base0F: '#e96ba8'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/pop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'pop',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#000000',
    base01: '#202020',
    base02: '#303030',
    base03: '#505050',
    base04: '#b0b0b0',
    base05: '#d0d0d0',
    base06: '#e0e0e0',
    base07: '#ffffff',
    base08: '#eb008a',
    base09: '#f29333',
    base0A: '#f8ca12',
    base0B: '#37b349',
    base0C: '#00aabb',
    base0D: '#0e5a94',
    base0E: '#b31e8d',
    base0F: '#7a2d00'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/railscasts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'railscasts',
    author: 'ryan bates (http://railscasts.com)',
    base00: '#2b2b2b',
    base01: '#272935',
    base02: '#3a4055',
    base03: '#5a647e',
    base04: '#d4cfc9',
    base05: '#e6e1dc',
    base06: '#f4f1ed',
    base07: '#f9f7f3',
    base08: '#da4939',
    base09: '#cc7833',
    base0A: '#ffc66d',
    base0B: '#a5c261',
    base0C: '#519f50',
    base0D: '#6d9cbe',
    base0E: '#b6b3eb',
    base0F: '#bc9458'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/shapeshifter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'shapeshifter',
    author: 'tyler benziger (http://tybenz.com)',
    base00: '#000000',
    base01: '#040404',
    base02: '#102015',
    base03: '#343434',
    base04: '#555555',
    base05: '#ababab',
    base06: '#e0e0e0',
    base07: '#f9f9f9',
    base08: '#e92f2f',
    base09: '#e09448',
    base0A: '#dddd13',
    base0B: '#0ed839',
    base0C: '#23edda',
    base0D: '#3b48e3',
    base0E: '#f996e2',
    base0F: '#69542d'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/solarized.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'solarized',
    author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
    base00: '#002b36',
    base01: '#073642',
    base02: '#586e75',
    base03: '#657b83',
    base04: '#839496',
    base05: '#93a1a1',
    base06: '#eee8d5',
    base07: '#fdf6e3',
    base08: '#dc322f',
    base09: '#cb4b16',
    base0A: '#b58900',
    base0B: '#859900',
    base0C: '#2aa198',
    base0D: '#268bd2',
    base0E: '#6c71c4',
    base0F: '#d33682'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/summerfruit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'summerfruit',
    author: 'christopher corley (http://cscorley.github.io/)',
    base00: '#151515',
    base01: '#202020',
    base02: '#303030',
    base03: '#505050',
    base04: '#B0B0B0',
    base05: '#D0D0D0',
    base06: '#E0E0E0',
    base07: '#FFFFFF',
    base08: '#FF0086',
    base09: '#FD8900',
    base0A: '#ABA800',
    base0B: '#00C918',
    base0C: '#1faaaa',
    base0D: '#3777E6',
    base0E: '#AD00A1',
    base0F: '#cc6633'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/tomorrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'tomorrow',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#1d1f21',
    base01: '#282a2e',
    base02: '#373b41',
    base03: '#969896',
    base04: '#b4b7b4',
    base05: '#c5c8c6',
    base06: '#e0e0e0',
    base07: '#ffffff',
    base08: '#cc6666',
    base09: '#de935f',
    base0A: '#f0c674',
    base0B: '#b5bd68',
    base0C: '#8abeb7',
    base0D: '#81a2be',
    base0E: '#b294bb',
    base0F: '#a3685a'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/tube.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'london tube',
    author: 'jan t. sott',
    base00: '#231f20',
    base01: '#1c3f95',
    base02: '#5a5758',
    base03: '#737171',
    base04: '#959ca1',
    base05: '#d9d8d8',
    base06: '#e7e7e8',
    base07: '#ffffff',
    base08: '#ee2e24',
    base09: '#f386a1',
    base0A: '#ffd204',
    base0B: '#00853e',
    base0C: '#85cebc',
    base0D: '#009ddc',
    base0E: '#98005d',
    base0F: '#b06110'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/twilight.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'twilight',
    author: 'david hart (http://hart-dev.com)',
    base00: '#1e1e1e',
    base01: '#323537',
    base02: '#464b50',
    base03: '#5f5a60',
    base04: '#838184',
    base05: '#a7a7a7',
    base06: '#c3c3c3',
    base07: '#ffffff',
    base08: '#cf6a4c',
    base09: '#cda869',
    base0A: '#f9ee98',
    base0B: '#8f9d6a',
    base0C: '#afc4db',
    base0D: '#7587a6',
    base0E: '#9b859d',
    base0F: '#9b703f'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "base16Themes",
    ()=>base16Themes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$threezerotwofour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/threezerotwofour.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$apathy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/apathy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$ashes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/ashes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$atelier$2d$dune$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/atelier-dune.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$atelier$2d$forest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/atelier-forest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$atelier$2d$heath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/atelier-heath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$atelier$2d$lakeside$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/atelier-lakeside.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$atelier$2d$seaside$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/atelier-seaside.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$bespin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/bespin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$brewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/brewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$bright$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/bright.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$chalk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/chalk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$codeschool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/codeschool.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$default$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/default.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$eighties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/eighties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$embers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/embers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$flat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/flat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$google$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/google.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$grayscale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/grayscale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$greenscreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/greenscreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$harmonic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/harmonic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$hopscotch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/hopscotch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$isotope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/isotope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$marrakesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/marrakesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$mocha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/mocha.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$monokai$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/monokai.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$nicinabox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/nicinabox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$ocean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/ocean.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$paraiso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/paraiso.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$pop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/pop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$railscasts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/railscasts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$shapeshifter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/shapeshifter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$solarized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/solarized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$summerfruit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/summerfruit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$tomorrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/tomorrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$tube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/tube.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$twilight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/twilight.js [app-client] (ecmascript)");
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
const base16Themes = {
    threezerotwofour: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$threezerotwofour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    apathy: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$apathy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ashes: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$ashes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    atelierDune: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$atelier$2d$dune$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    atelierForest: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$atelier$2d$forest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    atelierHeath: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$atelier$2d$heath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    atelierLakeside: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$atelier$2d$lakeside$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    atelierSeaside: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$atelier$2d$seaside$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    bespin: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$bespin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    brewer: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$brewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    bright: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$bright$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    chalk: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$chalk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    codeschool: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$codeschool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    colors: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    default: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$default$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    eighties: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$eighties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    embers: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$embers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    flat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$flat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    google: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$google$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    grayscale: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$grayscale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    greenscreen: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$greenscreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    harmonic: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$harmonic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    hopscotch: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$hopscotch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    isotope: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$isotope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    marrakesh: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$marrakesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    mocha: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$mocha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    monokai: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$monokai$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    nicinabox: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$nicinabox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ocean: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$ocean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    paraiso: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$paraiso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    pop: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$pop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    railscasts: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$railscasts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    shapeshifter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$shapeshifter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    solarized: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$solarized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    summerfruit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$summerfruit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    tomorrow: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$tomorrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    tube: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$tube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    twilight: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$twilight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStyling",
    ()=>createStyling,
    "getBase16Theme",
    ()=>getBase16Theme,
    "invertBase16Theme",
    ()=>invertBase16Theme,
    "invertTheme",
    ()=>invertTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$color$40$4$2e$2$2e$3$2f$node_modules$2f$color$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/color@4.2.3/node_modules/color/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$18$2e$1$2f$node_modules$2f$lodash$2d$es$2f$curry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__curry$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/curry.js [app-client] (ecmascript) <export default as curry>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$colorConverters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/colorConverters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/themes/index.js [app-client] (ecmascript)");
;
;
;
;
const DEFAULT_BASE16 = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base16Themes"].default;
const BASE16_KEYS = Object.keys(DEFAULT_BASE16);
// we need a correcting factor, so that a dark, but not black background color
// converts to bright enough inversed color
const flip = (x)=>x < 0.25 ? 1 : x < 0.5 ? 0.9 - x : 1.1 - x;
const invertColor = (hexString)=>{
    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$color$40$4$2e$2$2e$3$2f$node_modules$2f$color$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(hexString);
    const [y, u, v] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$colorConverters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb2yuv"])(color.array());
    const flippedYuv = [
        flip(y),
        u,
        v
    ];
    const rgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$colorConverters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yuv2rgb"])(flippedYuv);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$color$40$4$2e$2$2e$3$2f$node_modules$2f$color$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rgb(rgb).hex();
};
const merger = (styling)=>{
    return (prevStyling)=>({
            className: [
                prevStyling.className,
                styling.className
            ].filter(Boolean).join(' '),
            style: {
                ...prevStyling.style || {},
                ...styling.style || {}
            }
        });
};
const mergeStyling = (customStyling, defaultStyling)=>{
    if (customStyling === undefined) {
        return defaultStyling;
    }
    if (defaultStyling === undefined) {
        return customStyling;
    }
    const customType = typeof customStyling;
    const defaultType = typeof defaultStyling;
    switch(customType){
        case 'string':
            switch(defaultType){
                case 'string':
                    return [
                        defaultStyling,
                        customStyling
                    ].filter(Boolean).join(' ');
                case 'object':
                    return merger({
                        className: customStyling,
                        style: defaultStyling
                    });
                case 'function':
                    return (styling, ...args)=>merger({
                            className: customStyling
                        })(defaultStyling(styling, ...args));
            }
            break;
        case 'object':
            switch(defaultType){
                case 'string':
                    return merger({
                        className: defaultStyling,
                        style: customStyling
                    });
                case 'object':
                    return {
                        ...defaultStyling,
                        ...customStyling
                    };
                case 'function':
                    return (styling, ...args)=>merger({
                            style: customStyling
                        })(defaultStyling(styling, ...args));
            }
            break;
        case 'function':
            switch(defaultType){
                case 'string':
                    return (styling, ...args)=>customStyling(merger(styling)({
                            className: defaultStyling
                        }), ...args);
                case 'object':
                    return (styling, ...args)=>customStyling(merger(styling)({
                            style: defaultStyling
                        }), ...args);
                case 'function':
                    return (styling, ...args)=>customStyling(defaultStyling(styling, ...args), ...args);
            }
    }
};
const mergeStylings = (customStylings, defaultStylings)=>{
    const keys = Object.keys(defaultStylings);
    for(const key in customStylings){
        if (keys.indexOf(key) === -1) keys.push(key);
    }
    return keys.reduce((mergedStyling, key)=>(mergedStyling[key] = mergeStyling(customStylings[key], defaultStylings[key]), mergedStyling), {});
};
const getStylingByKeys = (mergedStyling, keys, ...args)=>{
    if (keys === null) {
        return mergedStyling;
    }
    if (!Array.isArray(keys)) {
        keys = [
            keys
        ];
    }
    const styles = keys.map((key)=>mergedStyling[key]).filter(Boolean);
    const props = styles.reduce((obj, s)=>{
        if (typeof s === 'string') {
            obj.className = [
                obj.className,
                s
            ].filter(Boolean).join(' ');
        } else if (typeof s === 'object') {
            obj.style = {
                ...obj.style,
                ...s
            };
        } else if (typeof s === 'function') {
            obj = {
                ...obj,
                ...s(obj, ...args)
            };
        }
        return obj;
    }, {
        className: '',
        style: {}
    });
    if (!props.className) {
        delete props.className;
    }
    if (Object.keys(props.style).length === 0) {
        delete props.style;
    }
    return props;
};
const invertBase16Theme = (base16Theme)=>Object.keys(base16Theme).reduce((t, key)=>(t[key] = /^base/.test(key) ? invertColor(base16Theme[key]) : key === 'scheme' ? base16Theme[key] + ':inverted' : base16Theme[key], t), {});
const createStyling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$18$2e$1$2f$node_modules$2f$lodash$2d$es$2f$curry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__curry$3e$__["curry"])((getStylingFromBase16, options = {}, themeOrStyling = {}, ...args)=>{
    const { defaultBase16 = DEFAULT_BASE16, base16Themes = null } = options;
    const base16Theme = getBase16Theme(themeOrStyling, base16Themes);
    if (base16Theme) {
        themeOrStyling = {
            ...base16Theme,
            ...themeOrStyling
        };
    }
    const theme = BASE16_KEYS.reduce((t, key)=>(t[key] = themeOrStyling[key] || defaultBase16[key], t), {});
    const customStyling = Object.keys(themeOrStyling).reduce((s, key)=>BASE16_KEYS.indexOf(key) === -1 ? (s[key] = themeOrStyling[key], s) : s, {});
    const defaultStyling = getStylingFromBase16(theme);
    const mergedStyling = mergeStylings(customStyling, defaultStyling);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$18$2e$1$2f$node_modules$2f$lodash$2d$es$2f$curry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__curry$3e$__["curry"])(getStylingByKeys, 2)(mergedStyling, ...args);
}, 3);
const isStylingConfig = (theme)=>!!theme.extend;
const getBase16Theme = (theme, base16Themes)=>{
    if (theme && isStylingConfig(theme) && theme.extend) {
        theme = theme.extend;
    }
    if (typeof theme === 'string') {
        const [themeName, modifier] = theme.split(':');
        if (base16Themes) {
            theme = base16Themes[themeName];
        } else {
            theme = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$themes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base16Themes"][themeName];
        }
        if (modifier === 'inverted') {
            theme = invertBase16Theme(theme);
        }
    }
    return theme && Object.prototype.hasOwnProperty.call(theme, 'base00') ? theme : undefined;
};
const invertTheme = (theme)=>{
    if (typeof theme === 'string') {
        return `${theme}:inverted`;
    }
    if (theme && isStylingConfig(theme) && theme.extend) {
        if (typeof theme.extend === 'string') {
            return {
                ...theme,
                extend: `${theme.extend}:inverted`
            };
        }
        return {
            ...theme,
            extend: invertBase16Theme(theme.extend)
        };
    }
    if (theme) {
        return invertBase16Theme(theme);
    }
    return theme;
};
;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/objType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>objType
]);
function objType(obj) {
    const type = Object.prototype.toString.call(obj).slice(8, -1);
    if (type === 'Object' && typeof obj[Symbol.iterator] === 'function') {
        return 'Iterable';
    }
    if (type === 'Custom' && obj.constructor !== Object && obj instanceof Object) {
        // For projects implementing objects overriding `.prototype[Symbol.toStringTag]`
        return 'Object';
    }
    return type;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JSONArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function JSONArrow({ styling, arrowStyle = 'single', expanded, nodeType, onClick }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...styling('arrowContainer', arrowStyle),
        onClick: onClick
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...styling([
            'arrow',
            'arrowSign'
        ], nodeType, expanded, arrowStyle)
    }, '\u25B6', arrowStyle === 'double' && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...styling([
            'arrowSign',
            'arrowSignInner'
        ])
    }, '\u25B6')));
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/getCollectionEntries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getCollectionEntries
]);
function getLength(type, collection) {
    if (type === 'Object') {
        return Object.keys(collection).length;
    } else if (type === 'Array') {
        return collection.length;
    }
    return Infinity;
}
function isIterableMap(collection) {
    return typeof collection.set === 'function';
}
function getEntries(type, collection, sortObjectKeys, from = 0, to = Infinity) {
    let res;
    if (type === 'Object') {
        let keys = Object.getOwnPropertyNames(collection);
        if (sortObjectKeys) {
            keys.sort(sortObjectKeys === true ? undefined : sortObjectKeys);
        }
        keys = keys.slice(from, to + 1);
        res = {
            entries: keys.map((key)=>({
                    key,
                    value: collection[key]
                }))
        };
    } else if (type === 'Array') {
        res = {
            entries: collection.slice(from, to + 1).map((val, idx)=>({
                    key: idx + from,
                    value: val
                }))
        };
    } else {
        let idx = 0;
        const entries = [];
        let done = true;
        const isMap = isIterableMap(collection);
        for (const item of collection){
            if (idx > to) {
                done = false;
                break;
            }
            if (from <= idx) {
                if (isMap && Array.isArray(item)) {
                    if (typeof item[0] === 'string' || typeof item[0] === 'number') {
                        entries.push({
                            key: item[0],
                            value: item[1]
                        });
                    } else {
                        entries.push({
                            key: `[entry ${idx}]`,
                            value: {
                                '[key]': item[0],
                                '[value]': item[1]
                            }
                        });
                    }
                } else {
                    entries.push({
                        key: idx,
                        value: item
                    });
                }
            }
            idx++;
        }
        res = {
            hasMore: !done,
            entries
        };
    }
    return res;
}
function getRanges(from, to, limit) {
    const ranges = [];
    while(to - from > limit * limit){
        limit = limit * limit;
    }
    for(let i = from; i <= to; i += limit){
        ranges.push({
            from: i,
            to: Math.min(to, i + limit - 1)
        });
    }
    return ranges;
}
function getCollectionEntries(type, collection, sortObjectKeys, limit, from = 0, to = Infinity) {
    const getEntriesBound = getEntries.bind(null, type, collection, sortObjectKeys);
    if (!limit) {
        return getEntriesBound().entries;
    }
    const isSubset = to < Infinity;
    const length = Math.min(to - from, getLength(type, collection));
    if (type !== 'Iterable') {
        if (length <= limit || limit < 7) {
            return getEntriesBound(from, to).entries;
        }
    } else {
        if (length <= limit && !isSubset) {
            return getEntriesBound(from, to).entries;
        }
    }
    let limitedEntries;
    if (type === 'Iterable') {
        const { hasMore, entries } = getEntriesBound(from, from + limit - 1);
        limitedEntries = hasMore ? [
            ...entries,
            ...getRanges(from + limit, from + 2 * limit - 1, limit)
        ] : entries;
    } else {
        limitedEntries = isSubset ? getRanges(from, to, limit) : [
            ...getEntriesBound(0, limit - 5).entries,
            ...getRanges(limit - 4, length - 5, limit),
            ...getEntriesBound(length - 4, length - 1).entries
        ];
    }
    return limitedEntries;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/ItemRange.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ItemRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONArrow.js [app-client] (ecmascript)");
;
;
function ItemRange(props) {
    const { styling, from, to, renderChildNodes, nodeType } = props;
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ItemRange.useCallback[handleClick]": ()=>{
            setExpanded(!expanded);
        }
    }["ItemRange.useCallback[handleClick]"], [
        expanded
    ]);
    return expanded ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...styling('itemRange', expanded)
    }, renderChildNodes(props, from, to)) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...styling('itemRange', expanded),
        onClick: handleClick
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        nodeType: nodeType,
        styling: styling,
        expanded: false,
        onClick: handleClick,
        arrowStyle: "double"
    }), `${from} ... ${to}`);
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONNestedNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JSONNestedNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$getCollectionEntries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/getCollectionEntries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$ItemRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/ItemRange.js [app-client] (ecmascript)");
;
;
;
;
;
function isRange(rangeOrEntry) {
    return rangeOrEntry.to !== undefined;
}
function renderChildNodes(props, from, to) {
    const { nodeType, data, collectionLimit, circularCache, keyPath, postprocessValue, sortObjectKeys } = props;
    const childNodes = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$getCollectionEntries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nodeType, data, sortObjectKeys, collectionLimit, from, to).forEach((entry)=>{
        if (isRange(entry)) {
            childNodes.push(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$ItemRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...props,
                key: `ItemRange--${entry.from}-${entry.to}`,
                from: entry.from,
                to: entry.to,
                renderChildNodes: renderChildNodes
            }));
        } else {
            const { key, value } = entry;
            const isCircular = circularCache.includes(value);
            childNodes.push(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...props,
                postprocessValue,
                collectionLimit,
                key: `Node--${key}`,
                keyPath: [
                    key,
                    ...keyPath
                ],
                value: postprocessValue(value),
                circularCache: [
                    ...circularCache,
                    value
                ],
                isCircular: isCircular,
                hideRoot: false
            }));
        }
    });
    return childNodes;
}
function JSONNestedNode(props) {
    const { circularCache = [], collectionLimit, createItemString, data, expandable, getItemString, hideRoot, isCircular, keyPath, labelRenderer, level = 0, nodeType, nodeTypeIndicator, shouldExpandNodeInitially, styling } = props;
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(// calculate individual node expansion if necessary
    isCircular ? false : shouldExpandNodeInitially(keyPath, data, level));
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "JSONNestedNode.useCallback[handleClick]": ()=>{
            if (expandable) setExpanded(!expanded);
        }
    }["JSONNestedNode.useCallback[handleClick]"], [
        expandable,
        expanded
    ]);
    const renderedChildren = expanded || hideRoot && level === 0 ? renderChildNodes({
        ...props,
        circularCache,
        level: level + 1
    }) : null;
    const itemType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        ...styling('nestedNodeItemType', expanded)
    }, nodeTypeIndicator);
    const renderedItemString = getItemString(nodeType, data, itemType, createItemString(data, collectionLimit), keyPath);
    const stylingArgs = [
        keyPath,
        nodeType,
        expanded,
        expandable
    ];
    return hideRoot ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
        ...styling('rootNode', ...stylingArgs)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ul", {
        ...styling('rootNodeChildren', ...stylingArgs)
    }, renderedChildren)) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
        ...styling('nestedNode', ...stylingArgs)
    }, expandable && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        styling: styling,
        nodeType: nodeType,
        expanded: expanded,
        onClick: handleClick
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        ...styling([
            'label',
            'nestedNodeLabel'
        ], ...stylingArgs),
        onClick: handleClick
    }, labelRenderer(...stylingArgs)), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        ...styling('nestedNodeItemString', ...stylingArgs),
        onClick: handleClick
    }, renderedItemString), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ul", {
        ...styling('nestedNodeChildren', ...stylingArgs)
    }, renderedChildren));
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONObjectNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JSONObjectNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONNestedNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONNestedNode.js [app-client] (ecmascript)");
;
;
// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data) {
    const len = Object.getOwnPropertyNames(data).length;
    return `${len} ${len !== 1 ? 'keys' : 'key'}`;
}
function JSONObjectNode({ data, ...props }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONNestedNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        data: data,
        nodeType: "Object",
        nodeTypeIndicator: props.nodeType === 'Error' ? 'Error()' : '{}',
        createItemString: createItemString,
        expandable: Object.getOwnPropertyNames(data).length > 0
    });
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONArrayNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JSONArrayNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONNestedNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONNestedNode.js [app-client] (ecmascript)");
;
;
// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data) {
    return `${data.length} ${data.length !== 1 ? 'items' : 'item'}`;
}
function JSONArrayNode({ data, ...props }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONNestedNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        data: data,
        nodeType: "Array",
        nodeTypeIndicator: "[]",
        createItemString: createItemString,
        expandable: data.length > 0
    });
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONIterableNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JSONIterableNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONNestedNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONNestedNode.js [app-client] (ecmascript)");
;
;
// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data, limit) {
    let count = 0;
    let hasMore = false;
    if (Number.isSafeInteger(data.size)) {
        count = data.size;
    } else {
        // eslint-disable-next-line no-unused-vars
        for (const entry of data){
            if (limit && count + 1 > limit) {
                hasMore = true;
                break;
            }
            count += 1;
        }
    }
    return `${hasMore ? '>' : ''}${count} ${count !== 1 ? 'entries' : 'entry'}`;
}
function JSONIterableNode(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONNestedNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        nodeType: "Iterable",
        nodeTypeIndicator: "()",
        createItemString: createItemString,
        expandable: true
    });
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONValueNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JSONValueNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function JSONValueNode({ nodeType, styling, labelRenderer, keyPath, valueRenderer, value, valueGetter = (value)=>value }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
        ...styling('value', nodeType, keyPath)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        ...styling([
            'label',
            'valueLabel'
        ], nodeType, keyPath)
    }, labelRenderer(keyPath, nodeType, false, false)), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        ...styling('valueText', nodeType, keyPath)
    }, valueRenderer(valueGetter(value), value, ...keyPath)));
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JSONNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$objType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/objType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONObjectNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONObjectNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONArrayNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONArrayNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONIterableNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONIterableNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONValueNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONValueNode.js [app-client] (ecmascript)");
;
;
;
;
;
;
function JSONNode({ getItemString, keyPath, labelRenderer, styling, value, valueRenderer, isCustomNode, ...rest }) {
    const nodeType = isCustomNode(value) ? 'Custom' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$objType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
    const simpleNodeProps = {
        getItemString,
        key: keyPath[0],
        keyPath,
        labelRenderer,
        nodeType,
        styling,
        value,
        valueRenderer
    };
    const nestedNodeProps = {
        ...rest,
        ...simpleNodeProps,
        data: value,
        isCustomNode
    };
    switch(nodeType){
        case 'Object':
        case 'Error':
        case 'WeakMap':
        case 'WeakSet':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONObjectNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...nestedNodeProps
            });
        case 'Array':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONArrayNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...nestedNodeProps
            });
        case 'Iterable':
        case 'Map':
        case 'Set':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONIterableNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...nestedNodeProps
            });
        case 'String':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONValueNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...simpleNodeProps,
                valueGetter: (raw)=>`"${raw}"`
            });
        case 'Number':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONValueNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...simpleNodeProps
            });
        case 'Boolean':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONValueNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...simpleNodeProps,
                valueGetter: (raw)=>raw ? 'true' : 'false'
            });
        case 'Date':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONValueNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...simpleNodeProps,
                valueGetter: (raw)=>raw.toISOString()
            });
        case 'Null':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONValueNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...simpleNodeProps,
                valueGetter: ()=>'null'
            });
        case 'Undefined':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONValueNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...simpleNodeProps,
                valueGetter: ()=>'undefined'
            });
        case 'Function':
        case 'Symbol':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONValueNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...simpleNodeProps,
                valueGetter: (raw)=>raw.toString()
            });
        case 'Custom':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONValueNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...simpleNodeProps
            });
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONValueNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...simpleNodeProps,
                valueGetter: ()=>`<${nodeType}>`
            });
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/themes/solarized.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    scheme: 'solarized',
    author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
    base00: '#002b36',
    base01: '#073642',
    base02: '#586e75',
    base03: '#657b83',
    base04: '#839496',
    base05: '#93a1a1',
    base06: '#eee8d5',
    base07: '#fdf6e3',
    base08: '#dc322f',
    base09: '#cb4b16',
    base0A: '#b58900',
    base0B: '#859900',
    base0C: '#2aa198',
    base0D: '#268bd2',
    base0E: '#6c71c4',
    base0F: '#d33682'
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/createStylingFromTheme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$themes$2f$solarized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/themes/solarized.js [app-client] (ecmascript)");
;
;
const colorMap = (theme)=>({
        BACKGROUND_COLOR: theme.base00,
        TEXT_COLOR: theme.base07,
        STRING_COLOR: theme.base0B,
        DATE_COLOR: theme.base0B,
        NUMBER_COLOR: theme.base09,
        BOOLEAN_COLOR: theme.base09,
        NULL_COLOR: theme.base08,
        UNDEFINED_COLOR: theme.base08,
        FUNCTION_COLOR: theme.base08,
        SYMBOL_COLOR: theme.base08,
        LABEL_COLOR: theme.base0D,
        ARROW_COLOR: theme.base0D,
        ITEM_STRING_COLOR: theme.base0B,
        ITEM_STRING_EXPANDED_COLOR: theme.base03
    });
const valueColorMap = (colors)=>({
        String: colors.STRING_COLOR,
        Date: colors.DATE_COLOR,
        Number: colors.NUMBER_COLOR,
        Boolean: colors.BOOLEAN_COLOR,
        Null: colors.NULL_COLOR,
        Undefined: colors.UNDEFINED_COLOR,
        Function: colors.FUNCTION_COLOR,
        Symbol: colors.SYMBOL_COLOR
    });
const getDefaultThemeStyling = (theme)=>{
    const colors = colorMap(theme);
    return {
        tree: {
            border: 0,
            padding: 0,
            marginTop: '0.5em',
            marginBottom: '0.5em',
            marginLeft: '0.125em',
            marginRight: 0,
            listStyle: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            backgroundColor: colors.BACKGROUND_COLOR
        },
        value: ({ style }, nodeType, keyPath)=>({
                style: {
                    ...style,
                    paddingTop: '0.25em',
                    paddingRight: 0,
                    marginLeft: '0.875em',
                    WebkitUserSelect: 'text',
                    MozUserSelect: 'text',
                    wordWrap: 'break-word',
                    paddingLeft: keyPath.length > 1 ? '2.125em' : '1.25em',
                    textIndent: '-0.5em',
                    wordBreak: 'break-all'
                }
            }),
        label: {
            display: 'inline-block',
            color: colors.LABEL_COLOR
        },
        valueLabel: {
            margin: '0 0.5em 0 0'
        },
        valueText: ({ style }, nodeType)=>({
                style: {
                    ...style,
                    color: valueColorMap(colors)[nodeType]
                }
            }),
        itemRange: (styling, expanded)=>({
                style: {
                    paddingTop: expanded ? 0 : '0.25em',
                    cursor: 'pointer',
                    color: colors.LABEL_COLOR
                }
            }),
        arrow: ({ style }, nodeType, expanded)=>({
                style: {
                    ...style,
                    marginLeft: 0,
                    transition: '150ms',
                    WebkitTransition: '150ms',
                    MozTransition: '150ms',
                    WebkitTransform: expanded ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
                    MozTransform: expanded ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
                    transform: expanded ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
                    transformOrigin: '45% 50%',
                    WebkitTransformOrigin: '45% 50%',
                    MozTransformOrigin: '45% 50%',
                    position: 'relative',
                    lineHeight: '1.1em',
                    fontSize: '0.75em'
                }
            }),
        arrowContainer: ({ style }, arrowStyle)=>({
                style: {
                    ...style,
                    display: 'inline-block',
                    paddingRight: '0.5em',
                    paddingLeft: arrowStyle === 'double' ? '1em' : 0,
                    cursor: 'pointer'
                }
            }),
        arrowSign: {
            color: colors.ARROW_COLOR
        },
        arrowSignInner: {
            position: 'absolute',
            top: 0,
            left: '-0.4em'
        },
        nestedNode: ({ style }, keyPath, nodeType, expanded, expandable)=>({
                style: {
                    ...style,
                    position: 'relative',
                    paddingTop: '0.25em',
                    marginLeft: keyPath.length > 1 ? '0.875em' : 0,
                    paddingLeft: !expandable ? '1.125em' : 0
                }
            }),
        rootNode: {
            padding: 0,
            margin: 0
        },
        nestedNodeLabel: ({ style }, keyPath, nodeType, expanded, expandable)=>({
                style: {
                    ...style,
                    margin: 0,
                    padding: 0,
                    WebkitUserSelect: expandable ? 'inherit' : 'text',
                    MozUserSelect: expandable ? 'inherit' : 'text',
                    cursor: expandable ? 'pointer' : 'default'
                }
            }),
        nestedNodeItemString: ({ style }, keyPath, nodeType, expanded)=>({
                style: {
                    ...style,
                    paddingLeft: '0.5em',
                    cursor: 'default',
                    color: expanded ? colors.ITEM_STRING_EXPANDED_COLOR : colors.ITEM_STRING_COLOR
                }
            }),
        nestedNodeItemType: {
            marginLeft: '0.3em',
            marginRight: '0.3em'
        },
        nestedNodeChildren: ({ style }, nodeType, expanded)=>({
                style: {
                    ...style,
                    padding: 0,
                    margin: 0,
                    listStyle: 'none',
                    display: expanded ? 'block' : 'none'
                }
            }),
        rootNodeChildren: {
            padding: 0,
            margin: 0,
            listStyle: 'none'
        }
    };
};
const createStylingFromTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createStyling"])(getDefaultThemeStyling, {
    defaultBase16: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$themes$2f$solarized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
const __TURBOPACK__default__export__ = createStylingFromTheme;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JSONTree",
    ()=>JSONTree
]);
// ES6 + inline style port of JSONViewer https://bitbucket.org/davevedder/react-json-viewer/
// all credits and original code to the author
// Dave Vedder <veddermatic@gmail.com> http://www.eskimospy.com/
// port by Daniele Zannotti http://www.github.com/dzannotti <dzannotti@me.com>
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-base16-styling@0.10.0/node_modules/react-base16-styling/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/JSONNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$createStylingFromTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-json-tree@0.20.0_@types+react@19.2.17_react@19.2.4/node_modules/react-json-tree/lib/createStylingFromTheme.js [app-client] (ecmascript)");
;
;
;
;
const identity = (value)=>value;
const expandRootNode = (keyPath, data, level)=>level === 0;
const defaultItemString = (type, data, itemType, itemString)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, itemType, " ", itemString);
const defaultLabelRenderer = ([label])=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, label, ":");
const noCustomNode = ()=>false;
function JSONTree({ data: value, theme, invertTheme: shouldInvertTheme, keyPath = [
    'root'
], labelRenderer = defaultLabelRenderer, valueRenderer = identity, shouldExpandNodeInitially = expandRootNode, hideRoot = false, getItemString = defaultItemString, postprocessValue = identity, isCustomNode = noCustomNode, collectionLimit = 50, sortObjectKeys = false }) {
    const styling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "JSONTree.useMemo[styling]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$createStylingFromTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(shouldInvertTheme ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$base16$2d$styling$40$0$2e$10$2e$0$2f$node_modules$2f$react$2d$base16$2d$styling$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invertTheme"])(theme) : theme)
    }["JSONTree.useMemo[styling]"], [
        theme,
        shouldInvertTheme
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ul", {
        ...styling('tree')
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$json$2d$tree$40$0$2e$20$2e$0_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$json$2d$tree$2f$lib$2f$JSONNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        keyPath: hideRoot ? [] : keyPath,
        value: postprocessValue(value),
        isCustomNode: isCustomNode,
        styling: styling,
        labelRenderer: labelRenderer,
        valueRenderer: valueRenderer,
        shouldExpandNodeInitially: shouldExpandNodeInitially,
        hideRoot: hideRoot,
        getItemString: getItemString,
        postprocessValue: postprocessValue,
        collectionLimit: collectionLimit,
        sortObjectKeys: sortObjectKeys
    }));
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/html@1.0.0/node_modules/html/lib/html.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*

 Style HTML
---------------

  Written by Nochum Sossonko, (nsossonko@hotmail.com)

  Based on code initially developed by: Einar Lielmanis, <elfz@laacz.lv>
    http://jsbeautifier.org/


  You are free to use this in any way you want, in case you find this useful or working for you.

  Usage:
    style_html(html_source);

    style_html(html_source, options);

  The options are:
    indent_size (default 4)          — indentation size,
    indent_char (default space)      — character to indent with,
    max_char (default 70)            -  maximum amount of characters per line,
    brace_style (default "collapse") - "collapse" | "expand" | "end-expand"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line.
    unformatted (defaults to inline tags) - list of tags, that shouldn't be reformatted
    indent_scripts (default normal)  - "keep"|"separate"|"normal"

    e.g.

    style_html(html_source, {
      'indent_size': 2,
      'indent_char': ' ',
      'max_char': 78,
      'brace_style': 'expand',
      'unformatted': ['a', 'sub', 'sup', 'b', 'i', 'u']
    });
*/ function style_html(html_source, options) {
    //Wrapper function to invoke all the necessary constructors and deal with the output.
    var multi_parser, indent_size, indent_character, max_char, brace_style, unformatted;
    options = options || {};
    indent_size = options.indent_size || 4;
    indent_character = options.indent_char || ' ';
    brace_style = options.brace_style || 'collapse';
    max_char = options.max_char == 0 ? Infinity : options.max_char || 70;
    unformatted = options.unformatted || [
        'a',
        'span',
        'bdo',
        'em',
        'strong',
        'dfn',
        'code',
        'samp',
        'kbd',
        'var',
        'cite',
        'abbr',
        'acronym',
        'q',
        'sub',
        'sup',
        'tt',
        'i',
        'b',
        'big',
        'small',
        'u',
        's',
        'strike',
        'font',
        'ins',
        'del',
        'pre',
        'address',
        'dt',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6'
    ];
    function Parser() {
        this.pos = 0; //Parser position
        this.token = '';
        this.current_mode = 'CONTENT'; //reflects the current Parser mode: TAG/CONTENT
        this.tags = {
            parent: 'parent1',
            parentcount: 1,
            parent1: ''
        };
        this.tag_type = '';
        this.token_text = this.last_token = this.last_text = this.token_type = '';
        this.Utils = {
            whitespace: "\n\r\t ".split(''),
            single_token: 'br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed,?php,?,?='.split(','),
            extra_liners: 'head,body,/html'.split(','),
            in_array: function(what, arr) {
                for(var i = 0; i < arr.length; i++){
                    if (what === arr[i]) {
                        return true;
                    }
                }
                return false;
            }
        };
        this.get_content = function() {
            var input_char = '', content = [], space = false; //if a space is needed
            while(this.input.charAt(this.pos) !== '<'){
                if (this.pos >= this.input.length) {
                    return content.length ? content.join('') : [
                        '',
                        'TK_EOF'
                    ];
                }
                input_char = this.input.charAt(this.pos);
                this.pos++;
                this.line_char_count++;
                if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
                    if (content.length) {
                        space = true;
                    }
                    this.line_char_count--;
                    continue; //don't want to insert unnecessary space
                } else if (space) {
                    if (this.line_char_count >= this.max_char) {
                        content.push('\n');
                        for(var i = 0; i < this.indent_level; i++){
                            content.push(this.indent_string);
                        }
                        this.line_char_count = 0;
                    } else {
                        content.push(' ');
                        this.line_char_count++;
                    }
                    space = false;
                }
                content.push(input_char); //letter at-a-time (or string) inserted to an array
            }
            return content.length ? content.join('') : '';
        };
        this.get_contents_to = function(name) {
            if (this.pos == this.input.length) {
                return [
                    '',
                    'TK_EOF'
                ];
            }
            var input_char = '';
            var content = '';
            var reg_match = new RegExp('\<\/' + name + '\\s*\>', 'igm');
            reg_match.lastIndex = this.pos;
            var reg_array = reg_match.exec(this.input);
            var end_script = reg_array ? reg_array.index : this.input.length; //absolute end of script
            if (this.pos < end_script) {
                content = this.input.substring(this.pos, end_script);
                this.pos = end_script;
            }
            return content;
        };
        this.record_tag = function(tag) {
            if (this.tags[tag + 'count']) {
                this.tags[tag + 'count']++;
                this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
            } else {
                this.tags[tag + 'count'] = 1;
                this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
            }
            this.tags[tag + this.tags[tag + 'count'] + 'parent'] = this.tags.parent; //set the parent (i.e. in the case of a div this.tags.div1parent)
            this.tags.parent = tag + this.tags[tag + 'count']; //and make this the current parent (i.e. in the case of a div 'div1')
        };
        this.retrieve_tag = function(tag) {
            if (this.tags[tag + 'count']) {
                var temp_parent = this.tags.parent; //check to see if it's a closable tag.
                while(temp_parent){
                    if (tag + this.tags[tag + 'count'] === temp_parent) {
                        break;
                    }
                    temp_parent = this.tags[temp_parent + 'parent']; //otherwise keep on climbing up the DOM Tree
                }
                if (temp_parent) {
                    this.indent_level = this.tags[tag + this.tags[tag + 'count']]; //set the indent_level accordingly
                    this.tags.parent = this.tags[temp_parent + 'parent']; //and set the current parent
                }
                delete this.tags[tag + this.tags[tag + 'count'] + 'parent']; //delete the closed tags parent reference...
                delete this.tags[tag + this.tags[tag + 'count']]; //...and the tag itself
                if (this.tags[tag + 'count'] == 1) {
                    delete this.tags[tag + 'count'];
                } else {
                    this.tags[tag + 'count']--;
                }
            }
        };
        this.get_tag = function() {
            var input_char = '', content = [], space = false, tag_start, tag_end;
            do {
                if (this.pos >= this.input.length) {
                    return content.length ? content.join('') : [
                        '',
                        'TK_EOF'
                    ];
                }
                input_char = this.input.charAt(this.pos);
                this.pos++;
                this.line_char_count++;
                if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
                    space = true;
                    this.line_char_count--;
                    continue;
                }
                if (input_char === "'" || input_char === '"') {
                    if (!content[1] || content[1] !== '!') {
                        input_char += this.get_unformatted(input_char);
                        space = true;
                    }
                }
                if (input_char === '=') {
                    space = false;
                }
                if (content.length && content[content.length - 1] !== '=' && input_char !== '>' && space) {
                    if (this.line_char_count >= this.max_char) {
                        this.print_newline(false, content);
                        this.line_char_count = 0;
                    } else {
                        content.push(' ');
                        this.line_char_count++;
                    }
                    space = false;
                }
                if (input_char === '<') {
                    tag_start = this.pos - 1;
                }
                content.push(input_char); //inserts character at-a-time (or string)
            }while (input_char !== '>')
            var tag_complete = content.join('');
            var tag_index;
            if (tag_complete.indexOf(' ') != -1) {
                tag_index = tag_complete.indexOf(' ');
            } else {
                tag_index = tag_complete.indexOf('>');
            }
            var tag_check = tag_complete.substring(1, tag_index).toLowerCase();
            if (tag_complete.charAt(tag_complete.length - 2) === '/' || this.Utils.in_array(tag_check, this.Utils.single_token)) {
                this.tag_type = 'SINGLE';
            } else if (tag_check === 'script') {
                this.record_tag(tag_check);
                this.tag_type = 'SCRIPT';
            } else if (tag_check === 'style') {
                this.record_tag(tag_check);
                this.tag_type = 'STYLE';
            } else if (this.Utils.in_array(tag_check, unformatted)) {
                var comment = this.get_unformatted('</' + tag_check + '>', tag_complete); //...delegate to get_unformatted function
                content.push(comment);
                // Preserve collapsed whitespace either before or after this tag.
                if (tag_start > 0 && this.Utils.in_array(this.input.charAt(tag_start - 1), this.Utils.whitespace)) {
                    content.splice(0, 0, this.input.charAt(tag_start - 1));
                }
                tag_end = this.pos - 1;
                if (this.Utils.in_array(this.input.charAt(tag_end + 1), this.Utils.whitespace)) {
                    content.push(this.input.charAt(tag_end + 1));
                }
                this.tag_type = 'SINGLE';
            } else if (tag_check.charAt(0) === '!') {
                if (tag_check.indexOf('[if') != -1) {
                    if (tag_complete.indexOf('!IE') != -1) {
                        var comment = this.get_unformatted('-->', tag_complete); //...delegate to get_unformatted
                        content.push(comment);
                    }
                    this.tag_type = 'START';
                } else if (tag_check.indexOf('[endif') != -1) {
                    this.tag_type = 'END';
                    this.unindent();
                } else if (tag_check.indexOf('[cdata[') != -1) {
                    var comment = this.get_unformatted(']]>', tag_complete); //...delegate to get_unformatted function
                    content.push(comment);
                    this.tag_type = 'SINGLE'; //<![CDATA[ comments are treated like single tags
                } else {
                    var comment = this.get_unformatted('-->', tag_complete);
                    content.push(comment);
                    this.tag_type = 'SINGLE';
                }
            } else {
                if (tag_check.charAt(0) === '/') {
                    this.retrieve_tag(tag_check.substring(1)); //remove it and all ancestors
                    this.tag_type = 'END';
                } else {
                    this.record_tag(tag_check); //push it on the tag stack
                    this.tag_type = 'START';
                }
                if (this.Utils.in_array(tag_check, this.Utils.extra_liners)) {
                    this.print_newline(true, this.output);
                }
            }
            return content.join(''); //returns fully formatted tag
        };
        this.get_unformatted = function(delimiter, orig_tag) {
            if (orig_tag && orig_tag.toLowerCase().indexOf(delimiter) != -1) {
                return '';
            }
            var input_char = '';
            var content = '';
            var space = true;
            do {
                if (this.pos >= this.input.length) {
                    return content;
                }
                input_char = this.input.charAt(this.pos);
                this.pos++;
                if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    if (input_char === '\n' || input_char === '\r') {
                        content += '\n';
                        /*  Don't change tab indention for unformatted blocks.  If using code for html editing, this will greatly affect <pre> tags if they are specified in the 'unformatted array'
            for (var i=0; i<this.indent_level; i++) {
              content += this.indent_string;
            }
            space = false; //...and make sure other indentation is erased
            */ this.line_char_count = 0;
                        continue;
                    }
                }
                content += input_char;
                this.line_char_count++;
                space = true;
            }while (content.toLowerCase().indexOf(delimiter) == -1)
            return content;
        };
        this.get_token = function() {
            var token;
            if (this.last_token === 'TK_TAG_SCRIPT' || this.last_token === 'TK_TAG_STYLE') {
                var type = this.last_token.substr(7);
                token = this.get_contents_to(type);
                if (typeof token !== 'string') {
                    return token;
                }
                return [
                    token,
                    'TK_' + type
                ];
            }
            if (this.current_mode === 'CONTENT') {
                token = this.get_content();
                if (typeof token !== 'string') {
                    return token;
                } else {
                    return [
                        token,
                        'TK_CONTENT'
                    ];
                }
            }
            if (this.current_mode === 'TAG') {
                token = this.get_tag();
                if (typeof token !== 'string') {
                    return token;
                } else {
                    var tag_name_type = 'TK_TAG_' + this.tag_type;
                    return [
                        token,
                        tag_name_type
                    ];
                }
            }
        };
        this.get_full_indent = function(level) {
            level = this.indent_level + level || 0;
            if (level < 1) return '';
            return Array(level + 1).join(this.indent_string);
        };
        this.printer = function(js_source, indent_character, indent_size, max_char, brace_style) {
            this.input = js_source || ''; //gets the input for the Parser
            this.output = [];
            this.indent_character = indent_character;
            this.indent_string = '';
            this.indent_size = indent_size;
            this.brace_style = brace_style;
            this.indent_level = 0;
            this.max_char = max_char;
            this.line_char_count = 0; //count to see if max_char was exceeded
            for(var i = 0; i < this.indent_size; i++){
                this.indent_string += this.indent_character;
            }
            this.print_newline = function(ignore, arr) {
                this.line_char_count = 0;
                if (!arr || !arr.length) {
                    return;
                }
                if (!ignore) {
                    while(this.Utils.in_array(arr[arr.length - 1], this.Utils.whitespace)){
                        arr.pop();
                    }
                }
                arr.push('\n');
                for(var i = 0; i < this.indent_level; i++){
                    arr.push(this.indent_string);
                }
            };
            this.print_token = function(text) {
                this.output.push(text);
            };
            this.indent = function() {
                this.indent_level++;
            };
            this.unindent = function() {
                if (this.indent_level > 0) {
                    this.indent_level--;
                }
            };
        };
        return this;
    }
    /*_____________________--------------------_____________________*/ multi_parser = new Parser(); //wrapping functions Parser
    multi_parser.printer(html_source, indent_character, indent_size, max_char, brace_style); //initialize starting values
    while(true){
        var t = multi_parser.get_token();
        multi_parser.token_text = t[0];
        multi_parser.token_type = t[1];
        if (multi_parser.token_type === 'TK_EOF') {
            break;
        }
        switch(multi_parser.token_type){
            case 'TK_TAG_START':
                multi_parser.print_newline(false, multi_parser.output);
                multi_parser.print_token(multi_parser.token_text);
                multi_parser.indent();
                multi_parser.current_mode = 'CONTENT';
                break;
            case 'TK_TAG_STYLE':
            case 'TK_TAG_SCRIPT':
                multi_parser.print_newline(false, multi_parser.output);
                multi_parser.print_token(multi_parser.token_text);
                multi_parser.current_mode = 'CONTENT';
                break;
            case 'TK_TAG_END':
                //Print new line only if the tag has no content and has child
                if (multi_parser.last_token === 'TK_CONTENT' && multi_parser.last_text === '') {
                    var tag_name = multi_parser.token_text.match(/\w+/)[0];
                    var tag_extracted_from_last_output = multi_parser.output[multi_parser.output.length - 1].match(/<\s*(\w+)/);
                    if (tag_extracted_from_last_output === null || tag_extracted_from_last_output[1] !== tag_name) multi_parser.print_newline(true, multi_parser.output);
                }
                multi_parser.print_token(multi_parser.token_text);
                multi_parser.current_mode = 'CONTENT';
                break;
            case 'TK_TAG_SINGLE':
                // Don't add a newline before elements that should remain unformatted.
                var tag_check = multi_parser.token_text.match(/^\s*<([a-z]+)/i);
                if (!tag_check || !multi_parser.Utils.in_array(tag_check[1], unformatted)) {
                    multi_parser.print_newline(false, multi_parser.output);
                }
                multi_parser.print_token(multi_parser.token_text);
                multi_parser.current_mode = 'CONTENT';
                break;
            case 'TK_CONTENT':
                if (multi_parser.token_text !== '') {
                    multi_parser.print_token(multi_parser.token_text);
                }
                multi_parser.current_mode = 'TAG';
                break;
            case 'TK_STYLE':
            case 'TK_SCRIPT':
                if (multi_parser.token_text !== '') {
                    multi_parser.output.push('\n');
                    var text = multi_parser.token_text;
                    if (multi_parser.token_type == 'TK_SCRIPT') {
                        var _beautifier = typeof js_beautify == 'function' && js_beautify;
                    } else if (multi_parser.token_type == 'TK_STYLE') {
                        var _beautifier = typeof css_beautify == 'function' && css_beautify;
                    }
                    if (options.indent_scripts == "keep") {
                        var script_indent_level = 0;
                    } else if (options.indent_scripts == "separate") {
                        var script_indent_level = -multi_parser.indent_level;
                    } else {
                        var script_indent_level = 1;
                    }
                    var indentation = multi_parser.get_full_indent(script_indent_level);
                    if (_beautifier) {
                        // call the Beautifier if avaliable
                        text = _beautifier(text.replace(/^\s*/, indentation), options);
                    } else {
                        // simply indent the string otherwise
                        var white = text.match(/^\s*/)[0];
                        var _level = white.match(/[^\n\r]*$/)[0].split(multi_parser.indent_string).length - 1;
                        var reindent = multi_parser.get_full_indent(script_indent_level - _level);
                        text = text.replace(/^\s*/, indentation).replace(/\r\n|\r|\n/g, '\n' + reindent).replace(/\s*$/, '');
                    }
                    if (text) {
                        multi_parser.print_token(text);
                        multi_parser.print_newline(true, multi_parser.output);
                    }
                }
                multi_parser.current_mode = 'TAG';
                break;
        }
        multi_parser.last_token = multi_parser.token_type;
        multi_parser.last_text = multi_parser.token_text;
    }
    return multi_parser.output.join('');
}
module.exports = {
    prettyPrint: style_html
};
}),
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
]);

//# sourceMappingURL=0ov4__pnpm_13m2ku1._.js.map