(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/resolve-cell-borders.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
;
;
const DEFAULT_COLOR = "var(--ricos-internal-table-border-color)";
const DEFAULT_WIDTH = 1;
const isTransparent = (color)=>!color || color === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPARENT_HEX_COLOR"];
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
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].fromGrid(gridInput);
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
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(tableNode);
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
    const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].get(tableNode);
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/table-borders-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableBordersProvider",
    ()=>TableBordersProvider,
    "useCellBorders",
    ()=>useCellBorders,
    "useTableBordersContext",
    ()=>useTableBordersContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/resolve-cell-borders.js [app-client] (ecmascript)");
;
;
const TableBordersContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const TableBordersProvider = ({ tableNode, isRTL, children })=>{
    const cellSpacing = tableNode.tableData?.cellSpacing ?? 0;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableBordersProvider.useMemo[value]": ()=>{
            let borders;
            try {
                borders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCellBorders"])(tableNode, {
                    drawDefaultGrid: true,
                    cellSpacing
                });
            } catch (e) {
                console.error("Failed to resolve table cell borders", e);
                borders = /* @__PURE__ */ new Map();
            }
            const borderPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBorderPadding"])(tableNode);
            return {
                borders,
                cellSpacing,
                isRTL,
                borderPadding
            };
        }
    }["TableBordersProvider.useMemo[value]"], [
        tableNode,
        cellSpacing,
        isRTL
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(TableBordersContext.Provider, {
        value
    }, children);
};
function useCellBorders(cellId) {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TableBordersContext);
    if (!context) {
        return null;
    }
    return context.borders.get(cellId) || null;
}
function useTableBordersContext() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TableBordersContext);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/statics/styles/cell-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>cell_default
]);
var cell_default = {
    "cell": "bjDRJ",
    "header": "LrCD2",
    "selected": "_0Pw-T",
    "editing": "_5XkvO",
    "singleSelection": "_4zcFe",
    "hideLastBlock": "VQZrl",
    "editorWrapper": "AGA2H",
    "viewerWrapper": "PTB0K",
    "hideFirstBlock": "nsZM-",
    "editor": "qOmV-",
    "edit": "_3dlXO",
    "view": "HSYQU",
    "editingToolbarWrapper": "LM6BG",
    "selectAll": "QVV9u",
    "disableSelection": "M-abP"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/viewer/table-cell.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>table_cell_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$viewer$2f$ricos$2d$node$2d$view$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/viewer/ricos-node-view-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolve$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/resolve-css-color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/resolve-cell-borders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$table$2d$borders$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/table-borders-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$cell$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/statics/styles/cell-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/tiptap/tablemap.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const CellBorderDivs = ({ cellId })=>{
    const borders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$table$2d$borders$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCellBorders"])(cellId);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$table$2d$borders$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTableBordersContext"])();
    if (!borders || !context) {
        return null;
    }
    const { isRTL } = context;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, borders.top && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            position: "absolute",
            top: -borders.top.width / 2,
            [isRTL ? "right" : "left"]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCornerOffset"])({
                thisZ: borders.top.zIndex,
                perpZ: borders.top.perpStartZ,
                parallelZ: borders.top.parallelStartZ,
                extAmount: borders.top.extendStart,
                isHorizontal: true,
                isStartCorner: true
            }),
            [isRTL ? "left" : "right"]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCornerOffset"])({
                thisZ: borders.top.zIndex,
                perpZ: borders.top.perpEndZ,
                parallelZ: borders.top.parallelEndZ,
                extAmount: borders.top.extendEnd,
                isHorizontal: true,
                isStartCorner: false
            }),
            height: borders.top.width,
            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolve$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCssColor"])(borders.top.color),
            zIndex: borders.top.zIndex,
            pointerEvents: "none"
        }
    }), borders.bottom && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            position: "absolute",
            bottom: -borders.bottom.width / 2,
            [isRTL ? "right" : "left"]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCornerOffset"])({
                thisZ: borders.bottom.zIndex,
                perpZ: borders.bottom.perpStartZ,
                parallelZ: borders.bottom.parallelStartZ,
                extAmount: borders.bottom.extendStart,
                isHorizontal: true,
                isStartCorner: true
            }),
            [isRTL ? "left" : "right"]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCornerOffset"])({
                thisZ: borders.bottom.zIndex,
                perpZ: borders.bottom.perpEndZ,
                parallelZ: borders.bottom.parallelEndZ,
                extAmount: borders.bottom.extendEnd,
                isHorizontal: true,
                isStartCorner: false
            }),
            height: borders.bottom.width,
            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolve$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCssColor"])(borders.bottom.color),
            zIndex: borders.bottom.zIndex,
            pointerEvents: "none"
        }
    }), borders.left && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            position: "absolute",
            top: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCornerOffset"])({
                thisZ: borders.left.zIndex,
                perpZ: borders.left.perpStartZ,
                parallelZ: borders.left.parallelStartZ,
                extAmount: borders.left.extendStart,
                isHorizontal: false,
                isStartCorner: true
            }),
            bottom: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCornerOffset"])({
                thisZ: borders.left.zIndex,
                perpZ: borders.left.perpEndZ,
                parallelZ: borders.left.parallelEndZ,
                extAmount: borders.left.extendEnd,
                isHorizontal: false,
                isStartCorner: false
            }),
            [isRTL ? "right" : "left"]: -borders.left.width / 2,
            width: borders.left.width,
            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolve$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCssColor"])(borders.left.color),
            zIndex: borders.left.zIndex,
            pointerEvents: "none"
        }
    }), borders.right && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            position: "absolute",
            top: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCornerOffset"])({
                thisZ: borders.right.zIndex,
                perpZ: borders.right.perpStartZ,
                parallelZ: borders.right.parallelStartZ,
                extAmount: borders.right.extendStart,
                isHorizontal: false,
                isStartCorner: true
            }),
            bottom: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCornerOffset"])({
                thisZ: borders.right.zIndex,
                perpZ: borders.right.perpEndZ,
                parallelZ: borders.right.parallelEndZ,
                extAmount: borders.right.extendEnd,
                isHorizontal: false,
                isStartCorner: false
            }),
            [isRTL ? "left" : "right"]: -borders.right.width / 2,
            width: borders.right.width,
            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolve$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCssColor"])(borders.right.color),
            zIndex: borders.right.zIndex,
            pointerEvents: "none"
        }
    }));
};
const TableCell = ({ node, nodeIndex, RicosNodesRenderer })=>{
    const { parentNode, parentIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$viewer$2f$ricos$2d$node$2d$view$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosNodeContext"]);
    const { cellStyle, colspan, rowspan } = node?.tableCellData || {};
    const visualPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableCell.useMemo[visualPosition]": ()=>{
            if (!parentNode || parentIndex === void 0) {
                return {
                    visualCol: 0,
                    visualRow: 0
                };
            }
            const rows = parentNode.nodes || [];
            const grid = rows.map({
                "TableCell.useMemo[visualPosition].grid": (row)=>(row.nodes || []).map({
                        "TableCell.useMemo[visualPosition].grid": (cell)=>({
                                colspan: cell.tableCellData?.colspan || 1,
                                rowspan: cell.tableCellData?.rowspan || 1
                            })
                    }["TableCell.useMemo[visualPosition].grid"])
            }["TableCell.useMemo[visualPosition].grid"]);
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$tiptap$2f$tablemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableMap"].fromGrid(grid);
            let cellIndex = 0;
            for(let r = 0; r < parentIndex; r++){
                cellIndex += grid[r].length;
            }
            cellIndex += nodeIndex;
            const placement = map.findCell(cellIndex);
            return {
                visualCol: placement.col,
                visualRow: placement.row
            };
        }
    }["TableCell.useMemo[visualPosition]"], [
        parentNode,
        parentIndex,
        nodeIndex,
        colspan
    ]);
    const isRowHeader = parentIndex === 0 && !!parentNode?.tableData?.rowHeader;
    const isColumnHeader = visualPosition.visualCol === 0 && !!parentNode?.tableData?.columnHeader;
    const isHeaderCell = isRowHeader || isColumnHeader;
    const Tag = isHeaderCell ? "th" : "td";
    const scope = isRowHeader ? "col" : isColumnHeader ? "row" : void 0;
    const style = {};
    cellStyle?.backgroundColor && (style.backgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolve$2d$css$2d$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCssColor"])(cellStyle.backgroundColor));
    cellStyle?.verticalAlignment && (style.verticalAlign = cellStyle.verticalAlignment.toLowerCase());
    const htmlAttrs = {};
    if (colspan && colspan > 1) {
        htmlAttrs.colSpan = colspan;
    }
    if (rowspan && rowspan > 1) {
        htmlAttrs.rowSpan = rowspan;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Tag, {
        "data-hook": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_PLUGIN_CELL"],
        "data-node-id": node.id,
        "data-visual-col": visualPosition.visualCol,
        "data-visual-row": visualPosition.visualRow,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$cell$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cell, isHeaderCell && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$cell$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].header),
        style,
        scope,
        ...htmlAttrs
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CellBorderDivs, {
        cellId: node.id
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$cell$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].editor, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$cell$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].view)
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$viewer$2f$ricos$2d$node$2d$view$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosNodeContextProvider"], {
        parentNode,
        parentIndex: nodeIndex
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RicosNodesRenderer, {
        nodes: node.nodes ?? [],
        shouldParagraphApplyTextStyle: true
    }))));
};
const TableCellRenderer = ({ node, ...props })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(TableCell, {
        key: node.id,
        node,
        ...props
    });
};
var table_cell_default = TableCellRenderer;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/viewer/table-row.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>table_row_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$viewer$2f$ricos$2d$node$2d$view$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/viewer/ricos-node-view-context.js [app-client] (ecmascript)");
;
;
const TableRow = ({ node, nodeIndex, RicosNodesRenderer })=>{
    const { parentNode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$viewer$2f$ricos$2d$node$2d$view$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosNodeContext"]);
    const rowIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableRow.useMemo[rowIndex]": ()=>{
            const idx = parentNode?.nodes?.findIndex({
                "TableRow.useMemo[rowIndex]": (row)=>row.id === node.id
            }["TableRow.useMemo[rowIndex]"]);
            return idx !== void 0 && idx >= 0 ? idx : nodeIndex;
        }
    }["TableRow.useMemo[rowIndex]"], [
        parentNode,
        node.id,
        nodeIndex
    ]);
    const style = {
        height: parentNode?.tableData?.dimensions?.rowsHeight?.[rowIndex] || "auto"
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("tr", {
        style
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$viewer$2f$ricos$2d$node$2d$view$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosNodeContextProvider"], {
        parentNode,
        parentIndex: rowIndex
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RicosNodesRenderer, {
        nodes: node.nodes ?? []
    })));
};
const TableRowRenderer = ({ node, ...props })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(TableRow, {
        key: node.id,
        node,
        ...props
    });
};
var table_row_default = TableRowRenderer;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
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
    FORMATTING: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.formatting`,
    VERTICAL_ALIGNMENT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.verticalAlignment`,
    INSERT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.insert`,
    TEXT_ALIGNMENT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.textAlignment`,
    BACKGROUND_COLOR: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.backgroundColor`,
    ROW_HEADER: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.rowHeader`,
    COLUMN_HEADER: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.columnHeader`,
    BORDER: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.border`,
    BORDER_WIDTH: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.borderWidth`,
    CONTEXT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.contextMenu`,
    MERGE_CELLS: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.mergeCells`,
    SPLIT_CELL: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.splitCell`,
    SPACING: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.spacing`,
    MOVE_COLUMN_LEFT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.moveColumnLeft`,
    MOVE_COLUMN_RIGHT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.moveColumnRight`,
    MOVE_ROW_UP: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.moveRowUp`,
    MOVE_ROW_DOWN: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.moveRowDown`
};
const TABLE_BUTTONS_MODALS_ID = {
    BORDER: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.border`,
    BORDER_WIDTH: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.borderWidth`,
    VERTICAL_ALIGNMENT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.verticalAlignment`,
    INSERT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.insert`,
    TEXT_ALIGNMENT: "TextAlignment.modal",
    CONTEXT: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.contextMenu`,
    SPACING: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE}.spacing`
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/defaults.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_MANUAL_MIN_WIDTH"] + (horizontalPadding - defaultHorizontalPadding);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/statics/styles/table-viewer-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>table_viewer_default
]);
var table_viewer_default = {
    "root": "_5iIa-",
    "viewMode": "Su-0f",
    "editMode": "FlsHW",
    "container": "_4FIAL",
    "tableViewport": "L9XDD",
    "cell": "_312aK"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/viewer/table.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>table_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$viewer$2f$ricos$2d$node$2d$view$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/viewer/ricos-node-view-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/resolve-cell-borders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$table$2d$borders$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/borders/table-borders-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$table$2d$viewer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/statics/styles/table-viewer-scss.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function calculateTableColumnCount(cells) {
    if (!cells || cells.length === 0) {
        return 0;
    }
    return cells.reduce((sum, cell)=>sum + (cell.tableCellData?.colspan || 1), 0);
}
function normalizeColumnWidths(colsMinWidths, colsRelativeWidths, paddingMinWidth) {
    const colsWithDefaults = colsRelativeWidths.map((originalWidth, i)=>{
        const minWidth = Math.max(colsMinWidths[i] || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_AUTO_MIN_WIDTH"], paddingMinWidth);
        const width = originalWidth < minWidth ? minWidth : originalWidth;
        return {
            width,
            minWidth
        };
    });
    const ratios = colsWithDefaults.map((c)=>c.width / c.minWidth);
    const smallestRatio = Math.min(...ratios);
    return colsWithDefaults.map(({ minWidth, width })=>({
            minWidth,
            width: width / smallestRatio
        }));
}
const TABLE_VERTICAL_PADDING = 16;
const TableSections = ({ hasRowHeader, node, nodeIndex, RicosNodesRenderer })=>{
    const rows = node.nodes ?? [];
    const headerRowHasRowspan = hasRowHeader && rows[0]?.nodes?.some((cell)=>(cell.tableCellData?.rowspan || 1) > 1);
    if (!hasRowHeader || headerRowHasRowspan || rows.length === 0) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("tbody", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$viewer$2f$ricos$2d$node$2d$view$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosNodeContextProvider"], {
            parentNode: node,
            parentIndex: nodeIndex
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RicosNodesRenderer, {
            nodes: rows
        })));
    }
    const headerRows = rows.slice(0, 1);
    const bodyRows = rows.slice(1);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("thead", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$viewer$2f$ricos$2d$node$2d$view$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosNodeContextProvider"], {
        parentNode: node,
        parentIndex: nodeIndex
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RicosNodesRenderer, {
        nodes: headerRows
    }))), bodyRows.length > 0 && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("tbody", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$viewer$2f$ricos$2d$node$2d$view$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosNodeContextProvider"], {
        parentNode: node,
        parentIndex: nodeIndex
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RicosNodesRenderer, {
        nodes: bodyRows
    }))));
};
const Table = ({ node, nodeIndex, RicosNodesRenderer, NodeViewContainer })=>{
    const borderPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Table.useMemo[borderPadding]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$resolve$2d$cell$2d$borders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBorderPadding"])(node)
    }["Table.useMemo[borderPadding]"], [
        node
    ]);
    const { languageDir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const isRTL = languageDir === "rtl";
    const { dimensions: { colsMinWidth = [], colsWidthRatio = [] } = {} } = node.tableData || {};
    const cellSpacing = node.tableData?.cellSpacing ?? 0;
    const cellPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizePadding"])(node.tableData?.cellPadding, [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_DEFAULTS"].cellPadding
    ]);
    const actualColumnCount = node.nodes ? Math.max(0, ...node.nodes.map((row)=>calculateTableColumnCount(row.nodes))) : 0;
    const paddingMinWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinColumnWidthForPadding"])(node.tableData?.cellPadding);
    const colStyles = normalizeColumnWidths(colsMinWidth, colsWidthRatio, paddingMinWidth);
    const columnsToRender = Array.from({
        length: actualColumnCount
    }, (_, index)=>{
        if (index < colStyles.length) {
            return colStyles[index];
        }
        return {
            minWidth: paddingMinWidth,
            width: paddingMinWidth
        };
    });
    const viewportStyle = {
        "--table-border-top": `${borderPadding.top}px`,
        "--table-border-bottom": `${borderPadding.bottom}px`,
        "--table-border-start": `${borderPadding.start}px`,
        "--table-border-end": `${borderPadding.end}px`,
        "--table-vertical-padding": `${TABLE_VERTICAL_PADDING}px`,
        ...cellPadding && cellPadding.length > 0 ? {
            "--ricos-internal-table-cell-padding-top": `${cellPadding[0]}px`,
            "--ricos-internal-table-cell-padding-right": `${cellPadding[1] ?? cellPadding[0]}px`,
            "--ricos-internal-table-cell-padding-bottom": `${cellPadding[2] ?? cellPadding[0]}px`,
            "--ricos-internal-table-cell-padding-left": `${cellPadding[3] ?? cellPadding[1] ?? cellPadding[0]}px`
        } : {},
        "--ricos-internal-table-gap": `${cellSpacing}px`
    };
    const hasRowHeader = !!node.tableData?.rowHeader;
    const altText = node.tableData?.altText;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(NodeViewContainer, {
        node,
        nodeIndex
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$borders$2f$table$2d$borders$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBordersProvider"], {
        tableNode: node,
        isRTL
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$table$2d$viewer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tableViewport,
        style: viewportStyle
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("table", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$table$2d$viewer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].container,
        "data-hook": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOT"],
        "aria-label": altText || void 0,
        style: {
            borderSpacing: "0",
            borderCollapse: "separate"
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("colgroup", null, columnsToRender.map((colStyle, index)=>{
        const width = index > 0 && cellSpacing > 0 ? colStyle.width + cellSpacing : colStyle.width;
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("col", {
            key: index,
            style: {
                width,
                minWidth: colStyle.minWidth
            }
        });
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(TableSections, {
        hasRowHeader,
        node,
        nodeIndex,
        RicosNodesRenderer
    })))));
};
const TableRenderer = ({ node, ...props })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$statics$2f$styles$2f$table$2d$viewer$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root,
        key: node.id
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Table, {
        node,
        ...props
    }));
};
var table_default = TableRenderer;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/viewer/node-view-renderers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nodeViewRenderers",
    ()=>nodeViewRenderers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$viewer$2f$table$2d$cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/viewer/table-cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$viewer$2f$table$2d$row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/viewer/table-row.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$viewer$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/viewer/table.js [app-client] (ecmascript)");
;
;
;
;
const nodeViewRenderers = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE]: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$viewer$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_ROW]: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$viewer$2f$table$2d$row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_CELL]: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$viewer$2f$table$2d$cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/viewer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pluginTable",
    ()=>pluginTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$viewer$2f$node$2d$view$2d$renderers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-table/viewer/node-view-renderers.js [app-client] (ecmascript)");
;
;
const pluginTable = (config = {})=>{
    return {
        config,
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_TYPE"],
        nodeViewRenderers: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$table$2f$viewer$2f$node$2d$view$2d$renderers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeViewRenderers"]
    };
};
;
}),
]);

//# sourceMappingURL=0rv~_%40wix_ricos_dist_es_plugin-table_0~h0q70._.js.map