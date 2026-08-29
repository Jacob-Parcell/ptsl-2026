(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Decoration_Type",
    ()=>Decoration_Type,
    "Node_Type",
    ()=>Node_Type
]);
var Node_Type = /* @__PURE__ */ ((Node_Type2)=>{
    Node_Type2["PARAGRAPH"] = "PARAGRAPH";
    Node_Type2["TEXT"] = "TEXT";
    Node_Type2["HEADING"] = "HEADING";
    Node_Type2["BULLETED_LIST"] = "BULLETED_LIST";
    Node_Type2["ORDERED_LIST"] = "ORDERED_LIST";
    Node_Type2["LIST_ITEM"] = "LIST_ITEM";
    Node_Type2["BLOCKQUOTE"] = "BLOCKQUOTE";
    Node_Type2["CODE_BLOCK"] = "CODE_BLOCK";
    Node_Type2["VIDEO"] = "VIDEO";
    Node_Type2["DIVIDER"] = "DIVIDER";
    Node_Type2["FILE"] = "FILE";
    Node_Type2["GALLERY"] = "GALLERY";
    Node_Type2["GIF"] = "GIF";
    Node_Type2["HTML"] = "HTML";
    Node_Type2["IMAGE"] = "IMAGE";
    Node_Type2["LINK_PREVIEW"] = "LINK_PREVIEW";
    Node_Type2["MAP"] = "MAP";
    Node_Type2["POLL"] = "POLL";
    Node_Type2["APP_EMBED"] = "APP_EMBED";
    Node_Type2["BUTTON"] = "BUTTON";
    Node_Type2["COLLAPSIBLE_LIST"] = "COLLAPSIBLE_LIST";
    Node_Type2["TABLE"] = "TABLE";
    Node_Type2["EMBED"] = "EMBED";
    Node_Type2["COLLAPSIBLE_ITEM"] = "COLLAPSIBLE_ITEM";
    Node_Type2["COLLAPSIBLE_ITEM_TITLE"] = "COLLAPSIBLE_ITEM_TITLE";
    Node_Type2["COLLAPSIBLE_ITEM_BODY"] = "COLLAPSIBLE_ITEM_BODY";
    Node_Type2["TABLE_CELL"] = "TABLE_CELL";
    Node_Type2["TABLE_ROW"] = "TABLE_ROW";
    Node_Type2["EXTERNAL"] = "EXTERNAL";
    Node_Type2["AUDIO"] = "AUDIO";
    Node_Type2["CAPTION"] = "CAPTION";
    Node_Type2["LAYOUT"] = "LAYOUT";
    Node_Type2["LAYOUT_CELL"] = "LAYOUT_CELL";
    Node_Type2["SHAPE"] = "SHAPE";
    Node_Type2["CARD"] = "CARD";
    Node_Type2["TOC"] = "TOC";
    Node_Type2["SMART_BLOCK"] = "SMART_BLOCK";
    Node_Type2["SMART_BLOCK_CELL"] = "SMART_BLOCK_CELL";
    Node_Type2["CHECKBOX_LIST"] = "CHECKBOX_LIST";
    Node_Type2["UNRECOGNIZED"] = "UNRECOGNIZED";
    return Node_Type2;
})(Node_Type || {});
var Decoration_Type = /* @__PURE__ */ ((Decoration_Type2)=>{
    Decoration_Type2["BOLD"] = "BOLD";
    Decoration_Type2["ITALIC"] = "ITALIC";
    Decoration_Type2["UNDERLINE"] = "UNDERLINE";
    Decoration_Type2["SPOILER"] = "SPOILER";
    Decoration_Type2["ANCHOR"] = "ANCHOR";
    Decoration_Type2["MENTION"] = "MENTION";
    Decoration_Type2["LINK"] = "LINK";
    Decoration_Type2["COLOR"] = "COLOR";
    Decoration_Type2["FONT_SIZE"] = "FONT_SIZE";
    Decoration_Type2["EXTERNAL"] = "EXTERNAL";
    Decoration_Type2["STRIKETHROUGH"] = "STRIKETHROUGH";
    Decoration_Type2["SUPERSCRIPT"] = "SUPERSCRIPT";
    Decoration_Type2["SUBSCRIPT"] = "SUBSCRIPT";
    Decoration_Type2["FONT_FAMILY"] = "FONT_FAMILY";
    Decoration_Type2["SKETCH"] = "SKETCH";
    Decoration_Type2["UNRECOGNIZED"] = "UNRECOGNIZED";
    return Decoration_Type2;
})(Decoration_Type || {});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/data-hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DATA_HOOKS",
    ()=>DATA_HOOKS,
    "SKETCH_COLOR_PICKER_MODAL_ID",
    ()=>SKETCH_COLOR_PICKER_MODAL_ID,
    "SKETCH_DATA_HOOK",
    ()=>SKETCH_DATA_HOOK,
    "SKETCH_DESIGN_MODAL_ID",
    ()=>SKETCH_DESIGN_MODAL_ID
]);
const SKETCH_DATA_HOOK = "sketch";
const SKETCH_DESIGN_MODAL_ID = "sketch-design-modal";
const SKETCH_COLOR_PICKER_MODAL_ID = "sketch-color-picker-modal";
const DATA_HOOKS = {
    DESIGN_MODAL: "sketch-design-modal",
    COLOR_INPUT: "sketch-color-input",
    COLOR_SWATCH: "sketch-color-swatch",
    ANIMATED_TOGGLE: "sketch-animated-toggle",
    STYLE_NONE: "sketch-style-none",
    STYLE_CLASSIC: "sketch-style-classic",
    STYLE_HIGHLIGHTER: "sketch-style-highlighter",
    STYLE_UNDERLINE: "sketch-style-underline",
    STYLE_STRIKETHROUGH: "sketch-style-strikethrough",
    STYLE_CROSSED_OFF: "sketch-style-crossed-off",
    STYLE_BOX: "sketch-style-box",
    STYLE_CIRCLE: "sketch-style-circle"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/decoration_sketch.enums.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SketchData_Variant",
    ()=>SketchData_Variant
]);
var SketchData_Variant = /* @__PURE__ */ ((SketchData_Variant2)=>{
    SketchData_Variant2["UNDERLINE"] = "UNDERLINE";
    SketchData_Variant2["BOX"] = "BOX";
    SketchData_Variant2["CIRCLE"] = "CIRCLE";
    SketchData_Variant2["HIGHLIGHT"] = "HIGHLIGHT";
    SketchData_Variant2["STRIKETHROUGH"] = "STRIKETHROUGH";
    SketchData_Variant2["CROSSED_OFF"] = "CROSSED_OFF";
    SketchData_Variant2["UNRECOGNIZED"] = "UNRECOGNIZED";
    return SketchData_Variant2;
})(SketchData_Variant || {});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/defaults.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANIMATION_DURATION_MS",
    ()=>ANIMATION_DURATION_MS,
    "CROSS_PARAGRAPH_MERGE_STYLES",
    ()=>CROSS_PARAGRAPH_MERGE_STYLES,
    "DEFAULT_ANIMATE",
    ()=>DEFAULT_ANIMATE,
    "DEFAULT_COLOR",
    ()=>DEFAULT_COLOR,
    "DEFAULT_STYLE",
    ()=>DEFAULT_STYLE,
    "ITERATIONS",
    ()=>ITERATIONS,
    "PADDING",
    ()=>PADDING,
    "STROKE_WIDTH",
    ()=>STROKE_WIDTH,
    "STYLE_TO_ARIA_LABEL",
    ()=>STYLE_TO_ARIA_LABEL,
    "TEXT_LAYER_Z_INDEX",
    ()=>TEXT_LAYER_Z_INDEX,
    "UNDERLINE_OFFSET",
    ()=>UNDERLINE_OFFSET,
    "getExplicitAnimate",
    ()=>getExplicitAnimate,
    "getOverlayZIndex",
    ()=>getOverlayZIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$decoration_sketch$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/decoration_sketch.enums.js [app-client] (ecmascript)");
;
const DEFAULT_STYLE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$decoration_sketch$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchData_Variant"].HIGHLIGHT;
const DEFAULT_COLOR = "$theme-color-3";
const DEFAULT_ANIMATE = true;
const getExplicitAnimate = (animate)=>animate === void 0 || animate === DEFAULT_ANIMATE ? void 0 : animate;
const STROKE_WIDTH = 2;
const PADDING = 5;
const UNDERLINE_OFFSET = 3;
const ANIMATION_DURATION_MS = 800;
const ITERATIONS = 2;
const STYLE_TO_ARIA_LABEL = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$decoration_sketch$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchData_Variant"].UNDERLINE]: "underlined",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$decoration_sketch$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchData_Variant"].BOX]: "boxed",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$decoration_sketch$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchData_Variant"].CIRCLE]: "circled",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$decoration_sketch$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchData_Variant"].HIGHLIGHT]: "highlighted",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$decoration_sketch$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchData_Variant"].STRIKETHROUGH]: "struck through",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$decoration_sketch$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchData_Variant"].CROSSED_OFF]: "crossed out"
};
const CROSS_PARAGRAPH_MERGE_STYLES = /* @__PURE__ */ new Set([
    "BOX",
    "CIRCLE"
]);
const TEXT_LAYER_Z_INDEX = "1";
const BEHIND_TEXT_OVERLAY_Z_INDEX = "-1";
const IN_FRONT_OF_TEXT_OVERLAY_Z_INDEX = "2";
const isBehindTextStyle = (style)=>style === "HIGHLIGHT";
const getOverlayZIndex = (style)=>isBehindTextStyle(style) ? BEHIND_TEXT_OVERLAY_Z_INDEX : IN_FRONT_OF_TEXT_OVERLAY_Z_INDEX;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/node-view-decorator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SketchDecorator",
    ()=>SketchDecorator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/defaults.js [app-client] (ecmascript)");
;
;
;
;
let scheduleRender = null;
let pendingTargets = null;
const lazyScheduleRender = (target)=>{
    if (scheduleRender) {
        scheduleRender(target);
        return;
    }
    if (pendingTargets) {
        pendingTargets.push(target);
        return;
    }
    pendingTargets = [
        target
    ];
    void __turbopack_context__.A("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/schedule-sketch-render.js [app-client] (ecmascript, async loader)").then((mod)=>{
        scheduleRender = mod.scheduleSketchRender;
        const queued = pendingTargets ?? [];
        pendingTargets = null;
        for (const queuedTarget of queued){
            scheduleRender(queuedTarget);
        }
    });
};
const SketchDecorator = {
    rule: (node)=>!!node.textData?.decorations?.some(({ type })=>type === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration_Type"].SKETCH),
    decorate: ({ element, node, context })=>{
        const decoration = node.textData?.decorations?.find((d)=>d.type === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration_Type"].SKETCH);
        const data = decoration?.sketchData;
        const style = data?.variant ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_STYLE"];
        const color = data?.color ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COLOR"];
        const animate = !context.isPrint && (data?.animate ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ANIMATE"]);
        const ariaLabel = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STYLE_TO_ARIA_LABEL"][style] ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STYLE_TO_ARIA_LABEL"][__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_STYLE"]];
        const jsxElement = element;
        const refCallback = (target)=>{
            if (!target) {
                return;
            }
            (target.ownerDocument.defaultView ?? window).ricosSketchesReady = false;
            lazyScheduleRender(target);
        };
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            key: `rough-${jsxElement?.key ?? ""}`,
            ref: refCallback,
            "data-hook": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKETCH_DATA_HOOK"],
            "data-style": style,
            "data-color": color,
            "data-animate": String(animate),
            "aria-label": ariaLabel,
            style: {
                position: "relative",
                zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXT_LAYER_Z_INDEX"],
                textDecoration: "inherit"
            }
        }, jsxElement);
    }
};
;
}),
]);

//# sourceMappingURL=0rv~_%40wix_ricos_dist_es_0ctr~66._.js.map