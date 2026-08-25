(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/figure/consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "captionDefaultAttributes",
    ()=>captionDefaultAttributes
]);
const captionDefaultAttributes = {
    styleDefaults: {
        paddingTop: "16px",
        paddingBottom: "16px"
    },
    textStyle: {
        textAlignment: "CENTER",
        lineHeight: 1.5
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/is-node-selected.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeSelected",
    ()=>isNodeSelected
]);
const isNodeSelected = (state, nodeId)=>{
    let selected = false;
    state.doc.nodesBetween(state.selection.from, state.selection.to, (node)=>{
        if (node.attrs.id === nodeId) {
            selected = true;
        }
        return !selected;
    });
    return selected;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/line-spacing-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MIN_LINE_HEIGHT",
    ()=>MIN_LINE_HEIGHT,
    "normalizeLineHeight",
    ()=>normalizeLineHeight
]);
const MIN_LINE_HEIGHT = 0.8;
const normalizeLineHeight = (lineHeight)=>{
    let unit = "";
    if (typeof lineHeight === "string" && lineHeight.match(/^\d+(\.\d+)?$/) || typeof lineHeight === "number") {
        unit = "em";
    }
    return `max(${MIN_LINE_HEIGHT}em, ${lineHeight}${unit})`;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/split-words.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "splitWords",
    ()=>splitWords
]);
function splitWords(str) {
    return str.match(/[A-Z]{2,}(?=[A-Z][a-z]|\b|[^a-zA-Z0-9])|[A-Z]?[a-z]+[0-9]*|[A-Z]+|[0-9]+/g) ?? [];
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/to-camel-case.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$split$2d$words$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/split-words.js [app-client] (ecmascript)");
;
function toCamelCase(str) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$split$2d$words$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitWords"])(str ?? "").map((word, i)=>i === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/node-styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContainerData",
    ()=>getContainerData,
    "getNodeWidth",
    ()=>getNodeWidth,
    "getPluginContainerClassNames",
    ()=>getPluginContainerClassNames,
    "getPluginFocusClassNames",
    ()=>getPluginFocusClassNames,
    "getPluginPlacementClassNames",
    ()=>getPluginPlacementClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/common.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$statics$2f$styles$2f$general$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/statics/styles/general-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$statics$2f$styles$2f$general$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/editor-common/statics/styles/general-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$shape$2f$utils$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-shape/utils/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$to$2d$camel$2d$case$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/to-camel-case.js [app-client] (ecmascript)");
;
;
;
;
;
;
const stylesWithRTL = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$statics$2f$styles$2f$general$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$statics$2f$styles$2f$general$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const getAlignmentClassName = (alignment)=>{
    if (!alignment || alignment === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginContainerData_Alignment"].UNRECOGNIZED) {
        return "";
    }
    const alignmentLower = alignment.toLowerCase();
    return stylesWithRTL[`align${alignmentLower.charAt(0).toUpperCase() + alignmentLower.slice(1)}`];
};
const getSizeClassName = (size)=>{
    if (!size || size === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginContainerData_Width_Type"].UNRECOGNIZED) {
        return "";
    }
    const camelSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$to$2d$camel$2d$case$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCamelCase"])(size);
    return stylesWithRTL[`size${camelSize.charAt(0).toUpperCase() + camelSize.slice(1)}`];
};
const getTextWrapClassName = (textWrap)=>textWrap === false ? stylesWithRTL.textWrapNowrap : "";
const isCustomWidthDisabled = (node, isMobile)=>{
    if (node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].IMAGE) {
        const componentData = node.attrs;
        return !!(isMobile && componentData?.image?.width && Number(componentData?.containerData?.width?.custom || 0) > 150);
    }
    return false;
};
const getOriginalWidth = (node)=>{
    switch(node.type.name){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].IMAGE:
            return node.attrs?.image?.width;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GIF:
            return node.attrs?.width;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SHAPE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$shape$2f$utils$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORIGINAL_SHAPE_WIDTH"];
        default:
            return void 0;
    }
};
const getPluginContainerClassNames = (isMobile)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(stylesWithRTL.pluginContainer, isMobile && stylesWithRTL.pluginContainerMobile);
const getPluginPlacementClassNames = (node, isTextWrapEnabled)=>{
    const containerData = node.attrs?.containerData;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(getAlignmentClassName(containerData?.alignment), getSizeClassName(containerData?.width?.size), getTextWrapClassName(isTextWrapEnabled && containerData?.textWrap));
};
const getPluginFocusClassNames = (isFocused)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(stylesWithRTL.isFocusable, isFocused && stylesWithRTL.hasFocus, !isFocused && stylesWithRTL.hideTextSelection);
const getNodeWidth = (node, isMobile)=>{
    const containerData = node.attrs?.containerData;
    const disableCustomWidth = isCustomWidthDisabled(node, isMobile);
    const customWidth = !disableCustomWidth && containerData?.width?.custom;
    const originalWidth = (containerData?.width?.size === "ORIGINAL" || disableCustomWidth) && getOriginalWidth(node);
    return customWidth || originalWidth;
};
const getContainerData = (node)=>{
    const data = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$to$2d$camel$2d$case$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCamelCase"])(node.type)}Data`;
    return node?.[data]?.containerData;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/figure/activate-caption.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activateCaption",
    ()=>activateCaption
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$get$2d$text$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/get-text-direction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$editor$2f$helpers$2f$find$2d$node$2d$by$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap-editor/helpers/find-node-by-id.js [app-client] (ecmascript)");
;
;
;
const activateCaption = (view, captionId)=>{
    const captionNodePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$editor$2f$helpers$2f$find$2d$node$2d$by$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findNodeById"])(view.state.tr, captionId)[0];
    if (!captionNodePos) {
        return false;
    }
    const { tr } = view.state;
    tr.setNodeAttribute(captionNodePos.pos, "showEmpty", true);
    view.dispatch(tr);
    setTimeout(()=>{
        const captionNode = captionNodePos.node;
        const hasContent = captionNode.content.size > 0;
        let selectionPos = captionNodePos.pos + 1;
        if (hasContent) {
            const captionText = captionNode.textContent;
            const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$get$2d$text$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextDirection"])(captionText);
            selectionPos = direction === "rtl" ? selectionPos : selectionPos + captionNode.content.size;
        }
        const { tr: tr2 } = view.state;
        tr2.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(tr2.doc, selectionPos, selectionPos));
        view.dispatch(tr2);
        view.focus();
    }, 0);
    return true;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/figure/add-caption-button-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>add_caption_button_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "beb6a339";
const injectCss = ()=>{
    var css = `@charset "UTF-8";.cyxYt,.glob_fontElementMap{font-family:var(--ricos-font-family,unset)}._5PxA2{background-color:#fff;border-radius:var(--ricos-internal-toolbar-floating-border-radius,8px);bottom:12px;box-shadow:0 0 6px 0 rgba(0,6,36,.1),0 2px 4px 0 rgba(0,6,36,.05);box-sizing:border-box;left:50%;padding:3px;pointer-events:none;position:absolute;transform:translateX(-50%);user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;z-index:1000}._5PxA2,.rss4w{align-items:center;display:flex;font-family:var(--ricos-settings-text-font-family,Madefor,"Helvetica Neue",Helvetica,Arial,メイリオ,meiryo,"ヒラギノ角ゴ pro w3","hiragino kaku gothic pro",sans-serif);font-size:14px}.rss4w{background:transparent;border:transparent;border-radius:var(--ricos-internal-toolbar-button-border-radius,6px);color:var(--ricos-internal-toolbar-button-text-color,#000);cursor:pointer;gap:3px;height:30px;justify-content:center;margin:0;min-width:30px;min-width:max-content;padding-inline-end:6px;padding-inline-start:6px;pointer-events:auto}@media (hover:hover){.rss4w:hover:not([disabled]){background-color:var(--ricos-internal-toolbar-button-background-color-hover,#e7f0ff);color:var(--ricos-internal-toolbar-button-text-color-hover,#116dff)}}.rss4w.AOKi7{background-color:var(--ricos-internal-toolbar-button-background-color-active,#d6e6fe);color:var(--ricos-settings-text-color,var(--ricos-action-color-fallback,#116dff));fill:var(--ricos-settings-text-color,var(--ricos-action-color-fallback,#116dff))}@supports (color:rgb(from #000 r g b/0.1)){.rss4w.AOKi7{color:var(--ricos-settings-text-color,rgb(from var(--ricos-action-color,#116dff) min(r,150) min(g,150) min(b,150)));fill:var(--ricos-settings-text-color,rgb(from var(--ricos-action-color,#116dff) min(r,150) min(g,150) min(b,150)))}}.rss4w.AOKi7 svg{fill:var(--ricos-settings-icons-color,currentColor);color:var(--ricos-settings-icons-color,currentColor)}.rss4w.mr--o{cursor:default;opacity:.4;pointer-events:none}.rss4w._36vju{height:36px;min-width:36px}.rss4w.-TJDX{padding-inline-end:12px}.rss4w.TWk6H{min-width:30px;padding-inline-end:0;padding-inline-start:0}.rss4w:focus{outline:5px auto Highlight!important;outline:5px auto -webkit-focus-ring-color!important}.rss4w .kCcZy{flex-shrink:0}`;
    var isTest = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && false;
    if (isTest || !css || typeof document === "undefined") {
        return;
    }
    if (document.querySelector('style[data-ricos-style-hash="' + styleDataHash + '"]')) {
        return;
    }
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.setAttribute("data-ricos-style-hash", styleDataHash);
    style.type = "text/css";
    head.appendChild(style);
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
};
injectCss();
var add_caption_button_default = {
    "fontElementMap": "cyxYt",
    "addCaptionButtonContainer": "_5PxA2",
    "addCaptionButton": "rss4w",
    "active": "AOKi7",
    "disabled": "mr--o",
    "mobile": "_36vju",
    "withIcon": "-TJDX",
    "iconOnly": "TWk6H",
    "icon": "kCcZy"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/figure/add-caption-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddCaptionButton",
    ()=>AddCaptionButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$EditSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EditSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/EditSmall.js [app-client] (ecmascript) <export default as EditSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$figure$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-figure/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$figure$2f$add$2d$caption$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/figure/add-caption-button-scss.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const CaptionButtonContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ onAddCaption, isIconOnly }, ref)=>{
    const { t, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const handleClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        onAddCaption?.();
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$figure$2f$add$2d$caption$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].addCaptionButton, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$figure$2f$add$2d$caption$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mobile]: isMobile,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$figure$2f$add$2d$caption$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].withIcon]: isIconOnly,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$figure$2f$add$2d$caption$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].iconOnly]: isIconOnly
        }),
        onClick: handleClick,
        onMouseDown: (e)=>{
            e.preventDefault();
            e.stopPropagation();
        },
        onTouchEnd: isMobile ? handleClick : void 0,
        "data-hook": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$figure$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADD_CAPTION_BUTTON"],
        type: "button",
        "aria-label": t("Figure_Caption_AddButton_AriaLabel")
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$EditSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EditSmall$3e$__["EditSmall"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$figure$2f$add$2d$caption$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon
    }), !isIconOnly && t("Figure_Caption_AddButton_Title"));
});
const AddCaptionButton = ({ onAddCaption, containerRef })=>{
    const { t, jsdomMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const [buttonMode, setButtonMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AddCaptionButton.useState": ()=>jsdomMode ? "full" : "hidden"
    }["AddCaptionButton.useState"]);
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fullButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iconOnlyButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddCaptionButton.useEffect": ()=>{
            if (!containerRef?.current || dimensions) {
                return;
            }
            const measureButtons = {
                "AddCaptionButton.useEffect.measureButtons": ()=>{
                    if (!fullButtonRef.current || !iconOnlyButtonRef.current) {
                        return;
                    }
                    const fullButtonWidth = fullButtonRef.current.offsetWidth;
                    const iconButtonWidth = iconOnlyButtonRef.current.offsetWidth;
                    setDimensions({
                        fullWidth: fullButtonWidth,
                        iconWidth: iconButtonWidth
                    });
                }
            }["AddCaptionButton.useEffect.measureButtons"];
            measureButtons();
        }
    }["AddCaptionButton.useEffect"], [
        containerRef,
        dimensions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddCaptionButton.useEffect": ()=>{
            if (!containerRef?.current || !dimensions || jsdomMode) {
                return;
            }
            const container = containerRef.current;
            const checkButtonFit = {
                "AddCaptionButton.useEffect.checkButtonFit": ()=>{
                    const containerWidth = container.offsetWidth;
                    const containerHeight = container.offsetHeight;
                    if (dimensions.fullWidth <= containerWidth && containerHeight >= 50) {
                        setButtonMode("full");
                    } else if (dimensions.iconWidth <= containerWidth && containerHeight >= 40) {
                        setButtonMode("icon-only");
                    } else {
                        setButtonMode("hidden");
                    }
                }
            }["AddCaptionButton.useEffect.checkButtonFit"];
            checkButtonFit();
            const resizeObserver = new ResizeObserver({
                "AddCaptionButton.useEffect": ()=>{
                    checkButtonFit();
                }
            }["AddCaptionButton.useEffect"]);
            resizeObserver.observe(container);
            return ({
                "AddCaptionButton.useEffect": ()=>{
                    resizeObserver.disconnect();
                }
            })["AddCaptionButton.useEffect"];
        }
    }["AddCaptionButton.useEffect"], [
        containerRef,
        dimensions,
        jsdomMode
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$figure$2f$add$2d$caption$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].addCaptionButtonContainer,
        contentEditable: false,
        suppressContentEditableWarning: true
    }, !dimensions && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            position: "absolute",
            visibility: "hidden",
            top: "-9999px"
        },
        "aria-hidden": "true",
        role: "presentation"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CaptionButtonContent, {
        ref: fullButtonRef,
        isIconOnly: false
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CaptionButtonContent, {
        ref: iconOnlyButtonRef,
        isIconOnly: true
    })), (()=>{
        switch(buttonMode){
            case "full":
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CaptionButtonContent, {
                    ref: buttonRef,
                    onAddCaption,
                    isIconOnly: false
                });
            case "icon-only":
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                    content: t("Figure_Caption_AddButton_Title"),
                    size: "small"
                }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CaptionButtonContent, {
                    ref: buttonRef,
                    onAddCaption,
                    isIconOnly: true
                }));
            case "hidden":
                return null;
            default:
                return null;
        }
    })());
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/is-only-node-selected.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isOnlyNodeSelected",
    ()=>isOnlyNodeSelected
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
;
const isOnlyNodeSelected = (state, nodeId)=>{
    if (state.selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"]) {
        return state.selection.node.attrs.id === nodeId;
    }
    return false;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/use-get-wix-client-promise.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGetWixClientPromise",
    ()=>useGetWixClientPromise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const useGetWixClientPromise = (instance, wixClient)=>{
    const wixClientGetter = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useGetWixClientPromise.useMemo[wixClientGetter]": ()=>wixClient ? ({
                "useGetWixClientPromise.useMemo[wixClientGetter]": ()=>Promise.resolve(wixClient)
            })["useGetWixClientPromise.useMemo[wixClientGetter]"] : void 0
    }["useGetWixClientPromise.useMemo[wixClientGetter]"], [
        wixClient
    ]);
    const instanceGetter = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useGetWixClientPromise.useMemo[instanceGetter]": ()=>{
            let wixClientPromise;
            return ({
                "useGetWixClientPromise.useMemo[instanceGetter]": ()=>{
                    if (wixClientPromise) {
                        return wixClientPromise;
                    }
                    wixClientPromise = __turbopack_context__.A("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk@1.21.12/node_modules/@wix/sdk/build/wixClient.js [app-client] (ecmascript, async loader)").then({
                        "useGetWixClientPromise.useMemo[instanceGetter]": (clientSdk)=>{
                            return clientSdk.createClient({
                                auth: {
                                    getAuthHeaders: {
                                        "useGetWixClientPromise.useMemo[instanceGetter]": ()=>({
                                                headers: {
                                                    Authorization: instance
                                                }
                                            })
                                    }["useGetWixClientPromise.useMemo[instanceGetter]"]
                                }
                            });
                        }
                    }["useGetWixClientPromise.useMemo[instanceGetter]"]);
                    return wixClientPromise;
                }
            })["useGetWixClientPromise.useMemo[instanceGetter]"];
        }
    }["useGetWixClientPromise.useMemo[instanceGetter]"], [
        instance
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useGetWixClientPromise.useMemo": ()=>({
                getWixClientPromise: wixClientGetter ?? instanceGetter
            })
    }["useGetWixClientPromise.useMemo"], [
        wixClientGetter,
        instanceGetter
    ]);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/request-service-provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RequestServiceProvider",
    ()=>RequestServiceProvider,
    "useRequestService",
    ()=>useRequestService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/dev-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$use$2d$get$2d$wix$2d$client$2d$promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/use-get-wix-client-promise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$devTools$2f$wrap$2d$with$2d$network$2d$conditions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/devTools/wrap-with-network-conditions.js [app-client] (ecmascript)");
;
;
;
;
const RequestServiceContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
const RequestServiceProvider = ({ children, wixClient: existingWixClient, instance })=>{
    const connectionState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevConnectionState"])();
    const { getWixClientPromise } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$use$2d$get$2d$wix$2d$client$2d$promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetWixClientPromise"])(instance ?? "", existingWixClient);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RequestServiceProvider.useEffect": ()=>{
            if (!existingWixClient && !instance) {
                console.warn("Ricos: neither wixClient nor instance was provided. Requests will not be authenticated.");
            }
        }
    }["RequestServiceProvider.useEffect"], [
        existingWixClient,
        instance
    ]);
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "RequestServiceProvider.useMemo[service]": ()=>{
            return {
                getWixClientPromise,
                makeRequest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$devTools$2f$wrap$2d$with$2d$network$2d$conditions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapWithNetworkConditions"])({
                    "RequestServiceProvider.useMemo[service]": async (relativeUrl, options)=>{
                        const wixClient = await getWixClientPromise();
                        return wixClient.fetchWithAuth(relativeUrl, options);
                    }
                }["RequestServiceProvider.useMemo[service]"], {
                    "RequestServiceProvider.useMemo[service]": ()=>connectionState
                }["RequestServiceProvider.useMemo[service]"])
            };
        }
    }["RequestServiceProvider.useMemo[service]"], [
        getWixClientPromise,
        connectionState
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RequestServiceContext.Provider, {
        value: service
    }, children);
};
const useRequestService = ()=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(RequestServiceContext);
    if (!context) {
        throw new Error("useRequestService must be used within a RequestServiceProvider");
    }
    return context;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/log-invariant.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logInvariant",
    ()=>logInvariant
]);
const logInvariant = (error)=>{
    console.error(error);
    if (typeof window !== "undefined" && window.__RICOS_LOG_INVARIANT__) {
        window.__RICOS_LOG_INVARIANT__(error);
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/use-context-selector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContext",
    ()=>createContext,
    "useContext",
    ()=>useContext,
    "useContextSelector",
    ()=>useContextSelector,
    "useContextSelectorWithValue",
    ()=>useContextSelectorWithValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const CONTEXT_VALUE = Symbol();
const ORIGINAL_PROVIDER = Symbol();
const isSSR = typeof window === "undefined";
const useIsomorphicLayoutEffect = isSSR ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
const runWithNormalPriority = (thunk)=>thunk();
const createProvider = (ProviderOrig)=>({ value, children, onSelectorContextValue })=>{
        const valueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
        const versionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
        const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
        if (!contextValue.current) {
            const listeners = /* @__PURE__ */ new Set();
            const update = (fn)=>{
                versionRef.current += 1;
                listeners.forEach((listener)=>listener([
                        versionRef.current
                    ]));
                fn();
            };
            contextValue.current = {
                [CONTEXT_VALUE]: {
                    /* "v"alue     */ v: valueRef,
                    /* versio"n"   */ n: versionRef,
                    /* "l"isteners */ l: listeners,
                    /* "u"pdate    */ u: update
                }
            };
            onSelectorContextValue?.(contextValue.current);
        }
        useIsomorphicLayoutEffect({
            "createProvider.useIsomorphicLayoutEffect": ()=>{
                valueRef.current = value;
                versionRef.current += 1;
                runWithNormalPriority({
                    "createProvider.useIsomorphicLayoutEffect": ()=>{
                        contextValue.current[CONTEXT_VALUE].l.forEach({
                            "createProvider.useIsomorphicLayoutEffect": (listener)=>{
                                listener([
                                    versionRef.current,
                                    value
                                ]);
                            }
                        }["createProvider.useIsomorphicLayoutEffect"]);
                    }
                }["createProvider.useIsomorphicLayoutEffect"]);
            }
        }["createProvider.useIsomorphicLayoutEffect"], [
            value
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(ProviderOrig, {
            value: contextValue.current
        }, children);
    };
const identity = (x)=>x;
function createContext(defaultValue) {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
        [CONTEXT_VALUE]: {
            /* "v"alue     */ v: {
                current: defaultValue
            },
            /* versio"n"   */ n: {
                current: -1
            },
            /* "l"isteners */ l: /* @__PURE__ */ new Set(),
            /* "u"pdate    */ u: (f)=>f()
        }
    });
    context[ORIGINAL_PROVIDER] = context.Provider;
    context.Provider = createProvider(context.Provider);
    delete context.Consumer;
    return context;
}
function useContextSelector(context, selector, equalityFn, trackString) {
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(context);
    return useContextSelectorWithValue(contextValue, selector, equalityFn, trackString);
}
function useContextSelectorWithValue(selectorContextValue, selector, equalityFn, trackString) {
    const contextValue = selectorContextValue[CONTEXT_VALUE];
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { /* "v"alue     */ v: { current: value }, /* versio"n"   */ n: { current: version }, /* "l"isteners */ l: listeners } = contextValue;
    const selected = selector(value);
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
        "useContextSelectorWithValue.useReducer": (prev, next)=>{
            if (trackString) {
                console.log(trackString, "re-render");
            }
            if (!next) {
                return [
                    value,
                    selected
                ];
            }
            if (next[0] <= version) {
                if (equalityFn(prev[1], selected)) {
                    return prev;
                }
                return [
                    value,
                    selected
                ];
            }
            try {
                if (next.length === 2) {
                    if (Object.is(prev[0], next[1])) {
                        return prev;
                    }
                    const nextSelected = selector(next[1]);
                    if (equalityFn(prev[1], nextSelected)) {
                        return prev;
                    }
                    return [
                        next[1],
                        nextSelected
                    ];
                }
            } catch  {}
            return [
                ...prev
            ];
        }
    }["useContextSelectorWithValue.useReducer"], [
        value,
        selected
    ]);
    if (!equalityFn(state[1], selected)) {
        dispatch();
    }
    useIsomorphicLayoutEffect({
        "useContextSelectorWithValue.useIsomorphicLayoutEffect": ()=>{
            listeners.add(dispatch);
            return ({
                "useContextSelectorWithValue.useIsomorphicLayoutEffect": ()=>{
                    listeners.delete(dispatch);
                }
            })["useContextSelectorWithValue.useIsomorphicLayoutEffect"];
        }
    }["useContextSelectorWithValue.useIsomorphicLayoutEffect"], [
        listeners
    ]);
    return state[1];
}
function useContext(context) {
    return useContextSelector(context, identity, Object.is);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/is-ssr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSSR",
    ()=>isSSR
]);
const isSSR = ()=>typeof window === "undefined";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/parse-instance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseInstance",
    ()=>parseInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$is$2d$ssr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/is-ssr.js [app-client] (ecmascript)");
;
const baseDecodedInstance = {
    instanceId: "",
    appDefId: "",
    metaSiteId: "",
    uid: "",
    siteOwnerId: ""
};
function base64UrlToBase64(str) {
    return str.replace(/-/g, "+").replace(/_/g, "/");
}
function splitInstance(instance) {
    console.assert(instance, "instance is mandatory");
    const splitted = instance.split(".");
    console.assert(splitted.length >= 2, "instance must contain data and signature separated by .");
    const data = splitted.reduce((longest, current)=>current.length > longest.length ? current : longest, "");
    return base64UrlToBase64(data);
}
function parseInstance(instance) {
    if (!instance) {
        return baseDecodedInstance;
    }
    try {
        const data = splitInstance(instance);
        const bit64Data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$is$2d$ssr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSSR"])() ? // Accessing 'Buffer' via 'global' prevents webpack polyfilling it for web environment
        /*TURBOPACK member replacement*/ __turbopack_context__.g.Buffer.from(data, "base64").toString("utf8") : atob(data);
        const decodedInstance = JSON.parse(bit64Data);
        if (decodedInstance.data) {
            const parsed = JSON.parse(decodedInstance.data);
            if (parsed.instance) {
                return {
                    ...baseDecodedInstance,
                    ...parsed.instance
                };
            }
            if (parsed.context) {
                const { metasiteId, ...rest } = parsed.context;
                return {
                    ...baseDecodedInstance,
                    ...rest,
                    ...metasiteId ? {
                        metaSiteId: metasiteId
                    } : {}
                };
            }
            return baseDecodedInstance;
        }
        return {
            ...baseDecodedInstance,
            ...decodedInstance
        };
    } catch  {
        return baseDecodedInstance;
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/wix-instance-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WixInstanceContext",
    ()=>WixInstanceContext,
    "WixInstanceContextProvider",
    ()=>WixInstanceContextProvider,
    "useWixInstanceService",
    ()=>useWixInstanceService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/dev-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$log$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/log-invariant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$context$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/use-context-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$parse$2d$instance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/parse-instance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$request$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/request-service-provider.js [app-client] (ecmascript)");
;
;
;
;
;
;
const WixInstanceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$context$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const WixInstanceContextProvider = ({ children, instance })=>{
    const { getWixClientPromise } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$request$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestService"])();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "WixInstanceContextProvider.useState": ()=>({
                ...instance ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$parse$2d$instance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseInstance"])(instance) : {},
                getWixClientPromise
            })
    }["WixInstanceContextProvider.useState"]);
    const devContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DevContext"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "WixInstanceContextProvider.useEffect": ()=>{
            if (devContext.decodedInstance) {
                setState({
                    "WixInstanceContextProvider.useEffect": (prev)=>({
                            ...prev,
                            ...devContext.decodedInstance
                        })
                }["WixInstanceContextProvider.useEffect"]);
                return;
            }
            const decode = {
                "WixInstanceContextProvider.useEffect.decode": async ()=>{
                    try {
                        if (instance) {
                            return;
                        }
                        const wixClient = await getWixClientPromise();
                        const { headers } = await wixClient.auth.getAuthHeaders();
                        const authorizationHeader = headers.Authorization;
                        setState({
                            "WixInstanceContextProvider.useEffect.decode": (prev)=>({
                                    ...prev,
                                    ...authorizationHeader ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$parse$2d$instance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseInstance"])(authorizationHeader) : {}
                                })
                        }["WixInstanceContextProvider.useEffect.decode"]);
                    } catch (error) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$log$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logInvariant"])(new Error(`Failed to decode instance: ${error}`));
                        setState({
                            "WixInstanceContextProvider.useEffect.decode": (prev)=>({
                                    ...prev,
                                    getWixClientPromise
                                })
                        }["WixInstanceContextProvider.useEffect.decode"]);
                    }
                }
            }["WixInstanceContextProvider.useEffect.decode"];
            decode();
        }
    }["WixInstanceContextProvider.useEffect"], [
        instance,
        getWixClientPromise,
        devContext.decodedInstance
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(WixInstanceContext.Provider, {
        value: state
    }, children);
};
const useWixInstanceService = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$context$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WixInstanceContext);
    if (!context) {
        throw new Error("useWixInstanceService must be used within a WixInstanceContextProvider");
    }
    const serviceRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(context);
    serviceRef.current = context;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useWixInstanceService.useCallback": ()=>serviceRef.current
    }["useWixInstanceService.useCallback"], []);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/some-editor-props-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SomeEditorPropsContext",
    ()=>SomeEditorPropsContext,
    "SomeEditorPropsContextProvider",
    ()=>SomeEditorPropsContextProvider,
    "useEditorProp",
    ()=>useEditorProp,
    "useEditorProps",
    ()=>useEditorProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$context$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/use-context-selector.js [app-client] (ecmascript)");
;
;
const SomeEditorPropsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$context$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const SomeEditorPropsContextProvider = ({ children, visitorUploads, fileUploadSizeLimit, biSettings, pickMedia, generalLinkSettings, historySettings, helpers, iframeSandboxDomain, instance })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SomeEditorPropsContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
            "SomeEditorPropsContextProvider.useMemo": ()=>({
                    visitorUploads,
                    fileUploadSizeLimit,
                    biSettings,
                    pickMedia,
                    generalLinkSettings,
                    helpers,
                    historySettings,
                    iframeSandboxDomain,
                    instance
                })
        }["SomeEditorPropsContextProvider.useMemo"], [
            visitorUploads,
            fileUploadSizeLimit,
            biSettings,
            pickMedia,
            generalLinkSettings,
            historySettings,
            helpers,
            iframeSandboxDomain,
            instance
        ])
    }, children);
};
const useEditorProps = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$context$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SomeEditorPropsContext);
    if (!context) {
        throw new Error("useEditorProps must be used within a SomeEditorPropsContextProvider");
    }
    return context;
};
const useEditorProp = (selector)=>{
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$context$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContextSelector"])(SomeEditorPropsContext, selector, Object.is);
    return value;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/link-converters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromTiptapLinkConverter",
    ()=>fromTiptapLinkConverter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/next-schema/generated/ricos_document.js [app-client] (ecmascript)");
;
const fromTiptapLinkConverter = (link)=>{
    if (!link) {
        return void 0;
    }
    if (link.anchor) {
        return {
            anchor: link.anchor
        };
    }
    if (link.url) {
        return {
            url: link.url,
            target: link.target ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link_Target"].BLANK,
            rel: link.rel,
            customData: link.customData
        };
    }
    return void 0;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/get-highest-quality-video.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHighestQualityVideo",
    ()=>getHighestQualityVideo
]);
const getHighestQualityVideo = (videos)=>{
    const mp4 = videos.filter((video)=>video.format === "mp4");
    const getVideoQuality = (video)=>parseInt(video.quality, 10);
    return mp4.reduce((result, video)=>getVideoQuality(video) > getVideoQuality(result) ? video : result);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MEDIA_SERVICES_URL",
    ()=>MEDIA_SERVICES_URL,
    "MediaType",
    ()=>MediaType
]);
var MediaType = /* @__PURE__ */ ((MediaType2)=>{
    MediaType2["AUDIO"] = "music";
    MediaType2["VIDEO"] = "video";
    MediaType2["IMAGE"] = "picture";
    MediaType2["DOCUMENT"] = "document";
    return MediaType2;
})(MediaType || {});
const MEDIA_SERVICES_URL = "/_serverless/ricos-media-services";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/get-media-file-type.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMediaFileType",
    ()=>getMediaFileType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/consts.js [app-client] (ecmascript)");
;
const getMediaFileType = (fileName)=>{
    const imageExtensions = [
        "jpg",
        "png",
        "gif",
        "jpeg",
        "jpe",
        "jfif",
        "bmp",
        "heic",
        "heif",
        "tiff",
        "tif",
        "webp"
    ];
    const videoExtensions = [
        "avi",
        "mpeg",
        "mpg",
        "mpe",
        "mp4",
        "mkv",
        "webm",
        "mov",
        "ogv",
        "vob",
        "m4v",
        "3gp",
        "divx",
        "xvid",
        "mxf",
        "wmv",
        "m1v",
        "flv",
        "m2ts"
    ];
    const audioExtensions = [
        "mp3",
        "wav",
        "flac",
        "m4a",
        "wma",
        "aac",
        "aif",
        "aiff"
    ];
    const archiveExtensions = [
        "zip",
        "rar",
        "tar",
        "gz",
        "gzip",
        "jar",
        "7z",
        "fgz",
        "webarchive"
    ];
    const type = fileName?.split(".").pop()?.toLowerCase() || "";
    if (imageExtensions.includes(type)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaType"].IMAGE;
    }
    if (videoExtensions.includes(type)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaType"].VIDEO;
    }
    if (audioExtensions.includes(type)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaType"].AUDIO;
    }
    if (archiveExtensions.includes(type)) {
        return "archive";
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaType"].DOCUMENT;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/upload-types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaManagerUploadErrorTypes",
    ()=>MediaManagerUploadErrorTypes
]);
var MediaManagerUploadErrorTypes = /* @__PURE__ */ ((MediaManagerUploadErrorTypes2)=>{
    MediaManagerUploadErrorTypes2["SiteQuotaExceeded"] = "wpm_error.site_quota_total_storage_exceeded";
    MediaManagerUploadErrorTypes2["SiteVideoDurationQuotaExceeded"] = "wpm_error.site_quota_total_video_duration_exceeded";
    MediaManagerUploadErrorTypes2["SizeLimitExceeded"] = "wpm_error.file_size_exceeded_limit";
    MediaManagerUploadErrorTypes2["General"] = "wpm_error.general";
    MediaManagerUploadErrorTypes2["MimeTypeMismatch"] = "wpm_error.mime_type_mismatch";
    MediaManagerUploadErrorTypes2["InvalidSession"] = "wpm_error.invalid_session";
    MediaManagerUploadErrorTypes2["SessionExpired"] = "wpm_error.session_expired";
    MediaManagerUploadErrorTypes2["MissingWixSession"] = "wpm_error.missing_wix_session";
    MediaManagerUploadErrorTypes2["IncorrectFileInfo"] = "wpm_error.incorrect_file_info";
    MediaManagerUploadErrorTypes2["InvalidFile"] = "wpm_error.invalid_file";
    MediaManagerUploadErrorTypes2["UnsupportedFileExtension"] = "wpm_error.unsupported_file_extension";
    MediaManagerUploadErrorTypes2["WavInvalidMissingHeader"] = "wpm_error.wav_invalid_missing_header";
    MediaManagerUploadErrorTypes2["WavInvalidFormatChunkMissing"] = "wpm_error.wav_invalid_format_chunk_missing";
    MediaManagerUploadErrorTypes2["ExternalFileAuthorization"] = "wpm_error.external_file_authorization";
    MediaManagerUploadErrorTypes2["ExternalFileForbidden"] = "wpm_error.external_file_forbidden";
    MediaManagerUploadErrorTypes2["UnsupportedImageFormat"] = "wpm_error.unsupported_format";
    MediaManagerUploadErrorTypes2["CorruptedImage"] = "wpm_error.corrupted_image";
    MediaManagerUploadErrorTypes2["ImageDimentionsExceededLimit"] = "wpm_error.image_dimentions_exceeded_limit";
    MediaManagerUploadErrorTypes2["Mp4UnsupportedStereoOnly"] = "wpm_error.mp4_unsupported_stereo_only";
    MediaManagerUploadErrorTypes2["WavUnsupportedStereoOnly"] = "wpm_error.wav_unsupported_stereo_only";
    MediaManagerUploadErrorTypes2["WmaUnsupportedBitrate"] = "wpm_error.wma_unsupported_bitrate";
    MediaManagerUploadErrorTypes2["WmaUnsupportedBitrateLossy"] = "wpm_error.wma_unsupported_bitrate_lossy";
    MediaManagerUploadErrorTypes2["Mp4UnsupportedBitrate"] = "wpm_error.mp4_unsupported_bitrate";
    MediaManagerUploadErrorTypes2["Mp3UnsupportedStereoOnly"] = "wpm_error.mp3_unsupported_stereo_only";
    MediaManagerUploadErrorTypes2["Mp3UnsupportedFormat"] = "wpm_error.mp3_unsupported_format";
    MediaManagerUploadErrorTypes2["WavUnsupportedSampleRate"] = "wpm_error.wav_unsupported_sample_rate";
    MediaManagerUploadErrorTypes2["AacUnsupportedFormat"] = "wpm_error.aac_unsupported_format";
    MediaManagerUploadErrorTypes2["WavUnsupportedFormat"] = "wpm_error.wav_unsupported_format";
    MediaManagerUploadErrorTypes2["WavUnsupportedSampleSize"] = "wpm_error.wav_unsupported_sample_size";
    MediaManagerUploadErrorTypes2["WavUnsupportedFormatChunkSize"] = "wpm_error.wav_unsupported_format_chunk_size";
    MediaManagerUploadErrorTypes2["UnsupportedAudioCodec"] = "wpm_error.unsupported_audio_codec";
    MediaManagerUploadErrorTypes2["ZeroSizeFile"] = "wpm_error.zero_size_file";
    MediaManagerUploadErrorTypes2["Mp4UnsupportedFormat"] = "wpm_error.mp4_unsupported_format";
    MediaManagerUploadErrorTypes2["Mp4UnsupportedSampleRate"] = "wpm_error.mp4_unsupported_sample_rate";
    MediaManagerUploadErrorTypes2["MaxVideoBitrateIsExceeded"] = "wpm_error.max_video_bitrate_is_exceeded";
    MediaManagerUploadErrorTypes2["VideoDurationMismatch"] = "wpm_error.video_duration_mismatch";
    MediaManagerUploadErrorTypes2["UnsupportedVideoCodec"] = "wpm_error.unsupported_video_codec";
    MediaManagerUploadErrorTypes2["SiteSingleVideoDurationQuotaExceeded"] = "wpm_error.site_quota_single_video_duration_exceeded";
    return MediaManagerUploadErrorTypes2;
})(MediaManagerUploadErrorTypes || {});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/get-upload-error.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUploadError",
    ()=>getUploadError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/types/media-upload-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/upload-types.js [app-client] (ecmascript)");
;
;
const getUploadError = (error, metaSiteId, isOwner)=>{
    const upgradeUrl = `https://www.wix.com/store/plans?siteGuid=${metaSiteId}`;
    const { key, args } = error.error_info || {};
    const errorMessages = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].SizeLimitExceeded]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].SIZE_LIMIT,
            args: {
                maxLimit: parseInt(args?.[1], 10)
            }
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].SiteQuotaExceeded]: {
            key: isOwner ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].QUOTA_STORAGE_OWNER : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].QUOTA_STORAGE_VISITOR,
            args: {
                upgradeUrl,
                usage: args?.[0],
                limit: args?.[1]
            }
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].SiteVideoDurationQuotaExceeded]: {
            key: isOwner ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].QUOTA_VIDEO_OWNER : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].QUOTA_VIDEO_VISITOR,
            args: {
                upgradeUrl,
                usage: args?.[0],
                limit: args?.[1]
            }
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].SiteSingleVideoDurationQuotaExceeded]: {
            key: isOwner ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].QUOTA_SINGLE_VIDEO_OWNER : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].QUOTA_SINGLE_VIDEO_VISITOR,
            args: {
                upgradeUrl,
                usage: args?.[0],
                limit: args?.[1]
            }
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].General]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].GENERIC
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].MimeTypeMismatch]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].MIME_TYPE_MISMATCH
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].InvalidSession]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].INVALID_SESSION
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].SessionExpired]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].SESSION_EXPIRED
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].MissingWixSession]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].MISSING_WIX_SESSION
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].IncorrectFileInfo]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].INCORRECT_FILE_INFO
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].InvalidFile]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].CORRUPT_FILE
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].UnsupportedFileExtension]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].UNSUPPORTED_EXTENSION,
            args: {
                extension: args?.[0]
            }
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].WavInvalidMissingHeader]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].MISSING_HEADER
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].WavInvalidFormatChunkMissing]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].FORMAT_CHUNK_MISSING
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].ExternalFileAuthorization]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].EXT_FILE_AUTHORIZATION
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].ExternalFileForbidden]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].EXT_FILE_FORBBIDEN
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].UnsupportedImageFormat]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].IMAGE_FORMAT
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].CorruptedImage]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].CORRUPT_IMAGE
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].ImageDimentionsExceededLimit]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].IMAGE_DIMENSIONS_EXCEEDED
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].Mp4UnsupportedStereoOnly]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].MP4_STEREO_FORMAT
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].WavUnsupportedStereoOnly]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].WAV_STEREO_FORMAT
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].WmaUnsupportedBitrate]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].WMA_BITRATE
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].WmaUnsupportedBitrateLossy]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].WMA_BITRATE_LOSSY
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].Mp4UnsupportedBitrate]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].MP4_BITRATE
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].Mp3UnsupportedStereoOnly]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].MP3_UNSUPPORTED_STEREO
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].Mp3UnsupportedFormat]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].MP3_UNSUPPORTED_FORMAT
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].WavUnsupportedSampleRate]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].WAV_SAMPLE_RATE
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].AacUnsupportedFormat]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].AAC_UNSUPPORTED_FORMAT
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].WavUnsupportedFormat]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].WAV_UNSUPPORTED_FORMAT
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].WavUnsupportedSampleSize]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].WAV_SAMPLE_SIZE
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].WavUnsupportedFormatChunkSize]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].WAV_CHUNK_SIZE
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].UnsupportedAudioCodec]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].AUDIO_CODEC,
            args: {
                codec: args?.[0]
            }
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].ZeroSizeFile]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].EMPTY_FILE
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].Mp4UnsupportedFormat]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].MP4_UNSUPPORTED_FORMAT
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].Mp4UnsupportedSampleRate]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].MP4_SAMPLE_RATE
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].MaxVideoBitrateIsExceeded]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].VIDEO_BITRATE,
            args: {
                fps: args?.[0]
            }
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].VideoDurationMismatch]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].VIDEO_DURATION_MISMATCH,
            args: {
                videoDuration: args?.[0],
                audioDuration: args?.[1]
            }
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerUploadErrorTypes"].UnsupportedVideoCodec]: {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].VIDEO_CODEC,
            args: {
                codec: args?.[0]
            }
        }
    };
    const uploadError = errorMessages[key];
    return {
        msg: error.error_description,
        ...uploadError
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/media-manager-uploader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUploadFn",
    ()=>createUploadFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/consts.js [app-client] (ecmascript)");
;
const createUploadFn = (services)=>{
    const consumer = services.editorProps.biSettings?.consumer;
    const { uid, siteOwnerId, getWixClientPromise } = services.wixInstance();
    const folderId = getFolderId(uid, siteOwnerId, services.editorProps.visitorUploads);
    return async (file, type, options)=>{
        const { privacy = "public", onUploadProgress } = options || {};
        const params = new URLSearchParams({
            mediaType: type,
            privacy
        });
        const wixClient = await getWixClientPromise();
        const response = await wixClient.fetchWithAuth(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDIA_SERVICES_URL"]}/upload-url?${params.toString()}`, {
            method: "POST",
            body: JSON.stringify({})
        });
        const responseData = await response.json();
        const uploadUrl = responseData.uploadUrl;
        const formData = new FormData();
        formData.append("file", file, file.name);
        formData.append("media_type", type);
        formData.append("acl", privacy);
        if (consumer) {
            formData.append("tags", `rich_content_${consumer}`);
        }
        if (folderId) {
            formData.append("parent_folder_id", folderId);
        }
        const requestConfig = {
            onUploadProgress: (progressEvent)=>{
                onUploadProgress?.(progressEvent);
            }
        };
        const uploadResponse = await wixClient.fetchWithAuth(uploadUrl, {
            method: "POST",
            body: formData,
            ...requestConfig
        });
        const uploadRepsonseJson = await uploadResponse.json();
        const { error_description } = uploadRepsonseJson;
        return new Promise((resolve, reject)=>error_description ? reject(uploadRepsonseJson) : resolve(uploadRepsonseJson[0]));
    };
};
const getFolderId = (userId, siteOwnerId, visitorUploads)=>{
    const isOwner = siteOwnerId === userId;
    const { folderId, shouldIncludeSiteOwner } = visitorUploads || {};
    const shouldUploadToFolder = shouldIncludeSiteOwner || !isOwner;
    return shouldUploadToFolder ? folderId : null;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/with-file-size-limitation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withFileSizeLimitation",
    ()=>withFileSizeLimitation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/types/media-upload-types.js [app-client] (ecmascript)");
;
const withFileSizeLimitation = (uploadFunction, fileUploadSizeLimit)=>{
    return (file, updateEntity)=>isFileSizeExcceeded(file, fileUploadSizeLimit) ? updateEntity({
            error: {
                key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].SIZE_LIMIT,
                args: {
                    maxLimit: fileUploadSizeLimit
                }
            }
        }) : uploadFunction(file, updateEntity);
};
function isFileSizeExcceeded(file, fileUploadSizeLimit) {
    return !!fileUploadSizeLimit && file.size >= fileUploadSizeLimit * 1024 * 1024;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/create-media-upload-fn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMediaUploadFn",
    ()=>createMediaUploadFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/types/media-upload-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$highest$2d$quality$2d$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/get-highest-quality-video.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$media$2d$file$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/get-media-file-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$upload$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/get-upload-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$media$2d$manager$2d$uploader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/media-manager-uploader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$with$2d$file$2d$size$2d$limitation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/with-file-size-limitation.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const createMediaUploadFn = (services)=>{
    const { metaSiteId, uid, siteOwnerId } = services.wixInstance();
    if (!metaSiteId) {
        return void 0;
    }
    const upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$media$2d$manager$2d$uploader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUploadFn"])(services);
    const handleUploadError = (error, updateEntity)=>{
        const isOwner = siteOwnerId === uid;
        const mediaUploadError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$upload$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUploadError"])(error, metaSiteId, isOwner);
        updateEntity({
            error: mediaUploadError
        });
    };
    const imageUpload = (file, updateEntity)=>{
        return upload(file, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaType"].IMAGE).then(({ file_name, original_file_name, height, width })=>{
            updateEntity({
                data: {
                    id: file_name,
                    height,
                    width,
                    original_file_name,
                    file_name
                }
            });
        }).catch((error)=>{
            return handleUploadError(error, updateEntity);
        });
    };
    const videoUpload = (file, updateEntity)=>{
        return upload(file, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaType"].VIDEO).then(({ file_output: { video, image } })=>{
            updateEntity({
                data: {
                    pathname: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$highest$2d$quality$2d$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHighestQualityVideo"])(video).url,
                    thumbnail: {
                        pathname: image[0].url,
                        width: image[0].width,
                        height: image[0].height
                    },
                    title: file.name
                }
            });
        }).catch((error)=>handleUploadError(error, updateEntity));
    };
    const getUnsupportedExtensionError = (fileName)=>{
        return {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$types$2f$media$2d$upload$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUploadErrorKey"].UNSUPPORTED_EXTENSION,
            args: {
                extension: fileName.split(".").pop()?.toLowerCase() || ""
            }
        };
    };
    const galleryUpload = (file, updateEntity)=>{
        const fileType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$media$2d$file$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaFileType"])(file.name);
        if (fileType === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaType"].IMAGE) {
            return imageUpload(file, updateEntity);
        } else if (fileType === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaType"].VIDEO) {
            return videoUpload(file, updateEntity);
        } else {
            return updateEntity({
                error: getUnsupportedExtensionError(file.name)
            });
        }
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$with$2d$file$2d$size$2d$limitation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withFileSizeLimitation"])(galleryUpload, services.editorProps.fileUploadSizeLimit);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media-manager/create-open-media-manager-fn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOpenMediaManagerFn",
    ()=>createOpenMediaManagerFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$is$2d$ssr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/is-ssr.js [app-client] (ecmascript)");
;
const createOpenMediaManagerFn = (modals)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$is$2d$ssr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSSR"])()) {
        return void 0;
    }
    const mediaManagerInstance = window.editorSDK || window.ModuleRegistry;
    const isInEditor = mediaManagerInstance && "editor" in mediaManagerInstance;
    const isInBM = mediaManagerInstance && "registeredMethods" in mediaManagerInstance && mediaManagerInstance.registeredMethods && typeof mediaManagerInstance.registeredMethods === "object" && "mediaManager.open" in mediaManagerInstance.registeredMethods;
    if (!mediaManagerInstance || !isInEditor && !isInBM) {
        return void 0;
    }
    return async ({ mediaType, isMultiSelect, appDefId })=>{
        modals.notifyExternalModalOpened();
        try {
            return await ("editor" in mediaManagerInstance ? mediaManagerInstance.editor.openMediaPanel("", {
                mediaType,
                isMultiSelect
            }) : new Promise((resolve, reject)=>{
                mediaManagerInstance.invoke("mediaManager.open", mediaType, appDefId || "ricos", {
                    multiSelect: isMultiSelect,
                    onSuccess: (data)=>resolve(data.items),
                    onCancel: reject
                });
            }));
        } finally{
            modals.notifyExternalModalClosed();
        }
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media-manager/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaManagerMediaType",
    ()=>MediaManagerMediaType
]);
var MediaManagerMediaType = /* @__PURE__ */ ((MediaManagerMediaType2)=>{
    MediaManagerMediaType2["IMAGE"] = "IMAGE";
    MediaManagerMediaType2["ALL_MEDIA"] = "ALL_MEDIA";
    MediaManagerMediaType2["VIDEO"] = "VIDEO";
    MediaManagerMediaType2["AUDIO"] = "MUSIC";
    return MediaManagerMediaType2;
})(MediaManagerMediaType || {});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media-manager/create-image-file-selection-fn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImageFileSelectionFn",
    ()=>createImageFileSelectionFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2d$manager$2f$create$2d$open$2d$media$2d$manager$2d$fn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media-manager/create-open-media-manager-fn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2d$manager$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media-manager/types.js [app-client] (ecmascript)");
;
;
const createImageFileSelectionFn = (services)=>{
    const openMediaManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2d$manager$2f$create$2d$open$2d$media$2d$manager$2d$fn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOpenMediaManagerFn"])(services.modals);
    if (!openMediaManager) {
        return void 0;
    }
    return (updateEntity, options, onCancel)=>openMediaManager({
            mediaType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2d$manager$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerMediaType"].IMAGE,
            appDefId: services.wixInstance().appDefId,
            isMultiSelect: options.multiple
        }).then((items)=>{
            const imageData = items.map(({ title, uri, height, width })=>({
                    id: uri,
                    height,
                    width,
                    original_file_name: title,
                    file_name: uri
                }));
            updateEntity({
                data: imageData,
                // @ts-expect-error
                index: options.index
            });
        }).catch(onCancel);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/uncreachable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unreachable",
    ()=>unreachable
]);
function unreachable(_x) {
    console.error("Not handled value", _x);
    return new Error("Unreachable code reached");
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/upload/upload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "upload",
    ()=>upload
]);
const upload = (uploadFunc, file)=>{
    return new Promise((resolve, reject)=>{
        uploadFunc(file, ({ data, error })=>{
            if (error) {
                reject(error);
            } else {
                resolve({
                    data
                });
            }
        });
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/colors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRANSPARENT_HEX_COLOR",
    ()=>TRANSPARENT_HEX_COLOR
]);
const TRANSPARENT_HEX_COLOR = "#00000000";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/data-hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALIGNMENT_DROPDOWN_OPTION_CENTER",
    ()=>ALIGNMENT_DROPDOWN_OPTION_CENTER,
    "ALIGNMENT_DROPDOWN_OPTION_LEFT",
    ()=>ALIGNMENT_DROPDOWN_OPTION_LEFT,
    "ALIGNMENT_DROPDOWN_OPTION_RIGHT",
    ()=>ALIGNMENT_DROPDOWN_OPTION_RIGHT,
    "ALIGNMENT_DROPDOWN_OPTION_TEXT_WRAP",
    ()=>ALIGNMENT_DROPDOWN_OPTION_TEXT_WRAP,
    "LINK_PLUGIN_WEB_LINK_BUTTON",
    ()=>LINK_PLUGIN_WEB_LINK_BUTTON,
    "PLUGIN_TOOLBAR_ALIGNMENT_BUTTON",
    ()=>PLUGIN_TOOLBAR_ALIGNMENT_BUTTON,
    "PLUGIN_TOOLBAR_ANIMATION_BUTTON",
    ()=>PLUGIN_TOOLBAR_ANIMATION_BUTTON,
    "PLUGIN_TOOLBAR_COLOR_BUTTON",
    ()=>PLUGIN_TOOLBAR_COLOR_BUTTON,
    "PLUGIN_TOOLBAR_DELETE_BUTTON",
    ()=>PLUGIN_TOOLBAR_DELETE_BUTTON,
    "PLUGIN_TOOLBAR_LINK_BUTTON",
    ()=>PLUGIN_TOOLBAR_LINK_BUTTON,
    "PLUGIN_TOOLBAR_REPLACE_BUTTON",
    ()=>PLUGIN_TOOLBAR_REPLACE_BUTTON,
    "PLUGIN_TOOLBAR_SETTINGS_BUTTON",
    ()=>PLUGIN_TOOLBAR_SETTINGS_BUTTON,
    "PLUGIN_TOOLBAR_SET_AS_FOOTER_BUTTON",
    ()=>PLUGIN_TOOLBAR_SET_AS_FOOTER_BUTTON,
    "PLUGIN_TOOLBAR_SET_AS_HEADER_BUTTON",
    ()=>PLUGIN_TOOLBAR_SET_AS_HEADER_BUTTON,
    "PLUGIN_TOOLBAR_SIZE_BUTTON",
    ()=>PLUGIN_TOOLBAR_SIZE_BUTTON,
    "REVEAL_SPOILER_BTN",
    ()=>REVEAL_SPOILER_BTN,
    "REVEAL_SPOILER_CONTENT",
    ()=>REVEAL_SPOILER_CONTENT,
    "SIZE_DROPDOWN_OPTION_CONTENT",
    ()=>SIZE_DROPDOWN_OPTION_CONTENT,
    "SIZE_DROPDOWN_OPTION_FULL_WIDTH",
    ()=>SIZE_DROPDOWN_OPTION_FULL_WIDTH,
    "SIZE_DROPDOWN_OPTION_ORIGINAL",
    ()=>SIZE_DROPDOWN_OPTION_ORIGINAL,
    "SIZE_DROPDOWN_OPTION_SMALL",
    ()=>SIZE_DROPDOWN_OPTION_SMALL,
    "SPOILER_CONTAINER",
    ()=>SPOILER_CONTAINER,
    "SPOILER_TEXT_AREA",
    ()=>SPOILER_TEXT_AREA
]);
const PLUGIN_TOOLBAR_SIZE_BUTTON = "plugin-toolbar-size-button";
const SIZE_DROPDOWN_OPTION_CONTENT = "size-dropdown-option-content";
const SIZE_DROPDOWN_OPTION_SMALL = "size-dropdown-option-small";
const SIZE_DROPDOWN_OPTION_ORIGINAL = "size-dropdown-option-original";
const SIZE_DROPDOWN_OPTION_FULL_WIDTH = "size-dropdown-option-full-width";
const PLUGIN_TOOLBAR_ALIGNMENT_BUTTON = "plugin-toolbar-alignment-button";
const ALIGNMENT_DROPDOWN_OPTION_LEFT = "alignment-dropdown-option-left";
const ALIGNMENT_DROPDOWN_OPTION_CENTER = "alignment-dropdown-option-center";
const ALIGNMENT_DROPDOWN_OPTION_RIGHT = "alignment-dropdown-option-right";
const ALIGNMENT_DROPDOWN_OPTION_TEXT_WRAP = "alignment-dropdown-option-text-wrap";
const PLUGIN_TOOLBAR_ANIMATION_BUTTON = "plugin-toolbar-animation-button";
const PLUGIN_TOOLBAR_COLOR_BUTTON = "plugin-toolbar-color-button";
const PLUGIN_TOOLBAR_SETTINGS_BUTTON = "plugin-toolbar-settings-button";
const PLUGIN_TOOLBAR_REPLACE_BUTTON = "plugin-toolbar-replace-button";
const PLUGIN_TOOLBAR_DELETE_BUTTON = "plugin-toolbar-delete-button";
const REVEAL_SPOILER_BTN = "reveal-spoiler-button";
const REVEAL_SPOILER_CONTENT = "reveal-spoiler-content";
const SPOILER_TEXT_AREA = "spoiler-text-area";
const SPOILER_CONTAINER = "spoiler-container";
const PLUGIN_TOOLBAR_LINK_BUTTON = "plugin-toolbar-link-button";
const LINK_PLUGIN_WEB_LINK_BUTTON = "go-to-link-button";
const PLUGIN_TOOLBAR_SET_AS_HEADER_BUTTON = "plugin-toolbar-set-as-header-button";
const PLUGIN_TOOLBAR_SET_AS_FOOTER_BUTTON = "plugin-toolbar-set-as-footer-button";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/pm-node-types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PmNodeType",
    ()=>PmNodeType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/next-schema/generated/ricos_document.js [app-client] (ecmascript)");
;
const PmNodeType = {
    DIVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].DIVIDER,
    TOC: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TOC,
    IMAGE: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].IMAGE,
    CAPTION: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CAPTION,
    GALLERY: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GALLERY,
    FILE: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].FILE,
    GIF: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GIF,
    VIDEO: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].VIDEO,
    AUDIO: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO,
    LINK_PREVIEW: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].LINK_PREVIEW,
    EMBED: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].EMBED,
    POLL: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].POLL,
    APP_EMBED: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].APP_EMBED,
    COLLAPSIBLE_LIST: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].COLLAPSIBLE_LIST,
    COLLAPSIBLE_ITEM: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].COLLAPSIBLE_ITEM,
    COLLAPSIBLE_ITEM_TITLE: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].COLLAPSIBLE_ITEM_TITLE,
    COLLAPSIBLE_ITEM_BODY: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].COLLAPSIBLE_ITEM_BODY,
    HTML: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HTML,
    CODE_BLOCK: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CODE_BLOCK,
    TABLE: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE,
    TABLE_ROW: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_ROW,
    TABLE_CELL: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_CELL,
    FIGURE: "FIGURE",
    LINK_BUTTON: "LINK_BUTTON",
    ACTION_BUTTON: "ACTION_BUTTON",
    TABLE_HEADER_CELL: "TABLE_HEADER_CELL",
    PARAGRAPH: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].PARAGRAPH,
    HEADING: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING,
    BULLETED_LIST: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BULLETED_LIST,
    CHECKBOX_LIST: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CHECKBOX_LIST,
    ORDERED_LIST: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].ORDERED_LIST,
    LIST_ITEM: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].LIST_ITEM,
    BLOCKQUOTE: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BLOCKQUOTE,
    LAYOUT: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].LAYOUT,
    LAYOUT_CELL: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].LAYOUT_CELL,
    SMART_BLOCK: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK,
    SMART_BLOCK_CELL: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK_CELL,
    CARD: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CARD,
    SHAPE: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SHAPE,
    text: "text",
    hardbreak: "hardbreak"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-in-selection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNodeInSelection",
    ()=>getNodeInSelection
]);
const getNodeInSelection = (_, __, editor)=>{
    const node = editor?.state?.selection?.node;
    return node;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/ricos-inert-tooltip-host.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RICOS_INERT_TOOLTIP_HOST",
    ()=>RICOS_INERT_TOOLTIP_HOST
]);
const RICOS_INERT_TOOLTIP_HOST = "ricos-inert-tooltip-host";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toolbar_button_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "d538d8ce";
const injectCss = ()=>{
    var css = `.F-4dO{align-items:center;display:flex;gap:var(--wds-space-100,3px);justify-content:center}.F-4dO:empty{display:none}:has(>.F-4dO.qyfwZ){min-width:var(--wds-button-size-small,30px);width:auto!important}.oFE-3 :has(>.F-4dO.qyfwZ){min-width:var(--wds-button-size-medium,36px)}[data-hook=ricos-inert-tooltip-host] [data-hook=popover-content]{pointer-events:none}.oFE-3{--wds-toggle-button-fill-inverted-hover:var(--wds-toggle-button-fill-inverted,transparent)}`;
    var isTest = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && false;
    if (isTest || !css || typeof document === "undefined") {
        return;
    }
    if (document.querySelector('style[data-ricos-style-hash="' + styleDataHash + '"]')) {
        return;
    }
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.setAttribute("data-ricos-style-hash", styleDataHash);
    style.type = "text/css";
    head.appendChild(style);
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
};
injectCss();
var toolbar_button_default = {
    "content": "F-4dO",
    "noLabel": "qyfwZ",
    "mobileToolbarButton": "oFE-3"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToolbarButton",
    ()=>ToolbarButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleButton$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleButton$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/ToggleButton/ToggleButton.js [app-client] (ecmascript) <export default as ToggleButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$z$2d$index$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/z-index-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$ricos$2d$inert$2d$tooltip$2d$host$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/ricos-inert-tooltip-host.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$data$2d$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/Utils/data-hook.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button-scss.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const INERT_TOOLTIP_HOST_SELECTOR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$data$2d$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataHook"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$ricos$2d$inert$2d$tooltip$2d$host$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RICOS_INERT_TOOLTIP_HOST"]);
const NativeButton = ({ buttonRef, ricos, ...props })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        ...props,
        ref: buttonRef,
        "data-hook": ricos.dataHook || props["data-hook"],
        "aria-label": ricos.ariaLabel,
        disabled: ricos.disabled
    });
const ToolbarButton = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(({ active, disabled, tooltip, onClick, dataHook: dataHook2, className, label, prefix: Prefix, suffix: Suffix, ariaLabel, ...props }, ref)=>{
    const { isMobile, portal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const zIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$z$2d$index$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZIndexContext"])?.getZIndex("TOOLTIP");
    const tooltipHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ToolbarButton.useMemo[tooltipHost]": ()=>portal?.querySelector(INERT_TOOLTIP_HOST_SELECTOR) ?? void 0
    }["ToolbarButton.useMemo[tooltipHost]"], [
        portal
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleButton$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleButton$3e$__["ToggleButton"], {
        as: NativeButton,
        buttonRef: ref,
        ricos: {
            dataHook: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(dataHook2, {
                disabled,
                active
            }),
            // No value removes the attribute, so the name falls back to the visible label.
            ariaLabel: ariaLabel ?? tooltip,
            disabled: !!disabled
        },
        selected: active,
        disabled,
        size: isMobile ? "medium" : "small",
        labelPlacement: label ? Suffix ? "start" : "end" : tooltip ? "tooltip" : void 0,
        labelValue: label ?? tooltip,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mobileToolbarButton]: isMobile
        }),
        onClick: disabled ? void 0 : onClick,
        onMouseDown: (e)=>e.preventDefault(),
        tooltipProps: tooltip ? {
            moveBy: {
                y: 8
            },
            placement: "top",
            flip: false,
            ...tooltipHost ? {
                appendTo: tooltipHost,
                fixed: true,
                zIndex
            } : {}
        } : void 0,
        tooltipDisabled: !tooltip,
        skin: "inverted",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].content, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].noLabel]: !label
        })
    }, Prefix && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Prefix, null), Suffix && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Suffix, null)));
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/plugin-toolbar-buttons-ids.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLUGIN_TOOLBAR_BUTTON_ID",
    ()=>PLUGIN_TOOLBAR_BUTTON_ID
]);
const PLUGIN_TOOLBAR_BUTTON_ID = {
    DELETE: "delete",
    ALIGNMENT: "alignment",
    ANIMATION: "animation",
    SETTINGS: "settings",
    SETTINGS_WITH_LABEL: "settings-with-label",
    REPLACE: "replace",
    LINK: "link",
    SIZE: "size",
    SEPARATOR: "separator",
    COLOR: "color"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-animation-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANIMATION_PANEL_ID",
    ()=>ANIMATION_PANEL_ID,
    "createAnimationButton",
    ()=>createAnimationButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Animation$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Animation.js [app-client] (ecmascript) <export default as Animation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-modals/modal-service-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$ricos$2d$toolbars$2f$plugin$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/toolbars-v3/ricos-toolbars/plugin/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/pm-node-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-in-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/plugin-toolbar-buttons-ids.js [app-client] (ecmascript)");
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
const ANIMATION_PANEL_ID = "animation-panel";
const getAnimationTargetNode = (node)=>node?.type?.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].FIGURE ? node.firstChild : node;
const createAnimationButton = (services, selectedNode = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeInSelection"])=>({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_BUTTON_ID"].ANIMATION,
        type: "modal",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Animation$3e$__["Animation"],
        tooltip: "AnimationButton_Tooltip",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_ANIMATION_BUTTON"],
        attributes: {
            selectedNode,
            // desktop only, and requires the opt-in plugin AND a resolvable target node
            visible: (content, resolverServices, editor)=>!services.context.isMobile && Boolean(services.plugins.getExports().animation) && Boolean(selectedNode(content, resolverServices, editor)),
            // the LINK button's contract: active whenever the target already carries the
            // attribute, panel-open state is ORed in by the renderer
            active: (content, resolverServices, editor)=>Boolean(getAnimationTargetNode(selectedNode(content, resolverServices, editor))?.attrs.animation)
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AnimationButton, {
                toolbarItem
            }),
        command: ({ referenceElement, attributes: { selectedNode: selectedNode2 } })=>{
            const Panel = services.plugins.getExports().animation?.Panel;
            if (!Panel || !selectedNode2) {
                return;
            }
            const node = getAnimationTargetNode(selectedNode2);
            if (!node) {
                return;
            }
            services.modals.togglePluginPanel({
                id: ANIMATION_PANEL_ID,
                Component: Panel,
                componentProps: {
                    referenceElement,
                    nodeId: node.attrs.id,
                    nodeType: node.type.name
                },
                positioning: {
                    referenceElement: referenceElement?.closest(`[data-hook~=${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$ricos$2d$toolbars$2f$plugin$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOATING_PLUGIN_TOOLBAR"]}]`) ?? referenceElement,
                    placement: "right-start"
                },
                focusReturnElement: referenceElement,
                isMobile: services.context.isMobile
            });
        }
    });
const AnimationButton = ({ toolbarItem })=>{
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isMobile, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]) || {};
    const isPanelOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsModalOpen"])(ANIMATION_PANEL_ID));
    const onClick = toolbarItem.commands.click;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        prefix: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Animation$3e$__["Animation"],
        active: isPanelOpen || Boolean(toolbarItem.attributes.active),
        onClick: ()=>onClick({
                isMobile,
                referenceElement
            }),
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_ANIMATION_BUTTON"],
        tooltip: t("AnimationButton_Tooltip"),
        ariaLabel: t("AnimationButton_Tooltip"),
        ref: setReferenceElement,
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-delete-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDeleteButton",
    ()=>createDeleteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Delete$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Delete.js [app-client] (ecmascript) <export default as Delete>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-in-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/plugin-toolbar-buttons-ids.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const createDeleteButton = ({ attributes, command, tooltip } = {})=>{
    return {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_BUTTON_ID"].DELETE,
        type: "toggle",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Delete$3e$__["Delete"],
        attributes: {
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeInSelection"],
            ...attributes
        },
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_DELETE_BUTTON"],
        tooltip: tooltip ? tooltip : "DeleteButton_Tooltip",
        renderer: (toolbarItem)=>{
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(DeleteButton, {
                toolbarItem
            });
        },
        command: command || (({ tiptapEditor, attributes: attributes2 })=>{
            tiptapEditor.chain().focus().deleteNode(attributes2.selectedNode.attrs.id).run();
        })
    };
};
const DeleteButton = ({ toolbarItem, dataHook })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]) || {};
    const onClick = toolbarItem.commands.click;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        prefix: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Delete$3e$__["Delete"],
        onClick: ()=>onClick ? onClick() : toolbarItem.commands.delete(),
        dataHook,
        tooltip: t("DeleteButton_Tooltip"),
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LINK_MODAL_ID",
    ()=>LINK_MODAL_ID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
;
const LINK_MODAL_ID = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration_Type"].LINK}.modal`;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/site-pages/site-pages-fetch-context/use-fetch-site-pages.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFetchSitePages",
    ()=>useFetchSitePages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/dev-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$request$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/request-service-provider.js [app-client] (ecmascript)");
;
;
;
const pageTypePaths = {
    blogPost: "blog-posts",
    staticPage: "static-pages",
    dynamicPage: "dynamic-all-pages",
    dynamicItemPage: "dynamic-item-pages",
    storeProduct: "stores-products",
    storeCatalog: "stores-catalogs"
};
const useFetchSitePages = ()=>{
    const { makeRequest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$request$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestService"])();
    const fetchSitePages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFetchSitePages.useMemo[fetchSitePages]": ()=>({
                "useFetchSitePages.useMemo[fetchSitePages]": (pageType, params)=>({
                        "useFetchSitePages.useMemo[fetchSitePages]": async (makeRequest2, pageType2, params2)=>{
                            const response = await makeRequest2(`/_api/ricos-site-pages/${pageTypePaths[pageType2]}`, {
                                body: JSON.stringify(params2),
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                method: "POST"
                            });
                            const result = await response.json();
                            return {
                                ...result,
                                items: result.items.map({
                                    "useFetchSitePages.useMemo[fetchSitePages]": (item)=>({
                                            ...item,
                                            updatedDate: item.updatedDate ? new Date(item.updatedDate) : void 0
                                        })
                                }["useFetchSitePages.useMemo[fetchSitePages]"]) || []
                            };
                        }
                    })["useFetchSitePages.useMemo[fetchSitePages]"](makeRequest, pageType, params)
            })["useFetchSitePages.useMemo[fetchSitePages]"]
    }["useFetchSitePages.useMemo[fetchSitePages]"], [
        makeRequest
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DevContext"])?.fetchSitePages || fetchSitePages;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/site-pages/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sitePagesPageType",
    ()=>sitePagesPageType
]);
const sitePagesPageType = {
    blogPost: "blogPost",
    staticPage: "staticPage",
    dynamicPage: "dynamicPage",
    storeProduct: "storeProduct",
    storeCatalog: "storeCatalog"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/site-pages/site-pages-fetch-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SitePagesFetchContext",
    ()=>SitePagesFetchContext,
    "SitePagesFetchContextProvider",
    ()=>SitePagesFetchContextProvider,
    "useSitePagesFetchContext",
    ()=>useSitePagesFetchContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$site$2d$pages$2f$site$2d$pages$2d$fetch$2d$context$2f$use$2d$fetch$2d$site$2d$pages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/site-pages/site-pages-fetch-context/use-fetch-site-pages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$site$2d$pages$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/site-pages/types.js [app-client] (ecmascript)");
;
;
;
const expireTime = 6e4;
const pagingLimit = 100;
const getCacheId = (pageType, query, itemPagePrefix)=>itemPagePrefix ? itemPagePrefix : `${pageType} ${query.trim()}`.trim();
const SitePagesFetchContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    cache: {},
    expireCache: ()=>{},
    initialFetch: ()=>{},
    loadMore: ()=>{},
    preload: ()=>{},
    sitePublished: null
});
const SitePagesFetchContextProvider = ({ children })=>{
    const fetchSitePages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$site$2d$pages$2f$site$2d$pages$2d$fetch$2d$context$2f$use$2d$fetch$2d$site$2d$pages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchSitePages"])();
    const [cache, setCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [expireTimeout, setExpireTimeout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const [sitePublished, setSitePublished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const expireCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SitePagesFetchContextProvider.useCallback[expireCache]": ()=>{
            setExpireTimeout({
                "SitePagesFetchContextProvider.useCallback[expireCache]": (oldTimeout)=>{
                    clearTimeout(oldTimeout);
                    return setTimeout({
                        "SitePagesFetchContextProvider.useCallback[expireCache]": ()=>setCache({})
                    }["SitePagesFetchContextProvider.useCallback[expireCache]"], expireTime);
                }
            }["SitePagesFetchContextProvider.useCallback[expireCache]"]);
        }
    }["SitePagesFetchContextProvider.useCallback[expireCache]"], []);
    const updateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SitePagesFetchContextProvider.useCallback[updateState]": (pageType, query, fn, itemPagePrefix)=>{
            setCache({
                "SitePagesFetchContextProvider.useCallback[updateState]": (cache2)=>{
                    const cacheId = getCacheId(pageType, query, itemPagePrefix);
                    const oldState = cache2[cacheId];
                    const newState = fn(oldState);
                    return newState && newState !== oldState ? {
                        ...cache2,
                        [cacheId]: newState
                    } : cache2;
                }
            }["SitePagesFetchContextProvider.useCallback[updateState]"]);
        }
    }["SitePagesFetchContextProvider.useCallback[updateState]"], []);
    const initialFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SitePagesFetchContextProvider.useCallback[initialFetch]": (pageType, query, itemPagePrefix)=>{
            const initialState = {
                type: "loading"
            };
            clearTimeout(expireTimeout);
            queueMicrotask({
                "SitePagesFetchContextProvider.useCallback[initialFetch]": ()=>updateState(pageType, query, {
                        "SitePagesFetchContextProvider.useCallback[initialFetch]": (oldState)=>{
                            if (oldState) {
                                return;
                            }
                            fetchSitePages(pageType, {
                                query: query.trim(),
                                itemPagePrefix,
                                paging: {
                                    limit: pagingLimit
                                }
                            }).then({
                                "SitePagesFetchContextProvider.useCallback[initialFetch]": (result)=>{
                                    updateState(pageType, query, {
                                        "SitePagesFetchContextProvider.useCallback[initialFetch]": (oldState2)=>oldState2 === initialState && {
                                                type: "ready",
                                                items: result.items,
                                                cursor: result.paging?.cursors?.next
                                            }
                                    }["SitePagesFetchContextProvider.useCallback[initialFetch]"], itemPagePrefix);
                                    setSitePublished({
                                        "SitePagesFetchContextProvider.useCallback[initialFetch]": (sitePublished2)=>"published" in result ? result.published : sitePublished2
                                    }["SitePagesFetchContextProvider.useCallback[initialFetch]"]);
                                }
                            }["SitePagesFetchContextProvider.useCallback[initialFetch]"]).catch({
                                "SitePagesFetchContextProvider.useCallback[initialFetch]": (error)=>updateState(pageType, query, {
                                        "SitePagesFetchContextProvider.useCallback[initialFetch]": (oldState2)=>oldState2 === initialState && {
                                                type: "loading-error",
                                                error
                                            }
                                    }["SitePagesFetchContextProvider.useCallback[initialFetch]"])
                            }["SitePagesFetchContextProvider.useCallback[initialFetch]"]);
                            return initialState;
                        }
                    }["SitePagesFetchContextProvider.useCallback[initialFetch]"], itemPagePrefix)
            }["SitePagesFetchContextProvider.useCallback[initialFetch]"]);
            return initialState;
        }
    }["SitePagesFetchContextProvider.useCallback[initialFetch]"], [
        fetchSitePages,
        updateState
    ]);
    const loadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SitePagesFetchContextProvider.useCallback[loadMore]": (pageType, query, itemPagePrefix)=>{
            clearTimeout(expireTimeout);
            updateState(pageType, query, {
                "SitePagesFetchContextProvider.useCallback[loadMore]": (oldState)=>{
                    if (!oldState || oldState.type !== "ready" || !oldState.cursor) {
                        return;
                    }
                    const loadingState = {
                        type: "loading-more",
                        items: oldState.items,
                        cursor: oldState.cursor
                    };
                    fetchSitePages(pageType, {
                        query: query.trim(),
                        itemPagePrefix,
                        paging: {
                            limit: pagingLimit,
                            cursor: oldState.cursor
                        }
                    }).then({
                        "SitePagesFetchContextProvider.useCallback[loadMore]": (result)=>{
                            updateState(pageType, query, {
                                "SitePagesFetchContextProvider.useCallback[loadMore]": (oldState2)=>oldState2 === loadingState && {
                                        type: "ready",
                                        items: [
                                            ...oldState2.items,
                                            ...result.items
                                        ],
                                        cursor: result.paging.cursors?.next
                                    }
                            }["SitePagesFetchContextProvider.useCallback[loadMore]"], itemPagePrefix);
                            setSitePublished({
                                "SitePagesFetchContextProvider.useCallback[loadMore]": (sitePublished2)=>"published" in result ? result.published : sitePublished2
                            }["SitePagesFetchContextProvider.useCallback[loadMore]"]);
                        }
                    }["SitePagesFetchContextProvider.useCallback[loadMore]"]).catch({
                        "SitePagesFetchContextProvider.useCallback[loadMore]": (error)=>updateState(pageType, query, {
                                "SitePagesFetchContextProvider.useCallback[loadMore]": (oldState2)=>oldState2 === loadingState && {
                                        type: "ready",
                                        error,
                                        cursor: oldState2.cursor,
                                        items: oldState2.items
                                    }
                            }["SitePagesFetchContextProvider.useCallback[loadMore]"])
                    }["SitePagesFetchContextProvider.useCallback[loadMore]"]);
                    return loadingState;
                }
            }["SitePagesFetchContextProvider.useCallback[loadMore]"], itemPagePrefix);
        }
    }["SitePagesFetchContextProvider.useCallback[loadMore]"], [
        fetchSitePages,
        updateState
    ]);
    const preload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SitePagesFetchContextProvider.useCallback[preload]": ()=>{
            setExpireTimeout({
                "SitePagesFetchContextProvider.useCallback[preload]": (oldTimeout)=>{
                    clearTimeout(oldTimeout);
                    return void 0;
                }
            }["SitePagesFetchContextProvider.useCallback[preload]"]);
            for (const pageType of Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$site$2d$pages$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sitePagesPageType"])){
                initialFetch(pageType, "");
            }
        }
    }["SitePagesFetchContextProvider.useCallback[preload]"], [
        initialFetch
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SitePagesFetchContextProvider.useMemo[value]": ()=>({
                cache,
                expireCache,
                initialFetch,
                loadMore,
                preload,
                sitePublished
            })
    }["SitePagesFetchContextProvider.useMemo[value]"], [
        cache,
        expireCache,
        initialFetch,
        loadMore,
        preload,
        sitePublished
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SitePagesFetchContext.Provider, {
        children,
        value
    });
};
const useSitePagesFetchContext = (pageType, query, itemPagePrefix)=>{
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SitePagesFetchContext);
    const cacheId = getCacheId(pageType, query, itemPagePrefix);
    const fetchState = value.cache[cacheId] || value.initialFetch(pageType, query, itemPagePrefix);
    const loadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSitePagesFetchContext.useMemo[loadMore]": ()=>fetchState && fetchState.type === "ready" && fetchState.cursor ? ({
                "useSitePagesFetchContext.useMemo[loadMore]": ()=>value.loadMore(pageType, query, itemPagePrefix)
            })["useSitePagesFetchContext.useMemo[loadMore]"] : void 0
    }["useSitePagesFetchContext.useMemo[loadMore]"], [
        fetchState,
        value.loadMore
    ]);
    return {
        fetchState,
        loadMore
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATTRIBUTES_NEW_TAB",
    ()=>ATTRIBUTES_NEW_TAB,
    "ATTRIBUTES_NOFOLLOW",
    ()=>ATTRIBUTES_NOFOLLOW,
    "ATTRIBUTES_NOREFERRER",
    ()=>ATTRIBUTES_NOREFERRER,
    "ATTRIBUTES_SPONSORED",
    ()=>ATTRIBUTES_SPONSORED,
    "CANCEL_BUTTON",
    ()=>CANCEL_BUTTON,
    "DYNAMIC_ITEM_PAGE_SELECT",
    ()=>DYNAMIC_ITEM_PAGE_SELECT,
    "LINK_TYPE",
    ()=>LINK_TYPE,
    "MODAL_ROOT",
    ()=>MODAL_ROOT,
    "SAVE_BUTTON",
    ()=>SAVE_BUTTON,
    "SECTION_EMPTY_STATE",
    ()=>SECTION_EMPTY_STATE,
    "SECTION_MULTISELECT",
    ()=>SECTION_MULTISELECT,
    "SECTION_SELECT",
    ()=>SECTION_SELECT,
    "SECTION_TYPE_SELECT",
    ()=>SECTION_TYPE_SELECT,
    "SITE_PAGES_EMPTY_STATE",
    ()=>SITE_PAGES_EMPTY_STATE,
    "SITE_PAGES_PAGE_SELECT",
    ()=>SITE_PAGES_PAGE_SELECT,
    "UNLINK_BUTTON",
    ()=>UNLINK_BUTTON,
    "URL_INPUT",
    ()=>URL_INPUT
]);
const MODAL_ROOT = "link-modal-root";
const ATTRIBUTES_NEW_TAB = "link-modal-attributes-new-tab";
const ATTRIBUTES_NOFOLLOW = "link-modal-attributes-nofollow";
const ATTRIBUTES_NOREFERRER = "link-modal-attributes-noreferrer";
const ATTRIBUTES_SPONSORED = "link-modal-attributes-sponsored";
const CANCEL_BUTTON = "link-modal-cancel-button";
const SAVE_BUTTON = "link-modal-save-button";
const UNLINK_BUTTON = "link-modal-unlink-button";
const LINK_TYPE = "link-modal-link-type";
const SECTION_EMPTY_STATE = "link-modal-section-empty-state";
const SECTION_SELECT = "link-modal-section-select";
const SECTION_MULTISELECT = "link-modal-section-multiselect";
const SECTION_TYPE_SELECT = "link-modal-section-type-select";
const SITE_PAGES_EMPTY_STATE = "link-modal-site-pages-empty-state";
const SITE_PAGES_PAGE_SELECT = "link-modal-site-pages-page-select";
const DYNAMIC_ITEM_PAGE_SELECT = "link-modal-dynamic-item-page-select";
const URL_INPUT = "link-modal-url-input";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/bi-context-provider/bi-context-provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BiContextProvider",
    ()=>BiContextProvider,
    "useBiNext",
    ()=>useBiNext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/dev-context.js [app-client] (ecmascript)");
;
;
const BiContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
const BiContextProvider = ({ children, biLogger })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(BiContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
            "BiContextProvider.useMemo": ()=>({
                    biLogger
                })
        }["BiContextProvider.useMemo"], [
            biLogger
        ])
    }, children);
};
const useBiNext = (params)=>{
    const devLogBi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevLogBi"])();
    if (devLogBi) {
        return (params2)=>devLogBi({
                ...params,
                ...params2
            });
    }
    return useDebouncedLogBi(params);
};
const useDebouncedLogBi = (params, delay = 500)=>{
    const { biLogger } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(BiContext) ?? {};
    const timeoutsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(/* @__PURE__ */ new Map());
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useDebouncedLogBi.useCallback": ({ dataHook, value })=>{
            if (!dataHook || !biLogger) {
                return;
            }
            if (timeoutsRef.current.has(dataHook)) {
                clearTimeout(timeoutsRef.current.get(dataHook));
            }
            const timeout = setTimeout({
                "useDebouncedLogBi.useCallback.timeout": ()=>{
                    biLogger.logV2?.({
                        element_id: dataHook,
                        value: value?.toString(),
                        plugin_id: params?.pluginId,
                        modal_id: params?.modalId,
                        node_id: params?.nodeId
                    });
                    timeoutsRef.current.delete(dataHook);
                }
            }["useDebouncedLogBi.useCallback.timeout"], delay);
            timeoutsRef.current.set(dataHook, timeout);
        }
    }["useDebouncedLogBi.useCallback"], [
        biLogger,
        delay,
        params?.pluginId,
        params?.modalId
    ]);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/attributes/use-attributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAttributes",
    ()=>useAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/common.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/bi-context-provider/bi-context-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
;
;
;
;
const useAttributes = (link, onChange)=>{
    const logBi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBiNext"])({
        pluginId: "link",
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_MODAL_ID"]
    });
    return {
        onToggleNewTab: ()=>{
            onChange(link.rel, link.target !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link_Target"].BLANK ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link_Target"].BLANK : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link_Target"].TOP);
            logBi({
                dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTES_NEW_TAB"],
                value: link.target !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link_Target"].BLANK
            });
        },
        onToggleNofollow: ()=>{
            onChange({
                ...link.rel,
                nofollow: !link.rel?.nofollow || void 0
            }, link.target);
            logBi({
                dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTES_NOFOLLOW"],
                value: !link.rel?.nofollow
            });
        },
        onToggleNoreferrer: ()=>{
            onChange({
                ...link.rel,
                noreferrer: !link.rel?.noreferrer || void 0
            }, link.target);
            logBi({
                dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTES_NOREFERRER"],
                value: !link.rel?.noreferrer
            });
        },
        onToggleSponsored: ()=>{
            onChange({
                ...link.rel,
                sponsored: !link.rel?.sponsored || void 0
            }, link.target);
            logBi({
                dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTES_SPONSORED"],
                value: !link.rel?.sponsored
            });
        }
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/attributes/attributes-desktop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttributesDesktop",
    ()=>AttributesDesktop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript) <export default as FormField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleSwitch$2f$ToggleSwitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleSwitch$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/ToggleSwitch/ToggleSwitch.js [app-client] (ecmascript) <export default as ToggleSwitch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/common.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$attributes$2f$use$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/attributes/use-attributes.js [app-client] (ecmascript)");
;
;
;
;
;
const AttributesDesktop = ({ link, onChange, t, tooltipProps })=>{
    const { onToggleNewTab, onToggleNofollow, onToggleNoreferrer, onToggleSponsored } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$attributes$2f$use$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAttributes"])(link, onChange);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        gap: "SP2"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        label: t("LinkSettings_Settings_NewTab_Label"),
        labelPlacement: "left",
        labelWidth: "1fr"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleSwitch$2f$ToggleSwitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleSwitch$3e$__["ToggleSwitch"], {
        checked: link.target === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link_Target"].BLANK,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTES_NEW_TAB"],
        onChange: onToggleNewTab,
        size: "small"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        infoContent: t("LinkSettings_Settings_Noreferrer_Tooltip"),
        infoTooltipProps: tooltipProps,
        label: t("LinkSettings_Settings_Noreferrer_Label"),
        labelPlacement: "left",
        labelWidth: "1fr"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleSwitch$2f$ToggleSwitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleSwitch$3e$__["ToggleSwitch"], {
        checked: link.rel?.noreferrer,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTES_NOREFERRER"],
        onChange: onToggleNoreferrer,
        size: "small"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        infoContent: t("LinkSettings_Settings_Nofollow_Tooltip"),
        infoTooltipProps: tooltipProps,
        label: t("LinkSettings_Settings_Nofollow_Label"),
        labelPlacement: "left",
        labelWidth: "1fr"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleSwitch$2f$ToggleSwitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleSwitch$3e$__["ToggleSwitch"], {
        checked: link.rel?.nofollow,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTES_NOFOLLOW"],
        onChange: onToggleNofollow,
        size: "small"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        infoContent: t("LinkSettings_Settings_Sponsored_Tooltip"),
        infoTooltipProps: tooltipProps,
        label: t("LinkSettings_Settings_Sponsored_Label"),
        labelPlacement: "left",
        labelWidth: "1fr"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleSwitch$2f$ToggleSwitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleSwitch$3e$__["ToggleSwitch"], {
        checked: link.rel?.sponsored,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTES_SPONSORED"],
        onChange: onToggleSponsored,
        size: "small"
    })));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$TextButton$2f$TextButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextButton$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/TextButton/TextButton.js [app-client] (ecmascript) <export default as TextButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/bi-context-provider/bi-context-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
;
;
;
;
;
const Footer = ({ onClickCancel, onClickSave, onClickUnlink, showUnlink, t })=>{
    const logBi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBiNext"])({
        pluginId: "link",
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_MODAL_ID"]
    });
    const onClickCancelAndLog = ()=>{
        onClickCancel();
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANCEL_BUTTON"]
        });
    };
    const onClickUnlinkAndLog = ()=>{
        if (onClickUnlink) {
            onClickUnlink();
            logBi({
                dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNLINK_BUTTON"]
            });
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        align: "space-between",
        gap: "SP2",
        verticalAlign: "middle"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], null, showUnlink && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$TextButton$2f$TextButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextButton$3e$__["TextButton"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNLINK_BUTTON"],
        onClick: onClickUnlinkAndLog,
        size: "small",
        underline: "always"
    }, t("LinkSettings_Action_Unlink"))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        align: "right",
        gap: "SP2"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANCEL_BUTTON"],
        onClick: onClickCancelAndLog,
        priority: "secondary",
        size: "small"
    }, t("LinkSettings_Action_Cancel")), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAVE_BUTTON"],
        onClick: onClickSave,
        size: "small"
    }, t("LinkSettings_Action_Save"))));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/not-published-warning.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotPublishedWarning",
    ()=>NotPublishedWarning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SectionHelper$2f$SectionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionHelper$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/SectionHelper/SectionHelper.js [app-client] (ecmascript) <export default as SectionHelper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Text/Text.js [app-client] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
;
;
;
const LS_KEY = "ricos/link-modal/not-published-warning/closed";
const NotPublishedWarning = ()=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const [isClosed, setIsClosed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "NotPublishedWarning.useState": ()=>!!localStorage?.getItem(LS_KEY)
    }["NotPublishedWarning.useState"]);
    const onClose = ()=>{
        localStorage?.setItem(LS_KEY, "true");
        setIsClosed(true);
    };
    if (isClosed) {
        return null;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SectionHelper$2f$SectionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionHelper$3e$__["SectionHelper"], {
        appearance: "standard",
        onClose,
        showCloseButton: true,
        size: "small"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        gap: "SP2"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"], {
        size: "small"
    }, t("LinkSettings_NotPublishedWarning_Text"))));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/empty-state.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionEmptyState",
    ()=>SectionEmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Text/Text.js [app-client] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
;
;
;
const SectionEmptyState = ({ t })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_EMPTY_STATE"],
        direction: "vertical",
        margin: "SP4",
        gap: "SP2",
        verticalAlign: "middle",
        textAlign: "center"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"], {
        size: "small",
        weight: "bold"
    }, t("LinkSettings_Sections_Empty_Text1")), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"], {
        size: "small",
        weight: "thin"
    }, t("LinkSettings_Sections_Empty_Text2")));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/theme-color-token.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "THEME_COLOR_SLOT_MAP",
    ()=>THEME_COLOR_SLOT_MAP,
    "getThemeColorTokenOpacity",
    ()=>getThemeColorTokenOpacity,
    "isThemeColorToken",
    ()=>isThemeColorToken,
    "resolveDocumentColorToCss",
    ()=>resolveDocumentColorToCss,
    "resolveDocumentColorToHex",
    ()=>resolveDocumentColorToHex,
    "setThemeColorTokenOpacity",
    ()=>setThemeColorTokenOpacity,
    "stripThemeColorTokenOpacity",
    ()=>stripThemeColorTokenOpacity,
    "themeColorTokenToCssVar",
    ()=>themeColorTokenToCssVar,
    "themeColorTokenToHex",
    ()=>themeColorTokenToHex
]);
const THEME_COLOR_SLOTS = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
];
const THEME_COLOR_SLOT_MAP = {
    "1": "bgColor",
    "2": "textColor",
    "3": "accent1",
    "4": "accent2",
    "5": "accent3",
    "6": "accent4",
    "7": "shade1",
    "8": "shade2",
    "9": "shade3"
};
const THEME_COLOR_TOKEN_REGEXP = /^\$theme-color-([1-9])(?:-(100|[1-9]\d|[0-9]))?$/;
const HEX_COLOR_WITH_OPTIONAL_ALPHA_RE = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
function resolveDocumentColorToCss(color) {
    if (!color) {
        return void 0;
    }
    const token = parseThemeColorToken(color);
    if (!token) {
        return color;
    }
    if (token.opacity === 100) {
        return themeColorTokenToCssVar(token.baseToken);
    }
    const tupleVar = themeColorTokenToCssVar(token.baseToken, "rgbTuple");
    return `rgba(${tupleVar}, ${token.opacity / 100})`;
}
function resolveDocumentColorToHex(color, palette) {
    if (!color) {
        return void 0;
    }
    if (!isThemeColorToken(color)) {
        return color;
    }
    return themeColorTokenToHex(color, palette) ?? color;
}
function isThemeColorToken(value) {
    return !!parseThemeColorToken(value);
}
function stripThemeColorTokenOpacity(token) {
    return parseThemeColorToken(token)?.baseToken ?? token;
}
function getThemeColorTokenOpacity(token) {
    return parseThemeColorToken(token)?.opacity ?? 100;
}
function setThemeColorTokenOpacity(token, opacity) {
    const parsed = parseThemeColorToken(token);
    if (!parsed) {
        return token;
    }
    const normalizedOpacity = Math.max(0, Math.min(100, Math.round(opacity)));
    return normalizedOpacity === 100 ? parsed.baseToken : `${parsed.baseToken}-${normalizedOpacity}`;
}
function themeColorTokenToCssVar(token, format) {
    const baseToken = stripThemeColorTokenOpacity(token);
    const varName = `--ricos-${baseToken.slice(1)}`;
    return format === "rgbTuple" ? `var(${varName}-tuple)` : `var(${varName})`;
}
function themeColorTokenToHex(token, palette) {
    const parsed = parseThemeColorToken(token);
    if (!parsed) {
        return void 0;
    }
    const field = THEME_COLOR_SLOT_MAP[parsed.slot];
    const value = field && palette[field];
    if (!value) {
        return void 0;
    }
    const hex = palette.format === "rgbTuple" ? rgbTupleToHex(value) : value;
    return applyOpacityToHexColor(hex, parsed.opacity);
}
function parseThemeColorToken(value) {
    if (typeof value !== "string") {
        return void 0;
    }
    const match = value.match(THEME_COLOR_TOKEN_REGEXP);
    if (!match) {
        return void 0;
    }
    const slot = match[1];
    const opacity = match[2] ? Number(match[2]) : 100;
    return {
        slot,
        opacity,
        baseToken: `$theme-color-${slot}`
    };
}
function rgbTupleToHex(tuple) {
    const parts = tuple.split(",").map((s)=>parseInt(s.trim(), 10));
    return "#" + parts.slice(0, 3).map((n)=>n.toString(16).padStart(2, "0")).join("");
}
function applyOpacityToHexColor(color, opacity) {
    if (opacity === 100) {
        return color;
    }
    const parsedHex = parseHexColor(color);
    if (!parsedHex) {
        return color;
    }
    const alpha = Math.round(opacity / 100 * 255).toString(16).padStart(2, "0").toUpperCase();
    return `${parsedHex.baseHex}${alpha}`;
}
function parseHexColor(color) {
    const normalized = color.trim();
    const match = normalized.match(HEX_COLOR_WITH_OPTIONAL_ALPHA_RE);
    if (!match) {
        return void 0;
    }
    const digits = match[1];
    if (digits.length === 3 || digits.length === 4) {
        const expanded = digits.split("").map((char)=>char + char).join("");
        const baseHex = `#${expanded.slice(0, 6)}`;
        const alphaHex = expanded.slice(6, 8);
        return {
            baseHex,
            opacity: alphaHex ? Math.round(parseInt(alphaHex, 16) / 255 * 100) : 100
        };
    }
    return {
        baseHex: `#${digits.slice(0, 6)}`,
        opacity: digits.length === 8 ? Math.round(parseInt(digits.slice(6, 8), 16) / 255 * 100) : 100
    };
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/shape-view-renderer/consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALLOWED_SHAPE_ATTRIBUTES",
    ()=>ALLOWED_SHAPE_ATTRIBUTES,
    "DEFAULT_COLOR",
    ()=>DEFAULT_COLOR
]);
const ALLOWED_SHAPE_ATTRIBUTES = [
    "data-bbox",
    "viewBox",
    "xmlns",
    "d",
    "fill",
    "fill-opacity",
    "fill-rule",
    "clip-rule",
    "stroke",
    "stroke-width",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-opacity",
    "opacity",
    "transform"
];
const DEFAULT_COLOR = "#000000";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media/media-url-consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WIX_MEDIA_BASE_URL",
    ()=>WIX_MEDIA_BASE_URL,
    "WIX_SHAPES_BASE_URL",
    ()=>WIX_SHAPES_BASE_URL,
    "WIX_VIDEO_BASE_URL",
    ()=>WIX_VIDEO_BASE_URL
]);
const WIX_MEDIA_BASE_URL = "https://static.wixstatic.com/";
const WIX_VIDEO_BASE_URL = "https://video.wixstatic.com/";
const WIX_SHAPES_BASE_URL = "https://static.wixstatic.com/shapes/";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/shape-view-renderer/get-shape-url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getShapeUrl",
    ()=>getShapeUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2f$media$2d$url$2d$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media/media-url-consts.js [app-client] (ecmascript)");
;
const getShapeUrl = (src, getUrlOverride)=>{
    if (src.url) {
        return src.url;
    }
    if (src.id) {
        const baseUrl = getUrlOverride ? getUrlOverride() : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2f$media$2d$url$2d$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WIX_SHAPES_BASE_URL"];
        return `${baseUrl}${src.id}`;
    }
    return "";
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/shape-view-renderer/get-parsed-shape.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getParsedShape",
    ()=>getParsedShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$svgson$40$5$2e$3$2e$1$2f$node_modules$2f$svgson$2f$dist$2f$svgson$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/svgson@5.3.1/node_modules/svgson/dist/svgson.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2f$get$2d$shape$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/shape-view-renderer/get-shape-url.js [app-client] (ecmascript)");
;
;
const getParsedShape = async (shapeSrc, getUrlOverride)=>{
    try {
        const shapeUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2f$get$2d$shape$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShapeUrl"])(shapeSrc, getUrlOverride);
        const svgJson = await fetch(shapeUrl).then((res)=>res.text()).then((text)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$svgson$40$5$2e$3$2e$1$2f$node_modules$2f$svgson$2f$dist$2f$svgson$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(text));
        return svgJson;
    } catch (error) {
        console.error("[ShapeService] Failed to fetch shapes:", error);
        throw error;
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/shape-view-renderer/shape-view-renderer-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>shape_view_renderer_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "1a5c4ad5";
const injectCss = ()=>{
    var css = `._94yBq{align-items:center;background:rgba(0,6,36,.1);border-radius:8px;display:flex;flex-direction:column;gap:12px;height:170px;justify-content:center;padding:16px;width:200px}.ekujc{color:#fff}`;
    var isTest = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && false;
    if (isTest || !css || typeof document === "undefined") {
        return;
    }
    if (document.querySelector('style[data-ricos-style-hash="' + styleDataHash + '"]')) {
        return;
    }
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.setAttribute("data-ricos-style-hash", styleDataHash);
    style.type = "text/css";
    head.appendChild(style);
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
};
injectCss();
var shape_view_renderer_default = {
    "shape_pending_overlay": "_94yBq",
    "shape_pending_overlay_loader": "ekujc"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/shape-view-renderer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShapeViewRenderer",
    ()=>ShapeViewRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/theme-color-token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Components$2f$double$2d$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ui-components/Components/double-loader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/shape-view-renderer/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2f$get$2d$parsed$2d$shape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/shape-view-renderer/get-parsed-shape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2f$shape$2d$view$2d$renderer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/shape-view-renderer/shape-view-renderer-scss.js [app-client] (ecmascript)");
;
;
;
;
;
;
const isEmptyPaint = (value)=>value === "none" || value === "transparent";
const hasAnyStroke = (node)=>{
    if (!node) {
        return false;
    }
    const stroke = node.attributes?.stroke;
    if (stroke && !isEmptyPaint(stroke)) {
        return true;
    }
    return (node.children || []).some(hasAnyStroke);
};
const RenderSvgNodes = ({ node, colors })=>{
    if (!node) {
        return null;
    }
    const { name, attributes, children } = node;
    const filteredAttributes = Object.fromEntries(Object.entries(attributes).filter(([key])=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALLOWED_SHAPE_ATTRIBUTES"].includes(key)));
    const renderChildren = ()=>{
        return children.map((child, i)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RenderSvgNodes, {
                key: i,
                node: child,
                colors
            }));
    };
    const colorKeys = Object.keys(colors || {});
    const isSingleColorViaCurrentColor = colors !== void 0 && colorKeys.length === 0;
    const isSingleColorViaDefault = colorKeys.length === 1 && Boolean(colors?.[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COLOR"]]);
    const resolveColor = (originalColor)=>{
        if (isEmptyPaint(originalColor)) {
            return originalColor;
        }
        if (isSingleColorViaCurrentColor) {
            return "currentColor";
        }
        if (isSingleColorViaDefault) {
            const color2 = colors?.[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COLOR"]];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDocumentColorToCss"])(color2) ?? color2;
        }
        const color = originalColor && colors?.[originalColor] || originalColor;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDocumentColorToCss"])(color) ?? color;
    };
    const paintProps = {
        fill: resolveColor(attributes.fill)
    };
    if (attributes.stroke !== void 0) {
        paintProps.stroke = resolveColor(attributes.stroke);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(name, {
        ...filteredAttributes,
        ...paintProps
    }, ...renderChildren());
};
const ShapeViewRenderer = ({ shapeJson, shapeSrc, colors, getShapeUrl, style, isLoading, hideLoadingOverlay, dimensions, onShapeLoaded, preserveAspectRatio = "none" })=>{
    const [localShapeJson, setLocalShapeJson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const shapeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shape = shapeJson || localShapeJson;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShapeViewRenderer.useEffect": ()=>{
            if (shapeJson || !shapeSrc.id && !shapeSrc.url) {
                return;
            }
            const fetchShape = {
                "ShapeViewRenderer.useEffect.fetchShape": async ()=>{
                    const parsedShapeJson = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2f$get$2d$parsed$2d$shape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParsedShape"])(shapeSrc, getShapeUrl);
                    setLocalShapeJson(parsedShapeJson);
                }
            }["ShapeViewRenderer.useEffect.fetchShape"];
            fetchShape();
        }
    }["ShapeViewRenderer.useEffect"], [
        shapeSrc.id,
        shapeSrc.url
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShapeViewRenderer.useEffect": ()=>{
            if (!shapeRef.current) {
                return;
            }
            const width = shapeRef.current.clientWidth;
            const height = shapeRef.current.clientHeight;
            onShapeLoaded?.({
                width,
                height
            });
        }
    }["ShapeViewRenderer.useEffect"], [
        shapeRef.current
    ]);
    if (!shape || isLoading) {
        if (hideLoadingOverlay) {
            return null;
        }
        const width = dimensions?.width || shapeRef.current?.clientWidth;
        const height = dimensions?.height || shapeRef.current?.clientHeight;
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2f$shape$2d$view$2d$renderer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape_pending_overlay,
            style: {
                width: `${width}px`,
                height: `${height}px`
            }
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2f$shape$2d$view$2d$renderer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape_pending_overlay_loader
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Components$2f$double$2d$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleLoader"], null)));
    }
    const viewBox = hasAnyStroke(shape) ? shape.attributes.viewBox || shape.attributes["data-bbox"] : shape.attributes["data-bbox"] || shape.attributes.viewBox;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        ref: shapeRef,
        viewBox,
        xmlns: shape.attributes.xmlns,
        preserveAspectRatio,
        "aria-hidden": "true",
        style: {
            width: "var(--ricos-internal-resize-width, 100%)",
            maxWidth: "100%",
            ...style
        }
    }, shape.children.map((child, i)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RenderSvgNodes, {
            key: i,
            node: child,
            colors
        })));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/linkify/linkify.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linkify",
    ()=>linkify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$linkify$2d$it$40$5$2e$0$2e$2$2f$node_modules$2f$linkify$2d$it$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/linkify-it@5.0.2/node_modules/linkify-it/index.mjs [app-client] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$linkify$2d$it$40$5$2e$0$2e$2$2f$node_modules$2f$linkify$2d$it$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype.onCompile = function() {
    const re = this.re;
    const text_separators = "[><｜]";
    re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|_|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
    re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
    re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
    re.src_host_strict = re.src_host + re.src_host_terminator;
    re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
    re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
    re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
    re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
    re.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re.src_ZPCc + "))((?![$+<=>^`|｜])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
    re.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re.src_ZPCc + "))((?![$+<=>^`|｜])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
};
const linkify = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$linkify$2d$it$40$5$2e$0$2e$2$2f$node_modules$2f$linkify$2d$it$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/contains-url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "containsUrl",
    ()=>containsUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$linkify$2f$linkify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/linkify/linkify.js [app-client] (ecmascript)");
;
const containsUrl = (url)=>url && url[0] !== "#" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$linkify$2f$linkify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkify"].test(url);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/section-type-keys.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sectionTypeKeys",
    ()=>sectionTypeKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
;
const sectionTypeKeys = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BLOCKQUOTE]: "LinkTo_Modal_Section_Item_Quote",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BUTTON]: "LinkTo_Modal_Section_Item_Button",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CODE_BLOCK]: "LinkTo_Modal_Section_Item_Codeblock",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].FILE]: "LinkTo_Modal_Section_Item_File",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GALLERY]: "LinkTo_Modal_Section_Item_Gallery",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GIF]: "LinkTo_Modal_Section_Item_GIF",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING]: "LinkTo_Modal_Section_Item_Heading",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].IMAGE]: "LinkTo_Modal_Section_Item_Image",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].PARAGRAPH]: "LinkTo_Modal_Section_Item_Paragraph",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SHAPE]: "LinkTo_Modal_Section_Item_Shape",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].VIDEO]: "LinkTo_Modal_Section_Item_Video"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/block-quote-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlockQuoteIcon",
    ()=>BlockQuoteIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const BlockQuoteIcon = (props)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: 19,
        height: 19,
        viewBox: "0 0 19 19",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("defs", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "currentColor",
        id: "block-quote-icon-path",
        d: "M11.2 4h4.6c.11 0 .2.09.2.2v4.533c0 .852-.095 1.655-.284 2.408a6.033 6.033 0 0 1-.875 1.983 4.501 4.501 0 0 1-1.488 1.364c-.598.341-1.32.512-2.165.512v-2.132c.495 0 .904-.12 1.224-.362.321-.242.584-.562.788-.96.204-.397.343-.845.416-1.343.073-.497.109-.83.109-1.314H11.2a.2.2 0 0 1-.2-.2V4.2c0-.11.09-.2.2-.2zm-8 0h4.6c.11 0 .2.09.2.2v4.533c0 .852-.095 1.655-.284 2.408a6.033 6.033 0 0 1-.875 1.983 4.501 4.501 0 0 1-1.488 1.364c-.598.341-1.32.512-2.165.512v-2.132c.495 0 .904-.12 1.224-.362.321-.242.584-.562.788-.96.204-.397.343-.845.416-1.343.073-.497.109-.83.109-1.314H3.2a.2.2 0 0 1-.2-.2V4.2c0-.11.09-.2.2-.2z"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        fillRule: "evenodd"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("mask", {
        id: "block-quote-icon-mask"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("use", {
        xlinkHref: "#block-quote-icon-path"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("use", {
        fillRule: "nonzero",
        xlinkHref: "#block-quote-icon-path"
    })));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/button-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonIcon",
    ()=>ButtonIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ButtonIcon = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "17",
        height: "19",
        viewBox: "0 0 19 19"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        stroke: "currentColor",
        transform: "translate(1)"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
        width: "14.211",
        height: "7",
        x: "1.395",
        y: "5.5",
        rx: "3.5"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M11.034 7.541c1.246-.305 2.063.18 2.453 1.459"
    })));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/code-block-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlockIcon",
    ()=>CodeBlockIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const CodeBlockIcon = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "19",
        height: "19",
        viewBox: "0 0 19 19"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2 3h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 1v11h15V4H2zm12.8 9H9.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h5.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zm-10.542.25a.2.2 0 0 1-.282 0l-.425-.425a.2.2 0 0 1 0-.283l3.041-3.041-3.04-3.04a.2.2 0 0 1 0-.283l.424-.425a.2.2 0 0 1 .283 0l3.606 3.606a.2.2 0 0 1 0 .283l-3.607 3.607z"
    }));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/file-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileIcon",
    ()=>FileIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const FileIcon = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "19",
        viewBox: "0 0 19 19"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "currentColor",
        d: "m15,14a1,1 0 0 1 -1,1l-9,0a1,1 0 0 1 -1,-1l0,-2.715c0,-0.11 0.09,-0.2 0.2,-0.2l0.6,0c0.11,0 0.2,0.09 0.2,0.2l0,2.715l9,0l0,-2.715c0,-0.11 0.09,-0.2 0.2,-0.2l0.6,0c0.11,0 0.2,0.09 0.2,0.2l0,2.715zm-5,-9.177l0,7.062a0.2,0.2 0 0 1 -0.2,0.2l-0.6,0a0.2,0.2 0 0 1 -0.2,-0.2l0,-7.05l-2.293,2.275a0.2,0.2 0 0 1 -0.283,0l-0.424,-0.425a0.2,0.2 0 0 1 0,-0.283l3.366,-3.342a0.2,0.2 0 0 1 0.283,0l3.351,3.342a0.2,0.2 0 0 1 0,0.283l-0.424,0.425a0.2,0.2 0 0 1 -0.283,0l-2.293,-2.287z"
    }));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/gallery-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GalleryIcon",
    ()=>GalleryIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const GalleryIcon = (props)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 19 19",
        width: "19",
        height: "19",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("defs", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        id: "gallery-plugin-insert-path",
        d: "M3 3h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 1v4h7V4H3zm10-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 1v4h3V4h-3zM3 10h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 1v4h3v-4H3zm6-1h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 1v4h7v-4H9z"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        fillRule: "evenodd"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("mask", {
        id: "gallery-plugin-insert-mask"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("use", {
        xlinkHref: "#gallery-plugin-insert-path"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("use", {
        fillRule: "nonzero",
        xlinkHref: "#gallery-plugin-insert-path"
    })));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/giphy-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GiphyIcon",
    ()=>GiphyIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const GiphyIcon = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "13",
        viewBox: "0 0 19 13"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        stroke: "currentColor"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M10 1v11.2M14.51 12.227V1.405h4.502M14.154 5.407h3.85M6 3.089a2.08 2.08 0 0 0-2.041-1.684h-.875a2.59 2.59 0 0 0-2.59 2.59v5.068a2.753 2.753 0 0 0 2.753 2.753h.346A2.407 2.407 0 0 0 6 9.409V8a1 1 0 0 0-1-1H2.804"
    })));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/h1-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "H1Icon",
    ()=>H1Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const H1Icon = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "16px",
        height: "11px",
        viewBox: "0 0 18 13",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        id: "📟--Specs-for-devs",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        id: "Mobile-headings",
        transform: "translate(-165.000000, -687.000000)",
        fill: "#000000",
        fillRule: "nonzero"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "currentColor",
        d: "M167.535659,699.5 L167.535659,694.026 L173.060659,694.026 L173.060659,699.5 L175.185659,699.5 L175.185659,687.362 L173.060659,687.362 L173.060659,692.19 L167.535659,692.19 L167.535659,687.362 L165.410659,687.362 L165.410659,699.5 L167.535659,699.5 Z M182.393659,699.5 L182.393659,687.6 L180.812659,687.6 C180.744659,687.962667 180.600159,688.268667 180.379159,688.518 C180.158159,688.767333 179.891826,688.971333 179.580159,689.13 C179.268493,689.288667 178.919993,689.402 178.534659,689.47 C178.149326,689.538 177.752659,689.572 177.344659,689.572 L177.344659,689.572 L177.344659,691.102 L180.268659,691.102 L180.268659,699.5 L182.393659,699.5 Z",
        id: "H1"
    }))));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/h2-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "H2Icon",
    ()=>H2Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const H2Icon = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "19",
        viewBox: "0 0 19 19"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "currentColor",
        d: "M2.75 14.996v-4.508H7.3v4.508h1.75V5H7.3v3.976H2.75V5H1v9.996h1.75zm14.574 0v-1.428H12.55c.065-.215.187-.418.364-.609s.385-.376.623-.553c.238-.177.497-.355.777-.532.28-.177.56-.364.84-.56.28-.196.55-.406.812-.63.261-.224.495-.469.7-.735.205-.266.369-.558.49-.875.121-.317.182-.672.182-1.064 0-.317-.051-.651-.154-1.001-.103-.35-.278-.674-.525-.973-.247-.299-.572-.546-.973-.742-.401-.196-.9-.294-1.498-.294-.55 0-1.034.096-1.449.287-.415.191-.768.455-1.057.791-.29.336-.506.735-.651 1.197-.145.462-.217.964-.217 1.505h1.596c.01-.345.044-.667.105-.966.06-.299.154-.558.28-.777.126-.22.294-.392.504-.518.21-.126.474-.189.791-.189.345 0 .625.058.84.175.215.117.383.261.504.434s.203.36.245.56c.042.2.063.39.063.567-.01.383-.107.721-.294 1.015-.187.294-.425.567-.714.819-.29.252-.607.488-.952.707-.345.22-.677.446-.994.679-.663.448-1.185.975-1.568 1.582-.383.607-.579 1.316-.588 2.128h6.692z"
    }));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/h3-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "H3Icon",
    ()=>H3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const H3Icon = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "19",
        viewBox: "0 0 19 19"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "currentColor",
        d: "M2.75 14.996v-4.508H7.3v4.508h1.75V5H7.3v3.976H2.75V5H1v9.996h1.75zm11.214.196c.467 0 .91-.07 1.33-.21.42-.14.789-.338 1.106-.595.317-.257.57-.57.756-.938.187-.369.28-.786.28-1.253 0-.635-.156-1.174-.469-1.617-.313-.443-.749-.721-1.309-.833v-.028c.476-.168.826-.436 1.05-.805.224-.369.336-.8.336-1.295 0-.43-.089-.81-.266-1.141-.177-.331-.413-.604-.707-.819-.294-.215-.625-.378-.994-.49C14.708 5.056 14.333 5 13.95 5c-.495 0-.938.084-1.33.252-.392.168-.726.401-1.001.7-.275.299-.492.651-.651 1.057-.159.406-.247.847-.266 1.323h1.596c-.01-.252.019-.497.084-.735s.166-.453.301-.644c.135-.191.306-.343.511-.455.205-.112.448-.168.728-.168.448 0 .814.126 1.099.378.285.252.427.588.427 1.008 0 .299-.063.55-.189.756-.126.205-.292.366-.497.483-.205.117-.439.198-.7.245-.261.047-.523.065-.784.056v1.19c.317-.01.628 0 .931.028.303.028.576.1.819.217.243.117.439.287.588.511.15.224.224.527.224.91 0 .56-.18.992-.539 1.295-.36.303-.805.455-1.337.455-.625 0-1.094-.198-1.407-.595-.313-.397-.46-.894-.441-1.491H10.52c.01.513.089.98.238 1.4.15.42.366.78.651 1.078.285.299.64.53 1.064.693.425.163.922.245 1.491.245z"
    }));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/h4-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "H4Icon",
    ()=>H4Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const H4Icon = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "19",
        viewBox: "0 0 19 19"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "currentColor",
        d: "M2.75 14.996v-4.508H7.3v4.508h1.75V5H7.3v3.976H2.75V5H1v9.996h1.75zm13.384 0v-2.324h1.26v-1.26h-1.26V5.196h-1.512l-4.2 5.894v1.582h4.2v2.324h1.512zm-1.512-3.584h-2.968l2.94-4.312h.028v4.312z"
    }));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/h5-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "H5Icon",
    ()=>H5Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const H5Icon = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "19",
        viewBox: "0 0 19 19"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "currentColor",
        d: "M2.75 14.996v-4.508H7.3v4.508h1.75V5H7.3v3.976H2.75V5H1v9.996h1.75zm11.256.196c.597 0 1.11-.11 1.54-.329.43-.22.782-.5 1.057-.84.275-.34.476-.719.602-1.134.126-.415.189-.819.189-1.211 0-.467-.068-.9-.203-1.302-.135-.401-.334-.749-.595-1.043-.261-.294-.583-.523-.966-.686-.383-.163-.817-.245-1.302-.245-.327 0-.656.063-.987.189-.331.126-.604.31-.819.553l-.028-.028.504-2.492h3.878V5.196h-5.068l-1.05 5.362h1.596c.13-.345.343-.581.637-.707s.609-.189.945-.189c.317 0 .595.056.833.168.238.112.432.261.581.448.15.187.261.404.336.651.075.247.112.506.112.777 0 .299-.03.579-.091.84-.06.261-.163.49-.308.686-.145.196-.334.35-.567.462-.233.112-.518.168-.854.168-.523 0-.943-.142-1.26-.427-.317-.285-.5-.693-.546-1.225h-1.596c.019.495.119.926.301 1.295.182.369.427.679.735.931s.665.441 1.071.567c.406.126.847.189 1.323.189z"
    }));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/h6-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "H6Icon",
    ()=>H6Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const H6Icon = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "19",
        viewBox: "0 0 19 19"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "currentColor",
        d: "M2.75 13.996V9.488H7.3v4.508h1.75V4H7.3v3.976H2.75V4H1v9.996h1.75zm11.382.196c.485 0 .929-.084 1.33-.252.401-.168.747-.404 1.036-.707.29-.303.511-.658.665-1.064.154-.406.231-.847.231-1.323 0-.467-.07-.9-.21-1.302-.14-.401-.343-.749-.609-1.043-.266-.294-.59-.525-.973-.693-.383-.168-.817-.252-1.302-.252-.439 0-.847.096-1.225.287-.378.191-.674.483-.889.875l-.028-.028.063-.693c.023-.247.063-.497.119-.749.056-.252.128-.492.217-.721.089-.229.205-.432.35-.609s.322-.32.532-.427c.21-.107.46-.161.749-.161.42 0 .754.124 1.001.371.247.247.39.572.427.973h1.596c-.019-.401-.112-.765-.28-1.092-.168-.327-.385-.607-.651-.84-.266-.233-.572-.415-.917-.546-.345-.13-.714-.196-1.106-.196-.69 0-1.272.154-1.743.462-.471.308-.852.707-1.141 1.197-.29.49-.497 1.034-.623 1.631s-.189 1.19-.189 1.778c0 .719.051 1.388.154 2.009.103.62.287 1.162.553 1.624.266.462.63.826 1.092 1.092.462.266 1.052.399 1.771.399zm-.056-1.33c-.29 0-.544-.056-.763-.168-.22-.112-.404-.264-.553-.455-.15-.191-.261-.408-.336-.651-.075-.243-.112-.5-.112-.77s.037-.527.112-.77c.075-.243.187-.455.336-.637.15-.182.334-.327.553-.434.22-.107.474-.161.763-.161.29 0 .541.056.756.168.215.112.394.259.539.441.145.182.252.394.322.637s.105.495.105.756-.035.516-.105.763c-.07.247-.177.464-.322.651-.145.187-.324.338-.539.455-.215.117-.467.175-.756.175z"
    }));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/image-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageIcon",
    ()=>ImageIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ImageIcon = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "19",
        height: "19",
        viewBox: "0 0 19 19"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        fillRule: "evenodd"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M2 6a1 1 0 0 1 1-1h2.75l.668-1.424A1 1 0 0 1 7.323 3h4.354a1 1 0 0 1 .905.576L13.25 5H16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6zm1 0v8h13V6h-3.5l-1.018-2H7.518L6.5 6H3zm6.5 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
        id: "path-1"
    })));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/paragraph-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParagraphIcon",
    ()=>ParagraphIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ParagraphIcon = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "19",
        viewBox: "0 0 19 19"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "currentColor",
        d: "M7.75 14.996V11.16h2.66c.71 0 1.288-.1 1.736-.301.448-.2.793-.455 1.036-.763s.408-.642.497-1.001c.089-.36.133-.693.133-1.001 0-.308-.044-.644-.133-1.008-.089-.364-.254-.7-.497-1.008-.243-.308-.588-.565-1.036-.77C11.698 5.103 11.119 5 10.41 5H6v9.996h1.75zm2.562-5.264H7.75V6.428h2.59c.233 0 .453.023.658.07.205.047.387.133.546.259.159.126.285.296.378.511.093.215.14.485.14.812 0 .317-.054.581-.161.791-.107.21-.247.378-.42.504s-.362.217-.567.273c-.205.056-.406.084-.602.084z"
    }));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/video-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoIcon",
    ()=>VideoIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const VideoIcon = (props)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 19 19",
        width: "19",
        height: "19",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("defs", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        id: "video-icon-path",
        d: "M14 7l2.842-1.421A.8.8 0 0 1 18 6.294v6.412a.8.8 0 0 1-1.158.715L14 12v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2zm0 3.9l2.708 1.354a.2.2 0 0 0 .29-.179V6.922a.2.2 0 0 0-.29-.178L14 8.098V10.9zM2 5v9h11V5H2z"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        fillRule: "evenodd"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("mask", {
        id: "video-icon-mask"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("use", {
        xlinkHref: "#video-icon-path"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("use", {
        fillRule: "nonzero",
        xlinkHref: "#video-icon-path"
    })));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/use-options.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSectionOptions",
    ()=>useSectionOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Image$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Image/Image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/ListItemSelect/ListItemSelect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2d$query$2f$content$2d$query$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content-query/content-query-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2d$query$2f$get$2d$anchorable$2d$nodes$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content-query/get-anchorable-nodes-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2d$query$2f$is$2d$anchorable$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content-query/is-anchorable-node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$RicosContentAPI$2f$extract$2d$by$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/RicosContentAPI/extract-by-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/editor-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/uncreachable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$lib$2f$image$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/lib/image-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/shape-view-renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$contains$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/contains-url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$section$2d$type$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/section-type-keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$block$2d$quote$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/block-quote-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$button$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/button-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$code$2d$block$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/code-block-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$file$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/file-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$gallery$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/gallery-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$giphy$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/giphy-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$h1$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/h1-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$h2$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/h2-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$h3$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/h3-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$h4$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/h4-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$h5$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/h5-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$h6$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/h6-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$image$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/image-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$paragraph$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/paragraph-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$video$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/icons/video-icon.js [app-client] (ecmascript)");
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
const headingIcons = {
    1: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$h1$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H1Icon"], null),
    2: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$h2$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H2Icon"], null),
    3: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$h3$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H3Icon"], null),
    4: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$h4$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H4Icon"], null),
    5: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$h5$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H5Icon"], null),
    6: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$h6$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H6Icon"], null)
};
const getPrefix = (node)=>{
    switch(node.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BLOCKQUOTE:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$block$2d$quote$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockQuoteIcon"], null);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BUTTON:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$button$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonIcon"], null);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CODE_BLOCK:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$code$2d$block$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlockIcon"], null);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].FILE:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$file$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileIcon"], null);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GALLERY:
            {
                const item = node.galleryData?.items[0];
                const src = item && item.video ? item?.video?.thumbnail?.src?.url : item?.image?.media?.src?.id ?? item?.image?.media?.src?.url;
                return src ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ImagePreview, {
                    src
                }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$gallery$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GalleryIcon"], null);
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GIF:
            {
                const src = node.gifData?.downsized?.still;
                return src ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ImagePreview, {
                    src
                }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$giphy$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GiphyIcon"], null);
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING:
            return headingIcons[node.headingData?.level || 0];
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].IMAGE:
            {
                const src = node.imageData?.image?.src?.url ?? node.imageData?.image?.src?.id;
                return src ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ImagePreview, {
                    src
                }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$image$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageIcon"], null);
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].PARAGRAPH:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$paragraph$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParagraphIcon"], null);
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].VIDEO:
            {
                const src = node.videoData?.thumbnail?.src?.url ?? node.videoData?.thumbnail?.src?.id;
                return src ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ImagePreview, {
                    src
                }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$icons$2f$video$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoIcon"], null);
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SHAPE:
            {
                const shapeData = node.shapeData;
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ShapePreview, {
                    shapeSrc: shapeData?.shape?.src,
                    color: shapeData?.styles?.color
                });
            }
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(node.type);
    }
};
const getTitle = (node, nodeIndex, t)=>{
    switch(node.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BLOCKQUOTE:
            return node.nodes[0].nodes[0].textData?.text;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BUTTON:
            return node.buttonData?.text;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CODE_BLOCK:
            return node.nodes[0].textData?.text;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].FILE:
            return node.fileData?.name || `${t("LinkTo_Modal_Section_Item_File")} ${nodeIndex}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GALLERY:
            return `${t("LinkTo_Modal_Section_Item_Gallery")} ${nodeIndex}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GIF:
            return `${t("LinkTo_Modal_Section_Item_GIF")} ${nodeIndex}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$RicosContentAPI$2f$extract$2d$by$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getText"])(node).join("");
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].IMAGE:
            return `${t("LinkTo_Modal_Section_Item_Image")} ${nodeIndex}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].PARAGRAPH:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$RicosContentAPI$2f$extract$2d$by$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getText"])(node).join("");
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].VIDEO:
            return `${t("LinkTo_Modal_Section_Item_Video")} ${nodeIndex}`;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SHAPE:
            return `${t("LinkTo_Modal_Section_Item_Shape")} ${nodeIndex}`;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(node.type);
    }
};
const useSectionOptions = ()=>{
    const contentQueryService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2d$query$2f$content$2d$query$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentQueryContext"]);
    const { getPublicCommands } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContext"]);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const selection = getPublicCommands().getSelection();
    const anchorableNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSectionOptions.useMemo[anchorableNodes]": ()=>{
            if (!contentQueryService) {
                return [];
            }
            const selectedNodeIds = selection.selectedNodes.map({
                "useSectionOptions.useMemo[anchorableNodes].selectedNodeIds": (node)=>node.attrs.id
            }["useSectionOptions.useMemo[anchorableNodes].selectedNodeIds"]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2d$query$2f$get$2d$anchorable$2d$nodes$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnchorableNodesQuery"])(contentQueryService.getContentExtractor(), selection.startKey).filter(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2d$query$2f$is$2d$anchorable$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnchorableNode"]).filter({
                "useSectionOptions.useMemo[anchorableNodes]": (node)=>selectedNodeIds.includes(node.id) ? false : node.type === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BLOCKQUOTE ? node.nodes[0].nodes[0].textData?.text !== void 0 : true
            }["useSectionOptions.useMemo[anchorableNodes]"]);
        }
    }["useSectionOptions.useMemo[anchorableNodes]"], [
        contentQueryService,
        selection.endKey,
        selection.startKey
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSectionOptions.useMemo": ()=>{
            const counters = {
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].PARAGRAPH]: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING]: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CODE_BLOCK]: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BLOCKQUOTE]: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].IMAGE]: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GALLERY]: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].VIDEO]: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BUTTON]: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GIF]: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].FILE]: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SHAPE]: 0
            };
            const sections = anchorableNodes.map({
                "useSectionOptions.useMemo.sections": (node)=>{
                    counters[node.type] += 1;
                    const prefix = getPrefix(node);
                    const title = getTitle(node, counters[node.type], t) || "";
                    return {
                        id: node.id,
                        node,
                        prefix,
                        prefixAvatar: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                            shape: "square",
                            size: "size30",
                            placeholder: prefix
                        }),
                        subtitle: t(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$section$2d$type$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sectionTypeKeys"][node.type]),
                        title
                    };
                }
            }["useSectionOptions.useMemo.sections"]).filter({
                "useSectionOptions.useMemo.sections": (section)=>!!section.title
            }["useSectionOptions.useMemo.sections"]);
            const allLabel = t("LinkTo_Modal_Section_Filter_All");
            const sectionTypeOptions = [
                {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemSelectBuilder"])({
                        id: "all",
                        label: allLabel,
                        size: "small",
                        title: allLabel
                    }),
                    label: allLabel
                },
                ...Object.entries(counters).filter({
                    "useSectionOptions.useMemo": ([_, count])=>count
                }["useSectionOptions.useMemo"]).map({
                    "useSectionOptions.useMemo": ([nodeType])=>{
                        const label = t(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$section$2d$type$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sectionTypeKeys"][nodeType]);
                        return {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemSelectBuilder"])({
                                id: nodeType,
                                label,
                                size: "small",
                                title: label
                            }),
                            label
                        };
                    }
                }["useSectionOptions.useMemo"])
            ];
            return {
                sections,
                sectionTypeOptions
            };
        }
    }["useSectionOptions.useMemo"], [
        anchorableNodes
    ]);
};
const ImagePreview = ({ src })=>{
    const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$lib$2f$image$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$contains$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsUrl"])(src) ? src : {
        file_name: src,
        id: src,
        width: 48,
        height: 48
    }, void 0, {
        requiredWidth: 48,
        requiredHeight: 48,
        requiredQuality: 80,
        imageType: "highRes"
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Image$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
        fit: "contain",
        src: imageSrc,
        borderRadius: 0
    });
};
const ShapePreview = ({ shapeSrc, color })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 4,
            width: 30,
            height: 30,
            fill: color
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$shape$2d$view$2d$renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeViewRenderer"], {
        shapeSrc
    }));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/section-desktop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionDesktop",
    ()=>SectionDesktop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$AutoComplete$2f$AutoComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AutoComplete$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/AutoComplete/AutoComplete.js [app-client] (ecmascript) <export default as AutoComplete>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Dropdown/Dropdown.js [app-client] (ecmascript) <export default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript) <export default as FormField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Input/Input.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$MultiSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MultiSelect$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/MultiSelect/index.js [app-client] (ecmascript) <export default as MultiSelect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Text/Text.js [app-client] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/ListItemSelect/ListItemSelect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/editor-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/common.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/bi-context-provider/bi-context-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$empty$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/empty-state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$use$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/use-options.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const SectionDesktop = ({ autoCompletePopoverProps, autoFocus, dropDownPopoverProps, link, tooltipProps, multipleSections, onSelect, onSubmit, t, setMultipleSections })=>{
    const logBi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBiNext"])({
        pluginId: "link",
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_MODAL_ID"]
    });
    const { sections, sectionTypeOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$use$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionOptions"])();
    const { adapter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContext"]);
    const enableMultipleSelection = adapter.tiptapEditor?.state?.selection?.empty && !adapter.getEditorCommands().hasLinkInSelection();
    const sectionOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SectionDesktop.useMemo[sectionOptions]": ()=>sections.map({
                "SectionDesktop.useMemo[sectionOptions]": (section)=>Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemSelectBuilder"])({
                        ellipsis: true,
                        titleMaxLines: 2,
                        id: section.id,
                        label: section.title,
                        prefix: section.prefixAvatar,
                        size: "small",
                        subtitle: section.subtitle,
                        title: section.title,
                        tooltipProps: {
                            ...tooltipProps,
                            children: section.title,
                            enterDelay: 1e3,
                            placement: "top"
                        }
                    }), {
                        node: section.node,
                        prefix: section.prefix
                    })
            }["SectionDesktop.useMemo[sectionOptions]"])
    }["SectionDesktop.useMemo[sectionOptions]"], [
        sections,
        tooltipProps
    ]);
    const [selectedTypeOption, setSelectedTypeOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sectionTypeOptions[0]);
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SectionDesktop.useState": // Initially "all" option types are selected so any found option should be present in `filteredOptions` below:
        ()=>link.anchor && sectionOptions.find({
                "SectionDesktop.useState": (option)=>option.node.id === link.anchor
            }["SectionDesktop.useState"]) || null
    }["SectionDesktop.useState"]);
    const [searchPrefix, setSearchPrefix] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedOption?.prefix || null);
    const [searchText, setSearchText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedOption?.label || "");
    const filteredOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SectionDesktop.useMemo[filteredOptions]": ()=>{
            const lowerSearchText = searchText.trim().toLowerCase();
            return sectionOptions.filter({
                "SectionDesktop.useMemo[filteredOptions]": (option)=>(selectedTypeOption.id === "all" || option.node.type === selectedTypeOption.id) && (selectedOption || !lowerSearchText || typeof option.label === "string" && option.label?.toLowerCase().includes(lowerSearchText))
            }["SectionDesktop.useMemo[filteredOptions]"]);
        }
    }["SectionDesktop.useMemo[filteredOptions]"], [
        sectionOptions,
        searchText,
        selectedTypeOption
    ]);
    const onChangeInput = (value)=>{
        setSearchPrefix(null);
        setSearchText(value);
        setSelectedOption(null);
    };
    const onSelectTypeOption = (option)=>{
        setSelectedTypeOption(option);
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_TYPE_SELECT"],
            value: `${option.id}`
        });
    };
    const onSelectValueOption = (option)=>{
        setSearchPrefix(option.prefix);
        setSearchText(option.label || searchText);
        setSelectedOption(option);
        onSelect(option.node.id, option.label);
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_SELECT"],
            value: option.label
        });
    };
    const onEnterPressed = (evt)=>{
        if (selectedOption) {
            onSelect(selectedOption.node.id, selectedOption.label);
            onSubmit(evt);
        }
        if (multipleSections.length > 0 && !isOptionMarked) {
            onSubmit(evt);
            setIsOptionMarked(false);
        }
    };
    if (sectionOptions.length === 0) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$empty$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionEmptyState"], {
            t
        });
    }
    const [isOptionMarked, setIsOptionMarked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onMultiSelectOption = (option)=>{
        setIsOptionMarked(false);
        setMultipleSections((prev)=>[
                ...prev,
                {
                    anchor: option.node.id,
                    defaultName: option.label,
                    target: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link_Target"].BLANK,
                    url: void 0
                }
            ]);
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_MULTISELECT"],
            value: option.label
        });
    };
    const onRemoveTag = (tagId)=>setMultipleSections((prevTags)=>prevTags.filter((currTag)=>currTag.anchor !== tagId));
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        label: t("LinkSettings_Sections_TypeDropdown_Label"),
        labelPlacement: "top"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_TYPE_SELECT"],
        onSelect: onSelectTypeOption,
        options: sectionTypeOptions,
        popoverProps: dropDownPopoverProps,
        selectedId: selectedTypeOption.id,
        size: "small",
        valueParser: (option)=>option.label
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        label: t(enableMultipleSelection ? "LinkSettings_Sections_MultiSelect_Label" : "LinkSettings_Sections_AutoComplete_Label"),
        labelPlacement: "top"
    }, enableMultipleSelection ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$MultiSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MultiSelect$3e$__["MultiSelect"], {
        autoFocus,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_MULTISELECT"],
        dropdownWidth: "auto",
        emptyStateMessage: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"], {
            skin: "disabled",
            size: "small"
        }, searchText ? t("LinkSettings_Sections_AutoComplete_NoResults_Search", {
            searchText
        }) : t("LinkSettings_Sections_AutoComplete_NoResults_All")),
        minWidthPixels: "252px",
        onChange: (evt)=>onChangeInput(evt.target.value),
        onEnterPressed,
        options: filteredOptions,
        placeholder: t("LinkSettings_Sections_MultiSelect_Placeholder"),
        popoverProps: autoCompletePopoverProps,
        prefix: searchPrefix && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"].IconAffix, null, searchPrefix),
        size: "small",
        textOverflow: "ellipsis",
        value: searchText,
        onSelect: onMultiSelectOption,
        onRemoveTag,
        tags: multipleSections.map((section)=>({
                id: section.anchor || "",
                label: section?.defaultName || ""
            })),
        onOptionMarked: (option)=>{
            if (option) {
                setIsOptionMarked(true);
            }
        }
    }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$AutoComplete$2f$AutoComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AutoComplete$3e$__["AutoComplete"], {
        autoFocus,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_SELECT"],
        dropdownWidth: "auto",
        emptyStateMessage: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"], {
            skin: "disabled",
            size: "small"
        }, searchText ? t("LinkSettings_Sections_AutoComplete_NoResults_Search", {
            searchText
        }) : t("LinkSettings_Sections_AutoComplete_NoResults_All")),
        focusOnSelectedOption: true,
        markedOption: filteredOptions.some((opt)=>opt.id === selectedOption?.id) ? selectedOption?.id : void 0,
        minWidthPixels: "252px",
        onChange: (evt)=>onChangeInput(evt.target.value),
        onEnterPressed,
        onSelect: onSelectValueOption,
        options: filteredOptions,
        placeholder: t("LinkSettings_Sections_AutoComplete_Placeholder"),
        popoverProps: autoCompletePopoverProps,
        prefix: searchPrefix && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"].IconAffix, null, searchPrefix),
        selectedId: selectedOption?.id,
        size: "small",
        textOverflow: "ellipsis",
        value: searchText
    })));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/editor-base-url/editor-base-url-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorBaseUrlContext",
    ()=>EditorBaseUrlContext,
    "EditorBaseUrlContextProvider",
    ()=>EditorBaseUrlContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$request$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/request-service-provider.js [app-client] (ecmascript)");
;
;
const fetchBaseUrl = async (makeRequest)=>{
    const response = await makeRequest(`/_api/ricos-site-pages/base-url`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const json = await response.json();
    return typeof json?.baseUrl === "string" ? json.baseUrl : "";
};
const EditorBaseUrlContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    baseUrl: ""
});
const EditorBaseUrlContextProvider = ({ baseUrl, children })=>{
    const { makeRequest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$request$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestService"])();
    const [fetchResult, setFetchResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditorBaseUrlContextProvider.useMemo[value]": ()=>({
                baseUrl: baseUrl ?? fetchResult ?? ""
            })
    }["EditorBaseUrlContextProvider.useMemo[value]"], [
        baseUrl,
        fetchResult
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditorBaseUrlContextProvider.useEffect": ()=>{
            if (baseUrl === void 0) {
                fetchBaseUrl(makeRequest).then(setFetchResult).catch({
                    "EditorBaseUrlContextProvider.useEffect": (error)=>{
                        console.warn("Failed to get baseUrl", error);
                    }
                }["EditorBaseUrlContextProvider.useEffect"]);
            }
        }
    }["EditorBaseUrlContextProvider.useEffect"], [
        baseUrl,
        makeRequest
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(EditorBaseUrlContext.Provider, {
        children,
        value
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/remove-base-url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeBaseUrl",
    ()=>removeBaseUrl
]);
const removeBaseUrl = (url, baseUrl)=>{
    const normalizedBase = baseUrl.replace(/\/+$/, "");
    return url.startsWith(normalizedBase) ? url.replace(normalizedBase, "") : url;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/site-pages/use-site-pages.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSitePages",
    ()=>useSitePages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$site$2d$pages$2f$site$2d$pages$2d$fetch$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/site-pages/site-pages-fetch-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/uncreachable.js [app-client] (ecmascript)");
;
;
;
const areAllFetched = (fetchQuery, fetchState, loadMore)=>fetchQuery === "" && fetchState.type === "ready" && !loadMore;
const search = (query, items)=>items.filter((item)=>item.title.toLowerCase().includes(query.trim().toLowerCase()));
const useSitePages = (pageType, itemPagePrefix)=>{
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fetchQuery, setFetchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(query);
    const { fetchState, loadMore } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$site$2d$pages$2f$site$2d$pages$2d$fetch$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSitePagesFetchContext"])(pageType, fetchQuery, itemPagePrefix);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSitePages.useMemo[items]": ()=>"items" in fetchState ? search(query, fetchState.items) : []
    }["useSitePages.useMemo[items]"], [
        fetchQuery,
        fetchState,
        !!loadMore,
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSitePages.useEffect": ()=>{
            const skipChange = fetchQuery === query || fetchState.type === "loading" || fetchQuery === "" && fetchState.type === "loading-error" || areAllFetched(fetchQuery, fetchState, loadMore);
            if (!skipChange) {
                setFetchQuery(query);
            }
        }
    }["useSitePages.useEffect"], [
        fetchQuery,
        fetchState,
        !!loadMore,
        query
    ]);
    const result = {
        items,
        query,
        setQuery
    };
    switch(fetchState.type){
        case "loading":
        case "loading-more":
            return {
                ...result,
                areAllFetched: false,
                isLoading: true
            };
        case "loading-error":
            return {
                ...result,
                areAllFetched: false,
                error: fetchState.error,
                isLoading: false
            };
        case "ready":
            if (areAllFetched(fetchQuery, fetchState, loadMore)) {
                return {
                    ...result,
                    areAllFetched: true,
                    hasMore: false,
                    isLoading: false
                };
            } else if (loadMore) {
                return {
                    ...result,
                    areAllFetched: false,
                    error: fetchState.error,
                    hasMore: true,
                    isLoading: false,
                    loadMore
                };
            } else {
                return {
                    ...result,
                    areAllFetched: false,
                    error: fetchState.error,
                    hasMore: false,
                    isLoading: false
                };
            }
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(fetchState);
            return {};
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/site-pages/site-pages.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SitePages",
    ()=>SitePages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$AutoComplete$2f$AutoComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AutoComplete$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/AutoComplete/AutoComplete.js [app-client] (ecmascript) <export default as AutoComplete>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript) <export default as FormField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Text/Text.js [app-client] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/ListItemSelect/ListItemSelect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/bi-context-provider/bi-context-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$editor$2d$base$2d$url$2f$editor$2d$base$2d$url$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/editor-base-url/editor-base-url-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$site$2d$pages$2f$site$2d$pages$2d$fetch$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/site-pages/site-pages-fetch-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$remove$2d$base$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/remove-base-url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$site$2d$pages$2f$use$2d$site$2d$pages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/site-pages/use-site-pages.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const SitePages = ({ autoCompletePopoverProps, autoFocus, link, linkType, onSelect, onSubmit, tooltipProps, t })=>{
    const { baseUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$editor$2d$base$2d$url$2f$editor$2d$base$2d$url$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorBaseUrlContext"]);
    const [hasSubpages, setHasSubpages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const logBi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBiNext"])({
        pluginId: "link",
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_MODAL_ID"]
    });
    const pagesState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$site$2d$pages$2f$use$2d$site$2d$pages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSitePages"])(linkType);
    const { sitePublished } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$site$2d$pages$2f$site$2d$pages$2d$fetch$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SitePagesFetchContext"]);
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SitePages.useMemo[options]": ()=>pagesState.items.filter({
                "SitePages.useMemo[options]": (item)=>sitePublished || !item.hasSubpages
            }["SitePages.useMemo[options]"]).map(pageToOption(tooltipProps))
    }["SitePages.useMemo[options]"], [
        pagesState.items,
        tooltipProps
    ]);
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SitePages.useState": ()=>{
            const linkPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$remove$2d$base$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBaseUrl"])(link.url || "", baseUrl);
            return options.find({
                "SitePages.useState": (option)=>option.page.path === linkPath
            }["SitePages.useState"]) || null;
        }
    }["SitePages.useState"]);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedOption?.page.title || "");
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onEnterPressed = (evt)=>{
        if (selectedOption && selectedOption.label === value && !hasSubpages) {
            onSubmit(evt);
        } else if (evt.target.getAttribute("data-hook")?.includes("option")) {
            setTimeout(()=>onSubmit(evt));
        }
    };
    if (pagesState.areAllFetched && !pagesState.query && !pagesState.items.length) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(EmptyState, {
            linkType,
            t
        });
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        gap: "SP3"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SitePageDropdown, {
        t,
        linkType,
        autofocus: autoFocus,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_PAGES_PAGE_SELECT"],
        pagesState,
        autoCompletePopoverProps,
        options,
        value,
        selectedOption,
        ref,
        hasSubpages,
        setSelectedOption,
        setValue,
        onEnterPressed,
        onSelect,
        logBi,
        setHasSubpages
    }), selectedOption && hasSubpages && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ItemPagesDropdown, {
        prefix: selectedOption.page.path,
        autoCompletePopoverProps,
        tooltipProps,
        t,
        onSelect,
        onSubmit,
        logBi
    }));
};
const EmptyState = ({ linkType, t })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_PAGES_EMPTY_STATE"],
        direction: "vertical",
        margin: "SP4",
        gap: "SP2",
        verticalAlign: "middle",
        textAlign: "center"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"], {
        size: "small",
        weight: "bold"
    }, t(typeTranslations.EmptyState_Text1[linkType])), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"], {
        size: "small",
        weight: "thin"
    }, t(typeTranslations.EmptyState_Text2[linkType])));
};
const ItemPagesDropdown = ({ prefix, autoCompletePopoverProps, tooltipProps, t, onSelect, onSubmit, logBi })=>{
    const linkType = "dynamicItemPage";
    const pagesState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$site$2d$pages$2f$use$2d$site$2d$pages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSitePages"])(linkType, prefix);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const onEnterPressed = (evt)=>{
        if (selectedOption && selectedOption.label === value) {
            onSubmit(evt);
        }
    };
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ItemPagesDropdown.useMemo[options]": ()=>pagesState.items.map(pageToOption(tooltipProps))
    }["ItemPagesDropdown.useMemo[options]"], [
        pagesState.items,
        tooltipProps,
        prefix
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SitePageDropdown, {
        t,
        linkType: "dynamicItemPage",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DYNAMIC_ITEM_PAGE_SELECT"],
        pagesState,
        autoCompletePopoverProps,
        options,
        value,
        selectedOption,
        setSelectedOption,
        setValue,
        onEnterPressed,
        onSelect,
        logBi
    });
};
const SitePageDropdown = ({ t, linkType, autofocus, dataHook, pagesState, autoCompletePopoverProps, options, value, selectedOption, ref, hasSubpages, setSelectedOption, setValue, onEnterPressed, onSelect, logBi, setHasSubpages })=>{
    const onChange = (evt)=>{
        setSelectedOption(null);
        setValue(evt.target.value);
        pagesState.setQuery(evt.target.value);
        onSelect("", "");
    };
    const onBlur = ()=>{
        if (!selectedOption) {
            setValue("");
        }
        if (selectedOption && value !== selectedOption.label) {
            setValue(selectedOption.label || "");
        }
    };
    const onSelectOption = (option)=>{
        pagesState.setQuery("");
        setSelectedOption(option);
        setValue(option.page.title);
        onSelect(linkType === "dynamicPage" ? `/${option.page.path}` : option.page.path, option.page.title);
        if (hasSubpages) {
            onSelect("", "");
        }
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_PAGES_PAGE_SELECT"],
            value: option.page.title
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SitePageDropdown.useEffect": ()=>{
            if (autofocus) {
                ref?.current?.showOptions();
            }
        }
    }["SitePageDropdown.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SitePageDropdown.useEffect": ()=>{
            if (setHasSubpages) {
                setHasSubpages(checkForSubpages(selectedOption, linkType, pagesState.items));
            }
        }
    }["SitePageDropdown.useEffect"], [
        selectedOption,
        linkType,
        pagesState.items,
        setHasSubpages
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        label: t(typeTranslations.AutoComplete_Label[linkType]),
        labelPlacement: "top"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$AutoComplete$2f$AutoComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AutoComplete$3e$__["AutoComplete"], {
        autoFocus: autofocus,
        dataHook,
        dropdownWidth: "auto",
        emptyStateMessage: pagesState.isLoading ? void 0 : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"], {
            skin: "disabled",
            size: "small"
        }, pagesState.query ? t("LinkSettings_SitePages_All_NoResults_Query", {
            query: pagesState.query
        }) : t(typeTranslations.NoResults_Any[linkType])),
        focusOnSelectedOption: true,
        minWidthPixels: "252px",
        hasMore: pagesState.hasMore || pagesState.isLoading,
        infiniteScroll: true,
        loadMore: pagesState.loadMore ? pagesState.loadMore : ()=>{},
        placeholder: t(typeTranslations.AutoComplete_Placeholder[linkType]),
        popoverProps: autoCompletePopoverProps,
        size: "small",
        textOverflow: "ellipsis",
        options,
        value,
        onChange,
        markedOption: options.some((opt)=>opt.id === selectedOption?.id) ? selectedOption?.id : void 0,
        onOptionMarked: (option)=>{
            setValue(option?.page?.title);
        },
        onEnterPressed,
        selectedId: selectedOption?.id,
        status: pagesState.error ? "error" : pagesState.isLoading ? "loading" : void 0,
        onBlur,
        onSelect: onSelectOption,
        ref
    }));
};
const typeTranslations = {
    AutoComplete_Label: {
        blogPost: "LinkSettings_SitePages_BlogPost_AutoComplete_Label",
        staticPage: "LinkSettings_SitePages_StaticPage_AutoComplete_Label",
        dynamicPage: "LinkSettings_SitePages_DynamicPage_AutoComplete_Label",
        dynamicItemPage: "LinkSettings_SitePages_DynamicItemPage_AutoComplete_Label",
        storeProduct: "LinkSettings_SitePages_StoreProduct_AutoComplete_Label",
        storeCatalog: "LinkSettings_SitePages_StoreCatalog_AutoComplete_Label"
    },
    AutoComplete_Placeholder: {
        blogPost: "LinkSettings_SitePages_BlogPost_AutoComplete_Placeholder",
        staticPage: "LinkSettings_SitePages_StaticPage_AutoComplete_Placeholder",
        dynamicPage: "LinkSettings_SitePages_DynamicPage_AutoComplete_Placeholder",
        dynamicItemPage: "LinkSettings_SitePages_DynamicItemPage_AutoComplete_Placeholder",
        storeProduct: "LinkSettings_SitePages_StoreProduct_AutoComplete_Placeholder",
        storeCatalog: "LinkSettings_SitePages_StoreCatalog_AutoComplete_Placeholder"
    },
    EmptyState_Text1: {
        blogPost: "LinkSettings_SitePages_BlogPost_EmptyState_Text1",
        staticPage: "LinkSettings_SitePages_StaticPage_EmptyState_Text1",
        dynamicPage: "LinkSettings_SitePages_DynamicPage_EmptyState_Text1",
        dynamicItemPage: "LinkSettings_SitePages_DynamicItemPage_EmptyState_Text1",
        storeProduct: "LinkSettings_SitePages_StoreProduct_EmptyState_Text1",
        storeCatalog: "LinkSettings_SitePages_StoreCatalog_EmptyState_Text1"
    },
    EmptyState_Text2: {
        blogPost: "LinkSettings_SitePages_BlogPost_EmptyState_Text2",
        staticPage: "LinkSettings_SitePages_StaticPage_EmptyState_Text2",
        dynamicPage: "LinkSettings_SitePages_DynamicPage_EmptyState_Text2",
        dynamicItemPage: "LinkSettings_SitePages_DynamicItemPage_EmptyState_Text2",
        storeProduct: "LinkSettings_SitePages_StoreProduct_EmptyState_Text2",
        storeCatalog: "LinkSettings_SitePages_StoreCatalog_EmptyState_Text2"
    },
    NoResults_Any: {
        blogPost: "LinkSettings_SitePages_BlogPost_NoResults_Any",
        staticPage: "LinkSettings_SitePages_StaticPage_NoResults_Any",
        dynamicPage: "LinkSettings_SitePages_DynamicPage_NoResults_Any",
        dynamicItemPage: "LinkSettings_SitePages_DynamicItemPage_NoResults_Any",
        storeProduct: "LinkSettings_SitePages_StoreProduct_NoResults_Any",
        storeCatalog: "LinkSettings_SitePages_StoreCatalog_NoResults_Any"
    }
};
const pageToOption = (tooltipProps)=>(page)=>Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemSelectBuilder"])({
            ...page,
            ellipsis: true,
            titleMaxLines: 2,
            id: page.id,
            label: page.title ?? "",
            size: "small",
            dataHook: "option",
            subtitle: page.updatedDate?.toLocaleDateString() || page.description || void 0,
            tooltipProps: {
                ...tooltipProps,
                children: page.title,
                enterDelay: 1e3,
                placement: "top"
            }
        }), {
            label: page.title ?? "",
            page
        });
const checkForSubpages = (selectedOption, pageType, items)=>{
    if (!selectedOption || pageType !== "dynamicPage" || !items || items.length === 0) {
        return false;
    }
    return items.find((item)=>item.id === selectedOption.id)?.hasSubpages || false;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/type-select.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypeSelect",
    ()=>TypeSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Dropdown/Dropdown.js [app-client] (ecmascript) <export default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript) <export default as FormField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/ListItemSelect/ListItemSelect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/bi-context-provider/bi-context-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$is$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/Utils/is-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
;
;
;
;
;
;
const translationTypes = {
    blogPost: "BlogPost",
    section: "Section",
    staticPage: "StaticPage",
    dynamicPage: "DynamicPage",
    storeProduct: "StoreProduct",
    storeCatalog: "StoreCatalog",
    "web-address": "WebAddress"
};
const configToOption = (t, linkType)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listItemSelectBuilder"])({
        id: linkType,
        label: t(`LinkSettings_TypeSelect_Option_${translationTypes[linkType]}`),
        size: "small",
        title: t(`LinkSettings_TypeSelect_Option_${translationTypes[linkType]}`)
    });
const defaultOptions = [
    "web-address",
    "section"
];
const TypeSelect = ({ autoFocus, dropDownPopoverProps, onSelect, showSitePages, t, type, enabledLinkTypes, cache })=>{
    const logBi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBiNext"])({
        pluginId: "link",
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_MODAL_ID"]
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TypeSelect.useMemo[options]": ()=>{
            const availableLinkTypes = [
                ...defaultOptions,
                cache?.staticPage?.type === "ready" && cache?.staticPage?.items?.length > 0 ? "staticPage" : void 0,
                cache?.blogPost?.type === "ready" && cache?.blogPost?.items?.length > 0 ? "blogPost" : void 0,
                cache?.dynamicPage?.type === "ready" && cache?.dynamicPage?.items?.length > 0 ? "dynamicPage" : void 0,
                cache?.storeProduct?.type === "ready" && cache?.storeProduct?.items?.length > 0 ? "storeProduct" : void 0,
                cache?.storeCatalog?.type === "ready" && cache?.storeCatalog?.items?.length > 0 ? "storeCatalog" : void 0
            ].filter(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$is$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDefined"]).filter({
                "TypeSelect.useMemo[options].availableLinkTypes": (linkType)=>enabledLinkTypes?.length ? enabledLinkTypes.includes(linkType) : true
            }["TypeSelect.useMemo[options].availableLinkTypes"]);
            return availableLinkTypes.map({
                "TypeSelect.useMemo[options]": (linkType)=>configToOption(t, linkType)
            }["TypeSelect.useMemo[options]"]);
        }
    }["TypeSelect.useMemo[options]"], [
        showSitePages,
        t,
        enabledLinkTypes,
        cache?.staticPage?.type,
        cache?.blogPost?.type,
        cache?.dynamicPage?.type,
        cache?.storeProduct?.type,
        cache?.storeCatalog?.type
    ]);
    const onOptionsShow = ()=>{
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TYPE"]
        });
    };
    const onSelectOption = (option)=>{
        onSelect(option.id);
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TYPE"],
            value: option.id
        });
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        label: t("LinkSettings_TypeSelect_Label"),
        labelPlacement: "top"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
        autoFocus,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TYPE"],
        onOptionsShow,
        onSelect: onSelectOption,
        options,
        popoverProps: dropDownPopoverProps,
        selectedId: type,
        size: "small",
        valueParser: (option)=>option.label,
        hasMore: true,
        infiniteScroll: [
            cache?.staticPage,
            cache?.blogPost,
            cache?.dynamicPage,
            cache?.storeProduct,
            cache?.storeCatalog
        ].some((state)=>state && state.type === "loading")
    }));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LINK_VALUE",
    ()=>DEFAULT_LINK_VALUE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/common.enums.js [app-client] (ecmascript)");
;
const DEFAULT_LINK_VALUE = {
    anchor: void 0,
    rel: {
        noreferrer: true
    },
    target: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link_Target"].BLANK,
    url: void 0
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/deep-merge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepMerge",
    ()=>deepMerge
]);
const UNSAFE_KEYS = [
    "__proto__",
    "constructor",
    "prototype"
];
const isMergeable = (value)=>{
    if (Array.isArray(value)) {
        return true;
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
};
const mergeInto = (target, source)=>{
    for (const key of Object.keys(source)){
        if (UNSAFE_KEYS.includes(key)) {
            continue;
        }
        const sourceValue = source[key];
        if (sourceValue === void 0) {
            continue;
        }
        const targetValue = target[key];
        if (isMergeable(sourceValue)) {
            if (isMergeable(targetValue) && Array.isArray(targetValue) === Array.isArray(sourceValue)) {
                mergeInto(targetValue, sourceValue);
            } else {
                const fresh = Array.isArray(sourceValue) ? [] : {};
                mergeInto(fresh, sourceValue);
                target[key] = fresh;
            }
        } else {
            target[key] = sourceValue;
        }
    }
};
function deepMerge(target, ...sources) {
    for (const source of sources){
        if (isMergeable(source)) {
            mergeInto(target, source);
        }
    }
    return target;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/get-initial-link-data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInitialLinkData",
    ()=>getInitialLinkData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$deep$2d$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/deep-merge.js [app-client] (ecmascript)");
;
;
const getInitialLinkData = (options)=>{
    if (!options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LINK_VALUE"];
    }
    const { target, nofollow, sponsored, noreferrer } = options;
    const rel = {
        ...nofollow === void 0 ? {} : {
            nofollow
        },
        ...sponsored === void 0 ? {} : {
            sponsored
        },
        ...noreferrer === void 0 ? {} : {
            noreferrer
        }
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$deep$2d$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepMerge"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LINK_VALUE"], {
        ...target ? {
            target
        } : {},
        ...Object.keys(rel).some((key)=>rel[key] !== void 0) ? {
            rel
        } : {}
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/is-page-url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPageUrl",
    ()=>isPageUrl
]);
const isPageUrl = (url)=>!!url && url[0] === "/" && url[1] !== "/";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/is-page-link.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPageLink",
    ()=>isPageLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$is$2d$page$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/is-page-url.js [app-client] (ecmascript)");
;
const isPageLink = (link)=>typeof link.url === "string" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$is$2d$page$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPageUrl"])(link?.url);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/get-based-url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBasedUrl",
    ()=>getBasedUrl
]);
const getBasedUrl = (url, baseUrl)=>`${baseUrl.replace(/\/+$/, "")}${url}`;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/get-editable-url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEditableUrl",
    ()=>getEditableUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$get$2d$based$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/get-based-url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$is$2d$page$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/is-page-url.js [app-client] (ecmascript)");
;
;
const getEditableUrl = (url, baseUrl)=>typeof url !== "string" ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$is$2d$page$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPageUrl"])(url) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$get$2d$based$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBasedUrl"])(url, baseUrl || "") : url;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/is-malicious-url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMaliciousUrl",
    ()=>isMaliciousUrl
]);
const isMaliciousUrl = (url)=>url.toLowerCase().trim().startsWith("data:");
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/is-valid-te-url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidTelUrl",
    ()=>isValidTelUrl
]);
const isValidTelUrl = (str)=>/^tel:[0-9-()+#*]+$/.test(str);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/normalize-href.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeHref",
    ()=>normalizeHref
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$is$2d$valid$2d$te$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/is-valid-te-url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$linkify$2f$linkify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/linkify/linkify.js [app-client] (ecmascript)");
;
;
const normalizeHref = (value)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$is$2d$valid$2d$te$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTelUrl"])(value)) {
        return value;
    }
    if (value.startsWith("mailto:")) {
        const [email, ...queryParts] = value.substring(7).split("?");
        const queryString = queryParts.join("?");
        const sanitizedQuery = queryString ? `?${new URLSearchParams(queryString).toString()}` : "";
        return `mailto:${email}${sanitizedQuery}`;
    }
    const [urlValue, anchor] = value.split("#");
    const normalizedUrl = urlValue && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$linkify$2f$linkify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkify"].match(urlValue) && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$linkify$2f$linkify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkify"].match(urlValue)?.[0]?.url;
    if (normalizedUrl === null) {
        return void 0;
    }
    return anchor ? `${normalizedUrl}#${anchor}` : normalizedUrl;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/get-href-url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHrefUrl",
    ()=>getHrefUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$is$2d$malicious$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/is-malicious-url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$normalize$2d$href$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/normalize-href.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$get$2d$based$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/get-based-url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$is$2d$page$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/is-page-url.js [app-client] (ecmascript)");
;
;
;
;
const getHrefUrl = (url, baseUrl)=>typeof url !== "string" ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$is$2d$malicious$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMaliciousUrl"])(url) ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$is$2d$page$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPageUrl"])(url) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$get$2d$based$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBasedUrl"])(url, baseUrl || "") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$normalize$2d$href$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeHref"])(url);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/use-link-modal-state.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLinkModalState",
    ()=>useLinkModalState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/common.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/bi-context-provider/bi-context-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$editor$2d$base$2d$url$2f$editor$2d$base$2d$url$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/editor-base-url/editor-base-url-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$get$2d$initial$2d$link$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/get-initial-link-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$is$2d$page$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link/is-page-link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$some$2d$editor$2d$props$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/some-editor-props-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$get$2d$editable$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/get-editable-url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$get$2d$href$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/url/get-href-url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
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
const useLinkModalState = ({ initialValue, onClose, onSave, onUnlink, onSaveMultiple, enabledLinkTypes: enabledLinkTypesList })=>{
    const { baseUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$editor$2d$base$2d$url$2f$editor$2d$base$2d$url$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorBaseUrlContext"]);
    const logBi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBiNext"])({
        pluginId: "link",
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_MODAL_ID"]
    });
    const { generalLinkSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$some$2d$editor$2d$props$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorProps"])();
    const normalizedInitialValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLinkModalState.useMemo[normalizedInitialValue]": ()=>{
            let link2 = initialValue || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$get$2d$initial$2d$link$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitialLinkData"])(generalLinkSettings?.initialLinkOptions);
            if (baseUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$is$2d$page$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPageLink"])(link2)) {
                link2 = {
                    ...link2,
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$get$2d$editable$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEditableUrl"])(link2.url, baseUrl)
                };
            }
            return link2;
        }
    }["useLinkModalState.useMemo[normalizedInitialValue]"], []);
    const enabledLinkTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLinkModalState.useMemo[enabledLinkTypes]": ()=>{
            const { enabledLinkTypes: globalEnabledLinkTypes } = generalLinkSettings || {};
            let linkTypes;
            if (enabledLinkTypesList) {
                linkTypes = enabledLinkTypesList.length > 0 ? enabledLinkTypesList : globalEnabledLinkTypes || [];
            } else {
                linkTypes = globalEnabledLinkTypes;
            }
            return linkTypes && !linkTypes.includes("web-address") ? [
                ...linkTypes,
                "web-address"
            ] : linkTypes;
        }
    }["useLinkModalState.useMemo[enabledLinkTypes]"], [
        enabledLinkTypesList,
        generalLinkSettings
    ]);
    const [focusTarget, setFocusTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLinkModalState.useState": ()=>initialValue?.url || initialValue?.anchor ? "input" : "type-select"
    }["useLinkModalState.useState"]);
    const [linkType, setLinkType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValue?.anchor ? "section" : "web-address");
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(normalizedInitialValue);
    const [multipleSections, setMultipleSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const onChangeAttributes = (rel, target)=>{
        setLink((data)=>({
                ...data,
                rel,
                target
            }));
    };
    const onChangeWebAddress = (url)=>{
        setLink((data)=>data.url === url ? data : {
                ...data,
                anchor: void 0,
                url
            });
        setSubmitError(null);
    };
    const onClickUnlink = ()=>{
        if (initialValue) {
            onUnlink(initialValue);
        }
        onClose();
    };
    const onSelectPage = (path, title)=>{
        setLink((data)=>({
                ...data,
                anchor: void 0,
                defaultName: title,
                url: path
            }));
    };
    const onSelectSection = (anchor, defaultName)=>{
        setLink((data)=>({
                ...data,
                anchor,
                defaultName,
                url: void 0
            }));
    };
    const onSelectType = (newLinkType)=>{
        if (newLinkType !== linkType) {
            setLink(normalizedInitialValue);
            setFocusTarget("type-select");
            setSubmitError(null);
        }
        setLinkType(newLinkType);
    };
    const onSubmit = (evt)=>{
        if (multipleSections.length > 0 && linkType === "section") {
            onSaveMultiple?.(multipleSections);
            onClose();
        } else if (!link.anchor && !link.url) {
            onClickUnlink();
        } else if (link.url && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$get$2d$href$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHrefUrl"])(link.url, baseUrl)) {
            evt?.preventDefault();
            setFocusTarget("input");
            setSubmitError("invalid-url");
        } else {
            onSave(link.anchor ? {
                anchor: link.anchor,
                defaultName: link.defaultName,
                target: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link_Target"].SELF,
                url: void 0
            } : {
                anchor: void 0,
                defaultName: link.defaultName,
                rel: link.rel && Object.values(link.rel).filter((v)=>v !== void 0).length ? link.rel : void 0,
                target: link.target,
                url: link.url
            });
            onClose();
        }
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAVE_BUTTON"]
        });
    };
    const onValidateWebAddress = (url)=>{
        setSubmitError(url && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2f$get$2d$href$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHrefUrl"])(url, baseUrl) ? "invalid-url" : null);
    };
    return {
        focusTarget,
        link,
        linkType,
        submitError,
        multipleSections,
        enabledLinkTypes,
        onChangeAttributes,
        onChangeWebAddress,
        onClickUnlink,
        onSelectPage,
        onSelectSection,
        setMultipleSections,
        onSelectType,
        onSubmit,
        onValidateWebAddress
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/web-address.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebAddress",
    ()=>WebAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript) <export default as FormField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Input/Input.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/bi-context-provider/bi-context-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
;
;
;
;
;
const WebAddress = ({ autoFocus, link, onChangeUrl, onValidateUrl, submitError, t })=>{
    const logBi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBiNext"])({
        pluginId: "link",
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_MODAL_ID"]
    });
    const [validateTimeout, setValidateTimeout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const onBlur = (evt)=>{
        onValidateUrl(evt.target.value);
    };
    const onChange = (value)=>{
        onChangeUrl(value);
        setValidateTimeout((validateTimeout2)=>{
            clearTimeout(validateTimeout2);
            return setTimeout(()=>onValidateUrl(value), 2e3);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebAddress.useEffect": ()=>({
                "WebAddress.useEffect": ()=>clearTimeout(validateTimeout)
            })["WebAddress.useEffect"]
    }["WebAddress.useEffect"], [
        validateTimeout
    ]);
    const invalidUrl = submitError === "invalid-url";
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        label: t("LinkSettings_WebAddress_Label"),
        labelPlacement: "top",
        status: invalidUrl ? "error" : void 0,
        statusMessage: invalidUrl ? t("LinkSettings_WebAddress_InvalidLink") : void 0
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
        autoFocus,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URL_INPUT"],
        onBlur,
        onChange: (evt)=>{
            logBi({
                dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URL_INPUT"],
                value: evt.target.value
            });
            onChange(evt.target.value);
        },
        placeholder: t("LinkSettings_WebAddress_Placeholder"),
        size: "small",
        value: link.url
    })));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/modal-desktop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalDesktop",
    ()=>ModalDesktop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/SidePanel/SidePanel.js [app-client] (ecmascript) <export default as SidePanel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$z$2d$index$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/z-index-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$site$2d$pages$2f$site$2d$pages$2d$fetch$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/site-pages/site-pages-fetch-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/uncreachable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2f$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ui-components/panel/panel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2d$header$2f$panel$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ui-components/panel-header/panel-header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$attributes$2f$attributes$2d$desktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/attributes/attributes-desktop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/footer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$not$2d$published$2d$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/not-published-warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$section$2d$desktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/section-desktop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$site$2d$pages$2f$site$2d$pages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/site-pages/site-pages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$type$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/type-select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$use$2d$link$2d$modal$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/use-link-modal-state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$web$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/web-address.js [app-client] (ecmascript)");
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
const ModalDesktop = ({ initialValue, enabledLinkTypes: enabledLinkTypesProp, onClose, onSave, onUnlink, onSaveMultiple })=>{
    const { environment, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const { expireCache, preload, sitePublished, cache } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$site$2d$pages$2f$site$2d$pages$2d$fetch$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SitePagesFetchContext"]);
    const zIndexService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$z$2d$index$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZIndexContext"]);
    const [containerRef, setContainerRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { focusTarget, link, linkType, submitError, multipleSections, enabledLinkTypes, onChangeAttributes, onChangeWebAddress, onClickUnlink, onSelectPage, onSelectSection, setMultipleSections, onSelectType, onSubmit, onValidateWebAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$use$2d$link$2d$modal$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLinkModalState"])({
        initialValue,
        onClose,
        onSave,
        onUnlink,
        onSaveMultiple,
        enabledLinkTypes: enabledLinkTypesProp
    });
    const autoCompletePopoverProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ModalDesktop.useMemo[autoCompletePopoverProps]": ()=>({
                appendTo: ({
                    "ModalDesktop.useMemo[autoCompletePopoverProps]": (el)=>el === containerRef
                })["ModalDesktop.useMemo[autoCompletePopoverProps]"],
                placement: "bottom-start",
                zIndex: zIndexService.getZIndex("DRAWER"),
                maxWidth: "252px"
            })
    }["ModalDesktop.useMemo[autoCompletePopoverProps]"], [
        containerRef,
        zIndexService
    ]);
    const dropDownPopoverProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ModalDesktop.useMemo[dropDownPopoverProps]": ()=>({
                appendTo: ({
                    "ModalDesktop.useMemo[dropDownPopoverProps]": (el)=>el === containerRef
                })["ModalDesktop.useMemo[dropDownPopoverProps]"],
                maxWidth: "252px",
                zIndex: zIndexService.getZIndex("DRAWER")
            })
    }["ModalDesktop.useMemo[dropDownPopoverProps]"], [
        containerRef,
        zIndexService
    ]);
    const tooltipProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ModalDesktop.useMemo[tooltipProps]": ()=>({
                appendTo: containerRef || void 0,
                flip: true,
                zIndex: zIndexService.getZIndex("TOOLTIP")
            })
    }["ModalDesktop.useMemo[tooltipProps]"], [
        containerRef,
        zIndexService
    ]);
    const showNotPublishedWarning = linkType !== "section" && linkType !== "web-address" && sitePublished === false;
    const showSitePages = environment === "businessManager";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalDesktop.useEffect": ()=>{
            if (showSitePages) {
                preload();
                return expireCache;
            }
        }
    }["ModalDesktop.useEffect"], []);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-hook": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODAL_ROOT"],
        ref: setContainerRef
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2f$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
        maxHeight: 576,
        closeButtonProps: {
            onClick: onClose
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2d$header$2f$panel$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelHeader"], {
        title: t("LinkSettings_Modal_Title")
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__["SidePanel"].Content, {
        noPadding: true
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        onSubmit
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "submit",
        style: {
            display: "none"
        }
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        gap: "SP2",
        padding: "SP3"
    }, enabledLinkTypes && enabledLinkTypes.length === 1 ? null : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$type$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeSelect"], {
        autoFocus: focusTarget === "type-select",
        dropDownPopoverProps,
        onSelect: onSelectType,
        showSitePages,
        t,
        type: linkType,
        enabledLinkTypes,
        cache
    }), showNotPublishedWarning && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$not$2d$published$2d$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotPublishedWarning"], null), (()=>{
        switch(linkType){
            case "web-address":
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$web$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebAddress"], {
                    autoFocus: focusTarget === "input",
                    key: linkType,
                    link,
                    onChangeUrl: onChangeWebAddress,
                    onValidateUrl: onValidateWebAddress,
                    submitError,
                    t
                });
            case "section":
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$section$2d$desktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionDesktop"], {
                    autoCompletePopoverProps,
                    autoFocus: focusTarget === "input",
                    dropDownPopoverProps,
                    key: linkType,
                    link,
                    onSelect: onSelectSection,
                    setMultipleSections,
                    onSubmit,
                    t,
                    tooltipProps,
                    multipleSections
                });
            case "blogPost":
            case "staticPage":
            case "dynamicPage":
            case "storeProduct":
            case "storeCatalog":
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$site$2d$pages$2f$site$2d$pages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SitePages"], {
                    autoCompletePopoverProps,
                    autoFocus: focusTarget === "input",
                    key: linkType,
                    link,
                    linkType,
                    onSelect: onSelectPage,
                    onSubmit,
                    tooltipProps,
                    t
                });
            default:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(linkType);
        }
    })(), linkType !== "section" && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$attributes$2f$attributes$2d$desktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttributesDesktop"], {
        link,
        onChange: onChangeAttributes,
        t,
        tooltipProps
    }))))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__["SidePanel"].Footer, {
        showDivider: true
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
        onClickCancel: onClose,
        onClickSave: onSubmit,
        onClickUnlink,
        showUnlink: Boolean(initialValue?.url || initialValue?.anchor),
        t
    }))));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/attributes/attributes-mobile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttributesMobile",
    ()=>AttributesMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript) <export default as FormField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Text/Text.js [app-client] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleSwitch$2f$ToggleSwitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleSwitch$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/ToggleSwitch/ToggleSwitch.js [app-client] (ecmascript) <export default as ToggleSwitch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/common.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$attributes$2f$use$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/attributes/use-attributes.js [app-client] (ecmascript)");
;
;
;
;
;
const AttributesMobile = ({ link, onChange, t })=>{
    const { onToggleNewTab, onToggleNofollow, onToggleNoreferrer, onToggleSponsored } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$attributes$2f$use$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAttributes"])(link, onChange);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        gap: "SP3"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        label: t("LinkSettings_Settings_NewTab_Label"),
        labelPlacement: "left",
        labelWidth: "1fr"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleSwitch$2f$ToggleSwitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleSwitch$3e$__["ToggleSwitch"], {
        checked: link.target === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link_Target"].BLANK,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTES_NEW_TAB"],
        onChange: onToggleNewTab,
        size: "small"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        gap: "SP1"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        label: t("LinkSettings_Settings_Noreferrer_Label"),
        labelPlacement: "left",
        labelWidth: "1fr"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleSwitch$2f$ToggleSwitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleSwitch$3e$__["ToggleSwitch"], {
        checked: link.rel?.noreferrer,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTES_NOREFERRER"],
        onChange: onToggleNoreferrer,
        size: "small"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"], {
        skin: "disabled"
    }, t("LinkSettings_Settings_Noreferrer_Tooltip"))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        gap: "SP1"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        label: t("LinkSettings_Settings_Nofollow_Label"),
        labelPlacement: "left",
        labelWidth: "1fr"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleSwitch$2f$ToggleSwitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleSwitch$3e$__["ToggleSwitch"], {
        checked: link.rel?.nofollow,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTES_NOFOLLOW"],
        onChange: onToggleNofollow,
        size: "small"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"], {
        skin: "disabled"
    }, t("LinkSettings_Settings_Nofollow_Tooltip"))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        gap: "SP1"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        label: t("LinkSettings_Settings_Sponsored_Label"),
        labelPlacement: "left",
        labelWidth: "1fr"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleSwitch$2f$ToggleSwitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleSwitch$3e$__["ToggleSwitch"], {
        checked: link.rel?.sponsored,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTES_SPONSORED"],
        onChange: onToggleSponsored,
        size: "small"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Text$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"], {
        skin: "disabled"
    }, t("LinkSettings_Settings_Sponsored_Tooltip"))));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/section-mobile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionMobile",
    ()=>SectionMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Dropdown/Dropdown.js [app-client] (ecmascript) <export default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript) <export default as FormField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemSelect$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/ListItemSelect/ListItemSelect.js [app-client] (ecmascript) <export default as ListItemSelect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/bi-context-provider/bi-context-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$data$2d$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/Utils/data-hook.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$empty$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/empty-state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$use$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/use-options.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const selectedListItem = "selected-list-item";
const SectionMobile = ({ link, onSelect, t })=>{
    const logBi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBiNext"])({
        pluginId: "link",
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_MODAL_ID"]
    });
    const { sections, sectionTypeOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$use$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionOptions"])();
    const itemContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [selectedTypeOption, setSelectedTypeOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sectionTypeOptions[0]);
    const filteredSections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SectionMobile.useMemo[filteredSections]": ()=>sections.filter({
                "SectionMobile.useMemo[filteredSections]": (section)=>selectedTypeOption.id === "all" || section.node.type === selectedTypeOption.id
            }["SectionMobile.useMemo[filteredSections]"])
    }["SectionMobile.useMemo[filteredSections]"], [
        sections,
        selectedTypeOption
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectionMobile.useEffect": ()=>{
            setTimeout({
                "SectionMobile.useEffect": ()=>{
                    itemContainerRef.current?.querySelector((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$data$2d$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataHook"])(selectedListItem))?.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }
            }["SectionMobile.useEffect"]);
        }
    }["SectionMobile.useEffect"], []);
    if (sections.length === 0) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$empty$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionEmptyState"], {
            t
        });
    }
    const onSelectType = (option)=>{
        setSelectedTypeOption(option);
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_TYPE_SELECT"],
            value: `${option.id}`
        });
    };
    const onSelectSection = (section)=>{
        onSelect(section.id, section.title);
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_SELECT"]
        });
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        paddingLeft: "SP3",
        paddingRight: "SP3"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormField$3e$__["FormField"], {
        label: t("LinkSettings_Sections_TypeDropdown_Label"),
        labelPlacement: "top"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_TYPE_SELECT"],
        onSelect: onSelectType,
        options: sectionTypeOptions,
        selectedId: selectedTypeOption.id,
        size: "small",
        valueParser: (option)=>option.label
    }))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        flexGrow: 1,
        overflowY: "auto",
        padding: 0,
        paddingBottom: "SP3",
        ref: itemContainerRef
    }, filteredSections.map((section)=>{
        const selected = section.id === link.anchor;
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemSelect$3e$__["ListItemSelect"], {
            dataHook: selected ? selectedListItem : void 0,
            ellipsis: true,
            titleMaxLines: 2,
            highlighted: selected,
            key: section.id,
            onClick: ()=>onSelectSection(section),
            prefix: section.prefixAvatar,
            selected,
            size: "medium",
            subtitle: section.subtitle,
            title: section.title
        });
    })));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/modal-mobile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalMobile",
    ()=>ModalMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/SidePanel/SidePanel.js [app-client] (ecmascript) <export default as SidePanel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2f$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ui-components/panel/panel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2d$header$2f$panel$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ui-components/panel-header/panel-header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/data-hooks/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$attributes$2f$attributes$2d$mobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/attributes/attributes-mobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/footer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$section$2d$mobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/section/section-mobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$type$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/type-select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$use$2d$link$2d$modal$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/use-link-modal-state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$web$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/web-address.js [app-client] (ecmascript)");
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
const ModalMobile = ({ initialValue, enabledLinkTypes: enabledLinkTypesProp, onClose, onSave, onUnlink })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const { link, linkType, submitError, enabledLinkTypes, onChangeAttributes, onChangeWebAddress, onClickUnlink, onSelectSection, onSelectType, onSubmit, onValidateWebAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$use$2d$link$2d$modal$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLinkModalState"])({
        initialValue,
        onClose,
        onSave,
        onUnlink,
        enabledLinkTypes: enabledLinkTypesProp
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2f$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$data$2d$hooks$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODAL_ROOT"],
        closeButtonProps: {
            onClick: onClose
        },
        skin: "floating",
        width: "100%"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2d$header$2f$panel$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelHeader"], {
        title: t("LinkSettings_Modal_Title")
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__["SidePanel"].Content, {
        noPadding: true
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        boxSizing: "border-box",
        direction: "vertical",
        gap: "SP3",
        height: "100%",
        padding: 0
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        padding: "SP3",
        paddingBottom: 0
    }, enabledLinkTypes && enabledLinkTypes.length === 1 ? null : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$type$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeSelect"], {
        autoFocus: false,
        onSelect: onSelectType,
        showSitePages: false,
        t,
        type: linkType,
        enabledLinkTypes
    })), linkType === "section" ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$section$2f$section$2d$mobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionMobile"], {
        link,
        onSelect: onSelectSection,
        t
    }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        paddingLeft: "SP3",
        paddingRight: "SP3"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$web$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebAddress"], {
        autoFocus: true,
        link,
        onChangeUrl: onChangeWebAddress,
        onValidateUrl: onValidateWebAddress,
        submitError,
        t
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        padding: "SP3"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$attributes$2f$attributes$2d$mobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttributesMobile"], {
        link,
        onChange: onChangeAttributes,
        t
    }))))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__["SidePanel"].Footer, {
        showDivider: true
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
        onClickCancel: onClose,
        onClickSave: onSubmit,
        onClickUnlink,
        showUnlink: Boolean(initialValue?.url || initialValue?.anchor),
        t
    })));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/link-modal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkModal",
    ()=>LinkModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$modal$2d$desktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/modal-desktop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$modal$2d$mobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/modal-mobile.js [app-client] (ecmascript)");
;
;
;
;
const LinkModal = (props)=>{
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    return isMobile ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$modal$2d$mobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalMobile"], {
        ...props
    }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$modal$2d$desktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalDesktop"], {
        ...props
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "openLinkModal",
    ()=>openLinkModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/helpers/pos-to-dom-rect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$link$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal/link-modal.js [app-client] (ecmascript)");
;
;
;
const openLinkModal = ({ editor, initialValue, modalService, onClickOutside, onSave, onSaveMultiple, onUnlink, placement, referenceElement: argReferenceElement, returnFocusToEditor, enabledLinkTypes })=>{
    const referenceElement = argReferenceElement ? argReferenceElement : editor ? {
        getBoundingClientRect: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posToDOMRect"])(editor.view, editor.view.state.selection.from, editor.view.state.selection.to)
    } : null;
    modalService.openModal({
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2f$link$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkModal"],
        componentProps: {
            initialValue,
            enabledLinkTypes,
            onClose: ()=>modalService.closeModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_MODAL_ID"]),
            onSaveMultiple,
            onSave,
            onUnlink
        },
        disableArrowNavigation: true,
        dragHandleSelector: "[data-drag-handler]",
        enableDrag: true,
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_MODAL_ID"],
        layout: {
            desktop: referenceElement ? "floating" : "dialog",
            //TODO: get layout value directly
            mobile: "fullscreen"
        },
        noPadding: true,
        ...referenceElement && {
            positioning: {
                placement: placement ?? "bottom",
                referenceElement
            }
        },
        withTransition: true,
        ...onClickOutside ? {
            onClickOutside
        } : {},
        returnFocusToEditor
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/toggle-link-modal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toggleLinkModal",
    ()=>toggleLinkModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/open-link-modal.js [app-client] (ecmascript)");
;
;
const toggleLinkModal = ({ initialValue, modalService, onSave, onSaveMultiple, onUnlink, referenceElement, placement, onClickOutside, returnFocusToEditor, enabledLinkTypes })=>modalService.isModalOpen(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_MODAL_ID"]) ? modalService.closeModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_MODAL_ID"]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$open$2d$link$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openLinkModal"])({
        initialValue,
        modalService,
        onSaveMultiple,
        onSave,
        onUnlink,
        referenceElement,
        placement,
        onClickOutside,
        returnFocusToEditor,
        enabledLinkTypes
    });
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-link-data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNodeLinkData",
    ()=>getNodeLinkData
]);
const getNodeLinkData = (_, __, editor)=>{
    const node = editor?.state?.selection?.node;
    if (node) {
        return node.attrs?.link;
    }
    return void 0;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/is-link-or-anchor-in-selection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLinkOrAnchorInSelection",
    ()=>isLinkOrAnchorInSelection
]);
const isLinkOrAnchorInSelection = (_, __, editor)=>{
    const node = editor?.state?.selection?.node;
    if (node) {
        return !!node.attrs?.link;
    }
    return false;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-link-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLinkButton",
    ()=>createLinkButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/common.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$LinkButton$2f$link$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/toolbars-v3/components/buttons/LinkButton/link-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$toggle$2d$link$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/link-modal/toggle-link-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-in-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$link$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-link-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$is$2d$link$2d$or$2d$anchor$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/is-link-or-anchor-in-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/plugin-toolbar-buttons-ids.js [app-client] (ecmascript)");
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
const createLinkButton = (services)=>{
    return {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_BUTTON_ID"].LINK,
        type: "modal",
        attributes: {
            active: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$is$2d$link$2d$or$2d$anchor$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLinkOrAnchorInSelection"],
            linkData: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$link$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeLinkData"],
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeInSelection"]
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$LinkButton$2f$link$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkButton"], {
                toolbarItem
            }),
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_LINK_BUTTON"],
        tooltip: "ButtonModal_Button_Link",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"],
        command: ({ modals, referenceElement, tiptapEditor, attributes })=>{
            const onSave = (link)=>{
                const attrs = attributes.selectedNode.attrs;
                tiptapEditor.chain().focus().setNodeAttrsById(attrs.id, {
                    ...attrs,
                    link
                }).run();
                services.pluginsEvents.publishPluginLinkable({
                    pluginId: attributes.selectedNode.type.name,
                    nodeId: attributes.selectedNode.attrs.id,
                    link: link.url,
                    newTab: link.target === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link_Target"].BLANK,
                    nofollow: link.rel?.nofollow
                });
            };
            const onUnlink = ()=>{
                const { link, ...attrs } = attributes.selectedNode?.attrs ?? {};
                tiptapEditor.chain().focus().setNodeAttrsById(attrs.id, attrs).run();
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2d$modal$2f$toggle$2d$link$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleLinkModal"])({
                initialValue: attributes.linkData,
                modalService: modals,
                onSave,
                onUnlink,
                referenceElement
            });
        }
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/create-plugin-toolbar-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPluginToolbarButton",
    ()=>createPluginToolbarButton
]);
function createPluginToolbarButton(config) {
    return config;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/dropdown-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownButton",
    ()=>DropdownButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ChevronDownSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ChevronDownSmall.js [app-client] (ecmascript) <export default as ChevronDownSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
;
;
;
const DropdownButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ icon: Icon, dataHook, tooltip, onClick, active, disabled, ariaControlsId, tabIndex }, ref)=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        ref,
        tooltip,
        onClick,
        active,
        disabled,
        prefix: Icon,
        suffix: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ChevronDownSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownSmall$3e$__["ChevronDownSmall"],
        dataHook,
        "aria-haspopup": "true",
        "aria-expanded": active,
        "aria-controls": ariaControlsId,
        tabIndex
    });
});
DropdownButton.displayName = "DropdownButton";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/node-alignment-dropdown/consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NODE_ALIGNMENT_BUTTONS",
    ()=>NODE_ALIGNMENT_BUTTONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AlignCenterVertically$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenterVertically$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/AlignCenterVertically.js [app-client] (ecmascript) <export default as AlignCenterVertically>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AlignCenterVerticallySmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenterVerticallySmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/AlignCenterVerticallySmall.js [app-client] (ecmascript) <export default as AlignCenterVerticallySmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AlignLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/AlignLeft.js [app-client] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AlignLeftSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeftSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/AlignLeftSmall.js [app-client] (ecmascript) <export default as AlignLeftSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AlignRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/AlignRight.js [app-client] (ecmascript) <export default as AlignRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AlignRightSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRightSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/AlignRightSmall.js [app-client] (ecmascript) <export default as AlignRightSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/data-hooks.js [app-client] (ecmascript)");
;
;
const NODE_ALIGNMENT_BUTTONS = {
    LEFT: {
        type: "button",
        text: "AlignObject_Left_Tooltip",
        tooltip: "AlignObject_Left_Tooltip",
        commandKey: "LEFT",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AlignLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"],
        iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AlignLeftSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeftSmall$3e$__["AlignLeftSmall"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALIGNMENT_DROPDOWN_OPTION_LEFT"]
    },
    CENTER: {
        type: "button",
        text: "AlignObject_Center_Tooltip",
        tooltip: "AlignObject_Center_Tooltip",
        commandKey: "CENTER",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AlignCenterVertically$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenterVertically$3e$__["AlignCenterVertically"],
        iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AlignCenterVerticallySmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenterVerticallySmall$3e$__["AlignCenterVerticallySmall"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALIGNMENT_DROPDOWN_OPTION_CENTER"]
    },
    RIGHT: {
        type: "button",
        text: "AlignObject_Right_Tooltip",
        tooltip: "AlignObject_Right_Tooltip",
        commandKey: "RIGHT",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AlignRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__["AlignRight"],
        iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AlignRightSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRightSmall$3e$__["AlignRightSmall"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALIGNMENT_DROPDOWN_OPTION_RIGHT"]
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/dropdown-modal/data-hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOOLBAR_DROPDOWN_PANEL",
    ()=>TOOLBAR_DROPDOWN_PANEL
]);
const TOOLBAR_DROPDOWN_PANEL = "toolbars-modal-desktop-panel";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/dropdown-modal/dropdown-modal-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>dropdown_modal_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "5943ade2";
const injectCss = ()=>{
    var css = `.ybPh6{background-color:var(--wds-color-fill-surface-overlay,var(--wsr-color-D80,#fff));border-radius:var(--ricos-settings-whitebox-border-radius,var(--wds-border-radius-surface-overlay,8px));box-shadow:var(--ricos-settings-whitebox-box-shadow,var(--wds-shadow-surface-overlay,0 6px 6px 0 rgba(22,45,61,.06),0 0 18px 0 rgba(22,45,61,.12)));height:fit-content;padding-block:12px;--wds-list-item-select-title:var(--ricos-settings-text-color,var(--wsr-color-D10,#000624));--wds-color-text-standard-primary:var(
    --ricos-settings-text-color,var(--wsr-color-D10,#000624)
  );box-sizing:border-box;overflow-x:hidden;overflow-y:auto;width:fit-content;z-index:10}.ybPh6 *,.ybPh6 :after,.ybPh6 :before{box-sizing:inherit}.ybPh6 input{box-sizing:border-box}@supports not (contain:inline-size){@media only screen and (max-width:480px){.ybPh6{width:100%}}}@container (width < 480px){.ybPh6{width:100%}}.DN6IO{--wds-side-panel-content-padding-vertical:12px;--wds-side-panel-content-padding-horizontal:0px}`;
    var isTest = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && false;
    if (isTest || !css || typeof document === "undefined") {
        return;
    }
    if (document.querySelector('style[data-ricos-style-hash="' + styleDataHash + '"]')) {
        return;
    }
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.setAttribute("data-ricos-style-hash", styleDataHash);
    style.type = "text/css";
    head.appendChild(style);
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
};
injectCss();
var dropdown_modal_default = {
    "root": "ybPh6",
    "mobileContent": "DN6IO"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/dropdown-modal/dropdown-modal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownModal",
    ()=>DropdownModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/SidePanel/SidePanel.js [app-client] (ecmascript) <export default as SidePanel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/dropdown-modal/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$dropdown$2d$modal$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/dropdown-modal/dropdown-modal-scss.js [app-client] (ecmascript)");
;
;
;
;
;
;
const DEFAULT_MIN_WIDTH = 160;
const DropdownModal = ({ options, minWidth = DEFAULT_MIN_WIDTH, maxHeight, className, onCloseButtonClick, title, dataHook })=>{
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    if (isMobile) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__["SidePanel"], {
            closeButtonProps: {
                onClick: onCloseButtonClick
            },
            width: "100%",
            maxHeight: "50vh",
            height: "fit-content"
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__["SidePanel"].Header, {
            title
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__["SidePanel"].Content, {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$dropdown$2d$modal$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mobileContent
        }, options));
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$dropdown$2d$modal$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root, className),
        dataHook: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOLBAR_DROPDOWN_PANEL"], dataHook),
        role: "listbox",
        minWidth,
        maxHeight
    }, options);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-divider/list-item-divider-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>list_item_divider_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "534cc39e";
const injectCss = ()=>{
    var css = `.O1-3f{background-color:var(--ricos-settings-dividers-color,rgba(51,51,51,.2));margin-block:6px;margin-inline:24px}`;
    var isTest = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && false;
    if (isTest || !css || typeof document === "undefined") {
        return;
    }
    if (document.querySelector('style[data-ricos-style-hash="' + styleDataHash + '"]')) {
        return;
    }
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.setAttribute("data-ricos-style-hash", styleDataHash);
    style.type = "text/css";
    head.appendChild(style);
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
};
injectCss();
var list_item_divider_default = {
    "divider": "O1-3f"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-divider/list-item-divider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListItemDivider",
    ()=>ListItemDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$divider$2f$list$2d$item$2d$divider$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-divider/list-item-divider-scss.js [app-client] (ecmascript)");
;
;
;
const ListItemDivider = ()=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$divider$2f$list$2d$item$2d$divider$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divider
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], null));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/data-hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LIST_ITEM_SELECT",
    ()=>LIST_ITEM_SELECT,
    "LIST_ITEM_SELECT_CONTENT",
    ()=>LIST_ITEM_SELECT_CONTENT,
    "LIST_ITEM_SELECT_PREFIX",
    ()=>LIST_ITEM_SELECT_PREFIX,
    "LIST_ITEM_SELECT_SUBTITLE",
    ()=>LIST_ITEM_SELECT_SUBTITLE,
    "LIST_ITEM_SELECT_SUFFIX",
    ()=>LIST_ITEM_SELECT_SUFFIX,
    "LIST_ITEM_SELECT_TITLE",
    ()=>LIST_ITEM_SELECT_TITLE
]);
const LIST_ITEM_SELECT = "list-item-select";
const LIST_ITEM_SELECT_CONTENT = "list-item-select-content";
const LIST_ITEM_SELECT_PREFIX = "list-item-select-prefix";
const LIST_ITEM_SELECT_TITLE = "list-item-select-title";
const LIST_ITEM_SELECT_SUBTITLE = "list-item-select-subtitle";
const LIST_ITEM_SELECT_SUFFIX = "list-item-select-suffix";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/list-item-select-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>list_item_select_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "284034af";
const injectCss = ()=>{
    var css = `.bbmjf{display:flex}.bbmjf:focus-visible{outline:5px auto Highlight!important;outline:5px auto -webkit-focus-ring-color!important;outline-offset:-2px}.Hf9zK{flex:1}.Hf9zK [data-hook~=list-item-select-title]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`;
    var isTest = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && false;
    if (isTest || !css || typeof document === "undefined") {
        return;
    }
    if (document.querySelector('style[data-ricos-style-hash="' + styleDataHash + '"]')) {
        return;
    }
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.setAttribute("data-ricos-style-hash", styleDataHash);
    style.type = "text/css";
    head.appendChild(style);
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
};
injectCss();
var list_item_select_default = {
    "root": "bbmjf",
    "content": "Hf9zK"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/list-item-select.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListItemSelect",
    ()=>ListItemSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemSelect$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/ListItemSelect/ListItemSelect.js [app-client] (ecmascript) <export default as ListItemSelect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/list-item-select-scss.js [app-client] (ecmascript)");
;
;
;
;
;
;
const WDS_DUPLICATED_ATTRIBUTES = [
    "aria-selected",
    "aria-disabled",
    "data-selected"
];
const ListItemSelect = ({ title, prefix, dataHook, selected = false, disabled = false, onSelect, className, ...props })=>{
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const rowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ListItemSelect.useLayoutEffect": ()=>{
            const wdsRow = rowRef.current?.firstElementChild;
            if (!wdsRow) {
                return;
            }
            WDS_DUPLICATED_ATTRIBUTES.forEach({
                "ListItemSelect.useLayoutEffect": (attribute)=>wdsRow.removeAttribute(attribute)
            }["ListItemSelect.useLayoutEffect"]);
        }
    }["ListItemSelect.useLayoutEffect"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: rowRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root, className),
        "data-hook": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIST_ITEM_SELECT"], dataHook),
        role: "option",
        "aria-selected": selected,
        "aria-disabled": disabled,
        tabIndex: disabled ? -1 : 0,
        onClick: (e)=>{
            if (disabled) {
                return;
            }
            e.stopPropagation();
            onSelect?.(e);
        },
        onKeyDown: (e)=>{
            if (disabled) {
                return;
            }
            if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
                e.preventDefault();
                onSelect?.(e);
            }
        },
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemSelect$3e$__["ListItemSelect"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIST_ITEM_SELECT_CONTENT"],
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].content,
        size: isMobile ? "medium" : "small",
        prefix,
        title,
        selected,
        disabled
    }));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-toggle/list-item-toggle-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>list_item_toggle_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "88bf37d8";
const injectCss = ()=>{
    var css = `.qvkIR{align-items:center;background-color:#fff;box-sizing:border-box;color:var(--ricos-settings-text-color,#000);display:flex;font-size:14px;height:40px;padding-left:20px;padding-right:20px;width:100%}.qvkIR *,.qvkIR :after,.qvkIR :before{box-sizing:inherit}.qvkIR input{box-sizing:border-box}.qvkIR>*{flex:1}`;
    var isTest = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && false;
    if (isTest || !css || typeof document === "undefined") {
        return;
    }
    if (document.querySelector('style[data-ricos-style-hash="' + styleDataHash + '"]')) {
        return;
    }
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.setAttribute("data-ricos-style-hash", styleDataHash);
    style.type = "text/css";
    head.appendChild(style);
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
};
injectCss();
var list_item_toggle_default = {
    "container": "qvkIR"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-toggle/list-item-toggle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListItemToggle",
    ()=>ListItemToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$toggle$2d$button$2f$toggle$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ui-components/toggle-button/toggle-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$toggle$2f$list$2d$item$2d$toggle$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-toggle/list-item-toggle-scss.js [app-client] (ecmascript)");
;
;
;
const ListItemToggle = ({ title, infoContent, dataHook, selected, onChange, disabled })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$toggle$2f$list$2d$item$2d$toggle$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].container
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$toggle$2d$button$2f$toggle$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
        title,
        checked: selected,
        onChange,
        infoContent,
        dataHook,
        size: "small",
        disabled
    }));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/node-alignment-dropdown/node-alignment-dropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeAlignmentDropdown",
    ()=>NodeAlignmentDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$dropdown$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/dropdown-modal/dropdown-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$divider$2f$list$2d$item$2d$divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-divider/list-item-divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/list-item-select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$toggle$2f$list$2d$item$2d$toggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-toggle/list-item-toggle.js [app-client] (ecmascript)");
;
;
;
;
;
;
const NodeAlignmentDropdown = ({ options, onSelect, onToggle, selectedId, closeModal })=>{
    const { t, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const [isToggleSelected, setIsToggleSelected] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "NodeAlignmentDropdown.useState": ()=>options.find({
                "NodeAlignmentDropdown.useState": (option)=>option.type === "toggle"
            }["NodeAlignmentDropdown.useState"])?.selected ?? false
    }["NodeAlignmentDropdown.useState"]);
    const AlignmentDropdownOptions = options.filter((option)=>option.type === "button").map(({ dataHook, icon: Icon, iconMobile: IconMobile, label, id: commandKey })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemSelect"], {
            key: commandKey,
            dataHook,
            prefix: isMobile ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(IconMobile, null) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Icon, null),
            title: label,
            selected: commandKey === selectedId,
            onSelect: ()=>{
                onSelect(commandKey);
                closeModal();
            }
        }));
    const textWrapToggle = options.find((option)=>option.type === "toggle");
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$dropdown$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownModal"], {
        onCloseButtonClick: closeModal,
        title: t("NodeAlignmentDropdown_Title"),
        options: textWrapToggle ? [
            ...AlignmentDropdownOptions,
            ...[
                /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$divider$2f$list$2d$item$2d$divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemDivider"], {
                    key: "divider"
                }),
                /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$toggle$2f$list$2d$item$2d$toggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemToggle"], {
                    key: textWrapToggle.id,
                    dataHook: textWrapToggle.dataHook,
                    onChange: ()=>{
                        onToggle?.();
                        setIsToggleSelected((prev)=>!prev);
                    },
                    title: textWrapToggle.label,
                    selected: isToggleSelected,
                    infoContent: textWrapToggle.infoContent,
                    disabled: textWrapToggle.disabled
                })
            ]
        ] : AlignmentDropdownOptions
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-alignment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNodeAlignment",
    ()=>getNodeAlignment
]);
const getNodeAlignment = (_, __, editor)=>{
    const node = editor?.state?.selection?.node;
    if (node) {
        return node.attrs?.containerData?.alignment;
    }
    return void 0;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-text-wrap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNodeTextWrap",
    ()=>getNodeTextWrap
]);
const getNodeTextWrap = (_, __, editor)=>{
    const node = editor?.state?.selection?.node;
    if (node) {
        return node.attrs?.containerData?.textWrap;
    }
    return void 0;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/is-visible-only-on-desktop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isVisibleOnlyOnDesktop",
    ()=>isVisibleOnlyOnDesktop
]);
const isVisibleOnlyOnDesktop = (isMobile)=>(_content, _services, _editor)=>!isMobile;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-node-alignment-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNodeAlignmentButton",
    ()=>createNodeAlignmentButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-modals/modal-service-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$plugin$2d$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/create-plugin-toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/dropdown-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$node$2d$alignment$2d$dropdown$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/node-alignment-dropdown/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$node$2d$alignment$2d$dropdown$2f$node$2d$alignment$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/node-alignment-dropdown/node-alignment-dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-alignment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-in-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$text$2d$wrap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-text-wrap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$is$2d$visible$2d$only$2d$on$2d$desktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/is-visible-only-on-desktop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/plugin-toolbar-buttons-ids.js [app-client] (ecmascript)");
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
const createNodeAlignmentButton = ({ services, modalId, attributes })=>{
    const isMobile = services.context.isMobile;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$plugin$2d$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPluginToolbarButton"])({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_BUTTON_ID"].ALIGNMENT,
        type: "dropdown",
        attributes: {
            nodeAlignment: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$alignment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeAlignment"],
            nodeTextWrap: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$text$2d$wrap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeTextWrap"],
            visible: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$is$2d$visible$2d$only$2d$on$2d$desktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVisibleOnlyOnDesktop"])(isMobile),
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeInSelection"],
            active: (_, { modals })=>Boolean(modals?.getModal(modalId)),
            ...attributes
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(NodeAlignmentButton, {
                toolbarItem,
                modalId
            }),
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_ALIGNMENT_BUTTON"],
        tooltip: "TextAlignmentButton_Tooltip",
        getIcon: ({ services: services2, attributes: attributes2 })=>{
            const selectedAlignment = attributes2.nodeAlignment || (services2.context.languageDir === "rtl" ? "RIGHT" : "LEFT");
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$node$2d$alignment$2d$dropdown$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_ALIGNMENT_BUTTONS"][selectedAlignment].icon;
        },
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$node$2d$alignment$2d$dropdown$2f$node$2d$alignment$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeAlignmentDropdown"],
        getComponentProps: ({ tiptapEditor, modals, attributes: attributes2, t, languageDir })=>{
            const alignment = attributes2.nodeAlignment || getDefaultAlignment(languageDir);
            const getIsTextWrapDisabled = ()=>!tiptapEditor.can().toggleNodeTextWrap() || alignment === "CENTER";
            return {
                closeModal: ()=>modals.closeModal(modalId),
                onSelect: (alignment2)=>{
                    const selectedNode = attributes2.selectedNode;
                    tiptapEditor.chain().focus().setNodeAlignment(alignment2).command(({ commands })=>{
                        const isCustomWidthSpecified = selectedNode?.attrs.containerData?.width?.custom;
                        const excludedNodeTypes = [
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_LINK_BUTTON_TYPE"],
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_ACTION_BUTTON_TYPE"]
                        ];
                        if (!isCustomWidthSpecified && !excludedNodeTypes.includes(selectedNode.type.name)) {
                            commands.setNodeSize("SMALL");
                        }
                        return true;
                    }).run();
                },
                onToggle: ()=>tiptapEditor.chain().focus().toggleNodeTextWrap().run(),
                selectedId: alignment,
                options: [
                    ...Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$node$2d$alignment$2d$dropdown$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_ALIGNMENT_BUTTONS"]).map((option)=>({
                            type: option.type,
                            id: option.commandKey,
                            dataHook: option.dataHook,
                            label: t(option.text),
                            icon: option.iconSmall,
                            iconMobile: option.icon
                        })),
                    {
                        type: "toggle",
                        id: "TEXT_WRAP",
                        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALIGNMENT_DROPDOWN_OPTION_TEXT_WRAP"],
                        label: t("TextwrapObject_ToggleButton"),
                        selected: getIsTextWrapDisabled() ? false : attributes2.nodeTextWrap ?? true,
                        disabled: getIsTextWrapDisabled(),
                        infoContent: getIsTextWrapDisabled() ? t(alignment === "CENTER" ? "TextwrapObject_ToggleButton_Info_AlignedCenter" : "TextwrapObject_ToggleButton_Info_UnsupportedContainer") : void 0
                    }
                ]
            };
        },
        command: ({ modals, referenceElement, tiptapEditor, attributes: attributes2, getComponentProps, publicCommands })=>{
            const componentProps = getComponentProps?.({
                tiptapEditor,
                attributes: attributes2,
                publicCommands,
                t: services.t,
                modals,
                languageDir: services.context.languageDir
            });
            if (!componentProps) {
                return;
            }
            modals.isModalOpen(modalId) ? modals.closeModal(modalId) : modals.openModal({
                id: modalId,
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$node$2d$alignment$2d$dropdown$2f$node$2d$alignment$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeAlignmentDropdown"],
                componentProps,
                layout: isMobile ? "drawer" : "floating",
                positioning: {
                    referenceElement,
                    placement: "bottom"
                },
                onClickOutside: {
                    on: "pointerup",
                    handler: (e)=>{
                        if (!referenceElement?.contains?.(e.target)) {
                            modals.closeModal(modalId);
                            return;
                        }
                    }
                }
            });
        }
    });
};
const NodeAlignmentButton = ({ toolbarItem, modalId })=>{
    const { t, languageDir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]) || {};
    const isModalOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsModalOpen"])(modalId));
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const getSelectedAlignment = ()=>toolbarItem?.attributes.nodeAlignment || (languageDir === "rtl" ? "RIGHT" : "LEFT");
    const onClick = (e)=>{
        toolbarItem.commands?.click({
            referenceElement,
            e
        });
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownButton"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_ALIGNMENT_BUTTON"],
        active: isModalOpen,
        onClick,
        ref: setReferenceElement,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$node$2d$alignment$2d$dropdown$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_ALIGNMENT_BUTTONS"][getSelectedAlignment()].icon,
        tooltip: t("TextAlignmentButton_Tooltip"),
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
const getDefaultAlignment = (langDir)=>{
    return langDir === "rtl" ? "RIGHT" : "LEFT";
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-replace-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createReplaceButton",
    ()=>createReplaceButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Replace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Replace.js [app-client] (ecmascript) <export default as Replace>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-modals/modal-service-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-in-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/plugin-toolbar-buttons-ids.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const createReplaceButton = ({ modalId, tooltip, command })=>{
    return {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_BUTTON_ID"].REPLACE,
        type: "toggle",
        attributes: {
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeInSelection"],
            ...modalId ? {
                active: (_, { modals })=>Boolean(modals?.getModal(modalId))
            } : {}
        },
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Replace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__["Replace"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_REPLACE_BUTTON"],
        tooltip: tooltip ?? "Settings_Replace_Image_Tooltip",
        label: "Toolbar_Replace_Button_Label",
        command,
        renderer: (toolbarItem)=>{
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ReplaceButton, {
                toolbarItem
            });
        }
    };
};
const ReplaceButton = ({ toolbarItem, dataHook })=>{
    const { t, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]) || {};
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(toolbarItem.attributes.active);
    const modalService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalService"])();
    const onClick = ()=>toolbarItem.commands.click({
            referenceElement,
            isMobile
        });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReplaceButton.useEffect": ()=>{
            modalService.onModalOpened({
                "ReplaceButton.useEffect": ()=>{
                    setIsActive(Boolean(toolbarItem.attributes.active));
                }
            }["ReplaceButton.useEffect"]);
            modalService.onModalClosed({
                "ReplaceButton.useEffect": ()=>{
                    setIsActive(Boolean(toolbarItem.attributes.active));
                }
            }["ReplaceButton.useEffect"]);
        }
    }["ReplaceButton.useEffect"], [
        modalService
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        prefix: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Replace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__["Replace"],
        active: isActive,
        onClick,
        dataHook,
        tooltip: t("Settings_Replace_Image_Tooltip"),
        ref: setReferenceElement,
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-settings-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSettingsButton",
    ()=>createSettingsButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-modals/modal-service-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-in-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/plugin-toolbar-buttons-ids.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const createSettingsButton = ({ modalId, command, attributes, showLabel, dataHook, buttonId, icon: Icon = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], tooltip = "SettingsButton_Tooltip" })=>{
    return {
        id: buttonId ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_BUTTON_ID"].SETTINGS,
        type: "modal",
        attributes: {
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeInSelection"],
            active: (_, { modals })=>Boolean(modals?.getModal(modalId)),
            ...attributes
        },
        icon: Icon,
        tooltip,
        dataHook: dataHook ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_SETTINGS_BUTTON"],
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SettingsButton, {
                toolbarItem,
                showLabel
            }),
        command
    };
};
const SettingsButton = ({ toolbarItem, dataHook, showLabel })=>{
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(toolbarItem.attributes.active);
    const { isMobile, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]) || {};
    const modalService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalService"])();
    const onClick = toolbarItem.commands.click;
    const Icon = toolbarItem.presentation.icon;
    const tooltip = t(toolbarItem.presentation.tooltip);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsButton.useEffect": ()=>{
            modalService.onModalOpened({
                "SettingsButton.useEffect": ()=>{
                    setIsActive(Boolean(toolbarItem.attributes.active));
                }
            }["SettingsButton.useEffect"]);
            modalService.onModalClosed({
                "SettingsButton.useEffect": ()=>{
                    setIsActive(Boolean(toolbarItem.attributes.active));
                }
            }["SettingsButton.useEffect"]);
        }
    }["SettingsButton.useEffect"], [
        modalService
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        prefix: Icon,
        active: isActive,
        onClick: ()=>onClick({
                isMobile,
                referenceElement
            }),
        dataHook,
        ariaLabel: tooltip,
        ref: setReferenceElement,
        ...showLabel ? {
            label: tooltip
        } : {
            tooltip
        },
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-size.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNodeSize",
    ()=>getNodeSize
]);
const getNodeSize = (_, __, editor)=>{
    const node = editor?.state?.selection?.node;
    if (node) {
        return node.attrs?.containerData?.width?.size;
    }
    return void 0;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/node-size-button/consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_OPTIONS",
    ()=>DEFAULT_OPTIONS,
    "NODE_SIZE_BUTTONS",
    ()=>NODE_SIZE_BUTTONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DistributeCenter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistributeCenter$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/DistributeCenter.js [app-client] (ecmascript) <export default as DistributeCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DistributeCenterSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistributeCenterSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/DistributeCenterSmall.js [app-client] (ecmascript) <export default as DistributeCenterSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DistributeFullWidth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistributeFullWidth$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/DistributeFullWidth.js [app-client] (ecmascript) <export default as DistributeFullWidth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DistributeFullWidthSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistributeFullWidthSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/DistributeFullWidthSmall.js [app-client] (ecmascript) <export default as DistributeFullWidthSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DistributeVertically$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistributeVertically$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/DistributeVertically.js [app-client] (ecmascript) <export default as DistributeVertically>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DistributeVerticallySmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistributeVerticallySmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/DistributeVerticallySmall.js [app-client] (ecmascript) <export default as DistributeVerticallySmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SizeAndRatio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SizeAndRatio$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/SizeAndRatio.js [app-client] (ecmascript) <export default as SizeAndRatio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SizeAndRatioSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SizeAndRatioSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/SizeAndRatioSmall.js [app-client] (ecmascript) <export default as SizeAndRatioSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/data-hooks.js [app-client] (ecmascript)");
;
;
const NODE_SIZE_BUTTONS = {
    CONTENT: {
        text: "SizeContentButton_Tooltip",
        tooltip: "SizeContentButton_Tooltip",
        value: "CONTENT",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DistributeVertically$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistributeVertically$3e$__["DistributeVertically"],
        iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DistributeVerticallySmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistributeVerticallySmall$3e$__["DistributeVerticallySmall"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIZE_DROPDOWN_OPTION_CONTENT"]
    },
    SMALL: {
        text: "SizeSmallCenterButton_Tooltip",
        value: "SMALL",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DistributeCenter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistributeCenter$3e$__["DistributeCenter"],
        iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DistributeCenterSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistributeCenterSmall$3e$__["DistributeCenterSmall"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIZE_DROPDOWN_OPTION_SMALL"]
    },
    ORIGINAL: {
        text: "SizeOriginalButton_Tooltip",
        value: "ORIGINAL",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SizeAndRatio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SizeAndRatio$3e$__["SizeAndRatio"],
        iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SizeAndRatioSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SizeAndRatioSmall$3e$__["SizeAndRatioSmall"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIZE_DROPDOWN_OPTION_ORIGINAL"]
    },
    FULL_WIDTH: {
        text: "SizeFullWidthButton_Tooltip",
        value: "FULL_WIDTH",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DistributeFullWidth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistributeFullWidth$3e$__["DistributeFullWidth"],
        iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DistributeFullWidthSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistributeFullWidthSmall$3e$__["DistributeFullWidthSmall"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIZE_DROPDOWN_OPTION_FULL_WIDTH"]
    }
};
const DEFAULT_OPTIONS = [
    "SMALL",
    "CONTENT",
    "FULL_WIDTH"
];
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/node-size-button/node-size-dropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeSizeDropdown",
    ()=>NodeSizeDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$dropdown$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/dropdown-modal/dropdown-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/list-item-select.js [app-client] (ecmascript)");
;
;
;
;
const NodeSizeDropdown = ({ dropdownOptions, onSelect, selectedId, closeModal })=>{
    const { t, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$dropdown$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownModal"], {
        onCloseButtonClick: closeModal,
        title: t("ButtonModal_Size_Section"),
        options: dropdownOptions.map(({ iconMobile: IconMobile, icon: Icon, label: text, id: commandKey, dataHook })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemSelect"], {
                key: commandKey,
                dataHook,
                prefix: isMobile && IconMobile ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(IconMobile, null) : Icon ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Icon, null) : null,
                title: text,
                selected: commandKey === selectedId,
                onSelect: ()=>{
                    onSelect(commandKey);
                    closeModal();
                }
            }))
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/node-size-button/create-node-size-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNodeSizeButton",
    ()=>createNodeSizeButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-modals/modal-service-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$plugin$2d$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/create-plugin-toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/dropdown-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/plugin-toolbar-buttons-ids.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$node$2d$size$2d$button$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/node-size-button/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$node$2d$size$2d$button$2f$node$2d$size$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/node-size-button/node-size-dropdown.js [app-client] (ecmascript)");
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
const createNodeSizeButton = ({ services, modalId, options })=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$plugin$2d$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPluginToolbarButton"])({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_BUTTON_ID"].SIZE,
        type: "dropdown",
        attributes: {
            nodeSize: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeSize"],
            visible: ()=>!services.context.isMobile,
            active: (_, { modals })=>Boolean(modals?.getModal(modalId))
        },
        tooltip: "ButtonModal_Size_Section",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_SIZE_BUTTON"],
        getIcon: ({ attributes })=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$node$2d$size$2d$button$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_SIZE_BUTTONS"][attributes.nodeSize || "CONTENT"].icon,
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(NodeSizeButton, {
                id: modalId,
                toolbarItem
            }),
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$node$2d$size$2d$button$2f$node$2d$size$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSizeDropdown"],
        command: (props)=>{
            const { modals, referenceElement, getComponentProps, tiptapEditor, attributes, publicCommands } = props;
            const componentProps = getComponentProps?.({
                tiptapEditor,
                attributes,
                publicCommands,
                t: services.t,
                modals,
                languageDir: services.context.languageDir
            });
            if (!componentProps) {
                return;
            }
            modals.isModalOpen(modalId) ? modals.closeModal(modalId) : modals.openModal({
                id: modalId,
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$node$2d$size$2d$button$2f$node$2d$size$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSizeDropdown"],
                componentProps,
                layout: services.context.isMobile ? "drawer" : "floating",
                positioning: {
                    referenceElement,
                    placement: "bottom"
                },
                onClickOutside: {
                    on: "pointerup",
                    handler: (e)=>{
                        if (!referenceElement?.contains?.(e.target)) {
                            modals.closeModal(modalId);
                            return;
                        }
                    }
                }
            });
        },
        getComponentProps: ({ tiptapEditor, modals, attributes, t })=>({
                dropdownOptions: [
                    ...options || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$node$2d$size$2d$button$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_OPTIONS"]
                ].map((option)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$node$2d$size$2d$button$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_SIZE_BUTTONS"][option]).map((option)=>({
                        id: option.value,
                        dataHook: option.dataHook,
                        label: t(option.text),
                        icon: option.iconSmall,
                        iconMobile: option.icon
                    })),
                onSelect: (size)=>{
                    tiptapEditor.chain().focus().setNodeSize(size).setNodeAlignment("CENTER").run();
                    modals.closeModal(modalId);
                },
                selectedId: attributes.nodeSize || "CONTENT",
                closeModal: ()=>modals.closeModal(modalId)
            })
    });
};
const NodeSizeButton = ({ toolbarItem, id })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]) || {};
    const isModalOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsModalOpen"])(id));
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const getSelectedSize = ()=>toolbarItem?.attributes.nodeSize || "CONTENT";
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownButton"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_SIZE_BUTTON"],
        active: isModalOpen,
        onClick: ()=>{
            toolbarItem.commands?.click({
                referenceElement
            });
        },
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$node$2d$size$2d$button$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_SIZE_BUTTONS"][getSelectedSize()].icon,
        ref: setReferenceElement,
        tooltip: t("ButtonModal_Size_Section"),
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/separator/toolbar-button-separator-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toolbar_button_separator_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "c8bbefe7";
const injectCss = ()=>{
    var css = `.AvT0L{display:flex;height:var(--ricos-settings-dividers-height,36px);margin-block:-3px;width:1px;--wds-divider-fill-light:var(--ricos-settings-dividers-color)}.EskUp{height:42px}`;
    var isTest = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && false;
    if (isTest || !css || typeof document === "undefined") {
        return;
    }
    if (document.querySelector('style[data-ricos-style-hash="' + styleDataHash + '"]')) {
        return;
    }
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.setAttribute("data-ricos-style-hash", styleDataHash);
    style.type = "text/css";
    head.appendChild(style);
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
};
injectCss();
var toolbar_button_separator_default = {
    "separator": "AvT0L",
    "mobileSeparator": "EskUp"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/separator/toolbar-button-separator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToolbarButtonSeparator",
    ()=>ToolbarButtonSeparator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$toolbar$2d$button$2d$separator$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/separator/toolbar-button-separator-scss.js [app-client] (ecmascript)");
;
;
;
;
;
const ToolbarButtonSeparator = ()=>{
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$toolbar$2d$button$2d$separator$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].separator, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$toolbar$2d$button$2d$separator$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mobileSeparator]: isMobile
        })
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
        direction: "vertical"
    }));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/separator/create-separator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSeparator",
    ()=>createSeparator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/plugin-toolbar-buttons-ids.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$toolbar$2d$button$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/separator/toolbar-button-separator.js [app-client] (ecmascript)");
;
;
;
const createSeparator = (attributes)=>{
    return {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$plugin$2d$toolbar$2d$buttons$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_BUTTON_ID"].SEPARATOR,
        type: "separator",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$toolbar$2d$button$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButtonSeparator"],
        renderer: ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$toolbar$2d$button$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButtonSeparator"], null),
        attributes
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/top-level-nodes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOP_LEVEL_NODES",
    ()=>TOP_LEVEL_NODES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
;
;
const TOP_LEVEL_NODES = [
    "doc",
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CARD,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_CARD_HEADER_TYPE"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_CARD_CONTENT_TYPE"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_CARD_FOOTER_TYPE"]
];
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/can-set-as-banner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canSetAsBanner",
    ()=>canSetAsBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$top$2d$level$2d$nodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/top-level-nodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/helpers/find-parent-node-closest-to-pos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
;
;
;
;
const canSetAsBanner = (_, __, editor)=>{
    if (!editor?.state) {
        return false;
    }
    const selection = editor.state.selection;
    const selectedNode = selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"] ? selection.node : void 0;
    const parentFigure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, (node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_FIGURE_TYPE"]);
    if (parentFigure) {
        const parentOfFigure = selection.$from.node(parentFigure.depth - 1);
        const isTopLevel = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$top$2d$level$2d$nodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOP_LEVEL_NODES"].includes(parentOfFigure.type.name);
        if (!isTopLevel) {
            return false;
        }
    }
    if (selectedNode?.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_LAYOUT_TYPE"] && selectedNode.attrs?.banner?.position === "BOTTOM") {
        return false;
    }
    const closestLayoutForExclusion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, (node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_LAYOUT_TYPE"]);
    if (closestLayoutForExclusion?.node.attrs?.banner?.position === "BOTTOM") {
        return false;
    }
    const parentCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, (node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_CARD_TYPE"]);
    let existingBannerId;
    if (parentCard) {
        parentCard.node.forEach((child)=>{
            if (child.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_CARD_HEADER_TYPE"] && !existingBannerId) {
                existingBannerId = child.firstChild?.attrs.id;
            }
        });
    } else {
        const firstNode = editor.state.doc.content.firstChild;
        if (firstNode?.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_LAYOUT_TYPE"] && firstNode.attrs?.banner?.position === "TOP") {
            existingBannerId = firstNode.attrs.id;
        }
    }
    if (!existingBannerId) {
        return true;
    }
    if (selectedNode?.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_LAYOUT_TYPE"]) {
        return selectedNode.attrs?.id === existingBannerId;
    }
    const closestLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, (node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_LAYOUT_TYPE"]);
    if (closestLayout) {
        return closestLayout.node.attrs?.id === existingBannerId;
    }
    return false;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/can-set-as-footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canSetAsFooter",
    ()=>canSetAsFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$top$2d$level$2d$nodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/top-level-nodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/helpers/find-parent-node-closest-to-pos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
;
;
;
;
const canSetAsFooter = (_, __, editor)=>{
    if (!editor?.state) {
        return false;
    }
    if (!editor.state.schema.nodes[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_CARD_TYPE"]]) {
        return false;
    }
    const selection = editor.state.selection;
    const selectedNode = selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"] ? selection.node : void 0;
    const parentFigure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, (node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_FIGURE_TYPE"]);
    if (parentFigure) {
        const parentOfFigure = selection.$from.node(parentFigure.depth - 1);
        const isTopLevel = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$top$2d$level$2d$nodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOP_LEVEL_NODES"].includes(parentOfFigure.type.name);
        if (!isTopLevel) {
            return false;
        }
    }
    if (selectedNode?.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_LAYOUT_TYPE"] && selectedNode.attrs?.banner?.position === "TOP") {
        return false;
    }
    const closestLayoutForExclusion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, (node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_LAYOUT_TYPE"]);
    if (closestLayoutForExclusion?.node.attrs?.banner?.position === "TOP") {
        return false;
    }
    const parentCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, (node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_CARD_TYPE"]);
    let existingFooterId;
    if (parentCard) {
        parentCard.node.forEach((child)=>{
            if (child.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_CARD_FOOTER_TYPE"] && !existingFooterId) {
                existingFooterId = child.firstChild?.attrs.id;
            }
        });
    } else {
        const lastNode = editor.state.doc.content.lastChild;
        if (lastNode?.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_LAYOUT_TYPE"] && lastNode.attrs?.banner?.position === "BOTTOM") {
            existingFooterId = lastNode.attrs.id;
        }
    }
    if (!existingFooterId) {
        return true;
    }
    if (selectedNode?.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_LAYOUT_TYPE"]) {
        return selectedNode.attrs?.id === existingFooterId;
    }
    const closestLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, (node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_LAYOUT_TYPE"]);
    if (closestLayout) {
        return closestLayout.node.attrs?.id === existingFooterId;
    }
    return false;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/use-node-attrs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNodeAttrs",
    ()=>useNodeAttrs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/editor-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/dev-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$create$2d$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/Utils/create-throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$editor$2f$helpers$2f$find$2d$node$2d$by$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap-editor/helpers/find-node-by-id.js [app-client] (ecmascript)");
;
;
;
;
const useNodeAttrs = (nodeId, nodeType)=>{
    const { adapter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContext"]);
    const devPmNodeAttrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevPmNodeAttrs"])();
    const patchPmNodeAttrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useNodeAttrs.useMemo[patchPmNodeAttrs]": ()=>// @ts-ignore $TSFixMe
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$create$2d$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createThrottle"])({
                "useNodeAttrs.useMemo[patchPmNodeAttrs]": (attrs, options)=>{
                    adapter.tiptapEditor.commands.updateNodeAttrsById(nodeId, attrs, options);
                }
            }["useNodeAttrs.useMemo[patchPmNodeAttrs]"])
    }["useNodeAttrs.useMemo[patchPmNodeAttrs]"], []);
    if (devPmNodeAttrs) {
        return {
            pmNodeAttrs: devPmNodeAttrs,
            patchPmNodeAttrs: ()=>{}
        };
    }
    const tr = adapter.tiptapEditor.view.state.tr;
    const nodeWithPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$editor$2f$helpers$2f$find$2d$node$2d$by$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findNodeById"])(tr, nodeId);
    const { node } = nodeWithPos?.[0] ?? {};
    if (!node || node.type.name !== nodeType) {
        return {
            pmNodeAttrs: void 0,
            patchPmNodeAttrs: void 0
        };
    }
    return {
        pmNodeAttrs: node.attrs,
        patchPmNodeAttrs
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/is-inside-mock-modal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_MODAL_DATA_HOOK",
    ()=>MOCK_MODAL_DATA_HOOK,
    "isInsideMockModal",
    ()=>isInsideMockModal
]);
const MOCK_MODAL_DATA_HOOK = "mock-modal";
const isInsideMockModal = (target)=>target instanceof Element && target.closest(`[data-hook="${MOCK_MODAL_DATA_HOOK}"]`) !== null;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/are-gradients-equal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areGradientsEqual",
    ()=>areGradientsEqual
]);
const areGradientsEqual = (gradient1, gradient2)=>{
    if (gradient1.type !== gradient2.type) {
        return false;
    }
    if (gradient1.type === "LINEAR" && gradient2.type === "LINEAR") {
        if (gradient1.angle !== gradient2.angle) {
            return false;
        }
    } else if (gradient1.type === "RADIAL" && gradient2.type === "RADIAL") {
        if (gradient1.centerX !== gradient2.centerX || gradient1.centerY !== gradient2.centerY) {
            return false;
        }
    }
    const stops1 = gradient1.stops ?? [];
    const stops2 = gradient2.stops ?? [];
    if (stops1.length !== stops2.length) {
        return false;
    }
    return stops1.every((stop1, index)=>{
        const stop2 = stops2[index];
        return stop1.color?.toUpperCase() === stop2.color?.toUpperCase() && stop1.position === stop2.position;
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/color-manager-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getResolvedCustomColors",
    ()=>getResolvedCustomColors,
    "handleColorAdded",
    ()=>handleColorAdded,
    "handleColorDeleted",
    ()=>handleColorDeleted,
    "handleGradientAdded",
    ()=>handleGradientAdded,
    "handleGradientDeleted",
    ()=>handleGradientDeleted,
    "resolveThemeColorsPalette",
    ()=>resolveThemeColorsPalette,
    "useResolvedCustomColors",
    ()=>useResolvedCustomColors,
    "useResolvedCustomGradients",
    ()=>useResolvedCustomGradients
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.4/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$styles$2f$themeStrategy$2f$generators$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-styles/themeStrategy/generators/palette.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$resolve$2d$colors$2d$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/Utils/resolve-colors-palette.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$are$2d$gradients$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/are-gradients-equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/theme-color-token.js [app-client] (ecmascript)");
;
;
;
;
;
;
const DEFAULT_PALETTE_SIZE = 58;
const COLORS_KEY = "ricos/custom-colors";
const GRADIENTS_KEY = "ricos/custom-gradients";
const getCustomColors = (colorManager, legacyGetColors)=>colorManager?.colors ?? legacyGetColors?.() ?? readStorage(COLORS_KEY, []);
const isSameColor = (left, right)=>left.toUpperCase() === right.toUpperCase();
const isNonBlank = (value)=>typeof value === "string" && value.trim().length > 0;
const VISIBLE_SWATCH_TOKENS = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLOR_SLOT_MAP"]).slice(0, 6).map(([slot, field])=>[
        field,
        `$theme-color-${slot}`
    ]);
const dedupeByHex = (swatches)=>{
    const seen = /* @__PURE__ */ new Set();
    return swatches.filter((s)=>{
        const key = s.hex.toUpperCase();
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
};
const getResolvedCustomColors = (colorManager, currentColor, legacyGetColors, paletteSize = DEFAULT_PALETTE_SIZE)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$resolve$2d$colors$2d$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveColorsPalette"])(getCustomColors(colorManager, legacyGetColors), currentColor, paletteSize);
};
const resolveThemeColorsPalette = (theme, fallbackColors = [])=>{
    const configSwatches = fallbackColors.filter(isNonBlank).map((hex)=>({
            hex
        }));
    if (configSwatches.length > 0) {
        return dedupeByHex(configSwatches);
    }
    const { colorPalette } = theme;
    if (colorPalette) {
        const swatches = [];
        for (const [field, token] of VISIBLE_SWATCH_TOKENS){
            const value = colorPalette[field];
            if (isNonBlank(value)) {
                swatches.push({
                    hex: colorPalette.format === "rgbTuple" ? `rgb(${value})` : value,
                    token
                });
            }
        }
        return dedupeByHex(swatches);
    }
    return dedupeByHex(Object.values((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$styles$2f$themeStrategy$2f$generators$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResolvedPaletteColors"])(theme.palette)).filter(isNonBlank).map((hex)=>({
            hex
        })));
};
const useResolvedCustomColors = (colorManager, legacyGetColors, paletteSize = DEFAULT_PALETTE_SIZE)=>{
    const storageVersion = useStorageVersion();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useResolvedCustomColors.useMemo": ()=>{
            return getResolvedCustomColors(colorManager, void 0, legacyGetColors, paletteSize);
        }
    }["useResolvedCustomColors.useMemo"], [
        colorManager?.colors,
        legacyGetColors,
        paletteSize,
        storageVersion
    ]);
};
const handleColorAdded = (color, colorManager, legacyOnColorAdded)=>{
    if (colorManager) {
        colorManager.setColors([
            ...colorManager.colors,
            color
        ]);
    } else if (legacyOnColorAdded) {
        legacyOnColorAdded(color);
        notify();
    } else {
        writeStorage(COLORS_KEY, [
            ...readStorage(COLORS_KEY, []),
            color
        ]);
    }
};
const handleColorDeleted = (color, colorManager)=>{
    if (colorManager) {
        colorManager.setColors(colorManager.colors.filter((savedColor)=>!isSameColor(savedColor, color)));
    } else {
        writeStorage(COLORS_KEY, readStorage(COLORS_KEY, []).filter((savedColor)=>!isSameColor(savedColor, color)));
    }
};
const useResolvedCustomGradients = (colorManager)=>{
    const storageVersion = useStorageVersion();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useResolvedCustomGradients.useMemo": ()=>{
            return colorManager?.gradients ?? readStorage(GRADIENTS_KEY, []);
        }
    }["useResolvedCustomGradients.useMemo"], [
        colorManager?.gradients,
        storageVersion
    ]);
};
const handleGradientAdded = (gradient, colorManager)=>{
    if (colorManager?.setGradients) {
        colorManager.setGradients([
            ...colorManager.gradients ?? [],
            gradient
        ]);
    } else {
        writeStorage(GRADIENTS_KEY, [
            ...readStorage(GRADIENTS_KEY, []),
            gradient
        ]);
    }
};
const handleGradientDeleted = (gradient, colorManager)=>{
    if (colorManager?.setGradients) {
        colorManager.setGradients((colorManager.gradients ?? []).filter((savedGradient)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$are$2d$gradients$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areGradientsEqual"])(savedGradient, gradient)));
    } else {
        writeStorage(GRADIENTS_KEY, readStorage(GRADIENTS_KEY, []).filter((savedGradient)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$are$2d$gradients$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areGradientsEqual"])(savedGradient, gradient)));
    }
};
let version = 0;
const listeners = /* @__PURE__ */ new Set();
const notify = ()=>{
    version++;
    listeners.forEach((listener)=>listener());
};
const readStorage = (key, fallback)=>{
    try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch  {
        return fallback;
    }
};
const writeStorage = (key, value)=>{
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch  {}
    notify();
};
const useStorageVersion = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useStorageVersion.useSyncExternalStore": (listener)=>{
            listeners.add(listener);
            return ({
                "useStorageVersion.useSyncExternalStore": ()=>void listeners.delete(listener)
            })["useStorageVersion.useSyncExternalStore"];
        }
    }["useStorageVersion.useSyncExternalStore"], {
        "useStorageVersion.useSyncExternalStore": ()=>version
    }["useStorageVersion.useSyncExternalStore"]);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/schema-gradient-to-css.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schemaGradientToCss",
    ()=>schemaGradientToCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$theme$2d$utils$2f$color$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/theme-utils/color-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/theme-color-token.js [app-client] (ecmascript)");
;
;
const resolveStopColor = (color, palette)=>palette && color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDocumentColorToHex"])(color, palette) ?? color : color;
const formatStop = (stop, palette)=>{
    const color = resolveStopColor(stop.color, palette);
    const position = ((stop.position ?? 0) * 100).toFixed(2);
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$theme$2d$utils$2f$color$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgba"])(color)} ${position}%`;
};
const formatStops = (stops, palette)=>[
        ...stops ?? []
    ].filter((stop)=>stop.color).sort((a, b)=>(a.position ?? 0) - (b.position ?? 0)).map((stop)=>formatStop(stop, palette)).join(", ");
const schemaGradientToCss = (gradient, palette)=>{
    if (!gradient) {
        return "";
    }
    if (gradient.type === "LINEAR") {
        return `linear-gradient(${gradient.angle ?? 90}deg, ${formatStops(gradient.stops, palette)})`;
    }
    if (gradient.type === "RADIAL") {
        return `radial-gradient(circle at ${gradient.centerX ?? 50}% ${gradient.centerY ?? 50}%, ${formatStops(gradient.stops, palette)})`;
    }
    return "";
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolve-color-to-display-hex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveColorToDisplayHex",
    ()=>resolveColorToDisplayHex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$styles$2f$themeStrategy$2f$theme$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-styles/themeStrategy/theme-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/theme-color-token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$color$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/Utils/color-utils.js [app-client] (ecmascript)");
;
;
;
const stripAlphaSafely = (color)=>color.startsWith("#") || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThemeColorToken"])(color) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$color$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHexColorFromAlpha"])(color) ?? color : color;
const resolveColorToDisplayHex = (color, containerElement, { preserveAlpha = false } = {})=>{
    const normalizedColor = (preserveAlpha ? color : color && stripAlphaSafely(color))?.trim();
    if (!normalizedColor) {
        return void 0;
    }
    const finalize = (hex)=>(preserveAlpha ? hex : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$color$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHexColorFromAlpha"])(hex) ?? hex).toUpperCase();
    if (!containerElement) {
        return normalizedColor.startsWith("#") ? finalize(normalizedColor) : void 0;
    }
    try {
        return finalize((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$styles$2f$themeStrategy$2f$theme$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anyCssColorToHex"])(normalizedColor, containerElement));
    } catch  {
        return normalizedColor.startsWith("#") ? finalize(normalizedColor) : void 0;
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/use-spoiler-plugin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpoilerPlugin",
    ()=>useSpoilerPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/plugins-context.js [app-client] (ecmascript)");
;
;
;
const useSpoilerPlugin = (pluginType)=>{
    const plugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsContext"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSpoilerPlugin.useMemo": ()=>{
            const spoilerPlugin = plugins.asArray().find({
                "useSpoilerPlugin.useMemo.spoilerPlugin": (plugin)=>plugin.getType() === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPOILER_TYPE"]
            }["useSpoilerPlugin.useMemo.spoilerPlugin"]);
            const isSpoilerPluginAvailable = spoilerPlugin && (!spoilerPlugin.getConfig().supportedPlugins || spoilerPlugin.getConfig().supportedPlugins.includes(pluginType));
            return isSpoilerPluginAvailable;
        }
    }["useSpoilerPlugin.useMemo"], [
        plugins
    ]);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/figure/get-container-classes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContainerClasses",
    ()=>getContainerClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$is$2d$node$2d$selected$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/is-node-selected.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$node$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/node-styles.js [app-client] (ecmascript)");
;
;
;
const getContainerClasses = (editor, nodeId, isMobile)=>{
    const isFocused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$is$2d$node$2d$selected$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeSelected"])(editor.state, nodeId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$node$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPluginContainerClassNames"])(isMobile), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$node$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPluginFocusClassNames"])(isFocused));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media/image-crop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isCropped",
    ()=>isCropped,
    "normalize",
    ()=>normalize,
    "toCropAttribute",
    ()=>toCropAttribute,
    "toPixelCrop",
    ()=>toPixelCrop
]);
const EPSILON = 1e-4;
const clamp = (value, min, max)=>Math.min(Math.max(value, min), max);
const normalize = (crop)=>({
        x: crop?.x ?? 0,
        y: crop?.y ?? 0,
        width: crop?.width && crop.width > 0 ? crop.width : 1,
        height: crop?.height && crop.height > 0 ? crop.height : 1
    });
const isCropped = (crop)=>{
    if (!crop) {
        return false;
    }
    const { width = 1, height = 1 } = crop;
    if (width <= 0 || height <= 0) {
        return false;
    }
    const normalized = normalize(crop);
    return normalized.x > EPSILON || normalized.y > EPSILON || normalized.width < 1 - EPSILON || normalized.height < 1 - EPSILON;
};
const toCropAttribute = (crop)=>isCropped(crop) ? crop : null;
const toPixelCrop = ({ crop, sourceWidth, sourceHeight })=>{
    if (!isCropped(crop) || !sourceWidth || !sourceHeight) {
        return;
    }
    const normalized = normalize(crop);
    const x = clamp(Math.round(normalized.x * sourceWidth), 0, sourceWidth - 1);
    const y = clamp(Math.round(normalized.y * sourceHeight), 0, sourceHeight - 1);
    return {
        x,
        y,
        width: clamp(Math.round(normalized.width * sourceWidth), 1, sourceWidth - x),
        height: clamp(Math.round(normalized.height * sourceHeight), 1, sourceHeight - y)
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media/get-cropped-image.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCroppedImage",
    ()=>getCroppedImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$123$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$api$2f$max$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+image-kit@1.123.0/node_modules/@wix/image-kit/dist/esm/api/max/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2f$image$2d$crop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media/image-crop.js [app-client] (ecmascript)");
;
;
const getCroppedImage = ({ mediaId, sourceWidth, sourceHeight, crop })=>{
    const pixelCrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2f$image$2d$crop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPixelCrop"])({
        crop,
        sourceWidth,
        sourceHeight
    });
    if (!mediaId || !sourceWidth || !sourceHeight || !pixelCrop) {
        return;
    }
    return {
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$123$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$api$2f$max$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sdk"].getCropImageURL(mediaId, sourceWidth, sourceHeight, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, pixelCrop.width, pixelCrop.height),
        width: pixelCrop.width,
        height: pixelCrop.height
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media/apply-user-domain-media.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyUserDomainMedia",
    ()=>applyUserDomainMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2f$media$2d$url$2d$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media/media-url-consts.js [app-client] (ecmascript)");
;
const WIX_MEDIA_IMAGE_PREFIX = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2f$media$2d$url$2d$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WIX_MEDIA_BASE_URL"]}media/`;
const applyUserDomainMedia = (url, userDomainMedia)=>{
    const { baseUrl, prefixes = [] } = userDomainMedia ?? {};
    if (!baseUrl || !url.startsWith(WIX_MEDIA_IMAGE_PREFIX)) {
        return url;
    }
    const uri = url.slice(WIX_MEDIA_IMAGE_PREFIX.length);
    return prefixes.some((prefix)=>uri.startsWith(`${prefix}_`)) ? `${baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`}${uri}` : url;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media/user-domain-placeholder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUserDomainPlaceholder",
    ()=>createUserDomainPlaceholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$123$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$api$2f$max$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+image-kit@1.123.0/node_modules/@wix/image-kit/dist/esm/api/max/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$123$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$api$2f$max$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+image-kit@1.123.0/node_modules/@wix/image-kit/dist/esm/api/max/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2f$apply$2d$user$2d$domain$2d$media$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media/apply-user-domain-media.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2f$media$2d$url$2d$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/media/media-url-consts.js [app-client] (ecmascript)");
;
;
;
const WIX_MEDIA_IMAGE_PREFIX = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2f$media$2d$url$2d$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WIX_MEDIA_BASE_URL"]}media/`;
const SCHEME_RE = /^[a-z]+:/;
const createUserDomainPlaceholder = (userDomainMedia)=>{
    const { baseUrl, prefixes = [] } = userDomainMedia ?? {};
    if (!baseUrl || prefixes.length === 0) {
        return void 0;
    }
    const toAbsolute = (value)=>SCHEME_RE.test(value) ? value : `${WIX_MEDIA_IMAGE_PREFIX}${value}`;
    return ({ fittingType, src, target, options })=>{
        const placeholder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$image$2d$kit$40$1$2e$123$2e$0$2f$node_modules$2f40$wix$2f$image$2d$kit$2f$dist$2f$esm$2f$api$2f$max$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlaceholder"])(fittingType, src, target, {
            ...options,
            autoEncode: true
        });
        if (placeholder?.uri) {
            placeholder.uri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2f$apply$2d$user$2d$domain$2d$media$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyUserDomainMedia"])(toAbsolute(placeholder.uri), userDomainMedia);
        }
        if (placeholder?.srcset?.dpr) {
            placeholder.srcset.dpr = placeholder.srcset.dpr.map((entry)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2f$apply$2d$user$2d$domain$2d$media$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyUserDomainMedia"])(toAbsolute(entry), userDomainMedia));
        }
        return placeholder;
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/get-element-scale.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getElementScale",
    ()=>getElementScale
]);
const getElementScale = (el)=>{
    let element = el;
    let scaleX = 1;
    let scaleY = 1;
    while(element){
        const computed = window.getComputedStyle(element);
        const transform = computed.transform;
        if (transform && transform !== "none") {
            const matrix = new DOMMatrix(transform);
            scaleX *= matrix.a;
            scaleY *= matrix.d;
        }
        element = element.parentElement;
    }
    return {
        scaleX,
        scaleY
    };
};
;
}),
]);

//# sourceMappingURL=0uxm_%40wix_ricos_dist_es__shared_0iyo.3.._.js.map