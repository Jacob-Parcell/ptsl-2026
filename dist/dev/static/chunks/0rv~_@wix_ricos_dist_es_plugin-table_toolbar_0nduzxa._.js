(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/table-settings-count-section.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableSettingsCountSection",
    ()=>TableSettingsCountSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$NumberInput$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/NumberInput/NumberInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const TableSettingsCountSection = ({ onCountChange, dataHook, inputRef, input, title, hasError, icon, onBlur, onKeyDown, logBi })=>{
    const onChange = (count)=>{
        onCountChange(count);
        logBi({
            dataHook,
            value: count
        });
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
        label: title,
        status: hasError ? "error" : void 0,
        suffix: icon,
        labelSize: "small"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$NumberInput$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
        inputRef,
        value: input,
        onChange,
        min: 0,
        size: "medium",
        dataHook,
        onBlur,
        onKeyDown
    }));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/capture-table-cell-selection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "captureSelectedCellPositions",
    ()=>captureSelectedCellPositions,
    "runWithTableCellSelection",
    ()=>runWithTableCellSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/find-table.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
;
;
;
;
const findCellDomById = (editor, id)=>{
    const dom = [
        ...editor.view.dom.querySelectorAll("[data-node-id]")
    ].find((element)=>element.getAttribute("data-node-id") === id);
    return dom instanceof HTMLElement ? dom : void 0;
};
const getCellElement = (editor, pos, id)=>{
    const dom = editor.view.nodeDOM(pos);
    if (dom instanceof HTMLElement) {
        return dom;
    }
    return id ? findCellDomById(editor, id) : void 0;
};
const captureCellsById = (editor, selectedCellIds)=>{
    if (!selectedCellIds?.length) {
        return null;
    }
    const selectedIds = new Set(selectedCellIds);
    const tableInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(editor.state.selection);
    const cells = [];
    const visit = (node, basePos)=>{
        node.descendants((child, offset)=>{
            const id = child.attrs.id;
            if (id && selectedIds.has(id)) {
                cells.push({
                    element: getCellElement(editor, basePos + offset, id),
                    id,
                    pos: basePos + offset
                });
            }
        });
    };
    if (tableInfo) {
        visit(tableInfo.node, tableInfo.start);
    } else {
        visit(editor.state.doc, 0);
    }
    return cells.length > 0 ? cells : null;
};
const captureCellsFromDom = (editor)=>{
    const { view } = editor;
    const cells = [];
    for (const element of view.dom.querySelectorAll(`[${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_CELL_SELECTED"]}="true"]`)){
        if (!(element instanceof HTMLElement) || !view.dom.contains(element)) {
            continue;
        }
        try {
            cells.push({
                element,
                id: element.getAttribute("data-node-id") ?? void 0,
                pos: view.posAtDOM(element, 0)
            });
        } catch  {}
    }
    return cells.length > 0 ? cells : null;
};
const captureSelectedCellPositions = (editor, selectedCellIds)=>{
    const { selection } = editor.state;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
        const cells = [];
        selection.forEachCell((node, pos)=>{
            cells.push({
                element: getCellElement(editor, pos, node.attrs.id),
                id: node.attrs.id,
                pos
            });
        });
        if (cells.length > 0) {
            return cells;
        }
    }
    return captureCellsFromDom(editor) ?? captureCellsById(editor, selectedCellIds);
};
const runWithTableCellSelection = (editor, capturedCells, run)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(editor.state.selection) && capturedCells?.length) {
        const { state, view } = editor;
        try {
            const cells = capturedCells.map(({ pos })=>state.doc.resolve(pos));
            view.dispatch(state.tr.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells, state.doc)).setMeta("addToHistory", false));
        } catch  {}
    }
    run();
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/resolvers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cannotMergeCellsResolver",
    ()=>cannotMergeCellsResolver,
    "cannotMoveColumnLeftResolver",
    ()=>cannotMoveColumnLeftResolver,
    "cannotMoveColumnRightResolver",
    ()=>cannotMoveColumnRightResolver,
    "cannotMoveRowDownResolver",
    ()=>cannotMoveRowDownResolver,
    "cannotMoveRowUpResolver",
    ()=>cannotMoveRowUpResolver,
    "cannotSplitCellResolver",
    ()=>cannotSplitCellResolver,
    "firstSelectedCellIdResolver",
    ()=>firstSelectedCellIdResolver,
    "getCellBackgroundColorResolver",
    ()=>getCellBackgroundColorResolver,
    "getCellBackgroundColorsResolver",
    ()=>getCellBackgroundColorsResolver,
    "getCellBorderColorResolver",
    ()=>getCellBorderColorResolver,
    "getCellBorderColorsResolver",
    ()=>getCellBorderColorsResolver,
    "getCellBorderWidthResolver",
    ()=>getCellBorderWidthResolver,
    "getCellPaddingResolver",
    ()=>getCellPaddingResolver,
    "getCellSpacingResolver",
    ()=>getCellSpacingResolver,
    "getSelectionCategoryResolver",
    ()=>getSelectionCategoryResolver,
    "getVerticalAlignmentResolver",
    ()=>getVerticalAlignmentResolver,
    "isCellSelectionResolver",
    ()=>isCellSelectionResolver,
    "isColumnSelectedResolver",
    ()=>isColumnSelectedResolver,
    "isFirstColumnSelected",
    ()=>isFirstColumnSelected,
    "isFirstRowSelected",
    ()=>isFirstRowSelected,
    "isRowColOrTableSelectedResolver",
    ()=>isRowColOrTableSelectedResolver,
    "isRowSelectedResolver",
    ()=>isRowSelectedResolver,
    "isTableSelectedResolver",
    ()=>isTableSelectedResolver,
    "selectedCellIdsResolver",
    ()=>selectedCellIdsResolver,
    "selectedNodeResolver",
    ()=>selectedNodeResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/resolve-cell-borders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/find-table.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const getSelectionContext = (editor)=>{
    const { selection } = editor.state;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(selection)) {
        return null;
    }
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(selection);
    if (!table || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
        return null;
    }
    const rect = selection.getRect();
    return {
        table,
        rect,
        isCellSelection: true
    };
};
const isFullAxisSelected = (ctx, axis)=>{
    if (ctx.table.isTableSelected()) {
        return false;
    }
    return axis === "col" ? ctx.rect.top === 0 && ctx.rect.bottom === ctx.table.getHeight() : ctx.rect.left === 0 && ctx.rect.right === ctx.table.getWidth();
};
const cannotMove = (editor, axis, direction)=>{
    const ctx = getSelectionContext(editor);
    if (!ctx) {
        return true;
    }
    if (!isFullAxisSelected(ctx, axis)) {
        return true;
    }
    if (axis === "col") {
        return direction === "start" ? ctx.rect.left === 0 : ctx.rect.right >= ctx.table.getWidth();
    }
    return direction === "start" ? ctx.rect.top === 0 : ctx.rect.bottom >= ctx.table.getHeight();
};
const getCellBorderColorResolver = (content)=>{
    if (Array.isArray(content) && content.length > 0) {
        return content.find((node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_CELL_TYPE"])?.attrs?.borderColors?.top;
    }
    return void 0;
};
const getCellBorderWidthResolver = (_, __, editor)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(editor.state.selection) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(editor.state.selection)) {
        return 1;
    }
    let selectedCellWidth;
    editor.state.selection.forEachCell((node)=>{
        if (selectedCellWidth !== void 0) {
            return;
        }
        selectedCellWidth = node.attrs.borderWidths?.top;
    });
    return selectedCellWidth || 1;
};
const getCellSpacingResolver = (_, __, editor)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(editor.state.selection)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_DEFAULTS"].cellSpacing;
    }
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(editor.state.selection);
    if (!table) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_DEFAULTS"].cellSpacing;
    }
    const tableNode = table.getNode();
    return tableNode.attrs.tableData?.cellSpacing ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_DEFAULTS"].cellSpacing;
};
const getCellPaddingResolver = (_, __, editor)=>{
    const defaultPadding = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_DEFAULTS"].cellPadding
    ];
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(editor.state.selection)) {
        return defaultPadding;
    }
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(editor.state.selection);
    if (!table) {
        return defaultPadding;
    }
    const tableNode = table.getNode();
    const cellPadding = tableNode.attrs.tableData?.cellPadding;
    return cellPadding && cellPadding.length > 0 ? cellPadding : defaultPadding;
};
const getCellBackgroundColorResolver = (content)=>{
    if (Array.isArray(content) && content.length > 0) {
        return content.find((node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_CELL_TYPE"])?.attrs?.cellStyle?.backgroundColor;
    }
    return void 0;
};
const getCellBackgroundColorsResolver = (_, __, editor)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(editor.state.selection) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(editor.state.selection)) {
        return [];
    }
    const colors = /* @__PURE__ */ new Set();
    editor.state.selection.forEachCell((node)=>{
        const backgroundColor = node.attrs?.cellStyle?.backgroundColor;
        colors.add(backgroundColor && backgroundColor !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPARENT_HEX_COLOR"] ? backgroundColor : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPARENT_HEX_COLOR"]);
    });
    return [
        ...colors
    ];
};
const BORDER_SIDES = [
    "top",
    "right",
    "bottom",
    "left"
];
const getCellBorderColorsResolver = (_, __, editor)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(editor.state.selection) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(editor.state.selection)) {
        return [];
    }
    const defaultColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDefaultBorderColor"])(editor.view.dom);
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(editor.state.selection);
    if (!table) {
        return [];
    }
    const tableNode = table.getNode();
    const tableStart = table.getStartPos();
    const cellSpacing = tableNode.attrs.tableData?.cellSpacing ?? 0;
    const resolvedBorders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCellBordersPm"])(tableNode, {
        drawDefaultGrid: true,
        cellSpacing
    });
    const colors = /* @__PURE__ */ new Set();
    editor.state.selection.forEachCell((node, pos)=>{
        const cell = table.map.findCell(pos - tableStart);
        for (const side of BORDER_SIDES){
            const border = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisplayedBorderOnSide"])(resolvedBorders, tableNode, node.attrs.id, cell, side);
            colors.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDisplayedBorderColor"])(border?.color, defaultColor));
        }
    });
    return [
        ...colors
    ];
};
const selectedNodeResolver = (_, __, editor)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(editor.state.selection)) {
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(editor.state.selection);
        return table?.getNode();
    }
    return void 0;
};
const firstSelectedCellIdResolver = (_, __, editor)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(editor.state.selection) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(editor.state.selection)) {
        return void 0;
    }
    let firstCellId;
    editor.state.selection.forEachCell((node)=>{
        if (firstCellId === void 0) {
            firstCellId = node.attrs.id;
        }
    });
    return firstCellId;
};
const selectedCellIdsResolver = (_, __, editor)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(editor.state.selection) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(editor.state.selection)) {
        return [];
    }
    const selectedCellIds = [];
    editor.state.selection.forEachCell((node)=>{
        if (node.attrs.id) {
            selectedCellIds.push(node.attrs.id);
        }
    });
    return selectedCellIds;
};
const getVerticalAlignmentResolver = (content)=>{
    if (Array.isArray(content) && content.length > 0) {
        const cellNode = content.find((node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_CELL_TYPE"]);
        return cellNode?.attrs?.cellStyle?.verticalAlignment || "TOP";
    }
    return void 0;
};
const isTableSelectedResolver = (_, __, editor)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(editor.state.selection)) {
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(editor.state.selection);
        return table?.isTableSelected() ?? false;
    }
    return false;
};
const isCellSelectionResolver = (_, __, editor)=>{
    return getSelectionContext(editor) !== null;
};
const isColumnSelectedResolver = (_, __, editor)=>{
    const ctx = getSelectionContext(editor);
    return ctx ? isFullAxisSelected(ctx, "col") : false;
};
const isRowSelectedResolver = (_, __, editor)=>{
    const ctx = getSelectionContext(editor);
    return ctx ? isFullAxisSelected(ctx, "row") : false;
};
const isRowColOrTableSelectedResolver = (_, __, editor)=>{
    const { selection } = editor.state;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(selection) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
        return false;
    }
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(selection);
    if (!table) {
        return false;
    }
    const isEntireTableSelected = table.isTableSelected();
    const isRowSelected = selection.isRowSelection?.();
    const isColSelected = selection.isColSelection?.();
    const isMultipleRowsSelected = table.getRowsIndexesInSelection().length > 1;
    const isMultipleColsSelected = table.getColsIndexesInSelection().length > 1;
    if (isEntireTableSelected) {
        return true;
    }
    if (isRowSelected && !isMultipleRowsSelected) {
        return true;
    }
    if (isColSelected && !isMultipleColsSelected) {
        return true;
    }
    return false;
};
const getSelectionCategoryResolver = (_, __, editor)=>{
    const { selection } = editor.state;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(selection)) {
        return void 0;
    }
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(selection);
    if (!table || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
        return void 0;
    }
    const isColSelected = selection.isColSelection?.();
    const isRowSelected = selection.isRowSelection?.();
    const isEntireTableSelected = table.isTableSelected();
    const isMultipleRowsSelected = table.getRowsIndexesInSelection().length > 1;
    const isMultipleColsSelected = table.getColsIndexesInSelection().length > 1;
    return isEntireTableSelected && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ENTIRE_TABLE || isColSelected && !isMultipleColsSelected && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].COLUMN || isRowSelected && !isMultipleRowsSelected && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ROW || isMultipleRowsSelected && isMultipleColsSelected && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].RANGE || isMultipleRowsSelected && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ROW_RANGE || isMultipleColsSelected && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].COLUMN_RANGE || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].CELL_BORDER;
};
const cannotMoveColumnLeftResolver = (_, __, editor)=>cannotMove(editor, "col", "start");
const cannotMoveColumnRightResolver = (_, __, editor)=>cannotMove(editor, "col", "end");
const cannotMoveRowUpResolver = (_, __, editor)=>cannotMove(editor, "row", "start");
const cannotMoveRowDownResolver = (_, __, editor)=>cannotMove(editor, "row", "end");
const cannotMergeCellsResolver = (_, __, editor)=>{
    const { state } = editor;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(state.selection)) {
        return true;
    }
    const canMerge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeCells"])(state, ()=>null);
    return !canMerge;
};
const cannotSplitCellResolver = (_, __, editor)=>{
    const { state } = editor;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(state.selection)) {
        return true;
    }
    const canSplit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitCell"])(state, ()=>null);
    return !canSplit;
};
const isFirstColumnSelected = (editor)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(editor.state.selection)) {
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(editor.state.selection);
        return table?.isColumnSelected(0) ?? false;
    }
    return false;
};
const isFirstRowSelected = (editor)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(editor.state.selection)) {
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(editor.state.selection);
        return table?.isRowSelected(0) ?? false;
    }
    return false;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/apply-table-border-change.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyTableBorderChangeToTransaction",
    ()=>applyTableBorderChangeToTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/canonical-remap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/edge-detection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
;
;
;
;
const getSelectionContext = (state)=>{
    const { selection } = state;
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(selection);
    if (!table || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
        return null;
    }
    const tableNode = table.getNode();
    const tableStart = table.getStartPos();
    const { cells, width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractCellPositions"])(tableNode, tableStart);
    const allSelectedCells = [];
    const selectedCellIds = /* @__PURE__ */ new Set();
    selection.forEachCell((node, pos)=>{
        allSelectedCells.push({
            node,
            pos
        });
        if (node.attrs.id) {
            selectedCellIds.add(node.attrs.id);
        }
    });
    const cellsById = new Map(cells.map((cell)=>[
            cell.node.attrs.id,
            cell
        ]));
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCellGrid"])(cells, width, height);
    return {
        tableStart,
        width,
        height,
        allSelectedCells,
        cellsById,
        isCellInSelection: (row, col)=>{
            const cell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellAt"])(grid, row, col);
            return cell ? selectedCellIds.has(cell.node.attrs.id) : false;
        }
    };
};
const applyEditToCurrentTable = (tr, tableStart, selected, side, style, clear)=>{
    const $pos = tr.doc.resolve(tableStart);
    const currentTable = $pos.node($pos.depth);
    if (currentTable?.type.spec.tableRole !== "table") {
        return;
    }
    const liveCells = selected.flatMap(({ pos })=>{
        const node = tr.doc.nodeAt(pos);
        return node ? [
            {
                node,
                pos
            }
        ] : [];
    });
    if (liveCells.length === 0) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBorderEdit"])(tr, currentTable, tableStart, liveCells, side, style, clear);
};
const applyOutsideBorder = (tr, ctx, style, clear)=>{
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupOuterEdgeCells"])(ctx.allSelectedCells, ({ node })=>ctx.cellsById.get(node.attrs.id), ctx.width, ctx.height, ctx.isCellInSelection);
    for (const [side, cells] of grouped){
        if (cells.length > 0) {
            applyEditToCurrentTable(tr, ctx.tableStart, cells, side, style, clear);
        }
    }
};
const applyBorderBySide = (tr, ctx, side, style, clear)=>{
    const outerCells = ctx.allSelectedCells.filter(({ node })=>{
        const cellData = ctx.cellsById.get(node.attrs.id);
        return cellData ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCellOuterEdge"])(cellData, side, ctx.width, ctx.height, ctx.isCellInSelection) : false;
    });
    if (outerCells.length > 0) {
        applyEditToCurrentTable(tr, ctx.tableStart, outerCells, side, style, clear);
    }
};
const applyInnerSide = (tr, ctx, side, style, clear)=>{
    const innerCells = ctx.allSelectedCells.filter(({ node })=>{
        const cellData = ctx.cellsById.get(node.attrs.id);
        if (!cellData) {
            return false;
        }
        return side === "top" ? cellData.row > 0 && ctx.isCellInSelection(cellData.row - 1, cellData.col) : cellData.col > 0 && ctx.isCellInSelection(cellData.row, cellData.col - 1);
    });
    if (innerCells.length > 0) {
        applyEditToCurrentTable(tr, ctx.tableStart, innerCells, side, style, clear);
    }
};
const applyTableBorderChangeToTransaction = (tr, state, scope, change)=>{
    const ctx = getSelectionContext(state);
    if (!ctx) {
        return false;
    }
    const style = change.width !== void 0 ? {
        width: change.width
    } : {
        color: change.color
    };
    const clear = change.width === void 0 && change.color === void 0;
    switch(scope){
        case "borders":
            applyEditToCurrentTable(tr, ctx.tableStart, ctx.allSelectedCells, null, style, clear);
            return true;
        case "outsideBorders":
            applyOutsideBorder(tr, ctx, style, clear);
            return true;
        case "top":
        case "right":
        case "bottom":
        case "left":
            applyBorderBySide(tr, ctx, scope, style, clear);
            return true;
        case "inner":
            applyInnerSide(tr, ctx, "top", style, clear);
            applyInnerSide(tr, ctx, "left", style, clear);
            return true;
        case "innerHorizontal":
            applyInnerSide(tr, ctx, "top", style, clear);
            return true;
        case "innerVertical":
            applyInnerSide(tr, ctx, "left", style, clear);
            return true;
        default:
            return false;
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/table-style-preview.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableStylePreview",
    ()=>TableStylePreview,
    "createTableStylePreview",
    ()=>createTableStylePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolve$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/resolve-css-color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/resolve-cell-borders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$cell$2d$edge$2d$decorations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/decorations/cell-edge-decorations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resize-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$apply$2d$table$2d$border$2d$change$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/apply-table-border-change.js [app-client] (ecmascript)");
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
class TableStylePreview {
    constructor(editor, capturedCells = null){
        this.editor = editor;
        this.capturedCells = capturedCells;
        this.snapshots = /* @__PURE__ */ new Map();
    }
    get view() {
        return this.editor.view;
    }
    restore() {
        this.editor.commands?.setTableCellStylePreview?.(void 0);
        for (const [element, style] of this.snapshots){
            if (style) {
                element.setAttribute("style", style);
            } else {
                element.removeAttribute("style");
            }
        }
        this.snapshots.clear();
    }
    /** Snapshots an element's inline style so `restore()` will undo any subsequent edits. */ track(element) {
        if (!this.snapshots.has(element)) {
            this.snapshots.set(element, element.getAttribute("style") ?? "");
        }
    }
    resetToCaptured(element) {
        const original = this.snapshots.get(element);
        if (original) {
            element.setAttribute("style", original);
        } else {
            element.removeAttribute("style");
        }
    }
    applyPreviewStyle(element, apply) {
        this.track(element);
        this.resetToCaptured(element);
        apply(element.style);
    }
    getDomForCell(pos, id) {
        if (id) {
            const domById = [
                ...this.view.dom.querySelectorAll("[data-node-id]")
            ].find((element)=>element.getAttribute("data-node-id") === id);
            if (domById instanceof HTMLElement) {
                return domById;
            }
        }
        const dom = this.view.nodeDOM(pos);
        return dom instanceof HTMLElement ? dom : null;
    }
    getStateWithCellSelection() {
        const { state } = this.view;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(state.selection)) {
            return state;
        }
        if (!this.capturedCells?.length) {
            return null;
        }
        try {
            const cells = this.capturedCells.map(({ pos })=>state.doc.resolve(pos));
            return state.apply(state.tr.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells, state.doc)));
        } catch (error) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return null;
        }
    }
    getTableQuery() {
        const state = this.getStateWithCellSelection();
        return state ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection) : null;
    }
    getTableNodeAndStart() {
        const table = this.getTableQuery();
        return table ? {
            node: table.getNode(),
            start: table.getStartPos()
        } : null;
    }
    getTableContainer() {
        const capturedCellContainer = this.capturedCells?.map(({ element })=>element?.closest("[data-table-container]")).find((element)=>element instanceof HTMLElement);
        if (capturedCellContainer) {
            return capturedCellContainer;
        }
        const table = this.getTableQuery();
        if (!table) {
            return null;
        }
        const nodeDom = this.view.nodeDOM(table.getStartPos() - 1);
        if (nodeDom instanceof HTMLElement) {
            return nodeDom.dataset.tableContainer === "true" ? nodeDom : nodeDom.closest("[data-table-container]");
        }
        const domAtPos = this.view.domAtPos(table.getStartPos() - 1);
        const dom = domAtPos.node.childNodes[domAtPos.offset];
        return dom instanceof HTMLElement ? dom.dataset.tableContainer === "true" ? dom : dom.closest("[data-table-container]") : null;
    }
    getTableElement() {
        const container = this.getTableContainer();
        const table = container?.querySelector("table");
        return table instanceof HTMLTableElement ? table : null;
    }
    previewResolvedBorders(tableNode, tableStart, cellSpacing) {
        const resolvedBorders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCellBordersPm"])(tableNode, {
            drawDefaultGrid: true,
            cellSpacing
        });
        const cellDecorations = [];
        tableNode.descendants((node, relativePos)=>{
            if (node.type.name !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_CELL_TYPE"] && node.type.name !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_HEADER_CELL_TYPE"]) {
                return;
            }
            const cellId = node.attrs.id;
            if (!cellId) {
                return;
            }
            const borders = resolvedBorders.get(cellId);
            if (!borders) {
                return;
            }
            const pos = tableStart + relativePos;
            cellDecorations.push({
                from: pos,
                to: pos + node.nodeSize,
                style: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$cell$2d$edge$2d$decorations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderStyleToCSS"])(borders)};--ricos-table-selection-overlay-z:0`
            });
        });
        if (cellDecorations.length > 0) {
            this.editor.commands.setTableCellStylePreview({
                cellDecorations
            });
        }
    }
    forEachSelectedCell(callback) {
        if (this.capturedCells?.length) {
            for (const { element, id, pos } of this.capturedCells){
                const dom = element?.isConnected ? element : this.getDomForCell(pos, id);
                if (dom) {
                    callback(dom);
                }
            }
            return;
        }
        const { selection } = this.view.state;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
            selection.forEachCell((node, pos)=>{
                const dom = this.getDomForCell(pos, node.attrs.id);
                if (dom) {
                    callback(dom);
                }
            });
        }
    }
    previewCellBackground(color) {
        const resolvedColor = color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolve$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCssColor"])(color) : void 0;
        if (this.capturedCells?.length) {
            const cellDecorations = this.capturedCells.flatMap(({ pos })=>{
                const node = this.view.state.doc.nodeAt(pos);
                if (!node) {
                    return [];
                }
                return [
                    {
                        from: pos,
                        to: pos + node.nodeSize,
                        className: resolvedColor ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].backgroundColorPreview : void 0
                    }
                ];
            });
            this.editor.commands.setTableCellStylePreview(cellDecorations.length > 0 ? {
                cellDecorations,
                rootStyle: resolvedColor ? {
                    "--ricos-table-cell-background-color-preview": resolvedColor,
                    "--ricos-table-preview-selection-color": resolvedColor,
                    "--ricos-table-selection-overlay-z": "0"
                } : void 0
            } : void 0);
            return;
        }
        this.forEachSelectedCell((element)=>{
            this.applyPreviewStyle(element, (style)=>{
                if (resolvedColor) {
                    style.backgroundColor = resolvedColor;
                    style.setProperty("--ricos-table-preview-selection-color", resolvedColor);
                } else {
                    style.removeProperty("background-color");
                    style.removeProperty("--ricos-table-preview-selection-color");
                }
            });
        });
    }
    previewCellSpacing(spacing) {
        const container = this.getTableContainer();
        if (!container) {
            return;
        }
        const table = this.getTableNodeAndStart();
        if (table) {
            this.previewResolvedBorders(table.node, table.start, spacing);
        }
        this.applyPreviewStyle(container, (style)=>{
            style.setProperty("--ricos-internal-table-gap", `${spacing}px`);
        });
    }
    previewCellPadding(padding) {
        const container = this.getTableContainer();
        if (!container) {
            return;
        }
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizePadding"])(Array.isArray(padding) ? padding : [
            padding,
            padding,
            padding,
            padding
        ], [
            10,
            10,
            10,
            10
        ]);
        this.applyPreviewStyle(container, (style)=>{
            style.setProperty("--ricos-internal-table-cell-padding-top", `${normalized[0]}px`);
            style.setProperty("--ricos-internal-table-cell-padding-right", `${normalized[1] ?? normalized[0]}px`);
            style.setProperty("--ricos-internal-table-cell-padding-bottom", `${normalized[2] ?? normalized[0]}px`);
            style.setProperty("--ricos-internal-table-cell-padding-left", `${normalized[3] ?? normalized[1] ?? normalized[0]}px`);
        });
        const tableInfo = this.getTableNodeAndStart();
        const tableElement = this.getTableElement();
        const colgroup = tableElement?.querySelector("colgroup");
        if (!tableInfo || !tableElement || !colgroup) {
            return;
        }
        const previewTableNode = tableInfo.node.type.create({
            ...tableInfo.node.attrs,
            tableData: {
                ...tableInfo.node.attrs.tableData,
                cellPadding: normalized
            }
        }, tableInfo.node.content, tableInfo.node.marks);
        this.track(tableElement);
        for (const col of Array.from(colgroup.children)){
            if (col instanceof HTMLElement) {
                this.track(col);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateColumns"])({
            node: previewTableNode,
            colgroup,
            table: tableElement,
            cellMinWidth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinColumnWidthForPadding"])(normalized),
            commands: this.editor.commands,
            shouldUpdateState: false
        });
    }
    previewBorder(scope, change) {
        const state = this.getStateWithCellSelection();
        if (!state) {
            return;
        }
        const tr = state.tr;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$apply$2d$table$2d$border$2d$change$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTableBorderChangeToTransaction"])(tr, state, scope, change)) {
            return;
        }
        if (!tr.docChanged) {
            return;
        }
        const previewState = state.apply(tr);
        const previewTable = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(previewState.selection);
        if (!previewTable) {
            return;
        }
        const tableNode = previewTable.getNode();
        const cellSpacing = tableNode.attrs.tableData?.cellSpacing ?? 0;
        const tableStart = previewTable.getStartPos();
        this.previewResolvedBorders(tableNode, tableStart, cellSpacing);
    }
}
const createTableStylePreview = (editor, capturedCells = null)=>new TableStylePreview(editor, capturedCells);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/background-color-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundColorButton",
    ()=>BackgroundColorButton,
    "createBackgroundColorButton",
    ()=>createBackgroundColorButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ColorBucket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBucket$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ColorBucket.js [app-client] (ecmascript) <export default as ColorBucket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$color$2d$swatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/color-swatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$modals$2f$table$2d$cell$2d$color$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/modals/table-cell-color-picker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$capture$2d$table$2d$cell$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/capture-table-cell-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/resolvers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$table$2d$style$2d$preview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/table-style-preview.js [app-client] (ecmascript)");
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
const BackgroundColorButton = ({ dataHook, toolbarItem })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const colors = toolbarItem.attributes.backgroundColors ?? [];
    const hasColors = colors.length > 0;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        ref: setReferenceElement,
        prefix: hasColors ? ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$color$2d$swatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorSwatch"], {
                colors
            }) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ColorBucket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBucket$3e$__["ColorBucket"],
        onClick: ()=>{
            toolbarItem.commands.click({
                referenceElement
            });
        },
        dataHook,
        tooltip: t("TablePlugin_Toolbar_BGColor_Tooltip"),
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
const createBackgroundColorButton = (services)=>({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].BACKGROUND_COLOR,
        type: "modal",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_BACKGROUND_COLOR_BUTTON"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ColorBucket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBucket$3e$__["ColorBucket"],
        tooltip: "TablePlugin_Toolbar_BGColor_Tooltip",
        command: ({ modals, tiptapEditor, referenceElement, attributes })=>{
            const modalId = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COLOR_PICKER"];
            const isModalOpen = modals.isModalOpen(modalId);
            if (isModalOpen) {
                modals.closeModal(modalId);
                return;
            }
            const firstCellId = attributes.firstSelectedCellId;
            if (!firstCellId) {
                return;
            }
            const selectedCellPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$capture$2d$table$2d$cell$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureSelectedCellPositions"])(tiptapEditor, attributes.selectedCellIds);
            const backgroundPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$table$2d$style$2d$preview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTableStylePreview"])(tiptapEditor, selectedCellPositions);
            modals.togglePluginPanel({
                id: modalId,
                isMobile: services.context.isMobile,
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$modals$2f$table$2d$cell$2d$color$2d$picker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCellColorPicker"],
                positioning: {
                    placement: "bottom",
                    referenceElement
                },
                onClickOutside: {
                    on: "pointerup",
                    handler: ()=>{}
                },
                componentProps: {
                    modalId,
                    nodeId: firstCellId,
                    referenceElement,
                    onColorPreview: (color)=>{
                        backgroundPreview.previewCellBackground(color);
                    },
                    onColorPreviewEnd: ()=>{
                        backgroundPreview.restore();
                    },
                    onColorSelected: (color)=>{
                        backgroundPreview.restore();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$capture$2d$table$2d$cell$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runWithTableCellSelection"])(tiptapEditor, selectedCellPositions, ()=>{
                            tiptapEditor.chain().focus().updateCellAttribute("cellStyle", {
                                backgroundColor: color
                            }).run();
                        });
                    }
                }
            });
        },
        attributes: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellBackgroundColorResolver"],
            backgroundColors: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellBackgroundColorsResolver"],
            firstSelectedCellId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firstSelectedCellIdResolver"],
            selectedCellIds: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedCellIdsResolver"]
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(BackgroundColorButton, {
                toolbarItem
            })
    });
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/border-scope-selector-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>border_scope_selector_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "e41055ac";
const injectCss = ()=>{
    var css = `._7Xi5A .Bottom.border,._7Xi5A .Left.border,._7Xi5A .Middle.border.horizontal,._7Xi5A .Middle.border.vertical,._7Xi5A .Right.border,._7Xi5A .Top.border{fill:#cfd1dc}.xW07B{inset:0;position:absolute}.xW07B .Top.border{fill:var(--border-top-fill)}.xW07B .Right.border{fill:var(--border-right-fill)}.xW07B .Bottom.border{fill:var(--border-bottom-fill)}.xW07B .Left.border{fill:var(--border-left-fill)}.xW07B .Middle.border.horizontal{fill:var(--border-middle-h-fill)}.xW07B .Middle.border.vertical{fill:var(--border-middle-v-fill)}`;
    var isTest = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && false;
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
var border_scope_selector_default = {
    "cellBordersIconBase": "_7Xi5A",
    "cellBordersIconOverlay": "xW07B"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/border-scope-selector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BORDER_SCOPE_BUTTON_PREFIX",
    ()=>BORDER_SCOPE_BUTTON_PREFIX,
    "BorderScopeSelector",
    ()=>BorderScopeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleButton$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/ToggleButton/ToggleButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$CellBorders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CellBorders$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/CellBorders.js [app-client] (ecmascript) <export default as CellBorders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$CellBordersSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CellBordersSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/CellBordersSmall.js [app-client] (ecmascript) <export default as CellBordersSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$border$2d$scope$2d$selector$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/border-scope-selector-scss.js [app-client] (ecmascript)");
;
;
;
;
;
const BORDER_SCOPE_BUTTON_PREFIX = "border-scope-";
const SCOPE_OPTIONS = [
    {
        type: "borders",
        borders: {
            top: true,
            right: true,
            bottom: true,
            left: true,
            middleH: true,
            middleV: true
        },
        labelKey: "TablePlugin_Toolbar_BorderScope_AllBorders"
    },
    {
        type: "outsideBorders",
        borders: {
            top: true,
            right: true,
            bottom: true,
            left: true,
            middleH: false,
            middleV: false
        },
        labelKey: "TablePlugin_Toolbar_BorderScope_OuterBorders"
    },
    {
        type: "top",
        borders: {
            top: true,
            right: false,
            bottom: false,
            left: false,
            middleH: false,
            middleV: false
        },
        labelKey: "TablePlugin_Toolbar_BorderScope_TopBorder"
    },
    {
        type: "left",
        borders: {
            top: false,
            right: false,
            bottom: false,
            left: true,
            middleH: false,
            middleV: false
        },
        labelKey: "TablePlugin_Toolbar_BorderScope_LeftBorder"
    },
    {
        type: "right",
        borders: {
            top: false,
            right: true,
            bottom: false,
            left: false,
            middleH: false,
            middleV: false
        },
        labelKey: "TablePlugin_Toolbar_BorderScope_RightBorder"
    },
    {
        type: "bottom",
        borders: {
            top: false,
            right: false,
            bottom: true,
            left: false,
            middleH: false,
            middleV: false
        },
        labelKey: "TablePlugin_Toolbar_BorderScope_BottomBorder"
    },
    {
        type: "inner",
        borders: {
            top: false,
            right: false,
            bottom: false,
            left: false,
            middleH: true,
            middleV: true
        },
        labelKey: "TablePlugin_Toolbar_BorderScope_AllInner",
        getDisabled: ({ canInnerH, canInnerV })=>!canInnerH || !canInnerV
    },
    {
        type: "innerHorizontal",
        borders: {
            top: false,
            right: false,
            bottom: false,
            left: false,
            middleH: true,
            middleV: false
        },
        labelKey: "TablePlugin_Toolbar_BorderScope_InnerHorizontal",
        getDisabled: ({ canInnerH })=>!canInnerH
    },
    {
        type: "innerVertical",
        borders: {
            top: false,
            right: false,
            bottom: false,
            left: false,
            middleH: false,
            middleV: true
        },
        labelKey: "TablePlugin_Toolbar_BorderScope_InnerVertical",
        getDisabled: ({ canInnerV })=>!canInnerV
    }
];
const getBorderFills = (borders, isDisabled)=>{
    const activeColor = isDisabled ? "#969696" : "currentColor";
    return {
        "--border-top-fill": borders.top ? activeColor : "transparent",
        "--border-right-fill": borders.right ? activeColor : "transparent",
        "--border-bottom-fill": borders.bottom ? activeColor : "transparent",
        "--border-left-fill": borders.left ? activeColor : "transparent",
        "--border-middle-h-fill": borders.middleH ? activeColor : "transparent",
        "--border-middle-v-fill": borders.middleV ? activeColor : "transparent"
    };
};
const BorderScopeSelector = ({ selectedScope, onScopeChange, canInnerHorizontal, canInnerVertical })=>{
    const { t, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const Icon = isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$CellBorders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CellBorders$3e$__["CellBorders"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$CellBordersSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CellBordersSmall$3e$__["CellBordersSmall"];
    const rows = [
        SCOPE_OPTIONS.slice(0, 3),
        SCOPE_OPTIONS.slice(3, 6),
        SCOPE_OPTIONS.slice(6, 9)
    ];
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        padding: "18px",
        direction: "vertical",
        gap: "6px",
        align: "center"
    }, rows.map((row, rowIndex)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            key: rowIndex,
            gap: "6px"
        }, row.map((option)=>{
            const isDisabled = option.getDisabled?.({
                canInnerH: canInnerHorizontal,
                canInnerV: canInnerVertical
            });
            const isSelected = selectedScope === option.type;
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ToggleButton$2f$ToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
                key: option.type,
                dataHook: `${BORDER_SCOPE_BUTTON_PREFIX}${option.type}`,
                size: isMobile ? "small" : "medium",
                shape: "square",
                selected: isSelected,
                disabled: isDisabled,
                labelValue: t(option.labelKey),
                labelPlacement: "tooltip",
                onClick: ()=>!isDisabled && onScopeChange(option.type)
            }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                position: "relative"
            }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Icon, {
                size: isMobile ? 18 : 24,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$border$2d$scope$2d$selector$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cellBordersIconBase
            }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Icon, {
                size: isMobile ? 18 : 24,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$border$2d$scope$2d$selector$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cellBordersIconOverlay,
                style: getBorderFills(option.borders, isDisabled)
            })));
        }))));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/border-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BorderButton",
    ()=>BorderButton,
    "createBorderButton",
    ()=>createBorderButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AllBorders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AllBorders$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/AllBorders.js [app-client] (ecmascript) <export default as AllBorders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$color$2d$swatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/color-swatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$modals$2f$border$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/modals/border-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$apply$2d$table$2d$border$2d$change$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/apply-table-border-change.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$capture$2d$table$2d$cell$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/capture-table-cell-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/resolvers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$table$2d$style$2d$preview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/table-style-preview.js [app-client] (ecmascript)");
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
const BorderButton = ({ dataHook, toolbarItem })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const colors = toolbarItem.attributes.borderColors ?? [];
    const hasColors = colors.length > 0;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        ref: setReferenceElement,
        prefix: hasColors ? ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$color$2d$swatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorSwatch"], {
                colors
            }) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AllBorders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AllBorders$3e$__["AllBorders"],
        onClick: ()=>{
            toolbarItem.commands.click({
                referenceElement
            });
        },
        dataHook,
        tooltip: t("TablePlugin_Toolbar_Border_Color"),
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
const openBorderModal = ({ modals, services, referenceElement, componentProps })=>{
    modals.togglePluginPanel({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COLOR_PICKER"],
        isMobile: services.context.isMobile,
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$modals$2f$border$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BorderModal"],
        positioning: {
            placement: "bottom",
            referenceElement
        },
        onClickOutside: {
            on: "pointerup",
            handler: (e)=>{
                e.preventDefault();
                e.stopPropagation();
            }
        },
        componentProps
    });
};
const createBorderButton = (services)=>({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].BORDER,
        type: "modal",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_BORDER_COLOR_BUTTON"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$AllBorders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AllBorders$3e$__["AllBorders"],
        tooltip: "TablePlugin_Toolbar_Border_Color",
        command: ({ tiptapEditor, attributes, modals, referenceElement })=>{
            const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(tiptapEditor.state.selection);
            const rowsCount = table?.getRowsIndexesInSelection().length ?? 0;
            const colsCount = table?.getColsIndexesInSelection().length ?? 0;
            const canInnerHorizontal = rowsCount > 1;
            const canInnerVertical = colsCount > 1;
            let currentBorderScope = "borders";
            const handleBorderScopeChange = (scope)=>{
                currentBorderScope = scope;
            };
            const selectedCellPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$capture$2d$table$2d$cell$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureSelectedCellPositions"])(tiptapEditor, attributes?.selectedCellIds);
            const borderPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$table$2d$style$2d$preview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTableStylePreview"])(tiptapEditor, selectedCellPositions);
            const handleOnChange = (color, width)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$capture$2d$table$2d$cell$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runWithTableCellSelection"])(tiptapEditor, selectedCellPositions, ()=>{
                    const { state, view } = tiptapEditor;
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(state.selection)) {
                        return;
                    }
                    const tr = state.tr;
                    const change = width !== void 0 ? {
                        width
                    } : {
                        color
                    };
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$apply$2d$table$2d$border$2d$change$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTableBorderChangeToTransaction"])(tr, state, currentBorderScope, change) && tr.docChanged) {
                        view.dispatch(tr);
                    }
                });
            };
            openBorderModal({
                services,
                referenceElement,
                modals,
                componentProps: {
                    referenceElement,
                    nodeId: attributes?.firstSelectedCellId,
                    color: attributes?.cellBorderColor,
                    borderWidth: attributes?.cellBorderWidth,
                    borderScope: "borders",
                    onBorderScopeChange: handleBorderScopeChange,
                    canInnerHorizontal,
                    canInnerVertical,
                    onColorPreview: (color)=>{
                        borderPreview.previewBorder(currentBorderScope, {
                            color
                        });
                    },
                    onColorPreviewEnd: ()=>{
                        borderPreview.restore();
                    },
                    onColorCommit: (color)=>{
                        borderPreview.restore();
                        queueMicrotask(()=>handleOnChange(color, void 0));
                    },
                    onBorderWidthPreview: (width)=>{
                        borderPreview.previewBorder(currentBorderScope, {
                            width
                        });
                    },
                    onBorderWidthCommit: (finalValue)=>{
                        borderPreview.restore();
                        queueMicrotask(()=>handleOnChange(void 0, finalValue));
                    }
                }
            });
        },
        attributes: {
            cellBorderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellBorderColorResolver"],
            cellBorderWidth: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellBorderWidthResolver"],
            borderColors: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellBorderColorsResolver"],
            selectedCategory: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectionCategoryResolver"],
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedNodeResolver"],
            firstSelectedCellId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firstSelectedCellIdResolver"],
            selectedCellIds: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedCellIdsResolver"]
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(BorderButton, {
                toolbarItem
            })
    });
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/data-hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BORDER_COLOR_ALL",
    ()=>BORDER_COLOR_ALL,
    "BORDER_COLOR_AROUND",
    ()=>BORDER_COLOR_AROUND,
    "CLEAR",
    ()=>CLEAR,
    "DELETE_COLUMN",
    ()=>DELETE_COLUMN,
    "DELETE_ROW",
    ()=>DELETE_ROW,
    "DELETE_TABLE",
    ()=>DELETE_TABLE,
    "DISTRIBUTE_COLUMNS",
    ()=>DISTRIBUTE_COLUMNS,
    "DISTRIBUTE_ROWS",
    ()=>DISTRIBUTE_ROWS,
    "INSERT_ABOVE",
    ()=>INSERT_ABOVE,
    "INSERT_BELOW",
    ()=>INSERT_BELOW,
    "INSERT_LEFT",
    ()=>INSERT_LEFT,
    "INSERT_RIGHT",
    ()=>INSERT_RIGHT,
    "SELECT_COLUMN",
    ()=>SELECT_COLUMN
]);
const BORDER_COLOR_AROUND = "border-color-around";
const BORDER_COLOR_ALL = "border-color-all";
const DELETE_ROW = "delete-row";
const DELETE_COLUMN = "delete-column";
const DELETE_TABLE = "delete-table";
const INSERT_ABOVE = "insert-above";
const INSERT_BELOW = "insert-below";
const INSERT_LEFT = "insert-left";
const INSERT_RIGHT = "insert-right";
const DISTRIBUTE_COLUMNS = "distribute-columns";
const DISTRIBUTE_ROWS = "distribute-rows";
const SELECT_COLUMN = "select-column";
const CLEAR = "clear";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTEXT_PANEL_OPTIONS",
    ()=>CONTEXT_PANEL_OPTIONS,
    "INSERT_PANEL_OPTIONS",
    ()=>INSERT_PANEL_OPTIONS,
    "clear",
    ()=>clear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowLeftRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ArrowLeftRight.js [app-client] (ecmascript) <export default as ArrowLeftRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowLeftRightSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRightSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ArrowLeftRightSmall.js [app-client] (ecmascript) <export default as ArrowLeftRightSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowUpDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ArrowUpDown.js [app-client] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowUpDownSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDownSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ArrowUpDownSmall.js [app-client] (ecmascript) <export default as ArrowUpDownSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Delete$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Delete.js [app-client] (ecmascript) <export default as Delete>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DeleteSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DeleteSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/DeleteSmall.js [app-client] (ecmascript) <export default as DeleteSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Erase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Erase$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Erase.js [app-client] (ecmascript) <export default as Erase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$EraseSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EraseSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/EraseSmall.js [app-client] (ecmascript) <export default as EraseSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingBottom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingBottom$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/PaddingBottom.js [app-client] (ecmascript) <export default as PaddingBottom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingBottomSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingBottomSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/PaddingBottomSmall.js [app-client] (ecmascript) <export default as PaddingBottomSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingLeft$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/PaddingLeft.js [app-client] (ecmascript) <export default as PaddingLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingLeftSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingLeftSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/PaddingLeftSmall.js [app-client] (ecmascript) <export default as PaddingLeftSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingRight$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/PaddingRight.js [app-client] (ecmascript) <export default as PaddingRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingRightSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingRightSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/PaddingRightSmall.js [app-client] (ecmascript) <export default as PaddingRightSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingTop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingTop$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/PaddingTop.js [app-client] (ecmascript) <export default as PaddingTop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingTopSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingTopSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/PaddingTopSmall.js [app-client] (ecmascript) <export default as PaddingTopSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/data-hooks.js [app-client] (ecmascript)");
;
;
;
;
;
const deleteRow = {
    key: "deleteRow",
    dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_ROW"],
    title: "TablePlugin_Toolbar_ContextMenu_DeleteRow_Button",
    commandKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].DELETE_ROW,
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Delete$3e$__["Delete"],
    iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DeleteSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DeleteSmall$3e$__["DeleteSmall"],
    publishBi: (pluginsEvents, nodeId)=>pluginsEvents.publishTableDeleteColumnRow({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
            nodeId,
            category: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ROW
        })
};
const deleteCol = {
    key: "deleteCol",
    dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_COLUMN"],
    title: "TablePlugin_Toolbar_ContextMenu_DeleteCol_Button",
    commandKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].DELETE_COLUMN,
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Delete$3e$__["Delete"],
    iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DeleteSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DeleteSmall$3e$__["DeleteSmall"],
    publishBi: (pluginsEvents, nodeId)=>pluginsEvents.publishTableDeleteColumnRow({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
            nodeId,
            category: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].COLUMN
        })
};
const deleteTable = {
    key: "deleteTable",
    dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_TABLE"],
    title: "TablePlugin_Toolbar_ContextMenu_DeleteTable_Button",
    commandKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].DELETE_TABLE,
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Delete$3e$__["Delete"],
    iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$DeleteSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DeleteSmall$3e$__["DeleteSmall"],
    publishBi: (pluginsEvents, nodeId)=>pluginsEvents.publishTableDeleteColumnRow({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
            nodeId,
            category: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ENTIRE_TABLE
        })
};
const insertAbove = {
    key: "insertAbove",
    dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_ABOVE"],
    title: "TablePlugin_Toolbar_ContextMenu_InsertAbove_Button",
    commandKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].INSERT_ABOVE,
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingTop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingTop$3e$__["PaddingTop"],
    iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingTopSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingTopSmall$3e$__["PaddingTopSmall"],
    publishBi: (pluginsEvents, nodeId, category)=>pluginsEvents.publishTableAddRowCol({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
            nodeId,
            category,
            location: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATION"].ABOVE,
            source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOURCE"].CONTEXT_MENU
        })
};
const insertBelow = {
    key: "insertBelow",
    dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_BELOW"],
    title: "TablePlugin_Toolbar_ContextMenu_InsertBelow_Button",
    commandKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].INSERT_BELOW,
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingBottom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingBottom$3e$__["PaddingBottom"],
    iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingBottomSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingBottomSmall$3e$__["PaddingBottomSmall"],
    publishBi: (pluginsEvents, nodeId, category)=>pluginsEvents.publishTableAddRowCol({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
            nodeId,
            category,
            location: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATION"].BELOW,
            source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOURCE"].CONTEXT_MENU
        })
};
const insertRight = {
    key: "insertRight",
    dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_RIGHT"],
    title: "TablePlugin_Toolbar_ContextMenu_InsertRight_Button",
    commandKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].INSERT_RIGHT,
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingRight$3e$__["PaddingRight"],
    iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingRightSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingRightSmall$3e$__["PaddingRightSmall"],
    publishBi: (pluginsEvents, nodeId, category)=>pluginsEvents.publishTableAddRowCol({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
            nodeId,
            category,
            location: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATION"].RIGHT,
            source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOURCE"].CONTEXT_MENU
        })
};
const insertLeft = {
    key: "insertLeft",
    dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_LEFT"],
    title: "TablePlugin_Toolbar_ContextMenu_InsertLeft_Button",
    commandKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].INSERT_LEFT,
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingLeft$3e$__["PaddingLeft"],
    iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PaddingLeftSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaddingLeftSmall$3e$__["PaddingLeftSmall"],
    publishBi: (pluginsEvents, nodeId, category)=>pluginsEvents.publishTableAddRowCol({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
            nodeId,
            category,
            location: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATION"].LEFT,
            source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOURCE"].CONTEXT_MENU
        })
};
const distributeCols = {
    key: "distributeCols",
    dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DISTRIBUTE_COLUMNS"],
    title: "TablePlugin_Toolbar_ContextMenu_DistributeCols_Button",
    commandKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].DISTRIBUTE_COLUMNS,
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowLeftRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"],
    iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowLeftRightSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRightSmall$3e$__["ArrowLeftRightSmall"],
    publishBi: (pluginsEvents, nodeId, category)=>pluginsEvents.publishTableContextMenuOptionClick({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
            nodeId,
            category,
            actionName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].DISTRIBUTE_COLUMNS
        })
};
const distributeRows = {
    key: "distributeRows",
    dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DISTRIBUTE_ROWS"],
    title: "TablePlugin_Toolbar_ContextMenu_DistributeRows_Button",
    commandKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].DISTRIBUTE_ROWS,
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowUpDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"],
    iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowUpDownSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDownSmall$3e$__["ArrowUpDownSmall"],
    publishBi: (pluginsEvents, nodeId, category)=>pluginsEvents.publishTableContextMenuOptionClick({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
            nodeId,
            category,
            actionName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].DISTRIBUTE_ROWS
        })
};
const selectRows = {
    key: "selectRows",
    dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DISTRIBUTE_ROWS"],
    title: "TablePlugin_Toolbar_ContextMenu_SelectRow_Button",
    commandKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].SELECT_ROWS,
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment,
    iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment,
    publishBi: (pluginsEvents, nodeId, category)=>pluginsEvents.publishTableContextMenuOptionClick({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
            nodeId,
            category,
            actionName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].SELECT_ROWS
        })
};
const selectCols = {
    key: "selectCols",
    dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELECT_COLUMN"],
    title: "TablePlugin_Toolbar_ContextMenu_SelectCol_Button",
    commandKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].SELECT_COLUMNS,
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment,
    iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment,
    publishBi: (pluginsEvents, nodeId, category)=>pluginsEvents.publishTableContextMenuOptionClick({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
            nodeId,
            category,
            actionName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].SELECT_COLUMNS
        })
};
const clear = {
    key: "clear",
    dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLEAR"],
    title: "TablePlugin_Toolbar_ContextMenu_Clear_Button",
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Erase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Erase$3e$__["Erase"],
    iconSmall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$EraseSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EraseSmall$3e$__["EraseSmall"],
    commandKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].CLEAR,
    publishBi: (pluginsEvents, nodeId, category)=>pluginsEvents.publishTableContextMenuOptionClick({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
            nodeId,
            category,
            actionName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COMMANDS_KEYS"].CLEAR
        })
};
const INSERT_PANEL_OPTIONS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ROW]: [
        insertAbove,
        insertBelow
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].COLUMN]: [
        insertRight,
        insertLeft
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ENTIRE_TABLE]: [
        insertAbove,
        insertBelow,
        insertRight,
        insertLeft
    ]
};
const CONTEXT_PANEL_OPTIONS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ROW]: [
        distributeCols,
        "divider",
        clear,
        deleteRow
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].COLUMN]: [
        distributeRows,
        "divider",
        clear,
        deleteCol
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ENTIRE_TABLE]: [
        distributeRows,
        distributeCols,
        "divider",
        clear,
        deleteTable
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].RANGE]: [
        distributeRows,
        distributeCols
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ROW_RANGE]: [
        distributeRows,
        distributeCols
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].COLUMN_RANGE]: [
        distributeRows,
        distributeCols
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].CELL_BORDER]: [
        selectRows,
        selectCols
    ]
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/context-dropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextDropdown",
    ()=>ContextDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$events$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/plugins-events-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$dropdown$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/dropdown-modal/dropdown-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$divider$2f$list$2d$item$2d$divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/list-item-divider/list-item-divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/list-item-select/list-item-select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$toggle$2f$list$2d$item$2d$toggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/list-item-toggle/list-item-toggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/pm-node-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$node$2d$attrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/use-node-attrs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/consts.js [app-client] (ecmascript)");
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
const ContextDropdown = ({ onClick, closeModal, category, nodeId, showRowHeaderToggle, showColumnHeaderToggle, rowHeaderActive, columnHeaderActive, altText, onAltTextChange })=>{
    const { t, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const pluginsEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$events$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsEventsContext"]);
    const { pmNodeAttrs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$node$2d$attrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeAttrs"])(nodeId, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$pm$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PmNodeType"].TABLE);
    const rowHeaderSelected = pmNodeAttrs?.tableData ? !!pmNodeAttrs.tableData.rowHeader : !!rowHeaderActive;
    const colHeaderSelected = pmNodeAttrs?.tableData ? !!pmNodeAttrs.tableData.columnHeader : !!columnHeaderActive;
    const currentAltText = pmNodeAttrs?.tableData?.altText ?? altText;
    const [localAltText, setLocalAltText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentAltText || "");
    const options = [];
    if (showRowHeaderToggle) {
        options.push(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$toggle$2f$list$2d$item$2d$toggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemToggle"], {
            key: "toggle-header-row",
            dataHook: "table-context-toggle-header-row",
            title: t("TablePlugin_Toolbar_ContextMenu_HeaderRow_Title"),
            selected: rowHeaderSelected,
            onChange: ()=>onClick({
                    commandKey: "toggleHeaderRow"
                })
        }));
    }
    if (showColumnHeaderToggle) {
        options.push(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$toggle$2f$list$2d$item$2d$toggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemToggle"], {
            key: "toggle-header-col",
            dataHook: "table-context-toggle-header-col",
            title: t("TablePlugin_Toolbar_ContextMenu_HeaderColumn_Title"),
            selected: colHeaderSelected,
            onChange: ()=>onClick({
                    commandKey: "toggleHeaderColumn"
                })
        }));
    }
    if (showRowHeaderToggle || showColumnHeaderToggle) {
        options.push(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$divider$2f$list$2d$item$2d$divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemDivider"], {
            key: "divider-hdr"
        }));
    }
    if (onAltTextChange) {
        options.push(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            key: "alt-text",
            padding: "12px 20px",
            direction: "vertical"
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
            label: t("TablePlugin_Toolbar_ContextMenu_AltText_Label"),
            infoContent: t("TablePlugin_Toolbar_ContextMenu_AltText_InfoContent")
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            size: "small",
            dataHook: "table-alt-text-input",
            value: localAltText,
            placeholder: t("TablePlugin_Toolbar_ContextMenu_AltText_Placeholder"),
            onChange: (e)=>{
                setLocalAltText(e.target.value);
            },
            onBlur: ()=>{
                onAltTextChange(localAltText);
            },
            onKeyDown: (e)=>{
                if (e.key === "Enter") {
                    onAltTextChange(localAltText);
                }
                e.stopPropagation();
            }
        }))));
        options.push(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$divider$2f$list$2d$item$2d$divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemDivider"], {
            key: "divider-alt-text"
        }));
    }
    options.push(...(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTEXT_PANEL_OPTIONS"][category] || []).map((option, index)=>{
        if (option === "divider") {
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$divider$2f$list$2d$item$2d$divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemDivider"], {
                key: `divider-${index}`
            });
        }
        const { key, dataHook, title, commandKey, publishBi, icon: Icon, iconSmall: IconSmall } = option;
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemSelect"], {
            key,
            dataHook,
            title: t(title),
            prefix: isMobile ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Icon, null) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(IconSmall, null),
            onSelect: ()=>{
                onClick({
                    commandKey
                });
                closeModal();
                publishBi(pluginsEvents, nodeId, category);
            }
        });
    }));
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$dropdown$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownModal"], {
        options,
        onCloseButtonClick: closeModal,
        title: t("TablePlugin_Toolbar_ContextMenu_Header_Title")
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/context-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextButton",
    ()=>ContextButton,
    "createContextButton",
    ()=>createContextButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$More$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__More$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/More.js [app-client] (ecmascript) <export default as More>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$plugin$2d$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/create-plugin-toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$context$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/context-dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/resolvers.js [app-client] (ecmascript)");
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
const NoIcon = ()=>null;
const ContextButton = ({ dataHook, toolbarItem })=>{
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        dataHook,
        onClick: ()=>{
            toolbarItem.commands?.click({
                referenceElement
            });
        },
        ref: setReferenceElement,
        prefix: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$More$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__More$3e$__["More"],
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
const createContextButton = (services)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$plugin$2d$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPluginToolbarButton"])({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].CONTEXT,
        type: "modal",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_CONTEXT_MENU_BUTTON"],
        tooltip: null,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$More$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__More$3e$__["More"],
        getComponentProps: ({ tiptapEditor, attributes, t })=>{
            const category = attributes?.selectedCategory;
            const contextOptions = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTEXT_PANEL_OPTIONS"][category] || [];
            const showRowHeaderToggle = (category === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ENTIRE_TABLE || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirstRowSelected"])(tiptapEditor)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHeader"])("row")(tiptapEditor.state);
            const showColumnHeaderToggle = (category === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ENTIRE_TABLE || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirstColumnSelected"])(tiptapEditor)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHeader"])("column")(tiptapEditor.state);
            const options = [];
            if (showRowHeaderToggle) {
                options.push({
                    id: "toggleHeaderRow",
                    icon: NoIcon,
                    label: t("TablePlugin_Toolbar_ContextMenu_HeaderRow_Title")
                });
            }
            if (showColumnHeaderToggle) {
                options.push({
                    id: "toggleHeaderColumn",
                    icon: NoIcon,
                    label: t("TablePlugin_Toolbar_ContextMenu_HeaderColumn_Title")
                });
            }
            contextOptions.forEach((option)=>{
                if (option !== "divider") {
                    options.push({
                        id: option.commandKey,
                        icon: option.iconSmall,
                        label: t(option.title)
                    });
                }
            });
            return {
                options,
                onSelect: (commandKey)=>{
                    tiptapEditor.chain().focus()[commandKey]().run();
                }
            };
        },
        command: ({ tiptapEditor, modals, attributes, referenceElement })=>{
            const closeModal = ()=>modals.closeModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS_MODALS_ID"].CONTEXT);
            const isModalOpen = modals.isModalOpen(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS_MODALS_ID"].CONTEXT);
            if (isModalOpen) {
                closeModal();
                return;
            }
            const category = attributes?.selectedCategory;
            const nodeId = attributes?.selectedNode?.attrs?.id;
            const tableAttrs = attributes?.selectedNode?.attrs || {};
            const showRowHeaderToggle = (category === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ENTIRE_TABLE || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirstRowSelected"])(tiptapEditor)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHeader"])("row")(tiptapEditor.state);
            const showColumnHeaderToggle = (category === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ENTIRE_TABLE || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirstColumnSelected"])(tiptapEditor)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHeader"])("column")(tiptapEditor.state);
            modals.openModal({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS_MODALS_ID"].CONTEXT,
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$context$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextDropdown"],
                componentProps: {
                    onClick: (data)=>{
                        const chain = tiptapEditor.chain().focus();
                        if (data.commandKey === "toggleHeaderRow") {
                            chain.toggleHeaderRow().run();
                            return;
                        } else if (data.commandKey === "toggleHeaderColumn") {
                            chain.toggleHeaderColumn().run();
                            return;
                        } else {
                            chain[data.commandKey]().run();
                        }
                        closeModal();
                    },
                    closeModal,
                    category,
                    nodeId,
                    showRowHeaderToggle,
                    showColumnHeaderToggle,
                    rowHeaderActive: !!tableAttrs.tableData?.rowHeader,
                    columnHeaderActive: !!tableAttrs.tableData?.columnHeader,
                    ...category === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].ENTIRE_TABLE ? {
                        altText: tableAttrs.tableData?.altText || "",
                        onAltTextChange: (text)=>{
                            tiptapEditor.chain().setTableAltText(text).run();
                        }
                    } : {}
                },
                layout: services.context.isMobile ? "drawer" : "floating",
                positioning: {
                    referenceElement,
                    placement: "bottom"
                }
            });
            services.pluginsEvents.publishTableContextMenuClick({
                pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
                nodeId,
                category
            });
        },
        attributes: {
            selectedCategory: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectionCategoryResolver"],
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedNodeResolver"]
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ContextButton, {
                toolbarItem
            })
    });
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/insert-dropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InsertDropdown",
    ()=>InsertDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$dropdown$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/dropdown-modal/dropdown-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/list-item-select/list-item-select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/consts.js [app-client] (ecmascript)");
;
;
;
;
;
const InsertDropdown = ({ onClick, closeModal, category })=>{
    const { t, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const options = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_PANEL_OPTIONS"][category] || [];
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$dropdown$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownModal"], {
        options: options.map((option)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemSelect"], {
                key: option.key,
                dataHook: option.dataHook,
                title: t(option.title),
                prefix: isMobile ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(option.icon, null) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(option.iconSmall, null),
                onSelect: ()=>{
                    onClick({
                        commandKey: option.commandKey
                    });
                    closeModal();
                }
            })),
        onCloseButtonClick: closeModal,
        title: t("TablePlugin_Toolbar_ContextMenu_Header_Title")
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/add-row-col-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddRowColButton",
    ()=>AddRowColButton,
    "createInsertButton",
    ()=>createInsertButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Add$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Add.js [app-client] (ecmascript) <export default as Add>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-modals/modal-service-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$plugin$2d$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/create-plugin-toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/dropdown-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$insert$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/modals/insert-dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/resolvers.js [app-client] (ecmascript)");
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
const AddRowColButton = ({ dataHook, toolbarItem })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]) || {};
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isModalOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsModalOpen"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS_MODALS_ID"].INSERT));
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownButton"], {
        dataHook,
        active: isModalOpen,
        onClick: ()=>{
            toolbarItem.commands?.click({
                referenceElement
            });
        },
        ref: setReferenceElement,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Add$3e$__["Add"],
        tooltip: t("TablePlugin_Toolbar_AddRowCol_Tooltip"),
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
const createInsertButton = (services)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$plugin$2d$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPluginToolbarButton"])({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].INSERT,
        type: "modal",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_ADD_ROW_COL_BUTTON"],
        tooltip: "TablePlugin_Toolbar_AddRowCol_Tooltip",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Add$3e$__["Add"],
        getComponentProps: ({ tiptapEditor, attributes, t })=>{
            const category = attributes?.selectedCategory;
            const options = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_PANEL_OPTIONS"][category] || [];
            return {
                options: options.map((option)=>({
                        id: option.commandKey,
                        text: t(option.title),
                        icon: option.iconSmall,
                        dataHook: option.dataHook
                    })),
                onSelect: ()=>(commandKey)=>{
                        tiptapEditor.chain().focus()[commandKey]().run();
                    }
            };
        },
        command: ({ tiptapEditor, modals, attributes, referenceElement })=>{
            const closeModal = ()=>modals.closeModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS_MODALS_ID"].INSERT);
            const isModalOpen = modals.isModalOpen(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS_MODALS_ID"].INSERT);
            if (isModalOpen) {
                closeModal();
                return;
            }
            const category = attributes?.selectedCategory;
            modals.openModal({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS_MODALS_ID"].INSERT,
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$modals$2f$insert$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertDropdown"],
                componentProps: {
                    onClick: (data)=>{
                        tiptapEditor.chain().focus()[data.commandKey]().run();
                        closeModal();
                    },
                    closeModal,
                    category
                },
                layout: services.context.isMobile ? "drawer" : "floating",
                positioning: {
                    referenceElement,
                    placement: "bottom"
                }
            });
        },
        attributes: {
            selectedCategory: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectionCategoryResolver"],
            visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRowColOrTableSelectedResolver"]
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AddRowColButton, {
                toolbarItem
            })
    });
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/simple-toggle-buttons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMergeCellsButton",
    ()=>createMergeCellsButton,
    "createMoveColumnLeftButton",
    ()=>createMoveColumnLeftButton,
    "createMoveColumnRightButton",
    ()=>createMoveColumnRightButton,
    "createMoveRowDownButton",
    ()=>createMoveRowDownButton,
    "createMoveRowUpButton",
    ()=>createMoveRowUpButton,
    "createSplitCellButton",
    ()=>createSplitCellButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ArrowDown.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ArrowLeft.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ArrowRight.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ArrowUp.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$MergeCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MergeCell$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/MergeCell.js [app-client] (ecmascript) <export default as MergeCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SplitCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SplitCell$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/SplitCell.js [app-client] (ecmascript) <export default as SplitCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/resolvers.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const SimpleToggleButton = ({ toolbarItem, tooltipKey })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        tooltip: t(tooltipKey),
        onClick: ()=>toolbarItem.commands.click(),
        prefix: toolbarItem.presentation?.icon,
        dataHook: toolbarItem.presentation?.dataHook,
        tabIndex: toolbarItem.presentation.tabIndex,
        disabled: toolbarItem.attributes.disabled
    });
};
const createToggleButton = (config)=>({
        id: config.id,
        type: "toggle",
        tooltip: config.tooltip,
        icon: config.icon,
        dataHook: config.dataHook,
        command: ({ tiptapEditor })=>{
            config.execute(tiptapEditor.chain().focus()).run();
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SimpleToggleButton, {
                toolbarItem,
                tooltipKey: config.tooltip
            }),
        attributes: {
            disabled: config.disabled,
            visible: config.visible,
            alwaysVisible: config.visible
        }
    });
const createMoveColumnLeftButton = ()=>createToggleButton({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].MOVE_COLUMN_LEFT,
        tooltip: "TablePlugin_Toolbar_MoveColumnLeft_Tooltip",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_MOVE_COLUMN_LEFT_BUTTON"],
        execute: (chain)=>chain.moveColumns("left"),
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cannotMoveColumnLeftResolver"],
        visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isColumnSelectedResolver"]
    });
const createMoveColumnRightButton = ()=>createToggleButton({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].MOVE_COLUMN_RIGHT,
        tooltip: "TablePlugin_Toolbar_MoveColumnRight_Tooltip",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_MOVE_COLUMN_RIGHT_BUTTON"],
        execute: (chain)=>chain.moveColumns("right"),
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cannotMoveColumnRightResolver"],
        visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isColumnSelectedResolver"]
    });
const createMoveRowUpButton = ()=>createToggleButton({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].MOVE_ROW_UP,
        tooltip: "TablePlugin_Toolbar_MoveRowUp_Tooltip",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_MOVE_ROW_UP_BUTTON"],
        execute: (chain)=>chain.moveRows("up"),
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cannotMoveRowUpResolver"],
        visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRowSelectedResolver"]
    });
const createMoveRowDownButton = ()=>createToggleButton({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].MOVE_ROW_DOWN,
        tooltip: "TablePlugin_Toolbar_MoveRowDown_Tooltip",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ArrowDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_MOVE_ROW_DOWN_BUTTON"],
        execute: (chain)=>chain.moveRows("down"),
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cannotMoveRowDownResolver"],
        visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRowSelectedResolver"]
    });
const createMergeCellsButton = ()=>createToggleButton({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].MERGE_CELLS,
        tooltip: "TablePlugin_Toolbar_MergeCells_Button",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$MergeCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MergeCell$3e$__["MergeCell"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_MERGE_CELLS_BUTTON"],
        execute: (chain)=>chain.mergeCells(),
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cannotMergeCellsResolver"],
        visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCellSelectionResolver"]
    });
const createSplitCellButton = ()=>createToggleButton({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].SPLIT_CELL,
        tooltip: "TablePlugin_Toolbar_SplitCell_Button",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SplitCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SplitCell$3e$__["SplitCell"],
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_SPLIT_CELL_BUTTON"],
        execute: (chain)=>chain.splitCell(),
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cannotSplitCellResolver"],
        visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCellSelectionResolver"]
    });
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/spacing-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpacingButton",
    ()=>SpacingButton,
    "createSpacingButton",
    ()=>createSpacingButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Width$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Width$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Width.js [app-client] (ecmascript) <export default as Width>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$modals$2f$table$2d$spacing$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/modals/table-spacing-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$capture$2d$table$2d$cell$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/capture-table-cell-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/resolvers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$table$2d$style$2d$preview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/table-style-preview.js [app-client] (ecmascript)");
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
const SpacingButton = ({ dataHook, toolbarItem })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        ref: setReferenceElement,
        prefix: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Width$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Width$3e$__["Width"],
        onClick: ()=>{
            toolbarItem.commands?.click({
                referenceElement
            });
        },
        dataHook,
        tooltip: t("TablePlugin_Toolbar_Spacing_Tooltip"),
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
const createSpacingButton = (services)=>({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].SPACING,
        type: "modal",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_SPACING_BUTTON"],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Width$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Width$3e$__["Width"],
        tooltip: "TablePlugin_Toolbar_Spacing_Tooltip",
        command: ({ tiptapEditor, modals, attributes, referenceElement })=>{
            const modalId = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS_MODALS_ID"].SPACING;
            const isModalOpen = modals.isModalOpen(modalId);
            if (isModalOpen) {
                modals.closeModal(modalId);
                return;
            }
            const selectedCellPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$capture$2d$table$2d$cell$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureSelectedCellPositions"])(tiptapEditor, attributes?.selectedCellIds);
            const spacingPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$table$2d$style$2d$preview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTableStylePreview"])(tiptapEditor, selectedCellPositions);
            modals.togglePluginPanel({
                id: modalId,
                isMobile: services.context.isMobile,
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$modals$2f$table$2d$spacing$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableSpacingModal"],
                positioning: {
                    placement: "bottom",
                    referenceElement
                },
                componentProps: {
                    referenceElement,
                    nodeId: attributes?.selectedNode?.attrs?.id,
                    cellSpacing: attributes?.cellSpacing,
                    cellPadding: attributes?.cellPadding,
                    onCellSpacingPreview: (spacing)=>{
                        spacingPreview.previewCellSpacing(spacing);
                    },
                    onCellSpacingCommit: (spacing)=>{
                        spacingPreview.restore();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$capture$2d$table$2d$cell$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runWithTableCellSelection"])(tiptapEditor, selectedCellPositions, ()=>{
                            tiptapEditor.chain().setCellSpacing(spacing).run();
                        });
                    },
                    onCellPaddingPreview: (padding)=>{
                        spacingPreview.previewCellPadding(padding);
                    },
                    onCellPaddingCommit: (padding)=>{
                        spacingPreview.restore();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$capture$2d$table$2d$cell$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runWithTableCellSelection"])(tiptapEditor, selectedCellPositions, ()=>{
                            tiptapEditor.chain().setCellPadding(padding).run();
                        });
                    }
                }
            });
        },
        attributes: {
            cellSpacing: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellSpacingResolver"],
            cellPadding: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellPaddingResolver"],
            selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedNodeResolver"],
            selectedCellIds: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedCellIdsResolver"],
            visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTableSelectedResolver"]
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SpacingButton, {
                toolbarItem
            })
    });
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/text-alignment-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextAlignmentButton",
    ()=>TextAlignmentButton,
    "createTextAlignmentButton",
    ()=>createTextAlignmentButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ChevronDownSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ChevronDownSmall.js [app-client] (ecmascript) <export default as ChevronDownSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$TextAlignCenter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextAlignCenter$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/TextAlignCenter.js [app-client] (ecmascript) <export default as TextAlignCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$TextAlignLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextAlignLeft$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/TextAlignLeft.js [app-client] (ecmascript) <export default as TextAlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$TextAlignRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextAlignRight$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/TextAlignRight.js [app-client] (ecmascript) <export default as TextAlignRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$TextJustify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextJustify$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/TextJustify.js [app-client] (ecmascript) <export default as TextJustify>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$common$2d$plugins$2f$text$2d$align$2f$dropdown$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-common-plugins/text-align/dropdown/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$common$2d$plugins$2f$text$2d$align$2f$dropdown$2f$text$2d$alignment$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-common-plugins/text-align/dropdown/text-alignment-dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-modals/modal-service-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$plugin$2d$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/create-plugin-toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$alignment$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-alignment-in-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
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
const textAlignmentIcons = {
    left: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$TextAlignLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextAlignLeft$3e$__["TextAlignLeft"],
    center: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$TextAlignCenter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextAlignCenter$3e$__["TextAlignCenter"],
    right: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$TextAlignRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextAlignRight$3e$__["TextAlignRight"],
    justify: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$TextJustify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextJustify$3e$__["TextJustify"]
};
const TextAlignmentButton = ({ toolbarItem, dataHook })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]) || {};
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const alignment = toolbarItem.attributes.selectedAlignment || "left";
    const Icon = textAlignmentIcons[alignment] || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$TextAlignLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextAlignLeft$3e$__["TextAlignLeft"];
    const isModalOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsModalOpen"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS_MODALS_ID"].TEXT_ALIGNMENT));
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        ref: setReferenceElement,
        disabled: toolbarItem.attributes.disabled,
        active: isModalOpen,
        tooltip: t("AlignTextDropdownButton_Tooltip"),
        onClick: ()=>{
            toolbarItem.commands?.click({
                referenceElement
            });
        },
        prefix: Icon,
        suffix: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ChevronDownSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownSmall$3e$__["ChevronDownSmall"],
        dataHook,
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
const createTextAlignmentButton = (services)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$plugin$2d$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPluginToolbarButton"])({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].TEXT_ALIGNMENT,
        type: "dropdown",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_TEXT_ALIGNMENT_BUTTON"],
        getIcon: ({ attributes })=>{
            const alignment = attributes?.selectedAlignment || "left";
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$common$2d$plugins$2f$text$2d$align$2f$dropdown$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALIGNMENT_BUTTON_CONFIGS"][alignment]?.icon || textAlignmentIcons.left;
        },
        tooltip: "AlignTextDropdownButton_Tooltip",
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$common$2d$plugins$2f$text$2d$align$2f$dropdown$2f$text$2d$alignment$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        getComponentProps: ({ modals, publicCommands })=>{
            return {
                closeModal: ()=>modals.closeModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS_MODALS_ID"].TEXT_ALIGNMENT),
                dropdownOptions: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$common$2d$plugins$2f$text$2d$align$2f$dropdown$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALIGNMENT_BUTTON_CONFIGS"]).map((item)=>({
                        id: item.commandKey,
                        dataHook: item.dataHook,
                        label: services.t(item.text),
                        icon: item.icon,
                        iconMobile: item.iconMobile
                    })),
                onSelect: (alignment)=>{
                    publicCommands.setTextAlignment(alignment);
                },
                selectedId: publicCommands.getTextAlignment() || "left"
            };
        },
        command: ({ modals, referenceElement, publicCommands, getComponentProps, tiptapEditor, attributes })=>{
            const modalId = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS_MODALS_ID"].TEXT_ALIGNMENT;
            const closeModal = ()=>modals.closeModal(modalId);
            const isModalOpen = modals.isModalOpen(modalId);
            if (isModalOpen) {
                closeModal();
                return;
            }
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
            modals.openModal({
                id: modalId,
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$common$2d$plugins$2f$text$2d$align$2f$dropdown$2f$text$2d$alignment$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                componentProps,
                layout: services.context.isMobile ? "drawer" : "floating",
                positioning: {
                    referenceElement,
                    placement: "bottom"
                }
            });
        },
        attributes: {
            selectedAlignment: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$alignment$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentInSelection"]
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(TextAlignmentButton, {
                toolbarItem
            })
    });
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/buttons/vertical-alignment-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createVerticalAlignmentButton",
    ()=>createVerticalAlignmentButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$plugin$2d$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/create-plugin-toolbar-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$VerticalAlignmentButton$2f$vertical$2d$alignment$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/toolbars-v3/components/buttons/VerticalAlignmentButton/vertical-alignment-dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$VerticalAlignmentButton$2f$vertical$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/toolbars-v3/components/buttons/VerticalAlignmentButton/vertical-alignment-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/resolvers.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const createVerticalAlignmentButton = (services)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$plugin$2d$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPluginToolbarButton"])({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_BUTTONS"].VERTICAL_ALIGNMENT,
        type: "dropdown",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_VERTICAL_ALIGNMENT_BUTTON"],
        getIcon: ({ attributes })=>{
            const verticalAlignment = attributes.verticalAlignment;
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$VerticalAlignmentButton$2f$vertical$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verticalAlignmentIcons"][verticalAlignment];
        },
        tooltip: "Toolbar_VerticalAlignment_Tooltip",
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$VerticalAlignmentButton$2f$vertical$2d$alignment$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerticalAlignmentDropdown"],
        getComponentProps: ({ tiptapEditor, modals, attributes })=>{
            return {
                onSelect: (verticalAlignment)=>{
                    tiptapEditor.chain().focus().updateCellAttribute("cellStyle", {
                        verticalAlignment
                    }).run();
                },
                selectedId: attributes.verticalAlignment,
                dropdownOptions: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$VerticalAlignmentButton$2f$vertical$2d$alignment$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERTICAL_ALIGNMENT_BUTTONS"]).map((item)=>({
                        id: item.commandKey,
                        dataHook: item.dataHook,
                        label: services.t(item.tooltip),
                        icon: item.iconSmall,
                        iconMobile: item.icon
                    })),
                closeModal: ()=>modals.closeModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$VerticalAlignmentButton$2f$vertical$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERTICAL_ALIGNMENT_MODAL_ID"])
            };
        },
        command: ({ modals, referenceElement, getComponentProps, tiptapEditor, attributes, publicCommands })=>{
            const closeModal = ()=>modals.closeModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$VerticalAlignmentButton$2f$vertical$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERTICAL_ALIGNMENT_MODAL_ID"]);
            const isModalOpen = modals.isModalOpen(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$VerticalAlignmentButton$2f$vertical$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERTICAL_ALIGNMENT_MODAL_ID"]);
            if (isModalOpen) {
                closeModal();
                return;
            }
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
            modals.openModal({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$VerticalAlignmentButton$2f$vertical$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERTICAL_ALIGNMENT_MODAL_ID"],
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$VerticalAlignmentButton$2f$vertical$2d$alignment$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerticalAlignmentDropdown"],
                componentProps,
                layout: services.context.isMobile ? "drawer" : "floating",
                positioning: {
                    referenceElement,
                    placement: "bottom"
                }
            });
        },
        attributes: {
            verticalAlignment: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$toolbar$2f$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVerticalAlignmentResolver"]
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$VerticalAlignmentButton$2f$vertical$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerticalAlignmentButton"], {
                toolbarItem
            })
    });
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/toolbar/get-table-for-animation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTableForAnimation",
    ()=>getTableForAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-in-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)");
;
;
const getTableForAnimation = (content, services, editor)=>{
    const nodeInSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeInSelection"])(content, services, editor);
    if (nodeInSelection) {
        return nodeInSelection;
    }
    const selection = editor?.state?.selection;
    if (selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"] && selection.isTableSelection()) {
        return selection.$anchorCell.node(-1);
    }
    return void 0;
};
;
}),
]);

//# sourceMappingURL=0rv~_%40wix_ricos_dist_es_plugin-table_toolbar_0nduzxa._.js.map