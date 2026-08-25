(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/default-settings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULTS",
    ()=>DEFAULTS
]);
const DEFAULT_SETTINGS = {
    type: "mentions",
    mentionTrigger: "@",
    getMentionLink: ()=>"#",
    visibleItemsBeforeOverflow: 5,
    onMentionClick: void 0,
    getMentions: (searchQuery)=>new Promise((resolve)=>setTimeout(()=>resolve([
                    {
                        name: "Test One",
                        slug: "testone"
                    },
                    {
                        name: "Test One.1",
                        slug: "testone1"
                    },
                    {
                        name: "Test One.2",
                        slug: "testone2"
                    },
                    {
                        name: "Test One.3",
                        slug: "testone3"
                    },
                    {
                        name: "Test One.4",
                        slug: "testone4"
                    },
                    {
                        name: "Test One.5"
                    },
                    {
                        name: "Test One.6"
                    },
                    {
                        name: "Test One.7"
                    },
                    {
                        name: "Test One.8"
                    },
                    {
                        name: "Test Two",
                        avatar: "https://via.placeholder.com/100x100?text=Image=50"
                    },
                    {
                        name: "Everyone",
                        slug: "everyone",
                        type: "group"
                    }
                ].filter(({ name })=>name.toLowerCase().includes(searchQuery.toLowerCase()))), 250)),
    zIndex: 9999
};
const DEFAULTS = {
    config: {
        ...DEFAULT_SETTINGS
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/next-schema/generated/ricos_document.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Animation_Axis",
    ()=>Animation_Axis,
    "Animation_CornerDirection",
    ()=>Animation_CornerDirection,
    "Animation_Direction",
    ()=>Animation_Direction,
    "Animation_Easing",
    ()=>Animation_Easing,
    "Animation_Orientation",
    ()=>Animation_Orientation,
    "Animation_RadialDirection",
    ()=>Animation_RadialDirection,
    "Animation_SideDirection",
    ()=>Animation_SideDirection,
    "Animation_SpinDirection",
    ()=>Animation_SpinDirection,
    "Animation_Type",
    ()=>Animation_Type,
    "AppEmbedData_AppType",
    ()=>AppEmbedData_AppType,
    "AppEmbedData_CardStyles_Alignment",
    ()=>AppEmbedData_CardStyles_Alignment,
    "AppEmbedData_CardStyles_Type",
    ()=>AppEmbedData_CardStyles_Type,
    "AppEmbedData_ImageStyles_AspectRatio",
    ()=>AppEmbedData_ImageStyles_AspectRatio,
    "AppEmbedData_ImageStyles_Position",
    ()=>AppEmbedData_ImageStyles_Position,
    "AppEmbedData_ImageStyles_Resizing",
    ()=>AppEmbedData_ImageStyles_Resizing,
    "AppEmbedData_RibbonStyles_Placement",
    ()=>AppEmbedData_RibbonStyles_Placement,
    "Background_Type",
    ()=>Background_Type,
    "ButtonData_Styles_ButtonSize",
    ()=>ButtonData_Styles_ButtonSize,
    "ButtonData_Type",
    ()=>ButtonData_Type,
    "CollapsibleListData_Direction",
    ()=>CollapsibleListData_Direction,
    "CollapsibleListData_InitialExpandedItems",
    ()=>CollapsibleListData_InitialExpandedItems,
    "Decoration_Type",
    ()=>Decoration_Type,
    "DividerData_Alignment",
    ()=>DividerData_Alignment,
    "DividerData_LineStyle",
    ()=>DividerData_LineStyle,
    "DividerData_Styles_LineCap",
    ()=>DividerData_Styles_LineCap,
    "DividerData_Width",
    ()=>DividerData_Width,
    "EntranceEffect_Bounce_Direction",
    ()=>EntranceEffect_Bounce_Direction,
    "EntranceEffect_Glide_Direction",
    ()=>EntranceEffect_Glide_Direction,
    "EntranceEffect_Shape_ClipShape",
    ()=>EntranceEffect_Shape_ClipShape,
    "EntranceEffect_Type",
    ()=>EntranceEffect_Type,
    "FileData_PDFSettings_ViewMode",
    ()=>FileData_PDFSettings_ViewMode,
    "FontSizeData_fontType",
    ()=>FontSizeData_fontType,
    "GIFData_GIFType",
    ()=>GIFData_GIFType,
    "GalleryOptions_ItemStyle_Crop",
    ()=>GalleryOptions_ItemStyle_Crop,
    "GalleryOptions_Layout_Orientation",
    ()=>GalleryOptions_Layout_Orientation,
    "GalleryOptions_Layout_Type",
    ()=>GalleryOptions_Layout_Type,
    "GalleryOptions_Thumbnails_Alignment",
    ()=>GalleryOptions_Thumbnails_Alignment,
    "Gradient_Type",
    ()=>Gradient_Type,
    "HTMLData_Source",
    ()=>HTMLData_Source,
    "ImageData_CropShape",
    ()=>ImageData_CropShape,
    "ImagePosition",
    ()=>ImagePosition,
    "ImageScaling",
    ()=>ImageScaling,
    "LATEST_VERSION",
    ()=>LATEST_VERSION,
    "LayoutData_BannerOrigin",
    ()=>LayoutData_BannerOrigin,
    "LayoutData_BannerPosition",
    ()=>LayoutData_BannerPosition,
    "LayoutData_DesignTarget",
    ()=>LayoutData_DesignTarget,
    "LayoutData_ResponsivenessBehaviour",
    ()=>LayoutData_ResponsivenessBehaviour,
    "Link_Target",
    ()=>Link_Target,
    "LoopEffect_Breathe_Direction",
    ()=>LoopEffect_Breathe_Direction,
    "LoopEffect_Type",
    ()=>LoopEffect_Type,
    "Node_Type",
    ()=>Node_Type,
    "PluginContainerData_Alignment",
    ()=>PluginContainerData_Alignment,
    "PluginContainerData_Width_Type",
    ()=>PluginContainerData_Width_Type,
    "PointerEffect_Scale_Direction",
    ()=>PointerEffect_Scale_Direction,
    "PointerEffect_Swivel_Axis",
    ()=>PointerEffect_Swivel_Axis,
    "PointerEffect_Type",
    ()=>PointerEffect_Type,
    "PollData_Design_PollDesign_Background_Type",
    ()=>PollData_Design_PollDesign_Background_Type,
    "PollData_Layout_PollLayout_Direction",
    ()=>PollData_Layout_PollLayout_Direction,
    "PollData_Layout_PollLayout_Type",
    ()=>PollData_Layout_PollLayout_Type,
    "PollData_Poll_Settings_Permissions_ViewRole",
    ()=>PollData_Poll_Settings_Permissions_ViewRole,
    "PollData_Poll_Settings_Permissions_VoteRole",
    ()=>PollData_Poll_Settings_Permissions_VoteRole,
    "RichContent",
    ()=>RichContent,
    "RicosDocumentNodeType",
    ()=>RicosDocumentNodeType,
    "SketchData_Variant",
    ()=>SketchData_Variant,
    "SmartBlockCellData_Type",
    ()=>SmartBlockCellData_Type,
    "SmartBlockData_ColumnSize",
    ()=>SmartBlockData_ColumnSize,
    "SmartBlockData_Orientation",
    ()=>SmartBlockData_Orientation,
    "SmartBlockData_Type",
    ()=>SmartBlockData_Type,
    "TextStyle_TextAlignment",
    ()=>TextStyle_TextAlignment,
    "TocData_Indentation",
    ()=>TocData_Indentation,
    "TocData_ListStyle",
    ()=>TocData_ListStyle,
    "VerticalAlignment",
    ()=>VerticalAlignment
]);
const Animation_Type = {
    VIEW: "VIEW",
    POINTER: "POINTER"
};
const EntranceEffect_Type = {
    FADE: "FADE",
    ARC: "ARC",
    BLUR: "BLUR",
    BOUNCE: "BOUNCE",
    DROP: "DROP",
    EXPAND: "EXPAND",
    FLIP: "FLIP",
    FLOAT: "FLOAT",
    FOLD: "FOLD",
    GLIDE: "GLIDE",
    REVEAL: "REVEAL",
    SHAPE: "SHAPE",
    SHUTTERS: "SHUTTERS",
    SLIDE: "SLIDE",
    SPIN: "SPIN",
    TILT: "TILT",
    TURN: "TURN",
    WINK: "WINK"
};
const EntranceEffect_Bounce_Direction = {
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    TOP: "TOP",
    BOTTOM: "BOTTOM",
    CENTER: "CENTER"
};
const EntranceEffect_Glide_Direction = {
    RIGHT: "RIGHT",
    TOP_RIGHT: "TOP_RIGHT",
    TOP: "TOP",
    TOP_LEFT: "TOP_LEFT",
    LEFT: "LEFT",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    BOTTOM: "BOTTOM",
    BOTTOM_RIGHT: "BOTTOM_RIGHT"
};
const EntranceEffect_Shape_ClipShape = {
    ELLIPSE: "ELLIPSE",
    CIRCLE: "CIRCLE",
    RECTANGLE: "RECTANGLE",
    DIAMOND: "DIAMOND"
};
const LoopEffect_Type = {
    BOUNCE: "BOUNCE",
    BREATHE: "BREATHE",
    CROSS: "CROSS",
    FLASH: "FLASH",
    FLIP: "FLIP",
    FOLD: "FOLD",
    JELLO: "JELLO",
    POKE: "POKE",
    PULSE: "PULSE",
    RUBBER: "RUBBER",
    SPIN: "SPIN",
    SWING: "SWING",
    WIGGLE: "WIGGLE"
};
const LoopEffect_Breathe_Direction = {
    HORIZONTAL: "HORIZONTAL",
    VERTICAL: "VERTICAL",
    CENTER: "CENTER"
};
const PointerEffect_Type = {
    AIRY: "AIRY",
    BLOB: "BLOB",
    BLUR: "BLUR",
    SCALE: "SCALE",
    SKEW: "SKEW",
    SWIVEL: "SWIVEL",
    TILT_3D: "TILT_3D",
    TRACK: "TRACK",
    TRACK_3D: "TRACK_3D"
};
const PointerEffect_Scale_Direction = {
    UP: "UP",
    DOWN: "DOWN"
};
const PointerEffect_Swivel_Axis = {
    TOP: "TOP",
    BOTTOM: "BOTTOM",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    CENTER_HORIZONTAL: "CENTER_HORIZONTAL",
    CENTER_VERTICAL: "CENTER_VERTICAL"
};
const Animation_Direction = {
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    TOP: "TOP",
    BOTTOM: "BOTTOM"
};
const Animation_Axis = {
    HORIZONTAL: "HORIZONTAL",
    VERTICAL: "VERTICAL",
    BOTH: "BOTH"
};
const Animation_RadialDirection = {
    RIGHT: "RIGHT",
    TOP_RIGHT: "TOP_RIGHT",
    TOP: "TOP",
    TOP_LEFT: "TOP_LEFT",
    LEFT: "LEFT",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    BOTTOM: "BOTTOM",
    BOTTOM_RIGHT: "BOTTOM_RIGHT",
    CENTER: "CENTER"
};
const Animation_SideDirection = {
    LEFT: "LEFT",
    RIGHT: "RIGHT"
};
const Animation_CornerDirection = {
    TOP_LEFT: "TOP_LEFT",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    TOP_RIGHT: "TOP_RIGHT",
    BOTTOM_RIGHT: "BOTTOM_RIGHT"
};
const Animation_Orientation = {
    HORIZONTAL: "HORIZONTAL",
    VERTICAL: "VERTICAL"
};
const Animation_SpinDirection = {
    CLOCKWISE: "CLOCKWISE",
    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
};
const Animation_Easing = {
    GENTLE: "GENTLE",
    MODERATE: "MODERATE",
    INTENSE: "INTENSE"
};
const TextStyle_TextAlignment = {
    AUTO: "AUTO",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    CENTER: "CENTER",
    JUSTIFY: "JUSTIFY"
};
const Link_Target = {
    SELF: "SELF",
    BLANK: "BLANK",
    PARENT: "PARENT",
    TOP: "TOP"
};
const VerticalAlignment = {
    TOP: "TOP",
    MIDDLE: "MIDDLE",
    BOTTOM: "BOTTOM"
};
const ImageScaling = {
    AUTO: "AUTO",
    CONTAIN: "CONTAIN",
    COVER: "COVER"
};
const ImagePosition = {
    CENTER: "CENTER",
    CENTER_LEFT: "CENTER_LEFT",
    CENTER_RIGHT: "CENTER_RIGHT",
    TOP: "TOP",
    TOP_LEFT: "TOP_LEFT",
    TOP_RIGHT: "TOP_RIGHT",
    BOTTOM: "BOTTOM",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    BOTTOM_RIGHT: "BOTTOM_RIGHT"
};
const Gradient_Type = {
    LINEAR: "LINEAR",
    RADIAL: "RADIAL"
};
const Background_Type = {
    COLOR: "COLOR",
    GRADIENT: "GRADIENT"
};
const PluginContainerData_Alignment = {
    CENTER: "CENTER",
    LEFT: "LEFT",
    RIGHT: "RIGHT"
};
const PluginContainerData_Width_Type = {
    CONTENT: "CONTENT",
    SMALL: "SMALL",
    ORIGINAL: "ORIGINAL",
    FULL_WIDTH: "FULL_WIDTH"
};
const Decoration_Type = {
    BOLD: "BOLD",
    ITALIC: "ITALIC",
    UNDERLINE: "UNDERLINE",
    SPOILER: "SPOILER",
    ANCHOR: "ANCHOR",
    MENTION: "MENTION",
    LINK: "LINK",
    COLOR: "COLOR",
    FONT_SIZE: "FONT_SIZE",
    STRIKETHROUGH: "STRIKETHROUGH",
    SUPERSCRIPT: "SUPERSCRIPT",
    SUBSCRIPT: "SUBSCRIPT",
    FONT_FAMILY: "FONT_FAMILY",
    SKETCH: "SKETCH"
};
const FontSizeData_fontType = {
    PX: "PX",
    EM: "EM"
};
const SketchData_Variant = {
    UNDERLINE: "UNDERLINE",
    BOX: "BOX",
    CIRCLE: "CIRCLE",
    HIGHLIGHT: "HIGHLIGHT",
    STRIKETHROUGH: "STRIKETHROUGH",
    CROSSED_OFF: "CROSSED_OFF"
};
const LayoutData_BannerPosition = {
    TOP: "TOP",
    BOTTOM: "BOTTOM"
};
const LayoutData_BannerOrigin = {
    IMAGE: "IMAGE",
    LAYOUT: "LAYOUT"
};
const LayoutData_ResponsivenessBehaviour = {
    STACK: "STACK",
    WRAP: "WRAP"
};
const LayoutData_DesignTarget = {
    LAYOUT: "LAYOUT",
    CELL: "CELL"
};
const AppEmbedData_AppType = {
    PRODUCT: "PRODUCT",
    EVENT: "EVENT",
    BOOKING: "BOOKING"
};
const AppEmbedData_ImageStyles_Position = {
    START: "START",
    END: "END",
    TOP: "TOP"
};
const AppEmbedData_ImageStyles_AspectRatio = {
    SQUARE: "SQUARE",
    RECTANGLE: "RECTANGLE"
};
const AppEmbedData_ImageStyles_Resizing = {
    FILL: "FILL",
    FIT: "FIT"
};
const AppEmbedData_RibbonStyles_Placement = {
    IMAGE: "IMAGE",
    PRODUCT_INFO: "PRODUCT_INFO"
};
const AppEmbedData_CardStyles_Type = {
    CONTAINED: "CONTAINED",
    FRAMELESS: "FRAMELESS"
};
const AppEmbedData_CardStyles_Alignment = {
    START: "START",
    CENTER: "CENTER",
    END: "END"
};
const ButtonData_Type = {
    LINK: "LINK",
    ACTION: "ACTION"
};
const ButtonData_Styles_ButtonSize = {
    MEDIUM: "MEDIUM",
    SMALL: "SMALL",
    LARGE: "LARGE"
};
const CollapsibleListData_InitialExpandedItems = {
    FIRST: "FIRST",
    ALL: "ALL",
    NONE: "NONE"
};
const CollapsibleListData_Direction = {
    LTR: "LTR",
    RTL: "RTL"
};
const DividerData_LineStyle = {
    SINGLE: "SINGLE",
    DOUBLE: "DOUBLE",
    DASHED: "DASHED",
    DOTTED: "DOTTED"
};
const DividerData_Width = {
    LARGE: "LARGE",
    MEDIUM: "MEDIUM",
    SMALL: "SMALL"
};
const DividerData_Alignment = {
    CENTER: "CENTER",
    LEFT: "LEFT",
    RIGHT: "RIGHT"
};
const DividerData_Styles_LineCap = {
    SQUARE: "SQUARE",
    ROUND: "ROUND"
};
const FileData_PDFSettings_ViewMode = {
    NONE: "NONE",
    FULL: "FULL",
    MINI: "MINI"
};
const GalleryOptions_Layout_Type = {
    COLLAGE: "COLLAGE",
    MASONRY: "MASONRY",
    GRID: "GRID",
    THUMBNAIL: "THUMBNAIL",
    SLIDER: "SLIDER",
    SLIDESHOW: "SLIDESHOW",
    PANORAMA: "PANORAMA",
    COLUMN: "COLUMN",
    MAGIC: "MAGIC",
    FULLSIZE: "FULLSIZE"
};
const GalleryOptions_Layout_Orientation = {
    ROWS: "ROWS",
    COLUMNS: "COLUMNS"
};
const GalleryOptions_ItemStyle_Crop = {
    FILL: "FILL",
    FIT: "FIT"
};
const GalleryOptions_Thumbnails_Alignment = {
    TOP: "TOP",
    RIGHT: "RIGHT",
    BOTTOM: "BOTTOM",
    LEFT: "LEFT",
    NONE: "NONE"
};
const GIFData_GIFType = {
    NORMAL: "NORMAL",
    STICKER: "STICKER"
};
const HTMLData_Source = {
    HTML: "HTML",
    ADSENSE: "ADSENSE",
    AI: "AI",
    AI_WIDGET: "AI_WIDGET"
};
const ImageData_CropShape = {
    CIRCLE: "CIRCLE",
    OVAL: "OVAL",
    STAR: "STAR",
    PENTAGON: "PENTAGON",
    HEXAGON: "HEXAGON",
    TRIANGLE: "TRIANGLE",
    HEART: "HEART",
    RHOMBUS: "RHOMBUS",
    FLUID: "FLUID",
    WINDOW: "WINDOW"
};
const PollData_Poll_Settings_Permissions_ViewRole = {
    CREATOR: "CREATOR",
    VOTERS: "VOTERS",
    EVERYONE: "EVERYONE"
};
const PollData_Poll_Settings_Permissions_VoteRole = {
    SITE_MEMBERS: "SITE_MEMBERS",
    ALL: "ALL"
};
const PollData_Layout_PollLayout_Type = {
    LIST: "LIST",
    GRID: "GRID"
};
const PollData_Layout_PollLayout_Direction = {
    LTR: "LTR",
    RTL: "RTL"
};
const PollData_Design_PollDesign_Background_Type = {
    COLOR: "COLOR",
    IMAGE: "IMAGE",
    GRADIENT: "GRADIENT"
};
const SmartBlockData_Type = {
    SOLID_BOXES: "SOLID_BOXES",
    NUMBERED_BOXES: "NUMBERED_BOXES",
    STATS: "STATS",
    BAR_STATS: "BAR_STATS",
    CIRCLE_STATS: "CIRCLE_STATS",
    SOLID_BOXES_ALTERNATING: "SOLID_BOXES_ALTERNATING",
    SOLID_JOINED_BOXES: "SOLID_JOINED_BOXES",
    SIDE_LINE_TEXT: "SIDE_LINE_TEXT",
    TOP_LINE_TEXT: "TOP_LINE_TEXT",
    OUTLINE_BOXES_WITH_TOP_CIRCLE: "OUTLINE_BOXES_WITH_TOP_CIRCLE",
    BIG_BULLETS: "BIG_BULLETS",
    SMALL_BULLETS: "SMALL_BULLETS",
    ARROW_BULLETS: "ARROW_BULLETS",
    PROCESS_STEPS: "PROCESS_STEPS",
    TIMELINE: "TIMELINE",
    MINIMAL_TIMELINE: "MINIMAL_TIMELINE",
    PILLS: "PILLS",
    STAR_RATING: "STAR_RATING",
    QUOTE_BOXES: "QUOTE_BOXES",
    CIRCLE: "CIRCLE",
    PYRAMID: "PYRAMID",
    STAIRCASE: "STAIRCASE",
    VERTICAL_FUNNEL: "VERTICAL_FUNNEL"
};
const SmartBlockData_ColumnSize = {
    SMALL: "SMALL",
    MEDIUM: "MEDIUM",
    LARGE: "LARGE",
    EXTRA_LARGE: "EXTRA_LARGE"
};
const SmartBlockData_Orientation = {
    HORIZONTAL: "HORIZONTAL",
    VERTICAL: "VERTICAL"
};
const SmartBlockCellData_Type = {
    SOLID_BOXES: "SOLID_BOXES",
    NUMBERED_BOXES: "NUMBERED_BOXES",
    STATS: "STATS",
    BAR_STATS: "BAR_STATS",
    CIRCLE_STATS: "CIRCLE_STATS",
    SOLID_BOXES_ALTERNATING: "SOLID_BOXES_ALTERNATING",
    SOLID_JOINED_BOXES: "SOLID_JOINED_BOXES",
    SIDE_LINE_TEXT: "SIDE_LINE_TEXT",
    TOP_LINE_TEXT: "TOP_LINE_TEXT",
    OUTLINE_BOXES_WITH_TOP_CIRCLE: "OUTLINE_BOXES_WITH_TOP_CIRCLE",
    BIG_BULLETS: "BIG_BULLETS",
    SMALL_BULLETS: "SMALL_BULLETS",
    ARROW_BULLETS: "ARROW_BULLETS",
    PROCESS_STEPS: "PROCESS_STEPS",
    TIMELINE: "TIMELINE",
    MINIMAL_TIMELINE: "MINIMAL_TIMELINE",
    PILLS: "PILLS",
    STAR_RATING: "STAR_RATING",
    QUOTE_BOXES: "QUOTE_BOXES",
    CIRCLE: "CIRCLE",
    PYRAMID: "PYRAMID",
    STAIRCASE: "STAIRCASE",
    VERTICAL_FUNNEL: "VERTICAL_FUNNEL"
};
const TocData_ListStyle = {
    BULLETED: "BULLETED",
    NUMBERED: "NUMBERED",
    LETTERS: "LETTERS",
    ROMAN: "ROMAN",
    PLAIN: "PLAIN",
    ALPHABETICAL_INDEX: "ALPHABETICAL_INDEX",
    ALPHABETICAL_INDEX_COMPACT: "ALPHABETICAL_INDEX_COMPACT"
};
const TocData_Indentation = {
    NESTED: "NESTED",
    FLAT: "FLAT"
};
const LATEST_VERSION = 1;
const RicosDocumentNodeType = {
    PARAGRAPH: "PARAGRAPH",
    TEXT: "TEXT",
    HEADING: "HEADING",
    BULLETED_LIST: "BULLETED_LIST",
    CHECKBOX_LIST: "CHECKBOX_LIST",
    ORDERED_LIST: "ORDERED_LIST",
    LIST_ITEM: "LIST_ITEM",
    BLOCKQUOTE: "BLOCKQUOTE",
    CODE_BLOCK: "CODE_BLOCK",
    VIDEO: "VIDEO",
    DIVIDER: "DIVIDER",
    FILE: "FILE",
    GALLERY: "GALLERY",
    GIF: "GIF",
    HTML: "HTML",
    IMAGE: "IMAGE",
    LINK_PREVIEW: "LINK_PREVIEW",
    POLL: "POLL",
    SHAPE: "SHAPE",
    APP_EMBED: "APP_EMBED",
    BUTTON: "BUTTON",
    COLLAPSIBLE_LIST: "COLLAPSIBLE_LIST",
    COLLAPSIBLE_ITEM: "COLLAPSIBLE_ITEM",
    COLLAPSIBLE_ITEM_TITLE: "COLLAPSIBLE_ITEM_TITLE",
    COLLAPSIBLE_ITEM_BODY: "COLLAPSIBLE_ITEM_BODY",
    TABLE: "TABLE",
    TOC: "TOC",
    EMBED: "EMBED",
    TABLE_CELL: "TABLE_CELL",
    TABLE_ROW: "TABLE_ROW",
    EXTERNAL: "EXTERNAL",
    AUDIO: "AUDIO",
    CAPTION: "CAPTION",
    LAYOUT: "LAYOUT",
    LAYOUT_CELL: "LAYOUT_CELL",
    CARD: "CARD",
    SMART_BLOCK: "SMART_BLOCK",
    SMART_BLOCK_CELL: "SMART_BLOCK_CELL",
    // for compat with legacy node
    UNRECOGNIZED: "UNRECOGNIZED",
    MAP: "MAP"
};
const RichContent = {
    fromJSON: (content)=>{
        return content;
    },
    toJSON: (content)=>{
        return content;
    }
};
const Node_Type = RicosDocumentNodeType;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/mention-converter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mentionConverter",
    ()=>mentionConverter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/next-schema/generated/ricos_document.js [app-client] (ecmascript)");
;
const mentionConverter = {
    fromPm: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration_Type"].MENTION,
        convert: (mark)=>{
            const { attrs = {} } = mark;
            return [
                {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration_Type"].MENTION,
                    mentionData: attrs
                }
            ];
        }
    },
    toPm: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration_Type"].MENTION,
        convert: (decoration)=>{
            const { mentionData } = decoration;
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration_Type"].MENTION,
                attrs: mentionData
            };
        }
    }
};
;
}),
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/statics/mention.defaults.json.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "mentionData": {
        "name": "",
        "slug": "",
        "id": "",
        "type": ""
    }
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap-extensions/create-ricos-extension/create-ricos-mark-extension.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRicosMarkExtension",
    ()=>createRicosMarkExtension
]);
const createRicosMarkExtension = (extension)=>extension;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/statics/mentions-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mentions_default
]);
var mentions_default = {
    "mention": "_9ZtMP",
    "mentionViewer": "P5EDB",
    "cursorDefault": "d6jWn",
    "cursorPointer": "o1fS2"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/react/react-renderer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactRenderer",
    ()=>ReactRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
;
const isClassComponent = (Component)=>{
    return !!(typeof Component === "function" && Component.prototype && Component.prototype.isReactComponent);
};
const isForwardRefComponent = (Component)=>{
    return !!(typeof Component === "object" && Component?.$$typeof?.toString() === "Symbol(react.forward_ref)");
};
class ReactRenderer {
    /**
   * Immediately creates element and renders the provided React component.
   */ constructor(component, { editor, props = {}, as = "div", className = "" }){
        this.ref = null;
        this.id = Math.floor(Math.random() * 4294967295).toString();
        this.component = component;
        this.editor = editor;
        this.props = props;
        this.element = document.createElement(as);
        this.element.classList.add("react-renderer");
        if (className) {
            this.element.classList.add(...className.split(" "));
        }
        if (this.editor.isInitialized) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
                this.render();
            });
        } else {
            this.render();
        }
    }
    /**
   * Render the React component.
   */ render() {
        const Component = this.component;
        const props = this.props;
        const editor = this.editor;
        if (isClassComponent(Component) || isForwardRefComponent(Component)) {
            props.ref = (ref)=>{
                this.ref = ref;
            };
        }
        this.reactElement = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, props);
        editor?.contentComponent?.setRenderer(this.id, this);
    }
    /**
   * Re-renders the React component with new props.
   */ updateProps(props = {}) {
        this.props = {
            ...this.props,
            ...props
        };
        this.render();
    }
    /**
   * Destroy the React component.
   */ destroy() {
        const editor = this.editor;
        editor?.contentComponent?.removeRenderer(this.id);
    }
    /**
   * Update the attributes of the element that holds the React component.
   */ updateAttributes(attributes) {
        Object.keys(attributes).forEach((key)=>{
            this.element.setAttribute(key, attributes[key]);
        });
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/escape-for-regex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "escapeForRegEx",
    ()=>escapeForRegEx
]);
function escapeForRegEx(string) {
    return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/suggestion/find-suggestion-match.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findSuggestionMatch",
    ()=>findSuggestionMatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$escape$2d$for$2d$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/core/utilities/escape-for-regex.js [app-client] (ecmascript)");
;
const findSuggestionMatch = (config)=>{
    const { char, allowSpaces, allowedPrefixes, startOfLine, $position } = config;
    const escapedChar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$core$2f$utilities$2f$escape$2d$for$2d$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeForRegEx"])(char);
    const suffix = new RegExp(`\\s${escapedChar}$`);
    const prefix = startOfLine ? "^" : "";
    const regexp = allowSpaces ? new RegExp(`${prefix}${escapedChar}.*?(?=\\s${escapedChar}|$)`, "gm") : new RegExp(`${prefix}(?:^)?${escapedChar}[^\\s${escapedChar}]*`, "gm");
    const text = $position.nodeBefore?.isText && $position.nodeBefore.text;
    if (!text) {
        return null;
    }
    const textFrom = $position.pos - text.length;
    const match = Array.from(text.matchAll(regexp)).pop();
    if (!match || match.input === void 0 || match.index === void 0) {
        return null;
    }
    const matchPrefix = match.input.slice(Math.max(0, match.index - 1), match.index);
    const matchPrefixIsAllowed = new RegExp(`^[${allowedPrefixes?.join("")}\0]?$`).test(matchPrefix);
    if (allowedPrefixes !== null && !matchPrefixIsAllowed) {
        return null;
    }
    const from = textFrom + match.index;
    let to = from + match[0].length;
    if (allowSpaces && suffix.test(text.slice(to - 1, to + 1))) {
        match[0] += " ";
        to += 1;
    }
    if (from < $position.pos && to >= $position.pos) {
        return {
            range: {
                from,
                to
            },
            query: match[0].slice(char.length),
            text: match[0]
        };
    }
    return null;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/suggestion/suggestion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Suggestion",
    ()=>Suggestion,
    "SuggestionPluginKey",
    ()=>SuggestionPluginKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-view@1.42.2/node_modules/prosemirror-view/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$suggestion$2f$find$2d$suggestion$2d$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/suggestion/find-suggestion-match.js [app-client] (ecmascript)");
;
;
;
const SuggestionPluginKey = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("suggestion");
const Suggestion = ({ pluginKey = SuggestionPluginKey, editor, char = "@", allowSpaces = false, allowedPrefixes = [
    " "
], startOfLine = false, decorationTag = "span", decorationClass = "suggestion", command = ()=>null, items = ()=>[], render = ()=>({}), allow = ()=>true, findSuggestionMatch = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$suggestion$2f$find$2d$suggestion$2d$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSuggestionMatch"] })=>{
    let props;
    const renderer = render?.();
    const plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
        key: pluginKey,
        view () {
            return {
                update: async (view, prevState)=>{
                    const prev = this.key?.getState(prevState);
                    const next = this.key?.getState(view.state);
                    const moved = prev.active && next.active && prev.range.from !== next.range.from;
                    const started = !prev.active && next.active;
                    const stopped = prev.active && !next.active;
                    const changed = !started && !stopped && prev.query !== next.query;
                    const handleStart = started || moved && changed;
                    const handleChange = changed || moved;
                    const handleExit = stopped || moved && changed;
                    if (!handleStart && !handleChange && !handleExit) {
                        return;
                    }
                    const state = handleExit && !handleStart ? prev : next;
                    const decorationNode = view.dom.querySelector(`[data-decoration-id="${state.decorationId}"]`);
                    props = {
                        editor,
                        range: state.range,
                        query: state.query,
                        text: state.text,
                        items: [],
                        command: (commandProps)=>{
                            return command({
                                editor,
                                range: state.range,
                                props: commandProps
                            });
                        },
                        decorationNode,
                        // virtual node for popper.js or tippy.js
                        // this can be used for building popups without a DOM node
                        clientRect: decorationNode ? ()=>{
                            const { decorationId } = this.key?.getState(editor.state);
                            const currentDecorationNode = view.dom.querySelector(`[data-decoration-id="${decorationId}"]`);
                            return currentDecorationNode?.getBoundingClientRect() || null;
                        } : null
                    };
                    if (handleStart) {
                        renderer?.onBeforeStart?.(props);
                    }
                    if (handleChange) {
                        renderer?.onBeforeUpdate?.(props);
                    }
                    if (handleChange || handleStart) {
                        props.items = await items({
                            editor,
                            query: state.query
                        });
                    }
                    if (handleExit) {
                        renderer?.onExit?.(props);
                    }
                    if (handleChange) {
                        renderer?.onUpdate?.(props);
                    }
                    if (handleStart) {
                        renderer?.onStart?.(props);
                    }
                },
                destroy: ()=>{
                    if (!props) {
                        return;
                    }
                    renderer?.onExit?.(props);
                }
            };
        },
        state: {
            // Initialize the plugin's internal state.
            init () {
                const state = {
                    active: false,
                    range: {
                        from: 0,
                        to: 0
                    },
                    query: null,
                    text: null,
                    composing: false
                };
                return state;
            },
            // Apply changes to the plugin state from a view transaction.
            apply (transaction, prev, _oldState, state) {
                const { isEditable } = editor;
                const { composing } = editor.view;
                const { selection } = transaction;
                const { empty, from } = selection;
                const next = {
                    ...prev
                };
                next.composing = composing;
                if (isEditable && (empty || editor.view.composing)) {
                    if ((from < prev.range.from || from > prev.range.to) && !composing && !prev.composing) {
                        next.active = false;
                    }
                    const match = findSuggestionMatch({
                        char,
                        allowSpaces,
                        allowedPrefixes,
                        startOfLine,
                        $position: selection.$from
                    });
                    const decorationId = `id_${Math.floor(Math.random() * 4294967295)}`;
                    if (match && allow({
                        editor,
                        state,
                        range: match.range,
                        isActive: prev.active
                    })) {
                        next.active = true;
                        next.decorationId = prev.decorationId ? prev.decorationId : decorationId;
                        next.range = match.range;
                        next.query = match.query;
                        next.text = match.text;
                    } else {
                        next.active = false;
                    }
                } else {
                    next.active = false;
                }
                if (!next.active) {
                    next.decorationId = null;
                    next.range = {
                        from: 0,
                        to: 0
                    };
                    next.query = null;
                    next.text = null;
                }
                return next;
            }
        },
        props: {
            // Call the keydown hook if suggestion is active.
            handleKeyDown (view, event) {
                const { active, range } = plugin.getState(view.state);
                if (!active) {
                    return false;
                }
                return renderer?.onKeyDown?.({
                    view,
                    event,
                    range
                }) || false;
            },
            // Setup decorator on the currently active suggestion.
            decorations (state) {
                const { active, range, decorationId } = plugin.getState(state);
                if (!active) {
                    return null;
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(state.doc, [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$view$40$1$2e$42$2e$2$2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].inline(range.from, range.to, {
                        nodeName: decorationTag,
                        class: decorationClass,
                        "data-decoration-id": decorationId
                    })
                ]);
            }
        }
    });
    return plugin;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/utilities/min-max.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minMax",
    ()=>minMax
]);
const minMax = (value = 0, min = 0, max = 0)=>{
    return Math.min(Math.max(value, min), max);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/helpers/pos-to-dom-rect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "posToDOMRect",
    ()=>posToDOMRect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/utilities/min-max.js [app-client] (ecmascript)");
;
const posToDOMRect = (view, from, to)=>{
    const minPos = 0;
    const maxPos = view.state.doc.content.size;
    const resolvedFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(from, minPos, maxPos);
    const resolvedEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$utilities$2f$min$2d$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"])(to, minPos, maxPos);
    const start = view.coordsAtPos(resolvedFrom);
    const end = view.coordsAtPos(resolvedEnd, -1);
    const top = Math.min(start.top, end.top);
    const bottom = Math.max(start.bottom, end.bottom);
    const left = Math.min(start.left, end.left);
    const right = Math.max(start.right, end.right);
    const width = right - left;
    const height = bottom - top;
    const x = left;
    const y = top;
    const data = {
        top,
        bottom,
        left,
        right,
        width,
        height,
        x,
        y
    };
    return {
        ...data,
        toJSON: ()=>data
    };
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/editor-common/Utils/floating-ui-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anchorToSelection",
    ()=>anchorToSelection,
    "updateFloatingPosition",
    ()=>updateFloatingPosition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$6$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$_f1e75c639f17217fdb8333873ebffdf9$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@floating-ui+react-dom@2.1._f1e75c639f17217fdb8333873ebffdf9/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/helpers/pos-to-dom-rect.js [app-client] (ecmascript)");
;
;
const updateFloatingPosition = (editor, element, zIndex = 9999)=>{
    const virtualElement = {
        getBoundingClientRect: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posToDOMRect"])(editor.view, editor.state.selection.from, editor.state.selection.to)
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$6$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(virtualElement, element, {
        placement: "bottom-start",
        strategy: "absolute",
        middleware: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$_f1e75c639f17217fdb8333873ebffdf9$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$_f1e75c639f17217fdb8333873ebffdf9$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])()
        ]
    }).then(({ x, y, strategy })=>{
        element.style.width = "max-content";
        element.style.position = strategy;
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.zIndex = `${zIndex}`;
    });
};
const anchorToSelection = (editor, renderer, zIndex)=>{
    const element = renderer.element;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$6$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"])({
        getBoundingClientRect: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posToDOMRect"])(editor.view, editor.state.selection.from, editor.state.selection.to),
        contextElement: editor.view.dom
    }, element, ()=>updateFloatingPosition(editor, element, zIndex));
};
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/list-item-select-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>list_item_select_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "284034af";
const injectCss = ()=>{
    var css = `.bbmjf{display:flex}.bbmjf:focus-visible{outline:5px auto Highlight!important;outline:5px auto -webkit-focus-ring-color!important;outline-offset:-2px}.Hf9zK{flex:1}.Hf9zK [data-hook~=list-item-select-title]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`;
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
var list_item_select_default = {
    "root": "bbmjf",
    "content": "Hf9zK"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/list-item-select.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListItemSelect",
    ()=>ListItemSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemSelect$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/ListItemSelect/ListItemSelect.js [app-client] (ecmascript) <export default as ListItemSelect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/list-item-select-scss.js [app-client] (ecmascript)");
;
;
;
;
;
;
const WDS_DUPLICATED_ATTRIBUTES = [
    "aria-selected",
    "aria-disabled",
    "data-selected"
];
const ListItemSelect = ({ title, prefix, dataHook, selected = false, disabled = false, onSelect, className, ...props })=>{
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const rowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ListItemSelect.useLayoutEffect": ()=>{
            const wdsRow = rowRef.current?.firstElementChild;
            if (!wdsRow) {
                return;
            }
            WDS_DUPLICATED_ATTRIBUTES.forEach({
                "ListItemSelect.useLayoutEffect": (attribute)=>wdsRow.removeAttribute(attribute)
            }["ListItemSelect.useLayoutEffect"]);
        }
    }["ListItemSelect.useLayoutEffect"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: rowRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root, className),
        "data-hook": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIST_ITEM_SELECT"], dataHook),
        role: "option",
        "aria-selected": selected,
        "aria-disabled": disabled,
        tabIndex: disabled ? -1 : 0,
        onClick: (e)=>{
            if (disabled) {
                return;
            }
            e.stopPropagation();
            onSelect?.(e);
        },
        onKeyDown: (e)=>{
            if (disabled) {
                return;
            }
            if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
                e.preventDefault();
                onSelect?.(e);
            }
        },
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ListItemSelect$2f$ListItemSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemSelect$3e$__["ListItemSelect"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIST_ITEM_SELECT_CONTENT"],
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].content,
        size: isMobile ? "medium" : "small",
        prefix,
        title,
        selected,
        disabled
    }));
};
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/statics/mention-list-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mention_list_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "500c1668";
const injectCss = ()=>{
    var css = `.UwvSi,.glob_fontElementMap{font-family:var(--ricos-font-family,unset)}.BfwCN{background-color:var(--wds-color-fill-surface-overlay,var(--wsr-color-D80,#fff));border-radius:var(--ricos-settings-whitebox-border-radius,var(--wds-border-radius-surface-overlay,8px));box-shadow:var(--ricos-settings-whitebox-box-shadow,var(--wds-shadow-surface-overlay,0 6px 6px 0 rgba(22,45,61,.06),0 0 18px 0 rgba(22,45,61,.12)));height:fit-content;padding-block:12px;--wds-list-item-select-title:var(--ricos-settings-text-color,var(--wsr-color-D10,#000624));--wds-color-text-standard-primary:var(
    --ricos-settings-text-color,var(--wsr-color-D10,#000624)
  );box-sizing:border-box;display:flex;flex-direction:column;max-height:360px;min-height:40px;overflow:auto;width:220px;--wds-list-item-select-padding-vertical-small:12px;--wds-list-item-select-padding-vertical-medium:12px}.BfwCN *,.BfwCN :after,.BfwCN :before{box-sizing:inherit}.BfwCN input{box-sizing:border-box}.iKP6R{flex-shrink:0;height:28px;width:28px}`;
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
var mention_list_default = {
    "fontElementMap": "UwvSi",
    "mention_list": "BfwCN",
    "avatar": "iKP6R"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/tiptap/mention-avatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MentionAvatar",
    ()=>MentionAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$statics$2f$mention$2d$list$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/statics/mention-list-scss.js [app-client] (ecmascript)");
;
;
;
const MentionAvatar = ({ src, alt })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$statics$2f$mention$2d$list$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].avatar,
        size: "size30",
        imgProps: src ? {
            src,
            alt
        } : void 0,
        name: alt
    });
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/tiptap/mention-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MentionList",
    ()=>MentionList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.304.0__dc4baccdb9fadc72b48b1110fc7207bb/node_modules/@wix/design-system/dist/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$z$2d$index$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-context/z-index-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/list-item-select/list-item-select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$ricos$2d$inert$2d$tooltip$2d$host$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/ricos-inert-tooltip-host.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$statics$2f$mention$2d$list$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/statics/mention-list-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$tiptap$2f$mention$2d$avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/tiptap/mention-avatar.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const ELLIPSIS_CHARACTER_LIMIT = 23;
const INERT_TOOLTIP_HOST_SELECTOR = `[data-hook="${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$ricos$2d$inert$2d$tooltip$2d$host$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RICOS_INERT_TOOLTIP_HOST"]}"]`;
const MentionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { languageDir, portal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]) || {};
    const zIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$z$2d$index$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZIndexContext"])?.getZIndex("TOOLTIP");
    const optionIdPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const tooltipHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MentionList.useMemo[tooltipHost]": ()=>portal?.querySelector(INERT_TOOLTIP_HOST_SELECTOR) ?? void 0
    }["MentionList.useMemo[tooltipHost]"], [
        portal
    ]);
    const selectItem = (index)=>{
        if (props.items[index]) {
            props.command(props.items[index]);
        }
    };
    const upHandler = ()=>{
        setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length);
    };
    const downHandler = ()=>{
        setSelectedIndex((selectedIndex + 1) % props.items.length);
    };
    const enterHandler = ()=>{
        selectItem(selectedIndex);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MentionList.useEffect": ()=>setSelectedIndex(0)
    }["MentionList.useEffect"], [
        props.items
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "MentionList.useImperativeHandle": ()=>({
                onKeyDown: ({
                    "MentionList.useImperativeHandle": ({ event })=>{
                        if (event.key === "ArrowUp") {
                            upHandler();
                            return true;
                        }
                        if (event.key === "ArrowDown") {
                            downHandler();
                            return true;
                        }
                        if ([
                            "Enter",
                            "Tab"
                        ].includes(event.key)) {
                            enterHandler();
                            return true;
                        }
                        return false;
                    }
                })["MentionList.useImperativeHandle"]
            })
    }["MentionList.useImperativeHandle"]);
    const optionId = (index)=>`${optionIdPrefix}option-${index}`;
    return props.items.length ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        dir: languageDir,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$statics$2f$mention$2d$list$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mention_list,
        role: "listbox",
        "aria-activedescendant": optionId(selectedIndex)
    }, props.items.map((item, i)=>{
        const isTruncated = item.name.length > ELLIPSIS_CHARACTER_LIMIT;
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$list$2d$item$2d$select$2f$list$2d$item$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemSelect"], {
            key: i,
            id: optionId(i),
            tabIndex: -1,
            selected: i === selectedIndex,
            onMouseOver: ()=>setSelectedIndex(i),
            onSelect: ()=>selectItem(i),
            prefix: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$tiptap$2f$mention$2d$avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentionAvatar"], {
                src: item?.avatar,
                alt: item.name
            }),
            title: isTruncated ? // Wrapping the title rather than the row: the row wrapper is a plain function
            // component and forwards no ref, which WDS `Tooltip` needs for its trigger. Both
            // `fixed` and `zIndex` only ship with the host — `fixed` turns off popper's
            // `preventOverflow`, whose boundary `appendTo` would otherwise make that host div.
            /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$304$2e$0_$5f$dc4baccdb9fadc72b48b1110fc7207bb$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                content: item.name,
                placement: "top",
                ...tooltipHost ? {
                    appendTo: tooltipHost,
                    fixed: true,
                    zIndex
                } : {}
            }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, item.name)) : item.name
        });
    })) : null;
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/tiptap/suggestion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Suggestion",
    ()=>Suggestion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$react$2f$react$2d$renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/react/react-renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$suggestion$2f$suggestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap/suggestion/suggestion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$Utils$2f$floating$2d$ui$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/editor-common/Utils/floating-ui-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$tiptap$2f$mention$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/tiptap/mention-list.js [app-client] (ecmascript)");
;
;
;
;
;
const Suggestion = (editor, { mentionTrigger, getMentions, visibleItemsBeforeOverflow, handleDropdownOpen, handleDropdownClose, supportWhitespace = true, zIndex })=>{
    const shouldEndMentioningProcess = (query, items)=>{
        const names = items.map((item)=>item.name.toLowerCase());
        return !names.some((name)=>name.includes(query.toLowerCase()));
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$suggestion$2f$suggestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suggestion"])({
        editor,
        char: mentionTrigger,
        allowSpaces: supportWhitespace,
        pluginKey: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]("mention"),
        command: ({ editor: editor2, range, props })=>{
            const { name, slug, id, type } = props;
            editor2.chain().focus().insertMention({
                name,
                slug,
                id,
                type
            }, range).run;
        },
        items: async ({ query })=>{
            const mentions = await getMentions(query);
            return mentions.map((mention)=>({
                    name: mention.name,
                    slug: mention.slug,
                    avatar: mention.avatar,
                    id: mention.id,
                    type: mention.type
                })).slice(0, visibleItemsBeforeOverflow);
        },
        render: ()=>{
            let cleanup;
            let renderer;
            return {
                onStart: (props)=>{
                    renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$react$2f$react$2d$renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactRenderer"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$tiptap$2f$mention$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MentionList"], {
                        editor,
                        props
                    });
                    const element = renderer.element;
                    element.setAttribute("dir", "");
                    element.style.position = "absolute";
                    const portal = document.querySelector("[data-hook=ricos-portal]") ?? document.body;
                    portal.appendChild(element);
                    cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$Utils$2f$floating$2d$ui$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anchorToSelection"])(editor, renderer, zIndex);
                    if (handleDropdownOpen) {
                        handleDropdownOpen();
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$Utils$2f$floating$2d$ui$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFloatingPosition"])(props.editor, element, zIndex);
                    }
                },
                onUpdate (props) {
                    renderer.updateProps(props);
                    if (!handleDropdownOpen) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$Utils$2f$floating$2d$ui$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFloatingPosition"])(props.editor, renderer.element, zIndex);
                    }
                },
                onKeyDown (props) {
                    if (props.event.key === "Escape") {
                        this.onExit?.();
                        return true;
                    }
                    const { items, query } = renderer.props;
                    if ([
                        "Enter",
                        "Tab"
                    ].includes(props.event.key) && shouldEndMentioningProcess(query, items)) {
                        this.onExit?.();
                        return false;
                    }
                    if (!handleDropdownClose) {
                        return renderer.ref?.onKeyDown?.(props) ?? false;
                    }
                    return false;
                },
                onExit () {
                    renderer?.destroy?.();
                    cleanup?.();
                    if (handleDropdownClose) {
                        handleDropdownClose();
                    } else {
                        renderer.element.remove();
                    }
                }
            };
        }
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/tiptap/tiptap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tiptapExtensions",
    ()=>tiptapExtensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$statics$2f$mention$2e$defaults$2e$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/statics/mention.defaults.json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$extensions$2f$create$2d$ricos$2d$extension$2f$create$2d$ricos$2d$mark$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/tiptap-extensions/create-ricos-extension/create-ricos-mark-extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$statics$2f$mentions$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/statics/mentions-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$tiptap$2f$suggestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/tiptap/suggestion.js [app-client] (ecmascript)");
;
;
;
;
;
;
const findMention = (editor, char)=>{
    const mentionRegex = new RegExp(`(?:^)?${char}[^\\s${char}]*`, "gm");
    const { nodeBefore, pos } = editor.state.selection.$from;
    const { text, nodeSize: nodeBeforeSize } = nodeBefore || {};
    const mention = text?.match(mentionRegex)?.[0];
    const mentionIndex = text ? text.search(mentionRegex) : -1;
    if (nodeBeforeSize && mention && mentionIndex !== -1) {
        return {
            from: pos - nodeBeforeSize + mentionIndex,
            to: pos
        };
    }
};
const tiptapExtensions = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$extensions$2f$create$2d$ricos$2d$extension$2f$create$2d$ricos$2d$mark$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRicosMarkExtension"])({
        type: "mark",
        groups: [
            "shortcuts-enabled"
        ],
        name: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration_Type"].MENTION,
        reconfigure: (config, _extensions, _props, settings)=>{
            return {
                ...config,
                addOptions: ()=>({
                        settings,
                        HTMLAttributes: {},
                        renderLabel ({ node }) {
                            return `${settings.mentionTrigger}${node.attrs.label ?? node.attrs.id}`;
                        }
                    })
            };
        },
        createExtensionConfig () {
            return {
                priority: 110,
                name: this.name,
                group: "inline",
                inline: true,
                selectable: false,
                atom: true,
                addAttributes () {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$statics$2f$mention$2e$defaults$2e$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mentionData;
                },
                renderHTML () {
                    return [
                        "span",
                        {
                            class: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$statics$2f$mentions$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mention
                        },
                        0
                    ];
                },
                addKeyboardShortcuts () {
                    return {
                        Backspace: ()=>this.editor.commands.command(({ dispatch, tr, state })=>{
                                let isMention = false;
                                const { selection } = state;
                                const { empty, anchor } = selection;
                                if (!empty) {
                                    return false;
                                }
                                state.doc.nodesBetween(anchor - 1, anchor, (node, pos)=>{
                                    if (node.text === this.options.settings.mentionTrigger) {
                                        isMention = true;
                                        dispatch?.(tr.replaceWith(pos, pos + 1, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty));
                                    }
                                });
                                return isMention;
                            })
                    };
                },
                addProseMirrorPlugins () {
                    return [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$tiptap$2f$suggestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suggestion"])(this.editor, this.options.settings)
                    ];
                },
                addCommands () {
                    return {
                        insertMention: (mention, pos)=>({ view, tr, editor })=>{
                                const nodeAfter = view.state.selection.$to.nodeAfter;
                                const overrideSpace = nodeAfter?.text?.startsWith(" ");
                                const { mentionTrigger } = this.options.settings;
                                const range = pos || mentionTrigger && findMention(editor, mentionTrigger) || {
                                    from: tr.selection.from,
                                    to: tr.selection.to
                                };
                                if (overrideSpace) {
                                    range.to += 1;
                                }
                                return editor.chain().focus().insertContentAt(range, [
                                    {
                                        type: "text",
                                        text: `${mentionTrigger}${mention.name}`,
                                        marks: [
                                            {
                                                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration_Type"].MENTION,
                                                attrs: {
                                                    name: mention.name,
                                                    slug: mention.slug,
                                                    id: mention.id,
                                                    type: mention.type
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        type: "text",
                                        text: " "
                                    }
                                ]).run();
                            }
                    };
                }
            };
        }
    })
];
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MENTION_TYPE",
    ()=>MENTION_TYPE
]);
const MENTION_TYPE = "mention";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/viewer-styles-inject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = '731d29ee';
const injectCss = ()=>{
    var css = `._9ZtMP,._9ZtMP:visited{background:var(--ricos-custom-mention-background-color,transparent)!important;border-radius:2px;color:var(--ricos-custom-mention-color,var(--ricos-action-color,#116dff));display:inline-block;padding-left:2px;padding-right:2px;text-decoration:none}.P5EDB,.P5EDB:visited{padding-left:4px;padding-right:4px}._9ZtMP:focus,._9ZtMP:hover{outline:0;text-decoration:underline}._9ZtMP:active,._9ZtMP:focus,._9ZtMP:hover{color:var(--ricos-custom-mention-color,var(--ricos-action-color,#116dff))}.d6jWn{cursor:default}.o1fS2{cursor:pointer}`;
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/editor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pluginMentions",
    ()=>pluginMentions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$default$2d$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/default-settings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$mention$2d$converter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/mention-converter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$tiptap$2f$tiptap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/tiptap/tiptap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$viewer$2d$styles$2d$inject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/plugin-mentions/viewer-styles-inject.js [app-client] (ecmascript)");
;
;
;
;
const pluginMentions = (config)=>{
    const pluginConfig = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$default$2d$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULTS"].config,
        ...config
    };
    return {
        config: pluginConfig,
        pmNodeConverters: [],
        pmMarkConverters: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$mention$2d$converter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mentionConverter"]
        ],
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MENTION_TYPE"],
        tiptapExtensions: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$tiptap$2f$tiptap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tiptapExtensions"]
    };
};
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$mentions$2f$viewer$2d$styles$2d$inject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectCss"])();
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/orderedmap@2.1.1/node_modules/orderedmap/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// ::- Persistent data structure representing an ordered mapping from
// strings to values, with some convenient update methods.
function OrderedMap(content) {
    this.content = content;
}
OrderedMap.prototype = {
    constructor: OrderedMap,
    find: function(key) {
        for(var i = 0; i < this.content.length; i += 2)if (this.content[i] === key) return i;
        return -1;
    },
    // :: (string) → ?any
    // Retrieve the value stored under `key`, or return undefined when
    // no such key exists.
    get: function(key) {
        var found = this.find(key);
        return found == -1 ? undefined : this.content[found + 1];
    },
    // :: (string, any, ?string) → OrderedMap
    // Create a new map by replacing the value of `key` with a new
    // value, or adding a binding to the end of the map. If `newKey` is
    // given, the key of the binding will be replaced with that key.
    update: function(key, value, newKey) {
        var self = newKey && newKey != key ? this.remove(newKey) : this;
        var found = self.find(key), content = self.content.slice();
        if (found == -1) {
            content.push(newKey || key, value);
        } else {
            content[found + 1] = value;
            if (newKey) content[found] = newKey;
        }
        return new OrderedMap(content);
    },
    // :: (string) → OrderedMap
    // Return a map with the given key removed, if it existed.
    remove: function(key) {
        var found = this.find(key);
        if (found == -1) return this;
        var content = this.content.slice();
        content.splice(found, 2);
        return new OrderedMap(content);
    },
    // :: (string, any) → OrderedMap
    // Add a new key to the start of the map.
    addToStart: function(key, value) {
        return new OrderedMap([
            key,
            value
        ].concat(this.remove(key).content));
    },
    // :: (string, any) → OrderedMap
    // Add a new key to the end of the map.
    addToEnd: function(key, value) {
        var content = this.remove(key).content.slice();
        content.push(key, value);
        return new OrderedMap(content);
    },
    // :: (string, string, any) → OrderedMap
    // Add a key after the given key. If `place` is not found, the new
    // key is added to the end.
    addBefore: function(place, key, value) {
        var without = this.remove(key), content = without.content.slice();
        var found = without.find(place);
        content.splice(found == -1 ? content.length : found, 0, key, value);
        return new OrderedMap(content);
    },
    // :: ((key: string, value: any))
    // Call the given function for each key/value pair in the map, in
    // order.
    forEach: function(f) {
        for(var i = 0; i < this.content.length; i += 2)f(this.content[i], this.content[i + 1]);
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a new map by prepending the keys in this map that don't
    // appear in `map` before the keys in `map`.
    prepend: function(map) {
        map = OrderedMap.from(map);
        if (!map.size) return this;
        return new OrderedMap(map.content.concat(this.subtract(map).content));
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a new map by appending the keys in this map that don't
    // appear in `map` after the keys in `map`.
    append: function(map) {
        map = OrderedMap.from(map);
        if (!map.size) return this;
        return new OrderedMap(this.subtract(map).content.concat(map.content));
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a map containing all the keys in this map that don't
    // appear in `map`.
    subtract: function(map) {
        var result = this;
        map = OrderedMap.from(map);
        for(var i = 0; i < map.content.length; i += 2)result = result.remove(map.content[i]);
        return result;
    },
    // :: () → Object
    // Turn ordered map into a plain object.
    toObject: function() {
        var result = {};
        this.forEach(function(key, value) {
            result[key] = value;
        });
        return result;
    },
    // :: number
    // The amount of keys in this map.
    get size () {
        return this.content.length >> 1;
    }
};
// :: (?union<Object, OrderedMap>) → OrderedMap
// Return a map with the given content. If null, create an empty
// map. If given an ordered map, return that map itself. If given an
// object, create a map from the object's properties.
OrderedMap.from = function(value) {
    if (value instanceof OrderedMap) return value;
    var content = [];
    if (value) for(var prop in value)content.push(prop, value[prop]);
    return new OrderedMap(content);
};
const __TURBOPACK__default__export__ = OrderedMap;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentMatch",
    ()=>ContentMatch,
    "DOMParser",
    ()=>DOMParser,
    "DOMSerializer",
    ()=>DOMSerializer,
    "Fragment",
    ()=>Fragment,
    "Mark",
    ()=>Mark,
    "MarkType",
    ()=>MarkType,
    "Node",
    ()=>Node,
    "NodeRange",
    ()=>NodeRange,
    "NodeType",
    ()=>NodeType,
    "ReplaceError",
    ()=>ReplaceError,
    "ResolvedPos",
    ()=>ResolvedPos,
    "Schema",
    ()=>Schema,
    "Slice",
    ()=>Slice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$orderedmap$40$2$2e$1$2e$1$2f$node_modules$2f$orderedmap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/orderedmap@2.1.1/node_modules/orderedmap/dist/index.js [app-client] (ecmascript)");
;
function findDiffStart(a, b, pos) {
    for(let i = 0;; i++){
        if (i == a.childCount || i == b.childCount) return a.childCount == b.childCount ? null : pos;
        let childA = a.child(i), childB = b.child(i);
        if (childA == childB) {
            pos += childA.nodeSize;
            continue;
        }
        if (!childA.sameMarkup(childB)) return pos;
        if (childA.isText && childA.text != childB.text) {
            let tA = childA.text, tB = childB.text, j = 0;
            for(; tA[j] == tB[j]; j++)pos++;
            if (j && j < tA.length && j < tB.length && surrogateHigh(tA.charCodeAt(j - 1)) && surrogateLow(tA.charCodeAt(j))) pos--;
            return pos;
        }
        if (childA.content.size || childB.content.size) {
            let inner = findDiffStart(childA.content, childB.content, pos + 1);
            if (inner != null) return inner;
        }
        pos += childA.nodeSize;
    }
}
function findDiffEnd(a, b, posA, posB) {
    for(let iA = a.childCount, iB = b.childCount;;){
        if (iA == 0 || iB == 0) return iA == iB ? null : {
            a: posA,
            b: posB
        };
        let childA = a.child(--iA), childB = b.child(--iB), size = childA.nodeSize;
        if (childA == childB) {
            posA -= size;
            posB -= size;
            continue;
        }
        if (!childA.sameMarkup(childB)) return {
            a: posA,
            b: posB
        };
        if (childA.isText && childA.text != childB.text) {
            let tA = childA.text, tB = childB.text, iA = tA.length, iB = tB.length;
            while(iA > 0 && iB > 0 && tA[iA - 1] == tB[iB - 1]){
                iA--;
                iB--;
                posA--;
                posB--;
            }
            if (iA && iB && iA < tA.length && surrogateHigh(tA.charCodeAt(iA - 1)) && surrogateLow(tA.charCodeAt(iA))) {
                posA++;
                posB++;
            }
            return {
                a: posA,
                b: posB
            };
        }
        if (childA.content.size || childB.content.size) {
            let inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
            if (inner) return inner;
        }
        posA -= size;
        posB -= size;
    }
}
function surrogateLow(ch) {
    return ch >= 0xDC00 && ch < 0xE000;
}
function surrogateHigh(ch) {
    return ch >= 0xD800 && ch < 0xDC00;
}
/**
A fragment represents a node's collection of child nodes.

Like nodes, fragments are persistent data structures, and you
should not mutate them or their content. Rather, you create new
instances whenever needed. The API tries to make this easy.
*/ class Fragment {
    /**
    @internal
    */ constructor(/**
    The child nodes in this fragment.
    */ content, size){
        this.content = content;
        this.size = size || 0;
        if (size == null) for(let i = 0; i < content.length; i++)this.size += content[i].nodeSize;
    }
    /**
    Invoke a callback for all descendant nodes between the given two
    positions (relative to start of this fragment). Doesn't descend
    into a node when the callback returns `false`.
    */ nodesBetween(from, to, f, nodeStart = 0, parent) {
        for(let i = 0, pos = 0; pos < to; i++){
            let child = this.content[i], end = pos + child.nodeSize;
            if (end > from && f(child, nodeStart + pos, parent || null, i) !== false && child.content.size) {
                let start = pos + 1;
                child.nodesBetween(Math.max(0, from - start), Math.min(child.content.size, to - start), f, nodeStart + start);
            }
            pos = end;
        }
    }
    /**
    Call the given callback for every descendant node. `pos` will be
    relative to the start of the fragment. The callback may return
    `false` to prevent traversal of a given node's children.
    */ descendants(f) {
        this.nodesBetween(0, this.size, f);
    }
    /**
    Extract the text between `from` and `to`. See the same method on
    [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
    */ textBetween(from, to, blockSeparator, leafText) {
        let text = "", first = true;
        this.nodesBetween(from, to, (node, pos)=>{
            let nodeText = node.isText ? node.text.slice(Math.max(from, pos) - pos, to - pos) : !node.isLeaf ? "" : leafText ? typeof leafText === "function" ? leafText(node) : leafText : node.type.spec.leafText ? node.type.spec.leafText(node) : "";
            if (node.isBlock && (node.isLeaf && nodeText || node.isTextblock) && blockSeparator) {
                if (first) first = false;
                else text += blockSeparator;
            }
            text += nodeText;
        }, 0);
        return text;
    }
    /**
    Create a new fragment containing the combined content of this
    fragment and the other.
    */ append(other) {
        if (!other.size) return this;
        if (!this.size) return other;
        let last = this.lastChild, first = other.firstChild, content = this.content.slice(), i = 0;
        if (last.isText && last.sameMarkup(first)) {
            content[content.length - 1] = last.withText(last.text + first.text);
            i = 1;
        }
        for(; i < other.content.length; i++)content.push(other.content[i]);
        return new Fragment(content, this.size + other.size);
    }
    /**
    Cut out the sub-fragment between the two given positions.
    */ cut(from, to = this.size) {
        if (from == 0 && to == this.size) return this;
        let result = [], size = 0;
        if (to > from) for(let i = 0, pos = 0; pos < to; i++){
            let child = this.content[i], end = pos + child.nodeSize;
            if (end > from) {
                if (pos < from || end > to) {
                    if (child.isText) child = child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos));
                    else child = child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1));
                }
                result.push(child);
                size += child.nodeSize;
            }
            pos = end;
        }
        return new Fragment(result, size);
    }
    /**
    @internal
    */ cutByIndex(from, to) {
        if (from == to) return Fragment.empty;
        if (from == 0 && to == this.content.length) return this;
        return new Fragment(this.content.slice(from, to));
    }
    /**
    Create a new fragment in which the node at the given index is
    replaced by the given node.
    */ replaceChild(index, node) {
        let current = this.content[index];
        if (current == node) return this;
        let copy = this.content.slice();
        let size = this.size + node.nodeSize - current.nodeSize;
        copy[index] = node;
        return new Fragment(copy, size);
    }
    /**
    Create a new fragment by prepending the given node to this
    fragment.
    */ addToStart(node) {
        return new Fragment([
            node
        ].concat(this.content), this.size + node.nodeSize);
    }
    /**
    Create a new fragment by appending the given node to this
    fragment.
    */ addToEnd(node) {
        return new Fragment(this.content.concat(node), this.size + node.nodeSize);
    }
    /**
    Compare this fragment to another one.
    */ eq(other) {
        if (this.content.length != other.content.length) return false;
        for(let i = 0; i < this.content.length; i++)if (!this.content[i].eq(other.content[i])) return false;
        return true;
    }
    /**
    The first child of the fragment, or `null` if it is empty.
    */ get firstChild() {
        return this.content.length ? this.content[0] : null;
    }
    /**
    The last child of the fragment, or `null` if it is empty.
    */ get lastChild() {
        return this.content.length ? this.content[this.content.length - 1] : null;
    }
    /**
    The number of child nodes in this fragment.
    */ get childCount() {
        return this.content.length;
    }
    /**
    Get the child node at the given index. Raise an error when the
    index is out of range.
    */ child(index) {
        let found = this.content[index];
        if (!found) throw new RangeError("Index " + index + " out of range for " + this);
        return found;
    }
    /**
    Get the child node at the given index, if it exists.
    */ maybeChild(index) {
        return this.content[index] || null;
    }
    /**
    Call `f` for every child node, passing the node, its offset
    into this parent node, and its index.
    */ forEach(f) {
        for(let i = 0, p = 0; i < this.content.length; i++){
            let child = this.content[i];
            f(child, p, i);
            p += child.nodeSize;
        }
    }
    /**
    Find the first position at which this fragment and another
    fragment differ, or `null` if they are the same.
    */ findDiffStart(other, pos = 0) {
        return findDiffStart(this, other, pos);
    }
    /**
    Find the first position, searching from the end, at which this
    fragment and the given fragment differ, or `null` if they are
    the same. Since this position will not be the same in both
    nodes, an object with two separate positions is returned.
    */ findDiffEnd(other, pos = this.size, otherPos = other.size) {
        return findDiffEnd(this, other, pos, otherPos);
    }
    /**
    Find the index and inner offset corresponding to a given relative
    position in this fragment. The result object will be reused
    (overwritten) the next time the function is called. @internal
    */ findIndex(pos) {
        if (pos == 0) return retIndex(0, pos);
        if (pos == this.size) return retIndex(this.content.length, pos);
        if (pos > this.size || pos < 0) throw new RangeError(`Position ${pos} outside of fragment (${this})`);
        for(let i = 0, curPos = 0;; i++){
            let cur = this.child(i), end = curPos + cur.nodeSize;
            if (end >= pos) {
                if (end == pos) return retIndex(i + 1, end);
                return retIndex(i, curPos);
            }
            curPos = end;
        }
    }
    /**
    Return a debugging string that describes this fragment.
    */ toString() {
        return "<" + this.toStringInner() + ">";
    }
    /**
    @internal
    */ toStringInner() {
        return this.content.join(", ");
    }
    /**
    Create a JSON-serializeable representation of this fragment.
    */ toJSON() {
        return this.content.length ? this.content.map((n)=>n.toJSON()) : null;
    }
    /**
    Deserialize a fragment from its JSON representation.
    */ static fromJSON(schema, value) {
        if (!value) return Fragment.empty;
        if (!Array.isArray(value)) throw new RangeError("Invalid input for Fragment.fromJSON");
        return Fragment.fromArray(value.map(schema.nodeFromJSON));
    }
    /**
    Build a fragment from an array of nodes. Ensures that adjacent
    text nodes with the same marks are joined together.
    */ static fromArray(array) {
        if (!array.length) return Fragment.empty;
        let joined, size = 0;
        for(let i = 0; i < array.length; i++){
            let node = array[i];
            size += node.nodeSize;
            if (i && node.isText && array[i - 1].sameMarkup(node)) {
                if (!joined) joined = array.slice(0, i);
                joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
            } else if (joined) {
                joined.push(node);
            }
        }
        return new Fragment(joined || array, size);
    }
    /**
    Create a fragment from something that can be interpreted as a
    set of nodes. For `null`, it returns the empty fragment. For a
    fragment, the fragment itself. For a node or array of nodes, a
    fragment containing those nodes.
    */ static from(nodes) {
        if (!nodes) return Fragment.empty;
        if (nodes instanceof Fragment) return nodes;
        if (Array.isArray(nodes)) return this.fromArray(nodes);
        if (nodes.attrs) return new Fragment([
            nodes
        ], nodes.nodeSize);
        throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
    }
}
/**
An empty fragment. Intended to be reused whenever a node doesn't
contain anything (rather than allocating a new empty fragment for
each leaf node).
*/ Fragment.empty = new Fragment([], 0);
const found = {
    index: 0,
    offset: 0
};
function retIndex(index, offset) {
    found.index = index;
    found.offset = offset;
    return found;
}
function compareDeep(a, b) {
    if (a === b) return true;
    if (!(a && typeof a == "object") || !(b && typeof b == "object")) return false;
    let array = Array.isArray(a);
    if (Array.isArray(b) != array) return false;
    if (array) {
        if (a.length != b.length) return false;
        for(let i = 0; i < a.length; i++)if (!compareDeep(a[i], b[i])) return false;
    } else {
        for(let p in a)if (!(p in b) || !compareDeep(a[p], b[p])) return false;
        for(let p in b)if (!(p in a)) return false;
    }
    return true;
}
/**
A mark is a piece of information that can be attached to a node,
such as it being emphasized, in code font, or a link. It has a
type and optionally a set of attributes that provide further
information (such as the target of the link). Marks are created
through a `Schema`, which controls which types exist and which
attributes they have.
*/ class Mark {
    /**
    @internal
    */ constructor(/**
    The type of this mark.
    */ type, /**
    The attributes associated with this mark.
    */ attrs){
        this.type = type;
        this.attrs = attrs;
    }
    /**
    Given a set of marks, create a new set which contains this one as
    well, in the right position. If this mark is already in the set,
    the set itself is returned. If any marks that are set to be
    [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
    those are replaced by this one.
    */ addToSet(set) {
        let copy, placed = false;
        for(let i = 0; i < set.length; i++){
            let other = set[i];
            if (this.eq(other)) return set;
            if (this.type.excludes(other.type)) {
                if (!copy) copy = set.slice(0, i);
            } else if (other.type.excludes(this.type)) {
                return set;
            } else {
                if (!placed && other.type.rank > this.type.rank) {
                    if (!copy) copy = set.slice(0, i);
                    copy.push(this);
                    placed = true;
                }
                if (copy) copy.push(other);
            }
        }
        if (!copy) copy = set.slice();
        if (!placed) copy.push(this);
        return copy;
    }
    /**
    Remove this mark from the given set, returning a new set. If this
    mark is not in the set, the set itself is returned.
    */ removeFromSet(set) {
        for(let i = 0; i < set.length; i++)if (this.eq(set[i])) return set.slice(0, i).concat(set.slice(i + 1));
        return set;
    }
    /**
    Test whether this mark is in the given set of marks.
    */ isInSet(set) {
        for(let i = 0; i < set.length; i++)if (this.eq(set[i])) return true;
        return false;
    }
    /**
    Test whether this mark has the same type and attributes as
    another mark.
    */ eq(other) {
        return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
    }
    /**
    Convert this mark to a JSON-serializeable representation.
    */ toJSON() {
        let obj = {
            type: this.type.name
        };
        for(let _ in this.attrs){
            obj.attrs = this.attrs;
            break;
        }
        return obj;
    }
    /**
    Deserialize a mark from JSON.
    */ static fromJSON(schema, json) {
        if (!json) throw new RangeError("Invalid input for Mark.fromJSON");
        let type = schema.marks[json.type];
        if (!type) throw new RangeError(`There is no mark type ${json.type} in this schema`);
        let mark = type.create(json.attrs);
        type.checkAttrs(mark.attrs);
        return mark;
    }
    /**
    Test whether two sets of marks are identical.
    */ static sameSet(a, b) {
        if (a == b) return true;
        if (a.length != b.length) return false;
        for(let i = 0; i < a.length; i++)if (!a[i].eq(b[i])) return false;
        return true;
    }
    /**
    Create a properly sorted mark set from null, a single mark, or an
    unsorted array of marks.
    */ static setFrom(marks) {
        if (!marks || Array.isArray(marks) && marks.length == 0) return Mark.none;
        if (marks instanceof Mark) return [
            marks
        ];
        let copy = marks.slice();
        copy.sort((a, b)=>a.type.rank - b.type.rank);
        return copy;
    }
}
/**
The empty set of marks.
*/ Mark.none = [];
/**
Error type raised by [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) when
given an invalid replacement.
*/ class ReplaceError extends Error {
}
/**
A slice represents a piece cut out of a larger document. It
stores not only a fragment, but also the depth up to which nodes on
both side are ‘open’ (cut through).
*/ class Slice {
    /**
    Create a slice. When specifying a non-zero open depth, you must
    make sure that there are nodes of at least that depth at the
    appropriate side of the fragment—i.e. if the fragment is an
    empty paragraph node, `openStart` and `openEnd` can't be greater
    than 1.
    
    It is not necessary for the content of open nodes to conform to
    the schema's content constraints, though it should be a valid
    start/end/middle for such a node, depending on which sides are
    open.
    */ constructor(/**
    The slice's content.
    */ content, /**
    The open depth at the start of the fragment.
    */ openStart, /**
    The open depth at the end.
    */ openEnd){
        this.content = content;
        this.openStart = openStart;
        this.openEnd = openEnd;
    }
    /**
    The size this slice would add when inserted into a document.
    */ get size() {
        return this.content.size - this.openStart - this.openEnd;
    }
    /**
    @internal
    */ insertAt(pos, fragment) {
        let content = insertInto(this.content, pos + this.openStart, fragment, this.openStart + 1, this.openEnd + 1);
        return content && new Slice(content, this.openStart, this.openEnd);
    }
    /**
    @internal
    */ removeBetween(from, to) {
        return new Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd);
    }
    /**
    Tests whether this slice is equal to another slice.
    */ eq(other) {
        return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
    }
    /**
    @internal
    */ toString() {
        return this.content + "(" + this.openStart + "," + this.openEnd + ")";
    }
    /**
    Convert a slice to a JSON-serializable representation.
    */ toJSON() {
        if (!this.content.size) return null;
        let json = {
            content: this.content.toJSON()
        };
        if (this.openStart > 0) json.openStart = this.openStart;
        if (this.openEnd > 0) json.openEnd = this.openEnd;
        return json;
    }
    /**
    Deserialize a slice from its JSON representation.
    */ static fromJSON(schema, json) {
        if (!json) return Slice.empty;
        let openStart = json.openStart || 0, openEnd = json.openEnd || 0;
        if (typeof openStart != "number" || typeof openEnd != "number") throw new RangeError("Invalid input for Slice.fromJSON");
        return new Slice(Fragment.fromJSON(schema, json.content), openStart, openEnd);
    }
    /**
    Create a slice from a fragment by taking the maximum possible
    open value on both side of the fragment.
    */ static maxOpen(fragment, openIsolating = true) {
        let openStart = 0, openEnd = 0;
        for(let n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild)openStart++;
        for(let n = fragment.lastChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.lastChild)openEnd++;
        return new Slice(fragment, openStart, openEnd);
    }
}
/**
The empty slice.
*/ Slice.empty = new Slice(Fragment.empty, 0, 0);
function removeRange(content, from, to) {
    let { index, offset } = content.findIndex(from), child = content.maybeChild(index);
    let { index: indexTo, offset: offsetTo } = content.findIndex(to);
    if (offset == from || child.isText) {
        if (offsetTo != to && !content.child(indexTo).isText) throw new RangeError("Removing non-flat range");
        return content.cut(0, from).append(content.cut(to));
    }
    if (index != indexTo) throw new RangeError("Removing non-flat range");
    return content.replaceChild(index, child.copy(removeRange(child.content, from - offset - 1, to - offset - 1)));
}
function insertInto(content, dist, insert, openStart, openEnd, parent) {
    let { index, offset } = content.findIndex(dist), child = content.maybeChild(index);
    if (offset == dist || child.isText) {
        if (parent && openStart <= 0 && openEnd <= 0 && !parent.canReplace(index, index, insert)) return null;
        return content.cut(0, dist).append(insert).append(content.cut(dist));
    }
    let inner = insertInto(child.content, dist - offset - 1, insert, index == 0 ? openStart - 1 : 0, index == content.childCount - 1 ? openEnd - 1 : 0, child);
    return inner && content.replaceChild(index, child.copy(inner));
}
function replace($from, $to, slice) {
    if (slice.openStart > $from.depth) throw new ReplaceError("Inserted content deeper than insertion position");
    if ($from.depth - slice.openStart != $to.depth - slice.openEnd) throw new ReplaceError("Inconsistent open depths");
    return replaceOuter($from, $to, slice, 0);
}
function replaceOuter($from, $to, slice, depth) {
    let index = $from.index(depth), node = $from.node(depth);
    if (index == $to.index(depth) && depth < $from.depth - slice.openStart) {
        let inner = replaceOuter($from, $to, slice, depth + 1);
        return node.copy(node.content.replaceChild(index, inner));
    } else if (!slice.content.size) {
        return close(node, replaceTwoWay($from, $to, depth));
    } else if (!slice.openStart && !slice.openEnd && $from.depth == depth && $to.depth == depth) {
        let parent = $from.parent, content = parent.content;
        return close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)));
    } else {
        let { start, end } = prepareSliceForReplace(slice, $from);
        return close(node, replaceThreeWay($from, start, end, $to, depth));
    }
}
function checkJoin(main, sub) {
    if (!sub.type.compatibleContent(main.type)) throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name);
}
function joinable($before, $after, depth) {
    let node = $before.node(depth);
    checkJoin(node, $after.node(depth));
    return node;
}
function addNode(child, target) {
    let last = target.length - 1;
    if (last >= 0 && child.isText && child.sameMarkup(target[last])) target[last] = child.withText(target[last].text + child.text);
    else target.push(child);
}
function addRange($start, $end, depth, target) {
    let node = ($end || $start).node(depth);
    let startIndex = 0, endIndex = $end ? $end.index(depth) : node.childCount;
    if ($start) {
        startIndex = $start.index(depth);
        if ($start.depth > depth) {
            startIndex++;
        } else if ($start.textOffset) {
            addNode($start.nodeAfter, target);
            startIndex++;
        }
    }
    for(let i = startIndex; i < endIndex; i++)addNode(node.child(i), target);
    if ($end && $end.depth == depth && $end.textOffset) addNode($end.nodeBefore, target);
}
function close(node, content) {
    if (!node.type.validContent(content)) throw new ReplaceError("Invalid content for node " + node.type.name);
    return node.copy(content);
}
function replaceThreeWay($from, $start, $end, $to, depth) {
    let openStart = $from.depth > depth && joinable($from, $start, depth + 1);
    let openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
    let content = [];
    addRange(null, $from, depth, content);
    if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
        checkJoin(openStart, openEnd);
        addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
    } else {
        if (openStart) addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
        addRange($start, $end, depth, content);
        if (openEnd) addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
    }
    addRange($to, null, depth, content);
    return new Fragment(content);
}
function replaceTwoWay($from, $to, depth) {
    let content = [];
    addRange(null, $from, depth, content);
    if ($from.depth > depth) {
        let type = joinable($from, $to, depth + 1);
        addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
    }
    addRange($to, null, depth, content);
    return new Fragment(content);
}
function prepareSliceForReplace(slice, $along) {
    let extra = $along.depth - slice.openStart, parent = $along.node(extra);
    let node = parent.copy(slice.content);
    for(let i = extra - 1; i >= 0; i--)node = $along.node(i).copy(Fragment.from(node));
    return {
        start: node.resolveNoCache(slice.openStart + extra),
        end: node.resolveNoCache(node.content.size - slice.openEnd - extra)
    };
}
/**
You can [_resolve_](https://prosemirror.net/docs/ref/#model.Node.resolve) a position to get more
information about it. Objects of this class represent such a
resolved position, providing various pieces of context
information, and some helper methods.

Throughout this interface, methods that take an optional `depth`
parameter will interpret undefined as `this.depth` and negative
numbers as `this.depth + value`.
*/ class ResolvedPos {
    /**
    @internal
    */ constructor(/**
    The position that was resolved.
    */ pos, /**
    @internal
    */ path, /**
    The offset this position has into its parent node.
    */ parentOffset){
        this.pos = pos;
        this.path = path;
        this.parentOffset = parentOffset;
        this.depth = path.length / 3 - 1;
    }
    /**
    @internal
    */ resolveDepth(val) {
        if (val == null) return this.depth;
        if (val < 0) return this.depth + val;
        return val;
    }
    /**
    The parent node that the position points into. Note that even if
    a position points into a text node, that node is not considered
    the parent—text nodes are ‘flat’ in this model, and have no content.
    */ get parent() {
        return this.node(this.depth);
    }
    /**
    The root node in which the position was resolved.
    */ get doc() {
        return this.node(0);
    }
    /**
    The ancestor node at the given level. `p.node(p.depth)` is the
    same as `p.parent`.
    */ node(depth) {
        return this.path[this.resolveDepth(depth) * 3];
    }
    /**
    The index into the ancestor at the given level. If this points
    at the 3rd node in the 2nd paragraph on the top level, for
    example, `p.index(0)` is 1 and `p.index(1)` is 2.
    */ index(depth) {
        return this.path[this.resolveDepth(depth) * 3 + 1];
    }
    /**
    The index pointing after this position into the ancestor at the
    given level.
    */ indexAfter(depth) {
        depth = this.resolveDepth(depth);
        return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
    }
    /**
    The (absolute) position at the start of the node at the given
    level.
    */ start(depth) {
        depth = this.resolveDepth(depth);
        return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
    }
    /**
    The (absolute) position at the end of the node at the given
    level.
    */ end(depth) {
        depth = this.resolveDepth(depth);
        return this.start(depth) + this.node(depth).content.size;
    }
    /**
    The (absolute) position directly before the wrapping node at the
    given level, or, when `depth` is `this.depth + 1`, the original
    position.
    */ before(depth) {
        depth = this.resolveDepth(depth);
        if (!depth) throw new RangeError("There is no position before the top-level node");
        return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
    }
    /**
    The (absolute) position directly after the wrapping node at the
    given level, or the original position when `depth` is `this.depth + 1`.
    */ after(depth) {
        depth = this.resolveDepth(depth);
        if (!depth) throw new RangeError("There is no position after the top-level node");
        return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
    }
    /**
    When this position points into a text node, this returns the
    distance between the position and the start of the text node.
    Will be zero for positions that point between nodes.
    */ get textOffset() {
        return this.pos - this.path[this.path.length - 1];
    }
    /**
    Get the node directly after the position, if any. If the position
    points into a text node, only the part of that node after the
    position is returned.
    */ get nodeAfter() {
        let parent = this.parent, index = this.index(this.depth);
        if (index == parent.childCount) return null;
        let dOff = this.pos - this.path[this.path.length - 1], child = parent.child(index);
        return dOff ? parent.child(index).cut(dOff) : child;
    }
    /**
    Get the node directly before the position, if any. If the
    position points into a text node, only the part of that node
    before the position is returned.
    */ get nodeBefore() {
        let index = this.index(this.depth);
        let dOff = this.pos - this.path[this.path.length - 1];
        if (dOff) return this.parent.child(index).cut(0, dOff);
        return index == 0 ? null : this.parent.child(index - 1);
    }
    /**
    Get the position at the given index in the parent node at the
    given depth (which defaults to `this.depth`).
    */ posAtIndex(index, depth) {
        depth = this.resolveDepth(depth);
        let node = this.path[depth * 3], pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
        for(let i = 0; i < index; i++)pos += node.child(i).nodeSize;
        return pos;
    }
    /**
    Get the marks at this position, factoring in the surrounding
    marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
    position is at the start of a non-empty node, the marks of the
    node after it (if any) are returned.
    */ marks() {
        let parent = this.parent, index = this.index();
        // In an empty parent, return the empty array
        if (parent.content.size == 0) return Mark.none;
        // When inside a text node, just return the text node's marks
        if (this.textOffset) return parent.child(index).marks;
        let main = parent.maybeChild(index - 1), other = parent.maybeChild(index);
        // If the `after` flag is true of there is no node before, make
        // the node after this position the main reference.
        if (!main) {
            let tmp = main;
            main = other;
            other = tmp;
        }
        // Use all marks in the main node, except those that have
        // `inclusive` set to false and are not present in the other node.
        let marks = main.marks;
        for(var i = 0; i < marks.length; i++)if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks))) marks = marks[i--].removeFromSet(marks);
        return marks;
    }
    /**
    Get the marks after the current position, if any, except those
    that are non-inclusive and not present at position `$end`. This
    is mostly useful for getting the set of marks to preserve after a
    deletion. Will return `null` if this position is at the end of
    its parent node or its parent node isn't a textblock (in which
    case no marks should be preserved).
    */ marksAcross($end) {
        let after = this.parent.maybeChild(this.index());
        if (!after || !after.isInline) return null;
        let marks = after.marks, next = $end.parent.maybeChild($end.index());
        for(var i = 0; i < marks.length; i++)if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks))) marks = marks[i--].removeFromSet(marks);
        return marks;
    }
    /**
    The depth up to which this position and the given (non-resolved)
    position share the same parent nodes.
    */ sharedDepth(pos) {
        for(let depth = this.depth; depth > 0; depth--)if (this.start(depth) <= pos && this.end(depth) >= pos) return depth;
        return 0;
    }
    /**
    Returns a range based on the place where this position and the
    given position diverge around block content. If both point into
    the same textblock, for example, a range around that textblock
    will be returned. If they point into different blocks, the range
    around those blocks in their shared ancestor is returned. You can
    pass in an optional predicate that will be called with a parent
    node to see if a range into that parent is acceptable.
    */ blockRange(other = this, pred) {
        if (other.pos < this.pos) return other.blockRange(this);
        for(let d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--)if (other.pos <= this.end(d) && (!pred || pred(this.node(d)))) return new NodeRange(this, other, d);
        return null;
    }
    /**
    Query whether the given position shares the same parent node.
    */ sameParent(other) {
        return this.pos - this.parentOffset == other.pos - other.parentOffset;
    }
    /**
    Return the greater of this and the given position.
    */ max(other) {
        return other.pos > this.pos ? other : this;
    }
    /**
    Return the smaller of this and the given position.
    */ min(other) {
        return other.pos < this.pos ? other : this;
    }
    /**
    @internal
    */ toString() {
        let str = "";
        for(let i = 1; i <= this.depth; i++)str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
        return str + ":" + this.parentOffset;
    }
    /**
    @internal
    */ static resolve(doc, pos) {
        if (!(pos >= 0 && pos <= doc.content.size)) throw new RangeError("Position " + pos + " out of range");
        let path = [];
        let start = 0, parentOffset = pos;
        for(let node = doc;;){
            let { index, offset } = node.content.findIndex(parentOffset);
            let rem = parentOffset - offset;
            path.push(node, index, start + offset);
            if (!rem) break;
            node = node.child(index);
            if (node.isText) break;
            parentOffset = rem - 1;
            start += offset + 1;
        }
        return new ResolvedPos(pos, path, parentOffset);
    }
    /**
    @internal
    */ static resolveCached(doc, pos) {
        let cache = resolveCache.get(doc);
        if (cache) {
            for(let i = 0; i < cache.elts.length; i++){
                let elt = cache.elts[i];
                if (elt.pos == pos) return elt;
            }
        } else {
            resolveCache.set(doc, cache = new ResolveCache);
        }
        let result = cache.elts[cache.i] = ResolvedPos.resolve(doc, pos);
        cache.i = (cache.i + 1) % resolveCacheSize;
        return result;
    }
}
class ResolveCache {
    constructor(){
        this.elts = [];
        this.i = 0;
    }
}
const resolveCacheSize = 12, resolveCache = new WeakMap();
/**
Represents a flat range of content, i.e. one that starts and
ends in the same node.
*/ class NodeRange {
    /**
    Construct a node range. `$from` and `$to` should point into the
    same node until at least the given `depth`, since a node range
    denotes an adjacent set of nodes in a single parent node.
    */ constructor(/**
    A resolved position along the start of the content. May have a
    `depth` greater than this object's `depth` property, since
    these are the positions that were used to compute the range,
    not re-resolved positions directly at its boundaries.
    */ $from, /**
    A position along the end of the content. See
    caveat for [`$from`](https://prosemirror.net/docs/ref/#model.NodeRange.$from).
    */ $to, /**
    The depth of the node that this range points into.
    */ depth){
        this.$from = $from;
        this.$to = $to;
        this.depth = depth;
    }
    /**
    The position at the start of the range.
    */ get start() {
        return this.$from.before(this.depth + 1);
    }
    /**
    The position at the end of the range.
    */ get end() {
        return this.$to.after(this.depth + 1);
    }
    /**
    The parent node that the range points into.
    */ get parent() {
        return this.$from.node(this.depth);
    }
    /**
    The start index of the range in the parent node.
    */ get startIndex() {
        return this.$from.index(this.depth);
    }
    /**
    The end index of the range in the parent node.
    */ get endIndex() {
        return this.$to.indexAfter(this.depth);
    }
}
const emptyAttrs = Object.create(null);
/**
This class represents a node in the tree that makes up a
ProseMirror document. So a document is an instance of `Node`, with
children that are also instances of `Node`.

Nodes are persistent data structures. Instead of changing them, you
create new ones with the content you want. Old ones keep pointing
at the old document shape. This is made cheaper by sharing
structure between the old and new data as much as possible, which a
tree shape like this (without back pointers) makes easy.

**Do not** directly mutate the properties of a `Node` object. See
[the guide](https://prosemirror.net/docs/guide/#doc) for more information.
*/ class Node {
    /**
    @internal
    */ constructor(/**
    The type of node that this is.
    */ type, /**
    An object mapping attribute names to values. The kind of
    attributes allowed and required are
    [determined](https://prosemirror.net/docs/ref/#model.NodeSpec.attrs) by the node type.
    */ attrs, // A fragment holding the node's children.
    content, /**
    The marks (things like whether it is emphasized or part of a
    link) applied to this node.
    */ marks = Mark.none){
        this.type = type;
        this.attrs = attrs;
        this.marks = marks;
        this.content = content || Fragment.empty;
    }
    /**
    The array of this node's child nodes.
    */ get children() {
        return this.content.content;
    }
    /**
    The size of this node, as defined by the integer-based [indexing
    scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
    amount of characters. For other leaf nodes, it is one. For
    non-leaf nodes, it is the size of the content plus two (the
    start and end token).
    */ get nodeSize() {
        return this.isLeaf ? 1 : 2 + this.content.size;
    }
    /**
    The number of children that the node has.
    */ get childCount() {
        return this.content.childCount;
    }
    /**
    Get the child node at the given index. Raises an error when the
    index is out of range.
    */ child(index) {
        return this.content.child(index);
    }
    /**
    Get the child node at the given index, if it exists.
    */ maybeChild(index) {
        return this.content.maybeChild(index);
    }
    /**
    Call `f` for every child node, passing the node, its offset
    into this parent node, and its index.
    */ forEach(f) {
        this.content.forEach(f);
    }
    /**
    Invoke a callback for all descendant nodes recursively overlapping
    the given two positions that are relative to start of this
    node's content. This includes all ancestors of the nodes
    containing the two positions. The callback is invoked with the
    node, its position relative to the original node (method receiver),
    its parent node, and its child index. When the callback returns
    false for a given node, that node's children will not be
    recursed over. The last parameter can be used to specify a
    starting position to count from.
    */ nodesBetween(from, to, f, startPos = 0) {
        this.content.nodesBetween(from, to, f, startPos, this);
    }
    /**
    Call the given callback for every descendant node. Doesn't
    descend into a node when the callback returns `false`.
    */ descendants(f) {
        this.nodesBetween(0, this.content.size, f);
    }
    /**
    Concatenates all the text nodes found in this fragment and its
    children.
    */ get textContent() {
        return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
    }
    /**
    Get all text between positions `from` and `to`. When
    `blockSeparator` is given, it will be inserted to separate text
    from different block nodes. If `leafText` is given, it'll be
    inserted for every non-text leaf node encountered, otherwise
    [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
    */ textBetween(from, to, blockSeparator, leafText) {
        return this.content.textBetween(from, to, blockSeparator, leafText);
    }
    /**
    Returns this node's first child, or `null` if there are no
    children.
    */ get firstChild() {
        return this.content.firstChild;
    }
    /**
    Returns this node's last child, or `null` if there are no
    children.
    */ get lastChild() {
        return this.content.lastChild;
    }
    /**
    Test whether two nodes represent the same piece of document.
    */ eq(other) {
        return this == other || this.sameMarkup(other) && this.content.eq(other.content);
    }
    /**
    Compare the markup (type, attributes, and marks) of this node to
    those of another. Returns `true` if both have the same markup.
    */ sameMarkup(other) {
        return this.hasMarkup(other.type, other.attrs, other.marks);
    }
    /**
    Check whether this node's markup correspond to the given type,
    attributes, and marks.
    */ hasMarkup(type, attrs, marks) {
        return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks || Mark.none);
    }
    /**
    Create a new node with the same markup as this node, containing
    the given content (or empty, if no content is given).
    */ copy(content = null) {
        if (content == this.content) return this;
        return new Node(this.type, this.attrs, content, this.marks);
    }
    /**
    Create a copy of this node, with the given set of marks instead
    of the node's own marks.
    */ mark(marks) {
        return marks == this.marks ? this : new Node(this.type, this.attrs, this.content, marks);
    }
    /**
    Create a copy of this node with only the content between the
    given positions. If `to` is not given, it defaults to the end of
    the node.
    */ cut(from, to = this.content.size) {
        if (from == 0 && to == this.content.size) return this;
        return this.copy(this.content.cut(from, to));
    }
    /**
    Cut out the part of the document between the given positions, and
    return it as a `Slice` object.
    */ slice(from, to = this.content.size, includeParents = false) {
        if (from == to) return Slice.empty;
        let $from = this.resolve(from), $to = this.resolve(to);
        let depth = includeParents ? 0 : $from.sharedDepth(to);
        let start = $from.start(depth), node = $from.node(depth);
        let content = node.content.cut($from.pos - start, $to.pos - start);
        return new Slice(content, $from.depth - depth, $to.depth - depth);
    }
    /**
    Replace the part of the document between the given positions with
    the given slice. The slice must 'fit', meaning its open sides
    must be able to connect to the surrounding content, and its
    content nodes must be valid children for the node they are placed
    into. If any of this is violated, an error of type
    [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
    */ replace(from, to, slice) {
        return replace(this.resolve(from), this.resolve(to), slice);
    }
    /**
    Find the node directly after the given position.
    */ nodeAt(pos) {
        for(let node = this;;){
            let { index, offset } = node.content.findIndex(pos);
            node = node.maybeChild(index);
            if (!node) return null;
            if (offset == pos || node.isText) return node;
            pos -= offset + 1;
        }
    }
    /**
    Find the (direct) child node after the given offset, if any,
    and return it along with its index and offset relative to this
    node.
    */ childAfter(pos) {
        let { index, offset } = this.content.findIndex(pos);
        return {
            node: this.content.maybeChild(index),
            index,
            offset
        };
    }
    /**
    Find the (direct) child node before the given offset, if any,
    and return it along with its index and offset relative to this
    node.
    */ childBefore(pos) {
        if (pos == 0) return {
            node: null,
            index: 0,
            offset: 0
        };
        let { index, offset } = this.content.findIndex(pos);
        if (offset < pos) return {
            node: this.content.child(index),
            index,
            offset
        };
        let node = this.content.child(index - 1);
        return {
            node,
            index: index - 1,
            offset: offset - node.nodeSize
        };
    }
    /**
    Resolve the given position in the document, returning an
    [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
    */ resolve(pos) {
        return ResolvedPos.resolveCached(this, pos);
    }
    /**
    @internal
    */ resolveNoCache(pos) {
        return ResolvedPos.resolve(this, pos);
    }
    /**
    Test whether a given mark or mark type occurs in this document
    between the two given positions.
    */ rangeHasMark(from, to, type) {
        let found = false;
        if (to > from) this.nodesBetween(from, to, (node)=>{
            if (type.isInSet(node.marks)) found = true;
            return !found;
        });
        return found;
    }
    /**
    True when this is a block (non-inline node)
    */ get isBlock() {
        return this.type.isBlock;
    }
    /**
    True when this is a textblock node, a block node with inline
    content.
    */ get isTextblock() {
        return this.type.isTextblock;
    }
    /**
    True when this node allows inline content.
    */ get inlineContent() {
        return this.type.inlineContent;
    }
    /**
    True when this is an inline node (a text node or a node that can
    appear among text).
    */ get isInline() {
        return this.type.isInline;
    }
    /**
    True when this is a text node.
    */ get isText() {
        return this.type.isText;
    }
    /**
    True when this is a leaf node.
    */ get isLeaf() {
        return this.type.isLeaf;
    }
    /**
    True when this is an atom, i.e. when it does not have directly
    editable content. This is usually the same as `isLeaf`, but can
    be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
    on a node's spec (typically used when the node is displayed as
    an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
    */ get isAtom() {
        return this.type.isAtom;
    }
    /**
    Return a string representation of this node for debugging
    purposes.
    */ toString() {
        if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
        let name = this.type.name;
        if (this.content.size) name += "(" + this.content.toStringInner() + ")";
        return wrapMarks(this.marks, name);
    }
    /**
    Get the content match in this node at the given index.
    */ contentMatchAt(index) {
        let match = this.type.contentMatch.matchFragment(this.content, 0, index);
        if (!match) throw new Error("Called contentMatchAt on a node with invalid content");
        return match;
    }
    /**
    Test whether replacing the range between `from` and `to` (by
    child index) with the given replacement fragment (which defaults
    to the empty fragment) would leave the node's content valid. You
    can optionally pass `start` and `end` indices into the
    replacement fragment.
    */ canReplace(from, to, replacement = Fragment.empty, start = 0, end = replacement.childCount) {
        let one = this.contentMatchAt(from).matchFragment(replacement, start, end);
        let two = one && one.matchFragment(this.content, to);
        if (!two || !two.validEnd) return false;
        for(let i = start; i < end; i++)if (!this.type.allowsMarks(replacement.child(i).marks)) return false;
        return true;
    }
    /**
    Test whether replacing the range `from` to `to` (by index) with
    a node of the given type would leave the node's content valid.
    */ canReplaceWith(from, to, type, marks) {
        if (marks && !this.type.allowsMarks(marks)) return false;
        let start = this.contentMatchAt(from).matchType(type);
        let end = start && start.matchFragment(this.content, to);
        return end ? end.validEnd : false;
    }
    /**
    Test whether the given node's content could be appended to this
    node. If that node is empty, this will only return true if there
    is at least one node type that can appear in both nodes (to avoid
    merging completely incompatible nodes).
    */ canAppend(other) {
        if (other.content.size) return this.canReplace(this.childCount, this.childCount, other.content);
        else return this.type.compatibleContent(other.type);
    }
    /**
    Check whether this node and its descendants conform to the
    schema, and raise an exception when they do not.
    */ check() {
        this.type.checkContent(this.content);
        this.type.checkAttrs(this.attrs);
        let copy = Mark.none;
        for(let i = 0; i < this.marks.length; i++){
            let mark = this.marks[i];
            mark.type.checkAttrs(mark.attrs);
            copy = mark.addToSet(copy);
        }
        if (!Mark.sameSet(copy, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((m)=>m.type.name)}`);
        this.content.forEach((node)=>node.check());
    }
    /**
    Return a JSON-serializeable representation of this node.
    */ toJSON() {
        let obj = {
            type: this.type.name
        };
        for(let _ in this.attrs){
            obj.attrs = this.attrs;
            break;
        }
        if (this.content.size) obj.content = this.content.toJSON();
        if (this.marks.length) obj.marks = this.marks.map((n)=>n.toJSON());
        return obj;
    }
    /**
    Deserialize a node from its JSON representation.
    */ static fromJSON(schema, json) {
        if (!json) throw new RangeError("Invalid input for Node.fromJSON");
        let marks = undefined;
        if (json.marks) {
            if (!Array.isArray(json.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
            marks = json.marks.map(schema.markFromJSON);
        }
        if (json.type == "text") {
            if (typeof json.text != "string") throw new RangeError("Invalid text node in JSON");
            return schema.text(json.text, marks);
        }
        let content = Fragment.fromJSON(schema, json.content);
        let node = schema.nodeType(json.type).create(json.attrs, content, marks);
        node.type.checkAttrs(node.attrs);
        return node;
    }
}
Node.prototype.text = undefined;
class TextNode extends Node {
    /**
    @internal
    */ constructor(type, attrs, content, marks){
        super(type, attrs, null, marks);
        if (!content) throw new RangeError("Empty text nodes are not allowed");
        this.text = content;
    }
    toString() {
        if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
        return wrapMarks(this.marks, JSON.stringify(this.text));
    }
    get textContent() {
        return this.text;
    }
    textBetween(from, to) {
        return this.text.slice(from, to);
    }
    get nodeSize() {
        return this.text.length;
    }
    mark(marks) {
        return marks == this.marks ? this : new TextNode(this.type, this.attrs, this.text, marks);
    }
    withText(text) {
        if (text == this.text) return this;
        return new TextNode(this.type, this.attrs, text, this.marks);
    }
    cut(from = 0, to = this.text.length) {
        if (from == 0 && to == this.text.length) return this;
        return this.withText(this.text.slice(from, to));
    }
    eq(other) {
        return this.sameMarkup(other) && this.text == other.text;
    }
    toJSON() {
        let base = super.toJSON();
        base.text = this.text;
        return base;
    }
}
function wrapMarks(marks, str) {
    for(let i = marks.length - 1; i >= 0; i--)str = marks[i].type.name + "(" + str + ")";
    return str;
}
/**
Instances of this class represent a match state of a node type's
[content expression](https://prosemirror.net/docs/ref/#model.NodeSpec.content), and can be used to
find out whether further content matches here, and whether a given
position is a valid end of the node.
*/ class ContentMatch {
    /**
    @internal
    */ constructor(/**
    True when this match state represents a valid end of the node.
    */ validEnd){
        this.validEnd = validEnd;
        /**
        @internal
        */ this.next = [];
        /**
        @internal
        */ this.wrapCache = [];
    }
    /**
    @internal
    */ static parse(string, nodeTypes) {
        let stream = new TokenStream(string, nodeTypes);
        if (stream.next == null) return ContentMatch.empty;
        let expr = parseExpr(stream);
        if (stream.next) stream.err("Unexpected trailing text");
        let match = dfa(nfa(expr));
        checkForDeadEnds(match, stream);
        return match;
    }
    /**
    Match a node type, returning a match after that node if
    successful.
    */ matchType(type) {
        for(let i = 0; i < this.next.length; i++)if (this.next[i].type == type) return this.next[i].next;
        return null;
    }
    /**
    Try to match a fragment. Returns the resulting match when
    successful.
    */ matchFragment(frag, start = 0, end = frag.childCount) {
        let cur = this;
        for(let i = start; cur && i < end; i++)cur = cur.matchType(frag.child(i).type);
        return cur;
    }
    /**
    @internal
    */ get inlineContent() {
        return this.next.length != 0 && this.next[0].type.isInline;
    }
    /**
    Get the first matching node type at this match position that can
    be generated.
    */ get defaultType() {
        for(let i = 0; i < this.next.length; i++){
            let { type } = this.next[i];
            if (!(type.isText || type.hasRequiredAttrs())) return type;
        }
        return null;
    }
    /**
    @internal
    */ compatible(other) {
        for(let i = 0; i < this.next.length; i++)for(let j = 0; j < other.next.length; j++)if (this.next[i].type == other.next[j].type) return true;
        return false;
    }
    /**
    Try to match the given fragment, and if that fails, see if it can
    be made to match by inserting nodes in front of it. When
    successful, return a fragment of inserted nodes (which may be
    empty if nothing had to be inserted). When `toEnd` is true, only
    return a fragment if the resulting match goes to the end of the
    content expression.
    */ fillBefore(after, toEnd = false, startIndex = 0) {
        let seen = [
            this
        ];
        function search(match, types) {
            let finished = match.matchFragment(after, startIndex);
            if (finished && (!toEnd || finished.validEnd)) return Fragment.from(types.map((tp)=>tp.createAndFill()));
            for(let i = 0; i < match.next.length; i++){
                let { type, next } = match.next[i];
                if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
                    seen.push(next);
                    let found = search(next, types.concat(type));
                    if (found) return found;
                }
            }
            return null;
        }
        return search(this, []);
    }
    /**
    Find a set of wrapping node types that would allow a node of the
    given type to appear at this position. The result may be empty
    (when it fits directly) and will be null when no such wrapping
    exists.
    */ findWrapping(target) {
        for(let i = 0; i < this.wrapCache.length; i += 2)if (this.wrapCache[i] == target) return this.wrapCache[i + 1];
        let computed = this.computeWrapping(target);
        this.wrapCache.push(target, computed);
        return computed;
    }
    /**
    @internal
    */ computeWrapping(target) {
        let seen = Object.create(null), active = [
            {
                match: this,
                type: null,
                via: null
            }
        ];
        while(active.length){
            let current = active.shift(), match = current.match;
            if (match.matchType(target)) {
                let result = [];
                for(let obj = current; obj.type; obj = obj.via)result.push(obj.type);
                return result.reverse();
            }
            for(let i = 0; i < match.next.length; i++){
                let { type, next } = match.next[i];
                if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || next.validEnd)) {
                    active.push({
                        match: type.contentMatch,
                        type,
                        via: current
                    });
                    seen[type.name] = true;
                }
            }
        }
        return null;
    }
    /**
    The number of outgoing edges this node has in the finite
    automaton that describes the content expression.
    */ get edgeCount() {
        return this.next.length;
    }
    /**
    Get the _n_​th outgoing edge from this node in the finite
    automaton that describes the content expression.
    */ edge(n) {
        if (n >= this.next.length) throw new RangeError(`There's no ${n}th edge in this content match`);
        return this.next[n];
    }
    /**
    @internal
    */ toString() {
        let seen = [];
        function scan(m) {
            seen.push(m);
            for(let i = 0; i < m.next.length; i++)if (seen.indexOf(m.next[i].next) == -1) scan(m.next[i].next);
        }
        scan(this);
        return seen.map((m, i)=>{
            let out = i + (m.validEnd ? "*" : " ") + " ";
            for(let i = 0; i < m.next.length; i++)out += (i ? ", " : "") + m.next[i].type.name + "->" + seen.indexOf(m.next[i].next);
            return out;
        }).join("\n");
    }
}
/**
@internal
*/ ContentMatch.empty = new ContentMatch(true);
class TokenStream {
    constructor(string, nodeTypes){
        this.string = string;
        this.nodeTypes = nodeTypes;
        this.inline = null;
        this.pos = 0;
        this.tokens = string.split(/\s*(?=\b|\W|$)/);
        if (this.tokens[this.tokens.length - 1] == "") this.tokens.pop();
        if (this.tokens[0] == "") this.tokens.shift();
    }
    get next() {
        return this.tokens[this.pos];
    }
    eat(tok) {
        return this.next == tok && (this.pos++ || true);
    }
    err(str) {
        throw new SyntaxError(str + " (in content expression '" + this.string + "')");
    }
}
function parseExpr(stream) {
    let exprs = [];
    do {
        exprs.push(parseExprSeq(stream));
    }while (stream.eat("|"))
    return exprs.length == 1 ? exprs[0] : {
        type: "choice",
        exprs
    };
}
function parseExprSeq(stream) {
    let exprs = [];
    do {
        exprs.push(parseExprSubscript(stream));
    }while (stream.next && stream.next != ")" && stream.next != "|")
    return exprs.length == 1 ? exprs[0] : {
        type: "seq",
        exprs
    };
}
function parseExprSubscript(stream) {
    let expr = parseExprAtom(stream);
    for(;;){
        if (stream.eat("+")) expr = {
            type: "plus",
            expr
        };
        else if (stream.eat("*")) expr = {
            type: "star",
            expr
        };
        else if (stream.eat("?")) expr = {
            type: "opt",
            expr
        };
        else if (stream.eat("{")) expr = parseExprRange(stream, expr);
        else break;
    }
    return expr;
}
function parseNum(stream) {
    if (/\D/.test(stream.next)) stream.err("Expected number, got '" + stream.next + "'");
    let result = Number(stream.next);
    stream.pos++;
    return result;
}
function parseExprRange(stream, expr) {
    let min = parseNum(stream), max = min;
    if (stream.eat(",")) {
        if (stream.next != "}") max = parseNum(stream);
        else max = -1;
    }
    if (!stream.eat("}")) stream.err("Unclosed braced range");
    return {
        type: "range",
        min,
        max,
        expr
    };
}
function resolveName(stream, name) {
    let types = stream.nodeTypes, type = types[name];
    if (type) return [
        type
    ];
    let result = [];
    for(let typeName in types){
        let type = types[typeName];
        if (type.isInGroup(name)) result.push(type);
    }
    if (result.length == 0) stream.err("No node type or group '" + name + "' found");
    return result;
}
function parseExprAtom(stream) {
    if (stream.eat("(")) {
        let expr = parseExpr(stream);
        if (!stream.eat(")")) stream.err("Missing closing paren");
        return expr;
    } else if (!/\W/.test(stream.next)) {
        let exprs = resolveName(stream, stream.next).map((type)=>{
            if (stream.inline == null) stream.inline = type.isInline;
            else if (stream.inline != type.isInline) stream.err("Mixing inline and block content");
            return {
                type: "name",
                value: type
            };
        });
        stream.pos++;
        return exprs.length == 1 ? exprs[0] : {
            type: "choice",
            exprs
        };
    } else {
        stream.err("Unexpected token '" + stream.next + "'");
    }
}
// Construct an NFA from an expression as returned by the parser. The
// NFA is represented as an array of states, which are themselves
// arrays of edges, which are `{term, to}` objects. The first state is
// the entry state and the last node is the success state.
//
// Note that unlike typical NFAs, the edge ordering in this one is
// significant, in that it is used to contruct filler content when
// necessary.
function nfa(expr) {
    let nfa = [
        []
    ];
    connect(compile(expr, 0), node());
    return nfa;
    //TURBOPACK unreachable
    ;
    function node() {
        return nfa.push([]) - 1;
    }
    function edge(from, to, term) {
        let edge = {
            term,
            to
        };
        nfa[from].push(edge);
        return edge;
    }
    function connect(edges, to) {
        edges.forEach((edge)=>edge.to = to);
    }
    function compile(expr, from) {
        if (expr.type == "choice") {
            return expr.exprs.reduce((out, expr)=>out.concat(compile(expr, from)), []);
        } else if (expr.type == "seq") {
            for(let i = 0;; i++){
                let next = compile(expr.exprs[i], from);
                if (i == expr.exprs.length - 1) return next;
                connect(next, from = node());
            }
        } else if (expr.type == "star") {
            let loop = node();
            edge(from, loop);
            connect(compile(expr.expr, loop), loop);
            return [
                edge(loop)
            ];
        } else if (expr.type == "plus") {
            let loop = node();
            connect(compile(expr.expr, from), loop);
            connect(compile(expr.expr, loop), loop);
            return [
                edge(loop)
            ];
        } else if (expr.type == "opt") {
            return [
                edge(from)
            ].concat(compile(expr.expr, from));
        } else if (expr.type == "range") {
            let cur = from;
            for(let i = 0; i < expr.min; i++){
                let next = node();
                connect(compile(expr.expr, cur), next);
                cur = next;
            }
            if (expr.max == -1) {
                connect(compile(expr.expr, cur), cur);
            } else {
                for(let i = expr.min; i < expr.max; i++){
                    let next = node();
                    edge(cur, next);
                    connect(compile(expr.expr, cur), next);
                    cur = next;
                }
            }
            return [
                edge(cur)
            ];
        } else if (expr.type == "name") {
            return [
                edge(from, undefined, expr.value)
            ];
        } else {
            throw new Error("Unknown expr type");
        }
    }
}
function cmp(a, b) {
    return b - a;
}
// Get the set of nodes reachable by null edges from `node`. Omit
// nodes with only a single null-out-edge, since they may lead to
// needless duplicated nodes.
function nullFrom(nfa, node) {
    let result = [];
    scan(node);
    return result.sort(cmp);
    //TURBOPACK unreachable
    ;
    function scan(node) {
        let edges = nfa[node];
        if (edges.length == 1 && !edges[0].term) return scan(edges[0].to);
        result.push(node);
        for(let i = 0; i < edges.length; i++){
            let { term, to } = edges[i];
            if (!term && result.indexOf(to) == -1) scan(to);
        }
    }
}
// Compiles an NFA as produced by `nfa` into a DFA, modeled as a set
// of state objects (`ContentMatch` instances) with transitions
// between them.
function dfa(nfa) {
    let labeled = Object.create(null);
    return explore(nullFrom(nfa, 0));
    //TURBOPACK unreachable
    ;
    function explore(states) {
        let out = [];
        states.forEach((node)=>{
            nfa[node].forEach(({ term, to })=>{
                if (!term) return;
                let set;
                for(let i = 0; i < out.length; i++)if (out[i][0] == term) set = out[i][1];
                nullFrom(nfa, to).forEach((node)=>{
                    if (!set) out.push([
                        term,
                        set = []
                    ]);
                    if (set.indexOf(node) == -1) set.push(node);
                });
            });
        });
        let state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa.length - 1) > -1);
        for(let i = 0; i < out.length; i++){
            let states = out[i][1].sort(cmp);
            state.next.push({
                type: out[i][0],
                next: labeled[states.join(",")] || explore(states)
            });
        }
        return state;
    }
}
function checkForDeadEnds(match, stream) {
    for(let i = 0, work = [
        match
    ]; i < work.length; i++){
        let state = work[i], dead = !state.validEnd, nodes = [];
        for(let j = 0; j < state.next.length; j++){
            let { type, next } = state.next[j];
            nodes.push(type.name);
            if (dead && !(type.isText || type.hasRequiredAttrs())) dead = false;
            if (work.indexOf(next) == -1) work.push(next);
        }
        if (dead) stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
    }
}
// For node types where all attrs have a default value (or which don't
// have any attributes), build up a single reusable default attribute
// object, and use it for all nodes that don't specify specific
// attributes.
function defaultAttrs(attrs) {
    let defaults = Object.create(null);
    for(let attrName in attrs){
        let attr = attrs[attrName];
        if (!attr.hasDefault) return null;
        defaults[attrName] = attr.default;
    }
    return defaults;
}
function computeAttrs(attrs, value) {
    let built = Object.create(null);
    for(let name in attrs){
        let given = value && value[name];
        if (given === undefined) {
            let attr = attrs[name];
            if (attr.hasDefault) given = attr.default;
            else throw new RangeError("No value supplied for attribute " + name);
        }
        built[name] = given;
    }
    return built;
}
function checkAttrs(attrs, values, type, name) {
    for(let attr in values)if (!(attr in attrs)) throw new RangeError(`Unsupported attribute ${attr} for ${type} of type ${name}`);
    for(let attr in attrs){
        if (attrs[attr].validate) attrs[attr].validate(values[attr]);
    }
}
function initAttrs(typeName, attrs) {
    let result = Object.create(null);
    if (attrs) for(let name in attrs)result[name] = new Attribute(typeName, name, attrs[name]);
    return result;
}
/**
Node types are objects allocated once per `Schema` and used to
[tag](https://prosemirror.net/docs/ref/#model.Node.type) `Node` instances. They contain information
about the node type, such as its name and what kind of node it
represents.
*/ class NodeType {
    /**
    @internal
    */ constructor(/**
    The name the node type has in this schema.
    */ name, /**
    A link back to the `Schema` the node type belongs to.
    */ schema, /**
    The spec that this type is based on
    */ spec){
        this.name = name;
        this.schema = schema;
        this.spec = spec;
        /**
        The set of marks allowed in this node. `null` means all marks
        are allowed.
        */ this.markSet = null;
        this.groups = spec.group ? spec.group.split(" ") : [];
        this.attrs = initAttrs(name, spec.attrs);
        this.defaultAttrs = defaultAttrs(this.attrs);
        this.contentMatch = null;
        this.inlineContent = null;
        this.isBlock = !(spec.inline || name == "text");
        this.isText = name == "text";
    }
    /**
    True if this is an inline type.
    */ get isInline() {
        return !this.isBlock;
    }
    /**
    True if this is a textblock type, a block that contains inline
    content.
    */ get isTextblock() {
        return this.isBlock && this.inlineContent;
    }
    /**
    True for node types that allow no content.
    */ get isLeaf() {
        return this.contentMatch == ContentMatch.empty;
    }
    /**
    True when this node is an atom, i.e. when it does not have
    directly editable content.
    */ get isAtom() {
        return this.isLeaf || !!this.spec.atom;
    }
    /**
    Return true when this node type is part of the given
    [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
    */ isInGroup(group) {
        return this.groups.indexOf(group) > -1;
    }
    /**
    The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
    */ get whitespace() {
        return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
    }
    /**
    Tells you whether this node type has any required attributes.
    */ hasRequiredAttrs() {
        for(let n in this.attrs)if (this.attrs[n].isRequired) return true;
        return false;
    }
    /**
    Indicates whether this node allows some of the same content as
    the given node type.
    */ compatibleContent(other) {
        return this == other || this.contentMatch.compatible(other.contentMatch);
    }
    /**
    @internal
    */ computeAttrs(attrs) {
        if (!attrs && this.defaultAttrs) return this.defaultAttrs;
        else return computeAttrs(this.attrs, attrs);
    }
    /**
    Create a `Node` of this type. The given attributes are
    checked and defaulted (you can pass `null` to use the type's
    defaults entirely, if no required attributes exist). `content`
    may be a `Fragment`, a node, an array of nodes, or
    `null`. Similarly `marks` may be `null` to default to the empty
    set of marks.
    */ create(attrs = null, content, marks) {
        if (this.isText) throw new Error("NodeType.create can't construct text nodes");
        return new Node(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks));
    }
    /**
    Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
    against the node type's content restrictions, and throw an error
    if it doesn't match.
    */ createChecked(attrs = null, content, marks) {
        content = Fragment.from(content);
        this.checkContent(content);
        return new Node(this, this.computeAttrs(attrs), content, Mark.setFrom(marks));
    }
    /**
    Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
    necessary to add nodes to the start or end of the given fragment
    to make it fit the node. If no fitting wrapping can be found,
    return null. Note that, due to the fact that required nodes can
    always be created, this will always succeed if you pass null or
    `Fragment.empty` as content.
    */ createAndFill(attrs = null, content, marks) {
        attrs = this.computeAttrs(attrs);
        content = Fragment.from(content);
        if (content.size) {
            let before = this.contentMatch.fillBefore(content);
            if (!before) return null;
            content = before.append(content);
        }
        let matched = this.contentMatch.matchFragment(content);
        let after = matched && matched.fillBefore(Fragment.empty, true);
        if (!after) return null;
        return new Node(this, attrs, content.append(after), Mark.setFrom(marks));
    }
    /**
    Returns true if the given fragment is valid content for this node
    type.
    */ validContent(content) {
        let result = this.contentMatch.matchFragment(content);
        if (!result || !result.validEnd) return false;
        for(let i = 0; i < content.childCount; i++)if (!this.allowsMarks(content.child(i).marks)) return false;
        return true;
    }
    /**
    Throws a RangeError if the given fragment is not valid content for this
    node type.
    @internal
    */ checkContent(content) {
        if (!this.validContent(content)) throw new RangeError(`Invalid content for node ${this.name}: ${content.toString().slice(0, 50)}`);
    }
    /**
    @internal
    */ checkAttrs(attrs) {
        checkAttrs(this.attrs, attrs, "node", this.name);
    }
    /**
    Check whether the given mark type is allowed in this node.
    */ allowsMarkType(markType) {
        return this.markSet == null || this.markSet.indexOf(markType) > -1;
    }
    /**
    Test whether the given set of marks are allowed in this node.
    */ allowsMarks(marks) {
        if (this.markSet == null) return true;
        for(let i = 0; i < marks.length; i++)if (!this.allowsMarkType(marks[i].type)) return false;
        return true;
    }
    /**
    Removes the marks that are not allowed in this node from the given set.
    */ allowedMarks(marks) {
        if (this.markSet == null) return marks;
        let copy;
        for(let i = 0; i < marks.length; i++){
            if (!this.allowsMarkType(marks[i].type)) {
                if (!copy) copy = marks.slice(0, i);
            } else if (copy) {
                copy.push(marks[i]);
            }
        }
        return !copy ? marks : copy.length ? copy : Mark.none;
    }
    /**
    @internal
    */ static compile(nodes, schema) {
        let result = Object.create(null);
        nodes.forEach((name, spec)=>result[name] = new NodeType(name, schema, spec));
        let topType = schema.spec.topNode || "doc";
        if (!result[topType]) throw new RangeError("Schema is missing its top node type ('" + topType + "')");
        if (!result.text) throw new RangeError("Every schema needs a 'text' type");
        for(let _ in result.text.attrs)throw new RangeError("The text node type should not have attributes");
        return result;
    }
}
function validateType(typeName, attrName, type) {
    let types = type.split("|");
    return (value)=>{
        let name = value === null ? "null" : typeof value;
        if (types.indexOf(name) < 0) throw new RangeError(`Expected value of type ${types} for attribute ${attrName} on type ${typeName}, got ${name}`);
    };
}
// Attribute descriptors
class Attribute {
    constructor(typeName, attrName, options){
        this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
        this.default = options.default;
        this.validate = typeof options.validate == "string" ? validateType(typeName, attrName, options.validate) : options.validate;
    }
    get isRequired() {
        return !this.hasDefault;
    }
}
// Marks
/**
Like nodes, marks (which are associated with nodes to signify
things like emphasis or being part of a link) are
[tagged](https://prosemirror.net/docs/ref/#model.Mark.type) with type objects, which are
instantiated once per `Schema`.
*/ class MarkType {
    /**
    @internal
    */ constructor(/**
    The name of the mark type.
    */ name, /**
    @internal
    */ rank, /**
    The schema that this mark type instance is part of.
    */ schema, /**
    The spec on which the type is based.
    */ spec){
        this.name = name;
        this.rank = rank;
        this.schema = schema;
        this.spec = spec;
        this.attrs = initAttrs(name, spec.attrs);
        this.excluded = null;
        let defaults = defaultAttrs(this.attrs);
        this.instance = defaults ? new Mark(this, defaults) : null;
    }
    /**
    Create a mark of this type. `attrs` may be `null` or an object
    containing only some of the mark's attributes. The others, if
    they have defaults, will be added.
    */ create(attrs = null) {
        if (!attrs && this.instance) return this.instance;
        return new Mark(this, computeAttrs(this.attrs, attrs));
    }
    /**
    @internal
    */ static compile(marks, schema) {
        let result = Object.create(null), rank = 0;
        marks.forEach((name, spec)=>result[name] = new MarkType(name, rank++, schema, spec));
        return result;
    }
    /**
    When there is a mark of this type in the given set, a new set
    without it is returned. Otherwise, the input set is returned.
    */ removeFromSet(set) {
        for(var i = 0; i < set.length; i++)if (set[i].type == this) {
            set = set.slice(0, i).concat(set.slice(i + 1));
            i--;
        }
        return set;
    }
    /**
    Tests whether there is a mark of this type in the given set.
    */ isInSet(set) {
        for(let i = 0; i < set.length; i++)if (set[i].type == this) return set[i];
    }
    /**
    @internal
    */ checkAttrs(attrs) {
        checkAttrs(this.attrs, attrs, "mark", this.name);
    }
    /**
    Queries whether a given mark type is
    [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
    */ excludes(other) {
        return this.excluded.indexOf(other) > -1;
    }
}
/**
A document schema. Holds [node](https://prosemirror.net/docs/ref/#model.NodeType) and [mark
type](https://prosemirror.net/docs/ref/#model.MarkType) objects for the nodes and marks that may
occur in conforming documents, and provides functionality for
creating and deserializing such documents.

When given, the type parameters provide the names of the nodes and
marks in this schema.
*/ class Schema {
    /**
    Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
    */ constructor(spec){
        /**
        The [linebreak
        replacement](https://prosemirror.net/docs/ref/#model.NodeSpec.linebreakReplacement) node defined
        in this schema, if any.
        */ this.linebreakReplacement = null;
        /**
        An object for storing whatever values modules may want to
        compute and cache per schema. (If you want to store something
        in it, try to use property names unlikely to clash.)
        */ this.cached = Object.create(null);
        let instanceSpec = this.spec = {};
        for(let prop in spec)instanceSpec[prop] = spec[prop];
        instanceSpec.nodes = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$orderedmap$40$2$2e$1$2e$1$2f$node_modules$2f$orderedmap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(spec.nodes), instanceSpec.marks = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$orderedmap$40$2$2e$1$2e$1$2f$node_modules$2f$orderedmap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(spec.marks || {}), this.nodes = NodeType.compile(this.spec.nodes, this);
        this.marks = MarkType.compile(this.spec.marks, this);
        let contentExprCache = Object.create(null);
        for(let prop in this.nodes){
            if (prop in this.marks) throw new RangeError(prop + " can not be both a node and a mark");
            let type = this.nodes[prop], contentExpr = type.spec.content || "", markExpr = type.spec.marks;
            type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
            type.inlineContent = type.contentMatch.inlineContent;
            if (type.spec.linebreakReplacement) {
                if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
                if (!type.isInline || !type.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
                this.linebreakReplacement = type;
            }
            type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
        }
        for(let prop in this.marks){
            let type = this.marks[prop], excl = type.spec.excludes;
            type.excluded = excl == null ? [
                type
            ] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
        }
        this.nodeFromJSON = (json)=>Node.fromJSON(this, json);
        this.markFromJSON = (json)=>Mark.fromJSON(this, json);
        this.topNodeType = this.nodes[this.spec.topNode || "doc"];
        this.cached.wrappings = Object.create(null);
    }
    /**
    Create a node in this schema. The `type` may be a string or a
    `NodeType` instance. Attributes will be extended with defaults,
    `content` may be a `Fragment`, `null`, a `Node`, or an array of
    nodes.
    */ node(type, attrs = null, content, marks) {
        if (typeof type == "string") type = this.nodeType(type);
        else if (!(type instanceof NodeType)) throw new RangeError("Invalid node type: " + type);
        else if (type.schema != this) throw new RangeError("Node type from different schema used (" + type.name + ")");
        return type.createChecked(attrs, content, marks);
    }
    /**
    Create a text node in the schema. Empty text nodes are not
    allowed.
    */ text(text, marks) {
        let type = this.nodes.text;
        return new TextNode(type, type.defaultAttrs, text, Mark.setFrom(marks));
    }
    /**
    Create a mark with the given type and attributes.
    */ mark(type, attrs) {
        if (typeof type == "string") type = this.marks[type];
        return type.create(attrs);
    }
    /**
    @internal
    */ nodeType(name) {
        let found = this.nodes[name];
        if (!found) throw new RangeError("Unknown node type: " + name);
        return found;
    }
}
function gatherMarks(schema, marks) {
    let found = [];
    for(let i = 0; i < marks.length; i++){
        let name = marks[i], mark = schema.marks[name], ok = mark;
        if (mark) {
            found.push(mark);
        } else {
            for(let prop in schema.marks){
                let mark = schema.marks[prop];
                if (name == "_" || mark.spec.group && mark.spec.group.split(" ").indexOf(name) > -1) found.push(ok = mark);
            }
        }
        if (!ok) throw new SyntaxError("Unknown mark type: '" + marks[i] + "'");
    }
    return found;
}
function isTagRule(rule) {
    return rule.tag != null;
}
function isStyleRule(rule) {
    return rule.style != null;
}
/**
A DOM parser represents a strategy for parsing DOM content into a
ProseMirror document conforming to a given schema. Its behavior is
defined by an array of [rules](https://prosemirror.net/docs/ref/#model.ParseRule).
*/ class DOMParser {
    /**
    Create a parser that targets the given schema, using the given
    parsing rules.
    */ constructor(/**
    The schema into which the parser parses.
    */ schema, /**
    The set of [parse rules](https://prosemirror.net/docs/ref/#model.ParseRule) that the parser
    uses, in order of precedence.
    */ rules){
        this.schema = schema;
        this.rules = rules;
        /**
        @internal
        */ this.tags = [];
        /**
        @internal
        */ this.styles = [];
        let matchedStyles = this.matchedStyles = [];
        rules.forEach((rule)=>{
            if (isTagRule(rule)) {
                this.tags.push(rule);
            } else if (isStyleRule(rule)) {
                let prop = /[^=]*/.exec(rule.style)[0];
                if (matchedStyles.indexOf(prop) < 0) matchedStyles.push(prop);
                this.styles.push(rule);
            }
        });
        // Only normalize list elements when lists in the schema can't directly contain themselves
        this.normalizeLists = !this.tags.some((r)=>{
            if (!/^(ul|ol)\b/.test(r.tag) || !r.node) return false;
            let node = schema.nodes[r.node];
            return node.contentMatch.matchType(node);
        });
    }
    /**
    Parse a document from the content of a DOM node.
    */ parse(dom, options = {}) {
        let context = new ParseContext(this, options, false);
        context.addAll(dom, Mark.none, options.from, options.to);
        return context.finish();
    }
    /**
    Parses the content of the given DOM node, like
    [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
    options. But unlike that method, which produces a whole node,
    this one returns a slice that is open at the sides, meaning that
    the schema constraints aren't applied to the start of nodes to
    the left of the input and the end of nodes at the end.
    */ parseSlice(dom, options = {}) {
        let context = new ParseContext(this, options, true);
        context.addAll(dom, Mark.none, options.from, options.to);
        return Slice.maxOpen(context.finish());
    }
    /**
    @internal
    */ matchTag(dom, context, after) {
        for(let i = after ? this.tags.indexOf(after) + 1 : 0; i < this.tags.length; i++){
            let rule = this.tags[i];
            if (matches(dom, rule.tag) && (rule.namespace === undefined || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
                if (rule.getAttrs) {
                    let result = rule.getAttrs(dom);
                    if (result === false) continue;
                    rule.attrs = result || undefined;
                }
                return rule;
            }
        }
    }
    /**
    @internal
    */ matchStyle(prop, value, context, after) {
        for(let i = after ? this.styles.indexOf(after) + 1 : 0; i < this.styles.length; i++){
            let rule = this.styles[i], style = rule.style;
            if (style.indexOf(prop) != 0 || rule.context && !context.matchesContext(rule.context) || // Test that the style string either precisely matches the prop,
            // or has an '=' sign after the prop, followed by the given
            // value.
            style.length > prop.length && (style.charCodeAt(prop.length) != 61 || style.slice(prop.length + 1) != value)) continue;
            if (rule.getAttrs) {
                let result = rule.getAttrs(value);
                if (result === false) continue;
                rule.attrs = result || undefined;
            }
            return rule;
        }
    }
    /**
    @internal
    */ static schemaRules(schema) {
        let result = [];
        function insert(rule) {
            let priority = rule.priority == null ? 50 : rule.priority, i = 0;
            for(; i < result.length; i++){
                let next = result[i], nextPriority = next.priority == null ? 50 : next.priority;
                if (nextPriority < priority) break;
            }
            result.splice(i, 0, rule);
        }
        for(let name in schema.marks){
            let rules = schema.marks[name].spec.parseDOM;
            if (rules) rules.forEach((rule)=>{
                insert(rule = copy(rule));
                if (!(rule.mark || rule.ignore || rule.clearMark)) rule.mark = name;
            });
        }
        for(let name in schema.nodes){
            let rules = schema.nodes[name].spec.parseDOM;
            if (rules) rules.forEach((rule)=>{
                insert(rule = copy(rule));
                if (!(rule.node || rule.ignore || rule.mark)) rule.node = name;
            });
        }
        return result;
    }
    /**
    Construct a DOM parser using the parsing rules listed in a
    schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
    [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
    */ static fromSchema(schema) {
        return schema.cached.domParser || (schema.cached.domParser = new DOMParser(schema, DOMParser.schemaRules(schema)));
    }
}
const blockTags = {
    address: true,
    article: true,
    aside: true,
    blockquote: true,
    body: true,
    canvas: true,
    dd: true,
    div: true,
    dl: true,
    fieldset: true,
    figcaption: true,
    figure: true,
    footer: true,
    form: true,
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    h5: true,
    h6: true,
    header: true,
    hgroup: true,
    hr: true,
    li: true,
    noscript: true,
    ol: true,
    output: true,
    p: true,
    pre: true,
    section: true,
    table: true,
    tfoot: true,
    ul: true
};
const ignoreTags = {
    head: true,
    noscript: true,
    object: true,
    script: true,
    style: true,
    title: true
};
const listTags = {
    ol: true,
    ul: true
};
// Using a bitfield for node context options
const OPT_PRESERVE_WS = 1, OPT_PRESERVE_WS_FULL = 2, OPT_OPEN_LEFT = 4;
function wsOptionsFor(type, preserveWhitespace, base) {
    if (preserveWhitespace != null) return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
    return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base & ~OPT_OPEN_LEFT;
}
class NodeContext {
    constructor(type, attrs, marks, solid, match, options){
        this.type = type;
        this.attrs = attrs;
        this.marks = marks;
        this.solid = solid;
        this.options = options;
        this.content = [];
        // Marks applied to the node's children
        this.activeMarks = Mark.none;
        this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
    }
    findWrapping(node) {
        if (!this.match) {
            if (!this.type) return [];
            let fill = this.type.contentMatch.fillBefore(Fragment.from(node));
            if (fill) {
                this.match = this.type.contentMatch.matchFragment(fill);
            } else {
                let start = this.type.contentMatch, wrap;
                if (wrap = start.findWrapping(node.type)) {
                    this.match = start;
                    return wrap;
                } else {
                    return null;
                }
            }
        }
        return this.match.findWrapping(node.type);
    }
    finish(openEnd) {
        if (!(this.options & OPT_PRESERVE_WS)) {
            let last = this.content[this.content.length - 1], m;
            if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
                let text = last;
                if (last.text.length == m[0].length) this.content.pop();
                else this.content[this.content.length - 1] = text.withText(text.text.slice(0, text.text.length - m[0].length));
            }
        }
        let content = Fragment.from(this.content);
        if (!openEnd && this.match) content = content.append(this.match.fillBefore(Fragment.empty, true));
        return this.type ? this.type.create(this.attrs, content, this.marks) : content;
    }
    inlineContext(node) {
        if (this.type) return this.type.inlineContent;
        if (this.content.length) return this.content[0].isInline;
        return node.parentNode && !blockTags.hasOwnProperty(node.parentNode.nodeName.toLowerCase());
    }
}
class ParseContext {
    constructor(// The parser we are using.
    parser, // The options passed to this parse.
    options, isOpen){
        this.parser = parser;
        this.options = options;
        this.isOpen = isOpen;
        this.open = 0;
        this.localPreserveWS = false;
        let topNode = options.topNode, topContext;
        let topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (isOpen ? OPT_OPEN_LEFT : 0);
        if (topNode) topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, true, options.topMatch || topNode.type.contentMatch, topOptions);
        else if (isOpen) topContext = new NodeContext(null, null, Mark.none, true, null, topOptions);
        else topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, true, null, topOptions);
        this.nodes = [
            topContext
        ];
        this.find = options.findPositions;
        this.needsBlock = false;
    }
    get top() {
        return this.nodes[this.open];
    }
    // Add a DOM node to the content. Text is inserted as text node,
    // otherwise, the node is passed to `addElement` or, if it has a
    // `style` attribute, `addElementWithStyles`.
    addDOM(dom, marks) {
        if (dom.nodeType == 3) this.addTextNode(dom, marks);
        else if (dom.nodeType == 1) this.addElement(dom, marks);
    }
    addTextNode(dom, marks) {
        let value = dom.nodeValue;
        let top = this.top, preserveWS = top.options & OPT_PRESERVE_WS_FULL ? "full" : this.localPreserveWS || (top.options & OPT_PRESERVE_WS) > 0;
        let { schema } = this.parser;
        if (preserveWS === "full" || top.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value)) {
            if (!preserveWS) {
                value = value.replace(/[ \t\r\n\u000c]+/g, " ");
                // If this starts with whitespace, and there is no node before it, or
                // a hard break, or a text node that ends with whitespace, strip the
                // leading space.
                if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
                    let nodeBefore = top.content[top.content.length - 1];
                    let domNodeBefore = dom.previousSibling;
                    if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == 'BR' || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text)) value = value.slice(1);
                }
            } else if (preserveWS === "full") {
                value = value.replace(/\r\n?/g, "\n");
            } else if (schema.linebreakReplacement && /[\r\n]/.test(value) && this.top.findWrapping(schema.linebreakReplacement.create())) {
                let lines = value.split(/\r?\n|\r/);
                for(let i = 0; i < lines.length; i++){
                    if (i) this.insertNode(schema.linebreakReplacement.create(), marks, true);
                    if (lines[i]) this.insertNode(schema.text(lines[i]), marks, !/\S/.test(lines[i]));
                }
                value = "";
            } else {
                value = value.replace(/\r?\n|\r/g, " ");
            }
            if (value) this.insertNode(schema.text(value), marks, !/\S/.test(value));
            this.findInText(dom);
        } else {
            this.findInside(dom);
        }
    }
    // Try to find a handler for the given tag and use that to parse. If
    // none is found, the element's content nodes are added directly.
    addElement(dom, marks, matchAfter) {
        let outerWS = this.localPreserveWS, top = this.top;
        if (dom.tagName == "PRE" || /pre/.test(dom.style && dom.style.whiteSpace)) this.localPreserveWS = true;
        let name = dom.nodeName.toLowerCase(), ruleID;
        if (listTags.hasOwnProperty(name) && this.parser.normalizeLists) normalizeList(dom);
        let rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));
        out: if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
            this.findInside(dom);
            this.ignoreFallback(dom, marks);
        } else if (!rule || rule.skip || rule.closeParent) {
            if (rule && rule.closeParent) this.open = Math.max(0, this.open - 1);
            else if (rule && rule.skip.nodeType) dom = rule.skip;
            let sync, oldNeedsBlock = this.needsBlock;
            if (blockTags.hasOwnProperty(name)) {
                if (top.content.length && top.content[0].isInline && this.open) {
                    this.open--;
                    top = this.top;
                }
                sync = true;
                if (!top.type) this.needsBlock = true;
            } else if (!dom.firstChild) {
                this.leafFallback(dom, marks);
                break out;
            }
            let innerMarks = rule && rule.skip ? marks : this.readStyles(dom, marks);
            if (innerMarks) this.addAll(dom, innerMarks);
            if (sync) this.sync(top);
            this.needsBlock = oldNeedsBlock;
        } else {
            let innerMarks = this.readStyles(dom, marks);
            if (innerMarks) this.addElementByRule(dom, rule, innerMarks, rule.consuming === false ? ruleID : undefined);
        }
        this.localPreserveWS = outerWS;
    }
    // Called for leaf DOM nodes that would otherwise be ignored
    leafFallback(dom, marks) {
        if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent) this.addTextNode(dom.ownerDocument.createTextNode("\n"), marks);
    }
    // Called for ignored nodes
    ignoreFallback(dom, marks) {
        // Ignored BR nodes should at least create an inline context
        if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent)) this.findPlace(this.parser.schema.text("-"), marks, true);
    }
    // Run any style parser associated with the node's styles. Either
    // return an updated array of marks, or null to indicate some of the
    // styles had a rule with `ignore` set.
    readStyles(dom, marks) {
        let styles = dom.style;
        // Because many properties will only show up in 'normalized' form
        // in `style.item` (i.e. text-decoration becomes
        // text-decoration-line, text-decoration-color, etc), we directly
        // query the styles mentioned in our rules instead of iterating
        // over the items.
        if (styles && styles.length) for(let i = 0; i < this.parser.matchedStyles.length; i++){
            let name = this.parser.matchedStyles[i], value = styles.getPropertyValue(name);
            if (value) for(let after = undefined;;){
                let rule = this.parser.matchStyle(name, value, this, after);
                if (!rule) break;
                if (rule.ignore) return null;
                if (rule.clearMark) marks = marks.filter((m)=>!rule.clearMark(m));
                else marks = marks.concat(this.parser.schema.marks[rule.mark].create(rule.attrs));
                if (rule.consuming === false) after = rule;
                else break;
            }
        }
        return marks;
    }
    // Look up a handler for the given node. If none are found, return
    // false. Otherwise, apply it, use its return value to drive the way
    // the node's content is wrapped, and return true.
    addElementByRule(dom, rule, marks, continueAfter) {
        let sync, nodeType;
        if (rule.node) {
            nodeType = this.parser.schema.nodes[rule.node];
            if (!nodeType.isLeaf) {
                let inner = this.enter(nodeType, rule.attrs || null, marks, rule.preserveWhitespace);
                if (inner) {
                    sync = true;
                    marks = inner;
                }
            } else if (!this.insertNode(nodeType.create(rule.attrs), marks, dom.nodeName == "BR")) {
                this.leafFallback(dom, marks);
            }
        } else {
            let markType = this.parser.schema.marks[rule.mark];
            marks = marks.concat(markType.create(rule.attrs));
        }
        let startIn = this.top;
        if (nodeType && nodeType.isLeaf) {
            this.findInside(dom);
        } else if (continueAfter) {
            this.addElement(dom, marks, continueAfter);
        } else if (rule.getContent) {
            this.findInside(dom);
            rule.getContent(dom, this.parser.schema).forEach((node)=>this.insertNode(node, marks, false));
        } else {
            let contentDOM = dom;
            if (typeof rule.contentElement == "string") contentDOM = dom.querySelector(rule.contentElement);
            else if (typeof rule.contentElement == "function") contentDOM = rule.contentElement(dom);
            else if (rule.contentElement) contentDOM = rule.contentElement;
            this.findAround(dom, contentDOM, true);
            this.addAll(contentDOM, marks);
            this.findAround(dom, contentDOM, false);
        }
        if (sync && this.sync(startIn)) this.open--;
    }
    // Add all child nodes between `startIndex` and `endIndex` (or the
    // whole node, if not given). If `sync` is passed, use it to
    // synchronize after every block element.
    addAll(parent, marks, startIndex, endIndex) {
        let index = startIndex || 0;
        for(let dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end = endIndex == null ? null : parent.childNodes[endIndex]; dom != end; dom = dom.nextSibling, ++index){
            this.findAtPoint(parent, index);
            this.addDOM(dom, marks);
        }
        this.findAtPoint(parent, index);
    }
    // Try to find a way to fit the given node type into the current
    // context. May add intermediate wrappers and/or leave non-solid
    // nodes that we're in.
    findPlace(node, marks, cautious) {
        let route, sync;
        for(let depth = this.open, penalty = 0; depth >= 0; depth--){
            let cx = this.nodes[depth];
            let found = cx.findWrapping(node);
            if (found && (!route || route.length > found.length + penalty)) {
                route = found;
                sync = cx;
                if (!found.length) break;
            }
            if (cx.solid) {
                if (cautious) break;
                penalty += 2;
            }
        }
        if (!route) return null;
        this.sync(sync);
        for(let i = 0; i < route.length; i++)marks = this.enterInner(route[i], null, marks, false);
        return marks;
    }
    // Try to insert the given node, adjusting the context when needed.
    insertNode(node, marks, cautious) {
        if (node.isInline && this.needsBlock && !this.top.type) {
            let block = this.textblockFromContext();
            if (block) marks = this.enterInner(block, null, marks);
        }
        let innerMarks = this.findPlace(node, marks, cautious);
        if (innerMarks) {
            this.closeExtra();
            let top = this.top;
            if (top.match) top.match = top.match.matchType(node.type);
            let nodeMarks = Mark.none;
            for (let m of innerMarks.concat(node.marks))if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, node.type)) nodeMarks = m.addToSet(nodeMarks);
            top.content.push(node.mark(nodeMarks));
            return true;
        }
        return false;
    }
    // Try to start a node of the given type, adjusting the context when
    // necessary.
    enter(type, attrs, marks, preserveWS) {
        let innerMarks = this.findPlace(type.create(attrs), marks, false);
        if (innerMarks) innerMarks = this.enterInner(type, attrs, marks, true, preserveWS);
        return innerMarks;
    }
    // Open a node of the given type
    enterInner(type, attrs, marks, solid = false, preserveWS) {
        this.closeExtra();
        let top = this.top;
        top.match = top.match && top.match.matchType(type);
        let options = wsOptionsFor(type, preserveWS, top.options);
        if (top.options & OPT_OPEN_LEFT && top.content.length == 0) options |= OPT_OPEN_LEFT;
        let applyMarks = Mark.none;
        marks = marks.filter((m)=>{
            if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, type)) {
                applyMarks = m.addToSet(applyMarks);
                return false;
            }
            return true;
        });
        this.nodes.push(new NodeContext(type, attrs, applyMarks, solid, null, options));
        this.open++;
        return marks;
    }
    // Make sure all nodes above this.open are finished and added to
    // their parents
    closeExtra(openEnd = false) {
        let i = this.nodes.length - 1;
        if (i > this.open) {
            for(; i > this.open; i--)this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
            this.nodes.length = this.open + 1;
        }
    }
    finish() {
        this.open = 0;
        this.closeExtra(this.isOpen);
        return this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
    }
    sync(to) {
        for(let i = this.open; i >= 0; i--){
            if (this.nodes[i] == to) {
                this.open = i;
                return true;
            } else if (this.localPreserveWS) {
                this.nodes[i].options |= OPT_PRESERVE_WS;
            }
        }
        return false;
    }
    get currentPos() {
        this.closeExtra();
        let pos = 0;
        for(let i = this.open; i >= 0; i--){
            let content = this.nodes[i].content;
            for(let j = content.length - 1; j >= 0; j--)pos += content[j].nodeSize;
            if (i) pos++;
        }
        return pos;
    }
    findAtPoint(parent, offset) {
        if (this.find) for(let i = 0; i < this.find.length; i++){
            if (this.find[i].node == parent && this.find[i].offset == offset) this.find[i].pos = this.currentPos;
        }
    }
    findInside(parent) {
        if (this.find) for(let i = 0; i < this.find.length; i++){
            if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) this.find[i].pos = this.currentPos;
        }
    }
    findAround(parent, content, before) {
        if (parent != content && this.find) for(let i = 0; i < this.find.length; i++){
            if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
                let pos = content.compareDocumentPosition(this.find[i].node);
                if (pos & (before ? 2 : 4)) this.find[i].pos = this.currentPos;
            }
        }
    }
    findInText(textNode) {
        if (this.find) for(let i = 0; i < this.find.length; i++){
            if (this.find[i].node == textNode) this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
        }
    }
    // Determines whether the given context string matches this context.
    matchesContext(context) {
        if (context.indexOf("|") > -1) return context.split(/\s*\|\s*/).some(this.matchesContext, this);
        let parts = context.split("/");
        let option = this.options.context;
        let useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
        let minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
        let match = (i, depth)=>{
            for(; i >= 0; i--){
                let part = parts[i];
                if (part == "") {
                    if (i == parts.length - 1 || i == 0) continue;
                    for(; depth >= minDepth; depth--)if (match(i - 1, depth)) return true;
                    return false;
                } else {
                    let next = depth > 0 || depth == 0 && useRoot ? this.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
                    if (!next || next.name != part && !next.isInGroup(part)) return false;
                    depth--;
                }
            }
            return true;
        };
        return match(parts.length - 1, this.open);
    }
    textblockFromContext() {
        let $context = this.options.context;
        if ($context) for(let d = $context.depth; d >= 0; d--){
            let deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
            if (deflt && deflt.isTextblock && deflt.defaultAttrs) return deflt;
        }
        for(let name in this.parser.schema.nodes){
            let type = this.parser.schema.nodes[name];
            if (type.isTextblock && type.defaultAttrs) return type;
        }
    }
}
// Kludge to work around directly nested list nodes produced by some
// tools and allowed by browsers to mean that the nested list is
// actually part of the list item above it.
function normalizeList(dom) {
    for(let child = dom.firstChild, prevItem = null; child; child = child.nextSibling){
        let name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
        if (name && listTags.hasOwnProperty(name) && prevItem) {
            prevItem.appendChild(child);
            child = prevItem;
        } else if (name == "li") {
            prevItem = child;
        } else if (name) {
            prevItem = null;
        }
    }
}
// Apply a CSS selector.
function matches(dom, selector) {
    return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
}
function copy(obj) {
    let copy = {};
    for(let prop in obj)copy[prop] = obj[prop];
    return copy;
}
// Used when finding a mark at the top level of a fragment parse.
// Checks whether it would be reasonable to apply a given mark type to
// a given node, by looking at the way the mark occurs in the schema.
function markMayApply(markType, nodeType) {
    let nodes = nodeType.schema.nodes;
    for(let name in nodes){
        let parent = nodes[name];
        if (!parent.allowsMarkType(markType)) continue;
        let seen = [], scan = (match)=>{
            seen.push(match);
            for(let i = 0; i < match.edgeCount; i++){
                let { type, next } = match.edge(i);
                if (type == nodeType) return true;
                if (seen.indexOf(next) < 0 && scan(next)) return true;
            }
        };
        if (scan(parent.contentMatch)) return true;
    }
}
/**
A DOM serializer knows how to convert ProseMirror nodes and
marks of various types to DOM nodes.
*/ class DOMSerializer {
    /**
    Create a serializer. `nodes` should map node names to functions
    that take a node and return a description of the corresponding
    DOM. `marks` does the same for mark names, but also gets an
    argument that tells it whether the mark's content is block or
    inline content (for typical use, it'll always be inline). A mark
    serializer may be `null` to indicate that marks of that type
    should not be serialized.
    */ constructor(/**
    The node serialization functions.
    */ nodes, /**
    The mark serialization functions.
    */ marks){
        this.nodes = nodes;
        this.marks = marks;
    }
    /**
    Serialize the content of this fragment to a DOM fragment. When
    not in the browser, the `document` option, containing a DOM
    document, should be passed so that the serializer can create
    nodes.
    */ serializeFragment(fragment, options = {}, target) {
        if (!target) target = doc(options).createDocumentFragment();
        let top = target, active = [];
        fragment.forEach((node)=>{
            if (active.length || node.marks.length) {
                let keep = 0, rendered = 0;
                while(keep < active.length && rendered < node.marks.length){
                    let next = node.marks[rendered];
                    if (!this.marks[next.type.name]) {
                        rendered++;
                        continue;
                    }
                    if (!next.eq(active[keep][0]) || next.type.spec.spanning === false) break;
                    keep++;
                    rendered++;
                }
                while(keep < active.length)top = active.pop()[1];
                while(rendered < node.marks.length){
                    let add = node.marks[rendered++];
                    let markDOM = this.serializeMark(add, node.isInline, options);
                    if (markDOM) {
                        active.push([
                            add,
                            top
                        ]);
                        top.appendChild(markDOM.dom);
                        top = markDOM.contentDOM || markDOM.dom;
                    }
                }
            }
            top.appendChild(this.serializeNodeInner(node, options));
        });
        return target;
    }
    /**
    @internal
    */ serializeNodeInner(node, options) {
        if (node.isText) return doc(options).createTextNode(node.text);
        let { dom, contentDOM } = renderSpec(doc(options), this.nodes[node.type.name](node), null, node.attrs);
        if (contentDOM) {
            if (node.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(node.content, options, contentDOM);
        }
        return dom;
    }
    /**
    Serialize this node to a DOM node. This can be useful when you
    need to serialize a part of a document, as opposed to the whole
    document. To serialize a whole document, use
    [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
    its [content](https://prosemirror.net/docs/ref/#model.Node.content).
    */ serializeNode(node, options = {}) {
        let dom = this.serializeNodeInner(node, options);
        for(let i = node.marks.length - 1; i >= 0; i--){
            let wrap = this.serializeMark(node.marks[i], node.isInline, options);
            if (wrap) {
                (wrap.contentDOM || wrap.dom).appendChild(dom);
                dom = wrap.dom;
            }
        }
        return dom;
    }
    /**
    @internal
    */ serializeMark(mark, inline, options = {}) {
        let toDOM = this.marks[mark.type.name];
        return toDOM && renderSpec(doc(options), toDOM(mark, inline), null, mark.attrs);
    }
    static renderSpec(doc, structure, xmlNS = null, blockArraysIn) {
        // Kludge for backwards-compatibility with accidental original behavious
        if (typeof structure == "string") return {
            dom: doc.createTextNode(structure)
        };
        return renderSpec(doc, structure, xmlNS, blockArraysIn);
    }
    /**
    Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
    properties in a schema's node and mark specs.
    */ static fromSchema(schema) {
        return schema.cached.domSerializer || (schema.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)));
    }
    /**
    Gather the serializers in a schema's node specs into an object.
    This can be useful as a base to build a custom serializer from.
    */ static nodesFromSchema(schema) {
        let result = gatherToDOM(schema.nodes);
        if (!result.text) result.text = (node)=>node.text;
        return result;
    }
    /**
    Gather the serializers in a schema's mark specs into an object.
    */ static marksFromSchema(schema) {
        return gatherToDOM(schema.marks);
    }
}
function gatherToDOM(obj) {
    let result = {};
    for(let name in obj){
        let toDOM = obj[name].spec.toDOM;
        if (toDOM) result[name] = toDOM;
    }
    return result;
}
function doc(options) {
    return options.document || window.document;
}
const suspiciousAttributeCache = new WeakMap();
function suspiciousAttributes(attrs) {
    let value = suspiciousAttributeCache.get(attrs);
    if (value === undefined) suspiciousAttributeCache.set(attrs, value = suspiciousAttributesInner(attrs));
    return value;
}
function suspiciousAttributesInner(attrs) {
    let result = null;
    function scan(value) {
        if (value && typeof value == "object") {
            if (Array.isArray(value)) {
                if (typeof value[0] == "string") {
                    if (!result) result = [];
                    result.push(value);
                } else {
                    for(let i = 0; i < value.length; i++)scan(value[i]);
                }
            } else {
                for(let prop in value)scan(value[prop]);
            }
        }
    }
    scan(attrs);
    return result;
}
function renderSpec(doc, structure, xmlNS, blockArraysIn) {
    if (structure.nodeType == 1) return {
        dom: structure
    };
    if (structure.dom && structure.dom.nodeType == 1) return structure;
    let tagName = structure[0], suspicious;
    if (typeof tagName != "string") throw new RangeError("Invalid array passed to renderSpec");
    if (blockArraysIn && (suspicious = suspiciousAttributes(blockArraysIn)) && suspicious.indexOf(structure) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
    let space = tagName.indexOf(" ");
    if (space > 0) {
        xmlNS = tagName.slice(0, space);
        tagName = tagName.slice(space + 1);
    }
    let contentDOM;
    let dom = xmlNS ? doc.createElementNS(xmlNS, tagName) : doc.createElement(tagName);
    let attrs = structure[1], start = 1;
    if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
        start = 2;
        for(let name in attrs)if (attrs[name] != null) {
            let space = name.indexOf(" ");
            if (space > 0) dom.setAttributeNS(name.slice(0, space), name.slice(space + 1), attrs[name]);
            else if (name == "style" && dom.style) dom.style.cssText = attrs[name];
            else dom.setAttribute(name, attrs[name]);
        }
    }
    for(let i = start; i < structure.length; i++){
        let child = structure[i];
        if (child === 0) {
            if (i < structure.length - 1 || i > start) throw new RangeError("Content hole must be the only child of its parent node");
            return {
                dom,
                contentDOM: dom
            };
        } else if (typeof child == "string") {
            dom.appendChild(doc.createTextNode(child));
        } else {
            let { dom: inner, contentDOM: innerContent } = renderSpec(doc, child, xmlNS, blockArraysIn);
            dom.appendChild(inner);
            if (innerContent) {
                if (contentDOM) throw new RangeError("Multiple content holes");
                contentDOM = innerContent;
            }
        }
    }
    return {
        dom,
        contentDOM
    };
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddMarkStep",
    ()=>AddMarkStep,
    "AddNodeMarkStep",
    ()=>AddNodeMarkStep,
    "AttrStep",
    ()=>AttrStep,
    "DocAttrStep",
    ()=>DocAttrStep,
    "MapResult",
    ()=>MapResult,
    "Mapping",
    ()=>Mapping,
    "RemoveMarkStep",
    ()=>RemoveMarkStep,
    "RemoveNodeMarkStep",
    ()=>RemoveNodeMarkStep,
    "ReplaceAroundStep",
    ()=>ReplaceAroundStep,
    "ReplaceStep",
    ()=>ReplaceStep,
    "Step",
    ()=>Step,
    "StepMap",
    ()=>StepMap,
    "StepResult",
    ()=>StepResult,
    "Transform",
    ()=>Transform,
    "TransformError",
    ()=>TransformError,
    "canJoin",
    ()=>canJoin,
    "canSplit",
    ()=>canSplit,
    "dropPoint",
    ()=>dropPoint,
    "findWrapping",
    ()=>findWrapping,
    "insertPoint",
    ()=>insertPoint,
    "joinPoint",
    ()=>joinPoint,
    "liftTarget",
    ()=>liftTarget,
    "replaceStep",
    ()=>replaceStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
;
// Recovery values encode a range index and an offset. They are
// represented as numbers, because tons of them will be created when
// mapping, for example, a large number of decorations. The number's
// lower 16 bits provide the index, the remaining bits the offset.
//
// Note: We intentionally don't use bit shift operators to en- and
// decode these, since those clip to 32 bits, which we might in rare
// cases want to overflow. A 64-bit float can represent 48-bit
// integers precisely.
const lower16 = 0xffff;
const factor16 = Math.pow(2, 16);
function makeRecover(index, offset) {
    return index + offset * factor16;
}
function recoverIndex(value) {
    return value & lower16;
}
function recoverOffset(value) {
    return (value - (value & lower16)) / factor16;
}
const DEL_BEFORE = 1, DEL_AFTER = 2, DEL_ACROSS = 4, DEL_SIDE = 8;
/**
An object representing a mapped position with extra
information.
*/ class MapResult {
    /**
    @internal
    */ constructor(/**
    The mapped version of the position.
    */ pos, /**
    @internal
    */ delInfo, /**
    @internal
    */ recover){
        this.pos = pos;
        this.delInfo = delInfo;
        this.recover = recover;
    }
    /**
    Tells you whether the position was deleted, that is, whether the
    step removed the token on the side queried (via the `assoc`)
    argument from the document.
    */ get deleted() {
        return (this.delInfo & DEL_SIDE) > 0;
    }
    /**
    Tells you whether the token before the mapped position was deleted.
    */ get deletedBefore() {
        return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
    }
    /**
    True when the token after the mapped position was deleted.
    */ get deletedAfter() {
        return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
    }
    /**
    Tells whether any of the steps mapped through deletes across the
    position (including both the token before and after the
    position).
    */ get deletedAcross() {
        return (this.delInfo & DEL_ACROSS) > 0;
    }
}
/**
A map describing the deletions and insertions made by a step, which
can be used to find the correspondence between positions in the
pre-step version of a document and the same position in the
post-step version.
*/ class StepMap {
    /**
    Create a position map. The modifications to the document are
    represented as an array of numbers, in which each group of three
    represents a modified chunk as `[start, oldSize, newSize]`.
    */ constructor(/**
    @internal
    */ ranges, /**
    @internal
    */ inverted = false){
        this.ranges = ranges;
        this.inverted = inverted;
        if (!ranges.length && StepMap.empty) return StepMap.empty;
    }
    /**
    @internal
    */ recover(value) {
        let diff = 0, index = recoverIndex(value);
        if (!this.inverted) for(let i = 0; i < index; i++)diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
        return this.ranges[index * 3] + diff + recoverOffset(value);
    }
    mapResult(pos, assoc = 1) {
        return this._map(pos, assoc, false);
    }
    map(pos, assoc = 1) {
        return this._map(pos, assoc, true);
    }
    /**
    @internal
    */ _map(pos, assoc, simple) {
        let diff = 0, oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
        for(let i = 0; i < this.ranges.length; i += 3){
            let start = this.ranges[i] - (this.inverted ? diff : 0);
            if (start > pos) break;
            let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex], end = start + oldSize;
            if (pos <= end) {
                let side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
                let result = start + diff + (side < 0 ? 0 : newSize);
                if (simple) return result;
                let recover = pos == (assoc < 0 ? start : end) ? null : makeRecover(i / 3, pos - start);
                let del = pos == start ? DEL_AFTER : pos == end ? DEL_BEFORE : DEL_ACROSS;
                if (assoc < 0 ? pos != start : pos != end) del |= DEL_SIDE;
                return new MapResult(result, del, recover);
            }
            diff += newSize - oldSize;
        }
        return simple ? pos + diff : new MapResult(pos + diff, 0, null);
    }
    /**
    @internal
    */ touches(pos, recover) {
        let diff = 0, index = recoverIndex(recover);
        let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
        for(let i = 0; i < this.ranges.length; i += 3){
            let start = this.ranges[i] - (this.inverted ? diff : 0);
            if (start > pos) break;
            let oldSize = this.ranges[i + oldIndex], end = start + oldSize;
            if (pos <= end && i == index * 3) return true;
            diff += this.ranges[i + newIndex] - oldSize;
        }
        return false;
    }
    /**
    Calls the given function on each of the changed ranges included in
    this map.
    */ forEach(f) {
        let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
        for(let i = 0, diff = 0; i < this.ranges.length; i += 3){
            let start = this.ranges[i], oldStart = start - (this.inverted ? diff : 0), newStart = start + (this.inverted ? 0 : diff);
            let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex];
            f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
            diff += newSize - oldSize;
        }
    }
    /**
    Create an inverted version of this map. The result can be used to
    map positions in the post-step document to the pre-step document.
    */ invert() {
        return new StepMap(this.ranges, !this.inverted);
    }
    /**
    @internal
    */ toString() {
        return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
    }
    /**
    Create a map that moves all positions by offset `n` (which may be
    negative). This can be useful when applying steps meant for a
    sub-document to a larger document, or vice-versa.
    */ static offset(n) {
        return n == 0 ? StepMap.empty : new StepMap(n < 0 ? [
            0,
            -n,
            0
        ] : [
            0,
            0,
            n
        ]);
    }
}
/**
A StepMap that contains no changed ranges.
*/ StepMap.empty = new StepMap([]);
/**
A mapping represents a pipeline of zero or more [step
maps](https://prosemirror.net/docs/ref/#transform.StepMap). It has special provisions for losslessly
handling mapping positions through a series of steps in which some
steps are inverted versions of earlier steps. (This comes up when
‘[rebasing](https://prosemirror.net/docs/guide/#transform.rebasing)’ steps for
collaboration or history management.)
*/ class Mapping {
    /**
    Create a new mapping with the given position maps.
    */ constructor(maps, /**
    @internal
    */ mirror, /**
    The starting position in the `maps` array, used when `map` or
    `mapResult` is called.
    */ from = 0, /**
    The end position in the `maps` array.
    */ to = maps ? maps.length : 0){
        this.mirror = mirror;
        this.from = from;
        this.to = to;
        this._maps = maps || [];
        this.ownData = !(maps || mirror);
    }
    /**
    The step maps in this mapping.
    */ get maps() {
        return this._maps;
    }
    /**
    Create a mapping that maps only through a part of this one.
    */ slice(from = 0, to = this.maps.length) {
        return new Mapping(this._maps, this.mirror, from, to);
    }
    /**
    Add a step map to the end of this mapping. If `mirrors` is
    given, it should be the index of the step map that is the mirror
    image of this one.
    */ appendMap(map, mirrors) {
        if (!this.ownData) {
            this._maps = this._maps.slice();
            this.mirror = this.mirror && this.mirror.slice();
            this.ownData = true;
        }
        this.to = this._maps.push(map);
        if (mirrors != null) this.setMirror(this._maps.length - 1, mirrors);
    }
    /**
    Add all the step maps in a given mapping to this one (preserving
    mirroring information).
    */ appendMapping(mapping) {
        for(let i = 0, startSize = this._maps.length; i < mapping._maps.length; i++){
            let mirr = mapping.getMirror(i);
            this.appendMap(mapping._maps[i], mirr != null && mirr < i ? startSize + mirr : undefined);
        }
    }
    /**
    Finds the offset of the step map that mirrors the map at the
    given offset, in this mapping (as per the second argument to
    `appendMap`).
    */ getMirror(n) {
        if (this.mirror) {
            for(let i = 0; i < this.mirror.length; i++)if (this.mirror[i] == n) return this.mirror[i + (i % 2 ? -1 : 1)];
        }
    }
    /**
    @internal
    */ setMirror(n, m) {
        if (!this.mirror) this.mirror = [];
        this.mirror.push(n, m);
    }
    /**
    Append the inverse of the given mapping to this one.
    */ appendMappingInverted(mapping) {
        for(let i = mapping.maps.length - 1, totalSize = this._maps.length + mapping._maps.length; i >= 0; i--){
            let mirr = mapping.getMirror(i);
            this.appendMap(mapping._maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : undefined);
        }
    }
    /**
    Create an inverted version of this mapping.
    */ invert() {
        let inverse = new Mapping;
        inverse.appendMappingInverted(this);
        return inverse;
    }
    /**
    Map a position through this mapping.
    */ map(pos, assoc = 1) {
        if (this.mirror) return this._map(pos, assoc, true);
        for(let i = this.from; i < this.to; i++)pos = this._maps[i].map(pos, assoc);
        return pos;
    }
    /**
    Map a position through this mapping, returning a mapping
    result.
    */ mapResult(pos, assoc = 1) {
        return this._map(pos, assoc, false);
    }
    /**
    @internal
    */ _map(pos, assoc, simple) {
        let delInfo = 0;
        for(let i = this.from; i < this.to; i++){
            let map = this._maps[i], result = map.mapResult(pos, assoc);
            if (result.recover != null) {
                let corr = this.getMirror(i);
                if (corr != null && corr > i && corr < this.to) {
                    i = corr;
                    pos = this._maps[corr].recover(result.recover);
                    continue;
                }
            }
            delInfo |= result.delInfo;
            pos = result.pos;
        }
        return simple ? pos : new MapResult(pos, delInfo, null);
    }
}
const stepsByID = Object.create(null);
/**
A step object represents an atomic change. It generally applies
only to the document it was created for, since the positions
stored in it will only make sense for that document.

New steps are defined by creating classes that extend `Step`,
overriding the `apply`, `invert`, `map`, `getMap` and `fromJSON`
methods, and registering your class with a unique
JSON-serialization identifier using
[`Step.jsonID`](https://prosemirror.net/docs/ref/#transform.Step^jsonID).
*/ class Step {
    /**
    Get the step map that represents the changes made by this step,
    and which can be used to transform between positions in the old
    and the new document.
    */ getMap() {
        return StepMap.empty;
    }
    /**
    Try to merge this step with another one, to be applied directly
    after it. Returns the merged step when possible, null if the
    steps can't be merged.
    */ merge(other) {
        return null;
    }
    /**
    Deserialize a step from its JSON representation. Will call
    through to the step class' own implementation of this method.
    */ static fromJSON(schema, json) {
        if (!json || !json.stepType) throw new RangeError("Invalid input for Step.fromJSON");
        let type = stepsByID[json.stepType];
        if (!type) throw new RangeError(`No step type ${json.stepType} defined`);
        return type.fromJSON(schema, json);
    }
    /**
    To be able to serialize steps to JSON, each step needs a string
    ID to attach to its JSON representation. Use this method to
    register an ID for your step classes. Try to pick something
    that's unlikely to clash with steps from other modules.
    */ static jsonID(id, stepClass) {
        if (id in stepsByID) throw new RangeError("Duplicate use of step JSON ID " + id);
        stepsByID[id] = stepClass;
        stepClass.prototype.jsonID = id;
        return stepClass;
    }
}
/**
The result of [applying](https://prosemirror.net/docs/ref/#transform.Step.apply) a step. Contains either a
new document or a failure value.
*/ class StepResult {
    /**
    @internal
    */ constructor(/**
    The transformed document, if successful.
    */ doc, /**
    The failure message, if unsuccessful.
    */ failed){
        this.doc = doc;
        this.failed = failed;
    }
    /**
    Create a successful step result.
    */ static ok(doc) {
        return new StepResult(doc, null);
    }
    /**
    Create a failed step result.
    */ static fail(message) {
        return new StepResult(null, message);
    }
    /**
    Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
    arguments. Create a successful result if it succeeds, and a
    failed one if it throws a `ReplaceError`.
    */ static fromReplace(doc, from, to, slice) {
        try {
            return StepResult.ok(doc.replace(from, to, slice));
        } catch (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceError"]) return StepResult.fail(e.message);
            throw e;
        }
    }
}
function mapFragment(fragment, f, parent) {
    let mapped = [];
    for(let i = 0; i < fragment.childCount; i++){
        let child = fragment.child(i);
        if (child.content.size) child = child.copy(mapFragment(child.content, f, child));
        if (child.isInline) child = f(child, parent, i);
        mapped.push(child);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].fromArray(mapped);
}
/**
Add a mark to all inline content between two positions.
*/ class AddMarkStep extends Step {
    /**
    Create a mark step.
    */ constructor(/**
    The start of the marked range.
    */ from, /**
    The end of the marked range.
    */ to, /**
    The mark to add.
    */ mark){
        super();
        this.from = from;
        this.to = to;
        this.mark = mark;
    }
    apply(doc) {
        let oldSlice = doc.slice(this.from, this.to), $from = doc.resolve(this.from);
        let parent = $from.node($from.sharedDepth(this.to));
        let slice = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](mapFragment(oldSlice.content, (node, parent)=>{
            if (!node.isAtom || !parent.type.allowsMarkType(this.mark.type)) return node;
            return node.mark(this.mark.addToSet(node.marks));
        }, parent), oldSlice.openStart, oldSlice.openEnd);
        return StepResult.fromReplace(doc, this.from, this.to, slice);
    }
    invert() {
        return new RemoveMarkStep(this.from, this.to, this.mark);
    }
    map(mapping) {
        let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
        if (from.deleted && to.deleted || from.pos >= to.pos) return null;
        return new AddMarkStep(from.pos, to.pos, this.mark);
    }
    merge(other) {
        if (other instanceof AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
        return null;
    }
    toJSON() {
        return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        };
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
        return new AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
    }
}
Step.jsonID("addMark", AddMarkStep);
/**
Remove a mark from all inline content between two positions.
*/ class RemoveMarkStep extends Step {
    /**
    Create a mark-removing step.
    */ constructor(/**
    The start of the unmarked range.
    */ from, /**
    The end of the unmarked range.
    */ to, /**
    The mark to remove.
    */ mark){
        super();
        this.from = from;
        this.to = to;
        this.mark = mark;
    }
    apply(doc) {
        let oldSlice = doc.slice(this.from, this.to);
        let slice = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](mapFragment(oldSlice.content, (node)=>{
            return node.mark(this.mark.removeFromSet(node.marks));
        }, doc), oldSlice.openStart, oldSlice.openEnd);
        return StepResult.fromReplace(doc, this.from, this.to, slice);
    }
    invert() {
        return new AddMarkStep(this.from, this.to, this.mark);
    }
    map(mapping) {
        let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
        if (from.deleted && to.deleted || from.pos >= to.pos) return null;
        return new RemoveMarkStep(from.pos, to.pos, this.mark);
    }
    merge(other) {
        if (other instanceof RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
        return null;
    }
    toJSON() {
        return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        };
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
        return new RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
    }
}
Step.jsonID("removeMark", RemoveMarkStep);
/**
Add a mark to a specific node.
*/ class AddNodeMarkStep extends Step {
    /**
    Create a node mark step.
    */ constructor(/**
    The position of the target node.
    */ pos, /**
    The mark to add.
    */ mark){
        super();
        this.pos = pos;
        this.mark = mark;
    }
    apply(doc) {
        let node = doc.nodeAt(this.pos);
        if (!node) return StepResult.fail("No node at mark step's position");
        let updated = node.type.create(node.attrs, null, this.mark.addToSet(node.marks));
        return StepResult.fromReplace(doc, this.pos, this.pos + 1, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(updated), 0, node.isLeaf ? 0 : 1));
    }
    invert(doc) {
        let node = doc.nodeAt(this.pos);
        if (node) {
            let newSet = this.mark.addToSet(node.marks);
            if (newSet.length == node.marks.length) {
                for(let i = 0; i < node.marks.length; i++)if (!node.marks[i].isInSet(newSet)) return new AddNodeMarkStep(this.pos, node.marks[i]);
                return new AddNodeMarkStep(this.pos, this.mark);
            }
        }
        return new RemoveNodeMarkStep(this.pos, this.mark);
    }
    map(mapping) {
        let pos = mapping.mapResult(this.pos, 1);
        return pos.deletedAfter ? null : new AddNodeMarkStep(pos.pos, this.mark);
    }
    toJSON() {
        return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        };
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
        return new AddNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
    }
}
Step.jsonID("addNodeMark", AddNodeMarkStep);
/**
Remove a mark from a specific node.
*/ class RemoveNodeMarkStep extends Step {
    /**
    Create a mark-removing step.
    */ constructor(/**
    The position of the target node.
    */ pos, /**
    The mark to remove.
    */ mark){
        super();
        this.pos = pos;
        this.mark = mark;
    }
    apply(doc) {
        let node = doc.nodeAt(this.pos);
        if (!node) return StepResult.fail("No node at mark step's position");
        let updated = node.type.create(node.attrs, null, this.mark.removeFromSet(node.marks));
        return StepResult.fromReplace(doc, this.pos, this.pos + 1, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(updated), 0, node.isLeaf ? 0 : 1));
    }
    invert(doc) {
        let node = doc.nodeAt(this.pos);
        if (!node || !this.mark.isInSet(node.marks)) return this;
        return new AddNodeMarkStep(this.pos, this.mark);
    }
    map(mapping) {
        let pos = mapping.mapResult(this.pos, 1);
        return pos.deletedAfter ? null : new RemoveNodeMarkStep(pos.pos, this.mark);
    }
    toJSON() {
        return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        };
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
        return new RemoveNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
    }
}
Step.jsonID("removeNodeMark", RemoveNodeMarkStep);
/**
Replace a part of the document with a slice of new content.
*/ class ReplaceStep extends Step {
    /**
    The given `slice` should fit the 'gap' between `from` and
    `to`—the depths must line up, and the surrounding nodes must be
    able to be joined with the open sides of the slice. When
    `structure` is true, the step will fail if the content between
    from and to is not just a sequence of closing and then opening
    tokens (this is to guard against rebased replace steps
    overwriting something they weren't supposed to).
    */ constructor(/**
    The start position of the replaced range.
    */ from, /**
    The end position of the replaced range.
    */ to, /**
    The slice to insert.
    */ slice, /**
    @internal
    */ structure = false){
        super();
        this.from = from;
        this.to = to;
        this.slice = slice;
        this.structure = structure;
    }
    apply(doc) {
        if (this.structure && contentBetween(doc, this.from, this.to)) return StepResult.fail("Structure replace would overwrite content");
        return StepResult.fromReplace(doc, this.from, this.to, this.slice);
    }
    getMap() {
        return new StepMap([
            this.from,
            this.to - this.from,
            this.slice.size
        ]);
    }
    invert(doc) {
        return new ReplaceStep(this.from, this.from + this.slice.size, doc.slice(this.from, this.to));
    }
    map(mapping) {
        let to = mapping.mapResult(this.to, -1);
        let from = this.from == this.to && ReplaceStep.MAP_BIAS < 0 ? to : mapping.mapResult(this.from, 1);
        if (from.deletedAcross && to.deletedAcross) return null;
        return new ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice, this.structure);
    }
    merge(other) {
        if (!(other instanceof ReplaceStep) || other.structure || this.structure) return null;
        if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
            let slice = this.slice.size + other.slice.size == 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
            return new ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure);
        } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
            let slice = this.slice.size + other.slice.size == 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
            return new ReplaceStep(other.from, this.to, slice, this.structure);
        } else {
            return null;
        }
    }
    toJSON() {
        let json = {
            stepType: "replace",
            from: this.from,
            to: this.to
        };
        if (this.slice.size) json.slice = this.slice.toJSON();
        if (this.structure) json.structure = true;
        return json;
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
        return new ReplaceStep(json.from, json.to, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].fromJSON(schema, json.slice), !!json.structure);
    }
}
/**
By default, for backwards compatibility, an inserting step
mapped over an insertion at that same position fill move after
the inserted content. In a collaborative editing situation, that
can make redone insertions appear in unexpected places. You can
set this to -1 to make such mapping keep the step before the
insertion instead.
*/ ReplaceStep.MAP_BIAS = 1;
Step.jsonID("replace", ReplaceStep);
/**
Replace a part of the document with a slice of content, but
preserve a range of the replaced content by moving it into the
slice.
*/ class ReplaceAroundStep extends Step {
    /**
    Create a replace-around step with the given range and gap.
    `insert` should be the point in the slice into which the content
    of the gap should be moved. `structure` has the same meaning as
    it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
    */ constructor(/**
    The start position of the replaced range.
    */ from, /**
    The end position of the replaced range.
    */ to, /**
    The start of preserved range.
    */ gapFrom, /**
    The end of preserved range.
    */ gapTo, /**
    The slice to insert.
    */ slice, /**
    The position in the slice where the preserved range should be
    inserted.
    */ insert, /**
    @internal
    */ structure = false){
        super();
        this.from = from;
        this.to = to;
        this.gapFrom = gapFrom;
        this.gapTo = gapTo;
        this.slice = slice;
        this.insert = insert;
        this.structure = structure;
    }
    apply(doc) {
        if (this.structure && (contentBetween(doc, this.from, this.gapFrom) || contentBetween(doc, this.gapTo, this.to))) return StepResult.fail("Structure gap-replace would overwrite content");
        let gap = doc.slice(this.gapFrom, this.gapTo);
        if (gap.openStart || gap.openEnd) return StepResult.fail("Gap is not a flat range");
        let inserted = this.slice.insertAt(this.insert, gap.content);
        if (!inserted) return StepResult.fail("Content does not fit in gap");
        return StepResult.fromReplace(doc, this.from, this.to, inserted);
    }
    getMap() {
        return new StepMap([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert
        ]);
    }
    invert(doc) {
        let gap = this.gapTo - this.gapFrom;
        return new ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
    }
    map(mapping) {
        let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
        let gapFrom = this.from == this.gapFrom ? from.pos : mapping.map(this.gapFrom, -1);
        let gapTo = this.to == this.gapTo ? to.pos : mapping.map(this.gapTo, 1);
        if (from.deletedAcross && to.deletedAcross || gapFrom < from.pos || gapTo > to.pos) return null;
        return new ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
    }
    toJSON() {
        let json = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
        };
        if (this.slice.size) json.slice = this.slice.toJSON();
        if (this.structure) json.structure = true;
        return json;
    }
    /**
    @internal
    */ static fromJSON(schema, json) {
        if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
        return new ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].fromJSON(schema, json.slice), json.insert, !!json.structure);
    }
}
Step.jsonID("replaceAround", ReplaceAroundStep);
function contentBetween(doc, from, to) {
    let $from = doc.resolve(from), dist = to - from, depth = $from.depth;
    while(dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount){
        depth--;
        dist--;
    }
    if (dist > 0) {
        let next = $from.node(depth).maybeChild($from.indexAfter(depth));
        while(dist > 0){
            if (!next || next.isLeaf) return true;
            next = next.firstChild;
            dist--;
        }
    }
    return false;
}
function addMark(tr, from, to, mark) {
    let removed = [], added = [];
    let removing, adding;
    tr.doc.nodesBetween(from, to, (node, pos, parent)=>{
        if (!node.isInline) return;
        let marks = node.marks;
        if (!mark.isInSet(marks) && parent.type.allowsMarkType(mark.type)) {
            let start = Math.max(pos, from), end = Math.min(pos + node.nodeSize, to);
            let newSet = mark.addToSet(marks);
            for(let i = 0; i < marks.length; i++){
                if (!marks[i].isInSet(newSet)) {
                    if (removing && removing.to == start && removing.mark.eq(marks[i])) removing.to = end;
                    else removed.push(removing = new RemoveMarkStep(start, end, marks[i]));
                }
            }
            if (adding && adding.to == start) adding.to = end;
            else added.push(adding = new AddMarkStep(start, end, mark));
        }
    });
    removed.forEach((s)=>tr.step(s));
    added.forEach((s)=>tr.step(s));
}
function removeMark(tr, from, to, mark) {
    let matched = [], step = 0;
    tr.doc.nodesBetween(from, to, (node, pos)=>{
        if (!node.isInline) return;
        step++;
        let toRemove = null;
        if (mark instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkType"]) {
            let set = node.marks, found;
            while(found = mark.isInSet(set)){
                (toRemove || (toRemove = [])).push(found);
                set = found.removeFromSet(set);
            }
        } else if (mark) {
            if (mark.isInSet(node.marks)) toRemove = [
                mark
            ];
        } else {
            toRemove = node.marks;
        }
        if (toRemove && toRemove.length) {
            let end = Math.min(pos + node.nodeSize, to);
            for(let i = 0; i < toRemove.length; i++){
                let style = toRemove[i], found;
                for(let j = 0; j < matched.length; j++){
                    let m = matched[j];
                    if (m.step == step - 1 && style.eq(matched[j].style)) found = m;
                }
                if (found) {
                    found.to = end;
                    found.step = step;
                } else {
                    matched.push({
                        style,
                        from: Math.max(pos, from),
                        to: end,
                        step
                    });
                }
            }
        }
    });
    matched.forEach((m)=>tr.step(new RemoveMarkStep(m.from, m.to, m.style)));
}
function clearIncompatible(tr, pos, parentType, match = parentType.contentMatch, clearNewlines = true) {
    let node = tr.doc.nodeAt(pos);
    let replSteps = [], cur = pos + 1;
    for(let i = 0; i < node.childCount; i++){
        let child = node.child(i), end = cur + child.nodeSize;
        let allowed = match.matchType(child.type);
        if (!allowed) {
            replSteps.push(new ReplaceStep(cur, end, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty));
        } else {
            match = allowed;
            for(let j = 0; j < child.marks.length; j++)if (!parentType.allowsMarkType(child.marks[j].type)) tr.step(new RemoveMarkStep(cur, end, child.marks[j]));
            if (clearNewlines && child.isText && parentType.whitespace != "pre") {
                let m, newline = /\r?\n|\r/g, slice;
                while(m = newline.exec(child.text)){
                    if (!slice) slice = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(parentType.schema.text(" ", parentType.allowedMarks(child.marks))), 0, 0);
                    replSteps.push(new ReplaceStep(cur + m.index, cur + m.index + m[0].length, slice));
                }
            }
        }
        cur = end;
    }
    if (!match.validEnd) {
        let fill = match.fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, true);
        tr.replace(cur, cur, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](fill, 0, 0));
    }
    for(let i = replSteps.length - 1; i >= 0; i--)tr.step(replSteps[i]);
}
function canCut(node, start, end) {
    return (start == 0 || node.canReplace(start, node.childCount)) && (end == node.childCount || node.canReplace(0, end));
}
/**
Try to find a target depth to which the content in the given range
can be lifted. Will not go across
[isolating](https://prosemirror.net/docs/ref/#model.NodeSpec.isolating) parent nodes.
*/ function liftTarget(range) {
    let parent = range.parent;
    let content = parent.content.cutByIndex(range.startIndex, range.endIndex);
    for(let depth = range.depth, contentBefore = 0, contentAfter = 0;; --depth){
        let node = range.$from.node(depth);
        let index = range.$from.index(depth) + contentBefore, endIndex = range.$to.indexAfter(depth) - contentAfter;
        if (depth < range.depth && node.canReplace(index, endIndex, content)) return depth;
        if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex)) break;
        if (index) contentBefore = 1;
        if (endIndex < node.childCount) contentAfter = 1;
    }
    return null;
}
function lift(tr, range, target) {
    let { $from, $to, depth } = range;
    let gapStart = $from.before(depth + 1), gapEnd = $to.after(depth + 1);
    let start = gapStart, end = gapEnd;
    let before = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, openStart = 0;
    for(let d = depth, splitting = false; d > target; d--)if (splitting || $from.index(d) > 0) {
        splitting = true;
        before = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from($from.node(d).copy(before));
        openStart++;
    } else {
        start--;
    }
    let after = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, openEnd = 0;
    for(let d = depth, splitting = false; d > target; d--)if (splitting || $to.after(d + 1) < $to.end(d)) {
        splitting = true;
        after = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from($to.node(d).copy(after));
        openEnd++;
    } else {
        end++;
    }
    tr.step(new ReplaceAroundStep(start, end, gapStart, gapEnd, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](before.append(after), openStart, openEnd), before.size - openStart, true));
}
/**
Try to find a valid way to wrap the content in the given range in a
node of the given type. May introduce extra nodes around and inside
the wrapper node, if necessary. Returns null if no valid wrapping
could be found. When `innerRange` is given, that range's content is
used as the content to fit into the wrapping, instead of the
content of `range`.
*/ function findWrapping(range, nodeType, attrs = null, innerRange = range) {
    let around = findWrappingOutside(range, nodeType);
    let inner = around && findWrappingInside(innerRange, nodeType);
    if (!inner) return null;
    return around.map(withAttrs).concat({
        type: nodeType,
        attrs
    }).concat(inner.map(withAttrs));
}
function withAttrs(type) {
    return {
        type,
        attrs: null
    };
}
function findWrappingOutside(range, type) {
    let { parent, startIndex, endIndex } = range;
    let around = parent.contentMatchAt(startIndex).findWrapping(type);
    if (!around) return null;
    let outer = around.length ? around[0] : type;
    return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
}
function findWrappingInside(range, type) {
    let { parent, startIndex, endIndex } = range;
    let inner = parent.child(startIndex);
    let inside = type.contentMatch.findWrapping(inner.type);
    if (!inside) return null;
    let lastType = inside.length ? inside[inside.length - 1] : type;
    let innerMatch = lastType.contentMatch;
    for(let i = startIndex; innerMatch && i < endIndex; i++)innerMatch = innerMatch.matchType(parent.child(i).type);
    if (!innerMatch || !innerMatch.validEnd) return null;
    return inside;
}
function wrap(tr, range, wrappers) {
    let content = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty;
    for(let i = wrappers.length - 1; i >= 0; i--){
        if (content.size) {
            let match = wrappers[i].type.contentMatch.matchFragment(content);
            if (!match || !match.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
        }
        content = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(wrappers[i].type.create(wrappers[i].attrs, content));
    }
    let start = range.start, end = range.end;
    tr.step(new ReplaceAroundStep(start, end, start, end, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](content, 0, 0), wrappers.length, true));
}
function setBlockType(tr, from, to, type, attrs) {
    if (!type.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
    let mapFrom = tr.steps.length;
    tr.doc.nodesBetween(from, to, (node, pos)=>{
        let attrsHere = typeof attrs == "function" ? attrs(node) : attrs;
        if (node.isTextblock && !node.hasMarkup(type, attrsHere) && canChangeType(tr.doc, tr.mapping.slice(mapFrom).map(pos), type)) {
            let convertNewlines = null;
            if (type.schema.linebreakReplacement) {
                let pre = type.whitespace == "pre", supportLinebreak = !!type.contentMatch.matchType(type.schema.linebreakReplacement);
                if (pre && !supportLinebreak) convertNewlines = false;
                else if (!pre && supportLinebreak) convertNewlines = true;
            }
            // Ensure all markup that isn't allowed in the new node type is cleared
            if (convertNewlines === false) replaceLinebreaks(tr, node, pos, mapFrom);
            clearIncompatible(tr, tr.mapping.slice(mapFrom).map(pos, 1), type, undefined, convertNewlines === null);
            let mapping = tr.mapping.slice(mapFrom);
            let startM = mapping.map(pos, 1), endM = mapping.map(pos + node.nodeSize, 1);
            tr.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(type.create(attrsHere, null, node.marks)), 0, 0), 1, true));
            if (convertNewlines === true) replaceNewlines(tr, node, pos, mapFrom);
            return false;
        }
    });
}
function replaceNewlines(tr, node, pos, mapFrom) {
    node.forEach((child, offset)=>{
        if (child.isText) {
            let m, newline = /\r?\n|\r/g;
            while(m = newline.exec(child.text)){
                let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset + m.index);
                tr.replaceWith(start, start + 1, node.type.schema.linebreakReplacement.create());
            }
        }
    });
}
function replaceLinebreaks(tr, node, pos, mapFrom) {
    node.forEach((child, offset)=>{
        if (child.type == child.type.schema.linebreakReplacement) {
            let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset);
            tr.replaceWith(start, start + 1, node.type.schema.text("\n"));
        }
    });
}
function canChangeType(doc, pos, type) {
    let $pos = doc.resolve(pos), index = $pos.index();
    return $pos.parent.canReplaceWith(index, index + 1, type);
}
/**
Change the type, attributes, and/or marks of the node at `pos`.
When `type` isn't given, the existing node type is preserved,
*/ function setNodeMarkup(tr, pos, type, attrs, marks) {
    let node = tr.doc.nodeAt(pos);
    if (!node) throw new RangeError("No node at given position");
    if (!type) type = node.type;
    let newNode = type.create(attrs, null, marks || node.marks);
    if (node.isLeaf) return tr.replaceWith(pos, pos + node.nodeSize, newNode);
    if (!type.validContent(node.content)) throw new RangeError("Invalid content for node type " + type.name);
    tr.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(newNode), 0, 0), 1, true));
}
/**
Check whether splitting at the given position is allowed.
*/ function canSplit(doc, pos, depth = 1, typesAfter) {
    let $pos = doc.resolve(pos), base = $pos.depth - depth;
    let innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
    if (base < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) return false;
    for(let d = $pos.depth - 1, i = depth - 2; d > base; d--, i--){
        let node = $pos.node(d), index = $pos.index(d);
        if (node.type.spec.isolating) return false;
        let rest = node.content.cutByIndex(index, node.childCount);
        let overrideChild = typesAfter && typesAfter[i + 1];
        if (overrideChild) rest = rest.replaceChild(0, overrideChild.type.create(overrideChild.attrs));
        let after = typesAfter && typesAfter[i] || node;
        if (!node.canReplace(index + 1, node.childCount) || !after.type.validContent(rest)) return false;
    }
    let index = $pos.indexAfter(base);
    let baseType = typesAfter && typesAfter[0];
    return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type);
}
function split(tr, pos, depth = 1, typesAfter) {
    let $pos = tr.doc.resolve(pos), before = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, after = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty;
    for(let d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--){
        before = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from($pos.node(d).copy(before));
        let typeAfter = typesAfter && typesAfter[i];
        after = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
    }
    tr.step(new ReplaceStep(pos, pos, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](before.append(after), depth, depth), true));
}
/**
Test whether the blocks before and after a given position can be
joined.
*/ function canJoin(doc, pos) {
    let $pos = doc.resolve(pos), index = $pos.index();
    return joinable($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index, index + 1);
}
function canAppendWithSubstitutedLinebreaks(a, b) {
    if (!b.content.size) a.type.compatibleContent(b.type);
    let match = a.contentMatchAt(a.childCount);
    let { linebreakReplacement } = a.type.schema;
    for(let i = 0; i < b.childCount; i++){
        let child = b.child(i);
        let type = child.type == linebreakReplacement ? a.type.schema.nodes.text : child.type;
        match = match.matchType(type);
        if (!match) return false;
        if (!a.type.allowsMarks(child.marks)) return false;
    }
    return match.validEnd;
}
function joinable(a, b) {
    return !!(a && b && !a.isLeaf && canAppendWithSubstitutedLinebreaks(a, b));
}
/**
Find an ancestor of the given position that can be joined to the
block before (or after if `dir` is positive). Returns the joinable
point, if any.
*/ function joinPoint(doc, pos, dir = -1) {
    let $pos = doc.resolve(pos);
    for(let d = $pos.depth;; d--){
        let before, after, index = $pos.index(d);
        if (d == $pos.depth) {
            before = $pos.nodeBefore;
            after = $pos.nodeAfter;
        } else if (dir > 0) {
            before = $pos.node(d + 1);
            index++;
            after = $pos.node(d).maybeChild(index);
        } else {
            before = $pos.node(d).maybeChild(index - 1);
            after = $pos.node(d + 1);
        }
        if (before && !before.isTextblock && joinable(before, after) && $pos.node(d).canReplace(index, index + 1)) return pos;
        if (d == 0) break;
        pos = dir < 0 ? $pos.before(d) : $pos.after(d);
    }
}
function join(tr, pos, depth) {
    let convertNewlines = null;
    let { linebreakReplacement } = tr.doc.type.schema;
    let $before = tr.doc.resolve(pos - depth), beforeType = $before.node().type;
    if (linebreakReplacement && beforeType.inlineContent) {
        let pre = beforeType.whitespace == "pre";
        let supportLinebreak = !!beforeType.contentMatch.matchType(linebreakReplacement);
        if (pre && !supportLinebreak) convertNewlines = false;
        else if (!pre && supportLinebreak) convertNewlines = true;
    }
    let mapFrom = tr.steps.length;
    if (convertNewlines === false) {
        let $after = tr.doc.resolve(pos + depth);
        replaceLinebreaks(tr, $after.node(), $after.before(), mapFrom);
    }
    if (beforeType.inlineContent) clearIncompatible(tr, pos + depth - 1, beforeType, $before.node().contentMatchAt($before.index()), convertNewlines == null);
    let mapping = tr.mapping.slice(mapFrom), start = mapping.map(pos - depth);
    tr.step(new ReplaceStep(start, mapping.map(pos + depth, -1), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty, true));
    if (convertNewlines === true) {
        let $full = tr.doc.resolve(start);
        replaceNewlines(tr, $full.node(), $full.before(), tr.steps.length);
    }
    return tr;
}
/**
Try to find a point where a node of the given type can be inserted
near `pos`, by searching up the node hierarchy when `pos` itself
isn't a valid place but is at the start or end of a node. Return
null if no position was found.
*/ function insertPoint(doc, pos, nodeType) {
    let $pos = doc.resolve(pos);
    if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) return pos;
    if ($pos.parentOffset == 0) for(let d = $pos.depth - 1; d >= 0; d--){
        let index = $pos.index(d);
        if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.before(d + 1);
        if (index > 0) return null;
    }
    if ($pos.parentOffset == $pos.parent.content.size) for(let d = $pos.depth - 1; d >= 0; d--){
        let index = $pos.indexAfter(d);
        if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.after(d + 1);
        if (index < $pos.node(d).childCount) return null;
    }
    return null;
}
/**
Finds a position at or around the given position where the given
slice can be inserted. Will look at parent nodes' nearest boundary
and try there, even if the original position wasn't directly at the
start or end of that node. Returns null when no position was found.
*/ function dropPoint(doc, pos, slice) {
    let $pos = doc.resolve(pos);
    if (!slice.content.size) return pos;
    let content = slice.content;
    for(let i = 0; i < slice.openStart; i++)content = content.firstChild.content;
    for(let pass = 1; pass <= (slice.openStart == 0 && slice.size ? 2 : 1); pass++){
        for(let d = $pos.depth; d >= 0; d--){
            let bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
            let insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
            let parent = $pos.node(d), fits = false;
            if (pass == 1) {
                fits = parent.canReplace(insertPos, insertPos, content);
            } else {
                let wrapping = parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);
                fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
            }
            if (fits) return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
        }
    }
    return null;
}
/**
‘Fit’ a slice into a given position in the document, producing a
[step](https://prosemirror.net/docs/ref/#transform.Step) that inserts it. Will return null if
there's no meaningful way to insert the slice here, or inserting it
would be a no-op (an empty slice over an empty range).
*/ function replaceStep(doc, from, to = from, slice = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
    if (from == to && !slice.size) return null;
    let $from = doc.resolve(from), $to = doc.resolve(to);
    // Optimization -- avoid work if it's obvious that it's not needed.
    if (fitsTrivially($from, $to, slice)) return new ReplaceStep(from, to, slice);
    return new Fitter($from, $to, slice).fit();
}
function fitsTrivially($from, $to, slice) {
    return !slice.openStart && !slice.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice.content);
}
// Algorithm for 'placing' the elements of a slice into a gap:
//
// We consider the content of each node that is open to the left to be
// independently placeable. I.e. in <p("foo"), p("bar")>, when the
// paragraph on the left is open, "foo" can be placed (somewhere on
// the left side of the replacement gap) independently from p("bar").
//
// This class tracks the state of the placement progress in the
// following properties:
//
//  - `frontier` holds a stack of `{type, match}` objects that
//    represent the open side of the replacement. It starts at
//    `$from`, then moves forward as content is placed, and is finally
//    reconciled with `$to`.
//
//  - `unplaced` is a slice that represents the content that hasn't
//    been placed yet.
//
//  - `placed` is a fragment of placed content. Its open-start value
//    is implicit in `$from`, and its open-end value in `frontier`.
class Fitter {
    constructor($from, $to, unplaced){
        this.$from = $from;
        this.$to = $to;
        this.unplaced = unplaced;
        this.frontier = [];
        this.placed = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty;
        for(let i = 0; i <= $from.depth; i++){
            let node = $from.node(i);
            this.frontier.push({
                type: node.type,
                match: node.contentMatchAt($from.indexAfter(i))
            });
        }
        for(let i = $from.depth; i > 0; i--)this.placed = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from($from.node(i).copy(this.placed));
    }
    get depth() {
        return this.frontier.length - 1;
    }
    fit() {
        // As long as there's unplaced content, try to place some of it.
        // If that fails, either increase the open score of the unplaced
        // slice, or drop nodes from it, and then try again.
        while(this.unplaced.size){
            let fit = this.findFittable();
            if (fit) this.placeNodes(fit);
            else this.openMore() || this.dropNode();
        }
        // When there's inline content directly after the frontier _and_
        // directly after `this.$to`, we must generate a `ReplaceAround`
        // step that pulls that content into the node after the frontier.
        // That means the fitting must be done to the end of the textblock
        // node after `this.$to`, not `this.$to` itself.
        let moveInline = this.mustMoveInline(), placedSize = this.placed.size - this.depth - this.$from.depth;
        let $from = this.$from, $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
        if (!$to) return null;
        // If closing to `$to` succeeded, create a step
        let content = this.placed, openStart = $from.depth, openEnd = $to.depth;
        while(openStart && openEnd && content.childCount == 1){
            content = content.firstChild.content;
            openStart--;
            openEnd--;
        }
        let slice = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](content, openStart, openEnd);
        if (moveInline > -1) return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice, placedSize);
        if (slice.size || $from.pos != this.$to.pos) return new ReplaceStep($from.pos, $to.pos, slice);
        return null;
    }
    // Find a position on the start spine of `this.unplaced` that has
    // content that can be moved somewhere on the frontier. Returns two
    // depths, one for the slice and one for the frontier.
    findFittable() {
        let startDepth = this.unplaced.openStart;
        for(let cur = this.unplaced.content, d = 0, openEnd = this.unplaced.openEnd; d < startDepth; d++){
            let node = cur.firstChild;
            if (cur.childCount > 1) openEnd = 0;
            if (node.type.spec.isolating && openEnd <= d) {
                startDepth = d;
                break;
            }
            cur = node.content;
        }
        // Only try wrapping nodes (pass 2) after finding a place without
        // wrapping failed.
        for(let pass = 1; pass <= 2; pass++){
            for(let sliceDepth = pass == 1 ? startDepth : this.unplaced.openStart; sliceDepth >= 0; sliceDepth--){
                let fragment, parent = null;
                if (sliceDepth) {
                    parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
                    fragment = parent.content;
                } else {
                    fragment = this.unplaced.content;
                }
                let first = fragment.firstChild;
                for(let frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--){
                    let { type, match } = this.frontier[frontierDepth], wrap, inject = null;
                    // In pass 1, if the next node matches, or there is no next
                    // node but the parents look compatible, we've found a
                    // place.
                    if (pass == 1 && (first ? match.matchType(first.type) || (inject = match.fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(first), false)) : parent && type.compatibleContent(parent.type))) return {
                        sliceDepth,
                        frontierDepth,
                        parent,
                        inject
                    };
                    else if (pass == 2 && first && (wrap = match.findWrapping(first.type))) return {
                        sliceDepth,
                        frontierDepth,
                        parent,
                        wrap
                    };
                    // Don't continue looking further up if the parent node
                    // would fit here.
                    if (parent && match.matchType(parent.type)) break;
                }
            }
        }
    }
    openMore() {
        let { content, openStart, openEnd } = this.unplaced;
        let inner = contentAt(content, openStart);
        if (!inner.childCount || inner.firstChild.isLeaf) return false;
        this.unplaced = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
        return true;
    }
    dropNode() {
        let { content, openStart, openEnd } = this.unplaced;
        let inner = contentAt(content, openStart);
        if (inner.childCount <= 1 && openStart > 0) {
            let openAtEnd = content.size - openStart <= openStart + inner.size;
            this.unplaced = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
        } else {
            this.unplaced = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](dropFromFragment(content, openStart, 1), openStart, openEnd);
        }
    }
    // Move content from the unplaced slice at `sliceDepth` to the
    // frontier node at `frontierDepth`. Close that frontier node when
    // applicable.
    placeNodes({ sliceDepth, frontierDepth, parent, inject, wrap }) {
        while(this.depth > frontierDepth)this.closeFrontierNode();
        if (wrap) for(let i = 0; i < wrap.length; i++)this.openFrontierNode(wrap[i]);
        let slice = this.unplaced, fragment = parent ? parent.content : slice.content;
        let openStart = slice.openStart - sliceDepth;
        let taken = 0, add = [];
        let { match, type } = this.frontier[frontierDepth];
        if (inject) {
            for(let i = 0; i < inject.childCount; i++)add.push(inject.child(i));
            match = match.matchFragment(inject);
        }
        // Computes the amount of (end) open nodes at the end of the
        // fragment. When 0, the parent is open, but no more. When
        // negative, nothing is open.
        let openEndCount = fragment.size + sliceDepth - (slice.content.size - slice.openEnd);
        // Scan over the fragment, fitting as many child nodes as
        // possible.
        while(taken < fragment.childCount){
            let next = fragment.child(taken), matches = match.matchType(next.type);
            if (!matches) break;
            taken++;
            if (taken > 1 || openStart == 0 || next.content.size) {
                match = matches;
                add.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
            }
        }
        let toEnd = taken == fragment.childCount;
        if (!toEnd) openEndCount = -1;
        this.placed = addToFragment(this.placed, frontierDepth, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(add));
        this.frontier[frontierDepth].match = match;
        // If the parent types match, and the entire node was moved, and
        // it's not open, close this frontier node right away.
        if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1) this.closeFrontierNode();
        // Add new frontier nodes for any open nodes at the end.
        for(let i = 0, cur = fragment; i < openEndCount; i++){
            let node = cur.lastChild;
            this.frontier.push({
                type: node.type,
                match: node.contentMatchAt(node.childCount)
            });
            cur = node.content;
        }
        // Update `this.unplaced`. Drop the entire node from which we
        // placed it we got to its end, otherwise just drop the placed
        // nodes.
        this.unplaced = !toEnd ? new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](dropFromFragment(slice.content, sliceDepth, taken), slice.openStart, slice.openEnd) : sliceDepth == 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](dropFromFragment(slice.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice.openEnd : sliceDepth - 1);
    }
    mustMoveInline() {
        if (!this.$to.parent.isTextblock) return -1;
        let top = this.frontier[this.depth], level;
        if (!top.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top.type, top.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth) return -1;
        let { depth } = this.$to, after = this.$to.after(depth);
        while(depth > 1 && after == this.$to.end(--depth))++after;
        return after;
    }
    findCloseLevel($to) {
        scan: for(let i = Math.min(this.depth, $to.depth); i >= 0; i--){
            let { match, type } = this.frontier[i];
            let dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
            let fit = contentAfterFits($to, i, type, match, dropInner);
            if (!fit) continue;
            for(let d = i - 1; d >= 0; d--){
                let { match, type } = this.frontier[d];
                let matches = contentAfterFits($to, d, type, match, true);
                if (!matches || matches.childCount) continue scan;
            }
            return {
                depth: i,
                fit,
                move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to
            };
        }
    }
    close($to) {
        let close = this.findCloseLevel($to);
        if (!close) return null;
        while(this.depth > close.depth)this.closeFrontierNode();
        if (close.fit.childCount) this.placed = addToFragment(this.placed, close.depth, close.fit);
        $to = close.move;
        for(let d = close.depth + 1; d <= $to.depth; d++){
            let node = $to.node(d), add = node.type.contentMatch.fillBefore(node.content, true, $to.index(d));
            this.openFrontierNode(node.type, node.attrs, add);
        }
        return $to;
    }
    openFrontierNode(type, attrs = null, content) {
        let top = this.frontier[this.depth];
        top.match = top.match.matchType(type);
        this.placed = addToFragment(this.placed, this.depth, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(type.create(attrs, content)));
        this.frontier.push({
            type,
            match: type.contentMatch
        });
    }
    closeFrontierNode() {
        let open = this.frontier.pop();
        let add = open.match.fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, true);
        if (add.childCount) this.placed = addToFragment(this.placed, this.frontier.length, add);
    }
}
function dropFromFragment(fragment, depth, count) {
    if (depth == 0) return fragment.cutByIndex(count, fragment.childCount);
    return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
}
function addToFragment(fragment, depth, content) {
    if (depth == 0) return fragment.append(content);
    return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
}
function contentAt(fragment, depth) {
    for(let i = 0; i < depth; i++)fragment = fragment.firstChild.content;
    return fragment;
}
function closeNodeStart(node, openStart, openEnd) {
    if (openStart <= 0) return node;
    let frag = node.content;
    if (openStart > 1) frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
    if (openStart > 0) {
        frag = node.type.contentMatch.fillBefore(frag).append(frag);
        if (openEnd <= 0) frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, true));
    }
    return node.copy(frag);
}
function contentAfterFits($to, depth, type, match, open) {
    let node = $to.node(depth), index = open ? $to.indexAfter(depth) : $to.index(depth);
    if (index == node.childCount && !type.compatibleContent(node.type)) return null;
    let fit = match.fillBefore(node.content, true, index);
    return fit && !invalidMarks(type, node.content, index) ? fit : null;
}
function invalidMarks(type, fragment, start) {
    for(let i = start; i < fragment.childCount; i++)if (!type.allowsMarks(fragment.child(i).marks)) return true;
    return false;
}
function definesContent(type) {
    return type.spec.defining || type.spec.definingForContent;
}
function replaceRange(tr, from, to, slice) {
    if (!slice.size) return tr.deleteRange(from, to);
    let $from = tr.doc.resolve(from), $to = tr.doc.resolve(to);
    if (fitsTrivially($from, $to, slice)) return tr.step(new ReplaceStep(from, to, slice));
    let targetDepths = coveredDepths($from, $to);
    // Can't replace the whole document, so remove 0 if it's present
    if (targetDepths[targetDepths.length - 1] == 0) targetDepths.pop();
    // Negative numbers represent not expansion over the whole node at
    // that depth, but replacing from $from.before(-D) to $to.pos.
    let preferredTarget = -($from.depth + 1);
    targetDepths.unshift(preferredTarget);
    // This loop picks a preferred target depth, if one of the covering
    // depths is not outside of a defining node, and adds negative
    // depths for any depth that has $from at its start and does not
    // cross a defining node.
    for(let d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--){
        let spec = $from.node(d).type.spec;
        if (spec.defining || spec.definingAsContext || spec.isolating) break;
        if (targetDepths.indexOf(d) > -1) preferredTarget = d;
        else if ($from.before(d) == pos) targetDepths.splice(1, 0, -d);
    }
    // Try to fit each possible depth of the slice into each possible
    // target depth, starting with the preferred depths.
    let preferredTargetIndex = targetDepths.indexOf(preferredTarget);
    let leftNodes = [], preferredDepth = slice.openStart;
    for(let content = slice.content, i = 0;; i++){
        let node = content.firstChild;
        leftNodes.push(node);
        if (i == slice.openStart) break;
        content = node.content;
    }
    // Back up preferredDepth to cover defining textblocks directly
    // above it, possibly skipping a non-defining textblock.
    for(let d = preferredDepth - 1; d >= 0; d--){
        let leftNode = leftNodes[d], def = definesContent(leftNode.type);
        if (def && !leftNode.sameMarkup($from.node(Math.abs(preferredTarget) - 1))) preferredDepth = d;
        else if (def || !leftNode.type.isTextblock) break;
    }
    for(let j = slice.openStart; j >= 0; j--){
        let openDepth = (j + preferredDepth + 1) % (slice.openStart + 1);
        let insert = leftNodes[openDepth];
        if (!insert) continue;
        for(let i = 0; i < targetDepths.length; i++){
            // Loop over possible expansion levels, starting with the
            // preferred one
            let targetDepth = targetDepths[(i + preferredTargetIndex) % targetDepths.length], expand = true;
            if (targetDepth < 0) {
                expand = false;
                targetDepth = -targetDepth;
            }
            let parent = $from.node(targetDepth - 1), index = $from.index(targetDepth - 1);
            if (parent.canReplaceWith(index, index, insert.type, insert.marks)) return tr.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](closeFragment(slice.content, 0, slice.openStart, openDepth), openDepth, slice.openEnd));
        }
    }
    let startSteps = tr.steps.length;
    for(let i = targetDepths.length - 1; i >= 0; i--){
        tr.replace(from, to, slice);
        if (tr.steps.length > startSteps) break;
        let depth = targetDepths[i];
        if (depth < 0) continue;
        from = $from.before(depth);
        to = $to.after(depth);
    }
}
function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
    if (depth < oldOpen) {
        let first = fragment.firstChild;
        fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
    }
    if (depth > newOpen) {
        let match = parent.contentMatchAt(0);
        let start = match.fillBefore(fragment).append(fragment);
        fragment = start.append(match.matchFragment(start).fillBefore(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].empty, true));
    }
    return fragment;
}
function replaceRangeWith(tr, from, to, node) {
    if (!node.isInline && from == to && tr.doc.resolve(from).parent.content.size) {
        let point = insertPoint(tr.doc, from, node.type);
        if (point != null) from = to = point;
    }
    tr.replaceRange(from, to, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(node), 0, 0));
}
function deleteRange(tr, from, to) {
    let $from = tr.doc.resolve(from), $to = tr.doc.resolve(to);
    // When the deleted range spans from the start of one textblock to
    // the start of another one, move out of the start of both blocks.
    if ($from.parent.isTextblock && $to.parent.isTextblock && $from.start() != $to.start() && $from.parentOffset == 0 && $to.parentOffset == 0) {
        let shared = $from.sharedDepth(to), isolated = false;
        for(let d = $from.depth; d > shared; d--)if ($from.node(d).type.spec.isolating) isolated = true;
        for(let d = $to.depth; d > shared; d--)if ($to.node(d).type.spec.isolating) isolated = true;
        if (!isolated) {
            for(let d = $from.depth; d > 0 && from == $from.start(d); d--)from = $from.before(d);
            for(let d = $to.depth; d > 0 && to == $to.start(d); d--)to = $to.before(d);
            $from = tr.doc.resolve(from);
            $to = tr.doc.resolve(to);
        }
    }
    let covered = coveredDepths($from, $to);
    for(let i = 0; i < covered.length; i++){
        let depth = covered[i], last = i == covered.length - 1;
        if (last && depth == 0 || $from.node(depth).type.contentMatch.validEnd) return tr.delete($from.start(depth), $to.end(depth));
        if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1)))) return tr.delete($from.before(depth), $to.after(depth));
    }
    for(let d = 1; d <= $from.depth && d <= $to.depth; d++){
        if (from - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d && $from.start(d - 1) == $to.start(d - 1) && $from.node(d - 1).canReplace($from.index(d - 1), $to.index(d - 1))) return tr.delete($from.before(d), to);
    }
    tr.delete(from, to);
}
// Returns an array of all depths for which $from - $to spans the
// whole content of the nodes at that depth.
function coveredDepths($from, $to) {
    let result = [], minDepth = Math.min($from.depth, $to.depth);
    for(let d = minDepth; d >= 0; d--){
        let start = $from.start(d);
        if (start < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating) break;
        if (start == $to.start(d) || d == $from.depth && d == $to.depth && $from.parent.inlineContent && $to.parent.inlineContent && d && $to.start(d - 1) == start - 1) result.push(d);
    }
    return result;
}
/**
Update an attribute in a specific node.
*/ class AttrStep extends Step {
    /**
    Construct an attribute step.
    */ constructor(/**
    The position of the target node.
    */ pos, /**
    The attribute to set.
    */ attr, // The attribute's new value.
    value){
        super();
        this.pos = pos;
        this.attr = attr;
        this.value = value;
    }
    apply(doc) {
        let node = doc.nodeAt(this.pos);
        if (!node) return StepResult.fail("No node at attribute step's position");
        let attrs = Object.create(null);
        for(let name in node.attrs)attrs[name] = node.attrs[name];
        attrs[this.attr] = this.value;
        let updated = node.type.create(attrs, null, node.marks);
        return StepResult.fromReplace(doc, this.pos, this.pos + 1, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(updated), 0, node.isLeaf ? 0 : 1));
    }
    getMap() {
        return StepMap.empty;
    }
    invert(doc) {
        return new AttrStep(this.pos, this.attr, doc.nodeAt(this.pos).attrs[this.attr]);
    }
    map(mapping) {
        let pos = mapping.mapResult(this.pos, 1);
        return pos.deletedAfter ? null : new AttrStep(pos.pos, this.attr, this.value);
    }
    toJSON() {
        return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value
        };
    }
    static fromJSON(schema, json) {
        if (typeof json.pos != "number" || typeof json.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
        return new AttrStep(json.pos, json.attr, json.value);
    }
}
Step.jsonID("attr", AttrStep);
/**
Update an attribute in the doc node.
*/ class DocAttrStep extends Step {
    /**
    Construct an attribute step.
    */ constructor(/**
    The attribute to set.
    */ attr, // The attribute's new value.
    value){
        super();
        this.attr = attr;
        this.value = value;
    }
    apply(doc) {
        let attrs = Object.create(null);
        for(let name in doc.attrs)attrs[name] = doc.attrs[name];
        attrs[this.attr] = this.value;
        let updated = doc.type.create(attrs, doc.content, doc.marks);
        return StepResult.ok(updated);
    }
    getMap() {
        return StepMap.empty;
    }
    invert(doc) {
        return new DocAttrStep(this.attr, doc.attrs[this.attr]);
    }
    map(mapping) {
        return this;
    }
    toJSON() {
        return {
            stepType: "docAttr",
            attr: this.attr,
            value: this.value
        };
    }
    static fromJSON(schema, json) {
        if (typeof json.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
        return new DocAttrStep(json.attr, json.value);
    }
}
Step.jsonID("docAttr", DocAttrStep);
/**
@internal
*/ let TransformError = class extends Error {
};
TransformError = function TransformError(message) {
    let err = Error.call(this, message);
    err.__proto__ = TransformError.prototype;
    return err;
};
TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError";
/**
Abstraction to build up and track an array of
[steps](https://prosemirror.net/docs/ref/#transform.Step) representing a document transformation.

Most transforming methods return the `Transform` object itself, so
that they can be chained.
*/ class Transform {
    /**
    Create a transform that starts with the given document.
    */ constructor(/**
    The current document (the result of applying the steps in the
    transform).
    */ doc){
        this.doc = doc;
        /**
        The steps in this transform.
        */ this.steps = [];
        /**
        The documents before each of the steps.
        */ this.docs = [];
        /**
        A mapping with the maps for each of the steps in this transform.
        */ this.mapping = new Mapping;
    }
    /**
    The starting document.
    */ get before() {
        return this.docs.length ? this.docs[0] : this.doc;
    }
    /**
    Apply a new step in this transform, saving the result. Throws an
    error when the step fails.
    */ step(step) {
        let result = this.maybeStep(step);
        if (result.failed) throw new TransformError(result.failed);
        return this;
    }
    /**
    Try to apply a step in this transformation, ignoring it if it
    fails. Returns the step result.
    */ maybeStep(step) {
        let result = step.apply(this.doc);
        if (!result.failed) this.addStep(step, result.doc);
        return result;
    }
    /**
    True when the document has been changed (when there are any
    steps).
    */ get docChanged() {
        return this.steps.length > 0;
    }
    /**
    Return a single range, in post-transform document positions,
    that covers all content changed by this transform. Returns null
    if no replacements are made. Note that this will ignore changes
    that add/remove marks without replacing the underlying content.
    */ changedRange() {
        let from = 1e9, to = -1e9;
        for(let i = 0; i < this.mapping.maps.length; i++){
            let map = this.mapping.maps[i];
            if (i) {
                from = map.map(from, 1);
                to = map.map(to, -1);
            }
            map.forEach((_f, _t, fromB, toB)=>{
                from = Math.min(from, fromB);
                to = Math.max(to, toB);
            });
        }
        return from == 1e9 ? null : {
            from,
            to
        };
    }
    /**
    @internal
    */ addStep(step, doc) {
        this.docs.push(this.doc);
        this.steps.push(step);
        this.mapping.appendMap(step.getMap());
        this.doc = doc;
    }
    /**
    Replace the part of the document between `from` and `to` with the
    given `slice`.
    */ replace(from, to = from, slice = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
        let step = replaceStep(this.doc, from, to, slice);
        if (step) this.step(step);
        return this;
    }
    /**
    Replace the given range with the given content, which may be a
    fragment, node, or array of nodes.
    */ replaceWith(from, to, content) {
        return this.replace(from, to, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(content), 0, 0));
    }
    /**
    Delete the content between the given positions.
    */ delete(from, to) {
        return this.replace(from, to, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty);
    }
    /**
    Insert the given content at the given position.
    */ insert(pos, content) {
        return this.replaceWith(pos, pos, content);
    }
    /**
    Replace a range of the document with a given slice, using
    `from`, `to`, and the slice's
    [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
    than fixed start and end points. This method may grow the
    replaced area or close open nodes in the slice in order to get a
    fit that is more in line with WYSIWYG expectations, by dropping
    fully covered parent nodes of the replaced region when they are
    marked [non-defining as
    context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
    open parent node from the slice that _is_ marked as [defining
    its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
    
    This is the method, for example, to handle paste. The similar
    [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
    primitive tool which will _not_ move the start and end of its given
    range, and is useful in situations where you need more precise
    control over what happens.
    */ replaceRange(from, to, slice) {
        replaceRange(this, from, to, slice);
        return this;
    }
    /**
    Replace the given range with a node, but use `from` and `to` as
    hints, rather than precise positions. When from and to are the same
    and are at the start or end of a parent node in which the given
    node doesn't fit, this method may _move_ them out towards a parent
    that does allow the given node to be placed. When the given range
    completely covers a parent node, this method may completely replace
    that parent node.
    */ replaceRangeWith(from, to, node) {
        replaceRangeWith(this, from, to, node);
        return this;
    }
    /**
    Delete the given range, expanding it to cover fully covered
    parent nodes until a valid replace is found.
    */ deleteRange(from, to) {
        deleteRange(this, from, to);
        return this;
    }
    /**
    Split the content in the given range off from its parent, if there
    is sibling content before or after it, and move it up the tree to
    the depth specified by `target`. You'll probably want to use
    [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
    sure the lift is valid.
    */ lift(range, target) {
        lift(this, range, target);
        return this;
    }
    /**
    Join the blocks around the given position. If depth is 2, their
    last and first siblings are also joined, and so on.
    */ join(pos, depth = 1) {
        join(this, pos, depth);
        return this;
    }
    /**
    Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
    The wrappers are assumed to be valid in this position, and should
    probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
    */ wrap(range, wrappers) {
        wrap(this, range, wrappers);
        return this;
    }
    /**
    Set the type of all textblocks (partly) between `from` and `to` to
    the given node type with the given attributes.
    */ setBlockType(from, to = from, type, attrs = null) {
        setBlockType(this, from, to, type, attrs);
        return this;
    }
    /**
    Change the type, attributes, and/or marks of the node at `pos`.
    When `type` isn't given, the existing node type is preserved,
    */ setNodeMarkup(pos, type, attrs = null, marks) {
        setNodeMarkup(this, pos, type, attrs, marks);
        return this;
    }
    /**
    Set a single attribute on a given node to a new value.
    The `pos` addresses the document content. Use `setDocAttribute`
    to set attributes on the document itself.
    */ setNodeAttribute(pos, attr, value) {
        this.step(new AttrStep(pos, attr, value));
        return this;
    }
    /**
    Set a single attribute on the document to a new value.
    */ setDocAttribute(attr, value) {
        this.step(new DocAttrStep(attr, value));
        return this;
    }
    /**
    Add a mark to the node at position `pos`.
    */ addNodeMark(pos, mark) {
        this.step(new AddNodeMarkStep(pos, mark));
        return this;
    }
    /**
    Remove a mark (or all marks of the given type) from the node at
    position `pos`.
    */ removeNodeMark(pos, mark) {
        let node = this.doc.nodeAt(pos);
        if (!node) throw new RangeError("No node at position " + pos);
        if (mark instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"]) {
            if (mark.isInSet(node.marks)) this.step(new RemoveNodeMarkStep(pos, mark));
        } else {
            let set = node.marks, found, steps = [];
            while(found = mark.isInSet(set)){
                steps.push(new RemoveNodeMarkStep(pos, found));
                set = found.removeFromSet(set);
            }
            for(let i = steps.length - 1; i >= 0; i--)this.step(steps[i]);
        }
        return this;
    }
    /**
    Split the node at the given position, and optionally, if `depth` is
    greater than one, any number of nodes above that. By default, the
    parts split off will inherit the node type of the original node.
    This can be changed by passing an array of types and attributes to
    use after the split (with the outermost nodes coming first).
    */ split(pos, depth = 1, typesAfter) {
        split(this, pos, depth, typesAfter);
        return this;
    }
    /**
    Add the given mark to the inline content between `from` and `to`.
    */ addMark(from, to, mark) {
        addMark(this, from, to, mark);
        return this;
    }
    /**
    Remove marks from inline nodes between `from` and `to`. When
    `mark` is a single mark, remove precisely that mark. When it is
    a mark type, remove all marks of that type. When it is null,
    remove all marks of any type.
    */ removeMark(from, to, mark) {
        removeMark(this, from, to, mark);
        return this;
    }
    /**
    Removes all marks and nodes from the content of the node at
    `pos` that don't match the given new parent node type. Accepts
    an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
    third argument.
    */ clearIncompatible(pos, parentType, match) {
        clearIncompatible(this, pos, parentType, match);
        return this;
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AllSelection",
    ()=>AllSelection,
    "EditorState",
    ()=>EditorState,
    "NodeSelection",
    ()=>NodeSelection,
    "Plugin",
    ()=>Plugin,
    "PluginKey",
    ()=>PluginKey,
    "Selection",
    ()=>Selection,
    "SelectionRange",
    ()=>SelectionRange,
    "TextSelection",
    ()=>TextSelection,
    "Transaction",
    ()=>Transaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-model@1.25.11/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-transform@1.12.0/node_modules/prosemirror-transform/dist/index.js [app-client] (ecmascript)");
;
;
const classesById = Object.create(null);
/**
Superclass for editor selections. Every selection type should
extend this. Should not be instantiated directly.
*/ class Selection {
    /**
    Initialize a selection with the head and anchor and ranges. If no
    ranges are given, constructs a single range across `$anchor` and
    `$head`.
    */ constructor(/**
    The resolved anchor of the selection (the side that stays in
    place when the selection is modified).
    */ $anchor, /**
    The resolved head of the selection (the side that moves when
    the selection is modified).
    */ $head, ranges){
        this.$anchor = $anchor;
        this.$head = $head;
        this.ranges = ranges || [
            new SelectionRange($anchor.min($head), $anchor.max($head))
        ];
    }
    /**
    The selection's anchor, as an unresolved position.
    */ get anchor() {
        return this.$anchor.pos;
    }
    /**
    The selection's head.
    */ get head() {
        return this.$head.pos;
    }
    /**
    The lower bound of the selection's main range.
    */ get from() {
        return this.$from.pos;
    }
    /**
    The upper bound of the selection's main range.
    */ get to() {
        return this.$to.pos;
    }
    /**
    The resolved lower  bound of the selection's main range.
    */ get $from() {
        return this.ranges[0].$from;
    }
    /**
    The resolved upper bound of the selection's main range.
    */ get $to() {
        return this.ranges[0].$to;
    }
    /**
    Indicates whether the selection contains any content.
    */ get empty() {
        let ranges = this.ranges;
        for(let i = 0; i < ranges.length; i++)if (ranges[i].$from.pos != ranges[i].$to.pos) return false;
        return true;
    }
    /**
    Get the content of this selection as a slice.
    */ content() {
        return this.$from.doc.slice(this.from, this.to, true);
    }
    /**
    Replace the selection with a slice or, if no slice is given,
    delete the selection. Will append to the given transaction.
    */ replace(tr, content = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
        // Put the new selection at the position after the inserted
        // content. When that ended in an inline node, search backwards,
        // to get the position after that node. If not, search forward.
        let lastNode = content.content.lastChild, lastParent = null;
        for(let i = 0; i < content.openEnd; i++){
            lastParent = lastNode;
            lastNode = lastNode.lastChild;
        }
        let mapFrom = tr.steps.length, ranges = this.ranges;
        for(let i = 0; i < ranges.length; i++){
            let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
            tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty : content);
            if (i == 0) selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
        }
    }
    /**
    Replace the selection with the given node, appending the changes
    to the given transaction.
    */ replaceWith(tr, node) {
        let mapFrom = tr.steps.length, ranges = this.ranges;
        for(let i = 0; i < ranges.length; i++){
            let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
            let from = mapping.map($from.pos), to = mapping.map($to.pos);
            if (i) {
                tr.deleteRange(from, to);
            } else {
                tr.replaceRangeWith(from, to, node);
                selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
            }
        }
    }
    /**
    Find a valid cursor or leaf node selection starting at the given
    position and searching back if `dir` is negative, and forward if
    positive. When `textOnly` is true, only consider cursor
    selections. Will return null when no valid selection position is
    found.
    */ static findFrom($pos, dir, textOnly = false) {
        let inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
        if (inner) return inner;
        for(let depth = $pos.depth - 1; depth >= 0; depth--){
            let found = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
            if (found) return found;
        }
        return null;
    }
    /**
    Find a valid cursor or leaf node selection near the given
    position. Searches forward first by default, but if `bias` is
    negative, it will search backwards first.
    */ static near($pos, bias = 1) {
        return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
    }
    /**
    Find the cursor or leaf node selection closest to the start of
    the given document. Will return an
    [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
    exists.
    */ static atStart(doc) {
        return findSelectionIn(doc, doc, 0, 0, 1) || new AllSelection(doc);
    }
    /**
    Find the cursor or leaf node selection closest to the end of the
    given document.
    */ static atEnd(doc) {
        return findSelectionIn(doc, doc, doc.content.size, doc.childCount, -1) || new AllSelection(doc);
    }
    /**
    Deserialize the JSON representation of a selection. Must be
    implemented for custom classes (as a static class method).
    */ static fromJSON(doc, json) {
        if (!json || !json.type) throw new RangeError("Invalid input for Selection.fromJSON");
        let cls = classesById[json.type];
        if (!cls) throw new RangeError(`No selection type ${json.type} defined`);
        return cls.fromJSON(doc, json);
    }
    /**
    To be able to deserialize selections from JSON, custom selection
    classes must register themselves with an ID string, so that they
    can be disambiguated. Try to pick something that's unlikely to
    clash with classes from other modules.
    */ static jsonID(id, selectionClass) {
        if (id in classesById) throw new RangeError("Duplicate use of selection JSON ID " + id);
        classesById[id] = selectionClass;
        selectionClass.prototype.jsonID = id;
        return selectionClass;
    }
    /**
    Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
    which is a value that can be mapped without having access to a
    current document, and later resolved to a real selection for a
    given document again. (This is used mostly by the history to
    track and restore old selections.) The default implementation of
    this method just converts the selection to a text selection and
    returns the bookmark for that.
    */ getBookmark() {
        return TextSelection.between(this.$anchor, this.$head).getBookmark();
    }
}
Selection.prototype.visible = true;
/**
Represents a selected range in a document.
*/ class SelectionRange {
    /**
    Create a range.
    */ constructor(/**
    The lower bound of the range.
    */ $from, /**
    The upper bound of the range.
    */ $to){
        this.$from = $from;
        this.$to = $to;
    }
}
let warnedAboutTextSelection = false;
function checkTextSelection($pos) {
    if (!warnedAboutTextSelection && !$pos.parent.inlineContent) {
        warnedAboutTextSelection = true;
        console["warn"]("TextSelection endpoint not pointing into a node with inline content (" + $pos.parent.type.name + ")");
    }
}
/**
A text selection represents a classical editor selection, with a
head (the moving side) and anchor (immobile side), both of which
point into textblock nodes. It can be empty (a regular cursor
position).
*/ class TextSelection extends Selection {
    /**
    Construct a text selection between the given points.
    */ constructor($anchor, $head = $anchor){
        checkTextSelection($anchor);
        checkTextSelection($head);
        super($anchor, $head);
    }
    /**
    Returns a resolved position if this is a cursor selection (an
    empty text selection), and null otherwise.
    */ get $cursor() {
        return this.$anchor.pos == this.$head.pos ? this.$head : null;
    }
    map(doc, mapping) {
        let $head = doc.resolve(mapping.map(this.head));
        if (!$head.parent.inlineContent) return Selection.near($head);
        let $anchor = doc.resolve(mapping.map(this.anchor));
        return new TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
    }
    replace(tr, content = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
        super.replace(tr, content);
        if (content == __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
            let marks = this.$from.marksAcross(this.$to);
            if (marks) tr.ensureMarks(marks);
        }
    }
    eq(other) {
        return other instanceof TextSelection && other.anchor == this.anchor && other.head == this.head;
    }
    getBookmark() {
        return new TextBookmark(this.anchor, this.head);
    }
    toJSON() {
        return {
            type: "text",
            anchor: this.anchor,
            head: this.head
        };
    }
    /**
    @internal
    */ static fromJSON(doc, json) {
        if (typeof json.anchor != "number" || typeof json.head != "number") throw new RangeError("Invalid input for TextSelection.fromJSON");
        return new TextSelection(doc.resolve(json.anchor), doc.resolve(json.head));
    }
    /**
    Create a text selection from non-resolved positions.
    */ static create(doc, anchor, head = anchor) {
        let $anchor = doc.resolve(anchor);
        return new this($anchor, head == anchor ? $anchor : doc.resolve(head));
    }
    /**
    Return a text selection that spans the given positions or, if
    they aren't text positions, find a text selection near them.
    `bias` determines whether the method searches forward (default)
    or backwards (negative number) first. Will fall back to calling
    [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
    doesn't contain a valid text position.
    */ static between($anchor, $head, bias) {
        let dPos = $anchor.pos - $head.pos;
        if (!bias || dPos) bias = dPos >= 0 ? 1 : -1;
        if (!$head.parent.inlineContent) {
            let found = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);
            if (found) $head = found.$head;
            else return Selection.near($head, bias);
        }
        if (!$anchor.parent.inlineContent) {
            if (dPos == 0) {
                $anchor = $head;
            } else {
                $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;
                if ($anchor.pos < $head.pos != dPos < 0) $anchor = $head;
            }
        }
        return new TextSelection($anchor, $head);
    }
}
Selection.jsonID("text", TextSelection);
class TextBookmark {
    constructor(anchor, head){
        this.anchor = anchor;
        this.head = head;
    }
    map(mapping) {
        return new TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
    }
    resolve(doc) {
        return TextSelection.between(doc.resolve(this.anchor), doc.resolve(this.head));
    }
}
/**
A node selection is a selection that points at a single node. All
nodes marked [selectable](https://prosemirror.net/docs/ref/#model.NodeSpec.selectable) can be the
target of a node selection. In such a selection, `from` and `to`
point directly before and after the selected node, `anchor` equals
`from`, and `head` equals `to`..
*/ class NodeSelection extends Selection {
    /**
    Create a node selection. Does not verify the validity of its
    argument.
    */ constructor($pos){
        let node = $pos.nodeAfter;
        let $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
        super($pos, $end);
        this.node = node;
    }
    map(doc, mapping) {
        let { deleted, pos } = mapping.mapResult(this.anchor);
        let $pos = doc.resolve(pos);
        if (deleted) return Selection.near($pos);
        return new NodeSelection($pos);
    }
    content() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"].from(this.node), 0, 0);
    }
    eq(other) {
        return other instanceof NodeSelection && other.anchor == this.anchor;
    }
    toJSON() {
        return {
            type: "node",
            anchor: this.anchor
        };
    }
    getBookmark() {
        return new NodeBookmark(this.anchor);
    }
    /**
    @internal
    */ static fromJSON(doc, json) {
        if (typeof json.anchor != "number") throw new RangeError("Invalid input for NodeSelection.fromJSON");
        return new NodeSelection(doc.resolve(json.anchor));
    }
    /**
    Create a node selection from non-resolved positions.
    */ static create(doc, from) {
        return new NodeSelection(doc.resolve(from));
    }
    /**
    Determines whether the given node may be selected as a node
    selection.
    */ static isSelectable(node) {
        return !node.isText && node.type.spec.selectable !== false;
    }
}
NodeSelection.prototype.visible = false;
Selection.jsonID("node", NodeSelection);
class NodeBookmark {
    constructor(anchor){
        this.anchor = anchor;
    }
    map(mapping) {
        let { deleted, pos } = mapping.mapResult(this.anchor);
        return deleted ? new TextBookmark(pos, pos) : new NodeBookmark(pos);
    }
    resolve(doc) {
        let $pos = doc.resolve(this.anchor), node = $pos.nodeAfter;
        if (node && NodeSelection.isSelectable(node)) return new NodeSelection($pos);
        return Selection.near($pos);
    }
}
/**
A selection type that represents selecting the whole document
(which can not necessarily be expressed with a text selection, when
there are for example leaf block nodes at the start or end of the
document).
*/ class AllSelection extends Selection {
    /**
    Create an all-selection over the given document.
    */ constructor(doc){
        super(doc.resolve(0), doc.resolve(doc.content.size));
    }
    replace(tr, content = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
        if (content == __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slice"].empty) {
            tr.delete(0, tr.doc.content.size);
            let sel = Selection.atStart(tr.doc);
            if (!sel.eq(tr.selection)) tr.setSelection(sel);
        } else {
            super.replace(tr, content);
        }
    }
    toJSON() {
        return {
            type: "all"
        };
    }
    /**
    @internal
    */ static fromJSON(doc) {
        return new AllSelection(doc);
    }
    map(doc) {
        return new AllSelection(doc);
    }
    eq(other) {
        return other instanceof AllSelection;
    }
    getBookmark() {
        return AllBookmark;
    }
}
Selection.jsonID("all", AllSelection);
const AllBookmark = {
    map () {
        return this;
    },
    resolve (doc) {
        return new AllSelection(doc);
    }
};
// FIXME we'll need some awareness of text direction when scanning for selections
// Try to find a selection inside the given node. `pos` points at the
// position where the search starts. When `text` is true, only return
// text selections.
function findSelectionIn(doc, node, pos, index, dir, text = false) {
    if (node.inlineContent) return TextSelection.create(doc, pos);
    for(let i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir){
        let child = node.child(i);
        if (!child.isAtom) {
            let inner = findSelectionIn(doc, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);
            if (inner) return inner;
        } else if (!text && NodeSelection.isSelectable(child)) {
            return NodeSelection.create(doc, pos - (dir < 0 ? child.nodeSize : 0));
        }
        pos += child.nodeSize * dir;
    }
    return null;
}
function selectionToInsertionEnd(tr, startLen, bias) {
    let last = tr.steps.length - 1;
    if (last < startLen) return;
    let step = tr.steps[last];
    if (!(step instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceStep"] || step instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceAroundStep"])) return;
    let map = tr.mapping.maps[last], end;
    map.forEach((_from, _to, _newFrom, newTo)=>{
        if (end == null) end = newTo;
    });
    tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
}
const UPDATED_SEL = 1, UPDATED_MARKS = 2, UPDATED_SCROLL = 4;
/**
An editor state transaction, which can be applied to a state to
create an updated state. Use
[`EditorState.tr`](https://prosemirror.net/docs/ref/#state.EditorState.tr) to create an instance.

Transactions track changes to the document (they are a subclass of
[`Transform`](https://prosemirror.net/docs/ref/#transform.Transform)), but also other state changes,
like selection updates and adjustments of the set of [stored
marks](https://prosemirror.net/docs/ref/#state.EditorState.storedMarks). In addition, you can store
metadata properties in a transaction, which are extra pieces of
information that client code or plugins can use to describe what a
transaction represents, so that they can update their [own
state](https://prosemirror.net/docs/ref/#state.StateField) accordingly.

The [editor view](https://prosemirror.net/docs/ref/#view.EditorView) uses a few metadata
properties: it will attach a property `"pointer"` with the value
`true` to selection transactions directly caused by mouse or touch
input, a `"composition"` property holding an ID identifying the
composition that caused it to transactions caused by composed DOM
input, and a `"uiEvent"` property of that may be `"paste"`,
`"cut"`, or `"drop"`.
*/ class Transaction extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$transform$40$1$2e$12$2e$0$2f$node_modules$2f$prosemirror$2d$transform$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"] {
    /**
    @internal
    */ constructor(state){
        super(state.doc);
        // The step count for which the current selection is valid.
        this.curSelectionFor = 0;
        // Bitfield to track which aspects of the state were updated by
        // this transaction.
        this.updated = 0;
        // Object used to store metadata properties for the transaction.
        this.meta = Object.create(null);
        this.time = Date.now();
        this.curSelection = state.selection;
        this.storedMarks = state.storedMarks;
    }
    /**
    The transaction's current selection. This defaults to the editor
    selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
    transaction, but can be overwritten with
    [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
    */ get selection() {
        if (this.curSelectionFor < this.steps.length) {
            this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
            this.curSelectionFor = this.steps.length;
        }
        return this.curSelection;
    }
    /**
    Update the transaction's current selection. Will determine the
    selection that the editor gets when the transaction is applied.
    */ setSelection(selection) {
        if (selection.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
        this.curSelection = selection;
        this.curSelectionFor = this.steps.length;
        this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS;
        this.storedMarks = null;
        return this;
    }
    /**
    Whether the selection was explicitly updated by this transaction.
    */ get selectionSet() {
        return (this.updated & UPDATED_SEL) > 0;
    }
    /**
    Set the current stored marks.
    */ setStoredMarks(marks) {
        this.storedMarks = marks;
        this.updated |= UPDATED_MARKS;
        return this;
    }
    /**
    Make sure the current stored marks or, if that is null, the marks
    at the selection, match the given set of marks. Does nothing if
    this is already the case.
    */ ensureMarks(marks) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].sameSet(this.storedMarks || this.selection.$from.marks(), marks)) this.setStoredMarks(marks);
        return this;
    }
    /**
    Add a mark to the set of stored marks.
    */ addStoredMark(mark) {
        return this.ensureMarks(mark.addToSet(this.storedMarks || this.selection.$head.marks()));
    }
    /**
    Remove a mark or mark type from the set of stored marks.
    */ removeStoredMark(mark) {
        return this.ensureMarks(mark.removeFromSet(this.storedMarks || this.selection.$head.marks()));
    }
    /**
    Whether the stored marks were explicitly set for this transaction.
    */ get storedMarksSet() {
        return (this.updated & UPDATED_MARKS) > 0;
    }
    /**
    @internal
    */ addStep(step, doc) {
        super.addStep(step, doc);
        this.updated = this.updated & ~UPDATED_MARKS;
        this.storedMarks = null;
    }
    /**
    Update the timestamp for the transaction.
    */ setTime(time) {
        this.time = time;
        return this;
    }
    /**
    Replace the current selection with the given slice.
    */ replaceSelection(slice) {
        this.selection.replace(this, slice);
        return this;
    }
    /**
    Replace the selection with the given node. When `inheritMarks` is
    true and the content is inline, it inherits the marks from the
    place where it is inserted.
    */ replaceSelectionWith(node, inheritMarks = true) {
        let selection = this.selection;
        if (inheritMarks) node = node.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].none));
        selection.replaceWith(this, node);
        return this;
    }
    /**
    Delete the selection.
    */ deleteSelection() {
        this.selection.replace(this);
        return this;
    }
    /**
    Replace the given range, or the selection if no range is given,
    with a text node containing the given string.
    */ insertText(text, from, to) {
        let schema = this.doc.type.schema;
        if (from == null) {
            if (!text) return this.deleteSelection();
            return this.replaceSelectionWith(schema.text(text), true);
        } else {
            if (to == null) to = from;
            if (!text) return this.deleteRange(from, to);
            let marks = this.storedMarks;
            if (!marks) {
                let $from = this.doc.resolve(from);
                marks = to == from ? $from.marks() : $from.marksAcross(this.doc.resolve(to));
            }
            this.replaceRangeWith(from, to, schema.text(text, marks));
            if (!this.selection.empty && this.selection.to == from + text.length) this.setSelection(Selection.near(this.selection.$to));
            return this;
        }
    }
    /**
    Store a metadata property in this transaction, keyed either by
    name or by plugin.
    */ setMeta(key, value) {
        this.meta[typeof key == "string" ? key : key.key] = value;
        return this;
    }
    /**
    Retrieve a metadata property for a given name or plugin.
    */ getMeta(key) {
        return this.meta[typeof key == "string" ? key : key.key];
    }
    /**
    Returns true if this transaction doesn't contain any metadata,
    and can thus safely be extended.
    */ get isGeneric() {
        for(let _ in this.meta)return false;
        return true;
    }
    /**
    Indicate that the editor should scroll the selection into view
    when updated to the state produced by this transaction.
    */ scrollIntoView() {
        this.updated |= UPDATED_SCROLL;
        return this;
    }
    /**
    True when this transaction has had `scrollIntoView` called on it.
    */ get scrolledIntoView() {
        return (this.updated & UPDATED_SCROLL) > 0;
    }
}
function bind(f, self) {
    return !self || !f ? f : f.bind(self);
}
class FieldDesc {
    constructor(name, desc, self){
        this.name = name;
        this.init = bind(desc.init, self);
        this.apply = bind(desc.apply, self);
    }
}
const baseFields = [
    new FieldDesc("doc", {
        init (config) {
            return config.doc || config.schema.topNodeType.createAndFill();
        },
        apply (tr) {
            return tr.doc;
        }
    }),
    new FieldDesc("selection", {
        init (config, instance) {
            return config.selection || Selection.atStart(instance.doc);
        },
        apply (tr) {
            return tr.selection;
        }
    }),
    new FieldDesc("storedMarks", {
        init (config) {
            return config.storedMarks || null;
        },
        apply (tr, _marks, _old, state) {
            return state.selection.$cursor ? tr.storedMarks : null;
        }
    }),
    new FieldDesc("scrollToSelection", {
        init () {
            return 0;
        },
        apply (tr, prev) {
            return tr.scrolledIntoView ? prev + 1 : prev;
        }
    })
];
// Object wrapping the part of a state object that stays the same
// across transactions. Stored in the state's `config` property.
class Configuration {
    constructor(schema, plugins){
        this.schema = schema;
        this.plugins = [];
        this.pluginsByKey = Object.create(null);
        this.fields = baseFields.slice();
        if (plugins) plugins.forEach((plugin)=>{
            if (this.pluginsByKey[plugin.key]) throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")");
            this.plugins.push(plugin);
            this.pluginsByKey[plugin.key] = plugin;
            if (plugin.spec.state) this.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin));
        });
    }
}
/**
The state of a ProseMirror editor is represented by an object of
this type. A state is a persistent data structure—it isn't
updated, but rather a new state value is computed from an old one
using the [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) method.

A state holds a number of built-in fields, and plugins can
[define](https://prosemirror.net/docs/ref/#state.PluginSpec.state) additional fields.
*/ class EditorState {
    /**
    @internal
    */ constructor(/**
    @internal
    */ config){
        this.config = config;
    }
    /**
    The schema of the state's document.
    */ get schema() {
        return this.config.schema;
    }
    /**
    The plugins that are active in this state.
    */ get plugins() {
        return this.config.plugins;
    }
    /**
    Apply the given transaction to produce a new state.
    */ apply(tr) {
        return this.applyTransaction(tr).state;
    }
    /**
    @internal
    */ filterTransaction(tr, ignore = -1) {
        for(let i = 0; i < this.config.plugins.length; i++)if (i != ignore) {
            let plugin = this.config.plugins[i];
            if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this)) return false;
        }
        return true;
    }
    /**
    Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
    returns the precise transactions that were applied (which might
    be influenced by the [transaction
    hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
    plugins) along with the new state.
    */ applyTransaction(rootTr) {
        if (!this.filterTransaction(rootTr)) return {
            state: this,
            transactions: []
        };
        let trs = [
            rootTr
        ], newState = this.applyInner(rootTr), seen = null;
        // This loop repeatedly gives plugins a chance to respond to
        // transactions as new transactions are added, making sure to only
        // pass the transactions the plugin did not see before.
        for(;;){
            let haveNew = false;
            for(let i = 0; i < this.config.plugins.length; i++){
                let plugin = this.config.plugins[i];
                if (plugin.spec.appendTransaction) {
                    let n = seen ? seen[i].n : 0, oldState = seen ? seen[i].state : this;
                    let tr = n < trs.length && plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);
                    if (tr && newState.filterTransaction(tr, i)) {
                        tr.setMeta("appendedTransaction", rootTr);
                        if (!seen) {
                            seen = [];
                            for(let j = 0; j < this.config.plugins.length; j++)seen.push(j < i ? {
                                state: newState,
                                n: trs.length
                            } : {
                                state: this,
                                n: 0
                            });
                        }
                        trs.push(tr);
                        newState = newState.applyInner(tr);
                        haveNew = true;
                    }
                    if (seen) seen[i] = {
                        state: newState,
                        n: trs.length
                    };
                }
            }
            if (!haveNew) return {
                state: newState,
                transactions: trs
            };
        }
    }
    /**
    @internal
    */ applyInner(tr) {
        if (!tr.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
        let newInstance = new EditorState(this.config), fields = this.config.fields;
        for(let i = 0; i < fields.length; i++){
            let field = fields[i];
            newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
        }
        return newInstance;
    }
    /**
    Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
    */ get tr() {
        return new Transaction(this);
    }
    /**
    Create a new state.
    */ static create(config) {
        let $config = new Configuration(config.doc ? config.doc.type.schema : config.schema, config.plugins);
        let instance = new EditorState($config);
        for(let i = 0; i < $config.fields.length; i++)instance[$config.fields[i].name] = $config.fields[i].init(config, instance);
        return instance;
    }
    /**
    Create a new state based on this one, but with an adjusted set
    of active plugins. State fields that exist in both sets of
    plugins are kept unchanged. Those that no longer exist are
    dropped, and those that are new are initialized using their
    [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
    configuration object..
    */ reconfigure(config) {
        let $config = new Configuration(this.schema, config.plugins);
        let fields = $config.fields, instance = new EditorState($config);
        for(let i = 0; i < fields.length; i++){
            let name = fields[i].name;
            instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config, instance);
        }
        return instance;
    }
    /**
    Serialize this state to JSON. If you want to serialize the state
    of plugins, pass an object mapping property names to use in the
    resulting JSON object to plugin objects. The argument may also be
    a string or number, in which case it is ignored, to support the
    way `JSON.stringify` calls `toString` methods.
    */ toJSON(pluginFields) {
        let result = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON()
        };
        if (this.storedMarks) result.storedMarks = this.storedMarks.map((m)=>m.toJSON());
        if (pluginFields && typeof pluginFields == 'object') for(let prop in pluginFields){
            if (prop == "doc" || prop == "selection") throw new RangeError("The JSON fields `doc` and `selection` are reserved");
            let plugin = pluginFields[prop], state = plugin.spec.state;
            if (state && state.toJSON) result[prop] = state.toJSON.call(plugin, this[plugin.key]);
        }
        return result;
    }
    /**
    Deserialize a JSON representation of a state. `config` should
    have at least a `schema` field, and should contain array of
    plugins to initialize the state with. `pluginFields` can be used
    to deserialize the state of plugins, by associating plugin
    instances with the property names they use in the JSON object.
    */ static fromJSON(config, json, pluginFields) {
        if (!json) throw new RangeError("Invalid input for EditorState.fromJSON");
        if (!config.schema) throw new RangeError("Required config field 'schema' missing");
        let $config = new Configuration(config.schema, config.plugins);
        let instance = new EditorState($config);
        $config.fields.forEach((field)=>{
            if (field.name == "doc") {
                instance.doc = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$model$40$1$2e$25$2e$11$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].fromJSON(config.schema, json.doc);
            } else if (field.name == "selection") {
                instance.selection = Selection.fromJSON(instance.doc, json.selection);
            } else if (field.name == "storedMarks") {
                if (json.storedMarks) instance.storedMarks = json.storedMarks.map(config.schema.markFromJSON);
            } else {
                if (pluginFields) for(let prop in pluginFields){
                    let plugin = pluginFields[prop], state = plugin.spec.state;
                    if (plugin.key == field.name && state && state.fromJSON && Object.prototype.hasOwnProperty.call(json, prop)) {
                        instance[field.name] = state.fromJSON.call(plugin, config, json[prop], instance);
                        return;
                    }
                }
                instance[field.name] = field.init(config, instance);
            }
        });
        return instance;
    }
}
function bindProps(obj, self, target) {
    for(let prop in obj){
        let val = obj[prop];
        if (val instanceof Function) val = val.bind(self);
        else if (prop == "handleDOMEvents") val = bindProps(val, self, {});
        target[prop] = val;
    }
    return target;
}
/**
Plugins bundle functionality that can be added to an editor.
They are part of the [editor state](https://prosemirror.net/docs/ref/#state.EditorState) and
may influence that state and the view that contains it.
*/ class Plugin {
    /**
    Create a plugin.
    */ constructor(/**
    The plugin's [spec object](https://prosemirror.net/docs/ref/#state.PluginSpec).
    */ spec){
        this.spec = spec;
        /**
        The [props](https://prosemirror.net/docs/ref/#view.EditorProps) exported by this plugin.
        */ this.props = {};
        if (spec.props) bindProps(spec.props, this, this.props);
        this.key = spec.key ? spec.key.key : createKey("plugin");
    }
    /**
    Extract the plugin's state field from an editor state.
    */ getState(state) {
        return state[this.key];
    }
}
const keys = Object.create(null);
function createKey(name) {
    if (name in keys) return name + "$" + ++keys[name];
    keys[name] = 0;
    return name + "$";
}
/**
A key is used to [tag](https://prosemirror.net/docs/ref/#state.PluginSpec.key) plugins in a way
that makes it possible to find them, given an editor state.
Assigning a key does mean only one plugin of that type can be
active in a state.
*/ class PluginKey {
    /**
    Create a plugin key.
    */ constructor(name = "key"){
        this.key = createKey(name);
    }
    /**
    Get the active plugin with this key, if any, from an editor
    state.
    */ get(state) {
        return state.config.pluginsByKey[this.key];
    }
    /**
    Get the plugin's state from an editor state.
    */ getState(state) {
        return state[this.key];
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inheritsLoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)");
;
function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, o);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_assertThisInitialized
]);
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_typeof
]);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPrimitive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
;
function toPrimitive(t, r) {
    if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPropertyKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-client] (ecmascript)");
;
;
function toPropertyKey(t) {
    var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, "string");
    return "symbol" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i) ? i : i + "";
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_defineProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)");
;
function _defineProperty(e, r, t) {
    return (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gud@1.0.0/node_modules/gud/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// @flow
var key = '__global_unique_id__';
module.exports = function() {
    return /*TURBOPACK member replacement*/ __turbopack_context__.g[key] = (/*TURBOPACK member replacement*/ __turbopack_context__.g[key] || 0) + 1;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
var warning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++){
            args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++){
            args[key - 2] = arguments[key];
        }
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
            printWarning.apply(null, [
                format
            ].concat(args));
        }
    };
}
module.exports = warning;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@hypnosphi+create-react-con_af0e748afbb80077d71aa3e03fc5627c/node_modules/@hypnosphi/create-react-context/lib/implementation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
exports.__esModule = true;
var _react = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _propTypes = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _gud = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gud@1.0.0/node_modules/gud/index.js [app-client] (ecmascript)");
var _gud2 = _interopRequireDefault(_gud);
var _warning = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js [app-client] (ecmascript)");
var _warning2 = _interopRequireDefault(_warning);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var MAX_SIGNED_31_BIT_INT = 1073741823;
// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
function createEventEmitter(value) {
    var handlers = [];
    return {
        on: function on(handler) {
            handlers.push(handler);
        },
        off: function off(handler) {
            handlers = handlers.filter(function(h) {
                return h !== handler;
            });
        },
        get: function get() {
            return value;
        },
        set: function set(newValue, changedBits) {
            value = newValue;
            handlers.forEach(function(handler) {
                return handler(value, changedBits);
            });
        }
    };
}
function onlyChild(children) {
    return Array.isArray(children) ? children[0] : children;
}
function createReactContext(defaultValue, calculateChangedBits) {
    var _Provider$childContex, _Consumer$contextType;
    var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';
    var Provider = function(_Component) {
        _inherits(Provider, _Component);
        function Provider() {
            var _temp, _this, _ret;
            _classCallCheck(this, Provider);
            for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [
                this
            ].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
        }
        Provider.prototype.getChildContext = function getChildContext() {
            var _ref;
            return _ref = {}, _ref[contextProp] = this.emitter, _ref;
        };
        Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            if (this.props.value !== nextProps.value) {
                var oldValue = this.props.value;
                var newValue = nextProps.value;
                var changedBits = void 0;
                if (objectIs(oldValue, newValue)) {
                    changedBits = 0; // No change
                } else {
                    changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
                    if ("TURBOPACK compile-time truthy", 1) {
                        (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
                    }
                    changedBits |= 0;
                    if (changedBits !== 0) {
                        this.emitter.set(nextProps.value, changedBits);
                    }
                }
            }
        };
        Provider.prototype.render = function render() {
            return this.props.children;
        };
        return Provider;
    }(_react.Component);
    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);
    var Consumer = function(_Component2) {
        _inherits(Consumer, _Component2);
        function Consumer() {
            var _temp2, _this2, _ret2;
            _classCallCheck(this, Consumer);
            for(var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
                args[_key2] = arguments[_key2];
            }
            return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [
                this
            ].concat(args))), _this2), _this2.state = {
                value: _this2.getValue()
            }, _this2.onUpdate = function(newValue, changedBits) {
                var observedBits = _this2.observedBits | 0;
                if ((observedBits & changedBits) !== 0) {
                    _this2.setState({
                        value: _this2.getValue()
                    });
                }
            }, _temp2), _possibleConstructorReturn(_this2, _ret2);
        }
        Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            var observedBits = nextProps.observedBits;
            this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
             : observedBits;
        };
        Consumer.prototype.componentDidMount = function componentDidMount() {
            if (this.context[contextProp]) {
                this.context[contextProp].on(this.onUpdate);
            }
            var observedBits = this.props.observedBits;
            this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
             : observedBits;
        };
        Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
            if (this.context[contextProp]) {
                this.context[contextProp].off(this.onUpdate);
            }
        };
        Consumer.prototype.getValue = function getValue() {
            if (this.context[contextProp]) {
                return this.context[contextProp].get();
            } else {
                return defaultValue;
            }
        };
        Consumer.prototype.render = function render() {
            return onlyChild(this.props.children)(this.state.value);
        };
        return Consumer;
    }(_react.Component);
    Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);
    return {
        Provider: Provider,
        Consumer: Consumer
    };
}
exports.default = createReactContext;
module.exports = exports['default'];
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@hypnosphi+create-react-con_af0e748afbb80077d71aa3e03fc5627c/node_modules/@hypnosphi/create-react-context/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
var _react = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _implementation = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@hypnosphi+create-react-con_af0e748afbb80077d71aa3e03fc5627c/node_modules/@hypnosphi/create-react-context/lib/implementation.js [app-client] (ecmascript)");
var _implementation2 = _interopRequireDefault(_implementation);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Manager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManagerReferenceNodeContext",
    ()=>ManagerReferenceNodeContext,
    "ManagerReferenceNodeSetterContext",
    ()=>ManagerReferenceNodeSetterContext,
    "default",
    ()=>Manager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$hypnosphi$2b$create$2d$react$2d$con_af0e748afbb80077d71aa3e03fc5627c$2f$node_modules$2f40$hypnosphi$2f$create$2d$react$2d$context$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@hypnosphi+create-react-con_af0e748afbb80077d71aa3e03fc5627c/node_modules/@hypnosphi/create-react-context/lib/index.js [app-client] (ecmascript)");
;
;
;
;
;
var ManagerReferenceNodeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$hypnosphi$2b$create$2d$react$2d$con_af0e748afbb80077d71aa3e03fc5627c$2f$node_modules$2f40$hypnosphi$2f$create$2d$react$2d$context$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
var ManagerReferenceNodeSetterContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$hypnosphi$2b$create$2d$react$2d$con_af0e748afbb80077d71aa3e03fc5627c$2f$node_modules$2f40$hypnosphi$2f$create$2d$react$2d$context$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
var Manager = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Manager, _React$Component);
    function Manager() {
        var _this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [
            this
        ].concat(args)) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "referenceNode", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "setReferenceNode", function(newReferenceNode) {
            if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
                _this.referenceNode = newReferenceNode;
                _this.forceUpdate();
            }
        });
        return _this;
    }
    var _proto = Manager.prototype;
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.referenceNode = null;
    };
    _proto.render = function render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ManagerReferenceNodeContext.Provider, {
            value: this.referenceNode
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ManagerReferenceNodeSetterContext.Provider, {
            value: this.setReferenceNode
        }, this.props.children));
    };
    return Manager;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Manager.js [app-client] (ecmascript) <export default as Manager>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Manager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Manager.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */ __turbopack_context__.s([
    "safeInvoke",
    ()=>safeInvoke,
    "setRef",
    ()=>setRef,
    "shallowEqual",
    ()=>shallowEqual,
    "unwrapArray",
    ()=>unwrapArray
]);
var unwrapArray = function unwrapArray(arg) {
    return Array.isArray(arg) ? arg[0] : arg;
};
var safeInvoke = function safeInvoke(fn) {
    if (typeof fn === "function") {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return fn.apply(void 0, args);
    }
};
var shallowEqual = function shallowEqual(objA, objB) {
    var aKeys = Object.keys(objA);
    var bKeys = Object.keys(objB);
    if (bKeys.length !== aKeys.length) {
        return false;
    }
    for(var i = 0; i < bKeys.length; i++){
        var key = aKeys[i];
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
};
var setRef = function setRef(ref, node) {
    // if its a function call it
    if (typeof ref === "function") {
        return safeInvoke(ref, node);
    } else if (ref != null) {
        ref.current = node;
    }
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Reference.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$warning$40$4$2e$0$2e$3$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var InnerReference = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(InnerReference, _React$Component);
    function InnerReference() {
        var _this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [
            this
        ].concat(args)) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "refHandler", function(node) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRef"])(_this.props.innerRef, node);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeInvoke"])(_this.props.setReferenceNode, node);
        });
        return _this;
    }
    var _proto = InnerReference.prototype;
    _proto.componentWillUnmount = function componentWillUnmount() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRef"])(this.props.innerRef, null);
    };
    _proto.render = function render() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$warning$40$4$2e$0$2e$3$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unwrapArray"])(this.props.children)({
            ref: this.refHandler
        });
    };
    return InnerReference;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
function Reference(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManagerReferenceNodeSetterContext"].Consumer, null, function(setReferenceNode) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](InnerReference, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            setReferenceNode: setReferenceNode
        }, props));
    });
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Reference.js [app-client] (ecmascript) <export default as Reference>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Reference.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Popper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InnerPopper",
    ()=>InnerPopper,
    "default",
    ()=>Popper,
    "placements",
    ()=>placements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$deep$2d$equal$40$1$2e$1$2e$2$2f$node_modules$2f$deep$2d$equal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/deep-equal@1.1.2/node_modules/deep-equal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$popper$2e$js$40$1$2e$16$2e$1$2f$node_modules$2f$popper$2e$js$2f$dist$2f$esm$2f$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/popper.js@1.16.1/node_modules/popper.js/dist/esm/popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/utils.js [app-client] (ecmascript)");
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
var initialStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(InnerPopper, _React$Component);
    function InnerPopper() {
        var _this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [
            this
        ].concat(args)) || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "state", {
            data: undefined,
            placement: undefined
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "popperInstance", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "popperNode", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "arrowNode", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "setPopperNode", function(popperNode) {
            if (!popperNode || _this.popperNode === popperNode) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRef"])(_this.props.innerRef, popperNode);
            _this.popperNode = popperNode;
            _this.updatePopperInstance();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "setArrowNode", function(arrowNode) {
            _this.arrowNode = arrowNode;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "updateStateModifier", {
            enabled: true,
            order: 900,
            fn: function fn(data) {
                var placement = data.placement;
                _this.setState({
                    data: data,
                    placement: placement
                });
                return data;
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "getOptions", function() {
            return {
                placement: _this.props.placement,
                eventsEnabled: _this.props.eventsEnabled,
                positionFixed: _this.props.positionFixed,
                modifiers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props.modifiers, {
                    arrow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props.modifiers && _this.props.modifiers.arrow, {
                        enabled: !!_this.arrowNode,
                        element: _this.arrowNode
                    }),
                    applyStyle: {
                        enabled: false
                    },
                    updateStateModifier: _this.updateStateModifier
                })
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "getPopperStyle", function() {
            return !_this.popperNode || !_this.state.data ? initialStyle : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                position: _this.state.data.offsets.popper.position
            }, _this.state.data.styles);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "getPopperPlacement", function() {
            return !_this.state.data ? undefined : _this.state.placement;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "getArrowStyle", function() {
            return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "getOutOfBoundariesState", function() {
            return _this.state.data ? _this.state.data.hide : undefined;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "destroyPopperInstance", function() {
            if (!_this.popperInstance) return;
            _this.popperInstance.destroy();
            _this.popperInstance = null;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "updatePopperInstance", function() {
            _this.destroyPopperInstance();
            var _assertThisInitialize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), popperNode = _assertThisInitialize.popperNode;
            var referenceElement = _this.props.referenceElement;
            if (!referenceElement || !popperNode) return;
            _this.popperInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$popper$2e$js$40$1$2e$16$2e$1$2f$node_modules$2f$popper$2e$js$2f$dist$2f$esm$2f$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](referenceElement, popperNode, _this.getOptions());
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this)), "scheduleUpdate", function() {
            if (_this.popperInstance) {
                _this.popperInstance.scheduleUpdate();
            }
        });
        return _this;
    }
    var _proto = InnerPopper.prototype;
    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        // If the Popper.js options have changed, update the instance (destroy + create)
        if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$deep$2d$equal$40$1$2e$1$2e$2$2f$node_modules$2f$deep$2d$equal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.props.modifiers, prevProps.modifiers, {
            strict: true
        })) {
            // develop only check that modifiers isn't being updated needlessly
            if ("TURBOPACK compile-time truthy", 1) {
                if (this.props.modifiers !== prevProps.modifiers && this.props.modifiers != null && prevProps.modifiers != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(this.props.modifiers, prevProps.modifiers)) {
                    console.warn("'modifiers' prop reference updated even though all values appear the same.\nConsider memoizing the 'modifiers' object to avoid needless rendering.");
                }
            }
            this.updatePopperInstance();
        } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
            this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
        } // A placement difference in state means popper determined a new placement
        // apart from the props value. By the time the popper element is rendered with
        // the new position Popper has already measured it, if the place change triggers
        // a size change it will result in a misaligned popper. So we schedule an update to be sure.
        if (prevState.placement !== this.state.placement) {
            this.scheduleUpdate();
        }
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRef"])(this.props.innerRef, null);
        this.destroyPopperInstance();
    };
    _proto.render = function render() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unwrapArray"])(this.props.children)({
            ref: this.setPopperNode,
            style: this.getPopperStyle(),
            placement: this.getPopperPlacement(),
            outOfBoundaries: this.getOutOfBoundariesState(),
            scheduleUpdate: this.scheduleUpdate,
            arrowProps: {
                ref: this.setArrowNode,
                style: this.getArrowStyle()
            }
        });
    };
    return InnerPopper;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(InnerPopper, "defaultProps", {
    placement: 'bottom',
    eventsEnabled: true,
    referenceElement: undefined,
    positionFixed: false
});
var placements = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$popper$2e$js$40$1$2e$16$2e$1$2f$node_modules$2f$popper$2e$js$2f$dist$2f$esm$2f$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].placements;
;
function Popper(_ref) {
    var referenceElement = _ref.referenceElement, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, [
        "referenceElement"
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManagerReferenceNodeContext"].Consumer, null, function(referenceNode) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](InnerPopper, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
        }, props));
    });
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Popper.js [app-client] (ecmascript) <export default as Popper>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$popper$40$1$2e$3$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$popper$2f$lib$2f$esm$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-popper@1.3.11_react@19.2.4/node_modules/react-popper/lib/esm/Popper.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) {
        isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
    }
    return isArgs;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/implementation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js [app-client] (ecmascript)"); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, 'toString');
    var hasProtoEnumBug = isEnumerable.call(function() {}, 'prototype');
    var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === 'undefined') {
            return false;
        }
        for(var k in window){
            try {
                if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
                    try {
                        equalsConstructorPrototype(window[k]);
                    } catch (e) {
                        return true;
                    }
                }
            } catch (e) {
                return true;
            }
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
            return equalsConstructorPrototype(o);
        }
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === 'object';
        var isFunction = toStr.call(object) === '[object Function]';
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === '[object String]';
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) {
            throw new TypeError('Object.keys called on a non-object');
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
            for(var i = 0; i < object.length; ++i){
                theKeys.push(String(i));
            }
        }
        if (isArguments && object.length > 0) {
            for(var j = 0; j < object.length; ++j){
                theKeys.push(String(j));
            }
        } else {
            for(var name in object){
                if (!(skipProto && name === 'prototype') && has.call(object, name)) {
                    theKeys.push(String(name));
                }
            }
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k){
                if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
                    theKeys.push(dontEnums[k]);
                }
            }
        }
        return theKeys;
    };
}
module.exports = keysShim;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var slice = Array.prototype.slice;
var isArgs = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js [app-client] (ecmascript)");
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/implementation.js [app-client] (ecmascript)");
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) {
            Object.keys = function keys(object) {
                if (isArgs(object)) {
                    return originalKeys(slice.call(object));
                }
                return originalKeys(object);
            };
        }
    } else {
        Object.keys = keysShim;
    }
    return Object.keys || keysShim;
};
module.exports = keysShim;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasSymbols = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-object-atoms@1.1.2/node_modules/es-object-atoms/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js [app-client] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js [app-client] (ecmascript)");
if ($gOPD) {
    try {
        $gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        $gOPD = null;
    }
}
module.exports = $gOPD;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = false;
    }
}
module.exports = $defineProperty;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-object-atoms@1.1.2/node_modules/es-object-atoms/index.js [app-client] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js [app-client] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js [app-client] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') {
        throw new TypeError('getProto: not an object');
    }
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js [app-client] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-client] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js [app-client] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js [app-client] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/applyBind.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-client] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)");
var actualApply = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js [app-client] (ecmascript)");
/** @type {import('./applyBind')} */ module.exports = function applyBind() {
    return actualApply(bind, $apply, arguments);
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
        throw e;
    }
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/hasown@2.0.4/node_modules/hasown/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-object-atoms@1.1.2/node_modules/es-object-atoms/index.js [app-client] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js [app-client] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js [app-client] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js [app-client] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js [app-client] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js [app-client] (ecmascript)");
var abs = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js [app-client] (ecmascript)");
var floor = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js [app-client] (ecmascript)");
var max = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js [app-client] (ecmascript)");
var min = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js [app-client] (ecmascript)");
var pow = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js [app-client] (ecmascript)");
var round = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js [app-client] (ecmascript)");
var sign = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js [app-client] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-client] (ecmascript)");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js [app-client] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js [app-client] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js [app-client] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js [app-client] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS['%Error.prototype%'] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-client] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/hasown@2.0.4/node_modules/hasown/index.js [app-client] (ecmascript)");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js [app-client] (ecmascript)");
var callBindBasic = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)");
/** @type {(thisArg: string, searchString: string, position?: number) => number} */ var $indexOf = callBindBasic([
    GetIntrinsic('%String.prototype.indexOf%')
]);
/** @type {import('.')} */ module.exports = function callBoundIntrinsic(name, allowMissing) {
    /* eslint no-extra-parens: 0 */ var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
        return callBindBasic([
            intrinsic
        ]);
    }
    return intrinsic;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-arguments@1.2.0/node_modules/is-arguments/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasToStringTag = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js [app-client] (ecmascript)")();
var callBound = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js [app-client] (ecmascript)");
var $toString = callBound('Object.prototype.toString');
/** @type {import('.')} */ var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
        return false;
    }
    return $toString(value) === '[object Arguments]';
};
/** @type {import('.')} */ var isLegacyArguments = function isArguments(value) {
    if (isStandardArguments(value)) {
        return true;
    }
    return value !== null && typeof value === 'object' && 'length' in value && typeof value.length === 'number' && value.length >= 0 && $toString(value) !== '[object Array]' && 'callee' in value && $toString(value.callee) === '[object Function]';
};
var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
}();
// @ts-expect-error TODO make this not error
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
/** @type {import('.')} */ module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $defineProperty = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-client] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)");
var gopd = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = function defineDataProperty(obj, property, value) {
    if (!obj || typeof obj !== 'object' && typeof obj !== 'function') {
        throw new $TypeError('`obj` must be an object or a function`');
    }
    if (typeof property !== 'string' && typeof property !== 'symbol') {
        throw new $TypeError('`property` must be a string or a symbol`');
    }
    if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
        throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
    }
    if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
        throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
    }
    if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
        throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
    }
    if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
        throw new $TypeError('`loose`, if provided, must be a boolean');
    }
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!gopd && gopd(obj, property);
    if ($defineProperty) {
        $defineProperty(obj, property, {
            configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
            enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
            value: value,
            writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
    } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
        obj[property] = value; // eslint-disable-line no-param-reassign
    } else {
        throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
    }
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $defineProperty = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-client] (ecmascript)");
var hasPropertyDescriptors = function hasPropertyDescriptors() {
    return !!$defineProperty;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!$defineProperty) {
        return null;
    }
    try {
        return $defineProperty([], 'length', {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = hasPropertyDescriptors;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var keys = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js [app-client] (ecmascript)");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var defineDataProperty = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js [app-client] (ecmascript)");
var isFunction = function(fn) {
    return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};
var supportsDescriptors = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js [app-client] (ecmascript)")();
var defineProperty = function(object, name, value, predicate) {
    if (name in object) {
        if (predicate === true) {
            if (object[name] === value) {
                return;
            }
        } else if (!isFunction(predicate) || !predicate()) {
            return;
        }
    }
    if (supportsDescriptors) {
        defineDataProperty(object, name, value, true);
    } else {
        defineDataProperty(object, name, value);
    }
};
var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys(map);
    if (hasSymbols) {
        props = concat.call(props, Object.getOwnPropertySymbols(map));
    }
    for(var i = 0; i < props.length; i += 1){
        defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
    }
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/set-function-length@1.2.2/node_modules/set-function-length/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js [app-client] (ecmascript)");
var define = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js [app-client] (ecmascript)");
var hasDescriptors = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js [app-client] (ecmascript)")();
var gOPD = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)");
var $floor = GetIntrinsic('%Math.floor%');
/** @type {import('.')} */ module.exports = function setFunctionLength(fn, length) {
    if (typeof fn !== 'function') {
        throw new $TypeError('`fn` is not a function');
    }
    if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
        throw new $TypeError('`length` must be a positive 32-bit integer');
    }
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ('length' in fn && gOPD) {
        var desc = gOPD(fn, 'length');
        if (desc && !desc.configurable) {
            functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
            functionLengthIsWritable = false;
        }
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
            define(fn, 'length', length, true, true);
        } else {
            define(fn, 'length', length);
        }
    }
    return fn;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind@1.0.9/node_modules/call-bind/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var setFunctionLength = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/set-function-length@1.2.2/node_modules/set-function-length/index.js [app-client] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-client] (ecmascript)");
var callBindBasic = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)");
var applyBind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/applyBind.js [app-client] (ecmascript)");
module.exports = function callBind(originalFunction) {
    var func = callBindBasic(arguments);
    var adjustedLength = 1 + originalFunction.length - (arguments.length - 1);
    return setFunctionLength(func, adjustedLength > 0 ? adjustedLength : 0, true);
};
if ($defineProperty) {
    $defineProperty(module.exports, 'apply', {
        value: applyBind
    });
} else {
    module.exports.apply = applyBind;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/implementation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var numberIsNaN = function(value) {
    return value !== value;
};
module.exports = function is(a, b) {
    if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
    }
    if (a === b) {
        return true;
    }
    if (numberIsNaN(a) && numberIsNaN(b)) {
        return true;
    }
    return false;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/polyfill.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/implementation.js [app-client] (ecmascript)");
module.exports = function getPolyfill() {
    return typeof Object.is === 'function' ? Object.is : implementation;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/shim.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var getPolyfill = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/polyfill.js [app-client] (ecmascript)");
var define = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js [app-client] (ecmascript)");
module.exports = function shimObjectIs() {
    var polyfill = getPolyfill();
    define(Object, {
        is: polyfill
    }, {
        is: function testObjectIs() {
            return Object.is !== polyfill;
        }
    });
    return polyfill;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var define = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js [app-client] (ecmascript)");
var callBind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind@1.0.9/node_modules/call-bind/index.js [app-client] (ecmascript)");
var implementation = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/implementation.js [app-client] (ecmascript)");
var getPolyfill = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/polyfill.js [app-client] (ecmascript)");
var shim = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/shim.js [app-client] (ecmascript)");
var polyfill = callBind(getPolyfill(), Object);
define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-regex@1.2.1/node_modules/is-regex/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBound = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js [app-client] (ecmascript)");
var hasToStringTag = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js [app-client] (ecmascript)")();
var hasOwn = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/hasown@2.0.4/node_modules/hasown/index.js [app-client] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)");
/** @type {import('.')} */ var fn;
if (hasToStringTag) {
    /** @type {(receiver: ThisParameterType<typeof RegExp.prototype.exec>, ...args: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */ var $exec = callBound('RegExp.prototype.exec');
    /** @type {object} */ var isRegexMarker = {};
    var throwRegexMarker = function() {
        throw isRegexMarker;
    };
    /** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */ var badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
    };
    if (typeof Symbol.toPrimitive === 'symbol') {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
    }
    /** @type {import('.')} */ // @ts-expect-error TS can't figure out that the $exec call always throws
    // eslint-disable-next-line consistent-return
    fn = function isRegex(value) {
        if (!value || typeof value !== 'object') {
            return false;
        }
        // eslint-disable-next-line no-extra-parens
        var descriptor = /** @type {NonNullable<typeof gOPD>} */ gOPD(value, 'lastIndex');
        var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, 'value');
        if (!hasLastIndexDataProperty) {
            return false;
        }
        try {
            // eslint-disable-next-line no-extra-parens
            $exec(value, badStringifier);
        } catch (e) {
            return e === isRegexMarker;
        }
    };
} else {
    /** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */ var $toString = callBound('Object.prototype.toString');
    /** @const @type {'[object RegExp]'} */ var regexClass = '[object RegExp]';
    /** @type {import('.')} */ fn = function isRegex(value) {
        // In older browsers, typeof regex incorrectly returns 'function'
        if (!value || typeof value !== 'object' && typeof value !== 'function') {
            return false;
        }
        return $toString(value) === regexClass;
    };
}
module.exports = fn;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/functions-have-names@1.2.3/node_modules/functions-have-names/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var functionsHaveNames = function functionsHaveNames() {
    return typeof (function f() {}).name === 'string';
};
var gOPD = Object.getOwnPropertyDescriptor;
if (gOPD) {
    try {
        gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        gOPD = null;
    }
}
functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
    if (!functionsHaveNames() || !gOPD) {
        return false;
    }
    var desc = gOPD(function() {}, 'name');
    return !!desc && !!desc.configurable;
};
var $bind = Function.prototype.bind;
functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
    return functionsHaveNames() && typeof $bind === 'function' && (function f() {}).bind().name !== '';
};
module.exports = functionsHaveNames;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/set-function-name@2.0.2/node_modules/set-function-name/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var define = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js [app-client] (ecmascript)");
var hasDescriptors = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js [app-client] (ecmascript)")();
var functionsHaveConfigurableNames = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/functions-have-names@1.2.3/node_modules/functions-have-names/index.js [app-client] (ecmascript)").functionsHaveConfigurableNames();
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = function setFunctionName(fn, name) {
    if (typeof fn !== 'function') {
        throw new $TypeError('`fn` is not a function');
    }
    var loose = arguments.length > 2 && !!arguments[2];
    if (!loose || functionsHaveConfigurableNames) {
        if (hasDescriptors) {
            define(fn, 'name', name, true, true);
        } else {
            define(fn, 'name', name);
        }
    }
    return fn;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/implementation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var setFunctionName = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/set-function-name@2.0.2/node_modules/set-function-name/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-client] (ecmascript)");
var $Object = Object;
module.exports = setFunctionName(function flags() {
    if (this == null || this !== $Object(this)) {
        throw new $TypeError('RegExp.prototype.flags getter called on non-object');
    }
    var result = '';
    if (this.hasIndices) {
        result += 'd';
    }
    if (this.global) {
        result += 'g';
    }
    if (this.ignoreCase) {
        result += 'i';
    }
    if (this.multiline) {
        result += 'm';
    }
    if (this.dotAll) {
        result += 's';
    }
    if (this.unicode) {
        result += 'u';
    }
    if (this.unicodeSets) {
        result += 'v';
    }
    if (this.sticky) {
        result += 'y';
    }
    return result;
}, 'get flags', true);
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/polyfill.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/implementation.js [app-client] (ecmascript)");
var supportsDescriptors = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js [app-client] (ecmascript)").supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
module.exports = function getPolyfill() {
    if (supportsDescriptors && /a/mig.flags === 'gim') {
        var descriptor = $gOPD(RegExp.prototype, 'flags');
        if (descriptor && typeof descriptor.get === 'function' && 'dotAll' in RegExp.prototype && 'hasIndices' in RegExp.prototype) {
            /* eslint getter-return: 0 */ var calls = '';
            var o = {};
            Object.defineProperty(o, 'hasIndices', {
                get: function() {
                    calls += 'd';
                }
            });
            Object.defineProperty(o, 'sticky', {
                get: function() {
                    calls += 'y';
                }
            });
            descriptor.get.call(o);
            if (calls === 'dy') {
                return descriptor.get;
            }
        }
    }
    return implementation;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/shim.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var supportsDescriptors = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js [app-client] (ecmascript)").supportsDescriptors;
var getPolyfill = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/polyfill.js [app-client] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-client] (ecmascript)");
var defineProperty = Object.defineProperty;
var $TypeError = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js [app-client] (ecmascript)");
var getProto = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js [app-client] (ecmascript)");
var regex = /a/;
module.exports = function shimFlags() {
    if (!supportsDescriptors || !getProto) {
        throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
    }
    var polyfill = getPolyfill();
    var proto = getProto(regex);
    var descriptor = gOPD(proto, 'flags');
    if (!descriptor || descriptor.get !== polyfill) {
        defineProperty(proto, 'flags', {
            configurable: true,
            enumerable: false,
            get: polyfill
        });
    }
    return polyfill;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var define = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js [app-client] (ecmascript)");
var callBind = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bind@1.0.9/node_modules/call-bind/index.js [app-client] (ecmascript)");
var implementation = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/implementation.js [app-client] (ecmascript)");
var getPolyfill = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/polyfill.js [app-client] (ecmascript)");
var shim = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/shim.js [app-client] (ecmascript)");
var flagsBound = callBind(getPolyfill());
define(flagsBound, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = flagsBound;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-date-object@1.1.0/node_modules/is-date-object/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBound = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js [app-client] (ecmascript)");
var getDay = callBound('Date.prototype.getDay');
/** @type {import('.')} */ var tryDateObject = function tryDateGetDayCall(value) {
    try {
        getDay(value);
        return true;
    } catch (e) {
        return false;
    }
};
/** @type {(value: unknown) => string} */ var toStr = callBound('Object.prototype.toString');
var dateClass = '[object Date]';
var hasToStringTag = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js [app-client] (ecmascript)")();
/** @type {import('.')} */ module.exports = function isDateObject(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    return hasToStringTag ? tryDateObject(value) : toStr(value) === dateClass;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/deep-equal@1.1.2/node_modules/deep-equal/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var objectKeys = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js [app-client] (ecmascript)");
var isArguments = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-arguments@1.2.0/node_modules/is-arguments/index.js [app-client] (ecmascript)");
var is = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/index.js [app-client] (ecmascript)");
var isRegex = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-regex@1.2.1/node_modules/is-regex/index.js [app-client] (ecmascript)");
var flags = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/regexp.prototype.flags@1.5.4/node_modules/regexp.prototype.flags/index.js [app-client] (ecmascript)");
var isDate = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/is-date-object@1.1.0/node_modules/is-date-object/index.js [app-client] (ecmascript)");
var getTime = Date.prototype.getTime;
function deepEqual(actual, expected, options) {
    var opts = options || {};
    // 7.1. All identical values are equivalent, as determined by ===.
    if (opts.strict ? is(actual, expected) : actual === expected) {
        return true;
    }
    // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
    if (!actual || !expected || typeof actual !== 'object' && typeof expected !== 'object') {
        return opts.strict ? is(actual, expected) : actual == expected;
    }
    /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */ // eslint-disable-next-line no-use-before-define
    return objEquiv(actual, expected, opts);
}
function isUndefinedOrNull(value) {
    return value === null || value === undefined;
}
function isBuffer(x) {
    if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
        return false;
    }
    if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
        return false;
    }
    if (x.length > 0 && typeof x[0] !== 'number') {
        return false;
    }
    return true;
}
function objEquiv(a, b, opts) {
    /* eslint max-statements: [2, 50] */ var i, key;
    if (typeof a !== typeof b) {
        return false;
    }
    if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) {
        return false;
    }
    // an identical 'prototype' property.
    if (a.prototype !== b.prototype) {
        return false;
    }
    if (isArguments(a) !== isArguments(b)) {
        return false;
    }
    var aIsRegex = isRegex(a);
    var bIsRegex = isRegex(b);
    if (aIsRegex !== bIsRegex) {
        return false;
    }
    if (aIsRegex || bIsRegex) {
        return a.source === b.source && flags(a) === flags(b);
    }
    if (isDate(a) && isDate(b)) {
        return getTime.call(a) === getTime.call(b);
    }
    var aIsBuffer = isBuffer(a);
    var bIsBuffer = isBuffer(b);
    if (aIsBuffer !== bIsBuffer) {
        return false;
    }
    if (aIsBuffer || bIsBuffer) {
        if (a.length !== b.length) {
            return false;
        }
        for(i = 0; i < a.length; i++){
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    try {
        var ka = objectKeys(a);
        var kb = objectKeys(b);
    } catch (e) {
        return false;
    }
    // having the same number of owned properties (keys incorporates hasOwnProperty)
    if (ka.length !== kb.length) {
        return false;
    }
    // the same set of keys (although not necessarily the same order),
    ka.sort();
    kb.sort();
    // ~~~cheap key test
    for(i = ka.length - 1; i >= 0; i--){
        if (ka[i] != kb[i]) {
            return false;
        }
    }
    // equivalent values for every corresponding key, and ~~~possibly expensive deep test
    for(i = ka.length - 1; i >= 0; i--){
        key = ka[i];
        if (!deepEqual(a[key], b[key], opts)) {
            return false;
        }
    }
    return true;
}
module.exports = deepEqual;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/popper.js@1.16.1/node_modules/popper.js/dist/esm/popper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';
var timeoutDuration = function() {
    var longerTimeoutBrowsers = [
        'Edge',
        'Trident',
        'Firefox'
    ];
    for(var i = 0; i < longerTimeoutBrowsers.length; i += 1){
        if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
            return 1;
        }
    }
    return 0;
}();
function microtaskDebounce(fn) {
    var called = false;
    return function() {
        if (called) {
            return;
        }
        called = true;
        window.Promise.resolve().then(function() {
            called = false;
            fn();
        });
    };
}
function taskDebounce(fn) {
    var scheduled = false;
    return function() {
        if (!scheduled) {
            scheduled = true;
            setTimeout(function() {
                scheduled = false;
                fn();
            }, timeoutDuration);
        }
    };
}
var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/ var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */ function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */ function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    var window1 = element.ownerDocument.defaultView;
    var css = window1.getComputedStyle(element, null);
    return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */ function getParentNode(element) {
    if (element.nodeName === 'HTML') {
        return element;
    }
    return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */ function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
        return document.body;
    }
    switch(element.nodeName){
        case 'HTML':
        case 'BODY':
            return element.ownerDocument.body;
        case '#document':
            return element.body;
    }
    // Firefox want us to check `-x` and `-y` variations as well
    var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
        return element;
    }
    return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */ function getReferenceNode(reference) {
    return reference && reference.referenceNode ? reference.referenceNode : reference;
}
var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */ function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */ function getOffsetParent(element) {
    if (!element) {
        return document.documentElement;
    }
    var noOffsetParent = isIE(10) ? document.body : null;
    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while(offsetParent === noOffsetParent && element.nextElementSibling){
        offsetParent = (element = element.nextElementSibling).offsetParent;
    }
    var nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return element ? element.ownerDocument.documentElement : document.documentElement;
    }
    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if ([
        'TH',
        'TD',
        'TABLE'
    ].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
    }
    return offsetParent;
}
function isOffsetContainer(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY') {
        return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */ function getRoot(node) {
    if (node.parentNode !== null) {
        return getRoot(node.parentNode);
    }
    return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */ function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
    }
    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;
    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;
    // Both nodes are inside #document
    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
        }
        return getOffsetParent(commonAncestorContainer);
    }
    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
    } else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
    }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */ function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        var html = element.ownerDocument.documentElement;
        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }
    return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */ function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */ function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}
function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}
function getWindowSizes(document1) {
    var body = document1.body;
    var html = document1.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);
    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}
var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};
var createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var defineProperty = function(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
};
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */ function getClientRect(offsets) {
    return _extends({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
    });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */ function getBoundingClientRect(element) {
    var rect = {};
    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
        if (isIE(10)) {
            rect = element.getBoundingClientRect();
            var scrollTop = getScroll(element, 'top');
            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
        } else {
            rect = element.getBoundingClientRect();
        }
    } catch (e) {}
    var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.width;
    var height = sizes.height || element.clientHeight || result.height;
    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;
    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
    }
    return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;
    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
        var marginTop = parseFloat(styles.marginTop);
        var marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }
    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
    }
    return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    var offset = {
        top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
        left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
        width: width,
        height: height
    };
    return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */ function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
        return false;
    }
    return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */ function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
    }
    var el = element.parentElement;
    while(el && getStyleComputedProperty(el, 'transform') === 'none'){
        el = el.parentElement;
    }
    return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */ function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    // NOTE: 1 DOM access here
    var boundaries = {
        top: 0,
        left: 0
    };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    // Handle viewport case
    if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
        // Handle other cases based on DOM element used as boundaries
        var boundariesNode = void 0;
        if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(reference));
            if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = popper.ownerDocument.documentElement;
            }
        } else if (boundariesElement === 'window') {
            boundariesNode = popper.ownerDocument.documentElement;
        } else {
            boundariesNode = boundariesElement;
        }
        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(popper.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = height + offsets.top;
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = width + offsets.left;
        } else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
        }
    }
    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
    return boundaries;
}
function getArea(_ref) {
    var width = _ref.width, height = _ref.height;
    return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
    var rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    var sortedAreas = Object.keys(rects).map(function(key) {
        return _extends({
            key: key
        }, rects[key], {
            area: getArea(rects[key])
        });
    }).sort(function(a, b) {
        return b.area - a.area;
    });
    var filteredAreas = sortedAreas.filter(function(_ref2) {
        var width = _ref2.width, height = _ref2.height;
        return width >= popper.clientWidth && height >= popper.clientHeight;
    });
    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
    var variation = placement.split('-')[1];
    return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */ function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */ function getOuterSizes(element) {
    var window1 = element.ownerDocument.defaultView;
    var styles = window1.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
        width: element.offsetWidth + y,
        height: element.offsetHeight + x
    };
    return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */ function getOppositePlacement(placement) {
    var hash = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom'
    };
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */ function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];
    // Get popper node sizes
    var popperRect = getOuterSizes(popper);
    // Add position, width and height to our offsets object
    var popperOffsets = {
        width: popperRect.width,
        height: popperRect.height
    };
    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = [
        'right',
        'left'
    ].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';
    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
        popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
        popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }
    return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */ function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
        return arr.find(check);
    }
    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */ function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
        return arr.findIndex(function(cur) {
            return cur[prop] === value;
        });
    }
    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function(obj) {
        return obj[prop] === value;
    });
    return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */ function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
    modifiersToRun.forEach(function(modifier) {
        if (modifier['function']) {
            // eslint-disable-line dot-notation
            console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        }
        var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
        if (modifier.enabled && isFunction(fn)) {
            // Add properties to offsets to make them a complete clientRect object
            // we do this before each modifier to make sure the previous one doesn't
            // mess with these values
            data.offsets.popper = getClientRect(data.offsets.popper);
            data.offsets.reference = getClientRect(data.offsets.reference);
            data = fn(data, modifier);
        }
    });
    return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */ function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
        return;
    }
    var data = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: false,
        offsets: {}
    };
    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;
    data.positionFixed = this.options.positionFixed;
    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';
    // run the modifiers
    data = runModifiers(this.modifiers, data);
    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
        this.state.isCreated = true;
        this.options.onCreate(data);
    } else {
        this.options.onUpdate(data);
    }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */ function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function(_ref) {
        var name = _ref.name, enabled = _ref.enabled;
        return enabled && name === modifierName;
    });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */ function getSupportedPropertyName(property) {
    var prefixes = [
        false,
        'ms',
        'Webkit',
        'Moz',
        'O'
    ];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
    for(var i = 0; i < prefixes.length; i++){
        var prefix = prefixes[i];
        var toCheck = prefix ? '' + prefix + upperProp : property;
        if (typeof document.body.style[toCheck] !== 'undefined') {
            return toCheck;
        }
    }
    return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */ function destroy() {
    this.state.isDestroyed = true;
    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
        this.popper.removeAttribute('x-placement');
        this.popper.style.position = '';
        this.popper.style.top = '';
        this.popper.style.left = '';
        this.popper.style.right = '';
        this.popper.style.bottom = '';
        this.popper.style.willChange = '';
        this.popper.style[getSupportedPropertyName('transform')] = '';
    }
    this.disableEventListeners();
    // remove the popper if user explicitly asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
        this.popper.parentNode.removeChild(this.popper);
    }
    return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */ function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, {
        passive: true
    });
    if (!isBody) {
        attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */ function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, {
        passive: true
    });
    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;
    return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */ function enableEventListeners() {
    if (!this.state.eventsEnabled) {
        this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */ function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);
    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function(target) {
        target.removeEventListener('scroll', state.updateBound);
    });
    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */ function disableEventListeners() {
    if (this.state.eventsEnabled) {
        cancelAnimationFrame(this.scheduleUpdate);
        this.state = removeEventListeners(this.reference, this.state);
    }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */ function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */ function setStyles(element, styles) {
    Object.keys(styles).forEach(function(prop) {
        var unit = '';
        // add unit if the value is numeric and is one of the following
        if ([
            'width',
            'height',
            'top',
            'right',
            'bottom',
            'left'
        ].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
            unit = 'px';
        }
        element.style[prop] = styles[prop] + unit;
    });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */ function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function(prop) {
        var value = attributes[prop];
        if (value !== false) {
            element.setAttribute(prop, attributes[prop]);
        } else {
            element.removeAttribute(prop);
        }
    });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */ function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);
    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);
    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
        setStyles(data.arrowElement, data.arrowStyles);
    }
    return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */ function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
    popper.setAttribute('x-placement', placement);
    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, {
        position: options.positionFixed ? 'fixed' : 'absolute'
    });
    return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */ function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var round = Math.round, floor = Math.floor;
    var noRound = function noRound(v) {
        return v;
    };
    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);
    var isVertical = [
        'left',
        'right'
    ].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;
    return {
        left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
        top: verticalToInteger(popper.top),
        bottom: verticalToInteger(popper.bottom),
        right: horizontalToInteger(popper.right)
    };
}
var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function computeStyle(data, options) {
    var x = options.x, y = options.y;
    var popper = data.offsets.popper;
    // Remove this legacy support in Popper.js v2
    var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
        return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
        console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);
    // Styles
    var styles = {
        position: popper.position
    };
    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';
    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');
    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0, top = void 0;
    if (sideA === 'bottom') {
        // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
        // and not the bottom of the html element
        if (offsetParent.nodeName === 'HTML') {
            top = -offsetParent.clientHeight + offsets.bottom;
        } else {
            top = -offsetParentRect.height + offsets.bottom;
        }
    } else {
        top = offsets.top;
    }
    if (sideB === 'right') {
        if (offsetParent.nodeName === 'HTML') {
            left = -offsetParent.clientWidth + offsets.right;
        } else {
            left = -offsetParentRect.width + offsets.right;
        }
    } else {
        left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
        styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
        styles[sideA] = 0;
        styles[sideB] = 0;
        styles.willChange = 'transform';
    } else {
        // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
        var invertTop = sideA === 'bottom' ? -1 : 1;
        var invertLeft = sideB === 'right' ? -1 : 1;
        styles[sideA] = top * invertTop;
        styles[sideB] = left * invertLeft;
        styles.willChange = sideA + ', ' + sideB;
    }
    // Attributes
    var attributes = {
        'x-placement': data.placement
    };
    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
    return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */ function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function(_ref) {
        var name = _ref.name;
        return name === requestingName;
    });
    var isRequired = !!requesting && modifiers.some(function(modifier) {
        return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });
    if (!isRequired) {
        var _requesting = '`' + requestingName + '`';
        var requested = '`' + requestedName + '`';
        console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function arrow(data, options) {
    var _data$offsets$arrow;
    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
        return data;
    }
    var arrowElement = options.element;
    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = data.instance.popper.querySelector(arrowElement);
        // if arrowElement is not found, don't run the modifier
        if (!arrowElement) {
            return data;
        }
    } else {
        // if the arrowElement isn't a query selector we must check that the
        // provided DOM node is child of its popper node
        if (!data.instance.popper.contains(arrowElement)) {
            console.warn('WARNING: `arrow.element` must be child of its popper element!');
            return data;
        }
    }
    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var isVertical = [
        'left',
        'right'
    ].indexOf(placement) !== -1;
    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];
    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //
    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
        data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
        data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);
    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
    return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */ function getOppositeVariation(variation) {
    if (variation === 'end') {
        return 'start';
    } else if (variation === 'start') {
        return 'end';
    }
    return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */ var placements = [
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start'
];
// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */ function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
        return data;
    }
    if (data.flipped && data.placement === data.originalPlacement) {
        // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
        return data;
    }
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';
    var flipOrder = [];
    switch(options.behavior){
        case BEHAVIORS.FLIP:
            flipOrder = [
                placement,
                placementOpposite
            ];
            break;
        case BEHAVIORS.CLOCKWISE:
            flipOrder = clockwise(placement);
            break;
        case BEHAVIORS.COUNTERCLOCKWISE:
            flipOrder = clockwise(placement, true);
            break;
        default:
            flipOrder = options.behavior;
    }
    flipOrder.forEach(function(step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split('-')[0];
        placementOpposite = getOppositePlacement(placement);
        var popperOffsets = data.offsets.popper;
        var refOffsets = data.offsets.reference;
        // using floor because the reference offsets may contain decimals we are not going to consider here
        var floor = Math.floor;
        var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
        var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
        var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
        var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
        var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;
        // flip the variation if required
        var isVertical = [
            'top',
            'bottom'
        ].indexOf(placement) !== -1;
        // flips variation if reference element overflows boundaries
        var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);
        // flips variation if popper content overflows boundaries
        var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
        var flippedVariation = flippedVariationByRef || flippedVariationByContent;
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            // this boolean to detect any flip loop
            data.flipped = true;
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? '-' + variation : '');
            // this object contains `position`, we want to preserve it along with
            // any additional property we may add in the future
            data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
            data = runModifiers(data.instance.modifiers, data, 'flip');
        }
    });
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function keepTogether(data) {
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = [
        'top',
        'bottom'
    ].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    if (popper[side] < floor(reference[opSide])) {
        data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
        data.offsets.popper[opSide] = floor(reference[side]);
    }
    return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */ function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];
    // If it's not a number it's an operator, I guess
    if (!value) {
        return str;
    }
    if (unit.indexOf('%') === 0) {
        var element = void 0;
        switch(unit){
            case '%p':
                element = popperOffsets;
                break;
            case '%':
            case '%r':
            default:
                element = referenceOffsets;
        }
        var rect = getClientRect(element);
        return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
        // if is a vh or vw, we calculate the size based on the viewport
        var size = void 0;
        if (unit === 'vh') {
            size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        } else {
            size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        }
        return size / 100 * value;
    } else {
        // if is an explicit pixel unit, we get rid of the unit and keep the value
        // if is an implicit unit, it's px, and we return just the value
        return value;
    }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */ function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [
        0,
        0
    ];
    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = [
        'right',
        'left'
    ].indexOf(basePlacement) !== -1;
    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function(frag) {
        return frag.trim();
    });
    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function(frag) {
        return frag.search(/,|\s/) !== -1;
    }));
    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }
    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [
        fragments.slice(0, divider).concat([
            fragments[divider].split(splitRegex)[0]
        ]),
        [
            fragments[divider].split(splitRegex)[1]
        ].concat(fragments.slice(divider + 1))
    ] : [
        fragments
    ];
    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function(op, index) {
        // Most of the units rely on the orientation of the popper
        var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
        var mergeWithPrevious = false;
        return op// This aggregates any `+` or `-` sign that aren't considered operators
        // e.g.: 10 + +5 => [10, +, +5]
        .reduce(function(a, b) {
            if (a[a.length - 1] === '' && [
                '+',
                '-'
            ].indexOf(b) !== -1) {
                a[a.length - 1] = b;
                mergeWithPrevious = true;
                return a;
            } else if (mergeWithPrevious) {
                a[a.length - 1] += b;
                mergeWithPrevious = false;
                return a;
            } else {
                return a.concat(b);
            }
        }, [])// Here we convert the string values into number values (in px)
        .map(function(str) {
            return toValue(str, measurement, popperOffsets, referenceOffsets);
        });
    });
    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function(op, index) {
        op.forEach(function(frag, index2) {
            if (isNumeric(frag)) {
                offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
            }
        });
    });
    return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */ function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var basePlacement = placement.split('-')[0];
    var offsets = void 0;
    if (isNumeric(+offset)) {
        offsets = [
            +offset,
            0
        ];
    } else {
        offsets = parseOffset(offset, popper, reference, basePlacement);
    }
    if (basePlacement === 'left') {
        popper.top += offsets[0];
        popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
        popper.top += offsets[0];
        popper.left += offsets[1];
    } else if (basePlacement === 'top') {
        popper.left += offsets[0];
        popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
        popper.left += offsets[0];
        popper.top += offsets[1];
    }
    data.popper = popper;
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
        boundariesElement = getOffsetParent(boundariesElement);
    }
    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top, left = popperStyles.left, transform = popperStyles[transformProp];
    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;
    options.boundaries = boundaries;
    var order = options.priority;
    var popper = data.offsets.popper;
    var check = {
        primary: function primary(placement) {
            var value = popper[placement];
            if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
                value = Math.max(popper[placement], boundaries[placement]);
            }
            return defineProperty({}, placement, value);
        },
        secondary: function secondary(placement) {
            var mainSide = placement === 'right' ? 'left' : 'top';
            var value = popper[mainSide];
            if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
                value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
            }
            return defineProperty({}, mainSide, value);
        }
    };
    order.forEach(function(placement) {
        var side = [
            'left',
            'top'
        ].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        popper = _extends({}, popper, check[side](placement));
    });
    data.offsets.popper = popper;
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];
    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
        var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
        var isVertical = [
            'bottom',
            'top'
        ].indexOf(basePlacement) !== -1;
        var side = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';
        var shiftOffsets = {
            start: defineProperty({}, side, reference[side]),
            end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
        };
        data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
        return data;
    }
    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function(modifier) {
        return modifier.name === 'preventOverflow';
    }).boundaries;
    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === true) {
            return data;
        }
        data.hide = true;
        data.attributes['x-out-of-boundaries'] = '';
    } else {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === false) {
            return data;
        }
        data.hide = false;
        data.attributes['x-out-of-boundaries'] = false;
    }
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var isHoriz = [
        'left',
        'right'
    ].indexOf(basePlacement) !== -1;
    var subtractLength = [
        'top',
        'left'
    ].indexOf(basePlacement) === -1;
    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);
    return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */ /**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */ var modifiers = {
    /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */ shift: {
        /** @prop {number} order=100 - Index used to define the order of execution */ order: 100,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: shift
    },
    /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */ offset: {
        /** @prop {number} order=200 - Index used to define the order of execution */ order: 200,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: offset,
        /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */ offset: 0
    },
    /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */ preventOverflow: {
        /** @prop {number} order=300 - Index used to define the order of execution */ order: 300,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: preventOverflow,
        /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */ priority: [
            'left',
            'right',
            'top',
            'bottom'
        ],
        /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */ padding: 5,
        /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */ boundariesElement: 'scrollParent'
    },
    /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */ keepTogether: {
        /** @prop {number} order=400 - Index used to define the order of execution */ order: 400,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: keepTogether
    },
    /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */ arrow: {
        /** @prop {number} order=500 - Index used to define the order of execution */ order: 500,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: arrow,
        /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */ element: '[x-arrow]'
    },
    /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */ flip: {
        /** @prop {number} order=600 - Index used to define the order of execution */ order: 600,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: flip,
        /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */ behavior: 'flip',
        /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */ padding: 5,
        /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */ boundariesElement: 'viewport',
        /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */ flipVariations: false,
        /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */ flipVariationsByContent: false
    },
    /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */ inner: {
        /** @prop {number} order=700 - Index used to define the order of execution */ order: 700,
        /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */ enabled: false,
        /** @prop {ModifierFn} */ fn: inner
    },
    /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */ hide: {
        /** @prop {number} order=800 - Index used to define the order of execution */ order: 800,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: hide
    },
    /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */ computeStyle: {
        /** @prop {number} order=850 - Index used to define the order of execution */ order: 850,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: computeStyle,
        /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */ gpuAcceleration: true,
        /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */ x: 'bottom',
        /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */ y: 'right'
    },
    /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */ applyStyle: {
        /** @prop {number} order=900 - Index used to define the order of execution */ order: 900,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: applyStyle,
        /** @prop {Function} */ onLoad: applyStyleOnLoad,
        /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */ gpuAcceleration: undefined
    }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */ /**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */ var Defaults = {
    /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */ placement: 'bottom',
    /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */ positionFixed: false,
    /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */ eventsEnabled: true,
    /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */ removeOnDestroy: false,
    /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */ onCreate: function onCreate() {},
    /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */ onUpdate: function onUpdate() {},
    /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */ modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */ /**
 * @callback onUpdate
 * @param {dataObject} data
 */ // Utils
// Methods
var Popper = function() {
    /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */ function Popper(reference, popper) {
        var _this = this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        classCallCheck(this, Popper);
        this.scheduleUpdate = function() {
            return requestAnimationFrame(_this.update);
        };
        // make update() debounced, so that it only runs at most once-per-tick
        this.update = debounce(this.update.bind(this));
        // with {} we create a new object with the options inside it
        this.options = _extends({}, Popper.Defaults, options);
        // init state
        this.state = {
            isDestroyed: false,
            isCreated: false,
            scrollParents: []
        };
        // get reference and popper elements (allow jQuery wrappers)
        this.reference = reference && reference.jquery ? reference[0] : reference;
        this.popper = popper && popper.jquery ? popper[0] : popper;
        // Deep merge modifiers options
        this.options.modifiers = {};
        Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function(name) {
            _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
        });
        // Refactoring modifiers' list (Object => Array)
        this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
            return _extends({
                name: name
            }, _this.options.modifiers[name]);
        })// sort the modifiers by order
        .sort(function(a, b) {
            return a.order - b.order;
        });
        // modifiers have the ability to execute arbitrary code when Popper.js get inited
        // such code is executed in the same order of its modifier
        // they could add new properties to their options configuration
        // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
        this.modifiers.forEach(function(modifierOptions) {
            if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
                modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
            }
        });
        // fire the first update to position the popper in the right place
        this.update();
        var eventsEnabled = this.options.eventsEnabled;
        if (eventsEnabled) {
            // setup event listeners, they will take care of update the position in specific situations
            this.enableEventListeners();
        }
        this.state.eventsEnabled = eventsEnabled;
    }
    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs
    createClass(Popper, [
        {
            key: 'update',
            value: function update$$1() {
                return update.call(this);
            }
        },
        {
            key: 'destroy',
            value: function destroy$$1() {
                return destroy.call(this);
            }
        },
        {
            key: 'enableEventListeners',
            value: function enableEventListeners$$1() {
                return enableEventListeners.call(this);
            }
        },
        {
            key: 'disableEventListeners',
            value: function disableEventListeners$$1() {
                return disableEventListeners.call(this);
            }
        }
    ]);
    return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */ Popper.Utils = (typeof window !== 'undefined' ? window : /*TURBOPACK member replacement*/ __turbopack_context__.g).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
const __TURBOPACK__default__export__ = Popper;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */ __turbopack_context__.s([
    "default",
    ()=>hasClass
]);
function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/addClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>addClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hasClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js [app-client] (ecmascript)");
;
function addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hasClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;
    else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>removeClass
]);
function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    } else if (typeof element.className === 'string') {
        element.className = replaceClassName(element.className, className);
    } else {
        element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
    }
}
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    disabled: false
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/utils/PropTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classNamesShape",
    ()=>classNamesShape,
    "timeoutsShape",
    ()=>timeoutsShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
var timeoutsShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        appear: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number
    }).isRequired
]) : "TURBOPACK unreachable";
var classNamesShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        active: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        enterDone: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        enterActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        exitDone: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        exitActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    })
]) : "TURBOPACK unreachable";
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/utils/reflow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forceReflow",
    ()=>forceReflow
]);
var forceReflow = function forceReflow(node) {
    return node.scrollTop;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/Transition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTERED",
    ()=>ENTERED,
    "ENTERING",
    ()=>ENTERING,
    "EXITED",
    ()=>EXITED,
    "EXITING",
    ()=>EXITING,
    "UNMOUNTED",
    ()=>UNMOUNTED,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/utils/PropTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/utils/reflow.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */ var Transition = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Transition, _React$Component);
    function Transition(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
            if (appear) {
                initialStatus = EXITED;
                _this.appearStatus = ENTERING;
            } else {
                initialStatus = ENTERED;
            }
        } else {
            if (props.unmountOnExit || props.mountOnEnter) {
                initialStatus = UNMOUNTED;
            } else {
                initialStatus = EXITED;
            }
        }
        _this.state = {
            status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) {
            return {
                status: EXITED
            };
        }
        return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    ;
    var _proto = Transition.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
            var status = this.state.status;
            if (this.props.in) {
                if (status !== ENTERING && status !== ENTERED) {
                    nextStatus = ENTERING;
                }
            } else {
                if (status === ENTERING || status === ENTERED) {
                    nextStatus = EXITING;
                }
            }
        }
        this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== 'number') {
            exit = timeout.exit;
            enter = timeout.enter; // TODO: remove fallback for next major
            appear = timeout.appear !== undefined ? timeout.appear : enter;
        }
        return {
            exit: exit,
            enter: enter,
            appear: appear
        };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
            mounting = false;
        }
        if (nextStatus !== null) {
            // nextStatus will always be ENTERING or EXITING.
            this.cancelNextCallback();
            if (nextStatus === ENTERING) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                    // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                    // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
                    if (node) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forceReflow"])(node);
                }
                this.performEnter(mounting);
            } else {
                this.performExit();
            }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
            this.setState({
                status: UNMOUNTED
            });
        }
    };
    _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [
            appearing
        ] : [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this),
            appearing
        ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set
        if (!mounting && !enter || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: ENTERED
            }, function() {
                _this2.props.onEntered(maybeNode);
            });
            return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
            status: ENTERING
        }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
                _this2.safeSetState({
                    status: ENTERED
                }, function() {
                    _this2.props.onEntered(maybeNode, maybeAppearing);
                });
            });
        });
    };
    _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this); // no exit animation skip right to EXITED
        if (!exit || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: EXITED
            }, function() {
                _this3.props.onExited(maybeNode);
            });
            return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
            status: EXITING
        }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
                _this3.safeSetState({
                    status: EXITED
                }, function() {
                    _this3.props.onExited(maybeNode);
                });
            });
        });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
            if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
            }
        };
        this.nextCallback.cancel = function() {
            active = false;
        };
        return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
            setTimeout(this.nextCallback, 0);
            return;
        }
        if (this.props.addEndListener) {
            var _ref3 = this.props.nodeRef ? [
                this.nextCallback
            ] : [
                node,
                this.nextCallback
            ], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
            this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout != null) {
            setTimeout(this.nextCallback, timeout);
        }
    };
    _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
            return null;
        }
        var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef"
        ]);
        return(/*#__PURE__*/ // allows for nested Transitions
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: null
        }, typeof children === 'function' ? children(status, childProps) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.only(children), childProps)));
    };
    return Transition;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component);
Transition.contextType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Transition.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */ nodeRef: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        current: typeof Element === 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].any : function(propValue, key, componentName, location, propFullName, secret) {
            var value = propValue[key];
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
        }
    }),
    /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].element.isRequired
    ]).isRequired,
    /**
   * Show the component; triggers the enter or exit states
   */ in: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */ mountOnEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */ unmountOnExit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */ appear: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable enter transitions.
   */ enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable exit transitions.
   */ exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */ timeout: function timeout(props) {
        var pt = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutsShape"];
        if (!props.addEndListener) pt = pt.isRequired;
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return pt.apply(void 0, [
            props
        ].concat(args));
    },
    /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */ addEndListener: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
} : "TURBOPACK unreachable"; // Name the function so it is clearer in the documentation
function noop() {}
Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
const __TURBOPACK__default__export__ = Transition;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/CSSTransition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/addClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/Transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/utils/PropTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/utils/reflow.js [app-client] (ecmascript)");
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
var _addClass = function addClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function(c) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, c);
    });
};
var removeClass = function removeClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function(c) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, c);
    });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */ var CSSTransition = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(CSSTransition, _React$Component);
    function CSSTransition() {
        var _this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [
            this
        ].concat(args)) || this;
        _this.appliedClasses = {
            appear: {},
            enter: {},
            exit: {}
        };
        _this.onEnter = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
            _this.removeClasses(node, 'exit');
            _this.addClass(node, appearing ? 'appear' : 'enter', 'base');
            if (_this.props.onEnter) {
                _this.props.onEnter(maybeNode, maybeAppearing);
            }
        };
        _this.onEntering = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
            var type = appearing ? 'appear' : 'enter';
            _this.addClass(node, type, 'active');
            if (_this.props.onEntering) {
                _this.props.onEntering(maybeNode, maybeAppearing);
            }
        };
        _this.onEntered = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
            var type = appearing ? 'appear' : 'enter';
            _this.removeClasses(node, type);
            _this.addClass(node, type, 'done');
            if (_this.props.onEntered) {
                _this.props.onEntered(maybeNode, maybeAppearing);
            }
        };
        _this.onExit = function(maybeNode) {
            var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
            _this.removeClasses(node, 'appear');
            _this.removeClasses(node, 'enter');
            _this.addClass(node, 'exit', 'base');
            if (_this.props.onExit) {
                _this.props.onExit(maybeNode);
            }
        };
        _this.onExiting = function(maybeNode) {
            var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
            _this.addClass(node, 'exit', 'active');
            if (_this.props.onExiting) {
                _this.props.onExiting(maybeNode);
            }
        };
        _this.onExited = function(maybeNode) {
            var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
            _this.removeClasses(node, 'exit');
            _this.addClass(node, 'exit', 'done');
            if (_this.props.onExited) {
                _this.props.onExited(maybeNode);
            }
        };
        _this.resolveArguments = function(maybeNode, maybeAppearing) {
            return _this.props.nodeRef ? [
                _this.props.nodeRef.current,
                maybeNode
            ] // here `maybeNode` is actually `appearing`
             : [
                maybeNode,
                maybeAppearing
            ];
        };
        _this.getClassNames = function(type) {
            var classNames = _this.props.classNames;
            var isStringClassNames = typeof classNames === 'string';
            var prefix = isStringClassNames && classNames ? classNames + "-" : '';
            var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
            var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
            var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
            return {
                baseClassName: baseClassName,
                activeClassName: activeClassName,
                doneClassName: doneClassName
            };
        };
        return _this;
    }
    var _proto = CSSTransition.prototype;
    _proto.addClass = function addClass(node, type, phase) {
        var className = this.getClassNames(type)[phase + "ClassName"];
        var _this$getClassNames = this.getClassNames('enter'), doneClassName = _this$getClassNames.doneClassName;
        if (type === 'appear' && phase === 'done' && doneClassName) {
            className += " " + doneClassName;
        } // This is to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        if (phase === 'active') {
            if (node) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forceReflow"])(node);
        }
        if (className) {
            this.appliedClasses[type][phase] = className;
            _addClass(node, className);
        }
    };
    _proto.removeClasses = function removeClasses(node, type) {
        var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
        this.appliedClasses[type] = {};
        if (baseClassName) {
            removeClass(node, baseClassName);
        }
        if (activeClassName) {
            removeClass(node, activeClassName);
        }
        if (doneClassName) {
            removeClass(node, doneClassName);
        }
    };
    _proto.render = function render() {
        var _this$props = this.props, _ = _this$props.classNames, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "classNames"
        ]);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited
        }));
    };
    return CSSTransition;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component);
CSSTransition.defaultProps = {
    classNames: ''
};
CSSTransition.propTypes = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].propTypes, {
    /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */ classNames: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNamesShape"],
    /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
}) : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = CSSTransition;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/CSSTransition.js [app-client] (ecmascript) <export default as CSSTransition>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSSTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$CSSTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$react$2d$transition$2d$group$40$4$2e$4$2e$_a762e99347f462ecb2dad2cc83c6d884$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$CSSTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/react-transition-group@4.4._a762e99347f462ecb2dad2cc83c6d884/node_modules/react-transition-group/esm/CSSTransition.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_freeGlobal.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
module.exports = freeGlobal;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_root.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var freeGlobal = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_freeGlobal.js [app-client] (ecmascript)");
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var root = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_root.js [app-client] (ecmascript)");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayMap.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length){
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
module.exports = arrayMap;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArray.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getRawTag.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js [app-client] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}
module.exports = getRawTag;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_objectToString.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js [app-client] (ecmascript)"), getRawTag = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getRawTag.js [app-client] (ecmascript)"), objectToString = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_objectToString.js [app-client] (ecmascript)");
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
module.exports = isObjectLike;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isSymbol.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseGetTag = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js [app-client] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)");
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseToString.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js [app-client] (ecmascript)"), arrayMap = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayMap.js [app-client] (ecmascript)"), isArray = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArray.js [app-client] (ecmascript)"), isSymbol = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isSymbol.js [app-client] (ecmascript)");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
        return value;
    }
    if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = baseToString;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toString.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseToString = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseToString.js [app-client] (ecmascript)");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? '' : baseToString(value);
}
module.exports = toString;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/uniqueId.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toString = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toString.js [app-client] (ecmascript)");
/** Used to generate unique IDs. */ var idCounter = 0;
/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */ function uniqueId(prefix) {
    var id = ++idCounter;
    return toString(prefix) + id;
}
module.exports = uniqueId;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_overArg.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getPrototype.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var overArg = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_overArg.js [app-client] (ecmascript)");
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isPlainObject.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseGetTag = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js [app-client] (ecmascript)"), getPrototype = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getPrototype.js [app-client] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)");
/** `Object#toString` result references. */ var objectTag = '[object Object]';
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isElement.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var isObjectLike = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)"), isPlainObject = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isPlainObject.js [app-client] (ecmascript)");
/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */ function isElement(value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}
module.exports = isElement;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObject.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/now.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var root = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_root.js [app-client] (ecmascript)");
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
module.exports = now;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_trimmedEndIndex.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Used to match a single whitespace character. */ var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && reWhitespace.test(string.charAt(index))){}
    return index;
}
module.exports = trimmedEndIndex;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseTrim.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var trimmedEndIndex = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_trimmedEndIndex.js [app-client] (ecmascript)");
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}
module.exports = baseTrim;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toNumber.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseTrim = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseTrim.js [app-client] (ecmascript)"), isObject = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObject.js [app-client] (ecmascript)"), isSymbol = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isSymbol.js [app-client] (ecmascript)");
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = toNumber;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/debounce.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var isObject = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObject.js [app-client] (ecmascript)"), now = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/now.js [app-client] (ecmascript)"), toNumber = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toNumber.js [app-client] (ecmascript)");
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
module.exports = debounce;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/escapeRegExp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toString = __turbopack_context__.r("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toString.js [app-client] (ecmascript)");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */ function escapeRegExp(string) {
    string = toString(string);
    return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
}
module.exports = escapeRegExp;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/CheckboxChecked.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckboxChecked_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const CheckboxChecked = ({ size, ...props })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        viewBox: "0 0 10 8",
        fill: "currentColor",
        width: size || "10",
        height: size || "8",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M3.5 5.2 1.2 3 0 4.2 3.5 7.8 10 1.2 8.8 0z"
    }));
CheckboxChecked.displayName = "CheckboxChecked";
var CheckboxChecked_default = CheckboxChecked;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/CheckboxChecked.js [app-client] (ecmascript) <export default as CheckboxChecked>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckboxChecked",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$CheckboxChecked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$CheckboxChecked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/CheckboxChecked.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/CheckboxIndeterminate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckboxIndeterminate_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const CheckboxIndeterminate = ({ size, ...props })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        viewBox: "0 0 8 2",
        fill: "currentColor",
        width: size || "8",
        height: size || "2",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M0 0H8V2H0z"
    }));
CheckboxIndeterminate.displayName = "CheckboxIndeterminate";
var CheckboxIndeterminate_default = CheckboxIndeterminate;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/CheckboxIndeterminate.js [app-client] (ecmascript) <export default as CheckboxIndeterminate>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckboxIndeterminate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$CheckboxIndeterminate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$CheckboxIndeterminate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/CheckboxIndeterminate.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/FormFieldError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormFieldError_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const FormFieldError = ({ size, ...props })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        viewBox: "0 0 2 10",
        fill: "currentColor",
        width: size || "2",
        height: size || "10",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M1.72673061,0.273269394 C1.91828145,0.464820242 2.01788194,0.72969704 2,1 L2,5 C2.01788194,5.27030296 1.91828145,5.53517976 1.72673061,5.72673061 C1.53517976,5.91828145 1.27030296,6.01788194 1,6 C0.72969704,6.01788194 0.464820242,5.91828145 0.273269394,5.72673061 C0.0817185472,5.53517976 -0.0178819397,5.27030296 -3.39950724e-13,5 L-3.39950724e-13,1 C-0.0178819397,0.72969704 0.0817185472,0.464820242 0.273269394,0.273269394 C0.464820242,0.0817185472 0.72969704,-0.0178819397 1,1.22124533e-15 C1.27030296,-0.0178819397 1.53517976,0.0817185472 1.72673061,0.273269394 Z M1.72673061,8.27326939 C1.91828145,8.46482024 2.01788194,8.72969704 2,9 C2.01788194,9.27030296 1.91828145,9.53517976 1.72673061,9.72673061 C1.53517976,9.91828145 1.27030296,10.0178819 1,10 C0.72969704,10.0178819 0.464820242,9.91828145 0.273269394,9.72673061 C0.0817185472,9.53517976 -0.0178819397,9.27030296 -3.40054807e-13,9 C-0.0178819397,8.72969704 0.0817185472,8.46482024 0.273269394,8.27326939 C0.464820242,8.08171855 0.72969704,7.98211806 1,8 C1.27030296,7.98211806 1.53517976,8.08171855 1.72673061,8.27326939 Z"
    }));
FormFieldError.displayName = "FormFieldError";
var FormFieldError_default = FormFieldError;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/FormFieldError.js [app-client] (ecmascript) <export default as FormFieldError>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormFieldError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$FormFieldError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$FormFieldError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/FormFieldError.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/FormFieldErrorSmall.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormFieldErrorSmall_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const FormFieldErrorSmall = ({ size, ...props })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        viewBox: "0 0 2 10",
        fill: "currentColor",
        width: size || "2",
        height: size || "10",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fillRule: "evenodd",
        d: "M1,0 C1.55228475,0 2,0.44771525 2,1 L2,5 C2,5.55228475 1.55228475,6 1,6 C0.44771525,6 0,5.55228475 0,5 L0,1 C0,0.44771525 0.44771525,0 1,0 L1,0 Z M1,8 C1.55228475,8 2,8.44771525 2,9 C2,9.55228475 1.55228475,10 1,10 C0.44771525,10 0,9.55228475 0,9 C0,8.44771525 0.44771525,8 1,8 L1,8 Z"
    }));
FormFieldErrorSmall.displayName = "FormFieldErrorSmall";
var FormFieldErrorSmall_default = FormFieldErrorSmall;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/FormFieldErrorSmall.js [app-client] (ecmascript) <export default as FormFieldErrorSmall>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormFieldErrorSmall",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$FormFieldErrorSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$FormFieldErrorSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/FormFieldErrorSmall.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/ToggleOn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToggleOn_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ToggleOn = ({ size, ...props })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        viewBox: "0 0 10 8",
        fill: "currentColor",
        width: size || "10",
        height: size || "8",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M3.8 5 1.2 2.5 0 3.7 3.8 7.5 10 1.2 8.8 0z"
    }));
ToggleOn.displayName = "ToggleOn";
var ToggleOn_default = ToggleOn;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/ToggleOn.js [app-client] (ecmascript) <export default as ToggleOn>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToggleOn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$ToggleOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$ToggleOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/ToggleOn.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/CircleLoaderCheck.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircleLoaderCheck_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const CircleLoaderCheck = ({ size, ...props })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        viewBox: "0 0 19 14",
        fill: "currentColor",
        width: size || "19",
        height: size || "14",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M16.4482656,0.439339828 C17.034052,-0.146446609 17.9837995,-0.146446609 18.5695859,0.439339828 C19.1553723,1.02512627 19.1553723,1.97487373 18.5695859,2.56066017 L7.56066017,13.5695859 C6.97487373,14.1553723 6.02512627,14.1553723 5.43933983,13.5695859 L0.439339828,8.5695859 C-0.146446609,7.98379946 -0.146446609,7.03405199 0.439339828,6.44826555 C1.02512627,5.86247912 1.97487373,5.86247912 2.56066017,6.44826555 L6.5,10.3876054 L16.4482656,0.439339828 Z"
    }));
CircleLoaderCheck.displayName = "CircleLoaderCheck";
var CircleLoaderCheck_default = CircleLoaderCheck;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/CircleLoaderCheck.js [app-client] (ecmascript) <export default as CircleLoaderCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircleLoaderCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$CircleLoaderCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$CircleLoaderCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/CircleLoaderCheck.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/CircleLoaderCheckSmall.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircleLoaderCheckSmall_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const CircleLoaderCheckSmall = ({ size, ...props })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        viewBox: "0 0 11 8",
        fill: "currentColor",
        width: size || "11",
        height: size || "8",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M1.70710678,3.29289322 C1.31658249,2.90236893 0.683417511,2.90236893 0.292893219,3.29289322 C-0.0976310729,3.68341751 -0.0976310729,4.31658249 0.292893219,4.70710678 L3.29289322,7.70710678 C3.68341751,8.09763107 4.31658249,8.09763107 4.70710678,7.70710678 L10.7071068,1.70710678 C11.0976311,1.31658249 11.0976311,0.683417511 10.7071068,0.292893219 C10.3165825,-0.0976310729 9.68341751,-0.0976310729 9.29289322,0.292893219 L4,5.58578644 L1.70710678,3.29289322 Z"
    }));
CircleLoaderCheckSmall.displayName = "CircleLoaderCheckSmall";
var CircleLoaderCheckSmall_default = CircleLoaderCheckSmall;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/CircleLoaderCheckSmall.js [app-client] (ecmascript) <export default as CircleLoaderCheckSmall>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircleLoaderCheckSmall",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$CircleLoaderCheckSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$7_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$default$2f$system$2f$dist$2f$components$2f$CircleLoaderCheckSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.7_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/default/system/dist/components/CircleLoaderCheckSmall.js [app-client] (ecmascript)");
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/shallowequal@1.1.0/node_modules/shallowequal/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

//
module.exports = function shallowEqual(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (ret !== void 0) {
        return !!ret;
    }
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++){
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
            return false;
        }
    }
    return true;
};
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/hoist-non-react-methods@1.1.0/node_modules/hoist-non-react-methods/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = hoistNonReactMethods;
var REACT_PROTOTYPE = {
    autobind: true,
    childContextTypes: true,
    componentDidMount: true,
    componentDidUpdate: true,
    componentWillMount: true,
    componentWillReceiveProps: true,
    componentWillUnmount: true,
    componentWillUpdate: true,
    contextTypes: true,
    displayName: true,
    forceUpdate: true,
    getChildContext: true,
    getDefaultProps: true,
    getDOMNode: true,
    getInitialState: true,
    isMounted: true,
    mixins: true,
    propTypes: true,
    render: true,
    replaceProps: true,
    replaceState: true,
    setProps: true,
    setState: true,
    shouldComponentUpdate: true,
    statics: true,
    updateComponent: true
};
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};
var defaultConfig = {
    delegateTo: function delegateTo(w) {
        return w.refs.child;
    },
    hoistStatics: true
};
function hoistNonReactMethods(targetComponent, sourceComponent, config) {
    var targetComponentName = targetComponent.displayName || targetComponent.name || 'Wrapper';
    var sourceComponentName = sourceComponent.displayName || sourceComponent.name || 'WrappedComponent';
    var hoistStatics = config && typeof config.hoistStatics !== 'undefined' ? config.hoistStatics : defaultConfig.hoistStatics;
    var delegateTo = config && typeof config.delegateTo !== 'undefined' ? config.delegateTo : defaultConfig.delegateTo;
    // backwards compatible where config option is delegateTo function
    if (typeof config === 'function') delegateTo = config;
    if (hoistStatics) {
        var statics = Object.getOwnPropertyNames(sourceComponent).filter(function(k) {
            return !REACT_STATICS[k] && !KNOWN_STATICS[k];
        });
        statics.forEach(function(methodName) {
            if (targetComponent[methodName]) console.warn('Static method ' + methodName + ' already exists in wrapper component ' + targetComponentName + ', and won\'t be hoisted. Consider changing the name on ' + sourceComponentName + '.');
            targetComponent[methodName] = sourceComponent[methodName];
        });
    }
    var methods = Object.getOwnPropertyNames(sourceComponent.prototype).filter(function(k) {
        return !REACT_PROTOTYPE[k];
    });
    methods.forEach(function(methodName) {
        if (targetComponent.prototype[methodName]) {
            console.warn('Method ' + methodName + ' already exists in wrapper component ' + targetComponentName + ', and won\'t be hoisted. Consider changing the name on ' + sourceComponentName + '.');
            return;
        }
        targetComponent.prototype[methodName] = function() {
            var _sourceComponent$prot;
            for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return (_sourceComponent$prot = sourceComponent.prototype[methodName]).call.apply(_sourceComponent$prot, [
                delegateTo.call(this, this)
            ].concat(args));
        };
    });
    return targetComponent;
}
}),
]);

//# sourceMappingURL=0ov4__pnpm_015z2cu._.js.map