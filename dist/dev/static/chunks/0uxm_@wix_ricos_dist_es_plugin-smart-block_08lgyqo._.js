(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/data-hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DATA_HOOKS",
    ()=>DATA_HOOKS
]);
const DATA_HOOKS = {
    SMART_BLOCK: "smart-block",
    SMART_BLOCK_CELL: "smart-block-cell",
    SMART_BLOCK_CELL_HANDLE: "smart-block-cell-handle",
    SMART_BLOCK_CELL_ADD_BUTTON: "smart-block-cell-add-button",
    CELL_ADD_ICON_BUTTON: "smart-block-cell-add-icon-button",
    CELL_REPLACE_SHAPE_BUTTON: "smart-block-cell-replace-shape-button",
    INSERT_MODAL: "smart-block-insert-modal",
    INSERT_BUTTON: "smart-block-insert-button",
    VARIANT_DROPDOWN: "smart-block-variant-dropdown",
    VARIANT_BUTTON: "smart-block-variant-button",
    ADD_ITEM_BUTTON: "smart-block-add-item-button",
    SMART_BLOCK_HANDLE: "smart-block-handle",
    CELL_DESIGN_BUTTON: "smart-block-cell-design-button",
    CELL_DESIGN_PANEL: "smart-block-cell-design-panel",
    CELL_DESIGN_BG_COLOR: "smart-block-cell-design-bg-color",
    CELL_DESIGN_BG_COLOR_PICKER: "smart-block-cell-design-bg-color-picker",
    CELL_DESIGN_BORDER_COLOR: "smart-block-cell-design-border-color",
    CELL_DESIGN_BORDER_COLOR_PICKER: "smart-block-cell-design-border-color-picker",
    CELL_DESIGN_BORDER_WIDTH: "smart-block-cell-design-border-width",
    CELL_DESIGN_BORDER_RADIUS: "smart-block-cell-design-border-radius",
    COLUMN_SIZE_DROPDOWN_BUTTON: "smart-block-column-size-button",
    COLUMN_SIZE_OPTION_SMALL: "smart-block-column-size-small",
    COLUMN_SIZE_OPTION_MEDIUM: "smart-block-column-size-medium",
    COLUMN_SIZE_OPTION_LARGE: "smart-block-column-size-large",
    COLUMN_SIZE_OPTION_EXTRA_LARGE: "smart-block-column-size-extra-large",
    CELL_ADD_DROPDOWN_BUTTON: "smart-block-cell-add-dropdown",
    CELL_ADD_BEFORE_BUTTON: "smart-block-cell-add-before",
    CELL_ADD_AFTER_BUTTON: "smart-block-cell-add-after",
    CELL_DUPLICATE_BUTTON: "smart-block-cell-duplicate",
    DIRECTION_DROPDOWN_BUTTON: "smart-block-direction-dropdown",
    DIRECTION_OPTION_HORIZONTAL: "smart-block-direction-horizontal",
    DIRECTION_OPTION_VERTICAL: "smart-block-direction-vertical",
    TEXT_ALIGN_DROPDOWN_BUTTON: "smart-block-text-align-dropdown",
    COLOR_BUTTON: "smart-block-color-button",
    DESIGN_BUTTON: "smart-block-design-button",
    BLOCK_BORDER_SETTINGS: "smart-block-border-settings-modal",
    NUMBERED_TOGGLE_BUTTON: "smart-block-numbered-toggle",
    NUMBERED_DROPDOWN_BUTTON: "smart-block-numbered-dropdown",
    NUMBERED_OPTION_NUMBERS: "smart-block-numbered-numbers",
    NUMBERED_OPTION_SHAPES: "smart-block-numbered-shapes",
    VARIANT_BUTTON_DATA_HOOK: "smart-block-variant-button",
    CELL_SHAPE_PICKER: "smart-block-cell-shape-picker",
    CELL_SHAPE_COLOR_BUTTON: "smart-block-cell-shape-color-button",
    SELECT_BLOCK_BUTTON: "smart-block-select-block-button"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CIRCLE_BOX_SIZE",
    ()=>CIRCLE_BOX_SIZE,
    "CIRCLE_CORNER_RADIUS",
    ()=>CIRCLE_CORNER_RADIUS,
    "CIRCLE_INNER_RADIUS",
    ()=>CIRCLE_INNER_RADIUS,
    "CIRCLE_OUTER_RADIUS",
    ()=>CIRCLE_OUTER_RADIUS,
    "CIRCLE_SEGMENT_GAP",
    ()=>CIRCLE_SEGMENT_GAP,
    "DEFAULT_LABEL",
    ()=>DEFAULT_LABEL,
    "DEFAULT_SHAPE_SRC",
    ()=>DEFAULT_SHAPE_SRC,
    "DEFAULT_STAR_RATING_LABEL",
    ()=>DEFAULT_STAR_RATING_LABEL,
    "MAX_ITEMS",
    ()=>MAX_ITEMS,
    "SMART_BLOCK_DEFAULTS",
    ()=>SMART_BLOCK_DEFAULTS
]);
const DEFAULT_LABEL = "50%";
const DEFAULT_STAR_RATING_LABEL = "3";
const DEFAULT_SHAPE_SRC = {
    id: "ea08a3a5ec014d94b2b1cd4d6709d67d.svg"
};
const SMART_BLOCK_DEFAULTS = {
    type: "SOLID_BOXES",
    columnSize: "MEDIUM"
};
const MAX_ITEMS = 12;
const CIRCLE_BOX_SIZE = 360;
const CIRCLE_OUTER_RADIUS = 150;
const CIRCLE_INNER_RADIUS = 75;
const CIRCLE_SEGMENT_GAP = 8;
const CIRCLE_CORNER_RADIUS = 8;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/templates/create-boxes-template.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSmartBlockTemplate",
    ()=>createSmartBlockTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$converters$2f$generate$2d$random$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/converters/generate-random-id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/uncreachable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/consts.js [app-client] (ecmascript)");
;
;
;
const createSmartBlockTemplate = (type, t)=>{
    const itemCount = getItemCountForVariant(type);
    return {
        nodes: [
            {
                type: "PARAGRAPH",
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$converters$2f$generate$2d$random$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])()
            },
            {
                type: "SMART_BLOCK",
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$converters$2f$generate$2d$random$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
                smartBlockData: {
                    type
                },
                nodes: Array.from({
                    length: itemCount
                }, ()=>createDefaultItem(type, t))
            },
            {
                type: "PARAGRAPH",
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$converters$2f$generate$2d$random$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])()
            }
        ]
    };
};
const getItemCountForVariant = (type)=>{
    switch(type){
        case "SOLID_BOXES_ALTERNATING":
        case "TIMELINE":
        case "MINIMAL_TIMELINE":
        case "CIRCLE":
            return 4;
        default:
            return 3;
    }
};
const cellDataForVariant = (type, label)=>{
    switch(type){
        case "CIRCLE_STATS":
        case "BAR_STATS":
        case "STATS":
        case "STAR_RATING":
            return {
                type,
                label
            };
        case "SOLID_BOXES":
        case "SOLID_BOXES_ALTERNATING":
        case "SOLID_JOINED_BOXES":
        case "TOP_LINE_TEXT":
        case "OUTLINE_BOXES_WITH_TOP_CIRCLE":
        case "PROCESS_STEPS":
        case "SIDE_LINE_TEXT":
        case "SMALL_BULLETS":
        case "NUMBERED_BOXES":
        case "BIG_BULLETS":
        case "ARROW_BULLETS":
        case "TIMELINE":
        case "MINIMAL_TIMELINE":
        case "PILLS":
        case "QUOTE_BOXES":
        case "CIRCLE":
        case "PYRAMID":
        case "STAIRCASE":
        case "VERTICAL_FUNNEL":
            return {
                type
            };
        default:
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(type);
                return {
                    type
                };
            }
    }
};
const createDefaultItem = (type, t)=>{
    const label = type === "STATS" || type === "BAR_STATS" || type === "CIRCLE_STATS" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LABEL"] : type === "STAR_RATING" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_STAR_RATING_LABEL"] : void 0;
    return {
        type: "SMART_BLOCK_CELL",
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$converters$2f$generate$2d$random$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        smartBlockCellData: cellDataForVariant(type, label),
        nodes: [
            {
                type: "HEADING",
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$converters$2f$generate$2d$random$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
                nodes: [
                    {
                        type: "TEXT",
                        id: "",
                        textData: {
                            text: t("SmartBlock_Template_Title"),
                            decorations: [
                                {
                                    type: "BOLD",
                                    fontWeightValue: 700
                                }
                            ]
                        }
                    }
                ],
                headingData: {
                    level: 3
                }
            },
            {
                type: "PARAGRAPH",
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$converters$2f$generate$2d$random$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
                nodes: [
                    {
                        type: "TEXT",
                        id: "",
                        textData: {
                            text: t("SmartBlock_Template_Description")
                        }
                    }
                ]
            }
        ]
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/variant-features.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCellColorAttr",
    ()=>getCellColorAttr,
    "hasBlockBorderSupport",
    ()=>hasBlockBorderSupport,
    "hasCellBorderSupport",
    ()=>hasCellBorderSupport,
    "hasColumnSizeSupport",
    ()=>hasColumnSizeSupport,
    "hasOrientation",
    ()=>hasOrientation,
    "hasShapeSupport",
    ()=>hasShapeSupport,
    "isBulletVariant",
    ()=>isBulletVariant
]);
const isBulletVariant = (type)=>[
        "BIG_BULLETS",
        "ARROW_BULLETS",
        "SMALL_BULLETS"
    ].includes(type);
const hasShapeSupport = (type)=>[
        "NUMBERED_BOXES",
        "OUTLINE_BOXES_WITH_TOP_CIRCLE",
        "BIG_BULLETS",
        "ARROW_BULLETS",
        "PROCESS_STEPS",
        "TIMELINE",
        "PILLS",
        "CIRCLE",
        "PYRAMID",
        "STAIRCASE",
        "VERTICAL_FUNNEL"
    ].includes(type);
const hasCellBorderSupport = (type)=>[
        "SOLID_BOXES",
        "NUMBERED_BOXES",
        "STATS",
        "SOLID_BOXES_ALTERNATING",
        "BIG_BULLETS",
        "SMALL_BULLETS",
        "ARROW_BULLETS"
    ].includes(type);
const hasBlockBorderSupport = (type)=>[
        "SOLID_JOINED_BOXES"
    ].includes(type);
const hasOrientation = (type)=>[
        "SOLID_BOXES_ALTERNATING",
        "BIG_BULLETS",
        "SMALL_BULLETS",
        "ARROW_BULLETS",
        "TIMELINE",
        "MINIMAL_TIMELINE",
        "PILLS"
    ].includes(type);
const hasColumnSizeSupport = (type)=>{
    switch(type){
        case "SOLID_BOXES_ALTERNATING":
        case "TIMELINE":
        case "MINIMAL_TIMELINE":
        case "PYRAMID":
        case "STAIRCASE":
        case "CIRCLE":
            return false;
        default:
            return true;
    }
};
const getCellColorAttr = (type)=>[
        "SOLID_BOXES",
        "SOLID_BOXES_ALTERNATING",
        "SOLID_JOINED_BOXES"
    ].includes(type) ? "backgroundColor" : "accentColor";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/resolve-theme-smart-block.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveThemeSmartBlock",
    ()=>resolveThemeSmartBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$styles$2f$themeStrategy$2f$generators$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-styles/themeStrategy/generators/palette.js [app-client] (ecmascript)");
;
const resolveThemeSmartBlock = (theme)=>theme.customStyles?.smartBlock ?? (theme.colorPalette ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$styles$2f$themeStrategy$2f$generators$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapColorPaletteToCustomStyles"])(theme.colorPalette).smartBlock : void 0);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/cell-position.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCellMidAngleDeg",
    ()=>getCellMidAngleDeg,
    "getCellPositionDataAttrs",
    ()=>getCellPositionDataAttrs,
    "getCircleCellStyle",
    ()=>getCircleCellStyle,
    "getColumnsPerRow",
    ()=>getColumnsPerRow,
    "getResponsiveColumnsPerRow",
    ()=>getResponsiveColumnsPerRow,
    "hasBottomCenterCell",
    ()=>hasBottomCenterCell
]);
const COLUMN_SIZE_TO_COLS = {
    SMALL: 4,
    MEDIUM: 3,
    LARGE: 2,
    EXTRA_LARGE: 1
};
const RESPONSIVE_COLS = {
    SMALL: 2,
    MEDIUM: 2,
    LARGE: 1,
    EXTRA_LARGE: 1
};
const getColumnsPerRow = (columnSize)=>COLUMN_SIZE_TO_COLS[columnSize] ?? 3;
const getResponsiveColumnsPerRow = (columnSize)=>RESPONSIVE_COLS[columnSize] ?? 2;
const getCellPositionDataAttrs = (cellIndex, totalCells, columnSize)=>{
    const lrp = calculateLastRowPosition(cellIndex, totalCells, getColumnsPerRow(columnSize), getResponsiveColumnsPerRow(columnSize));
    return {
        "data-cell-index": cellIndex,
        "data-cells-total": totalCells,
        "data-last-row": lrp.isInLastRow || void 0,
        "data-last-row-cells": lrp.isInLastRow ? lrp.cellsInLastRow : void 0,
        "data-last-row-2col": lrp.isInLastRow2Col || void 0,
        "data-last-row-cells-2col": lrp.isInLastRow2Col ? lrp.cellsInLastRow2Col : void 0
    };
};
const calculateLastRowPosition = (cellIndex, totalCells, columnsPerRow, responsiveColumnsPerRow)=>{
    const cellsInLastRow = totalCells % columnsPerRow || columnsPerRow;
    const lastRowStart = totalCells - cellsInLastRow;
    const cellsInLastRow2 = totalCells % responsiveColumnsPerRow || responsiveColumnsPerRow;
    const lastRowStart2 = totalCells - cellsInLastRow2;
    return {
        isInLastRow: cellIndex >= lastRowStart,
        cellsInLastRow,
        isInLastRow2Col: cellIndex >= lastRowStart2,
        cellsInLastRow2Col: cellsInLastRow2
    };
};
const getCellMidAngleDeg = (cellIndex, totalCells)=>{
    if (totalCells <= 1) {
        return -90;
    }
    return -180 / totalCells + cellIndex * (360 / totalCells);
};
const isBottomCenterCell = (cellIndex, totalCells)=>{
    if (totalCells <= 1) {
        return false;
    }
    return Math.abs(getCellMidAngleDeg(cellIndex, totalCells) - 180) < 1e-6;
};
const hasBottomCenterCell = (totalCells)=>totalCells >= 3 && totalCells % 2 === 1;
const getCircleCellStyle = (cellIndex, totalCells)=>{
    if (isBottomCenterCell(cellIndex, totalCells)) {
        const row2 = (totalCells + 1) / 2;
        return {
            style: {
                "--ricos-internal-sb-row": `${row2}`
            },
            side: "bottom",
            row: row2
        };
    }
    const midAngleDeg = getCellMidAngleDeg(cellIndex, totalCells);
    const side = Math.sin(midAngleDeg * Math.PI / 180) >= 0 ? "right" : "left";
    const row = side === "right" ? cellIndex : (totalCells - cellIndex) % totalCells + 1;
    return {
        style: {
            "--ricos-internal-sb-row": `${row}`
        },
        side,
        row
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/resolve-smart-block-css-color.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveSmartBlockCssColor",
    ()=>resolveSmartBlockCssColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/theme-color-token.js [app-client] (ecmascript)");
;
const resolveSmartBlockCssColor = (color)=>color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDocumentColorToCss"])(color) ?? color : void 0;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/compute-cell-css-vars.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeSmartBlockCellVars",
    ()=>computeSmartBlockCellVars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$utils$2f$resolve$2d$smart$2d$block$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/resolve-smart-block-css-color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$utils$2f$variant$2d$features$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/variant-features.js [app-client] (ecmascript)");
;
;
;
const computeSmartBlockCellVars = (cellAttrs, themeSmartBlock, type, cellIndex, orientation = "HORIZONTAL")=>{
    const colorAttr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$utils$2f$variant$2d$features$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellColorAttr"])(type);
    const backgroundColor = colorAttr === "backgroundColor" ? cellAttrs.backgroundColor ?? themeSmartBlock?.backgroundColor : cellAttrs.backgroundColor;
    const accentColor = colorAttr === "accentColor" ? cellAttrs.accentColor ?? themeSmartBlock?.accentColor : cellAttrs.accentColor;
    const borderColor = cellAttrs.borderColor ?? themeSmartBlock?.borderColor;
    const { borderWidth, borderRadius } = cellAttrs;
    const vars = {};
    if (backgroundColor && backgroundColor !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPARENT_HEX_COLOR"]) {
        const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$utils$2f$resolve$2d$smart$2d$block$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSmartBlockCssColor"])(backgroundColor);
        if (resolved) {
            vars["--ricos-internal-sb-bg"] = resolved;
        }
    }
    if (accentColor) {
        if (accentColor === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPARENT_HEX_COLOR"]) {
            vars["--ricos-internal-sb-accent"] = "transparent";
        } else {
            const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$utils$2f$resolve$2d$smart$2d$block$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSmartBlockCssColor"])(accentColor);
            if (resolved) {
                vars["--ricos-internal-sb-accent"] = resolved;
                vars["--ricos-internal-sb-accent-opaque"] = resolved;
            }
        }
    }
    if (borderColor) {
        if (borderColor === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPARENT_HEX_COLOR"]) {
            vars["--ricos-internal-sb-border-color"] = "transparent";
        } else {
            const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$utils$2f$resolve$2d$smart$2d$block$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSmartBlockCssColor"])(borderColor);
            if (resolved) {
                vars["--ricos-internal-sb-border-color"] = resolved;
            }
        }
    }
    if (borderWidth && borderWidth > 0) {
        vars["--ricos-internal-sb-border-width"] = `${borderWidth}px`;
    }
    if (borderRadius && borderRadius > 0) {
        vars["--ricos-internal-sb-border-radius"] = `${borderRadius}px`;
    }
    const gridPlacement = type === "SOLID_BOXES_ALTERNATING" ? getCheckerboardGridStyle(cellIndex, orientation) : type === "TIMELINE" || type === "MINIMAL_TIMELINE" ? getTimelineGridStyle(cellIndex, orientation) : // PYRAMID and VERTICAL_FUNNEL drive their clip-path and centroid
    // math from `--ricos-internal-sb-cell-index`; the formulas differ
    // per-variant in SCSS but both need the same per-cell index.
    type === "PYRAMID" || type === "VERTICAL_FUNNEL" ? {
        "--ricos-internal-sb-cell-index": `${cellIndex}`
    } : void 0;
    if (type === "STAIRCASE") {
        vars["--ricos-internal-sb-cell-index"] = `${cellIndex}`;
    }
    return {
        ...vars,
        ...gridPlacement
    };
};
const getCheckerboardGridStyle = (cellIndex, orientation = "HORIZONTAL")=>{
    if (orientation === "VERTICAL") {
        const row = cellIndex + 1;
        const col = cellIndex % 2 === 0 ? 1 : 2;
        return {
            "--ricos-internal-sb-grid-col": `${col}`,
            "--ricos-internal-sb-grid-row": `${row}`
        };
    }
    return {
        "--ricos-internal-sb-grid-col": `${cellIndex + 1}`,
        "--ricos-internal-sb-grid-row": `${cellIndex % 2 === 0 ? 1 : 2}`
    };
};
const getTimelineGridStyle = (cellIndex, orientation = "HORIZONTAL")=>{
    if (orientation === "VERTICAL") {
        return {
            "--ricos-internal-sb-grid-col": cellIndex % 2 === 0 ? "1" : "2",
            "--ricos-internal-sb-grid-row": `${cellIndex + 1}`
        };
    }
    return {
        "--ricos-internal-sb-grid-col": `${2 * cellIndex + 1}`,
        "--ricos-internal-sb-grid-row": `${cellIndex % 2 === 0 ? 1 : 2}`
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/resolve-shape-src.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveShapeSrc",
    ()=>resolveShapeSrc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/consts.js [app-client] (ecmascript)");
;
const resolveShapeSrc = (image)=>{
    const src = image?.src;
    if (typeof src === "string") {
        return {
            url: src
        };
    }
    return src ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SHAPE_SRC"];
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/smart-block-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShapeOverlayContext",
    ()=>ShapeOverlayContext,
    "SmartBlockCellEditorContext",
    ()=>SmartBlockCellEditorContext,
    "SmartBlockEditorContext",
    ()=>SmartBlockEditorContext,
    "useShapeOverlay",
    ()=>useShapeOverlay,
    "useSmartBlockCellEditorContext",
    ()=>useSmartBlockCellEditorContext,
    "useSmartBlockEditorContext",
    ()=>useSmartBlockEditorContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const SmartBlockCellEditorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useSmartBlockCellEditorContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SmartBlockCellEditorContext);
const SmartBlockEditorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useSmartBlockEditorContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SmartBlockEditorContext);
const ShapeOverlayContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useShapeOverlay = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ShapeOverlayContext);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/cell-numeric-value.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCellNumericValue",
    ()=>getCellNumericValue
]);
const NUMERIC_VALUE_PATTERN = /-?\d+(?:\.\d+)?/;
const DEFAULT_MAX = 100;
const getCellNumericValue = (label, options)=>{
    const rawLabel = label ?? "";
    const match = rawLabel.match(NUMERIC_VALUE_PATTERN);
    if (!match) {
        return {
            rawLabel,
            parsedValue: null,
            clampedValue: 0,
            hasParsedValue: false
        };
    }
    const parsedValue = Number(match[0]);
    if (!Number.isFinite(parsedValue) || parsedValue < 0) {
        return {
            rawLabel,
            parsedValue: null,
            clampedValue: 0,
            hasParsedValue: false
        };
    }
    return {
        rawLabel,
        parsedValue,
        clampedValue: Math.min(parsedValue, options?.max ?? DEFAULT_MAX),
        hasParsedValue: true
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/cell-view-model.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pmCellToViewModel",
    ()=>pmCellToViewModel,
    "ricosCellToViewModel",
    ()=>ricosCellToViewModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/next-schema/generated/ricos_document.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/pm-node-types.js [app-client] (ecmascript)");
;
;
;
const nullToUndef = (value)=>value === null || value === void 0 ? void 0 : value;
const pmCellToViewModel = (pmNode, parent)=>{
    const attrs = pmNode.attrs;
    const { type } = parent;
    return {
        type,
        cellIndex: parent.cellIndex,
        totalCells: parent.totalCells,
        columnSize: parent.columnSize,
        orientation: parent.orientation,
        isShapesMode: parent.isShapesMode,
        cellId: attrs.id,
        cellColors: {
            accentColor: nullToUndef(attrs.accentColor),
            backgroundColor: nullToUndef(attrs.backgroundColor),
            borderColor: nullToUndef(attrs.borderColor),
            borderWidth: nullToUndef(attrs.borderWidth),
            borderRadius: nullToUndef(attrs.borderRadius)
        },
        shape: nullToUndef(attrs.shape),
        shapeColor: nullToUndef(attrs.shapeColor),
        label: attrs.label ?? null,
        contentStyle: getPmCellContentStyle(pmNode, type)
    };
};
const getPmCellContentStyle = (pmNode, type)=>{
    if (type !== "SMALL_BULLETS") {
        return {};
    }
    const firstBlock = pmNode.firstChild;
    if (!firstBlock) {
        return {};
    }
    const headingLevel = firstBlock.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].HEADING ? firstBlock.attrs.level : void 0;
    const fontSize = firstBlock.firstChild?.marks.find((m)=>m.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration_Type"].FONT_SIZE)?.attrs.value;
    return {
        fontSize,
        headingLevel
    };
};
const ricosCellToViewModel = (cellNode, parent)=>{
    const cellData = cellNode.smartBlockCellData;
    const { type } = parent;
    const label = cellData && "label" in cellData ? cellData.label ?? null : null;
    return {
        type,
        cellIndex: parent.cellIndex,
        totalCells: parent.totalCells,
        columnSize: parent.columnSize,
        orientation: parent.orientation,
        isShapesMode: parent.isShapesMode,
        cellId: cellNode.id,
        cellColors: {
            accentColor: cellData && "accentColor" in cellData ? cellData.accentColor : void 0,
            backgroundColor: cellData && "backgroundColor" in cellData ? cellData.backgroundColor : void 0,
            borderColor: cellData && "borderColor" in cellData ? cellData.borderColor : void 0,
            borderWidth: cellData && "borderWidth" in cellData ? cellData.borderWidth : void 0,
            borderRadius: cellData && "borderRadius" in cellData ? cellData.borderRadius : void 0
        },
        shape: cellData && "shape" in cellData ? cellData.shape : void 0,
        shapeColor: cellData && "shapeColor" in cellData ? cellData.shapeColor : void 0,
        label,
        contentStyle: getRicosCellContentStyle(cellNode, type)
    };
};
const getRicosCellContentStyle = (cellNode, type)=>{
    if (type !== "SMALL_BULLETS") {
        return {};
    }
    const firstChild = cellNode.nodes?.[0];
    if (!firstChild) {
        return {};
    }
    const headingLevel = firstChild.type === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING ? firstChild.headingData?.level ?? void 0 : void 0;
    const firstInline = firstChild.nodes?.[0];
    const fontSize = firstInline && "textData" in firstInline ? firstInline.textData?.decorations?.find((d)=>d.type === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration_Type"].FONT_SIZE)?.fontSizeData?.value : void 0;
    return {
        fontSize,
        headingLevel
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/get-joined-boxes-responsive-corner-flags.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getJoinedBoxesResponsiveCornerFlags",
    ()=>getJoinedBoxesResponsiveCornerFlags
]);
const getJoinedBoxesResponsiveCornerFlags = ({ cellIndex, totalCells, columnsPerRow, responsiveColumnsPerRow })=>{
    const base = getJoinedBoxesCellCornerFlags({
        cellIndex,
        totalCells,
        columnsPerRow
    });
    const mid = getJoinedBoxesCellCornerFlags({
        cellIndex,
        totalCells,
        columnsPerRow: responsiveColumnsPerRow
    });
    const sm = getJoinedBoxesCellCornerFlags({
        cellIndex,
        totalCells,
        columnsPerRow: 1
    });
    return {
        ...base,
        "data-corner-mid-tl": mid["data-corner-tl"],
        "data-corner-mid-tr": mid["data-corner-tr"],
        "data-corner-mid-bl": mid["data-corner-bl"],
        "data-corner-mid-br": mid["data-corner-br"],
        "data-corner-sm-tl": sm["data-corner-tl"],
        "data-corner-sm-tr": sm["data-corner-tr"],
        "data-corner-sm-bl": sm["data-corner-bl"],
        "data-corner-sm-br": sm["data-corner-br"]
    };
};
const getJoinedBoxesCellCornerFlags = ({ cellIndex, totalCells, columnsPerRow })=>{
    const topRight = Math.min(columnsPerRow - 1, totalCells - 1);
    const lastRowStart = Math.floor((totalCells - 1) / columnsPerRow) * columnsPerRow;
    return {
        "data-corner-tl": cellIndex === 0 || void 0,
        "data-corner-tr": cellIndex === topRight || void 0,
        "data-corner-bl": cellIndex === lastRowStart || void 0,
        "data-corner-br": cellIndex === totalCells - 1 || void 0
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/compute-block-css-vars.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeSmartBlockWrapperVars",
    ()=>computeSmartBlockWrapperVars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$utils$2f$resolve$2d$smart$2d$block$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/resolve-smart-block-css-color.js [app-client] (ecmascript)");
;
;
const computeSmartBlockWrapperVars = (blockAttrs, themeSmartBlock, type, cellCount)=>{
    const isJoinedBoxes = type === "SOLID_JOINED_BOXES";
    const borderColor = isJoinedBoxes ? blockAttrs.borderColor ?? themeSmartBlock?.borderColor : themeSmartBlock?.borderColor;
    const borderWidth = isJoinedBoxes ? blockAttrs.borderWidth : void 0;
    const borderRadius = isJoinedBoxes ? blockAttrs.borderRadius : void 0;
    const vars = {
        "--ricos-internal-sb-cols": cellCount
    };
    if (borderColor) {
        if (borderColor === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPARENT_HEX_COLOR"]) {
            vars["--ricos-internal-sb-block-border-color"] = "transparent";
        } else {
            const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$utils$2f$resolve$2d$smart$2d$block$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSmartBlockCssColor"])(borderColor);
            if (resolved) {
                vars["--ricos-internal-sb-block-border-color"] = resolved;
            }
        }
    }
    if (borderWidth && borderWidth > 0) {
        vars["--ricos-internal-sb-block-border-width"] = `${borderWidth}px`;
    }
    if (borderRadius && borderRadius > 0) {
        vars["--ricos-internal-sb-block-border-radius"] = `${borderRadius}px`;
    }
    return vars;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/block-view-model.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jtdBlockToViewModel",
    ()=>jtdBlockToViewModel,
    "pmBlockToViewModel",
    ()=>pmBlockToViewModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/next-schema/generated/ricos_document.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/pm-node-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/consts.js [app-client] (ecmascript)");
;
;
;
const nullToUndef = (value)=>value === null || value === void 0 ? void 0 : value;
const hasCellRenderData = (type)=>type === "CIRCLE" || type === "STAIRCASE" || type === "PYRAMID" || type === "VERTICAL_FUNNEL";
const pmCells = (pmNode)=>{
    const cells = [];
    pmNode.forEach((child)=>{
        if (child.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].SMART_BLOCK_CELL) {
            const attrs = child.attrs;
            cells.push({
                cellId: nullToUndef(attrs.id),
                accentColor: nullToUndef(attrs.accentColor),
                shape: attrs.shape,
                shapeColor: nullToUndef(attrs.shapeColor)
            });
        }
    });
    return cells;
};
const jtdCells = (node)=>(node.nodes ?? []).filter((n)=>n.type === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK_CELL).map((cell)=>{
        const data = cell.smartBlockCellData;
        return {
            cellId: cell.id,
            accentColor: data && "accentColor" in data ? data.accentColor : void 0,
            shape: data && "shape" in data ? data.shape : void 0,
            shapeColor: data && "shapeColor" in data ? data.shapeColor : void 0
        };
    });
const pmBlockToViewModel = (pmNode)=>{
    const attrs = pmNode.attrs;
    const type = attrs.type ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_DEFAULTS"].type;
    return {
        type,
        columnSize: attrs.columnSize ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_DEFAULTS"].columnSize,
        orientation: nullToUndef(attrs.orientation),
        totalCells: pmNode.childCount,
        blockBorder: {
            borderColor: nullToUndef(attrs.borderColor),
            borderWidth: nullToUndef(attrs.borderWidth),
            borderRadius: nullToUndef(attrs.borderRadius)
        },
        cells: hasCellRenderData(type) ? pmCells(pmNode) : void 0
    };
};
const jtdBlockToViewModel = (node)=>{
    const data = node.smartBlockData;
    const type = data?.type ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_DEFAULTS"].type;
    return {
        type,
        columnSize: data && "columnSize" in data ? data.columnSize ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_DEFAULTS"].columnSize : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_DEFAULTS"].columnSize,
        orientation: data && "orientation" in data ? data.orientation : void 0,
        totalCells: node.nodes?.length ?? 0,
        blockBorder: {
            borderColor: data && "borderColor" in data ? data.borderColor : void 0,
            borderWidth: data && "borderWidth" in data ? data.borderWidth : void 0,
            borderRadius: data && "borderRadius" in data ? data.borderRadius : void 0
        },
        cells: hasCellRenderData(type) ? jtdCells(node) : void 0
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/get-add-buttons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAddButtons",
    ()=>getAddButtons,
    "smartBlockAddToolbars",
    ()=>smartBlockAddToolbars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$LayoutTwoColumns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTwoColumns$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/LayoutTwoColumns.js [app-client] (ecmascript) <export default as LayoutTwoColumns>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/toolbar-enums.js [app-client] (ecmascript) <export ToolbarType as TOOLBARS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$variant$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/modals/variant-picker.js [app-client] (ecmascript)");
;
;
;
;
;
const smartBlockAddToolbars = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__["TOOLBARS"].MOBILE,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__["TOOLBARS"].FOOTER,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__["TOOLBARS"].SIDE
];
const getAddButtons = (_config, services)=>{
    const { modals, context: { isMobile } } = services;
    return [
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK,
            label: "SmartBlock_InsertButton_Label",
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].INSERT_BUTTON,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$LayoutTwoColumns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTwoColumns$3e$__["LayoutTwoColumns"],
            tooltip: "SmartBlock_InsertButton_Tooltip",
            toolbars: smartBlockAddToolbars,
            command: ({ referenceElement })=>{
                modals.togglePluginPanel({
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$variant$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_VARIANT_PICKER_MODAL_ID"],
                    Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$variant$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VariantPicker"],
                    componentProps: {},
                    isMobile,
                    positioning: {
                        referenceElement,
                        placement: "bottom"
                    }
                });
                return true;
            },
            menuConfig: {
                tags: "SmartBlock_plugin_search_tags"
            }
        }
    ];
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/get-quick-actions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getQuickActions",
    ()=>getQuickActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$LayoutTwoColumns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTwoColumns$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/LayoutTwoColumns.js [app-client] (ecmascript) <export default as LayoutTwoColumns>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$plugin$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/plugin-types.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/pos-to-dom-rect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$variant$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/modals/variant-picker.js [app-client] (ecmascript)");
;
;
;
;
const getQuickActions = (_config, pluginServices)=>[
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK,
            title: "SmartBlock_InsertButton_Label",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$LayoutTwoColumns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTwoColumns$3e$__["LayoutTwoColumns"],
            section: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$plugin$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["quickActionsModalSections"].FormatLayout,
            tags: [
                "layout",
                "grid",
                "boxes",
                "cards",
                "columns",
                "features"
            ],
            command: ({ modalService, editor, referenceElement })=>{
                modalService.togglePluginPanel({
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$variant$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_VARIANT_PICKER_MODAL_ID"],
                    Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$variant$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VariantPicker"],
                    componentProps: {},
                    isMobile: pluginServices.context.isMobile,
                    positioning: {
                        referenceElement: referenceElement ?? {
                            getBoundingClientRect: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posToDOMRect"])(editor.view, editor.view.state.selection.from, editor.view.state.selection.to)
                        },
                        placement: "bottom-start"
                    }
                });
            }
        }
    ];
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/get-toolbar-buttons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SMART_BLOCK_CELL_SHAPE_COLOR_PICKER_MODAL_ID",
    ()=>SMART_BLOCK_CELL_SHAPE_COLOR_PICKER_MODAL_ID,
    "SMART_BLOCK_COLOR_PICKER_MODAL_ID",
    ()=>SMART_BLOCK_COLOR_PICKER_MODAL_ID,
    "getToolbarButtons",
    ()=>getToolbarButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$BorderWidth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BorderWidth$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/BorderWidth.js [app-client] (ecmascript) <export default as BorderWidth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ChevronLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ChevronLeft.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ColorBucket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBucket$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ColorBucket.js [app-client] (ecmascript) <export default as ColorBucket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Duplicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Duplicate$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Duplicate.js [app-client] (ecmascript) <export default as Duplicate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Objects$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Objects.js [app-client] (ecmascript) <export default as Objects>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Replace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Replace.js [app-client] (ecmascript) <export default as Replace>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$animation$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-animation-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$color$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-color-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$delete$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-delete-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$create$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/separator/create-separator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/pm-node-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-in-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$ricos$2d$toolbars$2f$plugin$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/toolbars-v3/ricos-toolbars/plugin/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$components$2f$smart$2d$block$2d$shape$2d$picker$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/components/smart-block-shape-picker-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$border$2d$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/modals/border-settings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$color$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/modals/color-picker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$variant$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/modals/variant-picker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$add$2d$icon$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/buttons/add-icon-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$border$2d$settings$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/buttons/border-settings-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$duplicate$2d$cell$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/buttons/duplicate-cell-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$replace$2d$shape$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/buttons/replace-shape-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$select$2d$block$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/buttons/select-block-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$color$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/buttons/color-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$shape$2d$color$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/buttons/shape-color-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$variant$2d$switcher$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/buttons/variant-switcher-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$create$2d$add$2d$cell$2d$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/create-add-cell-dropdown-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$create$2d$column$2d$size$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/create-column-size-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$create$2d$numbered$2d$mode$2d$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/create-numbered-mode-dropdown-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$create$2d$orientation$2d$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/create-orientation-dropdown-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$create$2d$text$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/create-text-alignment-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/resolvers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$shape$2d$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/shape-colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$utils$2f$variant$2d$features$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/utils/variant-features.js [app-client] (ecmascript)");
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
const SMART_BLOCK_COLOR_PICKER_MODAL_ID = "smart-block-color-picker-modal";
const SMART_BLOCK_CELL_SHAPE_COLOR_PICKER_MODAL_ID = "smart-block-cell-shape-color-picker-modal";
const getToolbarButtons = (_config, services)=>{
    const { modals } = services;
    const variantSwitcher = {
        id: "smartBlockVariant",
        type: "modal",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Replace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__["Replace"],
        label: "SmartBlock_Toolbar_SwitchLayout_Label",
        tooltip: "SmartBlock_Toolbar_SwitchLayout_Tooltip",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].VARIANT_BUTTON_DATA_HOOK,
        attributes: {
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmartBlockNode"],
            visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLayoutSelected"],
            active: ()=>Boolean(modals.getModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$variant$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_VARIANT_PICKER_MODAL_ID"]))
        },
        command: ({ referenceElement, attributes, tiptapEditor })=>{
            const selectedNode = attributes.selectedNode;
            if (!selectedNode) {
                return;
            }
            modals.togglePluginPanel({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$variant$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_VARIANT_PICKER_MODAL_ID"],
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$variant$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VariantPicker"],
                componentProps: {
                    currentType: selectedNode.attrs.type,
                    nodeId: selectedNode.attrs.id,
                    onSelect: (variant, isPreview)=>tiptapEditor.commands.switchSmartBlockVariant(variant, {
                            isPreview
                        })
                },
                isMobile: services.context.isMobile,
                positioning: {
                    referenceElement: referenceElement?.closest(`[data-hook~=${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$ricos$2d$toolbars$2f$plugin$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOATING_PLUGIN_TOOLBAR"]}]`) ?? referenceElement,
                    placement: "right-start"
                }
            });
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$variant$2d$switcher$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VariantSwitcherButton"], {
                toolbarItem
            })
    };
    const columnSizeDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$create$2d$column$2d$size$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createColumnSizeButton"])({
        services
    });
    const addCellDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$create$2d$add$2d$cell$2d$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAddCellDropdownButton"])({
        services
    });
    const textAlignmentButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$create$2d$text$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextAlignmentButton"])({
        services
    });
    const orientationDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$create$2d$orientation$2d$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOrientationDropdownButton"])({
        services
    });
    const numberedModeDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$create$2d$numbered$2d$mode$2d$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNumberedModeDropdownButton"])({
        services
    });
    const colorButton = {
        id: "smartBlockColor",
        type: "modal",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ColorBucket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBucket$3e$__["ColorBucket"],
        tooltip: "SmartBlock_Toolbar_Color_Tooltip",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].COLOR_BUTTON,
        attributes: {
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectedSmartNode"],
            visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCellOrLayoutSelected"],
            active: ()=>Boolean(modals.getModal(SMART_BLOCK_COLOR_PICKER_MODAL_ID)),
            variant: (_, __, editor)=>{
                if (!editor?.state) {
                    return void 0;
                }
                const sel = editor.state.selection;
                if (sel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"] && sel.node?.type?.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].SMART_BLOCK_CELL) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentVariant"])(editor);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmartBlockNode"])(_, __, editor)?.attrs?.type;
            },
            colors: (_, __, editor)=>{
                if (!editor?.state) {
                    return [];
                }
                const sel = editor.state.selection;
                if (sel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"] && sel.node?.type?.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].SMART_BLOCK_CELL) {
                    const variant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentVariant"])(editor);
                    if (!variant) {
                        return [];
                    }
                    const c = sel.node.attrs[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$utils$2f$variant$2d$features$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellColorAttr"])(variant)];
                    return c ? [
                        c
                    ] : [];
                }
                const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmartBlockNode"])(_, __, editor);
                if (!node) {
                    return [];
                }
                const colorAttr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$utils$2f$variant$2d$features$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellColorAttr"])(node.attrs.type);
                const colors = /* @__PURE__ */ new Set();
                node.forEach((child)=>{
                    const c = child.attrs[colorAttr];
                    if (c) {
                        colors.add(c);
                    }
                });
                return [
                    ...colors
                ];
            }
        },
        command: ({ referenceElement, attributes, tiptapEditor })=>{
            const selectedNode = attributes.selectedNode;
            if (!selectedNode) {
                return;
            }
            const variant = selectedNode.attrs.type;
            if (!variant) {
                return;
            }
            const colorAttr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$utils$2f$variant$2d$features$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellColorAttr"])(variant);
            const isCellSelected2 = tiptapEditor.state.selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"] && tiptapEditor.state.selection.node?.type?.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].SMART_BLOCK_CELL;
            const toolbarReferenceElement = referenceElement?.closest(`[data-hook~=${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$ricos$2d$toolbars$2f$plugin$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOATING_PLUGIN_TOOLBAR"]}]`) ?? referenceElement;
            const cellNodeId = isCellSelected2 ? selectedNode.attrs.id : selectedNode.firstChild?.attrs?.id ?? selectedNode.attrs.id;
            clearPreviewOnModalClose(modals, tiptapEditor, SMART_BLOCK_COLOR_PICKER_MODAL_ID);
            modals.togglePluginPanel({
                id: SMART_BLOCK_COLOR_PICKER_MODAL_ID,
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$color$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorPicker"],
                componentProps: {
                    modalId: SMART_BLOCK_COLOR_PICKER_MODAL_ID,
                    nodeId: cellNodeId,
                    colorAttr,
                    variant,
                    referenceElement,
                    // Preview during drag (no doc change → no undo entries); commit once on release.
                    onColorPreview: (color)=>{
                        tiptapEditor.commands.setSmartBlockColorPreview({
                            attr: colorAttr,
                            color
                        });
                    },
                    onColorPreviewEnd: ()=>{
                        tiptapEditor.commands.clearSmartBlockColorPreview();
                    },
                    onColorSelected: (color)=>{
                        tiptapEditor.commands.clearSmartBlockColorPreview();
                        if (isCellSelected2) {
                            tiptapEditor.chain().focus(void 0, {
                                scrollIntoView: false
                            }).command(({ tr })=>{
                                const pos = tiptapEditor.state.selection.from;
                                tr.setNodeAttribute(pos, colorAttr, color ?? null);
                                return true;
                            }).run();
                            return;
                        }
                        tiptapEditor.commands.applyDesignToAllCells({
                            color
                        });
                    }
                },
                isMobile: services.context.isMobile,
                positioning: {
                    referenceElement: toolbarReferenceElement,
                    placement: "bottom"
                }
            });
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$color$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartBlockColorButton"], {
                toolbarItem
            })
    };
    const borderButton = {
        id: "smartBlockBorder",
        type: "modal",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$BorderWidth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BorderWidth$3e$__["BorderWidth"],
        tooltip: "SmartBlock_Toolbar_Borders_Tooltip",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].DESIGN_BUTTON,
        attributes: {
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectedSmartNode"],
            visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBorderSupported"],
            active: ()=>Boolean(modals.getModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$border$2d$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_BORDER_SETTINGS_MODAL_ID"]))
        },
        command: ({ referenceElement, attributes, tiptapEditor })=>{
            const sel = tiptapEditor.state.selection;
            const toolbar = referenceElement?.closest(`[data-hook~=${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$ricos$2d$toolbars$2f$plugin$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOATING_PLUGIN_TOOLBAR"]}]`) ?? referenceElement;
            const selectedNode = attributes.selectedNode;
            if (!selectedNode) {
                return;
            }
            modals.togglePluginPanel({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$border$2d$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_BORDER_SETTINGS_MODAL_ID"],
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$border$2d$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BorderSettings"],
                componentProps: {
                    nodeId: sel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"] && sel.node?.type?.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].SMART_BLOCK_CELL ? selectedNode.attrs.id : void 0
                },
                isMobile: services.context.isMobile,
                positioning: {
                    referenceElement: toolbar,
                    placement: "bottom"
                },
                onClickOutside: {
                    on: "pointerup",
                    handler: (e)=>{
                        if (modals.isModalOpen(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$border$2d$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_BORDER_COLOR_PICKER_MODAL_ID"])) {
                            return;
                        }
                        if (!referenceElement?.contains?.(e.target)) {
                            modals.closeModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$border$2d$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_BORDER_SETTINGS_MODAL_ID"]);
                        }
                    }
                }
            });
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$border$2d$settings$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BorderSettingsButton"], {
                toolbarItem
            })
    };
    const blockSeparator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$create$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeparator"])();
    const deleteSeparator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$create$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeparator"])();
    const animation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$animation$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnimationButton"])(services, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmartBlockForAnimation"]);
    const deleteButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$delete$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDeleteButton"])({
        attributes: {
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectedSmartNode"],
            visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCellOrLayoutSelected"]
        },
        command: ({ tiptapEditor, attributes })=>{
            const sel = tiptapEditor.state.selection;
            if (sel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"] && sel.node?.type?.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].SMART_BLOCK_CELL) {
                const cellId = attributes.selectedNode?.attrs?.id;
                if (cellId) {
                    tiptapEditor.commands.removeSmartBlockCell(cellId);
                }
            } else {
                tiptapEditor.chain().focus().deleteNode(attributes.selectedNode?.attrs?.id).run();
            }
        }
    });
    const addIconButton = {
        id: "smartBlockCellAddIcon",
        type: "modal",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Objects$3e$__["Objects"],
        tooltip: "SmartBlock_CellAddShape_Label",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].CELL_ADD_ICON_BUTTON,
        attributes: {
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeInSelection"],
            visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCellInLabelVariantWithoutImage"],
            active: ()=>Boolean(modals.getModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].CELL_SHAPE_PICKER))
        },
        command: ({ referenceElement, attributes })=>{
            const cellId = attributes.selectedNode?.attrs?.id;
            if (!cellId) {
                return;
            }
            modals.togglePluginPanel({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].CELL_SHAPE_PICKER,
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$components$2f$smart$2d$block$2d$shape$2d$picker$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartBlockShapePickerModal"],
                componentProps: {
                    cellId
                },
                isMobile: services.context.isMobile,
                positioning: {
                    referenceElement: referenceElement?.closest(`[data-hook~=${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$ricos$2d$toolbars$2f$plugin$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOATING_PLUGIN_TOOLBAR"]}]`) ?? referenceElement,
                    placement: "right-start"
                }
            });
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$add$2d$icon$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddIconButton"], {
                toolbarItem
            })
    };
    const replaceShapeButton = {
        id: "smartBlockCellReplaceShape",
        type: "toggle",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Replace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Replace$3e$__["Replace"],
        tooltip: "SmartBlock_CellReplaceShape_Label",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].CELL_REPLACE_SHAPE_BUTTON,
        attributes: {
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeInSelection"],
            visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCellInLabelVariantWithImage"],
            active: ()=>Boolean(modals.getModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].CELL_SHAPE_PICKER))
        },
        command: ({ referenceElement, attributes })=>{
            const cellId = attributes.selectedNode?.attrs?.id;
            if (!cellId) {
                return;
            }
            modals.togglePluginPanel({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].CELL_SHAPE_PICKER,
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$components$2f$smart$2d$block$2d$shape$2d$picker$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartBlockShapePickerModal"],
                componentProps: {
                    cellId
                },
                isMobile: services.context.isMobile,
                positioning: {
                    referenceElement: referenceElement?.closest(`[data-hook~=${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$ricos$2d$toolbars$2f$plugin$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOATING_PLUGIN_TOOLBAR"]}]`) ?? referenceElement,
                    placement: "right-start"
                }
            });
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$replace$2d$shape$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceShapeButton"], {
                toolbarItem
            })
    };
    const shapeColorButton = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$color$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createColorButton"])({
            getColors: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$shape$2d$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShapeColors"],
            tooltip: "SmartBlock_ShapeColor_Label",
            modalId: SMART_BLOCK_CELL_SHAPE_COLOR_PICKER_MODAL_ID,
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].CELL_SHAPE_COLOR_BUTTON,
            command: ({ referenceElement, attributes: { selectedNode }, tiptapEditor })=>{
                if (!selectedNode) {
                    return;
                }
                const variant = selectedNode.attrs.type;
                if (!variant) {
                    return;
                }
                const isCellSelection = tiptapEditor.state.selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"] && tiptapEditor.state.selection.node?.type?.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].SMART_BLOCK_CELL;
                const toolbarReferenceElement = referenceElement?.closest(`[data-hook~=${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$ricos$2d$toolbars$2f$plugin$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOATING_PLUGIN_TOOLBAR"]}]`) ?? referenceElement;
                const cellNodeId = isCellSelection ? selectedNode.attrs.id : selectedNode.firstChild?.attrs?.id ?? selectedNode.attrs.id;
                clearPreviewOnModalClose(modals, tiptapEditor, SMART_BLOCK_CELL_SHAPE_COLOR_PICKER_MODAL_ID);
                modals.togglePluginPanel({
                    id: SMART_BLOCK_CELL_SHAPE_COLOR_PICKER_MODAL_ID,
                    Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$modals$2f$color$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorPicker"],
                    componentProps: {
                        modalId: SMART_BLOCK_CELL_SHAPE_COLOR_PICKER_MODAL_ID,
                        nodeId: cellNodeId,
                        colorAttr: "shapeColor",
                        variant,
                        referenceElement,
                        // Preview during drag (no doc change → no undo entries); commit once on release.
                        onColorPreview: (color)=>{
                            tiptapEditor.commands.setSmartBlockColorPreview({
                                attr: "shapeColor",
                                color
                            });
                        },
                        onColorPreviewEnd: ()=>{
                            tiptapEditor.commands.clearSmartBlockColorPreview();
                        },
                        onColorSelected: (color)=>{
                            tiptapEditor.commands.clearSmartBlockColorPreview();
                            if (isCellSelection) {
                                tiptapEditor.chain().focus(void 0, {
                                    scrollIntoView: false
                                }).command(({ tr })=>{
                                    const pos = tiptapEditor.state.selection.from;
                                    tr.setNodeAttribute(pos, "shapeColor", color ?? null);
                                    return true;
                                }).run();
                                return;
                            }
                            tiptapEditor.commands.setShapeColorForAllCells(color ?? null);
                        }
                    },
                    isMobile: services.context.isMobile,
                    positioning: {
                        referenceElement: toolbarReferenceElement,
                        placement: "bottom"
                    }
                });
            }
        }),
        attributes: {
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectedSmartNode"],
            active: ()=>Boolean(modals.getModal(SMART_BLOCK_CELL_SHAPE_COLOR_PICKER_MODAL_ID)),
            visible: (_, __, editor)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCellInLabelVariantWithImage"])(_, __, editor) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLayoutInLabelVariantWithImage"])(_, __, editor)
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$shape$2d$color$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartBlockShapeColorButton"], {
                toolbarItem
            })
    };
    const duplicateButton = {
        id: "smartBlockCellDuplicate",
        type: "toggle",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Duplicate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Duplicate$3e$__["Duplicate"],
        tooltip: "SmartBlock_CellDuplicate_Tooltip",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].CELL_DUPLICATE_BUTTON,
        attributes: {
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeInSelection"],
            visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCellSelected"],
            canAddCell: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canAddCell"]
        },
        command: ({ tiptapEditor, attributes })=>{
            const cellId = attributes.selectedNode?.attrs?.id;
            if (cellId) {
                tiptapEditor.commands.duplicateSmartBlockCell(cellId);
            }
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$duplicate$2d$cell$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DuplicateCellButton"], {
                toolbarItem
            })
    };
    const selectBlockButton = {
        id: "smartBlockSelectBlock",
        type: "toggle",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ChevronLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"],
        tooltip: "SmartBlock_SelectBlock_Tooltip",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_HOOKS"].SELECT_BLOCK_BUTTON,
        attributes: {
            visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCellSelected"]
        },
        command: ({ tiptapEditor })=>{
            tiptapEditor.commands.selectSmartBlock();
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$buttons$2f$select$2d$block$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectBlockButton"], {
                toolbarItem
            })
    };
    return [
        selectBlockButton,
        // cell toolbar
        blockSeparator,
        addIconButton,
        // cell toolbar
        replaceShapeButton,
        // cell toolbar
        variantSwitcher,
        blockSeparator,
        columnSizeDropdown,
        textAlignmentButton,
        numberedModeDropdown,
        orientationDropdown,
        addCellDropdown,
        // cell toolbar
        duplicateButton,
        // cell toolbar
        deleteSeparator,
        colorButton,
        shapeColorButton,
        // cell toolbar
        borderButton,
        animation,
        deleteSeparator,
        deleteButton
    ];
};
const clearPreviewOnModalClose = (modals, tiptapEditor, modalId)=>{
    const sub = modals.onModalClosed((modal)=>{
        if (modal.id === modalId) {
            tiptapEditor.commands.clearSmartBlockColorPreview();
            sub.cancel();
        }
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/smart-block-cell-converter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "smartBlockCellConverter",
    ()=>smartBlockCellConverter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$pm$2d$converters$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/pm-converters/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/uncreachable.js [app-client] (ecmascript)");
;
;
;
const smartBlockCellConverter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$pm$2d$converters$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["definePmNodeConverter"])({
    toPm: {
        types: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK_CELL
        ],
        convert: (node, visit)=>{
            const data = node.smartBlockCellData;
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK_CELL,
                attrs: {
                    id: node.id,
                    type: data?.type ?? null,
                    label: data?.label ?? null,
                    shape: data?.shape ?? null,
                    shapeColor: data?.shapeColor ?? (Object.values(data?.shapeStyles?.colors ?? {}).find(Boolean) || null),
                    accentColor: data?.accentColor ?? null,
                    backgroundColor: data?.backgroundColor ?? null,
                    borderColor: data?.borderColor ?? null,
                    borderWidth: data?.borderWidth ?? null,
                    borderRadius: data?.borderRadius ?? null
                },
                content: visit?.(node)
            };
        }
    },
    fromPm: {
        types: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK_CELL
        ],
        // @ts-expect-error next node type
        convert: (node, visit)=>{
            const { attrs } = node;
            const { id, type } = attrs;
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK_CELL,
                id,
                nodes: visit(node),
                smartBlockCellData: type ? smartBlockCellDataPerVariant(type, attrs) : void 0
            };
        }
    }
});
const smartBlockCellDataPerVariant = (type, attrs)=>{
    const { backgroundColor, accentColor, label, shape, shapeColor, borderColor, borderWidth, borderRadius } = attrs;
    switch(type){
        case "SOLID_BOXES":
        case "SOLID_BOXES_ALTERNATING":
            return {
                type,
                backgroundColor: backgroundColor ?? void 0,
                borderColor: borderColor ?? void 0,
                borderWidth: borderWidth ?? void 0,
                borderRadius: borderRadius ?? void 0
            };
        case "SOLID_JOINED_BOXES":
            return {
                type,
                backgroundColor: backgroundColor ?? void 0
            };
        case "SIDE_LINE_TEXT":
        case "TOP_LINE_TEXT":
        case "QUOTE_BOXES":
        case "MINIMAL_TIMELINE":
            return {
                type,
                accentColor: accentColor ?? void 0
            };
        case "CIRCLE_STATS":
            return {
                type,
                accentColor: accentColor ?? void 0,
                label: label ?? void 0
            };
        case "OUTLINE_BOXES_WITH_TOP_CIRCLE":
        case "PROCESS_STEPS":
        case "TIMELINE":
        case "PILLS":
        case "CIRCLE":
        case "PYRAMID":
        case "STAIRCASE":
        case "VERTICAL_FUNNEL":
            return {
                type,
                accentColor: accentColor ?? void 0,
                shape: shape ?? void 0,
                shapeColor: shapeColor ?? void 0
            };
        case "BAR_STATS":
        case "STAR_RATING":
            return {
                type,
                accentColor: accentColor ?? void 0,
                label: label ?? void 0
            };
        case "STATS":
            return {
                type,
                accentColor: accentColor ?? void 0,
                label: label ?? void 0,
                borderColor: borderColor ?? void 0,
                borderWidth: borderWidth ?? void 0,
                borderRadius: borderRadius ?? void 0
            };
        case "SMALL_BULLETS":
            return {
                type,
                accentColor: accentColor ?? void 0,
                borderColor: borderColor ?? void 0,
                borderWidth: borderWidth ?? void 0,
                borderRadius: borderRadius ?? void 0
            };
        case "NUMBERED_BOXES":
        case "BIG_BULLETS":
        case "ARROW_BULLETS":
            return {
                type,
                accentColor: accentColor ?? void 0,
                shape: shape ?? void 0,
                shapeColor: shapeColor ?? void 0,
                borderColor: borderColor ?? void 0,
                borderWidth: borderWidth ?? void 0,
                borderRadius: borderRadius ?? void 0
            };
        default:
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(type);
                return {
                    type,
                    accentColor: accentColor ?? void 0
                };
            }
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/smart-block-converter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "smartBlockConverter",
    ()=>smartBlockConverter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/uncreachable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/consts.js [app-client] (ecmascript)");
;
;
;
const smartBlockConverter = {
    toPm: {
        types: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK
        ],
        // @ts-expect-error next node type
        convert: (node, visit)=>{
            const data = node.smartBlockData;
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK,
                attrs: {
                    id: node.id,
                    type: data?.type ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_DEFAULTS"].type,
                    columnSize: data?.columnSize ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_DEFAULTS"].columnSize,
                    orientation: data?.orientation ?? null,
                    backgroundColor: data?.backgroundColor ?? null,
                    borderColor: data?.borderColor ?? null,
                    borderWidth: data?.borderWidth ?? null,
                    borderRadius: data?.borderRadius ?? null,
                    animation: data?.animation ?? null
                },
                content: visit(node)
            };
        }
    },
    fromPm: {
        types: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK
        ],
        // @ts-expect-error next node type
        convert: (node, visit)=>{
            const { attrs } = node;
            const { id } = attrs;
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK,
                id,
                smartBlockData: {
                    ...smartBlockDataPerVariant(attrs),
                    // covers all variants in one place
                    ...attrs.animation ? {
                        animation: attrs.animation
                    } : {}
                },
                nodes: visit?.(node)
            };
        }
    }
};
const smartBlockDataPerVariant = (attrs)=>{
    const { columnSize, orientation, borderColor, borderWidth, borderRadius } = attrs;
    const type = attrs.type ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_DEFAULTS"].type;
    switch(type){
        case "SOLID_BOXES":
        case "STATS":
        case "BAR_STATS":
        case "CIRCLE_STATS":
        case "SIDE_LINE_TEXT":
        case "TOP_LINE_TEXT":
        case "NUMBERED_BOXES":
        case "OUTLINE_BOXES_WITH_TOP_CIRCLE":
        case "PROCESS_STEPS":
        case "STAR_RATING":
        case "QUOTE_BOXES":
        case "CIRCLE":
        case "PYRAMID":
        case "STAIRCASE":
        case "VERTICAL_FUNNEL":
            return {
                type,
                columnSize: columnSize ?? void 0
            };
        case "SOLID_BOXES_ALTERNATING":
        case "SMALL_BULLETS":
        case "ARROW_BULLETS":
        case "TIMELINE":
        case "MINIMAL_TIMELINE":
        case "PILLS":
            return {
                type,
                columnSize: columnSize ?? void 0,
                orientation: orientation ?? void 0
            };
        case "BIG_BULLETS":
            return {
                type,
                columnSize: columnSize ?? void 0,
                orientation: orientation ?? void 0
            };
        case "SOLID_JOINED_BOXES":
            return {
                type,
                columnSize: columnSize ?? void 0,
                borderColor: borderColor ?? void 0,
                borderWidth: borderWidth ?? void 0,
                borderRadius: borderRadius ?? void 0
            };
        default:
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$uncreachable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreachable"])(type);
                return {
                    type,
                    columnSize: columnSize ?? void 0
                };
            }
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/viewer-styles-inject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = '912a61ed';
const injectCss = ()=>{
    var css = `.RVohE{align-self:center;grid-column:2;height:var(--ricos-internal-sb-circle-size,360px);justify-self:center;pointer-events:none;position:relative;width:var(--ricos-internal-sb-circle-size,360px);z-index:1}.Oenga{display:block;height:100%;overflow:visible;width:100%}.Ko9l7{align-items:center;display:flex;height:calc(var(--ricos-internal-sb-circle-size, 360px)*48/360);isolation:isolate;justify-content:center;position:absolute;transform:translate(-50%,-50%);user-select:none;width:calc(var(--ricos-internal-sb-circle-size, 360px)*48/360)}.P3AfN{color:var(--ricos-custom-smart-block-label-color,#2b2d33);font-size:calc(var(--ricos-internal-sb-circle-size, 360px)*24/360);font-weight:700;line-height:1}.gebQF{height:calc(var(--ricos-internal-sb-circle-size, 360px)*32/360);transition:opacity .15s;width:calc(var(--ricos-internal-sb-circle-size, 360px)*32/360)}._67xy1{pointer-events:auto}.mMZbA{align-items:center;display:flex;inset:0;justify-content:center;opacity:0;pointer-events:none;position:absolute;transition:opacity .15s;z-index:2}.mMZbA button{pointer-events:auto}._67xy1:hover .mMZbA{opacity:1}._67xy1:hover .gebQF{opacity:0}.Pd2zU{--full:var(--ricos-internal-full-icon-color,#000);--empty:var(--ricos-internal-empty-icon-color,#ccc);--size:26;position:relative}.WmGhS{border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;clip:rect(0,0,0,0)}.-xy9C{display:flex;gap:0 6px}.wuamu{color:var(--full)}.CsP8U,.wuamu{height:calc(var(--size)*1px);width:calc(var(--size)*1px)}.CsP8U{color:var(--empty)}.tbvme{display:flex;position:relative}.RkSrw,.kxujw{display:block}.kxujw{clip-path:inset(0 50% 0 0)}.RkSrw,[dir=rtl] .kxujw{clip-path:inset(0 0 0 50%)}.RkSrw{position:absolute}[dir=rtl] .RkSrw{clip-path:inset(0 50% 0 0)}.quj1J{align-items:center;background-color:var(--ricos-background-color,#fff);color:var(--ricos-internal-sb-accent,var(--ricos-custom-smart-block-accent-color,currentColor));display:inline-flex;height:34px;justify-content:center;padding:5px;pointer-events:none;position:absolute;width:32px;z-index:1}.quj1J svg{height:100%;width:100%;fill:currentColor}.IG9-l{left:-10px;top:-10px}.u6f-Y{bottom:-10px;right:-10px}.FWVbO,.qqZGG{--ricos-internal-marker:0}.rOLR3{align-items:center;display:flex;height:30px;justify-content:center;position:relative;user-select:none;width:100%}._2aMkF{font-size:16px;font-weight:700;line-height:30px}.GTzuj,._2aMkF{color:var(--ricos-custom-smart-block-label-color,currentColor);transition:opacity .15s}.GTzuj{height:24px;width:24px}.bhc9L{background-color:var(--ricos-internal-sb-accent,transparent);border-top-left-radius:max(0px,var(--ricos-internal-sb-border-radius,0px) - var(--ricos-internal-sb-border-width,0px));border-top-right-radius:max(0px,var(--ricos-internal-sb-border-radius,0px) - var(--ricos-internal-sb-border-width,0px));isolation:isolate}.bhc9L,.tKvL3{margin-left:-16px;margin-top:-16px;width:calc(100% + 32px)}.tKvL3{display:flex;justify-content:center;position:relative}.tKvL3:before{content:"";height:8px;left:0;position:absolute;right:0;top:50%;transform:translateY(-50%)}.TzXqD,.tKvL3:before{background-color:var(--ricos-internal-sb-accent,transparent)}.TzXqD{align-items:center;border-radius:50%;display:flex;height:48px;isolation:isolate;justify-content:center;position:relative;width:48px;z-index:1}._2LLIi{align-items:flex-start;display:flex;flex-direction:column;height:36px;justify-content:flex-end;margin-left:-16px;margin-top:-16px;width:calc(100% + 32px)}.GKsbA{font-size:16px;font-weight:700;line-height:24px}.GKsbA,.i3zls{color:var(--ricos-custom-smart-block-label-color,currentColor);padding:4px 16px;transition:opacity .15s}.-gmdz{background-color:var(--ricos-internal-sb-accent,currentColor);border-radius:2px;height:4px;width:100%}._630Tn{align-items:center;background-color:var(--ricos-internal-sb-accent-opaque,var(--ricos-custom-smart-block-accent-color,#e7e7e7));border-radius:6px;color:var(--ricos-custom-smart-block-label-color,currentColor);display:flex;flex-shrink:0;height:36px;isolation:isolate;justify-content:center;position:relative;width:36px;z-index:2}.R7eB6{font-size:14px;font-weight:700;line-height:1}.PcNMV,.R7eB6{transition:opacity .15s}.PcNMV{height:20px;width:20px}._1spzD{background-color:var(--ricos-internal-sb-accent-opaque,var(--ricos-custom-smart-block-accent-color,#b0b3c2));border-radius:50%;flex-shrink:0;height:12px;isolation:isolate;width:12px;z-index:2}._1spzD,.awARD{position:relative}.awARD{align-items:center;background-color:var(--ricos-internal-sb-accent-opaque,var(--ricos-custom-smart-block-accent-color,#e0e0e0));border-radius:9999px;display:flex;height:40px;justify-content:center}.awARD .rOLR3{height:auto}.awARD ._2aMkF{font-size:24px;line-height:1}.awARD .GTzuj{height:20px;width:20px}.wDkaO{align-self:stretch;flex-shrink:0;min-height:100%;width:40px}@container (max-width: 480px){.wDkaO{align-self:auto;height:40px;min-height:auto;width:100%}}.nvWCE{flex-shrink:0;margin-right:12px;user-select:none}.nvWCE,.zhqHn{position:relative}.zhqHn{align-items:center;background-color:var(--ricos-internal-sb-accent,transparent);border-radius:6px;display:flex;height:40px;isolation:isolate;justify-content:center;width:40px}._0LiVK{color:var(--ricos-custom-smart-block-label-color,currentColor);height:20px;width:20px}.-vOP4,._0LiVK{transition:opacity .15s}.-vOP4{align-items:center;bottom:0;display:flex;justify-content:center;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;z-index:2}.-vOP4 button{pointer-events:auto}.zhqHn .-vOP4{bottom:auto;height:24px;left:50%;right:auto;top:50%;transform:translate(-50%,-50%);width:24px}.FWVbO:hover .-vOP4{opacity:1}.FWVbO:has(.-vOP4):hover .qqZGG{opacity:0}.PjldO{align-items:center;display:flex;gap:8px;margin-bottom:12px;width:100%;--ricos-internal-empty-icon-color:var(--ricos-custom-smart-block-track-color,#e8edf3);--ricos-internal-full-icon-color:var(--ricos-internal-sb-accent,var(--ricos-custom-smart-block-accent-color,#000))}.nVn7G{flex:0 0 auto}._95gb7{color:currentColor;font-size:14px;font-weight:600;line-height:1.3;text-overflow:ellipsis;white-space:nowrap}._95gb7,.rtXEh{overflow:hidden}.rtXEh{background:transparent;border:none;min-width:4ch;outline:none;padding:0;width:100%}.rtXEh:focus-visible{outline:1px solid #a8caff;outline-offset:2px}.rtXEh::placeholder{opacity:.5}.glob_fontElementMap,.sr3UI{font-family:var(--ricos-font-family,unset)}.AQ9q0{container-type:inline-size;margin:16px 0;position:relative;width:100%}.F4H8j{display:flex;flex-wrap:wrap;gap:16px;width:100%}.UnR3K{background-color:var(--ricos-internal-sb-bg,unset);min-width:0;outline:1.5px solid transparent;padding:16px;position:relative;transition:outline-color .2s}[data-type=ARROW_BULLETS] .UnR3K,[data-type=BIG_BULLETS] .UnR3K,[data-type=NUMBERED_BOXES] .UnR3K,[data-type=SMALL_BULLETS] .UnR3K,[data-type=SOLID_BOXES] .UnR3K,[data-type=SOLID_BOXES_ALTERNATING] .UnR3K,[data-type=STATS] .UnR3K{border-color:var(--ricos-internal-sb-border-color,transparent);border-radius:var(--ricos-internal-sb-border-radius,0);border-style:solid;border-width:var(--ricos-internal-sb-border-width,0)}.vZGxU{align-items:flex-start;display:flex;flex-direction:row}.vZGxU .P0Evf{flex:1;min-width:0}.P0Evf{display:flex;flex-direction:column;min-height:48px;min-width:0;overflow-wrap:anywhere}.P0Evf>*{min-height:1em}.VvLpd .P0Evf{display:list-item;list-style:disc outside;margin-inline-start:1.5em;padding-inline-start:.5em}.VvLpd .P0Evf::marker{color:var(--ricos-internal-sb-accent,currentColor)}.VvLpd .P0Evf[data-heading-level=headerOne]{font-family:var(--ricos-custom-h1-font-family,unset);font-size:var(--ricos-custom-h1-font-size,40px);font-style:var(--ricos-custom-h1-font-style,unset);font-weight:var(--ricos-custom-h1-font-weight,unset);letter-spacing:var(--ricos-custom-h1-letter-spacing,unset);line-height:var(--ricos-custom-h1-line-height,42px);min-height:var(--ricos-custom-h1-min-height,42px);text-decoration:var(--ricos-custom-h1-text-decoration,unset)}.VvLpd .P0Evf[data-heading-level=headerTwo]{font-family:var(--ricos-custom-h2-font-family,unset);font-size:var(--ricos-custom-h2-font-size,28px);font-style:var(--ricos-custom-h2-font-style,unset);font-weight:var(--ricos-custom-h2-font-weight,unset);letter-spacing:var(--ricos-custom-h2-letter-spacing,unset);line-height:var(--ricos-custom-h2-line-height,36px);min-height:var(--ricos-custom-h2-min-height,36px);text-decoration:var(--ricos-custom-h2-text-decoration,unset)}.VvLpd .P0Evf[data-heading-level=headerThree]{font-family:var(--ricos-custom-h3-font-family,unset);font-size:var(--ricos-custom-h3-font-size,24px);font-style:var(--ricos-custom-h3-font-style,unset);font-weight:var(--ricos-custom-h3-font-weight,unset);letter-spacing:var(--ricos-custom-h3-letter-spacing,unset);line-height:var(--ricos-custom-h3-line-height,30px);min-height:var(--ricos-custom-h3-min-height,30px);text-decoration:var(--ricos-custom-h3-text-decoration,unset)}.VvLpd .P0Evf[data-heading-level=headerFour]{font-family:var(--ricos-custom-h4-font-family,unset);font-size:var(--ricos-custom-h4-font-size,20px);font-style:var(--ricos-custom-h4-font-style,unset);font-weight:var(--ricos-custom-h4-font-weight,unset);letter-spacing:var(--ricos-custom-h4-letter-spacing,unset);line-height:var(--ricos-custom-h4-line-height,1.5);min-height:var(--ricos-custom-h4-min-height,unset);text-decoration:var(--ricos-custom-h4-text-decoration,unset)}.VvLpd .P0Evf[data-heading-level=headerFive]{font-family:var(--ricos-custom-h5-font-family,unset);font-size:var(--ricos-custom-h5-font-size,18px);font-style:var(--ricos-custom-h5-font-style,unset);font-weight:var(--ricos-custom-h5-font-weight,unset);letter-spacing:var(--ricos-custom-h5-letter-spacing,unset);line-height:var(--ricos-custom-h5-line-height,1.5);min-height:var(--ricos-custom-h5-min-height,unset);text-decoration:var(--ricos-custom-h5-text-decoration,unset)}.VvLpd .P0Evf[data-heading-level=headerSix]{font-family:var(--ricos-custom-h6-font-family,unset);font-size:var(--ricos-custom-h6-font-size,16px);font-style:var(--ricos-custom-h6-font-style,unset);font-weight:var(--ricos-custom-h6-font-weight,unset);letter-spacing:var(--ricos-custom-h6-letter-spacing,unset);line-height:var(--ricos-custom-h6-line-height,1.5);min-height:var(--ricos-custom-h6-min-height,unset);text-decoration:var(--ricos-custom-h6-text-decoration,unset)}._96k-7{display:grid;gap:16px;grid-template-columns:repeat(12,1fr);width:100%}._96k-7 .react-renderer,._96k-7 .react-renderer>div:not(.UnR3K),._96k-7 [data-node-view-wrapper],._96k-7 [data-node-view-wrapper]>div:not(.UnR3K),._96k-7>div:not(.UnR3K),._96k-7>div:not(.UnR3K)>div:not(.UnR3K){display:contents}._96k-7 .UnR3K{grid-column:span 4}._96k-7 .UnR3K[data-last-row][data-last-row-cells="1"]{grid-column:span 12}._96k-7 .UnR3K[data-last-row][data-last-row-cells="2"]{grid-column:span 6}._96k-7[data-column-size=SMALL] .UnR3K{grid-column:span 3}._96k-7[data-column-size=SMALL] .UnR3K[data-last-row][data-last-row-cells="1"]{grid-column:span 12}._96k-7[data-column-size=SMALL] .UnR3K[data-last-row][data-last-row-cells="2"]{grid-column:span 6}._96k-7[data-column-size=SMALL] .UnR3K[data-last-row][data-last-row-cells="3"]{grid-column:span 4}._96k-7[data-column-size=LARGE] .UnR3K{grid-column:span 6}._96k-7[data-column-size=EXTRA_LARGE] .UnR3K,._96k-7[data-column-size=LARGE] .UnR3K[data-last-row][data-last-row-cells="1"]{grid-column:span 12}@container (max-width: 640px){._96k-7[data-column-size=SMALL] .UnR3K,._96k-7[data-column-size=SMALL] .UnR3K[data-last-row][data-last-row-cells="1"],._96k-7[data-column-size=SMALL] .UnR3K[data-last-row][data-last-row-cells="2"],._96k-7[data-column-size=SMALL] .UnR3K[data-last-row][data-last-row-cells="3"]{grid-column:span 6}._96k-7[data-column-size=SMALL] .UnR3K[data-last-row-2col][data-last-row-cells-2col="1"]{grid-column:span 12}._96k-7 .UnR3K,._96k-7 .UnR3K[data-last-row][data-last-row-cells="1"],._96k-7 .UnR3K[data-last-row][data-last-row-cells="2"]{grid-column:span 6}._96k-7 .UnR3K[data-last-row-2col][data-last-row-cells-2col="1"],._96k-7[data-column-size=LARGE] .UnR3K,._96k-7[data-column-size=LARGE] .UnR3K[data-last-row]{grid-column:span 12}}@container (max-width: 480px){._96k-7 .UnR3K,._96k-7 .UnR3K[data-last-row-2col][data-last-row-cells-2col="1"],._96k-7 .UnR3K[data-last-row][data-last-row-cells="1"],._96k-7 .UnR3K[data-last-row][data-last-row-cells="2"],._96k-7 .UnR3K[data-last-row][data-last-row-cells="3"],._96k-7[data-column-size=SMALL] .UnR3K,._96k-7[data-column-size=SMALL] .UnR3K[data-last-row-2col][data-last-row-cells-2col="1"],._96k-7[data-column-size=SMALL] .UnR3K[data-last-row][data-last-row-cells="1"],._96k-7[data-column-size=SMALL] .UnR3K[data-last-row][data-last-row-cells="2"],._96k-7[data-column-size=SMALL] .UnR3K[data-last-row][data-last-row-cells="3"]{grid-column:span 12}}.RfIeW{border-color:var(--ricos-internal-sb-block-border-color,transparent);border-radius:var(--ricos-internal-sb-block-border-radius,0);border-style:solid;border-width:var(--ricos-internal-sb-block-border-width,0);gap:0;overflow:hidden}.pe61x .UnR3K{padding-left:24px;position:relative}.pe61x .UnR3K:before{background-color:var(--ricos-internal-sb-accent,var(--ricos-custom-smart-block-accent-color,currentColor));border-radius:2px;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.emgwx .UnR3K{padding-top:24px;position:relative}.emgwx .UnR3K:before{background-color:var(--ricos-internal-sb-accent,var(--ricos-custom-smart-block-accent-color,currentColor));border-radius:2px;content:"";height:4px;left:0;position:absolute;right:0;top:0}.Ud2Az,.VvLpd,.bzQOV{gap:30px}.Ud2Az[data-orientation=VERTICAL],.VvLpd[data-orientation=VERTICAL],.bzQOV[data-orientation=VERTICAL]{grid-template-columns:1fr!important}.Ud2Az[data-orientation=VERTICAL] .UnR3K,.VvLpd[data-orientation=VERTICAL] .UnR3K,.bzQOV[data-orientation=VERTICAL] .UnR3K{grid-column:span 1!important}.PqoTa{display:grid;gap:16px;grid-template-columns:repeat(var(--ricos-internal-sb-cols,4),minmax(0,1fr));grid-template-rows:1fr 1fr;position:relative;width:100%}.PqoTa:before{background-color:var(--ricos-internal-sb-block-border-color,var(--ricos-custom-smart-block-border-color,#e0e0e0));content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:0}.PqoTa .react-renderer,.PqoTa .react-renderer>div:not(.UnR3K),.PqoTa [data-node-view-wrapper],.PqoTa [data-node-view-wrapper]>div:not(.UnR3K),.PqoTa>div:not(.UnR3K),.PqoTa>div:not(.UnR3K)>div:not(.UnR3K){display:contents}.PqoTa .UnR3K{grid-column:var(--ricos-internal-sb-grid-col);grid-row:var(--ricos-internal-sb-grid-row);z-index:1}.PqoTa[data-orientation=VERTICAL]{grid-template-columns:minmax(0,1fr) minmax(0,1fr);grid-template-rows:repeat(var(--ricos-internal-sb-cols,4),1fr)}.PqoTa[data-orientation=VERTICAL]:before{bottom:0;height:auto;left:50%;right:auto;top:0;transform:translateX(-50%);width:2px}@container (max-width: 480px){.PqoTa{grid-template-columns:1fr;grid-template-rows:auto}.PqoTa:before{display:none}.PqoTa .UnR3K{grid-column:auto;grid-row:auto}}.hzz0D{--ricos-internal-sb-chip-half:18px;column-gap:0;display:grid;grid-template-columns:repeat(calc(var(--ricos-internal-sb-cols, 4)*2 + 1),minmax(0,1fr));grid-template-rows:1fr 1fr;position:relative;row-gap:0;width:100%}.hzz0D:before{background-color:var(--ricos-internal-sb-block-border-color,var(--ricos-custom-smart-block-border-color,#e0e0e0));content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:0}.hzz0D .react-renderer,.hzz0D .react-renderer>div:not(.UnR3K),.hzz0D [data-node-view-wrapper],.hzz0D [data-node-view-wrapper]>div:not(.UnR3K),.hzz0D>div:not(.UnR3K),.hzz0D>div:not(.UnR3K)>div:not(.UnR3K){display:contents}.hzz0D .UnR3K{grid-column:var(--ricos-internal-sb-grid-col)/span 3;grid-row:var(--ricos-internal-sb-grid-row);min-width:0;padding:12px 8px;padding-bottom:calc((2 - var(--ricos-internal-sb-grid-row, 1))*30px + 12px);padding-top:calc((var(--ricos-internal-sb-grid-row, 1) - 1)*30px + 12px);position:relative;text-align:center;z-index:1}.hzz0D .UnR3K>:first-child{left:50%;position:absolute;top:calc((2 - var(--ricos-internal-sb-grid-row, 1))*100% - var(--ricos-internal-sb-chip-half));transform:translateX(-50%)}.hzz0D[data-orientation=VERTICAL]{grid-template-columns:minmax(0,1fr) minmax(0,1fr);grid-template-rows:repeat(var(--ricos-internal-sb-cols,4),auto)}.hzz0D[data-orientation=VERTICAL]:before{bottom:0;height:auto;left:50%;right:auto;top:0;transform:translateX(-50%);width:2px}.hzz0D[data-orientation=VERTICAL] .UnR3K{grid-column:var(--ricos-internal-sb-grid-col)/span 1;grid-row:var(--ricos-internal-sb-grid-row);padding:12px;padding-left:calc((var(--ricos-internal-sb-grid-col, 1) - 1)*30px + 12px);padding-right:calc((2 - var(--ricos-internal-sb-grid-col, 1))*30px + 12px);text-align:start}.hzz0D[data-orientation=VERTICAL] .UnR3K>:first-child{left:calc((2 - var(--ricos-internal-sb-grid-col, 1))*100% - var(--ricos-internal-sb-chip-half));position:absolute;top:50%;transform:translateY(-50%)}@container (max-width: 480px){.hzz0D{display:flex;flex-direction:column;grid-template-columns:none;grid-template-rows:none}.hzz0D:before,.hzz0D[data-orientation=VERTICAL]:before{bottom:0;display:block;height:auto;left:calc(12px + var(--ricos-internal-sb-chip-half));right:auto;top:0;transform:translateX(-50%);width:2px}.hzz0D .UnR3K,.hzz0D[data-orientation=VERTICAL] .UnR3K{align-items:flex-start;display:flex;gap:12px;grid-column:auto;grid-row:auto;padding:12px;text-align:start}.hzz0D .UnR3K>:first-child,.hzz0D[data-orientation=VERTICAL] .UnR3K>:first-child{left:auto;margin-top:6px;position:static;top:auto;transform:none}}.tpAfk{--ricos-internal-sb-chip-half:6px}.dbSzs{display:grid;gap:16px;grid-template-columns:repeat(12,1fr);width:100%}.dbSzs .react-renderer,.dbSzs .react-renderer>div:not(.UnR3K),.dbSzs [data-node-view-wrapper],.dbSzs [data-node-view-wrapper]>div:not(.UnR3K),.dbSzs>div:not(.UnR3K),.dbSzs>div:not(.UnR3K)>div:not(.UnR3K){display:contents}.dbSzs .UnR3K{display:flex;flex-direction:column;gap:8px;grid-column:span 4}.dbSzs .UnR3K[data-cells-total="1"]{grid-column:span 12}.dbSzs .UnR3K[data-cells-total="2"],.dbSzs .UnR3K[data-cells-total="4"]{grid-column:span 6}.dbSzs[data-column-size=SMALL] .UnR3K{grid-column:span 3}.dbSzs[data-column-size=SMALL] .UnR3K[data-cells-total="1"]{grid-column:span 12}.dbSzs[data-column-size=SMALL] .UnR3K[data-cells-total="2"]{grid-column:span 6}.dbSzs[data-column-size=SMALL] .UnR3K[data-cells-total="3"],.dbSzs[data-column-size=SMALL] .UnR3K[data-cells-total="5"]{grid-column:span 4}.dbSzs[data-column-size=LARGE] .UnR3K{grid-column:span 6}.dbSzs[data-column-size=EXTRA_LARGE] .UnR3K,.dbSzs[data-column-size=LARGE] .UnR3K[data-cells-total="1"]{grid-column:span 12}@container (max-width: 640px){.dbSzs .UnR3K{grid-column:span 6}.dbSzs .UnR3K[data-cells-total="1"]{grid-column:span 12}.dbSzs[data-column-size=SMALL] .UnR3K[data-cells-total]{grid-column:span 6}.dbSzs[data-column-size=LARGE] .UnR3K,.dbSzs[data-column-size=SMALL] .UnR3K[data-cells-total="1"]{grid-column:span 12}}@container (max-width: 480px){.dbSzs .UnR3K,.dbSzs[data-column-size=LARGE] .UnR3K,.dbSzs[data-column-size=SMALL] .UnR3K[data-cells-total]{grid-column:span 12}}.dbSzs[data-orientation=VERTICAL]{grid-template-columns:1fr!important}.dbSzs[data-orientation=VERTICAL] .UnR3K{align-items:stretch;flex-direction:row;gap:16px;grid-column:span 1!important}.dbSzs[data-orientation=VERTICAL] .P0Evf{flex:1;min-width:0}@container (max-width: 480px){.dbSzs[data-orientation=VERTICAL] .UnR3K{align-items:stretch;flex-direction:column;gap:8px}}.mKcZS,.r9LZP{--ricos-internal-sb-tri-band:320px;--ricos-internal-sb-tri-gap:16px;column-gap:0;display:grid;grid-auto-rows:1fr;grid-template-columns:var(--ricos-internal-sb-tri-band) minmax(0,1fr);row-gap:4px;width:100%}.mKcZS .react-renderer,.mKcZS .react-renderer>div:not(.UnR3K),.mKcZS [data-node-view-wrapper],.mKcZS [data-node-view-wrapper]>div:not(.UnR3K),.mKcZS>div:not(.UnR3K),.mKcZS>div:not(.UnR3K)>div:not(.UnR3K),.r9LZP .react-renderer,.r9LZP .react-renderer>div:not(.UnR3K),.r9LZP [data-node-view-wrapper],.r9LZP [data-node-view-wrapper]>div:not(.UnR3K),.r9LZP>div:not(.UnR3K),.r9LZP>div:not(.UnR3K)>div:not(.UnR3K){display:contents}.mKcZS .UnR3K,.r9LZP .UnR3K{background-color:transparent;column-gap:inherit;display:grid;grid-column:1/-1;grid-template-columns:subgrid;min-height:64px;padding:0}.mKcZS .P0Evf,.r9LZP .P0Evf{justify-content:center;padding-block:12px}@container (max-width: 480px){.mKcZS,.r9LZP{display:flex;flex-direction:column;gap:8px}}.r9LZP .P0Evf{margin-left:calc(var(--ricos-internal-sb-tri-band)/2*((var(--ricos-internal-sb-cell-index, 0) + 1)/var(--ricos-internal-sb-cols, 3) - 1) + var(--ricos-internal-sb-tri-gap))}.mKcZS .P0Evf{margin-left:calc(var(--ricos-internal-sb-tri-band)/2*(0 - var(--ricos-internal-sb-cell-index, 0)/var(--ricos-internal-sb-cols, 3)) + var(--ricos-internal-sb-tri-gap))}._4Kp4r,.zzg81{align-items:center;background-color:var(--ricos-internal-sb-accent-opaque,var(--ricos-custom-smart-block-accent-color,#e7e7e7));display:flex;height:100%;isolation:isolate;justify-content:center;position:relative;user-select:none;width:100%}._4Kp4r{clip-path:polygon(calc(50% - 50%*var(--ricos-internal-sb-cell-index, 0)/var(--ricos-internal-sb-cols, 3)) 0,calc(50% + 50%*var(--ricos-internal-sb-cell-index, 0)/var(--ricos-internal-sb-cols, 3)) 0,calc(50% + 50%*(var(--ricos-internal-sb-cell-index, 0) + 1)/var(--ricos-internal-sb-cols, 3)) 100%,calc(50% - 50%*(var(--ricos-internal-sb-cell-index, 0) + 1)/var(--ricos-internal-sb-cols, 3)) 100%);--ricos-internal-sb-pyramid-centroid:calc((var(--ricos-internal-sb-cell-index, 0)*3 + 2)/(var(--ricos-internal-sb-cell-index, 0)*2*3 + 3)*100%)}._4Kp4r .D-Zpx,._4Kp4r ._2MoG5{left:50%;position:absolute;top:var(--ricos-internal-sb-pyramid-centroid);transform:translate(-50%,-50%)}._4Kp4r .D-Zpx{font-size:18px;line-height:1}._4Kp4r ._2MoG5{height:24px;width:24px}._4Kp4r ._3JqYW{bottom:auto;height:32px;left:50%;right:auto;top:var(--ricos-internal-sb-pyramid-centroid);transform:translate(-50%,-50%);width:32px}.zzg81{clip-path:polygon(calc(50% - 50%*(var(--ricos-internal-sb-cols, 3) - var(--ricos-internal-sb-cell-index, 0))/var(--ricos-internal-sb-cols, 3)) 0,calc(50% + 50%*(var(--ricos-internal-sb-cols, 3) - var(--ricos-internal-sb-cell-index, 0))/var(--ricos-internal-sb-cols, 3)) 0,calc(50% + 50%*(var(--ricos-internal-sb-cols, 3) - var(--ricos-internal-sb-cell-index, 0) - 1)/var(--ricos-internal-sb-cols, 3)) 100%,calc(50% - 50%*(var(--ricos-internal-sb-cols, 3) - var(--ricos-internal-sb-cell-index, 0) - 1)/var(--ricos-internal-sb-cols, 3)) 100%);--ricos-internal-sb-funnel-centroid:calc(((var(--ricos-internal-sb-cols, 3) - var(--ricos-internal-sb-cell-index, 0))*3 - 2)/((var(--ricos-internal-sb-cols, 3) - var(--ricos-internal-sb-cell-index, 0))*2*3 - 3)*100%)}.zzg81 .GL-Ur,.zzg81 .nHmcN{left:50%;position:absolute;top:var(--ricos-internal-sb-funnel-centroid);transform:translate(-50%,-50%)}.zzg81 .nHmcN{font-size:18px;line-height:1}.zzg81 .GL-Ur{height:24px;width:24px}.zzg81 ._2NESh{bottom:auto;height:32px;left:50%;right:auto;top:var(--ricos-internal-sb-funnel-centroid);transform:translate(-50%,-50%);width:32px}.TLrnC,._1Zfnu{height:96px}.xoc3E,.ySNT0{display:none}@container (max-width: 480px){.AQ9q0 .xoc3E,.AQ9q0 .ySNT0{display:flex;flex-direction:column;gap:4px;margin:0 auto 16px;max-width:320px;width:80%}}.hwYH2{align-items:center;background-color:var(--ricos-internal-sb-accent,var(--ricos-custom-smart-block-accent-color,#e7e7e7));border-radius:6px;display:none;flex-shrink:0;height:32px;isolation:isolate;justify-content:center;position:relative;user-select:none;width:32px}.oQIX5{display:flex;flex-wrap:wrap;gap:16px;justify-content:center}.oQIX5 .react-renderer,.oQIX5 .react-renderer>div:not(.UnR3K),.oQIX5 [data-node-view-wrapper],.oQIX5 [data-node-view-wrapper]>div:not(.UnR3K),.oQIX5>div:not(.UnR3K),.oQIX5>div:not(.UnR3K)>div:not(.UnR3K){display:contents}.oQIX5 .UnR3K{flex:0 0 auto;width:calc(33.33333% - 10.66667px)}.oQIX5[data-column-size=SMALL] .UnR3K{width:calc(25% - 12px)}.oQIX5[data-column-size=LARGE] .UnR3K{width:calc(50% - 8px)}.oQIX5[data-column-size=EXTRA_LARGE] .UnR3K{width:100%}@container (max-width: 640px){.oQIX5 .UnR3K,.oQIX5[data-column-size=SMALL] .UnR3K{width:calc(50% - 8px)}.oQIX5[data-column-size=LARGE] .UnR3K{width:100%}}@container (max-width: 480px){.oQIX5 .UnR3K,.oQIX5[data-column-size=LARGE] .UnR3K,.oQIX5[data-column-size=SMALL] .UnR3K{width:100%}}.ed9G2{gap:28px}@container (max-width: 480px){.ed9G2{column-gap:0}}.ed9G2 .UnR3K{border-radius:12px;box-sizing:border-box;min-width:0;overflow:visible;padding:36px 32px;position:relative}.ed9G2 .UnR3K:before{border:3px solid var(--ricos-internal-sb-accent,var(--ricos-custom-smart-block-accent-color,currentColor));border-radius:inherit;box-sizing:border-box;content:"";inset:0;pointer-events:none;position:absolute}.GrnEu{display:flex;flex-wrap:wrap;gap:24px;justify-content:center}.GrnEu .react-renderer,.GrnEu .react-renderer>div:not(.UnR3K),.GrnEu [data-node-view-wrapper],.GrnEu [data-node-view-wrapper]>div:not(.UnR3K),.GrnEu>div:not(.UnR3K),.GrnEu>div:not(.UnR3K)>div:not(.UnR3K){display:contents}.GrnEu .UnR3K{flex:0 0 auto;width:calc(33.33333% - 16px)}.GrnEu .P0Evf{width:100%}.GrnEu[data-column-size=SMALL] .UnR3K{width:calc(25% - 18px)}.GrnEu[data-column-size=LARGE] .UnR3K{width:calc(50% - 12px)}.GrnEu[data-column-size=EXTRA_LARGE] .UnR3K{width:100%}@container (max-width: 640px){.GrnEu .UnR3K,.GrnEu[data-column-size=SMALL] .UnR3K{width:calc(50% - 12px)}.GrnEu[data-column-size=LARGE] .UnR3K{width:100%}}@container (max-width: 480px){.GrnEu{gap:16px}.GrnEu .UnR3K,.GrnEu[data-column-size=LARGE] .UnR3K,.GrnEu[data-column-size=SMALL] .UnR3K{width:100%}}.CRctq{display:flex;flex-direction:column;flex-wrap:nowrap;row-gap:8px;width:100%}.CRctq .react-renderer:has(.UnR3K),.CRctq [data-hook^=ricos-node]:has(.UnR3K),.CRctq [data-node-view-wrapper]:has(.UnR3K),.CRctq>div:not(.UnR3K){display:contents}.CRctq .react-renderer:has(.UnR3K)>div:not(.UnR3K),.CRctq [data-hook^=ricos-node]:has(.UnR3K)>div:not(.UnR3K),.CRctq [data-node-view-wrapper]:has(.UnR3K)>div:not(.UnR3K),.CRctq>div:not(.UnR3K)>div:not(.UnR3K){display:contents}.CRctq .UnR3K{align-items:stretch;background-color:transparent;column-gap:16px;display:flex;flex-direction:row;min-height:40px;padding:0}.CRctq .P0Evf{flex:1;justify-content:center;padding-block:8px}@container (max-width: 480px){.CRctq .UnR3K,.mKcZS .UnR3K,.r9LZP .UnR3K{align-items:flex-start;display:flex;flex-direction:row;gap:12px;min-height:auto;padding:8px 0}.CRctq .UnR3K>:first-child,.mKcZS .UnR3K>:first-child,.r9LZP .UnR3K>:first-child{display:none}.CRctq .P0Evf,.mKcZS .P0Evf,.r9LZP .P0Evf{flex:1;margin-left:0;padding-block:0}.hwYH2{display:flex}}.i3n6x{--ricos-internal-sb-circle-size:min(360px,40cqw);--ricos-internal-sb-col-gap:32px;--ricos-internal-sb-row-gap:8px;align-items:center;column-gap:var(--ricos-internal-sb-col-gap);display:grid;grid-auto-rows:minmax(0,1fr);grid-template-columns:minmax(0,1fr) var(--ricos-internal-sb-circle-size) minmax(0,1fr);row-gap:var(--ricos-internal-sb-row-gap);width:100%}.i3n6x>.F4H8j.iKP1u{display:contents}.i3n6x .F4H8j.iKP1u>div:not(.UnR3K),.i3n6x .react-renderer:has(.UnR3K),.i3n6x [data-hook^=ricos-node]:has(.UnR3K),.i3n6x [data-node-view-wrapper]:has(.UnR3K){display:contents}.i3n6x .UnR3K{align-items:center;display:flex;grid-row:var(--ricos-internal-sb-row,auto);padding:8px 12px}.i3n6x .UnR3K[data-circle-side=left]{grid-column:1;justify-content:flex-end;text-align:right}.i3n6x .UnR3K[data-circle-side=right]{grid-column:3;justify-content:flex-start;text-align:left}.i3n6x .UnR3K[data-circle-side=bottom]{grid-column:2;justify-content:center;text-align:center}.i3n6x .P0Evf{flex:1;min-width:0}.i3n6x [data-circle-bullet]{display:none}@container (max-width: 660px){.i3n6x{display:flex;flex-direction:column;gap:var(--ricos-internal-sb-row-gap)}.i3n6x .UnR3K,.i3n6x .UnR3K[data-circle-side=bottom],.i3n6x .UnR3K[data-circle-side=left],.i3n6x .UnR3K[data-circle-side=right]{align-items:flex-start;justify-content:flex-start;padding:8px 0;text-align:left;width:100%}.i3n6x [data-circle-bullet]{display:block}}.yjvV1{flex-shrink:0;min-height:40px;width:calc((var(--ricos-internal-sb-cell-index, 0) + 1)/var(--ricos-internal-sb-cols, 1)*50%)}.SvlVR,.yjvV1{align-items:center;background-color:var(--ricos-internal-sb-accent,var(--ricos-custom-smart-block-accent-color,currentColor));border-radius:4px;display:flex;justify-content:center;position:relative}.SvlVR{height:40px;isolation:isolate;width:calc((var(--ricos-internal-sb-cell-index, 0) + 1)/var(--ricos-internal-sb-cols, 1)*100%)}.SvlVR .C5R8g,.yjvV1 .C5R8g{font-size:18px;line-height:1}.SvlVR .GDqmE,.yjvV1 .GDqmE{height:24px;width:24px}.ALHMA{display:none}@container (max-width: 480px){.ALHMA{display:flex;flex-direction:column;gap:6px;margin-bottom:16px;width:100%}}@container (max-width: 660px){.AQ9q0 [data-circle-donut]{--ricos-internal-sb-circle-size:min(360px,100cqw - 32px);margin:0 auto 16px;order:-1}}._9B-40{align-items:center;background-color:var(--ricos-internal-sb-accent,#e7f0ff);border-radius:6px;display:flex;height:32px;isolation:isolate;justify-content:center;position:relative;width:32px}.pYOI2{height:24px;width:24px}.vPHKM{align-items:center;display:grid;gap:12px;grid-template-columns:minmax(0,1fr) auto;margin-bottom:12px}.KOdph,.RyaA4,.vPHKM{width:100%}.RyaA4{background-color:var(--ricos-custom-smart-block-track-color,#e8edf3);border-radius:999px;height:8px;overflow:hidden;position:relative}.BzWsM{background-color:var(--ricos-internal-sb-accent,currentColor);border-radius:inherit;height:100%;transition:width .2s ease}._9jAb1{display:flex;flex-shrink:0;justify-content:flex-end;overflow:hidden;width:4ch}.VmXOV{margin-bottom:16px;width:100%}.VmXOV,.n8pG6{display:flex;justify-content:center}.n8pG6{align-items:center;height:132px;position:relative;width:132px}._7fREQ{height:100%;overflow:visible;transform:rotate(-90deg);width:100%}._-7oal{fill:none;stroke:var(--ricos-custom-smart-block-track-color,#e8edf3);stroke-width:8}.Ju33c{fill:none;stroke:var(--ricos-internal-sb-accent,currentColor);stroke-width:8;stroke-linecap:round;transition:stroke-dashoffset .2s ease}.HTb-L{align-items:center;display:flex;inset:0;justify-content:center;padding:24px;position:absolute}.aHz0B{color:currentColor;font-size:14px;font-weight:600;line-height:1.3}.iVAZs{text-align:right}._3tVfC,.iVAZs{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._3tVfC{font-size:22px;font-weight:700;line-height:1.3;text-align:center}._2lVWr{color:var(--ricos-internal-sb-accent,currentColor);display:flex;justify-content:center;margin-bottom:12px;width:100%}.SuV60,.x6wQn{font-size:42px;font-weight:700;line-height:1.3;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}.jRWzh{background:transparent;border:none;color:inherit;font-family:inherit;font-style:inherit;outline:none;padding:0;width:100%}.jRWzh::placeholder{opacity:.5}.ERY0J{text-align:right;width:4ch}.ERY0J,.vYRGi{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vYRGi{font-size:22px;font-weight:700;line-height:1.3;text-align:center}`;
    var isTest = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === 'test';
    if (isTest || !css || typeof document === 'undefined') {
        return;
    }
    if (document.querySelector('style[data-ricos-style-hash="' + styleDataHash + '"]')) {
        return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.setAttribute('data-ricos-style-hash', styleDataHash);
    style.type = 'text/css';
    head.appendChild(style);
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/editor.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pluginSmartBlock",
    ()=>pluginSmartBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$ricos$2d$plugin$2d$toolbar$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/ricos-plugin-toolbar-names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/pm-node-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/find-parent-node-closest-to-pos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$get$2d$add$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/get-add-buttons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$get$2d$quick$2d$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/get-quick-actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$get$2d$toolbar$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/get-toolbar-buttons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$smart$2d$block$2d$cell$2d$converter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/smart-block-cell-converter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$smart$2d$block$2d$converter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/smart-block-converter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$tiptap$2f$smart$2d$block$2d$cell$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/tiptap/smart-block-cell-extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$tiptap$2f$smart$2d$block$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/tiptap/smart-block-extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolve$2d$smart$2d$block$2d$reference$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/resolve-smart-block-reference-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$viewer$2d$styles$2d$inject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/viewer-styles-inject.js [app-client] (ecmascript)");
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
const pluginSmartBlock = (config = {})=>{
    return {
        config: {
            ...config,
            type: "smartBlock"
        },
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_BLOCK_TYPE"],
        pmMarkConverters: [],
        pmNodeConverters: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$smart$2d$block$2d$converter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartBlockConverter"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$smart$2d$block$2d$cell$2d$converter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartBlockCellConverter"]
        ],
        tiptapExtensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$tiptap$2f$smart$2d$block$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartBlockExtension"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$tiptap$2f$smart$2d$block$2d$cell$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartBlockCellExtension"]
        ],
        toolbar: {
            names: [
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$ricos$2d$plugin$2d$toolbar$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosPluginToolbarNames"].SMART_BLOCK,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$ricos$2d$plugin$2d$toolbar$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosPluginToolbarNames"].SMART_BLOCK_CELL
            ],
            isVisible: isToolbarVisible,
            getButtons: (config2, services)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$get$2d$toolbar$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToolbarButtons"])(config2, services),
            resolveReferenceElement: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolve$2d$smart$2d$block$2d$reference$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSmartBlockReferenceElement"]
        },
        getAddButtons: (config2, services)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$get$2d$add$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddButtons"])(config2, services),
        getQuickActions: ({ pluginServices, config: config2 })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$get$2d$quick$2d$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQuickActions"])(config2, pluginServices)
    };
};
const isToolbarVisible = (selection)=>{
    if ("node" in selection && selection.node?.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].SMART_BLOCK) {
        return true;
    }
    if ("node" in selection && selection.node?.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].SMART_BLOCK_CELL) {
        return true;
    }
    if ("node" in selection) {
        return false;
    }
    const closestContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, (node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].SMART_BLOCK || node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_COLLAPSIBLE_LIST_TYPE"]);
    return closestContainer?.node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].SMART_BLOCK;
};
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$viewer$2d$styles$2d$inject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectCss"])();
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/editor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pluginSmartBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$editor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pluginSmartBlock"],
    "resolveSmartBlockReferenceElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolve$2d$smart$2d$block$2d$reference$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSmartBlockReferenceElement"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$editor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/editor.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$smart$2d$block$2f$toolbar$2f$resolve$2d$smart$2d$block$2d$reference$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-smart-block/toolbar/resolve-smart-block-reference-element.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=0uxm_%40wix_ricos_dist_es_plugin-smart-block_08lgyqo._.js.map