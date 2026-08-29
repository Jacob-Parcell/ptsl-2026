(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_badges@1.0.52/node_modules/@wix/auto_sdk_members_badges/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SortOrder",
    ()=>SortOrder,
    "WebhookIdentityType",
    ()=>WebhookIdentityType,
    "assignBadge",
    ()=>assignBadge4,
    "createBadge",
    ()=>createBadge4,
    "deleteBadge",
    ()=>deleteBadge4,
    "getBadge",
    ()=>getBadge4,
    "getMemberCountsPerBadge",
    ()=>getMemberCountsPerBadge4,
    "listBadges",
    ()=>listBadges4,
    "listBadgesPerMember",
    ()=>listBadgesPerMember3,
    "listMembersByBadge",
    ()=>listMembersByBadge3,
    "onBadgeAssigned",
    ()=>onBadgeAssigned2,
    "onBadgeUnassigned",
    ()=>onBadgeUnassigned2,
    "unassignBadge",
    ()=>unassignBadge4,
    "updateBadge",
    ()=>updateBadge4,
    "updateBadgesDisplayOrder",
    ()=>updateBadgesDisplayOrder4
]);
// src/badges-v3-badge-badges.public.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-types@1.17.11/node_modules/@wix/sdk-types/build/browser/index.mjs [app-client] (ecmascript)");
// src/badges-v3-badge-badges.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
// src/badges-v3-badge-badges.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/event-definition-modules.js [app-client] (ecmascript)");
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
function resolveComWixpressBadgesV3BadgesServiceV3Url(opts) {
    const domainToMappings = {
        "www.wixapis.com": [
            {
                srcPath: "/members/v3/badges",
                destPath: "/v3/badges"
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/_api/members-badges-server/v3",
                destPath: "/v3"
            },
            {
                srcPath: "/_api/members/v3/badges",
                destPath: "/v3/badges"
            },
            {
                srcPath: "/_api/members-badges-server-test/v3",
                destPath: "/v3"
            },
            {
                srcPath: "/_api/members-badges-server-test/v3/badges/v1/items",
                destPath: "/v3/badges"
            }
        ],
        "www._base_domain_": [
            {
                srcPath: "/_api/members/v3/badges",
                destPath: "/v3/badges"
            }
        ],
        _: [
            {
                srcPath: "/_api/members/v3/badges",
                destPath: "/v3/badges"
            },
            {
                srcPath: "/badges/v3/badges",
                destPath: "/v3/badges"
            }
        ],
        "editor.wixapps.net": [
            {
                srcPath: "/_api/members/v3/badges",
                destPath: "/v3/badges"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/badges/v3/badges",
                destPath: "/v3/badges"
            },
            {
                srcPath: "/_api/members/v3/badges",
                destPath: "/v3/badges"
            }
        ],
        "editor._base_domain_": [
            {
                srcPath: "/_api/members/v3/badges",
                destPath: "/v3/badges"
            }
        ],
        "blocks._base_domain_": [
            {
                srcPath: "/_api/members/v3/badges",
                destPath: "/v3/badges"
            }
        ],
        "create.editorx": [
            {
                srcPath: "/_api/members/v3/badges",
                destPath: "/v3/badges"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_badges";
function createBadge(payload) {
    function __createBadge({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "badge.createdDate"
                    },
                    {
                        path: "badge.updatedDate"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.badges.v3.badge",
            method: "POST",
            methodFqn: "com.wixpress.badges.v3.BadgesServiceV3.CreateBadge",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressBadgesV3BadgesServiceV3Url({
                protoPath: "/v3/badges",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "badge.createdDate"
                            },
                            {
                                path: "badge.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __createBadge;
}
function updateBadge(payload) {
    function __updateBadge({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "badge.createdDate"
                    },
                    {
                        path: "badge.updatedDate"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.badges.v3.badge",
            method: "PATCH",
            methodFqn: "com.wixpress.badges.v3.BadgesServiceV3.UpdateBadge",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressBadgesV3BadgesServiceV3Url({
                protoPath: "/v3/badges/{badge.id}",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "badge.createdDate"
                            },
                            {
                                path: "badge.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __updateBadge;
}
function listBadges(payload) {
    function __listBadges({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v3.badge",
            method: "GET",
            methodFqn: "com.wixpress.badges.v3.BadgesServiceV3.ListBadges",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressBadgesV3BadgesServiceV3Url({
                protoPath: "/v3/badges",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "badges.createdDate"
                            },
                            {
                                path: "badges.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __listBadges;
}
function getBadge(payload) {
    function __getBadge({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v3.badge",
            method: "GET",
            methodFqn: "com.wixpress.badges.v3.BadgesServiceV3.GetBadge",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressBadgesV3BadgesServiceV3Url({
                protoPath: "/v3/badges/{id}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "badge.createdDate"
                            },
                            {
                                path: "badge.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __getBadge;
}
function deleteBadge(payload) {
    function __deleteBadge({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v3.badge",
            method: "DELETE",
            methodFqn: "com.wixpress.badges.v3.BadgesServiceV3.DeleteBadge",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressBadgesV3BadgesServiceV3Url({
                protoPath: "/v3/badges/{id}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __deleteBadge;
}
function assignBadge(payload) {
    function __assignBadge({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v3.badge",
            method: "POST",
            methodFqn: "com.wixpress.badges.v3.BadgesServiceV3.AssignBadge",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressBadgesV3BadgesServiceV3Url({
                protoPath: "/v3/badges/{id}/members",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __assignBadge;
}
function unassignBadge(payload) {
    function __unassignBadge({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v3.badge",
            method: "DELETE",
            methodFqn: "com.wixpress.badges.v3.BadgesServiceV3.UnassignBadge",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressBadgesV3BadgesServiceV3Url({
                protoPath: "/v3/badges/{id}/members",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __unassignBadge;
}
function listMembers(payload) {
    function __listMembers({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v3.badge",
            method: "GET",
            methodFqn: "com.wixpress.badges.v3.BadgesServiceV3.ListMembers",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressBadgesV3BadgesServiceV3Url({
                protoPath: "/v3/badges/{id}/members",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __listMembers;
}
function listMembersBadgeIds(payload) {
    function __listMembersBadgeIds({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v3.badge",
            method: "POST",
            methodFqn: "com.wixpress.badges.v3.BadgesServiceV3.ListMembersBadgeIds",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressBadgesV3BadgesServiceV3Url({
                protoPath: "/v3/badges/members",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __listMembersBadgeIds;
}
function getMemberCountsPerBadge(payload) {
    function __getMemberCountsPerBadge({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v3.badge",
            method: "GET",
            methodFqn: "com.wixpress.badges.v3.BadgesServiceV3.GetMemberCountsPerBadge",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressBadgesV3BadgesServiceV3Url({
                protoPath: "/v3/badges/members/count",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __getMemberCountsPerBadge;
}
function updateBadgesDisplayOrder(payload) {
    function __updateBadgesDisplayOrder({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v3.badge",
            method: "PATCH",
            methodFqn: "com.wixpress.badges.v3.BadgesServiceV3.UpdateBadgesDisplayOrder",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressBadgesV3BadgesServiceV3Url({
                protoPath: "/v3/badges/order",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "badges.createdDate"
                            },
                            {
                                path: "badges.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __updateBadgesDisplayOrder;
}
// src/badges-v3-badge-badges.universal.ts
var SortOrder = /* @__PURE__ */ ((SortOrder2)=>{
    SortOrder2["ASC"] = "ASC";
    SortOrder2["DESC"] = "DESC";
    return SortOrder2;
})(SortOrder || {});
var WebhookIdentityType = /* @__PURE__ */ ((WebhookIdentityType2)=>{
    WebhookIdentityType2["UNKNOWN"] = "UNKNOWN";
    WebhookIdentityType2["ANONYMOUS_VISITOR"] = "ANONYMOUS_VISITOR";
    WebhookIdentityType2["MEMBER"] = "MEMBER";
    WebhookIdentityType2["WIX_USER"] = "WIX_USER";
    WebhookIdentityType2["APP"] = "APP";
    return WebhookIdentityType2;
})(WebhookIdentityType || {});
async function createBadge2(badge) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        badge
    });
    const reqOpts = createBadge(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.badge;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                badge: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "badge"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function updateBadge2(_id, badge) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        badge: {
            ...badge,
            id: _id
        }
    });
    const reqOpts = updateBadge(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.badge;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {
                badge: "$[1]"
            },
            explicitPathsToArguments: {
                "badge.id": "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "badge"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function listBadges2(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        paging: options?.paging
    });
    const reqOpts = listBadges(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                paging: "$[0].paging"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getBadge2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    });
    const reqOpts = getBadge(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.badge;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function deleteBadge2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    });
    const reqOpts = deleteBadge(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function assignBadge2(_id, memberIds) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id,
        memberIds
    });
    const reqOpts = assignBadge(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]",
                memberIds: "$[1]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "memberIds"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function unassignBadge2(_id, memberIds) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id,
        memberIds
    });
    const reqOpts = unassignBadge(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]",
                memberIds: "$[1]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "memberIds"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function listMembersByBadge(_id, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id,
        paging: options?.paging
    });
    const reqOpts = listMembers(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]",
                paging: "$[1].paging"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function listBadgesPerMember(memberIds) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberIds
    });
    const reqOpts = listMembersBadgeIds(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberIds: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberIds"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getMemberCountsPerBadge2() {
    const { httpClient, sideEffects } = arguments[0];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({});
    const reqOpts = getMemberCountsPerBadge(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {},
            singleArgumentUnchanged: false
        }, []);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function updateBadgesDisplayOrder2(badgeIds) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        badgeIds
    });
    const reqOpts = updateBadgesDisplayOrder(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                badgeIds: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "badgeIds"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/badges-v3-badge-badges.public.ts
function createBadge3(httpClient) {
    return (badge)=>createBadge2(badge, // @ts-ignore
        {
            httpClient
        });
}
function updateBadge3(httpClient) {
    return (_id, badge)=>updateBadge2(_id, badge, // @ts-ignore
        {
            httpClient
        });
}
function listBadges3(httpClient) {
    return (options)=>listBadges2(options, // @ts-ignore
        {
            httpClient
        });
}
function getBadge3(httpClient) {
    return (_id)=>getBadge2(_id, // @ts-ignore
        {
            httpClient
        });
}
function deleteBadge3(httpClient) {
    return (_id)=>deleteBadge2(_id, // @ts-ignore
        {
            httpClient
        });
}
function assignBadge3(httpClient) {
    return (_id, memberIds)=>assignBadge2(_id, memberIds, // @ts-ignore
        {
            httpClient
        });
}
function unassignBadge3(httpClient) {
    return (_id, memberIds)=>unassignBadge2(_id, memberIds, // @ts-ignore
        {
            httpClient
        });
}
function listMembersByBadge2(httpClient) {
    return (_id, options)=>listMembersByBadge(_id, options, // @ts-ignore
        {
            httpClient
        });
}
function listBadgesPerMember2(httpClient) {
    return (memberIds)=>listBadgesPerMember(memberIds, // @ts-ignore
        {
            httpClient
        });
}
function getMemberCountsPerBadge3(httpClient) {
    return ()=>getMemberCountsPerBadge2(// @ts-ignore
        {
            httpClient
        });
}
function updateBadgesDisplayOrder3(httpClient) {
    return (badgeIds)=>updateBadgesDisplayOrder2(badgeIds, // @ts-ignore
        {
            httpClient
        });
}
var onBadgeAssigned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.badges.v3.badge_badge_assigned", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
var onBadgeUnassigned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.badges.v3.badge_badge_unassigned", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
;
;
var createBadge4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(createBadge3);
var updateBadge4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(updateBadge3);
var listBadges4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listBadges3);
var getBadge4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getBadge3);
var deleteBadge4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteBadge3);
var assignBadge4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(assignBadge3);
var unassignBadge4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(unassignBadge3);
var listMembersByBadge3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listMembersByBadge2);
var listBadgesPerMember3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listBadgesPerMember2);
var getMemberCountsPerBadge4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getMemberCountsPerBadge3);
var updateBadgesDisplayOrder4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(updateBadgesDisplayOrder3);
var onBadgeAssigned2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onBadgeAssigned);
var onBadgeUnassigned2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onBadgeUnassigned);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/image.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transformRESTImageToSDKImage",
    ()=>transformRESTImageToSDKImage,
    "transformSDKImageToRESTImage",
    ()=>transformSDKImageToRESTImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/constants.js [app-client] (ecmascript)");
;
;
function transformSDKImageToRESTImage(val) {
    if (!val) {
        return;
    }
    const alignedImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alignIfLegacy"])(val, 'image');
    const { protocol, hash, pathname } = new URL(alignedImage);
    const params = new URLSearchParams(hash.replace('#', ''));
    const height = params.get('originHeight');
    const width = params.get('originWidth');
    const [id, filenameOrAltText] = pathname.replace(`image://v1/`, '').split('/');
    const decodedFilenameOrAltText = decodeURIComponent(filenameOrAltText);
    if (protocol === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WIX_PROTOCOL"]) {
        const res = {
            id,
            height: Number(height),
            width: Number(width)
        };
        if (!decodedFilenameOrAltText) {
            return res;
        }
        return {
            ...res,
            altText: decodedFilenameOrAltText,
            filename: decodedFilenameOrAltText,
            url: val
        };
    }
    return {
        url: val
    };
}
function transformRESTImageToSDKImage(payload) {
    if (!payload) {
        return;
    }
    let fileNameOrAltText = '';
    if (payload.filename || payload.altText) {
        fileNameOrAltText = `/${encodeURIComponent(payload.filename || payload.altText)}`;
    }
    return payload.id ? `wix:image://v1/${payload.id}${fileNameOrAltText}#originWidth=${payload.width}&originHeight=${payload.height}` : payload.url;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_badges-v-2@1.0.37/node_modules/@wix/auto_sdk_members_badges-v-2/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Position",
    ()=>Position,
    "SortOrder",
    ()=>SortOrder,
    "WebhookIdentityType",
    ()=>WebhookIdentityType,
    "createBadge",
    ()=>createBadge4,
    "deleteBadge",
    ()=>deleteBadge4,
    "getBadge",
    ()=>getBadge4,
    "moveBadge",
    ()=>moveBadge4,
    "onBadgeCreated",
    ()=>onBadgeCreated2,
    "onBadgeDeleted",
    ()=>onBadgeDeleted2,
    "onBadgeUpdated",
    ()=>onBadgeUpdated2,
    "queryBadges",
    ()=>queryBadges4,
    "updateBadge",
    ()=>updateBadge4,
    "updateBadgesDisplayOrder",
    ()=>updateBadgesDisplayOrder4,
    "utils",
    ()=>utils
]);
// src/badges-v4-badge-badges-v-2.public.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-types@1.17.11/node_modules/@wix/sdk-types/build/browser/index.mjs [app-client] (ecmascript)");
// src/badges-v4-badge-badges-v-2.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder.js [app-client] (ecmascript)");
// src/badges-v4-badge-badges-v-2.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$field$2d$mask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/field-mask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/event-definition-modules.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-method-router.js [app-client] (ecmascript)");
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
function resolveWixBadgesV4BadgesUrl(opts) {
    const domainToMappings = {
        "www.wixapis.com": [
            {
                srcPath: "/badges/v4/badges",
                destPath: "/v4/badges"
            },
            {
                srcPath: "/_api/badges/v4/badges",
                destPath: "/v4/badges"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/badges/v4/badges",
                destPath: "/v4/badges"
            },
            {
                srcPath: "/_api/badges/v4/badges",
                destPath: "/v4/badges"
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/_api/badges/v4/badges",
                destPath: "/v4/badges"
            }
        ],
        _: [
            {
                srcPath: "/badges/v4/badges",
                destPath: "/v4/badges"
            },
            {
                srcPath: "/_api/badges/v4/badges",
                destPath: "/v4/badges"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_badges-v-2";
function createBadge(payload) {
    function __createBadge({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "badge.createdDate"
                    },
                    {
                        path: "badge.updatedDate"
                    },
                    {
                        path: "badge.icon.urlExpirationDate"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.badges.v4.badge",
            method: "POST",
            methodFqn: "wix.badges.v4.Badges.CreateBadge",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesV4BadgesUrl({
                protoPath: "/v4/badges",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "badge.createdDate"
                            },
                            {
                                path: "badge.updatedDate"
                            },
                            {
                                path: "badge.icon.urlExpirationDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __createBadge;
}
function getBadge(payload) {
    function __getBadge({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v4.badge",
            method: "GET",
            methodFqn: "wix.badges.v4.Badges.GetBadge",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesV4BadgesUrl({
                protoPath: "/v4/badges/{badgeId}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "badge.createdDate"
                            },
                            {
                                path: "badge.updatedDate"
                            },
                            {
                                path: "badge.icon.urlExpirationDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __getBadge;
}
function queryBadges(payload) {
    function __queryBadges({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v4.badge",
            method: "POST",
            methodFqn: "wix.badges.v4.Badges.QueryBadges",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesV4BadgesUrl({
                protoPath: "/v4/badges/query",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "badges.createdDate"
                            },
                            {
                                path: "badges.updatedDate"
                            },
                            {
                                path: "badges.icon.urlExpirationDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __queryBadges;
}
function updateBadge(payload) {
    function __updateBadge({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$field$2d$mask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKFieldMaskToRESTFieldMask"],
                paths: [
                    {
                        path: "fieldMask"
                    }
                ]
            },
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "badge.createdDate"
                    },
                    {
                        path: "badge.updatedDate"
                    },
                    {
                        path: "badge.icon.urlExpirationDate"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.badges.v4.badge",
            method: "PATCH",
            methodFqn: "wix.badges.v4.Badges.UpdateBadge",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesV4BadgesUrl({
                protoPath: "/v4/badges/{badge.id}",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "badge.createdDate"
                            },
                            {
                                path: "badge.updatedDate"
                            },
                            {
                                path: "badge.icon.urlExpirationDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __updateBadge;
}
function deleteBadge(payload) {
    function __deleteBadge({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v4.badge",
            method: "DELETE",
            methodFqn: "wix.badges.v4.Badges.DeleteBadge",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesV4BadgesUrl({
                protoPath: "/v4/badges/{badgeId}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __deleteBadge;
}
function updateBadgesDisplayOrder(payload) {
    function __updateBadgesDisplayOrder({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v4.badge",
            method: "POST",
            methodFqn: "wix.badges.v4.Badges.UpdateBadgesDisplayOrder",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesV4BadgesUrl({
                protoPath: "/v4/badges/order",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "badges.createdDate"
                            },
                            {
                                path: "badges.updatedDate"
                            },
                            {
                                path: "badges.icon.urlExpirationDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __updateBadgesDisplayOrder;
}
function moveBadge(payload) {
    function __moveBadge({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v4.badge",
            method: "POST",
            methodFqn: "wix.badges.v4.Badges.MoveBadge",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesV4BadgesUrl({
                protoPath: "/v4/badges/{badgeId}/move",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __moveBadge;
}
;
;
;
;
var SortOrder = /* @__PURE__ */ ((SortOrder2)=>{
    SortOrder2["ASC"] = "ASC";
    SortOrder2["DESC"] = "DESC";
    return SortOrder2;
})(SortOrder || {});
var Position = /* @__PURE__ */ ((Position2)=>{
    Position2["LAST"] = "LAST";
    Position2["FIRST"] = "FIRST";
    Position2["AFTER"] = "AFTER";
    return Position2;
})(Position || {});
var WebhookIdentityType = /* @__PURE__ */ ((WebhookIdentityType2)=>{
    WebhookIdentityType2["UNKNOWN"] = "UNKNOWN";
    WebhookIdentityType2["ANONYMOUS_VISITOR"] = "ANONYMOUS_VISITOR";
    WebhookIdentityType2["MEMBER"] = "MEMBER";
    WebhookIdentityType2["WIX_USER"] = "WIX_USER";
    WebhookIdentityType2["APP"] = "APP";
    return WebhookIdentityType2;
})(WebhookIdentityType || {});
async function createBadge2(badge) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        badge
    }), [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKImageToRESTImage"],
            paths: [
                {
                    path: "badge.icon"
                }
            ]
        }
    ]);
    const reqOpts = createBadge(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTImageToSDKImage"],
                paths: [
                    {
                        path: "badge.icon"
                    }
                ]
            }
        ]))?.badge;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                badge: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "badge"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getBadge2(badgeId) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        badgeId
    });
    const reqOpts = getBadge(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTImageToSDKImage"],
                paths: [
                    {
                        path: "badge.icon"
                    }
                ]
            }
        ]))?.badge;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                badgeId: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "badgeId"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
function queryBadges2() {
    const { httpClient, sideEffects } = arguments[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryBuilder"])({
        func: async (payload)=>{
            const reqOpts = queryBadges(payload);
            sideEffects?.onSiteCall?.();
            try {
                const result = await httpClient.request(reqOpts);
                sideEffects?.onSuccess?.(result);
                return result;
            } catch (err) {
                sideEffects?.onError?.(err);
                throw err;
            }
        },
        requestTransformer: (query)=>{
            const args = [
                query,
                {}
            ];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
                ...args?.[1],
                query: args?.[0]
            });
        },
        responseTransformer: ({ data })=>{
            const transformedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(data, [
                {
                    transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTImageToSDKImage"],
                    paths: [
                        {
                            path: "badges.icon"
                        }
                    ]
                }
            ]));
            return {
                items: transformedData?.badges,
                pagingMetadata: transformedData?.pagingMetadata
            };
        },
        errorTransformer: (err)=>{
            const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
                spreadPathsToArguments: {},
                explicitPathsToArguments: {
                    query: "$[0]"
                },
                singleArgumentUnchanged: false
            });
            throw transformedError;
        },
        pagingMethod: "OFFSET",
        transformationPaths: {}
    });
}
async function typedQueryBadges(query) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        query
    });
    const reqOpts = queryBadges(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTImageToSDKImage"],
                paths: [
                    {
                        path: "badges.icon"
                    }
                ]
            }
        ]));
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                query: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "query"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
var utils = {
    query: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryUtils"])()
};
async function updateBadge2(_id, badge) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        badge: {
            ...badge,
            id: _id
        }
    }), [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKImageToRESTImage"],
            paths: [
                {
                    path: "badge.icon"
                }
            ]
        }
    ]);
    const reqOpts = updateBadge(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTImageToSDKImage"],
                paths: [
                    {
                        path: "badge.icon"
                    }
                ]
            }
        ]))?.badge;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {
                badge: "$[1]"
            },
            explicitPathsToArguments: {
                "badge.id": "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "badge"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function deleteBadge2(badgeId) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        badgeId
    });
    const reqOpts = deleteBadge(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                badgeId: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "badgeId"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function updateBadgesDisplayOrder2(ids) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        ids
    });
    const reqOpts = updateBadgesDisplayOrder(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTImageToSDKImage"],
                paths: [
                    {
                        path: "badges.icon"
                    }
                ]
            }
        ]));
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                ids: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "ids"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function moveBadge2(badgeId, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        badgeId,
        position: options?.position,
        moveAfterBadgeId: options?.moveAfterBadgeId
    });
    const reqOpts = moveBadge(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                badgeId: "$[0]",
                position: "$[1].position",
                moveAfterBadgeId: "$[1].moveAfterBadgeId"
            },
            singleArgumentUnchanged: false
        }, [
            "badgeId",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/badges-v4-badge-badges-v-2.public.ts
function createBadge3(httpClient) {
    return (badge)=>createBadge2(badge, // @ts-ignore
        {
            httpClient
        });
}
function getBadge3(httpClient) {
    return (badgeId)=>getBadge2(badgeId, // @ts-ignore
        {
            httpClient
        });
}
function queryBadges3(httpClient) {
    return ()=>queryBadges2(// @ts-ignore
        {
            httpClient
        });
}
function typedQueryBadges2(httpClient) {
    return (query)=>typedQueryBadges(query, // @ts-ignore
        {
            httpClient
        });
}
function updateBadge3(httpClient) {
    return (_id, badge)=>updateBadge2(_id, badge, // @ts-ignore
        {
            httpClient
        });
}
function deleteBadge3(httpClient) {
    return (badgeId)=>deleteBadge2(badgeId, // @ts-ignore
        {
            httpClient
        });
}
function updateBadgesDisplayOrder3(httpClient) {
    return (ids)=>updateBadgesDisplayOrder2(ids, // @ts-ignore
        {
            httpClient
        });
}
function moveBadge3(httpClient) {
    return (badgeId, options)=>moveBadge2(badgeId, options, // @ts-ignore
        {
            httpClient
        });
}
var onBadgeCreated = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.badges.v4.badge_created", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTImageToSDKImage"],
            paths: [
                {
                    path: "entity.icon"
                }
            ]
        },
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "entity.createdDate"
                },
                {
                    path: "entity.updatedDate"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
var onBadgeDeleted = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.badges.v4.badge_deleted", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTImageToSDKImage"],
            paths: [
                {
                    path: "undefined.icon"
                }
            ]
        },
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "undefined.createdDate"
                },
                {
                    path: "undefined.updatedDate"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
var onBadgeUpdated = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.badges.v4.badge_updated", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTImageToSDKImage"],
            paths: [
                {
                    path: "entity.icon"
                }
            ]
        },
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "entity.createdDate"
                },
                {
                    path: "entity.updatedDate"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
;
;
;
function customQueryBadges(httpClient) {
    const router = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryOverloadRouter"])({
        builderQueryFunction: ()=>queryBadges3(httpClient)(),
        typedQueryFunction: (query)=>typedQueryBadges2(httpClient)(query),
        hasOptionsParameter: false
    });
    function overloadedQuery(query) {
        return router(...arguments);
    }
    return overloadedQuery;
}
var createBadge4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(createBadge3);
var getBadge4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getBadge3);
var updateBadge4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(updateBadge3);
var deleteBadge4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteBadge3);
var updateBadgesDisplayOrder4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(updateBadgesDisplayOrder3);
var moveBadge4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(moveBadge3);
var queryBadges4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(customQueryBadges);
var onBadgeCreated2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onBadgeCreated);
var onBadgeDeleted2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onBadgeDeleted);
var onBadgeUpdated2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onBadgeUpdated);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_badge-assignments@1.0.30/node_modules/@wix/auto_sdk_members_badge-assignments/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SortOrder",
    ()=>SortOrder,
    "WebhookIdentityType",
    ()=>WebhookIdentityType,
    "bulkCreateBadgeAssignments",
    ()=>bulkCreateBadgeAssignments4,
    "bulkDeleteBadgeAssignments",
    ()=>bulkDeleteBadgeAssignments4,
    "bulkUpdateBadgeAssignmentTags",
    ()=>bulkUpdateBadgeAssignmentTags4,
    "bulkUpdateBadgeAssignmentTagsByFilter",
    ()=>bulkUpdateBadgeAssignmentTagsByFilter4,
    "createBadgeAssignment",
    ()=>createBadgeAssignment4,
    "deleteBadgeAssignment",
    ()=>deleteBadgeAssignment4,
    "onBadgeAssignmentCreated",
    ()=>onBadgeAssignmentCreated2,
    "onBadgeAssignmentDeleted",
    ()=>onBadgeAssignmentDeleted2,
    "queryBadgeAssignments",
    ()=>queryBadgeAssignments4,
    "utils",
    ()=>utils
]);
// src/badges-v4-badge-assignment-badge-assignments.public.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-types@1.17.11/node_modules/@wix/sdk-types/build/browser/index.mjs [app-client] (ecmascript)");
// src/badges-v4-badge-assignment-badge-assignments.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder.js [app-client] (ecmascript)");
// src/badges-v4-badge-assignment-badge-assignments.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/event-definition-modules.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-method-router.js [app-client] (ecmascript)");
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
function resolveWixBadgesBadgeassignmentsV4BadgeAssignmentsUrl(opts) {
    const domainToMappings = {
        "www.wixapis.com": [
            {
                srcPath: "/badges/v4/assignments",
                destPath: "/v4/badge-assignments"
            },
            {
                srcPath: "/badges/v4/bulk/assignments",
                destPath: "/v4/bulk/badge-assignments"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/badges/v4/badge-assignments",
                destPath: "/v4/badge-assignments"
            },
            {
                srcPath: "/badges/v4/bulk/badge-assignments",
                destPath: "/v4/bulk/badge-assignments"
            }
        ],
        _: [
            {
                srcPath: "/badges/v4/badge-assignments",
                destPath: "/v4/badge-assignments"
            },
            {
                srcPath: "/badges/v4/bulk/badge-assignments",
                destPath: "/v4/bulk/badge-assignments"
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/_api/badges/v4/assignments",
                destPath: "/v4/badge-assignments"
            },
            {
                srcPath: "/_api/badges/v4/bulk/assignments",
                destPath: "/v4/bulk/badge-assignments"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_badge-assignments";
function createBadgeAssignment(payload) {
    function __createBadgeAssignment({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "badgeAssignment.createdDate"
                    },
                    {
                        path: "badgeAssignment.updatedDate"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.badges.v4.badge_assignment",
            method: "POST",
            methodFqn: "wix.badges.badgeassignments.v4.BadgeAssignments.CreateBadgeAssignment",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesBadgeassignmentsV4BadgeAssignmentsUrl({
                protoPath: "/v4/badge-assignments",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "badgeAssignment.createdDate"
                            },
                            {
                                path: "badgeAssignment.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __createBadgeAssignment;
}
function bulkCreateBadgeAssignments(payload) {
    function __bulkCreateBadgeAssignments({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "badgeAssignments.createdDate"
                    },
                    {
                        path: "badgeAssignments.updatedDate"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.badges.v4.badge_assignment",
            method: "POST",
            methodFqn: "wix.badges.badgeassignments.v4.BadgeAssignments.BulkCreateBadgeAssignments",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesBadgeassignmentsV4BadgeAssignmentsUrl({
                protoPath: "/v4/bulk/badge-assignments/create",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "results.item.createdDate"
                            },
                            {
                                path: "results.item.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __bulkCreateBadgeAssignments;
}
function queryBadgeAssignments(payload) {
    function __queryBadgeAssignments({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v4.badge_assignment",
            method: "POST",
            methodFqn: "wix.badges.badgeassignments.v4.BadgeAssignments.QueryBadgeAssignments",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesBadgeassignmentsV4BadgeAssignmentsUrl({
                protoPath: "/v4/badge-assignments/query",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "badgeAssignments.createdDate"
                            },
                            {
                                path: "badgeAssignments.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __queryBadgeAssignments;
}
function deleteBadgeAssignment(payload) {
    function __deleteBadgeAssignment({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v4.badge_assignment",
            method: "DELETE",
            methodFqn: "wix.badges.badgeassignments.v4.BadgeAssignments.DeleteBadgeAssignment",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesBadgeassignmentsV4BadgeAssignmentsUrl({
                protoPath: "/v4/badge-assignments/{badgeAssignmentId}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __deleteBadgeAssignment;
}
function bulkDeleteBadgeAssignments(payload) {
    function __bulkDeleteBadgeAssignments({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v4.badge_assignment",
            method: "POST",
            methodFqn: "wix.badges.badgeassignments.v4.BadgeAssignments.BulkDeleteBadgeAssignments",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesBadgeassignmentsV4BadgeAssignmentsUrl({
                protoPath: "/v4/bulk/badge-assignments/delete",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "results.item.createdDate"
                            },
                            {
                                path: "results.item.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __bulkDeleteBadgeAssignments;
}
function bulkUpdateBadgeAssignmentTags(payload) {
    function __bulkUpdateBadgeAssignmentTags({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v4.badge_assignment",
            method: "POST",
            methodFqn: "wix.badges.badgeassignments.v4.BadgeAssignments.BulkUpdateBadgeAssignmentTags",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesBadgeassignmentsV4BadgeAssignmentsUrl({
                protoPath: "/v4/bulk/badge-assignments/bulk-update-tags",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __bulkUpdateBadgeAssignmentTags;
}
function bulkUpdateBadgeAssignmentTagsByFilter(payload) {
    function __bulkUpdateBadgeAssignmentTagsByFilter({ host }) {
        const metadata = {
            entityFqdn: "wix.badges.v4.badge_assignment",
            method: "POST",
            methodFqn: "wix.badges.badgeassignments.v4.BadgeAssignments.BulkUpdateBadgeAssignmentTagsByFilter",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixBadgesBadgeassignmentsV4BadgeAssignmentsUrl({
                protoPath: "/v4/bulk/badge-assignments/update-tags-by-filter",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __bulkUpdateBadgeAssignmentTagsByFilter;
}
;
;
var SortOrder = /* @__PURE__ */ ((SortOrder2)=>{
    SortOrder2["ASC"] = "ASC";
    SortOrder2["DESC"] = "DESC";
    return SortOrder2;
})(SortOrder || {});
var WebhookIdentityType = /* @__PURE__ */ ((WebhookIdentityType2)=>{
    WebhookIdentityType2["UNKNOWN"] = "UNKNOWN";
    WebhookIdentityType2["ANONYMOUS_VISITOR"] = "ANONYMOUS_VISITOR";
    WebhookIdentityType2["MEMBER"] = "MEMBER";
    WebhookIdentityType2["WIX_USER"] = "WIX_USER";
    WebhookIdentityType2["APP"] = "APP";
    return WebhookIdentityType2;
})(WebhookIdentityType || {});
async function createBadgeAssignment2(badgeAssignment) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        badgeAssignment
    });
    const reqOpts = createBadgeAssignment(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.badgeAssignment;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                badgeAssignment: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "badgeAssignment"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function bulkCreateBadgeAssignments2(badgeAssignments, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        badgeAssignments,
        returnEntity: options?.returnEntity
    });
    const reqOpts = bulkCreateBadgeAssignments(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                badgeAssignments: "$[0]",
                returnEntity: "$[1].returnEntity"
            },
            singleArgumentUnchanged: false
        }, [
            "badgeAssignments",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
function queryBadgeAssignments2() {
    const { httpClient, sideEffects } = arguments[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryBuilder"])({
        func: async (payload)=>{
            const reqOpts = queryBadgeAssignments(payload);
            sideEffects?.onSiteCall?.();
            try {
                const result = await httpClient.request(reqOpts);
                sideEffects?.onSuccess?.(result);
                return result;
            } catch (err) {
                sideEffects?.onError?.(err);
                throw err;
            }
        },
        requestTransformer: (query)=>{
            const args = [
                query,
                {}
            ];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
                ...args?.[1],
                query: args?.[0]
            });
        },
        responseTransformer: ({ data })=>{
            const transformedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(data, []));
            return {
                items: transformedData?.badgeAssignments,
                pagingMetadata: transformedData?.pagingMetadata
            };
        },
        errorTransformer: (err)=>{
            const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
                spreadPathsToArguments: {},
                explicitPathsToArguments: {
                    query: "$[0]"
                },
                singleArgumentUnchanged: false
            });
            throw transformedError;
        },
        pagingMethod: "CURSOR",
        transformationPaths: {}
    });
}
async function typedQueryBadgeAssignments(query) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        query
    });
    const reqOpts = queryBadgeAssignments(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                query: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "query"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
var utils = {
    query: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryUtils"])()
};
async function deleteBadgeAssignment2(badgeAssignmentId) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        badgeAssignmentId
    });
    const reqOpts = deleteBadgeAssignment(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                badgeAssignmentId: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "badgeAssignmentId"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function bulkDeleteBadgeAssignments2(badgeAssignmentIds) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        badgeAssignmentIds
    });
    const reqOpts = bulkDeleteBadgeAssignments(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                badgeAssignmentIds: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "badgeAssignmentIds"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function bulkUpdateBadgeAssignmentTags2(ids, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        ids,
        assignTags: options?.assignTags,
        unassignTags: options?.unassignTags
    });
    const reqOpts = bulkUpdateBadgeAssignmentTags(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                ids: "$[0]",
                assignTags: "$[1].assignTags",
                unassignTags: "$[1].unassignTags"
            },
            singleArgumentUnchanged: false
        }, [
            "ids",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function bulkUpdateBadgeAssignmentTagsByFilter2(filter, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        filter,
        assignTags: options?.assignTags,
        unassignTags: options?.unassignTags
    });
    const reqOpts = bulkUpdateBadgeAssignmentTagsByFilter(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                filter: "$[0]",
                assignTags: "$[1].assignTags",
                unassignTags: "$[1].unassignTags"
            },
            singleArgumentUnchanged: false
        }, [
            "filter",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/badges-v4-badge-assignment-badge-assignments.public.ts
function createBadgeAssignment3(httpClient) {
    return (badgeAssignment)=>createBadgeAssignment2(badgeAssignment, // @ts-ignore
        {
            httpClient
        });
}
function bulkCreateBadgeAssignments3(httpClient) {
    return (badgeAssignments, options)=>bulkCreateBadgeAssignments2(badgeAssignments, options, // @ts-ignore
        {
            httpClient
        });
}
function queryBadgeAssignments3(httpClient) {
    return ()=>queryBadgeAssignments2(// @ts-ignore
        {
            httpClient
        });
}
function typedQueryBadgeAssignments2(httpClient) {
    return (query)=>typedQueryBadgeAssignments(query, // @ts-ignore
        {
            httpClient
        });
}
function deleteBadgeAssignment3(httpClient) {
    return (badgeAssignmentId)=>deleteBadgeAssignment2(badgeAssignmentId, // @ts-ignore
        {
            httpClient
        });
}
function bulkDeleteBadgeAssignments3(httpClient) {
    return (badgeAssignmentIds)=>bulkDeleteBadgeAssignments2(badgeAssignmentIds, // @ts-ignore
        {
            httpClient
        });
}
function bulkUpdateBadgeAssignmentTags3(httpClient) {
    return (ids, options)=>bulkUpdateBadgeAssignmentTags2(ids, options, // @ts-ignore
        {
            httpClient
        });
}
function bulkUpdateBadgeAssignmentTagsByFilter3(httpClient) {
    return (filter, options)=>bulkUpdateBadgeAssignmentTagsByFilter2(filter, options, // @ts-ignore
        {
            httpClient
        });
}
var onBadgeAssignmentCreated = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.badges.v4.badge_assignment_created", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "entity.createdDate"
                },
                {
                    path: "entity.updatedDate"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
var onBadgeAssignmentDeleted = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.badges.v4.badge_assignment_deleted", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "entity.createdDate"
                },
                {
                    path: "entity.updatedDate"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
;
;
;
function customQueryBadgeAssignments(httpClient) {
    const router = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryOverloadRouter"])({
        builderQueryFunction: ()=>queryBadgeAssignments3(httpClient)(),
        typedQueryFunction: (query)=>typedQueryBadgeAssignments2(httpClient)(query),
        hasOptionsParameter: false
    });
    function overloadedQuery(query) {
        return router(...arguments);
    }
    return overloadedQuery;
}
var createBadgeAssignment4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(createBadgeAssignment3);
var bulkCreateBadgeAssignments4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(bulkCreateBadgeAssignments3);
var deleteBadgeAssignment4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteBadgeAssignment3);
var bulkDeleteBadgeAssignments4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(bulkDeleteBadgeAssignments3);
var bulkUpdateBadgeAssignmentTags4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(bulkUpdateBadgeAssignmentTags3);
var bulkUpdateBadgeAssignmentTagsByFilter4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(bulkUpdateBadgeAssignmentTagsByFilter3);
var queryBadgeAssignments4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(customQueryBadgeAssignments);
var onBadgeAssignmentCreated2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onBadgeAssignmentCreated);
var onBadgeAssignmentDeleted2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onBadgeAssignmentDeleted);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_authentication@1.0.44/node_modules/@wix/auto_sdk_members_authentication/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Role",
    ()=>Role,
    "SiteMemberPrivacyStatus",
    ()=>SiteMemberPrivacyStatus,
    "SiteMemberStatus",
    ()=>SiteMemberStatus,
    "Sorting",
    ()=>Sorting,
    "Source",
    ()=>Source,
    "VerificationFailureReason",
    ()=>VerificationFailureReason,
    "approve",
    ()=>approve4,
    "block",
    ()=>block4,
    "changeLoginEmail",
    ()=>changeLoginEmail4,
    "login",
    ()=>login4,
    "register",
    ()=>register4,
    "sendSetPasswordEmail",
    ()=>sendSetPasswordEmail4
]);
// src/identity-members-v1-member-authentication.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
// src/identity-members-v1-member-authentication.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
// src/identity-members-v1-member-authentication.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/image.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function resolveWixMembersApiV1MembersServiceUrl(opts) {
    const domainToMappings = {
        "api._api_base_domain_": [
            {
                srcPath: "/wix-sm-members-proxy",
                destPath: ""
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "*.pub.wix-code.com": [
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        _: [
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "bo._base_domain_": [
            {
                srcPath: "/wow/data-hub/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/wow/bulx/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/_api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "wixbo.ai": [
            {
                srcPath: "/wow/data-hub/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/wow/bulx/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/_api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "wix-bo.com": [
            {
                srcPath: "/wow/data-hub/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/wow/bulx/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/_api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "dev._base_domain_": [
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "editor._base_domain_": [
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "blocks._base_domain_": [
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "create.editorx": [
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "editor.wixapps.net": [
            {
                srcPath: "/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "forums._base_domain_": [
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "groups.wixapps.net": [
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/corvid/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "sslusers._base_domain_": [
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/wix-sm/api/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "users._base_domain_": [
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/wix-sm/api/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "www._base_domain_": [
            {
                srcPath: "/blacklivesmatter/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/corvid/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/_api/wix-sm-webapp/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/_api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            },
            {
                srcPath: "/api/wix-sm/v1/members",
                destPath: "/api/v1/members"
            }
        ],
        "www.wixapis.com": [
            {
                srcPath: "/api/v1/members",
                destPath: "/api/v1/members"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
function resolveWixMembersApiV1AuthServiceUrl(opts) {
    const domainToMappings = {
        "www.wixapis.com": [
            {
                srcPath: "/wix-sm/api/v1/auth",
                destPath: ""
            },
            {
                srcPath: "/members/v1/wix-sm-webapp-proxy/v1/auth",
                destPath: "/api/v1/auth"
            },
            {
                srcPath: "/identity/members/v1/auth/members",
                destPath: "/v1/auth/members"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/identity/members/api/v1/auth/login",
                destPath: "/api/v1/auth/login"
            },
            {
                srcPath: "/identity/members/v1/auth/members",
                destPath: "/v1/auth/members"
            }
        ],
        _: [
            {
                srcPath: "/identity/members/api/v1/auth/login",
                destPath: "/api/v1/auth/login"
            },
            {
                srcPath: "/identity/members/v1/auth/members",
                destPath: "/v1/auth/members"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_authentication";
function register(payload) {
    function __register({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKFloatToRESTFloat"],
                paths: [
                    {
                        path: "contactInfo.customFields.numValue"
                    }
                ]
            },
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "contactInfo.customFields.dateValue"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.identity.members.v1.member",
            method: "POST",
            methodFqn: "wix.members.api.v1.AuthService.Register",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersApiV1AuthServiceUrl({
                protoPath: "/api/v1/auth/register",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.creationDate"
                            },
                            {
                                path: "member.lastUpdateDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            },
                            {
                                path: "member.customFields.dateValue"
                            },
                            {
                                path: "member.picture.urlExpirationDate"
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: "member.customFields.numValue"
                            },
                            {
                                path: "member.picture.focalPoint.x"
                            },
                            {
                                path: "member.picture.focalPoint.y"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __register;
}
function login(payload) {
    function __login({ host }) {
        const metadata = {
            entityFqdn: "wix.identity.members.v1.member",
            method: "POST",
            methodFqn: "wix.members.api.v1.AuthService.Login",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersApiV1AuthServiceUrl({
                protoPath: "/api/v1/auth/login",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.creationDate"
                            },
                            {
                                path: "member.lastUpdateDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            },
                            {
                                path: "member.customFields.dateValue"
                            },
                            {
                                path: "member.picture.urlExpirationDate"
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: "member.customFields.numValue"
                            },
                            {
                                path: "member.picture.focalPoint.x"
                            },
                            {
                                path: "member.picture.focalPoint.y"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __login;
}
function sendSetPasswordEmail(payload) {
    function __sendSetPasswordEmail({ host }) {
        const metadata = {
            entityFqdn: "wix.identity.members.v1.member",
            method: "POST",
            methodFqn: "wix.members.api.v1.AuthService.SendSetPasswordEmail",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersApiV1AuthServiceUrl({
                protoPath: "/v1/auth/members/send-set-password-email",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __sendSetPasswordEmail;
}
function changeLoginEmail(payload) {
    function __changeLoginEmail({ host }) {
        const metadata = {
            entityFqdn: "wix.identity.members.v1.member",
            method: "PATCH",
            methodFqn: "wix.members.api.v1.MembersService.ChangeLoginEmail",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersApiV1MembersServiceUrl({
                protoPath: "/api/v1/members/{id}/change-login-email",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.creationDate"
                            },
                            {
                                path: "member.lastUpdateDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            },
                            {
                                path: "member.customFields.dateValue"
                            },
                            {
                                path: "member.picture.urlExpirationDate"
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: "member.customFields.numValue"
                            },
                            {
                                path: "member.picture.focalPoint.x"
                            },
                            {
                                path: "member.picture.focalPoint.y"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __changeLoginEmail;
}
function approve(payload) {
    function __approve({ host }) {
        const metadata = {
            entityFqdn: "wix.identity.members.v1.member",
            method: "POST",
            methodFqn: "wix.members.api.v1.MembersService.Approve",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersApiV1MembersServiceUrl({
                protoPath: "/api/v1/members/approve",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __approve;
}
function block(payload) {
    function __block({ host }) {
        const metadata = {
            entityFqdn: "wix.identity.members.v1.member",
            method: "POST",
            methodFqn: "wix.members.api.v1.MembersService.Block",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersApiV1MembersServiceUrl({
                protoPath: "/api/v1/members/block",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __block;
}
;
;
var Role = /* @__PURE__ */ ((Role2)=>{
    Role2["UNDEFINED_ROLE"] = "UNDEFINED_ROLE";
    Role2["MEMBER"] = "MEMBER";
    Role2["OWNER"] = "OWNER";
    Role2["CONTRIBUTOR"] = "CONTRIBUTOR";
    return Role2;
})(Role || {});
var SiteMemberPrivacyStatus = /* @__PURE__ */ ((SiteMemberPrivacyStatus2)=>{
    SiteMemberPrivacyStatus2["UNDEFINED"] = "UNDEFINED";
    SiteMemberPrivacyStatus2["PUBLIC"] = "PUBLIC";
    SiteMemberPrivacyStatus2["PRIVATE"] = "PRIVATE";
    SiteMemberPrivacyStatus2["COMMUNITY"] = "COMMUNITY";
    return SiteMemberPrivacyStatus2;
})(SiteMemberPrivacyStatus || {});
var SiteMemberStatus = /* @__PURE__ */ ((SiteMemberStatus2)=>{
    SiteMemberStatus2["UNDEFINED_STATUS"] = "UNDEFINED_STATUS";
    SiteMemberStatus2["APPLICANT"] = "APPLICANT";
    SiteMemberStatus2["ACTIVE"] = "ACTIVE";
    SiteMemberStatus2["INACTIVE"] = "INACTIVE";
    SiteMemberStatus2["BLOCKED"] = "BLOCKED";
    SiteMemberStatus2["OFFLINE_ONLY"] = "OFFLINE_ONLY";
    return SiteMemberStatus2;
})(SiteMemberStatus || {});
var VerificationFailureReason = /* @__PURE__ */ ((VerificationFailureReason2)=>{
    VerificationFailureReason2["UNSPECIFIED"] = "UNSPECIFIED";
    VerificationFailureReason2["BAD_CODE"] = "BAD_CODE";
    VerificationFailureReason2["NOT_FOUND"] = "NOT_FOUND";
    VerificationFailureReason2["SEND_CODE_ERROR"] = "SEND_CODE_ERROR";
    return VerificationFailureReason2;
})(VerificationFailureReason || {});
var Sorting = /* @__PURE__ */ ((Sorting2)=>{
    Sorting2["DESC"] = "DESC";
    Sorting2["ASC"] = "ASC";
    return Sorting2;
})(Sorting || {});
var Source = /* @__PURE__ */ ((Source2)=>{
    Source2["UNKNOWN"] = "UNKNOWN";
    Source2["HANDLING_SPAM"] = "HANDLING_SPAM";
    return Source2;
})(Source || {});
async function register2(email, password, options) {
    const { httpClient, sideEffects } = arguments[3];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        email,
        password,
        contactInfo: options?.contactInfo,
        dialogData: options?.dialogData,
        profilePrivacyStatus: options?.profilePrivacyStatus,
        isOfflineRegistration: options?.isOfflineRegistration,
        recaptchaToken: options?.recaptchaToken,
        invisibleRecaptchaToken: options?.invisibleRecaptchaToken,
        emailVerification: options?.emailVerification,
        isMobile: options?.isMobile
    });
    const reqOpts = register(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTImageToSDKImage"],
                paths: [
                    {
                        path: "member.picture"
                    }
                ]
            }
        ]));
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                email: "$[0]",
                password: "$[1]",
                contactInfo: "$[2].contactInfo",
                dialogData: "$[2].dialogData",
                profilePrivacyStatus: "$[2].profilePrivacyStatus",
                isOfflineRegistration: "$[2].isOfflineRegistration",
                recaptchaToken: "$[2].recaptchaToken",
                invisibleRecaptchaToken: "$[2].invisibleRecaptchaToken",
                emailVerification: "$[2].emailVerification",
                isMobile: "$[2].isMobile"
            },
            singleArgumentUnchanged: false
        }, [
            "email",
            "password",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function login2(email, password, options) {
    const { httpClient, sideEffects } = arguments[3];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        email,
        password,
        recaptchaToken: options?.recaptchaToken,
        invisibleRecaptchaToken: options?.invisibleRecaptchaToken,
        emailVerification: options?.emailVerification,
        isMobile: options?.isMobile
    });
    const reqOpts = login(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTImageToSDKImage"],
                paths: [
                    {
                        path: "member.picture"
                    }
                ]
            }
        ]));
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                email: "$[0]",
                password: "$[1]",
                recaptchaToken: "$[2].recaptchaToken",
                invisibleRecaptchaToken: "$[2].invisibleRecaptchaToken",
                emailVerification: "$[2].emailVerification",
                isMobile: "$[2].isMobile"
            },
            singleArgumentUnchanged: false
        }, [
            "email",
            "password",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function sendSetPasswordEmail2(email, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        email,
        requestedByMember: options?.requestedByMember,
        hideIgnoreMessage: options?.hideIgnoreMessage
    });
    const reqOpts = sendSetPasswordEmail(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                email: "$[0]",
                requestedByMember: "$[1].requestedByMember",
                hideIgnoreMessage: "$[1].hideIgnoreMessage"
            },
            singleArgumentUnchanged: false
        }, [
            "email",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function changeLoginEmail2(_id, newEmail, options) {
    const { httpClient, sideEffects } = arguments[3];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id,
        newEmail,
        revokeCurrentSessions: options?.revokeCurrentSessions
    });
    const reqOpts = changeLoginEmail(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTImageToSDKImage"],
                paths: [
                    {
                        path: "member.picture"
                    }
                ]
            }
        ]));
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]",
                newEmail: "$[1]",
                revokeCurrentSessions: "$[2].revokeCurrentSessions"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "newEmail",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function approve2(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: options?._id,
        email: options?.email,
        token: options?.token
    });
    const reqOpts = approve(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]._id",
                email: "$[0].email",
                token: "$[0].token"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function block2(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: options?._id,
        email: options?.email,
        source: options?.source
    });
    const reqOpts = block(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]._id",
                email: "$[0].email",
                source: "$[0].source"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/identity-members-v1-member-authentication.public.ts
function register3(httpClient) {
    return (email, password, options)=>register2(email, password, options, // @ts-ignore
        {
            httpClient
        });
}
function login3(httpClient) {
    return (email, password, options)=>login2(email, password, options, // @ts-ignore
        {
            httpClient
        });
}
function sendSetPasswordEmail3(httpClient) {
    return (email, options)=>sendSetPasswordEmail2(email, options, // @ts-ignore
        {
            httpClient
        });
}
function changeLoginEmail3(httpClient) {
    return (_id, newEmail, options)=>changeLoginEmail2(_id, newEmail, options, // @ts-ignore
        {
            httpClient
        });
}
function approve3(httpClient) {
    return (options)=>approve2(options, // @ts-ignore
        {
            httpClient
        });
}
function block3(httpClient) {
    return (options)=>block2(options, // @ts-ignore
        {
            httpClient
        });
}
;
var register4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(register3);
var login4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(login3);
var sendSetPasswordEmail4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(sendSetPasswordEmail3);
var changeLoginEmail4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(changeLoginEmail3);
var approve4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(approve3);
var block4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(block3);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_members-about@1.0.78/node_modules/@wix/auto_sdk_members_members-about/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alignment",
    ()=>Alignment,
    "AppType",
    ()=>AppType,
    "AspectRatio",
    ()=>AspectRatio,
    "BackdropType",
    ()=>BackdropType,
    "BackgroundType",
    ()=>BackgroundType,
    "BannerPosition",
    ()=>BannerPosition,
    "ButtonDataType",
    ()=>ButtonDataType,
    "CardDataBackgroundType",
    ()=>CardDataBackgroundType,
    "CardStylesType",
    ()=>CardStylesType,
    "ColumnSize",
    ()=>ColumnSize,
    "Crop",
    ()=>Crop,
    "DecorationType",
    ()=>DecorationType,
    "DesignTarget",
    ()=>DesignTarget,
    "Direction",
    ()=>Direction,
    "DividerDataAlignment",
    ()=>DividerDataAlignment,
    "EntranceEffectType",
    ()=>EntranceEffectType,
    "FontType",
    ()=>FontType,
    "GIFType",
    ()=>GIFType,
    "GradientType",
    ()=>GradientType,
    "ImagePosition",
    ()=>ImagePosition,
    "ImagePositionPosition",
    ()=>ImagePositionPosition,
    "ImageScalingScaling",
    ()=>ImageScalingScaling,
    "Indentation",
    ()=>Indentation,
    "InitialExpandedItems",
    ()=>InitialExpandedItems,
    "LayerEffect",
    ()=>LayerEffect,
    "Layout",
    ()=>Layout,
    "LayoutDataBackgroundType",
    ()=>LayoutDataBackgroundType,
    "LayoutType",
    ()=>LayoutType,
    "LineCap",
    ()=>LineCap,
    "LineStyle",
    ()=>LineStyle,
    "ListStyle",
    ()=>ListStyle,
    "LoopEffectType",
    ()=>LoopEffectType,
    "MapType",
    ()=>MapType,
    "NodeType",
    ()=>NodeType,
    "NullValue",
    ()=>NullValue,
    "Orientation",
    ()=>Orientation,
    "Origin",
    ()=>Origin,
    "Placement",
    ()=>Placement,
    "PluginContainerDataAlignment",
    ()=>PluginContainerDataAlignment,
    "PointerEffectType",
    ()=>PointerEffectType,
    "PollDesignBackgroundType",
    ()=>PollDesignBackgroundType,
    "PollLayoutDirection",
    ()=>PollLayoutDirection,
    "PollLayoutType",
    ()=>PollLayoutType,
    "Position",
    ()=>Position,
    "Resizing",
    ()=>Resizing,
    "ResponsivenessBehaviour",
    ()=>ResponsivenessBehaviour,
    "Scaling",
    ()=>Scaling,
    "Shape",
    ()=>Shape,
    "SmartBlockDataType",
    ()=>SmartBlockDataType,
    "SortOrder",
    ()=>SortOrder,
    "Source",
    ()=>Source,
    "StylesPosition",
    ()=>StylesPosition,
    "Target",
    ()=>Target,
    "TextAlignment",
    ()=>TextAlignment,
    "ThumbnailsAlignment",
    ()=>ThumbnailsAlignment,
    "Type",
    ()=>Type,
    "Variant",
    ()=>Variant,
    "VerticalAlignment",
    ()=>VerticalAlignment,
    "VerticalAlignmentAlignment",
    ()=>VerticalAlignmentAlignment,
    "ViewMode",
    ()=>ViewMode,
    "ViewRole",
    ()=>ViewRole,
    "VoteRole",
    ()=>VoteRole,
    "WebhookIdentityType",
    ()=>WebhookIdentityType,
    "Width",
    ()=>Width,
    "WidthType",
    ()=>WidthType,
    "createMemberAbout",
    ()=>createMemberAbout4,
    "deleteMemberAbout",
    ()=>deleteMemberAbout4,
    "getMemberAbout",
    ()=>getMemberAbout4,
    "getMyMemberAbout",
    ()=>getMyMemberAbout4,
    "onMemberAboutCreated",
    ()=>onMemberAboutCreated2,
    "onMemberAboutDeleted",
    ()=>onMemberAboutDeleted2,
    "onMemberAboutUpdated",
    ()=>onMemberAboutUpdated2,
    "queryMemberAbouts",
    ()=>queryMemberAbouts4,
    "updateMemberAbout",
    ()=>updateMemberAbout4,
    "utils",
    ()=>utils
]);
// src/members-about-v2-member-about-members-about.public.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-types@1.17.11/node_modules/@wix/sdk-types/build/browser/index.mjs [app-client] (ecmascript)");
// src/members-about-v2-member-about-members-about.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder.js [app-client] (ecmascript)");
// src/members-about-v2-member-about-members-about.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/event-definition-modules.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-method-router.js [app-client] (ecmascript)");
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
function resolveWixMembersAboutV2MembersAboutUrl(opts) {
    const domainToMappings = {
        "bo._base_domain_": [
            {
                srcPath: "/members-about-api",
                destPath: ""
            },
            {
                srcPath: "/members/v2/abouts",
                destPath: "/v2/abouts"
            }
        ],
        "wixbo.ai": [
            {
                srcPath: "/members-about-api",
                destPath: ""
            },
            {
                srcPath: "/members/v2/abouts",
                destPath: "/v2/abouts"
            }
        ],
        "wix-bo.com": [
            {
                srcPath: "/members-about-api",
                destPath: ""
            },
            {
                srcPath: "/members/v2/abouts",
                destPath: "/v2/abouts"
            }
        ],
        "www.wixapis.com": [
            {
                srcPath: "/members/v2/abouts",
                destPath: "/v2/abouts"
            },
            {
                srcPath: "/_api/members/v2/abouts",
                destPath: "/v2/abouts"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/_api/members/v2/abouts",
                destPath: "/v2/abouts"
            }
        ],
        _: [
            {
                srcPath: "/_api/members/v2/abouts",
                destPath: "/v2/abouts"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_members-about";
function createMemberAbout(payload) {
    function __createMemberAbout({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKFloatToRESTFloat"],
                paths: [
                    {
                        path: "memberAbout.content.nodes.buttonData.styles.background.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.buttonData.styles.background.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.buttonData.styles.background.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.galleryData.items.image.media.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.galleryData.items.video.media.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.galleryData.items.video.thumbnail.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.galleryData.options.item.ratio"
                    },
                    {
                        path: "memberAbout.content.nodes.imageData.image.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.imageData.crop.x"
                    },
                    {
                        path: "memberAbout.content.nodes.imageData.crop.y"
                    },
                    {
                        path: "memberAbout.content.nodes.imageData.crop.width"
                    },
                    {
                        path: "memberAbout.content.nodes.imageData.crop.height"
                    },
                    {
                        path: "memberAbout.content.nodes.mapData.mapSettings.lat"
                    },
                    {
                        path: "memberAbout.content.nodes.mapData.mapSettings.lng"
                    },
                    {
                        path: "memberAbout.content.nodes.pollData.poll.image.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.pollData.poll.options.image.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.pollData.design.poll.background.image.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.appEmbedData.image.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.videoData.video.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.videoData.thumbnail.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.audioData.audio.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.audioData.coverImage.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backgroundImage.media.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdropImage.media.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.background.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.background.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.background.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdrop.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdrop.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdrop.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.shapeData.shape.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.background.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.background.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.background.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.backgroundImage.media.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.tocData.fontSize"
                    },
                    {
                        path: "memberAbout.content.nodes.tocData.itemSpacing"
                    },
                    {
                        path: "memberAbout.content.nodes.smartBlockCellData.shape.duration"
                    }
                ]
            },
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "memberAbout.content.metadata.createdTimestamp"
                    },
                    {
                        path: "memberAbout.content.metadata.updatedTimestamp"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.about.v2.member_about",
            method: "POST",
            methodFqn: "wix.members.about.v2.MembersAbout.CreateMemberAbout",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersAboutV2MembersAboutUrl({
                protoPath: "/v2/abouts",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.background.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.background.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.items.image.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.items.video.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.items.video.thumbnail.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.options.item.ratio"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.x"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.y"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.width"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.height"
                            },
                            {
                                path: "memberAbout.content.nodes.mapData.mapSettings.lat"
                            },
                            {
                                path: "memberAbout.content.nodes.mapData.mapSettings.lng"
                            },
                            {
                                path: "memberAbout.content.nodes.pollData.poll.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.pollData.poll.options.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.pollData.design.poll.background.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.appEmbedData.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.videoData.video.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.videoData.thumbnail.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.audioData.audio.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.audioData.coverImage.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.background.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.background.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdrop.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdrop.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdrop.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.shapeData.shape.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.background.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.background.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.tocData.fontSize"
                            },
                            {
                                path: "memberAbout.content.nodes.tocData.itemSpacing"
                            },
                            {
                                path: "memberAbout.content.nodes.smartBlockCellData.shape.duration"
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "memberAbout.content.metadata.createdTimestamp"
                            },
                            {
                                path: "memberAbout.content.metadata.updatedTimestamp"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __createMemberAbout;
}
function updateMemberAbout(payload) {
    function __updateMemberAbout({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKFloatToRESTFloat"],
                paths: [
                    {
                        path: "memberAbout.content.nodes.buttonData.styles.background.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.buttonData.styles.background.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.buttonData.styles.background.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.galleryData.items.image.media.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.galleryData.items.video.media.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.galleryData.items.video.thumbnail.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.galleryData.options.item.ratio"
                    },
                    {
                        path: "memberAbout.content.nodes.imageData.image.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.imageData.crop.x"
                    },
                    {
                        path: "memberAbout.content.nodes.imageData.crop.y"
                    },
                    {
                        path: "memberAbout.content.nodes.imageData.crop.width"
                    },
                    {
                        path: "memberAbout.content.nodes.imageData.crop.height"
                    },
                    {
                        path: "memberAbout.content.nodes.mapData.mapSettings.lat"
                    },
                    {
                        path: "memberAbout.content.nodes.mapData.mapSettings.lng"
                    },
                    {
                        path: "memberAbout.content.nodes.pollData.poll.image.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.pollData.poll.options.image.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.pollData.design.poll.background.image.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.appEmbedData.image.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.videoData.video.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.videoData.thumbnail.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.audioData.audio.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.audioData.coverImage.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backgroundImage.media.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdropImage.media.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.background.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.background.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.background.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdrop.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdrop.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.layoutData.backdrop.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.shapeData.shape.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.background.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.background.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.background.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.backgroundImage.media.duration"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.centerX"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.centerY"
                    },
                    {
                        path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.stops.position"
                    },
                    {
                        path: "memberAbout.content.nodes.tocData.fontSize"
                    },
                    {
                        path: "memberAbout.content.nodes.tocData.itemSpacing"
                    },
                    {
                        path: "memberAbout.content.nodes.smartBlockCellData.shape.duration"
                    }
                ]
            },
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "memberAbout.content.metadata.createdTimestamp"
                    },
                    {
                        path: "memberAbout.content.metadata.updatedTimestamp"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.about.v2.member_about",
            method: "PATCH",
            methodFqn: "wix.members.about.v2.MembersAbout.UpdateMemberAbout",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersAboutV2MembersAboutUrl({
                protoPath: "/v2/abouts/{memberAbout.id}",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.background.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.background.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.items.image.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.items.video.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.items.video.thumbnail.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.options.item.ratio"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.x"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.y"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.width"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.height"
                            },
                            {
                                path: "memberAbout.content.nodes.mapData.mapSettings.lat"
                            },
                            {
                                path: "memberAbout.content.nodes.mapData.mapSettings.lng"
                            },
                            {
                                path: "memberAbout.content.nodes.pollData.poll.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.pollData.poll.options.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.pollData.design.poll.background.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.appEmbedData.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.videoData.video.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.videoData.thumbnail.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.audioData.audio.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.audioData.coverImage.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.background.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.background.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdrop.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdrop.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdrop.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.shapeData.shape.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.background.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.background.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.tocData.fontSize"
                            },
                            {
                                path: "memberAbout.content.nodes.tocData.itemSpacing"
                            },
                            {
                                path: "memberAbout.content.nodes.smartBlockCellData.shape.duration"
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "memberAbout.content.metadata.createdTimestamp"
                            },
                            {
                                path: "memberAbout.content.metadata.updatedTimestamp"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __updateMemberAbout;
}
function deleteMemberAbout(payload) {
    function __deleteMemberAbout({ host }) {
        const metadata = {
            entityFqdn: "wix.members.about.v2.member_about",
            method: "DELETE",
            methodFqn: "wix.members.about.v2.MembersAbout.DeleteMemberAbout",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersAboutV2MembersAboutUrl({
                protoPath: "/v2/abouts/{id}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __deleteMemberAbout;
}
function getMemberAbout(payload) {
    function __getMemberAbout({ host }) {
        const metadata = {
            entityFqdn: "wix.members.about.v2.member_about",
            method: "GET",
            methodFqn: "wix.members.about.v2.MembersAbout.GetMemberAbout",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersAboutV2MembersAboutUrl({
                protoPath: "/v2/abouts/{id}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.background.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.background.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.items.image.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.items.video.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.items.video.thumbnail.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.options.item.ratio"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.x"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.y"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.width"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.height"
                            },
                            {
                                path: "memberAbout.content.nodes.mapData.mapSettings.lat"
                            },
                            {
                                path: "memberAbout.content.nodes.mapData.mapSettings.lng"
                            },
                            {
                                path: "memberAbout.content.nodes.pollData.poll.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.pollData.poll.options.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.pollData.design.poll.background.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.appEmbedData.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.videoData.video.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.videoData.thumbnail.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.audioData.audio.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.audioData.coverImage.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.background.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.background.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdrop.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdrop.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdrop.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.shapeData.shape.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.background.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.background.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.tocData.fontSize"
                            },
                            {
                                path: "memberAbout.content.nodes.tocData.itemSpacing"
                            },
                            {
                                path: "memberAbout.content.nodes.smartBlockCellData.shape.duration"
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "memberAbout.content.metadata.createdTimestamp"
                            },
                            {
                                path: "memberAbout.content.metadata.updatedTimestamp"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __getMemberAbout;
}
function getMyMemberAbout(payload) {
    function __getMyMemberAbout({ host }) {
        const metadata = {
            entityFqdn: "wix.members.about.v2.member_about",
            method: "GET",
            methodFqn: "wix.members.about.v2.MembersAbout.GetMyMemberAbout",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersAboutV2MembersAboutUrl({
                protoPath: "/v2/abouts/my",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.background.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.background.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.buttonData.styles.backgroundHover.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.items.image.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.items.video.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.items.video.thumbnail.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.galleryData.options.item.ratio"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.x"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.y"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.width"
                            },
                            {
                                path: "memberAbout.content.nodes.imageData.crop.height"
                            },
                            {
                                path: "memberAbout.content.nodes.mapData.mapSettings.lat"
                            },
                            {
                                path: "memberAbout.content.nodes.mapData.mapSettings.lng"
                            },
                            {
                                path: "memberAbout.content.nodes.pollData.poll.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.pollData.poll.options.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.pollData.design.poll.background.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.appEmbedData.image.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.videoData.video.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.videoData.thumbnail.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.audioData.audio.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.audioData.coverImage.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backgroundImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdropImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.background.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.background.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdrop.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdrop.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.layoutData.backdrop.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.shapeData.shape.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.background.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.background.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.media.duration"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbout.content.nodes.cardData.backgroundImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbout.content.nodes.tocData.fontSize"
                            },
                            {
                                path: "memberAbout.content.nodes.tocData.itemSpacing"
                            },
                            {
                                path: "memberAbout.content.nodes.smartBlockCellData.shape.duration"
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "memberAbout.content.metadata.createdTimestamp"
                            },
                            {
                                path: "memberAbout.content.metadata.updatedTimestamp"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __getMyMemberAbout;
}
function queryMemberAbouts(payload) {
    function __queryMemberAbouts({ host }) {
        const metadata = {
            entityFqdn: "wix.members.about.v2.member_about",
            method: "POST",
            methodFqn: "wix.members.about.v2.MembersAbout.QueryMemberAbouts",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersAboutV2MembersAboutUrl({
                protoPath: "/v2/abouts/query",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: "memberAbouts.content.nodes.buttonData.styles.background.gradient.centerX"
                            },
                            {
                                path: "memberAbouts.content.nodes.buttonData.styles.background.gradient.centerY"
                            },
                            {
                                path: "memberAbouts.content.nodes.buttonData.styles.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbouts.content.nodes.buttonData.styles.backgroundHover.gradient.centerX"
                            },
                            {
                                path: "memberAbouts.content.nodes.buttonData.styles.backgroundHover.gradient.centerY"
                            },
                            {
                                path: "memberAbouts.content.nodes.buttonData.styles.backgroundHover.gradient.stops.position"
                            },
                            {
                                path: "memberAbouts.content.nodes.galleryData.items.image.media.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.galleryData.items.video.media.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.galleryData.items.video.thumbnail.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.galleryData.options.item.ratio"
                            },
                            {
                                path: "memberAbouts.content.nodes.imageData.image.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.imageData.crop.x"
                            },
                            {
                                path: "memberAbouts.content.nodes.imageData.crop.y"
                            },
                            {
                                path: "memberAbouts.content.nodes.imageData.crop.width"
                            },
                            {
                                path: "memberAbouts.content.nodes.imageData.crop.height"
                            },
                            {
                                path: "memberAbouts.content.nodes.mapData.mapSettings.lat"
                            },
                            {
                                path: "memberAbouts.content.nodes.mapData.mapSettings.lng"
                            },
                            {
                                path: "memberAbouts.content.nodes.pollData.poll.image.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.pollData.poll.options.image.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.pollData.design.poll.background.image.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.appEmbedData.image.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.videoData.video.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.videoData.thumbnail.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.audioData.audio.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.audioData.coverImage.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.backgroundImage.media.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.backgroundImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.backgroundImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.backgroundImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.backdropImage.media.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.backdropImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.backdropImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.backdropImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.background.gradient.centerX"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.background.gradient.centerY"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.backdrop.gradient.centerX"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.backdrop.gradient.centerY"
                            },
                            {
                                path: "memberAbouts.content.nodes.layoutData.backdrop.gradient.stops.position"
                            },
                            {
                                path: "memberAbouts.content.nodes.shapeData.shape.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.cardData.background.gradient.centerX"
                            },
                            {
                                path: "memberAbouts.content.nodes.cardData.background.gradient.centerY"
                            },
                            {
                                path: "memberAbouts.content.nodes.cardData.background.gradient.stops.position"
                            },
                            {
                                path: "memberAbouts.content.nodes.cardData.backgroundImage.media.duration"
                            },
                            {
                                path: "memberAbouts.content.nodes.cardData.backgroundImage.overlay.gradient.centerX"
                            },
                            {
                                path: "memberAbouts.content.nodes.cardData.backgroundImage.overlay.gradient.centerY"
                            },
                            {
                                path: "memberAbouts.content.nodes.cardData.backgroundImage.overlay.gradient.stops.position"
                            },
                            {
                                path: "memberAbouts.content.nodes.tocData.fontSize"
                            },
                            {
                                path: "memberAbouts.content.nodes.tocData.itemSpacing"
                            },
                            {
                                path: "memberAbouts.content.nodes.smartBlockCellData.shape.duration"
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "memberAbouts.content.metadata.createdTimestamp"
                            },
                            {
                                path: "memberAbouts.content.metadata.updatedTimestamp"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __queryMemberAbouts;
}
;
;
var NodeType = /* @__PURE__ */ ((NodeType2)=>{
    NodeType2["PARAGRAPH"] = "PARAGRAPH";
    NodeType2["TEXT"] = "TEXT";
    NodeType2["HEADING"] = "HEADING";
    NodeType2["BULLETED_LIST"] = "BULLETED_LIST";
    NodeType2["ORDERED_LIST"] = "ORDERED_LIST";
    NodeType2["LIST_ITEM"] = "LIST_ITEM";
    NodeType2["BLOCKQUOTE"] = "BLOCKQUOTE";
    NodeType2["CODE_BLOCK"] = "CODE_BLOCK";
    NodeType2["VIDEO"] = "VIDEO";
    NodeType2["DIVIDER"] = "DIVIDER";
    NodeType2["FILE"] = "FILE";
    NodeType2["GALLERY"] = "GALLERY";
    NodeType2["GIF"] = "GIF";
    NodeType2["HTML"] = "HTML";
    NodeType2["IMAGE"] = "IMAGE";
    NodeType2["LINK_PREVIEW"] = "LINK_PREVIEW";
    NodeType2["MAP"] = "MAP";
    NodeType2["POLL"] = "POLL";
    NodeType2["APP_EMBED"] = "APP_EMBED";
    NodeType2["BUTTON"] = "BUTTON";
    NodeType2["COLLAPSIBLE_LIST"] = "COLLAPSIBLE_LIST";
    NodeType2["TABLE"] = "TABLE";
    NodeType2["EMBED"] = "EMBED";
    NodeType2["COLLAPSIBLE_ITEM"] = "COLLAPSIBLE_ITEM";
    NodeType2["COLLAPSIBLE_ITEM_TITLE"] = "COLLAPSIBLE_ITEM_TITLE";
    NodeType2["COLLAPSIBLE_ITEM_BODY"] = "COLLAPSIBLE_ITEM_BODY";
    NodeType2["TABLE_CELL"] = "TABLE_CELL";
    NodeType2["TABLE_ROW"] = "TABLE_ROW";
    NodeType2["EXTERNAL"] = "EXTERNAL";
    NodeType2["AUDIO"] = "AUDIO";
    NodeType2["CAPTION"] = "CAPTION";
    NodeType2["LAYOUT"] = "LAYOUT";
    NodeType2["LAYOUT_CELL"] = "LAYOUT_CELL";
    NodeType2["SHAPE"] = "SHAPE";
    NodeType2["CARD"] = "CARD";
    NodeType2["TOC"] = "TOC";
    NodeType2["SMART_BLOCK"] = "SMART_BLOCK";
    NodeType2["SMART_BLOCK_CELL"] = "SMART_BLOCK_CELL";
    NodeType2["CHECKBOX_LIST"] = "CHECKBOX_LIST";
    return NodeType2;
})(NodeType || {});
var BackgroundType = /* @__PURE__ */ ((BackgroundType2)=>{
    BackgroundType2["COLOR"] = "COLOR";
    BackgroundType2["GRADIENT"] = "GRADIENT";
    return BackgroundType2;
})(BackgroundType || {});
var GradientType = /* @__PURE__ */ ((GradientType2)=>{
    GradientType2["LINEAR"] = "LINEAR";
    GradientType2["RADIAL"] = "RADIAL";
    return GradientType2;
})(GradientType || {});
var WidthType = /* @__PURE__ */ ((WidthType2)=>{
    WidthType2["CONTENT"] = "CONTENT";
    WidthType2["SMALL"] = "SMALL";
    WidthType2["ORIGINAL"] = "ORIGINAL";
    WidthType2["FULL_WIDTH"] = "FULL_WIDTH";
    return WidthType2;
})(WidthType || {});
var PluginContainerDataAlignment = /* @__PURE__ */ ((PluginContainerDataAlignment2)=>{
    PluginContainerDataAlignment2["CENTER"] = "CENTER";
    PluginContainerDataAlignment2["LEFT"] = "LEFT";
    PluginContainerDataAlignment2["RIGHT"] = "RIGHT";
    return PluginContainerDataAlignment2;
})(PluginContainerDataAlignment || {});
var ButtonDataType = /* @__PURE__ */ ((ButtonDataType2)=>{
    ButtonDataType2["LINK"] = "LINK";
    ButtonDataType2["ACTION"] = "ACTION";
    return ButtonDataType2;
})(ButtonDataType || {});
var Target = /* @__PURE__ */ ((Target2)=>{
    Target2["SELF"] = "SELF";
    Target2["BLANK"] = "BLANK";
    Target2["PARENT"] = "PARENT";
    Target2["TOP"] = "TOP";
    return Target2;
})(Target || {});
var Type = /* @__PURE__ */ ((Type2)=>{
    Type2["VIEW"] = "VIEW";
    Type2["POINTER"] = "POINTER";
    return Type2;
})(Type || {});
var EntranceEffectType = /* @__PURE__ */ ((EntranceEffectType2)=>{
    EntranceEffectType2["FADE"] = "FADE";
    EntranceEffectType2["ARC"] = "ARC";
    EntranceEffectType2["BLUR"] = "BLUR";
    EntranceEffectType2["BOUNCE"] = "BOUNCE";
    EntranceEffectType2["DROP"] = "DROP";
    EntranceEffectType2["EXPAND"] = "EXPAND";
    EntranceEffectType2["FLIP"] = "FLIP";
    EntranceEffectType2["FLOAT"] = "FLOAT";
    EntranceEffectType2["FOLD"] = "FOLD";
    EntranceEffectType2["GLIDE"] = "GLIDE";
    EntranceEffectType2["REVEAL"] = "REVEAL";
    EntranceEffectType2["SHAPE"] = "SHAPE";
    EntranceEffectType2["SHUTTERS"] = "SHUTTERS";
    EntranceEffectType2["SLIDE"] = "SLIDE";
    EntranceEffectType2["SPIN"] = "SPIN";
    EntranceEffectType2["TILT"] = "TILT";
    EntranceEffectType2["TURN"] = "TURN";
    EntranceEffectType2["WINK"] = "WINK";
    return EntranceEffectType2;
})(EntranceEffectType || {});
var LoopEffectType = /* @__PURE__ */ ((LoopEffectType2)=>{
    LoopEffectType2["BOUNCE"] = "BOUNCE";
    LoopEffectType2["BREATHE"] = "BREATHE";
    LoopEffectType2["CROSS"] = "CROSS";
    LoopEffectType2["FLASH"] = "FLASH";
    LoopEffectType2["FLIP"] = "FLIP";
    LoopEffectType2["FOLD"] = "FOLD";
    LoopEffectType2["JELLO"] = "JELLO";
    LoopEffectType2["POKE"] = "POKE";
    LoopEffectType2["PULSE"] = "PULSE";
    LoopEffectType2["RUBBER"] = "RUBBER";
    LoopEffectType2["SPIN"] = "SPIN";
    LoopEffectType2["SWING"] = "SWING";
    LoopEffectType2["WIGGLE"] = "WIGGLE";
    return LoopEffectType2;
})(LoopEffectType || {});
var PointerEffectType = /* @__PURE__ */ ((PointerEffectType2)=>{
    PointerEffectType2["AIRY"] = "AIRY";
    PointerEffectType2["BLOB"] = "BLOB";
    PointerEffectType2["BLUR"] = "BLUR";
    PointerEffectType2["SCALE"] = "SCALE";
    PointerEffectType2["SKEW"] = "SKEW";
    PointerEffectType2["SWIVEL"] = "SWIVEL";
    PointerEffectType2["TILT_3D"] = "TILT_3D";
    PointerEffectType2["TRACK"] = "TRACK";
    PointerEffectType2["TRACK_3D"] = "TRACK_3D";
    return PointerEffectType2;
})(PointerEffectType || {});
var TextAlignment = /* @__PURE__ */ ((TextAlignment2)=>{
    TextAlignment2["AUTO"] = "AUTO";
    TextAlignment2["LEFT"] = "LEFT";
    TextAlignment2["RIGHT"] = "RIGHT";
    TextAlignment2["CENTER"] = "CENTER";
    TextAlignment2["JUSTIFY"] = "JUSTIFY";
    return TextAlignment2;
})(TextAlignment || {});
var LineCap = /* @__PURE__ */ ((LineCap2)=>{
    LineCap2["SQUARE"] = "SQUARE";
    LineCap2["ROUND"] = "ROUND";
    return LineCap2;
})(LineCap || {});
var LineStyle = /* @__PURE__ */ ((LineStyle2)=>{
    LineStyle2["SINGLE"] = "SINGLE";
    LineStyle2["DOUBLE"] = "DOUBLE";
    LineStyle2["DASHED"] = "DASHED";
    LineStyle2["DOTTED"] = "DOTTED";
    return LineStyle2;
})(LineStyle || {});
var Width = /* @__PURE__ */ ((Width2)=>{
    Width2["LARGE"] = "LARGE";
    Width2["MEDIUM"] = "MEDIUM";
    Width2["SMALL"] = "SMALL";
    return Width2;
})(Width || {});
var DividerDataAlignment = /* @__PURE__ */ ((DividerDataAlignment2)=>{
    DividerDataAlignment2["CENTER"] = "CENTER";
    DividerDataAlignment2["LEFT"] = "LEFT";
    DividerDataAlignment2["RIGHT"] = "RIGHT";
    return DividerDataAlignment2;
})(DividerDataAlignment || {});
var ViewMode = /* @__PURE__ */ ((ViewMode2)=>{
    ViewMode2["NONE"] = "NONE";
    ViewMode2["FULL"] = "FULL";
    ViewMode2["MINI"] = "MINI";
    return ViewMode2;
})(ViewMode || {});
var LayoutType = /* @__PURE__ */ ((LayoutType2)=>{
    LayoutType2["COLLAGE"] = "COLLAGE";
    LayoutType2["MASONRY"] = "MASONRY";
    LayoutType2["GRID"] = "GRID";
    LayoutType2["THUMBNAIL"] = "THUMBNAIL";
    LayoutType2["SLIDER"] = "SLIDER";
    LayoutType2["SLIDESHOW"] = "SLIDESHOW";
    LayoutType2["PANORAMA"] = "PANORAMA";
    LayoutType2["COLUMN"] = "COLUMN";
    LayoutType2["MAGIC"] = "MAGIC";
    LayoutType2["FULLSIZE"] = "FULLSIZE";
    return LayoutType2;
})(LayoutType || {});
var Orientation = /* @__PURE__ */ ((Orientation2)=>{
    Orientation2["ROWS"] = "ROWS";
    Orientation2["COLUMNS"] = "COLUMNS";
    return Orientation2;
})(Orientation || {});
var Crop = /* @__PURE__ */ ((Crop2)=>{
    Crop2["FILL"] = "FILL";
    Crop2["FIT"] = "FIT";
    return Crop2;
})(Crop || {});
var ThumbnailsAlignment = /* @__PURE__ */ ((ThumbnailsAlignment2)=>{
    ThumbnailsAlignment2["TOP"] = "TOP";
    ThumbnailsAlignment2["RIGHT"] = "RIGHT";
    ThumbnailsAlignment2["BOTTOM"] = "BOTTOM";
    ThumbnailsAlignment2["LEFT"] = "LEFT";
    ThumbnailsAlignment2["NONE"] = "NONE";
    return ThumbnailsAlignment2;
})(ThumbnailsAlignment || {});
var GIFType = /* @__PURE__ */ ((GIFType2)=>{
    GIFType2["NORMAL"] = "NORMAL";
    GIFType2["STICKER"] = "STICKER";
    return GIFType2;
})(GIFType || {});
var Source = /* @__PURE__ */ ((Source2)=>{
    Source2["HTML"] = "HTML";
    Source2["ADSENSE"] = "ADSENSE";
    Source2["AI"] = "AI";
    Source2["AI_WIDGET"] = "AI_WIDGET";
    return Source2;
})(Source || {});
var StylesPosition = /* @__PURE__ */ ((StylesPosition2)=>{
    StylesPosition2["START"] = "START";
    StylesPosition2["END"] = "END";
    StylesPosition2["TOP"] = "TOP";
    StylesPosition2["HIDDEN"] = "HIDDEN";
    return StylesPosition2;
})(StylesPosition || {});
var MapType = /* @__PURE__ */ ((MapType2)=>{
    MapType2["ROADMAP"] = "ROADMAP";
    MapType2["SATELITE"] = "SATELITE";
    MapType2["HYBRID"] = "HYBRID";
    MapType2["TERRAIN"] = "TERRAIN";
    return MapType2;
})(MapType || {});
var ViewRole = /* @__PURE__ */ ((ViewRole2)=>{
    ViewRole2["CREATOR"] = "CREATOR";
    ViewRole2["VOTERS"] = "VOTERS";
    ViewRole2["EVERYONE"] = "EVERYONE";
    return ViewRole2;
})(ViewRole || {});
var VoteRole = /* @__PURE__ */ ((VoteRole2)=>{
    VoteRole2["SITE_MEMBERS"] = "SITE_MEMBERS";
    VoteRole2["ALL"] = "ALL";
    return VoteRole2;
})(VoteRole || {});
var PollLayoutType = /* @__PURE__ */ ((PollLayoutType2)=>{
    PollLayoutType2["LIST"] = "LIST";
    PollLayoutType2["GRID"] = "GRID";
    return PollLayoutType2;
})(PollLayoutType || {});
var PollLayoutDirection = /* @__PURE__ */ ((PollLayoutDirection2)=>{
    PollLayoutDirection2["LTR"] = "LTR";
    PollLayoutDirection2["RTL"] = "RTL";
    return PollLayoutDirection2;
})(PollLayoutDirection || {});
var PollDesignBackgroundType = /* @__PURE__ */ ((PollDesignBackgroundType2)=>{
    PollDesignBackgroundType2["COLOR"] = "COLOR";
    PollDesignBackgroundType2["IMAGE"] = "IMAGE";
    PollDesignBackgroundType2["GRADIENT"] = "GRADIENT";
    return PollDesignBackgroundType2;
})(PollDesignBackgroundType || {});
var DecorationType = /* @__PURE__ */ ((DecorationType2)=>{
    DecorationType2["BOLD"] = "BOLD";
    DecorationType2["ITALIC"] = "ITALIC";
    DecorationType2["UNDERLINE"] = "UNDERLINE";
    DecorationType2["SPOILER"] = "SPOILER";
    DecorationType2["ANCHOR"] = "ANCHOR";
    DecorationType2["MENTION"] = "MENTION";
    DecorationType2["LINK"] = "LINK";
    DecorationType2["COLOR"] = "COLOR";
    DecorationType2["FONT_SIZE"] = "FONT_SIZE";
    DecorationType2["EXTERNAL"] = "EXTERNAL";
    DecorationType2["STRIKETHROUGH"] = "STRIKETHROUGH";
    DecorationType2["SUPERSCRIPT"] = "SUPERSCRIPT";
    DecorationType2["SUBSCRIPT"] = "SUBSCRIPT";
    DecorationType2["FONT_FAMILY"] = "FONT_FAMILY";
    DecorationType2["SKETCH"] = "SKETCH";
    return DecorationType2;
})(DecorationType || {});
var FontType = /* @__PURE__ */ ((FontType2)=>{
    FontType2["PX"] = "PX";
    FontType2["EM"] = "EM";
    return FontType2;
})(FontType || {});
var Variant = /* @__PURE__ */ ((Variant2)=>{
    Variant2["UNDERLINE"] = "UNDERLINE";
    Variant2["BOX"] = "BOX";
    Variant2["CIRCLE"] = "CIRCLE";
    Variant2["HIGHLIGHT"] = "HIGHLIGHT";
    Variant2["STRIKETHROUGH"] = "STRIKETHROUGH";
    Variant2["CROSSED_OFF"] = "CROSSED_OFF";
    return Variant2;
})(Variant || {});
var Position = /* @__PURE__ */ ((Position2)=>{
    Position2["START"] = "START";
    Position2["END"] = "END";
    Position2["TOP"] = "TOP";
    return Position2;
})(Position || {});
var AspectRatio = /* @__PURE__ */ ((AspectRatio2)=>{
    AspectRatio2["SQUARE"] = "SQUARE";
    AspectRatio2["RECTANGLE"] = "RECTANGLE";
    return AspectRatio2;
})(AspectRatio || {});
var Resizing = /* @__PURE__ */ ((Resizing2)=>{
    Resizing2["FILL"] = "FILL";
    Resizing2["FIT"] = "FIT";
    return Resizing2;
})(Resizing || {});
var Placement = /* @__PURE__ */ ((Placement2)=>{
    Placement2["IMAGE"] = "IMAGE";
    Placement2["PRODUCT_INFO"] = "PRODUCT_INFO";
    return Placement2;
})(Placement || {});
var CardStylesType = /* @__PURE__ */ ((CardStylesType2)=>{
    CardStylesType2["CONTAINED"] = "CONTAINED";
    CardStylesType2["FRAMELESS"] = "FRAMELESS";
    return CardStylesType2;
})(CardStylesType || {});
var Alignment = /* @__PURE__ */ ((Alignment2)=>{
    Alignment2["START"] = "START";
    Alignment2["CENTER"] = "CENTER";
    Alignment2["END"] = "END";
    return Alignment2;
})(Alignment || {});
var Layout = /* @__PURE__ */ ((Layout2)=>{
    Layout2["STACKED"] = "STACKED";
    Layout2["SIDE_BY_SIDE"] = "SIDE_BY_SIDE";
    return Layout2;
})(Layout || {});
var AppType = /* @__PURE__ */ ((AppType2)=>{
    AppType2["PRODUCT"] = "PRODUCT";
    AppType2["EVENT"] = "EVENT";
    AppType2["BOOKING"] = "BOOKING";
    return AppType2;
})(AppType || {});
var InitialExpandedItems = /* @__PURE__ */ ((InitialExpandedItems2)=>{
    InitialExpandedItems2["FIRST"] = "FIRST";
    InitialExpandedItems2["ALL"] = "ALL";
    InitialExpandedItems2["NONE"] = "NONE";
    return InitialExpandedItems2;
})(InitialExpandedItems || {});
var Direction = /* @__PURE__ */ ((Direction2)=>{
    Direction2["LTR"] = "LTR";
    Direction2["RTL"] = "RTL";
    return Direction2;
})(Direction || {});
var VerticalAlignment = /* @__PURE__ */ ((VerticalAlignment2)=>{
    VerticalAlignment2["TOP"] = "TOP";
    VerticalAlignment2["MIDDLE"] = "MIDDLE";
    VerticalAlignment2["BOTTOM"] = "BOTTOM";
    return VerticalAlignment2;
})(VerticalAlignment || {});
var NullValue = /* @__PURE__ */ ((NullValue2)=>{
    NullValue2["NULL_VALUE"] = "NULL_VALUE";
    return NullValue2;
})(NullValue || {});
var ImageScalingScaling = /* @__PURE__ */ ((ImageScalingScaling2)=>{
    ImageScalingScaling2["AUTO"] = "AUTO";
    ImageScalingScaling2["CONTAIN"] = "CONTAIN";
    ImageScalingScaling2["COVER"] = "COVER";
    return ImageScalingScaling2;
})(ImageScalingScaling || {});
var ImagePosition = /* @__PURE__ */ ((ImagePosition2)=>{
    ImagePosition2["CENTER"] = "CENTER";
    ImagePosition2["CENTER_LEFT"] = "CENTER_LEFT";
    ImagePosition2["CENTER_RIGHT"] = "CENTER_RIGHT";
    ImagePosition2["TOP"] = "TOP";
    ImagePosition2["TOP_LEFT"] = "TOP_LEFT";
    ImagePosition2["TOP_RIGHT"] = "TOP_RIGHT";
    ImagePosition2["BOTTOM"] = "BOTTOM";
    ImagePosition2["BOTTOM_LEFT"] = "BOTTOM_LEFT";
    ImagePosition2["BOTTOM_RIGHT"] = "BOTTOM_RIGHT";
    return ImagePosition2;
})(ImagePosition || {});
var LayoutDataBackgroundType = /* @__PURE__ */ ((LayoutDataBackgroundType2)=>{
    LayoutDataBackgroundType2["COLOR"] = "COLOR";
    LayoutDataBackgroundType2["GRADIENT"] = "GRADIENT";
    return LayoutDataBackgroundType2;
})(LayoutDataBackgroundType || {});
var Origin = /* @__PURE__ */ ((Origin2)=>{
    Origin2["IMAGE"] = "IMAGE";
    Origin2["LAYOUT"] = "LAYOUT";
    return Origin2;
})(Origin || {});
var BannerPosition = /* @__PURE__ */ ((BannerPosition2)=>{
    BannerPosition2["TOP"] = "TOP";
    BannerPosition2["BOTTOM"] = "BOTTOM";
    return BannerPosition2;
})(BannerPosition || {});
var LayerEffect = /* @__PURE__ */ ((LayerEffect2)=>{
    LayerEffect2["CENTER"] = "CENTER";
    LayerEffect2["FADE_TO_TOP"] = "FADE_TO_TOP";
    LayerEffect2["FADE_TO_BOTTOM"] = "FADE_TO_BOTTOM";
    return LayerEffect2;
})(LayerEffect || {});
var Shape = /* @__PURE__ */ ((Shape2)=>{
    Shape2["ELLIPSE"] = "ELLIPSE";
    Shape2["TILT"] = "TILT";
    Shape2["LIQUID"] = "LIQUID";
    Shape2["LEFT_WAVE"] = "LEFT_WAVE";
    Shape2["PAINT_SCRIBBLE"] = "PAINT_SCRIBBLE";
    Shape2["INVERTED_ELLIPSE"] = "INVERTED_ELLIPSE";
    Shape2["RIGHT_WAVE"] = "RIGHT_WAVE";
    Shape2["DUNES"] = "DUNES";
    Shape2["WAVES"] = "WAVES";
    Shape2["TRIANGLE"] = "TRIANGLE";
    Shape2["SEMI_ELLIPSE"] = "SEMI_ELLIPSE";
    Shape2["PLANTS"] = "PLANTS";
    Shape2["LAYERED_ELLIPSE"] = "LAYERED_ELLIPSE";
    Shape2["PIXELS"] = "PIXELS";
    Shape2["PAINT"] = "PAINT";
    Shape2["CLOUDS"] = "CLOUDS";
    Shape2["OPTICAL_ILLUSION"] = "OPTICAL_ILLUSION";
    Shape2["STRIPES"] = "STRIPES";
    Shape2["BLOBS"] = "BLOBS";
    Shape2["SEMI_CIRCLES"] = "SEMI_CIRCLES";
    Shape2["HILL"] = "HILL";
    Shape2["BRUSH"] = "BRUSH";
    Shape2["PEAKS"] = "PEAKS";
    Shape2["ANGLED_TRIANGLE"] = "ANGLED_TRIANGLE";
    return Shape2;
})(Shape || {});
var BackdropType = /* @__PURE__ */ ((BackdropType2)=>{
    BackdropType2["COLOR"] = "COLOR";
    BackdropType2["GRADIENT"] = "GRADIENT";
    return BackdropType2;
})(BackdropType || {});
var VerticalAlignmentAlignment = /* @__PURE__ */ ((VerticalAlignmentAlignment2)=>{
    VerticalAlignmentAlignment2["TOP"] = "TOP";
    VerticalAlignmentAlignment2["MIDDLE"] = "MIDDLE";
    VerticalAlignmentAlignment2["BOTTOM"] = "BOTTOM";
    return VerticalAlignmentAlignment2;
})(VerticalAlignmentAlignment || {});
var ResponsivenessBehaviour = /* @__PURE__ */ ((ResponsivenessBehaviour2)=>{
    ResponsivenessBehaviour2["STACK"] = "STACK";
    ResponsivenessBehaviour2["WRAP"] = "WRAP";
    return ResponsivenessBehaviour2;
})(ResponsivenessBehaviour || {});
var DesignTarget = /* @__PURE__ */ ((DesignTarget2)=>{
    DesignTarget2["LAYOUT"] = "LAYOUT";
    DesignTarget2["CELL"] = "CELL";
    return DesignTarget2;
})(DesignTarget || {});
var Scaling = /* @__PURE__ */ ((Scaling2)=>{
    Scaling2["AUTO"] = "AUTO";
    Scaling2["CONTAIN"] = "CONTAIN";
    Scaling2["COVER"] = "COVER";
    return Scaling2;
})(Scaling || {});
var ImagePositionPosition = /* @__PURE__ */ ((ImagePositionPosition2)=>{
    ImagePositionPosition2["CENTER"] = "CENTER";
    ImagePositionPosition2["CENTER_LEFT"] = "CENTER_LEFT";
    ImagePositionPosition2["CENTER_RIGHT"] = "CENTER_RIGHT";
    ImagePositionPosition2["TOP"] = "TOP";
    ImagePositionPosition2["TOP_LEFT"] = "TOP_LEFT";
    ImagePositionPosition2["TOP_RIGHT"] = "TOP_RIGHT";
    ImagePositionPosition2["BOTTOM"] = "BOTTOM";
    ImagePositionPosition2["BOTTOM_LEFT"] = "BOTTOM_LEFT";
    ImagePositionPosition2["BOTTOM_RIGHT"] = "BOTTOM_RIGHT";
    return ImagePositionPosition2;
})(ImagePositionPosition || {});
var CardDataBackgroundType = /* @__PURE__ */ ((CardDataBackgroundType2)=>{
    CardDataBackgroundType2["COLOR"] = "COLOR";
    CardDataBackgroundType2["GRADIENT"] = "GRADIENT";
    return CardDataBackgroundType2;
})(CardDataBackgroundType || {});
var ListStyle = /* @__PURE__ */ ((ListStyle2)=>{
    ListStyle2["PLAIN"] = "PLAIN";
    ListStyle2["NUMBERED"] = "NUMBERED";
    ListStyle2["LETTERS"] = "LETTERS";
    ListStyle2["ROMAN"] = "ROMAN";
    ListStyle2["BULLETED"] = "BULLETED";
    ListStyle2["ALPHABETICAL_INDEX"] = "ALPHABETICAL_INDEX";
    ListStyle2["ALPHABETICAL_INDEX_COMPACT"] = "ALPHABETICAL_INDEX_COMPACT";
    return ListStyle2;
})(ListStyle || {});
var Indentation = /* @__PURE__ */ ((Indentation2)=>{
    Indentation2["NESTED"] = "NESTED";
    Indentation2["FLAT"] = "FLAT";
    return Indentation2;
})(Indentation || {});
var SmartBlockDataType = /* @__PURE__ */ ((SmartBlockDataType2)=>{
    SmartBlockDataType2["SOLID_BOXES"] = "SOLID_BOXES";
    SmartBlockDataType2["NUMBERED_BOXES"] = "NUMBERED_BOXES";
    SmartBlockDataType2["STATS"] = "STATS";
    SmartBlockDataType2["CIRCLE_STATS"] = "CIRCLE_STATS";
    SmartBlockDataType2["SOLID_BOXES_ALTERNATING"] = "SOLID_BOXES_ALTERNATING";
    SmartBlockDataType2["SOLID_JOINED_BOXES"] = "SOLID_JOINED_BOXES";
    SmartBlockDataType2["SIDE_LINE_TEXT"] = "SIDE_LINE_TEXT";
    SmartBlockDataType2["TOP_LINE_TEXT"] = "TOP_LINE_TEXT";
    SmartBlockDataType2["OUTLINE_BOXES_WITH_TOP_CIRCLE"] = "OUTLINE_BOXES_WITH_TOP_CIRCLE";
    SmartBlockDataType2["BIG_BULLETS"] = "BIG_BULLETS";
    SmartBlockDataType2["SMALL_BULLETS"] = "SMALL_BULLETS";
    SmartBlockDataType2["ARROW_BULLETS"] = "ARROW_BULLETS";
    SmartBlockDataType2["PROCESS_STEPS"] = "PROCESS_STEPS";
    SmartBlockDataType2["BAR_STATS"] = "BAR_STATS";
    SmartBlockDataType2["TIMELINE"] = "TIMELINE";
    SmartBlockDataType2["MINIMAL_TIMELINE"] = "MINIMAL_TIMELINE";
    SmartBlockDataType2["PILLS"] = "PILLS";
    SmartBlockDataType2["STAR_RATING"] = "STAR_RATING";
    SmartBlockDataType2["QUOTE_BOXES"] = "QUOTE_BOXES";
    SmartBlockDataType2["CIRCLE"] = "CIRCLE";
    SmartBlockDataType2["PYRAMID"] = "PYRAMID";
    SmartBlockDataType2["STAIRCASE"] = "STAIRCASE";
    SmartBlockDataType2["VERTICAL_FUNNEL"] = "VERTICAL_FUNNEL";
    return SmartBlockDataType2;
})(SmartBlockDataType || {});
var ColumnSize = /* @__PURE__ */ ((ColumnSize2)=>{
    ColumnSize2["SMALL"] = "SMALL";
    ColumnSize2["MEDIUM"] = "MEDIUM";
    ColumnSize2["LARGE"] = "LARGE";
    ColumnSize2["EXTRA_LARGE"] = "EXTRA_LARGE";
    return ColumnSize2;
})(ColumnSize || {});
var SortOrder = /* @__PURE__ */ ((SortOrder2)=>{
    SortOrder2["ASC"] = "ASC";
    SortOrder2["DESC"] = "DESC";
    return SortOrder2;
})(SortOrder || {});
var WebhookIdentityType = /* @__PURE__ */ ((WebhookIdentityType2)=>{
    WebhookIdentityType2["UNKNOWN"] = "UNKNOWN";
    WebhookIdentityType2["ANONYMOUS_VISITOR"] = "ANONYMOUS_VISITOR";
    WebhookIdentityType2["MEMBER"] = "MEMBER";
    WebhookIdentityType2["WIX_USER"] = "WIX_USER";
    WebhookIdentityType2["APP"] = "APP";
    return WebhookIdentityType2;
})(WebhookIdentityType || {});
async function createMemberAbout2(memberAbout) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberAbout
    }, [
        "memberAbout.content"
    ]);
    const reqOpts = createMemberAbout(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data, [
            "memberAbout.content"
        ])?.memberAbout;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberAbout: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberAbout"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function updateMemberAbout2(_id, memberAbout) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberAbout: {
            ...memberAbout,
            id: _id
        }
    }, [
        "memberAbout.content"
    ]);
    const reqOpts = updateMemberAbout(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data, [
            "memberAbout.content"
        ])?.memberAbout;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {
                memberAbout: "$[1]"
            },
            explicitPathsToArguments: {
                "memberAbout.id": "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "memberAbout"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function deleteMemberAbout2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    }, []);
    const reqOpts = deleteMemberAbout(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getMemberAbout2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    }, []);
    const reqOpts = getMemberAbout(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data, [
            "memberAbout.content"
        ])?.memberAbout;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getMyMemberAbout2() {
    const { httpClient, sideEffects } = arguments[0];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({}, []);
    const reqOpts = getMyMemberAbout(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data, [
            "memberAbout.content"
        ]);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {},
            singleArgumentUnchanged: false
        }, []);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
function queryMemberAbouts2() {
    const { httpClient, sideEffects } = arguments[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryBuilder"])({
        func: async (payload)=>{
            const reqOpts = queryMemberAbouts(payload);
            sideEffects?.onSiteCall?.();
            try {
                const result = await httpClient.request(reqOpts);
                sideEffects?.onSuccess?.(result);
                return result;
            } catch (err) {
                sideEffects?.onError?.(err);
                throw err;
            }
        },
        requestTransformer: (query)=>{
            const args = [
                query,
                {}
            ];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
                ...args?.[1],
                query: args?.[0]
            }, []);
        },
        responseTransformer: ({ data })=>{
            const transformedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(data, []), [
                "memberAbouts.content"
            ]);
            return {
                items: transformedData?.memberAbouts,
                pagingMetadata: transformedData?.metadata
            };
        },
        errorTransformer: (err)=>{
            const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
                spreadPathsToArguments: {},
                explicitPathsToArguments: {
                    query: "$[0]"
                },
                singleArgumentUnchanged: false
            });
            throw transformedError;
        },
        pagingMethod: "CURSOR",
        transformationPaths: {}
    });
}
async function typedQueryMemberAbouts(query) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        query
    }, []);
    const reqOpts = queryMemberAbouts(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data, [
            "memberAbouts.content"
        ]);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                query: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "query"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
var utils = {
    query: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryUtils"])()
};
// src/members-about-v2-member-about-members-about.public.ts
function createMemberAbout3(httpClient) {
    return (memberAbout)=>createMemberAbout2(memberAbout, // @ts-ignore
        {
            httpClient
        });
}
function updateMemberAbout3(httpClient) {
    return (_id, memberAbout)=>updateMemberAbout2(_id, memberAbout, // @ts-ignore
        {
            httpClient
        });
}
function deleteMemberAbout3(httpClient) {
    return (_id)=>deleteMemberAbout2(_id, // @ts-ignore
        {
            httpClient
        });
}
function getMemberAbout3(httpClient) {
    return (_id)=>getMemberAbout2(_id, // @ts-ignore
        {
            httpClient
        });
}
function getMyMemberAbout3(httpClient) {
    return ()=>getMyMemberAbout2(// @ts-ignore
        {
            httpClient
        });
}
function queryMemberAbouts3(httpClient) {
    return ()=>queryMemberAbouts2(// @ts-ignore
        {
            httpClient
        });
}
function typedQueryMemberAbouts2(httpClient) {
    return (query)=>typedQueryMemberAbouts(query, // @ts-ignore
        {
            httpClient
        });
}
var onMemberAboutCreated = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.members.about.v2.member_about_created", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
            paths: [
                {
                    path: "entity.content.nodes.buttonData.styles.background.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.buttonData.styles.background.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.buttonData.styles.background.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.buttonData.styles.backgroundHover.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.buttonData.styles.backgroundHover.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.buttonData.styles.backgroundHover.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.galleryData.items.image.media.duration"
                },
                {
                    path: "entity.content.nodes.galleryData.items.video.media.duration"
                },
                {
                    path: "entity.content.nodes.galleryData.items.video.thumbnail.duration"
                },
                {
                    path: "entity.content.nodes.galleryData.options.item.ratio"
                },
                {
                    path: "entity.content.nodes.imageData.image.duration"
                },
                {
                    path: "entity.content.nodes.imageData.crop.x"
                },
                {
                    path: "entity.content.nodes.imageData.crop.y"
                },
                {
                    path: "entity.content.nodes.imageData.crop.width"
                },
                {
                    path: "entity.content.nodes.imageData.crop.height"
                },
                {
                    path: "entity.content.nodes.mapData.mapSettings.lat"
                },
                {
                    path: "entity.content.nodes.mapData.mapSettings.lng"
                },
                {
                    path: "entity.content.nodes.pollData.poll.image.duration"
                },
                {
                    path: "entity.content.nodes.pollData.poll.options.image.duration"
                },
                {
                    path: "entity.content.nodes.pollData.design.poll.background.image.duration"
                },
                {
                    path: "entity.content.nodes.appEmbedData.image.duration"
                },
                {
                    path: "entity.content.nodes.videoData.video.duration"
                },
                {
                    path: "entity.content.nodes.videoData.thumbnail.duration"
                },
                {
                    path: "entity.content.nodes.audioData.audio.duration"
                },
                {
                    path: "entity.content.nodes.audioData.coverImage.duration"
                },
                {
                    path: "entity.content.nodes.layoutData.backgroundImage.media.duration"
                },
                {
                    path: "entity.content.nodes.layoutData.backgroundImage.overlay.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.layoutData.backgroundImage.overlay.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.layoutData.backgroundImage.overlay.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.layoutData.backdropImage.media.duration"
                },
                {
                    path: "entity.content.nodes.layoutData.backdropImage.overlay.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.layoutData.backdropImage.overlay.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.layoutData.backdropImage.overlay.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.layoutData.background.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.layoutData.background.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.layoutData.background.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.layoutData.backdrop.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.layoutData.backdrop.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.layoutData.backdrop.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.shapeData.shape.duration"
                },
                {
                    path: "entity.content.nodes.cardData.background.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.cardData.background.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.cardData.background.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.cardData.backgroundImage.media.duration"
                },
                {
                    path: "entity.content.nodes.cardData.backgroundImage.overlay.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.cardData.backgroundImage.overlay.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.cardData.backgroundImage.overlay.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.tocData.fontSize"
                },
                {
                    path: "entity.content.nodes.tocData.itemSpacing"
                },
                {
                    path: "entity.content.nodes.smartBlockCellData.shape.duration"
                }
            ]
        },
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "entity.content.metadata.createdTimestamp"
                },
                {
                    path: "entity.content.metadata.updatedTimestamp"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
var onMemberAboutDeleted = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.members.about.v2.member_about_deleted", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
            paths: [
                {
                    path: "undefined.content.nodes.buttonData.styles.background.gradient.centerX"
                },
                {
                    path: "undefined.content.nodes.buttonData.styles.background.gradient.centerY"
                },
                {
                    path: "undefined.content.nodes.buttonData.styles.background.gradient.stops.position"
                },
                {
                    path: "undefined.content.nodes.buttonData.styles.backgroundHover.gradient.centerX"
                },
                {
                    path: "undefined.content.nodes.buttonData.styles.backgroundHover.gradient.centerY"
                },
                {
                    path: "undefined.content.nodes.buttonData.styles.backgroundHover.gradient.stops.position"
                },
                {
                    path: "undefined.content.nodes.galleryData.items.image.media.duration"
                },
                {
                    path: "undefined.content.nodes.galleryData.items.video.media.duration"
                },
                {
                    path: "undefined.content.nodes.galleryData.items.video.thumbnail.duration"
                },
                {
                    path: "undefined.content.nodes.galleryData.options.item.ratio"
                },
                {
                    path: "undefined.content.nodes.imageData.image.duration"
                },
                {
                    path: "undefined.content.nodes.imageData.crop.x"
                },
                {
                    path: "undefined.content.nodes.imageData.crop.y"
                },
                {
                    path: "undefined.content.nodes.imageData.crop.width"
                },
                {
                    path: "undefined.content.nodes.imageData.crop.height"
                },
                {
                    path: "undefined.content.nodes.mapData.mapSettings.lat"
                },
                {
                    path: "undefined.content.nodes.mapData.mapSettings.lng"
                },
                {
                    path: "undefined.content.nodes.pollData.poll.image.duration"
                },
                {
                    path: "undefined.content.nodes.pollData.poll.options.image.duration"
                },
                {
                    path: "undefined.content.nodes.pollData.design.poll.background.image.duration"
                },
                {
                    path: "undefined.content.nodes.appEmbedData.image.duration"
                },
                {
                    path: "undefined.content.nodes.videoData.video.duration"
                },
                {
                    path: "undefined.content.nodes.videoData.thumbnail.duration"
                },
                {
                    path: "undefined.content.nodes.audioData.audio.duration"
                },
                {
                    path: "undefined.content.nodes.audioData.coverImage.duration"
                },
                {
                    path: "undefined.content.nodes.layoutData.backgroundImage.media.duration"
                },
                {
                    path: "undefined.content.nodes.layoutData.backgroundImage.overlay.gradient.centerX"
                },
                {
                    path: "undefined.content.nodes.layoutData.backgroundImage.overlay.gradient.centerY"
                },
                {
                    path: "undefined.content.nodes.layoutData.backgroundImage.overlay.gradient.stops.position"
                },
                {
                    path: "undefined.content.nodes.layoutData.backdropImage.media.duration"
                },
                {
                    path: "undefined.content.nodes.layoutData.backdropImage.overlay.gradient.centerX"
                },
                {
                    path: "undefined.content.nodes.layoutData.backdropImage.overlay.gradient.centerY"
                },
                {
                    path: "undefined.content.nodes.layoutData.backdropImage.overlay.gradient.stops.position"
                },
                {
                    path: "undefined.content.nodes.layoutData.background.gradient.centerX"
                },
                {
                    path: "undefined.content.nodes.layoutData.background.gradient.centerY"
                },
                {
                    path: "undefined.content.nodes.layoutData.background.gradient.stops.position"
                },
                {
                    path: "undefined.content.nodes.layoutData.backdrop.gradient.centerX"
                },
                {
                    path: "undefined.content.nodes.layoutData.backdrop.gradient.centerY"
                },
                {
                    path: "undefined.content.nodes.layoutData.backdrop.gradient.stops.position"
                },
                {
                    path: "undefined.content.nodes.shapeData.shape.duration"
                },
                {
                    path: "undefined.content.nodes.cardData.background.gradient.centerX"
                },
                {
                    path: "undefined.content.nodes.cardData.background.gradient.centerY"
                },
                {
                    path: "undefined.content.nodes.cardData.background.gradient.stops.position"
                },
                {
                    path: "undefined.content.nodes.cardData.backgroundImage.media.duration"
                },
                {
                    path: "undefined.content.nodes.cardData.backgroundImage.overlay.gradient.centerX"
                },
                {
                    path: "undefined.content.nodes.cardData.backgroundImage.overlay.gradient.centerY"
                },
                {
                    path: "undefined.content.nodes.cardData.backgroundImage.overlay.gradient.stops.position"
                },
                {
                    path: "undefined.content.nodes.tocData.fontSize"
                },
                {
                    path: "undefined.content.nodes.tocData.itemSpacing"
                },
                {
                    path: "undefined.content.nodes.smartBlockCellData.shape.duration"
                }
            ]
        },
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "undefined.content.metadata.createdTimestamp"
                },
                {
                    path: "undefined.content.metadata.updatedTimestamp"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
var onMemberAboutUpdated = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.members.about.v2.member_about_updated", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
            paths: [
                {
                    path: "entity.content.nodes.buttonData.styles.background.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.buttonData.styles.background.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.buttonData.styles.background.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.buttonData.styles.backgroundHover.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.buttonData.styles.backgroundHover.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.buttonData.styles.backgroundHover.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.galleryData.items.image.media.duration"
                },
                {
                    path: "entity.content.nodes.galleryData.items.video.media.duration"
                },
                {
                    path: "entity.content.nodes.galleryData.items.video.thumbnail.duration"
                },
                {
                    path: "entity.content.nodes.galleryData.options.item.ratio"
                },
                {
                    path: "entity.content.nodes.imageData.image.duration"
                },
                {
                    path: "entity.content.nodes.imageData.crop.x"
                },
                {
                    path: "entity.content.nodes.imageData.crop.y"
                },
                {
                    path: "entity.content.nodes.imageData.crop.width"
                },
                {
                    path: "entity.content.nodes.imageData.crop.height"
                },
                {
                    path: "entity.content.nodes.mapData.mapSettings.lat"
                },
                {
                    path: "entity.content.nodes.mapData.mapSettings.lng"
                },
                {
                    path: "entity.content.nodes.pollData.poll.image.duration"
                },
                {
                    path: "entity.content.nodes.pollData.poll.options.image.duration"
                },
                {
                    path: "entity.content.nodes.pollData.design.poll.background.image.duration"
                },
                {
                    path: "entity.content.nodes.appEmbedData.image.duration"
                },
                {
                    path: "entity.content.nodes.videoData.video.duration"
                },
                {
                    path: "entity.content.nodes.videoData.thumbnail.duration"
                },
                {
                    path: "entity.content.nodes.audioData.audio.duration"
                },
                {
                    path: "entity.content.nodes.audioData.coverImage.duration"
                },
                {
                    path: "entity.content.nodes.layoutData.backgroundImage.media.duration"
                },
                {
                    path: "entity.content.nodes.layoutData.backgroundImage.overlay.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.layoutData.backgroundImage.overlay.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.layoutData.backgroundImage.overlay.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.layoutData.backdropImage.media.duration"
                },
                {
                    path: "entity.content.nodes.layoutData.backdropImage.overlay.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.layoutData.backdropImage.overlay.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.layoutData.backdropImage.overlay.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.layoutData.background.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.layoutData.background.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.layoutData.background.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.layoutData.backdrop.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.layoutData.backdrop.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.layoutData.backdrop.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.shapeData.shape.duration"
                },
                {
                    path: "entity.content.nodes.cardData.background.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.cardData.background.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.cardData.background.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.cardData.backgroundImage.media.duration"
                },
                {
                    path: "entity.content.nodes.cardData.backgroundImage.overlay.gradient.centerX"
                },
                {
                    path: "entity.content.nodes.cardData.backgroundImage.overlay.gradient.centerY"
                },
                {
                    path: "entity.content.nodes.cardData.backgroundImage.overlay.gradient.stops.position"
                },
                {
                    path: "entity.content.nodes.tocData.fontSize"
                },
                {
                    path: "entity.content.nodes.tocData.itemSpacing"
                },
                {
                    path: "entity.content.nodes.smartBlockCellData.shape.duration"
                }
            ]
        },
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "entity.content.metadata.createdTimestamp"
                },
                {
                    path: "entity.content.metadata.updatedTimestamp"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
;
;
;
function customQueryMemberAbouts(httpClient) {
    const router = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryOverloadRouter"])({
        builderQueryFunction: ()=>queryMemberAbouts3(httpClient)(),
        typedQueryFunction: (query)=>typedQueryMemberAbouts2(httpClient)(query),
        hasOptionsParameter: false
    });
    function overloadedQuery(query) {
        return router(...arguments);
    }
    return overloadedQuery;
}
var createMemberAbout4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(createMemberAbout3);
var updateMemberAbout4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(updateMemberAbout3);
var deleteMemberAbout4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteMemberAbout3);
var getMemberAbout4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getMemberAbout3);
var getMyMemberAbout4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getMyMemberAbout3);
var queryMemberAbouts4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(customQueryMemberAbouts);
var onMemberAboutCreated2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onMemberAboutCreated);
var onMemberAboutDeleted2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onMemberAboutDeleted);
var onMemberAboutUpdated2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onMemberAboutUpdated);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_user-member@1.0.56/node_modules/@wix/auto_sdk_members_user-member/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityStatusStatus",
    ()=>ActivityStatusStatus,
    "DeleteStatus",
    ()=>DeleteStatus,
    "Namespace",
    ()=>Namespace,
    "PrivacyStatusStatus",
    ()=>PrivacyStatusStatus,
    "SiteCreatedContext",
    ()=>SiteCreatedContext,
    "SortOrder",
    ()=>SortOrder,
    "State",
    ()=>State,
    "Status",
    ()=>Status,
    "queryUserMembers",
    ()=>queryUserMembers4,
    "utils",
    ()=>utils
]);
// src/members-usermembers-v1-user-member-user-member.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
// src/members-usermembers-v1-user-member-user-member.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-method-router.js [app-client] (ecmascript)");
;
;
;
;
;
;
function resolveWixMembersUsermembersV1UserMembersUrl(opts) {
    const domainToMappings = {
        "api._api_base_domain_": [
            {
                srcPath: "/user-members-api",
                destPath: ""
            }
        ],
        "www.wixapis.com": [
            {
                srcPath: "/members/v1/user-members",
                destPath: "/v1/user-members"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/_api/members/v1/user-members",
                destPath: "/v1/user-members"
            }
        ],
        _: [
            {
                srcPath: "/_api/members/v1/user-members",
                destPath: "/v1/user-members"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_user-member";
function queryUserMembers(payload) {
    function __queryUserMembers({ host }) {
        const metadata = {
            entityFqdn: "wix.members.usermembers.v1.user_member",
            method: "POST",
            methodFqn: "wix.members.usermembers.v1.UserMembers.QueryUserMembers",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveWixMembersUsermembersV1UserMembersUrl({
                protoPath: "/v1/user-members/query",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "userMembers.createdDate"
                            },
                            {
                                path: "userMembers.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __queryUserMembers;
}
;
;
var PrivacyStatusStatus = /* @__PURE__ */ ((PrivacyStatusStatus2)=>{
    PrivacyStatusStatus2["UNKNOWN"] = "UNKNOWN";
    PrivacyStatusStatus2["PRIVATE"] = "PRIVATE";
    PrivacyStatusStatus2["PUBLIC"] = "PUBLIC";
    return PrivacyStatusStatus2;
})(PrivacyStatusStatus || {});
var Status = /* @__PURE__ */ ((Status2)=>{
    Status2["UNKNOWN"] = "UNKNOWN";
    Status2["PENDING"] = "PENDING";
    Status2["APPROVED"] = "APPROVED";
    Status2["BLOCKED"] = "BLOCKED";
    Status2["OFFLINE"] = "OFFLINE";
    return Status2;
})(Status || {});
var ActivityStatusStatus = /* @__PURE__ */ ((ActivityStatusStatus2)=>{
    ActivityStatusStatus2["UNKNOWN"] = "UNKNOWN";
    ActivityStatusStatus2["ACTIVE"] = "ACTIVE";
    ActivityStatusStatus2["MUTED"] = "MUTED";
    return ActivityStatusStatus2;
})(ActivityStatusStatus || {});
var SortOrder = /* @__PURE__ */ ((SortOrder2)=>{
    SortOrder2["ASC"] = "ASC";
    SortOrder2["DESC"] = "DESC";
    return SortOrder2;
})(SortOrder || {});
var State = /* @__PURE__ */ ((State2)=>{
    State2["UNKNOWN"] = "UNKNOWN";
    State2["ENABLED"] = "ENABLED";
    State2["DISABLED"] = "DISABLED";
    State2["PENDING"] = "PENDING";
    State2["DEMO"] = "DEMO";
    return State2;
})(State || {});
var SiteCreatedContext = /* @__PURE__ */ ((SiteCreatedContext2)=>{
    SiteCreatedContext2["OTHER"] = "OTHER";
    SiteCreatedContext2["FROM_TEMPLATE"] = "FROM_TEMPLATE";
    SiteCreatedContext2["DUPLICATE_BY_SITE_TRANSFER"] = "DUPLICATE_BY_SITE_TRANSFER";
    SiteCreatedContext2["DUPLICATE"] = "DUPLICATE";
    SiteCreatedContext2["OLD_SITE_TRANSFER"] = "OLD_SITE_TRANSFER";
    SiteCreatedContext2["FLASH"] = "FLASH";
    return SiteCreatedContext2;
})(SiteCreatedContext || {});
var Namespace = /* @__PURE__ */ ((Namespace2)=>{
    Namespace2["UNKNOWN_NAMESPACE"] = "UNKNOWN_NAMESPACE";
    Namespace2["WIX"] = "WIX";
    Namespace2["SHOUT_OUT"] = "SHOUT_OUT";
    Namespace2["ALBUMS"] = "ALBUMS";
    Namespace2["WIX_STORES_TEST_DRIVE"] = "WIX_STORES_TEST_DRIVE";
    Namespace2["HOTELS"] = "HOTELS";
    Namespace2["CLUBS"] = "CLUBS";
    Namespace2["ONBOARDING_DRAFT"] = "ONBOARDING_DRAFT";
    Namespace2["DEV_SITE"] = "DEV_SITE";
    Namespace2["LOGOS"] = "LOGOS";
    Namespace2["VIDEO_MAKER"] = "VIDEO_MAKER";
    Namespace2["PARTNER_DASHBOARD"] = "PARTNER_DASHBOARD";
    Namespace2["DEV_CENTER_COMPANY"] = "DEV_CENTER_COMPANY";
    Namespace2["HTML_DRAFT"] = "HTML_DRAFT";
    Namespace2["SITELESS_BUSINESS"] = "SITELESS_BUSINESS";
    Namespace2["CREATOR_ECONOMY"] = "CREATOR_ECONOMY";
    Namespace2["DASHBOARD_FIRST"] = "DASHBOARD_FIRST";
    Namespace2["ANYWHERE"] = "ANYWHERE";
    Namespace2["HEADLESS"] = "HEADLESS";
    Namespace2["ACCOUNT_MASTER_CMS"] = "ACCOUNT_MASTER_CMS";
    Namespace2["RISE"] = "RISE";
    Namespace2["BRANDED_FIRST"] = "BRANDED_FIRST";
    Namespace2["NOWNIA"] = "NOWNIA";
    Namespace2["UGC_TEMPLATE"] = "UGC_TEMPLATE";
    Namespace2["CODUX"] = "CODUX";
    Namespace2["MEDIA_DESIGN_CREATOR"] = "MEDIA_DESIGN_CREATOR";
    Namespace2["SHARED_BLOG_ENTERPRISE"] = "SHARED_BLOG_ENTERPRISE";
    Namespace2["STANDALONE_FORMS"] = "STANDALONE_FORMS";
    Namespace2["STANDALONE_EVENTS"] = "STANDALONE_EVENTS";
    Namespace2["MIMIR"] = "MIMIR";
    Namespace2["TWINS"] = "TWINS";
    Namespace2["NANO"] = "NANO";
    Namespace2["BASE44"] = "BASE44";
    Namespace2["CHANNELS"] = "CHANNELS";
    Namespace2["NAUTILUS"] = "NAUTILUS";
    Namespace2["SYMPHONY"] = "SYMPHONY";
    Namespace2["NAUTILUS_APPS"] = "NAUTILUS_APPS";
    Namespace2["VIBU"] = "VIBU";
    Namespace2["ENTERPRISE_BRAND_KIT"] = "ENTERPRISE_BRAND_KIT";
    Namespace2["DEV_CENTER_DEV_SITE"] = "DEV_CENTER_DEV_SITE";
    return Namespace2;
})(Namespace || {});
var DeleteStatus = /* @__PURE__ */ ((DeleteStatus2)=>{
    DeleteStatus2["UNKNOWN"] = "UNKNOWN";
    DeleteStatus2["TRASH"] = "TRASH";
    DeleteStatus2["DELETED"] = "DELETED";
    DeleteStatus2["PENDING_PURGE"] = "PENDING_PURGE";
    DeleteStatus2["PURGED_EXTERNALLY"] = "PURGED_EXTERNALLY";
    return DeleteStatus2;
})(DeleteStatus || {});
function queryUserMembers2() {
    const { httpClient, sideEffects } = arguments[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryBuilder"])({
        func: async (payload)=>{
            const reqOpts = queryUserMembers(payload);
            sideEffects?.onSiteCall?.();
            try {
                const result = await httpClient.request(reqOpts);
                sideEffects?.onSuccess?.(result);
                return result;
            } catch (err) {
                sideEffects?.onError?.(err);
                throw err;
            }
        },
        requestTransformer: (query)=>{
            const args = [
                query,
                {}
            ];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
                ...args?.[1],
                query: args?.[0]
            });
        },
        responseTransformer: ({ data })=>{
            const transformedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(data, []));
            return {
                items: transformedData?.userMembers,
                pagingMetadata: transformedData?.metadata
            };
        },
        errorTransformer: (err)=>{
            const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
                spreadPathsToArguments: {},
                explicitPathsToArguments: {
                    query: "$[0]"
                },
                singleArgumentUnchanged: false
            });
            throw transformedError;
        },
        pagingMethod: "CURSOR",
        transformationPaths: {}
    });
}
async function typedQueryUserMembers(query) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        query
    });
    const reqOpts = queryUserMembers(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                query: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "query"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
var utils = {
    query: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryUtils"])()
};
// src/members-usermembers-v1-user-member-user-member.public.ts
function queryUserMembers3(httpClient) {
    return ()=>queryUserMembers2(// @ts-ignore
        {
            httpClient
        });
}
function typedQueryUserMembers2(httpClient) {
    return (query)=>typedQueryUserMembers(query, // @ts-ignore
        {
            httpClient
        });
}
;
;
function customQueryUserMembers(httpClient) {
    const router = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryOverloadRouter"])({
        builderQueryFunction: ()=>queryUserMembers3(httpClient)(),
        typedQueryFunction: (query)=>typedQueryUserMembers2(httpClient)(query),
        hasOptionsParameter: false
    });
    function overloadedQuery(query) {
        return router(...arguments);
    }
    return overloadedQuery;
}
var queryUserMembers4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(customQueryUserMembers);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_custom-fields@1.0.59/node_modules/@wix/auto_sdk_members_custom-fields/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppliesTo",
    ()=>AppliesTo,
    "DeleteStatus",
    ()=>DeleteStatus,
    "Namespace",
    ()=>Namespace,
    "Origin",
    ()=>Origin,
    "Privacy",
    ()=>Privacy,
    "Section",
    ()=>Section,
    "SiteCreatedContext",
    ()=>SiteCreatedContext,
    "SocialTypeType",
    ()=>SocialTypeType,
    "State",
    ()=>State,
    "Type",
    ()=>Type,
    "WebhookIdentityType",
    ()=>WebhookIdentityType,
    "createCustomField",
    ()=>createCustomField4,
    "deleteCustomField",
    ()=>deleteCustomField4,
    "getCustomField",
    ()=>getCustomField4,
    "hideCustomField",
    ()=>hideCustomField4,
    "listCustomFields",
    ()=>listCustomFields4,
    "updateCustomField",
    ()=>updateCustomField4,
    "updateCustomFieldsOrder",
    ()=>updateCustomFieldsOrder4
]);
// src/members-v1-custom-field-custom-fields.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
// src/members-v1-custom-field-custom-fields.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function resolveComWixpressMembersCustomfieldsCustomFieldsUrl(opts) {
    const domainToMappings = {
        "manage._base_domain_": [
            {
                srcPath: "/_api/members/v1/custom-fields",
                destPath: "/v1/custom-fields"
            }
        ],
        "www._base_domain_": [
            {
                srcPath: "/_api/members/v1/custom-fields",
                destPath: "/v1/custom-fields"
            }
        ],
        "www.wixapis.com": [
            {
                srcPath: "/members/v1/custom-fields",
                destPath: "/v1/custom-fields"
            }
        ],
        "editor-flow.wixapps.net": [
            {
                srcPath: "/_api/members/v1/custom-fields",
                destPath: "/v1/custom-fields"
            }
        ],
        "api._api_base_domain_": [
            {
                srcPath: "/members/v1/custom-fields",
                destPath: ""
            }
        ],
        "editor.wixapps.net": [
            {
                srcPath: "/_api/members/v1/custom-fields",
                destPath: "/v1/custom-fields"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/members/v1/custom-fields",
                destPath: "/v1/custom-fields"
            }
        ],
        _: [
            {
                srcPath: "/_api/members/v1/custom-fields",
                destPath: "/v1/custom-fields"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_custom-fields";
function createCustomField(payload) {
    function __createCustomField({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "field.createdDate"
                    },
                    {
                        path: "field.updatedDate"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field",
            method: "POST",
            methodFqn: "com.wixpress.members.customfields.CustomFields.CreateCustomField",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsCustomFieldsUrl({
                protoPath: "/v1/custom-fields",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "field.createdDate"
                            },
                            {
                                path: "field.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __createCustomField;
}
function getCustomField(payload) {
    function __getCustomField({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field",
            method: "GET",
            methodFqn: "com.wixpress.members.customfields.CustomFields.GetCustomField",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsCustomFieldsUrl({
                protoPath: "/v1/custom-fields/{id}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "field.createdDate"
                            },
                            {
                                path: "field.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __getCustomField;
}
function listCustomFields(payload) {
    function __listCustomFields({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field",
            method: "GET",
            methodFqn: "com.wixpress.members.customfields.CustomFields.ListCustomFields",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsCustomFieldsUrl({
                protoPath: "/v1/custom-fields",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "fields.createdDate"
                            },
                            {
                                path: "fields.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __listCustomFields;
}
function updateCustomField(payload) {
    function __updateCustomField({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "field.createdDate"
                    },
                    {
                        path: "field.updatedDate"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field",
            method: "PATCH",
            methodFqn: "com.wixpress.members.customfields.CustomFields.UpdateCustomField",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsCustomFieldsUrl({
                protoPath: "/v1/custom-fields/{field.id}",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "field.createdDate"
                            },
                            {
                                path: "field.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __updateCustomField;
}
function deleteCustomField(payload) {
    function __deleteCustomField({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field",
            method: "DELETE",
            methodFqn: "com.wixpress.members.customfields.CustomFields.DeleteCustomField",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsCustomFieldsUrl({
                protoPath: "/v1/custom-fields/{id}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __deleteCustomField;
}
function hideCustomField(payload) {
    function __hideCustomField({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field",
            method: "POST",
            methodFqn: "com.wixpress.members.customfields.CustomFields.HideCustomField",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsCustomFieldsUrl({
                protoPath: "/v1/custom-fields/{id}/hide",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __hideCustomField;
}
function updateCustomFieldsOrder(payload) {
    function __updateCustomFieldsOrder({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field",
            method: "POST",
            methodFqn: "com.wixpress.members.customfields.CustomFields.UpdateCustomFieldsOrder",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsCustomFieldsUrl({
                protoPath: "/v1/custom-fields/order",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "fields.createdDate"
                            },
                            {
                                path: "fields.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __updateCustomFieldsOrder;
}
// src/members-v1-custom-field-custom-fields.universal.ts
var Privacy = /* @__PURE__ */ ((Privacy2)=>{
    Privacy2["UNKNOWN"] = "UNKNOWN";
    Privacy2["PUBLIC"] = "PUBLIC";
    Privacy2["PRIVATE"] = "PRIVATE";
    return Privacy2;
})(Privacy || {});
var Type = /* @__PURE__ */ ((Type2)=>{
    Type2["UNKNOWN"] = "UNKNOWN";
    Type2["TEXT"] = "TEXT";
    Type2["NUMBER"] = "NUMBER";
    Type2["DATE"] = "DATE";
    Type2["URL"] = "URL";
    Type2["SOCIAL"] = "SOCIAL";
    return Type2;
})(Type || {});
var SocialTypeType = /* @__PURE__ */ ((SocialTypeType2)=>{
    SocialTypeType2["UNKNOWN"] = "UNKNOWN";
    SocialTypeType2["FACEBOOK"] = "FACEBOOK";
    SocialTypeType2["INSTAGRAM"] = "INSTAGRAM";
    SocialTypeType2["LINKEDIN"] = "LINKEDIN";
    SocialTypeType2["TWITTER"] = "TWITTER";
    SocialTypeType2["YOUTUBE"] = "YOUTUBE";
    SocialTypeType2["PINTEREST"] = "PINTEREST";
    SocialTypeType2["TIKTOK"] = "TIKTOK";
    SocialTypeType2["DEVIANTART"] = "DEVIANTART";
    SocialTypeType2["SOUNDCLOUD"] = "SOUNDCLOUD";
    SocialTypeType2["TUMBLR"] = "TUMBLR";
    SocialTypeType2["VIMEO"] = "VIMEO";
    SocialTypeType2["VKONTAKTE"] = "VKONTAKTE";
    SocialTypeType2["ODNOKLASSNIKI"] = "ODNOKLASSNIKI";
    SocialTypeType2["OTHER"] = "OTHER";
    return SocialTypeType2;
})(SocialTypeType || {});
var Origin = /* @__PURE__ */ ((Origin2)=>{
    Origin2["UNKNOWN"] = "UNKNOWN";
    Origin2["CUSTOM"] = "CUSTOM";
    Origin2["CONTACT"] = "CONTACT";
    Origin2["SYSTEM"] = "SYSTEM";
    return Origin2;
})(Origin || {});
var AppliesTo = /* @__PURE__ */ ((AppliesTo2)=>{
    AppliesTo2["ALL_MEMBERS"] = "ALL_MEMBERS";
    AppliesTo2["SELECTED_MEMBERS"] = "SELECTED_MEMBERS";
    return AppliesTo2;
})(AppliesTo || {});
var Section = /* @__PURE__ */ ((Section2)=>{
    Section2["GENERAL"] = "GENERAL";
    Section2["SOCIAL"] = "SOCIAL";
    Section2["DISPLAY_INFO"] = "DISPLAY_INFO";
    Section2["ADDRESS"] = "ADDRESS";
    return Section2;
})(Section || {});
var State = /* @__PURE__ */ ((State2)=>{
    State2["UNKNOWN"] = "UNKNOWN";
    State2["ENABLED"] = "ENABLED";
    State2["DISABLED"] = "DISABLED";
    State2["PENDING"] = "PENDING";
    State2["DEMO"] = "DEMO";
    return State2;
})(State || {});
var SiteCreatedContext = /* @__PURE__ */ ((SiteCreatedContext2)=>{
    SiteCreatedContext2["OTHER"] = "OTHER";
    SiteCreatedContext2["FROM_TEMPLATE"] = "FROM_TEMPLATE";
    SiteCreatedContext2["DUPLICATE_BY_SITE_TRANSFER"] = "DUPLICATE_BY_SITE_TRANSFER";
    SiteCreatedContext2["DUPLICATE"] = "DUPLICATE";
    SiteCreatedContext2["OLD_SITE_TRANSFER"] = "OLD_SITE_TRANSFER";
    SiteCreatedContext2["FLASH"] = "FLASH";
    return SiteCreatedContext2;
})(SiteCreatedContext || {});
var Namespace = /* @__PURE__ */ ((Namespace2)=>{
    Namespace2["UNKNOWN_NAMESPACE"] = "UNKNOWN_NAMESPACE";
    Namespace2["WIX"] = "WIX";
    Namespace2["SHOUT_OUT"] = "SHOUT_OUT";
    Namespace2["ALBUMS"] = "ALBUMS";
    Namespace2["WIX_STORES_TEST_DRIVE"] = "WIX_STORES_TEST_DRIVE";
    Namespace2["HOTELS"] = "HOTELS";
    Namespace2["CLUBS"] = "CLUBS";
    Namespace2["ONBOARDING_DRAFT"] = "ONBOARDING_DRAFT";
    Namespace2["DEV_SITE"] = "DEV_SITE";
    Namespace2["LOGOS"] = "LOGOS";
    Namespace2["VIDEO_MAKER"] = "VIDEO_MAKER";
    Namespace2["PARTNER_DASHBOARD"] = "PARTNER_DASHBOARD";
    Namespace2["DEV_CENTER_COMPANY"] = "DEV_CENTER_COMPANY";
    Namespace2["HTML_DRAFT"] = "HTML_DRAFT";
    Namespace2["SITELESS_BUSINESS"] = "SITELESS_BUSINESS";
    Namespace2["CREATOR_ECONOMY"] = "CREATOR_ECONOMY";
    Namespace2["DASHBOARD_FIRST"] = "DASHBOARD_FIRST";
    Namespace2["ANYWHERE"] = "ANYWHERE";
    Namespace2["HEADLESS"] = "HEADLESS";
    Namespace2["ACCOUNT_MASTER_CMS"] = "ACCOUNT_MASTER_CMS";
    Namespace2["RISE"] = "RISE";
    Namespace2["BRANDED_FIRST"] = "BRANDED_FIRST";
    Namespace2["NOWNIA"] = "NOWNIA";
    Namespace2["UGC_TEMPLATE"] = "UGC_TEMPLATE";
    Namespace2["CODUX"] = "CODUX";
    Namespace2["MEDIA_DESIGN_CREATOR"] = "MEDIA_DESIGN_CREATOR";
    Namespace2["SHARED_BLOG_ENTERPRISE"] = "SHARED_BLOG_ENTERPRISE";
    Namespace2["STANDALONE_FORMS"] = "STANDALONE_FORMS";
    Namespace2["STANDALONE_EVENTS"] = "STANDALONE_EVENTS";
    Namespace2["MIMIR"] = "MIMIR";
    Namespace2["TWINS"] = "TWINS";
    Namespace2["NANO"] = "NANO";
    Namespace2["BASE44"] = "BASE44";
    Namespace2["CHANNELS"] = "CHANNELS";
    Namespace2["NAUTILUS"] = "NAUTILUS";
    Namespace2["SYMPHONY"] = "SYMPHONY";
    Namespace2["NAUTILUS_APPS"] = "NAUTILUS_APPS";
    Namespace2["VIBU"] = "VIBU";
    Namespace2["ENTERPRISE_BRAND_KIT"] = "ENTERPRISE_BRAND_KIT";
    Namespace2["DEV_CENTER_DEV_SITE"] = "DEV_CENTER_DEV_SITE";
    return Namespace2;
})(Namespace || {});
var DeleteStatus = /* @__PURE__ */ ((DeleteStatus2)=>{
    DeleteStatus2["UNKNOWN"] = "UNKNOWN";
    DeleteStatus2["TRASH"] = "TRASH";
    DeleteStatus2["DELETED"] = "DELETED";
    DeleteStatus2["PENDING_PURGE"] = "PENDING_PURGE";
    DeleteStatus2["PURGED_EXTERNALLY"] = "PURGED_EXTERNALLY";
    return DeleteStatus2;
})(DeleteStatus || {});
var WebhookIdentityType = /* @__PURE__ */ ((WebhookIdentityType2)=>{
    WebhookIdentityType2["UNKNOWN"] = "UNKNOWN";
    WebhookIdentityType2["ANONYMOUS_VISITOR"] = "ANONYMOUS_VISITOR";
    WebhookIdentityType2["MEMBER"] = "MEMBER";
    WebhookIdentityType2["WIX_USER"] = "WIX_USER";
    WebhookIdentityType2["APP"] = "APP";
    return WebhookIdentityType2;
})(WebhookIdentityType || {});
async function createCustomField2(field) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        field
    });
    const reqOpts = createCustomField(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.field;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                field: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "field"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getCustomField2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    });
    const reqOpts = getCustomField(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function listCustomFields2(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        paging: options?.paging
    });
    const reqOpts = listCustomFields(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                paging: "$[0].paging"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function updateCustomField2(_id, field) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        field: {
            ...field,
            id: _id
        }
    });
    const reqOpts = updateCustomField(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.field;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {
                field: "$[1]"
            },
            explicitPathsToArguments: {
                "field.id": "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "field"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function deleteCustomField2(_id, revision) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id,
        revision
    });
    const reqOpts = deleteCustomField(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]",
                revision: "$[1]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "revision"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function hideCustomField2(_id, revision) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id,
        revision
    });
    const reqOpts = hideCustomField(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]",
                revision: "$[1]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "revision"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function updateCustomFieldsOrder2(fieldIds, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        fieldIds,
        section: options?.section
    });
    const reqOpts = updateCustomFieldsOrder(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                fieldIds: "$[0]",
                section: "$[1].section"
            },
            singleArgumentUnchanged: false
        }, [
            "fieldIds",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/members-v1-custom-field-custom-fields.public.ts
function createCustomField3(httpClient) {
    return (field)=>createCustomField2(field, // @ts-ignore
        {
            httpClient
        });
}
function getCustomField3(httpClient) {
    return (_id)=>getCustomField2(_id, // @ts-ignore
        {
            httpClient
        });
}
function listCustomFields3(httpClient) {
    return (options)=>listCustomFields2(options, // @ts-ignore
        {
            httpClient
        });
}
function updateCustomField3(httpClient) {
    return (_id, field)=>updateCustomField2(_id, field, // @ts-ignore
        {
            httpClient
        });
}
function deleteCustomField3(httpClient) {
    return (_id, revision)=>deleteCustomField2(_id, revision, // @ts-ignore
        {
            httpClient
        });
}
function hideCustomField3(httpClient) {
    return (_id, revision)=>hideCustomField2(_id, revision, // @ts-ignore
        {
            httpClient
        });
}
function updateCustomFieldsOrder3(httpClient) {
    return (fieldIds, options)=>updateCustomFieldsOrder2(fieldIds, options, // @ts-ignore
        {
            httpClient
        });
}
;
var createCustomField4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(createCustomField3);
var getCustomField4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getCustomField3);
var listCustomFields4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listCustomFields3);
var updateCustomField4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(updateCustomField3);
var deleteCustomField4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteCustomField3);
var hideCustomField4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(hideCustomField3);
var updateCustomFieldsOrder4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(updateCustomFieldsOrder3);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_custom-field-applications@1.0.41/node_modules/@wix/auto_sdk_members_custom-field-applications/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppliesToEnumAppliesTo",
    ()=>AppliesToEnumAppliesTo,
    "ExclusionType",
    ()=>ExclusionType,
    "FieldTypeType",
    ()=>FieldTypeType,
    "Origin",
    ()=>Origin,
    "Privacy",
    ()=>Privacy,
    "Section",
    ()=>Section,
    "SocialTypeType",
    ()=>SocialTypeType,
    "Type",
    ()=>Type,
    "WebhookIdentityType",
    ()=>WebhookIdentityType,
    "createCustomFieldApplication",
    ()=>createCustomFieldApplication4,
    "deleteCustomFieldApplication",
    ()=>deleteCustomFieldApplication4,
    "getCustomFieldApplication",
    ()=>getCustomFieldApplication4,
    "getCustomFieldApplications",
    ()=>getCustomFieldApplications4,
    "getMembersCustomFieldApplications",
    ()=>getMembersCustomFieldApplications4,
    "getRolesCustomFieldApplications",
    ()=>getRolesCustomFieldApplications4,
    "updateCustomFieldApplication",
    ()=>updateCustomFieldApplication4
]);
// src/members-v1-custom-field-application-custom-field-applications.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
// src/members-v1-custom-field-application-custom-field-applications.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
;
;
;
;
;
;
function resolveComWixpressMembersCustomfieldsApplicationsCustomFieldApplicationsUrl(opts) {
    const domainToMappings = {
        _: [
            {
                srcPath: "/_api/members/v1/custom-fields-applications",
                destPath: "/v1/custom-fields-applications"
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/_api/members/v1/custom-fields-applications",
                destPath: "/v1/custom-fields-applications"
            }
        ],
        "www._base_domain_": [
            {
                srcPath: "/_api/members/v1/custom-fields-applications",
                destPath: "/v1/custom-fields-applications"
            }
        ],
        "www.wixapis.com": [
            {
                srcPath: "/members/v1/custom-fields-applications",
                destPath: "/v1/custom-fields-applications"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/members/v1/custom-fields-applications",
                destPath: "/v1/custom-fields-applications"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_custom-field-applications";
function createCustomFieldApplication(payload) {
    function __createCustomFieldApplication({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field_application",
            method: "POST",
            methodFqn: "com.wixpress.members.customfields.applications.CustomFieldApplications.CreateCustomFieldApplication",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsApplicationsCustomFieldApplicationsUrl({
                protoPath: "/v1/custom-fields-applications",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __createCustomFieldApplication;
}
function deleteCustomFieldApplication(payload) {
    function __deleteCustomFieldApplication({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field_application",
            method: "DELETE",
            methodFqn: "com.wixpress.members.customfields.applications.CustomFieldApplications.DeleteCustomFieldApplication",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsApplicationsCustomFieldApplicationsUrl({
                protoPath: "/v1/custom-fields-applications/{customFieldId}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __deleteCustomFieldApplication;
}
function updateCustomFieldApplication(payload) {
    function __updateCustomFieldApplication({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field_application",
            method: "PATCH",
            methodFqn: "com.wixpress.members.customfields.applications.CustomFieldApplications.UpdateCustomFieldApplication",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsApplicationsCustomFieldApplicationsUrl({
                protoPath: "/v1/custom-fields-applications/{application.customFieldId}",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __updateCustomFieldApplication;
}
function getCustomFieldApplication(payload) {
    function __getCustomFieldApplication({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field_application",
            method: "GET",
            methodFqn: "com.wixpress.members.customfields.applications.CustomFieldApplications.GetCustomFieldApplication",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsApplicationsCustomFieldApplicationsUrl({
                protoPath: "/v1/custom-fields-applications/{customFieldId}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __getCustomFieldApplication;
}
function getCustomFieldApplications(payload) {
    function __getCustomFieldApplications({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field_application",
            method: "POST",
            methodFqn: "com.wixpress.members.customfields.applications.CustomFieldApplications.GetCustomFieldApplications",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsApplicationsCustomFieldApplicationsUrl({
                protoPath: "/v1/custom-fields-applications/applications",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __getCustomFieldApplications;
}
function getMembersCustomFieldApplications(payload) {
    function __getMembersCustomFieldApplications({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field_application",
            method: "POST",
            methodFqn: "com.wixpress.members.customfields.applications.CustomFieldApplications.GetMembersCustomFieldApplications",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsApplicationsCustomFieldApplicationsUrl({
                protoPath: "/v1/custom-fields-applications/members",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "results.applications.customField.createdDate"
                            },
                            {
                                path: "results.applications.customField.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __getMembersCustomFieldApplications;
}
function getRolesCustomFieldApplications(payload) {
    function __getRolesCustomFieldApplications({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field_application",
            method: "POST",
            methodFqn: "com.wixpress.members.customfields.applications.CustomFieldApplications.GetRolesCustomFieldApplications",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsApplicationsCustomFieldApplicationsUrl({
                protoPath: "/v1/custom-fields-applications/roles",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "results.applications.customField.createdDate"
                            },
                            {
                                path: "results.applications.customField.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __getRolesCustomFieldApplications;
}
// src/members-v1-custom-field-application-custom-field-applications.universal.ts
var Type = /* @__PURE__ */ ((Type2)=>{
    Type2["UNKNOWN"] = "UNKNOWN";
    Type2["ROLE"] = "ROLE";
    Type2["BADGE"] = "BADGE";
    Type2["PRICING_PLAN"] = "PRICING_PLAN";
    Type2["MEMBER"] = "MEMBER";
    return Type2;
})(Type || {});
var ExclusionType = /* @__PURE__ */ ((ExclusionType2)=>{
    ExclusionType2["UNKNOWN"] = "UNKNOWN";
    ExclusionType2["ROLE"] = "ROLE";
    ExclusionType2["BADGE"] = "BADGE";
    ExclusionType2["PRICING_PLAN"] = "PRICING_PLAN";
    ExclusionType2["MEMBER"] = "MEMBER";
    return ExclusionType2;
})(ExclusionType || {});
var Privacy = /* @__PURE__ */ ((Privacy2)=>{
    Privacy2["UNKNOWN"] = "UNKNOWN";
    Privacy2["PUBLIC"] = "PUBLIC";
    Privacy2["PRIVATE"] = "PRIVATE";
    return Privacy2;
})(Privacy || {});
var FieldTypeType = /* @__PURE__ */ ((FieldTypeType2)=>{
    FieldTypeType2["UNKNOWN"] = "UNKNOWN";
    FieldTypeType2["TEXT"] = "TEXT";
    FieldTypeType2["NUMBER"] = "NUMBER";
    FieldTypeType2["DATE"] = "DATE";
    FieldTypeType2["URL"] = "URL";
    FieldTypeType2["SOCIAL"] = "SOCIAL";
    return FieldTypeType2;
})(FieldTypeType || {});
var SocialTypeType = /* @__PURE__ */ ((SocialTypeType2)=>{
    SocialTypeType2["UNKNOWN"] = "UNKNOWN";
    SocialTypeType2["FACEBOOK"] = "FACEBOOK";
    SocialTypeType2["INSTAGRAM"] = "INSTAGRAM";
    SocialTypeType2["LINKEDIN"] = "LINKEDIN";
    SocialTypeType2["TWITTER"] = "TWITTER";
    SocialTypeType2["YOUTUBE"] = "YOUTUBE";
    SocialTypeType2["PINTEREST"] = "PINTEREST";
    SocialTypeType2["TIKTOK"] = "TIKTOK";
    SocialTypeType2["DEVIANTART"] = "DEVIANTART";
    SocialTypeType2["SOUNDCLOUD"] = "SOUNDCLOUD";
    SocialTypeType2["TUMBLR"] = "TUMBLR";
    SocialTypeType2["VIMEO"] = "VIMEO";
    SocialTypeType2["VKONTAKTE"] = "VKONTAKTE";
    SocialTypeType2["ODNOKLASSNIKI"] = "ODNOKLASSNIKI";
    SocialTypeType2["OTHER"] = "OTHER";
    return SocialTypeType2;
})(SocialTypeType || {});
var Origin = /* @__PURE__ */ ((Origin2)=>{
    Origin2["UNKNOWN"] = "UNKNOWN";
    Origin2["CUSTOM"] = "CUSTOM";
    Origin2["CONTACT"] = "CONTACT";
    Origin2["SYSTEM"] = "SYSTEM";
    return Origin2;
})(Origin || {});
var AppliesToEnumAppliesTo = /* @__PURE__ */ ((AppliesToEnumAppliesTo2)=>{
    AppliesToEnumAppliesTo2["ALL_MEMBERS"] = "ALL_MEMBERS";
    AppliesToEnumAppliesTo2["SELECTED_MEMBERS"] = "SELECTED_MEMBERS";
    return AppliesToEnumAppliesTo2;
})(AppliesToEnumAppliesTo || {});
var Section = /* @__PURE__ */ ((Section2)=>{
    Section2["GENERAL"] = "GENERAL";
    Section2["SOCIAL"] = "SOCIAL";
    Section2["DISPLAY_INFO"] = "DISPLAY_INFO";
    Section2["ADDRESS"] = "ADDRESS";
    return Section2;
})(Section || {});
var WebhookIdentityType = /* @__PURE__ */ ((WebhookIdentityType2)=>{
    WebhookIdentityType2["UNKNOWN"] = "UNKNOWN";
    WebhookIdentityType2["ANONYMOUS_VISITOR"] = "ANONYMOUS_VISITOR";
    WebhookIdentityType2["MEMBER"] = "MEMBER";
    WebhookIdentityType2["WIX_USER"] = "WIX_USER";
    WebhookIdentityType2["APP"] = "APP";
    return WebhookIdentityType2;
})(WebhookIdentityType || {});
async function createCustomFieldApplication2(application) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        application
    });
    const reqOpts = createCustomFieldApplication(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.application;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                application: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "application"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function deleteCustomFieldApplication2(customFieldId) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        customFieldId
    });
    const reqOpts = deleteCustomFieldApplication(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                customFieldId: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "customFieldId"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function updateCustomFieldApplication2(customFieldId, application) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        application: {
            ...application,
            customFieldId
        }
    });
    const reqOpts = updateCustomFieldApplication(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.application;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {
                application: "$[1]"
            },
            explicitPathsToArguments: {
                "application.customFieldId": "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "customFieldId",
            "application"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getCustomFieldApplication2(customFieldId) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        customFieldId
    });
    const reqOpts = getCustomFieldApplication(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                customFieldId: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "customFieldId"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getCustomFieldApplications2(customFieldIds) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        customFieldIds
    });
    const reqOpts = getCustomFieldApplications(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                customFieldIds: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "customFieldIds"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getMembersCustomFieldApplications2(memberIds) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberIds
    });
    const reqOpts = getMembersCustomFieldApplications(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberIds: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberIds"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getRolesCustomFieldApplications2(roleIds) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        roleIds
    });
    const reqOpts = getRolesCustomFieldApplications(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                roleIds: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "roleIds"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/members-v1-custom-field-application-custom-field-applications.public.ts
function createCustomFieldApplication3(httpClient) {
    return (application)=>createCustomFieldApplication2(application, // @ts-ignore
        {
            httpClient
        });
}
function deleteCustomFieldApplication3(httpClient) {
    return (customFieldId)=>deleteCustomFieldApplication2(customFieldId, // @ts-ignore
        {
            httpClient
        });
}
function updateCustomFieldApplication3(httpClient) {
    return (customFieldId, application)=>updateCustomFieldApplication2(customFieldId, application, // @ts-ignore
        {
            httpClient
        });
}
function getCustomFieldApplication3(httpClient) {
    return (customFieldId)=>getCustomFieldApplication2(customFieldId, // @ts-ignore
        {
            httpClient
        });
}
function getCustomFieldApplications3(httpClient) {
    return (customFieldIds)=>getCustomFieldApplications2(customFieldIds, // @ts-ignore
        {
            httpClient
        });
}
function getMembersCustomFieldApplications3(httpClient) {
    return (memberIds)=>getMembersCustomFieldApplications2(memberIds, // @ts-ignore
        {
            httpClient
        });
}
function getRolesCustomFieldApplications3(httpClient) {
    return (roleIds)=>getRolesCustomFieldApplications2(roleIds, // @ts-ignore
        {
            httpClient
        });
}
;
var createCustomFieldApplication4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(createCustomFieldApplication3);
var deleteCustomFieldApplication4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteCustomFieldApplication3);
var updateCustomFieldApplication4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(updateCustomFieldApplication3);
var getCustomFieldApplication4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getCustomFieldApplication3);
var getCustomFieldApplications4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getCustomFieldApplications3);
var getMembersCustomFieldApplications4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getMembersCustomFieldApplications3);
var getRolesCustomFieldApplications4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getRolesCustomFieldApplications3);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_custom-field-suggestions@1.0.40/node_modules/@wix/auto_sdk_members_custom-field-suggestions/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Origin",
    ()=>Origin,
    "Privacy",
    ()=>Privacy,
    "SocialTypeType",
    ()=>SocialTypeType,
    "SortOrder",
    ()=>SortOrder,
    "Type",
    ()=>Type,
    "listCustomFieldSuggestions",
    ()=>listCustomFieldSuggestions4,
    "queryCustomFieldSuggestions",
    ()=>queryCustomFieldSuggestions4,
    "utils",
    ()=>utils
]);
// src/members-v1-custom-field-suggestion-custom-field-suggestions.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
// src/members-v1-custom-field-suggestion-custom-field-suggestions.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-method-router.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function resolveComWixpressMembersCustomfieldsSuggestionsCustomFieldSuggestionsUrl(opts) {
    const domainToMappings = {
        "api._api_base_domain_": [
            {
                srcPath: "/members-custom-fields-suggestions-api",
                destPath: ""
            }
        ],
        "www.wixapis.com": [
            {
                srcPath: "/members/v1/custom-field-suggestions",
                destPath: "/v1/custom-field-suggestions"
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/_api/members/v1/custom-field-suggestions",
                destPath: "/v1/custom-field-suggestions"
            }
        ],
        "editor.wixapps.net": [
            {
                srcPath: "/_api/members/v1/custom-field-suggestions",
                destPath: "/v1/custom-field-suggestions"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/members/v1/custom-field-suggestions",
                destPath: "/v1/custom-field-suggestions"
            }
        ],
        _: [
            {
                srcPath: "/members/v1/custom-field-suggestions",
                destPath: "/v1/custom-field-suggestions"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_custom-field-suggestions";
function listCustomFieldSuggestions(payload) {
    function __listCustomFieldSuggestions({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKFloatToRESTFloat"],
                paths: [
                    {
                        path: "sorting.origin.latitude"
                    },
                    {
                        path: "sorting.origin.longitude"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field_suggestion",
            method: "GET",
            methodFqn: "com.wixpress.members.customfields.suggestions.CustomFieldSuggestions.ListCustomFieldSuggestions",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsSuggestionsCustomFieldSuggestionsUrl({
                protoPath: "/v1/custom-field-suggestions",
                data: serializedData,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(serializedData, true)
        };
        return metadata;
    }
    return __listCustomFieldSuggestions;
}
function queryCustomFieldSuggestions(payload) {
    function __queryCustomFieldSuggestions({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKFloatToRESTFloat"],
                paths: [
                    {
                        path: "query.sorting.origin.latitude"
                    },
                    {
                        path: "query.sorting.origin.longitude"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.v1.custom_field_suggestion",
            method: "POST",
            methodFqn: "com.wixpress.members.customfields.suggestions.CustomFieldSuggestions.QueryCustomFieldSuggestions",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersCustomfieldsSuggestionsCustomFieldSuggestionsUrl({
                protoPath: "/v1/custom-field-suggestions/query",
                data: serializedData,
                host
            }),
            data: serializedData
        };
        return metadata;
    }
    return __queryCustomFieldSuggestions;
}
;
;
var Privacy = /* @__PURE__ */ ((Privacy2)=>{
    Privacy2["UNKNOWN"] = "UNKNOWN";
    Privacy2["PUBLIC"] = "PUBLIC";
    Privacy2["PRIVATE"] = "PRIVATE";
    return Privacy2;
})(Privacy || {});
var Type = /* @__PURE__ */ ((Type2)=>{
    Type2["UNKNOWN"] = "UNKNOWN";
    Type2["TEXT"] = "TEXT";
    Type2["NUMBER"] = "NUMBER";
    Type2["DATE"] = "DATE";
    Type2["URL"] = "URL";
    Type2["SOCIAL"] = "SOCIAL";
    return Type2;
})(Type || {});
var SocialTypeType = /* @__PURE__ */ ((SocialTypeType2)=>{
    SocialTypeType2["UNKNOWN"] = "UNKNOWN";
    SocialTypeType2["FACEBOOK"] = "FACEBOOK";
    SocialTypeType2["INSTAGRAM"] = "INSTAGRAM";
    SocialTypeType2["LINKEDIN"] = "LINKEDIN";
    SocialTypeType2["TWITTER"] = "TWITTER";
    SocialTypeType2["YOUTUBE"] = "YOUTUBE";
    SocialTypeType2["PINTEREST"] = "PINTEREST";
    SocialTypeType2["TIKTOK"] = "TIKTOK";
    SocialTypeType2["DEVIANTART"] = "DEVIANTART";
    SocialTypeType2["SOUNDCLOUD"] = "SOUNDCLOUD";
    SocialTypeType2["TUMBLR"] = "TUMBLR";
    SocialTypeType2["VIMEO"] = "VIMEO";
    SocialTypeType2["VKONTAKTE"] = "VKONTAKTE";
    SocialTypeType2["ODNOKLASSNIKI"] = "ODNOKLASSNIKI";
    SocialTypeType2["OTHER"] = "OTHER";
    return SocialTypeType2;
})(SocialTypeType || {});
var Origin = /* @__PURE__ */ ((Origin2)=>{
    Origin2["UNKNOWN"] = "UNKNOWN";
    Origin2["CUSTOM"] = "CUSTOM";
    Origin2["CONTACT"] = "CONTACT";
    Origin2["SYSTEM"] = "SYSTEM";
    return Origin2;
})(Origin || {});
var SortOrder = /* @__PURE__ */ ((SortOrder2)=>{
    SortOrder2["ASC"] = "ASC";
    SortOrder2["DESC"] = "DESC";
    return SortOrder2;
})(SortOrder || {});
async function listCustomFieldSuggestions2(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        paging: options?.paging,
        sorting: options?.sorting
    });
    const reqOpts = listCustomFieldSuggestions(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                paging: "$[0].paging",
                sorting: "$[0].sorting"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
function queryCustomFieldSuggestions2() {
    const { httpClient, sideEffects } = arguments[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryBuilder"])({
        func: async (payload)=>{
            const reqOpts = queryCustomFieldSuggestions(payload);
            sideEffects?.onSiteCall?.();
            try {
                const result = await httpClient.request(reqOpts);
                sideEffects?.onSuccess?.(result);
                return result;
            } catch (err) {
                sideEffects?.onError?.(err);
                throw err;
            }
        },
        requestTransformer: (query)=>{
            const args = [
                query,
                {}
            ];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
                ...args?.[1],
                query: args?.[0]
            });
        },
        responseTransformer: ({ data })=>{
            const transformedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(data, []));
            return {
                items: transformedData?.suggestions,
                pagingMetadata: transformedData?.metadata
            };
        },
        errorTransformer: (err)=>{
            const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
                spreadPathsToArguments: {},
                explicitPathsToArguments: {
                    query: "$[0]"
                },
                singleArgumentUnchanged: false
            });
            throw transformedError;
        },
        pagingMethod: "OFFSET",
        transformationPaths: {}
    });
}
async function typedQueryCustomFieldSuggestions(query) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        query
    });
    const reqOpts = queryCustomFieldSuggestions(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                query: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "query"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
var utils = {
    query: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryUtils"])()
};
// src/members-v1-custom-field-suggestion-custom-field-suggestions.public.ts
function listCustomFieldSuggestions3(httpClient) {
    return (options)=>listCustomFieldSuggestions2(options, // @ts-ignore
        {
            httpClient
        });
}
function queryCustomFieldSuggestions3(httpClient) {
    return ()=>queryCustomFieldSuggestions2(// @ts-ignore
        {
            httpClient
        });
}
function typedQueryCustomFieldSuggestions2(httpClient) {
    return (query)=>typedQueryCustomFieldSuggestions(query, // @ts-ignore
        {
            httpClient
        });
}
;
;
function customQueryCustomFieldSuggestions(httpClient) {
    const router = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryOverloadRouter"])({
        builderQueryFunction: ()=>queryCustomFieldSuggestions3(httpClient)(),
        typedQueryFunction: (query)=>typedQueryCustomFieldSuggestions2(httpClient)(query),
        hasOptionsParameter: false
    });
    function overloadedQuery(query) {
        return router(...arguments);
    }
    return overloadedQuery;
}
var listCustomFieldSuggestions4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listCustomFieldSuggestions3);
var queryCustomFieldSuggestions4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(customQueryCustomFieldSuggestions);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_default-privacy@1.0.34/node_modules/@wix/auto_sdk_members_default-privacy/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Privacy",
    ()=>Privacy,
    "getDefaultPrivacyStatus",
    ()=>getDefaultPrivacyStatus4,
    "setDefaultPrivacyStatus",
    ()=>setDefaultPrivacyStatus4
]);
// src/members-v1-default-privacy-default-privacy.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
// src/members-v1-default-privacy-default-privacy.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
;
;
;
;
function resolveComWixpressMembersDefaultprivacyDefaultPrivacyStatusUrl(opts) {
    const domainToMappings = {
        "api._api_base_domain_": [
            {
                srcPath: "/members-default-privacy-status-api",
                destPath: ""
            }
        ],
        "www.wixapis.com": [
            {
                srcPath: "/members/v1/default-privacy-status",
                destPath: "/v1/default-privacy-status"
            }
        ],
        "editor._base_domain_": [
            {
                srcPath: "/_api/members/v1/default-privacy-status",
                destPath: "/v1/default-privacy-status"
            }
        ],
        "blocks._base_domain_": [
            {
                srcPath: "/_api/members/v1/default-privacy-status",
                destPath: "/v1/default-privacy-status"
            }
        ],
        "create.editorx": [
            {
                srcPath: "/_api/members/v1/default-privacy-status",
                destPath: "/v1/default-privacy-status"
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/_api/members/v1/default-privacy-status",
                destPath: "/v1/default-privacy-status"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_default-privacy";
function getDefaultPrivacyStatus(payload) {
    function __getDefaultPrivacyStatus({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.default_privacy",
            method: "GET",
            methodFqn: "com.wixpress.members.defaultprivacy.DefaultPrivacyStatus.GetDefaultPrivacyStatus",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersDefaultprivacyDefaultPrivacyStatusUrl({
                protoPath: "/v1/default-privacy-status",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __getDefaultPrivacyStatus;
}
function setDefaultPrivacyStatus(payload) {
    function __setDefaultPrivacyStatus({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.default_privacy",
            method: "PATCH",
            methodFqn: "com.wixpress.members.defaultprivacy.DefaultPrivacyStatus.SetDefaultPrivacyStatus",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersDefaultprivacyDefaultPrivacyStatusUrl({
                protoPath: "/v1/default-privacy-status",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __setDefaultPrivacyStatus;
}
// src/members-v1-default-privacy-default-privacy.universal.ts
var Privacy = /* @__PURE__ */ ((Privacy2)=>{
    Privacy2["PRIVATE"] = "PRIVATE";
    Privacy2["PUBLIC"] = "PUBLIC";
    return Privacy2;
})(Privacy || {});
async function getDefaultPrivacyStatus2() {
    const { httpClient, sideEffects } = arguments[0];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({});
    const reqOpts = getDefaultPrivacyStatus(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {},
            singleArgumentUnchanged: false
        }, []);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function setDefaultPrivacyStatus2(defaultPrivacy) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        defaultPrivacy
    });
    const reqOpts = setDefaultPrivacyStatus(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                defaultPrivacy: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "defaultPrivacy"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/members-v1-default-privacy-default-privacy.public.ts
function getDefaultPrivacyStatus3(httpClient) {
    return ()=>getDefaultPrivacyStatus2(// @ts-ignore
        {
            httpClient
        });
}
function setDefaultPrivacyStatus3(httpClient) {
    return (defaultPrivacy)=>setDefaultPrivacyStatus2(defaultPrivacy, // @ts-ignore
        {
            httpClient
        });
}
;
var getDefaultPrivacyStatus4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getDefaultPrivacyStatus3);
var setDefaultPrivacyStatus4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(setDefaultPrivacyStatus3);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_members@1.0.131/node_modules/@wix/auto_sdk_members_members/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityStatusStatus",
    ()=>ActivityStatusStatus,
    "DeleteStatus",
    ()=>DeleteStatus,
    "Namespace",
    ()=>Namespace,
    "PrivacyStatusStatus",
    ()=>PrivacyStatusStatus,
    "Set",
    ()=>Set,
    "SiteCreatedContext",
    ()=>SiteCreatedContext,
    "SortOrder",
    ()=>SortOrder,
    "State",
    ()=>State,
    "Status",
    ()=>Status,
    "WebhookIdentityType",
    ()=>WebhookIdentityType,
    "approveMember",
    ()=>approveMember4,
    "blockMember",
    ()=>blockMember4,
    "bulkApproveMembers",
    ()=>bulkApproveMembers4,
    "bulkBlockMembers",
    ()=>bulkBlockMembers4,
    "bulkDeleteMembers",
    ()=>bulkDeleteMembers4,
    "bulkDeleteMembersByFilter",
    ()=>bulkDeleteMembersByFilter4,
    "createMember",
    ()=>createMember4,
    "deleteMember",
    ()=>deleteMember4,
    "deleteMemberAddresses",
    ()=>deleteMemberAddresses4,
    "deleteMemberEmails",
    ()=>deleteMemberEmails4,
    "deleteMemberPhones",
    ()=>deleteMemberPhones4,
    "deleteMyMember",
    ()=>deleteMyMember4,
    "disconnectMember",
    ()=>disconnectMember4,
    "getCurrentMember",
    ()=>getCurrentMember3,
    "getMember",
    ()=>getMember4,
    "joinCommunity",
    ()=>joinCommunity4,
    "leaveCommunity",
    ()=>leaveCommunity4,
    "listMembers",
    ()=>listMembers4,
    "muteMember",
    ()=>muteMember4,
    "onMemberCreated",
    ()=>onMemberCreated2,
    "onMemberDeleted",
    ()=>onMemberDeleted2,
    "onMemberUpdated",
    ()=>onMemberUpdated2,
    "queryMembers",
    ()=>queryMembers4,
    "unmuteMember",
    ()=>unmuteMember4,
    "updateCurrentMemberSlug",
    ()=>updateCurrentMemberSlug3,
    "updateMember",
    ()=>updateMember4,
    "updateMemberSlug",
    ()=>updateMemberSlug4,
    "utils",
    ()=>utils
]);
// src/members-v1-member-members.public.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-types@1.17.11/node_modules/@wix/sdk-types/build/browser/index.mjs [app-client] (ecmascript)");
// src/members-v1-member-members.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder.js [app-client] (ecmascript)");
// src/members-v1-member-members.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/event-definition-modules.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-method-router.js [app-client] (ecmascript)");
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
function resolveComWixpressMembersApiMembersUrl(opts) {
    const domainToMappings = {
        "www.wixapis.com": [
            {
                srcPath: "/members/v1/members",
                destPath: "/v1/members"
            }
        ],
        "api._api_base_domain_": [
            {
                srcPath: "/members-ng-api",
                destPath: ""
            }
        ],
        "www._base_domain_": [
            {
                srcPath: "/_api/members/v1/members",
                destPath: "/v1/members"
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/_api/members/v1/members",
                destPath: "/v1/members"
            }
        ],
        "editor._base_domain_": [
            {
                srcPath: "/_api/members/v1/members",
                destPath: "/v1/members"
            }
        ],
        "blocks._base_domain_": [
            {
                srcPath: "/_api/members/v1/members",
                destPath: "/v1/members"
            }
        ],
        "create.editorx": [
            {
                srcPath: "/_api/members/v1/members",
                destPath: "/v1/members"
            }
        ],
        "editor.wixapps.net": [
            {
                srcPath: "/_api/members/v1/members",
                destPath: "/v1/members"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/_api/members/v1/members",
                destPath: "/v1/members"
            }
        ],
        "bo._base_domain_": [
            {
                srcPath: "/_api/members/v1/members",
                destPath: "/v1/members"
            }
        ],
        "wixbo.ai": [
            {
                srcPath: "/_api/members/v1/members",
                destPath: "/v1/members"
            }
        ],
        "wix-bo.com": [
            {
                srcPath: "/_api/members/v1/members",
                destPath: "/v1/members"
            }
        ],
        _: [
            {
                srcPath: "/_api/members/v1/members",
                destPath: "/v1/members"
            }
        ],
        "members.wixapps.net": [
            {
                srcPath: "/_api/members/v1/members",
                destPath: "/v1/members"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_members";
function updateMySlug(payload) {
    function __updateMySlug({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.UpdateMySlug",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/my/slug",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __updateMySlug;
}
function updateMemberSlug(payload) {
    function __updateMemberSlug({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.UpdateMemberSlug",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/{id}/slug",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __updateMemberSlug;
}
function joinCommunity(payload) {
    function __joinCommunity({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.JoinCommunity",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/join-community",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __joinCommunity;
}
function leaveCommunity(payload) {
    function __leaveCommunity({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.LeaveCommunity",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/leave-community",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __leaveCommunity;
}
function getMyMember(payload) {
    function __getMyMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "GET",
            methodFqn: "com.wixpress.members.api.Members.GetMyMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/my",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __getMyMember;
}
function getMember(payload) {
    function __getMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "GET",
            methodFqn: "com.wixpress.members.api.Members.GetMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/{id}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __getMember;
}
function listMembers(payload) {
    function __listMembers({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKFloatToRESTFloat"],
                paths: [
                    {
                        path: "sorting.origin.latitude"
                    },
                    {
                        path: "sorting.origin.longitude"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "GET",
            methodFqn: "com.wixpress.members.api.Members.ListMembers",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members",
                data: serializedData,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(serializedData, true),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "members.createdDate"
                            },
                            {
                                path: "members.updatedDate"
                            },
                            {
                                path: "members.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __listMembers;
}
function queryMembers(payload) {
    function __queryMembers({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKFloatToRESTFloat"],
                paths: [
                    {
                        path: "query.sorting.origin.latitude"
                    },
                    {
                        path: "query.sorting.origin.longitude"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.QueryMembers",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/query",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "members.createdDate"
                            },
                            {
                                path: "members.updatedDate"
                            },
                            {
                                path: "members.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __queryMembers;
}
function muteMember(payload) {
    function __muteMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.MuteMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/{id}/mute",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __muteMember;
}
function unmuteMember(payload) {
    function __unmuteMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.UnmuteMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/{id}/unmute",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __unmuteMember;
}
function approveMember(payload) {
    function __approveMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.ApproveMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/{id}/approve",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __approveMember;
}
function blockMember(payload) {
    function __blockMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.BlockMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/{id}/block",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __blockMember;
}
function disconnectMember(payload) {
    function __disconnectMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.DisconnectMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/{id}/disconnect",
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __disconnectMember;
}
function deleteMember(payload) {
    function __deleteMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "DELETE",
            methodFqn: "com.wixpress.members.api.Members.DeleteMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/{id}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __deleteMember;
}
function deleteMyMember(payload) {
    function __deleteMyMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "DELETE",
            methodFqn: "com.wixpress.members.api.Members.DeleteMyMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/my",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __deleteMyMember;
}
function bulkDeleteMembers(payload) {
    function __bulkDeleteMembers({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.BulkDeleteMembers",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/bulk/delete",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __bulkDeleteMembers;
}
function bulkDeleteMembersByFilter(payload) {
    function __bulkDeleteMembersByFilter({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.BulkDeleteMembersByFilter",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/bulk/delete-by-filter",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __bulkDeleteMembersByFilter;
}
function bulkApproveMembers(payload) {
    function __bulkApproveMembers({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.BulkApproveMembers",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/bulk/approve-by-filter",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __bulkApproveMembers;
}
function bulkBlockMembers(payload) {
    function __bulkBlockMembers({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.BulkBlockMembers",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/bulk/block-by-filter",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __bulkBlockMembers;
}
function createMember(payload) {
    function __createMember({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "member.createdDate"
                    },
                    {
                        path: "member.updatedDate"
                    },
                    {
                        path: "member.lastLoginDate"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "POST",
            methodFqn: "com.wixpress.members.api.Members.CreateMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __createMember;
}
function updateMember(payload) {
    function __updateMember({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "member.createdDate"
                    },
                    {
                        path: "member.updatedDate"
                    },
                    {
                        path: "member.lastLoginDate"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "PATCH",
            methodFqn: "com.wixpress.members.api.Members.UpdateMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/{member.id}",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __updateMember;
}
function deleteMemberPhones(payload) {
    function __deleteMemberPhones({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "DELETE",
            methodFqn: "com.wixpress.members.api.Members.DeleteMemberPhones",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/{id}/phones",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __deleteMemberPhones;
}
function deleteMemberEmails(payload) {
    function __deleteMemberEmails({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "DELETE",
            methodFqn: "com.wixpress.members.api.Members.DeleteMemberEmails",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/{id}/emails",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __deleteMemberEmails;
}
function deleteMemberAddresses(payload) {
    function __deleteMemberAddresses({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member",
            method: "DELETE",
            methodFqn: "com.wixpress.members.api.Members.DeleteMemberAddresses",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersApiMembersUrl({
                protoPath: "/v1/members/{id}/addresses",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "member.createdDate"
                            },
                            {
                                path: "member.updatedDate"
                            },
                            {
                                path: "member.lastLoginDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __deleteMemberAddresses;
}
;
;
var Status = /* @__PURE__ */ ((Status2)=>{
    Status2["UNKNOWN"] = "UNKNOWN";
    Status2["PENDING"] = "PENDING";
    Status2["APPROVED"] = "APPROVED";
    Status2["BLOCKED"] = "BLOCKED";
    Status2["OFFLINE"] = "OFFLINE";
    return Status2;
})(Status || {});
var PrivacyStatusStatus = /* @__PURE__ */ ((PrivacyStatusStatus2)=>{
    PrivacyStatusStatus2["UNKNOWN"] = "UNKNOWN";
    PrivacyStatusStatus2["PRIVATE"] = "PRIVATE";
    PrivacyStatusStatus2["PUBLIC"] = "PUBLIC";
    return PrivacyStatusStatus2;
})(PrivacyStatusStatus || {});
var ActivityStatusStatus = /* @__PURE__ */ ((ActivityStatusStatus2)=>{
    ActivityStatusStatus2["UNKNOWN"] = "UNKNOWN";
    ActivityStatusStatus2["ACTIVE"] = "ACTIVE";
    ActivityStatusStatus2["MUTED"] = "MUTED";
    return ActivityStatusStatus2;
})(ActivityStatusStatus || {});
var Set = /* @__PURE__ */ ((Set2)=>{
    Set2["PUBLIC"] = "PUBLIC";
    Set2["EXTENDED"] = "EXTENDED";
    Set2["FULL"] = "FULL";
    return Set2;
})(Set || {});
var SortOrder = /* @__PURE__ */ ((SortOrder2)=>{
    SortOrder2["ASC"] = "ASC";
    SortOrder2["DESC"] = "DESC";
    return SortOrder2;
})(SortOrder || {});
var State = /* @__PURE__ */ ((State2)=>{
    State2["UNKNOWN"] = "UNKNOWN";
    State2["ENABLED"] = "ENABLED";
    State2["DISABLED"] = "DISABLED";
    State2["PENDING"] = "PENDING";
    State2["DEMO"] = "DEMO";
    return State2;
})(State || {});
var SiteCreatedContext = /* @__PURE__ */ ((SiteCreatedContext2)=>{
    SiteCreatedContext2["OTHER"] = "OTHER";
    SiteCreatedContext2["FROM_TEMPLATE"] = "FROM_TEMPLATE";
    SiteCreatedContext2["DUPLICATE_BY_SITE_TRANSFER"] = "DUPLICATE_BY_SITE_TRANSFER";
    SiteCreatedContext2["DUPLICATE"] = "DUPLICATE";
    SiteCreatedContext2["OLD_SITE_TRANSFER"] = "OLD_SITE_TRANSFER";
    SiteCreatedContext2["FLASH"] = "FLASH";
    return SiteCreatedContext2;
})(SiteCreatedContext || {});
var Namespace = /* @__PURE__ */ ((Namespace2)=>{
    Namespace2["UNKNOWN_NAMESPACE"] = "UNKNOWN_NAMESPACE";
    Namespace2["WIX"] = "WIX";
    Namespace2["SHOUT_OUT"] = "SHOUT_OUT";
    Namespace2["ALBUMS"] = "ALBUMS";
    Namespace2["WIX_STORES_TEST_DRIVE"] = "WIX_STORES_TEST_DRIVE";
    Namespace2["HOTELS"] = "HOTELS";
    Namespace2["CLUBS"] = "CLUBS";
    Namespace2["ONBOARDING_DRAFT"] = "ONBOARDING_DRAFT";
    Namespace2["DEV_SITE"] = "DEV_SITE";
    Namespace2["LOGOS"] = "LOGOS";
    Namespace2["VIDEO_MAKER"] = "VIDEO_MAKER";
    Namespace2["PARTNER_DASHBOARD"] = "PARTNER_DASHBOARD";
    Namespace2["DEV_CENTER_COMPANY"] = "DEV_CENTER_COMPANY";
    Namespace2["HTML_DRAFT"] = "HTML_DRAFT";
    Namespace2["SITELESS_BUSINESS"] = "SITELESS_BUSINESS";
    Namespace2["CREATOR_ECONOMY"] = "CREATOR_ECONOMY";
    Namespace2["DASHBOARD_FIRST"] = "DASHBOARD_FIRST";
    Namespace2["ANYWHERE"] = "ANYWHERE";
    Namespace2["HEADLESS"] = "HEADLESS";
    Namespace2["ACCOUNT_MASTER_CMS"] = "ACCOUNT_MASTER_CMS";
    Namespace2["RISE"] = "RISE";
    Namespace2["BRANDED_FIRST"] = "BRANDED_FIRST";
    Namespace2["NOWNIA"] = "NOWNIA";
    Namespace2["UGC_TEMPLATE"] = "UGC_TEMPLATE";
    Namespace2["CODUX"] = "CODUX";
    Namespace2["MEDIA_DESIGN_CREATOR"] = "MEDIA_DESIGN_CREATOR";
    Namespace2["SHARED_BLOG_ENTERPRISE"] = "SHARED_BLOG_ENTERPRISE";
    Namespace2["STANDALONE_FORMS"] = "STANDALONE_FORMS";
    Namespace2["STANDALONE_EVENTS"] = "STANDALONE_EVENTS";
    Namespace2["MIMIR"] = "MIMIR";
    Namespace2["TWINS"] = "TWINS";
    Namespace2["NANO"] = "NANO";
    Namespace2["BASE44"] = "BASE44";
    Namespace2["CHANNELS"] = "CHANNELS";
    Namespace2["NAUTILUS"] = "NAUTILUS";
    Namespace2["SYMPHONY"] = "SYMPHONY";
    Namespace2["NAUTILUS_APPS"] = "NAUTILUS_APPS";
    Namespace2["VIBU"] = "VIBU";
    Namespace2["ENTERPRISE_BRAND_KIT"] = "ENTERPRISE_BRAND_KIT";
    Namespace2["DEV_CENTER_DEV_SITE"] = "DEV_CENTER_DEV_SITE";
    return Namespace2;
})(Namespace || {});
var DeleteStatus = /* @__PURE__ */ ((DeleteStatus2)=>{
    DeleteStatus2["UNKNOWN"] = "UNKNOWN";
    DeleteStatus2["TRASH"] = "TRASH";
    DeleteStatus2["DELETED"] = "DELETED";
    DeleteStatus2["PENDING_PURGE"] = "PENDING_PURGE";
    DeleteStatus2["PURGED_EXTERNALLY"] = "PURGED_EXTERNALLY";
    return DeleteStatus2;
})(DeleteStatus || {});
var WebhookIdentityType = /* @__PURE__ */ ((WebhookIdentityType2)=>{
    WebhookIdentityType2["UNKNOWN"] = "UNKNOWN";
    WebhookIdentityType2["ANONYMOUS_VISITOR"] = "ANONYMOUS_VISITOR";
    WebhookIdentityType2["MEMBER"] = "MEMBER";
    WebhookIdentityType2["WIX_USER"] = "WIX_USER";
    WebhookIdentityType2["APP"] = "APP";
    return WebhookIdentityType2;
})(WebhookIdentityType || {});
async function updateCurrentMemberSlug(slug) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        slug
    });
    const reqOpts = updateMySlug(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                slug: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "slug"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function updateMemberSlug2(_id, slug) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id,
        slug
    });
    const reqOpts = updateMemberSlug(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]",
                slug: "$[1]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "slug"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function joinCommunity2() {
    const { httpClient, sideEffects } = arguments[0];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({});
    const reqOpts = joinCommunity(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {},
            singleArgumentUnchanged: false
        }, []);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function leaveCommunity2() {
    const { httpClient, sideEffects } = arguments[0];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({});
    const reqOpts = leaveCommunity(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {},
            singleArgumentUnchanged: false
        }, []);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getCurrentMember(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        fieldsets: options?.fieldsets
    });
    const reqOpts = getMyMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                fieldsets: "$[0].fieldsets"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getMember2(_id, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id,
        fieldsets: options?.fieldsets
    });
    const reqOpts = getMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.member;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]",
                fieldsets: "$[1].fieldsets"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function listMembers2(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        paging: options?.paging,
        fieldsets: options?.fieldsets,
        sorting: options?.sorting
    });
    const reqOpts = listMembers(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                paging: "$[0].paging",
                fieldsets: "$[0].fieldsets",
                sorting: "$[0].sorting"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
function queryMembers2(options) {
    const { httpClient, sideEffects } = arguments[1];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryBuilder"])({
        func: async (payload)=>{
            const reqOpts = queryMembers({
                ...payload,
                ...options ?? {}
            });
            sideEffects?.onSiteCall?.();
            try {
                const result = await httpClient.request(reqOpts);
                sideEffects?.onSuccess?.(result);
                return result;
            } catch (err) {
                sideEffects?.onError?.(err);
                throw err;
            }
        },
        requestTransformer: (query)=>{
            const args = [
                query,
                options
            ];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
                ...args?.[1],
                query: args?.[0]
            });
        },
        responseTransformer: ({ data })=>{
            const transformedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(data, []));
            return {
                items: transformedData?.members,
                pagingMetadata: transformedData?.metadata
            };
        },
        errorTransformer: (err)=>{
            const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
                spreadPathsToArguments: {},
                explicitPathsToArguments: {
                    query: "$[0]"
                },
                singleArgumentUnchanged: false
            });
            throw transformedError;
        },
        pagingMethod: "OFFSET",
        transformationPaths: {}
    });
}
async function typedQueryMembers(query, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        query,
        ...options
    });
    const reqOpts = queryMembers(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                query: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "query",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
var utils = {
    query: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryUtils"])()
};
async function muteMember2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    });
    const reqOpts = muteMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function unmuteMember2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    });
    const reqOpts = unmuteMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function approveMember2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    });
    const reqOpts = approveMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function blockMember2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    });
    const reqOpts = blockMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function disconnectMember2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    });
    const reqOpts = disconnectMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function deleteMember2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    });
    const reqOpts = deleteMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function deleteMyMember2(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        contentAssigneeId: options?.contentAssigneeId
    });
    const reqOpts = deleteMyMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                contentAssigneeId: "$[0].contentAssigneeId"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function bulkDeleteMembers2(memberIds) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberIds
    });
    const reqOpts = bulkDeleteMembers(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberIds: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberIds"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function bulkDeleteMembersByFilter2(filter, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        filter,
        contentAssigneeId: options?.contentAssigneeId,
        search: options?.search
    });
    const reqOpts = bulkDeleteMembersByFilter(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                filter: "$[0]",
                contentAssigneeId: "$[1].contentAssigneeId",
                search: "$[1].search"
            },
            singleArgumentUnchanged: false
        }, [
            "filter",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function bulkApproveMembers2(filter) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        filter
    });
    const reqOpts = bulkApproveMembers(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                filter: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "filter"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function bulkBlockMembers2(filter) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        filter
    });
    const reqOpts = bulkBlockMembers(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                filter: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "filter"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function createMember2(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        member: options?.member
    });
    const reqOpts = createMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.member;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                member: "$[0].member"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function updateMember2(_id, member) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        member: {
            ...member,
            id: _id
        }
    });
    const reqOpts = updateMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.member;
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {
                member: "$[1]"
            },
            explicitPathsToArguments: {
                "member.id": "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id",
            "member"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function deleteMemberPhones2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    });
    const reqOpts = deleteMemberPhones(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function deleteMemberEmails2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    });
    const reqOpts = deleteMemberEmails(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function deleteMemberAddresses2(_id) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        id: _id
    });
    const reqOpts = deleteMemberAddresses(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                id: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "_id"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/members-v1-member-members.public.ts
function updateCurrentMemberSlug2(httpClient) {
    return (slug)=>updateCurrentMemberSlug(slug, // @ts-ignore
        {
            httpClient
        });
}
function updateMemberSlug3(httpClient) {
    return (_id, slug)=>updateMemberSlug2(_id, slug, // @ts-ignore
        {
            httpClient
        });
}
function joinCommunity3(httpClient) {
    return ()=>joinCommunity2(// @ts-ignore
        {
            httpClient
        });
}
function leaveCommunity3(httpClient) {
    return ()=>leaveCommunity2(// @ts-ignore
        {
            httpClient
        });
}
function getCurrentMember2(httpClient) {
    return (options)=>getCurrentMember(options, // @ts-ignore
        {
            httpClient
        });
}
function getMember3(httpClient) {
    return (_id, options)=>getMember2(_id, options, // @ts-ignore
        {
            httpClient
        });
}
function listMembers3(httpClient) {
    return (options)=>listMembers2(options, // @ts-ignore
        {
            httpClient
        });
}
function queryMembers3(httpClient) {
    return (options)=>queryMembers2(options, // @ts-ignore
        {
            httpClient
        });
}
function typedQueryMembers2(httpClient) {
    return (query, options)=>typedQueryMembers(query, options, // @ts-ignore
        {
            httpClient
        });
}
function muteMember3(httpClient) {
    return (_id)=>muteMember2(_id, // @ts-ignore
        {
            httpClient
        });
}
function unmuteMember3(httpClient) {
    return (_id)=>unmuteMember2(_id, // @ts-ignore
        {
            httpClient
        });
}
function approveMember3(httpClient) {
    return (_id)=>approveMember2(_id, // @ts-ignore
        {
            httpClient
        });
}
function blockMember3(httpClient) {
    return (_id)=>blockMember2(_id, // @ts-ignore
        {
            httpClient
        });
}
function disconnectMember3(httpClient) {
    return (_id)=>disconnectMember2(_id, // @ts-ignore
        {
            httpClient
        });
}
function deleteMember3(httpClient) {
    return (_id)=>deleteMember2(_id, // @ts-ignore
        {
            httpClient
        });
}
function deleteMyMember3(httpClient) {
    return (options)=>deleteMyMember2(options, // @ts-ignore
        {
            httpClient
        });
}
function bulkDeleteMembers3(httpClient) {
    return (memberIds)=>bulkDeleteMembers2(memberIds, // @ts-ignore
        {
            httpClient
        });
}
function bulkDeleteMembersByFilter3(httpClient) {
    return (filter, options)=>bulkDeleteMembersByFilter2(filter, options, // @ts-ignore
        {
            httpClient
        });
}
function bulkApproveMembers3(httpClient) {
    return (filter)=>bulkApproveMembers2(filter, // @ts-ignore
        {
            httpClient
        });
}
function bulkBlockMembers3(httpClient) {
    return (filter)=>bulkBlockMembers2(filter, // @ts-ignore
        {
            httpClient
        });
}
function createMember3(httpClient) {
    return (options)=>createMember2(options, // @ts-ignore
        {
            httpClient
        });
}
function updateMember3(httpClient) {
    return (_id, member)=>updateMember2(_id, member, // @ts-ignore
        {
            httpClient
        });
}
function deleteMemberPhones3(httpClient) {
    return (_id)=>deleteMemberPhones2(_id, // @ts-ignore
        {
            httpClient
        });
}
function deleteMemberEmails3(httpClient) {
    return (_id)=>deleteMemberEmails2(_id, // @ts-ignore
        {
            httpClient
        });
}
function deleteMemberAddresses3(httpClient) {
    return (_id)=>deleteMemberAddresses2(_id, // @ts-ignore
        {
            httpClient
        });
}
var onMemberCreated = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.members.v1.member_created", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "entity.createdDate"
                },
                {
                    path: "entity.updatedDate"
                },
                {
                    path: "entity.lastLoginDate"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
var onMemberDeleted = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.members.v1.member_deleted", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "undefined.createdDate"
                },
                {
                    path: "undefined.updatedDate"
                },
                {
                    path: "undefined.lastLoginDate"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
var onMemberUpdated = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.members.v1.member_updated", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "entity.createdDate"
                },
                {
                    path: "entity.updatedDate"
                },
                {
                    path: "entity.lastLoginDate"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
;
;
;
function customQueryMembers(httpClient) {
    const router = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryOverloadRouter"])({
        builderQueryFunction: (options)=>queryMembers3(httpClient)(options),
        typedQueryFunction: (query, options)=>typedQueryMembers2(httpClient)(query, options),
        hasOptionsParameter: true
    });
    function overloadedQuery(queryOrOptions, options) {
        return router(...arguments);
    }
    return overloadedQuery;
}
var updateCurrentMemberSlug3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(updateCurrentMemberSlug2);
var updateMemberSlug4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(updateMemberSlug3);
var joinCommunity4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(joinCommunity3);
var leaveCommunity4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(leaveCommunity3);
var getCurrentMember3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getCurrentMember2);
var getMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getMember3);
var listMembers4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listMembers3);
var muteMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(muteMember3);
var unmuteMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(unmuteMember3);
var approveMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(approveMember3);
var blockMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(blockMember3);
var disconnectMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(disconnectMember3);
var deleteMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteMember3);
var deleteMyMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteMyMember3);
var bulkDeleteMembers4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(bulkDeleteMembers3);
var bulkDeleteMembersByFilter4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(bulkDeleteMembersByFilter3);
var bulkApproveMembers4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(bulkApproveMembers3);
var bulkBlockMembers4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(bulkBlockMembers3);
var createMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(createMember3);
var updateMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(updateMember3);
var deleteMemberPhones4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteMemberPhones3);
var deleteMemberEmails4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteMemberEmails3);
var deleteMemberAddresses4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteMemberAddresses3);
var queryMembers4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(customQueryMembers);
var onMemberCreated2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onMemberCreated);
var onMemberDeleted2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onMemberDeleted);
var onMemberUpdated2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onMemberUpdated);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-privacy-settings@1.0.59/node_modules/@wix/auto_sdk_members_member-privacy-settings/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Candidates",
    ()=>Candidates,
    "DeleteStatus",
    ()=>DeleteStatus,
    "Namespace",
    ()=>Namespace,
    "SiteCreatedContext",
    ()=>SiteCreatedContext,
    "State",
    ()=>State,
    "Visibility",
    ()=>Visibility,
    "WebhookIdentityType",
    ()=>WebhookIdentityType,
    "getMemberPrivacySettings",
    ()=>getMemberPrivacySettings4,
    "setMemberPrivacySettings",
    ()=>setMemberPrivacySettings4
]);
// src/members-v1-member-privacy-settings-member-privacy-settings.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
// src/members-v1-member-privacy-settings-member-privacy-settings.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function resolveComWixpressMembersMemberprivacysettingsMemberPrivacySettingsServiceUrl(opts) {
    const domainToMappings = {
        "editor.wixapps.net": [
            {
                srcPath: "/_api/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ],
        "api._api_base_domain_": [
            {
                srcPath: "/members/v1/privacy-settings",
                destPath: ""
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/_api/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ],
        "editor._base_domain_": [
            {
                srcPath: "/_api/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ],
        "blocks._base_domain_": [
            {
                srcPath: "/_api/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ],
        "create.editorx": [
            {
                srcPath: "/_api/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ],
        "www.wixapis.com": [
            {
                srcPath: "/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ],
        _: [
            {
                srcPath: "/_api/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ],
        "www._base_domain_": [
            {
                srcPath: "/_api/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/_api/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ],
        "bo._base_domain_": [
            {
                srcPath: "/_api/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ],
        "wixbo.ai": [
            {
                srcPath: "/_api/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ],
        "wix-bo.com": [
            {
                srcPath: "/_api/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ],
        "apps._base_domain_": [
            {
                srcPath: "/_api/members/v1/privacy-settings",
                destPath: "/v1/privacy-settings"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_member-privacy-settings";
function getMemberPrivacySettings(payload) {
    function __getMemberPrivacySettings({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member_privacy_settings",
            method: "GET",
            methodFqn: "com.wixpress.members.memberprivacysettings.MemberPrivacySettingsService.GetMemberPrivacySettings",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberprivacysettingsMemberPrivacySettingsServiceUrl({
                protoPath: "/v1/privacy-settings",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "memberPrivacySettings.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __getMemberPrivacySettings;
}
function setMemberPrivacySettings(payload) {
    function __setMemberPrivacySettings({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "memberPrivacySettings.updatedDate"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.v1.member_privacy_settings",
            method: "POST",
            methodFqn: "com.wixpress.members.memberprivacysettings.MemberPrivacySettingsService.SetMemberPrivacySettings",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberprivacysettingsMemberPrivacySettingsServiceUrl({
                protoPath: "/v1/privacy-settings",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "memberPrivacySettings.updatedDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __setMemberPrivacySettings;
}
// src/members-v1-member-privacy-settings-member-privacy-settings.universal.ts
var Visibility = /* @__PURE__ */ ((Visibility2)=>{
    Visibility2["UNKNOWN"] = "UNKNOWN";
    Visibility2["VISIBLE_TO_MEMBERS_ONLY"] = "VISIBLE_TO_MEMBERS_ONLY";
    Visibility2["VISIBLE_TO_ALL"] = "VISIBLE_TO_ALL";
    return Visibility2;
})(Visibility || {});
var Candidates = /* @__PURE__ */ ((Candidates2)=>{
    Candidates2["UNKNOWN"] = "UNKNOWN";
    Candidates2["NO_ONE"] = "NO_ONE";
    Candidates2["ANYONE"] = "ANYONE";
    return Candidates2;
})(Candidates || {});
var State = /* @__PURE__ */ ((State2)=>{
    State2["UNKNOWN"] = "UNKNOWN";
    State2["ENABLED"] = "ENABLED";
    State2["DISABLED"] = "DISABLED";
    State2["PENDING"] = "PENDING";
    State2["DEMO"] = "DEMO";
    return State2;
})(State || {});
var SiteCreatedContext = /* @__PURE__ */ ((SiteCreatedContext2)=>{
    SiteCreatedContext2["OTHER"] = "OTHER";
    SiteCreatedContext2["FROM_TEMPLATE"] = "FROM_TEMPLATE";
    SiteCreatedContext2["DUPLICATE_BY_SITE_TRANSFER"] = "DUPLICATE_BY_SITE_TRANSFER";
    SiteCreatedContext2["DUPLICATE"] = "DUPLICATE";
    SiteCreatedContext2["OLD_SITE_TRANSFER"] = "OLD_SITE_TRANSFER";
    SiteCreatedContext2["FLASH"] = "FLASH";
    return SiteCreatedContext2;
})(SiteCreatedContext || {});
var Namespace = /* @__PURE__ */ ((Namespace2)=>{
    Namespace2["UNKNOWN_NAMESPACE"] = "UNKNOWN_NAMESPACE";
    Namespace2["WIX"] = "WIX";
    Namespace2["SHOUT_OUT"] = "SHOUT_OUT";
    Namespace2["ALBUMS"] = "ALBUMS";
    Namespace2["WIX_STORES_TEST_DRIVE"] = "WIX_STORES_TEST_DRIVE";
    Namespace2["HOTELS"] = "HOTELS";
    Namespace2["CLUBS"] = "CLUBS";
    Namespace2["ONBOARDING_DRAFT"] = "ONBOARDING_DRAFT";
    Namespace2["DEV_SITE"] = "DEV_SITE";
    Namespace2["LOGOS"] = "LOGOS";
    Namespace2["VIDEO_MAKER"] = "VIDEO_MAKER";
    Namespace2["PARTNER_DASHBOARD"] = "PARTNER_DASHBOARD";
    Namespace2["DEV_CENTER_COMPANY"] = "DEV_CENTER_COMPANY";
    Namespace2["HTML_DRAFT"] = "HTML_DRAFT";
    Namespace2["SITELESS_BUSINESS"] = "SITELESS_BUSINESS";
    Namespace2["CREATOR_ECONOMY"] = "CREATOR_ECONOMY";
    Namespace2["DASHBOARD_FIRST"] = "DASHBOARD_FIRST";
    Namespace2["ANYWHERE"] = "ANYWHERE";
    Namespace2["HEADLESS"] = "HEADLESS";
    Namespace2["ACCOUNT_MASTER_CMS"] = "ACCOUNT_MASTER_CMS";
    Namespace2["RISE"] = "RISE";
    Namespace2["BRANDED_FIRST"] = "BRANDED_FIRST";
    Namespace2["NOWNIA"] = "NOWNIA";
    Namespace2["UGC_TEMPLATE"] = "UGC_TEMPLATE";
    Namespace2["CODUX"] = "CODUX";
    Namespace2["MEDIA_DESIGN_CREATOR"] = "MEDIA_DESIGN_CREATOR";
    Namespace2["SHARED_BLOG_ENTERPRISE"] = "SHARED_BLOG_ENTERPRISE";
    Namespace2["STANDALONE_FORMS"] = "STANDALONE_FORMS";
    Namespace2["STANDALONE_EVENTS"] = "STANDALONE_EVENTS";
    Namespace2["MIMIR"] = "MIMIR";
    Namespace2["TWINS"] = "TWINS";
    Namespace2["NANO"] = "NANO";
    Namespace2["BASE44"] = "BASE44";
    Namespace2["CHANNELS"] = "CHANNELS";
    Namespace2["NAUTILUS"] = "NAUTILUS";
    Namespace2["SYMPHONY"] = "SYMPHONY";
    Namespace2["NAUTILUS_APPS"] = "NAUTILUS_APPS";
    Namespace2["VIBU"] = "VIBU";
    Namespace2["ENTERPRISE_BRAND_KIT"] = "ENTERPRISE_BRAND_KIT";
    Namespace2["DEV_CENTER_DEV_SITE"] = "DEV_CENTER_DEV_SITE";
    return Namespace2;
})(Namespace || {});
var DeleteStatus = /* @__PURE__ */ ((DeleteStatus2)=>{
    DeleteStatus2["UNKNOWN"] = "UNKNOWN";
    DeleteStatus2["TRASH"] = "TRASH";
    DeleteStatus2["DELETED"] = "DELETED";
    DeleteStatus2["PENDING_PURGE"] = "PENDING_PURGE";
    DeleteStatus2["PURGED_EXTERNALLY"] = "PURGED_EXTERNALLY";
    return DeleteStatus2;
})(DeleteStatus || {});
var WebhookIdentityType = /* @__PURE__ */ ((WebhookIdentityType2)=>{
    WebhookIdentityType2["UNKNOWN"] = "UNKNOWN";
    WebhookIdentityType2["ANONYMOUS_VISITOR"] = "ANONYMOUS_VISITOR";
    WebhookIdentityType2["MEMBER"] = "MEMBER";
    WebhookIdentityType2["WIX_USER"] = "WIX_USER";
    WebhookIdentityType2["APP"] = "APP";
    return WebhookIdentityType2;
})(WebhookIdentityType || {});
async function getMemberPrivacySettings2() {
    const { httpClient, sideEffects } = arguments[0];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({});
    const reqOpts = getMemberPrivacySettings(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {},
            singleArgumentUnchanged: false
        }, []);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function setMemberPrivacySettings2(memberPrivacySettings) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberPrivacySettings
    });
    const reqOpts = setMemberPrivacySettings(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberPrivacySettings: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberPrivacySettings"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/members-v1-member-privacy-settings-member-privacy-settings.public.ts
function getMemberPrivacySettings3(httpClient) {
    return ()=>getMemberPrivacySettings2(// @ts-ignore
        {
            httpClient
        });
}
function setMemberPrivacySettings3(httpClient) {
    return (memberPrivacySettings)=>setMemberPrivacySettings2(memberPrivacySettings, // @ts-ignore
        {
            httpClient
        });
}
;
var getMemberPrivacySettings4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getMemberPrivacySettings3);
var setMemberPrivacySettings4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(setMemberPrivacySettings3);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-report@1.0.49/node_modules/@wix/auto_sdk_members_member-report/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Category",
    ()=>Category,
    "SortOrder",
    ()=>SortOrder,
    "WebhookIdentityType",
    ()=>WebhookIdentityType,
    "deleteMemberReports",
    ()=>deleteMemberReports4,
    "listReportedMembers",
    ()=>listReportedMembers4,
    "onMemberReportCreated",
    ()=>onMemberReportCreated2,
    "onMemberReportDeleted",
    ()=>onMemberReportDeleted2,
    "onMemberReportReportedMemberCreated",
    ()=>onMemberReportReportedMemberCreated2,
    "onMemberReportReportedMemberDeleted",
    ()=>onMemberReportReportedMemberDeleted2,
    "queryMemberReports",
    ()=>queryMemberReports4,
    "queryReportedMembers",
    ()=>queryReportedMembers4,
    "reportMember",
    ()=>reportMember4,
    "utils",
    ()=>utils
]);
// src/members-v1-member-report-member-report.public.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-types@1.17.11/node_modules/@wix/sdk-types/build/browser/index.mjs [app-client] (ecmascript)");
// src/members-v1-member-report-member-report.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder.js [app-client] (ecmascript)");
// src/members-v1-member-report-member-report.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-builder-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/event-definition-modules.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/query-method-router.js [app-client] (ecmascript)");
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
function resolveComWixpressMembersMemberreportsMemberReportsUrl(opts) {
    const domainToMappings = {
        "www.wixapis.com": [
            {
                srcPath: "/members/v1/member-reports",
                destPath: "/v1/member-reports"
            }
        ],
        "api._api_base_domain_": [
            {
                srcPath: "/members-reports-api",
                destPath: ""
            }
        ],
        "members.wixapps.net": [
            {
                srcPath: "/v1/member-reports",
                destPath: "/v1/member-reports"
            }
        ],
        _: [
            {
                srcPath: "/members/v1/member-reports",
                destPath: "/v1/member-reports"
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/members/v1/member-reports",
                destPath: "/v1/member-reports"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/members/v1/member-reports",
                destPath: "/v1/member-reports"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_member-report";
function reportMember(payload) {
    function __reportMember({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: "memberReport.createdDate"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.v1.member_report",
            method: "POST",
            methodFqn: "com.wixpress.members.memberreports.MemberReports.ReportMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberreportsMemberReportsUrl({
                protoPath: "/v1/member-reports",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "memberReport.createdDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __reportMember;
}
function queryMemberReports(payload) {
    function __queryMemberReports({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKFloatToRESTFloat"],
                paths: [
                    {
                        path: "query.sorting.origin.latitude"
                    },
                    {
                        path: "query.sorting.origin.longitude"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.v1.member_report",
            method: "POST",
            methodFqn: "com.wixpress.members.memberreports.MemberReports.QueryMemberReports",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberreportsMemberReportsUrl({
                protoPath: "/v1/member-reports/query",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "memberReports.createdDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __queryMemberReports;
}
function listReportedMembers(payload) {
    function __listReportedMembers({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member_report",
            method: "GET",
            methodFqn: "com.wixpress.members.memberreports.MemberReports.ListReportedMembers",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberreportsMemberReportsUrl({
                protoPath: "/v1/member-reports/members",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload),
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "reportedMembers.lastReportDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __listReportedMembers;
}
function queryReportedMembers(payload) {
    function __queryReportedMembers({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformSDKFloatToRESTFloat"],
                paths: [
                    {
                        path: "query.sorting.origin.latitude"
                    },
                    {
                        path: "query.sorting.origin.longitude"
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: "wix.members.v1.member_report",
            method: "POST",
            methodFqn: "com.wixpress.members.memberreports.MemberReports.QueryReportedMembers",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberreportsMemberReportsUrl({
                protoPath: "/v1/member-reports/members/query",
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(payload2, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: "reportedMembers.lastReportDate"
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __queryReportedMembers;
}
function deleteMemberReports(payload) {
    function __deleteMemberReports({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member_report",
            method: "DELETE",
            methodFqn: "com.wixpress.members.memberreports.MemberReports.DeleteMemberReports",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberreportsMemberReportsUrl({
                protoPath: "/v1/member-reports/members/{memberId}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __deleteMemberReports;
}
;
;
var Category = /* @__PURE__ */ ((Category2)=>{
    Category2["UNKNOWN"] = "UNKNOWN";
    Category2["SPAM"] = "SPAM";
    Category2["IMPERSONATION"] = "IMPERSONATION";
    Category2["HARASSMENT"] = "HARASSMENT";
    Category2["OTHER"] = "OTHER";
    return Category2;
})(Category || {});
var SortOrder = /* @__PURE__ */ ((SortOrder2)=>{
    SortOrder2["ASC"] = "ASC";
    SortOrder2["DESC"] = "DESC";
    return SortOrder2;
})(SortOrder || {});
var WebhookIdentityType = /* @__PURE__ */ ((WebhookIdentityType2)=>{
    WebhookIdentityType2["UNKNOWN"] = "UNKNOWN";
    WebhookIdentityType2["ANONYMOUS_VISITOR"] = "ANONYMOUS_VISITOR";
    WebhookIdentityType2["MEMBER"] = "MEMBER";
    WebhookIdentityType2["WIX_USER"] = "WIX_USER";
    WebhookIdentityType2["APP"] = "APP";
    return WebhookIdentityType2;
})(WebhookIdentityType || {});
async function reportMember2(memberReport) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberReport
    });
    const reqOpts = reportMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberReport: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberReport"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
function queryMemberReports2() {
    const { httpClient, sideEffects } = arguments[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryBuilder"])({
        func: async (payload)=>{
            const reqOpts = queryMemberReports(payload);
            sideEffects?.onSiteCall?.();
            try {
                const result = await httpClient.request(reqOpts);
                sideEffects?.onSuccess?.(result);
                return result;
            } catch (err) {
                sideEffects?.onError?.(err);
                throw err;
            }
        },
        requestTransformer: (query)=>{
            const args = [
                query,
                {}
            ];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
                ...args?.[1],
                query: args?.[0]
            });
        },
        responseTransformer: ({ data })=>{
            const transformedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(data, []));
            return {
                items: transformedData?.memberReports,
                pagingMetadata: transformedData?.pagingMetadata
            };
        },
        errorTransformer: (err)=>{
            const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
                spreadPathsToArguments: {},
                explicitPathsToArguments: {
                    query: "$[0]"
                },
                singleArgumentUnchanged: false
            });
            throw transformedError;
        },
        pagingMethod: "CURSOR",
        transformationPaths: {}
    });
}
async function typedQueryMemberReports(query) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        query
    });
    const reqOpts = queryMemberReports(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                query: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "query"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
var utils = {
    query: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$builder$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryUtils"])()
};
async function listReportedMembers2(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        cursorPaging: options?.cursorPaging
    });
    const reqOpts = listReportedMembers(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                cursorPaging: "$[0].cursorPaging"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function queryReportedMembers2(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        query: options?.query
    });
    const reqOpts = queryReportedMembers(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                query: "$[0].query"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function deleteMemberReports2(memberId) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberId
    });
    const reqOpts = deleteMemberReports(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberId: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberId"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/members-v1-member-report-member-report.public.ts
function reportMember3(httpClient) {
    return (memberReport)=>reportMember2(memberReport, // @ts-ignore
        {
            httpClient
        });
}
function queryMemberReports3(httpClient) {
    return ()=>queryMemberReports2(// @ts-ignore
        {
            httpClient
        });
}
function typedQueryMemberReports2(httpClient) {
    return (query)=>typedQueryMemberReports(query, // @ts-ignore
        {
            httpClient
        });
}
function listReportedMembers3(httpClient) {
    return (options)=>listReportedMembers2(options, // @ts-ignore
        {
            httpClient
        });
}
function queryReportedMembers3(httpClient) {
    return (options)=>queryReportedMembers2(options, // @ts-ignore
        {
            httpClient
        });
}
function deleteMemberReports3(httpClient) {
    return (memberId)=>deleteMemberReports2(memberId, // @ts-ignore
        {
            httpClient
        });
}
var onMemberReportCreated = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.members.v1.member_report_created", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "entity.createdDate"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
var onMemberReportDeleted = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.members.v1.member_report_deleted", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "undefined.createdDate"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
var onMemberReportReportedMemberCreated = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.members.v1.member_report_reported_member_created", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "data.reportedMember.lastReportDate"
                },
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
var onMemberReportReportedMemberDeleted = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.members.v1.member_report_reported_member_deleted", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
;
;
;
function customQueryMemberReports(httpClient) {
    const router = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$query$2d$method$2d$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryOverloadRouter"])({
        builderQueryFunction: ()=>queryMemberReports3(httpClient)(),
        typedQueryFunction: (query)=>typedQueryMemberReports2(httpClient)(query),
        hasOptionsParameter: false
    });
    function overloadedQuery(query) {
        return router(...arguments);
    }
    return overloadedQuery;
}
var reportMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(reportMember3);
var listReportedMembers4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listReportedMembers3);
var queryReportedMembers4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(queryReportedMembers3);
var deleteMemberReports4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteMemberReports3);
var queryMemberReports4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(customQueryMemberReports);
var onMemberReportCreated2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onMemberReportCreated);
var onMemberReportDeleted2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onMemberReportDeleted);
var onMemberReportReportedMemberCreated2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onMemberReportReportedMemberCreated);
var onMemberReportReportedMemberDeleted2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onMemberReportReportedMemberDeleted);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-role-definition@1.0.47/node_modules/@wix/auto_sdk_members_member-role-definition/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteStatus",
    ()=>DeleteStatus,
    "Namespace",
    ()=>Namespace,
    "SiteCreatedContext",
    ()=>SiteCreatedContext,
    "State",
    ()=>State,
    "createMemberRoleDefinition",
    ()=>createMemberRoleDefinition4,
    "deleteMemberRoleDefinition",
    ()=>deleteMemberRoleDefinition4,
    "getMemberRoleDefinition",
    ()=>getMemberRoleDefinition4,
    "listMemberRoleDefinitions",
    ()=>listMemberRoleDefinitions4,
    "updateMemberRoleDefinition",
    ()=>updateMemberRoleDefinition4
]);
// src/members-v1-member-role-definition-member-role-definition.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
// src/members-v1-member-role-definition-member-role-definition.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
;
;
;
;
function resolveComWixpressMembersMemberrolesMemberRoleDefinitionsUrl(opts) {
    const domainToMappings = {
        "api._api_base_domain_": [
            {
                srcPath: "/members/v1/roles",
                destPath: ""
            }
        ],
        "www._base_domain_": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "members.wixapps.net": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "www.wixapis.com": [
            {
                srcPath: "/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "editor._base_domain_": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "blocks._base_domain_": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "create.editorx": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        _: [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_member-role-definition";
function createMemberRoleDefinition(payload) {
    function __createMemberRoleDefinition({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member_role_definition",
            method: "POST",
            methodFqn: "com.wixpress.members.memberroles.MemberRoleDefinitions.CreateMemberRoleDefinition",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberrolesMemberRoleDefinitionsUrl({
                protoPath: "/v1/roles/definitions",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __createMemberRoleDefinition;
}
function listMemberRoleDefinitions(payload) {
    function __listMemberRoleDefinitions({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member_role_definition",
            method: "GET",
            methodFqn: "com.wixpress.members.memberroles.MemberRoleDefinitions.ListMemberRoleDefinitions",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberrolesMemberRoleDefinitionsUrl({
                protoPath: "/v1/roles/definitions",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __listMemberRoleDefinitions;
}
function getMemberRoleDefinition(payload) {
    function __getMemberRoleDefinition({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member_role_definition",
            method: "GET",
            methodFqn: "com.wixpress.members.memberroles.MemberRoleDefinitions.GetMemberRoleDefinition",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberrolesMemberRoleDefinitionsUrl({
                protoPath: "/v1/roles/definitions/{roleKey}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __getMemberRoleDefinition;
}
function updateMemberRoleDefinition(payload) {
    function __updateMemberRoleDefinition({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member_role_definition",
            method: "PATCH",
            methodFqn: "com.wixpress.members.memberroles.MemberRoleDefinitions.UpdateMemberRoleDefinition",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberrolesMemberRoleDefinitionsUrl({
                protoPath: "/v1/roles/definitions/{key}",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __updateMemberRoleDefinition;
}
function deleteMemberRoleDefinition(payload) {
    function __deleteMemberRoleDefinition({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member_role_definition",
            method: "DELETE",
            methodFqn: "com.wixpress.members.memberroles.MemberRoleDefinitions.DeleteMemberRoleDefinition",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberrolesMemberRoleDefinitionsUrl({
                protoPath: "/v1/roles/definitions/{roleKey}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __deleteMemberRoleDefinition;
}
// src/members-v1-member-role-definition-member-role-definition.universal.ts
var State = /* @__PURE__ */ ((State2)=>{
    State2["UNKNOWN"] = "UNKNOWN";
    State2["ENABLED"] = "ENABLED";
    State2["DISABLED"] = "DISABLED";
    State2["PENDING"] = "PENDING";
    State2["DEMO"] = "DEMO";
    return State2;
})(State || {});
var SiteCreatedContext = /* @__PURE__ */ ((SiteCreatedContext2)=>{
    SiteCreatedContext2["OTHER"] = "OTHER";
    SiteCreatedContext2["FROM_TEMPLATE"] = "FROM_TEMPLATE";
    SiteCreatedContext2["DUPLICATE_BY_SITE_TRANSFER"] = "DUPLICATE_BY_SITE_TRANSFER";
    SiteCreatedContext2["DUPLICATE"] = "DUPLICATE";
    SiteCreatedContext2["OLD_SITE_TRANSFER"] = "OLD_SITE_TRANSFER";
    SiteCreatedContext2["FLASH"] = "FLASH";
    return SiteCreatedContext2;
})(SiteCreatedContext || {});
var Namespace = /* @__PURE__ */ ((Namespace2)=>{
    Namespace2["UNKNOWN_NAMESPACE"] = "UNKNOWN_NAMESPACE";
    Namespace2["WIX"] = "WIX";
    Namespace2["SHOUT_OUT"] = "SHOUT_OUT";
    Namespace2["ALBUMS"] = "ALBUMS";
    Namespace2["WIX_STORES_TEST_DRIVE"] = "WIX_STORES_TEST_DRIVE";
    Namespace2["HOTELS"] = "HOTELS";
    Namespace2["CLUBS"] = "CLUBS";
    Namespace2["ONBOARDING_DRAFT"] = "ONBOARDING_DRAFT";
    Namespace2["DEV_SITE"] = "DEV_SITE";
    Namespace2["LOGOS"] = "LOGOS";
    Namespace2["VIDEO_MAKER"] = "VIDEO_MAKER";
    Namespace2["PARTNER_DASHBOARD"] = "PARTNER_DASHBOARD";
    Namespace2["DEV_CENTER_COMPANY"] = "DEV_CENTER_COMPANY";
    Namespace2["HTML_DRAFT"] = "HTML_DRAFT";
    Namespace2["SITELESS_BUSINESS"] = "SITELESS_BUSINESS";
    Namespace2["CREATOR_ECONOMY"] = "CREATOR_ECONOMY";
    Namespace2["DASHBOARD_FIRST"] = "DASHBOARD_FIRST";
    Namespace2["ANYWHERE"] = "ANYWHERE";
    Namespace2["HEADLESS"] = "HEADLESS";
    Namespace2["ACCOUNT_MASTER_CMS"] = "ACCOUNT_MASTER_CMS";
    Namespace2["RISE"] = "RISE";
    Namespace2["BRANDED_FIRST"] = "BRANDED_FIRST";
    Namespace2["NOWNIA"] = "NOWNIA";
    Namespace2["UGC_TEMPLATE"] = "UGC_TEMPLATE";
    Namespace2["CODUX"] = "CODUX";
    Namespace2["MEDIA_DESIGN_CREATOR"] = "MEDIA_DESIGN_CREATOR";
    Namespace2["SHARED_BLOG_ENTERPRISE"] = "SHARED_BLOG_ENTERPRISE";
    Namespace2["STANDALONE_FORMS"] = "STANDALONE_FORMS";
    Namespace2["STANDALONE_EVENTS"] = "STANDALONE_EVENTS";
    Namespace2["MIMIR"] = "MIMIR";
    Namespace2["TWINS"] = "TWINS";
    Namespace2["NANO"] = "NANO";
    Namespace2["BASE44"] = "BASE44";
    Namespace2["CHANNELS"] = "CHANNELS";
    Namespace2["NAUTILUS"] = "NAUTILUS";
    Namespace2["SYMPHONY"] = "SYMPHONY";
    Namespace2["NAUTILUS_APPS"] = "NAUTILUS_APPS";
    Namespace2["VIBU"] = "VIBU";
    Namespace2["ENTERPRISE_BRAND_KIT"] = "ENTERPRISE_BRAND_KIT";
    Namespace2["DEV_CENTER_DEV_SITE"] = "DEV_CENTER_DEV_SITE";
    return Namespace2;
})(Namespace || {});
var DeleteStatus = /* @__PURE__ */ ((DeleteStatus2)=>{
    DeleteStatus2["UNKNOWN"] = "UNKNOWN";
    DeleteStatus2["TRASH"] = "TRASH";
    DeleteStatus2["DELETED"] = "DELETED";
    DeleteStatus2["PENDING_PURGE"] = "PENDING_PURGE";
    DeleteStatus2["PURGED_EXTERNALLY"] = "PURGED_EXTERNALLY";
    return DeleteStatus2;
})(DeleteStatus || {});
async function createMemberRoleDefinition2(roleKey, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        roleKey,
        roleTitle: options?.roleTitle,
        blockable: options?.blockable
    });
    const reqOpts = createMemberRoleDefinition(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                roleKey: "$[0]",
                roleTitle: "$[1].roleTitle",
                blockable: "$[1].blockable"
            },
            singleArgumentUnchanged: false
        }, [
            "roleKey",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function listMemberRoleDefinitions2() {
    const { httpClient, sideEffects } = arguments[0];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({});
    const reqOpts = listMemberRoleDefinitions(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {},
            singleArgumentUnchanged: false
        }, []);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getMemberRoleDefinition2(roleKey) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        roleKey
    });
    const reqOpts = getMemberRoleDefinition(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                roleKey: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "roleKey"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function updateMemberRoleDefinition2(key, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        key,
        blockable: options?.blockable,
        revision: options?.revision
    });
    const reqOpts = updateMemberRoleDefinition(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                key: "$[0]",
                blockable: "$[1].blockable",
                revision: "$[1].revision"
            },
            singleArgumentUnchanged: false
        }, [
            "key",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function deleteMemberRoleDefinition2(roleKey) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        roleKey
    });
    const reqOpts = deleteMemberRoleDefinition(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                roleKey: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "roleKey"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/members-v1-member-role-definition-member-role-definition.public.ts
function createMemberRoleDefinition3(httpClient) {
    return (roleKey, options)=>createMemberRoleDefinition2(roleKey, options, // @ts-ignore
        {
            httpClient
        });
}
function listMemberRoleDefinitions3(httpClient) {
    return ()=>listMemberRoleDefinitions2(// @ts-ignore
        {
            httpClient
        });
}
function getMemberRoleDefinition3(httpClient) {
    return (roleKey)=>getMemberRoleDefinition2(roleKey, // @ts-ignore
        {
            httpClient
        });
}
function updateMemberRoleDefinition3(httpClient) {
    return (key, options)=>updateMemberRoleDefinition2(key, options, // @ts-ignore
        {
            httpClient
        });
}
function deleteMemberRoleDefinition3(httpClient) {
    return (roleKey)=>deleteMemberRoleDefinition2(roleKey, // @ts-ignore
        {
            httpClient
        });
}
;
var createMemberRoleDefinition4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(createMemberRoleDefinition3);
var listMemberRoleDefinitions4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listMemberRoleDefinitions3);
var getMemberRoleDefinition4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getMemberRoleDefinition3);
var updateMemberRoleDefinition4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(updateMemberRoleDefinition3);
var deleteMemberRoleDefinition4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(deleteMemberRoleDefinition3);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-to-member-block@1.0.35/node_modules/@wix/auto_sdk_members_member-to-member-block/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlockDirection",
    ()=>BlockDirection,
    "WebhookIdentityType",
    ()=>WebhookIdentityType,
    "blockMember",
    ()=>blockMember4,
    "listCurrentMemberBlocking",
    ()=>listCurrentMemberBlocking4,
    "listMemberBlocks",
    ()=>listMemberBlocks4,
    "unblockMember",
    ()=>unblockMember4
]);
// src/members-v1-member-to-member-block-member-to-member-block.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
// src/members-v1-member-to-member-block-member-to-member-block.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
;
;
;
;
function resolveComWixpressMembersMembertomemberblocksMemberToMemberBlocksUrl(opts) {
    const domainToMappings = {
        "api._api_base_domain_": [
            {
                srcPath: "/members/v1/member-to-member-blocks",
                destPath: ""
            }
        ],
        "www.wixapis.com": [
            {
                srcPath: "/members/v1/member-to-member-blocks",
                destPath: "/v1/member-to-member-blocks"
            }
        ],
        _: [
            {
                srcPath: "/_api/members/v1/member-to-member-blocks",
                destPath: "/v1/member-to-member-blocks"
            }
        ],
        "members.wixapps.net": [
            {
                srcPath: "/_api/members/v1/member-to-member-blocks",
                destPath: "/v1/member-to-member-blocks"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_member-to-member-block";
function blockMember(payload) {
    function __blockMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member_to_member_block",
            method: "POST",
            methodFqn: "com.wixpress.members.membertomemberblocks.MemberToMemberBlocks.BlockMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMembertomemberblocksMemberToMemberBlocksUrl({
                protoPath: "/v1/member-to-member-blocks/members/my",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __blockMember;
}
function unblockMember(payload) {
    function __unblockMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member_to_member_block",
            method: "DELETE",
            methodFqn: "com.wixpress.members.membertomemberblocks.MemberToMemberBlocks.UnblockMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMembertomemberblocksMemberToMemberBlocksUrl({
                protoPath: "/v1/member-to-member-blocks/members/my/{memberId}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __unblockMember;
}
function listCurrentMemberBlocking(payload) {
    function __listCurrentMemberBlocking({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member_to_member_block",
            method: "GET",
            methodFqn: "com.wixpress.members.membertomemberblocks.MemberToMemberBlocks.ListCurrentMemberBlocking",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMembertomemberblocksMemberToMemberBlocksUrl({
                protoPath: "/v1/member-to-member-blocks/members/my",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __listCurrentMemberBlocking;
}
function listMemberBlocks(payload) {
    function __listMemberBlocks({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.member_to_member_block",
            method: "GET",
            methodFqn: "com.wixpress.members.membertomemberblocks.MemberToMemberBlocks.ListMemberBlocks",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMembertomemberblocksMemberToMemberBlocksUrl({
                protoPath: "/v1/member-to-member-blocks/members/{memberId}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __listMemberBlocks;
}
// src/members-v1-member-to-member-block-member-to-member-block.universal.ts
var BlockDirection = /* @__PURE__ */ ((BlockDirection2)=>{
    BlockDirection2["UNKNOWN"] = "UNKNOWN";
    BlockDirection2["BLOCKING"] = "BLOCKING";
    BlockDirection2["BLOCKED"] = "BLOCKED";
    return BlockDirection2;
})(BlockDirection || {});
var WebhookIdentityType = /* @__PURE__ */ ((WebhookIdentityType2)=>{
    WebhookIdentityType2["UNKNOWN"] = "UNKNOWN";
    WebhookIdentityType2["ANONYMOUS_VISITOR"] = "ANONYMOUS_VISITOR";
    WebhookIdentityType2["MEMBER"] = "MEMBER";
    WebhookIdentityType2["WIX_USER"] = "WIX_USER";
    WebhookIdentityType2["APP"] = "APP";
    return WebhookIdentityType2;
})(WebhookIdentityType || {});
async function blockMember2(memberId) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberId
    });
    const reqOpts = blockMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberId: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberId"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function unblockMember2(memberId) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberId
    });
    const reqOpts = unblockMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberId: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberId"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function listCurrentMemberBlocking2(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        cursorPaging: options?.cursorPaging
    });
    const reqOpts = listCurrentMemberBlocking(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                cursorPaging: "$[0].cursorPaging"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function listMemberBlocks2(memberId, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberId,
        cursorPaging: options?.cursorPaging
    });
    const reqOpts = listMemberBlocks(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberId: "$[0]",
                cursorPaging: "$[1].cursorPaging"
            },
            singleArgumentUnchanged: false
        }, [
            "memberId",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/members-v1-member-to-member-block-member-to-member-block.public.ts
function blockMember3(httpClient) {
    return (memberId)=>blockMember2(memberId, // @ts-ignore
        {
            httpClient
        });
}
function unblockMember3(httpClient) {
    return (memberId)=>unblockMember2(memberId, // @ts-ignore
        {
            httpClient
        });
}
function listCurrentMemberBlocking3(httpClient) {
    return (options)=>listCurrentMemberBlocking2(options, // @ts-ignore
        {
            httpClient
        });
}
function listMemberBlocks3(httpClient) {
    return (memberId, options)=>listMemberBlocks2(memberId, options, // @ts-ignore
        {
            httpClient
        });
}
;
var blockMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(blockMember3);
var unblockMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(unblockMember3);
var listCurrentMemberBlocking4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listCurrentMemberBlocking3);
var listMemberBlocks4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listMemberBlocks3);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_authorization@1.0.36/node_modules/@wix/auto_sdk_members_authorization/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignRole",
    ()=>assignRole4,
    "getRoles",
    ()=>getRoles4,
    "queryRoles",
    ()=>queryRoles4,
    "unassignRole",
    ()=>unassignRole4
]);
// src/members-v1-role-authorization.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
// src/members-v1-role-authorization.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
;
;
;
;
function resolveComWixpressMembersMemberrolesMemberRolesUrl(opts) {
    const domainToMappings = {
        "api._api_base_domain_": [
            {
                srcPath: "/members/v1/roles",
                destPath: ""
            }
        ],
        "www._base_domain_": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "members.wixapps.net": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "www.wixapis.com": [
            {
                srcPath: "/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "editor._base_domain_": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "blocks._base_domain_": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "create.editorx": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ],
        _: [
            {
                srcPath: "/_api/members/v1/roles",
                destPath: "/v1/roles"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_authorization";
function assignRole(payload) {
    function __assignRole({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.role",
            method: "POST",
            methodFqn: "com.wixpress.members.memberroles.MemberRoles.AssignRole",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberrolesMemberRolesUrl({
                protoPath: "/v1/roles/members/{memberId}",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __assignRole;
}
function unassignRole(payload) {
    function __unassignRole({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.role",
            method: "DELETE",
            methodFqn: "com.wixpress.members.memberroles.MemberRoles.UnassignRole",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberrolesMemberRolesUrl({
                protoPath: "/v1/roles/members/{memberId}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __unassignRole;
}
function getRoles(payload) {
    function __getRoles({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.role",
            method: "GET",
            methodFqn: "com.wixpress.members.memberroles.MemberRoles.GetRoles",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberrolesMemberRolesUrl({
                protoPath: "/v1/roles/members/{memberId}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __getRoles;
}
function queryRoles(payload) {
    function __queryRoles({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v1.role",
            method: "POST",
            methodFqn: "com.wixpress.members.memberroles.MemberRoles.QueryRoles",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersMemberrolesMemberRolesUrl({
                protoPath: "/v1/roles/members/query",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __queryRoles;
}
// src/members-v1-role-authorization.universal.ts
async function assignRole2(memberId, roleKey) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberId,
        roleKey
    });
    const reqOpts = assignRole(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberId: "$[0]",
                roleKey: "$[1]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberId",
            "roleKey"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function unassignRole2(memberId, roleKey) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberId,
        roleKey
    });
    const reqOpts = unassignRole(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberId: "$[0]",
                roleKey: "$[1]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberId",
            "roleKey"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function getRoles2(memberId) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberId
    });
    const reqOpts = getRoles(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberId: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberId"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function queryRoles2(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        query: options?.query
    });
    const reqOpts = queryRoles(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                query: "$[0].query"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/members-v1-role-authorization.public.ts
function assignRole3(httpClient) {
    return (memberId, roleKey)=>assignRole2(memberId, roleKey, // @ts-ignore
        {
            httpClient
        });
}
function unassignRole3(httpClient) {
    return (memberId, roleKey)=>unassignRole2(memberId, roleKey, // @ts-ignore
        {
            httpClient
        });
}
function getRoles3(httpClient) {
    return (memberId)=>getRoles2(memberId, // @ts-ignore
        {
            httpClient
        });
}
function queryRoles3(httpClient) {
    return (options)=>queryRoles2(options, // @ts-ignore
        {
            httpClient
        });
}
;
var assignRole4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(assignRole3);
var unassignRole4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(unassignRole3);
var getRoles4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(getRoles3);
var queryRoles4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(queryRoles3);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-followers@1.0.44/node_modules/@wix/auto_sdk_members_member-followers/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebhookIdentityType",
    ()=>WebhookIdentityType,
    "followMember",
    ()=>followMember4,
    "listCurrentMemberFollowers",
    ()=>listCurrentMemberFollowers3,
    "listCurrentMemberFollowing",
    ()=>listCurrentMemberFollowing3,
    "listMemberFollowers",
    ()=>listMemberFollowers4,
    "listMemberFollowing",
    ()=>listMemberFollowing4,
    "onFollowMemberFollowed",
    ()=>onFollowMemberFollowed2,
    "onFollowMemberUnfollowed",
    ()=>onFollowMemberUnfollowed2,
    "queryCurrentMemberConnections",
    ()=>queryCurrentMemberConnections3,
    "queryMemberConnections",
    ()=>queryMemberConnections4,
    "unfollowMember",
    ()=>unfollowMember4
]);
// src/members-v3-follow-member-followers.public.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-types@1.17.11/node_modules/@wix/sdk-types/build/browser/index.mjs [app-client] (ecmascript)");
// src/members-v3-follow-member-followers.universal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/transform-error.js [app-client] (ecmascript)");
// src/members-v3-follow-member-followers.http.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/rest-modules.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+sdk-runtime@1.0.24/node_modules/@wix/sdk-runtime/build/event-definition-modules.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function resolveComWixpressMembersFollowV3MemberFollowersUrl(opts) {
    const domainToMappings = {
        "www.wixapis.com": [
            {
                srcPath: "/members/v3/followers",
                destPath: "/v3/followers"
            }
        ],
        "www._base_domain_": [
            {
                srcPath: "/_api/members/v3/followers",
                destPath: "/v3/followers"
            },
            {
                srcPath: "/members/v3/followers",
                destPath: "/v3/followers"
            }
        ],
        _: [
            {
                srcPath: "/_api/members/v3/followers",
                destPath: "/v3/followers"
            }
        ],
        "editor._base_domain_": [
            {
                srcPath: "/_api/members/v3/followers",
                destPath: "/v3/followers"
            }
        ],
        "blocks._base_domain_": [
            {
                srcPath: "/_api/members/v3/followers",
                destPath: "/v3/followers"
            }
        ],
        "create.editorx": [
            {
                srcPath: "/_api/members/v3/followers",
                destPath: "/v3/followers"
            }
        ],
        "manage._base_domain_": [
            {
                srcPath: "/_api/members/v3/followers",
                destPath: "/v3/followers"
            }
        ],
        "*.dev.wix-code.com": [
            {
                srcPath: "/_api/members/v3/followers",
                destPath: "/v3/followers"
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
var PACKAGE_NAME = "@wix/auto_sdk_members_member-followers";
function followMember(payload) {
    function __followMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v3.follow",
            method: "POST",
            methodFqn: "com.wixpress.members.follow.v3.MemberFollowers.FollowMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersFollowV3MemberFollowersUrl({
                protoPath: "/v3/followers/{memberId}",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __followMember;
}
function unfollowMember(payload) {
    function __unfollowMember({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v3.follow",
            method: "DELETE",
            methodFqn: "com.wixpress.members.follow.v3.MemberFollowers.UnfollowMember",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersFollowV3MemberFollowersUrl({
                protoPath: "/v3/followers/{memberId}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __unfollowMember;
}
function listMyMemberFollowing(payload) {
    function __listMyMemberFollowing({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v3.follow",
            method: "GET",
            methodFqn: "com.wixpress.members.follow.v3.MemberFollowers.ListMyMemberFollowing",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersFollowV3MemberFollowersUrl({
                protoPath: "/v3/followers/my/following",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __listMyMemberFollowing;
}
function listMemberFollowing(payload) {
    function __listMemberFollowing({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v3.follow",
            method: "GET",
            methodFqn: "com.wixpress.members.follow.v3.MemberFollowers.ListMemberFollowing",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersFollowV3MemberFollowersUrl({
                protoPath: "/v3/followers/{memberId}/following",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __listMemberFollowing;
}
function listMyMemberFollowers(payload) {
    function __listMyMemberFollowers({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v3.follow",
            method: "GET",
            methodFqn: "com.wixpress.members.follow.v3.MemberFollowers.ListMyMemberFollowers",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersFollowV3MemberFollowersUrl({
                protoPath: "/v3/followers/my",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __listMyMemberFollowers;
}
function listMemberFollowers(payload) {
    function __listMemberFollowers({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v3.follow",
            method: "GET",
            methodFqn: "com.wixpress.members.follow.v3.MemberFollowers.ListMemberFollowers",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersFollowV3MemberFollowersUrl({
                protoPath: "/v3/followers/{memberId}",
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toURLSearchParams"])(payload)
        };
        return metadata;
    }
    return __listMemberFollowers;
}
function queryMyMemberConnections(payload) {
    function __queryMyMemberConnections({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v3.follow",
            method: "POST",
            methodFqn: "com.wixpress.members.follow.v3.MemberFollowers.QueryMyMemberConnections",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersFollowV3MemberFollowersUrl({
                protoPath: "/v3/followers/my/connections",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __queryMyMemberConnections;
}
function queryMemberConnections(payload) {
    function __queryMemberConnections({ host }) {
        const metadata = {
            entityFqdn: "wix.members.v3.follow",
            method: "POST",
            methodFqn: "com.wixpress.members.follow.v3.MemberFollowers.QueryMemberConnections",
            packageName: PACKAGE_NAME,
            migrationOptions: {
                optInTransformResponse: true
            },
            url: resolveComWixpressMembersFollowV3MemberFollowersUrl({
                protoPath: "/v3/followers/{memberId}/connections",
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __queryMemberConnections;
}
// src/members-v3-follow-member-followers.universal.ts
var WebhookIdentityType = /* @__PURE__ */ ((WebhookIdentityType2)=>{
    WebhookIdentityType2["UNKNOWN"] = "UNKNOWN";
    WebhookIdentityType2["ANONYMOUS_VISITOR"] = "ANONYMOUS_VISITOR";
    WebhookIdentityType2["MEMBER"] = "MEMBER";
    WebhookIdentityType2["WIX_USER"] = "WIX_USER";
    WebhookIdentityType2["APP"] = "APP";
    return WebhookIdentityType2;
})(WebhookIdentityType || {});
async function followMember2(memberId) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberId
    });
    const reqOpts = followMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberId: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberId"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function unfollowMember2(memberId) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberId
    });
    const reqOpts = unfollowMember(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberId: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberId"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function listCurrentMemberFollowing(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        paging: options?.paging
    });
    const reqOpts = listMyMemberFollowing(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return {
            memberIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.memberIds,
            metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.pagingMetadata
        };
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                paging: "$[0].paging"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function listMemberFollowing2(memberId, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberId,
        paging: options?.paging
    });
    const reqOpts = listMemberFollowing(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return {
            memberIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.memberIds,
            metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.pagingMetadata
        };
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberId: "$[0]",
                paging: "$[1].paging"
            },
            singleArgumentUnchanged: false
        }, [
            "memberId",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function listCurrentMemberFollowers(options) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        paging: options?.paging
    });
    const reqOpts = listMyMemberFollowers(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return {
            memberIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.memberIds,
            metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.pagingMetadata
        };
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                paging: "$[0].paging"
            },
            singleArgumentUnchanged: false
        }, [
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function listMemberFollowers2(memberId, options) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberId,
        paging: options?.paging
    });
    const reqOpts = listMemberFollowers(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return {
            memberIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.memberIds,
            metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data)?.pagingMetadata
        };
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberId: "$[0]",
                paging: "$[1].paging"
            },
            singleArgumentUnchanged: false
        }, [
            "memberId",
            "options"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function queryCurrentMemberConnections(connectedMemberIds) {
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        connectedMemberIds
    });
    const reqOpts = queryMyMemberConnections(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                connectedMemberIds: "$[0]"
            },
            singleArgumentUnchanged: false
        }, [
            "connectedMemberIds"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function queryMemberConnections2(memberId, connectedMemberIds) {
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        memberId,
        connectedMemberIds
    });
    const reqOpts = queryMemberConnections(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                memberId: "$[0]",
                connectedMemberIds: "$[1]"
            },
            singleArgumentUnchanged: false
        }, [
            "memberId",
            "connectedMemberIds"
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
// src/members-v3-follow-member-followers.public.ts
function followMember3(httpClient) {
    return (memberId)=>followMember2(memberId, // @ts-ignore
        {
            httpClient
        });
}
function unfollowMember3(httpClient) {
    return (memberId)=>unfollowMember2(memberId, // @ts-ignore
        {
            httpClient
        });
}
function listCurrentMemberFollowing2(httpClient) {
    return (options)=>listCurrentMemberFollowing(options, // @ts-ignore
        {
            httpClient
        });
}
function listMemberFollowing3(httpClient) {
    return (memberId, options)=>listMemberFollowing2(memberId, options, // @ts-ignore
        {
            httpClient
        });
}
function listCurrentMemberFollowers2(httpClient) {
    return (options)=>listCurrentMemberFollowers(options, // @ts-ignore
        {
            httpClient
        });
}
function listMemberFollowers3(httpClient) {
    return (memberId, options)=>listMemberFollowers2(memberId, options, // @ts-ignore
        {
            httpClient
        });
}
function queryCurrentMemberConnections2(httpClient) {
    return (connectedMemberIds)=>queryCurrentMemberConnections(connectedMemberIds, // @ts-ignore
        {
            httpClient
        });
}
function queryMemberConnections3(httpClient) {
    return (memberId, connectedMemberIds)=>queryMemberConnections2(memberId, connectedMemberIds, // @ts-ignore
        {
            httpClient
        });
}
var onFollowMemberFollowed = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.members.v3.follow_member_followed", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
var onFollowMemberUnfollowed = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$types$40$1$2e$17$2e$11$2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDefinition"])("wix.members.v3.follow_member_unfollowed", true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: "metadata.eventTime"
                }
            ]
        }
    ])))();
;
;
var followMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(followMember3);
var unfollowMember4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(unfollowMember3);
var listCurrentMemberFollowing3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listCurrentMemberFollowing2);
var listMemberFollowing4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listMemberFollowing3);
var listCurrentMemberFollowers3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listCurrentMemberFollowers2);
var listMemberFollowers4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(listMemberFollowers3);
var queryCurrentMemberConnections3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(queryCurrentMemberConnections2);
var queryMemberConnections4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRESTModule"])(queryMemberConnections3);
var onFollowMemberFollowed2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onFollowMemberFollowed);
var onFollowMemberUnfollowed2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$sdk$2d$runtime$40$1$2e$0$2e$24$2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventModule"])(onFollowMemberUnfollowed);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+members@1.0.510/node_modules/@wix/members/build/es/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_badges$40$1$2e$0$2e$52$2f$node_modules$2f40$wix$2f$auto_sdk_members_badges$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_badges@1.0.52/node_modules/@wix/auto_sdk_members_badges/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_badges$2d$v$2d$2$40$1$2e$0$2e$37$2f$node_modules$2f40$wix$2f$auto_sdk_members_badges$2d$v$2d$2$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_badges-v-2@1.0.37/node_modules/@wix/auto_sdk_members_badges-v-2/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_badge$2d$assignments$40$1$2e$0$2e$30$2f$node_modules$2f40$wix$2f$auto_sdk_members_badge$2d$assignments$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_badge-assignments@1.0.30/node_modules/@wix/auto_sdk_members_badge-assignments/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_authentication$40$1$2e$0$2e$44$2f$node_modules$2f40$wix$2f$auto_sdk_members_authentication$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_authentication@1.0.44/node_modules/@wix/auto_sdk_members_authentication/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_members$2d$about$40$1$2e$0$2e$78$2f$node_modules$2f40$wix$2f$auto_sdk_members_members$2d$about$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_members-about@1.0.78/node_modules/@wix/auto_sdk_members_members-about/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_user$2d$member$40$1$2e$0$2e$56$2f$node_modules$2f40$wix$2f$auto_sdk_members_user$2d$member$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_user-member@1.0.56/node_modules/@wix/auto_sdk_members_user-member/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_custom$2d$fields$40$1$2e$0$2e$59$2f$node_modules$2f40$wix$2f$auto_sdk_members_custom$2d$fields$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_custom-fields@1.0.59/node_modules/@wix/auto_sdk_members_custom-fields/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_custom$2d$field$2d$applications$40$1$2e$0$2e$41$2f$node_modules$2f40$wix$2f$auto_sdk_members_custom$2d$field$2d$applications$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_custom-field-applications@1.0.41/node_modules/@wix/auto_sdk_members_custom-field-applications/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_custom$2d$field$2d$suggestions$40$1$2e$0$2e$40$2f$node_modules$2f40$wix$2f$auto_sdk_members_custom$2d$field$2d$suggestions$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_custom-field-suggestions@1.0.40/node_modules/@wix/auto_sdk_members_custom-field-suggestions/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_default$2d$privacy$40$1$2e$0$2e$34$2f$node_modules$2f40$wix$2f$auto_sdk_members_default$2d$privacy$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_default-privacy@1.0.34/node_modules/@wix/auto_sdk_members_default-privacy/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_members$40$1$2e$0$2e$131$2f$node_modules$2f40$wix$2f$auto_sdk_members_members$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_members@1.0.131/node_modules/@wix/auto_sdk_members_members/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$privacy$2d$settings$40$1$2e$0$2e$59$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$privacy$2d$settings$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-privacy-settings@1.0.59/node_modules/@wix/auto_sdk_members_member-privacy-settings/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$report$40$1$2e$0$2e$49$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$report$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-report@1.0.49/node_modules/@wix/auto_sdk_members_member-report/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$role$2d$definition$40$1$2e$0$2e$47$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$role$2d$definition$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-role-definition@1.0.47/node_modules/@wix/auto_sdk_members_member-role-definition/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$to$2d$member$2d$block$40$1$2e$0$2e$35$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$to$2d$member$2d$block$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-to-member-block@1.0.35/node_modules/@wix/auto_sdk_members_member-to-member-block/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_authorization$40$1$2e$0$2e$36$2f$node_modules$2f40$wix$2f$auto_sdk_members_authorization$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_authorization@1.0.36/node_modules/@wix/auto_sdk_members_authorization/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$followers$40$1$2e$0$2e$44$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$followers$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-followers@1.0.44/node_modules/@wix/auto_sdk_members_member-followers/build/es/index.mjs [app-client] (ecmascript)");
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
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+members@1.0.510/node_modules/@wix/members/build/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authentication",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_authentication$40$1$2e$0$2e$44$2f$node_modules$2f40$wix$2f$auto_sdk_members_authentication$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "authorization",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_authorization$40$1$2e$0$2e$36$2f$node_modules$2f40$wix$2f$auto_sdk_members_authorization$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "badgeAssignments",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_badge$2d$assignments$40$1$2e$0$2e$30$2f$node_modules$2f40$wix$2f$auto_sdk_members_badge$2d$assignments$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "badges",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_badges$40$1$2e$0$2e$52$2f$node_modules$2f40$wix$2f$auto_sdk_members_badges$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "badgesV2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_badges$2d$v$2d$2$40$1$2e$0$2e$37$2f$node_modules$2f40$wix$2f$auto_sdk_members_badges$2d$v$2d$2$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "customFieldApplications",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_custom$2d$field$2d$applications$40$1$2e$0$2e$41$2f$node_modules$2f40$wix$2f$auto_sdk_members_custom$2d$field$2d$applications$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "customFieldSuggestions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_custom$2d$field$2d$suggestions$40$1$2e$0$2e$40$2f$node_modules$2f40$wix$2f$auto_sdk_members_custom$2d$field$2d$suggestions$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "customFields",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_custom$2d$fields$40$1$2e$0$2e$59$2f$node_modules$2f40$wix$2f$auto_sdk_members_custom$2d$fields$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "defaultPrivacy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_default$2d$privacy$40$1$2e$0$2e$34$2f$node_modules$2f40$wix$2f$auto_sdk_members_default$2d$privacy$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "memberFollowers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$followers$40$1$2e$0$2e$44$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$followers$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "memberPrivacySettings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$privacy$2d$settings$40$1$2e$0$2e$59$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$privacy$2d$settings$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "memberReport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$report$40$1$2e$0$2e$49$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$report$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "memberRoleDefinition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$role$2d$definition$40$1$2e$0$2e$47$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$role$2d$definition$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "memberToMemberBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$to$2d$member$2d$block$40$1$2e$0$2e$35$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$to$2d$member$2d$block$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "members",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_members$40$1$2e$0$2e$131$2f$node_modules$2f40$wix$2f$auto_sdk_members_members$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "membersAbout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_members$2d$about$40$1$2e$0$2e$78$2f$node_modules$2f40$wix$2f$auto_sdk_members_members$2d$about$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "userMember",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_user$2d$member$40$1$2e$0$2e$56$2f$node_modules$2f40$wix$2f$auto_sdk_members_user$2d$member$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$members$40$1$2e$0$2e$510$2f$node_modules$2f40$wix$2f$members$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+members@1.0.510/node_modules/@wix/members/build/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_badges$40$1$2e$0$2e$52$2f$node_modules$2f40$wix$2f$auto_sdk_members_badges$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_badges@1.0.52/node_modules/@wix/auto_sdk_members_badges/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_badges$2d$v$2d$2$40$1$2e$0$2e$37$2f$node_modules$2f40$wix$2f$auto_sdk_members_badges$2d$v$2d$2$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_badges-v-2@1.0.37/node_modules/@wix/auto_sdk_members_badges-v-2/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_badge$2d$assignments$40$1$2e$0$2e$30$2f$node_modules$2f40$wix$2f$auto_sdk_members_badge$2d$assignments$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_badge-assignments@1.0.30/node_modules/@wix/auto_sdk_members_badge-assignments/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_authentication$40$1$2e$0$2e$44$2f$node_modules$2f40$wix$2f$auto_sdk_members_authentication$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_authentication@1.0.44/node_modules/@wix/auto_sdk_members_authentication/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_members$2d$about$40$1$2e$0$2e$78$2f$node_modules$2f40$wix$2f$auto_sdk_members_members$2d$about$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_members-about@1.0.78/node_modules/@wix/auto_sdk_members_members-about/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_user$2d$member$40$1$2e$0$2e$56$2f$node_modules$2f40$wix$2f$auto_sdk_members_user$2d$member$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_user-member@1.0.56/node_modules/@wix/auto_sdk_members_user-member/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_custom$2d$fields$40$1$2e$0$2e$59$2f$node_modules$2f40$wix$2f$auto_sdk_members_custom$2d$fields$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_custom-fields@1.0.59/node_modules/@wix/auto_sdk_members_custom-fields/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_custom$2d$field$2d$applications$40$1$2e$0$2e$41$2f$node_modules$2f40$wix$2f$auto_sdk_members_custom$2d$field$2d$applications$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_custom-field-applications@1.0.41/node_modules/@wix/auto_sdk_members_custom-field-applications/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_custom$2d$field$2d$suggestions$40$1$2e$0$2e$40$2f$node_modules$2f40$wix$2f$auto_sdk_members_custom$2d$field$2d$suggestions$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_custom-field-suggestions@1.0.40/node_modules/@wix/auto_sdk_members_custom-field-suggestions/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_default$2d$privacy$40$1$2e$0$2e$34$2f$node_modules$2f40$wix$2f$auto_sdk_members_default$2d$privacy$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_default-privacy@1.0.34/node_modules/@wix/auto_sdk_members_default-privacy/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_members$40$1$2e$0$2e$131$2f$node_modules$2f40$wix$2f$auto_sdk_members_members$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_members@1.0.131/node_modules/@wix/auto_sdk_members_members/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$privacy$2d$settings$40$1$2e$0$2e$59$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$privacy$2d$settings$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-privacy-settings@1.0.59/node_modules/@wix/auto_sdk_members_member-privacy-settings/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$report$40$1$2e$0$2e$49$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$report$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-report@1.0.49/node_modules/@wix/auto_sdk_members_member-report/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$role$2d$definition$40$1$2e$0$2e$47$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$role$2d$definition$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-role-definition@1.0.47/node_modules/@wix/auto_sdk_members_member-role-definition/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$to$2d$member$2d$block$40$1$2e$0$2e$35$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$to$2d$member$2d$block$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-to-member-block@1.0.35/node_modules/@wix/auto_sdk_members_member-to-member-block/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_authorization$40$1$2e$0$2e$36$2f$node_modules$2f40$wix$2f$auto_sdk_members_authorization$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_authorization@1.0.36/node_modules/@wix/auto_sdk_members_authorization/build/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$auto_sdk_members_member$2d$followers$40$1$2e$0$2e$44$2f$node_modules$2f40$wix$2f$auto_sdk_members_member$2d$followers$2f$build$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+auto_sdk_members_member-followers@1.0.44/node_modules/@wix/auto_sdk_members_member-followers/build/es/index.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=0ov4__pnpm_0.7-0ys._.js.map