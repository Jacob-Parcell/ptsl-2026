(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/merge-rules.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canMergeAdjacentByStructure",
    ()=>canMergeAdjacentByStructure,
    "getAnnotationSignature",
    ()=>getAnnotationSignature,
    "isCrossParagraphMergeStyle",
    ()=>isCrossParagraphMergeStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/defaults.js [app-client] (ecmascript)");
;
const getAnnotationSignature = (attrs)=>{
    const style = attrs.style || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_STYLE"];
    const color = attrs.color || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COLOR"];
    const animate = attrs.animate ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ANIMATE"];
    return `${style}|${color}|${animate}`;
};
const isCrossParagraphMergeStyle = (style)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CROSS_PARAGRAPH_MERGE_STYLES"].has(style);
const canMergeAdjacentByStructure = (style, context)=>{
    if (context.sameBlock) {
        return true;
    }
    return isCrossParagraphMergeStyle(style) && context.sameStructuralContainer;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/rect-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOverlayRects",
    ()=>getOverlayRects
]);
const mergeRectsByLine = (list)=>{
    const rects = [];
    for(let i = 0; i < list.length; i++){
        rects.push(list[i]);
    }
    const out = [];
    const sortedRects = rects.sort((a, b)=>a.top - b.top || a.left - b.left);
    let line = null;
    for (const rect of sortedRects){
        const centerY = rect.top + rect.height / 2;
        if (!line || centerY < line.top || centerY > line.bottom) {
            if (line) {
                out.push(new DOMRect(line.left, line.top, line.right - line.left, line.bottom - line.top));
            }
            line = {
                left: rect.left,
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom
            };
            continue;
        }
        line.left = Math.min(line.left, rect.left);
        line.top = Math.min(line.top, rect.top);
        line.right = Math.max(line.right, rect.right);
        line.bottom = Math.max(line.bottom, rect.bottom);
    }
    if (line) {
        out.push(new DOMRect(line.left, line.top, line.right - line.left, line.bottom - line.top));
    }
    return out;
};
const mergeRectsToBoundingRect = (list)=>{
    if (list.length === 0) {
        return [];
    }
    let left = Infinity;
    let top = Infinity;
    let right = -Infinity;
    let bottom = -Infinity;
    for(let i = 0; i < list.length; i++){
        const rect = list[i];
        left = Math.min(left, rect.left);
        top = Math.min(top, rect.top);
        right = Math.max(right, rect.right);
        bottom = Math.max(bottom, rect.bottom);
    }
    return [
        new DOMRect(left, top, right - left, bottom - top)
    ];
};
const getOverlayRects = (style, list)=>{
    if (style === "BOX" || style === "CIRCLE") {
        return mergeRectsToBoundingRect(list);
    }
    return mergeRectsByLine(list);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/theme-color-token.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/resolve-css-color.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveCssColor",
    ()=>resolveCssColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/theme-color-token.js [app-client] (ecmascript)");
;
const resolveCssColor = (color)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDocumentColorToCss"])(color) ?? color;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/draw-rough-shapes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateShapePaths",
    ()=>generateShapePaths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/defaults.js [app-client] (ecmascript)");
;
const buildOptions = (mode, seed)=>({
        maxRandomnessOffset: 2,
        roughness: mode === "highlight" ? 3 : 1.5,
        bowing: 1,
        stroke: "#000",
        strokeWidth: 1.5,
        curveTightness: 0,
        curveFitting: 0.95,
        curveStepCount: 9,
        fillStyle: "hachure",
        fillWeight: -1,
        hachureAngle: -41,
        hachureGap: -1,
        dashOffset: -1,
        dashGap: -1,
        zigzagOffset: -1,
        disableMultiStroke: mode !== "double",
        disableMultiStrokeFill: false,
        preserveVertices: false,
        fillShapeRoughnessGain: 0.8,
        seed
    });
const opsBoundingWidth = (opList)=>{
    let minX = Infinity;
    let maxX = -Infinity;
    for (const drawing of opList){
        for (const item of drawing.ops){
            const data = item.data;
            for(let i = 0; i < data.length; i += 2){
                const x = data[i];
                if (x === void 0) {
                    continue;
                }
                if (x < minX) {
                    minX = x;
                }
                if (x > maxX) {
                    maxX = x;
                }
            }
        }
    }
    return maxX > minX ? maxX - minX : 0;
};
const opsToPath = (opList)=>{
    const paths = [];
    for (const drawing of opList){
        let path = "";
        for (const item of drawing.ops){
            const data = item.data;
            switch(item.op){
                case "move":
                    if (path.trim()) {
                        paths.push(path.trim());
                    }
                    path = `M${data[0]} ${data[1]} `;
                    break;
                case "bcurveTo":
                    path += `C${data[0]} ${data[1]}, ${data[2]} ${data[3]}, ${data[4]} ${data[5]} `;
                    break;
                case "lineTo":
                    path += `L${data[0]} ${data[1]} `;
                    break;
            }
        }
        if (path.trim()) {
            paths.push(path.trim());
        }
    }
    return paths;
};
const pushAlternatingHorizontalStrokes = (ops, line, rect, y, iterations, o)=>{
    for(let i = 0; i < iterations; i++){
        if (i % 2) {
            ops.push(line(rect.x + rect.w, y, rect.x, y, o));
        } else {
            ops.push(line(rect.x, y, rect.x + rect.w, y, o));
        }
    }
};
const collectOps = ({ renderer, rect, style, seed })=>{
    const { line, rectangle, ellipse } = renderer;
    const iterations = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITERATIONS"];
    const o = buildOptions("single", seed);
    const ops = [];
    let strokeWidth = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STROKE_WIDTH"];
    switch(style){
        case "UNDERLINE":
            pushAlternatingHorizontalStrokes(ops, line, rect, rect.y + rect.h + __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDERLINE_OFFSET"], iterations, o);
            return {
                ops,
                strokeWidth
            };
        case "STRIKETHROUGH":
            pushAlternatingHorizontalStrokes(ops, line, rect, rect.y + rect.h / 2, iterations, o);
            return {
                ops,
                strokeWidth
            };
        case "CROSSED_OFF":
            {
                const { x, y } = rect;
                const x2 = x + rect.w;
                const y2 = y + rect.h;
                for(let i = 0; i < iterations; i++){
                    if (i % 2) {
                        ops.push(line(x2, y2, x, y, o));
                    } else {
                        ops.push(line(x, y, x2, y2, o));
                    }
                }
                for(let i = 0; i < iterations; i++){
                    if (i % 2) {
                        ops.push(line(x, y2, x2, y, o));
                    } else {
                        ops.push(line(x2, y, x, y2, o));
                    }
                }
                return {
                    ops,
                    strokeWidth
                };
            }
        case "HIGHLIGHT":
            {
                const ho = buildOptions("highlight", seed);
                strokeWidth = rect.h * 0.95;
                const y = rect.y + rect.h / 2;
                for(let i = 0; i < iterations; i++){
                    if (i % 2) {
                        ops.push(line(rect.x + rect.w, y, rect.x, y, ho));
                    } else {
                        ops.push(line(rect.x, y, rect.x + rect.w, y, ho));
                    }
                }
                return {
                    ops,
                    strokeWidth
                };
            }
        case "BOX":
            {
                const x = rect.x - __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PADDING"];
                const y = rect.y - __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PADDING"];
                const width = rect.w + 2 * __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PADDING"];
                const height = rect.h + 2 * __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PADDING"];
                for(let i = 0; i < iterations; i++){
                    ops.push(rectangle(x, y, width, height, o));
                }
                return {
                    ops,
                    strokeWidth
                };
            }
        case "CIRCLE":
            {
                const doubleO = buildOptions("double", seed);
                const cx = rect.x + rect.w / 2;
                const cy = rect.y + rect.h / 2;
                const fullItr = Math.floor(iterations / 2);
                const singleItr = iterations - fullItr * 2;
                const drawEllipse = (ellipseW, ellipseH)=>{
                    const out = [];
                    for(let i = 0; i < fullItr; i++){
                        out.push(ellipse(cx, cy, ellipseW, ellipseH, doubleO));
                    }
                    for(let i = 0; i < singleItr; i++){
                        out.push(ellipse(cx, cy, ellipseW, ellipseH, o));
                    }
                    return out;
                };
                const naturalW = rect.w + 2 * __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PADDING"];
                const naturalH = rect.h + 2 * __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PADDING"];
                let circleOps = drawEllipse(naturalW, naturalH);
                const renderedW = opsBoundingWidth(circleOps);
                if (renderedW < rect.w) {
                    const inflate = (rect.w + __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PADDING"]) / renderedW;
                    circleOps = drawEllipse(naturalW * inflate, naturalH * inflate);
                }
                ops.push(...circleOps);
                return {
                    ops,
                    strokeWidth
                };
            }
        default:
            return collectOps({
                renderer,
                rect,
                style: "BOX",
                seed
            });
    }
};
const generateShapePaths = (args)=>{
    const { ops, strokeWidth } = collectOps(args);
    return opsToPath(ops).map((d)=>({
            d,
            strokeWidth
        }));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/overlay-handle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOverlayHandle",
    ()=>createOverlayHandle,
    "translateRectsToContainerSpace",
    ()=>translateRectsToContainerSpace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolve$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/resolve-css-color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$draw$2d$rough$2d$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/draw-rough-shapes.js [app-client] (ecmascript)");
;
;
;
const SVGNS = "http://www.w3.org/2000/svg";
const SKETCH_CLASS = "sketch";
const KEYFRAMES_STYLE_ID = "sketch-keyframes";
const KEYFRAMES = `@keyframes sketch-dash { to { stroke-dashoffset: 0 } }`;
const HOST_STYLE_ID = "sketch-host";
const HOST_STYLE = `.ProseMirror :has(> [data-hook="sketch-widget"]) { position: relative; z-index: 0; }`;
const SVG_FIXED_CSS_SIZE = 100;
let cachedRendererPromise = null;
const loadRenderer = ()=>{
    if (!cachedRendererPromise) {
        cachedRendererPromise = __turbopack_context__.A("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/renderer.js [app-client] (ecmascript, async loader)").then((mod)=>mod);
    }
    return cachedRendererPromise;
};
const ensureGlobalStyle = (id, css)=>{
    if (document.getElementById(id)) {
        return;
    }
    const styleEl = document.createElement("style");
    styleEl.id = id;
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
};
const ensureKeyframes = ()=>ensureGlobalStyle(KEYFRAMES_STYLE_ID, KEYFRAMES);
const ensureHostStyle = ()=>ensureGlobalStyle(HOST_STYLE_ID, HOST_STYLE);
const createOverlaySvg = ()=>{
    const svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("class", SKETCH_CLASS);
    const style = svg.style;
    style.position = "absolute";
    style.top = "0";
    style.left = "0";
    style.width = `${SVG_FIXED_CSS_SIZE}px`;
    style.height = `${SVG_FIXED_CSS_SIZE}px`;
    style.overflow = "visible";
    style.pointerEvents = "none";
    return svg;
};
const translateRectsToContainerSpace = (container, rects)=>{
    const bcr = container.getBoundingClientRect();
    const cssWidth = container.clientWidth;
    const cssHeight = container.clientHeight;
    const scaleX = cssWidth > 0 && bcr.width > 0 ? bcr.width / cssWidth : 1;
    const scaleY = cssHeight > 0 && bcr.height > 0 ? bcr.height / cssHeight : scaleX;
    return rects.map((rect)=>({
            x: (rect.left - bcr.left) / scaleX,
            y: (rect.top - bcr.top) / scaleY,
            w: rect.width / scaleX,
            h: rect.height / scaleY
        }));
};
const measurePathLength = (path)=>{
    try {
        const length = path.getTotalLength();
        return Number.isFinite(length) ? length : 0;
    } catch  {
        return 0;
    }
};
const clearChildren = (node)=>{
    while(node.firstChild){
        node.removeChild(node.firstChild);
    }
};
const createPath = (color, d, strokeWidth)=>{
    const path = document.createElementNS(SVGNS, "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolve$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCssColor"])(color) ?? color);
    path.setAttribute("stroke-width", String(strokeWidth));
    return path;
};
const animatePaths = (paths, groupDelay, totalDuration)=>{
    if (paths.length === 0) {
        return;
    }
    const lengths = paths.map(measurePathLength);
    const totalLength = lengths.reduce((sum, length)=>sum + length, 0);
    let offset = 0;
    paths.forEach((path, index)=>{
        const length = lengths[index];
        const duration = totalLength > 0 ? totalDuration * (length / totalLength) : 0;
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length);
        path.style.animation = `sketch-dash ${duration}ms ease-out ${groupDelay + offset}ms forwards`;
        offset += duration;
    });
};
const renderInto = (svg, renderer, opts, precomputedLocalRects)=>{
    clearChildren(svg);
    if (opts.rects.length === 0) {
        return [];
    }
    const localRects = precomputedLocalRects ?? translateRectsToContainerSpace(opts.container, opts.rects);
    const totalWidth = localRects.reduce((sum, r)=>sum + r.w, 0);
    const allPaths = [];
    let cumulativeDelay = 0;
    for (const rect of localRects){
        const shapePaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$draw$2d$rough$2d$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateShapePaths"])({
            renderer,
            rect,
            style: opts.style,
            seed: opts.seed
        });
        const rectPaths = shapePaths.map(({ d, strokeWidth })=>createPath(opts.color, d, strokeWidth));
        rectPaths.forEach((p)=>svg.appendChild(p));
        const rectDuration = totalWidth > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_DURATION_MS"] * (rect.w / totalWidth) : 0;
        if (opts.animate) {
            animatePaths(rectPaths, cumulativeDelay, rectDuration);
        }
        cumulativeDelay += rectDuration;
        allPaths.push(...rectPaths);
    }
    return allPaths;
};
const createOverlayHandle = (overlay)=>{
    ensureKeyframes();
    ensureHostStyle();
    const svg = createOverlaySvg();
    overlay.appendChild(svg);
    let renderer = null;
    let generation = 0;
    const draw = (opts, requestGeneration, r, precomputedLocalRects)=>{
        if (requestGeneration !== generation) {
            return;
        }
        renderInto(svg, r, opts, precomputedLocalRects);
        opts.onRendered?.();
    };
    return {
        redraw: (opts)=>{
            generation += 1;
            const current = generation;
            if (renderer) {
                draw(opts, current, renderer);
                return;
            }
            const localRects = translateRectsToContainerSpace(opts.container, opts.rects);
            void loadRenderer().then((r)=>{
                renderer = r;
                draw(opts, current, r, localRects);
            });
        },
        remove: ()=>{
            generation += 1;
            svg.remove();
        }
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/render-sketch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findOverlayContainer",
    ()=>findOverlayContainer,
    "renderAnnotationOverlay",
    ()=>renderAnnotationOverlay,
    "stableSeedFor",
    ()=>stableSeedFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$overlay$2d$handle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/overlay-handle.js [app-client] (ecmascript)");
;
;
const OVERLAY_STYLE = "position: absolute; left: 0; top: 0; width: 0; height: 0; pointer-events: none;";
const POSITIONED = /* @__PURE__ */ new Set([
    "relative",
    "absolute",
    "fixed",
    "sticky"
]);
const stableSeedFor = (input)=>{
    let hash = 5381;
    for(let i = 0; i < input.length; i++){
        hash = (hash << 5) + hash + input.charCodeAt(i) | 0;
    }
    return Math.abs(hash) % 2 ** 31;
};
const ensurePositioned = (element)=>{
    const computedStyle = window.getComputedStyle(element);
    if (!POSITIONED.has(computedStyle.position)) {
        element.style.position = "relative";
    }
    if (computedStyle.zIndex === "auto") {
        element.style.zIndex = "0";
    }
};
const INLINE_DISPLAY_VALUES = /* @__PURE__ */ new Set([
    "inline",
    "contents"
]);
const findOverlayContainer = (target)=>{
    let current = target.parentElement;
    while(current && INLINE_DISPLAY_VALUES.has(window.getComputedStyle(current).display)){
        current = current.parentElement;
    }
    return current;
};
const toRectArray = (list)=>{
    if (Array.isArray(list)) {
        return list;
    }
    const out = [];
    for(let i = 0; i < list.length; i++){
        out.push(list[i]);
    }
    return out;
};
const resolveRects = (target, getRects)=>getRects ? toRectArray(getRects()) : toRectArray(target.getClientRects());
const renderAnnotationOverlay = (target, opts)=>{
    if (typeof window === "undefined") {
        return null;
    }
    if (!target) {
        return null;
    }
    if (!target.parentElement) {
        return null;
    }
    const style = opts.style ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_STYLE"];
    const color = opts.color ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COLOR"];
    const animate = opts.animate ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ANIMATE"];
    const seed = opts.seed ?? stableSeedFor(target.textContent ?? "");
    const parent = findOverlayContainer(target);
    if (!parent) {
        return null;
    }
    ensurePositioned(parent);
    const overlay = document.createElement("div");
    overlay.style.cssText = OVERLAY_STYLE;
    overlay.style.zIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverlayZIndex"])(style);
    parent.appendChild(overlay);
    const rects = resolveRects(target, opts.getRects);
    const handle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$overlay$2d$handle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOverlayHandle"])(overlay);
    const baseRemove = handle.remove;
    handle.remove = ()=>{
        baseRemove();
        overlay.remove();
    };
    handle.redraw({
        style,
        color,
        seed,
        animate,
        rects,
        container: parent,
        onRendered: opts.onRendered
    });
    return handle;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/schedule-sketch-render.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scheduleSketchRender",
    ()=>scheduleSketchRender
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$merge$2d$rules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/merge-rules.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$rect$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/rect-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$render$2d$sketch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-text-color/sketch/render-sketch.js [app-client] (ecmascript)");
;
;
;
;
;
const BLOCKING_CONTENT_SELECTOR = "img,video,iframe,canvas,svg:not(.sketch)";
const scheduledDocuments = /* @__PURE__ */ new WeakSet();
const rootStates = /* @__PURE__ */ new WeakMap();
const overlaysByAnchor = /* @__PURE__ */ new Map();
const getSignature = (target)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$merge$2d$rules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnnotationSignature"])({
        style: target.getAttribute("data-style"),
        color: target.getAttribute("data-color"),
        animate: target.getAttribute("data-animate") !== "false"
    });
const INLINE_TAG_NAMES = /* @__PURE__ */ new Set([
    "SPAN",
    "A",
    "B",
    "I",
    "U",
    "EM",
    "STRONG",
    "MARK",
    "SMALL",
    "CODE",
    "KBD",
    "SAMP",
    "VAR",
    "SUB",
    "SUP",
    "ABBR",
    "CITE",
    "Q",
    "S",
    "DEL",
    "INS",
    "BR",
    "WBR"
]);
const findBlockRoot = (target)=>{
    let current = target.parentElement;
    while(current?.parentElement && INLINE_TAG_NAMES.has(current.tagName)){
        current = current.parentElement;
    }
    return current ?? target.parentElement ?? target;
};
const isParagraphBlock = (block)=>block.tagName === "P";
const findStructuralContainer = (block)=>{
    let current = block.parentElement;
    while(current && current.hasAttribute("data-breakout")){
        current = current.parentElement;
    }
    return current;
};
const getCommonAncestor = (from, to)=>{
    const ancestors = /* @__PURE__ */ new Set();
    let current = from;
    while(current){
        ancestors.add(current);
        current = current.parentNode;
    }
    current = to;
    while(current){
        if (ancestors.has(current)) {
            return current;
        }
        current = current.parentNode;
    }
    return document.body;
};
const isSoftBreakTextNode = (node)=>node.nodeType === globalThis.Node.TEXT_NODE && node.textContent === "\n";
const hasContentBetween = (from, to, style)=>{
    const allowHardBreak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$merge$2d$rules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCrossParagraphMergeStyle"])(style);
    const root = getCommonAncestor(from, to);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let isBetweenTargets = false;
    while(walker.nextNode()){
        const current = walker.currentNode;
        if (current === from) {
            isBetweenTargets = true;
            continue;
        }
        if (current === to) {
            return false;
        }
        if (!isBetweenTargets || from.contains(current) || to.contains(current)) {
            continue;
        }
        if (current.nodeType === globalThis.Node.TEXT_NODE && current.textContent) {
            if (allowHardBreak && isSoftBreakTextNode(current)) {
                continue;
            }
            return true;
        }
        if (current instanceof HTMLElement && current.matches(BLOCKING_CONTENT_SELECTOR)) {
            return true;
        }
    }
    return false;
};
const canMergeSpans = (from, to, style)=>{
    if (hasContentBetween(from, to, style)) {
        return false;
    }
    const fromBlock = findBlockRoot(from);
    const toBlock = findBlockRoot(to);
    if (fromBlock === toBlock) {
        return true;
    }
    if (!isParagraphBlock(fromBlock) || !isParagraphBlock(toBlock)) {
        return false;
    }
    const fromContainer = findStructuralContainer(fromBlock);
    const toContainer = findStructuralContainer(toBlock);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$merge$2d$rules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canMergeAdjacentByStructure"])(style, {
        sameBlock: false,
        // Object identity: two `<li>`s under the same `<ul>` are distinct
        // element instances, so cross list-item merging is naturally rejected.
        sameStructuralContainer: !!fromContainer && fromContainer === toContainer
    });
};
const findObservationRoot = (target)=>{
    const blockRoot = findBlockRoot(target);
    const structural = findStructuralContainer(blockRoot);
    return structural ?? blockRoot ?? target.ownerDocument?.body;
};
const isInsideEditableRegion = (el)=>{
    const nearest = el.closest("[contenteditable]");
    if (!nearest) {
        return false;
    }
    const value = nearest.getAttribute("contenteditable");
    return value === "true" || value === "";
};
const getRoughSpans = (root)=>Array.from(root.querySelectorAll(`span[data-hook="${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKETCH_DATA_HOOK"]}"]`)).filter((span)=>!isInsideEditableRegion(span));
const buildAnnotationGroups = (spans)=>{
    const groups = [];
    for (const span of spans){
        const previousGroup = groups[groups.length - 1];
        const previousSpan = previousGroup?.[previousGroup.length - 1];
        const style = span.getAttribute("data-style") || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_STYLE"];
        if (previousGroup && previousSpan && getSignature(previousSpan) === getSignature(span) && canMergeSpans(previousSpan, span, style)) {
            previousGroup.push(span);
            continue;
        }
        groups.push([
            span
        ]);
    }
    return groups;
};
const getAnimate = (target)=>target.getAttribute("data-animate") !== "false";
let spanIdCounter = 0;
const spanIds = /* @__PURE__ */ new WeakMap();
const getSpanId = (span)=>{
    const existing = spanIds.get(span);
    if (existing !== void 0) {
        return existing;
    }
    const id = String(++spanIdCounter);
    spanIds.set(span, id);
    return id;
};
const computeAnnotationGroupKey = (group)=>{
    const target = group[0];
    const style = target.getAttribute("data-style") || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_STYLE"];
    const color = target.getAttribute("data-color") || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COLOR"];
    const animate = target.getAttribute("data-animate") || String(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ANIMATE"]);
    return `${style}|${color}|${animate}|${group.map(getSpanId).join(",")}`;
};
const teardownOverlay = (entry)=>{
    entry.pendingObserver?.disconnect();
    entry.pendingObserver = null;
    if (entry.handle) {
        const rootState = rootStates.get(entry.observationRoot);
        if (rootState) {
            rootState.mountedOverlays = rootState.mountedOverlays.filter((g)=>g.handle !== entry.handle);
        }
        entry.handle.remove();
        entry.handle = null;
    }
};
const buildAnnotationGroupSeedText = (group)=>group.map((span)=>span.textContent ?? "").join("\n");
const createOverlay = (group, onRendered)=>{
    const target = group[0];
    if (!target || !target.isConnected) {
        return null;
    }
    const style = target.getAttribute("data-style") || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_STYLE"];
    const color = target.getAttribute("data-color") || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COLOR"];
    const animate = getAnimate(target);
    const seedText = buildAnnotationGroupSeedText(group);
    const seed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$render$2d$sketch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stableSeedFor"])(seedText);
    const observationRoot = findObservationRoot(target);
    const entry = {
        key: computeAnnotationGroupKey(group),
        group,
        style,
        color,
        seed,
        handle: null,
        observationRoot,
        pendingObserver: null
    };
    const render = (shouldAnimate)=>{
        if (!target.isConnected) {
            return;
        }
        const handle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$render$2d$sketch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderAnnotationOverlay"])(target, {
            style,
            color,
            animate: shouldAnimate,
            seed,
            getRects: ()=>getAnnotationGroupRects(group, style),
            onRendered
        });
        if (handle) {
            entry.handle = handle;
            registerMountedOverlay(observationRoot, {
                group,
                style,
                color,
                seed,
                handle,
                animate,
                // Seed from the rects we just drew so the next resize doesn't
                // misread this as a hidden→visible transition and replay.
                wasVisible: isAnnotationGroupVisible(getAnnotationGroupRects(group, style))
            });
        }
    };
    if (animate && typeof IntersectionObserver !== "undefined") {
        entry.pendingObserver = new IntersectionObserver((entries)=>{
            if (entries.some((e)=>e.isIntersecting)) {
                entry.pendingObserver?.disconnect();
                entry.pendingObserver = null;
                render(true);
            }
        }, {
            threshold: 0.1
        });
        entry.pendingObserver.observe(target);
    } else {
        render(false);
    }
    return entry;
};
const promoteMergedOverlayAnchors = (group)=>{
    for(let i = 1; i < group.length; i++){
        const promoted = overlaysByAnchor.get(group[i]);
        if (promoted) {
            teardownOverlay(promoted);
            overlaysByAnchor.delete(group[i]);
        }
    }
};
const collectAnnotationGroups = (doc)=>{
    const spans = getRoughSpans(doc.body).filter((span)=>span.isConnected);
    return buildAnnotationGroups(spans);
};
const createRenderCompletionTracker = (doc)=>{
    let pendingRenders = 0;
    let renderScanComplete = false;
    const markGroupRendered = ()=>{
        pendingRenders -= 1;
        if (renderScanComplete && pendingRenders === 0) {
            markSketchesReady(doc);
        }
    };
    return {
        markGroupRendered,
        trackPendingRender: ()=>{
            pendingRenders += 1;
        },
        completeRenderScan: ()=>{
            renderScanComplete = true;
            if (pendingRenders === 0) {
                markSketchesReady(doc);
            }
        }
    };
};
const syncOverlayForGroup = (group, trackPendingRender, markGroupRendered)=>{
    const anchor = group[0];
    if (!anchor) {
        return null;
    }
    promoteMergedOverlayAnchors(group);
    const key = computeAnnotationGroupKey(group);
    const existing = overlaysByAnchor.get(anchor);
    if (existing && existing.key === key) {
        return anchor;
    }
    if (existing) {
        teardownOverlay(existing);
        overlaysByAnchor.delete(anchor);
    }
    trackPendingRender();
    const entry = createOverlay(group, markGroupRendered);
    if (entry) {
        overlaysByAnchor.set(anchor, entry);
    } else {
        markGroupRendered();
    }
    return anchor;
};
const dropStaleOverlays = (liveAnchors)=>{
    for (const [anchor, entry] of overlaysByAnchor){
        if (!liveAnchors.has(anchor) || !anchor.isConnected) {
            teardownOverlay(entry);
            overlaysByAnchor.delete(anchor);
        }
    }
};
const reconcileOverlays = (doc)=>{
    const renderCompletion = createRenderCompletionTracker(doc);
    const liveAnchors = /* @__PURE__ */ new Set();
    for (const group of collectAnnotationGroups(doc)){
        const anchor = syncOverlayForGroup(group, renderCompletion.trackPendingRender, renderCompletion.markGroupRendered);
        if (anchor) {
            liveAnchors.add(anchor);
        }
    }
    dropStaleOverlays(liveAnchors);
    renderCompletion.completeRenderScan();
};
const markSketchesPending = (doc)=>{
    const view = doc.defaultView;
    if (view) {
        view.ricosSketchesReady = false;
    }
};
const markSketchesReady = (doc)=>{
    const view = doc.defaultView;
    if (!view) {
        return;
    }
    view.requestAnimationFrame(()=>{
        view.requestAnimationFrame(()=>{
            view.ricosSketchesReady = true;
        });
    });
};
const isAnnotationGroupVisible = (rects)=>rects.some((r)=>r.width > 0 && r.height > 0);
const shouldReplayRevealAnimation = (entry, rects)=>entry.animate && isAnnotationGroupVisible(rects) && !entry.wasVisible;
const redrawRootOverlays = (root)=>{
    const state = rootStates.get(root);
    if (!state) {
        return;
    }
    state.mountedOverlays = state.mountedOverlays.filter(({ group, handle })=>{
        const stillConnected = group.some((span)=>span.isConnected);
        if (!stillConnected) {
            handle.remove();
        }
        return stillConnected;
    });
    for (const entry of state.mountedOverlays){
        const { group, style, color, seed, handle } = entry;
        const rects = getAnnotationGroupRects(group, style);
        const visible = isAnnotationGroupVisible(rects);
        const shouldAnimate = shouldReplayRevealAnimation(entry, rects);
        entry.wasVisible = visible;
        const anchor = group[0];
        if (!anchor) {
            continue;
        }
        const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$render$2d$sketch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findOverlayContainer"])(anchor);
        if (!container) {
            continue;
        }
        handle.redraw({
            style,
            color,
            seed,
            animate: shouldAnimate,
            rects,
            container
        });
    }
};
const ensureRootResizeObserver = (root)=>{
    const existing = rootStates.get(root);
    if (existing) {
        return existing;
    }
    const state = {
        observer: null,
        mountedOverlays: [],
        resizeFrame: null,
        hasObservedInitialResize: false
    };
    if (typeof ResizeObserver !== "undefined") {
        state.observer = new ResizeObserver(()=>{
            if (!state.hasObservedInitialResize) {
                state.hasObservedInitialResize = true;
                return;
            }
            if (state.resizeFrame !== null) {
                return;
            }
            state.resizeFrame = window.requestAnimationFrame(()=>{
                state.resizeFrame = null;
                if (!root.isConnected) {
                    state.observer?.disconnect();
                    rootStates.delete(root);
                    return;
                }
                redrawRootOverlays(root);
            });
        });
        state.observer.observe(root);
    }
    rootStates.set(root, state);
    return state;
};
const registerMountedOverlay = (root, overlay)=>{
    const state = ensureRootResizeObserver(root);
    state.mountedOverlays = state.mountedOverlays.filter((g)=>g.group[0] !== overlay.group[0]);
    state.mountedOverlays.push(overlay);
};
const getAnnotationGroupRects = (group, style)=>{
    const rects = [];
    for (const span of group){
        const list = span.getClientRects();
        for(let i = 0; i < list.length; i++){
            rects.push(list[i]);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$text$2d$color$2f$sketch$2f$rect$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverlayRects"])(style, rects);
};
const scheduleSketchRender = (target)=>{
    const doc = target.ownerDocument;
    if (!doc) {
        return;
    }
    markSketchesPending(doc);
    if (scheduledDocuments.has(doc)) {
        return;
    }
    scheduledDocuments.add(doc);
    (doc.defaultView ?? window).requestAnimationFrame(()=>{
        scheduledDocuments.delete(doc);
        reconcileOverlays(doc);
    });
};
;
}),
]);

//# sourceMappingURL=0rv~_%40wix_ricos_dist_es_0luacyo._.js.map