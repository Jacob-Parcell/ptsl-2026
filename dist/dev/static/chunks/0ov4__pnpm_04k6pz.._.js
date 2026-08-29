(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/hachure-fill@0.5.2/node_modules/hachure-fill/bin/hachure.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hachureLines",
    ()=>hachureLines
]);
function rotatePoints(points, center, degrees) {
    if (points && points.length) {
        const [cx, cy] = center;
        const angle = Math.PI / 180 * degrees;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        for (const p of points){
            const [x, y] = p;
            p[0] = (x - cx) * cos - (y - cy) * sin + cx;
            p[1] = (x - cx) * sin + (y - cy) * cos + cy;
        }
    }
}
function rotateLines(lines, center, degrees) {
    const points = [];
    lines.forEach((line)=>points.push(...line));
    rotatePoints(points, center, degrees);
}
function areSamePoints(p1, p2) {
    return p1[0] === p2[0] && p1[1] === p2[1];
}
function hachureLines(polygons, hachureGap, hachureAngle, hachureStepOffset = 1) {
    const angle = hachureAngle;
    const gap = Math.max(hachureGap, 0.1);
    const polygonList = polygons[0] && polygons[0][0] && typeof polygons[0][0] === 'number' ? [
        polygons
    ] : polygons;
    const rotationCenter = [
        0,
        0
    ];
    if (angle) {
        for (const polygon of polygonList){
            rotatePoints(polygon, rotationCenter, angle);
        }
    }
    const lines = straightHachureLines(polygonList, gap, hachureStepOffset);
    if (angle) {
        for (const polygon of polygonList){
            rotatePoints(polygon, rotationCenter, -angle);
        }
        rotateLines(lines, rotationCenter, -angle);
    }
    return lines;
}
function straightHachureLines(polygons, gap, hachureStepOffset) {
    const vertexArray = [];
    for (const polygon of polygons){
        const vertices = [
            ...polygon
        ];
        if (!areSamePoints(vertices[0], vertices[vertices.length - 1])) {
            vertices.push([
                vertices[0][0],
                vertices[0][1]
            ]);
        }
        if (vertices.length > 2) {
            vertexArray.push(vertices);
        }
    }
    const lines = [];
    gap = Math.max(gap, 0.1);
    // Create sorted edges table
    const edges = [];
    for (const vertices of vertexArray){
        for(let i = 0; i < vertices.length - 1; i++){
            const p1 = vertices[i];
            const p2 = vertices[i + 1];
            if (p1[1] !== p2[1]) {
                const ymin = Math.min(p1[1], p2[1]);
                edges.push({
                    ymin,
                    ymax: Math.max(p1[1], p2[1]),
                    x: ymin === p1[1] ? p1[0] : p2[0],
                    islope: (p2[0] - p1[0]) / (p2[1] - p1[1])
                });
            }
        }
    }
    edges.sort((e1, e2)=>{
        if (e1.ymin < e2.ymin) {
            return -1;
        }
        if (e1.ymin > e2.ymin) {
            return 1;
        }
        if (e1.x < e2.x) {
            return -1;
        }
        if (e1.x > e2.x) {
            return 1;
        }
        if (e1.ymax === e2.ymax) {
            return 0;
        }
        return (e1.ymax - e2.ymax) / Math.abs(e1.ymax - e2.ymax);
    });
    if (!edges.length) {
        return lines;
    }
    // Start scanning
    let activeEdges = [];
    let y = edges[0].ymin;
    let iteration = 0;
    while(activeEdges.length || edges.length){
        if (edges.length) {
            let ix = -1;
            for(let i = 0; i < edges.length; i++){
                if (edges[i].ymin > y) {
                    break;
                }
                ix = i;
            }
            const removed = edges.splice(0, ix + 1);
            removed.forEach((edge)=>{
                activeEdges.push({
                    s: y,
                    edge
                });
            });
        }
        activeEdges = activeEdges.filter((ae)=>{
            if (ae.edge.ymax <= y) {
                return false;
            }
            return true;
        });
        activeEdges.sort((ae1, ae2)=>{
            if (ae1.edge.x === ae2.edge.x) {
                return 0;
            }
            return (ae1.edge.x - ae2.edge.x) / Math.abs(ae1.edge.x - ae2.edge.x);
        });
        // fill between the edges
        if (hachureStepOffset !== 1 || iteration % gap === 0) {
            if (activeEdges.length > 1) {
                for(let i = 0; i < activeEdges.length; i = i + 2){
                    const nexti = i + 1;
                    if (nexti >= activeEdges.length) {
                        break;
                    }
                    const ce = activeEdges[i].edge;
                    const ne = activeEdges[nexti].edge;
                    lines.push([
                        [
                            Math.round(ce.x),
                            y
                        ],
                        [
                            Math.round(ne.x),
                            y
                        ]
                    ]);
                }
            }
        }
        y += hachureStepOffset;
        activeEdges.forEach((ae)=>{
            ae.edge.x = ae.edge.x + hachureStepOffset * ae.edge.islope;
        });
        iteration++;
    }
    return lines;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/scan-line-hachure.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "polygonHachureLines",
    ()=>polygonHachureLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$hachure$2d$fill$40$0$2e$5$2e$2$2f$node_modules$2f$hachure$2d$fill$2f$bin$2f$hachure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/hachure-fill@0.5.2/node_modules/hachure-fill/bin/hachure.js [app-client] (ecmascript)");
;
function polygonHachureLines(polygonList, o) {
    var _a;
    const angle = o.hachureAngle + 90;
    let gap = o.hachureGap;
    if (gap < 0) {
        gap = o.strokeWidth * 4;
    }
    gap = Math.round(Math.max(gap, 0.1));
    let skipOffset = 1;
    if (o.roughness >= 1) {
        if ((((_a = o.randomizer) === null || _a === void 0 ? void 0 : _a.next()) || Math.random()) > 0.7) {
            skipOffset = gap;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$hachure$2d$fill$40$0$2e$5$2e$2$2f$node_modules$2f$hachure$2d$fill$2f$bin$2f$hachure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hachureLines"])(polygonList, gap, angle, skipOffset || 1);
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/hachure-filler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HachureFiller",
    ()=>HachureFiller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$scan$2d$line$2d$hachure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/scan-line-hachure.js [app-client] (ecmascript)");
;
class HachureFiller {
    constructor(helper){
        this.helper = helper;
    }
    fillPolygons(polygonList, o) {
        return this._fillPolygons(polygonList, o);
    }
    _fillPolygons(polygonList, o) {
        const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$scan$2d$line$2d$hachure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygonHachureLines"])(polygonList, o);
        const ops = this.renderLines(lines, o);
        return {
            type: 'fillSketch',
            ops
        };
    }
    renderLines(lines, o) {
        const ops = [];
        for (const line of lines){
            ops.push(...this.helper.doubleLineOps(line[0][0], line[0][1], line[1][0], line[1][1], o));
        }
        return ops;
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/geometry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lineLength",
    ()=>lineLength
]);
function lineLength(line) {
    const p1 = line[0];
    const p2 = line[1];
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/zigzag-filler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZigZagFiller",
    ()=>ZigZagFiller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$hachure$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/hachure-filler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$scan$2d$line$2d$hachure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/scan-line-hachure.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/geometry.js [app-client] (ecmascript)");
;
;
;
class ZigZagFiller extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$hachure$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HachureFiller"] {
    fillPolygons(polygonList, o) {
        let gap = o.hachureGap;
        if (gap < 0) {
            gap = o.strokeWidth * 4;
        }
        gap = Math.max(gap, 0.1);
        const o2 = Object.assign({}, o, {
            hachureGap: gap
        });
        const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$scan$2d$line$2d$hachure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygonHachureLines"])(polygonList, o2);
        const zigZagAngle = Math.PI / 180 * o.hachureAngle;
        const zigzagLines = [];
        const dgx = gap * 0.5 * Math.cos(zigZagAngle);
        const dgy = gap * 0.5 * Math.sin(zigZagAngle);
        for (const [p1, p2] of lines){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineLength"])([
                p1,
                p2
            ])) {
                zigzagLines.push([
                    [
                        p1[0] - dgx,
                        p1[1] + dgy
                    ],
                    [
                        ...p2
                    ]
                ], [
                    [
                        p1[0] + dgx,
                        p1[1] - dgy
                    ],
                    [
                        ...p2
                    ]
                ]);
            }
        }
        const ops = this.renderLines(zigzagLines, o);
        return {
            type: 'fillSketch',
            ops
        };
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/hatch-filler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HatchFiller",
    ()=>HatchFiller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$hachure$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/hachure-filler.js [app-client] (ecmascript)");
;
class HatchFiller extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$hachure$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HachureFiller"] {
    fillPolygons(polygonList, o) {
        const set = this._fillPolygons(polygonList, o);
        const o2 = Object.assign({}, o, {
            hachureAngle: o.hachureAngle + 90
        });
        const set2 = this._fillPolygons(polygonList, o2);
        set.ops = set.ops.concat(set2.ops);
        return set;
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/dot-filler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DotFiller",
    ()=>DotFiller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/geometry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$scan$2d$line$2d$hachure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/scan-line-hachure.js [app-client] (ecmascript)");
;
;
class DotFiller {
    constructor(helper){
        this.helper = helper;
    }
    fillPolygons(polygonList, o) {
        o = Object.assign({}, o, {
            hachureAngle: 0
        });
        const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$scan$2d$line$2d$hachure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygonHachureLines"])(polygonList, o);
        return this.dotsOnLines(lines, o);
    }
    dotsOnLines(lines, o) {
        const ops = [];
        let gap = o.hachureGap;
        if (gap < 0) {
            gap = o.strokeWidth * 4;
        }
        gap = Math.max(gap, 0.1);
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        const ro = gap / 4;
        for (const line of lines){
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineLength"])(line);
            const dl = length / gap;
            const count = Math.ceil(dl) - 1;
            const offset = length - count * gap;
            const x = (line[0][0] + line[1][0]) / 2 - gap / 4;
            const minY = Math.min(line[0][1], line[1][1]);
            for(let i = 0; i < count; i++){
                const y = minY + offset + i * gap;
                const cx = x - ro + Math.random() * 2 * ro;
                const cy = y - ro + Math.random() * 2 * ro;
                const el = this.helper.ellipse(cx, cy, fweight, fweight, o);
                ops.push(...el.ops);
            }
        }
        return {
            type: 'fillSketch',
            ops
        };
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/dashed-filler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashedFiller",
    ()=>DashedFiller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/geometry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$scan$2d$line$2d$hachure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/scan-line-hachure.js [app-client] (ecmascript)");
;
;
class DashedFiller {
    constructor(helper){
        this.helper = helper;
    }
    fillPolygons(polygonList, o) {
        const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$scan$2d$line$2d$hachure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygonHachureLines"])(polygonList, o);
        return {
            type: 'fillSketch',
            ops: this.dashedLine(lines, o)
        };
    }
    dashedLine(lines, o) {
        const offset = o.dashOffset < 0 ? o.hachureGap < 0 ? o.strokeWidth * 4 : o.hachureGap : o.dashOffset;
        const gap = o.dashGap < 0 ? o.hachureGap < 0 ? o.strokeWidth * 4 : o.hachureGap : o.dashGap;
        const ops = [];
        lines.forEach((line)=>{
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineLength"])(line);
            const count = Math.floor(length / (offset + gap));
            const startOffset = (length + gap - count * (offset + gap)) / 2;
            let p1 = line[0];
            let p2 = line[1];
            if (p1[0] > p2[0]) {
                p1 = line[1];
                p2 = line[0];
            }
            const alpha = Math.atan((p2[1] - p1[1]) / (p2[0] - p1[0]));
            for(let i = 0; i < count; i++){
                const lstart = i * (offset + gap);
                const lend = lstart + offset;
                const start = [
                    p1[0] + lstart * Math.cos(alpha) + startOffset * Math.cos(alpha),
                    p1[1] + lstart * Math.sin(alpha) + startOffset * Math.sin(alpha)
                ];
                const end = [
                    p1[0] + lend * Math.cos(alpha) + startOffset * Math.cos(alpha),
                    p1[1] + lend * Math.sin(alpha) + startOffset * Math.sin(alpha)
                ];
                ops.push(...this.helper.doubleLineOps(start[0], start[1], end[0], end[1], o));
            }
        });
        return ops;
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/zigzag-line-filler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZigZagLineFiller",
    ()=>ZigZagLineFiller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/geometry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$scan$2d$line$2d$hachure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/scan-line-hachure.js [app-client] (ecmascript)");
;
;
class ZigZagLineFiller {
    constructor(helper){
        this.helper = helper;
    }
    fillPolygons(polygonList, o) {
        const gap = o.hachureGap < 0 ? o.strokeWidth * 4 : o.hachureGap;
        const zo = o.zigzagOffset < 0 ? gap : o.zigzagOffset;
        o = Object.assign({}, o, {
            hachureGap: gap + zo
        });
        const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$scan$2d$line$2d$hachure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygonHachureLines"])(polygonList, o);
        return {
            type: 'fillSketch',
            ops: this.zigzagLines(lines, zo, o)
        };
    }
    zigzagLines(lines, zo, o) {
        const ops = [];
        lines.forEach((line)=>{
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineLength"])(line);
            const count = Math.round(length / (2 * zo));
            let p1 = line[0];
            let p2 = line[1];
            if (p1[0] > p2[0]) {
                p1 = line[1];
                p2 = line[0];
            }
            const alpha = Math.atan((p2[1] - p1[1]) / (p2[0] - p1[0]));
            for(let i = 0; i < count; i++){
                const lstart = i * 2 * zo;
                const lend = (i + 1) * 2 * zo;
                const dz = Math.sqrt(2 * Math.pow(zo, 2));
                const start = [
                    p1[0] + lstart * Math.cos(alpha),
                    p1[1] + lstart * Math.sin(alpha)
                ];
                const end = [
                    p1[0] + lend * Math.cos(alpha),
                    p1[1] + lend * Math.sin(alpha)
                ];
                const middle = [
                    start[0] + dz * Math.cos(alpha + Math.PI / 4),
                    start[1] + dz * Math.sin(alpha + Math.PI / 4)
                ];
                ops.push(...this.helper.doubleLineOps(start[0], start[1], middle[0], middle[1], o), ...this.helper.doubleLineOps(middle[0], middle[1], end[0], end[1], o));
            }
        });
        return ops;
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/filler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFiller",
    ()=>getFiller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$hachure$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/hachure-filler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$zigzag$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/zigzag-filler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$hatch$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/hatch-filler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$dot$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/dot-filler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$dashed$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/dashed-filler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$zigzag$2d$line$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/zigzag-line-filler.js [app-client] (ecmascript)");
;
;
;
;
;
;
const fillers = {};
function getFiller(o, helper) {
    let fillerName = o.fillStyle || 'hachure';
    if (!fillers[fillerName]) {
        switch(fillerName){
            case 'zigzag':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$zigzag$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZigZagFiller"](helper);
                }
                break;
            case 'cross-hatch':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$hatch$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HatchFiller"](helper);
                }
                break;
            case 'dots':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$dot$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotFiller"](helper);
                }
                break;
            case 'dashed':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$dashed$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashedFiller"](helper);
                }
                break;
            case 'zigzag-line':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$zigzag$2d$line$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZigZagLineFiller"](helper);
                }
                break;
            case 'hachure':
            default:
                fillerName = 'hachure';
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$hachure$2d$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HachureFiller"](helper);
                }
                break;
        }
    }
    return fillers[fillerName];
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/math.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Random",
    ()=>Random,
    "randomSeed",
    ()=>randomSeed
]);
function randomSeed() {
    return Math.floor(Math.random() * 2 ** 31);
}
class Random {
    constructor(seed){
        this.seed = seed;
    }
    next() {
        if (this.seed) {
            return (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31;
        } else {
            return Math.random();
        }
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/path-data-parser@0.1.0/node_modules/path-data-parser/lib/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/path-data-parser@0.1.0/node_modules/path-data-parser/lib/parser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parsePath",
    ()=>parsePath,
    "serialize",
    ()=>serialize
]);
const COMMAND = 0;
const NUMBER = 1;
const EOD = 2;
const PARAMS = {
    A: 7,
    a: 7,
    C: 6,
    c: 6,
    H: 1,
    h: 1,
    L: 2,
    l: 2,
    M: 2,
    m: 2,
    Q: 4,
    q: 4,
    S: 4,
    s: 4,
    T: 2,
    t: 2,
    V: 1,
    v: 1,
    Z: 0,
    z: 0
};
function tokenize(d) {
    const tokens = new Array();
    while(d !== ''){
        if (d.match(/^([ \t\r\n,]+)/)) {
            d = d.substr(RegExp.$1.length);
        } else if (d.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
            tokens[tokens.length] = {
                type: COMMAND,
                text: RegExp.$1
            };
            d = d.substr(RegExp.$1.length);
        } else if (d.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
            tokens[tokens.length] = {
                type: NUMBER,
                text: `${parseFloat(RegExp.$1)}`
            };
            d = d.substr(RegExp.$1.length);
        } else {
            return [];
        }
    }
    tokens[tokens.length] = {
        type: EOD,
        text: ''
    };
    return tokens;
}
function isType(token, type) {
    return token.type === type;
}
function parsePath(d) {
    const segments = [];
    const tokens = tokenize(d);
    let mode = 'BOD';
    let index = 0;
    let token = tokens[index];
    while(!isType(token, EOD)){
        let paramsCount = 0;
        const params = [];
        if (mode === 'BOD') {
            if (token.text === 'M' || token.text === 'm') {
                index++;
                paramsCount = PARAMS[token.text];
                mode = token.text;
            } else {
                return parsePath('M0,0' + d);
            }
        } else if (isType(token, NUMBER)) {
            paramsCount = PARAMS[mode];
        } else {
            index++;
            paramsCount = PARAMS[token.text];
            mode = token.text;
        }
        if (index + paramsCount < tokens.length) {
            for(let i = index; i < index + paramsCount; i++){
                const numbeToken = tokens[i];
                if (isType(numbeToken, NUMBER)) {
                    params[params.length] = +numbeToken.text;
                } else {
                    throw new Error('Param not a number: ' + mode + ',' + numbeToken.text);
                }
            }
            if (typeof PARAMS[mode] === 'number') {
                const segment = {
                    key: mode,
                    data: params
                };
                segments.push(segment);
                index += paramsCount;
                token = tokens[index];
                if (mode === 'M') mode = 'L';
                if (mode === 'm') mode = 'l';
            } else {
                throw new Error('Bad segment: ' + mode);
            }
        } else {
            throw new Error('Path data ended short');
        }
    }
    return segments;
}
function serialize(segments) {
    const tokens = [];
    for (const { key, data } of segments){
        tokens.push(key);
        switch(key){
            case 'C':
            case 'c':
                tokens.push(data[0], `${data[1]},`, data[2], `${data[3]},`, data[4], data[5]);
                break;
            case 'S':
            case 's':
            case 'Q':
            case 'q':
                tokens.push(data[0], `${data[1]},`, data[2], data[3]);
                break;
            default:
                tokens.push(...data);
                break;
        }
    }
    return tokens.join(' ');
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/path-data-parser@0.1.0/node_modules/path-data-parser/lib/normalize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Normalize path to include only M, L, C, and Z commands
__turbopack_context__.s([
    "normalize",
    ()=>normalize
]);
function normalize(segments) {
    const out = [];
    let lastType = '';
    let cx = 0, cy = 0;
    let subx = 0, suby = 0;
    let lcx = 0, lcy = 0;
    for (const { key, data } of segments){
        switch(key){
            case 'M':
                out.push({
                    key: 'M',
                    data: [
                        ...data
                    ]
                });
                [cx, cy] = data;
                [subx, suby] = data;
                break;
            case 'C':
                out.push({
                    key: 'C',
                    data: [
                        ...data
                    ]
                });
                cx = data[4];
                cy = data[5];
                lcx = data[2];
                lcy = data[3];
                break;
            case 'L':
                out.push({
                    key: 'L',
                    data: [
                        ...data
                    ]
                });
                [cx, cy] = data;
                break;
            case 'H':
                cx = data[0];
                out.push({
                    key: 'L',
                    data: [
                        cx,
                        cy
                    ]
                });
                break;
            case 'V':
                cy = data[0];
                out.push({
                    key: 'L',
                    data: [
                        cx,
                        cy
                    ]
                });
                break;
            case 'S':
                {
                    let cx1 = 0, cy1 = 0;
                    if (lastType === 'C' || lastType === 'S') {
                        cx1 = cx + (cx - lcx);
                        cy1 = cy + (cy - lcy);
                    } else {
                        cx1 = cx;
                        cy1 = cy;
                    }
                    out.push({
                        key: 'C',
                        data: [
                            cx1,
                            cy1,
                            ...data
                        ]
                    });
                    lcx = data[0];
                    lcy = data[1];
                    cx = data[2];
                    cy = data[3];
                    break;
                }
            case 'T':
                {
                    const [x, y] = data;
                    let x1 = 0, y1 = 0;
                    if (lastType === 'Q' || lastType === 'T') {
                        x1 = cx + (cx - lcx);
                        y1 = cy + (cy - lcy);
                    } else {
                        x1 = cx;
                        y1 = cy;
                    }
                    const cx1 = cx + 2 * (x1 - cx) / 3;
                    const cy1 = cy + 2 * (y1 - cy) / 3;
                    const cx2 = x + 2 * (x1 - x) / 3;
                    const cy2 = y + 2 * (y1 - y) / 3;
                    out.push({
                        key: 'C',
                        data: [
                            cx1,
                            cy1,
                            cx2,
                            cy2,
                            x,
                            y
                        ]
                    });
                    lcx = x1;
                    lcy = y1;
                    cx = x;
                    cy = y;
                    break;
                }
            case 'Q':
                {
                    const [x1, y1, x, y] = data;
                    const cx1 = cx + 2 * (x1 - cx) / 3;
                    const cy1 = cy + 2 * (y1 - cy) / 3;
                    const cx2 = x + 2 * (x1 - x) / 3;
                    const cy2 = y + 2 * (y1 - y) / 3;
                    out.push({
                        key: 'C',
                        data: [
                            cx1,
                            cy1,
                            cx2,
                            cy2,
                            x,
                            y
                        ]
                    });
                    lcx = x1;
                    lcy = y1;
                    cx = x;
                    cy = y;
                    break;
                }
            case 'A':
                {
                    const r1 = Math.abs(data[0]);
                    const r2 = Math.abs(data[1]);
                    const angle = data[2];
                    const largeArcFlag = data[3];
                    const sweepFlag = data[4];
                    const x = data[5];
                    const y = data[6];
                    if (r1 === 0 || r2 === 0) {
                        out.push({
                            key: 'C',
                            data: [
                                cx,
                                cy,
                                x,
                                y,
                                x,
                                y
                            ]
                        });
                        cx = x;
                        cy = y;
                    } else {
                        if (cx !== x || cy !== y) {
                            const curves = arcToCubicCurves(cx, cy, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
                            curves.forEach(function(curve) {
                                out.push({
                                    key: 'C',
                                    data: curve
                                });
                            });
                            cx = x;
                            cy = y;
                        }
                    }
                    break;
                }
            case 'Z':
                out.push({
                    key: 'Z',
                    data: []
                });
                cx = subx;
                cy = suby;
                break;
        }
        lastType = key;
    }
    return out;
}
function degToRad(degrees) {
    return Math.PI * degrees / 180;
}
function rotate(x, y, angleRad) {
    const X = x * Math.cos(angleRad) - y * Math.sin(angleRad);
    const Y = x * Math.sin(angleRad) + y * Math.cos(angleRad);
    return [
        X,
        Y
    ];
}
function arcToCubicCurves(x1, y1, x2, y2, r1, r2, angle, largeArcFlag, sweepFlag, recursive) {
    const angleRad = degToRad(angle);
    let params = [];
    let f1 = 0, f2 = 0, cx = 0, cy = 0;
    if (recursive) {
        [f1, f2, cx, cy] = recursive;
    } else {
        [x1, y1] = rotate(x1, y1, -angleRad);
        [x2, y2] = rotate(x2, y2, -angleRad);
        const x = (x1 - x2) / 2;
        const y = (y1 - y2) / 2;
        let h = x * x / (r1 * r1) + y * y / (r2 * r2);
        if (h > 1) {
            h = Math.sqrt(h);
            r1 = h * r1;
            r2 = h * r2;
        }
        const sign = largeArcFlag === sweepFlag ? -1 : 1;
        const r1Pow = r1 * r1;
        const r2Pow = r2 * r2;
        const left = r1Pow * r2Pow - r1Pow * y * y - r2Pow * x * x;
        const right = r1Pow * y * y + r2Pow * x * x;
        const k = sign * Math.sqrt(Math.abs(left / right));
        cx = k * r1 * y / r2 + (x1 + x2) / 2;
        cy = k * -r2 * x / r1 + (y1 + y2) / 2;
        f1 = Math.asin(parseFloat(((y1 - cy) / r2).toFixed(9)));
        f2 = Math.asin(parseFloat(((y2 - cy) / r2).toFixed(9)));
        if (x1 < cx) {
            f1 = Math.PI - f1;
        }
        if (x2 < cx) {
            f2 = Math.PI - f2;
        }
        if (f1 < 0) {
            f1 = Math.PI * 2 + f1;
        }
        if (f2 < 0) {
            f2 = Math.PI * 2 + f2;
        }
        if (sweepFlag && f1 > f2) {
            f1 = f1 - Math.PI * 2;
        }
        if (!sweepFlag && f2 > f1) {
            f2 = f2 - Math.PI * 2;
        }
    }
    let df = f2 - f1;
    if (Math.abs(df) > Math.PI * 120 / 180) {
        const f2old = f2;
        const x2old = x2;
        const y2old = y2;
        if (sweepFlag && f2 > f1) {
            f2 = f1 + Math.PI * 120 / 180 * 1;
        } else {
            f2 = f1 + Math.PI * 120 / 180 * -1;
        }
        x2 = cx + r1 * Math.cos(f2);
        y2 = cy + r2 * Math.sin(f2);
        params = arcToCubicCurves(x2, y2, x2old, y2old, r1, r2, angle, 0, sweepFlag, [
            f2,
            f2old,
            cx,
            cy
        ]);
    }
    df = f2 - f1;
    const c1 = Math.cos(f1);
    const s1 = Math.sin(f1);
    const c2 = Math.cos(f2);
    const s2 = Math.sin(f2);
    const t = Math.tan(df / 4);
    const hx = 4 / 3 * r1 * t;
    const hy = 4 / 3 * r2 * t;
    const m1 = [
        x1,
        y1
    ];
    const m2 = [
        x1 + hx * s1,
        y1 - hy * c1
    ];
    const m3 = [
        x2 + hx * s2,
        y2 - hy * c2
    ];
    const m4 = [
        x2,
        y2
    ];
    m2[0] = 2 * m1[0] - m2[0];
    m2[1] = 2 * m1[1] - m2[1];
    if (recursive) {
        return [
            m2,
            m3,
            m4
        ].concat(params);
    } else {
        params = [
            m2,
            m3,
            m4
        ].concat(params);
        const curves = [];
        for(let i = 0; i < params.length; i += 3){
            const r1 = rotate(params[i][0], params[i][1], angleRad);
            const r2 = rotate(params[i + 1][0], params[i + 1][1], angleRad);
            const r3 = rotate(params[i + 2][0], params[i + 2][1], angleRad);
            curves.push([
                r1[0],
                r1[1],
                r2[0],
                r2[1],
                r3[0],
                r3[1]
            ]);
        }
        return curves;
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/path-data-parser@0.1.0/node_modules/path-data-parser/lib/absolutize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Translate relative commands to absolute commands
__turbopack_context__.s([
    "absolutize",
    ()=>absolutize
]);
function absolutize(segments) {
    let cx = 0, cy = 0;
    let subx = 0, suby = 0;
    const out = [];
    for (const { key, data } of segments){
        switch(key){
            case 'M':
                out.push({
                    key: 'M',
                    data: [
                        ...data
                    ]
                });
                [cx, cy] = data;
                [subx, suby] = data;
                break;
            case 'm':
                cx += data[0];
                cy += data[1];
                out.push({
                    key: 'M',
                    data: [
                        cx,
                        cy
                    ]
                });
                subx = cx;
                suby = cy;
                break;
            case 'L':
                out.push({
                    key: 'L',
                    data: [
                        ...data
                    ]
                });
                [cx, cy] = data;
                break;
            case 'l':
                cx += data[0];
                cy += data[1];
                out.push({
                    key: 'L',
                    data: [
                        cx,
                        cy
                    ]
                });
                break;
            case 'C':
                out.push({
                    key: 'C',
                    data: [
                        ...data
                    ]
                });
                cx = data[4];
                cy = data[5];
                break;
            case 'c':
                {
                    const newdata = data.map((d, i)=>i % 2 ? d + cy : d + cx);
                    out.push({
                        key: 'C',
                        data: newdata
                    });
                    cx = newdata[4];
                    cy = newdata[5];
                    break;
                }
            case 'Q':
                out.push({
                    key: 'Q',
                    data: [
                        ...data
                    ]
                });
                cx = data[2];
                cy = data[3];
                break;
            case 'q':
                {
                    const newdata = data.map((d, i)=>i % 2 ? d + cy : d + cx);
                    out.push({
                        key: 'Q',
                        data: newdata
                    });
                    cx = newdata[2];
                    cy = newdata[3];
                    break;
                }
            case 'A':
                out.push({
                    key: 'A',
                    data: [
                        ...data
                    ]
                });
                cx = data[5];
                cy = data[6];
                break;
            case 'a':
                cx += data[5];
                cy += data[6];
                out.push({
                    key: 'A',
                    data: [
                        data[0],
                        data[1],
                        data[2],
                        data[3],
                        data[4],
                        cx,
                        cy
                    ]
                });
                break;
            case 'H':
                out.push({
                    key: 'H',
                    data: [
                        ...data
                    ]
                });
                cx = data[0];
                break;
            case 'h':
                cx += data[0];
                out.push({
                    key: 'H',
                    data: [
                        cx
                    ]
                });
                break;
            case 'V':
                out.push({
                    key: 'V',
                    data: [
                        ...data
                    ]
                });
                cy = data[0];
                break;
            case 'v':
                cy += data[0];
                out.push({
                    key: 'V',
                    data: [
                        cy
                    ]
                });
                break;
            case 'S':
                out.push({
                    key: 'S',
                    data: [
                        ...data
                    ]
                });
                cx = data[2];
                cy = data[3];
                break;
            case 's':
                {
                    const newdata = data.map((d, i)=>i % 2 ? d + cy : d + cx);
                    out.push({
                        key: 'S',
                        data: newdata
                    });
                    cx = newdata[2];
                    cy = newdata[3];
                    break;
                }
            case 'T':
                out.push({
                    key: 'T',
                    data: [
                        ...data
                    ]
                });
                cx = data[0];
                cy = data[1];
                break;
            case 't':
                cx += data[0];
                cy += data[1];
                out.push({
                    key: 'T',
                    data: [
                        cx,
                        cy
                    ]
                });
                break;
            case 'Z':
            case 'z':
                out.push({
                    key: 'Z',
                    data: []
                });
                cx = subx;
                cy = suby;
                break;
        }
    }
    return out;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/renderer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arc",
    ()=>arc,
    "curve",
    ()=>curve,
    "doubleLineFillOps",
    ()=>doubleLineFillOps,
    "ellipse",
    ()=>ellipse,
    "ellipseWithParams",
    ()=>ellipseWithParams,
    "generateEllipseParams",
    ()=>generateEllipseParams,
    "line",
    ()=>line,
    "linearPath",
    ()=>linearPath,
    "patternFillArc",
    ()=>patternFillArc,
    "patternFillPolygons",
    ()=>patternFillPolygons,
    "polygon",
    ()=>polygon,
    "randOffset",
    ()=>randOffset,
    "randOffsetWithRange",
    ()=>randOffsetWithRange,
    "rectangle",
    ()=>rectangle,
    "solidFillPolygon",
    ()=>solidFillPolygon,
    "svgPath",
    ()=>svgPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/fillers/filler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/roughjs@4.6.6/node_modules/roughjs/bin/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$path$2d$data$2d$parser$40$0$2e$1$2e$0$2f$node_modules$2f$path$2d$data$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/path-data-parser@0.1.0/node_modules/path-data-parser/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$path$2d$data$2d$parser$40$0$2e$1$2e$0$2f$node_modules$2f$path$2d$data$2d$parser$2f$lib$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/path-data-parser@0.1.0/node_modules/path-data-parser/lib/parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$path$2d$data$2d$parser$40$0$2e$1$2e$0$2f$node_modules$2f$path$2d$data$2d$parser$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/path-data-parser@0.1.0/node_modules/path-data-parser/lib/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$path$2d$data$2d$parser$40$0$2e$1$2e$0$2f$node_modules$2f$path$2d$data$2d$parser$2f$lib$2f$absolutize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/path-data-parser@0.1.0/node_modules/path-data-parser/lib/absolutize.js [app-client] (ecmascript)");
;
;
;
const helper = {
    randOffset,
    randOffsetWithRange,
    ellipse,
    doubleLineOps: doubleLineFillOps
};
function line(x1, y1, x2, y2, o) {
    return {
        type: 'path',
        ops: _doubleLine(x1, y1, x2, y2, o)
    };
}
function linearPath(points, close, o) {
    const len = (points || []).length;
    if (len > 2) {
        const ops = [];
        for(let i = 0; i < len - 1; i++){
            ops.push(..._doubleLine(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], o));
        }
        if (close) {
            ops.push(..._doubleLine(points[len - 1][0], points[len - 1][1], points[0][0], points[0][1], o));
        }
        return {
            type: 'path',
            ops
        };
    } else if (len === 2) {
        return line(points[0][0], points[0][1], points[1][0], points[1][1], o);
    }
    return {
        type: 'path',
        ops: []
    };
}
function polygon(points, o) {
    return linearPath(points, true, o);
}
function rectangle(x, y, width, height, o) {
    const points = [
        [
            x,
            y
        ],
        [
            x + width,
            y
        ],
        [
            x + width,
            y + height
        ],
        [
            x,
            y + height
        ]
    ];
    return polygon(points, o);
}
function curve(inputPoints, o) {
    if (inputPoints.length) {
        const p1 = inputPoints[0];
        const pointsList = typeof p1[0] === 'number' ? [
            inputPoints
        ] : inputPoints;
        const o1 = _curveWithOffset(pointsList[0], 1 * (1 + o.roughness * 0.2), o);
        const o2 = o.disableMultiStroke ? [] : _curveWithOffset(pointsList[0], 1.5 * (1 + o.roughness * 0.22), cloneOptionsAlterSeed(o));
        for(let i = 1; i < pointsList.length; i++){
            const points = pointsList[i];
            if (points.length) {
                const underlay = _curveWithOffset(points, 1 * (1 + o.roughness * 0.2), o);
                const overlay = o.disableMultiStroke ? [] : _curveWithOffset(points, 1.5 * (1 + o.roughness * 0.22), cloneOptionsAlterSeed(o));
                for (const item of underlay){
                    if (item.op !== 'move') {
                        o1.push(item);
                    }
                }
                for (const item of overlay){
                    if (item.op !== 'move') {
                        o2.push(item);
                    }
                }
            }
        }
        return {
            type: 'path',
            ops: o1.concat(o2)
        };
    }
    return {
        type: 'path',
        ops: []
    };
}
function ellipse(x, y, width, height, o) {
    const params = generateEllipseParams(width, height, o);
    return ellipseWithParams(x, y, o, params).opset;
}
function generateEllipseParams(width, height, o) {
    const psq = Math.sqrt(Math.PI * 2 * Math.sqrt((Math.pow(width / 2, 2) + Math.pow(height / 2, 2)) / 2));
    const stepCount = Math.ceil(Math.max(o.curveStepCount, o.curveStepCount / Math.sqrt(200) * psq));
    const increment = Math.PI * 2 / stepCount;
    let rx = Math.abs(width / 2);
    let ry = Math.abs(height / 2);
    const curveFitRandomness = 1 - o.curveFitting;
    rx += _offsetOpt(rx * curveFitRandomness, o);
    ry += _offsetOpt(ry * curveFitRandomness, o);
    return {
        increment,
        rx,
        ry
    };
}
function ellipseWithParams(x, y, o, ellipseParams) {
    const [ap1, cp1] = _computeEllipsePoints(ellipseParams.increment, x, y, ellipseParams.rx, ellipseParams.ry, 1, ellipseParams.increment * _offset(0.1, _offset(0.4, 1, o), o), o);
    let o1 = _curve(ap1, null, o);
    if (!o.disableMultiStroke && o.roughness !== 0) {
        const [ap2] = _computeEllipsePoints(ellipseParams.increment, x, y, ellipseParams.rx, ellipseParams.ry, 1.5, 0, o);
        const o2 = _curve(ap2, null, o);
        o1 = o1.concat(o2);
    }
    return {
        estimatedPoints: cp1,
        opset: {
            type: 'path',
            ops: o1
        }
    };
}
function arc(x, y, width, height, start, stop, closed, roughClosure, o) {
    const cx = x;
    const cy = y;
    let rx = Math.abs(width / 2);
    let ry = Math.abs(height / 2);
    rx += _offsetOpt(rx * 0.01, o);
    ry += _offsetOpt(ry * 0.01, o);
    let strt = start;
    let stp = stop;
    while(strt < 0){
        strt += Math.PI * 2;
        stp += Math.PI * 2;
    }
    if (stp - strt > Math.PI * 2) {
        strt = 0;
        stp = Math.PI * 2;
    }
    const ellipseInc = Math.PI * 2 / o.curveStepCount;
    const arcInc = Math.min(ellipseInc / 2, (stp - strt) / 2);
    const ops = _arc(arcInc, cx, cy, rx, ry, strt, stp, 1, o);
    if (!o.disableMultiStroke) {
        const o2 = _arc(arcInc, cx, cy, rx, ry, strt, stp, 1.5, o);
        ops.push(...o2);
    }
    if (closed) {
        if (roughClosure) {
            ops.push(..._doubleLine(cx, cy, cx + rx * Math.cos(strt), cy + ry * Math.sin(strt), o), ..._doubleLine(cx, cy, cx + rx * Math.cos(stp), cy + ry * Math.sin(stp), o));
        } else {
            ops.push({
                op: 'lineTo',
                data: [
                    cx,
                    cy
                ]
            }, {
                op: 'lineTo',
                data: [
                    cx + rx * Math.cos(strt),
                    cy + ry * Math.sin(strt)
                ]
            });
        }
    }
    return {
        type: 'path',
        ops
    };
}
function svgPath(path, o) {
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$path$2d$data$2d$parser$40$0$2e$1$2e$0$2f$node_modules$2f$path$2d$data$2d$parser$2f$lib$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$path$2d$data$2d$parser$40$0$2e$1$2e$0$2f$node_modules$2f$path$2d$data$2d$parser$2f$lib$2f$absolutize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["absolutize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$path$2d$data$2d$parser$40$0$2e$1$2e$0$2f$node_modules$2f$path$2d$data$2d$parser$2f$lib$2f$parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePath"])(path)));
    const ops = [];
    let first = [
        0,
        0
    ];
    let current = [
        0,
        0
    ];
    for (const { key, data } of segments){
        switch(key){
            case 'M':
                {
                    current = [
                        data[0],
                        data[1]
                    ];
                    first = [
                        data[0],
                        data[1]
                    ];
                    break;
                }
            case 'L':
                ops.push(..._doubleLine(current[0], current[1], data[0], data[1], o));
                current = [
                    data[0],
                    data[1]
                ];
                break;
            case 'C':
                {
                    const [x1, y1, x2, y2, x, y] = data;
                    ops.push(..._bezierTo(x1, y1, x2, y2, x, y, current, o));
                    current = [
                        x,
                        y
                    ];
                    break;
                }
            case 'Z':
                ops.push(..._doubleLine(current[0], current[1], first[0], first[1], o));
                current = [
                    first[0],
                    first[1]
                ];
                break;
        }
    }
    return {
        type: 'path',
        ops
    };
}
function solidFillPolygon(polygonList, o) {
    const ops = [];
    for (const points of polygonList){
        if (points.length) {
            const offset = o.maxRandomnessOffset || 0;
            const len = points.length;
            if (len > 2) {
                ops.push({
                    op: 'move',
                    data: [
                        points[0][0] + _offsetOpt(offset, o),
                        points[0][1] + _offsetOpt(offset, o)
                    ]
                });
                for(let i = 1; i < len; i++){
                    ops.push({
                        op: 'lineTo',
                        data: [
                            points[i][0] + _offsetOpt(offset, o),
                            points[i][1] + _offsetOpt(offset, o)
                        ]
                    });
                }
            }
        }
    }
    return {
        type: 'fillPath',
        ops
    };
}
function patternFillPolygons(polygonList, o) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$fillers$2f$filler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFiller"])(o, helper).fillPolygons(polygonList, o);
}
function patternFillArc(x, y, width, height, start, stop, o) {
    const cx = x;
    const cy = y;
    let rx = Math.abs(width / 2);
    let ry = Math.abs(height / 2);
    rx += _offsetOpt(rx * 0.01, o);
    ry += _offsetOpt(ry * 0.01, o);
    let strt = start;
    let stp = stop;
    while(strt < 0){
        strt += Math.PI * 2;
        stp += Math.PI * 2;
    }
    if (stp - strt > Math.PI * 2) {
        strt = 0;
        stp = Math.PI * 2;
    }
    const increment = (stp - strt) / o.curveStepCount;
    const points = [];
    for(let angle = strt; angle <= stp; angle = angle + increment){
        points.push([
            cx + rx * Math.cos(angle),
            cy + ry * Math.sin(angle)
        ]);
    }
    points.push([
        cx + rx * Math.cos(stp),
        cy + ry * Math.sin(stp)
    ]);
    points.push([
        cx,
        cy
    ]);
    return patternFillPolygons([
        points
    ], o);
}
function randOffset(x, o) {
    return _offsetOpt(x, o);
}
function randOffsetWithRange(min, max, o) {
    return _offset(min, max, o);
}
function doubleLineFillOps(x1, y1, x2, y2, o) {
    return _doubleLine(x1, y1, x2, y2, o, true);
}
// Private helpers
function cloneOptionsAlterSeed(ops) {
    const result = Object.assign({}, ops);
    result.randomizer = undefined;
    if (ops.seed) {
        result.seed = ops.seed + 1;
    }
    return result;
}
function random(ops) {
    if (!ops.randomizer) {
        ops.randomizer = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$roughjs$40$4$2e$6$2e$6$2f$node_modules$2f$roughjs$2f$bin$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Random"](ops.seed || 0);
    }
    return ops.randomizer.next();
}
function _offset(min, max, ops, roughnessGain = 1) {
    return ops.roughness * roughnessGain * (random(ops) * (max - min) + min);
}
function _offsetOpt(x, ops, roughnessGain = 1) {
    return _offset(-x, x, ops, roughnessGain);
}
function _doubleLine(x1, y1, x2, y2, o, filling = false) {
    const singleStroke = filling ? o.disableMultiStrokeFill : o.disableMultiStroke;
    const o1 = _line(x1, y1, x2, y2, o, true, false);
    if (singleStroke) {
        return o1;
    }
    const o2 = _line(x1, y1, x2, y2, o, true, true);
    return o1.concat(o2);
}
function _line(x1, y1, x2, y2, o, move, overlay) {
    const lengthSq = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
    const length = Math.sqrt(lengthSq);
    let roughnessGain = 1;
    if (length < 200) {
        roughnessGain = 1;
    } else if (length > 500) {
        roughnessGain = 0.4;
    } else {
        roughnessGain = -0.0016668 * length + 1.233334;
    }
    let offset = o.maxRandomnessOffset || 0;
    if (offset * offset * 100 > lengthSq) {
        offset = length / 10;
    }
    const halfOffset = offset / 2;
    const divergePoint = 0.2 + random(o) * 0.2;
    let midDispX = o.bowing * o.maxRandomnessOffset * (y2 - y1) / 200;
    let midDispY = o.bowing * o.maxRandomnessOffset * (x1 - x2) / 200;
    midDispX = _offsetOpt(midDispX, o, roughnessGain);
    midDispY = _offsetOpt(midDispY, o, roughnessGain);
    const ops = [];
    const randomHalf = ()=>_offsetOpt(halfOffset, o, roughnessGain);
    const randomFull = ()=>_offsetOpt(offset, o, roughnessGain);
    const preserveVertices = o.preserveVertices;
    if (move) {
        if (overlay) {
            ops.push({
                op: 'move',
                data: [
                    x1 + (preserveVertices ? 0 : randomHalf()),
                    y1 + (preserveVertices ? 0 : randomHalf())
                ]
            });
        } else {
            ops.push({
                op: 'move',
                data: [
                    x1 + (preserveVertices ? 0 : _offsetOpt(offset, o, roughnessGain)),
                    y1 + (preserveVertices ? 0 : _offsetOpt(offset, o, roughnessGain))
                ]
            });
        }
    }
    if (overlay) {
        ops.push({
            op: 'bcurveTo',
            data: [
                midDispX + x1 + (x2 - x1) * divergePoint + randomHalf(),
                midDispY + y1 + (y2 - y1) * divergePoint + randomHalf(),
                midDispX + x1 + 2 * (x2 - x1) * divergePoint + randomHalf(),
                midDispY + y1 + 2 * (y2 - y1) * divergePoint + randomHalf(),
                x2 + (preserveVertices ? 0 : randomHalf()),
                y2 + (preserveVertices ? 0 : randomHalf())
            ]
        });
    } else {
        ops.push({
            op: 'bcurveTo',
            data: [
                midDispX + x1 + (x2 - x1) * divergePoint + randomFull(),
                midDispY + y1 + (y2 - y1) * divergePoint + randomFull(),
                midDispX + x1 + 2 * (x2 - x1) * divergePoint + randomFull(),
                midDispY + y1 + 2 * (y2 - y1) * divergePoint + randomFull(),
                x2 + (preserveVertices ? 0 : randomFull()),
                y2 + (preserveVertices ? 0 : randomFull())
            ]
        });
    }
    return ops;
}
function _curveWithOffset(points, offset, o) {
    if (!points.length) {
        return [];
    }
    const ps = [];
    ps.push([
        points[0][0] + _offsetOpt(offset, o),
        points[0][1] + _offsetOpt(offset, o)
    ]);
    ps.push([
        points[0][0] + _offsetOpt(offset, o),
        points[0][1] + _offsetOpt(offset, o)
    ]);
    for(let i = 1; i < points.length; i++){
        ps.push([
            points[i][0] + _offsetOpt(offset, o),
            points[i][1] + _offsetOpt(offset, o)
        ]);
        if (i === points.length - 1) {
            ps.push([
                points[i][0] + _offsetOpt(offset, o),
                points[i][1] + _offsetOpt(offset, o)
            ]);
        }
    }
    return _curve(ps, null, o);
}
function _curve(points, closePoint, o) {
    const len = points.length;
    const ops = [];
    if (len > 3) {
        const b = [];
        const s = 1 - o.curveTightness;
        ops.push({
            op: 'move',
            data: [
                points[1][0],
                points[1][1]
            ]
        });
        for(let i = 1; i + 2 < len; i++){
            const cachedVertArray = points[i];
            b[0] = [
                cachedVertArray[0],
                cachedVertArray[1]
            ];
            b[1] = [
                cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6,
                cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6
            ];
            b[2] = [
                points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6,
                points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6
            ];
            b[3] = [
                points[i + 1][0],
                points[i + 1][1]
            ];
            ops.push({
                op: 'bcurveTo',
                data: [
                    b[1][0],
                    b[1][1],
                    b[2][0],
                    b[2][1],
                    b[3][0],
                    b[3][1]
                ]
            });
        }
        if (closePoint && closePoint.length === 2) {
            const ro = o.maxRandomnessOffset;
            ops.push({
                op: 'lineTo',
                data: [
                    closePoint[0] + _offsetOpt(ro, o),
                    closePoint[1] + _offsetOpt(ro, o)
                ]
            });
        }
    } else if (len === 3) {
        ops.push({
            op: 'move',
            data: [
                points[1][0],
                points[1][1]
            ]
        });
        ops.push({
            op: 'bcurveTo',
            data: [
                points[1][0],
                points[1][1],
                points[2][0],
                points[2][1],
                points[2][0],
                points[2][1]
            ]
        });
    } else if (len === 2) {
        ops.push(..._line(points[0][0], points[0][1], points[1][0], points[1][1], o, true, true));
    }
    return ops;
}
function _computeEllipsePoints(increment, cx, cy, rx, ry, offset, overlap, o) {
    const coreOnly = o.roughness === 0;
    const corePoints = [];
    const allPoints = [];
    if (coreOnly) {
        increment = increment / 4;
        allPoints.push([
            cx + rx * Math.cos(-increment),
            cy + ry * Math.sin(-increment)
        ]);
        for(let angle = 0; angle <= Math.PI * 2; angle = angle + increment){
            const p = [
                cx + rx * Math.cos(angle),
                cy + ry * Math.sin(angle)
            ];
            corePoints.push(p);
            allPoints.push(p);
        }
        allPoints.push([
            cx + rx * Math.cos(0),
            cy + ry * Math.sin(0)
        ]);
        allPoints.push([
            cx + rx * Math.cos(increment),
            cy + ry * Math.sin(increment)
        ]);
    } else {
        const radOffset = _offsetOpt(0.5, o) - Math.PI / 2;
        allPoints.push([
            _offsetOpt(offset, o) + cx + 0.9 * rx * Math.cos(radOffset - increment),
            _offsetOpt(offset, o) + cy + 0.9 * ry * Math.sin(radOffset - increment)
        ]);
        const endAngle = Math.PI * 2 + radOffset - 0.01;
        for(let angle = radOffset; angle < endAngle; angle = angle + increment){
            const p = [
                _offsetOpt(offset, o) + cx + rx * Math.cos(angle),
                _offsetOpt(offset, o) + cy + ry * Math.sin(angle)
            ];
            corePoints.push(p);
            allPoints.push(p);
        }
        allPoints.push([
            _offsetOpt(offset, o) + cx + rx * Math.cos(radOffset + Math.PI * 2 + overlap * 0.5),
            _offsetOpt(offset, o) + cy + ry * Math.sin(radOffset + Math.PI * 2 + overlap * 0.5)
        ]);
        allPoints.push([
            _offsetOpt(offset, o) + cx + 0.98 * rx * Math.cos(radOffset + overlap),
            _offsetOpt(offset, o) + cy + 0.98 * ry * Math.sin(radOffset + overlap)
        ]);
        allPoints.push([
            _offsetOpt(offset, o) + cx + 0.9 * rx * Math.cos(radOffset + overlap * 0.5),
            _offsetOpt(offset, o) + cy + 0.9 * ry * Math.sin(radOffset + overlap * 0.5)
        ]);
    }
    return [
        allPoints,
        corePoints
    ];
}
function _arc(increment, cx, cy, rx, ry, strt, stp, offset, o) {
    const radOffset = strt + _offsetOpt(0.1, o);
    const points = [];
    points.push([
        _offsetOpt(offset, o) + cx + 0.9 * rx * Math.cos(radOffset - increment),
        _offsetOpt(offset, o) + cy + 0.9 * ry * Math.sin(radOffset - increment)
    ]);
    for(let angle = radOffset; angle <= stp; angle = angle + increment){
        points.push([
            _offsetOpt(offset, o) + cx + rx * Math.cos(angle),
            _offsetOpt(offset, o) + cy + ry * Math.sin(angle)
        ]);
    }
    points.push([
        cx + rx * Math.cos(stp),
        cy + ry * Math.sin(stp)
    ]);
    points.push([
        cx + rx * Math.cos(stp),
        cy + ry * Math.sin(stp)
    ]);
    return _curve(points, null, o);
}
function _bezierTo(x1, y1, x2, y2, x, y, current, o) {
    const ops = [];
    const ros = [
        o.maxRandomnessOffset || 1,
        (o.maxRandomnessOffset || 1) + 0.3
    ];
    let f = [
        0,
        0
    ];
    const iterations = o.disableMultiStroke ? 1 : 2;
    const preserveVertices = o.preserveVertices;
    for(let i = 0; i < iterations; i++){
        if (i === 0) {
            ops.push({
                op: 'move',
                data: [
                    current[0],
                    current[1]
                ]
            });
        } else {
            ops.push({
                op: 'move',
                data: [
                    current[0] + (preserveVertices ? 0 : _offsetOpt(ros[0], o)),
                    current[1] + (preserveVertices ? 0 : _offsetOpt(ros[0], o))
                ]
            });
        }
        f = preserveVertices ? [
            x,
            y
        ] : [
            x + _offsetOpt(ros[i], o),
            y + _offsetOpt(ros[i], o)
        ];
        ops.push({
            op: 'bcurveTo',
            data: [
                x1 + _offsetOpt(ros[i], o),
                y1 + _offsetOpt(ros[i], o),
                x2 + _offsetOpt(ros[i], o),
                y2 + _offsetOpt(ros[i], o),
                f[0],
                f[1]
            ]
        });
    }
    return ops;
}
}),
]);

//# sourceMappingURL=0ov4__pnpm_04k6pz.._.js.map