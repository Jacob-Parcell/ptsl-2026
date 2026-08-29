(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/defaults.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultTable",
    ()=>getDefaultTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
;
;
const getDefaultTable = (rowNum, colNum)=>{
    return Array(rowNum).fill(0).map((_)=>({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_ROW_TYPE"],
            content: Array(colNum).fill(0).map((_2)=>({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_CELL_TYPE"],
                    content: [
                        {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].PARAGRAPH,
                            content: []
                        }
                    ]
                }))
        }));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableMap",
    ()=>TableMap
]);
let readFromCache;
let addToCache;
if (typeof WeakMap !== "undefined") {
    let cache = /* @__PURE__ */ new WeakMap();
    readFromCache = (key)=>cache.get(key);
    addToCache = (key, value)=>{
        cache.set(key, value);
        return value;
    };
} else {
    const cache = [];
    const cacheSize = 10;
    let cachePos = 0;
    readFromCache = (key)=>{
        for(let i = 0; i < cache.length; i += 2){
            if (cache[i] == key) {
                return cache[i + 1];
            }
        }
    };
    addToCache = (key, value)=>{
        if (cachePos === cacheSize) {
            cachePos = 0;
        }
        cache[cachePos++] = key;
        return cache[cachePos++] = value;
    };
}
class TableMap {
    constructor(width, height, map, problems){
        this.width = width;
        this.height = height;
        this.map = map;
        this.problems = problems;
        this._cellPlacements = null;
    }
    get cellPlacements() {
        if (!this._cellPlacements) {
            this._cellPlacements = /* @__PURE__ */ new Map();
            const seen = /* @__PURE__ */ new Set();
            for(let row = 0; row < this.height; row++){
                for(let col = 0; col < this.width; col++){
                    const pos = this.map[row * this.width + col];
                    if (seen.has(pos)) {
                        continue;
                    }
                    seen.add(pos);
                    let right = col + 1;
                    while(right < this.width && this.map[row * this.width + right] === pos){
                        right++;
                    }
                    let bottom = row + 1;
                    while(bottom < this.height && this.map[bottom * this.width + col] === pos){
                        bottom++;
                    }
                    this._cellPlacements.set(pos, {
                        col,
                        row,
                        colspan: right - col,
                        rowspan: bottom - row
                    });
                }
            }
        }
        return this._cellPlacements;
    }
    // Find the placement of the cell at the given position.
    findCell(pos) {
        const placement = this.cellPlacements.get(pos);
        if (!placement) {
            throw new RangeError(`No cell with offset ${pos} found`);
        }
        return placement;
    }
    // Iterate each unique cell exactly once, in reading order (left-to-right, top-to-bottom).
    forEachCell(callback) {
        this.cellPlacements.forEach((placement, pos)=>callback(pos, placement));
    }
    // Find the left side of the cell at the given position.
    colCount(pos) {
        for(let i = 0; i < this.map.length; i++){
            if (this.map[i] == pos) {
                return i % this.width;
            }
        }
        throw new RangeError(`No cell with offset ${pos} found`);
    }
    // Find the next cell in the given direction, starting from the cell
    // at `pos`, if any.
    nextCell(pos, axis, dir) {
        const { col, row, colspan, rowspan } = this.findCell(pos);
        if (axis == "horiz") {
            if (dir < 0 ? col == 0 : col + colspan == this.width) {
                return null;
            }
            return this.map[row * this.width + (dir < 0 ? col - 1 : col + colspan)];
        } else {
            if (dir < 0 ? row == 0 : row + rowspan == this.height) {
                return null;
            }
            return this.map[col + this.width * (dir < 0 ? row - 1 : row + rowspan)];
        }
    }
    // Get the rectangle spanning the two given cells.
    rectBetween(...positions) {
        const placements = positions.map((pos)=>this.findCell(pos));
        let bounds = placements.reduce((acc, p)=>({
                top: Math.min(acc.top, p.row),
                left: Math.min(acc.left, p.col),
                bottom: Math.max(acc.bottom, p.row + p.rowspan),
                right: Math.max(acc.right, p.col + p.colspan)
            }), {
            top: placements[0].row,
            left: placements[0].col,
            bottom: placements[0].row + placements[0].rowspan,
            right: placements[0].col + placements[0].colspan
        });
        const visited = /* @__PURE__ */ new Set();
        const queue = [];
        for(let r = bounds.top; r < bounds.bottom; r++){
            for(let c = bounds.left; c < bounds.right; c++){
                const pos = this.map[r * this.width + c];
                if (!visited.has(pos)) {
                    visited.add(pos);
                    queue.push(pos);
                }
            }
        }
        while(queue.length){
            const pos = queue.shift();
            const p = this.findCell(pos);
            const newTop = Math.min(bounds.top, p.row);
            const newLeft = Math.min(bounds.left, p.col);
            const newBottom = Math.max(bounds.bottom, p.row + p.rowspan);
            const newRight = Math.max(bounds.right, p.col + p.colspan);
            const expanded = newTop < bounds.top || newLeft < bounds.left || newBottom > bounds.bottom || newRight > bounds.right;
            if (expanded) {
                bounds = {
                    top: newTop,
                    left: newLeft,
                    bottom: newBottom,
                    right: newRight
                };
                for(let r = bounds.top; r < bounds.bottom; r++){
                    for(let c = bounds.left; c < bounds.right; c++){
                        const p2 = this.map[r * this.width + c];
                        if (!visited.has(p2)) {
                            visited.add(p2);
                            queue.push(p2);
                        }
                    }
                }
                if (bounds.top === 0 && bounds.left === 0 && bounds.bottom === this.height && bounds.right === this.width) {
                    return bounds;
                }
            }
        }
        return bounds;
    }
    // Get the shallow rectangle spanning the two given cells.
    rectBetweenShallow(a, b) {
        const pa = this.findCell(a);
        const pb = this.findCell(b);
        return {
            left: Math.min(pa.col, pb.col),
            top: Math.min(pa.row, pb.row),
            right: Math.max(pa.col + pa.colspan, pb.col + pb.colspan),
            bottom: Math.max(pa.row + pa.rowspan, pb.row + pb.rowspan)
        };
    }
    // Return the position of all cells that have the top left corner in
    // the given rectangle.
    cellsInRect(rect) {
        const result = [];
        const seen = {};
        for(let row = rect.top; row < rect.bottom; row++){
            for(let col = rect.left; col < rect.right; col++){
                const index = row * this.width + col;
                const pos = this.map[index];
                if (seen[pos]) {
                    continue;
                }
                seen[pos] = true;
                if (col == rect.left && col && this.map[index - 1] == pos || row == rect.top && row && this.map[index - this.width] == pos) {
                    continue;
                }
                result.push(pos);
            }
        }
        return result;
    }
    // Return the position of all cells that overlap with the given rectangle,
    // including cells that start outside the rect but span into it.
    cellsOverlappingRect(rect) {
        const result = [];
        const seen = {};
        for(let row = rect.top; row < rect.bottom; row++){
            for(let col = rect.left; col < rect.right; col++){
                const index = row * this.width + col;
                const pos = this.map[index];
                if (seen[pos]) {
                    continue;
                }
                seen[pos] = true;
                result.push(pos);
            }
        }
        return result;
    }
    // Return the position at which the cell at the given row and column
    // starts, or would start, if a cell started there.
    positionAt(row, col, table) {
        for(let i = 0, rowStart = 0;; i++){
            const rowEnd = rowStart + table.child(i).nodeSize;
            if (i == row) {
                let index = col + row * this.width;
                const rowEndIndex = (row + 1) * this.width;
                while(index < rowEndIndex && this.map[index] < rowStart){
                    index++;
                }
                return index == rowEndIndex ? rowEnd - 1 : this.map[index];
            }
            rowStart = rowEnd;
        }
    }
    // Find the table map for the given table node.
    static get(table) {
        return readFromCache(table) || addToCache(table, computeMap(table));
    }
    // Build a table map from a grid of cells without ProseMirror nodes.
    // Each row is an array of physical cells with colspan/rowspan.
    // The map array stores sequential cell indices (0-based) instead of byte offsets.
    static fromGrid(rows) {
        const height = rows.length;
        if (height === 0) {
            return new TableMap(0, 0, [], null);
        }
        const width = findGridWidth(rows);
        const map = new Array(width * height).fill(0);
        let problems = null;
        let cellIndex = 0;
        for(let row = 0; row < height; row++){
            let mapPos = row * width;
            while(mapPos < (row + 1) * width && map[mapPos] !== 0){
                mapPos++;
            }
            for (const cell of rows[row]){
                while(mapPos < (row + 1) * width && map[mapPos] !== 0){
                    mapPos++;
                }
                const col = mapPos % width;
                for(let h = 0; h < cell.rowspan; h++){
                    if (h + row >= height) {
                        (problems || (problems = [])).push({
                            type: "overlong_rowspan",
                            pos: cellIndex,
                            n: cell.rowspan - h
                        });
                        break;
                    }
                    const start = (row + h) * width + col;
                    for(let w = 0; w < cell.colspan; w++){
                        if (map[start + w] === 0) {
                            map[start + w] = cellIndex + 1;
                        } else {
                            (problems || (problems = [])).push({
                                type: "collision",
                                row,
                                pos: cellIndex,
                                n: cell.colspan - w
                            });
                        }
                    }
                }
                mapPos += cell.colspan;
                cellIndex++;
            }
        }
        for(let i = 0; i < map.length; i++){
            map[i]--;
        }
        return new TableMap(width, height, map, problems);
    }
}
function computeMap(table) {
    if (table.type.spec.tableRole != "table") {
        throw new RangeError("Not a table node: " + table.type.name);
    }
    const width = findWidth(table), height = table.childCount;
    const map = [];
    let mapPos = 0;
    let problems = null;
    const colWidths = [];
    for(let i = 0, e = width * height; i < e; i++){
        map[i] = 0;
    }
    for(let row = 0, pos = 0; row < height; row++){
        const rowNode = table.child(row);
        pos++;
        for(let i = 0;; i++){
            while(mapPos < map.length && map[mapPos] != 0){
                mapPos++;
            }
            if (i == rowNode.childCount) {
                break;
            }
            const cellNode = rowNode.child(i);
            const { colspan, rowspan, colwidth } = cellNode.attrs;
            for(let h = 0; h < rowspan; h++){
                if (h + row >= height) {
                    (problems || (problems = [])).push({
                        type: "overlong_rowspan",
                        pos,
                        n: rowspan - h
                    });
                    break;
                }
                const start = mapPos + h * width;
                for(let w = 0; w < colspan; w++){
                    if (map[start + w] == 0) {
                        map[start + w] = pos;
                    } else {
                        (problems || (problems = [])).push({
                            type: "collision",
                            row,
                            pos,
                            n: colspan - w
                        });
                    }
                    const colW = colwidth && colwidth[w];
                    if (colW) {
                        const widthIndex = (start + w) % width * 2, prev = colWidths[widthIndex];
                        if (prev === null || prev != colW && colWidths[widthIndex + 1] == 1) {
                            colWidths[widthIndex] = colW;
                            colWidths[widthIndex + 1] = 1;
                        } else if (prev == colW) {
                            colWidths[widthIndex + 1]++;
                        }
                    }
                }
            }
            mapPos += colspan;
            pos += cellNode.nodeSize;
        }
        const expectedPos = (row + 1) * width;
        let missing = 0;
        while(mapPos < expectedPos){
            if (map[mapPos++] == 0) {
                missing++;
            }
        }
        if (missing) {
            (problems || (problems = [])).push({
                type: "missing",
                row,
                n: missing
            });
        }
        pos++;
    }
    if (width === 0 || height === 0) {
        (problems || (problems = [])).push({
            type: "zero_sized"
        });
    }
    const tableMap = new TableMap(width, height, map, problems);
    let badWidths = false;
    for(let i = 0; !badWidths && i < colWidths.length; i += 2){
        if (!(colWidths[i] === null) && colWidths[i + 1] < height) {
            badWidths = true;
        }
    }
    if (badWidths) {
        findBadColWidths(tableMap, colWidths, table);
    }
    return tableMap;
}
function findGridWidth(rows) {
    const height = rows.length;
    let width = 0;
    let carry = 0;
    const expiring = new Array(height + 1).fill(0);
    for(let row = 0; row < height; row++){
        carry -= expiring[row];
        let rowWidth = carry;
        for (const cell of rows[row]){
            rowWidth += cell.colspan;
            if (cell.rowspan > 1) {
                carry += cell.colspan;
                const expireAt = row + cell.rowspan;
                if (expireAt <= height) {
                    expiring[expireAt] += cell.colspan;
                }
            }
        }
        if (rowWidth > width) {
            width = rowWidth;
        }
    }
    return width;
}
function findWidth(table) {
    let width = -1;
    let hasRowSpan = false;
    for(let row = 0; row < table.childCount; row++){
        const rowNode = table.child(row);
        let rowWidth = 0;
        if (hasRowSpan) {
            for(let j = 0; j < row; j++){
                const prevRow = table.child(j);
                for(let i = 0; i < prevRow.childCount; i++){
                    const cell = prevRow.child(i);
                    if (j + cell.attrs.rowspan > row) {
                        rowWidth += cell.attrs.colspan;
                    }
                }
            }
        }
        for(let i = 0; i < rowNode.childCount; i++){
            const cell = rowNode.child(i);
            rowWidth += cell.attrs.colspan;
            if (cell.attrs.rowspan > 1) {
                hasRowSpan = true;
            }
        }
        if (width == -1) {
            width = rowWidth;
        } else if (width != rowWidth) {
            width = Math.max(width, rowWidth);
        }
    }
    return width;
}
function findBadColWidths(map, colWidths, table) {
    if (!map.problems) {
        map.problems = [];
    }
    const seen = {};
    for(let i = 0; i < map.map.length; i++){
        const pos = map.map[i];
        if (seen[pos]) {
            continue;
        }
        seen[pos] = true;
        const node = table.nodeAt(pos);
        if (!node) {
            throw new RangeError(`No cell with offset ${pos} found`);
        }
        let updated = null;
        const attrs = node.attrs;
        for(let j = 0; j < attrs.colspan; j++){
            const col = (i + j) % map.width;
            const colWidth = colWidths[col * 2];
            if (!(colWidth === null) && (!attrs.colwidth || attrs.colwidth[j] != colWidth)) {
                (updated || (updated = freshColWidth(attrs)))[j] = colWidth;
            }
        }
        if (updated) {
            map.problems.unshift({
                type: "colwidth mismatch",
                pos,
                colwidth: updated
            });
        }
    }
}
function freshColWidth(attrs) {
    if (attrs.colwidth) {
        return attrs.colwidth.slice();
    }
    const result = [];
    for(let i = 0; i < attrs.colspan; i++){
        result.push(0);
    }
    return result;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>table_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "cee1c972";
const injectCss = ()=>{
    var css = `.HxpWe{position:absolute;z-index:2000}.HxpWe._8e4iv{cursor:col-resize;height:20px;right:0;top:0;width:5px}.HxpWe._8e4iv:hover{border-right:1px solid var(--ricos-settings-action-color,var(--ricos-action-color,#116dff))}.HxpWe.VMzpp{bottom:0;left:0}.HxpWe.VMzpp:not(._9v8qb){cursor:row-resize;height:5px;width:20px}.HxpWe.VMzpp:not(._9v8qb):hover{border-bottom:1px solid var(--ricos-settings-action-color,var(--ricos-action-color,#116dff))}@keyframes T-AbR{0%{opacity:0}to{opacity:1}}.jPAPv{overflow:visible;pointer-events:none;z-index:2000}.jPAPv,.ys7N8{position:absolute}.ys7N8{cursor:col-resize;pointer-events:auto}.ys7N8:before{background-color:var(--ricos-settings-action-color,var(--ricos-action-color,#116dff));bottom:0;content:"";left:50%;margin-left:-1.5px;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .15s ease-in-out;width:3px}.ys7N8.jVKHj:before,.ys7N8.xvvUv:before,.ys7N8:hover:before{opacity:1}.ys7N8.jVKHj:before{transition:none}.ys7N8[data-table-edge=right]:before{left:auto;margin-left:0;right:0}.xTHF4{cursor:row-resize;pointer-events:auto;position:absolute}.xTHF4:before{background-color:var(--ricos-settings-action-color,var(--ricos-action-color,#116dff));content:"";height:3px;left:0;margin-top:-1.5px;opacity:0;pointer-events:none;position:absolute;right:0;top:50%;transition:opacity .15s ease-in-out}.xTHF4.jVKHj:before,.xTHF4.xvvUv:before,.xTHF4:hover:before{opacity:1}.xTHF4.jVKHj:before{transition:none}.xTHF4[data-table-edge=bottom]:before{bottom:0;margin-top:0;top:auto}.yesbE{bottom:calc(var(--ricos-internal-table-gap, 2px)*-.5);right:calc(-2px - var(--ricos-internal-table-gap, 0px)*.5);top:calc(var(--ricos-internal-table-gap, 2px)*-.5);width:3px}._3DCX-,.yesbE{animation:T-AbR .15s ease-in-out;background-color:var(--ricos-settings-action-color,var(--ricos-action-color,#116dff));pointer-events:none;position:absolute;z-index:2000}._3DCX-{bottom:calc(-2px - var(--ricos-internal-table-gap, 0px)*.5);height:3px;left:calc(var(--ricos-internal-table-gap, 2px)*-.5);right:calc(var(--ricos-internal-table-gap, 2px)*-.5)}.wHhma tr{height:auto!important}.Ve-vV,.Ve-vV *,.zxoz9,.zxoz9 *{cursor:grabbing!important}.tEe1J{bottom:0;top:0;transform:translateX(-50%);width:3px}._6wnNW,.tEe1J{background-color:var(--ricos-settings-action-color,var(--ricos-action-color,#116dff));border-radius:2px;pointer-events:none;position:absolute;z-index:2100}._6wnNW{height:3px;left:0;right:0;transform:translateY(-50%)}.Y2Bik{background-color:rgba(17,109,255,.15);border:2px solid var(--ricos-settings-action-color,var(--ricos-action-color,#116dff));border-radius:4px;box-sizing:border-box;pointer-events:none;z-index:2050}.-cK-e{--ricos-internal-table-border-color:var(--ricos-custom-table-border-color,rgba(var(--ricos-text-color-tuple,33,33,33),0.2));--table-handle-gap:12px;--table-selection-handle-space:10px;--table-add-button-size:18px;--table-vertical-padding:16px;clear:both;overflow:visible;padding:0;position:relative;width:100%}@supports (color:rgb(from #000 r g b/0.1)){.-cK-e{--ricos-internal-table-border-color:var(--ricos-custom-table-border-color,rgb(from var(--ricos-text-color,#212121) r g b/0.2))}}._4Z15n{margin-bottom:max(0px,16px - var(--table-border-bottom,1px));margin-left:4px;margin-right:3px;overflow-x:auto;overflow-y:hidden;padding:max(16px,var(--table-border-top,0px)) max(3px,var(--table-border-right,0px),var(--ricos-internal-table-gap,0px) * .5) var(--table-border-bottom,1px) max(10px,var(--table-border-left,0px),var(--ricos-internal-table-gap,0px) * .5);position:relative}[data-breakout] ._4Z15n{margin-left:calc(max(10px, var(--table-border-left, 0px), var(--ricos-internal-table-gap, 0px) * .5)*-1 + var(--table-border-left, 0px))}._4Z15n::-webkit-scrollbar{-webkit-appearance:none;height:10px}._4Z15n::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.5);border:2px solid #fff;border-radius:8px}.bG5mK{align-items:center;display:none;padding-left:16px;pointer-events:none;position:absolute;right:4px;z-index:2100}.bG5mK>*{pointer-events:auto}.rxf-F{display:none;justify-content:center;pointer-events:none;position:absolute;z-index:2100}.rxf-F>*{pointer-events:auto}.pbH7l{display:none;justify-content:center;pointer-events:none;position:absolute;z-index:2100}.pbH7l>*{pointer-events:auto}.Lxbla .bG5mK,.Lxbla .pbH7l,.Lxbla .rxf-F{display:flex}._4Z15n table,.ahLiT{position:relative}._4Z15n table{border-collapse:collapse;isolation:isolate;min-width:100%;table-layout:fixed;width:100%}._4Z15n table th{background-color:var(--ricos-custom-table-background-color,rgba(var(--ricos-text-color-tuple,33,33,33),.04))}@supports (color:rgb(from #000 r g b/0.1)){._4Z15n table th{background-color:var(--ricos-custom-table-background-color,rgb(from var(--ricos-text-color,#212121) r g b/.04))}}._4Z15n table td,._4Z15n table th{border:none;box-sizing:border-box;cursor:default;padding:0;position:relative;text-align:initial;vertical-align:top}._4Z15n table td .db2Cu,._4Z15n table th .db2Cu{overflow:hidden;padding:var(--ricos-internal-table-cell-padding-top,10px) var(--ricos-internal-table-cell-padding-right,10px) var(--ricos-internal-table-cell-padding-bottom,10px) var(--ricos-internal-table-cell-padding-left,10px)}._4Z15n table td .db2Cu>*,._4Z15n table th .db2Cu>*{cursor:auto}._4Z15n table .SRZXZ{background-color:var(--ricos-table-cell-background-color-preview)!important}._4Z15n table .SRZXZ .db2Cu{position:relative;z-index:1}._4Z15n table pre{margin-inline:0}.a28mK:after,.jLiIY:after{content:"";inset:.75px;outline:1.5px solid #116dff!important;pointer-events:none;position:absolute;z-index:var(--ricos-table-selection-overlay-z,2000)}.jLiIY:after{background-color:var(--ricos-table-preview-selection-color,rgba(var(--ricos-settings-action-color-tuple,var(--ricos-action-color-tuple,2,97,255)),.2))}@supports (color:rgb(from #000 r g b/0.1)){.jLiIY:after{background-color:var(--ricos-table-preview-selection-color,rgb(from var(--ricos-settings-action-color,var(--ricos-action-color,#116dff)) r g b/.2))}}._4Z15n table td,._4Z15n table th{background-clip:padding-box;border-bottom:0 solid transparent;border-left:0 solid transparent;border-left-width:var(--ricos-internal-table-gap,0);border-right:0 solid transparent;border-top:0 solid transparent;border-top-width:var(--ricos-internal-table-gap,0)}._4Z15n table .MNbee{background-color:var(--bt-c,transparent);height:var(--bt-w,0);left:var(--bt-es,0);pointer-events:none;position:absolute;right:var(--bt-ee,0);top:calc(var(--bt-w, 0px)/-2);z-index:var(--bt-z,1)}._4Z15n table .fC2pO{background-color:var(--bb-c,transparent);bottom:calc(var(--bb-w, 0px)/-2);height:var(--bb-w,0);left:var(--bb-es,0);pointer-events:none;position:absolute;right:var(--bb-ee,0);z-index:var(--bb-z,1)}._4Z15n table ._3Oe5H{background-color:var(--bl-c,transparent);bottom:var(--bl-ee,0);left:calc(var(--bl-w, 0px)/-2);pointer-events:none;position:absolute;top:var(--bl-es,0);width:var(--bl-w,0);z-index:var(--bl-z,1)}._4Z15n table .zM6oK{background-color:var(--br-c,transparent);bottom:var(--br-ee,0);pointer-events:none;position:absolute;right:calc(var(--br-w, 0px)/-2);top:var(--br-es,0);width:var(--br-w,0);z-index:var(--br-z,1)}._4Z15n table td[data-visual-col="0"],._4Z15n table th[data-visual-col="0"]{border-left-width:0}._4Z15n table td[data-visual-row="0"],._4Z15n table th[data-visual-row="0"]{border-top-width:0}[dir=rtl] ._4Z15n table .MNbee{left:var(--bt-ee,0);right:var(--bt-es,0)}[dir=rtl] ._4Z15n table .fC2pO{left:var(--bb-ee,0);right:var(--bb-es,0)}[dir=rtl] ._4Z15n table ._3Oe5H{left:unset;right:calc(var(--bl-w, 0px)/-2)}[dir=rtl] ._4Z15n table .zM6oK{left:calc(var(--br-w, 0px)/-2);right:unset}[dir=rtl] ._4Z15n table td,[dir=rtl] ._4Z15n table th{border-left-width:0;border-right-width:var(--ricos-internal-table-gap,0)}[dir=rtl] ._4Z15n table td[data-visual-col="0"],[dir=rtl] ._4Z15n table th[data-visual-col="0"]{border-right-width:0}`;
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
var table_default = {
    "resizer": "HxpWe",
    "horizonResizer": "_8e4iv",
    "verticalResizer": "VMzpp",
    "highlightOnly": "_9v8qb",
    "resizeOverlay": "jPAPv",
    "columnResizeHitZone": "ys7N8",
    "peerHovered": "xvvUv",
    "active": "jVKHj",
    "rowResizeHitZone": "xTHF4",
    "columnResizeHandle": "yesbE",
    "resizeHandleFadeIn": "T-AbR",
    "rowResizeHandle": "_3DCX-",
    "measuringRowHeight": "wHhma",
    "reorderCursorCol": "Ve-vV",
    "reorderCursorRow": "zxoz9",
    "columnDropIndicator": "tEe1J",
    "rowDropIndicator": "_6wnNW",
    "dragGhost": "Y2Bik",
    "tableContainer": "-cK-e",
    "tableViewport": "_4Z15n",
    "addColBar": "bG5mK",
    "addRowBar": "rxf-F",
    "tableSelectorBar": "pbH7l",
    "tableContainerFocused": "Lxbla",
    "tableWrapper": "ahLiT",
    "cell": "db2Cu",
    "backgroundColorPreview": "SRZXZ",
    "selectedCells": "jLiIY",
    "selectedCell": "a28mK",
    "borderTop": "MNbee",
    "borderBottom": "fC2pO",
    "borderLeft": "_3Oe5H",
    "borderRight": "zM6oK"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RicosCellSelection",
    ()=>RicosCellSelection,
    "drawCellSelection",
    ()=>drawCellSelection,
    "getCellsInExpandedRect",
    ()=>getCellsInExpandedRect,
    "getRectBetweenCells",
    ()=>getRectBetweenCells,
    "inSameTable",
    ()=>inSameTable,
    "normalizeSelection",
    ()=>normalizeSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-view@1.42.2/node_modules/prosemirror-view/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-scss.js [app-client] (ecmascript)");
;
;
;
;
;
;
function drawCellSelection(state) {
    const selection = state.selection;
    if (!selection.$headCell && !(selection instanceof RicosCellSelection)) {
        return null;
    }
    const cells = [];
    let isSingleCellSelection = false;
    if (selection instanceof RicosCellSelection) {
        isSingleCellSelection = selection.isSingleCell();
    } else if (selection.$anchorCell && selection.$headCell) {
        isSingleCellSelection = selection.$anchorCell.pos === selection.$headCell.pos;
    }
    selection.forEachCell((node, pos)=>{
        cells.push(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].node(pos, pos + node.nodeSize, {
            class: isSingleCellSelection ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].selectedCell : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].selectedCells,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_CELL_SELECTED"]]: "true"
        }));
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(state.doc, cells);
}
function isCellBoundarySelection({ $from, $to }) {
    if ($from.pos === $to.pos || $from.pos < $from.pos - 6) {
        return false;
    }
    let afterFrom = $from.pos, beforeTo = $to.pos, depth = $from.depth;
    for(; depth >= 0; depth--, afterFrom++){
        if ($from.after(depth + 1) < $from.end(depth)) {
            break;
        }
    }
    for(let d = $to.depth; d >= 0; d--, beforeTo--){
        if ($to.before(d + 1) > $to.start(d)) {
            break;
        }
    }
    return afterFrom === beforeTo && /row|table/.test($from.node(depth).type.spec.tableRole);
}
function isTextSelectionAcrossCells({ $from, $to }) {
    let fromCellBoundaryNode;
    let toCellBoundaryNode;
    for(let i = $from.depth; i > 0; i--){
        const node = $from.node(i);
        if (node.type.spec.tableRole === "cell" || node.type.spec.tableRole === "header_cell") {
            fromCellBoundaryNode = node;
            break;
        }
    }
    for(let i = $to.depth; i > 0; i--){
        const node = $to.node(i);
        if (node.type.spec.tableRole === "cell" || node.type.spec.tableRole === "header_cell") {
            toCellBoundaryNode = node;
            break;
        }
    }
    return fromCellBoundaryNode !== toCellBoundaryNode && $to.parentOffset === 0;
}
function normalizeSelection(state, tr, allowTableNodeSelection = false) {
    const sel = (tr || state).selection;
    const doc = (tr || state).doc;
    let normalize, role;
    if (sel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"] && (role = sel.node.type.spec.tableRole)) {
        if (role === "cell" || role === "header_cell") {
            normalize = RicosCellSelection.create(doc, sel.from);
        } else if (role === "row") {
            const $cell = doc.resolve(sel.from + 1);
            const table = $cell.node(-1);
            const tableStart = $cell.start(-1);
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
            const rect = {
                left: 0,
                right: map.width,
                top: $cell.index(-1),
                bottom: $cell.index(-1) + 1
            };
            const cellPositions = map.cellsInRect(rect);
            const cells = cellPositions.map((pos)=>doc.resolve(tableStart + pos));
            normalize = new RicosCellSelection(cells, doc);
        } else if (!allowTableNodeSelection) {
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(sel.node);
            const start = sel.from + 1;
            const firstCell = doc.resolve(start + 1);
            const tableStart = firstCell.start(-1);
            const rect = {
                left: 0,
                right: map.width,
                top: 0,
                bottom: map.height
            };
            const cellPositions = map.cellsInRect(rect);
            const cells = cellPositions.map((pos)=>doc.resolve(tableStart + pos));
            normalize = new RicosCellSelection(cells, doc);
        }
    } else if (sel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"] && isCellBoundarySelection(sel)) {
        normalize = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(doc, sel.from);
    } else if (sel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"] && isTextSelectionAcrossCells(sel)) {
        normalize = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(doc, sel.$from.start(), sel.$from.end());
    }
    if (normalize) {
        (tr || (tr = state.tr)).setSelection(normalize);
    }
    return tr;
}
function pointsAtCell($pos) {
    return $pos.parent.type.spec.tableRole === "row" && ($pos.nodeAfter?.type.spec.tableRole === "cell" || $pos.nodeAfter?.type.spec.tableRole === "header_cell");
}
function inSameTable($a, $b) {
    return $a.depth === $b.depth && $a.pos >= $b.start(-1) && $a.pos <= $b.end(-1);
}
class RicosCellSelection extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"] {
    constructor(cells, doc){
        if (cells.length === 0) {
            throw new Error("RicosCellSelection requires at least one cell");
        }
        const table = cells[0].node(-1);
        const tableStart = cells[0].start(-1);
        const resolvedDoc = doc || cells[0].node(0);
        const ranges = cells.map((cellPos)=>{
            const pos = cellPos.pos - tableStart;
            const cell = table.nodeAt(pos);
            if (!cell) {
                throw RangeError(`No cell with offset ${pos} found`);
            }
            const from = tableStart + pos + 1;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionRange"](resolvedDoc.resolve(from), resolvedDoc.resolve(from + cell.content.size));
        });
        super(ranges[0].$from, ranges[0].$to, ranges);
        this.cellPositions = new Set(cells.map((cellPos)=>cellPos.pos));
        this.$anchorCell = cells[0];
        this.$headCell = cells[cells.length - 1];
    }
    map(doc, mapping) {
        const mappedCells = [];
        for (const pos of this.cellPositions){
            const mappedPos = mapping.map(pos);
            const $pos = doc.resolve(mappedPos);
            if (pointsAtCell($pos)) {
                mappedCells.push($pos);
            }
        }
        if (mappedCells.length === 0) {
            const $anchor = doc.resolve(mapping.map(this.$anchorCell.pos));
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].between($anchor, $anchor);
        }
        const firstCell = mappedCells[0];
        const allInSameTable = mappedCells.every((cell)=>inSameTable(firstCell, cell));
        if (!allInSameTable) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].between(firstCell, firstCell);
        }
        return new RicosCellSelection(mappedCells, doc);
    }
    content() {
        const table = this.$anchorCell.node(-1);
        const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
        const rect = this.getRect();
        const rows = [];
        for(let row = rect.top; row < rect.bottom; row++){
            const rowContent = [];
            const rowNode = table.child(row);
            for(let col = rect.left; col < rect.right; col++){
                const relativePos = map.map[row * map.width + col];
                const placement = map.findCell(relativePos);
                if (placement.row === row && placement.col === col) {
                    const cell = table.nodeAt(relativePos);
                    if (cell) {
                        rowContent.push(cell);
                    }
                }
            }
            rows.push(rowNode.type.create(rowNode.attrs, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(rowContent)));
        }
        const newTable = table.type.create(table.attrs, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(rows));
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(newTable), 1, 1);
    }
    replace(tr, content = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
        if (content === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty || content.size === 0) {
            const table = this.$anchorCell.node(-1);
            const tableStart = this.$anchorCell.start(-1);
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
            const totalCells = map.cellsInRect({
                left: 0,
                right: map.width,
                top: 0,
                bottom: map.height
            }).length;
            if (this.cellPositions.size === totalCells) {
                const tablePos = tableStart - 1;
                tr.delete(tablePos, tablePos + table.nodeSize);
                const sel2 = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"].findFrom(tr.doc.resolve(tablePos), 1);
                if (sel2) {
                    tr.setSelection(sel2);
                }
                return;
            }
        }
        const mapFrom = tr.steps.length;
        const ranges = this.ranges;
        for(let i = 0; i < ranges.length; i++){
            const { $from, $to } = ranges[i];
            const mapping = tr.mapping.slice(mapFrom);
            tr.replace(mapping.map($from.pos), mapping.map($to.pos), i ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty : content);
        }
        const sel = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"].findFrom(tr.doc.resolve(tr.mapping.slice(mapFrom).map(this.to)), -1);
        if (sel) {
            tr.setSelection(sel);
        }
    }
    replaceWith(tr, node) {
        this.replace(tr, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(node), 0, 0));
    }
    forEachCell(f) {
        const table = this.$anchorCell.node(-1);
        const tableStart = this.$anchorCell.start(-1);
        for (const cellPos of this.cellPositions){
            const relativePos = cellPos - tableStart;
            const cell = table.nodeAt(relativePos);
            if (cell) {
                f(cell, cellPos);
            }
        }
    }
    eq(other) {
        if (!(other instanceof RicosCellSelection)) {
            return false;
        }
        if (this.cellPositions.size !== other.cellPositions.size) {
            return false;
        }
        for (const pos of this.cellPositions){
            if (!other.cellPositions.has(pos)) {
                return false;
            }
        }
        return true;
    }
    toJSON() {
        const positions = Array.from(this.cellPositions).sort((a, b)=>a - b);
        return {
            type: "cell",
            anchor: positions[0],
            head: positions[positions.length - 1]
        };
    }
    get jsonID() {
        return "cell";
    }
    getSelectionIndexes() {
        const table = this.$anchorCell.node(-1);
        const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
        const tableStart = this.$anchorCell.start(-1);
        const selectedRowIndexes = /* @__PURE__ */ new Set();
        const selectedColumnIndexes = /* @__PURE__ */ new Set();
        for (const cellPos of this.cellPositions){
            const relativePos = cellPos - tableStart;
            const placement = map.findCell(relativePos);
            for(let rowIndex = placement.row; rowIndex < placement.row + placement.rowspan; rowIndex += 1){
                selectedRowIndexes.add(rowIndex);
            }
            for(let columnIndex = placement.col; columnIndex < placement.col + placement.colspan; columnIndex += 1){
                selectedColumnIndexes.add(columnIndex);
            }
        }
        return {
            map,
            tableStart,
            selectedRowIndexes,
            selectedColumnIndexes
        };
    }
    isColSelection() {
        const { map, tableStart, selectedColumnIndexes } = this.getSelectionIndexes();
        const selectedCellPositions = this.cellPositions;
        if (selectedColumnIndexes.size === 0) {
            return false;
        }
        for (const columnIndex of selectedColumnIndexes){
            const columnCells = map.cellsInRect({
                left: columnIndex,
                right: columnIndex + 1,
                top: 0,
                bottom: map.height
            });
            const isColumnComplete = columnCells.every((cellPos)=>{
                return selectedCellPositions.has(tableStart + cellPos);
            });
            if (!isColumnComplete) {
                return false;
            }
        }
        return true;
    }
    isRowSelection() {
        const { map, tableStart, selectedRowIndexes } = this.getSelectionIndexes();
        const selectedCellPositions = this.cellPositions;
        if (selectedRowIndexes.size === 0) {
            return false;
        }
        for (const rowIndex of selectedRowIndexes){
            const rowCells = map.cellsInRect({
                left: 0,
                right: map.width,
                top: rowIndex,
                bottom: rowIndex + 1
            });
            const isRowComplete = rowCells.every((cellPos)=>{
                return selectedCellPositions.has(tableStart + cellPos);
            });
            if (!isRowComplete) {
                return false;
            }
        }
        return true;
    }
    isTableSelection() {
        const { map, tableStart } = this.getSelectionIndexes();
        const selectedCellPositions = this.cellPositions;
        const tableCells = map.cellsInRect({
            left: 0,
            right: map.width,
            top: 0,
            bottom: map.height
        });
        return tableCells.every((cellPos)=>{
            return selectedCellPositions.has(tableStart + cellPos);
        });
    }
    getRect() {
        const cells = [];
        const doc = this.$anchorCell.node(0);
        for (const cellPos of this.cellPositions){
            cells.push(doc.resolve(cellPos));
        }
        return getRectBetweenCells(cells);
    }
    static create(doc, ...cellPositions) {
        if (cellPositions.length === 0) {
            throw new Error("At least one cell position is required");
        }
        const cells = cellPositions.map((pos)=>{
            const $pos = doc.resolve(pos);
            if (!pointsAtCell($pos)) {
                throw new Error(`Position ${pos} does not point at a cell`);
            }
            return $pos;
        });
        return new RicosCellSelection(cells, doc);
    }
    // Toggle a cell in/out of the selection
    static toggleCell(currentSelection, cellPos, doc) {
        const $cell = doc.resolve(cellPos);
        if (!pointsAtCell($cell)) {
            throw new Error(`Position ${cellPos} does not point at a cell`);
        }
        if (currentSelection instanceof RicosCellSelection) {
            const newPositions = new Set(currentSelection.cellPositions);
            if (newPositions.has(cellPos)) {
                newPositions.delete(cellPos);
                if (newPositions.size === 0) {
                    return new RicosCellSelection([
                        $cell
                    ], doc);
                }
            } else {
                newPositions.add(cellPos);
            }
            const cells = Array.from(newPositions).map((pos)=>doc.resolve(pos));
            return new RicosCellSelection(cells, doc);
        }
        return new RicosCellSelection([
            $cell
        ], doc);
    }
    // Get count of selected cells
    getCellCount() {
        return this.cellPositions.size;
    }
    // Check if this is a single cell selection
    isSingleCell() {
        return this.cellPositions.size === 1;
    }
}
RicosCellSelection.prototype.visible = false;
const getRectBetweenCells = (cells)=>{
    if (cells.length === 0) {
        throw new Error("getRectBetweenCells requires at least one cell");
    }
    const table = cells[0].node(-1);
    const tableStart = cells[0].start(-1);
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
    let bounds = null;
    for (const cell of cells){
        const relativePos = cell.pos - tableStart;
        const p = map.findCell(relativePos);
        if (!bounds) {
            bounds = {
                top: p.row,
                left: p.col,
                bottom: p.row + p.rowspan,
                right: p.col + p.colspan
            };
        } else {
            bounds.top = Math.min(bounds.top, p.row);
            bounds.left = Math.min(bounds.left, p.col);
            bounds.bottom = Math.max(bounds.bottom, p.row + p.rowspan);
            bounds.right = Math.max(bounds.right, p.col + p.colspan);
        }
    }
    if (!bounds) {
        throw new Error("Failed to compute bounds");
    }
    const visited = /* @__PURE__ */ new Set();
    const queue = [];
    for(let r = bounds.top; r < bounds.bottom; r++){
        for(let c = bounds.left; c < bounds.right; c++){
            const pos = map.map[r * map.width + c];
            if (!visited.has(pos)) {
                visited.add(pos);
                queue.push(pos);
            }
        }
    }
    while(queue.length){
        const pos = queue.shift();
        const p = map.findCell(pos);
        const newTop = Math.min(bounds.top, p.row);
        const newLeft = Math.min(bounds.left, p.col);
        const newBottom = Math.max(bounds.bottom, p.row + p.rowspan);
        const newRight = Math.max(bounds.right, p.col + p.colspan);
        const expanded = newTop < bounds.top || newLeft < bounds.left || newBottom > bounds.bottom || newRight > bounds.right;
        if (!expanded) {
            continue;
        }
        bounds = {
            top: newTop,
            left: newLeft,
            bottom: newBottom,
            right: newRight
        };
        for(let r = bounds.top; r < bounds.bottom; r++){
            for(let c = bounds.left; c < bounds.right; c++){
                const p2 = map.map[r * map.width + c];
                if (!visited.has(p2)) {
                    visited.add(p2);
                    queue.push(p2);
                }
            }
        }
        const isFullTable = bounds.top === 0 && bounds.left === 0 && bounds.bottom === map.height && bounds.right === map.width;
        if (isFullTable) {
            return bounds;
        }
    }
    return bounds;
};
const getCellsInExpandedRect = (doc, tableStart, map, initialRect)=>{
    const initialCellPositions = map.cellsOverlappingRect(initialRect);
    const initialCells = initialCellPositions.map((pos)=>doc.resolve(tableStart + pos));
    const expandedRect = getRectBetweenCells(initialCells);
    const cellPositions = map.cellsOverlappingRect(expandedRect);
    return cellPositions.map((pos)=>doc.resolve(tableStart + pos));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/find-table.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findTable",
    ()=>findTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$find$2d$parent$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/core/helpers/find-parent-node.js [app-client] (ecmascript)");
;
const findTable = (selection)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$helpers$2f$find$2d$parent$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNode"])((node)=>node.type.spec.tableRole && node.type.spec.tableRole === "table")(selection);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRicosCellSelection",
    ()=>isRicosCellSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)");
;
function isRicosCellSelection(selection) {
    return selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"];
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-query.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableQuery",
    ()=>TableQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/find-table.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
;
;
;
class TableQuery {
    static of(selection) {
        const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(selection);
        if (!table) {
            return null;
        }
        return new TableQuery(selection, table);
    }
    constructor(selection, table){
        this.selection = selection;
        this.table = table;
        this.map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(this.table.node);
    }
    getStartPos() {
        return this.table.start;
    }
    getHeight() {
        return this.map.height;
    }
    getWidth() {
        return this.map.width;
    }
    getMap() {
        return this.map.map;
    }
    getNode() {
        return this.table.node;
    }
    getRowsIndexesInSelection() {
        const rows = [];
        if (this.selection && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(this.selection)) {
            this.selection.forEachCell((node, pos)=>{
                const cell = this.map.findCell(pos - this.getStartPos());
                !rows.includes(cell.row) && rows.push(cell.row);
            });
        }
        return rows;
    }
    getColsIndexesInSelection() {
        const cols = [];
        if (this.selection && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(this.selection)) {
            this.selection.forEachCell((node, pos)=>{
                const cell = this.map.findCell(pos - this.getStartPos());
                !cols.includes(cell.col) && cols.push(cell.col);
            });
        }
        return cols;
    }
    getSelectionRowRange() {
        if (!this.selection || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(this.selection)) {
            return null;
        }
        let first = Infinity;
        let last = -1;
        this.selection.forEachCell((node, pos)=>{
            const cell = this.map.findCell(pos - this.getStartPos());
            first = Math.min(first, cell.row);
            last = Math.max(last, cell.row + cell.rowspan - 1);
        });
        return first <= last ? {
            first,
            last
        } : null;
    }
    getSelectionColRange() {
        if (!this.selection || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(this.selection)) {
            return null;
        }
        let first = Infinity;
        let last = -1;
        this.selection.forEachCell((node, pos)=>{
            const cell = this.map.findCell(pos - this.getStartPos());
            first = Math.min(first, cell.col);
            last = Math.max(last, cell.col + cell.colspan - 1);
        });
        return first <= last ? {
            first,
            last
        } : null;
    }
    getDomWidthInSelection(view) {
        const cols = this.getColsIndexesInSelection();
        let totalWidth = 0;
        const dom = view.domAtPos(this.getStartPos() - 1);
        const tableNode = dom.node.childNodes[dom.offset].firstChild;
        if (tableNode) {
            const colsgroup = tableNode.firstChild;
            Array.from(colsgroup?.childNodes || []).forEach((col, index)=>cols.includes(index) && (totalWidth += col.offsetWidth));
        }
        return totalWidth;
    }
    getCellNeighbors(cellPos) {
        const cellRelativePos = cellPos - this.getStartPos();
        const map = this.getMap();
        const cellIndex = map.indexOf(cellRelativePos);
        const width = this.getWidth();
        const height = this.getHeight();
        const neighbors = {};
        cellIndex % width !== 0 && (neighbors.left = map[cellIndex - 1]);
        (cellIndex + 1) % width !== 0 && (neighbors.right = map[cellIndex + 1]);
        cellIndex >= width && (neighbors.top = map[cellIndex - width]);
        cellIndex < height * width - width && (neighbors.bottom = map[cellIndex + width]);
        return neighbors;
    }
    isRectSelected(rect) {
        const map = this.map;
        const start = this.getStartPos();
        const cells = map.cellsInRect(rect);
        if (this.selection && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(this.selection)) {
            const selectedCells = this.selection.cellPositions;
            return cells.every((cell)=>selectedCells.has(cell + start));
        }
        return false;
    }
    isColumnSelected(columnIndex) {
        const map = this.map;
        return this.isRectSelected({
            left: columnIndex,
            right: columnIndex + 1,
            top: 0,
            bottom: map.height
        });
    }
    isRowSelected(rowIndex) {
        const map = this.map;
        return this.isRectSelected({
            left: 0,
            right: map.width,
            top: rowIndex,
            bottom: rowIndex + 1
        });
    }
    isTableSelected() {
        const map = this.map;
        return this.isRectSelected({
            left: 0,
            right: map.width,
            top: 0,
            bottom: map.height
        });
    }
    getRowsHeight(view) {
        const dom = view.domAtPos(this.getStartPos() - 1);
        const tableNode = dom.node.childNodes[dom.offset].firstChild;
        return tableNode ? Array.from(tableNode.querySelectorAll("tbody > tr")).map((node)=>node.offsetHeight) : [];
    }
    getTableRect() {
        return {
            map: this.map,
            tableStart: this.getStartPos(),
            table: this.getNode(),
            left: 0,
            right: this.getWidth(),
            top: 0,
            bottom: this.getHeight()
        };
    }
    getColumnWidth(view) {
        const dom = view.domAtPos(this.getStartPos());
        return dom.node?.parentElement ? Array.from(dom.node.parentElement.children[0].children)?.map((node)=>node.offsetWidth) : [];
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cellAround",
    ()=>cellAround,
    "cellNear",
    ()=>cellNear,
    "cellWrapping",
    ()=>cellWrapping,
    "cellsOverlapRectangle",
    ()=>cellsOverlapRectangle,
    "columnIsHeader",
    ()=>columnIsHeader,
    "getTableRectFromDoc",
    ()=>getTableRectFromDoc,
    "isEmpty",
    ()=>isEmpty,
    "isHeaderEnabledByType",
    ()=>isHeaderEnabledByType,
    "isInTable",
    ()=>isInTable,
    "nextCell",
    ()=>nextCell,
    "rowIsHeader",
    ()=>rowIsHeader,
    "selectedRect",
    ()=>selectedRect,
    "selectionCell",
    ()=>selectionCell,
    "tableNodeTypes",
    ()=>tableNodeTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
;
;
function isEmpty(cell) {
    const c = cell.content;
    return c.childCount === 1 && c.child(0).isTextblock && c.child(0).childCount === 0;
}
function cellsOverlapRectangle({ width, height, map }, rect) {
    let indexTop = rect.top * width + rect.left, indexLeft = indexTop;
    let indexBottom = (rect.bottom - 1) * width + rect.left, indexRight = indexTop + (rect.right - rect.left - 1);
    for(let i = rect.top; i < rect.bottom; i++){
        if (rect.left > 0 && map[indexLeft] === map[indexLeft - 1] || rect.right < width && map[indexRight] === map[indexRight + 1]) {
            return true;
        }
        indexLeft += width;
        indexRight += width;
    }
    for(let i = rect.left; i < rect.right; i++){
        if (rect.top > 0 && map[indexTop] === map[indexTop - width] || rect.bottom < height && map[indexBottom] === map[indexBottom + width]) {
            return true;
        }
        indexTop++;
        indexBottom++;
    }
    return false;
}
function cellAround($pos) {
    for(let d = $pos.depth - 1; d > 0; d--){
        if ($pos.node(d).type.spec.tableRole === "row") {
            return $pos.node(0).resolve($pos.before(d + 1));
        }
    }
    return null;
}
function cellWrapping($pos) {
    for(let d = $pos.depth; d > 0; d--){
        const role = $pos.node(d).type.spec.tableRole;
        if (role === "cell" || role === "header_cell") {
            return $pos.node(d);
        }
    }
    return null;
}
function cellNear($pos) {
    for(let after = $pos.nodeAfter, pos = $pos.pos; after; after = after.firstChild, pos++){
        const role = after.type.spec.tableRole;
        if (role === "cell" || role === "header_cell") {
            return $pos.doc.resolve(pos);
        }
    }
    for(let before = $pos.nodeBefore, pos = $pos.pos; before; before = before.lastChild, pos--){
        const role = before.type.spec.tableRole;
        if (role === "cell" || role === "header_cell") {
            return $pos.doc.resolve(pos - before.nodeSize);
        }
    }
}
function nextCell($pos, axis, dir) {
    const table = $pos.node(-1);
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
    const tableStart = $pos.start(-1);
    const moved = map.nextCell($pos.pos - tableStart, axis, dir);
    return moved === null ? null : $pos.node(0).resolve(tableStart + moved);
}
function isInTable(state) {
    const $head = state.selection.$head;
    for(let d = $head.depth; d > 0; d--){
        if ($head.node(d).type.spec.tableRole === "row") {
            return true;
        }
    }
    return false;
}
function selectionCell(state) {
    const sel = state.selection;
    if ("$anchorCell" in sel && sel.$anchorCell) {
        return sel.$anchorCell.pos > sel.$headCell.pos ? sel.$anchorCell : sel.$headCell;
    } else if ("node" in sel && sel.node && sel.node.type.spec.tableRole === "cell") {
        return sel.$anchor;
    }
    const $cell = cellAround(sel.$head) || cellNear(sel.$head);
    if ($cell) {
        return $cell;
    }
    throw new RangeError(`No cell found around position ${sel.head}`);
}
function selectedRect(state) {
    const sel = state.selection;
    const $pos = selectionCell(state);
    const table = $pos.node(-1);
    const tableStart = $pos.start(-1);
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
    if (sel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"]) {
        const rect = map.rectBetween(sel.$anchorCell.pos - tableStart, sel.$headCell.pos - tableStart);
        return {
            ...rect,
            tableStart,
            map,
            table
        };
    }
    const { col, row, colspan, rowspan } = map.findCell($pos.pos - tableStart);
    return {
        left: col,
        top: row,
        right: col + colspan,
        bottom: row + rowspan,
        tableStart,
        map,
        table
    };
}
function tableNodeTypes(schema) {
    let result = schema.cached.tableNodeTypes;
    if (!result) {
        result = schema.cached.tableNodeTypes = {};
        for(const name in schema.nodes){
            if (Object.prototype.hasOwnProperty.call(schema.nodes, name)) {
                const type = schema.nodes[name], role = type.spec.tableRole;
                if (role) {
                    result[role] = type;
                }
            }
        }
    }
    return result;
}
function columnIsHeader(map, table, col) {
    const headerCell = tableNodeTypes(table.type.schema).header_cell;
    for(let row = 0; row < map.height; row++){
        if (table.nodeAt(map.map[col + row * map.width]).type !== headerCell) {
            return false;
        }
    }
    return true;
}
function rowIsHeader(map, table, row) {
    const headerCell = tableNodeTypes(table.type.schema).header_cell;
    for(let col = 0; col < map.width; col++){
        if (table.nodeAt(map.map[col + row * map.width])?.type !== headerCell) {
            return false;
        }
    }
    return true;
}
function isHeaderEnabledByType(type, rect, types) {
    const cellPositions = rect.map.cellsInRect({
        left: 0,
        top: 0,
        right: type === "row" ? rect.map.width : 1,
        bottom: type === "column" ? rect.map.height : 1
    });
    let enabled = true;
    let spansCrossBoundary = false;
    for(let i = 0; i < cellPositions.length; i++){
        const cell = rect.table.nodeAt(cellPositions[i]);
        if (!cell) {
            continue;
        }
        if (cell.type !== types.header_cell) {
            enabled = false;
        }
        if (type === "row" ? cell.attrs.rowspan > 1 : cell.attrs.colspan > 1) {
            spansCrossBoundary = true;
        }
    }
    return {
        enabled,
        spansCrossBoundary
    };
}
function getTableRectFromDoc(doc, tableStart) {
    const $pos = doc.resolve(tableStart + 1);
    const table = $pos.node(-1);
    const actualTableStart = $pos.start(-1);
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
    return {
        left: 0,
        right: map.width,
        top: 0,
        bottom: map.height,
        table,
        tableStart: actualTableStart,
        map
    };
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/mutations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addColSpan",
    ()=>addColSpan,
    "addColumn",
    ()=>addColumn,
    "addColumnAfter",
    ()=>addColumnAfter,
    "addColumnAfterWithBorders",
    ()=>addColumnAfterWithBorders,
    "addColumnBefore",
    ()=>addColumnBefore,
    "addColumnBeforeWithBorders",
    ()=>addColumnBeforeWithBorders,
    "addRow",
    ()=>addRow,
    "addRowAfter",
    ()=>addRowAfter,
    "addRowAfterWithBorders",
    ()=>addRowAfterWithBorders,
    "addRowBefore",
    ()=>addRowBefore,
    "addRowBeforeWithBorders",
    ()=>addRowBeforeWithBorders,
    "applyHeaderToggle",
    ()=>applyHeaderToggle,
    "deleteColumn",
    ()=>deleteColumn,
    "deleteColumnWithBorders",
    ()=>deleteColumnWithBorders,
    "deleteRow",
    ()=>deleteRow,
    "deleteRowWithBorders",
    ()=>deleteRowWithBorders,
    "deleteTable",
    ()=>deleteTable,
    "mergeCells",
    ()=>mergeCells,
    "mergeCellsWithBorders",
    ()=>mergeCellsWithBorders,
    "removeColSpan",
    ()=>removeColSpan,
    "removeColumn",
    ()=>removeColumn,
    "removeRow",
    ()=>removeRow,
    "selectColumn",
    ()=>selectColumn,
    "selectRow",
    ()=>selectRow,
    "selectTable",
    ()=>selectTable,
    "splitCell",
    ()=>splitCell,
    "splitCellWithBorders",
    ()=>splitCellWithBorders,
    "splitCellWithType",
    ()=>splitCellWithType,
    "toggleHeader",
    ()=>toggleHeader,
    "toggleHeaderColumnCmd",
    ()=>toggleHeaderColumnCmd,
    "toggleHeaderRowCmd",
    ()=>toggleHeaderRowCmd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/canonical-remap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/find-table.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function removeColSpan(attrs, pos, n = 1) {
    const result = {
        ...attrs,
        colspan: attrs.colspan - n
    };
    if (result.colwidth) {
        result.colwidth = result.colwidth.slice();
        result.colwidth.splice(pos, n);
        if (!result.colwidth.some((w)=>w > 0)) {
            result.colwidth = null;
        }
    }
    return result;
}
function updateTableDimensions(tr, table, tableStart, start, deleteCount, item) {
    const dimensions = getTableDimensions(table);
    if (!dimensions?.colsWidthRatio?.length) {
        return;
    }
    const colsWidthRatio = [
        ...dimensions.colsWidthRatio
    ];
    const colsMinWidth = dimensions.colsMinWidth ? [
        ...dimensions.colsMinWidth
    ] : [];
    if (item !== void 0) {
        colsWidthRatio.splice(start, deleteCount, item);
        if (colsMinWidth.length > 0) {
            colsMinWidth.splice(start, deleteCount, item);
        }
    } else {
        colsWidthRatio.splice(start, deleteCount);
        if (colsMinWidth.length > 0) {
            colsMinWidth.splice(start, deleteCount);
        }
    }
    tr.setNodeMarkup(tableStart - 1, null, {
        ...table.attrs,
        dimensions: {
            ...dimensions,
            colsWidthRatio,
            colsMinWidth: colsMinWidth.length > 0 ? colsMinWidth : dimensions.colsMinWidth
        }
    });
}
function getSourceColWidth(table, sourceCol) {
    const dimensions = getTableDimensions(table);
    if (!dimensions?.colsWidthRatio?.length || !dimensions.colsWidthRatio[sourceCol]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_AUTO_MIN_WIDTH"];
    }
    return dimensions.colsWidthRatio[sourceCol];
}
function getTableDimensions(table) {
    return table.attrs.dimensions || table.attrs.tableData?.dimensions || null;
}
function getCellStyleAttrs(cell) {
    const attrs = {};
    if (cell.attrs.cellStyle) {
        attrs.cellStyle = {
            ...cell.attrs.cellStyle
        };
    }
    if (cell.attrs.borderColors) {
        attrs.borderColors = {
            ...cell.attrs.borderColors
        };
    }
    if (cell.attrs.borderWidths) {
        attrs.borderWidths = {
            ...cell.attrs.borderWidths
        };
    }
    if (cell.attrs.colwidth) {
        attrs.colwidth = cell.attrs.colwidth.slice();
    }
    return attrs;
}
function removeColumn(tr, { map, table, tableStart }, col) {
    const mapStart = tr.mapping.maps.length;
    for(let row = 0; row < map.height;){
        const index = row * map.width + col;
        const pos = map.map[index];
        const cell = table.nodeAt(pos);
        const attrs = cell.attrs;
        if (col > 0 && map.map[index - 1] === pos || col < map.width - 1 && map.map[index + 1] === pos) {
            tr.setNodeMarkup(tr.mapping.slice(mapStart).map(tableStart + pos), null, removeColSpan(attrs, col - map.findCell(pos).col));
        } else {
            const start = tr.mapping.slice(mapStart).map(tableStart + pos);
            tr.delete(start, start + cell.nodeSize);
        }
        row += attrs.rowspan;
    }
}
function deleteColumn(state, dispatch) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInTable"])(state)) {
        return false;
    }
    if (dispatch) {
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        const tr = state.tr;
        if (rect.left === 0 && rect.right === rect.map.width) {
            return false;
        }
        for(let i = rect.right - 1;; i--){
            removeColumn(tr, rect, i);
            if (i === rect.left) {
                break;
            }
            const table = rect.tableStart ? tr.doc.nodeAt(rect.tableStart - 1) : tr.doc;
            if (!table) {
                throw RangeError("No table found");
            }
            rect.table = table;
            rect.map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
        }
        updateTableDimensions(tr, rect.table, rect.tableStart, rect.left, rect.right - rect.left);
        dispatch(tr);
    }
    return true;
}
function addColumn(tr, { map, tableStart, table }, col, styleSourceCol) {
    let refColumn = col > 0 ? -1 : 0;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnIsHeader"])(map, table, col + refColumn)) {
        refColumn = col === 0 || col === map.width ? null : 0;
    }
    for(let row = 0; row < map.height; row++){
        const index = row * map.width + col;
        if (col > 0 && col < map.width && map.map[index - 1] === map.map[index]) {
            const pos = map.map[index];
            const cell = table.nodeAt(pos);
            tr.setNodeMarkup(tr.mapping.map(tableStart + pos), null, addColSpan(cell.attrs, col - map.findCell(pos).col));
            row += cell.attrs.rowspan - 1;
        } else {
            const refCell = refColumn !== null ? table.nodeAt(map.map[index + refColumn]) : null;
            const type = refCell?.type ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(table.type.schema).cell;
            const styleCell = styleSourceCol !== void 0 ? table.nodeAt(map.map[row * map.width + styleSourceCol]) : refCell;
            const styleAttrs = styleCell ? getCellStyleAttrs(styleCell) : {};
            const pos = map.positionAt(row, col, table);
            tr.insert(tr.mapping.map(tableStart + pos), type.createAndFill(styleAttrs));
        }
    }
    const widthSourceCol = styleSourceCol ?? (refColumn !== null ? col + refColumn : void 0);
    const colWidth = widthSourceCol !== void 0 ? getSourceColWidth(table, widthSourceCol) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_AUTO_MIN_WIDTH"];
    updateTableDimensions(tr, table, tableStart, col, 0, colWidth);
    return tr;
}
function addColumnBefore(state, dispatch) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInTable"])(state)) {
        return false;
    }
    if (dispatch) {
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        dispatch(addColumn(state.tr, rect, rect.left, rect.left));
    }
    return true;
}
function addColumnAfter(state, dispatch) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInTable"])(state)) {
        return false;
    }
    if (dispatch) {
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        dispatch(addColumn(state.tr, rect, rect.right, rect.right - 1));
    }
    return true;
}
function addColSpan(attrs, pos, n = 1) {
    const result = {
        ...attrs,
        colspan: attrs.colspan + n
    };
    if (result.colwidth) {
        result.colwidth = result.colwidth.slice();
        for(let i = 0; i < n; i++){
            result.colwidth.splice(pos, 0, 0);
        }
    }
    return result;
}
function splitCell(state, dispatch) {
    const nodeTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(state.schema);
    return splitCellWithType(({ node })=>{
        return nodeTypes[node.type.spec.tableRole];
    })(state, dispatch);
}
function splitCellWithType(getCellType) {
    return (state, dispatch)=>{
        const sel = state.selection;
        let cellNode;
        let cellPos;
        if (!(sel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"])) {
            cellNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellWrapping"])(sel.$from);
            if (!cellNode) {
                return false;
            }
            cellPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellAround"])(sel.$from)?.pos;
        } else {
            if (sel.$anchorCell.pos !== sel.$headCell.pos) {
                return false;
            }
            cellNode = sel.$anchorCell.nodeAfter;
            cellPos = sel.$anchorCell.pos;
        }
        if (cellNode === null || cellPos === null) {
            return false;
        }
        if (cellNode.attrs.colspan === 1 && cellNode.attrs.rowspan === 1) {
            return false;
        }
        if (dispatch) {
            let baseAttrs = cellNode.attrs;
            const attrs = [];
            const colwidth = baseAttrs.colwidth;
            if (baseAttrs.rowspan > 1) {
                baseAttrs = {
                    ...baseAttrs,
                    rowspan: 1
                };
            }
            if (baseAttrs.colspan > 1) {
                baseAttrs = {
                    ...baseAttrs,
                    colspan: 1
                };
            }
            const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state), tr = state.tr;
            for(let i = 0; i < rect.right - rect.left; i++){
                attrs.push(colwidth ? {
                    ...baseAttrs,
                    colwidth: colwidth && colwidth[i] ? [
                        colwidth[i]
                    ] : null
                } : baseAttrs);
            }
            const createdCells = [];
            for(let row = rect.top; row < rect.bottom; row++){
                let pos = rect.map.positionAt(row, rect.left, rect.table);
                if (row === rect.top) {
                    pos += cellNode.nodeSize;
                }
                for(let col = rect.left, i = 0; col < rect.right; col++, i++){
                    if (col === rect.left && row === rect.top) {
                        continue;
                    }
                    const insertedPos = tr.mapping.map(pos + rect.tableStart, 1);
                    tr.insert(insertedPos, getCellType({
                        node: cellNode,
                        row,
                        col
                    }).createAndFill(attrs[i]));
                    createdCells.push(insertedPos);
                }
            }
            tr.setNodeMarkup(cellPos, getCellType({
                node: cellNode,
                row: rect.top,
                col: rect.left
            }), attrs[0]);
            if (sel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"]) {
                const allCellPositions = [
                    sel.$anchorCell.pos,
                    ...createdCells
                ];
                tr.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](allCellPositions.map((pos)=>tr.doc.resolve(pos))));
            }
            dispatch(tr);
        }
        return true;
    };
}
function addRow(tr, { map, tableStart, table }, row, styleSourceRow) {
    let rowPos = tableStart;
    for(let i = 0; i < row; i++){
        rowPos += table.child(i).nodeSize;
    }
    const cells = [];
    let refRow = row > 0 ? -1 : 0;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rowIsHeader"])(map, table, row + refRow)) {
        refRow = row === 0 || row === map.height ? null : 0;
    }
    for(let col = 0, index = map.width * row; col < map.width; col++, index++){
        if (row > 0 && row < map.height && map.map[index] === map.map[index - map.width]) {
            const pos = map.map[index];
            const attrs = table.nodeAt(pos).attrs;
            tr.setNodeMarkup(tableStart + pos, null, {
                ...attrs,
                rowspan: attrs.rowspan + 1
            });
            col += attrs.colspan - 1;
        } else {
            const refCell = refRow !== null ? table.nodeAt(map.map[index + refRow * map.width]) : null;
            const type = refCell?.type ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(table.type.schema).cell;
            const styleCell = styleSourceRow !== void 0 ? table.nodeAt(map.map[styleSourceRow * map.width + col]) : refCell;
            const styleAttrs = styleCell ? getCellStyleAttrs(styleCell) : {};
            const node = type.createAndFill(styleAttrs);
            if (node) {
                cells.push(node);
            }
        }
    }
    const sourceRowIdx = styleSourceRow ?? (refRow !== null ? row + refRow : void 0);
    const rowAttrs = sourceRowIdx !== void 0 ? {
        height: table.child(sourceRowIdx).attrs.height
    } : null;
    tr.insert(rowPos, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(table.type.schema).row.create(rowAttrs, cells));
    return tr;
}
function addRowBefore(state, dispatch) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInTable"])(state)) {
        return false;
    }
    if (dispatch) {
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        dispatch(addRow(state.tr, rect, rect.top, rect.top));
    }
    return true;
}
function addRowAfter(state, dispatch) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInTable"])(state)) {
        return false;
    }
    if (dispatch) {
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        dispatch(addRow(state.tr, rect, rect.bottom, rect.bottom - 1));
    }
    return true;
}
function removeRow(tr, { map, table, tableStart }, row) {
    let rowPos = 0;
    for(let i = 0; i < row; i++){
        rowPos += table.child(i).nodeSize;
    }
    const nextRow = rowPos + table.child(row).nodeSize;
    const mapFrom = tr.mapping.maps.length;
    tr.delete(rowPos + tableStart, nextRow + tableStart);
    const seen = /* @__PURE__ */ new Set();
    for(let col = 0, index = row * map.width; col < map.width; col++, index++){
        const pos = map.map[index];
        if (seen.has(pos)) {
            continue;
        }
        seen.add(pos);
        if (row > 0 && pos === map.map[index - map.width]) {
            const attrs = table.nodeAt(pos).attrs;
            tr.setNodeMarkup(tr.mapping.slice(mapFrom).map(pos + tableStart), null, {
                ...attrs,
                rowspan: attrs.rowspan - 1
            });
            col += attrs.colspan - 1;
        } else if (row < map.height && pos === map.map[index + map.width]) {
            const cell = table.nodeAt(pos);
            const attrs = cell.attrs;
            const copy = cell.type.create({
                ...attrs,
                rowspan: cell.attrs.rowspan - 1
            }, cell.content);
            const newPos = map.positionAt(row + 1, col, table);
            tr.insert(tr.mapping.slice(mapFrom).map(tableStart + newPos), copy);
            col += attrs.colspan - 1;
        }
    }
}
function deleteRow(state, dispatch) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInTable"])(state)) {
        return false;
    }
    if (dispatch) {
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state), tr = state.tr;
        if (rect.top === 0 && rect.bottom === rect.map.height) {
            return false;
        }
        for(let i = rect.bottom - 1;; i--){
            removeRow(tr, rect, i);
            if (i === rect.top) {
                break;
            }
            const table = rect.tableStart ? tr.doc.nodeAt(rect.tableStart - 1) : tr.doc;
            if (!table) {
                throw RangeError("No table found");
            }
            rect.table = table;
            rect.map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(rect.table);
        }
        dispatch(tr);
    }
    return true;
}
function applyHeaderToggle(tr, rect, type, types) {
    const headerRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHeaderEnabledByType"])("row", rect, types);
    const headerCol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHeaderEnabledByType"])("column", rect, types);
    const isHeaderEnabled = type === "column" ? headerRow.enabled : type === "row" ? headerCol.enabled : false;
    const selectionStartsAt = isHeaderEnabled ? 1 : 0;
    const cellsRect = type === "column" ? {
        left: 0,
        top: selectionStartsAt,
        right: 1,
        bottom: rect.map.height
    } : type === "row" ? {
        left: selectionStartsAt,
        top: 0,
        right: rect.map.width,
        bottom: 1
    } : rect;
    const newType = type === "column" ? headerCol.enabled ? types.cell : types.header_cell : type === "row" ? headerRow.enabled ? types.cell : types.header_cell : types.cell;
    rect.map.cellsInRect(cellsRect).forEach((relativeCellPos)=>{
        const cellPos = relativeCellPos + rect.tableStart;
        const cell = tr.doc.nodeAt(cellPos);
        if (cell) {
            tr.setNodeMarkup(cellPos, newType, cell.attrs);
        }
    });
}
function toggleHeader(type) {
    return function(state, dispatch) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInTable"])(state)) {
            return false;
        }
        const types = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(state.schema);
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        const headerRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHeaderEnabledByType"])("row", rect, types);
        const headerCol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHeaderEnabledByType"])("column", rect, types);
        if (type === "row" && !headerRow.enabled && headerRow.spansCrossBoundary) {
            return false;
        }
        if (type === "column" && !headerCol.enabled && headerCol.spansCrossBoundary) {
            return false;
        }
        if (dispatch) {
            const tr = state.tr;
            applyHeaderToggle(tr, rect, type, types);
            dispatch(tr);
        }
        return true;
    };
}
function mergeCells(state, dispatch) {
    const sel = state.selection;
    if (!(sel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"]) || sel.$anchorCell.pos === sel.$headCell.pos) {
        return false;
    }
    const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state), { map } = rect;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellsOverlapRectangle"])(map, rect)) {
        return false;
    }
    const hasHeaderRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rowIsHeader"])(map, rect.table, 0);
    const hasHeaderCol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnIsHeader"])(map, rect.table, 0);
    const crossesRowBoundary = hasHeaderRow && rect.top === 0 && rect.bottom > 1;
    const crossesColBoundary = hasHeaderCol && rect.left === 0 && rect.right > 1;
    if (crossesRowBoundary && !(hasHeaderCol && rect.right === 1)) {
        return false;
    }
    if (crossesColBoundary && !(hasHeaderRow && rect.bottom === 1)) {
        return false;
    }
    if (dispatch) {
        const tr = state.tr;
        const seen = {};
        let content = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty;
        let mergedPos;
        let mergedCell;
        for(let row = rect.top; row < rect.bottom; row++){
            for(let col = rect.left; col < rect.right; col++){
                const cellPos = map.map[row * map.width + col];
                const cell = rect.table.nodeAt(cellPos);
                if (seen[cellPos] || !cell) {
                    continue;
                }
                seen[cellPos] = true;
                if (typeof mergedPos !== "number") {
                    mergedPos = cellPos;
                    mergedCell = cell;
                } else {
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmpty"])(cell)) {
                        content = content.append(cell.content);
                    }
                    const mapped = tr.mapping.map(cellPos + rect.tableStart);
                    tr.delete(mapped, mapped + cell.nodeSize);
                }
            }
        }
        if (typeof mergedPos !== "number" || !(mergedCell instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"])) {
            return true;
        }
        tr.setNodeMarkup(mergedPos + rect.tableStart, null, {
            ...addColSpan(mergedCell.attrs, mergedCell.attrs.colspan, rect.right - rect.left - mergedCell.attrs.colspan),
            rowspan: rect.bottom - rect.top
        });
        if (content.size) {
            const end = mergedPos + 1 + mergedCell.content.size;
            const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmpty"])(mergedCell) ? mergedPos + 1 : end;
            tr.replaceWith(start + rect.tableStart, end + rect.tableStart, content);
        }
        tr.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"]([
            tr.doc.resolve(mergedPos + rect.tableStart)
        ].filter((pos)=>pos !== void 0)));
        dispatch(tr);
    }
    return true;
}
function deleteTable(state, dispatch) {
    const $pos = state.selection.$anchor;
    for(let d = $pos.depth; d > 0; d--){
        const node = $pos.node(d);
        if (node.type.spec.tableRole === "table") {
            if (dispatch) {
                dispatch(state.tr.delete($pos.before(d), $pos.after(d)).scrollIntoView());
            }
            return true;
        }
    }
    return false;
}
function selectTable(state, dispatch) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInTable"])(state)) {
        return false;
    }
    if (dispatch) {
        const $cell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectionCell"])(state);
        const table = $cell.node(-1);
        const tableStart = $cell.start(-1);
        const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
        const rect = {
            left: 0,
            right: map.width,
            top: 0,
            bottom: map.height
        };
        const cellPositions = map.cellsInRect(rect);
        const cells = cellPositions.map((pos)=>state.doc.resolve(tableStart + pos));
        dispatch(state.tr.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells)).scrollIntoView());
    }
    return true;
}
function selectColumn(tr, { map, tableStart }, col) {
    const cells = map.cellsInRect({
        left: col,
        right: col + 1,
        top: 0,
        bottom: map.height
    });
    const selection = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells.map((pos)=>tr.doc.resolve(tableStart + pos)), tr.doc);
    tr.setSelection(selection);
    return tr;
}
function selectRow(tr, { map, tableStart }, row) {
    const cells = map.cellsInRect({
        left: 0,
        right: map.width,
        top: row,
        bottom: row + 1
    });
    const selection = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells.map((pos)=>tr.doc.resolve(tableStart + pos)), tr.doc);
    tr.setSelection(selection);
    return tr;
}
function withBorderCanonicalization(dispatch) {
    if (!dispatch) {
        return void 0;
    }
    return (tr)=>{
        const tableInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(tr.selection);
        if (tableInfo) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canonicalizeBorders"])(tr, tableInfo.node, tableInfo.start);
        }
        dispatch(tr);
    };
}
const deleteColumnWithBorders = ()=>(state, dispatch)=>deleteColumn(state, withBorderCanonicalization(dispatch));
const deleteRowWithBorders = ()=>(state, dispatch)=>deleteRow(state, withBorderCanonicalization(dispatch));
const mergeCellsWithBorders = ()=>(state, dispatch)=>mergeCells(state, withBorderCanonicalization(dispatch));
const splitCellWithBorders = ()=>(state, dispatch)=>splitCell(state, withBorderCanonicalization(dispatch));
const addColumnBeforeWithBorders = ()=>(state, dispatch)=>{
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
        if (!table) {
            return false;
        }
        const colRange = table.getSelectionColRange();
        if (!dispatch) {
            return true;
        }
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        const tr = addColumn(state.tr, rect, rect.left, rect.left);
        const tableInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(tr.selection);
        if (tableInfo) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canonicalizeBorders"])(tr, tableInfo.node, tableInfo.start);
        }
        if (colRange) {
            const newRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableRectFromDoc"])(tr.doc, rect.tableStart);
            selectColumn(tr, newRect, colRange.first);
        }
        dispatch(tr);
        return true;
    };
const addColumnAfterWithBorders = ()=>(state, dispatch)=>{
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
        if (!table) {
            return false;
        }
        const colRange = table.getSelectionColRange();
        if (!dispatch) {
            return true;
        }
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        const tr = addColumn(state.tr, rect, rect.right, rect.right - 1);
        const tableInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(tr.selection);
        if (tableInfo) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canonicalizeBorders"])(tr, tableInfo.node, tableInfo.start);
        }
        if (colRange) {
            const newRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableRectFromDoc"])(tr.doc, rect.tableStart);
            selectColumn(tr, newRect, colRange.last + 1);
        }
        dispatch(tr);
        return true;
    };
const addRowBeforeWithBorders = ()=>(state, dispatch)=>{
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
        if (!table) {
            return false;
        }
        const rowRange = table.getSelectionRowRange();
        if (!dispatch) {
            return true;
        }
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        const tr = addRow(state.tr, rect, rect.top, rect.top);
        const tableInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(tr.selection);
        if (tableInfo) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canonicalizeBorders"])(tr, tableInfo.node, tableInfo.start);
        }
        if (rowRange) {
            const newRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableRectFromDoc"])(tr.doc, rect.tableStart);
            selectRow(tr, newRect, rowRange.first);
        }
        dispatch(tr);
        return true;
    };
const addRowAfterWithBorders = ()=>(state, dispatch)=>{
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
        if (!table) {
            return false;
        }
        const rowRange = table.getSelectionRowRange();
        if (!dispatch) {
            return true;
        }
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        const tr = addRow(state.tr, rect, rect.bottom, rect.bottom - 1);
        const tableInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(tr.selection);
        if (tableInfo) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canonicalizeBorders"])(tr, tableInfo.node, tableInfo.start);
        }
        if (rowRange) {
            const newRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableRectFromDoc"])(tr.doc, rect.tableStart);
            selectRow(tr, newRect, rowRange.last + 1);
        }
        dispatch(tr);
        return true;
    };
const toggleHeaderColumnCmd = ()=>(state, dispatch)=>{
        if (!toggleHeader("column")(state)) {
            return false;
        }
        if (!dispatch) {
            return true;
        }
        const tr = state.tr;
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        const types = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(state.schema);
        const parentTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(state.selection);
        if (parentTable) {
            const existingTableData = parentTable.node.attrs.tableData || {};
            tr.setNodeMarkup(parentTable.pos, void 0, {
                ...parentTable.node.attrs,
                tableData: {
                    ...existingTableData,
                    columnHeader: !existingTableData.columnHeader
                }
            });
        }
        applyHeaderToggle(tr, rect, "column", types);
        const newRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableRectFromDoc"])(tr.doc, rect.tableStart);
        selectColumn(tr, newRect, 0);
        dispatch(tr);
        return true;
    };
const toggleHeaderRowCmd = ()=>(state, dispatch)=>{
        if (!toggleHeader("row")(state)) {
            return false;
        }
        if (!dispatch) {
            return true;
        }
        const tr = state.tr;
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        const types = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(state.schema);
        const parentTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(state.selection);
        if (parentTable) {
            const existingTableData = parentTable.node.attrs.tableData || {};
            tr.setNodeMarkup(parentTable.pos, void 0, {
                ...parentTable.node.attrs,
                tableData: {
                    ...existingTableData,
                    rowHeader: !existingTableData.rowHeader
                }
            });
        }
        applyHeaderToggle(tr, rect, "row", types);
        const newRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableRectFromDoc"])(tr.doc, rect.tableStart);
        selectRow(tr, newRect, 0);
        dispatch(tr);
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/decorations/cell-edge-decorations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "borderStyleToCSS",
    ()=>borderStyleToCSS,
    "cellEdgeDecorations",
    ()=>cellEdgeDecorations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/theme-color-token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-view@1.42.2/node_modules/prosemirror-view/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/resolve-cell-borders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
;
;
;
;
;
const computeCornerOffsets = (border, isHorizontal)=>{
    if (!border) {
        return {
            startOffset: 0,
            endOffset: 0
        };
    }
    const startOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCornerOffset"])({
        thisZ: border.zIndex,
        perpZ: border.perpStartZ,
        parallelZ: border.parallelStartZ,
        extAmount: border.extendStart,
        isHorizontal,
        isStartCorner: true
    });
    const endOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCornerOffset"])({
        thisZ: border.zIndex,
        perpZ: border.perpEndZ,
        parallelZ: border.parallelEndZ,
        extAmount: border.extendEnd,
        isHorizontal,
        isStartCorner: false
    });
    return {
        startOffset,
        endOffset
    };
};
function borderStyleToCSS(borders) {
    const vars = [];
    const resolveBorderColor = (color)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDocumentColorToCss"])(color) ?? color;
    if (borders.top) {
        const { startOffset, endOffset } = computeCornerOffsets(borders.top, true);
        vars.push(`--bt-c:${resolveBorderColor(borders.top.color)}`);
        vars.push(`--bt-w:${borders.top.width}px`);
        vars.push(`--bt-es:${startOffset}px`);
        vars.push(`--bt-ee:${endOffset}px`);
        vars.push(`--bt-z:${borders.top.zIndex}`);
    }
    if (borders.bottom) {
        const { startOffset, endOffset } = computeCornerOffsets(borders.bottom, true);
        vars.push(`--bb-c:${resolveBorderColor(borders.bottom.color)}`);
        vars.push(`--bb-w:${borders.bottom.width}px`);
        vars.push(`--bb-es:${startOffset}px`);
        vars.push(`--bb-ee:${endOffset}px`);
        vars.push(`--bb-z:${borders.bottom.zIndex}`);
    }
    if (borders.left) {
        const { startOffset, endOffset } = computeCornerOffsets(borders.left, false);
        vars.push(`--bl-c:${resolveBorderColor(borders.left.color)}`);
        vars.push(`--bl-w:${borders.left.width}px`);
        vars.push(`--bl-es:${startOffset}px`);
        vars.push(`--bl-ee:${endOffset}px`);
        vars.push(`--bl-z:${borders.left.zIndex}`);
    }
    if (borders.right) {
        const { startOffset, endOffset } = computeCornerOffsets(borders.right, false);
        vars.push(`--br-c:${resolveBorderColor(borders.right.color)}`);
        vars.push(`--br-w:${borders.right.width}px`);
        vars.push(`--br-es:${startOffset}px`);
        vars.push(`--br-ee:${endOffset}px`);
        vars.push(`--br-z:${borders.right.zIndex}`);
    }
    return vars.join(";");
}
const cellEdgeDecorations = (doc)=>{
    const decorations = [];
    doc.descendants((node, pos)=>{
        if (node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_TYPE"]) {
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(node);
            const tableStart = pos + 1;
            const cellSpacing = node.attrs.tableData?.cellSpacing ?? 0;
            const resolvedBorders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCellBordersPm"])(node, {
                drawDefaultGrid: true,
                cellSpacing
            });
            const cellIdByPos = /* @__PURE__ */ new Map();
            node.descendants((cellNode, cellPos)=>{
                if (cellNode.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_CELL_TYPE"] || cellNode.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_HEADER_CELL_TYPE"]) {
                    cellIdByPos.set(cellPos, cellNode.attrs.id);
                }
            });
            for(let i = 0; i < map.map.length; i++){
                const cellPos = map.map[i];
                if (i > 0 && map.map[i - 1] === cellPos) {
                    continue;
                }
                const cellNode = node.nodeAt(cellPos);
                if (!cellNode || cellNode.type.name !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_CELL_TYPE"] && cellNode.type.name !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_HEADER_CELL_TYPE"]) {
                    continue;
                }
                const placement = map.findCell(cellPos);
                const cellId = cellNode.attrs.id;
                const borders = resolvedBorders.get(cellId);
                const attrs = {
                    "data-visual-col": String(placement.col),
                    "data-visual-row": String(placement.row)
                };
                if (borders) {
                    const borderStyle = borderStyleToCSS(borders);
                    if (borderStyle) {
                        attrs.style = borderStyle;
                    }
                }
                const absoluteCellPos = tableStart + cellPos;
                decorations.push(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].node(absoluteCellPos, absoluteCellPos + cellNode.nodeSize, attrs));
            }
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(doc, decorations);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resize-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "domCellAround",
    ()=>domCellAround,
    "edgeCell",
    ()=>edgeCell,
    "getTableElement",
    ()=>getTableElement,
    "resetHandle",
    ()=>resetHandle,
    "updateColumns",
    ()=>updateColumns,
    "updateHandle",
    ()=>updateHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/deep-equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
;
;
;
function updateHandle(view, value, key) {
    view.dispatch(view.state.tr.setMeta(key, {
        setHandle: value
    }));
}
function resetHandle(view, key) {
    const pluginState = key.getState(view.state);
    if (pluginState.activeHandle > -1 && !pluginState.dragging) {
        updateHandle(view, -1, key);
    }
}
function domCellAround(target) {
    while(target && target.nodeName !== "TD" && target.nodeName !== "TH"){
        target = target.classList.contains("ProseMirror") ? null : target.parentNode;
    }
    return target;
}
function edgeCell(view, event, side, isVertical = false) {
    const found = view.posAtCoords({
        left: event.clientX,
        top: event.clientY
    });
    if (!found) {
        return -1;
    }
    const { inside } = found;
    const $cell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellAround"])(view.state.doc.resolve(inside + 1));
    if (!$cell) {
        return -1;
    }
    const direction = isVertical ? "bottom" : "right";
    if (side === direction) {
        return $cell.pos;
    }
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get($cell.node(-1));
    const start = $cell.start(-1);
    const index = map.map.indexOf($cell.pos - start);
    return index % map.width === 0 ? -1 : start + map.map[index - 1];
}
function updateColumns({ node, colgroup, table, cellMinWidth, commands, overrideCol, overrideValue, shouldUpdateState }) {
    let totalWidth = 0;
    let nextDOM = colgroup.firstChild;
    const colsWidthRatio = node.attrs.dimensions?.colsWidthRatio || [];
    const row = node.firstChild;
    let actualColumnCount = 0;
    if (row) {
        for(let i = 0; i < row.childCount; i++){
            actualColumnCount += row.child(i).attrs.colspan || 1;
        }
    }
    if (colsWidthRatio.length > 0 && colsWidthRatio.length === actualColumnCount) {
        const spacing = node.attrs.tableData?.cellSpacing ?? 0;
        for(let col = 0; col < colsWidthRatio.length; col++){
            const rawWidth = overrideCol === col ? overrideValue : colsWidthRatio[col];
            const baseWidth = rawWidth ? Math.max(rawWidth, cellMinWidth) : cellMinWidth;
            const hasWidth = col > 0 && spacing > 0 ? baseWidth + spacing : baseWidth;
            const cssWidth = hasWidth + "px";
            totalWidth += hasWidth;
            if (!nextDOM) {
                const colElement = document.createElement("col");
                colElement.style.width = cssWidth;
                colgroup.appendChild(colElement);
            } else {
                if (nextDOM.style.width !== cssWidth) {
                    nextDOM.style.width = cssWidth;
                }
                nextDOM = nextDOM.nextSibling;
            }
        }
    } else {
        const spacing = node.attrs.tableData?.cellSpacing ?? 0;
        const row2 = node.firstChild;
        if (row2 === null) {
            return;
        }
        let fixedWidth = true;
        for(let i = 0, col = 0; i < row2.childCount; i++){
            const { colspan, colwidth } = row2.child(i).attrs;
            for(let j = 0; j < colspan; j++, col++){
                const rawWidth = overrideCol === col ? overrideValue : colwidth && colwidth[j];
                const baseWidth = rawWidth ? Math.max(rawWidth, cellMinWidth) : null;
                const hasWidth = baseWidth && col > 0 && spacing > 0 ? baseWidth + spacing : baseWidth;
                const cssWidth = hasWidth ? hasWidth + "px" : "";
                totalWidth += hasWidth || cellMinWidth;
                if (!hasWidth) {
                    fixedWidth = false;
                }
                if (!(nextDOM instanceof HTMLElement)) {
                    const colElement = document.createElement("col");
                    colElement.style.width = cssWidth;
                    colgroup.appendChild(colElement);
                } else {
                    if (nextDOM.style.width !== cssWidth) {
                        nextDOM.style.width = cssWidth;
                    }
                    nextDOM = nextDOM.nextSibling;
                }
            }
        }
        if (!fixedWidth) {
            table.style.width = "";
            table.style.minWidth = totalWidth + "px";
            while(nextDOM){
                const after = nextDOM.nextSibling;
                if (nextDOM.parentNode) {
                    nextDOM.parentNode.removeChild(nextDOM);
                }
                nextDOM = after;
            }
            if (shouldUpdateState) {
                updateColsWidthAttrs(colgroup, node, commands);
            }
            return;
        }
    }
    while(nextDOM){
        const after = nextDOM.nextSibling;
        if (nextDOM.parentNode === null) {
            return;
        }
        nextDOM.parentNode.removeChild(nextDOM);
        nextDOM = after;
    }
    if (shouldUpdateState) {
        updateColsWidthAttrs(colgroup, node, commands);
    }
    table.style.width = totalWidth + "px";
    table.style.minWidth = "";
}
function updateColsWidthAttrs(colgroup, table, commands) {
    const spacing = table.attrs.tableData?.cellSpacing ?? 0;
    const colsWidth = Array.from(colgroup.children).map((col, index)=>{
        const width = col.offsetWidth;
        return index > 0 && spacing > 0 ? width - spacing : width;
    });
    const colsMinWidth = colsWidth.map((width, index)=>{
        const minBase = Math.min(width, 120);
        return index > 0 && spacing > 0 ? minBase : minBase;
    });
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(table.attrs.dimensions?.colsWidthRatio, colsWidth) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(table.attrs.dimensions?.colsMinWidth, colsMinWidth)) {
        try {
            commands.updateNodeAttrsById(table.attrs.id, {
                ...table.attrs,
                dimensions: {
                    ...table.attrs.dimensions,
                    colsWidthRatio: colsWidth,
                    colsMinWidth
                }
            });
        } catch (e) {
            console.error("could not update node attributes by id", e);
        }
    }
}
const getTableElement = (view, tablePosition)=>{
    try {
        const dom = view.domAtPos(tablePosition + 1).node;
        let element = dom;
        while(element && element.nodeName !== "TABLE"){
            element = element.parentNode;
        }
        return element;
    } catch  {
        return null;
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/fix.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fixTable",
    ()=>fixTable,
    "fixTables",
    ()=>fixTables,
    "fixTablesKey",
    ()=>fixTablesKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
;
;
;
;
const fixTablesKey = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("fix-tables");
function changedDescendants(old, cur, offset, f) {
    const oldSize = old.childCount, curSize = cur.childCount;
    outer: for(let i = 0, j = 0; i < curSize; i++){
        const child = cur.child(i);
        for(let scan = j, e = Math.min(oldSize, i + 3); scan < e; scan++){
            if (old.child(scan) === child) {
                j = scan + 1;
                offset += child.nodeSize;
                continue outer;
            }
        }
        f(child, offset);
        if (j < oldSize && old.child(j).sameMarkup(child)) {
            changedDescendants(old.child(j), child, offset + 1, f);
        } else {
            child.nodesBetween(0, child.content.size, f, offset + 1);
        }
        offset += child.nodeSize;
    }
}
function fixTables(state, oldState) {
    let tr;
    const check = (node, pos)=>{
        if (node.type.spec.tableRole === "table") {
            tr = fixTable(state, node, pos, tr);
        }
    };
    if (!oldState) {
        state.doc.descendants(check);
    } else if (oldState.doc !== state.doc) {
        changedDescendants(oldState.doc, state.doc, 0, check);
    }
    return tr;
}
function fixTable(state, table, tablePos, tr) {
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
    if (!map.problems) {
        return tr;
    }
    if (!tr) {
        tr = state.tr;
    }
    const mustAdd = [];
    for(let i = 0; i < map.height; i++){
        mustAdd.push(0);
    }
    for(let i = 0; i < map.problems.length; i++){
        const prob = map.problems[i];
        if (prob.type === "collision") {
            const cell = table.nodeAt(prob.pos);
            if (!cell) {
                continue;
            }
            const attrs = cell.attrs;
            for(let j = 0; j < attrs.rowspan; j++){
                mustAdd[prob.row + j] += prob.n;
            }
            tr.setNodeMarkup(tr.mapping.map(tablePos + 1 + prob.pos), null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeColSpan"])(attrs, attrs.colspan - prob.n, prob.n));
        } else if (prob.type === "missing") {
            mustAdd[prob.row] += prob.n;
        } else if (prob.type === "overlong_rowspan") {
            const cell = table.nodeAt(prob.pos);
            if (!cell) {
                continue;
            }
            tr.setNodeMarkup(tr.mapping.map(tablePos + 1 + prob.pos), null, {
                ...cell.attrs,
                rowspan: cell.attrs.rowspan - prob.n
            });
        } else if (prob.type === "colwidth mismatch") {
            const cell = table.nodeAt(prob.pos);
            if (!cell) {
                continue;
            }
            tr.setNodeMarkup(tr.mapping.map(tablePos + 1 + prob.pos), null, {
                ...cell.attrs,
                colwidth: prob.colwidth
            });
        } else if (prob.type === "zero_sized") {
            const pos = tr.mapping.map(tablePos);
            tr.delete(pos, pos + table.nodeSize);
        }
    }
    let first, last;
    for(let i = 0; i < mustAdd.length; i++){
        if (mustAdd[i]) {
            if (first === null) {
                first = i;
            }
            last = i;
        }
    }
    for(let i = 0, pos = tablePos + 1; i < map.height; i++){
        const row = table.child(i);
        const end = pos + row.nodeSize;
        const add = mustAdd[i];
        if (add > 0) {
            let role = "cell";
            if (row.firstChild) {
                role = row.firstChild.type.spec.tableRole;
            }
            const nodes = [];
            for(let j = 0; j < add; j++){
                const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(state.schema)[role].createAndFill();
                if (node) {
                    nodes.push(node);
                }
            }
            const side = (i === 0 || first === i - 1) && last === i ? pos + 1 : end - 1;
            tr.insert(tr.mapping.map(side), nodes);
        }
        pos = end;
    }
    return tr.setMeta(fixTablesKey, {
        fixTables: true
    });
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/copypaste.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clipCells",
    ()=>clipCells,
    "insertCells",
    ()=>insertCells,
    "pastedCells",
    ()=>pastedCells
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/canonical-remap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function pastedCells(slice) {
    if (!slice.size) {
        return null;
    }
    let { content, openStart, openEnd } = slice;
    while(content.childCount === 1 && (openStart > 0 && openEnd > 0 || content.firstChild.type.spec.tableRole === "table")){
        openStart--;
        openEnd--;
        content = content.firstChild.content;
    }
    const first = content.firstChild;
    const role = first.type.spec.tableRole;
    const schema = first.type.schema;
    const rows = [];
    if (role === "row") {
        for(let i = 0; i < content.childCount; i++){
            let cells = content.child(i).content;
            const left = i ? 0 : Math.max(0, openStart - 1);
            const right = i < content.childCount - 1 ? 0 : Math.max(0, openEnd - 1);
            if (left || right) {
                cells = fitSlice((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(schema).row, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](cells, left, right)).content;
            }
            rows.push(cells);
        }
    } else if (role === "cell" || role === "header_cell") {
        rows.push(openStart || openEnd ? fitSlice((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(schema).row, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](content, openStart, openEnd)).content : content);
    } else {
        return null;
    }
    return ensureRectangular(schema, rows);
}
function ensureRectangular(schema, rows) {
    const widths = [];
    for(let i = 0; i < rows.length; i++){
        const row = rows[i];
        for(let j = row.childCount - 1; j >= 0; j--){
            const { rowspan, colspan } = row.child(j).attrs;
            for(let r = i; r < i + rowspan; r++){
                widths[r] = (widths[r] || 0) + colspan;
            }
        }
    }
    let width = 0;
    for(let r = 0; r < widths.length; r++){
        width = Math.max(width, widths[r]);
    }
    for(let r = 0; r < widths.length; r++){
        if (r >= rows.length) {
            rows.push(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty);
        }
        if (widths[r] < width) {
            const empty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(schema).cell.createAndFill();
            const cells = [];
            for(let i = widths[r]; i < width; i++){
                cells.push(empty);
            }
            rows[r] = rows[r].append(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(cells));
        }
    }
    return {
        height: rows.length,
        width,
        rows
    };
}
function fitSlice(nodeType, slice) {
    const node = nodeType.createAndFill();
    const tr = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"](node).replace(0, node.content.size, slice);
    return tr.doc;
}
function clipCells({ width, height, rows }, newWidth, newHeight) {
    if (width !== newWidth) {
        const added = [];
        const newRows = [];
        for(let row = 0; row < rows.length; row++){
            const frag = rows[row];
            const cells = [];
            for(let col = added[row] || 0, i = 0; col < newWidth; i++){
                let cell = frag.child(i % frag.childCount);
                if (col + cell.attrs.colspan > newWidth) {
                    cell = cell.type.create((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeColSpan"])(cell.attrs, cell.attrs.colspan, col + cell.attrs.colspan - newWidth), cell.content);
                }
                cells.push(cell);
                col += cell.attrs.colspan;
                for(let j = 1; j < cell.attrs.rowspan; j++){
                    added[row + j] = (added[row + j] || 0) + cell.attrs.colspan;
                }
            }
            newRows.push(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(cells));
        }
        rows = newRows;
        width = newWidth;
    }
    if (height !== newHeight) {
        const newRows = [];
        for(let row = 0, i = 0; row < newHeight; row++, i++){
            const cells = [];
            const source = rows[i % height];
            for(let j = 0; j < source.childCount; j++){
                let cell = source.child(j);
                if (row + cell.attrs.rowspan > newHeight) {
                    cell = cell.type.create({
                        ...cell.attrs,
                        rowspan: Math.max(1, newHeight - cell.attrs.rowspan)
                    }, cell.content);
                }
                cells.push(cell);
            }
            newRows.push(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(cells));
        }
        rows = newRows;
        height = newHeight;
    }
    return {
        width,
        height,
        rows
    };
}
function growTable(tr, map, table, start, width, height, mapFrom) {
    const schema = tr.doc.type.schema;
    const types = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(schema);
    let empty;
    let emptyHead;
    if (width > map.width) {
        for(let row = 0, rowEnd = 0; row < map.height; row++){
            const rowNode = table.child(row);
            rowEnd += rowNode.nodeSize;
            const cells = [];
            let add;
            if (rowNode.lastChild === null || rowNode.lastChild.type === types.cell) {
                add = empty || (empty = types.cell.createAndFill());
            } else {
                add = emptyHead || (emptyHead = types.header_cell.createAndFill());
            }
            for(let i = map.width; i < width; i++){
                cells.push(add);
            }
            tr.insert(tr.mapping.slice(mapFrom).map(rowEnd - 1 + start), cells);
        }
    }
    if (height > map.height) {
        const cells = [];
        for(let i = 0, start2 = (map.height - 1) * map.width; i < Math.max(map.width, width); i++){
            const header = i >= map.width ? false : table.nodeAt(map.map[start2 + i]).type === types.header_cell;
            cells.push(header ? emptyHead || (emptyHead = types.header_cell.createAndFill()) : empty || (empty = types.cell.createAndFill()));
        }
        const emptyRow = types.row.create(null, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(cells));
        const rows = [];
        for(let i = map.height; i < height; i++){
            rows.push(emptyRow);
        }
        tr.insert(tr.mapping.slice(mapFrom).map(start + table.nodeSize - 2), rows);
    }
    return !!(empty || emptyHead);
}
function isolateHorizontal(tr, map, table, start, left, right, top, mapFrom) {
    if (top === 0 || top === map.height) {
        return false;
    }
    let found = false;
    for(let col = left; col < right; col++){
        const index = top * map.width + col;
        const pos = map.map[index];
        if (map.map[index - map.width] === pos) {
            found = true;
            const cell = table.nodeAt(pos);
            const placement = map.findCell(pos);
            tr.setNodeMarkup(tr.mapping.slice(mapFrom).map(pos + start), null, {
                ...cell.attrs,
                rowspan: top - placement.row
            });
            tr.insert(tr.mapping.slice(mapFrom).map(map.positionAt(top, placement.col, table)), cell.type.createAndFill({
                ...cell.attrs,
                rowspan: placement.row + cell.attrs.rowspan - top
            }));
            col += cell.attrs.colspan - 1;
        }
    }
    return found;
}
function isolateVertical(tr, map, table, start, top, bottom, left, mapFrom) {
    if (left === 0 || left === map.width) {
        return false;
    }
    let found = false;
    for(let row = top; row < bottom; row++){
        const index = row * map.width + left;
        const pos = map.map[index];
        if (map.map[index - 1] === pos) {
            found = true;
            const cell = table.nodeAt(pos);
            const cellLeft = map.findCell(pos).col;
            const updatePos = tr.mapping.slice(mapFrom).map(pos + start);
            tr.setNodeMarkup(updatePos, null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeColSpan"])(cell.attrs, left - cellLeft, cell.attrs.colspan - (left - cellLeft)));
            tr.insert(updatePos + cell.nodeSize, cell.type.createAndFill((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeColSpan"])(cell.attrs, 0, left - cellLeft)));
            row += cell.attrs.rowspan - 1;
        }
    }
    return found;
}
function insertCells(state, dispatch, tableStart, rect, cells) {
    let table = tableStart ? state.doc.nodeAt(tableStart - 1) : state.doc, map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
    const { top, left } = rect;
    const right = left + cells.width, bottom = top + cells.height;
    const tr = state.tr;
    let mapFrom = 0;
    function recomp() {
        table = tableStart ? tr.doc.nodeAt(tableStart - 1) : tr.doc;
        map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
        mapFrom = tr.mapping.maps.length;
    }
    if (growTable(tr, map, table, tableStart, right, bottom, mapFrom)) {
        recomp();
    }
    if (isolateHorizontal(tr, map, table, tableStart, left, right, top, mapFrom)) {
        recomp();
    }
    if (isolateHorizontal(tr, map, table, tableStart, left, right, bottom, mapFrom)) {
        recomp();
    }
    if (isolateVertical(tr, map, table, tableStart, top, bottom, left, mapFrom)) {
        recomp();
    }
    if (isolateVertical(tr, map, table, tableStart, top, bottom, right, mapFrom)) {
        recomp();
    }
    for(let row = top; row < bottom; row++){
        const from = map.positionAt(row, left, table);
        const to = map.positionAt(row, right, table);
        tr.replace(tr.mapping.slice(mapFrom).map(from + tableStart), tr.mapping.slice(mapFrom).map(to + tableStart), new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](cells.rows[row - top], 0, 0));
    }
    recomp();
    if (table && tableStart) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canonicalizeBorders"])(tr, table, tableStart);
    }
    const selectionRect = {
        left,
        right,
        top,
        bottom
    };
    const cellPositions = map.cellsInRect(selectionRect);
    const selectedCells = cellPositions.map((pos)=>tr.doc.resolve(tableStart + pos));
    tr.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](selectedCells, tr.doc));
    dispatch(tr);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleMouseDown",
    ()=>handleMouseDown,
    "handlePaste",
    ()=>handlePaste
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$copypaste$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/copypaste.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function handlePaste(view, _, slice) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInTable"])(view.state)) {
        return false;
    }
    let cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$copypaste$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pastedCells"])(slice);
    const sel = view.state.selection;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(sel)) {
        if (!cells) {
            cells = {
                width: 1,
                height: 1,
                rows: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(fitSlice((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(view.state.schema).cell, slice))
                ]
            };
        }
        const start = sel.$anchorCell.start(-1);
        const cellsArray = [];
        sel.forEachCell((_node, pos)=>{
            cellsArray.push(view.state.doc.resolve(pos));
        });
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRectBetweenCells"])(cellsArray);
        cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$copypaste$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipCells"])(cells, rect.right - rect.left, rect.bottom - rect.top);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$copypaste$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertCells"])(view.state, view.dispatch, start, rect, cells);
        return true;
    } else if (cells) {
        const $cell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectionCell"])(view.state);
        if ($cell) {
            const start = $cell.start(-1);
            const { col, row, colspan, rowspan } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get($cell.node(-1)).findCell($cell.pos - start);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$copypaste$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertCells"])(view.state, view.dispatch, start, {
                left: col,
                top: row,
                right: col + colspan,
                bottom: row + rowspan
            }, cells);
            return true;
        }
    }
    return false;
}
function handleMouseDown(view, startEvent, key, isMobile) {
    if (isMobile || startEvent.button !== 0) {
        return;
    }
    const startDOMCell = domInCell(view, startEvent.target);
    if ((startEvent.ctrlKey || startEvent.metaKey) && startDOMCell) {
        const $cell = cellUnderMouse(view, startEvent);
        if ($cell) {
            const newSelection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"].toggleCell(view.state.selection, $cell.pos, view.state.doc);
            view.dispatch(view.state.tr.setSelection(newSelection));
            startEvent.preventDefault();
        }
        return;
    }
    let $anchor;
    if (startEvent.shiftKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(view.state.selection)) {
        setCellSelection(view.state.selection.$anchorCell, startEvent);
        startEvent.preventDefault();
    } else if (startEvent.shiftKey && startDOMCell && ($anchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellAround"])(view.state.selection.$anchor)) !== null && cellUnderMouse(view, startEvent)?.pos !== $anchor.pos) {
        setCellSelection($anchor, startEvent);
        startEvent.preventDefault();
    } else if (!startDOMCell) {
        return;
    }
    const { selection } = view.state;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection) && !selection.empty) {
        const clickPos = view.posAtCoords({
            left: startEvent.clientX,
            top: startEvent.clientY
        });
        if (clickPos && clickPos.pos >= selection.from && clickPos.pos <= selection.to) {
            return;
        }
    }
    const pointerId = startEvent.pointerId;
    const captureTarget = startEvent.target;
    if (pointerId !== void 0 && captureTarget?.setPointerCapture) {
        captureTarget.setPointerCapture(pointerId);
    }
    function isSameCellSelection($anchor2, $head) {
        const { selection: selection2 } = view.state;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection2)) {
            return false;
        }
        return selection2.$anchorCell.pos === $anchor2.pos && selection2.$headCell.pos === $head.pos;
    }
    function setCellSelection($anchor2, event) {
        const textSelection = view.root.getSelection?.();
        if (textSelection) {
            textSelection.removeAllRanges();
        }
        let $head = cellUnderMouse(view, event);
        const starting = key.getState(view.state) === null || key.getState(view.state) === void 0;
        if (!$head || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inSameTable"])($anchor2, $head)) {
            if (starting) {
                $head = $anchor2;
            } else {
                return;
            }
        }
        if (isSameCellSelection($anchor2, $head)) {
            return;
        }
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRectBetweenCells"])([
            $anchor2,
            $head
        ]);
        const table = $anchor2.node(-1);
        const tableStart = $anchor2.start(-1);
        const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
        const cellPositions = map.cellsInRect(rect);
        const cells = cellPositions.map((pos)=>view.state.doc.resolve(tableStart + pos));
        const selection2 = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells, view.state.doc);
        if (starting || !view.state.selection.eq(selection2)) {
            const tr = view.state.tr.setSelection(selection2);
            if (starting) {
                tr.setMeta(key, $anchor2.pos);
            }
            view.dispatch(tr);
        }
    }
    let lastHeadDOMCell = null;
    function stop() {
        view.root.removeEventListener("pointerup", stop);
        view.root.removeEventListener("pointermove", move);
        if (pointerId !== void 0 && captureTarget?.releasePointerCapture) {
            try {
                captureTarget.releasePointerCapture(pointerId);
            } catch  {}
        }
        lastHeadDOMCell = null;
        if (key.getState(view.state)) {
            view.dispatch(view.state.tr.setMeta(key, -1).setMeta("forceToolbarUpdate", true));
        }
    }
    function move(event) {
        const elementUnderPointer = document.elementFromPoint(event.clientX, event.clientY) || event.target;
        const currentDOMCell = domInCell(view, elementUnderPointer);
        if (currentDOMCell === lastHeadDOMCell) {
            return;
        }
        const anchor = key.getState(view.state);
        let $anchor2;
        if (anchor !== null) {
            $anchor2 = view.state.doc.resolve(anchor);
        } else if (currentDOMCell !== startDOMCell) {
            $anchor2 = cellUnderMouse(view, startEvent);
            if (!$anchor2) {
                return stop();
            }
        }
        if ($anchor2) {
            setCellSelection($anchor2, event);
            lastHeadDOMCell = currentDOMCell;
        }
    }
    view.root.addEventListener("pointerup", stop);
    view.root.addEventListener("pointermove", move);
}
function domInCell(view, dom) {
    for(; dom && dom !== view.dom; dom = dom.parentNode){
        if (dom.nodeName === "TD" || dom.nodeName === "TH") {
            return dom;
        }
    }
}
function cellUnderMouse(view, event) {
    const elementUnderPointer = document.elementFromPoint(event.clientX, event.clientY) || event.target;
    const cell = domInCell(view, elementUnderPointer);
    if (!cell) {
        return null;
    }
    return view.state.doc.resolve(view.posAtDOM(cell, 0) - 1);
}
function fitSlice(nodeType, slice) {
    const node = nodeType.createAndFill();
    const tr = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"](node).replace(0, node.content.size, slice);
    return tr.doc;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-editing-plugin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSelectingCells",
    ()=>isSelectingCells,
    "selectingCellsKey",
    ()=>selectingCellsKey,
    "tableEditingPlugin",
    ()=>tableEditingPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$fix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/fix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/find-table.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/input.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const selectingCellsKey = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("selectingCells");
const isSelectingCells = (state)=>{
    return !!(selectingCellsKey.getState(state) !== null && selectingCellsKey.getState(state) !== void 0);
};
const tableEditingPlugin = ({ editor, isMobile })=>{
    const key = selectingCellsKey;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
        key,
        // This piece of state is used to remember when a mouse-drag
        // cell-selection is happening, so that it can continue even as
        // transactions (which might move its anchor cell) come in.
        state: {
            init () {
                return null;
            },
            apply (tr, cur) {
                const set = tr.getMeta(key);
                if (set !== null && set !== void 0) {
                    return set === -1 ? null : set;
                }
                if (cur === null || !tr.docChanged) {
                    return cur;
                }
                const { deleted, pos } = tr.mapping.mapResult(cur);
                return deleted ? null : pos;
            }
        },
        props: {
            decorations: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawCellSelection"],
            handleDOMEvents: {
                mousedown: (view, event)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleMouseDown"])(view, event, key, isMobile);
                    return false;
                }
            },
            createSelectionBetween (view, $anchor, $head) {
                if (key.getState(view.state) !== null) {
                    return view.state.selection;
                }
                const selection = view.state.selection;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection) && !selection.isSingleCell()) {
                    if ($anchor && $head && $anchor.pos === $head.pos) {
                        return null;
                    }
                    return selection;
                }
                return null;
            },
            handleKeyDown: (view, event)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(view.state.selection) && !event.shiftKey && !event.metaKey && !event.ctrlKey && !event.altKey && event.key !== "Escape") {
                    editor.commands.setEditCell();
                }
                return false;
            },
            handlePaste: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handlePaste"]
        },
        appendTransaction (transactions, oldState, state) {
            let tr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$fix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixTables"])(state, oldState);
            const newSel = state.selection;
            const tableContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(newSel);
            if (tableContext) {
                const tableEnd = tableContext.pos + tableContext.node.nodeSize;
                const isSelectionBeyondTable = newSel.from < tableContext.pos || newSel.to > tableEnd;
                if (isSelectionBeyondTable) {
                    return tr;
                }
            }
            const isKeyboardNavigation = transactions.some((t)=>{
                const meta = t.getMeta("pointer");
                return meta === void 0;
            });
            if (isKeyboardNavigation && tableContext) {
                const oldSel = oldState.selection;
                const wasInTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(oldSel);
                if (!wasInTable && newSel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"] && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(newSel)) {
                    const table = tableContext.node;
                    const tableStart = tableContext.start;
                    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
                    const rect = {
                        left: 0,
                        right: map.width,
                        top: 0,
                        bottom: map.height
                    };
                    const cellPositions = map.cellsInRect(rect);
                    const cells = cellPositions.map((pos)=>state.doc.resolve(tableStart + pos));
                    const tableSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells, state.doc);
                    if (!tr) {
                        tr = state.tr;
                    }
                    tr?.setSelection(tableSelection);
                }
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSelection"])(state, tr);
        }
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRANSACTION_META_KEYS",
    ()=>TRANSACTION_META_KEYS
]);
const TRANSACTION_META_KEYS = {
    EDITING_CELL: "editing-cell",
    SELECTED_CELL: "selected-cell",
    SELECT_COLUMN: "select-column",
    SELECT_ROW: "select-row"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/decorations/cell-editing-decorations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cellEditingDecorations",
    ()=>cellEditingDecorations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-view@1.42.2/node_modules/prosemirror-view/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-scss.js [app-client] (ecmascript)");
;
;
const cellEditingDecorations = ($cell)=>{
    const pos = $cell.pos + 1;
    const decorations = [];
    const editCellBottom = document.createElement("div");
    editCellBottom.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].editCellB);
    decorations.push(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].widget(pos, editCellBottom));
    const editCellTop = document.createElement("div");
    editCellTop.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].editCellT);
    decorations.push(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].widget(pos, editCellTop));
    return decorations;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cell-states-plugin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cellStatesPlugin",
    ()=>cellStatesPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-view@1.42.2/node_modules/prosemirror-view/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$cell$2d$editing$2d$decorations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/decorations/cell-editing-decorations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const cellStatesPlugin = (editor, _services, isMobile)=>{
    const key = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("cell-states");
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
        key,
        state: {
            init: ()=>{
                return {};
            },
            apply (tr, prev, oldState, newState) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInTable"])(newState)) {
                    return {};
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(newState.selection)) {
                    return {};
                }
                const { pos: editCell } = tr.getMeta(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_META_KEYS"].EDITING_CELL) || {};
                const { pos: selectCell } = tr.getMeta(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_META_KEYS"].SELECTED_CELL) || {};
                if (newState.selection.ranges.length > 1) {
                    return {};
                } else if (selectCell) {
                    return {
                        selectCell
                    };
                } else if (editCell) {
                    return {
                        editCell
                    };
                }
                return prev;
            }
        },
        props: {
            handleDOMEvents: {
                mousedown: (view, event)=>{
                    if (isMobile || event.button !== 0) {
                        return false;
                    }
                    let target = event.target;
                    const clickTarget = event.target;
                    let isClickOnBounds = false;
                    let cellElement = null;
                    while(target && target !== view.dom){
                        const tagName = target.tagName;
                        if (tagName === "TD" || tagName === "TH") {
                            cellElement = target;
                            if (clickTarget === target) {
                                isClickOnBounds = true;
                            } else if (clickTarget.tagName === "DIV" && clickTarget.parentElement === target) {
                                isClickOnBounds = true;
                            } else {
                                const isNodeView = clickTarget.hasAttribute("data-node-view-wrapper") || clickTarget.classList.contains("node-view-wrapper") || clickTarget.hasAttribute("data-node-view-content");
                                if (isNodeView) {
                                    isClickOnBounds = true;
                                }
                            }
                            break;
                        }
                        target = target.parentElement;
                    }
                    if (!cellElement) {
                        return false;
                    }
                    if (!isClickOnBounds) {
                        return false;
                    }
                    const pos = view.posAtDOM(cellElement, 0);
                    if (pos === null || pos === void 0) {
                        return false;
                    }
                    let cellPos = null;
                    const $pos = view.state.doc.resolve(pos);
                    for(let d = $pos.depth; d > 0; d--){
                        const nodeType = $pos.node(d).type.name;
                        if (nodeType === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_CELL_TYPE"] || nodeType === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_HEADER_CELL_TYPE"]) {
                            cellPos = $pos.before(d);
                            break;
                        }
                    }
                    if (cellPos === null) {
                        return false;
                    }
                    const { selection } = view.state;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
                        const isSingleCell = selection.$anchorCell.pos === selection.$headCell.pos;
                        if (isSingleCell && selection.$anchorCell.pos === cellPos) {
                            event.preventDefault();
                            const cellNode = view.state.doc.nodeAt(cellPos);
                            if (!cellNode) {
                                return false;
                            }
                            const cellContentEnd = cellPos + cellNode.nodeSize - 1;
                            const tr = view.state.tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].near(view.state.doc.resolve(cellContentEnd), -1));
                            view.dispatch(tr);
                            view.focus();
                            return true;
                        }
                    }
                    event.preventDefault();
                    editor.commands.setCellSelection(cellPos);
                    editor.view.focus();
                    return true;
                }
            },
            decorations (state) {
                const tablePluginState = state && key.getState(state);
                if (tablePluginState.editCell) {
                    const editDecorations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$cell$2d$editing$2d$decorations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellEditingDecorations"])(tablePluginState.editCell);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(state.doc, editDecorations);
                }
            }
        }
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-cell-extension.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tableCell",
    ()=>tableCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/theme-color-token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$extensions$2f$create$2d$ricos$2d$extension$2f$create$2d$ricos$2d$node$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap-extensions/create-ricos-extension/create-ricos-node-extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cell$2d$states$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cell-states-plugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-scss.js [app-client] (ecmascript)");
;
;
;
;
;
const tableCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$extensions$2f$create$2d$ricos$2d$extension$2f$create$2d$ricos$2d$node$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRicosNodeExtension"])({
    groups: [],
    type: "html-node",
    reconfigure: (config, _extensions, _props, settings, services)=>({
            ...config,
            addOptions: ()=>({
                    services,
                    ...settings
                })
        }),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_CELL_TYPE"],
    createExtensionConfig () {
        return {
            name: this.name,
            tableRole: "cell",
            isolating: true,
            content: "(PARAGRAPH|tableCellContent)+",
            addAttributes: ()=>({
                    cellStyle: {
                        default: null,
                        parseHTML: (element)=>{
                            const cellStyle = element.getAttribute("cellstyle");
                            return cellStyle ? JSON.parse(cellStyle) : null;
                        },
                        renderHTML: (attributes)=>{
                            return attributes.cellStyle && {
                                cellstyle: JSON.stringify(attributes.cellStyle)
                            };
                        }
                    },
                    borderColors: {
                        default: null,
                        parseHTML: (element)=>{
                            const borderColors = element.getAttribute("bordercolors");
                            return borderColors ? JSON.parse(borderColors) : null;
                        },
                        renderHTML: (attributes)=>{
                            return attributes.borderColors && {
                                bordercolors: JSON.stringify(attributes.borderColors)
                            };
                        }
                    },
                    borderWidths: {
                        default: null,
                        parseHTML: (element)=>{
                            const borderWidths = element.getAttribute("borderwidths");
                            return borderWidths ? JSON.parse(borderWidths) : null;
                        },
                        renderHTML: (attributes)=>{
                            return attributes.borderWidths && {
                                borderwidths: JSON.stringify(attributes.borderWidths)
                            };
                        }
                    },
                    colspan: {
                        default: 1,
                        parseHTML: (element)=>{
                            const colspan = element.getAttribute("colspan");
                            return colspan ? parseInt(colspan, 10) : 1;
                        }
                    },
                    rowspan: {
                        default: 1,
                        parseHTML: (element)=>{
                            const rowspan = element.getAttribute("rowspan");
                            return rowspan ? parseInt(rowspan, 10) : 1;
                        }
                    },
                    colwidth: {
                        default: null,
                        parseHTML: (element)=>{
                            const colwidth = element.getAttribute("colwidth");
                            const value = colwidth ? [
                                parseInt(colwidth, 10)
                            ] : null;
                            return value;
                        }
                    },
                    verticalAlignment: {
                        default: "top",
                        parseHTML: ()=>null,
                        // Handled by cellStyle parseHTML above
                        renderHTML: (attributes)=>{
                            return attributes.cellStyle?.verticalAlignment && {
                                style: `vertical-align: ${attributes.cellStyle.verticalAlignment.toLowerCase()}`
                            };
                        }
                    },
                    backgroundColor: {
                        default: null,
                        parseHTML: ()=>null,
                        // Handled by cellStyle parseHTML above
                        renderHTML: (attributes)=>{
                            return attributes.cellStyle?.backgroundColor && {
                                style: `background-color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDocumentColorToCss"])(attributes.cellStyle.backgroundColor)}`
                            };
                        }
                    }
                }),
            parseHTML () {
                return [
                    {
                        tag: "td"
                    }
                ];
            },
            renderHTML ({ node, HTMLAttributes }) {
                return [
                    "td",
                    {
                        ...HTMLAttributes,
                        "data-node-id": node.attrs.id
                    },
                    [
                        "div",
                        {
                            class: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].borderTop
                        }
                    ],
                    [
                        "div",
                        {
                            class: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].borderBottom
                        }
                    ],
                    [
                        "div",
                        {
                            class: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].borderLeft
                        }
                    ],
                    [
                        "div",
                        {
                            class: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].borderRight
                        }
                    ],
                    [
                        "div",
                        {
                            class: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cell
                        },
                        0
                    ]
                ];
            },
            addProseMirrorPlugins () {
                return [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cell$2d$states$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellStatesPlugin"])(this.editor, this.options.services, this.options.services.context.isMobile)
                ];
            }
        };
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/border.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isOuterEdge",
    ()=>isOuterEdge,
    "setCellBorderColor",
    ()=>setCellBorderColor,
    "setCellBorderColorBySide",
    ()=>setCellBorderColorBySide,
    "setCellBorderWidth",
    ()=>setCellBorderWidth,
    "setCellBorderWidthBySide",
    ()=>setCellBorderWidthBySide,
    "setInnerHorizontalCellsBorderColor",
    ()=>setInnerHorizontalCellsBorderColor,
    "setInnerHorizontalCellsBorderWidth",
    ()=>setInnerHorizontalCellsBorderWidth,
    "setInnerVerticalCellsBorderColor",
    ()=>setInnerVerticalCellsBorderColor,
    "setInnerVerticalCellsBorderWidth",
    ()=>setInnerVerticalCellsBorderWidth,
    "setOutsiderCellsBorderColor",
    ()=>setOutsiderCellsBorderColor,
    "setOutsiderCellsBorderWidth",
    ()=>setOutsiderCellsBorderWidth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/canonical-remap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/edge-detection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
;
;
;
;
const isOuterEdge = (cellData, side, tableWidth, tableHeight, isCellInSelection)=>{
    const { row, col, rowspan, colspan } = cellData;
    switch(side){
        case "top":
            return row === 0 || !isCellInSelection(row - 1, col);
        case "bottom":
            return row + rowspan >= tableHeight || !isCellInSelection(row + rowspan, col);
        case "left":
            return col === 0 || !isCellInSelection(row, col - 1);
        case "right":
            return col + colspan >= tableWidth || !isCellInSelection(row, col + colspan);
        default:
            return false;
    }
};
function prepareBorderContext(state) {
    const { selection } = state;
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(selection);
    if (!table || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
        return null;
    }
    const tableNode = table.getNode();
    const tableStart = table.getStartPos();
    const allSelectedCells = [];
    selection.forEachCell((node, pos)=>allSelectedCells.push({
            node,
            pos
        }));
    return {
        tableNode,
        tableStart,
        allSelectedCells
    };
}
function prepareGridContext(state) {
    const ctx = prepareBorderContext(state);
    if (!ctx) {
        return null;
    }
    const { cells, width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractCellPositions"])(ctx.tableNode, ctx.tableStart);
    const selectedCellIds = /* @__PURE__ */ new Set();
    for (const { node } of ctx.allSelectedCells){
        if (node.attrs.id) {
            selectedCellIds.add(node.attrs.id);
        }
    }
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCellGrid"])(cells, width, height);
    const isCellInSelection = (row, col)=>{
        const cell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$edge$2d$detection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellAt"])(grid, row, col);
        return cell ? selectedCellIds.has(cell.node.attrs.id) : false;
    };
    return {
        ...ctx,
        cells,
        width,
        height,
        isCellInSelection
    };
}
function setCellBorderStyle(style, clear) {
    return (state, dispatch)=>{
        const ctx = prepareBorderContext(state);
        if (!ctx) {
            return false;
        }
        if (!dispatch) {
            return true;
        }
        const tr = state.tr;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBorderEdit"])(tr, ctx.tableNode, ctx.tableStart, ctx.allSelectedCells, null, style, clear);
        dispatch(tr);
        return true;
    };
}
const setCellBorderColor = (color)=>setCellBorderStyle({
        color
    }, color === void 0);
const setCellBorderWidth = (width)=>setCellBorderStyle({
        width
    }, false);
function setOutsiderCellsBorderStyle(style, clear) {
    return (state, dispatch)=>{
        const ctx = prepareGridContext(state);
        if (!ctx) {
            return false;
        }
        if (!dispatch) {
            return true;
        }
        const sides = [
            "top",
            "bottom",
            "left",
            "right"
        ];
        const outerEdgeCells = new Map(sides.map((s)=>[
                s,
                []
            ]));
        for (const { node, pos } of ctx.allSelectedCells){
            const cellData = ctx.cells.find((c)=>c.node.attrs.id === node.attrs.id);
            if (!cellData) {
                continue;
            }
            for (const side of sides){
                if (isOuterEdge(cellData, side, ctx.width, ctx.height, ctx.isCellInSelection)) {
                    outerEdgeCells.get(side).push({
                        node,
                        pos
                    });
                }
            }
        }
        const tr = state.tr;
        for (const side of sides){
            const cellsForSide = outerEdgeCells.get(side);
            if (cellsForSide.length > 0) {
                const $pos = tr.doc.resolve(ctx.tableStart);
                const currentTable = $pos.node($pos.depth);
                if (currentTable?.type.spec.tableRole === "table") {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBorderEdit"])(tr, currentTable, ctx.tableStart, cellsForSide, side, style, clear);
                }
            }
        }
        dispatch(tr);
        return true;
    };
}
const setOutsiderCellsBorderColor = (color)=>setOutsiderCellsBorderStyle({
        color
    }, color === void 0);
const setOutsiderCellsBorderWidth = (width)=>setOutsiderCellsBorderStyle({
        width
    }, false);
function setCellBorderBySideStyle(side, style, clear) {
    return (state, dispatch)=>{
        const ctx = prepareGridContext(state);
        if (!ctx) {
            return false;
        }
        if (!dispatch) {
            return true;
        }
        const outerCells = [];
        for (const { node, pos } of ctx.allSelectedCells){
            const cellData = ctx.cells.find((c)=>c.node.attrs.id === node.attrs.id);
            if (!cellData) {
                continue;
            }
            if (isOuterEdge(cellData, side, ctx.width, ctx.height, ctx.isCellInSelection)) {
                outerCells.push({
                    node,
                    pos
                });
            }
        }
        const tr = state.tr;
        if (outerCells.length > 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBorderEdit"])(tr, ctx.tableNode, ctx.tableStart, outerCells, side, style, clear);
        }
        dispatch(tr);
        return true;
    };
}
const setCellBorderColorBySide = (side, color)=>setCellBorderBySideStyle(side, {
        color
    }, color === void 0);
const setCellBorderWidthBySide = (side, width)=>setCellBorderBySideStyle(side, {
        width
    }, false);
function setInnerHorizontalCellsBorderStyle(style, clear) {
    return (state, dispatch)=>{
        const ctx = prepareGridContext(state);
        if (!ctx) {
            return false;
        }
        if (!dispatch) {
            return true;
        }
        const innerCells = ctx.allSelectedCells.filter(({ node })=>{
            const cellData = ctx.cells.find((c)=>c.node.attrs.id === node.attrs.id);
            return cellData && cellData.row > 0 && ctx.isCellInSelection(cellData.row - 1, cellData.col);
        });
        const tr = state.tr;
        if (innerCells.length > 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBorderEdit"])(tr, ctx.tableNode, ctx.tableStart, innerCells, "top", style, clear);
        }
        dispatch(tr);
        return true;
    };
}
const setInnerHorizontalCellsBorderColor = (color)=>setInnerHorizontalCellsBorderStyle({
        color
    }, color === void 0);
const setInnerHorizontalCellsBorderWidth = (width)=>setInnerHorizontalCellsBorderStyle({
        width
    }, false);
function setInnerVerticalCellsBorderStyle(style, clear) {
    return (state, dispatch)=>{
        const ctx = prepareGridContext(state);
        if (!ctx) {
            return false;
        }
        if (!dispatch) {
            return true;
        }
        const innerCells = ctx.allSelectedCells.filter(({ node })=>{
            const cellData = ctx.cells.find((c)=>c.node.attrs.id === node.attrs.id);
            return cellData && cellData.col > 0 && ctx.isCellInSelection(cellData.row, cellData.col - 1);
        });
        const tr = state.tr;
        if (innerCells.length > 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBorderEdit"])(tr, ctx.tableNode, ctx.tableStart, innerCells, "left", style, clear);
        }
        dispatch(tr);
        return true;
    };
}
const setInnerVerticalCellsBorderColor = (color)=>setInnerVerticalCellsBorderStyle({
        color
    }, color === void 0);
const setInnerVerticalCellsBorderWidth = (width)=>setInnerVerticalCellsBorderStyle({
        width
    }, false);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/create-cell.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCell",
    ()=>createCell
]);
function createCell(cellType, cellContent) {
    if (cellContent) {
        return cellType.createChecked(null, cellContent);
    }
    return cellType.createAndFill();
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/get-table-node-types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTableNodeTypes",
    ()=>getTableNodeTypes
]);
function getTableNodeTypes(schema) {
    if (schema.cached.tableNodeTypes) {
        return schema.cached.tableNodeTypes;
    }
    const roles = {};
    Object.keys(schema.nodes).forEach((type)=>{
        const nodeType = schema.nodes[type];
        if (nodeType.spec.tableRole) {
            roles[nodeType.spec.tableRole] = nodeType;
        }
    });
    schema.cached.tableNodeTypes = roles;
    return roles;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/create-table.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTable",
    ()=>createTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$create$2d$cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/create-cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$get$2d$table$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/get-table-node-types.js [app-client] (ecmascript)");
;
;
function createTable(schema, rowsCount, colsCount, withHeaderRow, cellContent) {
    const types = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$get$2d$table$2d$node$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableNodeTypes"])(schema);
    const headerCells = [];
    const cells = [];
    for(let index = 0; index < colsCount; index += 1){
        const cell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$create$2d$cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCell"])(types.cell, cellContent);
        if (cell) {
            cells.push(cell);
        }
        if (withHeaderRow) {
            const headerCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$create$2d$cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCell"])(types.header_cell, cellContent);
            if (headerCell) {
                headerCells.push(headerCell);
            }
        }
    }
    const rows = [];
    for(let index = 0; index < rowsCount; index += 1){
        rows.push(types.row.createChecked(null, withHeaderRow && index === 0 ? headerCells : cells));
    }
    return types.table.createChecked(null, rows);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/cell-attributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addColumnAtIndex",
    ()=>addColumnAtIndex,
    "addRowAtIndex",
    ()=>addRowAtIndex,
    "clearCell",
    ()=>clearCell,
    "distributeColumns",
    ()=>distributeColumns,
    "distributeRows",
    ()=>distributeRows,
    "insertTable",
    ()=>insertTable,
    "setCellAttribute",
    ()=>setCellAttribute,
    "setCellPadding",
    ()=>setCellPadding,
    "setCellSpacing",
    ()=>setCellSpacing,
    "setEditCell",
    ()=>setEditCell,
    "setTableAltText",
    ()=>setTableAltText,
    "setTableRowHeight",
    ()=>setTableRowHeight,
    "toggleTableAttribute",
    ()=>toggleTableAttribute,
    "updateCellAttribute",
    ()=>updateCellAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/canonical-remap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$create$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/create-table.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/find-table.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const insertTable = ({ rows = 3, cols = 3, withHeaderRow = true } = {})=>(state, dispatch)=>{
        const tr = state.tr;
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$create$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTable"])(state.schema, rows, cols, withHeaderRow);
        if (dispatch) {
            const offset = tr.selection.anchor + 1;
            tr.replaceSelectionWith(node).scrollIntoView().setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].near(tr.doc.resolve(offset)));
            dispatch(tr);
        }
        return true;
    };
const setCellAttribute = (name, value)=>(state, dispatch)=>{
        const tr = state.tr;
        const { selection } = state;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
            return false;
        }
        selection.forEachCell((node, pos)=>{
            if (node.attrs[name] !== value) {
                tr.setNodeMarkup(pos, null, {
                    ...node.attrs,
                    [name]: value
                });
            }
        });
        dispatch?.(tr);
        return true;
    };
const updateCellAttribute = (name, value)=>(state, dispatch)=>{
        const tr = state.tr;
        const { selection } = state;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
            return false;
        }
        selection.forEachCell((node, pos)=>{
            if (node.attrs[name] !== value) {
                tr.setNodeMarkup(pos, null, {
                    ...node.attrs,
                    [name]: {
                        ...node.attrs[name] || {},
                        ...value ?? {}
                    }
                });
            }
        });
        dispatch?.(tr);
        return true;
    };
const toggleTableAttribute = (name)=>(state, dispatch)=>{
        const parentTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(state.selection);
        if (parentTable) {
            const { tr } = state;
            const table = parentTable.node;
            const existingTableData = table.attrs.tableData || {};
            tr.setNodeMarkup(parentTable.pos, void 0, {
                ...table.attrs,
                tableData: {
                    ...existingTableData,
                    [name]: !existingTableData[name]
                }
            });
            dispatch?.(tr);
        }
        return true;
    };
const setTableAltText = (text)=>(state, dispatch)=>{
        const parentTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(state.selection);
        if (parentTable) {
            const { tr } = state;
            const table = parentTable.node;
            const existingTableData = table.attrs.tableData || {};
            tr.setNodeMarkup(parentTable.pos, void 0, {
                ...table.attrs,
                tableData: {
                    ...existingTableData,
                    altText: text || void 0
                }
            });
            dispatch?.(tr);
        }
        return true;
    };
const setCellSpacing = (spacing)=>(state, dispatch)=>{
        const tr = state.tr;
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
        if (!table) {
            return false;
        }
        const tableNode = table.getNode();
        const tablePos = table.getStartPos() - 1;
        const existingTableData = tableNode.attrs.tableData || {};
        tr.setNodeMarkup(tablePos, null, {
            ...tableNode.attrs,
            tableData: {
                ...existingTableData,
                cellSpacing: spacing
            }
        });
        dispatch?.(tr);
        return true;
    };
const setCellPadding = (padding)=>(state, dispatch)=>{
        const tr = state.tr;
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
        if (!table) {
            return false;
        }
        const tableNode = table.getNode();
        const tablePos = table.getStartPos() - 1;
        const existingTableData = tableNode.attrs.tableData || {};
        const paddingArray = Array.isArray(padding) ? padding : [
            padding,
            padding,
            padding,
            padding
        ];
        tr.setNodeMarkup(tablePos, null, {
            ...tableNode.attrs,
            tableData: {
                ...existingTableData,
                cellPadding: paddingArray
            }
        });
        dispatch?.(tr);
        return true;
    };
const setEditCell = ()=>(state, dispatch)=>{
        const tr = state.tr;
        const $anchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellAround"])(state.selection.$anchor);
        if ($anchor) {
            tr.setMeta(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_META_KEYS"].EDITING_CELL, {
                pos: $anchor
            });
            const selection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"].near(state.selection.$head, -1);
            tr.setSelection(selection);
            dispatch?.(tr);
            return true;
        }
        return false;
    };
const clearCell = ()=>(state, dispatch)=>{
        const tr = state.tr;
        const { selection } = state;
        let hasCleared = false;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection)) {
            const paragraphType = state.schema.nodes.PARAGRAPH;
            const { doc } = state;
            const positions = Array.from(selection.cellPositions).sort((a, b)=>b - a);
            for (const pos of positions){
                const node = doc.nodeAt(pos);
                if (node && (node.childCount > 1 || // Non-leaf node has empty content nodeSize of 2 (opening and closing tags)
                node.childCount === 1 && node.firstChild.nodeSize > 2)) {
                    hasCleared = true;
                    const cellStart = pos + 1;
                    const cellEnd = pos + node.nodeSize - 1;
                    tr.replaceWith(cellStart, cellEnd, paragraphType.create());
                }
            }
            dispatch?.(tr);
            return hasCleared;
        }
        return false;
    };
const setTableRowHeight = (height, pos, node)=>(state, dispatch)=>{
        const tr = state.tr;
        tr.setNodeMarkup(pos, void 0, {
            ...node.attrs,
            height
        });
        dispatch?.(tr);
        return true;
    };
const distributeRows = ()=>(state, dispatch)=>{
        const tr = state.tr;
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
        if (table) {
            const rows = table.getRowsIndexesInSelection();
            const tableAttrs = table.getNode().attrs;
            const totalHeight = [
                ...tableAttrs.dimensions.rowsHeight
            ].splice(rows[0], rows[rows.length - 1]).reduce((curr, acc)=>curr + acc, 0);
            const newHeight = totalHeight / rows.length;
            table.getNode().content.forEach((node, pos, index)=>{
                rows.includes(index) && tr.setNodeMarkup(pos + table.getStartPos(), void 0, {
                    ...node.attrs,
                    height: newHeight
                });
            });
            dispatch?.(tr);
            return true;
        }
        return false;
    };
const distributeColumns = ()=>(state, dispatch)=>{
        const tr = state.tr;
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
        if (!table) {
            return false;
        }
        const cols = table.getColsIndexesInSelection();
        if (cols.length === 0) {
            return false;
        }
        const tableNode = table.getNode();
        const tableStart = table.getStartPos();
        const tableMap = table.map;
        const dimensions = tableNode.attrs.dimensions || {};
        const existingColsWidthRatio = dimensions.colsWidthRatio || Array(tableMap.width).fill(100);
        const totalWidth = cols.reduce((sum, colIndex)=>sum + (existingColsWidthRatio[colIndex] || 100), 0);
        const widthPerColumn = totalWidth / cols.length;
        const colsWidthRatio = [
            ...existingColsWidthRatio
        ];
        const colsMinWidth = dimensions.colsMinWidth ? [
            ...dimensions.colsMinWidth
        ] : Array(tableMap.width).fill(100);
        cols.forEach((colIndex)=>{
            colsWidthRatio[colIndex] = widthPerColumn;
            colsMinWidth[colIndex] = Math.min(widthPerColumn, 120);
        });
        tr.setNodeMarkup(tableStart - 1, null, {
            ...tableNode.attrs,
            dimensions: {
                ...dimensions,
                colsWidthRatio,
                colsMinWidth
            }
        });
        dispatch?.(tr);
        return true;
    };
const addColumnAtIndex = (index)=>(state, dispatch)=>{
        if (!dispatch) {
            return true;
        }
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        const tr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addColumn"])(state.tr, rect, index);
        const newRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableRectFromDoc"])(tr.doc, rect.tableStart);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canonicalizeBorders"])(tr, newRect.table, newRect.tableStart);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectColumn"])(tr, newRect, index));
        return true;
    };
const addRowAtIndex = (index)=>(state, dispatch)=>{
        if (!dispatch) {
            return true;
        }
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        const tr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRow"])(state.tr, rect, index);
        const newRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableRectFromDoc"])(tr.doc, rect.tableStart);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$canonical$2d$remap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canonicalizeBorders"])(tr, newRect.table, newRect.tableStart);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectRow"])(tr, newRect, index));
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/navigation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "goToNextCell",
    ()=>goToNextCell,
    "moveCellForward",
    ()=>moveCellForward
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
;
;
function findNextCell($cell, dir) {
    if (dir < 0) {
        const before = $cell.nodeBefore;
        if (before) {
            return $cell.pos - before.nodeSize;
        }
        for(let row = $cell.index(-1) - 1, rowEnd = $cell.before(); row >= 0; row--){
            const rowNode = $cell.node(-1).child(row);
            const lastChild = rowNode.lastChild;
            if (lastChild) {
                return rowEnd - 1 - lastChild.nodeSize;
            }
            rowEnd -= rowNode.nodeSize;
        }
    } else {
        if ($cell.index() < $cell.parent.childCount - 1) {
            return $cell.pos + $cell.nodeAfter.nodeSize;
        }
        const table = $cell.node(-1);
        for(let row = $cell.indexAfter(-1), rowStart = $cell.after(); row < table.childCount; row++){
            const rowNode = table.child(row);
            if (rowNode.childCount) {
                return rowStart + 1;
            }
            rowStart += rowNode.nodeSize;
        }
    }
    return null;
}
function moveCellForward($pos) {
    return $pos.node(0).resolve($pos.pos + $pos.nodeAfter.nodeSize);
}
function goToNextCell(direction) {
    return function(state, dispatch) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInTable"])(state)) {
            return false;
        }
        const cell = findNextCell((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectionCell"])(state), direction);
        if (cell === null) {
            return false;
        }
        if (dispatch) {
            const $cell = state.doc.resolve(cell);
            dispatch(state.tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].between($cell, moveCellForward($cell))).scrollIntoView());
        }
        return true;
    };
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/reorder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moveColumns",
    ()=>moveColumns,
    "moveRows",
    ()=>moveRows,
    "reorderColumns",
    ()=>reorderColumns,
    "reorderColumnsTr",
    ()=>reorderColumnsTr,
    "reorderRows",
    ()=>reorderRows,
    "reorderRowsTr",
    ()=>reorderRowsTr
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
;
;
;
;
;
;
function selectColumnsTr(tr, fromCol, toCol, tablePos) {
    const $tablePos = tr.doc.resolve(tablePos);
    const tempSelection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(tr.doc, $tablePos.pos);
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(tempSelection);
    if (!table) {
        return;
    }
    const initialRect = {
        left: fromCol,
        right: toCol + 1,
        top: 0,
        bottom: table.map.height
    };
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellsInExpandedRect"])(tr.doc, table.getStartPos(), table.map, initialRect);
    const selection = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells, tr.doc);
    tr.setSelection(selection);
}
function selectRowsTr(tr, fromRow, toRow, tablePos) {
    const $tablePos = tr.doc.resolve(tablePos);
    const tempSelection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(tr.doc, $tablePos.pos);
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(tempSelection);
    if (!table) {
        return;
    }
    const initialRect = {
        left: 0,
        right: table.map.width,
        top: fromRow,
        bottom: toRow + 1
    };
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellsInExpandedRect"])(tr.doc, table.getStartPos(), table.map, initialRect);
    const selection = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells, tr.doc);
    tr.setSelection(selection);
}
function reorderRowsTr(tr, state, from, to) {
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
    if (!table) {
        return;
    }
    const tableStart = table.getStartPos();
    const tableNode = table.getNode();
    const hadHeaderRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rowIsHeader"])(table.map, tableNode, 0);
    const hadHeaderCol = hadHeaderRow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnIsHeader"])(table.map, tableNode, 0);
    const draggedRows = [];
    const rowsToDelete = [];
    tableNode.forEach((row, offset, index)=>{
        if (index >= from.start && index <= from.end) {
            draggedRows.push(row);
            rowsToDelete.push({
                pos: tableStart + offset,
                node: row
            });
        }
    });
    let rowPos = tableStart;
    for(let i = 0; i < to; i++){
        rowPos += tableNode.child(i).nodeSize;
    }
    tr.insert(rowPos, draggedRows);
    rowsToDelete.sort((a, b)=>b.pos - a.pos).forEach(({ pos, node })=>{
        const mappedPos = tr.mapping.map(pos);
        tr.delete(mappedPos, mappedPos + node.nodeSize);
    });
    if (hadHeaderRow) {
        const tablePos = tr.mapping.map(tableStart - 1);
        const newTable = tr.doc.nodeAt(tablePos);
        const types = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(newTable.type.schema);
        const newMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(newTable);
        newMap.forEachCell((cellPos, placement)=>{
            const cell = newTable.nodeAt(cellPos);
            const shouldBeHeader = placement.row === 0 || hadHeaderCol && placement.col === 0;
            const expected = shouldBeHeader ? types.header_cell : types.cell;
            if (cell.type !== expected) {
                tr.setNodeMarkup(tablePos + 1 + cellPos, expected, cell.attrs);
            }
        });
    }
}
function reorderColumnsTr(tr, state, from, to) {
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
    if (!table) {
        return;
    }
    const tableStart = table.getStartPos();
    const tableNode = table.getNode();
    const map = table.map;
    const hadHeaderCol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnIsHeader"])(map, tableNode, 0);
    const hadHeaderRow = hadHeaderCol && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rowIsHeader"])(map, tableNode, 0);
    let expandedStart = from.start;
    let expandedEnd = from.end;
    for(let row = 0; row < map.height; row++){
        for(let col = from.start; col <= from.end; col++){
            const cellPos = map.map[row * map.width + col];
            const placement = map.findCell(cellPos);
            if (placement.col < expandedStart) {
                expandedStart = placement.col;
            }
            if (placement.col + placement.colspan - 1 > expandedEnd) {
                expandedEnd = placement.col + placement.colspan - 1;
            }
        }
    }
    const dimensions = tableNode.attrs.dimensions;
    if (dimensions?.colsWidthRatio?.length > 0) {
        const colsWidthRatio = [
            ...dimensions.colsWidthRatio
        ];
        const colsMinWidth = dimensions.colsMinWidth ? [
            ...dimensions.colsMinWidth
        ] : [];
        const numColsToMove = expandedEnd - expandedStart + 1;
        const movedWidthRatios = colsWidthRatio.splice(expandedStart, numColsToMove);
        const movedMinWidths = colsMinWidth.splice(expandedStart, numColsToMove);
        const insertIndex = to > expandedStart ? to - numColsToMove : to;
        colsWidthRatio.splice(insertIndex, 0, ...movedWidthRatios);
        if (colsMinWidth.length > 0) {
            colsMinWidth.splice(insertIndex, 0, ...movedMinWidths);
        }
        const newDimensions = {
            ...dimensions,
            colsWidthRatio,
            colsMinWidth: colsMinWidth.length > 0 ? colsMinWidth : dimensions.colsMinWidth
        };
        tr.setNodeMarkup(tableStart - 1, null, {
            ...tableNode.attrs,
            dimensions: newDimensions
        });
    }
    const cellsToDelete = [];
    tableNode.forEach((row, rowOffset, rowIndex)=>{
        const cellsToInsert = [];
        for(let col = expandedStart; col <= expandedEnd; col++){
            const mapPos = map.map[rowIndex * map.width + col];
            const placement = map.findCell(mapPos);
            if (placement.col === col && placement.row === rowIndex) {
                const cellNode = tableNode.nodeAt(mapPos);
                if (cellNode) {
                    cellsToInsert.push(cellNode);
                    const cellPosInTable = mapPos;
                    cellsToDelete.push({
                        pos: tableStart + cellPosInTable,
                        node: cellNode
                    });
                }
            }
        }
        if (cellsToInsert.length > 0) {
            const dropPosRel = map.positionAt(rowIndex, to, tableNode);
            const insertPos = tr.mapping.map(tableStart + dropPosRel);
            tr.insert(insertPos, cellsToInsert);
        }
    });
    cellsToDelete.sort((a, b)=>b.pos - a.pos).forEach(({ pos, node })=>{
        const mappedPos = tr.mapping.map(pos);
        tr.delete(mappedPos, mappedPos + node.nodeSize);
    });
    if (hadHeaderCol) {
        const tablePos = tr.mapping.map(tableStart - 1);
        const newTable = tr.doc.nodeAt(tablePos);
        const types = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableNodeTypes"])(newTable.type.schema);
        const newMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(newTable);
        newMap.forEachCell((cellPos, placement)=>{
            const cell = newTable.nodeAt(cellPos);
            const shouldBeHeader = placement.col === 0 || hadHeaderRow && placement.row === 0;
            const expected = shouldBeHeader ? types.header_cell : types.cell;
            if (cell.type !== expected) {
                tr.setNodeMarkup(tablePos + 1 + cellPos, expected, cell.attrs);
            }
        });
    }
}
const reorderRows = (from, to)=>(state, dispatch)=>{
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
        if (!table) {
            return false;
        }
        if (!dispatch) {
            return true;
        }
        const tr = state.tr;
        reorderRowsTr(tr, state, from, to);
        dispatch(tr);
        return true;
    };
const reorderColumns = (from, to)=>(state, dispatch)=>{
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
        if (!table) {
            return false;
        }
        if (!dispatch) {
            return true;
        }
        const tr = state.tr;
        reorderColumnsTr(tr, state, from, to);
        dispatch(tr);
        return true;
    };
const moveColumns = (direction)=>(state, dispatch, view)=>{
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
        if (!table || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(state.selection)) {
            return false;
        }
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(state.selection) ? state.selection.getRect() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        if (rect.top !== 0 || rect.bottom !== table.getHeight()) {
            return false;
        }
        const firstCol = rect.left;
        const lastCol = rect.right - 1;
        const colWidth = rect.right - rect.left;
        const targetCol = direction === "left" ? firstCol - 1 : lastCol + 1;
        const tableStart = table.getStartPos();
        if (targetCol < 0 || targetCol > table.getWidth()) {
            return false;
        }
        let newTargetCol = targetCol;
        if (targetCol > 0 && targetCol < table.map.width) {
            const cellColStartPos = targetCol;
            const cellColEndPos = table.map.width * (table.map.height - 1) + cellColStartPos;
            const targetRect = table.map.rectBetween(table.map.map[cellColStartPos], table.map.map[cellColEndPos]);
            newTargetCol = direction === "left" ? targetRect.left : targetRect.right;
        }
        const finalColStart = direction === "left" ? newTargetCol : newTargetCol - colWidth;
        const finalColEnd = finalColStart + colWidth - 1;
        if (!dispatch) {
            return true;
        }
        const tr = state.tr;
        reorderColumnsTr(tr, state, {
            start: firstCol,
            end: lastCol
        }, newTargetCol);
        selectColumnsTr(tr, finalColStart, finalColEnd, tableStart);
        dispatch(tr);
        view?.focus();
        return true;
    };
const moveRows = (direction)=>(state, dispatch, view)=>{
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(state.selection);
        if (!table || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(state.selection)) {
            return false;
        }
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(state.selection) ? state.selection.getRect() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        if (rect.left !== 0 || rect.right !== table.getWidth()) {
            return false;
        }
        const firstRow = rect.top;
        const lastRow = rect.bottom - 1;
        const targetRow = direction === "up" ? firstRow - 1 : lastRow + 1;
        const rowHeight = rect.bottom - rect.top;
        const tableStart = table.getStartPos();
        if (targetRow < 0 || targetRow > table.getHeight()) {
            return false;
        }
        let newTargetRow = targetRow;
        if (targetRow < table.map.height) {
            const toRowStart = targetRow * table.map.width;
            const toRowEnd = toRowStart + table.map.width - 1;
            const toRect = table.map.rectBetween(table.map.map[toRowStart], table.map.map[toRowEnd]);
            newTargetRow = direction === "up" ? toRect.top : toRect.bottom;
        }
        const finalRowStart = direction === "up" ? newTargetRow : newTargetRow - rowHeight;
        const finalRowEnd = finalRowStart + rowHeight - 1;
        if (!dispatch) {
            return true;
        }
        const tr = state.tr;
        reorderRowsTr(tr, state, {
            start: firstRow,
            end: lastRow
        }, newTargetRow);
        selectRowsTr(tr, finalRowStart, finalRowEnd, tableStart);
        dispatch(tr);
        view?.focus();
        return true;
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/selection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteRowAtIndex",
    ()=>deleteRowAtIndex,
    "selectColumnAtIndex",
    ()=>selectColumnAtIndex,
    "selectColumnCmd",
    ()=>selectColumnCmd,
    "selectColumns",
    ()=>selectColumns,
    "selectRowAtIndex",
    ()=>selectRowAtIndex,
    "selectRowCmd",
    ()=>selectRowCmd,
    "selectRows",
    ()=>selectRows,
    "selectWholeTable",
    ()=>selectWholeTable,
    "setCellSelection",
    ()=>setCellSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
;
;
;
;
;
;
const setCellSelection = (pos)=>(state, dispatch)=>{
        const tr = state.tr;
        if (dispatch) {
            const selection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"].create(tr.doc, pos);
            tr.setMeta(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_META_KEYS"].SELECTED_CELL, {
                pos
            });
            tr.setSelection(selection);
            dispatch(tr);
        }
        return true;
    };
const selectColumnAtIndex = (index)=>(state, dispatch)=>{
        const tr = state.tr;
        tr.setMeta(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_META_KEYS"].SELECT_COLUMN, index);
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        dispatch?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectColumn"])(tr, rect, index));
        return true;
    };
const selectColumnCmd = ()=>(state, dispatch)=>{
        const tr = state.tr;
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        dispatch?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectColumn"])(tr, rect, rect.left));
        return true;
    };
const selectRowAtIndex = (index)=>(state, dispatch)=>{
        const tr = state.tr;
        tr.setMeta(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_META_KEYS"].SELECT_ROW, index);
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        dispatch?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectRow"])(tr, rect, index));
        return true;
    };
const selectRowCmd = ()=>(state, dispatch)=>{
        const tr = state.tr;
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        dispatch?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectRow"])(tr, rect, rect.top));
        return true;
    };
const selectRows = (fromRow, toRow, tablePos)=>(state, dispatch)=>{
        const tr = state.tr;
        const $tablePos = tr.doc.resolve(tablePos);
        const tempSelection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(tr.doc, $tablePos.pos);
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(tempSelection);
        if (!table) {
            return false;
        }
        const initialRect = {
            left: 0,
            right: table.map.width,
            top: fromRow,
            bottom: toRow + 1
        };
        const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellsInExpandedRect"])(tr.doc, table.getStartPos(), table.map, initialRect);
        const selection = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells, tr.doc);
        if (dispatch) {
            dispatch(tr.setSelection(selection));
        }
        return true;
    };
const selectColumns = (fromCol, toCol, tablePos)=>(state, dispatch)=>{
        const tr = state.tr;
        const $tablePos = tr.doc.resolve(tablePos);
        const tempSelection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(tr.doc, $tablePos.pos);
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(tempSelection);
        if (!table) {
            return false;
        }
        const initialRect = {
            left: fromCol,
            right: toCol + 1,
            top: 0,
            bottom: table.map.height
        };
        const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellsInExpandedRect"])(tr.doc, table.getStartPos(), table.map, initialRect);
        const selection = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells, tr.doc);
        if (dispatch) {
            dispatch(tr.setSelection(selection));
        }
        return true;
    };
const deleteRowAtIndex = (index)=>(state, dispatch)=>{
        const tr = state.tr;
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeRow"])(tr, rect, index);
        dispatch?.(tr);
        return true;
    };
const selectWholeTable = ()=>(state, dispatch)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectTable"])(state, dispatch);
    };
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/decorations/svgs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addSvg",
    ()=>addSvg,
    "dragAndDropSvg",
    ()=>dragAndDropSvg,
    "getPluginMenuIcon",
    ()=>getPluginMenuIcon,
    "selectTableSvg",
    ()=>selectTableSvg
]);
const addSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
<path
  fillRule="evenodd"
  d="M10 9V5H9V9H5V10H9V14H10V10H14V9H10Z"
  fill="currentColor"
/>
</svg>`;
const dragAndDropSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="9px" height="13px" viewBox="0 0 9 13">
<g id="Symbols" stroke="none">
  <g
    id="drag&amp;drop/row/unselected"
    transform="translate(-9.000000, -15.000000)"
    fill="currentColor"
  >
    <g
      transform="translate(14.000000, 21.500000) rotate(-270.000000) translate(-14.000000, -21.500000) translate(-7.000000, 8.000000)"
      id="drag&amp;drop/column"
    >
      <g id="Group-5" transform="translate(15.000000, 10.000000)">
        <path
          d="M2,4.8 C2.62132034,4.8 3.13235254,5.26813868 3.19380454,5.87654553 L3.2,6 C3.2,6.62132034 2.73186132,7.13235254 2.12345447,7.19380454 L2,7.2 C1.3372583,7.2 0.8,6.66736221 0.8,6 C0.8,5.37867966 1.26813868,4.86764746 1.87654553,4.80619546 L2,4.8 Z M6,4.8 C6.62132034,4.8 7.13235254,5.26813868 7.19380454,5.87654553 L7.2,6 C7.2,6.62132034 6.73186132,7.13235254 6.12345447,7.19380454 L6,7.2 C5.3372583,7.2 4.8,6.66736221 4.8,6 C4.8,5.37867966 5.26813868,4.86764746 5.87654553,4.80619546 L6,4.8 Z M10,4.8 C10.6213203,4.8 11.1323525,5.26813868 11.1938045,5.87654553 L11.2,6 C11.2,6.62132034 10.7318613,7.13235254 10.1234545,7.19380454 L10,7.2 C9.3372583,7.2 8.8,6.66736221 8.8,6 C8.8,5.37867966 9.26813868,4.86764746 9.87654553,4.80619546 L10,4.8 Z"
          id="Color"
        />
        <path
          d="M2,0.2 C2.62132034,0.2 3.13235254,0.66813868 3.19380454,1.27654553 L3.2,1.4 C3.2,2.02132034 2.73186132,2.53235254 2.12345447,2.59380454 L2,2.6 C1.3372583,2.6 0.8,2.06736221 0.8,1.4 C0.8,0.778679656 1.26813868,0.267647457 1.87654553,0.206195465 L2,0.2 Z M6,0.2 C6.62132034,0.2 7.13235254,0.66813868 7.19380454,1.27654553 L7.2,1.4 C7.2,2.02132034 6.73186132,2.53235254 6.12345447,2.59380454 L6,2.6 C5.3372583,2.6 4.8,2.06736221 4.8,1.4 C4.8,0.778679656 5.26813868,0.267647457 5.87654553,0.206195465 L6,0.2 Z M10,0.2 C10.6213203,0.2 11.1323525,0.66813868 11.1938045,1.27654553 L11.2,1.4 C11.2,2.02132034 10.7318613,2.53235254 10.1234545,2.59380454 L10,2.6 C9.3372583,2.6 8.8,2.06736221 8.8,1.4 C8.8,0.778679656 9.26813868,0.267647457 9.87654553,0.206195465 L10,0.2 Z"
          id="Color"
        />
      </g>
    </g>
  </g>
</g>
</svg>
`;
const selectTableSvg = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="8px"
  height="9px"
  viewBox="0 0 8 9"
  version="1.1"
>
<g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
  <g
    id="select-all-table-/-default"
    transform="translate(-6.000000, -6.000000)"
    fill="currentColor"
  >
    <g id="Group-3" transform="translate(6.000000, 6.000000)">
      <path
        d="M6.44395231,8.49973295 C5.62343982,8.4690612 4.98007615,7.78418875 5.00047181,6.96312144 C5.02086747,6.14205413 5.69744127,5.48998831 6.51846407,5.5001164 C7.33948687,5.51024449 7.99977887,6.17880182 7.99992574,7.00012255 C7.98417426,7.84399206 7.28758242,8.5153508 6.44395231,8.49973295 L6.44395231,8.49973295 Z"
        id="more_copy-path"
      />
      <path
        d="M6.44395231,2.99973295 C5.62343982,2.9690612 4.98007615,2.28418875 5.00047181,1.46312144 C5.02086747,0.642054133 5.69744127,-0.0100116918 6.51846407,0.000116401546 C7.33948687,0.0102444949 7.99977887,0.678801825 7.99992574,1.50012255 C7.98417426,2.34399206 7.28758242,3.0153508 6.44395231,2.99973295 L6.44395231,2.99973295 Z"
        id="more_copy-path"
      />
      <path
        d="M1.44395231,8.49973295 C0.623439823,8.4690612 -0.0199238537,7.78418875 0.000471810597,6.96312144 C0.0208674749,6.14205413 0.697441271,5.48998831 1.51846407,5.5001164 C2.33948687,5.51024449 2.99977887,6.17880182 2.99992574,7.00012255 C2.98417426,7.84399206 2.28758242,8.5153508 1.44395231,8.49973295 L1.44395231,8.49973295 Z"
        id="more_copy-path"
      />
      <path
        d="M1.44395231,2.99973295 C0.623439823,2.9690612 -0.0199238537,2.28418875 0.000471810597,1.46312144 C0.0208674749,0.642054133 0.697441271,-0.0100116918 1.51846407,0.000116401546 C2.33948687,0.0102444949 2.99977887,0.678801825 2.99992574,1.50012255 C2.98417426,2.34399206 2.28758242,3.0153508 1.44395231,2.99973295 L1.44395231,2.99973295 Z"
        id="more_copy-path"
      />
    </g>
  </g>
</g>
</svg>`;
const getPluginMenuIcon = (title)=>`<svg
width="18px"
height="18px"
viewBox="0 0 18 18"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
{...props}
>
<title>${title}</title>
<g id="Small-Plus" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
  <g>
    <circle id="Oval-Copy" fill="currentColor" cx="9" cy="9" r="9" />
    <g id="09-Icons-/-Plus-/-S-Copy" transform="translate(3.500000, 3.500000)" fill="#FFFFFF">
      <path
        d="M5.95,2.8 L5.949,5.25 L8.4,5.25 L8.4,5.95 L5.949,5.95 L5.95,8.4 L5.25,8.4 L5.249,5.95 L2.8,5.95 L2.8,5.25 L5.249,5.25 L5.25,2.8 L5.95,2.8 Z"
        id="Small-Plus-Color"
      />
      <path
        d="M6.3,2.45 L6.299,4.9 L8.75,4.9 L8.75,6.3 L6.299,6.3 L6.3,8.75 L4.9,8.75 L4.899,6.299 L2.45,6.3 L2.45,4.9 L4.899,4.899 L4.9,2.45 L6.3,2.45 Z"
        id="Combined-Shape"
        fillRule="nonzero"
      />
    </g>
  </g>
</g>
</svg>`;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/decorations/tableHandles-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>tableHandles_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "579764da";
const injectCss = ()=>{
    var css = `.tOPwd{align-items:center;background:#fff;border-radius:1000px;box-shadow:0 0 6px rgba(0,6,36,.05);box-shadow:0 0 6px 0 rgba(0,6,36,.1),0 2px 4px 0 rgba(0,6,36,.05);box-sizing:border-box;color:#000624;cursor:pointer;display:flex;justify-content:center;outline:1px solid rgba(0,6,36,.302);transition:color .15s ease,background-color .15s ease;z-index:2100}.tOPwd:hover{background:#116dff}.tOPwd:active,.tOPwd:hover{box-shadow:0 0 0 2px rgba(0,6,36,.1),0 0 6px 0 rgba(0,6,36,.1),0 2px 4px 0 rgba(0,6,36,.05);color:#fff;outline-color:#fff;outline-width:1.5px}.tOPwd:active{background:#0f62e6}.tOPwd._-1X3-{background:#116dff;box-shadow:0 0 6px 0 rgba(0,6,36,.1),0 2px 4px 0 rgba(0,6,36,.05);color:#fff;outline:none;transition:color .15s ease,background-color .15s ease}.tOPwd._-1X3-:hover{background:#0f62e6;color:#fff}.tOPwd._-1X3-:active{background:#084ebd;color:#fff}.tOPwd svg{display:block}.xwMKi{height:18px;padding:0 12px;pointer-events:auto;position:absolute;top:0;transform:translate(-50%,-50%);width:42px}.xwMKi._-1X3-{cursor:grab}.xwMKi._-1X3-:active{cursor:grabbing}.w2Bzt{height:42px;left:0;padding:12px 0;pointer-events:auto;position:absolute;transform:translate(-50%,-50%);width:18px}.w2Bzt._-1X3-{cursor:grab}.w2Bzt._-1X3-:active{cursor:grabbing}.QcIve{align-items:center;background:#fff;border:1px solid #dfe5eb;border-radius:50%;box-shadow:0 2px 4px 0 rgba(23,25,28,.1);box-sizing:border-box;color:#000624;cursor:move;display:flex;height:24px;justify-content:center;padding:0;transition:background-color .15s ease,border-color .15s ease;width:24px}.QcIve:hover{background:#f4f5f5;border-color:#c1c7cd}.QcIve:active{background:#e7e9ea;border-color:#a8adb3}.QcIve svg{display:block}.JOEin{align-items:center;background:#fff;border-radius:1000px;box-shadow:0 0 6px 0 rgba(0,6,36,.1),0 2px 4px 0 rgba(0,6,36,.05),0 1px 1px -1.5px rgba(0,6,36,0),1px 4px 4px 0 rgba(0,6,36,0);box-shadow:0 0 6px 0 rgba(0,6,36,.1),0 2px 4px 0 rgba(0,6,36,.05);box-sizing:border-box;color:#000624;cursor:pointer;display:flex;justify-content:center;outline:1px solid rgba(0,6,36,.302);transition:color .15s ease,background-color .15s ease}.JOEin:hover{background:#116dff}.JOEin:active,.JOEin:hover{box-shadow:0 0 0 2px rgba(0,6,36,.1),0 0 6px 0 rgba(0,6,36,.1),0 2px 4px 0 rgba(0,6,36,.05);color:#fff;outline-color:#fff;outline-width:1.5px}.JOEin:active{background:#0f62e6}.JOEin svg{display:block;flex-shrink:0;height:18px;min-height:18px;min-width:18px;width:18px}.fbKFV{height:18px;width:100%}.hiiM6{height:100%;width:18px}`;
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
var tableHandles_default = {
    "tableHandle": "tOPwd",
    "selected": "_-1X3-",
    "columnHandle": "xwMKi tOPwd",
    "rowHandle": "w2Bzt tOPwd",
    "tableSelector": "QcIve",
    "addButton": "JOEin",
    "addRowButton": "fbKFV JOEin",
    "addColButton": "hiiM6 JOEin"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/preserve-scroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "preserveScrollDuring",
    ()=>preserveScrollDuring
]);
function preserveScrollDuring(view, fn) {
    const scrollData = [];
    let element = view.dom;
    while(element){
        const top = element.scrollTop;
        const left = element.scrollLeft;
        if (top !== 0 || left !== 0) {
            scrollData.push({
                element,
                top,
                left
            });
        }
        element = element.parentElement;
    }
    const scrollingElement = document.scrollingElement;
    if (scrollingElement) {
        const top = scrollingElement.scrollTop;
        const left = scrollingElement.scrollLeft;
        if (top !== 0 || left !== 0) {
            scrollData.push({
                element: scrollingElement,
                top,
                left
            });
        }
    }
    fn();
    for (const { element: el, top, left } of scrollData){
        if (el.scrollTop !== top) {
            el.scrollTop = top;
        }
        if (el.scrollLeft !== left) {
            el.scrollLeft = left;
        }
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resize-drag-controller.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearResizeTick",
    ()=>clearResizeTick,
    "createResizeDragController",
    ()=>createResizeDragController,
    "setResizeTick",
    ()=>setResizeTick,
    "triggerResizeTick",
    ()=>triggerResizeTick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$preserve$2d$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/preserve-scroll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$editing$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-editing-plugin.js [app-client] (ecmascript)");
;
;
;
const resizeTicksByView = /* @__PURE__ */ new WeakMap();
const setResizeTick = (view, cb)=>{
    resizeTicksByView.set(view, cb);
};
const clearResizeTick = (view, cb)=>{
    if (resizeTicksByView.get(view) === cb) {
        resizeTicksByView.delete(view);
    }
};
const triggerResizeTick = (view)=>{
    resizeTicksByView.get(view)?.();
};
const createResizeDragController = (editor, handlers)=>{
    let activeDragState = null;
    let capturedElement = null;
    let capturedPointerId = null;
    let globalCleanup = null;
    let pendingDragRaf = 0;
    let pendingDragEvent = null;
    const releasePointer = ()=>{
        if (capturedElement && capturedPointerId !== null) {
            try {
                capturedElement.releasePointerCapture(capturedPointerId);
            } catch  {}
        }
        capturedElement = null;
        capturedPointerId = null;
    };
    const cancelPendingFrame = ()=>{
        if (pendingDragRaf !== 0) {
            cancelAnimationFrame(pendingDragRaf);
            pendingDragRaf = 0;
        }
        pendingDragEvent = null;
    };
    const flushPendingFrame = (view, state)=>{
        if (pendingDragRaf !== 0) {
            cancelAnimationFrame(pendingDragRaf);
            pendingDragRaf = 0;
        }
        const event = pendingDragEvent;
        pendingDragEvent = null;
        if (event) {
            handlers.applyFrame(view, event, state);
        }
    };
    const cleanupDrag = (view)=>{
        releasePointer();
        if (globalCleanup) {
            globalCleanup();
        }
        handlers.setActive(view, false);
        activeDragState = null;
    };
    const finish = (view)=>{
        const state = activeDragState;
        if (!state) {
            return false;
        }
        flushPendingFrame(view, state);
        cleanupDrag(view);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$preserve$2d$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preserveScrollDuring"])(view, ()=>handlers.commit(view, state));
        return true;
    };
    const start = (view, args)=>{
        const { event } = args;
        if (event.button !== 0) {
            return false;
        }
        if (handlers.isOtherActive(view) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$editing$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectingCells"])(view.state) || !editor.isEditable) {
            return false;
        }
        const target = event.target;
        if (target) {
            try {
                target.setPointerCapture(event.pointerId);
                capturedElement = target;
                capturedPointerId = event.pointerId;
            } catch  {}
        }
        const cleanupGlobalListeners = ()=>{
            document.removeEventListener("pointerup", handleGlobalPointerUp, true);
            document.removeEventListener("pointercancel", handleGlobalPointerUp, true);
            globalCleanup = null;
        };
        const handleGlobalPointerUp = (e)=>{
            if (e.pointerId !== event.pointerId) {
                return;
            }
            if (activeDragState) {
                finish(view);
            } else {
                cleanupGlobalListeners();
            }
        };
        document.addEventListener("pointerup", handleGlobalPointerUp, true);
        document.addEventListener("pointercancel", handleGlobalPointerUp, true);
        globalCleanup = cleanupGlobalListeners;
        const state = handlers.begin(view, args);
        if (state === null) {
            releasePointer();
            cleanupGlobalListeners();
            return false;
        }
        activeDragState = state;
        handlers.setActive(view, true);
        event.preventDefault();
        event.stopPropagation();
        return true;
    };
    const guardEvent = (view)=>activeDragState !== null && !handlers.isOtherActive(view) && editor.isEditable;
    const plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
        key: handlers.pluginKey,
        props: {
            handleDOMEvents: {
                pointermove: (view, event)=>{
                    if (!guardEvent(view)) {
                        return false;
                    }
                    pendingDragEvent = event;
                    if (pendingDragRaf === 0) {
                        const drag = activeDragState;
                        pendingDragRaf = requestAnimationFrame(()=>{
                            pendingDragRaf = 0;
                            const e = pendingDragEvent;
                            pendingDragEvent = null;
                            if (e && activeDragState === drag && drag !== null) {
                                handlers.applyFrame(view, e, drag);
                            }
                        });
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    return true;
                },
                pointerup: (view)=>guardEvent(view) ? finish(view) : false,
                pointercancel: (view)=>guardEvent(view) ? finish(view) : false
            }
        },
        view (view) {
            return {
                destroy () {
                    cancelPendingFrame();
                    releasePointer();
                    if (globalCleanup) {
                        globalCleanup();
                    }
                    if (activeDragState) {
                        handlers.setActive(view, false);
                        activeDragState = null;
                    }
                }
            };
        }
    });
    return {
        plugin,
        start
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resizing-plugin-keys.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearResizeHoverActive",
    ()=>clearResizeHoverActive,
    "columnResizingPluginKey",
    ()=>columnResizingPluginKey,
    "isColumnResizingActive",
    ()=>isColumnResizingActive,
    "isRowResizingActive",
    ()=>isRowResizingActive,
    "rowResizingPluginKey",
    ()=>rowResizingPluginKey,
    "setColumnResizeDragActive",
    ()=>setColumnResizeDragActive,
    "setColumnResizeHoverActive",
    ()=>setColumnResizeHoverActive,
    "setRowResizeDragActive",
    ()=>setRowResizeDragActive,
    "setRowResizeHoverActive",
    ()=>setRowResizeHoverActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
;
const columnResizingPluginKey = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("tableColumnResizing");
const rowResizingPluginKey = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("tableRowResizing");
const resizeInteractionStateByView = /* @__PURE__ */ new WeakMap();
const getResizeInteractionState = (view)=>{
    let resizeInteractionState = resizeInteractionStateByView.get(view);
    if (!resizeInteractionState) {
        resizeInteractionState = {
            columnHover: false,
            rowHover: false,
            columnDrag: false,
            rowDrag: false
        };
        resizeInteractionStateByView.set(view, resizeInteractionState);
    }
    return resizeInteractionState;
};
const setColumnResizeHoverActive = (view, active)=>{
    getResizeInteractionState(view).columnHover = active;
};
const setRowResizeHoverActive = (view, active)=>{
    getResizeInteractionState(view).rowHover = active;
};
const setColumnResizeDragActive = (view, active)=>{
    getResizeInteractionState(view).columnDrag = active;
};
const setRowResizeDragActive = (view, active)=>{
    getResizeInteractionState(view).rowDrag = active;
};
const clearResizeHoverActive = (view)=>{
    const state = resizeInteractionStateByView.get(view);
    if (!state) {
        return;
    }
    state.columnHover = false;
    state.rowHover = false;
};
function isColumnResizingActive(view) {
    const state = resizeInteractionStateByView.get(view);
    return !!(state?.columnHover || state?.columnDrag);
}
function isRowResizingActive(view) {
    const state = resizeInteractionStateByView.get(view);
    return !!(state?.rowHover || state?.rowDrag);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/column-resizing.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "columnResizingPlugin",
    ()=>columnResizingPlugin,
    "getStartColumnResizeDrag",
    ()=>getStartColumnResizeDrag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$element$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/get-element-scale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$drag$2d$controller$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resize-drag-controller.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resize-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resizing-plugin-keys.js [app-client] (ecmascript)");
;
;
;
;
;
;
const DEFAULT_MIN_COLUMN_WIDTH = 25;
const COLUMN_WIDTH_EQUALITY_TOLERANCE = 0.5;
const startColumnResizeDragByEditor = /* @__PURE__ */ new WeakMap();
const getStartColumnResizeDrag = (editor)=>startColumnResizeDragByEditor.get(editor);
const columnResizingPlugin = ({ editor, minColumnWidth = DEFAULT_MIN_COLUMN_WIDTH })=>{
    let dragColElements = [];
    let dragTableElement = null;
    let dragSpacing = 0;
    let dragOriginalColWidths = [];
    let dragOriginalTableWidth = "";
    let dragOriginalTableMinWidth = "";
    let latestColumnNewWidth = 0;
    let latestNextColumnNewWidth = void 0;
    const clearDragDomSnapshot = ()=>{
        dragOriginalColWidths = [];
        dragOriginalTableWidth = "";
        dragOriginalTableMinWidth = "";
    };
    const restoreDragDom = (tableElement, colElements)=>{
        colElements.forEach((col, index)=>{
            col.style.width = dragOriginalColWidths[index] ?? "";
        });
        if (tableElement) {
            tableElement.style.width = dragOriginalTableWidth;
            tableElement.style.minWidth = dragOriginalTableMinWidth;
        }
        clearDragDomSnapshot();
    };
    const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$drag$2d$controller$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createResizeDragController"])(editor, {
        pluginKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnResizingPluginKey"],
        setActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColumnResizeDragActive"],
        isOtherActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRowResizingActive"],
        begin (view, { tablePosition, columnInfo, nextColumnInfo, event }) {
            const colgroup = getColgroup(view, tablePosition);
            if (!colgroup) {
                return null;
            }
            const cols = Array.from(colgroup.querySelectorAll("col"));
            const table = view.state.doc.nodeAt(tablePosition - 1);
            if (!table) {
                return null;
            }
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
            const spacing = table.attrs.tableData?.cellSpacing ?? 0;
            const tableElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableElement"])(view, tablePosition);
            if (!tableElement) {
                return null;
            }
            const minTableWidth = getTableMinimumWidth(tableElement);
            dragOriginalColWidths = cols.map((col)=>col.style.width);
            dragOriginalTableWidth = tableElement.style.width;
            dragOriginalTableMinWidth = tableElement.style.minWidth;
            const allColumnWidths = [];
            for(let i = 0; i < cols.length && i < map.width; i++){
                const col = cols[i];
                if (!col.style.width) {
                    col.style.width = `${col.offsetWidth}px`;
                }
                const baseWidth = i > 0 && spacing > 0 ? col.offsetWidth - spacing : col.offsetWidth;
                allColumnWidths.push(baseWidth);
            }
            const paddingAwareMinWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinColumnWidthForPadding"])(table.attrs?.tableData?.cellPadding);
            const effectiveMinWidth = Math.max(minColumnWidth, paddingAwareMinWidth);
            const dragColumnInfo = getDragColumnInfo(cols, columnInfo, effectiveMinWidth);
            const dragNextColumnInfo = nextColumnInfo ? getDragColumnInfo(cols, nextColumnInfo, effectiveMinWidth) : void 0;
            const maxRedistributedColumnWidth = getMaxRedistributedColumnWidth(dragColumnInfo, dragNextColumnInfo, spacing);
            dragColElements = cols;
            dragTableElement = tableElement;
            dragSpacing = spacing;
            latestColumnNewWidth = dragColumnInfo.newWidth;
            latestNextColumnNewWidth = dragNextColumnInfo?.newWidth;
            tableElement.style.width = `${Math.max(getTotalTableWidth({
                allColumnWidths,
                draggedColumnIndex: columnInfo.index,
                nextColumnIndex: nextColumnInfo?.index,
                newColWidth: dragColumnInfo.newWidth,
                newNextWidth: dragNextColumnInfo?.newWidth,
                spacing
            }), minTableWidth)}px`;
            tableElement.style.minWidth = `${minTableWidth}px`;
            return {
                columnInfo: dragColumnInfo,
                initialTotalWidth: dragColumnInfo.newWidth + (dragNextColumnInfo?.newWidth ?? 0),
                initialColumnWidth: dragColumnInfo.newWidth,
                allColumnWidths,
                minTableWidth,
                maxRedistributedColumnWidth,
                nextColumnInfo: dragNextColumnInfo,
                tablePosition,
                scale: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$element$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getElementScale"])(tableElement),
                startX: event.clientX
            };
        },
        applyFrame (view, event, dragState) {
            if (dragColElements.length === 0) {
                return;
            }
            const scaledClientX = event.clientX / dragState.scale.scaleX;
            const scaledStartX = dragState.startX / dragState.scale.scaleX;
            const offset = scaledClientX - scaledStartX;
            const effectiveMinWidth = getEffectiveColumnMinWidth(dragState.columnInfo, dragSpacing);
            const requestedColWidth = Math.max(dragState.initialColumnWidth + offset, effectiveMinWidth, getMinDraggedColumnWidthForTable(dragState, dragSpacing));
            const newColWidth = dragState.maxRedistributedColumnWidth === void 0 ? requestedColWidth : Math.min(requestedColWidth, dragState.maxRedistributedColumnWidth);
            const nextColPotentialWidth = dragState.initialTotalWidth - newColWidth;
            const effectiveNextMinWidth = dragState.nextColumnInfo ? getEffectiveColumnMinWidth(dragState.nextColumnInfo, dragSpacing) : void 0;
            const newNextWidth = dragState.nextColumnInfo && effectiveNextMinWidth ? Math.max(nextColPotentialWidth, effectiveNextMinWidth) : void 0;
            latestColumnNewWidth = newColWidth;
            latestNextColumnNewWidth = newNextWidth;
            const draggedCol = dragColElements[dragState.columnInfo.index];
            if (draggedCol) {
                draggedCol.style.width = `${newColWidth}px`;
            }
            if (dragState.nextColumnInfo && newNextWidth !== void 0) {
                const nextCol = dragColElements[dragState.nextColumnInfo.index];
                if (nextCol) {
                    nextCol.style.width = `${newNextWidth}px`;
                }
            }
            if (dragTableElement) {
                dragTableElement.style.width = `${Math.max(getTotalTableWidth({
                    allColumnWidths: dragState.allColumnWidths,
                    draggedColumnIndex: dragState.columnInfo.index,
                    nextColumnIndex: dragState.nextColumnInfo?.index,
                    newColWidth,
                    newNextWidth,
                    spacing: dragSpacing
                }), dragState.minTableWidth)}px`;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$drag$2d$controller$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerResizeTick"])(view);
            event.preventDefault();
            event.stopPropagation();
        },
        commit (view, dragState) {
            const finalColumnNewWidth = latestColumnNewWidth;
            const finalNextColumnNewWidth = latestNextColumnNewWidth;
            const tableElement = dragTableElement;
            const colElements = dragColElements;
            const table = view.state.doc.nodeAt(dragState.tablePosition - 1);
            dragColElements = [];
            dragTableElement = null;
            if (!table) {
                restoreDragDom(tableElement, colElements);
                return;
            }
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
            const start = dragState.tablePosition;
            const spacing = table.attrs.tableData?.cellSpacing ?? 0;
            const colsWidthRatio = getColumnWidthsForCommit({
                dragState,
                finalColumnNewWidth,
                finalNextColumnNewWidth,
                spacing
            });
            if (areColumnWidthsEqual(colsWidthRatio, dragState.allColumnWidths)) {
                restoreDragDom(tableElement, colElements);
                return;
            }
            const tr = view.state.tr.setMeta("pointer", true);
            const writeColumnWidthAttr = (colIndex)=>{
                const baseWidth = colsWidthRatio[colIndex];
                const width = colIndex > 0 && spacing > 0 ? baseWidth + spacing : baseWidth;
                setColumnWidth({
                    table,
                    map,
                    start,
                    colIndex,
                    width,
                    tr
                });
            };
            writeColumnWidthAttr(dragState.columnInfo.index);
            if (dragState.nextColumnInfo) {
                writeColumnWidthAttr(dragState.nextColumnInfo.index);
            }
            tr.setNodeAttribute(dragState.tablePosition - 1, "dimensions", {
                ...table.attrs.dimensions,
                colsWidthRatio,
                colsMinWidth: colsWidthRatio.map((width)=>Math.min(width, 120))
            });
            view.dispatch(tr);
            clearDragDomSnapshot();
        }
    });
    startColumnResizeDragByEditor.set(editor, controller.start);
    return controller.plugin;
};
const getDragColumnInfo = (cols, { index }, minColumnWidth)=>{
    const currentWidth = cols[index] ? cols[index].offsetWidth : minColumnWidth;
    return {
        index,
        newWidth: currentWidth,
        minWidth: minColumnWidth
    };
};
const getMaxRedistributedColumnWidth = (columnInfo, nextColumnInfo, spacing)=>{
    if (!nextColumnInfo) {
        return void 0;
    }
    const effectiveNextMinWidth = getEffectiveColumnMinWidth(nextColumnInfo, spacing);
    const nextColumnHasRedistributableSpace = nextColumnInfo.newWidth - effectiveNextMinWidth > COLUMN_WIDTH_EQUALITY_TOLERANCE;
    if (!nextColumnHasRedistributableSpace) {
        return void 0;
    }
    return columnInfo.newWidth + (nextColumnInfo.newWidth - effectiveNextMinWidth);
};
const getTableMinimumWidth = (tableElement)=>{
    const container = tableElement.parentElement;
    if (!(container instanceof HTMLElement)) {
        return tableElement.offsetWidth;
    }
    const containerStyles = window.getComputedStyle(container);
    const horizontalPadding = parseFloat(containerStyles.paddingLeft || "0") + parseFloat(containerStyles.paddingRight || "0");
    return Math.max(container.clientWidth - horizontalPadding, 0);
};
const getMinDraggedColumnWidthForTable = (dragState, spacing)=>{
    if (dragState.nextColumnInfo || dragState.minTableWidth <= 0) {
        return 0;
    }
    const otherColumnsWidth = dragState.allColumnWidths.reduce((total, width, index)=>{
        if (index === dragState.columnInfo.index) {
            return total;
        }
        return total + getRenderedColumnWidth(width, index, spacing);
    }, 0);
    return Math.max(dragState.minTableWidth - otherColumnsWidth, 0);
};
const getEffectiveColumnMinWidth = (columnInfo, spacing)=>columnInfo.index > 0 && spacing > 0 ? columnInfo.minWidth + spacing : columnInfo.minWidth;
const areColumnWidthsEqual = (widths, nextWidths)=>{
    if (widths.length !== nextWidths.length) {
        return false;
    }
    return widths.every((width, index)=>Math.abs(width - nextWidths[index]) < COLUMN_WIDTH_EQUALITY_TOLERANCE);
};
function getColgroup(view, tablePosition) {
    const tableElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableElement"])(view, tablePosition);
    return tableElement ? tableElement.querySelector("colgroup") : null;
}
const getTotalTableWidth = ({ allColumnWidths, draggedColumnIndex, nextColumnIndex, newColWidth, newNextWidth, spacing })=>{
    let totalWidth = 0;
    for(let index = 0; index < allColumnWidths.length; index++){
        if (index === draggedColumnIndex) {
            totalWidth += newColWidth;
        } else if (index === nextColumnIndex && newNextWidth !== void 0) {
            totalWidth += newNextWidth;
        } else {
            const baseWidth = allColumnWidths[index];
            totalWidth += getRenderedColumnWidth(baseWidth, index, spacing);
        }
    }
    return totalWidth;
};
const getRenderedColumnWidth = (baseWidth, index, spacing)=>index > 0 && spacing > 0 ? baseWidth + spacing : baseWidth;
const getColumnWidthsForCommit = ({ dragState, finalColumnNewWidth, finalNextColumnNewWidth, spacing })=>{
    return dragState.allColumnWidths.map((baseWidth, colIndex)=>{
        if (colIndex === dragState.columnInfo.index) {
            return colIndex > 0 && spacing > 0 ? finalColumnNewWidth - spacing : finalColumnNewWidth;
        }
        if (dragState.nextColumnInfo && colIndex === dragState.nextColumnInfo.index && finalNextColumnNewWidth !== void 0) {
            return colIndex > 0 && spacing > 0 ? finalNextColumnNewWidth - spacing : finalNextColumnNewWidth;
        }
        return baseWidth || 100;
    });
};
function setColumnWidth({ table, map, start, colIndex, width, tr }) {
    for(let row = 0; row < map.height; row++){
        const pos = map.map[row * map.width + colIndex];
        const placement = map.findCell(pos);
        if (placement.row < row) {
            continue;
        }
        const cell = table.nodeAt(pos);
        if (!cell) {
            continue;
        }
        const attrs = cell.attrs;
        const colwidth = Array.isArray(attrs.colwidth) ? attrs.colwidth.slice() : Array(placement.colspan).fill(0);
        while(colwidth.length < placement.colspan){
            colwidth.push(0);
        }
        const colIndexInCell = colIndex - placement.col;
        if (colIndexInCell >= 0 && colIndexInCell < placement.colspan) {
            colwidth[colIndexInCell] = width;
            tr.setNodeAttribute(start + pos, "colwidth", colwidth);
        }
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/row-resizing.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStartRowResizeDrag",
    ()=>getStartRowResizeDrag,
    "rowResizingPlugin",
    ()=>rowResizingPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$element$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/get-element-scale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$drag$2d$controller$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resize-drag-controller.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resizing-plugin-keys.js [app-client] (ecmascript)");
;
;
;
const startRowResizeDragByEditor = /* @__PURE__ */ new WeakMap();
const getStartRowResizeDrag = (editor)=>startRowResizeDragByEditor.get(editor);
const rowResizingPlugin = ({ editor })=>{
    let dragRowElement = null;
    let dragNextRowElement = null;
    let latestRowNewHeight = 0;
    let latestNextRowNewHeight = void 0;
    const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$drag$2d$controller$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createResizeDragController"])(editor, {
        pluginKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rowResizingPluginKey"],
        setActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRowResizeDragActive"],
        isOtherActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isColumnResizingActive"],
        begin (view, { tablePosition, rowInfo, nextRowInfo, event }) {
            const dragRowInfo = getDragRowInfo(view, rowInfo);
            const dragNextRowInfo = nextRowInfo ? getDragRowInfo(view, nextRowInfo) : void 0;
            const rowDom = view.nodeDOM(dragRowInfo.position);
            if (!rowDom) {
                return null;
            }
            const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$element$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getElementScale"])(rowDom);
            dragRowElement = rowDom;
            dragNextRowElement = dragNextRowInfo ? view.nodeDOM(dragNextRowInfo.position) : null;
            latestRowNewHeight = dragRowInfo.newHeight;
            latestNextRowNewHeight = dragNextRowInfo?.newHeight;
            return {
                rowInfo: dragRowInfo,
                initialTotalHeight: dragRowInfo.newHeight + (dragNextRowInfo?.newHeight ?? 0),
                initialRowHeight: dragRowInfo.newHeight,
                nextRowInfo: dragNextRowInfo,
                tablePosition,
                startY: event.pageY / scale.scaleY,
                scale
            };
        },
        applyFrame (view, event, dragState) {
            const scaledPageY = event.pageY / dragState.scale.scaleY;
            const deltaY = scaledPageY - dragState.startY;
            const newRowHeight = Math.max(dragState.initialRowHeight + deltaY, dragState.rowInfo.minHeight);
            const nextRowPotentialHeight = dragState.initialTotalHeight - newRowHeight;
            const newNextRowHeight = dragState.nextRowInfo ? Math.max(nextRowPotentialHeight, dragState.nextRowInfo.minHeight) : void 0;
            latestRowNewHeight = newRowHeight;
            latestNextRowNewHeight = newNextRowHeight;
            if (dragRowElement) {
                dragRowElement.style.height = `${newRowHeight}px`;
            }
            if (dragNextRowElement && newNextRowHeight !== void 0) {
                dragNextRowElement.style.height = `${newNextRowHeight}px`;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$drag$2d$controller$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerResizeTick"])(view);
            event.preventDefault();
            event.stopPropagation();
        },
        commit (view, dragState) {
            const finalRowHeight = latestRowNewHeight;
            const finalNextRowHeight = latestNextRowNewHeight;
            dragRowElement = null;
            dragNextRowElement = null;
            const tr = view.state.tr.setMeta("pointer", true);
            tr.setNodeAttribute(dragState.rowInfo.position, "height", finalRowHeight);
            if (dragState.nextRowInfo && finalNextRowHeight !== void 0) {
                tr.setNodeAttribute(dragState.nextRowInfo.position, "height", finalNextRowHeight);
            }
            view.dispatch(tr);
        }
    });
    startRowResizeDragByEditor.set(editor, controller.start);
    return controller.plugin;
};
const getDragRowInfo = (view, { position, index })=>{
    const rowElement = view.nodeDOM(position);
    const minHeight = rowElement ? calculateMinRowHeight(rowElement) : 0;
    return {
        position,
        index,
        newHeight: Math.max(rowElement?.offsetHeight ?? 0, minHeight),
        minHeight
    };
};
function calculateMinRowHeight(rowElement) {
    const originalHeight = rowElement.style.height;
    rowElement.style.height = "0px";
    const minHeight = rowElement.offsetHeight;
    rowElement.style.height = originalHeight;
    return Math.max(minHeight, 0);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resize-hit-zone-overlay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeHitZoneOverlay",
    ()=>ResizeHitZoneOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/statics/styles/resizer-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$column$2d$resizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/column-resizing.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$drag$2d$controller$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resize-drag-controller.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resizing-plugin-keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$row$2d$resizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/row-resizing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$editing$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-editing-plugin.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const removeResizeHoverClasses = (zone)=>{
    zone.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].peerHovered, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].active);
};
const forEachUnblockedRun = (blocked, visitRun)=>{
    let runStart = -1;
    for(let index = 0; index <= blocked.length; index++){
        const isBlocked = index === blocked.length ? true : blocked[index];
        if (isBlocked) {
            if (runStart !== -1) {
                visitRun({
                    start: runStart,
                    end: index - 1,
                    blockedBefore: runStart > 0 && blocked[runStart - 1],
                    blockedAfter: index < blocked.length
                });
                runStart = -1;
            }
        } else if (runStart === -1) {
            runStart = index;
        }
    }
};
const getColumnResizeSegments = (geometry, map)=>{
    const { totalCols, totalRows, columnLefts, columnWidths, rowTops, rowBottoms, cellSpacing } = geometry;
    const segments = [];
    const blockedRows = new Array(totalRows);
    for(let colIdx = 0; colIdx < totalCols; colIdx++){
        const isLastCol = colIdx === totalCols - 1;
        for(let rowIdx = 0; rowIdx < totalRows; rowIdx++){
            blockedRows[rowIdx] = !isLastCol && map.map[rowIdx * totalCols + colIdx] === map.map[rowIdx * totalCols + colIdx + 1];
        }
        forEachUnblockedRun(blockedRows, ({ start, end, blockedBefore, blockedAfter })=>{
            const top = blockedBefore ? rowTops[start] + cellSpacing / 2 : rowTops[start];
            const bottom = blockedAfter ? rowBottoms[end] + cellSpacing / 2 : rowBottoms[end];
            const rightEdgeX = columnLefts[colIdx] + columnWidths[colIdx];
            const center = isLastCol ? rightEdgeX : rightEdgeX + cellSpacing / 2;
            segments.push({
                colIdx,
                top,
                bottom,
                center
            });
        });
    }
    return segments;
};
const getRowResizeSegments = (geometry, map)=>{
    const { totalCols, totalRows, columnLefts, columnWidths, rowBottoms, cellSpacing } = geometry;
    const segments = [];
    const blockedCols = new Array(totalCols);
    for(let rowIdx = 0; rowIdx < totalRows; rowIdx++){
        const isLastRow = rowIdx === totalRows - 1;
        for(let colIdx = 0; colIdx < totalCols; colIdx++){
            blockedCols[colIdx] = !isLastRow && map.map[rowIdx * totalCols + colIdx] === map.map[(rowIdx + 1) * totalCols + colIdx];
        }
        forEachUnblockedRun(blockedCols, ({ start, end, blockedBefore, blockedAfter })=>{
            const left = blockedBefore ? columnLefts[start] + cellSpacing / 2 : columnLefts[start];
            const right = blockedAfter ? columnLefts[end] + columnWidths[end] + cellSpacing / 2 : columnLefts[end] + columnWidths[end];
            const bottomEdgeY = rowBottoms[rowIdx];
            const center = isLastRow ? bottomEdgeY : bottomEdgeY + cellSpacing / 2;
            segments.push({
                rowIdx,
                left,
                right,
                center
            });
        });
    }
    return segments;
};
const wireBoundaryPeerHover = (zone, { findBoundaryPeers, isAxisHovered, setHoverActive, clearOtherAxisHover })=>{
    zone.addEventListener("pointerenter", ()=>{
        setHoverActive(true);
        clearOtherAxisHover();
        findBoundaryPeers(zone).forEach((s)=>s.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].peerHovered));
    });
    zone.addEventListener("pointerleave", ()=>{
        requestAnimationFrame(()=>{
            const peers = findBoundaryPeers(zone);
            if (peers.some((s)=>s.matches(":hover"))) {
                return;
            }
            peers.forEach((s)=>s.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].peerHovered));
            if (!isAxisHovered()) {
                setHoverActive(false);
            }
        });
    });
};
const markBoundaryActiveUntilPointerRelease = (view, pointerId, zone, findBoundaryPeers, refreshOverlay)=>{
    const peers = findBoundaryPeers(zone);
    peers.forEach((peer)=>peer.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].active));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$drag$2d$controller$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setResizeTick"])(view, refreshOverlay);
    const clearActiveBoundary = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearResizeHoverActive"])(view);
        peers.forEach(removeResizeHoverClasses);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$drag$2d$controller$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearResizeTick"])(view, refreshOverlay);
        document.removeEventListener("pointerup", clear, true);
        document.removeEventListener("pointercancel", clear, true);
    };
    const clear = (event)=>{
        if (event.pointerId === pointerId) {
            clearActiveBoundary();
        }
    };
    document.addEventListener("pointerup", clear, true);
    document.addEventListener("pointercancel", clear, true);
    return clearActiveBoundary;
};
const resizeHitZoneArray = (zones, target, createZone, removeZone)=>{
    while(zones.length > target){
        const zone = zones.pop();
        if (zone) {
            removeZone(zone);
            zone.remove();
        }
    }
    while(zones.length < target){
        zones.push(createZone());
    }
};
class ColumnResizeHitZones {
    constructor({ editor, getPos, dom, getNode, hitZoneSize, clearOtherAxisHover, refreshOverlay }){
        this.zones = [];
        this.findBoundaryPeers = (zone)=>{
            const overlay = zone.parentElement;
            const colIdx = zone.dataset.colIdx;
            if (!overlay || colIdx === void 0) {
                return [
                    zone
                ];
            }
            return Array.from(overlay.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].columnResizeHitZone}[data-col-idx="${colIdx}"]`));
        };
        this.isAxisHovered = ()=>{
            return this.zones.some((zone)=>zone.matches(":hover"));
        };
        this.setHoverActive = (active)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColumnResizeHoverActive"])(this.editor.view, active);
        };
        this.handlePointerDown = (event)=>{
            if (event.button !== 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$editing$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectingCells"])(this.editor.state) || !this.editor.isEditable) {
                return;
            }
            const target = event.currentTarget;
            const colIdx = Number(target.dataset.colIdx);
            if (!Number.isFinite(colIdx)) {
                return;
            }
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(this.getNode());
            const isLast = colIdx === map.width - 1;
            const tablePosition = this.getPos() + 1;
            this.setHoverActive(false);
            const clearActiveBoundary = markBoundaryActiveUntilPointerRelease(this.editor.view, event.pointerId, target, this.findBoundaryPeers, this.refreshOverlay);
            const startColumnResizeDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$column$2d$resizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStartColumnResizeDrag"])(this.editor);
            const didStart = startColumnResizeDrag?.(this.editor.view, {
                tablePosition,
                columnInfo: {
                    index: colIdx
                },
                nextColumnInfo: isLast ? void 0 : {
                    index: colIdx + 1
                },
                event
            });
            if (!didStart) {
                clearActiveBoundary();
                return;
            }
        };
        this.editor = editor;
        this.getPos = getPos;
        this.dom = dom;
        this.getNode = getNode;
        this.hitZoneSize = hitZoneSize;
        this.clearOtherAxisHover = clearOtherAxisHover;
        this.refreshOverlay = refreshOverlay;
    }
    sync(geometry, map) {
        const segments = getColumnResizeSegments(geometry, map);
        resizeHitZoneArray(this.zones, segments.length, ()=>this.createZone(), ()=>this.setHoverActive(false));
        for(let index = 0; index < segments.length; index++){
            this.positionZone(this.zones[index], segments[index], geometry);
        }
    }
    clearHover() {
        this.zones.forEach(removeResizeHoverClasses);
        this.setHoverActive(false);
    }
    createZone() {
        const zone = document.createElement("div");
        zone.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].columnResizeHitZone;
        this.dom.appendChild(zone);
        zone.addEventListener("pointerdown", this.handlePointerDown);
        wireBoundaryPeerHover(zone, {
            findBoundaryPeers: this.findBoundaryPeers,
            isAxisHovered: this.isAxisHovered,
            setHoverActive: this.setHoverActive,
            clearOtherAxisHover: this.clearOtherAxisHover
        });
        return zone;
    }
    positionZone(zone, segment, geometry) {
        const left = Math.min(Math.max(segment.center - this.hitZoneSize / 2, 0), Math.max(geometry.tableWidth - this.hitZoneSize, 0));
        zone.style.left = `${left}px`;
        zone.style.top = `${segment.top}px`;
        zone.style.width = `${this.hitZoneSize}px`;
        zone.style.height = `${segment.bottom - segment.top}px`;
        zone.dataset.colIdx = String(segment.colIdx);
        zone.dataset.tableEdge = segment.colIdx === geometry.totalCols - 1 ? "right" : "";
    }
}
class RowResizeHitZones {
    constructor({ editor, getPos, dom, getNode, hitZoneSize, clearOtherAxisHover, refreshOverlay }){
        this.zones = [];
        this.findBoundaryPeers = (zone)=>{
            const overlay = zone.parentElement;
            const rowIdx = zone.dataset.rowIdx;
            if (!overlay || rowIdx === void 0) {
                return [
                    zone
                ];
            }
            return Array.from(overlay.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rowResizeHitZone}[data-row-idx="${rowIdx}"]`));
        };
        this.isAxisHovered = ()=>{
            return this.zones.some((zone)=>zone.matches(":hover"));
        };
        this.setHoverActive = (active)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRowResizeHoverActive"])(this.editor.view, active);
        };
        this.handlePointerDown = (event)=>{
            if (event.button !== 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$editing$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectingCells"])(this.editor.state) || !this.editor.isEditable) {
                return;
            }
            const target = event.currentTarget;
            const rowIdx = Number(target.dataset.rowIdx);
            if (!Number.isFinite(rowIdx)) {
                return;
            }
            const node = this.getNode();
            const tablePosition = this.getPos() + 1;
            let rowPos;
            let nextRowPos;
            let currentRowIndex = 0;
            node.forEach((_node, offset)=>{
                if (currentRowIndex === rowIdx) {
                    rowPos = tablePosition + offset;
                }
                if (currentRowIndex === rowIdx + 1) {
                    nextRowPos = tablePosition + offset;
                }
                currentRowIndex++;
            });
            if (rowPos === void 0) {
                return;
            }
            this.setHoverActive(false);
            const clearActiveBoundary = markBoundaryActiveUntilPointerRelease(this.editor.view, event.pointerId, target, this.findBoundaryPeers, this.refreshOverlay);
            const startRowResizeDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$row$2d$resizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStartRowResizeDrag"])(this.editor);
            const didStart = startRowResizeDrag?.(this.editor.view, {
                tablePosition,
                rowInfo: {
                    position: rowPos,
                    index: rowIdx
                },
                nextRowInfo: nextRowPos !== void 0 ? {
                    position: nextRowPos,
                    index: rowIdx + 1
                } : void 0,
                event
            });
            if (!didStart) {
                clearActiveBoundary();
                return;
            }
        };
        this.editor = editor;
        this.getPos = getPos;
        this.dom = dom;
        this.getNode = getNode;
        this.hitZoneSize = hitZoneSize;
        this.clearOtherAxisHover = clearOtherAxisHover;
        this.refreshOverlay = refreshOverlay;
    }
    sync(geometry, map) {
        const segments = getRowResizeSegments(geometry, map);
        resizeHitZoneArray(this.zones, segments.length, ()=>this.createZone(), ()=>this.setHoverActive(false));
        for(let index = 0; index < segments.length; index++){
            this.positionZone(this.zones[index], segments[index], geometry);
        }
    }
    clearHover() {
        this.zones.forEach(removeResizeHoverClasses);
        this.setHoverActive(false);
    }
    createZone() {
        const zone = document.createElement("div");
        zone.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rowResizeHitZone;
        this.dom.appendChild(zone);
        zone.addEventListener("pointerdown", this.handlePointerDown);
        wireBoundaryPeerHover(zone, {
            findBoundaryPeers: this.findBoundaryPeers,
            isAxisHovered: this.isAxisHovered,
            setHoverActive: this.setHoverActive,
            clearOtherAxisHover: this.clearOtherAxisHover
        });
        return zone;
    }
    positionZone(zone, segment, geometry) {
        const top = Math.min(Math.max(segment.center - this.hitZoneSize / 2, 0), Math.max(geometry.tableHeight - this.hitZoneSize, 0));
        zone.style.top = `${top}px`;
        zone.style.left = `${segment.left}px`;
        zone.style.width = `${segment.right - segment.left}px`;
        zone.style.height = `${this.hitZoneSize}px`;
        zone.dataset.rowIdx = String(segment.rowIdx);
        zone.dataset.tableEdge = segment.rowIdx === geometry.totalRows - 1 ? "bottom" : "";
    }
}
class ResizeHitZoneOverlay {
    constructor({ editor, node, getPos, columnHitZoneWidth, rowHitZoneHeight, viewport, table, colgroup, contentDOM, onResizeTick }){
        this.pendingUpdateRaf = 0;
        this.refreshOverlay = ()=>{
            this.update();
            this.onResizeTick();
        };
        this.editor = editor;
        this.node = node;
        this.table = table;
        this.colgroup = colgroup;
        this.contentDOM = contentDOM;
        this.onResizeTick = onResizeTick;
        this.dom = document.createElement("div");
        this.dom.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].resizeOverlay;
        this.dom.setAttribute("contenteditable", "false");
        viewport.appendChild(this.dom);
        this.columnHitZones = new ColumnResizeHitZones({
            editor,
            getPos,
            dom: this.dom,
            getNode: ()=>this.node,
            hitZoneSize: columnHitZoneWidth,
            clearOtherAxisHover: ()=>this.rowHitZones.clearHover(),
            refreshOverlay: this.refreshOverlay
        });
        this.rowHitZones = new RowResizeHitZones({
            editor,
            getPos,
            dom: this.dom,
            getNode: ()=>this.node,
            hitZoneSize: rowHitZoneHeight,
            clearOtherAxisHover: ()=>this.columnHitZones.clearHover(),
            refreshOverlay: this.refreshOverlay
        });
    }
    setNode(node) {
        this.node = node;
    }
    scheduleUpdate() {
        if (this.pendingUpdateRaf !== 0) {
            return;
        }
        this.pendingUpdateRaf = requestAnimationFrame(()=>{
            this.pendingUpdateRaf = 0;
            this.update();
        });
    }
    destroy() {
        if (this.pendingUpdateRaf !== 0) {
            cancelAnimationFrame(this.pendingUpdateRaf);
            this.pendingUpdateRaf = 0;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$drag$2d$controller$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearResizeTick"])(this.editor.view, this.refreshOverlay);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearResizeHoverActive"])(this.editor.view);
    }
    update() {
        if (!this.editor.isEditable) {
            this.hide();
            return;
        }
        const firstRow = this.contentDOM.firstElementChild;
        const rows = this.contentDOM.querySelectorAll(":scope > tr");
        if (!firstRow || !rows.length) {
            this.hide();
            return;
        }
        const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(this.node);
        if (map.width === 0 || map.height === 0) {
            this.hide();
            return;
        }
        const cellSpacing = this.node.attrs.tableData?.cellSpacing ?? 0;
        const tableWidth = this.table.offsetWidth;
        const tableHeight = this.table.offsetHeight;
        const geometry = this.getTableGeometry(rows, map, cellSpacing, tableWidth, tableHeight);
        if (!geometry) {
            this.hide();
            return;
        }
        this.dom.style.display = "block";
        this.dom.style.left = `${this.table.offsetLeft}px`;
        this.dom.style.top = `${this.table.offsetTop}px`;
        this.dom.style.width = `${tableWidth}px`;
        this.dom.style.height = `${tableHeight}px`;
        this.columnHitZones.sync(geometry, map);
        this.rowHitZones.sync(geometry, map);
    }
    hide() {
        this.dom.style.display = "none";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearResizeHoverActive"])(this.editor.view);
    }
    getTableGeometry(rows, map, cellSpacing, tableWidth, tableHeight) {
        const totalCols = map.width;
        const totalRows = map.height;
        const columnGeometry = this.getColumnGeometry(totalCols);
        if (!columnGeometry) {
            return null;
        }
        const rowTops = new Array(totalRows);
        const rowBottoms = new Array(totalRows);
        for(let r = 0; r < totalRows; r++){
            const row = rows[r];
            if (!row) {
                return null;
            }
            rowTops[r] = row.offsetTop;
            rowBottoms[r] = row.offsetTop + row.offsetHeight;
        }
        return {
            totalCols,
            totalRows,
            columnLefts: columnGeometry.lefts,
            columnWidths: columnGeometry.widths,
            rowTops,
            rowBottoms,
            tableWidth,
            tableHeight,
            cellSpacing
        };
    }
    getColumnGeometry(totalCols) {
        const cols = Array.from(this.colgroup.children).slice(0, totalCols);
        if (cols.length < totalCols) {
            return null;
        }
        const lefts = new Array(totalCols);
        const widths = new Array(totalCols);
        let left = 0;
        for(let i = 0; i < totalCols; i++){
            const width = cols[i].offsetWidth;
            if (!Number.isFinite(width)) {
                return null;
            }
            lefts[i] = left;
            widths[i] = width;
            left += width;
        }
        return {
            lefts,
            widths
        };
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-view.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableView",
    ()=>TableView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$drag$2d$handle$2d$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/drag-handle-icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$statics$2f$styles$2f$general$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/editor-common/statics/styles/general-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$svgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/decorations/svgs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$tableHandles$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/decorations/tableHandles-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/find-table.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/is-selection-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$hit$2d$zone$2d$overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resize-hit-zone-overlay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resize-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-scss.js [app-client] (ecmascript)");
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
class TableView {
    constructor(node, editor, getPos, { columnResizeHandleWidth, rowResizeHandleHeight }, isMobile = false){
        this.handlesVisible = false;
        this.resizeObserver = null;
        this.selectionUpdateHandler = null;
        this.editor = editor;
        this.node = node;
        this.getPos = getPos;
        this.isMobile = isMobile;
        this.dom = document.createElement("div");
        this.dom.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tableContainer;
        this.dom.dataset.tableContainer = "true";
        if (typeof node.attrs.id === "string") {
            this.dom.dataset.tableContainerId = node.attrs.id;
        }
        this.viewport = document.createElement("div");
        this.viewport.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tableViewport;
        this.dom.appendChild(this.viewport);
        this.table = document.createElement("table");
        this.table.dataset.hook = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOT"];
        this.viewport.appendChild(this.table);
        this.updateTableSpacing(node);
        this.updateTablePadding(node);
        this.updateBorderEdgePadding(node);
        this.updateAriaDescription(node);
        this.colgroup = document.createElement("colgroup");
        this.table.appendChild(this.colgroup);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateColumns"])({
            node,
            colgroup: this.colgroup,
            table: this.table,
            cellMinWidth: this.getMinColumnWidth(node),
            commands: this.editor.commands,
            shouldUpdateState: false
        });
        this.contentDOM = document.createElement("tbody");
        this.table.appendChild(this.contentDOM);
        this.addColBar = this.createAddColBar();
        this.dom.appendChild(this.addColBar);
        this.addRowBar = this.createAddRowBar();
        this.dom.appendChild(this.addRowBar);
        this.tableSelectorBar = this.createTableSelectorBar();
        this.dom.appendChild(this.tableSelectorBar);
        if (!this.isMobile) {
            this.columnHandle = this.createColumnHandle();
            this.rowHandle = this.createRowHandle();
            this.viewport.appendChild(this.columnHandle);
            this.viewport.appendChild(this.rowHandle);
        } else {
            this.columnHandle = null;
            this.rowHandle = null;
        }
        this.resizeHitZoneOverlay = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$hit$2d$zone$2d$overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeHitZoneOverlay"]({
            editor: this.editor,
            node: this.node,
            getPos: this.getPos,
            columnHitZoneWidth: columnResizeHandleWidth,
            rowHitZoneHeight: rowResizeHandleHeight,
            viewport: this.viewport,
            table: this.table,
            colgroup: this.colgroup,
            contentDOM: this.contentDOM,
            onResizeTick: ()=>this.updateHandlesDuringResize()
        });
        this.hideHandles();
        this.resizeHitZoneOverlay.scheduleUpdate();
        this.viewport.addEventListener("scroll", ()=>{
            if (this.handlesVisible) {
                requestAnimationFrame(()=>this.updateSelectionHandles());
            }
        });
        this.selectionUpdateHandler = ()=>{
            const { state } = this.editor;
            const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(state.selection);
            const isEditorFocused = this.editor.view.hasFocus();
            const hasRicosCellSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(state.selection);
            const isThisTableFocused = table && this.editor.view.nodeDOM(table.pos) === this.dom && (isEditorFocused || hasRicosCellSelection);
            if (isThisTableFocused && !this.handlesVisible) {
                this.showHandles();
                requestAnimationFrame(()=>{
                    this.updateSelectionHandles();
                    this.updateAddBarPositions();
                });
            } else if (!isThisTableFocused && this.handlesVisible) {
                this.hideHandles();
            } else if (this.handlesVisible) {
                requestAnimationFrame(()=>this.updateSelectionHandles());
            }
        };
        this.editor.on("selectionUpdate", this.selectionUpdateHandler);
        this.resizeObserver = new ResizeObserver(()=>{
            if (this.handlesVisible) {
                requestAnimationFrame(()=>this.updateAddBarPositions());
            }
            this.resizeHitZoneOverlay.scheduleUpdate();
        });
        this.resizeObserver.observe(this.table);
    }
    updateAddBarPositions() {
        const containerStyles = getComputedStyle(this.dom);
        const gap = this.getCssNumber(containerStyles, "--table-handle-gap", 12);
        const selectionHandleSpace = this.getCssNumber(containerStyles, "--table-selection-handle-space", 10);
        const viewportLeft = this.viewport.offsetLeft;
        const viewportTop = this.viewport.offsetTop;
        const viewportWidth = this.viewport.offsetWidth;
        const viewportHeight = this.viewport.offsetHeight;
        const tableTop = viewportTop + this.table.offsetTop;
        const tableHeight = this.table.offsetHeight;
        const addRowTop = viewportTop + viewportHeight + gap;
        this.addRowBar.style.top = `${addRowTop}px`;
        this.addRowBar.style.left = `${viewportLeft + selectionHandleSpace}px`;
        this.addRowBar.style.width = `${viewportWidth - selectionHandleSpace}px`;
        this.addColBar.style.height = `${tableHeight}px`;
        this.addColBar.style.top = `${tableTop}px`;
        const addRowButtonHeight = this.getCssNumber(containerStyles, "--table-add-button-size", 18);
        const selectorTop = addRowTop + addRowButtonHeight + gap;
        const addRowBarWidth = viewportWidth - selectionHandleSpace;
        const addRowBarCenterX = viewportLeft + selectionHandleSpace + addRowBarWidth / 2;
        this.tableSelectorBar.style.top = `${selectorTop}px`;
        this.tableSelectorBar.style.left = `${addRowBarCenterX}px`;
        this.tableSelectorBar.style.transform = "translateX(-50%)";
    }
    updateHandlesDuringResize() {
        if (!this.handlesVisible) {
            return;
        }
        this.updateSelectionHandles();
        this.updateAddBarPositions();
    }
    getCssNumber(styles2, propertyName, fallbackValue) {
        const value = styles2.getPropertyValue(propertyName).trim();
        const parsed = Number.parseFloat(value);
        return Number.isFinite(parsed) ? parsed : fallbackValue;
    }
    createAddColBar() {
        const bar = document.createElement("div");
        bar.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].addColBar;
        const button = document.createElement("div");
        button.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$tableHandles$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].addColButton;
        button.dataset.hook = "addCol";
        button.innerHTML = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$svgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addSvg"];
        button.addEventListener("mousedown", (e)=>{
            e.stopPropagation();
            e.preventDefault();
            this.editor.chain().addColumnAtIndex(this.getTableWidth()).run();
        });
        bar.appendChild(button);
        return bar;
    }
    createAddRowBar() {
        const bar = document.createElement("div");
        bar.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].addRowBar;
        const button = document.createElement("div");
        button.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$tableHandles$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].addRowButton;
        button.dataset.hook = "addRow";
        button.innerHTML = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$svgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addSvg"];
        button.addEventListener("mousedown", (e)=>{
            e.stopPropagation();
            e.preventDefault();
            this.editor.chain().addRowAtIndex(this.getTableHeight()).run();
        });
        bar.appendChild(button);
        return bar;
    }
    createTableSelectorBar() {
        const bar = document.createElement("div");
        bar.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tableSelectorBar;
        bar.setAttribute("contenteditable", "false");
        const selector = document.createElement("div");
        selector.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$tableHandles$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tableSelector;
        selector.dataset.hook = "table-selector";
        selector.dataset.tableHandle = "true";
        selector.setAttribute("data-drag-handle", "");
        selector.innerHTML = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$drag$2d$handle$2d$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMoveIcon"])();
        selector.draggable = true;
        selector.addEventListener("click", (e)=>{
            e.stopPropagation();
            this.editor.commands.selectWholeTable();
        });
        selector.addEventListener("dragstart", (event)=>{
            const dragHandle = event.target?.closest("[data-drag-handle]");
            if (!dragHandle) {
                return;
            }
            const selection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"].create(this.editor.view.state.doc, this.getPos());
            const transaction = this.editor.view.state.tr.setSelection(selection);
            this.editor.view.dispatch(transaction);
            const domBox = this.table.getBoundingClientRect();
            const handleBox = dragHandle.getBoundingClientRect();
            const x = Math.min(Math.max(0, handleBox.x - domBox.x + event.offsetX), domBox.width - 1);
            const y = Math.min(Math.max(0, handleBox.y - domBox.y + event.offsetY), domBox.height - 1);
            this.table.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$statics$2f$styles$2f$general$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dragImageView);
            event.dataTransfer?.setDragImage(this.table, x, y);
            setTimeout(()=>{
                this.table.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$statics$2f$styles$2f$general$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dragImageView);
            }, 0);
        });
        bar.appendChild(selector);
        return bar;
    }
    createColumnHandle() {
        const handle = document.createElement("div");
        handle.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$tableHandles$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].columnHandle;
        handle.dataset.hook = "column-handle";
        handle.dataset.tableTopHandle = "true";
        handle.innerHTML = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$drag$2d$handle$2d$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHorizontalHandleIcon"])();
        handle.style.display = "none";
        handle.addEventListener("mousedown", (e)=>{
            e.preventDefault();
            if (handle.dataset.selected === "true" || handle.dataset.dragging === "true") {
                return;
            }
            e.stopPropagation();
            const state = this.editor.state;
            const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(state.selection);
            if (!table) {
                return;
            }
            try {
                const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
                this.editor.commands.selectColumns(rect.left, rect.right - 1, table.start);
            } catch  {}
        });
        return handle;
    }
    createRowHandle() {
        const handle = document.createElement("div");
        handle.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$tableHandles$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rowHandle;
        handle.dataset.hook = "row-handle";
        handle.innerHTML = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$drag$2d$handle$2d$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVerticalHandleIcon"])();
        handle.style.display = "none";
        handle.addEventListener("mousedown", (e)=>{
            e.preventDefault();
            if (handle.dataset.selected === "true" || handle.dataset.dragging === "true") {
                return;
            }
            e.stopPropagation();
            const state = this.editor.state;
            const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(state.selection);
            if (!table) {
                return;
            }
            try {
                const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
                this.editor.commands.selectRows(rect.top, rect.bottom - 1, table.start);
            } catch  {}
        });
        return handle;
    }
    getTableWidth() {
        const firstRow = this.node.firstChild;
        if (!firstRow) {
            return 0;
        }
        let width = 0;
        firstRow.forEach((cell)=>{
            width += cell.attrs.colspan || 1;
        });
        return width;
    }
    getTableHeight() {
        return this.node.childCount;
    }
    hideHandles() {
        if (!this.handlesVisible) {
            return;
        }
        this.handlesVisible = false;
        this.dom.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tableContainerFocused);
        if (this.columnHandle) {
            this.columnHandle.style.display = "none";
            this.columnHandle.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$tableHandles$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].selected);
        }
        if (this.rowHandle) {
            this.rowHandle.style.display = "none";
            this.rowHandle.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$tableHandles$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].selected);
        }
    }
    showHandles() {
        if (this.handlesVisible) {
            return;
        }
        this.handlesVisible = true;
        this.dom.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tableContainerFocused);
        if (this.columnHandle) {
            this.columnHandle.style.display = "flex";
        }
        if (this.rowHandle) {
            this.rowHandle.style.display = "flex";
        }
    }
    updateSelectionHandles() {
        if (!this.handlesVisible || !this.columnHandle || !this.rowHandle) {
            return;
        }
        const state = this.editor.state;
        const selection = state.selection;
        const isCellSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(selection);
        let rect;
        let isFullColumnSelected = false;
        let isFullRowSelected = false;
        let isEntireTableSelected = false;
        try {
            if (isCellSelection) {
                rect = selection.getRect();
                isFullColumnSelected = selection.isColSelection();
                isFullRowSelected = selection.isRowSelection();
                isEntireTableSelected = selection.isTableSelection();
            } else {
                rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedRect"])(state);
            }
        } catch  {
            return;
        }
        if (!isCellSelection) {
            isFullColumnSelected = false;
            isFullRowSelected = false;
            isEntireTableSelected = false;
        }
        if (isEntireTableSelected) {
            this.columnHandle.style.display = "none";
            this.rowHandle.style.display = "none";
            return;
        }
        this.columnHandle.style.display = "flex";
        this.rowHandle.style.display = "flex";
        this.columnHandle.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$tableHandles$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].selected, isFullColumnSelected);
        this.rowHandle.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$tableHandles$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].selected, isFullRowSelected);
        this.columnHandle.dataset.selected = isFullColumnSelected ? "true" : "false";
        this.rowHandle.dataset.selected = isFullRowSelected ? "true" : "false";
        this.updateColumnHandlePosition(rect);
        this.updateRowHandlePosition(rect);
    }
    updateColumnHandlePosition(rect) {
        const firstRow = this.table.querySelector("tr");
        if (!firstRow) {
            return;
        }
        const cells = firstRow.querySelectorAll("td, th");
        const cellSpacing = this.node.attrs.tableData?.cellSpacing ?? 0;
        let leftPx = 0;
        let widthPx = 0;
        let cellIndex = 0;
        cells.forEach((cell)=>{
            const colspan = parseInt(cell.getAttribute("colspan") || "1", 10);
            const cellWidth = cell.offsetWidth;
            const cellLeft = cell.offsetLeft;
            for(let c = 0; c < colspan; c++){
                if (cellIndex >= rect.left && cellIndex < rect.right) {
                    if (cellIndex === rect.left) {
                        leftPx = cellLeft + c * cellWidth / colspan;
                    }
                    widthPx += cellWidth / colspan;
                }
                cellIndex++;
            }
        });
        const centerPx = leftPx + widthPx / 2 + (rect.left > 0 ? cellSpacing / 2 : 0);
        const tableLeftInViewport = this.table.offsetLeft;
        if (this.columnHandle) {
            this.columnHandle.style.left = `${tableLeftInViewport + centerPx}px`;
            this.columnHandle.style.top = `${this.table.offsetTop}px`;
        }
    }
    updateRowHandlePosition(rect) {
        const rows = this.table.querySelectorAll("tbody tr");
        if (!rows.length) {
            return;
        }
        const cellSpacing = this.node.attrs.tableData?.cellSpacing ?? 0;
        let topOffset = 0;
        for(let i = 0; i < rect.top && i < rows.length; i++){
            topOffset += rows[i].offsetHeight;
        }
        let selectedHeight = 0;
        for(let i = rect.top; i < rect.bottom && i < rows.length; i++){
            selectedHeight += rows[i].offsetHeight;
        }
        const centerPx = topOffset + selectedHeight / 2 + (rect.top > 0 ? cellSpacing / 2 : 0);
        const tableTopInViewport = this.table.offsetTop;
        const tableLeftInViewport = this.table.offsetLeft;
        if (this.rowHandle) {
            this.rowHandle.style.left = `${tableLeftInViewport}px`;
            this.rowHandle.style.top = `${tableTopInViewport + centerPx}px`;
        }
    }
    update(node, _decorations) {
        if (node.type !== this.node.type) {
            return false;
        }
        this.node = node;
        if (typeof node.attrs.id === "string") {
            this.dom.dataset.tableContainerId = node.attrs.id;
        } else {
            delete this.dom.dataset.tableContainerId;
        }
        this.updateTableSpacing(node);
        this.updateTablePadding(node);
        this.updateBorderEdgePadding(node);
        this.updateAriaDescription(node);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateColumns"])({
            node,
            colgroup: this.colgroup,
            table: this.table,
            cellMinWidth: this.getMinColumnWidth(node),
            commands: this.editor.commands,
            shouldUpdateState: false
        });
        if (this.handlesVisible) {
            requestAnimationFrame(()=>{
                this.updateSelectionHandles();
                this.updateAddBarPositions();
            });
        }
        this.resizeHitZoneOverlay.setNode(node);
        this.resizeHitZoneOverlay.scheduleUpdate();
        return true;
    }
    updateAriaDescription(node) {
        const text = node.attrs.tableData?.altText;
        if (text) {
            this.table.setAttribute("aria-label", text);
        } else {
            this.table.removeAttribute("aria-label");
        }
    }
    updateTableSpacing(node) {
        const cellSpacing = node.attrs.tableData?.cellSpacing ?? 0;
        this.dom.style.setProperty("--ricos-internal-table-gap", `${cellSpacing}px`);
        this.table.style.borderCollapse = "separate";
        this.table.style.borderSpacing = "0";
    }
    updateTablePadding(node) {
        const cellPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizePadding"])(node.attrs.tableData?.cellPadding, [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_DEFAULTS"].cellPadding
        ]);
        if (cellPadding && cellPadding.length > 0) {
            this.dom.style.setProperty("--ricos-internal-table-cell-padding-top", `${cellPadding[0]}px`);
            this.dom.style.setProperty("--ricos-internal-table-cell-padding-right", `${cellPadding[1] ?? cellPadding[0]}px`);
            this.dom.style.setProperty("--ricos-internal-table-cell-padding-bottom", `${cellPadding[2] ?? cellPadding[0]}px`);
            this.dom.style.setProperty("--ricos-internal-table-cell-padding-left", `${cellPadding[3] ?? cellPadding[1] ?? cellPadding[0]}px`);
        }
    }
    updateBorderEdgePadding(node) {
        let maxTop = 0;
        let maxBottom = 0;
        let maxLeft = 0;
        let maxRight = 0;
        const rowCount = node.content.childCount;
        if (rowCount === 0) {
            this.dom.style.setProperty("--table-border-top", "0px");
            this.dom.style.setProperty("--table-border-bottom", "0px");
            this.dom.style.setProperty("--table-border-left", "0px");
            this.dom.style.setProperty("--table-border-right", "0px");
            return;
        }
        const DEFAULT_BORDER_WIDTH = 1;
        const firstRow = node.content.child(0);
        firstRow.content.forEach((cell)=>{
            const topWidth = cell.attrs.borderWidths?.top ?? DEFAULT_BORDER_WIDTH;
            maxTop = Math.max(maxTop, topWidth);
        });
        const lastRow = node.content.child(rowCount - 1);
        lastRow.content.forEach((cell)=>{
            const bottomWidth = cell.attrs.borderWidths?.bottom ?? DEFAULT_BORDER_WIDTH;
            maxBottom = Math.max(maxBottom, bottomWidth);
        });
        node.content.forEach((row)=>{
            const cellCount = row.content.childCount;
            if (cellCount === 0) {
                return;
            }
            const firstCell = row.content.child(0);
            const leftWidth = firstCell.attrs.borderWidths?.left ?? DEFAULT_BORDER_WIDTH;
            maxLeft = Math.max(maxLeft, leftWidth);
            const lastCell = row.content.child(cellCount - 1);
            const rightWidth = lastCell.attrs.borderWidths?.right ?? DEFAULT_BORDER_WIDTH;
            maxRight = Math.max(maxRight, rightWidth);
        });
        this.dom.style.setProperty("--table-border-top", `${Math.ceil(maxTop / 2)}px`);
        this.dom.style.setProperty("--table-border-bottom", `${Math.ceil(maxBottom / 2)}px`);
        this.dom.style.setProperty("--table-border-left", `${Math.ceil(maxLeft / 2)}px`);
        this.dom.style.setProperty("--table-border-right", `${Math.ceil(maxRight / 2)}px`);
    }
    getMinColumnWidth(node) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinColumnWidthForPadding"])(node.attrs.tableData?.cellPadding);
    }
    ignoreMutation(mutation) {
        if (mutation.type === "attributes") {
            if (mutation.target === this.dom) {
                return true;
            }
            return mutation.target === this.table || this.colgroup.contains(mutation.target) || this.columnHandle && mutation.target === this.columnHandle || this.rowHandle && mutation.target === this.rowHandle || this.addColBar.contains(mutation.target) || this.addRowBar.contains(mutation.target) || this.tableSelectorBar.contains(mutation.target) || mutation.target === this.resizeHitZoneOverlay.dom || this.resizeHitZoneOverlay.dom.contains(mutation.target);
        }
        if (mutation.type === "childList") {
            return mutation.target === this.dom || mutation.target === this.viewport || mutation.target === this.addColBar || mutation.target === this.addRowBar || mutation.target === this.tableSelectorBar || mutation.target === this.resizeHitZoneOverlay.dom || this.resizeHitZoneOverlay.dom.contains(mutation.target);
        }
        return false;
    }
    destroy() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
        if (this.selectionUpdateHandler) {
            this.editor.off("selectionUpdate", this.selectionUpdateHandler);
            this.selectionUpdateHandler = null;
        }
        this.resizeHitZoneOverlay.destroy();
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cell-edge-plugin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cellEdgePlugin",
    ()=>cellEdgePlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$common$2d$plugins$2f$transaction$2d$predicates$2f$is$2d$inline$2d$text$2d$only$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-common-plugins/transaction-predicates/is-inline-text-only.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$cell$2d$edge$2d$decorations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/decorations/cell-edge-decorations.js [app-client] (ecmascript)");
;
;
;
const cellEdgePlugin = ()=>{
    const key = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("cell-edge");
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
        key,
        state: {
            init: (_config, state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$cell$2d$edge$2d$decorations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellEdgeDecorations"])(state.doc),
            apply: (tr, prev)=>{
                if (!tr.docChanged) {
                    return prev;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$common$2d$plugins$2f$transaction$2d$predicates$2f$is$2d$inline$2d$text$2d$only$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInlineTextOnly"])(tr)) {
                    return prev.map(tr.mapping, tr.doc);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$decorations$2f$cell$2d$edge$2d$decorations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellEdgeDecorations"])(tr.doc);
            }
        },
        props: {
            decorations (state) {
                return key.getState(state);
            }
        }
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/handle-dragging-plugin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleDraggingPlugin",
    ()=>handleDraggingPlugin,
    "handleDraggingPluginKey",
    ()=>handleDraggingPluginKey,
    "isHandleDraggingActive",
    ()=>isHandleDraggingActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$element$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/get-element-scale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/statics/styles/resizer-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/find-table.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resize-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/resizing-plugin-keys.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const handleDraggingPluginKey = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("handleDragging");
const isHandleDraggingActive = (state)=>{
    const pluginState = handleDraggingPluginKey.getState(state);
    return pluginState?.type === "drag";
};
const DRAG_THRESHOLD = 3;
const SCROLL_EDGE_SIZE = 50;
const SCROLL_SPEED = 3;
const Z_INDEX_DROP_ZONE = 1e4;
const Z_INDEX_GHOST = 9999;
const getColumnBoundaries = (tableElement)=>{
    const cells = tableElement.querySelector("tr")?.querySelectorAll("td, th");
    if (!cells) {
        return [];
    }
    const tableRect = tableElement.getBoundingClientRect();
    const boundaries = [
        {
            index: 0,
            pos: tableRect.left
        }
    ];
    let colIndex = 0;
    cells.forEach((cell)=>{
        const cellRect = cell.getBoundingClientRect();
        const colspan = parseInt(cell.getAttribute("colspan") || "1", 10);
        for(let c = 0; c < colspan; c++){
            colIndex++;
            boundaries.push({
                index: colIndex,
                pos: cellRect.left + (c + 1) * cellRect.width / colspan
            });
        }
    });
    return boundaries;
};
const getRowBoundaries = (tableElement)=>{
    const rows = tableElement.querySelector("tbody")?.querySelectorAll("tr");
    if (!rows) {
        return [];
    }
    const boundaries = [];
    rows.forEach((row, index)=>{
        const rowRect = row.getBoundingClientRect();
        if (index === 0) {
            boundaries.push({
                index: 0,
                pos: rowRect.top
            });
        }
        boundaries.push({
            index: index + 1,
            pos: rowRect.bottom
        });
    });
    return boundaries;
};
const findClosestDropBoundary = (boundaries, mousePos, fromStart, fromEnd, map, isColumn)=>{
    let closestIndex = fromStart;
    let closestPos = 0;
    let minDist = Infinity;
    for (const b of boundaries){
        if (b.index > fromStart && b.index <= fromEnd + 1) {
            continue;
        }
        if (!isBoundaryValid(map, b.index, isColumn)) {
            continue;
        }
        const dist = Math.abs(mousePos - b.pos);
        if (dist < minDist) {
            minDist = dist;
            closestIndex = b.index;
            closestPos = b.pos;
        }
    }
    return {
        closestIndex,
        closestPos
    };
};
const findScrollContainer = (element)=>{
    let current = element.parentElement;
    while(current){
        const { overflowY, overflowX } = getComputedStyle(current);
        const canScrollY = current.scrollHeight > current.clientHeight;
        const canScrollX = current.scrollWidth > current.clientWidth;
        const hasScrollableOverflow = overflowY === "auto" || overflowY === "scroll" || overflowX === "auto" || overflowX === "scroll";
        if (hasScrollableOverflow && (canScrollY || canScrollX)) {
            return current;
        }
        current = current.parentElement;
    }
    return null;
};
const stopAutoScroll = (state)=>{
    if (state.autoScrollRAF !== null) {
        cancelAnimationFrame(state.autoScrollRAF);
        state.autoScrollRAF = null;
    }
};
const isBoundaryValid = (map, boundaryIndex, isColumn)=>{
    const size = isColumn ? map.width : map.height;
    const crossSize = isColumn ? map.height : map.width;
    if (boundaryIndex === 0 || boundaryIndex === size) {
        return true;
    }
    for(let i = 0; i < crossSize; i++){
        const mapIndex = isColumn ? i * map.width + (boundaryIndex - 1) : (boundaryIndex - 1) * map.width + i;
        const placement = map.findCell(map.map[mapIndex]);
        const cellEnd = isColumn ? placement.col + placement.colspan : placement.row + placement.rowspan;
        if (cellEnd > boundaryIndex) {
            return false;
        }
    }
    return true;
};
const updateDropZonePosition = (state, tableElement, map)=>{
    const { dragType, fromStart, fromEnd, currentX, currentY } = state.currentDragState;
    const isColumn = dragType === "column";
    const mousePos = isColumn ? currentX : currentY;
    const boundaries = isColumn ? getColumnBoundaries(tableElement) : getRowBoundaries(tableElement);
    if (boundaries.length === 0) {
        return;
    }
    const { closestIndex, closestPos } = findClosestDropBoundary(boundaries, mousePos, fromStart, fromEnd, map, isColumn);
    const isValidDrop = closestIndex < fromStart || closestIndex > fromEnd + 1;
    state.dropZoneElement.style.display = isValidDrop ? "block" : "none";
    if (isValidDrop) {
        state.dropZoneElement.style[isColumn ? "left" : "top"] = `${closestPos}px`;
    }
    state.currentDragState = {
        ...state.currentDragState,
        dropIndex: closestIndex
    };
};
const updateDragVisualsPosition = (state)=>{
    const { startX, startY, scale, dragType, currentX, currentY } = state.currentDragState;
    const deltaX = (currentX - startX) / scale.scaleX + state.scrollOffsetX;
    const deltaY = (currentY - startY) / scale.scaleY + state.scrollOffsetY;
    state.handleElement.style.transform = dragType === "column" ? `translate(calc(-50% + ${deltaX}px), -50%)` : `translate(-50%, calc(-50% + ${deltaY}px))`;
    const delta = dragType === "column" ? currentX - startX : currentY - startY;
    const prop = dragType === "column" ? "left" : "top";
    const original = parseFloat(state.ghostElement.dataset[dragType === "column" ? "startLeft" : "startTop"] || "0");
    state.ghostElement.style[prop] = `${original + delta}px`;
};
const updateDropIndicator = (state, dropIndex, dropPosition, fromStart, fromEnd, dragType)=>{
    const isValidDrop = dropIndex < fromStart || dropIndex > fromEnd + 1;
    state.dropZoneElement.style.display = isValidDrop ? "block" : "none";
    if (isValidDrop) {
        state.dropZoneElement.style[dragType === "column" ? "left" : "top"] = `${dropPosition}px`;
    }
};
const performAutoScrollIfNeeded = (state, tableElement, map, event)=>{
    if (!state.scrollContainer) {
        return;
    }
    const { dragType } = state.currentDragState;
    const containerRect = state.scrollContainer.getBoundingClientRect();
    const tableRect = tableElement.getBoundingClientRect();
    let scrollX = 0;
    let scrollY = 0;
    if (dragType === "column") {
        const canScrollLeft = tableRect.left < containerRect.left;
        const canScrollRight = tableRect.right > containerRect.right;
        if (event.clientX < containerRect.left + SCROLL_EDGE_SIZE && canScrollLeft) {
            scrollX = -SCROLL_SPEED;
        } else if (event.clientX > containerRect.right - SCROLL_EDGE_SIZE && canScrollRight) {
            scrollX = SCROLL_SPEED;
        }
    }
    if (dragType === "row") {
        const canScrollUp = tableRect.top < containerRect.top;
        const canScrollDown = tableRect.bottom > containerRect.bottom;
        if (event.clientY < containerRect.top + SCROLL_EDGE_SIZE && canScrollUp) {
            scrollY = -SCROLL_SPEED;
        } else if (event.clientY > containerRect.bottom - SCROLL_EDGE_SIZE && canScrollDown) {
            scrollY = SCROLL_SPEED;
        }
    }
    if (scrollX === 0 && scrollY === 0) {
        stopAutoScroll(state);
        return;
    }
    const container = state.scrollContainer;
    const table = tableElement;
    const tableMap = map;
    const performScroll = ()=>{
        const currentTableRect = table.getBoundingClientRect();
        const currentContainerRect = container.getBoundingClientRect();
        const shouldScrollX = scrollX < 0 ? currentTableRect.left < currentContainerRect.left : currentTableRect.right > currentContainerRect.right;
        const shouldScrollY = scrollY < 0 ? currentTableRect.top < currentContainerRect.top : currentTableRect.bottom > currentContainerRect.bottom;
        if (scrollX !== 0 && shouldScrollX || scrollY !== 0 && shouldScrollY) {
            const actualScrollX = shouldScrollX ? scrollX : 0;
            const actualScrollY = shouldScrollY ? scrollY : 0;
            container.scrollBy(actualScrollX, actualScrollY);
            state.scrollOffsetX += actualScrollX;
            state.scrollOffsetY += actualScrollY;
            updateDropZonePosition(state, table, tableMap);
            updateDragVisualsPosition(state);
            state.autoScrollRAF = requestAnimationFrame(performScroll);
        } else {
            stopAutoScroll(state);
        }
    };
    stopAutoScroll(state);
    state.autoScrollRAF = requestAnimationFrame(performScroll);
};
const handleDraggingPlugin = ({ editor })=>{
    let dragState = {
        type: "idle"
    };
    let capturedElement = null;
    let capturedPointerId = null;
    let globalCleanup = null;
    const cleanup = ()=>{
        if (dragState.type === "dragging") {
            stopAutoScroll(dragState);
            dragState.dropZoneElement.remove();
            dragState.ghostElement.remove();
        }
        if (dragState.type !== "idle") {
            if (dragState.handleElement.isConnected) {
                dragState.handleElement.style.transform = dragState.originalHandleTransform;
                delete dragState.handleElement.dataset.dragging;
            }
        }
        dragState = {
            type: "idle"
        };
    };
    const releasePointerCapture = ()=>{
        if (capturedElement && capturedPointerId !== null) {
            try {
                capturedElement.releasePointerCapture(capturedPointerId);
            } catch  {}
            capturedElement = null;
            capturedPointerId = null;
        }
    };
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
        key: handleDraggingPluginKey,
        state: {
            init: ()=>({
                    type: "idle"
                }),
            apply (tr, currentState) {
                const meta = tr.getMeta(handleDraggingPluginKey);
                return meta ?? currentState;
            }
        },
        props: {
            attributes (editorState) {
                const state = handleDraggingPluginKey.getState(editorState);
                if (!state || state.type === "idle") {
                    return {};
                }
                return {
                    class: state.dragType === "column" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reorderCursorCol : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reorderCursorRow
                };
            },
            handleDOMEvents: {
                pointerdown (view, event) {
                    if (event.button !== 0) {
                        return false;
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isColumnResizingActive"])(view) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRowResizingActive"])(view) || !editor.isEditable) {
                        return false;
                    }
                    const target = event.target;
                    const columnHandle = target.closest('[data-hook="column-handle"]');
                    const rowHandle = target.closest('[data-hook="row-handle"]');
                    const handle = columnHandle || rowHandle;
                    if (!handle) {
                        return false;
                    }
                    handle.dataset.dragging = "true";
                    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$find$2d$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTable"])(view.state.selection);
                    if (!table) {
                        delete handle.dataset.dragging;
                        return false;
                    }
                    const tableMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table.node);
                    const tableStart = table.start;
                    const isColumn = !!columnHandle;
                    let cellRect;
                    try {
                        const { selection } = view.state;
                        if ("getRect" in selection && typeof selection.getRect === "function") {
                            cellRect = selection.getRect();
                        } else {
                            const $cell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellAround"])(selection.$from);
                            if (!$cell) {
                                delete handle.dataset.dragging;
                                return false;
                            }
                            const cellPos = $cell.pos - tableStart;
                            const placement = tableMap.findCell(cellPos);
                            cellRect = {
                                left: placement.col,
                                top: placement.row,
                                right: placement.col + placement.colspan,
                                bottom: placement.row + placement.rowspan
                            };
                        }
                    } catch  {
                        delete handle.dataset.dragging;
                        return false;
                    }
                    if (isColumn) {
                        editor.commands.selectColumns(cellRect.left, cellRect.right - 1, tableStart);
                    } else {
                        editor.commands.selectRows(cellRect.top, cellRect.bottom - 1, tableStart);
                    }
                    const newSelection = editor.state.selection;
                    let expandedRect;
                    if ("getRect" in newSelection && typeof newSelection.getRect === "function") {
                        expandedRect = newSelection.getRect();
                    } else {
                        delete handle.dataset.dragging;
                        return false;
                    }
                    const fromStart = isColumn ? expandedRect.left : expandedRect.top;
                    const fromEnd = isColumn ? expandedRect.right - 1 : expandedRect.bottom - 1;
                    try {
                        target.setPointerCapture(event.pointerId);
                        capturedElement = target;
                        capturedPointerId = event.pointerId;
                    } catch  {}
                    const handleGlobalPointerUp = (e)=>{
                        if (e.pointerId === event.pointerId) {
                            if (dragState.type !== "idle") {
                                finishDrag(view, dragState.currentDragState, editor, cleanup);
                            }
                            cleanupGlobalListeners();
                        }
                    };
                    const cleanupGlobalListeners = ()=>{
                        document.removeEventListener("pointerup", handleGlobalPointerUp, true);
                        document.removeEventListener("pointercancel", handleGlobalPointerUp, true);
                        globalCleanup = null;
                    };
                    document.addEventListener("pointerup", handleGlobalPointerUp, true);
                    document.addEventListener("pointercancel", handleGlobalPointerUp, true);
                    globalCleanup = cleanupGlobalListeners;
                    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$element$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getElementScale"])(handle);
                    const dragType = isColumn ? "column" : "row";
                    const pmDragState = {
                        type: "drag",
                        dragType,
                        tablePosition: tableStart,
                        fromStart,
                        fromEnd,
                        dropIndex: fromStart,
                        startX: event.clientX,
                        startY: event.clientY,
                        currentX: event.clientX,
                        currentY: event.clientY,
                        scale
                    };
                    const tableEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableElement"])(view, tableStart);
                    dragState = {
                        type: "pending",
                        handleElement: handle,
                        originalHandleTransform: handle.style.transform,
                        currentDragState: pmDragState,
                        scrollContainer: tableEl ? findScrollContainer(tableEl) : null,
                        scrollOffsetX: 0,
                        scrollOffsetY: 0
                    };
                    view.dispatch(view.state.tr.setMeta(handleDraggingPluginKey, pmDragState));
                    event.preventDefault();
                    event.stopPropagation();
                    return true;
                },
                pointermove (view, event) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isColumnResizingActive"])(view) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRowResizingActive"])(view) || !editor.isEditable || dragState.type === "idle") {
                        return false;
                    }
                    if (dragState.type === "pending") {
                        const { startX, startY, dragType } = dragState.currentDragState;
                        const distance = dragType === "column" ? Math.abs(event.clientX - startX) : Math.abs(event.clientY - startY);
                        if (distance < DRAG_THRESHOLD) {
                            event.preventDefault();
                            return true;
                        }
                        const dragging = createDragVisuals(view, dragState);
                        if (!dragging) {
                            event.preventDefault();
                            return true;
                        }
                        dragState = dragging;
                    }
                    updateDrag(dragState, view, event);
                    event.preventDefault();
                    event.stopPropagation();
                    return true;
                },
                pointerup (view) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isColumnResizingActive"])(view) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resizing$2d$plugin$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRowResizingActive"])(view) || !editor.isEditable || dragState.type === "idle") {
                        return false;
                    }
                    releasePointerCapture();
                    return finishDrag(view, dragState.currentDragState, editor, cleanup);
                },
                pointercancel (view) {
                    if (!editor.isEditable || dragState.type === "idle") {
                        return false;
                    }
                    releasePointerCapture();
                    cancelDrag(view, cleanup);
                    return true;
                }
            }
        },
        view () {
            return {
                destroy () {
                    releasePointerCapture();
                    cleanup();
                    globalCleanup?.();
                }
            };
        }
    });
};
const createDragVisuals = (view, pending)=>{
    const { dragType, fromStart, fromEnd, tablePosition } = pending.currentDragState;
    const tableElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableElement"])(view, tablePosition);
    if (!tableElement) {
        return null;
    }
    const tableRect = tableElement.getBoundingClientRect();
    const isColumn = dragType === "column";
    const dropZoneElement = document.createElement("div");
    dropZoneElement.className = isColumn ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].columnDropIndicator : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rowDropIndicator;
    dropZoneElement.style.cssText = `display:none;position:fixed;z-index:${Z_INDEX_DROP_ZONE};${isColumn ? `top:${tableRect.top}px;height:${tableRect.height}px` : `left:${tableRect.left}px;width:${tableRect.width}px`}`;
    document.body.appendChild(dropZoneElement);
    const ghostElement = document.createElement("div");
    ghostElement.className = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$resizer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dragGhost;
    ghostElement.style.cssText = `position:fixed;z-index:${Z_INDEX_GHOST};pointer-events:none`;
    const bounds = getGhostBounds(tableElement, dragType, fromStart, fromEnd, tableRect);
    if (bounds) {
        Object.assign(ghostElement.style, {
            left: `${bounds.left}px`,
            top: `${bounds.top}px`,
            width: `${bounds.width}px`,
            height: `${bounds.height}px`
        });
        ghostElement.dataset.startLeft = String(bounds.left);
        ghostElement.dataset.startTop = String(bounds.top);
    }
    document.body.appendChild(ghostElement);
    return {
        type: "dragging",
        handleElement: pending.handleElement,
        originalHandleTransform: pending.originalHandleTransform,
        currentDragState: pending.currentDragState,
        dropZoneElement,
        ghostElement,
        scrollContainer: pending.scrollContainer,
        autoScrollRAF: null,
        scrollOffsetX: pending.scrollOffsetX,
        scrollOffsetY: pending.scrollOffsetY
    };
};
const getGhostBounds = (tableElement, dragType, fromStart, fromEnd, tableRect)=>{
    const tbody = tableElement.querySelector("tbody");
    if (!tbody) {
        return null;
    }
    if (dragType === "column") {
        const firstRow = tbody.querySelector("tr");
        if (!firstRow) {
            return null;
        }
        const cells = firstRow.querySelectorAll("td, th");
        let startX = tableRect.left;
        let endX = tableRect.left;
        let colIndex = 0;
        cells.forEach((cell)=>{
            const cellRect = cell.getBoundingClientRect();
            const colspan = parseInt(cell.getAttribute("colspan") || "1", 10);
            const colWidth = cellRect.width / colspan;
            for(let c = 0; c < colspan; c++){
                if (colIndex === fromStart) {
                    startX = cellRect.left + c * colWidth;
                }
                if (colIndex === fromEnd) {
                    endX = cellRect.left + (c + 1) * colWidth;
                }
                colIndex++;
            }
        });
        return {
            left: startX,
            top: tableRect.top,
            width: endX - startX,
            height: tableRect.height
        };
    } else {
        const rows = tbody.querySelectorAll("tr");
        let startY = tableRect.top;
        let endY = tableRect.top;
        rows.forEach((row, index)=>{
            const rowRect = row.getBoundingClientRect();
            if (index === fromStart) {
                startY = rowRect.top;
            }
            if (index === fromEnd) {
                endY = rowRect.bottom;
            }
        });
        return {
            left: tableRect.left,
            top: startY,
            width: tableRect.width,
            height: endY - startY
        };
    }
};
const updateDrag = (state, view, event)=>{
    const { dragType, fromStart, fromEnd, tablePosition } = state.currentDragState;
    const table = view.state.doc.nodeAt(tablePosition - 1);
    if (!table) {
        return;
    }
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
    const tableElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$resize$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTableElement"])(view, tablePosition);
    if (!tableElement) {
        return;
    }
    const { dropIndex, dropPosition } = calculateDropPosition(event, state.currentDragState, tableElement, map);
    state.currentDragState = {
        ...state.currentDragState,
        currentX: event.clientX,
        currentY: event.clientY,
        dropIndex
    };
    updateDragVisualsPosition(state);
    updateDropIndicator(state, dropIndex, dropPosition, fromStart, fromEnd, dragType);
    performAutoScrollIfNeeded(state, tableElement, map, event);
};
const calculateDropPosition = (event, state, tableElement, map)=>{
    const { dragType, fromStart, fromEnd } = state;
    const isColumn = dragType === "column";
    const mousePos = isColumn ? event.clientX : event.clientY;
    const boundaries = isColumn ? getColumnBoundaries(tableElement) : getRowBoundaries(tableElement);
    if (boundaries.length === 0) {
        return {
            dropIndex: fromStart,
            dropPosition: 0
        };
    }
    const { closestIndex, closestPos } = findClosestDropBoundary(boundaries, mousePos, fromStart, fromEnd, map, isColumn);
    return {
        dropIndex: closestIndex,
        dropPosition: closestPos
    };
};
const finishDrag = (view, state, editor, cleanup)=>{
    const { dragType, fromStart, fromEnd, dropIndex, tablePosition } = state;
    cleanup();
    view.dispatch(view.state.tr.setMeta(handleDraggingPluginKey, {
        type: "idle"
    }));
    const isValidDrop = dropIndex < fromStart || dropIndex > fromEnd + 1;
    if (!isValidDrop) {
        return true;
    }
    const count = fromEnd - fromStart + 1;
    const finalStart = dropIndex <= fromStart ? dropIndex : dropIndex - count;
    const finalEnd = finalStart + count - 1;
    if (dragType === "column") {
        editor.chain().reorderColumns({
            start: fromStart,
            end: fromEnd
        }, dropIndex).selectColumns(finalStart, finalEnd, tablePosition).focus().run();
    } else {
        editor.chain().reorderRows({
            start: fromStart,
            end: fromEnd
        }, dropIndex).selectRows(finalStart, finalEnd, tablePosition).focus().run();
    }
    return true;
};
const cancelDrag = (view, cleanup)=>{
    cleanup();
    view.dispatch(view.state.tr.setMeta(handleDraggingPluginKey, {
        type: "idle"
    }));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/keyboard-shortcuts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "keyboardShortcuts",
    ()=>keyboardShortcuts,
    "maybeToggleEditMode",
    ()=>maybeToggleEditMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$log$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/log-invariant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$commons$2f$Utils$2f$is$2d$inside$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-commons/Utils/is-inside-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/queries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cellselection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
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
const keyboardShortcuts = {
    Enter: maybeToggleEditMode,
    ArrowLeft: arrow("horiz", -1),
    ArrowRight: arrow("horiz", 1),
    ArrowUp: arrow("vert", -1),
    ArrowDown: arrow("vert", 1),
    "Shift-ArrowLeft": shiftArrow("horiz", -1),
    "Shift-ArrowRight": shiftArrow("horiz", 1),
    "Shift-ArrowUp": shiftArrow("vert", -1),
    "Shift-ArrowDown": shiftArrow("vert", 1),
    Tab: handleTab(1),
    "Shift-Tab": handleTab(-1),
    "Alt-Ctrl-+": ({ editor: { state, view } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addColumnAfter"])(state, view.dispatch),
    "Alt-Ctrl-=": ({ editor: { state, view } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addColumnAfter"])(state, view.dispatch),
    "Alt-Ctrl--": ({ editor: { state, view } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteColumn"])(state, view.dispatch),
    "Shift-Space": selectRowRange,
    "Alt-Space": selectColRange,
    Backspace: handleDelete,
    "Mod-Backspace": handleDelete,
    Delete: handleDelete,
    "Mod-Delete": handleDelete
};
function maybeSetSelection(state, dispatch, selection) {
    if (selection.eq(state.selection)) {
        return false;
    }
    if (dispatch) {
        dispatch(state.tr.setSelection(selection).scrollIntoView());
    }
    return true;
}
function arrow(axis, dir) {
    return ({ editor: { state, view } })=>{
        const sel = state.selection;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(sel)) {
            const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(sel);
            if (table && table.isTableSelected()) {
                const tableStart = table.getStartPos();
                const tablePos = tableStart - 1;
                if (dir < 0) {
                    const nodeSelection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"].create(state.doc, tablePos);
                    view.dispatch(state.tr.setSelection(nodeSelection));
                    return false;
                }
                const afterTablePos = tablePos + table.getNode().nodeSize;
                view.dispatch(view.state.tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(view.state.doc, afterTablePos, afterTablePos)).scrollIntoView());
                return false;
            }
            const $head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextCell"])(sel.$headCell, axis, dir);
            if ($head) {
                return maybeSetSelection(state, view.dispatch, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"]([
                    $head
                ], state.doc));
            } else {
                if (!sel.isSingleCell()) {
                    return maybeSetSelection(state, view.dispatch, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"]([
                        sel.$headCell
                    ], state.doc));
                }
                return true;
            }
        } else {
            const end = atEndOfCell(view, axis, dir);
            if (end === null) {
                return false;
            }
            const $cell = state.doc.resolve(end);
            const $nextCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextCell"])($cell, axis, dir);
            if ($nextCell) {
                const nextCellContentPos = $nextCell.pos + 1;
                const newSelection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].near(state.doc.resolve(nextCellContentPos));
                return maybeSetSelection(state, view.dispatch, newSelection);
            }
            return true;
        }
    };
}
function handleTab(dir) {
    return ({ editor: { state, view } })=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$commons$2f$Utils$2f$is$2d$inside$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInsideList"])(state)) {
            return false;
        }
        const sel = state.selection;
        const currentCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellAround"])(sel.$head);
        if (!currentCell) {
            return false;
        }
        const $next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextCell"])(currentCell, "horiz", dir);
        if ($next) {
            return maybeSetSelection(state, view.dispatch, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"]([
                $next
            ], state.doc));
        }
        const tableStart = currentCell.start(-1);
        const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(currentCell.node(-1));
        const cell = map.findCell(currentCell.pos - tableStart);
        if (dir > 0) {
            const nextRow = cell.row + cell.rowspan;
            if (nextRow < map.height) {
                const firstCellPos = map.map[nextRow * map.width];
                const $firstCell = state.doc.resolve(tableStart + firstCellPos);
                return maybeSetSelection(state, view.dispatch, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"]([
                    $firstCell
                ], state.doc));
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRowAfter"])(state, (tr)=>{
                const newTable = tr.doc.nodeAt(tableStart - 1);
                if (!newTable) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$log$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logInvariant"])(new Error(`Table not found at position ${tableStart - 1}`));
                    view.dispatch(tr);
                    return;
                }
                const newMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(newTable);
                const newFirstCellPos = newMap.map[(cell.row + cell.rowspan) * newMap.width];
                const $newCell = tr.doc.resolve(tableStart + newFirstCellPos);
                tr.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"]([
                    $newCell
                ], tr.doc));
                view.dispatch(tr);
            });
            return true;
        }
        const prevRow = cell.row - 1;
        if (prevRow >= 0) {
            const lastCellPos = map.map[prevRow * map.width + (map.width - 1)];
            const $lastCell = state.doc.resolve(tableStart + lastCellPos);
            return maybeSetSelection(state, view.dispatch, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"]([
                $lastCell
            ], state.doc));
        }
        return true;
    };
}
function shiftArrow(axis, dir) {
    return ({ editor: { state, view } })=>{
        let sel = state.selection;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(sel)) {
            const end = atEndOfCell(view, axis, dir);
            if (end === null) {
                return false;
            }
            sel = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"]([
                state.doc.resolve(end)
            ], state.doc);
        }
        const $head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextCell"])(sel.$headCell, axis, dir);
        if (!$head) {
            return true;
        }
        const tableQuery = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(sel);
        if (!tableQuery) {
            return false;
        }
        const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRectBetweenCells"])([
            sel.$anchorCell,
            $head
        ]);
        const cellPositions = tableQuery.map.cellsInRect(rect);
        const cells = cellPositions.map((pos)=>state.doc.resolve(tableQuery.getStartPos() + pos));
        const anchorPos = sel.$anchorCell.pos;
        const headPos = $head.pos;
        const reorderedCells = [
            sel.$anchorCell,
            ...cells.filter((c)=>c.pos !== anchorPos && c.pos !== headPos),
            $head
        ];
        const selection = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](reorderedCells, state.doc);
        return maybeSetSelection(state, view.dispatch, selection);
    };
}
function maybeToggleEditMode({ editor }) {
    const sel = editor.state.selection;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(sel)) {
        const table = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(sel);
        if (table && table.isTableSelected()) {
            const map = table.getMap();
            const firstCellPos = table.getStartPos() + map[0];
            const $firstCell = editor.state.doc.resolve(firstCellPos);
            const cellSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"]([
                $firstCell
            ], editor.state.doc);
            editor.view.dispatch(editor.state.tr.setSelection(cellSelection));
            return true;
        }
        if (sel.ranges.length === 1) {
            editor.commands.setEditCell();
        }
        return true;
    }
    return false;
}
function selectRowRange({ editor }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(editor.state.selection)) {
        const { selection } = editor.state;
        const table = selection.$anchorCell.node(-1);
        const tableStart = selection.$anchorCell.start(-1);
        const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
        const anchorRow = map.findCell(selection.$anchorCell.pos - tableStart).row;
        const headRow = map.findCell(selection.$headCell.pos - tableStart).row;
        const fromRow = Math.min(anchorRow, headRow);
        const toRow = Math.max(anchorRow, headRow);
        const rect = {
            left: 0,
            right: map.width,
            top: fromRow,
            bottom: toRow + 1
        };
        const cellPositions = map.cellsInRect(rect);
        const cells = cellPositions.map((pos)=>editor.state.doc.resolve(tableStart + pos));
        const newSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells, editor.state.doc);
        editor.view.dispatch(editor.state.tr.setSelection(newSelection));
        return true;
    }
    return false;
}
function selectColRange({ editor }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$is$2d$selection$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRicosCellSelection"])(editor.state.selection)) {
        const { selection } = editor.state;
        const table = selection.$anchorCell.node(-1);
        const tableStart = selection.$anchorCell.start(-1);
        const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(table);
        const anchorCol = map.findCell(selection.$anchorCell.pos - tableStart).col;
        const headCol = map.findCell(selection.$headCell.pos - tableStart).col;
        const fromCol = Math.min(anchorCol, headCol);
        const toCol = Math.max(anchorCol, headCol);
        const rect = {
            left: fromCol,
            right: toCol + 1,
            top: 0,
            bottom: map.height
        };
        const cellPositions = map.cellsInRect(rect);
        const cells = cellPositions.map((pos)=>editor.state.doc.resolve(tableStart + pos));
        const newSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"](cells, editor.state.doc);
        editor.view.dispatch(editor.state.tr.setSelection(newSelection));
        return true;
    }
    return false;
}
function atEndOfCell(view, axis, dir) {
    if (!(view.state.selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"])) {
        return null;
    }
    const { $head } = view.state.selection;
    for(let d = $head.depth - 1; d >= 0; d--){
        const parent = $head.node(d), index = dir < 0 ? $head.index(d) : $head.indexAfter(d);
        if (index !== (dir < 0 ? 0 : parent.childCount)) {
            return null;
        }
        if (parent.type.spec.tableRole === "cell" || parent.type.spec.tableRole === "header_cell") {
            const cellPos = $head.before(d);
            const dirStr = axis === "vert" ? dir > 0 ? "down" : "up" : dir > 0 ? "right" : "left";
            return view.endOfTextblock(dirStr) ? cellPos : null;
        }
    }
    return null;
}
function handleDelete({ editor }) {
    const { selection, tr } = editor.state;
    const tableQuery = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableQuery"].of(selection);
    if (!tableQuery) {
        return false;
    }
    if (selection.from < tableQuery.getStartPos() || selection.to >= tableQuery.getStartPos() + tableQuery.getNode().nodeSize) {
        const effectiveFrom = Math.min(selection.from, tableQuery.table.pos);
        const effectiveTo = Math.max(selection.to, tableQuery.table.pos + tableQuery.table.node.nodeSize);
        tr.delete(effectiveFrom, effectiveTo);
        editor.view.dispatch(tr);
        return true;
    }
    if (!(selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cellselection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosCellSelection"])) {
        return false;
    }
    const cleared = editor.commands.clearCell();
    if (cleared) {
        return true;
    }
    if (selection.isColSelection() && selection.isRowSelection()) {
        editor.commands.deleteTable();
        return true;
    }
    if (selection.isColSelection()) {
        editor.commands.deleteColumn();
        return true;
    }
    if (selection.isRowSelection()) {
        editor.commands.deleteRow();
        return true;
    }
    return false;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-extension.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tableExtension",
    ()=>tableExtension
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/next-schema/generated/ricos_document.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/utilities/call-or-return.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/get-extension-field.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-view@1.42.2/node_modules/prosemirror-view/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$extensions$2f$create$2d$ricos$2d$extension$2f$create$2d$ricos$2d$node$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap-extensions/create-ricos-extension/create-ricos-node-extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$border$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/border.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/cell-attributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$fix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/fix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$reorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/reorder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/commands/selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$view$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-view.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cell$2d$edge$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/cell-edge-plugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$column$2d$resizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/column-resizing.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$handle$2d$dragging$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/handle-dragging-plugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$row$2d$resizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/row-resizing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$editing$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-editing-plugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$keyboard$2d$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/utilities/keyboard-shortcuts.js [app-client] (ecmascript)");
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
const TABLE_SUPPORTED_QUICK_ACTIONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].PARAGRAPH,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BULLETED_LIST,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].ORDERED_LIST,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CHECKBOX_LIST,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BLOCKQUOTE,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].FILE,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].IMAGE,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].VIDEO,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GIF,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].DIVIDER,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CODE_BLOCK,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HTML,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].LINK_PREVIEW,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].APP_EMBED,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BUTTON,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].EMBED,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SHAPE
];
const TABLE_CELL_STYLE_PREVIEW_PLUGIN_KEY = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("tableCellStylePreview");
const PREVIEW_ROOT_STYLE_NAMES = [
    "--ricos-table-cell-background-color-preview",
    "--ricos-table-preview-selection-color",
    "--ricos-table-selection-overlay-z"
];
const syncTableCellStylePreview = (view)=>{
    const rootStyle = TABLE_CELL_STYLE_PREVIEW_PLUGIN_KEY.getState(view.state)?.rootStyle ?? {};
    for (const name of PREVIEW_ROOT_STYLE_NAMES){
        const value = rootStyle[name];
        if (value) {
            view.dom.style.setProperty(name, value);
        } else {
            view.dom.style.removeProperty(name);
        }
    }
};
const tableCellStylePreviewPlugin = ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
        key: TABLE_CELL_STYLE_PREVIEW_PLUGIN_KEY,
        state: {
            init () {
                return {
                    cellDecorations: []
                };
            },
            apply (tr, value) {
                const preview = tr.getMeta(TABLE_CELL_STYLE_PREVIEW_PLUGIN_KEY);
                return preview === void 0 ? value : preview;
            }
        },
        props: {
            decorations (state) {
                const preview = TABLE_CELL_STYLE_PREVIEW_PLUGIN_KEY.getState(state);
                const cellDecorations = preview?.cellDecorations ?? [];
                if (cellDecorations.length === 0) {
                    return null;
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(state.doc, cellDecorations.map(({ className, from, style, to })=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].node(from, to, {
                        ...className ? {
                            class: className
                        } : {},
                        ...style ? {
                            style
                        } : {}
                    })));
            }
        },
        view (view) {
            syncTableCellStylePreview(view);
            return {
                update (updatedView) {
                    syncTableCellStylePreview(updatedView);
                },
                destroy () {
                    for (const name of PREVIEW_ROOT_STYLE_NAMES){
                        view.dom.style.removeProperty(name);
                    }
                }
            };
        }
    });
const tableExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$extensions$2f$create$2d$ricos$2d$extension$2f$create$2d$ricos$2d$node$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRicosNodeExtension"])({
    groups: [
        "shortcuts-enabled",
        "footer-disabled"
    ],
    type: "html-node",
    reconfigure: (config, _extensions, _props, settings, services)=>({
            ...config,
            addOptions: ()=>({
                    services,
                    ...settings,
                    View: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$view$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableView"]
                })
        }),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_TYPE"],
    createExtensionConfig () {
        return {
            name: this.name,
            group: "block collapsibleListItemBodyContent",
            selectable: true,
            isolating: true,
            draggable: true,
            content: "TABLE_ROW+",
            supportedQuickActions: TABLE_SUPPORTED_QUICK_ACTIONS,
            tableRole: "table",
            priority: 101,
            contentDOM: document.createElement("tbody"),
            addAttributes: ()=>({
                    containerData: null,
                    dimensions: {
                        default: null,
                        parseHTML: (element)=>{
                            const dimensionsAttr = element.getAttribute("data-dimensions");
                            if (!dimensionsAttr) {
                                return null;
                            }
                            try {
                                return JSON.parse(dimensionsAttr);
                            } catch  {
                                return null;
                            }
                        },
                        renderHTML: (attributes)=>{
                            if (!attributes.dimensions) {
                                return {};
                            }
                            return {
                                "data-dimensions": JSON.stringify(attributes.dimensions)
                            };
                        }
                    },
                    header: null,
                    edgeMap: null,
                    tableData: {
                        default: null,
                        parseHTML: (element)=>{
                            const style = element.getAttribute("style");
                            if (!style) {
                                return null;
                            }
                            const result = {};
                            const borderSpacingMatch = style.match(/border-spacing:\s*(\d+)px/);
                            if (borderSpacingMatch) {
                                result.cellSpacing = parseInt(borderSpacingMatch[1], 10);
                            }
                            const cellPaddingMatch = style.match(/--ricos-table-cell-padding:\s*([^;]+)/);
                            if (cellPaddingMatch) {
                                const paddingValues = cellPaddingMatch[1].trim().split(/\s+/).map((v)=>parseInt(v, 10)).filter((v)=>!isNaN(v));
                                if (paddingValues.length > 0) {
                                    result.cellPadding = paddingValues;
                                }
                            }
                            return Object.keys(result).length > 0 ? result : null;
                        },
                        renderHTML: (attributes)=>{
                            if (!attributes.tableData) {
                                return {};
                            }
                            const styles = [];
                            const tableData = attributes.tableData;
                            if (typeof tableData.cellSpacing === "number") {
                                styles.push(`border-spacing: ${tableData.cellSpacing}px`);
                            }
                            if (Array.isArray(tableData.cellPadding) && tableData.cellPadding.length > 0) {
                                styles.push(`--ricos-table-cell-padding: ${tableData.cellPadding.join(" ")}`);
                            }
                            return styles.length > 0 ? {
                                style: styles.join("; ")
                            } : {};
                        }
                    }
                }),
            parseHTML () {
                return [
                    {
                        tag: "table"
                    }
                ];
            },
            renderHTML ({ HTMLAttributes }) {
                return [
                    "table",
                    {
                        ...HTMLAttributes
                    },
                    [
                        "tbody",
                        0
                    ]
                ];
            },
            addProseMirrorPlugins () {
                const isMobile = this.options.services?.context?.isMobile;
                return [
                    ...!isMobile ? [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$column$2d$resizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["columnResizingPlugin"])({
                            editor: this.editor,
                            minColumnWidth: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_MANUAL_MIN_WIDTH"]
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$row$2d$resizing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rowResizingPlugin"])({
                            editor: this.editor
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$handle$2d$dragging$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleDraggingPlugin"])({
                            editor: this.editor
                        })
                    ] : [],
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$editing$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableEditingPlugin"])({
                        editor: this.editor,
                        isMobile
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$cell$2d$edge$2d$plugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellEdgePlugin"])(),
                    tableCellStylePreviewPlugin()
                ];
            },
            extendNodeSchema (extension) {
                const context = {
                    name: extension.name,
                    options: extension.options,
                    storage: extension.storage
                };
                return {
                    tableRole: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$call$2d$or$2d$return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$get$2d$extension$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "tableRole", context))
                };
            },
            addNodeView () {
                const isMobile = this.options.services?.context?.isMobile;
                return ({ node, editor, getPos })=>new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$view$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableView"](node, editor, getPos, {
                        columnResizeHandleWidth: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESIZE_HANDLE_SIZE"],
                        rowResizeHandleHeight: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_RESIZE_HANDLE_SIZE"]
                    }, isMobile);
            },
            addCommands () {
                return {
                    setTableCellStylePreview: (preview)=>({ tr, dispatch })=>{
                            dispatch?.(tr.setMeta(TABLE_CELL_STYLE_PREVIEW_PLUGIN_KEY, preview ?? {
                                cellDecorations: []
                            }));
                            return true;
                        },
                    insertTable: (opts)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertTable"])(opts)(state, dispatch),
                    addColumnBefore: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addColumnBeforeWithBorders"])()(state, dispatch),
                    addColumnAfter: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addColumnAfterWithBorders"])()(state, dispatch),
                    addColumnAtIndex: (index)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addColumnAtIndex"])(index)(state, dispatch),
                    deleteColumn: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteColumnWithBorders"])()(state, dispatch),
                    addRowBefore: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRowBeforeWithBorders"])()(state, dispatch),
                    addRowAfter: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRowAfterWithBorders"])()(state, dispatch),
                    addRowAtIndex: (index)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRowAtIndex"])(index)(state, dispatch),
                    deleteRow: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteRowWithBorders"])()(state, dispatch),
                    deleteTable: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteTable"])(state, dispatch),
                    mergeCells: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeCellsWithBorders"])()(state, dispatch),
                    splitCell: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitCellWithBorders"])()(state, dispatch),
                    toggleHeaderColumn: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHeaderColumnCmd"])()(state, dispatch),
                    toggleHeaderRow: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHeaderRowCmd"])()(state, dispatch),
                    mergeOrSplit: ()=>({ state, dispatch })=>{
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeCellsWithBorders"])()(state, dispatch)) {
                                return true;
                            }
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitCellWithBorders"])()(state, dispatch);
                        },
                    setCellAttribute: (name, value)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCellAttribute"])(name, value)(state, dispatch),
                    updateCellAttribute: (name, value)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCellAttribute"])(name, value)(state, dispatch),
                    toggleTableAttribute: (name)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleTableAttribute"])(name)(state, dispatch),
                    setTableAltText: (text)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTableAltText"])(text)(state, dispatch),
                    goToNextCell: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goToNextCell"])(1)(state, dispatch),
                    goToPreviousCell: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goToNextCell"])(-1)(state, dispatch),
                    fixTables: ()=>({ state, dispatch })=>{
                            if (dispatch) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$fix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixTables"])(state);
                            }
                            return true;
                        },
                    setCellSelection: (pos)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCellSelection"])(pos)(state, dispatch),
                    selectColumnAtIndex: (index)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectColumnAtIndex"])(index)(state, dispatch),
                    selectColumn: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectColumnCmd"])()(state, dispatch),
                    selectRowAtIndex: (index)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectRowAtIndex"])(index)(state, dispatch),
                    selectRow: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectRowCmd"])()(state, dispatch),
                    selectRows: (fromRow, toRow, tablePos)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectRows"])(fromRow, toRow, tablePos)(state, dispatch),
                    selectColumns: (fromCol, toCol, tablePos)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectColumns"])(fromCol, toCol, tablePos)(state, dispatch),
                    deleteRowAtIndex: (index)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteRowAtIndex"])(index)(state, dispatch),
                    selectWholeTable: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectWholeTable"])()(state, dispatch),
                    setTableRowHeight: (height, pos, node)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTableRowHeight"])(height, pos, node)(state, dispatch),
                    distributeRows: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distributeRows"])()(state, dispatch),
                    distributeColumns: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distributeColumns"])()(state, dispatch),
                    setEditCell: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setEditCell"])()(state, dispatch),
                    clearCell: ()=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCell"])()(state, dispatch),
                    setCellBorderColor: (color)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$border$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCellBorderColor"])(color)(state, dispatch),
                    setOutsiderCellsBorderColor: (color)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$border$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOutsiderCellsBorderColor"])(color)(state, dispatch),
                    setCellBorderWidth: (width)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$border$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCellBorderWidth"])(width)(state, dispatch),
                    setOutsiderCellsBorderWidth: (width)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$border$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOutsiderCellsBorderWidth"])(width)(state, dispatch),
                    setCellBorderColorBySide: (side, color)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$border$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCellBorderColorBySide"])(side, color)(state, dispatch),
                    setCellBorderWidthBySide: (side, width)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$border$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCellBorderWidthBySide"])(side, width)(state, dispatch),
                    setInnerHorizontalCellsBorderColor: (color)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$border$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setInnerHorizontalCellsBorderColor"])(color)(state, dispatch),
                    setInnerHorizontalCellsBorderWidth: (width)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$border$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setInnerHorizontalCellsBorderWidth"])(width)(state, dispatch),
                    setInnerVerticalCellsBorderColor: (color)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$border$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setInnerVerticalCellsBorderColor"])(color)(state, dispatch),
                    setInnerVerticalCellsBorderWidth: (width)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$border$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setInnerVerticalCellsBorderWidth"])(width)(state, dispatch),
                    setCellSpacing: (spacing)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCellSpacing"])(spacing)(state, dispatch),
                    setCellPadding: (padding)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$cell$2d$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCellPadding"])(padding)(state, dispatch),
                    reorderRows: (from, to)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$reorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reorderRows"])(from, to)(state, dispatch),
                    reorderColumns: (from, to)=>({ state, dispatch })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$reorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reorderColumns"])(from, to)(state, dispatch),
                    moveColumns: (direction)=>({ state, dispatch, view })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$reorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveColumns"])(direction)(state, dispatch, view),
                    moveRows: (direction)=>({ state, dispatch, view })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$commands$2f$reorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveRows"])(direction)(state, dispatch, view)
                };
            },
            addKeyboardShortcuts () {
                const newLine = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$keyboard$2d$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeToggleEditMode"];
                const tiptapKeyboardShortcuts = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$utilities$2f$keyboard$2d$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyboardShortcuts"];
                const newLineShortcuts = [];
                this.options.services.shortcuts.shortcuts.forEach((shortcut)=>{
                    if (shortcut.shortcut.name === "NewLine") {
                        newLineShortcuts.push(shortcut);
                    }
                });
                newLineShortcuts.forEach((newLineShortcut)=>{
                    const modifier = newLineShortcut.keys.macOs.modifiers[0];
                    const key = newLineShortcut.keys.macOs.key;
                    const shortcutKey = modifier ? `${modifier}-${key}` : key;
                    tiptapKeyboardShortcuts[shortcutKey] = newLine;
                });
                return tiptapKeyboardShortcuts;
            }
        };
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-header-extension.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tableHeaderExtension",
    ()=>tableHeaderExtension
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/theme-color-token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$extensions$2f$create$2d$ricos$2d$extension$2f$create$2d$ricos$2d$node$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap-extensions/create-ricos-extension/create-ricos-node-extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/plugins/table-scss.js [app-client] (ecmascript)");
;
;
;
;
const tableHeaderExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$extensions$2f$create$2d$ricos$2d$extension$2f$create$2d$ricos$2d$node$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRicosNodeExtension"])({
    groups: [],
    type: "html-node",
    reconfigure: (config, _extensions, _props, settings)=>({
            ...config,
            addOptions: ()=>settings
        }),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_HEADER_CELL_TYPE"],
    createExtensionConfig () {
        return {
            name: this.name,
            tableRole: "header_cell",
            isolating: true,
            content: "block+",
            addAttributes: ()=>({
                    cellStyle: {
                        default: null,
                        parseHTML: (element)=>{
                            const cellStyle = element.getAttribute("cellstyle");
                            return cellStyle ? JSON.parse(cellStyle) : null;
                        },
                        renderHTML: (attributes)=>{
                            return attributes.cellStyle && {
                                cellstyle: JSON.stringify(attributes.cellStyle)
                            };
                        }
                    },
                    borderColors: {
                        default: null,
                        parseHTML: (element)=>{
                            const borderColors = element.getAttribute("bordercolors");
                            return borderColors ? JSON.parse(borderColors) : null;
                        },
                        renderHTML: (attributes)=>{
                            return attributes.borderColors && {
                                bordercolors: JSON.stringify(attributes.borderColors)
                            };
                        }
                    },
                    borderWidths: {
                        default: null,
                        parseHTML: (element)=>{
                            const borderWidths = element.getAttribute("borderwidths");
                            return borderWidths ? JSON.parse(borderWidths) : null;
                        },
                        renderHTML: (attributes)=>{
                            return attributes.borderWidths && {
                                borderwidths: JSON.stringify(attributes.borderWidths)
                            };
                        }
                    },
                    colspan: {
                        default: 1
                    },
                    rowspan: {
                        default: 1
                    },
                    colwidth: {
                        default: null,
                        parseHTML: (element)=>{
                            const colwidth = element.getAttribute("colwidth");
                            const value = colwidth ? [
                                parseInt(colwidth, 10)
                            ] : null;
                            return value;
                        }
                    },
                    verticalAlignment: {
                        default: "top",
                        parseHTML: ()=>null,
                        // Handled by cellStyle parseHTML above
                        renderHTML: (attributes)=>{
                            return attributes.cellStyle?.verticalAlignment && {
                                style: `vertical-align: ${attributes.cellStyle.verticalAlignment.toLowerCase()}`
                            };
                        }
                    },
                    backgroundColor: {
                        default: null,
                        parseHTML: ()=>null,
                        // Handled by cellStyle parseHTML above
                        renderHTML: (attributes)=>{
                            return attributes.cellStyle?.backgroundColor && {
                                style: `background-color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$theme$2d$color$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDocumentColorToCss"])(attributes.cellStyle.backgroundColor)}`
                            };
                        }
                    }
                }),
            parseHTML () {
                return [
                    {
                        tag: "th"
                    }
                ];
            },
            renderHTML ({ node, HTMLAttributes }) {
                return [
                    "th",
                    {
                        ...HTMLAttributes,
                        "data-node-id": node.attrs.id
                    },
                    [
                        "div",
                        {
                            class: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].borderTop
                        }
                    ],
                    [
                        "div",
                        {
                            class: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].borderBottom
                        }
                    ],
                    [
                        "div",
                        {
                            class: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].borderLeft
                        }
                    ],
                    [
                        "div",
                        {
                            class: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].borderRight
                        }
                    ],
                    [
                        "div",
                        {
                            class: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$plugins$2f$table$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cell
                        },
                        0
                    ]
                ];
            }
        };
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-row-extension.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tableRowExtension",
    ()=>tableRowExtension
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$extensions$2f$create$2d$ricos$2d$extension$2f$create$2d$ricos$2d$node$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap-extensions/create-ricos-extension/create-ricos-node-extension.js [app-client] (ecmascript)");
;
;
const tableRowExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$extensions$2f$create$2d$ricos$2d$extension$2f$create$2d$ricos$2d$node$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRicosNodeExtension"])({
    groups: [],
    type: "html-node",
    reconfigure: (config, _extensions, _props, settings)=>({
            ...config,
            addOptions: ()=>settings
        }),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_ROW_TYPE"],
    createExtensionConfig () {
        return {
            name: this.name,
            tableRole: "row",
            // It's not TableRowNodeChildrenPattern, because ProseMirror state has two types of cells for some reason :!?:(
            content: `(${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_CELL_TYPE"]} | ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_TABLE_HEADER_CELL_TYPE"]})*`,
            addAttributes: ()=>({
                    height: {
                        default: 47,
                        parseHTML: (element)=>element.style.height && parseInt(element.style.height),
                        renderHTML: (attributes)=>{
                            return {
                                style: `height: ${attributes.height}px`
                            };
                        }
                    }
                }),
            parseHTML () {
                return [
                    {
                        tag: "tr"
                    }
                ];
            },
            renderHTML ({ HTMLAttributes }) {
                return [
                    "tr",
                    HTMLAttributes,
                    0
                ];
            },
            addNodeView () {
                return ({ node, HTMLAttributes })=>{
                    const dom = document.createElement("tr");
                    Object.entries(HTMLAttributes).forEach(([key, value])=>{
                        if (value !== null && value !== void 0) {
                            dom.setAttribute(key, String(value));
                        }
                    });
                    return {
                        dom,
                        contentDOM: dom,
                        update: (updatedNode)=>{
                            if (updatedNode.type.name !== node.type.name) {
                                return false;
                            }
                            dom.style.height = `${updatedNode.attrs.height}px`;
                            return true;
                        },
                        ignoreMutation: (mutation)=>mutation.type === "attributes" && mutation.attributeName === "style" && mutation.target === dom
                    };
                };
            }
        };
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tiptap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tiptapExtensions",
    ()=>tiptapExtensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$cell$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-cell-extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$header$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-header-extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$row$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/table-row-extension.js [app-client] (ecmascript)");
;
;
;
;
const tiptapExtensions = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableExtension"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$row$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableRowExtension"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$header$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableHeaderExtension"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$table$2d$cell$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableCell"]
];
;
}),
]);

//# sourceMappingURL=0rv~_%40wix_ricos_dist_es_plugin-table_tiptap_0ot_462._.js.map