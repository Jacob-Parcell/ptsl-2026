(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/utils/alignUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAlignFromPlacement",
    ()=>getAlignFromPlacement,
    "getAlignPopupClassName",
    ()=>getAlignPopupClassName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
;
function isPointsEq(a1, a2, isAlignPoint) {
    if (isAlignPoint) {
        return a1[0] === a2[0];
    }
    return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
    var baseAlign = builtinPlacements[placementStr] || {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
    var points = align.points;
    var placements = Object.keys(builtinPlacements);
    for(var i = 0; i < placements.length; i += 1){
        var placement = placements[i];
        if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
            return "".concat(prefixCls, "-placement-").concat(placement);
        }
    }
    return '';
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/utils/legacyUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMotion",
    ()=>getMotion
]);
function getMotion(_ref) {
    var prefixCls = _ref.prefixCls, motion = _ref.motion, animation = _ref.animation, transitionName = _ref.transitionName;
    if (motion) {
        return motion;
    }
    if (animation) {
        return {
            motionName: "".concat(prefixCls, "-").concat(animation)
        };
    }
    if (transitionName) {
        return {
            motionName: transitionName
        };
    }
    return null;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/Popup/Mask.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$motion$40$2$2e$9$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-motion@2.9.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/utils/legacyUtil.js [app-client] (ecmascript)");
;
;
;
;
;
;
function Mask(props) {
    var prefixCls = props.prefixCls, visible = props.visible, zIndex = props.zIndex, mask = props.mask, maskMotion = props.maskMotion, maskAnimation = props.maskAnimation, maskTransitionName = props.maskTransitionName;
    if (!mask) {
        return null;
    }
    var motion = {};
    if (maskMotion || maskTransitionName || maskAnimation) {
        motion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            motionAppear: true
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMotion"])({
            motion: maskMotion,
            prefixCls: prefixCls,
            transitionName: maskTransitionName,
            animation: maskAnimation
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$motion$40$2$2e$9$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, motion, {
        visible: visible,
        removeOnLeave: true
    }), function(_ref) {
        var className = _ref.className;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            style: {
                zIndex: zIndex
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-mask"), className)
        });
    });
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/Popup/useVisibleStatus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-util/es/hooks/useState.js [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * Popup should follow the steps for each component work correctly:
 * measure - check for the current stretch size
 * align - let component align the position
 * aligned - re-align again in case additional className changed the size
 * afterAlign - choice next step is trigger motion or finished
 * beforeMotion - should reset motion to invisible so that CSSMotion can do normal motion
 * motion - play the motion
 * stable - everything is done
 */ var StatusQueue = [
    'measure',
    'alignPre',
    'align',
    null,
    'motion'
];
const __TURBOPACK__default__export__ = function(visible, doMeasure) {
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), status = _useState2[0], setInternalStatus = _useState2[1];
    var rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    function setStatus(nextStatus) {
        setInternalStatus(nextStatus, true);
    }
    function cancelRaf() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(rafRef.current);
    }
    function goNextStatus(callback) {
        cancelRaf();
        rafRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
            // Only align should be manually trigger
            setStatus(function(prev) {
                switch(status){
                    case 'align':
                        return 'motion';
                    case 'motion':
                        return 'stable';
                    default:
                }
                return prev;
            });
            callback === null || callback === void 0 ? void 0 : callback();
        });
    } // Init status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEffect": function() {
            setStatus('measure');
        }
    }["useEffect"], [
        visible
    ]); // Go next status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEffect": function() {
            switch(status){
                case 'measure':
                    doMeasure();
                    break;
                default:
            }
            if (status) {
                rafRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$asyncToGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().mark(function _callee() {
                    var index, nextStatus;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$regeneratorRuntime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().wrap(function _callee$(_context) {
                        while(1){
                            switch(_context.prev = _context.next){
                                case 0:
                                    index = StatusQueue.indexOf(status);
                                    nextStatus = StatusQueue[index + 1];
                                    if (nextStatus && index !== -1) {
                                        setStatus(nextStatus);
                                    }
                                case 3:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee);
                })));
            }
        }
    }["useEffect"], [
        status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEffect": function() {
            return ({
                "useEffect": function() {
                    cancelRaf();
                }
            })["useEffect"];
        }
    }["useEffect"], []);
    return [
        status,
        goNextStatus
    ];
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/Popup/useStretchStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = function(stretch) {
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        width: 0,
        height: 0
    }), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), targetSize = _React$useState2[0], setTargetSize = _React$useState2[1];
    function measureStretch(element) {
        var tgtWidth = element.offsetWidth, tgtHeight = element.offsetHeight;
        var _element$getBoundingC = element.getBoundingClientRect(), width = _element$getBoundingC.width, height = _element$getBoundingC.height; // Rect is more accurate than offset, use if near
        if (Math.abs(tgtWidth - width) < 1 && Math.abs(tgtHeight - height) < 1) {
            tgtWidth = width;
            tgtHeight = height;
        }
        setTargetSize({
            width: tgtWidth,
            height: tgtHeight
        });
    } // Merge stretch style
    var style = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useMemo[style]": function() {
            var sizeStyle = {};
            if (stretch) {
                var width = targetSize.width, height = targetSize.height; // Stretch with target
                if (stretch.indexOf('height') !== -1 && height) {
                    sizeStyle.height = height;
                } else if (stretch.indexOf('minHeight') !== -1 && height) {
                    sizeStyle.minHeight = height;
                }
                if (stretch.indexOf('width') !== -1 && width) {
                    sizeStyle.width = width;
                } else if (stretch.indexOf('minWidth') !== -1 && width) {
                    sizeStyle.minWidth = width;
                }
            }
            return sizeStyle;
        }
    }["useMemo[style]"], [
        stretch,
        targetSize
    ]);
    return [
        style,
        measureStretch
    ];
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/Popup/PopupInner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$align$40$4$2e$0$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$align$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-align@4.0.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-align/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$motion$40$2$2e$9$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-motion@2.9.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2f$useVisibleStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/Popup/useVisibleStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/utils/legacyUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2f$useStretchStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/Popup/useStretchStyle.js [app-client] (ecmascript)");
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
var PopupInner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    var visible = props.visible, prefixCls = props.prefixCls, className = props.className, style = props.style, children = props.children, zIndex = props.zIndex, stretch = props.stretch, destroyPopupOnHide = props.destroyPopupOnHide, forceRender = props.forceRender, align = props.align, point = props.point, getRootDomNode = props.getRootDomNode, getClassNameFromAlign = props.getClassNameFromAlign, onAlign = props.onAlign, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onMouseDown = props.onMouseDown, onTouchStart = props.onTouchStart, onClick = props.onClick;
    var alignRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), alignedClassName = _useState2[0], setAlignedClassName = _useState2[1]; // ======================= Measure ========================
    var _useStretchStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2f$useStretchStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(stretch), _useStretchStyle2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useStretchStyle, 2), stretchStyle = _useStretchStyle2[0], measureStretchStyle = _useStretchStyle2[1];
    function doMeasure() {
        if (stretch) {
            measureStretchStyle(getRootDomNode());
        }
    } // ======================== Status ========================
    var _useVisibleStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2f$useVisibleStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(visible, doMeasure), _useVisibleStatus2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useVisibleStatus, 2), status = _useVisibleStatus2[0], goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================
    /**
   * `alignedClassName` may modify `source` size,
   * which means one time align may not move to the correct position at once.
   *
   * We will reset `alignTimes` for each status switch to `alignPre`
   * and let `rc-align` to align for multiple times to ensure get final stable place.
   * Currently we mark `alignTimes < 2` repeat align, it will increase if user report for align issue.
   * 
   * Update:
   * In React 18. `rc-align` effect of align may faster than ref called trigger `forceAlign`.
   * We adjust this to `alignTimes < 2`.
   * We need refactor `rc-align` to support mark of `forceAlign` call if this still happen.
   */ var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), alignTimes = _useState4[0], setAlignTimes = _useState4[1];
    var prepareResolveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "PopupInner.useLayoutEffect": function() {
            if (status === 'alignPre') {
                setAlignTimes(0);
            }
        }
    }["PopupInner.useLayoutEffect"], [
        status
    ]); // `target` on `rc-align` can accept as a function to get the bind element or a point.
    // ref: https://www.npmjs.com/package/rc-align
    function getAlignTarget() {
        if (point) {
            return point;
        }
        return getRootDomNode;
    }
    function forceAlign() {
        var _alignRef$current;
        (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 ? void 0 : _alignRef$current.forceAlign();
    }
    function onInternalAlign(popupDomNode, matchAlign) {
        var nextAlignedClassName = getClassNameFromAlign(matchAlign);
        if (alignedClassName !== nextAlignedClassName) {
            setAlignedClassName(nextAlignedClassName);
        } // We will retry multi times to make sure that the element has been align in the right position.
        setAlignTimes(function(val) {
            return val + 1;
        });
        if (status === 'align') {
            onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
        }
    } // Delay to go to next status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "PopupInner.useLayoutEffect": function() {
            if (status === 'align') {
                // Repeat until not more align needed
                if (alignTimes < 3) {
                    forceAlign();
                } else {
                    goNextStatus({
                        "PopupInner.useLayoutEffect": function() {
                            var _prepareResolveRef$cu;
                            (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 ? void 0 : _prepareResolveRef$cu.call(prepareResolveRef);
                        }
                    }["PopupInner.useLayoutEffect"]);
                }
            }
        }
    }["PopupInner.useLayoutEffect"], [
        alignTimes
    ]); // ======================== Motion ========================
    var motion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMotion"])(props));
    [
        'onAppearEnd',
        'onEnterEnd',
        'onLeaveEnd'
    ].forEach(function(eventName) {
        var originHandler = motion[eventName];
        motion[eventName] = function(element, event) {
            goNextStatus();
            return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
        };
    });
    function onShowPrepare() {
        return new Promise(function(resolve) {
            prepareResolveRef.current = resolve;
        });
    } // Go to stable directly when motion not provided
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PopupInner.useEffect": function() {
            if (!motion.motionName && status === 'motion') {
                goNextStatus();
            }
        }
    }["PopupInner.useEffect"], [
        motion.motionName,
        status
    ]); // ========================= Refs =========================
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "PopupInner.useImperativeHandle": function() {
            return {
                forceAlign: forceAlign,
                getElement: function getElement() {
                    return elementRef.current;
                }
            };
        }
    }["PopupInner.useImperativeHandle"]); // ======================== Render ========================
    var mergedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, stretchStyle), {}, {
        zIndex: zIndex,
        opacity: status === 'motion' || status === 'stable' || !visible ? undefined : 0,
        // Cannot interact with disappearing elements
        // https://github.com/ant-design/ant-design/issues/35051#issuecomment-1101340714
        pointerEvents: !visible && status !== 'stable' ? 'none' : undefined
    }, style); // Align status
    var alignDisabled = true;
    if (align !== null && align !== void 0 && align.points && (status === 'align' || status === 'stable')) {
        alignDisabled = false;
    }
    var childNode = children; // Wrapper when multiple children
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: "".concat(prefixCls, "-content")
        }, children);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$motion$40$2$2e$9$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        visible: visible,
        ref: elementRef,
        leavedClassName: "".concat(prefixCls, "-hidden")
    }, motion, {
        onAppearPrepare: onShowPrepare,
        onEnterPrepare: onShowPrepare,
        removeOnLeave: destroyPopupOnHide,
        forceRender: forceRender
    }), function(_ref, motionRef) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        var mergedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, className, alignedClassName, motionClassName);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$align$40$4$2e$0$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$align$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            target: getAlignTarget(),
            key: "popup",
            ref: alignRef,
            monitorWindowResize: true,
            disabled: alignDisabled,
            align: align,
            onAlign: onInternalAlign
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: motionRef,
            className: mergedClassName,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onMouseDownCapture: onMouseDown,
            onTouchStartCapture: onTouchStart,
            onClick: onClick,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, motionStyle), mergedStyle)
        }, childNode));
    });
});
PopupInner.displayName = 'PopupInner';
const __TURBOPACK__default__export__ = PopupInner;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/Popup/MobilePopupInner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$motion$40$2$2e$9$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-motion@2.9.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
;
;
;
;
;
var MobilePopupInner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    var prefixCls = props.prefixCls, visible = props.visible, zIndex = props.zIndex, children = props.children, _props$mobile = props.mobile;
    _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
    var popupClassName = _props$mobile.popupClassName, popupStyle = _props$mobile.popupStyle, _props$mobile$popupMo = _props$mobile.popupMotion, popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo, popupRender = _props$mobile.popupRender, onClick = props.onClick;
    var elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](); // ========================= Refs =========================
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "MobilePopupInner.useImperativeHandle": function() {
            return {
                forceAlign: function forceAlign() {},
                getElement: function getElement() {
                    return elementRef.current;
                }
            };
        }
    }["MobilePopupInner.useImperativeHandle"]); // ======================== Render ========================
    var mergedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        zIndex: zIndex
    }, popupStyle);
    var childNode = children; // Wrapper when multiple children
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: "".concat(prefixCls, "-content")
        }, children);
    } // Mobile support additional render
    if (popupRender) {
        childNode = popupRender(childNode);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$motion$40$2$2e$9$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        visible: visible,
        ref: elementRef,
        removeOnLeave: true
    }, popupMotion), function(_ref, motionRef) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        var mergedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, popupClassName, motionClassName);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: motionRef,
            className: mergedClassName,
            onClick: onClick,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, motionStyle), mergedStyle)
        }, childNode);
    });
});
MobilePopupInner.displayName = 'MobilePopupInner';
const __TURBOPACK__default__export__ = MobilePopupInner;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/Popup/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-util/es/isMobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2f$Mask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/Popup/Mask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2f$PopupInner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/Popup/PopupInner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2f$MobilePopupInner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/Popup/MobilePopupInner.js [app-client] (ecmascript)");
;
;
;
;
var _excluded = [
    "visible",
    "mobile"
];
;
;
;
;
;
;
var Popup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(_ref, ref) {
    var visible = _ref.visible, mobile = _ref.mobile, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(visible), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), innerVisible = _useState2[0], serInnerVisible = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), inMobile = _useState4[0], setInMobile = _useState4[1];
    var cloneProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props), {}, {
        visible: innerVisible
    }); // We check mobile in visible changed here.
    // And this also delay set `innerVisible` to avoid popup component render flash
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Popup.useEffect": function() {
            serInnerVisible(visible);
            if (visible && mobile) {
                setInMobile((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])());
            }
        }
    }["Popup.useEffect"], [
        visible,
        mobile
    ]);
    var popupNode = inMobile ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2f$MobilePopupInner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, cloneProps, {
        mobile: mobile,
        ref: ref
    })) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2f$PopupInner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, cloneProps, {
        ref: ref
    })); // We can use fragment directly but this may failed some selector usage. Keep as origin logic
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2f$Mask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], cloneProps), popupNode);
});
Popup.displayName = 'Popup';
const __TURBOPACK__default__export__ = Popup;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var TriggerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const __TURBOPACK__default__export__ = TriggerContext;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateTrigger",
    ()=>generateTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/createSuper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-util/es/Dom/contains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-util/es/Dom/findDOMNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$addEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-util/es/Dom/addEventListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-util/es/Portal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2f$alignUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/utils/alignUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/Popup/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/rc-trigger@5.3.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/rc-trigger/es/context.js [app-client] (ecmascript)");
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
function noop() {}
function returnEmptyString() {
    return '';
}
function returnDocument(element) {
    if (element) {
        return element.ownerDocument;
    }
    return window.document;
}
var ALL_HANDLERS = [
    'onClick',
    'onMouseDown',
    'onTouchStart',
    'onMouseEnter',
    'onMouseLeave',
    'onFocus',
    'onBlur',
    'onContextMenu'
];
function generateTrigger(PortalComponent) {
    var Trigger = /*#__PURE__*/ function(_React$Component) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Trigger, _React$Component);
        var _super = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Trigger);
        // ensure `getContainer` will be called only once
        function Trigger(props) {
            var _this;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, Trigger);
            _this = _super.call(this, props);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "popupRef", /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"]());
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "triggerRef", /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"]());
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "portalContainer", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "attachId", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "clickOutsideHandler", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "touchOutsideHandler", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "contextMenuOutsideHandler1", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "contextMenuOutsideHandler2", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "mouseDownTimeout", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "focusTime", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "preClickTime", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "preTouchTime", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "delayTimer", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "hasPopupMouseDown", void 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onMouseEnter", function(e) {
                var mouseEnterDelay = _this.props.mouseEnterDelay;
                _this.fireEvents('onMouseEnter', e);
                _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onMouseMove", function(e) {
                _this.fireEvents('onMouseMove', e);
                _this.setPoint(e);
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onMouseLeave", function(e) {
                _this.fireEvents('onMouseLeave', e);
                _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onPopupMouseEnter", function() {
                _this.clearDelayTimer();
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onPopupMouseLeave", function(e) {
                var _this$popupRef$curren;
                // https://github.com/react-component/trigger/pull/13
                // react bug?
                if (e.relatedTarget && !e.relatedTarget.setTimeout && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e.relatedTarget)) {
                    return;
                }
                _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onFocus", function(e) {
                _this.fireEvents('onFocus', e); // incase focusin and focusout
                _this.clearDelayTimer();
                if (_this.isFocusToShow()) {
                    _this.focusTime = Date.now();
                    _this.delaySetPopupVisible(true, _this.props.focusDelay);
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onMouseDown", function(e) {
                _this.fireEvents('onMouseDown', e);
                _this.preClickTime = Date.now();
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onTouchStart", function(e) {
                _this.fireEvents('onTouchStart', e);
                _this.preTouchTime = Date.now();
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onBlur", function(e) {
                _this.fireEvents('onBlur', e);
                _this.clearDelayTimer();
                if (_this.isBlurToHide()) {
                    _this.delaySetPopupVisible(false, _this.props.blurDelay);
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onContextMenu", function(e) {
                e.preventDefault();
                _this.fireEvents('onContextMenu', e);
                _this.setPopupVisible(true, e);
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onContextMenuClose", function() {
                if (_this.isContextMenuToShow()) {
                    _this.close();
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onClick", function(event) {
                _this.fireEvents('onClick', event); // focus will trigger click
                if (_this.focusTime) {
                    var preTime;
                    if (_this.preClickTime && _this.preTouchTime) {
                        preTime = Math.min(_this.preClickTime, _this.preTouchTime);
                    } else if (_this.preClickTime) {
                        preTime = _this.preClickTime;
                    } else if (_this.preTouchTime) {
                        preTime = _this.preTouchTime;
                    }
                    if (Math.abs(preTime - _this.focusTime) < 20) {
                        return;
                    }
                    _this.focusTime = 0;
                }
                _this.preClickTime = 0;
                _this.preTouchTime = 0; // Only prevent default when all the action is click.
                // https://github.com/ant-design/ant-design/issues/17043
                // https://github.com/ant-design/ant-design/issues/17291
                if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
                    event.preventDefault();
                }
                var nextVisible = !_this.state.popupVisible;
                if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
                    _this.setPopupVisible(!_this.state.popupVisible, event);
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onPopupMouseDown", function() {
                _this.hasPopupMouseDown = true;
                clearTimeout(_this.mouseDownTimeout);
                _this.mouseDownTimeout = window.setTimeout(function() {
                    _this.hasPopupMouseDown = false;
                }, 0);
                if (_this.context) {
                    var _this$context;
                    (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "onDocumentClick", function(event) {
                if (_this.props.mask && !_this.props.maskClosable) {
                    return;
                }
                var target = event.target;
                var root = _this.getRootDomNode();
                var popupNode = _this.getPopupDomNode();
                if (// https://github.com/ant-design/ant-design/issues/29853
                (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(root, target) || _this.isContextMenuOnly()) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popupNode, target) && !_this.hasPopupMouseDown) {
                    _this.close();
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "getRootDomNode", function() {
                var getTriggerDOMNode = _this.props.getTriggerDOMNode;
                if (getTriggerDOMNode) {
                    return getTriggerDOMNode(_this.triggerRef.current);
                }
                try {
                    var domNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this.triggerRef.current);
                    if (domNode) {
                        return domNode;
                    }
                } catch (err) {}
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this));
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "getPopupClassNameFromAlign", function(align) {
                var className = [];
                var _this$props = _this.props, popupPlacement = _this$props.popupPlacement, builtinPlacements = _this$props.builtinPlacements, prefixCls = _this$props.prefixCls, alignPoint = _this$props.alignPoint, getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;
                if (popupPlacement && builtinPlacements) {
                    className.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2f$alignUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignPopupClassName"])(builtinPlacements, prefixCls, align, alignPoint));
                }
                if (getPopupClassNameFromAlign) {
                    className.push(getPopupClassNameFromAlign(align));
                }
                return className.join(' ');
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "getComponent", function() {
                var _this$props2 = _this.props, prefixCls = _this$props2.prefixCls, destroyPopupOnHide = _this$props2.destroyPopupOnHide, popupClassName = _this$props2.popupClassName, onPopupAlign = _this$props2.onPopupAlign, popupMotion = _this$props2.popupMotion, popupAnimation = _this$props2.popupAnimation, popupTransitionName = _this$props2.popupTransitionName, popupStyle = _this$props2.popupStyle, mask = _this$props2.mask, maskAnimation = _this$props2.maskAnimation, maskTransitionName = _this$props2.maskTransitionName, maskMotion = _this$props2.maskMotion, zIndex = _this$props2.zIndex, popup = _this$props2.popup, stretch = _this$props2.stretch, alignPoint = _this$props2.alignPoint, mobile = _this$props2.mobile, forceRender = _this$props2.forceRender, onPopupClick = _this$props2.onPopupClick;
                var _this$state = _this.state, popupVisible = _this$state.popupVisible, point = _this$state.point;
                var align = _this.getPopupAlign();
                var mouseProps = {};
                if (_this.isMouseEnterToShow()) {
                    mouseProps.onMouseEnter = _this.onPopupMouseEnter;
                }
                if (_this.isMouseLeaveToHide()) {
                    mouseProps.onMouseLeave = _this.onPopupMouseLeave;
                }
                mouseProps.onMouseDown = _this.onPopupMouseDown;
                mouseProps.onTouchStart = _this.onPopupMouseDown;
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    prefixCls: prefixCls,
                    destroyPopupOnHide: destroyPopupOnHide,
                    visible: popupVisible,
                    point: alignPoint && point,
                    className: popupClassName,
                    align: align,
                    onAlign: onPopupAlign,
                    animation: popupAnimation,
                    getClassNameFromAlign: _this.getPopupClassNameFromAlign
                }, mouseProps, {
                    stretch: stretch,
                    getRootDomNode: _this.getRootDomNode,
                    style: popupStyle,
                    mask: mask,
                    zIndex: zIndex,
                    transitionName: popupTransitionName,
                    maskAnimation: maskAnimation,
                    maskTransitionName: maskTransitionName,
                    maskMotion: maskMotion,
                    ref: _this.popupRef,
                    motion: popupMotion,
                    mobile: mobile,
                    forceRender: forceRender,
                    onClick: onPopupClick
                }), typeof popup === 'function' ? popup() : popup);
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "attachParent", function(popupContainer) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(_this.attachId);
                var _this$props3 = _this.props, getPopupContainer = _this$props3.getPopupContainer, getDocument = _this$props3.getDocument;
                var domNode = _this.getRootDomNode();
                var mountNode;
                if (!getPopupContainer) {
                    mountNode = getDocument(_this.getRootDomNode()).body;
                } else if (domNode || getPopupContainer.length === 0) {
                    // Compatible for legacy getPopupContainer with domNode argument.
                    // If no need `domNode` argument, will call directly.
                    // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
                    mountNode = getPopupContainer(domNode);
                }
                if (mountNode) {
                    mountNode.appendChild(popupContainer);
                } else {
                    // Retry after frame render in case parent not ready
                    _this.attachId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
                        _this.attachParent(popupContainer);
                    });
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "getContainer", function() {
                if (!_this.portalContainer) {
                    // In React.StrictMode component will call render multiple time in first mount.
                    // When you want to refactor with FC, useRef will also init multiple time and
                    // point to different useRef instance which will create multiple element
                    // (This multiple render will not trigger effect so you can not clean up this
                    // in effect). But this is safe with class component since it always point to same class instance.
                    var getDocument = _this.props.getDocument;
                    var popupContainer = getDocument(_this.getRootDomNode()).createElement('div'); // Make sure default popup container will never cause scrollbar appearing
                    // https://github.com/react-component/trigger/issues/41
                    popupContainer.style.position = 'absolute';
                    popupContainer.style.top = '0';
                    popupContainer.style.left = '0';
                    popupContainer.style.width = '100%';
                    _this.portalContainer = popupContainer;
                }
                _this.attachParent(_this.portalContainer);
                return _this.portalContainer;
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "setPoint", function(point) {
                var alignPoint = _this.props.alignPoint;
                if (!alignPoint || !point) return;
                _this.setState({
                    point: {
                        pageX: point.pageX,
                        pageY: point.pageY
                    }
                });
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "handlePortalUpdate", function() {
                if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
                    _this.props.afterPopupVisibleChange(_this.state.popupVisible);
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this), "triggerContextValue", {
                onPopupMouseDown: _this.onPopupMouseDown
            });
            var _popupVisible;
            if ('popupVisible' in props) {
                _popupVisible = !!props.popupVisible;
            } else {
                _popupVisible = !!props.defaultPopupVisible;
            }
            _this.state = {
                prevPopupVisible: _popupVisible,
                popupVisible: _popupVisible
            };
            ALL_HANDLERS.forEach(function(h) {
                _this["fire".concat(h)] = function(e) {
                    _this.fireEvents(h, e);
                };
            });
            return _this;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Trigger, [
            {
                key: "componentDidMount",
                value: function componentDidMount() {
                    this.componentDidUpdate();
                }
            },
            {
                key: "componentDidUpdate",
                value: function componentDidUpdate() {
                    var props = this.props;
                    var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
                    // https://github.com/ant-design/ant-design/issues/5804
                    // https://github.com/react-component/calendar/issues/250
                    // https://github.com/react-component/trigger/issues/50
                    if (state.popupVisible) {
                        var currentDocument;
                        if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
                            currentDocument = props.getDocument(this.getRootDomNode());
                            this.clickOutsideHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$addEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentDocument, 'mousedown', this.onDocumentClick);
                        } // always hide on mobile
                        if (!this.touchOutsideHandler) {
                            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
                            this.touchOutsideHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$addEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentDocument, 'touchstart', this.onDocumentClick);
                        } // close popup when trigger type contains 'onContextMenu' and document is scrolling.
                        if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
                            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
                            this.contextMenuOutsideHandler1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$addEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentDocument, 'scroll', this.onContextMenuClose);
                        } // close popup when trigger type contains 'onContextMenu' and window is blur.
                        if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
                            this.contextMenuOutsideHandler2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$addEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(window, 'blur', this.onContextMenuClose);
                        }
                        return;
                    }
                    this.clearOutsideHandler();
                }
            },
            {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    this.clearDelayTimer();
                    this.clearOutsideHandler();
                    clearTimeout(this.mouseDownTimeout);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(this.attachId);
                }
            },
            {
                key: "getPopupDomNode",
                value: function getPopupDomNode() {
                    var _this$popupRef$curren2;
                    // for test
                    return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
                }
            },
            {
                key: "getPopupAlign",
                value: function getPopupAlign() {
                    var props = this.props;
                    var popupPlacement = props.popupPlacement, popupAlign = props.popupAlign, builtinPlacements = props.builtinPlacements;
                    if (popupPlacement && builtinPlacements) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2f$alignUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignFromPlacement"])(builtinPlacements, popupPlacement, popupAlign);
                    }
                    return popupAlign;
                }
            },
            {
                key: "setPopupVisible",
                value: /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for `pointAlign`
       */ function setPopupVisible(popupVisible, event) {
                    var alignPoint = this.props.alignPoint;
                    var prevPopupVisible = this.state.popupVisible;
                    this.clearDelayTimer();
                    if (prevPopupVisible !== popupVisible) {
                        if (!('popupVisible' in this.props)) {
                            this.setState({
                                popupVisible: popupVisible,
                                prevPopupVisible: prevPopupVisible
                            });
                        }
                        this.props.onPopupVisibleChange(popupVisible);
                    } // Always record the point position since mouseEnterDelay will delay the show
                    if (alignPoint && event && popupVisible) {
                        this.setPoint(event);
                    }
                }
            },
            {
                key: "delaySetPopupVisible",
                value: function delaySetPopupVisible(visible, delayS, event) {
                    var _this2 = this;
                    var delay = delayS * 1000;
                    this.clearDelayTimer();
                    if (delay) {
                        var point = event ? {
                            pageX: event.pageX,
                            pageY: event.pageY
                        } : null;
                        this.delayTimer = window.setTimeout(function() {
                            _this2.setPopupVisible(visible, point);
                            _this2.clearDelayTimer();
                        }, delay);
                    } else {
                        this.setPopupVisible(visible, event);
                    }
                }
            },
            {
                key: "clearDelayTimer",
                value: function clearDelayTimer() {
                    if (this.delayTimer) {
                        clearTimeout(this.delayTimer);
                        this.delayTimer = null;
                    }
                }
            },
            {
                key: "clearOutsideHandler",
                value: function clearOutsideHandler() {
                    if (this.clickOutsideHandler) {
                        this.clickOutsideHandler.remove();
                        this.clickOutsideHandler = null;
                    }
                    if (this.contextMenuOutsideHandler1) {
                        this.contextMenuOutsideHandler1.remove();
                        this.contextMenuOutsideHandler1 = null;
                    }
                    if (this.contextMenuOutsideHandler2) {
                        this.contextMenuOutsideHandler2.remove();
                        this.contextMenuOutsideHandler2 = null;
                    }
                    if (this.touchOutsideHandler) {
                        this.touchOutsideHandler.remove();
                        this.touchOutsideHandler = null;
                    }
                }
            },
            {
                key: "createTwoChains",
                value: function createTwoChains(event) {
                    var childPros = this.props.children.props;
                    var props = this.props;
                    if (childPros[event] && props[event]) {
                        return this["fire".concat(event)];
                    }
                    return childPros[event] || props[event];
                }
            },
            {
                key: "isClickToShow",
                value: function isClickToShow() {
                    var _this$props4 = this.props, action = _this$props4.action, showAction = _this$props4.showAction;
                    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
                }
            },
            {
                key: "isContextMenuOnly",
                value: function isContextMenuOnly() {
                    var action = this.props.action;
                    return action === 'contextMenu' || action.length === 1 && action[0] === 'contextMenu';
                }
            },
            {
                key: "isContextMenuToShow",
                value: function isContextMenuToShow() {
                    var _this$props5 = this.props, action = _this$props5.action, showAction = _this$props5.showAction;
                    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
                }
            },
            {
                key: "isClickToHide",
                value: function isClickToHide() {
                    var _this$props6 = this.props, action = _this$props6.action, hideAction = _this$props6.hideAction;
                    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
                }
            },
            {
                key: "isMouseEnterToShow",
                value: function isMouseEnterToShow() {
                    var _this$props7 = this.props, action = _this$props7.action, showAction = _this$props7.showAction;
                    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
                }
            },
            {
                key: "isMouseLeaveToHide",
                value: function isMouseLeaveToHide() {
                    var _this$props8 = this.props, action = _this$props8.action, hideAction = _this$props8.hideAction;
                    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
                }
            },
            {
                key: "isFocusToShow",
                value: function isFocusToShow() {
                    var _this$props9 = this.props, action = _this$props9.action, showAction = _this$props9.showAction;
                    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
                }
            },
            {
                key: "isBlurToHide",
                value: function isBlurToHide() {
                    var _this$props10 = this.props, action = _this$props10.action, hideAction = _this$props10.hideAction;
                    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
                }
            },
            {
                key: "forcePopupAlign",
                value: function forcePopupAlign() {
                    if (this.state.popupVisible) {
                        var _this$popupRef$curren3;
                        (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 ? void 0 : _this$popupRef$curren3.forceAlign();
                    }
                }
            },
            {
                key: "fireEvents",
                value: function fireEvents(type, e) {
                    var childCallback = this.props.children.props[type];
                    if (childCallback) {
                        childCallback(e);
                    }
                    var callback = this.props[type];
                    if (callback) {
                        callback(e);
                    }
                }
            },
            {
                key: "close",
                value: function close() {
                    this.setPopupVisible(false);
                }
            },
            {
                key: "render",
                value: function render() {
                    var popupVisible = this.state.popupVisible;
                    var _this$props11 = this.props, children = _this$props11.children, forceRender = _this$props11.forceRender, alignPoint = _this$props11.alignPoint, className = _this$props11.className, autoDestroy = _this$props11.autoDestroy;
                    var child = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children);
                    var newChildProps = {
                        key: 'trigger'
                    }; // ============================== Visible Handlers ==============================
                    // >>> ContextMenu
                    if (this.isContextMenuToShow()) {
                        newChildProps.onContextMenu = this.onContextMenu;
                    } else {
                        newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
                    } // >>> Click
                    if (this.isClickToHide() || this.isClickToShow()) {
                        newChildProps.onClick = this.onClick;
                        newChildProps.onMouseDown = this.onMouseDown;
                        newChildProps.onTouchStart = this.onTouchStart;
                    } else {
                        newChildProps.onClick = this.createTwoChains('onClick');
                        newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
                        newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
                    } // >>> Hover(enter)
                    if (this.isMouseEnterToShow()) {
                        newChildProps.onMouseEnter = this.onMouseEnter; // Point align
                        if (alignPoint) {
                            newChildProps.onMouseMove = this.onMouseMove;
                        }
                    } else {
                        newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
                    } // >>> Hover(leave)
                    if (this.isMouseLeaveToHide()) {
                        newChildProps.onMouseLeave = this.onMouseLeave;
                    } else {
                        newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
                    } // >>> Focus
                    if (this.isFocusToShow() || this.isBlurToHide()) {
                        newChildProps.onFocus = this.onFocus;
                        newChildProps.onBlur = this.onBlur;
                    } else {
                        newChildProps.onFocus = this.createTwoChains('onFocus');
                        newChildProps.onBlur = this.createTwoChains('onBlur');
                    } // =================================== Render ===================================
                    var childrenClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(child && child.props && child.props.className, className);
                    if (childrenClassName) {
                        newChildProps.className = childrenClassName;
                    }
                    var cloneProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, newChildProps);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportRef"])(child)) {
                        cloneProps.ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(this.triggerRef, child.ref);
                    }
                    var trigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](child, cloneProps);
                    var portal; // prevent unmounting after it's rendered
                    if (popupVisible || this.popupRef.current || forceRender) {
                        portal = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](PortalComponent, {
                            key: "portal",
                            getContainer: this.getContainer,
                            didUpdate: this.handlePortalUpdate
                        }, this.getComponent());
                    }
                    if (!popupVisible && autoDestroy) {
                        portal = null;
                    }
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
                        value: this.triggerContextValue
                    }, trigger, portal);
                }
            }
        ], [
            {
                key: "getDerivedStateFromProps",
                value: function getDerivedStateFromProps(_ref, prevState) {
                    var popupVisible = _ref.popupVisible;
                    var newState = {};
                    if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
                        newState.popupVisible = popupVisible;
                        newState.prevPopupVisible = prevState.popupVisible;
                    }
                    return newState;
                }
            }
        ]);
        return Trigger;
    }(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Trigger, "contextType", __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$trigger$40$5$2e$3$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Trigger, "defaultProps", {
        prefixCls: 'rc-trigger-popup',
        getPopupClassNameFromAlign: returnEmptyString,
        getDocument: returnDocument,
        onPopupVisibleChange: noop,
        afterPopupVisibleChange: noop,
        onPopupAlign: noop,
        popupClassName: '',
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0.1,
        focusDelay: 0,
        blurDelay: 0.15,
        popupStyle: {},
        destroyPopupOnHide: false,
        popupAlign: {},
        defaultPopupVisible: false,
        mask: false,
        maskClosable: true,
        action: [],
        showAction: [],
        hideAction: [],
        autoDestroy: false
    });
    return Trigger;
}
const __TURBOPACK__default__export__ = generateTrigger(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$rc$2d$util$2f$es$2f$Portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}),
]);

//# sourceMappingURL=0jnm_rc-trigger_es_0p~s50v._.js.map