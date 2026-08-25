(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DATA_CELL_SELECTED",
    ()=>DATA_CELL_SELECTED,
    "INSERT_TABLE_BUTTON",
    ()=>INSERT_TABLE_BUTTON,
    "INSERT_TABLE_MODAL",
    ()=>INSERT_TABLE_MODAL,
    "INSERT_TABLE_MODAL_ADD_BUTTON",
    ()=>INSERT_TABLE_MODAL_ADD_BUTTON,
    "INSERT_TABLE_MODAL_COLUMNS_INPUT",
    ()=>INSERT_TABLE_MODAL_COLUMNS_INPUT,
    "INSERT_TABLE_MODAL_ERROR_MESSAGE",
    ()=>INSERT_TABLE_MODAL_ERROR_MESSAGE,
    "INSERT_TABLE_MODAL_FOOTER_ACTIONS",
    ()=>INSERT_TABLE_MODAL_FOOTER_ACTIONS,
    "INSERT_TABLE_MODAL_GRID_SELECTOR",
    ()=>INSERT_TABLE_MODAL_GRID_SELECTOR,
    "INSERT_TABLE_MODAL_ROWS_INPUT",
    ()=>INSERT_TABLE_MODAL_ROWS_INPUT,
    "PLUGIN_TOOLBAR_ADD_ROW_COL_BUTTON",
    ()=>PLUGIN_TOOLBAR_ADD_ROW_COL_BUTTON,
    "PLUGIN_TOOLBAR_BACKGROUND_COLOR_BUTTON",
    ()=>PLUGIN_TOOLBAR_BACKGROUND_COLOR_BUTTON,
    "PLUGIN_TOOLBAR_BORDER_COLOR_BUTTON",
    ()=>PLUGIN_TOOLBAR_BORDER_COLOR_BUTTON,
    "PLUGIN_TOOLBAR_BORDER_WIDTH_BUTTON",
    ()=>PLUGIN_TOOLBAR_BORDER_WIDTH_BUTTON,
    "PLUGIN_TOOLBAR_COLUMN_HEADER_BUTTON",
    ()=>PLUGIN_TOOLBAR_COLUMN_HEADER_BUTTON,
    "PLUGIN_TOOLBAR_CONTEXT_MENU_BUTTON",
    ()=>PLUGIN_TOOLBAR_CONTEXT_MENU_BUTTON,
    "PLUGIN_TOOLBAR_MERGE_CELLS_BUTTON",
    ()=>PLUGIN_TOOLBAR_MERGE_CELLS_BUTTON,
    "PLUGIN_TOOLBAR_MOVE_COLUMN_LEFT_BUTTON",
    ()=>PLUGIN_TOOLBAR_MOVE_COLUMN_LEFT_BUTTON,
    "PLUGIN_TOOLBAR_MOVE_COLUMN_RIGHT_BUTTON",
    ()=>PLUGIN_TOOLBAR_MOVE_COLUMN_RIGHT_BUTTON,
    "PLUGIN_TOOLBAR_MOVE_ROW_DOWN_BUTTON",
    ()=>PLUGIN_TOOLBAR_MOVE_ROW_DOWN_BUTTON,
    "PLUGIN_TOOLBAR_MOVE_ROW_UP_BUTTON",
    ()=>PLUGIN_TOOLBAR_MOVE_ROW_UP_BUTTON,
    "PLUGIN_TOOLBAR_ROW_HEADER_BUTTON",
    ()=>PLUGIN_TOOLBAR_ROW_HEADER_BUTTON,
    "PLUGIN_TOOLBAR_SPACING_BUTTON",
    ()=>PLUGIN_TOOLBAR_SPACING_BUTTON,
    "PLUGIN_TOOLBAR_SPLIT_CELL_BUTTON",
    ()=>PLUGIN_TOOLBAR_SPLIT_CELL_BUTTON,
    "PLUGIN_TOOLBAR_TEXT_ALIGNMENT_BUTTON",
    ()=>PLUGIN_TOOLBAR_TEXT_ALIGNMENT_BUTTON,
    "PLUGIN_TOOLBAR_VERTICAL_ALIGNMENT_BUTTON",
    ()=>PLUGIN_TOOLBAR_VERTICAL_ALIGNMENT_BUTTON,
    "ROOT",
    ()=>ROOT,
    "TABLE_ADD_COL_BUTTON",
    ()=>TABLE_ADD_COL_BUTTON,
    "TABLE_ADD_ROW_BUTTON",
    ()=>TABLE_ADD_ROW_BUTTON,
    "TABLE_BORDER_COLOR_INPUT",
    ()=>TABLE_BORDER_COLOR_INPUT,
    "TABLE_BORDER_COLOR_PICKER",
    ()=>TABLE_BORDER_COLOR_PICKER,
    "TABLE_BORDER_MODAL",
    ()=>TABLE_BORDER_MODAL,
    "TABLE_BORDER_WIDTH_INPUT",
    ()=>TABLE_BORDER_WIDTH_INPUT,
    "TABLE_BORDER_WIDTH_MODAL",
    ()=>TABLE_BORDER_WIDTH_MODAL,
    "TABLE_BORDER_WIDTH_SLIDER_COMPONENT",
    ()=>TABLE_BORDER_WIDTH_SLIDER_COMPONENT,
    "TABLE_CELL_PADDING_BOTTOM",
    ()=>TABLE_CELL_PADDING_BOTTOM,
    "TABLE_CELL_PADDING_HORIZONTAL",
    ()=>TABLE_CELL_PADDING_HORIZONTAL,
    "TABLE_CELL_PADDING_INPUT",
    ()=>TABLE_CELL_PADDING_INPUT,
    "TABLE_CELL_PADDING_LEFT",
    ()=>TABLE_CELL_PADDING_LEFT,
    "TABLE_CELL_PADDING_RIGHT",
    ()=>TABLE_CELL_PADDING_RIGHT,
    "TABLE_CELL_PADDING_TOGGLE_INDIVIDUAL",
    ()=>TABLE_CELL_PADDING_TOGGLE_INDIVIDUAL,
    "TABLE_CELL_PADDING_TOP",
    ()=>TABLE_CELL_PADDING_TOP,
    "TABLE_CELL_PADDING_VERTICAL",
    ()=>TABLE_CELL_PADDING_VERTICAL,
    "TABLE_CELL_SPACING_INPUT",
    ()=>TABLE_CELL_SPACING_INPUT,
    "TABLE_COLUMN_HANDLE",
    ()=>TABLE_COLUMN_HANDLE,
    "TABLE_PLUGIN_CELL",
    ()=>TABLE_PLUGIN_CELL,
    "TABLE_ROW_HANDLE",
    ()=>TABLE_ROW_HANDLE,
    "TABLE_SELECTOR",
    ()=>TABLE_SELECTOR
]);
const ROOT = "table-component";
const INSERT_TABLE_BUTTON = "insert-table-button";
const INSERT_TABLE_MODAL = "insert-table-modal";
const INSERT_TABLE_MODAL_ROWS_INPUT = "insert-table-modal-row-count";
const INSERT_TABLE_MODAL_COLUMNS_INPUT = "insert-table-modal-column-count";
const INSERT_TABLE_MODAL_ERROR_MESSAGE = "insert-table-modal-error-message";
const INSERT_TABLE_MODAL_FOOTER_ACTIONS = "insert-table-modal-footer-actions";
const INSERT_TABLE_MODAL_ADD_BUTTON = "insert-table-modal-add-button";
const INSERT_TABLE_MODAL_GRID_SELECTOR = "insert-table-modal-grid-selector";
const TABLE_PLUGIN_CELL = "table-plugin-cell";
const PLUGIN_TOOLBAR_VERTICAL_ALIGNMENT_BUTTON = "plugin-toolbar-vertical-alignment-button";
const PLUGIN_TOOLBAR_BACKGROUND_COLOR_BUTTON = "plugin-toolbar-background-color-button";
const PLUGIN_TOOLBAR_BORDER_COLOR_BUTTON = "plugin-toolbar-border-color-button";
const PLUGIN_TOOLBAR_BORDER_WIDTH_BUTTON = "plugin-toolbar-border-width-button";
const PLUGIN_TOOLBAR_CONTEXT_MENU_BUTTON = "plugin-toolbar-context-menu-button";
const PLUGIN_TOOLBAR_ROW_HEADER_BUTTON = "plugin-toolbar-row-header-button";
const PLUGIN_TOOLBAR_COLUMN_HEADER_BUTTON = "plugin-toolbar-column-header-button";
const PLUGIN_TOOLBAR_MERGE_CELLS_BUTTON = "plugin-toolbar-merge-cells-button";
const PLUGIN_TOOLBAR_SPLIT_CELL_BUTTON = "plugin-toolbar-split-cell-button";
const PLUGIN_TOOLBAR_TEXT_ALIGNMENT_BUTTON = "plugin-toolbar-text-alignment-button";
const PLUGIN_TOOLBAR_ADD_ROW_COL_BUTTON = "plugin-toolbar-add-row-col-button";
const PLUGIN_TOOLBAR_SPACING_BUTTON = "plugin-toolbar-spacing-button";
const PLUGIN_TOOLBAR_MOVE_COLUMN_LEFT_BUTTON = "plugin-toolbar-move-column-left-button";
const PLUGIN_TOOLBAR_MOVE_COLUMN_RIGHT_BUTTON = "plugin-toolbar-move-column-right-button";
const PLUGIN_TOOLBAR_MOVE_ROW_UP_BUTTON = "plugin-toolbar-move-row-up-button";
const PLUGIN_TOOLBAR_MOVE_ROW_DOWN_BUTTON = "plugin-toolbar-move-row-down-button";
const TABLE_BORDER_WIDTH_MODAL = "table-border-width-modal";
const TABLE_BORDER_WIDTH_SLIDER_COMPONENT = "table-border-width-slider";
const TABLE_BORDER_WIDTH_INPUT = "table-border-width-input";
const TABLE_BORDER_COLOR_INPUT = "table-border-color-input";
const TABLE_BORDER_COLOR_PICKER = "table-border-color-picker";
const TABLE_CELL_SPACING_INPUT = "table-cell-spacing-input";
const TABLE_CELL_PADDING_INPUT = "table-cell-padding-input";
const TABLE_CELL_PADDING_TOGGLE_INDIVIDUAL = "table-cell-padding-toggle-individual";
const TABLE_CELL_PADDING_TOP = "table-cell-padding-top";
const TABLE_CELL_PADDING_RIGHT = "table-cell-padding-right";
const TABLE_CELL_PADDING_BOTTOM = "table-cell-padding-bottom";
const TABLE_CELL_PADDING_LEFT = "table-cell-padding-left";
const TABLE_CELL_PADDING_HORIZONTAL = "table-cell-padding-horizontal";
const TABLE_CELL_PADDING_VERTICAL = "table-cell-padding-vertical";
const TABLE_BORDER_MODAL = "table-border-modal";
const TABLE_COLUMN_HANDLE = "column-handle";
const TABLE_ROW_HANDLE = "row-handle";
const TABLE_ADD_ROW_BUTTON = "addRow";
const TABLE_ADD_COL_BUTTON = "addCol";
const TABLE_SELECTOR = "table-selector";
const DATA_CELL_SELECTED = "data-cell-selected";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BORDER_TYPES",
    ()=>BORDER_TYPES,
    "CATEGORY",
    ()=>CATEGORY,
    "CELL_AUTO_MIN_WIDTH",
    ()=>CELL_AUTO_MIN_WIDTH,
    "CELL_MANUAL_MIN_WIDTH",
    ()=>CELL_MANUAL_MIN_WIDTH,
    "LOCATION",
    ()=>LOCATION,
    "RESIZE_HANDLE_SIZE",
    ()=>RESIZE_HANDLE_SIZE,
    "ROW_DEFAULT_HEIGHT",
    ()=>ROW_DEFAULT_HEIGHT,
    "ROW_RESIZE_HANDLE_SIZE",
    ()=>ROW_RESIZE_HANDLE_SIZE,
    "SOURCE",
    ()=>SOURCE,
    "TABLE_BORDER_WIDTH_SLIDER",
    ()=>TABLE_BORDER_WIDTH_SLIDER,
    "TABLE_BUTTONS",
    ()=>TABLE_BUTTONS,
    "TABLE_BUTTONS_MODALS_ID",
    ()=>TABLE_BUTTONS_MODALS_ID,
    "TABLE_COLOR_PICKER",
    ()=>TABLE_COLOR_PICKER,
    "TABLE_COMMANDS_KEYS",
    ()=>TABLE_COMMANDS_KEYS,
    "TABLE_SPACING_MODAL",
    ()=>TABLE_SPACING_MODAL,
    "VIEWER_CONTAINER_PADDING_Y",
    ()=>VIEWER_CONTAINER_PADDING_Y,
    "resolveDefaultBorderColor",
    ()=>resolveDefaultBorderColor,
    "resolveDisplayedBorderColor",
    ()=>resolveDisplayedBorderColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
;
const SOURCE = {
    KEYBOARD_SHORTCUT: "keyboard shortcut",
    PLUS_BUTTON: "plus button",
    CONTEXT_MENU: "context menu"
};
const LOCATION = {
    RIGHT: "right",
    LEFT: "left",
    ABOVE: "above",
    BELOW: "below"
};
const CATEGORY = {
    COLUMN: "column",
    ROW: "row",
    ENTIRE_TABLE: "entire table",
    CELL_BORDER: "cell border",
    ROW_HEADER: "row header",
    COLUMN_HEADER: "column header",
    CELL_FORMATTING: "cell formatting",
    RANGE: "range",
    ROW_RANGE: "row range",
    COLUMN_RANGE: "column range"
};
const CELL_MANUAL_MIN_WIDTH = 65;
const CELL_AUTO_MIN_WIDTH = 120;
const ROW_DEFAULT_HEIGHT = 47;
const RESIZE_HANDLE_SIZE = 5;
const ROW_RESIZE_HANDLE_SIZE = 8;
const VIEWER_CONTAINER_PADDING_Y = 24;
const TABLE_BUTTONS = {
    FORMATTING: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.formatting`,
    VERTICAL_ALIGNMENT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.verticalAlignment`,
    INSERT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.insert`,
    TEXT_ALIGNMENT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.textAlignment`,
    BACKGROUND_COLOR: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.backgroundColor`,
    ROW_HEADER: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.rowHeader`,
    COLUMN_HEADER: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.columnHeader`,
    BORDER: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.border`,
    BORDER_WIDTH: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.borderWidth`,
    CONTEXT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.contextMenu`,
    MERGE_CELLS: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.mergeCells`,
    SPLIT_CELL: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.splitCell`,
    SPACING: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.spacing`,
    MOVE_COLUMN_LEFT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.moveColumnLeft`,
    MOVE_COLUMN_RIGHT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.moveColumnRight`,
    MOVE_ROW_UP: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.moveRowUp`,
    MOVE_ROW_DOWN: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.moveRowDown`
};
const TABLE_BUTTONS_MODALS_ID = {
    BORDER: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.border`,
    BORDER_WIDTH: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.borderWidth`,
    VERTICAL_ALIGNMENT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.verticalAlignment`,
    INSERT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.insert`,
    TEXT_ALIGNMENT: "TextAlignment.modal",
    CONTEXT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.contextMenu`,
    SPACING: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.spacing`
};
const TABLE_COMMANDS_KEYS = {
    CLEAR: "clearCell",
    DELETE_TABLE: "deleteTable",
    DELETE_ROW: "deleteRow",
    DELETE_COLUMN: "deleteColumn",
    INSERT_ABOVE: "addRowBefore",
    INSERT_BELOW: "addRowAfter",
    INSERT_LEFT: "addColumnBefore",
    INSERT_RIGHT: "addColumnAfter",
    MERGE_CELLS: "mergeCells",
    SPLIT_CELL: "splitCell",
    DISTRIBUTE_ROWS: "distributeRows",
    DISTRIBUTE_COLUMNS: "distributeColumns",
    SELECT_ROWS: "selectRow",
    SELECT_COLUMNS: "selectColumn"
};
const TABLE_COLOR_PICKER = "table-colorPicker";
const TABLE_BORDER_WIDTH_SLIDER = "table-borderWidthSlider";
const TABLE_SPACING_MODAL = "table-spacing-modal";
const BORDER_TYPES = {
    borders: "borders",
    outsideBorders: "outsideBorders",
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
    inner: "inner",
    innerHorizontal: "innerHorizontal",
    innerVertical: "innerVertical"
};
const DEFAULT_BORDER_COLOR_VARIABLE = "var(--ricos-internal-table-border-color)";
const DEFAULT_BORDER_COLOR_FALLBACK = "#D3D3D3";
const resolveDisplayedBorderColor = (color, defaultBorderColor)=>!color || color === DEFAULT_BORDER_COLOR_VARIABLE ? defaultBorderColor : color;
const resolveDefaultBorderColor = (editorDom)=>{
    const tableContainer = editorDom.querySelector("[data-table-container]");
    if (!tableContainer) {
        return DEFAULT_BORDER_COLOR_FALLBACK;
    }
    const resolved = getComputedStyle(tableContainer).getPropertyValue("--ricos-internal-table-border-color").trim();
    return resolved || DEFAULT_BORDER_COLOR_FALLBACK;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/statics/styles/table-settings-modal-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>table_settings_modal_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "9cfee353";
const injectCss = ()=>{
    var css = `.hsUwc{--wds-form-field-label-gap-small:9px}`;
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
var table_settings_modal_default = {
    "pickerField": "hsUwc"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/statics/styles/resizer-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>resizer_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "2bc983fc";
const injectCss = ()=>{
    var css = `.f8RLr{position:absolute;z-index:2000}.f8RLr.SU6Ge{cursor:col-resize;height:20px;right:0;top:0;width:5px}.f8RLr.SU6Ge:hover{border-right:1px solid var(--ricos-settings-action-color,var(--ricos-action-color,#116dff))}.f8RLr.MIF8x{bottom:0;left:0}.f8RLr.MIF8x:not(.srDNn){cursor:row-resize;height:5px;width:20px}.f8RLr.MIF8x:not(.srDNn):hover{border-bottom:1px solid var(--ricos-settings-action-color,var(--ricos-action-color,#116dff))}@keyframes Okdwu{0%{opacity:0}to{opacity:1}}.rpa7H{overflow:visible;pointer-events:none;z-index:2000}.QAULL,.rpa7H{position:absolute}.QAULL{cursor:col-resize;pointer-events:auto}.QAULL:before{background-color:var(--ricos-settings-action-color,var(--ricos-action-color,#116dff));bottom:0;content:"";left:50%;margin-left:-1.5px;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .15s ease-in-out;width:3px}.QAULL._21hC0:before,.QAULL.io4WX:before,.QAULL:hover:before{opacity:1}.QAULL.io4WX:before{transition:none}.QAULL[data-table-edge=right]:before{left:auto;margin-left:0;right:0}.sbZj8{cursor:row-resize;pointer-events:auto;position:absolute}.sbZj8:before{background-color:var(--ricos-settings-action-color,var(--ricos-action-color,#116dff));content:"";height:3px;left:0;margin-top:-1.5px;opacity:0;pointer-events:none;position:absolute;right:0;top:50%;transition:opacity .15s ease-in-out}.sbZj8._21hC0:before,.sbZj8.io4WX:before,.sbZj8:hover:before{opacity:1}.sbZj8.io4WX:before{transition:none}.sbZj8[data-table-edge=bottom]:before{bottom:0;margin-top:0;top:auto}.kRdO5{bottom:calc(var(--ricos-internal-table-gap, 2px)*-.5);right:calc(-2px - var(--ricos-internal-table-gap, 0px)*.5);top:calc(var(--ricos-internal-table-gap, 2px)*-.5);width:3px}._54cal,.kRdO5{animation:Okdwu .15s ease-in-out;background-color:var(--ricos-settings-action-color,var(--ricos-action-color,#116dff));pointer-events:none;position:absolute;z-index:2000}._54cal{bottom:calc(-2px - var(--ricos-internal-table-gap, 0px)*.5);height:3px;left:calc(var(--ricos-internal-table-gap, 2px)*-.5);right:calc(var(--ricos-internal-table-gap, 2px)*-.5)}.hOY-F tr{height:auto!important}.Q1sKd,.Q1sKd *,.dD8Fo,.dD8Fo *{cursor:grabbing!important}._4l0lt{bottom:0;top:0;transform:translateX(-50%);width:3px}._4l0lt,.apJ1D{background-color:var(--ricos-settings-action-color,var(--ricos-action-color,#116dff));border-radius:2px;pointer-events:none;position:absolute;z-index:2100}.apJ1D{height:3px;left:0;right:0;transform:translateY(-50%)}.uWQqv{background-color:rgba(17,109,255,.15);border:2px solid var(--ricos-settings-action-color,var(--ricos-action-color,#116dff));border-radius:4px;box-sizing:border-box;pointer-events:none;z-index:2050}`;
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
var resizer_default = {
    "resizer": "f8RLr",
    "horizonResizer": "SU6Ge",
    "verticalResizer": "MIF8x",
    "highlightOnly": "srDNn",
    "resizeOverlay": "rpa7H",
    "columnResizeHitZone": "QAULL",
    "peerHovered": "_21hC0",
    "active": "io4WX",
    "rowResizeHitZone": "sbZj8",
    "columnResizeHandle": "kRdO5",
    "resizeHandleFadeIn": "Okdwu",
    "rowResizeHandle": "_54cal",
    "measuringRowHeight": "hOY-F",
    "reorderCursorCol": "Q1sKd",
    "reorderCursorRow": "dD8Fo",
    "columnDropIndicator": "_4l0lt",
    "rowDropIndicator": "apJ1D",
    "dragGhost": "uWQqv"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INSERT_TABLE_MODAL_ID",
    ()=>INSERT_TABLE_MODAL_ID,
    "TABLE_TYPE",
    ()=>TABLE_TYPE
]);
const TABLE_TYPE = "wix-rich-content-plugin-table";
const INSERT_TABLE_MODAL_ID = "TABLE.insert";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/table-util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultsSettings",
    ()=>getDefaultsSettings,
    "isCellsNumberInvalid",
    ()=>isCellsNumberInvalid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/types.js [app-client] (ecmascript)");
;
;
const createEmptyCellEditor = ()=>{};
const createEmptyCell = ()=>({
        content: createEmptyCellEditor()
    });
const createEmptyRow = (colNum)=>{
    const columnsIndexes = [
        ...Array(colNum).fill(0)
    ].map((value, i)=>i);
    const emptyRow = {
        columns: {}
    };
    columnsIndexes.forEach((i)=>emptyRow.columns[i] = createEmptyCell());
    return emptyRow;
};
const createEmptyRows = (rowNum, colNum)=>{
    const rows = {};
    [
        ...Array(rowNum).fill(0)
    ].map((row, i)=>rows[i] = createEmptyRow(colNum));
    return rows;
};
const getDefaultsSettings = (rowNum = 4, colNum = 4)=>Object.freeze({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
        config: {
            colsWidth: [
                ...Array(colNum).fill(10)
            ],
            rowsHeight: [
                ...Array(rowNum).fill(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_DEFAULT_HEIGHT"])
            ],
            colsMinWidth: [
                ...Array(colNum).fill(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_AUTO_MIN_WIDTH"])
            ],
            rows: createEmptyRows(rowNum, colNum)
        }
    });
const isCellsNumberInvalid = (rowNum, colNum)=>rowNum * colNum > 100;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/get-add-buttons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAddButtons",
    ()=>getAddButtons,
    "toolbarsToAddIn",
    ()=>toolbarsToAddIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DataCollection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DataCollection$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/DataCollection.js [app-client] (ecmascript) <export default as DataCollection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/editor-common/consts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/toolbar-enums.js [app-client] (ecmascript) <export ToolbarType as TOOLBARS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$modals$2f$insert$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/modals/insert-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/types.js [app-client] (ecmascript)");
;
;
;
;
;
;
const toolbarsToAddIn = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__["TOOLBARS"].FOOTER,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__["TOOLBARS"].SIDE,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__["TOOLBARS"].MOBILE
];
const getAddButtons = (_, services)=>{
    const { modals, context: { isMobile } } = services;
    return [
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE,
            label: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["INSERT_PLUGIN_BUTTONS"].TABLE,
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_TABLE_BUTTON"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DataCollection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DataCollection$3e$__["DataCollection"],
            tooltip: "TablePlugin_InsertButton_Tooltip",
            toolbars: [
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__["TOOLBARS"].MOBILE,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__["TOOLBARS"].FOOTER,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__["TOOLBARS"].SIDE
            ],
            command: ({ referenceElement })=>{
                modals?.togglePluginPanel({
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_TABLE_MODAL_ID"],
                    Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$modals$2f$insert$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertModal"],
                    componentProps: {},
                    isMobile,
                    initialFocus: `[data-hook="${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_TABLE_MODAL_ADD_BUTTON"]}"]`,
                    positioning: {
                        referenceElement,
                        placement: "bottom"
                    },
                    mobileLayout: "drawer"
                });
                return true;
            },
            menuConfig: {
                tags: "Table_plugin_search_tags",
                group: "advanced"
            }
        }
    ];
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/borders/resolve-cell-borders.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateBorderPadding",
    ()=>calculateBorderPadding,
    "getCornerOffset",
    ()=>getCornerOffset,
    "getDisplayedBorderOnSide",
    ()=>getDisplayedBorderOnSide,
    "resolveCellBorders",
    ()=>resolveCellBorders,
    "resolveCellBordersPm",
    ()=>resolveCellBordersPm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
;
;
const DEFAULT_COLOR = "var(--ricos-internal-table-border-color)";
const DEFAULT_WIDTH = 1;
const isTransparent = (color)=>!color || color === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPARENT_HEX_COLOR"];
const getCornerOffset = ({ thisZ, perpZ, parallelZ, extAmount, isHorizontal, isStartCorner })=>{
    if (extAmount === 0) {
        return 0;
    }
    if (parallelZ > 0) {
        if (parallelZ > thisZ) {
            return extAmount;
        } else if (parallelZ === thisZ) {
            if (perpZ > thisZ) {
                return extAmount;
            }
            return isStartCorner ? -extAmount : extAmount;
        }
    }
    if (thisZ > perpZ) {
        return -extAmount;
    } else if (thisZ < perpZ) {
        return extAmount;
    } else {
        return isHorizontal ? -extAmount : extAmount;
    }
};
function resolveCandidates(a, b) {
    if (!a && !b) {
        return null;
    }
    if (a && !b) {
        return a;
    }
    if (b && !a) {
        return b;
    }
    const ca = a;
    const cb = b;
    const aTransparent = isTransparent(ca.color);
    const bTransparent = isTransparent(cb.color);
    const aWidth = ca.width ?? 0;
    const bWidth = cb.width ?? 0;
    const aAbsent = aTransparent || aWidth === 0;
    const bAbsent = bTransparent || bWidth === 0;
    if (aTransparent && ca.isExplicit && !cb.isExplicit) {
        return ca;
    }
    if (bTransparent && cb.isExplicit && !ca.isExplicit) {
        return cb;
    }
    if (aAbsent && !bAbsent) {
        return cb;
    }
    if (!aAbsent && bAbsent) {
        return ca;
    }
    if (aAbsent && bAbsent) {
        return null;
    }
    if (aWidth !== bWidth) {
        return aWidth > bWidth ? ca : cb;
    }
    if (ca.isExplicit && !cb.isExplicit) {
        return ca;
    }
    if (!ca.isExplicit && cb.isExplicit) {
        return cb;
    }
    if (ca.spanSpecificity !== cb.spanSpecificity) {
        return ca.spanSpecificity < cb.spanSpecificity ? ca : cb;
    }
    const aPref = ca.side === "top" || ca.side === "left";
    const bPref = cb.side === "top" || cb.side === "left";
    if (aPref !== bPref) {
        return aPref ? ca : cb;
    }
    return ca.cellRef < cb.cellRef ? ca : cb;
}
function buildCellGrid(tableNode) {
    const rows = tableNode.nodes || [];
    const height = rows.length;
    if (height === 0) {
        return {
            cells: [],
            width: 0,
            height: 0,
            cellAt: ()=>null
        };
    }
    const gridInput = rows.map((row)=>(row.nodes || []).map((cell)=>({
                colspan: cell.tableCellData?.colspan ?? 1,
                rowspan: cell.tableCellData?.rowspan ?? 1
            })));
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].fromGrid(gridInput);
    const cells = [];
    let cellIndex = 0;
    for (const rowNode of rows){
        for (const cellNode of rowNode.nodes || []){
            const placement = map.findCell(cellIndex);
            cells.push({
                ref: cellNode.id || `${placement.row}-${placement.col}`,
                row: placement.row,
                col: placement.col,
                rowspan: placement.rowspan,
                colspan: placement.colspan,
                colors: cellNode.tableCellData?.borderColors || {},
                widths: cellNode.tableCellData?.borderWidths || {}
            });
            cellIndex++;
        }
    }
    const cellAt = (row, col)=>{
        if (row < 0 || row >= map.height || col < 0 || col >= map.width) {
            return null;
        }
        const idx = map.map[row * map.width + col];
        return cells[idx] ?? null;
    };
    return {
        cells,
        width: map.width,
        height: map.height,
        cellAt
    };
}
function createCandidate(cell, side, drawDefaultGrid, isHorizontal) {
    const colorKey = side;
    const widthKey = side;
    const color = cell.colors[colorKey] ?? (drawDefaultGrid ? DEFAULT_COLOR : "");
    const width = cell.widths[widthKey] ?? (drawDefaultGrid ? DEFAULT_WIDTH : 0);
    const spanSpecificity = isHorizontal ? cell.colspan : cell.rowspan;
    return {
        cellRef: cell.ref,
        side,
        color,
        width,
        spanSpecificity,
        isExplicit: cell.colors[colorKey] !== void 0 || cell.widths[widthKey] !== void 0,
        zIndex: calculateZIndex(width, color, isHorizontal)
    };
}
function resolveHorizontalEdge(above, below, drawDefaultGrid) {
    const candA = above ? createCandidate(above, "bottom", drawDefaultGrid, true) : null;
    const candB = below ? createCandidate(below, "top", drawDefaultGrid, true) : null;
    return resolveCandidates(candA, candB);
}
function resolveVerticalEdge(left, right, drawDefaultGrid) {
    const candL = left ? createCandidate(left, "right", drawDefaultGrid, false) : null;
    const candR = right ? createCandidate(right, "left", drawDefaultGrid, false) : null;
    return resolveCandidates(candL, candR);
}
function calculateZIndex(width, color, isHorizontal) {
    const isExplicit = color !== DEFAULT_COLOR;
    return Math.round(width * 100) + (isExplicit ? 50 : 0) + (isHorizontal ? 1 : 0);
}
function makeBorder({ color, width, isHorizontal, extendStart, extendEnd, perpStartZ, perpEndZ, parallelStartZ, parallelEndZ }) {
    if (width <= 0 || isTransparent(color)) {
        return null;
    }
    return {
        color,
        width,
        zIndex: calculateZIndex(width, color, isHorizontal),
        extendStart,
        extendEnd,
        perpStartZ,
        perpEndZ,
        parallelStartZ,
        parallelEndZ
    };
}
function resolveCellBordersSpacingMode(cells, drawDefaultGrid) {
    const result = /* @__PURE__ */ new Map();
    const def = drawDefaultGrid;
    cells.forEach((cell)=>{
        const w = {
            top: cell.widths.top ?? (def ? DEFAULT_WIDTH : 0),
            bottom: cell.widths.bottom ?? (def ? DEFAULT_WIDTH : 0),
            left: cell.widths.left ?? (def ? DEFAULT_WIDTH : 0),
            right: cell.widths.right ?? (def ? DEFAULT_WIDTH : 0)
        };
        const c = {
            top: cell.colors.top ?? (def ? DEFAULT_COLOR : ""),
            bottom: cell.colors.bottom ?? (def ? DEFAULT_COLOR : ""),
            left: cell.colors.left ?? (def ? DEFAULT_COLOR : ""),
            right: cell.colors.right ?? (def ? DEFAULT_COLOR : "")
        };
        const leftZ = calculateZIndex(w.left, c.left, false);
        const rightZ = calculateZIndex(w.right, c.right, false);
        const topZ = calculateZIndex(w.top, c.top, true);
        const bottomZ = calculateZIndex(w.bottom, c.bottom, true);
        result.set(cell.ref, {
            top: makeBorder({
                color: c.top,
                width: w.top,
                isHorizontal: true,
                extendStart: w.left / 2,
                extendEnd: w.right / 2,
                perpStartZ: leftZ,
                perpEndZ: rightZ,
                parallelStartZ: 0,
                parallelEndZ: 0
            }),
            bottom: makeBorder({
                color: c.bottom,
                width: w.bottom,
                isHorizontal: true,
                extendStart: w.left / 2,
                extendEnd: w.right / 2,
                perpStartZ: leftZ,
                perpEndZ: rightZ,
                parallelStartZ: 0,
                parallelEndZ: 0
            }),
            left: makeBorder({
                color: c.left,
                width: w.left,
                isHorizontal: false,
                extendStart: w.top / 2,
                extendEnd: w.bottom / 2,
                perpStartZ: topZ,
                perpEndZ: bottomZ,
                parallelStartZ: 0,
                parallelEndZ: 0
            }),
            right: makeBorder({
                color: c.right,
                width: w.right,
                isHorizontal: false,
                extendStart: w.top / 2,
                extendEnd: w.bottom / 2,
                perpStartZ: topZ,
                perpEndZ: bottomZ,
                parallelStartZ: 0,
                parallelEndZ: 0
            })
        });
    });
    return result;
}
function resolveBordersFromGrid(cells, W, H, cellAt, drawDefaultGrid) {
    const result = /* @__PURE__ */ new Map();
    for (const cell of cells){
        result.set(cell.ref, {
            top: null,
            right: null,
            bottom: null,
            left: null
        });
    }
    const horizontalEdges = [];
    const verticalEdges = [];
    for(let er = 0; er <= H; er++){
        horizontalEdges[er] = new Array(W).fill(null);
    }
    for(let r = 0; r < H; r++){
        verticalEdges[r] = new Array(W + 1).fill(null);
    }
    for(let er = 0; er <= H; er++){
        for(let c = 0; c < W; c++){
            const above = er > 0 ? cellAt(er - 1, c) : null;
            const below = er < H ? cellAt(er, c) : null;
            if (above && below && above.ref === below.ref) {
                continue;
            }
            horizontalEdges[er][c] = resolveHorizontalEdge(above, below, drawDefaultGrid);
        }
    }
    for(let r = 0; r < H; r++){
        for(let ec = 0; ec <= W; ec++){
            const left = ec > 0 ? cellAt(r, ec - 1) : null;
            const right = ec < W ? cellAt(r, ec) : null;
            if (left && right && left.ref === right.ref) {
                continue;
            }
            verticalEdges[r][ec] = resolveVerticalEdge(left, right, drawDefaultGrid);
        }
    }
    const getVerticalBorderExtension = (edgeRow, edgeCol)=>{
        const above = edgeRow > 0 ? verticalEdges[edgeRow - 1]?.[edgeCol] : null;
        const below = edgeRow < H ? verticalEdges[edgeRow]?.[edgeCol] : null;
        const aboveWidth = above && !isTransparent(above.color) ? above.width : 0;
        const belowWidth = below && !isTransparent(below.color) ? below.width : 0;
        return Math.max(aboveWidth, belowWidth) / 2;
    };
    const getHorizontalBorderExtension = (edgeRow, edgeCol)=>{
        const left = edgeCol > 0 ? horizontalEdges[edgeRow]?.[edgeCol - 1] : null;
        const right = edgeCol < W ? horizontalEdges[edgeRow]?.[edgeCol] : null;
        const leftWidth = left && !isTransparent(left.color) ? left.width : 0;
        const rightWidth = right && !isTransparent(right.color) ? right.width : 0;
        return Math.max(leftWidth, rightWidth) / 2;
    };
    const getVerticalMaxZ = (edgeRow, edgeCol)=>{
        const vAbove = edgeRow > 0 ? verticalEdges[edgeRow - 1]?.[edgeCol] : null;
        const vBelow = edgeRow < H ? verticalEdges[edgeRow]?.[edgeCol] : null;
        const vAboveZ = vAbove && !isTransparent(vAbove.color) && vAbove.width > 0 ? vAbove.zIndex : 0;
        const vBelowZ = vBelow && !isTransparent(vBelow.color) && vBelow.width > 0 ? vBelow.zIndex : 0;
        return Math.max(vAboveZ, vBelowZ);
    };
    const getHorizontalMaxZ = (edgeRow, edgeCol)=>{
        const hLeft = edgeCol > 0 ? horizontalEdges[edgeRow]?.[edgeCol - 1] : null;
        const hRight = edgeCol < W ? horizontalEdges[edgeRow]?.[edgeCol] : null;
        const hLeftZ = hLeft && !isTransparent(hLeft.color) && hLeft.width > 0 ? hLeft.zIndex : 0;
        const hRightZ = hRight && !isTransparent(hRight.color) && hRight.width > 0 ? hRight.zIndex : 0;
        return Math.max(hLeftZ, hRightZ);
    };
    const getAdjacentHorizontalZ = (row, col, atLeftCorner)=>{
        const adjacent = atLeftCorner ? col > 0 ? horizontalEdges[row]?.[col - 1] : null : col < W ? horizontalEdges[row]?.[col] : null;
        return adjacent && !isTransparent(adjacent.color) && adjacent.width > 0 ? adjacent.zIndex : 0;
    };
    const getAdjacentVerticalZ = (row, col, atTopCorner)=>{
        const adjacent = atTopCorner ? row > 0 ? verticalEdges[row - 1]?.[col] : null : row < H ? verticalEdges[row]?.[col] : null;
        return adjacent && !isTransparent(adjacent.color) && adjacent.width > 0 ? adjacent.zIndex : 0;
    };
    const findHorizontalEdgeWinner = (edgeRow, startCol, colSpan, cellRef)=>{
        for(let c = startCol; c < startCol + colSpan; c++){
            const edge = horizontalEdges[edgeRow]?.[c];
            if (edge && edge.cellRef === cellRef && !isTransparent(edge.color) && edge.width > 0) {
                return edge;
            }
        }
        return null;
    };
    const findVerticalEdgeWinner = (edgeCol, startRow, rowSpan, cellRef)=>{
        for(let r = startRow; r < startRow + rowSpan; r++){
            const edge = verticalEdges[r]?.[edgeCol];
            if (edge && edge.cellRef === cellRef && !isTransparent(edge.color) && edge.width > 0) {
                return edge;
            }
        }
        return null;
    };
    for (const cell of cells){
        const borders = result.get(cell.ref);
        const { row, col, rowspan, colspan } = cell;
        const topEdge = findHorizontalEdgeWinner(row, col, colspan, cell.ref);
        if (topEdge) {
            borders.top = makeBorder({
                color: topEdge.color,
                width: topEdge.width,
                isHorizontal: true,
                extendStart: getVerticalBorderExtension(row, col),
                extendEnd: getVerticalBorderExtension(row, col + colspan),
                perpStartZ: getVerticalMaxZ(row, col),
                perpEndZ: getVerticalMaxZ(row, col + colspan),
                parallelStartZ: getAdjacentHorizontalZ(row, col, true),
                parallelEndZ: getAdjacentHorizontalZ(row, col + colspan, false)
            });
        }
        const bottomEdge = findHorizontalEdgeWinner(row + rowspan, col, colspan, cell.ref);
        if (bottomEdge) {
            borders.bottom = makeBorder({
                color: bottomEdge.color,
                width: bottomEdge.width,
                isHorizontal: true,
                extendStart: getVerticalBorderExtension(row + rowspan, col),
                extendEnd: getVerticalBorderExtension(row + rowspan, col + colspan),
                perpStartZ: getVerticalMaxZ(row + rowspan, col),
                perpEndZ: getVerticalMaxZ(row + rowspan, col + colspan),
                parallelStartZ: getAdjacentHorizontalZ(row + rowspan, col, true),
                parallelEndZ: getAdjacentHorizontalZ(row + rowspan, col + colspan, false)
            });
        }
        const leftEdge = findVerticalEdgeWinner(col, row, rowspan, cell.ref);
        if (leftEdge) {
            borders.left = makeBorder({
                color: leftEdge.color,
                width: leftEdge.width,
                isHorizontal: false,
                extendStart: getHorizontalBorderExtension(row, col),
                extendEnd: getHorizontalBorderExtension(row + rowspan, col),
                perpStartZ: getHorizontalMaxZ(row, col),
                perpEndZ: getHorizontalMaxZ(row + rowspan, col),
                parallelStartZ: getAdjacentVerticalZ(row, col, true),
                parallelEndZ: getAdjacentVerticalZ(row + rowspan, col, false)
            });
        }
        const rightEdge = findVerticalEdgeWinner(col + colspan, row, rowspan, cell.ref);
        if (rightEdge) {
            borders.right = makeBorder({
                color: rightEdge.color,
                width: rightEdge.width,
                isHorizontal: false,
                extendStart: getHorizontalBorderExtension(row, col + colspan),
                extendEnd: getHorizontalBorderExtension(row + rowspan, col + colspan),
                perpStartZ: getHorizontalMaxZ(row, col + colspan),
                perpEndZ: getHorizontalMaxZ(row + rowspan, col + colspan),
                parallelStartZ: getAdjacentVerticalZ(row, col + colspan, true),
                parallelEndZ: getAdjacentVerticalZ(row + rowspan, col + colspan, false)
            });
        }
    }
    return result;
}
function resolveCellBorders(tableNode, options = {}) {
    const { drawDefaultGrid = true, cellSpacing = 0 } = options;
    const { cells, width, height, cellAt } = buildCellGrid(tableNode);
    if (cellSpacing > 0) {
        return resolveCellBordersSpacingMode(cells, drawDefaultGrid);
    }
    return resolveBordersFromGrid(cells, width, height, cellAt, drawDefaultGrid);
}
function calculateBorderPadding(tableNode) {
    let maxStart = 1, maxEnd = 1, maxTop = 1, maxBottom = 1;
    if (tableNode.nodes) {
        const rows = tableNode.nodes;
        const firstRow = rows[0];
        const lastRow = rows[rows.length - 1];
        if (firstRow?.nodes) {
            for (const cell of firstRow.nodes){
                maxTop = Math.max(maxTop, cell.tableCellData?.borderWidths?.top ?? 1);
            }
        }
        if (lastRow?.nodes) {
            for (const cell of lastRow.nodes){
                maxBottom = Math.max(maxBottom, cell.tableCellData?.borderWidths?.bottom ?? 1);
            }
        }
        for (const row of rows){
            if (!row.nodes) {
                continue;
            }
            const firstCell = row.nodes[0];
            const lastCell = row.nodes[row.nodes.length - 1];
            if (firstCell) {
                maxStart = Math.max(maxStart, firstCell.tableCellData?.borderWidths?.left ?? 1);
            }
            if (lastCell) {
                maxEnd = Math.max(maxEnd, lastCell.tableCellData?.borderWidths?.right ?? 1);
            }
        }
    }
    return {
        start: Math.ceil(maxStart / 2),
        end: Math.ceil(maxEnd / 2),
        top: Math.ceil(maxTop / 2),
        bottom: Math.ceil(maxBottom / 2)
    };
}
function buildCellGridPm(tableNode) {
    if (tableNode.childCount === 0) {
        return {
            cells: [],
            width: 0,
            height: 0,
            cellAt: ()=>null
        };
    }
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(tableNode);
    const cells = [];
    const cellsByPos = /* @__PURE__ */ new Map();
    map.forEachCell((cellPos, placement)=>{
        const cellNode = tableNode.nodeAt(cellPos);
        if (!cellNode || !cellNode.type.spec.tableRole) {
            return;
        }
        const info = {
            ref: cellNode.attrs.id || `${placement.row}-${placement.col}`,
            row: placement.row,
            col: placement.col,
            rowspan: placement.rowspan,
            colspan: placement.colspan,
            colors: cellNode.attrs.borderColors || {},
            widths: cellNode.attrs.borderWidths || {}
        };
        cells.push(info);
        cellsByPos.set(cellPos, info);
    });
    const cellAt = (row, col)=>{
        if (row < 0 || row >= map.height || col < 0 || col >= map.width) {
            return null;
        }
        return cellsByPos.get(map.map[row * map.width + col]) ?? null;
    };
    return {
        cells,
        width: map.width,
        height: map.height,
        cellAt
    };
}
function resolveCellBordersPm(tableNode, options = {}) {
    const { drawDefaultGrid = true, cellSpacing = 0 } = options;
    const { cells, width, height, cellAt } = buildCellGridPm(tableNode);
    if (cellSpacing > 0) {
        return resolveCellBordersSpacingMode(cells, drawDefaultGrid);
    }
    return resolveBordersFromGrid(cells, width, height, cellAt, drawDefaultGrid);
}
const OPPOSITE_BORDER_SIDE = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
};
function getDisplayedBorderOnSide(resolved, tableNode, cellId, cell, side) {
    const own = resolved.get(cellId)?.[side] ?? null;
    if (own) {
        return own;
    }
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(tableNode);
    const nRow = side === "top" ? cell.row - 1 : side === "bottom" ? cell.row + cell.rowspan : cell.row;
    const nCol = side === "left" ? cell.col - 1 : side === "right" ? cell.col + cell.colspan : cell.col;
    if (nRow < 0 || nRow >= map.height || nCol < 0 || nCol >= map.width) {
        return null;
    }
    const neighbour = tableNode.nodeAt(map.map[nRow * map.width + nCol]);
    const neighbourId = neighbour?.attrs.id;
    return neighbourId ? resolved.get(neighbourId)?.[OPPOSITE_BORDER_SIDE[side]] ?? null : null;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/borders/edge-detection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCellGrid",
    ()=>buildCellGrid,
    "computeHorizontalEdge",
    ()=>computeHorizontalEdge,
    "computeVerticalEdge",
    ()=>computeVerticalEdge,
    "getAllSharedEdges",
    ()=>getAllSharedEdges,
    "getCanonicalCells",
    ()=>getCanonicalCells,
    "getCellAt",
    ()=>getCellAt,
    "getNonCanonicalCells",
    ()=>getNonCanonicalCells,
    "getOppositeSide",
    ()=>getOppositeSide,
    "groupOuterEdgeCells",
    ()=>groupOuterEdgeCells,
    "isCanonicalSide",
    ()=>isCanonicalSide,
    "isCellOuterEdge",
    ()=>isCellOuterEdge,
    "isExactCoverage",
    ()=>isExactCoverage
]);
function buildCellGrid(tableCells, tableWidth, tableHeight) {
    const grid = Array(tableHeight).fill(null).map(()=>Array(tableWidth).fill(null));
    for (const cell of tableCells){
        for(let r = cell.row; r < cell.row + cell.rowspan; r++){
            for(let c = cell.col; c < cell.col + cell.colspan; c++){
                if (r < tableHeight && c < tableWidth) {
                    grid[r][c] = cell;
                }
            }
        }
    }
    return grid;
}
function getCellAt(grid, row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0]?.length) {
        return null;
    }
    return grid[row][col] || null;
}
function collectUniqueCells(grid, indices, getCell, shouldInclude) {
    const cells = [];
    const seen = /* @__PURE__ */ new Set();
    for (const idx of indices){
        const cell = getCell(idx);
        if (cell && !seen.has(cell.pos) && shouldInclude(cell, idx)) {
            cells.push(cell);
            seen.add(cell.pos);
        }
    }
    return cells;
}
function computeHorizontalEdge(grid, rowEdgeIndex, colStart, colEnd, _side) {
    const tableHeight = grid.length;
    const tableWidth = grid[0]?.length || 0;
    const columns = Array.from({
        length: colEnd - colStart
    }, (_, i)=>colStart + i).filter((c)=>c < tableWidth);
    const aboveCells = rowEdgeIndex > 0 ? collectUniqueCells(grid, columns, (c)=>getCellAt(grid, rowEdgeIndex - 1, c), (cell, _)=>cell.row + cell.rowspan === rowEdgeIndex) : [];
    const belowCells = rowEdgeIndex < tableHeight ? collectUniqueCells(grid, columns, (c)=>getCellAt(grid, rowEdgeIndex, c), (cell, _)=>cell.row === rowEdgeIndex) : [];
    return {
        orientation: "horizontal",
        rowEdgeIndex,
        colRange: {
            start: colStart,
            end: colEnd
        },
        canonicalSide: "top",
        aboveCells,
        belowCells
    };
}
function computeVerticalEdge(grid, colEdgeIndex, rowStart, rowEnd, _side) {
    const tableHeight = grid.length;
    const tableWidth = grid[0]?.length || 0;
    const rows = Array.from({
        length: rowEnd - rowStart
    }, (_, i)=>rowStart + i).filter((r)=>r < tableHeight);
    const leftCells = colEdgeIndex > 0 ? collectUniqueCells(grid, rows, (r)=>getCellAt(grid, r, colEdgeIndex - 1), (cell, _)=>cell.col + cell.colspan === colEdgeIndex) : [];
    const rightCells = colEdgeIndex < tableWidth ? collectUniqueCells(grid, rows, (r)=>getCellAt(grid, r, colEdgeIndex), (cell, _)=>cell.col === colEdgeIndex) : [];
    return {
        orientation: "vertical",
        colEdgeIndex,
        rowRange: {
            start: rowStart,
            end: rowEnd
        },
        canonicalSide: "left",
        leftCells,
        rightCells
    };
}
function isExactCoverage(edge) {
    const canonicalCells = getCanonicalCells(edge);
    if (canonicalCells.length === 0) {
        return false;
    }
    const isHorizontal = edge.orientation === "horizontal";
    const { start: rangeStart, end: rangeEnd } = isHorizontal ? edge.colRange : edge.rowRange;
    let canonicalMin = Infinity;
    let canonicalMax = -Infinity;
    for (const cell of canonicalCells){
        const cellStart = isHorizontal ? cell.col : cell.row;
        const cellEnd = isHorizontal ? cell.col + cell.colspan : cell.row + cell.rowspan;
        canonicalMin = Math.min(canonicalMin, cellStart);
        canonicalMax = Math.max(canonicalMax, cellEnd);
    }
    if (canonicalMin !== rangeStart || canonicalMax !== rangeEnd) {
        return false;
    }
    const covered = new Array(rangeEnd - rangeStart).fill(false);
    for (const cell of canonicalCells){
        const cellStart = isHorizontal ? cell.col : cell.row;
        const cellEnd = isHorizontal ? cell.col + cell.colspan : cell.row + cell.rowspan;
        const clampedStart = Math.max(cellStart, rangeStart);
        const clampedEnd = Math.min(cellEnd, rangeEnd);
        for(let i = clampedStart; i < clampedEnd; i++){
            const idx = i - rangeStart;
            if (idx >= 0 && idx < covered.length) {
                covered[idx] = true;
            }
        }
    }
    return covered.every((c)=>c);
}
function getAllSharedEdges(grid, tableWidth, tableHeight) {
    const edges = [];
    for(let rowEdge = 1; rowEdge < tableHeight; rowEdge++){
        const edgeSegments = getHorizontalEdgeSegments(grid, rowEdge, tableWidth);
        for (const segment of edgeSegments){
            const edge = computeHorizontalEdge(grid, rowEdge, segment.start, segment.end, "top");
            if (edge.aboveCells.length > 0 && edge.belowCells.length > 0) {
                edges.push(edge);
            }
        }
    }
    for(let colEdge = 1; colEdge < tableWidth; colEdge++){
        const edgeSegments = getVerticalEdgeSegments(grid, colEdge, tableHeight);
        for (const segment of edgeSegments){
            const edge = computeVerticalEdge(grid, colEdge, segment.start, segment.end, "left");
            if (edge.leftCells.length > 0 && edge.rightCells.length > 0) {
                edges.push(edge);
            }
        }
    }
    return edges;
}
function getEdgeSegments(length, checkSharedEdge) {
    const segments = [];
    let segmentStart = 0;
    for(let i = 0; i < length; i++){
        if (!checkSharedEdge(i) && i > segmentStart) {
            segments.push({
                start: segmentStart,
                end: i
            });
            segmentStart = i;
        }
    }
    if (length > segmentStart) {
        segments.push({
            start: segmentStart,
            end: length
        });
    }
    return segments.filter((s)=>s.end > s.start);
}
function getHorizontalEdgeSegments(grid, rowEdgeIndex, tableWidth) {
    return getEdgeSegments(tableWidth, (c)=>{
        const cellAbove = rowEdgeIndex > 0 ? getCellAt(grid, rowEdgeIndex - 1, c) : null;
        const cellBelow = rowEdgeIndex < grid.length ? getCellAt(grid, rowEdgeIndex, c) : null;
        return !!(cellAbove && cellBelow && cellAbove.pos !== cellBelow.pos && cellAbove.row + cellAbove.rowspan === rowEdgeIndex && cellBelow.row === rowEdgeIndex);
    });
}
function getVerticalEdgeSegments(grid, colEdgeIndex, tableHeight) {
    return getEdgeSegments(tableHeight, (r)=>{
        const cellLeft = colEdgeIndex > 0 ? getCellAt(grid, r, colEdgeIndex - 1) : null;
        const cellRight = colEdgeIndex < (grid[0]?.length || 0) ? getCellAt(grid, r, colEdgeIndex) : null;
        return !!(cellLeft && cellRight && cellLeft.pos !== cellRight.pos && cellLeft.col + cellLeft.colspan === colEdgeIndex && cellRight.col === colEdgeIndex);
    });
}
function isCanonicalSide(side) {
    return side === "top" || side === "left";
}
function getOppositeSide(side) {
    switch(side){
        case "top":
            return "bottom";
        case "bottom":
            return "top";
        case "left":
            return "right";
        case "right":
            return "left";
        default:
            return "top";
    }
}
function getCanonicalCells(edge) {
    if (edge.orientation === "horizontal") {
        return edge.canonicalSide === "top" ? edge.belowCells : edge.aboveCells;
    } else {
        return edge.canonicalSide === "left" ? edge.rightCells : edge.leftCells;
    }
}
function getNonCanonicalCells(edge) {
    if (edge.orientation === "horizontal") {
        return edge.canonicalSide === "top" ? edge.aboveCells : edge.belowCells;
    } else {
        return edge.canonicalSide === "left" ? edge.leftCells : edge.rightCells;
    }
}
function isCellOuterEdge(cell, side, tableWidth, tableHeight, isCellInSelection) {
    switch(side){
        case "top":
            return cell.row === 0 || !isCellInSelection(cell.row - 1, cell.col);
        case "bottom":
            return cell.row + cell.rowspan >= tableHeight || !isCellInSelection(cell.row + cell.rowspan, cell.col);
        case "left":
            return cell.col === 0 || !isCellInSelection(cell.row, cell.col - 1);
        case "right":
            return cell.col + cell.colspan >= tableWidth || !isCellInSelection(cell.row, cell.col + cell.colspan);
        default:
            return false;
    }
}
const OUTER_SIDES = [
    "top",
    "bottom",
    "left",
    "right"
];
function groupOuterEdgeCells(selected, getCellData, tableWidth, tableHeight, isCellInSelection) {
    const grouped = new Map(OUTER_SIDES.map((side)=>[
            side,
            []
        ]));
    for (const entry of selected){
        const cellData = getCellData(entry);
        if (!cellData) {
            continue;
        }
        for (const side of OUTER_SIDES){
            if (isCellOuterEdge(cellData, side, tableWidth, tableHeight, isCellInSelection)) {
                grouped.get(side).push(entry);
            }
        }
    }
    return grouped;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/borders/canonical-remap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyBorderEdit",
    ()=>applyBorderEdit,
    "canonicalizeBorders",
    ()=>canonicalizeBorders,
    "extractCellPositions",
    ()=>extractCellPositions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/borders/edge-detection.js [app-client] (ecmascript)");
;
;
function isExplicitBorder(cell, side) {
    const hasColor = cell.attrs.borderColors?.[side] !== void 0;
    const hasWidth = cell.attrs.borderWidths?.[side] !== void 0;
    return {
        hasColor,
        hasWidth
    };
}
function getBorderStyle(cell, side) {
    return {
        color: cell.attrs.borderColors?.[side],
        width: cell.attrs.borderWidths?.[side]
    };
}
function borderStylesEqual(a, b) {
    return a.color === b.color && a.width === b.width;
}
function hasUniformBorderStyle(cells, side, targetStyle) {
    if (cells.length === 0) {
        return false;
    }
    return cells.every((cell)=>{
        const cellStyle = getBorderStyle(cell.node, side);
        return borderStylesEqual(cellStyle, targetStyle);
    });
}
function allCellsHaveDefaultBorder(cells, side) {
    return cells.every((cell)=>{
        const explicit = isExplicitBorder(cell.node, side);
        return !explicit.hasColor && !explicit.hasWidth;
    });
}
function getEdgeRange(edge) {
    return edge.orientation === "horizontal" ? edge.colRange : edge.rowRange;
}
function getCellRange(cell, edge) {
    if (edge.orientation === "horizontal") {
        return {
            start: cell.col,
            end: cell.col + cell.colspan
        };
    } else {
        return {
            start: cell.row,
            end: cell.row + cell.rowspan
        };
    }
}
function isCellFullyContained(cell, edgeStart, edgeEnd, edge) {
    const { start: cellStart, end: cellEnd } = getCellRange(cell, edge);
    return cellStart >= edgeStart && cellEnd <= edgeEnd;
}
function setBorderStyle(update, side, style) {
    if (style.color !== void 0) {
        update.borderColors[side] = style.color;
    }
    if (style.width !== void 0) {
        update.borderWidths[side] = style.width;
    }
}
function clearBorderStyle(update, side) {
    update.borderColors[side] = void 0;
    update.borderWidths[side] = void 0;
}
function applyBorderStyleToCell(cell, side, style, clear, updates) {
    const update = getOrCreateUpdate(updates, cell.pos, cell.node);
    if (clear) {
        clearBorderStyle(update, side);
    } else {
        setBorderStyle(update, side, style);
    }
}
function extractCellPositions(tableNode, tableStart) {
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(tableNode);
    const cells = [];
    const seen = /* @__PURE__ */ new Set();
    let _rowIndex = 0;
    tableNode.forEach((rowNode, rowOffset)=>{
        if (rowNode.type.spec.tableRole === "row") {
            let _colIndex = 0;
            rowNode.forEach((cellNode, cellOffset)=>{
                if (cellNode.type.spec.tableRole === "cell" || cellNode.type.spec.tableRole === "header_cell") {
                    const cellPos = tableStart + rowOffset + cellOffset + 1;
                    if (!seen.has(cellPos)) {
                        seen.add(cellPos);
                        const placement = map.findCell(cellPos - tableStart);
                        cells.push({
                            pos: cellPos,
                            node: cellNode,
                            row: placement.row,
                            col: placement.col,
                            rowspan: placement.rowspan,
                            colspan: placement.colspan
                        });
                    }
                }
                _colIndex++;
            });
            _rowIndex++;
        }
    });
    return {
        cells,
        width: map.width,
        height: map.height
    };
}
function applyBorderEdit(tr, tableNode, tableStart, selectedCells, side, style, clear = false) {
    const { cells, width, height } = extractCellPositions(tableNode, tableStart);
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCellGrid"])(cells, width, height);
    const selectedPositions = new Set(selectedCells.map((c)=>c.pos));
    const selectedCellsData = cells.filter((c)=>selectedPositions.has(c.pos));
    const cellSpacing = tableNode.attrs.tableData?.cellSpacing ?? 0;
    if (cellSpacing > 0) {
        const updates = /* @__PURE__ */ new Map();
        const sidesToUpdate = side === null ? [
            "top",
            "bottom",
            "left",
            "right"
        ] : [
            side
        ];
        for (const cell of selectedCellsData){
            for (const s of sidesToUpdate){
                applyBorderStyleToCell(cell, s, style, clear, updates);
            }
        }
        applyUpdates(tr, updates);
        return;
    }
    if (side === null) {
        applyBorderToAllSides(tr, selectedCellsData, grid, width, height, style, clear);
    } else {
        const updates = /* @__PURE__ */ new Map();
        applyBorderToSide(tr, selectedCellsData, side, grid, width, height, style, clear, updates);
        applyUpdates(tr, updates);
    }
}
function applyBorderToAllSides(tr, selectedCells, grid, _width, _height, style, clear) {
    const updates = /* @__PURE__ */ new Map();
    const sides = [
        "top",
        "bottom",
        "left",
        "right"
    ];
    for (const side of sides){
        applyBorderToSide(tr, selectedCells, side, grid, _width, _height, style, clear, updates);
    }
    applyUpdates(tr, updates);
}
function applyBorderToSide(_tr, selectedCells, side, grid, width, height, style, clear, updates) {
    const canonical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCanonicalSide"])(side);
    const edgeMap = /* @__PURE__ */ new Map();
    for (const cell of selectedCells){
        const edgeKey = getEdgeKey(cell, side);
        if (!edgeMap.has(edgeKey)) {
            edgeMap.set(edgeKey, []);
        }
        edgeMap.get(edgeKey).push(cell);
    }
    for (const [_edgeKey, cellsOnEdge] of edgeMap.entries()){
        const edge = computeEdgeFromCells(cellsOnEdge, side, grid, width, height);
        if (!edge) {
            continue;
        }
        if (canonical) {
            applyCanonicalEdit(cellsOnEdge, side, edge, style, clear, updates);
        } else {
            applyNonCanonicalEdit(cellsOnEdge, side, edge, style, clear, updates);
        }
    }
}
function applyCanonicalEdit(cells, side, edge, style, clear, updates) {
    const oppositeSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeSide"])(side);
    const oppositeCells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonCanonicalCells"])(edge);
    for (const cell of cells){
        applyBorderStyleToCell(cell, side, style, clear, updates);
    }
    if (!clear && oppositeCells.length > 0) {
        const { start: edgeStart, end: edgeEnd } = getEdgeRange(edge);
        for (const cell of oppositeCells){
            if (isCellFullyContained(cell, edgeStart, edgeEnd, edge)) {
                applyBorderStyleToCell(cell, oppositeSide, style, false, updates);
            }
        }
    }
}
function applyNonCanonicalEdit(cells, side, edge, style, clear, updates) {
    const canonicalSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeSide"])(side);
    const canonicalCells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCanonicalCells"])(edge);
    const { start: edgeStart, end: edgeEnd } = getEdgeRange(edge);
    const exactCoverage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExactCoverage"])(edge);
    if (exactCoverage && !clear) {
        for (const cell of canonicalCells){
            applyBorderStyleToCell(cell, canonicalSide, style, false, updates);
        }
        for (const cell of cells){
            applyBorderStyleToCell(cell, side, style, false, updates);
        }
    } else if (exactCoverage && clear) {
        const canonicalHasDuplicate = hasUniformBorderStyle(cells, side, {
            color: void 0,
            width: void 0
        }) || hasUniformBorderStyle(canonicalCells, canonicalSide, getBorderStyle(cells[0].node, side));
        for (const cell of cells){
            const update = getOrCreateUpdate(updates, cell.pos, cell.node);
            clearBorderStyle(update, side);
        }
        if (canonicalHasDuplicate) {
            for (const cell of canonicalCells){
                const update = getOrCreateUpdate(updates, cell.pos, cell.node);
                clearBorderStyle(update, canonicalSide);
            }
        }
    } else {
        for (const cell of cells){
            applyBorderStyleToCell(cell, side, style, clear, updates);
        }
        if (!clear) {
            for (const cell of canonicalCells){
                if (isCellFullyContained(cell, edgeStart, edgeEnd, edge)) {
                    applyBorderStyleToCell(cell, canonicalSide, style, false, updates);
                }
            }
        }
    }
}
function getEdgeKey(cell, side) {
    switch(side){
        case "top":
            return `h:${cell.row}:${cell.col}:${cell.col + cell.colspan}`;
        case "bottom":
            return `h:${cell.row + cell.rowspan}:${cell.col}:${cell.col + cell.colspan}`;
        case "left":
            return `v:${cell.col}:${cell.row}:${cell.row + cell.rowspan}`;
        case "right":
            return `v:${cell.col + cell.colspan}:${cell.row}:${cell.row + cell.rowspan}`;
        default:
            return "";
    }
}
function computeEdgeFromCells(cells, side, grid, _width, _height) {
    if (cells.length === 0) {
        return null;
    }
    if (side === "top" || side === "bottom") {
        let minCol = Infinity;
        let maxCol = -Infinity;
        let rowEdgeIndex = -1;
        for (const cell of cells){
            minCol = Math.min(minCol, cell.col);
            maxCol = Math.max(maxCol, cell.col + cell.colspan);
            rowEdgeIndex = side === "top" ? cell.row : cell.row + cell.rowspan;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeHorizontalEdge"])(grid, rowEdgeIndex, minCol, maxCol, side);
    } else {
        let minRow = Infinity;
        let maxRow = -Infinity;
        let colEdgeIndex = -1;
        for (const cell of cells){
            minRow = Math.min(minRow, cell.row);
            maxRow = Math.max(maxRow, cell.row + cell.rowspan);
            colEdgeIndex = side === "left" ? cell.col : cell.col + cell.colspan;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeVerticalEdge"])(grid, colEdgeIndex, minRow, maxRow, side);
    }
}
function getOrCreateUpdate(updates, pos, node) {
    if (!updates.has(pos)) {
        updates.set(pos, {
            pos,
            borderColors: {
                ...node.attrs.borderColors || {}
            },
            borderWidths: {
                ...node.attrs.borderWidths || {}
            }
        });
    }
    return updates.get(pos);
}
function applyUpdates(tr, updates) {
    for (const update of updates.values()){
        const node = tr.doc.nodeAt(update.pos);
        if (!node) {
            continue;
        }
        tr.setNodeMarkup(update.pos, null, {
            ...node.attrs,
            borderColors: update.borderColors,
            borderWidths: update.borderWidths
        });
    }
}
function canonicalizeBorders(tr, tableNode, tableStart) {
    const cellSpacing = tableNode.attrs.tableData?.cellSpacing ?? 0;
    if (cellSpacing > 0) {
        return;
    }
    const { cells, width, height } = extractCellPositions(tableNode, tableStart);
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCellGrid"])(cells, width, height);
    const updates = /* @__PURE__ */ new Map();
    const allEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllSharedEdges"])(grid, width, height);
    for (const edge of allEdges){
        canonicalizeEdge(edge, updates);
    }
    applyUpdates(tr, updates);
}
function canonicalizeEdge(edge, updates) {
    const canonicalCells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCanonicalCells"])(edge);
    const nonCanonicalCells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonCanonicalCells"])(edge);
    if (canonicalCells.length === 0 || nonCanonicalCells.length === 0) {
        return;
    }
    const canonicalSide = edge.canonicalSide;
    const nonCanonicalSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeSide"])(canonicalSide);
    const canonicalStyles = canonicalCells.map((c)=>getBorderStyle(c.node, canonicalSide));
    const nonCanonicalStyles = nonCanonicalCells.map((c)=>getBorderStyle(c.node, nonCanonicalSide));
    const canonicalUniform = canonicalStyles.every((s)=>borderStylesEqual(s, canonicalStyles[0]));
    const nonCanonicalUniform = nonCanonicalStyles.every((s)=>borderStylesEqual(s, nonCanonicalStyles[0]));
    if (canonicalUniform && nonCanonicalUniform) {
        const canonicalStyle = canonicalStyles[0];
        const nonCanonicalStyle = nonCanonicalStyles[0];
        const bothExplicit = (canonicalStyle.color !== void 0 || canonicalStyle.width !== void 0) && (nonCanonicalStyle.color !== void 0 || nonCanonicalStyle.width !== void 0);
        if (bothExplicit && borderStylesEqual(canonicalStyle, nonCanonicalStyle)) {
            for (const cell of nonCanonicalCells){
                const update = getOrCreateUpdate(updates, cell.pos, cell.node);
                clearBorderStyle(update, nonCanonicalSide);
            }
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExactCoverage"])(edge)) {
        const canonicalAllDefault = allCellsHaveDefaultBorder(canonicalCells, canonicalSide);
        if (canonicalAllDefault && nonCanonicalUniform) {
            const nonCanonicalStyle = nonCanonicalStyles[0];
            const nonCanonicalExplicit = nonCanonicalStyle.color !== void 0 || nonCanonicalStyle.width !== void 0;
            if (nonCanonicalExplicit) {
                for (const cell of canonicalCells){
                    const update = getOrCreateUpdate(updates, cell.pos, cell.node);
                    setBorderStyle(update, canonicalSide, nonCanonicalStyle);
                }
                for (const cell of nonCanonicalCells){
                    const update = getOrCreateUpdate(updates, cell.pos, cell.node);
                    clearBorderStyle(update, nonCanonicalSide);
                }
            }
        }
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/defaults.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TABLE_DEFAULTS",
    ()=>TABLE_DEFAULTS,
    "TABLE_VERTICAL_PADDING",
    ()=>TABLE_VERTICAL_PADDING,
    "getDefaultCellPadding",
    ()=>getDefaultCellPadding,
    "getMinColumnWidthForPadding",
    ()=>getMinColumnWidthForPadding,
    "normalizePadding",
    ()=>normalizePadding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
;
const TABLE_VERTICAL_PADDING = 16;
const TABLE_DEFAULTS = {
    cellPadding: [
        10,
        10,
        10,
        10
    ],
    cellSpacing: 0
};
const getDefaultCellPadding = ()=>TABLE_DEFAULTS.cellPadding[0];
const normalizePadding = (padding, defaults)=>{
    if (!padding || padding.length === 0) {
        return defaults;
    }
    if (padding.length === 1) {
        return [
            padding[0],
            padding[0],
            padding[0],
            padding[0]
        ];
    }
    if (padding.length === 2) {
        return [
            padding[0],
            padding[1],
            padding[0],
            padding[1]
        ];
    }
    if (padding.length === 3) {
        return [
            padding[0],
            padding[1],
            padding[2],
            padding[1]
        ];
    }
    return padding;
};
const getMinColumnWidthForPadding = (cellPadding)=>{
    const padding = normalizePadding(cellPadding, [
        ...TABLE_DEFAULTS.cellPadding
    ]);
    const paddingLeft = padding[3] ?? padding[1] ?? padding[0] ?? 10;
    const paddingRight = padding[1] ?? padding[0] ?? 10;
    const horizontalPadding = paddingLeft + paddingRight;
    const defaultHorizontalPadding = TABLE_DEFAULTS.cellPadding[1] + TABLE_DEFAULTS.cellPadding[3];
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_MANUAL_MIN_WIDTH"] + (horizontalPadding - defaultHorizontalPadding);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/get-toolbar-buttons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getToolbarButtons",
    ()=>getToolbarButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$animation$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-animation-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$create$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/separator/create-separator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$background$2d$color$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/background-color-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$border$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/border-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$context$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/context-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$add$2d$row$2d$col$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/add-row-col-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$simple$2d$toggle$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/simple-toggle-buttons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$spacing$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/spacing-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$text$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/text-alignment-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$vertical$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/vertical-alignment-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$get$2d$table$2d$for$2d$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/get-table-for-animation.js [app-client] (ecmascript)");
;
;
;
;
;
const getToolbarButtons = (_, services)=>{
    const backgroundColorButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$background$2d$color$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBackgroundColorButton"])(services);
    const borderButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$border$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBorderButton"])(services);
    const textAlignmentButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$text$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextAlignmentButton"])(services);
    const verticalAlignmentButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$vertical$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVerticalAlignmentButton"])(services);
    const insertButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$add$2d$row$2d$col$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInsertButton"])(services);
    const moveColumnLeftButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$simple$2d$toggle$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMoveColumnLeftButton"])();
    const moveColumnRightButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$simple$2d$toggle$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMoveColumnRightButton"])();
    const moveRowUpButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$simple$2d$toggle$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMoveRowUpButton"])();
    const moveRowDownButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$simple$2d$toggle$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMoveRowDownButton"])();
    const mergeCellsButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$simple$2d$toggle$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMergeCellsButton"])();
    const splitCellButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$simple$2d$toggle$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSplitCellButton"])();
    const spacingButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$spacing$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSpacingButton"])(services);
    const animation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$animation$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnimationButton"])(services, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$get$2d$table$2d$for$2d$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableForAnimation"]);
    const contextButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$buttons$2f$context$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextButton"])(services);
    if (services.context.environment === "wixel") {
        return [
            backgroundColorButton,
            borderButton,
            textAlignmentButton,
            verticalAlignmentButton,
            insertButton,
            moveColumnLeftButton,
            moveColumnRightButton,
            moveRowUpButton,
            moveRowDownButton,
            mergeCellsButton,
            splitCellButton,
            spacingButton,
            animation,
            contextButton
        ];
    }
    const separator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$create$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeparator"])();
    return [
        backgroundColorButton,
        separator,
        borderButton,
        textAlignmentButton,
        verticalAlignmentButton,
        insertButton,
        moveColumnLeftButton,
        moveColumnRightButton,
        moveRowUpButton,
        moveRowDownButton,
        mergeCellsButton,
        splitCellButton,
        spacingButton,
        animation,
        separator,
        contextButton
    ];
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/shortcuts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shortcuts",
    ()=>shortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/shortcuts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/helpers/find-parent-node-closest-to-pos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/find-table.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const shortcuts = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "MoveToNextCellTab",
        description: "ShortcutsSheet_Table_MoveToTheNextCell",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Tab",
            windows: "Tab"
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "MoveToNextCellArrow",
        description: "ShortcutsSheet_Table_MoveToTheNextCell",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Arrow",
            windows: "Arrow"
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "MoveToPreviousCellTab",
        description: "ShortcutsSheet_Table_MoveToThePreviousCell",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Shift+Tab",
            windows: "Shift+Tab"
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "MoveToPreviousCellArrow",
        description: "ShortcutsSheet_Table_MoveToThePreviousCell",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Arrow",
            windows: "Arrow"
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "EnterExitCell",
        description: "ShortcutsSheet_Table_EnterExitASelectedCell",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Enter",
            windows: "Enter"
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "AddNewLineShift",
        description: "ShortcutsSheet_Table_AddANewLineWithinCell",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Shift+Enter",
            windows: "Shift+Enter"
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "AddNewLineAlt",
        description: "ShortcutsSheet_Table_AddANewLineWithinCell",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Meta+Enter",
            windows: "Meta+Enter"
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "SelectContentInCell",
        description: "ShortcutsSheet_Table_SelectingAllContentInsideCell",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Meta+A",
            windows: "Ctrl+A"
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "SelectColumn",
        description: "ShortcutsSheet_Table_SelectColumn",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Alt+Space",
            windows: "Alt+Space"
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "SelectRow",
        description: "ShortcutsSheet_Table_SelectRow",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Shift+Space",
            windows: "Shift+Space"
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "SelectTable",
        description: "ShortcutsSheet_Table_SelectTable",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Meta+A",
            windows: "Ctrl+A"
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "AddNewColumnRow",
        description: "ShortcutsSheet_Table_AddNewColumnRow",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Alt+Ctrl+=",
            windows: "Alt+Ctrl+="
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "DeleteColumnRow",
        description: "ShortcutsSheet_Table_DeleteSelectedColumnRow",
        group: "ShortcutsSheet_Section_Table",
        keys: {
            macOs: "Alt+Ctrl+-",
            windows: "Alt+Ctrl+-"
        },
        enabled: false,
        showInShortcutSheet: true,
        command: ()=>"continue"
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: "TableEscapeNavigation",
        group: "ShortcutsSheet_Section_Formatting",
        description: void 0,
        keys: {
            macOs: "Escape",
            windows: "Escape"
        },
        enabled: true,
        showInShortcutSheet: false,
        command: ({ editor, event })=>{
            const { state } = editor.view;
            const { selection } = state;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInTable"])(state)) {
                return "continue";
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
                const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(selection);
                if (table && table.isTableSelected()) {
                    return "continue";
                }
                editor.commands.selectWholeTable();
                event?.preventDefault();
                event?.stopImmediatePropagation();
                return "handled";
            }
            const tablePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(selection);
            if (!tablePos) {
                return "continue";
            }
            const cell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, (node)=>[
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_CELL_TYPE"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_HEADER_CELL_TYPE"]
                ].includes(node.type.name));
            if (!cell) {
                return "continue";
            }
            editor.commands.setCellSelection(cell.pos);
            event?.preventDefault();
            event?.stopImmediatePropagation();
            return "handled";
        }
    })
];
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/table-converters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tableCellConverter",
    ()=>tableCellConverter,
    "tableConverter",
    ()=>tableConverter,
    "tableRowConverter",
    ()=>tableRowConverter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/defaults.js [app-client] (ecmascript)");
;
;
;
const tableConverter = {
    toPm: {
        types: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE
        ],
        // @ts-ignore next node type
        convert: (node, visit)=>{
            const { dimensions, cellPadding, animation, ...restTableData } = node.tableData || {};
            const { colsWidthRatio, colsMinWidth } = node.tableData?.dimensions || {};
            const widthInPixel = ratioWidthToPixel(colsWidthRatio, colsMinWidth);
            const rows = node.nodes || [];
            const gridOccupied = rows.map(()=>[]);
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE,
                attrs: {
                    id: node.id,
                    dimensions,
                    animation: animation ?? null,
                    tableData: {
                        ...restTableData,
                        cellPadding: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizePadding"])(cellPadding, [
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_DEFAULTS"].cellPadding
                        ])
                    }
                },
                content: rows.map((rowNode, rowIndex)=>{
                    let colIdx = 0;
                    return {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_ROW,
                        attrs: {
                            id: rowNode.id,
                            height: node.tableData?.dimensions?.rowsHeight?.[rowIndex]
                        },
                        content: (rowNode.nodes || []).map((colNode)=>{
                            const colspan = colNode.tableCellData?.colspan || 1;
                            const rowspan = colNode.tableCellData?.rowspan || 1;
                            while(gridOccupied[rowIndex]?.[colIdx]){
                                colIdx++;
                            }
                            const visualCol = colIdx;
                            for(let r = 0; r < rowspan; r++){
                                for(let c = 0; c < colspan; c++){
                                    if (gridOccupied[rowIndex + r]) {
                                        gridOccupied[rowIndex + r][visualCol + c] = true;
                                    }
                                }
                            }
                            let colwidth = null;
                            if (widthInPixel) {
                                colwidth = [];
                                for(let i = 0; i < colspan; i++){
                                    const width = widthInPixel[visualCol + i];
                                    if (width !== void 0) {
                                        colwidth.push(width);
                                    }
                                }
                                if (colwidth.length === 0) {
                                    colwidth = null;
                                }
                            }
                            colIdx += colspan;
                            return {
                                type: rowIndex === 0 && node.tableData?.rowHeader || visualCol === 0 && node.tableData?.columnHeader ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_HEADER_CELL_TYPE"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_CELL,
                                attrs: {
                                    ...colNode.tableCellData,
                                    id: colNode.id,
                                    colwidth
                                },
                                content: visit(colNode)
                            };
                        })
                    };
                })
            };
        }
    },
    fromPm: {
        types: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE
        ],
        // @ts-ignore next node type
        convert: (node, visit)=>{
            const { attrs = {} } = node;
            const { id, dimensions, tableData: attrsTableData, animation } = attrs;
            const tableDataFromAttrs = attrsTableData || attrs;
            const { dimensions: _, cellPadding, animation: _hoisted, // hoisted to a top-level attr; never part of nested tableData
            ...restTableData } = tableDataFromAttrs;
            const tableNode = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE,
                id,
                // @ts-ignore next node type - data may be from legacy schema
                tableData: {
                    ...restTableData,
                    dimensions: {
                        ...dimensions,
                        rowsHeight: node.content?.map((node2)=>node2.attrs?.height)
                    },
                    // Only include cellPadding if it differs from defaults
                    cellPadding: cellPadding?.length === 4 && cellPadding?.every((p, index)=>p === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_DEFAULTS"].cellPadding[index]) ? void 0 : cellPadding,
                    ...animation ? {
                        animation
                    } : {}
                },
                nodes: visit(node)
            };
            return tableNode;
        }
    }
};
const tableRowConverter = {
    toPm: {
        types: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_ROW
        ],
        // @ts-ignore next node type
        convert: (node, visit)=>({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_ROW,
                attrs: {
                    id: node.id
                },
                content: visit(node)
            })
    },
    fromPm: {
        types: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_ROW
        ],
        // @ts-ignore next node type
        convert: (node, visit)=>{
            const { attrs = {} } = node;
            const { id } = attrs;
            const nodes = visit(node);
            const cellNodes = Array.isArray(nodes) && nodes.length > 0 ? nodes : [];
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_ROW,
                id,
                ...cellNodes.length > 0 && {
                    nodes: cellNodes
                }
            };
        }
    }
};
const tableCellConverter = {
    toPm: {
        types: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_CELL
        ],
        // @ts-ignore next node type
        convert: (node, visit)=>{
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_CELL,
                attrs: {
                    id: node.id,
                    ...node.tableCellData,
                    colspan: node.tableCellData?.colspan || 1,
                    rowspan: node.tableCellData?.rowspan || 1
                },
                content: visit(node)
            };
        }
    },
    fromPm: {
        types: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_HEADER_CELL_TYPE"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_CELL
        ],
        // @ts-ignore next node type
        convert: (node, visit)=>{
            const { attrs = {} } = node;
            const { id, colwidth: _, colspan, rowspan, ...data } = attrs;
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_CELL,
                id,
                tableCellData: {
                    ...data,
                    ...colspan > 1 && {
                        colspan
                    },
                    ...rowspan > 1 && {
                        rowspan
                    }
                },
                nodes: visit(node)
            };
        }
    }
};
const ratioWidthToPixel = (colsWidthRatio, colsMinWidth)=>{
    if (colsWidthRatio && colsMinWidth) {
        return colsWidthRatio.map((width, i)=>Math.max(width, colsMinWidth[i] || 0));
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/viewer-styles-inject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = '14e27996';
const injectCss = ()=>{
    var css = `.wPqgO{background-color:transparent;border:none;overflow:visible;padding:0;position:relative;vertical-align:top}.wPqgO.lXVxS{background-color:var(--ricos-custom-table-background-color,rgba(var(--ricos-text-color-tuple,33,33,33),.04));font-weight:unset}@supports (color:rgb(from #000 r g b/0.1)){.wPqgO.lXVxS{background-color:var(--ricos-custom-table-background-color,rgb(from var(--ricos-text-color,#212121) r g b/.04))}}.wPqgO.QYPAa{z-index:2}.wPqgO .-nMjy{background-color:var(--ricos-background-color,#fff);border:1px solid #ddd;box-shadow:0 0 7px 0 rgba(var(--ricos-text-color-tuple,33,33,33),.1);height:max-content;left:-20px;position:relative;top:0;width:calc(100% + 36px);z-index:1}@supports (color:rgb(from #000 r g b/0.1)){.wPqgO .-nMjy{box-shadow:0 0 7px 0 rgb(from var(--ricos-text-color,#212121) r g b/.1)}}.wPqgO .QYPAa{left:0;position:absolute;top:0;width:100%;z-index:1}.wPqgO .QYPAa:not(.-nMjy):not(.mouiV){background-color:rgba(var(--ricos-settings-action-color-tuple,var(--ricos-action-color-tuple,2,97,255)),.2)}@supports (color:rgb(from #000 r g b/0.1)){.wPqgO .QYPAa:not(.-nMjy):not(.mouiV){background-color:rgb(from var(--ricos-settings-action-color,var(--ricos-action-color,#116dff)) r g b/.2)}}.d-mj8.B8nmf .public-DraftEditor-content>div>:first-child,.d-mj8.zJv0z>div>div>div>:first-child,.wbMgM.B8nmf .public-DraftEditor-content>div>:last-child,.wbMgM.zJv0z>div>div>div>:last-child{height:1px}@supports not (contain:inline-size){@media only screen and (min-width:640px){.B8nmf:not(.-nMjy){pointer-events:none}}}@container (min-width: 640px){.B8nmf:not(.-nMjy){pointer-events:none}}.MTmq-{caret-color:transparent;height:100%}.MTmq-.Lk1bc{caret-color:unset;padding:10px 26px 10px 29px;width:100%}@supports not (contain:inline-size){@media only screen and (max-width:640px){.MTmq-.Lk1bc{padding:10px 0 10px 10px}}}@container (width < 640px){.MTmq-.Lk1bc{padding:10px 0 10px 10px}}.MTmq-.RkG0u{overflow:hidden;padding:var(--ricos-internal-table-cell-padding-top,10px) var(--ricos-internal-table-cell-padding-right,10px) var(--ricos-internal-table-cell-padding-bottom,10px) var(--ricos-internal-table-cell-padding-left,10px)}.GPcqU{background-color:#fff;border:1px solid rgba(51,51,51,.1);border-radius:2px;box-shadow:0 0 10px 0 rgba(0,0,0,.06);position:absolute;top:-40px}.HDEVQ{border:1px solid rgba(0,0,0,.4);height:20px;max-width:20px;padding:0;width:20px}.HDEVQ.QYPAa{border:1px double var(--ricos-settings-action-color,var(--ricos-action-color,#116dff))}.y5poA{-webkit-tap-highlight-color:rgba(0,0,0,0)}.y5poA ::selection{background:transparent}.y5poA ::-moz-selection{background:transparent}._2luU6{color:var(--ricos-custom-table-color,inherit);--ricos-internal-table-border-color:var(
    --ricos-custom-table-border-color,rgba(var(--ricos-text-color-tuple,33,33,33),0.2)
  );clear:both}@supports (color:rgb(from #000 r g b/0.1)){._2luU6{--ricos-internal-table-border-color:var(
      --ricos-custom-table-border-color,rgb(from var(--ricos-text-color,#212121) r g b/0.2)
    )}}.FL2R-:focus,.FL2R->span:focus,.UjI7r:focus,.UjI7r>span:focus,._--Z3K:focus,._--Z3K>span:focus{outline:none}.ZE77N{margin-bottom:max(0px,var(--table-vertical-padding,16px) - var(--table-border-bottom,1px));overflow-x:auto;overflow-y:hidden;padding-bottom:var(--table-border-bottom,1px);padding-inline-end:var(--table-border-end,1px);padding-top:max(var(--table-vertical-padding,16px),var(--table-border-top,1px));padding-inline-start:var(--table-border-start,1px);position:relative}.ZE77N::-webkit-scrollbar{-webkit-appearance:none;height:10px}.ZE77N::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.5);border:2px solid #fff;border-radius:8px}.UjI7r{isolation:isolate;min-width:100%;table-layout:fixed;width:100%}.UjI7r thead{border-right:1px solid rgba(var(--ricos-text-color-tuple,33,33,33),.15)}@supports (color:rgb(from #000 r g b/0.1)){.UjI7r thead{border-color:rgb(from var(--ricos-text-color,#212121) r g b/.15)}}.UjI7r .FAqDR{min-width:10px}.UjI7r{border-collapse:separate;border-spacing:0}.UjI7r td,.UjI7r th{background-clip:padding-box;border-bottom:0 solid transparent;border-left:0 solid transparent;border-left-width:var(--ricos-internal-table-gap,0);border-right:0 solid transparent;border-top:0 solid transparent;border-top-width:var(--ricos-internal-table-gap,0)}.UjI7r td[data-visual-col="0"],.UjI7r th[data-visual-col="0"]{border-left-width:0}.UjI7r td[data-visual-row="0"],.UjI7r th[data-visual-row="0"]{border-top-width:0}[dir=rtl] .UjI7r td,[dir=rtl] .UjI7r th{border-left-width:0;border-right-width:var(--ricos-internal-table-gap,0)}[dir=rtl] .UjI7r td[data-visual-col="0"],[dir=rtl] .UjI7r th[data-visual-col="0"]{border-right-width:0}`;
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/editor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pluginTable",
    ()=>pluginTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DataCollection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DataCollection$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/DataCollection.js [app-client] (ecmascript) <export default as DataCollection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DataCollectionSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DataCollectionSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/DataCollectionSmall.js [app-client] (ecmascript) <export default as DataCollectionSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$ricos$2d$plugin$2d$toolbar$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/ricos-plugin-toolbar-names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$plugin$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/plugin-types.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$reference$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/toolbar-reference-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/helpers/find-parent-node-closest-to-pos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/helpers/pos-to-dom-rect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$get$2d$add$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/get-add-buttons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$get$2d$toolbar$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/get-toolbar-buttons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$modals$2f$insert$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/modals/insert-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/shortcuts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$table$2d$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/table-converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$editing$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-editing-plugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tiptap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tiptap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$viewer$2d$styles$2d$inject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-table/viewer-styles-inject.js [app-client] (ecmascript)");
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
const isTableToolbarVisible = (selection, editor)=>{
    const { tiptapEditor } = editor.adapter;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$editing$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectingCells"])(tiptapEditor.state)) {
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
        return false;
    }
    const closestTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$find$2d$parent$2d$node$2d$closest$2d$to$2d$pos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"])(selection.$from, (node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_TYPE"]);
    return !!closestTable;
};
const pluginTable = (config = {})=>{
    return {
        config: {
            ...config,
            type: "table"
        },
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
        pmMarkConverters: [],
        pmNodeConverters: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$table$2d$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableConverter"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$table$2d$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableRowConverter"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$table$2d$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableCellConverter"]
        ],
        tiptapExtensions: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tiptap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tiptapExtensions"],
        getAddButtons: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$get$2d$add$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddButtons"],
        toolbar: {
            names: [
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$ricos$2d$plugin$2d$toolbar$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosPluginToolbarNames"].TABLE,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$ricos$2d$plugin$2d$toolbar$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosPluginToolbarNames"].TABLE_CELL,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$ricos$2d$plugin$2d$toolbar$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosPluginToolbarNames"].TABLE_ROW
            ],
            getButtons: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$get$2d$toolbar$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToolbarButtons"],
            isVisible: (selection, editor)=>isTableToolbarVisible(selection, editor),
            resolveReferenceElement: (tiptapEditor)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$reference$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToolbarReferenceElement"])(tiptapEditor, {
                    handleSelector: "[data-table-handle]",
                    containerSelector: "[data-table-container]",
                    topOffset: -5,
                    bottomOffset: 38,
                    nodeType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_TYPE"]
                })
        },
        getQuickActions: ({ pluginServices })=>{
            const isMobile = pluginServices?.context.isMobile;
            return [
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE,
                    title: "QuickActionsPlugin_ActionTitle_Table",
                    icon: isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DataCollection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DataCollection$3e$__["DataCollection"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DataCollectionSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DataCollectionSmall$3e$__["DataCollectionSmall"],
                    section: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$plugin$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["quickActionsModalSections"].FormatLayout,
                    tags: [
                        "grid",
                        "chart",
                        "data",
                        "spreadsheet",
                        "matrix",
                        "rows and columns"
                    ],
                    command: ({ modalService, editor })=>{
                        modalService.togglePluginPanel({
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_TABLE_MODAL_ID"],
                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$modals$2f$insert$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertModal"],
                            componentProps: {},
                            isMobile,
                            initialFocus: `[data-hook="${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_TABLE_MODAL_ADD_BUTTON"]}"]`,
                            positioning: {
                                referenceElement: {
                                    getBoundingClientRect: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posToDOMRect"])(editor.view, editor.view.state.selection.from, editor.view.state.selection.to)
                                },
                                placement: isMobile ? "bottom" : "bottom-start"
                            },
                            mobileLayout: "drawer"
                        });
                    }
                }
            ];
        },
        shortcuts: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortcuts"]
    };
};
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$viewer$2d$styles$2d$inject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectCss"])();
}),
]);

//# sourceMappingURL=0uxm_%40wix_ricos_dist_es_plugin-table_0h53xfp._.js.map