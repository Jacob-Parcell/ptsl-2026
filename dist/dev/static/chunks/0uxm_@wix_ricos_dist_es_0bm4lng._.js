(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_BUTTON_TYPE",
    ()=>ACTION_BUTTON_TYPE,
    "ANCHOR_TYPE",
    ()=>ANCHOR_TYPE,
    "ANIMATION_TYPE",
    ()=>ANIMATION_TYPE,
    "APP_EMBED_TYPE",
    ()=>APP_EMBED_TYPE,
    "AUDIO_TYPE",
    ()=>AUDIO_TYPE,
    "BLOCKQUOTE",
    ()=>BLOCKQUOTE,
    "BULLET_LIST_TYPE",
    ()=>BULLET_LIST_TYPE,
    "CARD_TYPE",
    ()=>CARD_TYPE,
    "CHECKBOX_LIST_TYPE",
    ()=>CHECKBOX_LIST_TYPE,
    "CODE_BLOCK_TYPE",
    ()=>CODE_BLOCK_TYPE,
    "COLLAPSIBLE_LIST_TYPE",
    ()=>COLLAPSIBLE_LIST_TYPE,
    "DIVIDER_TYPE",
    ()=>DIVIDER_TYPE,
    "EMBED_TYPE",
    ()=>EMBED_TYPE,
    "EMOJI_TYPE",
    ()=>EMOJI_TYPE,
    "EXTERNAL",
    ()=>EXTERNAL,
    "EXTERNAL_LINK_TYPE",
    ()=>EXTERNAL_LINK_TYPE,
    "EXTERNAL_MENTIONS_TYPE",
    ()=>EXTERNAL_MENTIONS_TYPE,
    "FILE_UPLOAD_TYPE",
    ()=>FILE_UPLOAD_TYPE,
    "GALLERY_TYPE",
    ()=>GALLERY_TYPE,
    "GIPHY_TYPE",
    ()=>GIPHY_TYPE,
    "HASHTAG_TYPE",
    ()=>HASHTAG_TYPE,
    "HEADERS_MARKDOWN_TYPE",
    ()=>HEADERS_MARKDOWN_TYPE,
    "HEADER_BLOCK",
    ()=>HEADER_BLOCK,
    "HEADINGS_DROPDOWN_TYPE",
    ()=>HEADINGS_DROPDOWN_TYPE,
    "HTML_TYPE",
    ()=>HTML_TYPE,
    "IMAGE_TYPE",
    ()=>IMAGE_TYPE,
    "IMAGE_TYPE_LEGACY",
    ()=>IMAGE_TYPE_LEGACY,
    "INDENT_TYPE",
    ()=>INDENT_TYPE,
    "LINE_SPACING_TYPE",
    ()=>LINE_SPACING_TYPE,
    "LINK_BUTTON_TYPE",
    ()=>LINK_BUTTON_TYPE,
    "LINK_PREVIEW_TYPE",
    ()=>LINK_PREVIEW_TYPE,
    "LINK_TYPE",
    ()=>LINK_TYPE,
    "MENTION_TYPE",
    ()=>MENTION_TYPE,
    "NO_WRAP",
    ()=>NO_WRAP,
    "NUMBERED_LIST_TYPE",
    ()=>NUMBERED_LIST_TYPE,
    "POLL_TYPE",
    ()=>POLL_TYPE,
    "PREVIEW",
    ()=>PREVIEW,
    "RICOS_ACTION_BUTTON_TYPE",
    ()=>RICOS_ACTION_BUTTON_TYPE,
    "RICOS_ANCHOR_TYPE",
    ()=>RICOS_ANCHOR_TYPE,
    "RICOS_CAPTION_TYPE",
    ()=>RICOS_CAPTION_TYPE,
    "RICOS_COLLAPSIBLE_LIST_TYPE",
    ()=>RICOS_COLLAPSIBLE_LIST_TYPE,
    "RICOS_DIVIDER_TYPE",
    ()=>RICOS_DIVIDER_TYPE,
    "RICOS_FILE_TYPE",
    ()=>RICOS_FILE_TYPE,
    "RICOS_FONT_FAMILY_TYPE",
    ()=>RICOS_FONT_FAMILY_TYPE,
    "RICOS_FONT_SIZE_TYPE",
    ()=>RICOS_FONT_SIZE_TYPE,
    "RICOS_GALLERY_TYPE",
    ()=>RICOS_GALLERY_TYPE,
    "RICOS_GIPHY_TYPE",
    ()=>RICOS_GIPHY_TYPE,
    "RICOS_HTML_TYPE",
    ()=>RICOS_HTML_TYPE,
    "RICOS_IMAGE_TYPE",
    ()=>RICOS_IMAGE_TYPE,
    "RICOS_INDENT_TYPE",
    ()=>RICOS_INDENT_TYPE,
    "RICOS_LAYOUT_CELL_TYPE",
    ()=>RICOS_LAYOUT_CELL_TYPE,
    "RICOS_LAYOUT_TYPE",
    ()=>RICOS_LAYOUT_TYPE,
    "RICOS_LINE_SPACING_TYPE",
    ()=>RICOS_LINE_SPACING_TYPE,
    "RICOS_LINK_BUTTON_TYPE",
    ()=>RICOS_LINK_BUTTON_TYPE,
    "RICOS_LINK_PREVIEW_TYPE",
    ()=>RICOS_LINK_PREVIEW_TYPE,
    "RICOS_LINK_TYPE",
    ()=>RICOS_LINK_TYPE,
    "RICOS_MENTION_TYPE",
    ()=>RICOS_MENTION_TYPE,
    "RICOS_NODE_TYPE_TO_DATA_FIELD",
    ()=>RICOS_NODE_TYPE_TO_DATA_FIELD,
    "RICOS_POLL_TYPE",
    ()=>RICOS_POLL_TYPE,
    "RICOS_SHAPE_TYPE",
    ()=>RICOS_SHAPE_TYPE,
    "RICOS_TABLE_TYPE",
    ()=>RICOS_TABLE_TYPE,
    "RICOS_TEXT_COLOR_TYPE",
    ()=>RICOS_TEXT_COLOR_TYPE,
    "RICOS_TEXT_HIGHLIGHT_TYPE",
    ()=>RICOS_TEXT_HIGHLIGHT_TYPE,
    "RICOS_VERTICAL_EMBED_TYPE",
    ()=>RICOS_VERTICAL_EMBED_TYPE,
    "RICOS_VIDEO_TYPE",
    ()=>RICOS_VIDEO_TYPE,
    "SHAPE_TYPE",
    ()=>SHAPE_TYPE,
    "SMART_BLOCK_CELL_TYPE",
    ()=>SMART_BLOCK_CELL_TYPE,
    "SMART_BLOCK_TYPE",
    ()=>SMART_BLOCK_TYPE,
    "SOUND_CLOUD_TYPE",
    ()=>SOUND_CLOUD_TYPE,
    "SPOILER_TYPE",
    ()=>SPOILER_TYPE,
    "TABLE_TYPE",
    ()=>TABLE_TYPE,
    "TEXT_COLOR_TYPE",
    ()=>TEXT_COLOR_TYPE,
    "TEXT_HIGHLIGHT_TYPE",
    ()=>TEXT_HIGHLIGHT_TYPE,
    "TIPTAP_ACTION_BUTTON_TYPE",
    ()=>TIPTAP_ACTION_BUTTON_TYPE,
    "TIPTAP_APP_EMBED_TYPE",
    ()=>TIPTAP_APP_EMBED_TYPE,
    "TIPTAP_AUDIO_TYPE",
    ()=>TIPTAP_AUDIO_TYPE,
    "TIPTAP_CAPTION_TYPE",
    ()=>TIPTAP_CAPTION_TYPE,
    "TIPTAP_CARD_CONTENT_TYPE",
    ()=>TIPTAP_CARD_CONTENT_TYPE,
    "TIPTAP_CARD_FOOTER_TYPE",
    ()=>TIPTAP_CARD_FOOTER_TYPE,
    "TIPTAP_CARD_HEADER_TYPE",
    ()=>TIPTAP_CARD_HEADER_TYPE,
    "TIPTAP_CARD_TYPE",
    ()=>TIPTAP_CARD_TYPE,
    "TIPTAP_CODE_BLOCK_TYPE",
    ()=>TIPTAP_CODE_BLOCK_TYPE,
    "TIPTAP_COLLAPSIBLE_ITEM_BODY_TYPE",
    ()=>TIPTAP_COLLAPSIBLE_ITEM_BODY_TYPE,
    "TIPTAP_COLLAPSIBLE_ITEM_TITLE_TYPE",
    ()=>TIPTAP_COLLAPSIBLE_ITEM_TITLE_TYPE,
    "TIPTAP_COLLAPSIBLE_ITEM_TYPE",
    ()=>TIPTAP_COLLAPSIBLE_ITEM_TYPE,
    "TIPTAP_COLLAPSIBLE_LIST_TYPE",
    ()=>TIPTAP_COLLAPSIBLE_LIST_TYPE,
    "TIPTAP_DIVIDER_TYPE",
    ()=>TIPTAP_DIVIDER_TYPE,
    "TIPTAP_EMBED_TYPE",
    ()=>TIPTAP_EMBED_TYPE,
    "TIPTAP_FIGURE_TYPE",
    ()=>TIPTAP_FIGURE_TYPE,
    "TIPTAP_FILE_TYPE",
    ()=>TIPTAP_FILE_TYPE,
    "TIPTAP_GALLERY_TYPE",
    ()=>TIPTAP_GALLERY_TYPE,
    "TIPTAP_GIF_TYPE",
    ()=>TIPTAP_GIF_TYPE,
    "TIPTAP_HTML_TYPE",
    ()=>TIPTAP_HTML_TYPE,
    "TIPTAP_IMAGE_TYPE",
    ()=>TIPTAP_IMAGE_TYPE,
    "TIPTAP_LAYOUT_CELL_TYPE",
    ()=>TIPTAP_LAYOUT_CELL_TYPE,
    "TIPTAP_LAYOUT_TYPE",
    ()=>TIPTAP_LAYOUT_TYPE,
    "TIPTAP_LINK_BUTTON_TYPE",
    ()=>TIPTAP_LINK_BUTTON_TYPE,
    "TIPTAP_LINK_PREVIEW_TYPE",
    ()=>TIPTAP_LINK_PREVIEW_TYPE,
    "TIPTAP_POLL_TYPE",
    ()=>TIPTAP_POLL_TYPE,
    "TIPTAP_SHAPE_TYPE",
    ()=>TIPTAP_SHAPE_TYPE,
    "TIPTAP_TABLE_CELL_TYPE",
    ()=>TIPTAP_TABLE_CELL_TYPE,
    "TIPTAP_TABLE_HEADER_CELL_TYPE",
    ()=>TIPTAP_TABLE_HEADER_CELL_TYPE,
    "TIPTAP_TABLE_ROW_TYPE",
    ()=>TIPTAP_TABLE_ROW_TYPE,
    "TIPTAP_TABLE_TYPE",
    ()=>TIPTAP_TABLE_TYPE,
    "TIPTAP_VIDEO_TYPE",
    ()=>TIPTAP_VIDEO_TYPE,
    "TOC_TYPE",
    ()=>TOC_TYPE,
    "UNDO_REDO_TYPE",
    ()=>UNDO_REDO_TYPE,
    "UNSTYLED",
    ()=>UNSTYLED,
    "VERTICAL_EMBED_TYPE",
    ()=>VERTICAL_EMBED_TYPE,
    "VIDEO_TYPE",
    ()=>VIDEO_TYPE,
    "VIDEO_TYPE_LEGACY",
    ()=>VIDEO_TYPE_LEGACY,
    "WRAP",
    ()=>WRAP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
;
const HEADER_BLOCK = Object.freeze({
    ONE: "header-one",
    TWO: "header-two",
    THREE: "header-three",
    FOUR: "header-four",
    FIVE: "header-five",
    SIX: "header-six",
    PARAGRAPH: "unstyled"
});
const WRAP = "wrap";
const NO_WRAP = "nowrap";
const UNSTYLED = "unstyled";
const BLOCKQUOTE = "blockquote";
const NUMBERED_LIST_TYPE = "ordered-list-item";
const BULLET_LIST_TYPE = "unordered-list-item";
const CHECKBOX_LIST_TYPE = "checkbox-list-item";
const LINK_BUTTON_TYPE = "wix-draft-plugin-link-button";
const ACTION_BUTTON_TYPE = "wix-draft-plugin-action-button";
const ANIMATION_TYPE = "animation";
const CODE_BLOCK_TYPE = "code-block";
const DIVIDER_TYPE = "wix-draft-plugin-divider";
const EMOJI_TYPE = "wix-draft-plugin-emoji";
const FILE_UPLOAD_TYPE = "wix-draft-plugin-file-upload";
const GALLERY_TYPE = "wix-draft-plugin-gallery";
const GIPHY_TYPE = "wix-draft-plugin-giphy";
const HASHTAG_TYPE = "wix-draft-plugin-hashtag";
const HEADERS_MARKDOWN_TYPE = "wix-draft-plugin-headers-markdown";
const HTML_TYPE = "wix-draft-plugin-html";
const IMAGE_TYPE = "wix-draft-plugin-image";
const IMAGE_TYPE_LEGACY = "IMAGE";
const INDENT_TYPE = "wix-rich-content-plugin-indent";
const LINE_SPACING_TYPE = "line-spacing";
const HEADINGS_DROPDOWN_TYPE = "wix-rich-content-plugin-headings";
const SPOILER_TYPE = "wix-rich-content-plugin-spoiler";
const COLLAPSIBLE_LIST_TYPE = "wix-rich-content-plugin-collapsible-list";
const EXTERNAL_LINK_TYPE = "wix-draft-plugin-external-link";
const LINK_TYPE = "LINK";
const LINK_PREVIEW_TYPE = "wix-draft-plugin-link-preview";
const EXTERNAL_MENTIONS_TYPE = "wix-draft-plugin-external-mentions";
const MENTION_TYPE = "mention";
const SOUND_CLOUD_TYPE = "wix-draft-plugin-sound-cloud";
const TEXT_COLOR_TYPE = "wix-rich-content-text-color";
const TEXT_HIGHLIGHT_TYPE = "wix-rich-content-text-highlight";
const UNDO_REDO_TYPE = "wix-rich-content-undo-redo";
const APP_EMBED_TYPE = "wix-draft-plugin-vertical-embed";
const VERTICAL_EMBED_TYPE = "wix-draft-plugin-vertical-embed";
const VIDEO_TYPE = "wix-draft-plugin-video";
const AUDIO_TYPE = "ricos-audio";
const VIDEO_TYPE_LEGACY = "VIDEO-EMBED";
const POLL_TYPE = "wix-draft-plugin-poll";
const TABLE_TYPE = "wix-rich-content-plugin-table";
const ANCHOR_TYPE = "ANCHOR";
const PREVIEW = "PREVIEW";
const EMBED_TYPE = "EMBED";
const EXTERNAL = "EXTERNAL";
const SHAPE_TYPE = "SHAPE";
const CARD_TYPE = "CARD";
const TOC_TYPE = "TOC";
const SMART_BLOCK_TYPE = "SMART_BLOCK";
const SMART_BLOCK_CELL_TYPE = "SMART_BLOCK_CELL";
const RICOS_COLLAPSIBLE_LIST_TYPE = "ricos-collapsible-list";
const RICOS_ACTION_BUTTON_TYPE = "ricos-action-button";
const RICOS_DIVIDER_TYPE = "ricos-divider";
const RICOS_FILE_TYPE = "ricos-file";
const RICOS_GALLERY_TYPE = "ricos-gallery";
const RICOS_GIPHY_TYPE = "ricos-giphy";
const RICOS_HTML_TYPE = "ricos-html";
const RICOS_IMAGE_TYPE = "ricos-image";
const RICOS_CAPTION_TYPE = "ricos-caption";
const RICOS_INDENT_TYPE = "ricos-indent";
const RICOS_LINE_SPACING_TYPE = "ricos-line-spacing";
const RICOS_LINK_BUTTON_TYPE = "ricos-link-button";
const RICOS_LINK_PREVIEW_TYPE = "ricos-link-preview";
const RICOS_POLL_TYPE = "ricos-poll";
const RICOS_TABLE_TYPE = "ricos-table";
const RICOS_TEXT_COLOR_TYPE = "ricos-text-color";
const RICOS_TEXT_HIGHLIGHT_TYPE = "ricos-text-highlight";
const RICOS_VERTICAL_EMBED_TYPE = "ricos-vertical-embed";
const RICOS_VIDEO_TYPE = "ricos-video";
const RICOS_ANCHOR_TYPE = "ricos-anchor";
const RICOS_LINK_TYPE = "ricos-link";
const RICOS_MENTION_TYPE = "ricos-mention";
const RICOS_FONT_SIZE_TYPE = "ricos-font-size";
const RICOS_FONT_FAMILY_TYPE = "ricos-font-family";
const RICOS_LAYOUT_TYPE = "ricos-layout";
const RICOS_LAYOUT_CELL_TYPE = "ricos-layout-cell";
const RICOS_SHAPE_TYPE = "ricos-shape";
const TIPTAP_DIVIDER_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].DIVIDER;
const TIPTAP_FIGURE_TYPE = "FIGURE";
const TIPTAP_IMAGE_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].IMAGE;
const TIPTAP_CAPTION_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CAPTION;
const TIPTAP_GALLERY_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GALLERY;
const TIPTAP_FILE_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].FILE;
const TIPTAP_GIF_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GIF;
const TIPTAP_VIDEO_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].VIDEO;
const TIPTAP_AUDIO_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO;
const TIPTAP_LINK_PREVIEW_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].LINK_PREVIEW;
const TIPTAP_EMBED_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].EMBED;
const TIPTAP_POLL_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].POLL;
const TIPTAP_APP_EMBED_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].APP_EMBED;
const TIPTAP_COLLAPSIBLE_LIST_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].COLLAPSIBLE_LIST;
const TIPTAP_COLLAPSIBLE_ITEM_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].COLLAPSIBLE_ITEM;
const TIPTAP_COLLAPSIBLE_ITEM_TITLE_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].COLLAPSIBLE_ITEM_TITLE;
const TIPTAP_COLLAPSIBLE_ITEM_BODY_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].COLLAPSIBLE_ITEM_BODY;
const TIPTAP_HTML_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HTML;
const TIPTAP_LINK_BUTTON_TYPE = "LINK_BUTTON";
const TIPTAP_ACTION_BUTTON_TYPE = "ACTION_BUTTON";
const TIPTAP_CODE_BLOCK_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CODE_BLOCK;
const TIPTAP_TABLE_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE;
const TIPTAP_TABLE_ROW_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_ROW;
const TIPTAP_TABLE_CELL_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_CELL;
const TIPTAP_TABLE_HEADER_CELL_TYPE = "TABLE_HEADER_CELL";
const TIPTAP_LAYOUT_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].LAYOUT;
const TIPTAP_LAYOUT_CELL_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].LAYOUT_CELL;
const TIPTAP_SHAPE_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SHAPE;
const TIPTAP_CARD_TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CARD;
const TIPTAP_CARD_HEADER_TYPE = "CARD_HEADER";
const TIPTAP_CARD_CONTENT_TYPE = "CARD_CONTENT";
const TIPTAP_CARD_FOOTER_TYPE = "CARD_FOOTER";
const RICOS_NODE_TYPE_TO_DATA_FIELD = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BUTTON]: "buttonData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].DIVIDER]: "dividerData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].FILE]: "fileData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GALLERY]: "galleryData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].GIF]: "gifData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HTML]: "htmlData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].IMAGE]: "imageData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CAPTION]: "captionData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].COLLAPSIBLE_LIST]: "collapsibleListData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].LINK_PREVIEW]: "linkPreviewData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].APP_EMBED]: "appEmbedData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].VIDEO]: "videoData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].POLL]: "pollData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE]: "tableData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_CELL]: "tableCellData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TOC]: "tocData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].PARAGRAPH]: "paragraphData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].LIST_ITEM]: "paragraphData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING]: "headingData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CODE_BLOCK]: "codeBlockData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BLOCKQUOTE]: "paragraphData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].EMBED]: "embedData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].EXTERNAL]: "externalData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO]: "audioData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TEXT]: "textData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].BULLETED_LIST]: "bulletedListData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CHECKBOX_LIST]: "checkboxListData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].ORDERED_LIST]: "orderedListData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].COLLAPSIBLE_ITEM]: void 0,
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].COLLAPSIBLE_ITEM_TITLE]: void 0,
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].COLLAPSIBLE_ITEM_BODY]: void 0,
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TABLE_ROW]: void 0,
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].UNRECOGNIZED]: void 0,
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].MAP]: void 0,
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].LAYOUT]: void 0,
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].LAYOUT_CELL]: "layoutCellData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SHAPE]: "shapeData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CARD]: "cardData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK]: "smartBlockData",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].SMART_BLOCK_CELL]: "smartBlockCellData"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/shortcuts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createShortcut",
    ()=>createShortcut
]);
const createShortcut = (shortcut)=>shortcut;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/plugin-types.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "quickActionsModalSections",
    ()=>quickActionsModalSections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
;
const quickActionsModalSections = {
    ultra: "ultra",
    CommonlyUsed: "QuickActionsPlugin_SectionTitle_CommonlyUsed",
    AI: "QuickActionsPlugin_SectionTitle_AI",
    FormatLayout: "QuickActionsPlugin_SectionTitle_FormatLayout",
    Media: "QuickActionsPlugin_SectionTitle_Media",
    Embed: "QuickActionsPlugin_SectionTitle_Embed",
    EmbedWix: "QuickActionsPlugin_SectionTitle_EmbedFromWIX"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEADINGS_DROPDOWN_TYPE",
    ()=>HEADINGS_DROPDOWN_TYPE
]);
const HEADINGS_DROPDOWN_TYPE = "wix-rich-content-plugin-headings";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/defaults.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULTS",
    ()=>DEFAULTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/types.js [app-client] (ecmascript)");
;
const DEFAULTS = Object.freeze({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADINGS_DROPDOWN_TYPE"],
    config: {}
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/create-text-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTextButton",
    ()=>createTextButton
]);
function createTextButton(config) {
    return config;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/editor-types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOC_STYLE_TYPES",
    ()=>DOC_STYLE_TYPES,
    "DRAFT_TO_DOC_TYPE_WITH_LISTS",
    ()=>DRAFT_TO_DOC_TYPE_WITH_LISTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
;
const DOC_STYLE_TYPES = {
    P: "paragraph",
    H1: "headerOne",
    H2: "headerTwo",
    H3: "headerThree",
    H4: "headerFour",
    H5: "headerFive",
    H6: "headerSix"
};
const DRAFT_TO_DOC_TYPE = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].ONE]: "headerOne",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].TWO]: "headerTwo",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].THREE]: "headerThree",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].FOUR]: "headerFour",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].FIVE]: "headerFive",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].SIX]: "headerSix",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].PARAGRAPH]: "paragraph"
};
const DRAFT_TO_DOC_TYPE_WITH_LISTS = {
    ...DRAFT_TO_DOC_TYPE,
    "checkbox-list-item": "paragraph",
    "ordered-list-item": "paragraph",
    "unordered-list-item": "paragraph"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/headings-dropdown-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCustomHeadingsLabel",
    ()=>getCustomHeadingsLabel,
    "hasStyleChanges",
    ()=>hasStyleChanges,
    "headingsMap",
    ()=>headingsMap,
    "translateHeading",
    ()=>translateHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$editor$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/editor-types.js [app-client] (ecmascript)");
;
;
const headingsMap = {
    "header-one": "Heading 1",
    "header-two": "Heading 2",
    "header-three": "Heading 3",
    "header-four": "Heading 4",
    "header-five": "Heading 5",
    "header-six": "Heading 6",
    unstyled: "P"
};
const findOsName = ()=>{
    if (navigator.userAgent.indexOf("Win") !== -1) {
        return "Windows";
    }
    if (navigator.userAgent.indexOf("Mac") !== -1) {
        return "MacOS";
    }
    return null;
};
const headingShortcuts = {
    MacOS: (number)=>` (⌘⌥${number})`,
    Windows: (number)=>` (Ctrl+Alt+${number})`
};
const translateHeading = (option = "P", t, shouldAddShortcut = false)=>{
    const number = parseInt(option.slice(-1)) ? option.slice(-1) : void 0;
    const osName = findOsName();
    const shortcut = shouldAddShortcut && osName ? headingShortcuts[osName](number || 0) : void 0;
    return option === "P" ? t("FormattingToolbar_TextStyle_Paragraph", shortcut && {
        shortcut
    }) : t("FormattingToolbar_TextStyle_Heading", shortcut ? {
        number,
        shortcut
    } : {
        number
    });
};
const getCustomHeadingsLabel = (selectedHeading, t, publicCommands)=>{
    const label = translateHeading(headingsMap[selectedHeading], t);
    const inlineStyles = publicCommands.getInlineStylesInSelection() || {};
    const isAsteriskVisible = hasStyleChanges(selectedHeading, inlineStyles, publicCommands.getDocumentStyle());
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, label, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            width: "1ch",
            marginInline: "-3px"
        }
    }, isAsteriskVisible ? "*" : null));
};
const hasStyleChanges = (currentHeading, inlineStyles, documentStyle)=>{
    const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$editor$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRAFT_TO_DOC_TYPE_WITH_LISTS"][currentHeading];
    const headerStyle = documentStyle?.[key] || {};
    return Object.entries(inlineStyles).some(([key2, value])=>headerStyle[key2] !== value);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-heading-in-selection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHeadingInSelection",
    ()=>getHeadingInSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
;
const headingMap = {
    1: "header-one",
    2: "header-two",
    3: "header-three",
    4: "header-four",
    5: "header-five",
    6: "header-six"
};
const getHeadingInSelection = (content, _services, _editor)=>{
    if (Array.isArray(content) && content.length > 0) {
        const headingLevel = content.find((node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING)?.attrs?.level;
        if (!headingLevel || content[0].type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].PARAGRAPH) {
            return "unstyled";
        }
        return headingMap[headingLevel];
    }
    return void 0;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/is-always-visible.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAlwaysVisible",
    ()=>isAlwaysVisible
]);
const isAlwaysVisible = (_content, _services, _editor)=>true;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/is-node-or-caption-selected.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeOrCaptionSelected",
    ()=>isNodeOrCaptionSelected
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
;
const isNodeOrCaptionSelected = (_, __, editor)=>{
    const node = editor?.state?.selection?.node;
    const isCaption = editor?.state?.selection.$anchor.parent.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CAPTION || editor?.state?.selection.$head.parent.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].CAPTION;
    return !!node || isCaption;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/Utils/is-defined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDefined",
    ()=>isDefined
]);
const isDefined = (x)=>x !== void 0 && x !== null;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/deep-equal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepEqual",
    ()=>deepEqual
]);
function deepEqual(a, b, customizer, key) {
    if (customizer) {
        const custom = customizer(a, b, key);
        if (custom !== void 0) {
            return custom;
        }
    }
    if (a === b) {
        return true;
    }
    if (typeof a === "number" && typeof b === "number") {
        return Number.isNaN(a) && Number.isNaN(b);
    }
    if (a instanceof Date || b instanceof Date) {
        return a instanceof Date && b instanceof Date && a.getTime() === b.getTime();
    }
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
        return false;
    }
    if (Array.isArray(a) !== Array.isArray(b)) {
        return false;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        return a.length === b.length && a.every((item, i)=>deepEqual(item, b[i], customizer, i));
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    return aKeys.length === bKeys.length && aKeys.every((key2)=>Object.prototype.hasOwnProperty.call(b, key2) && deepEqual(a[key2], b[key2], customizer, key2));
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/is-text-styles-match-document-styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTextStylesMatchDocumentStylesResolver",
    ()=>isTextStylesMatchDocumentStylesResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$is$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/Utils/is-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/deep-equal.js [app-client] (ecmascript)");
;
;
;
const isTextStylesMatchDocumentStylesResolver = (content = [], { styles, converters })=>{
    const currentNode = content.filter((node)=>node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING || node.type.name === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].PARAGRAPH);
    let stylesMatched = true;
    if (currentNode.length === 1) {
        const ricosCurrentNode = converters.fromPmNode(currentNode[0].toJSON());
        const currentNodeDocumentsStyles = styles.getDocumentStyle().getDecorations(ricosCurrentNode);
        const textsDecorations = (ricosCurrentNode?.nodes ?? []).filter((node)=>{
            return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].TEXT;
        }).map((node)=>{
            return node.textData?.decorations;
        }).flat().filter(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$is$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDefined"]);
        stylesMatched = textsDecorations.every((decoration)=>{
            const currentDocumentStyleDecoration = currentNodeDocumentsStyles.find((documentStyle)=>{
                return documentStyle.type === decoration.type;
            });
            if (currentDocumentStyleDecoration) {
                const removeNullReplacer = (key, value)=>value === null ? void 0 : value;
                const cleanDecoration = JSON.parse(JSON.stringify(decoration, removeNullReplacer));
                const cleanedCurrentDocumentStyleDecoration = JSON.parse(JSON.stringify(currentDocumentStyleDecoration, removeNullReplacer));
                if (currentDocumentStyleDecoration && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(cleanedCurrentDocumentStyleDecoration, cleanDecoration)) {
                    return false;
                }
            } else {
                return false;
            }
            return true;
        });
    }
    return stylesMatched;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/plugins-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PluginsContext",
    ()=>PluginsContext,
    "PluginsContextProvider",
    ()=>PluginsContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const PluginsContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
const PluginsContextProvider = ({ plugins, children })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PluginsContext.Provider, {
        value: plugins
    }, children);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/editor-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorContext",
    ()=>EditorContext,
    "EditorContextConsumer",
    ()=>EditorContextConsumer,
    "EditorContextProvider",
    ()=>EditorContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const EditorContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
const EditorContextProvider = ({ editor, children })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(EditorContext.Provider, {
        value: editor
    }, children);
const EditorContextConsumer = ({ children })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(EditorContext.Consumer, null, (value)=>children(value));
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RicosContext",
    ()=>RicosContext,
    "RicosContextConsumer",
    ()=>RicosContextConsumer,
    "RicosContextProvider",
    ()=>RicosContextProvider,
    "withRicosContext",
    ()=>withRicosContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const RicosContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    locale: "en",
    localeContent: "en",
    experiments: {},
    isMobile: false,
    t: (text)=>text,
    languageDir: "ltr",
    theme: {},
    portal: null,
    debugMode: [],
    platform: "macOs",
    content: null,
    jsdomMode: false,
    environment: "liveSite",
    tabIndex: 0,
    lastInteraction: null,
    tabFocusBehavior: "edit"
});
const RicosContextProvider = ({ children, isMobile, locale, localeContent, experiments, languageDir, theme, t, portal, debugMode = [], jsdomMode = false, platform = "macOs", content = null, environment = "liveSite", tabIndex = 0, lastInteraction = null, tabFocusBehavior = "edit", colorManager })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RicosContext.Provider, {
        value: {
            t,
            locale,
            localeContent,
            isMobile,
            experiments: experiments ?? {},
            languageDir,
            theme,
            portal: portal ?? null,
            debugMode,
            jsdomMode,
            platform,
            content,
            environment,
            tabIndex,
            lastInteraction,
            tabFocusBehavior,
            colorManager
        }
    }, children);
};
function withRicosContext(Component) {
    return (props)=>{
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RicosContext.Consumer, null, (value)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, {
                ...props,
                ricosContext: value
            }));
    };
}
const RicosContextConsumer = ({ children })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RicosContext.Consumer, null, (value)=>children(value));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/modal-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalServiceContext",
    ()=>ModalServiceContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ModalServiceContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/Utils/uuid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uuid",
    ()=>uuid
]);
const uuid = ()=>{
    let d = /* @__PURE__ */ new Date().getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c)=>{
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : r & 3 | 8).toString(16);
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-modals/modal-service.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalService",
    ()=>ModalService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$log$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/log-invariant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$uuid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/Utils/uuid.js [app-client] (ecmascript)");
;
;
const TOPICS = [
    "ricos.modals.functionality.modalOpened",
    "ricos.modals.functionality.modalClosed"
];
class ModalService {
    // oxlint-disable-next-line no-useless-constructor
    constructor(modalSettings, state, externalModalState){
        this.modalSettings = modalSettings;
        this.state = state;
        this.externalModalState = externalModalState;
        this.id = "ricos-modal-service";
        this.topicsToPublish = TOPICS;
        this.topicsToSubscribe = TOPICS;
    }
    setModalRef(modalId, ref) {
        this.state.set((prev)=>{
            const modal = prev[modalId];
            if (!modal || Object.keys(modal.modalRef?.current).length > 0) {
                return prev;
            }
            modal.modalRef.current = ref;
            return {
                ...prev,
                [modalId]: modal
            };
        });
    }
    openModal(config) {
        const modalSessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$uuid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid"])();
        if (this.state.get()[config.id]) {
            console.warn(`Reopening modal ${config.id} that's already open`);
        }
        if (config.type === "exclusive") {
            const openModals = this.getOpenModals();
            openModals.forEach((openModal)=>{
                if (openModal.id !== config.id) {
                    this.closeModal(openModal.id);
                }
            });
        }
        const modalRef = {
            current: {}
        };
        const modal = {
            ...config,
            componentProps: {
                ...config.componentProps,
                modalSessionId
            },
            modalRef
        };
        this.state.set((prev)=>({
                ...prev,
                [config.id]: modal
            }));
        this.publishers.byTopic("ricos.modals.functionality.modalOpened").publish({
            id: config.id,
            entryType: config.entryType,
            dropdownValue: config.dropdownValue,
            modalSessionId
        });
        this.modalSettings?.onModalOpen?.();
        return {
            modalRef,
            patchProps: (newProps)=>{
                this.state.set((prev)=>{
                    const modal2 = prev[config.id];
                    if (!modal2) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$log$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logInvariant"])(new Error(`Patching modal with id ${config.id} which is not open`));
                        return prev;
                    }
                    return {
                        ...prev,
                        [config.id]: {
                            ...modal2,
                            modalRef: {
                                current: modal2.modalRef?.current
                            },
                            componentProps: {
                                ...modal2.componentProps,
                                ...newProps
                            }
                        }
                    };
                });
            },
            close: ()=>this.closeModal(modal.id)
        };
    }
    togglePluginPanel({ isMobile, ...params }) {
        if (this.isModalOpen(params.id)) {
            this.closeModal(params.id);
            return;
        }
        this.openModal({
            enableDrag: !isMobile,
            dragHandleSelector: "[data-drag-handler]",
            layout: {
                desktop: params.positioning?.referenceElement ? "floating" : "dialog",
                mobile: params.mobileLayout ?? "fullscreen"
            },
            withTransition: !isMobile,
            type: "exclusive",
            disableArrowNavigation: true,
            onClickOutside: {
                on: "pointerup",
                handler: (e)=>{
                    if (params.focusReturnElement && !params.focusReturnElement?.contains(e.target)) {
                        this.closeModal(params.id);
                        return;
                    }
                    const excludeElement = params.positioning.referenceElement;
                    if (!excludeElement?.contains?.(e.target)) {
                        this.closeModal(params.id);
                        return;
                    }
                }
            },
            ...params
        });
    }
    closeModal(modalId) {
        const modal = this.state.get()[modalId];
        if (!modal) {
            console.warn(`Fail to close modal: ${modalId} is not open`);
            return false;
        } else {
            this.state.set((prevState)=>{
                const { [modalId]: _, ...remainingModals } = prevState;
                return remainingModals;
            });
            this.publishers.byTopic("ricos.modals.functionality.modalClosed").publish(modal);
            this.modalSettings?.onModalClose?.();
            return true;
        }
    }
    getOpenModals() {
        return Object.values(this.state.get());
    }
    isModalOpen(id) {
        const modal = this.state.get()[id];
        return !!modal;
    }
    onModalOpened(onOpen) {
        return this.subscriptors.byTopic("ricos.modals.functionality.modalOpened").subscribe((_topic, data)=>{
            onOpen(data.id);
        });
    }
    onModalClosed(onClose) {
        return this.subscriptors.byTopic("ricos.modals.functionality.modalClosed").subscribe((_topic, data)=>{
            onClose(data);
        });
    }
    /**
   * Call before opening an external (non-Ricos-rendered) modal-like flow,
   * e.g. the host's Media Manager — its DOM isn't visible to Ricos, so the
   * plugin toolbar's outside-click dismissal can't recognize it on its own.
   * See useDismissPluginToolbarOnOutsideClick.
   *
   * Deliberately does NOT publish to `modalOpened` — that topic already
   * drives the `onPluginModalOpened` BI callback via `openModal()`, which
   * expects a real `{ id, entryType, dropdownValue, modalSessionId }`
   * payload. Publishing here would fire that callback with garbage data.
   */ notifyExternalModalOpened() {
        this.externalModalState.set(true);
    }
    /**
   * Also called from several pre-existing, unrelated "cancel" flows (dev-only
   * pick-media paths) that have nothing to do with the external-modal flag
   * above — those calls are harmless no-ops against it since they can't run
   * concurrently with a real external modal session in practice.
   */ notifyExternalModalClosed(options = {}) {
        this.externalModalState.set(false);
        this.publishers.byTopic("ricos.modals.functionality.modalClosed").publish(options);
    }
    getModal(id) {
        return this.state.get()[id];
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-modals/modal-service-provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalProvider",
    ()=>ModalProvider,
    "getIsAnyModalOpenByIdPrefix",
    ()=>getIsAnyModalOpenByIdPrefix,
    "getIsExclusiveModalOpen",
    ()=>getIsExclusiveModalOpen,
    "getIsModalOpen",
    ()=>getIsModalOpen,
    "useIsExternalModalOpen",
    ()=>useIsExternalModalOpen,
    "useModalService",
    ()=>useModalService,
    "useModalState",
    ()=>useModalState,
    "useModalStateContext",
    ()=>useModalStateContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$modal$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/modal-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$context$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/use-context-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-modals/modal-service.js [app-client] (ecmascript)");
;
;
;
;
const ModalStateContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$context$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const ExternalModalOpenContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(false);
const ModalProvider = (props)=>{
    const [modalState, setModalState] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({});
    const modalStateRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(modalState);
    modalStateRef.current = modalState;
    const [isExternalModalOpen, setIsExternalModalOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [service] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "ModalProvider.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalService"](props.modalSettings ?? {}, {
                get: {
                    "ModalProvider.useState": ()=>modalStateRef.current ?? {}
                }["ModalProvider.useState"],
                set: setModalState
            }, {
                set: setIsExternalModalOpen
            })
    }["ModalProvider.useState"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$modal$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalServiceContext"].Provider, {
        value: service
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ModalStateContext.Provider, {
        value: modalState
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ExternalModalOpenContext.Provider, {
        value: isExternalModalOpen
    }, props.children)));
};
const useModalService = ()=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$modal$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalServiceContext"]);
    if (!context) {
        throw new Error("useModalService must be used within a ModalProvider");
    }
    return context;
};
const useIsExternalModalOpen = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(ExternalModalOpenContext);
const useModalStateContext = ({ onSelectorContextValue })=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(ModalStateContext);
    if (!context) {
        throw new Error("useModalStateContext must be used within a ModalProvider");
    }
    onSelectorContextValue(context);
    return context;
};
const useModalState = (selector, trackingString)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$context$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContextSelector"])(ModalStateContext, selector, Object.is, trackingString);
};
const getIsModalOpen = (id)=>(state)=>!!state[id];
const getIsAnyModalOpenByIdPrefix = (prefix)=>(state)=>Object.keys(state).some((id)=>id.startsWith(prefix));
const getIsExclusiveModalOpen = (state)=>Object.values(state).some((m)=>m.type === "exclusive");
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/z-index-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZIndexContext",
    ()=>ZIndexContext,
    "ZIndexContextProvider",
    ()=>ZIndexContextProvider,
    "withZIndexContext",
    ()=>withZIndexContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ZIndexContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
const ZIndexContextProvider = ({ zIndexService, children })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ZIndexContext.Provider, {
        value: zIndexService
    }, children);
function withZIndexContext(Component) {
    return (props)=>{
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ZIndexContext.Consumer, null, (value)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, {
                ...props,
                zIndexService: value
            }));
    };
}
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/Utils/data-hook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dataHook",
    ()=>dataHook
]);
function dataHook(...hooks) {
    return hooks.map((hook)=>{
        if (Array.isArray(hook)) {
            return hook.map((h)=>`[data-hook~="${h}"]`).join("");
        }
        if (hook === "") {
            return `[data-hook="${hook}"]`;
        }
        return `[data-hook~="${hook}"]`;
    }).join(" ");
}
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/toolbars-v3/components/buttons/CustomHeadingButton/custom-heading-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomHeadingButton",
    ()=>CustomHeadingButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ChevronDownSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ChevronDownSmall.js [app-client] (ecmascript) <export default as ChevronDownSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/editor-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-modals/modal-service-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/headings-dropdown-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const CustomHeadingButton = ({ toolbarItem, dataHook })=>{
    const { getPublicCommands } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContext"]);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const isModalOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsModalOpen"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING}.modal`));
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const publicCommands = getPublicCommands?.();
    const selectedHeading = toolbarItem.attributes.selectedHeading;
    const Label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomHeadingsLabel"])(selectedHeading, t, publicCommands);
    const tooltip = t(toolbarItem.presentation?.tooltip);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        ref: setReferenceElement,
        disabled: toolbarItem.attributes.disabled,
        active: isModalOpen,
        onClick: (e)=>toolbarItem.commands?.click({
                referenceElement,
                clickFromKeyboard: !e.detail
            }),
        ariaLabel: tooltip,
        label: Label,
        suffix: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ChevronDownSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownSmall$3e$__["ChevronDownSmall"],
        dataHook,
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/toolbars-v3/components/buttons/HeadingButton/heading-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadingButton",
    ()=>HeadingButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ChevronDownSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ChevronDownSmall.js [app-client] (ecmascript) <export default as ChevronDownSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-modals/modal-service-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/headings-dropdown-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/toolbar-button/toolbar-button.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const HeadingButton = ({ toolbarItem, dataHook })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const isModalOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$modals$2f$modal$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsModalOpen"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING}.modal`));
    const [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedHeading = toolbarItem.attributes.selectedHeading;
    const Label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateHeading"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingsMap"][selectedHeading], t);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$toolbar$2d$button$2f$toolbar$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolbarButton"], {
        ref: setReferenceElement,
        disabled: toolbarItem.attributes.disabled,
        active: isModalOpen,
        onClick: (e)=>toolbarItem.commands?.click({
                referenceElement,
                clickFromKeyboard: !e.detail
            }),
        ariaLabel: t(toolbarItem.presentation?.tooltip),
        label: Label,
        suffix: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ChevronDownSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownSmall$3e$__["ChevronDownSmall"],
        dataHook,
        tabIndex: toolbarItem.presentation.tabIndex
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/toolbars-v3/components/buttons/HeadingButtonSwitch/heading-button-switch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadingButtonSwitch",
    ()=>HeadingButtonSwitch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/plugins-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$CustomHeadingButton$2f$custom$2d$heading$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/toolbars-v3/components/buttons/CustomHeadingButton/custom-heading-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$HeadingButton$2f$heading$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/toolbars-v3/components/buttons/HeadingButton/heading-button.js [app-client] (ecmascript)");
;
;
;
;
const HeadingButtonSwitch = ({ toolbarItem, dataHook })=>{
    const plugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsContext"]);
    const headingsData = plugins?.getConfig("wix-rich-content-plugin-headings");
    return headingsData?.allowHeadingCustomization ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$CustomHeadingButton$2f$custom$2d$heading$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomHeadingButton"], {
        toolbarItem,
        dataHook
    }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$HeadingButton$2f$heading$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadingButton"], {
        toolbarItem,
        dataHook
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/data-hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEADINGS_DROPDOWN_CHEVRON",
    ()=>HEADINGS_DROPDOWN_CHEVRON,
    "HEADINGS_DROPDOWN_OPTION",
    ()=>HEADINGS_DROPDOWN_OPTION,
    "HEADINGS_UPDATE_PANEL",
    ()=>HEADINGS_UPDATE_PANEL,
    "HEADINGS_UPDATE_PANEL_APPLY",
    ()=>HEADINGS_UPDATE_PANEL_APPLY,
    "HEADINGS_UPDATE_PANEL_INFO_ICON",
    ()=>HEADINGS_UPDATE_PANEL_INFO_ICON,
    "HEADINGS_UPDATE_PANEL_RESET",
    ()=>HEADINGS_UPDATE_PANEL_RESET,
    "HEADINGS_UPDATE_PANEL_UPDATE",
    ()=>HEADINGS_UPDATE_PANEL_UPDATE,
    "TEXT_BUTTON_HEADINGS",
    ()=>TEXT_BUTTON_HEADINGS
]);
const TEXT_BUTTON_HEADINGS = "text-button-headings";
const HEADINGS_DROPDOWN_OPTION = "modal-option";
const HEADINGS_DROPDOWN_CHEVRON = "chevron-right";
const HEADINGS_UPDATE_PANEL = "headings-update-panel";
const HEADINGS_UPDATE_PANEL_APPLY = "headings-update-panel-apply";
const HEADINGS_UPDATE_PANEL_UPDATE = "headings-update-panel-update";
const HEADINGS_UPDATE_PANEL_RESET = "headings-update-panel-reset";
const HEADINGS_UPDATE_PANEL_INFO_ICON = "headings-update-panel-info-icon";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/get-current-headings-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentHeadingIcon",
    ()=>getCurrentHeadingIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/headings-dropdown-utils.js [app-client] (ecmascript)");
;
;
const getCurrentHeadingIcon = (allowHeadingCustomization, publicCommands, t)=>{
    const selectedHeading = publicCommands.getCurrentHeading();
    return ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, allowHeadingCustomization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomHeadingsLabel"])(selectedHeading, t, publicCommands) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateHeading"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingsMap"][selectedHeading], t));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/headings-dropdown-lazy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>headings_dropdown_lazy_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const HeadingsPanelController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/headings-dropdown.js [app-client] (ecmascript, async loader)").then(({ default: HeadingsDropdown })=>({
            default: HeadingsDropdown
        })));
const HeadingPanelComponent = (suspenseWidth)=>()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    width: suspenseWidth
                }
            })
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(HeadingsPanelController, {
            minWidth: suspenseWidth
        }));
var headings_dropdown_lazy_default = HeadingPanelComponent;
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/is-empty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEmpty",
    ()=>isEmpty
]);
function isEmpty(value) {
    if (value === null || value === void 0) {
        return true;
    }
    if (typeof value === "string" || Array.isArray(value)) {
        return value.length === 0;
    }
    if (value instanceof Map || value instanceof Set) {
        return value.size === 0;
    }
    if (typeof value === "object") {
        return Object.keys(value).length === 0;
    }
    return true;
}
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/colors-icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorsIcon",
    ()=>ColorsIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ColorsIcon = ({ color, backgroundColor })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, "Group"), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        id: "📟--Specs-for-devs",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        id: "Icons",
        transform: "translate(-123.000000, -57.000000)"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        id: "Group",
        transform: "translate(123.000000, 57.000000)"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        id: "Oval-Copy-7",
        stroke: "#C9C9C9",
        cx: "12",
        cy: "12",
        r: "11.5",
        fill: backgroundColor || "white"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M8.73879454,16.5308689 L9.85879454,13.5208689 L14.0867945,13.5208689 L15.1787945,16.5308689 L16.6487945,16.5308689 L12.7427945,6.53486888 L11.2727945,6.53486888 L7.38079454,16.5308689 L8.73879454,16.5308689 Z M13.6667945,12.4008689 L10.2787945,12.4008689 L11.9727945,7.73886888 L12.0007945,7.73886888 L13.6667945,12.4008689 Z",
        id: "A",
        fill: color || "#000000",
        fillRule: "nonzero"
    })))));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/headings-dropdown-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>headings_dropdown_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "d829224f";
const injectCss = ()=>{
    var css = `._3g6iy{background-color:var(--wds-color-fill-surface-overlay,var(--wsr-color-D80,#fff));border-radius:var(--ricos-settings-whitebox-border-radius,var(--wds-border-radius-surface-overlay,8px));box-shadow:var(--ricos-settings-whitebox-box-shadow,var(--wds-shadow-surface-overlay,0 6px 6px 0 rgba(22,45,61,.06),0 0 18px 0 rgba(22,45,61,.12)));height:fit-content;padding-block:12px;--wds-list-item-select-title:var(--ricos-settings-text-color,var(--wsr-color-D10,#000624));--wds-color-text-standard-primary:var(
    --ricos-settings-text-color,var(--wsr-color-D10,#000624)
  );box-sizing:border-box;overflow:visible;width:fit-content;z-index:10}._3g6iy *,._3g6iy :after,._3g6iy :before{box-sizing:inherit}._3g6iy input{box-sizing:border-box}@supports not (contain:inline-size){@media only screen and (max-width:480px){._3g6iy{width:100%}}}@container (width < 480px){._3g6iy{width:100%}}.H6tNx{background-color:var(--wds-color-fill-surface-overlay,var(--wsr-color-D80,#fff));border-radius:var(--ricos-settings-whitebox-border-radius,var(--wds-border-radius-surface-overlay,8px));box-shadow:var(--ricos-settings-whitebox-box-shadow,var(--wds-shadow-surface-overlay,0 6px 6px 0 rgba(22,45,61,.06),0 0 18px 0 rgba(22,45,61,.12)));height:fit-content;padding-block:12px;--wds-list-item-select-title:var(--ricos-settings-text-color,var(--wsr-color-D10,#000624));--wds-color-text-standard-primary:var(
    --ricos-settings-text-color,var(--wsr-color-D10,#000624)
  );box-sizing:border-box;inset-inline-start:100%;margin-inline-start:8px;position:absolute;top:0;width:max-content}.H6tNx *,.H6tNx :after,.H6tNx :before{box-sizing:inherit}.H6tNx input{box-sizing:border-box}._9EGs0{position:relative}._9EGs0:focus-visible{outline:5px auto Highlight!important;outline:5px auto -webkit-focus-ring-color!important;outline-offset:-2px}._9EGs0 [data-hook~=modal-option] [data-hook~=list-item-select-suffix]{align-items:center;align-self:stretch;cursor:pointer;display:flex;margin-block:0!important}.Sxkfd{margin-block:6px;margin-inline:24px}.LKPwD{cursor:auto;pointer-events:all}.EaQUm{--wds-side-panel-content-padding-vertical:12px;--wds-side-panel-content-padding-horizontal:0px}`;
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
var headings_dropdown_default = {
    "dropdown": "_3g6iy",
    "panel": "H6tNx",
    "option": "_9EGs0",
    "divider": "Sxkfd",
    "infoIcon": "LKPwD",
    "mobileContent": "EaQUm"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/update-heading-panel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateHeadingPanel",
    ()=>UpdateHeadingPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$InfoIcon$2f$InfoIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoIcon$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/InfoIcon/InfoIcon.js [app-client] (ecmascript) <export default as InfoIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemSelect$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/ListItemSelect/ListItemSelect.js [app-client] (ecmascript) <export default as ListItemSelect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$z$2d$index$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/z-index-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/headings-dropdown-scss.js [app-client] (ecmascript)");
;
;
;
;
;
const PanelRow = ({ dataHook, title, suffix, disabled = false, onSelect, onNavigateBack, rowRef })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: rowRef,
        role: "menuitem",
        "aria-disabled": disabled,
        tabIndex: disabled ? -1 : 0,
        onClick: (e)=>{
            e.stopPropagation();
            if (!disabled) {
                onSelect();
            }
        },
        onKeyDown: (e)=>{
            if (e.key === "ArrowLeft") {
                e.stopPropagation();
                e.preventDefault();
                onNavigateBack();
                return;
            }
            if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
                e.preventDefault();
                if (!disabled) {
                    onSelect();
                }
            }
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemSelect$3e$__["ListItemSelect"], {
        dataHook,
        size: "small",
        title,
        suffix,
        disabled
    }));
const UpdateHeadingPanel = ({ optionName, onApply, onMatchStyling, onReset, isUpdatedEnabled, isResetEnabled, onNavigateBack, autoFocus = false })=>{
    const { t, portal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const zIndexService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$z$2d$index$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZIndexContext"]);
    const firstRowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UpdateHeadingPanel.useEffect": ()=>{
            if (autoFocus) {
                firstRowRef.current?.focus();
            }
        }
    }["UpdateHeadingPanel.useEffect"], [
        autoFocus
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].panel,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADINGS_UPDATE_PANEL"],
        role: "menu"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PanelRow, {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADINGS_UPDATE_PANEL_APPLY"],
        title: t("FormattingToolbar_TextStyle_Heading_Apply", {
            optionName
        }),
        onSelect: onApply,
        onNavigateBack,
        rowRef: firstRowRef
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divider
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], null)), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PanelRow, {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADINGS_UPDATE_PANEL_UPDATE"],
        title: t("FormattingToolbar_TextStyle_Heading_Update", {
            optionName
        }),
        suffix: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].infoIcon
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$InfoIcon$2f$InfoIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoIcon$3e$__["InfoIcon"], {
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADINGS_UPDATE_PANEL_INFO_ICON"],
            size: "small",
            content: t("FormattingToolbar_TextStyle_Update_Heading_Tooltip", {
                optionName
            }),
            tooltipProps: {
                // The portal element itself, rather than a predicate that hunts for
                // it: WDS walks ancestors with `getParentNode`, which returns <html>
                // for <html>, so a predicate that never matches recurses forever.
                //
                // It has to be the portal and not the modal element, even though
                // the modal would share a containing block: the tooltip renders
                // beyond the modal's right edge, and inside it `max-width: 100%`
                // resolves against the modal's narrow box — measured 34px wide by
                // 720px tall.
                appendTo: portal ?? void 0,
                // The portal sits at body level, so WDS positions the tooltip in
                // document coordinates — but this trigger lives inside the modal,
                // which floating-ui places with `strategy: 'fixed'`, in viewport
                // coordinates. The two only agree while the page is unscrolled;
                // scrolled, the tooltip is pushed a scroll-height down the page and
                // off screen. `fixed` puts it on the same footing as the modal.
                fixed: true,
                zIndex: zIndexService.getZIndex("TOOLTIP"),
                size: "small",
                enterDelay: 300
            }
        })),
        onSelect: onMatchStyling,
        disabled: !isUpdatedEnabled(),
        onNavigateBack
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PanelRow, {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADINGS_UPDATE_PANEL_RESET"],
        title: t("FormattingToolbar_TextStyle_Heading_Reset"),
        onSelect: onReset,
        disabled: !isResetEnabled(),
        onNavigateBack
    }));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/headings-dropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_HEADERS_DROPDOWN_OPTIONS",
    ()=>DEFAULT_HEADERS_DROPDOWN_OPTIONS,
    "HEADER_TYPE_MAP",
    ()=>HEADER_TYPE_MAP,
    "default",
    ()=>headings_dropdown_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemSelect$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/ListItemSelect/ListItemSelect.js [app-client] (ecmascript) <export default as ListItemSelect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/SidePanel/SidePanel.js [app-client] (ecmascript) <export default as SidePanel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ChevronRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/ChevronRight.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/editor-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$modal$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/modal-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/plugins-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$editor$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/editor-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/dropdown-modal/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/headings-dropdown-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$is$2d$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/is-empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$data$2d$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-rich-content-common/Utils/data-hook.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$colors$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/colors-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/headings-dropdown-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$update$2d$heading$2d$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/update-heading-panel.js [app-client] (ecmascript)");
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
const HEADINGS_MODAL_ID = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING}.modal`;
const DEFAULT_HEADERS_DROPDOWN_OPTIONS = [
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "P"
];
const HEADER_TYPE_MAP = {
    H1: "header-one",
    H2: "header-two",
    H3: "header-three",
    H4: "header-four",
    H5: "header-five",
    H6: "header-six",
    P: "unstyled"
};
const isFromUpdatePanel = (e)=>!!e.target.closest((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$data$2d$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataHook"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADINGS_UPDATE_PANEL"]));
const HeadingsDropdown = ({ minWidth = 216 })=>{
    const { isMobile, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const { getPublicCommands } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContext"]);
    const modalService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$modal$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalServiceContext"]) || {};
    const plugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsContext"]);
    const headingsData = plugins?.getConfig("wix-rich-content-plugin-headings");
    const allowHeadingCustomization = !!headingsData?.allowHeadingCustomization;
    const [openOption, setOpenOption] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const rowRefs = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef({});
    const publicCommands = getPublicCommands();
    const selectedHeading = publicCommands.getCurrentHeading();
    const closeModal = ()=>modalService.closeModal(HEADINGS_MODAL_ID);
    const handleOnSelect = (heading)=>{
        const headingType = HEADER_TYPE_MAP[heading];
        const shouldSetBlockType = selectedHeading !== headingType;
        shouldSetBlockType && publicCommands.setBlockType(headingType);
        closeModal();
    };
    const options = (headingsData?.customHeadings || DEFAULT_HEADERS_DROPDOWN_OPTIONS).map((heading)=>{
        const headerType = HEADER_TYPE_MAP[heading];
        const selected = selectedHeading === headerType;
        const optionName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateHeading"])(heading, t);
        const size = isMobile ? "medium" : "small";
        const selectOnEnterOrSpace = (e)=>{
            if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
                e.preventDefault();
                handleOnSelect(heading);
                return true;
            }
            return false;
        };
        if (!allowHeadingCustomization) {
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                key: heading,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].option,
                role: "option",
                "aria-selected": selected,
                tabIndex: 0,
                onClick: ()=>handleOnSelect(heading),
                onKeyDown: selectOnEnterOrSpace
            }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemSelect$3e$__["ListItemSelect"], {
                size,
                title: optionName,
                selected
            }));
        }
        const documentStyleType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$editor$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOC_STYLE_TYPES"][heading];
        const optionWiredStyles = publicCommands.getWiredFontStyles()?.[documentStyleType];
        const subtitle = optionWiredStyles?.["font-size"] ?? "16px";
        const fontFamily = optionWiredStyles?.["font-family"] ?? "inherit";
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            key: heading,
            ref: (el)=>{
                rowRefs.current[heading] = el;
            },
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].option,
            role: "option",
            "aria-selected": selected,
            tabIndex: 0,
            onClick: (e)=>{
                if (isFromUpdatePanel(e)) {
                    return;
                }
                handleOnSelect(heading);
            },
            onKeyDown: (e)=>{
                if (isFromUpdatePanel(e) || selectOnEnterOrSpace(e)) {
                    return;
                }
                if (e.key === "ArrowRight") {
                    e.stopPropagation();
                    e.preventDefault();
                    setOpenOption({
                        heading,
                        viaKeyboard: true
                    });
                }
            },
            onMouseOver: (e)=>{
                if (isFromUpdatePanel(e)) {
                    return;
                }
                const target = e.target;
                const isChevronColumn = target.closest((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$Utils$2f$data$2d$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataHook"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIST_ITEM_SELECT_SUFFIX"]));
                if (isChevronColumn) {
                    if (openOption?.heading !== heading) {
                        setOpenOption({
                            heading,
                            viaKeyboard: false
                        });
                    }
                    return;
                }
                if (openOption?.heading !== heading) {
                    setOpenOption(null);
                }
            }
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemSelect$3e$__["ListItemSelect"], {
            dataHook: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIST_ITEM_SELECT"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADINGS_DROPDOWN_OPTION"]),
            size,
            selected,
            prefix: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$colors$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorsIcon"], {
                color: optionWiredStyles?.color,
                backgroundColor: optionWiredStyles?.["background-color"]
            }),
            subtitle,
            title: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                style: {
                    fontFamily
                }
            }, optionName),
            suffix: isMobile ? null : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$ChevronRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                "data-hook": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADINGS_DROPDOWN_CHEVRON"]
            })
        }), openOption?.heading === heading && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$update$2d$heading$2d$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpdateHeadingPanel"], {
            autoFocus: openOption?.viaKeyboard,
            optionName,
            onApply: ()=>handleOnSelect(heading),
            onMatchStyling: ()=>{
                publicCommands.updateDocumentStyle({});
                closeModal();
            },
            onReset: ()=>{
                publicCommands.resetDocumentStyleByNodeType(documentStyleType);
                closeModal();
            },
            isUpdatedEnabled: ()=>{
                const currentInlineStyles = publicCommands.getInlineStylesInSelection();
                const documentStyle = publicCommands.getDocumentStyle();
                return headerType === selectedHeading && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasStyleChanges"])(selectedHeading, currentInlineStyles, documentStyle);
            },
            isResetEnabled: ()=>{
                const documentStyle = publicCommands.getDocumentStyle();
                return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$is$2d$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmpty"])(documentStyle?.[documentStyleType]);
            },
            onNavigateBack: ()=>{
                setOpenOption(null);
                rowRefs.current[heading]?.focus();
            }
        }));
    });
    if (isMobile) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__["SidePanel"], {
            closeButtonProps: {
                onClick: closeModal
            },
            width: "100%",
            maxHeight: "50vh",
            height: "fit-content"
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__["SidePanel"].Header, {
            title: t("HeadingsDropdown_Title")
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SidePanel$2f$SidePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SidePanel$3e$__["SidePanel"].Content, {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mobileContent
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            role: "listbox"
        }, options)));
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        direction: "vertical",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dropdown,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$dropdown$2d$modal$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOLBAR_DROPDOWN_PANEL"],
        role: "listbox",
        minWidth: `${minWidth}px`
    }, options);
};
var headings_dropdown_default = HeadingsDropdown;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/get-text-buttons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTextButtons",
    ()=>getTextButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$text$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/create-text-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/headings-dropdown-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$heading$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-heading-in-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$is$2d$always$2d$visible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/is-always-visible.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$is$2d$node$2d$or$2d$caption$2d$selected$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/is-node-or-caption-selected.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$is$2d$text$2d$styles$2d$match$2d$document$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/resolvers/is-text-styles-match-document-styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$HeadingButtonSwitch$2f$heading$2d$button$2d$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/toolbars-v3/components/buttons/HeadingButtonSwitch/heading-button-switch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$get$2d$current$2d$headings$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/get-current-headings-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$lazy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/headings-dropdown-lazy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/dropdown/headings-dropdown.js [app-client] (ecmascript)");
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
const HEADINGS_MODAL_ID = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING}.modal`;
const getTextButtons = (config)=>{
    const isCustomHeadings = !!config?.allowHeadingCustomization;
    const id = `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING}.dropdown`;
    const attributes = {
        isStylesMatch: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$is$2d$text$2d$styles$2d$match$2d$document$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextStylesMatchDocumentStylesResolver"],
        visible: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$is$2d$always$2d$visible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAlwaysVisible"],
        selectedHeading: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$heading$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHeadingInSelection"],
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$is$2d$node$2d$or$2d$caption$2d$selected$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeOrCaptionSelected"]
    };
    const presentation = {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXT_BUTTON_HEADINGS"],
        tooltip: "FormattingToolbar_TextStyleButton_Tooltip",
        getIcon: ({ publicCommands, t })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$get$2d$current$2d$headings$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentHeadingIcon"])(isCustomHeadings, publicCommands, t);
        },
        renderer: (toolbarItem)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$components$2f$buttons$2f$HeadingButtonSwitch$2f$heading$2d$button$2d$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadingButtonSwitch"], {
                toolbarItem
            })
    };
    const command = ({ modalService: modals, referenceElement, isMobile })=>()=>{
            modals.isModalOpen(HEADINGS_MODAL_ID) ? modals.closeModal(HEADINGS_MODAL_ID) : modals.openModal({
                id: HEADINGS_MODAL_ID,
                Component: isCustomHeadings ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$lazy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(216) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$lazy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(143),
                componentProps: {},
                positioning: {
                    placement: "bottom",
                    referenceElement
                },
                layout: isMobile ? "drawer" : referenceElement ? "floating" : "dialog",
                returnFocusToEditor: true
            });
            return true;
        };
    return [
        isCustomHeadings ? {
            id,
            type: "modal",
            presentation,
            attributes,
            command
        } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$create$2d$text$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextButton"])({
            id,
            type: "dropdown",
            presentation: {
                ...presentation,
                id: HEADINGS_MODAL_ID,
                Component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2d$lazy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(143),
                getComponentProps: ({ publicCommands, t, modals })=>{
                    const selectedHeading = publicCommands.getCurrentHeading();
                    return {
                        dropdownOptions: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_HEADERS_DROPDOWN_OPTIONS"].map((heading)=>({
                                id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TYPE_MAP"][heading],
                                dataHook: `headings-dropdown-option-${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$dropdown$2f$headings$2d$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TYPE_MAP"][heading]}`,
                                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$headings$2d$dropdown$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateHeading"])(heading, t)
                            })),
                        onSelect: (heading)=>{
                            const selectedHeading2 = publicCommands.getCurrentHeading();
                            const shouldSetBlockType = selectedHeading2 !== heading;
                            shouldSetBlockType && publicCommands.setBlockType(heading);
                        },
                        selectedId: selectedHeading,
                        closeModal: ()=>modals.closeModal(HEADINGS_MODAL_ID)
                    };
                }
            },
            command,
            attributes
        })
    ];
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/editor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pluginHeadings",
    ()=>pluginHeadings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$HeadingOne$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingOne$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/HeadingOne.js [app-client] (ecmascript) <export default as HeadingOne>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$HeadingOneSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingOneSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/HeadingOneSmall.js [app-client] (ecmascript) <export default as HeadingOneSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$HeadingThree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingThree$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/HeadingThree.js [app-client] (ecmascript) <export default as HeadingThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$HeadingThreeSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingThreeSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/HeadingThreeSmall.js [app-client] (ecmascript) <export default as HeadingThreeSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$HeadingTwo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingTwo$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/HeadingTwo.js [app-client] (ecmascript) <export default as HeadingTwo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$HeadingTwoSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingTwoSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/HeadingTwoSmall.js [app-client] (ecmascript) <export default as HeadingTwoSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/shortcuts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$plugin$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-types/plugin-types.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$get$2d$text$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/get-text-buttons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-headings/types.js [app-client] (ecmascript)");
;
;
;
;
;
;
const headerBlockByLevel = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].ONE,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].TWO,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].THREE,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].FOUR,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].FIVE,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].SIX
];
const headingTypeToLevel = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6,
    P: null
};
const getShortcut = (level)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$shortcuts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShortcut"])({
        name: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].HEADING}.${level}`,
        description: `ShortcutsSheet_Formatting_Heading${level}`,
        keys: {
            macOs: `Meta+Alt+${level}`,
            windows: `Ctrl+Alt+${level}`
        },
        command ({ publicCommands }) {
            publicCommands.setBlockType(headerBlockByLevel[level - 1]);
            return "continue";
        },
        group: "ShortcutsSheet_Section_Formatting",
        enabled: true,
        showInShortcutSheet: true
    });
const getShortcuts = (customHeadings)=>{
    const levels = customHeadings?.length ? customHeadings.map((heading)=>headingTypeToLevel[heading]).filter((level)=>level !== null) : [
        1,
        2,
        3,
        4,
        5,
        6
    ];
    return levels.map(getShortcut);
};
const pluginHeadings = (config)=>{
    return {
        config: {
            type: "heading",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].config,
            ...config
        },
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADINGS_DROPDOWN_TYPE"],
        tiptapExtensions: [],
        shortcuts: getShortcuts(config?.customHeadings),
        textButtons: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$headings$2f$get$2d$text$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextButtons"])(config),
        getQuickActions: ({ config: config2, pluginServices })=>{
            const isMobile = pluginServices?.context.isMobile;
            return [
                ...config2?.customHeadings?.includes("H1") ? [
                    {
                        id: "headingOne",
                        title: "QuickActionsPlugin_ActionTitle_HeadingOne",
                        icon: isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$HeadingOne$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingOne$3e$__["HeadingOne"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$HeadingOneSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingOneSmall$3e$__["HeadingOneSmall"],
                        section: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$plugin$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["quickActionsModalSections"].FormatLayout,
                        tags: [
                            "title",
                            "header",
                            "section title",
                            "main heading",
                            "h1",
                            "top level heading",
                            "large text"
                        ],
                        command: ({ publicCommands })=>publicCommands.setBlockType(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].ONE)
                    }
                ] : [],
                ...config2?.customHeadings?.includes("H2") ? [
                    {
                        id: "headingTwo",
                        title: "QuickActionsPlugin_ActionTitle_HeadingTwo",
                        icon: isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$HeadingTwo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingTwo$3e$__["HeadingTwo"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$HeadingTwoSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingTwoSmall$3e$__["HeadingTwoSmall"],
                        section: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$plugin$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["quickActionsModalSections"].FormatLayout,
                        tags: [
                            "subheading",
                            "h2",
                            "medium heading",
                            "section heading"
                        ],
                        command: ({ publicCommands })=>publicCommands.setBlockType(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].TWO)
                    }
                ] : [],
                ...config2?.customHeadings?.includes("H3") ? [
                    {
                        id: "headingThree",
                        title: "QuickActionsPlugin_ActionTitle_HeadingThree",
                        icon: isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$HeadingThree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingThree$3e$__["HeadingThree"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$HeadingThreeSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingThreeSmall$3e$__["HeadingThreeSmall"],
                        section: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$plugin$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["quickActionsModalSections"].FormatLayout,
                        tags: [
                            "h3",
                            "small heading",
                            "section subheading",
                            "sub-subheading",
                            "subsection heading"
                        ],
                        command: ({ publicCommands })=>publicCommands.setBlockType(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_BLOCK"].THREE)
                    }
                ] : []
            ];
        }
    };
};
;
}),
]);

//# sourceMappingURL=0uxm_%40wix_ricos_dist_es_0bm4lng._.js.map