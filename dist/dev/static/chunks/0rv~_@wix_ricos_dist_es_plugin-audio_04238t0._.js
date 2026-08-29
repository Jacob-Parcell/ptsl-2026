(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/consts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUDIO_ACTION_NAMES",
    ()=>AUDIO_ACTION_NAMES,
    "AUDIO_BI_VALUES",
    ()=>AUDIO_BI_VALUES,
    "AUDIO_BUTTONS",
    ()=>AUDIO_BUTTONS,
    "AUDIO_INSERT_AUDIO_MODAL_ID",
    ()=>AUDIO_INSERT_AUDIO_MODAL_ID,
    "AUDIO_INSERT_SOUNDCLOUD_MODAL_ID",
    ()=>AUDIO_INSERT_SOUNDCLOUD_MODAL_ID,
    "AUDIO_INSERT_SPOTIFY_MODAL_ID",
    ()=>AUDIO_INSERT_SPOTIFY_MODAL_ID,
    "AUDIO_REPLACE_MODAL_ID",
    ()=>AUDIO_REPLACE_MODAL_ID,
    "AUDIO_SETTINGS_MODAL_ID",
    ()=>AUDIO_SETTINGS_MODAL_ID,
    "AUDIO_TYPES",
    ()=>AUDIO_TYPES,
    "INSERT_AUDIO_MODAL_ID",
    ()=>INSERT_AUDIO_MODAL_ID,
    "audioFileTypes",
    ()=>audioFileTypes,
    "downloadFile",
    ()=>downloadFile,
    "getAudioSrc",
    ()=>getAudioSrc,
    "playbackRates",
    ()=>playbackRates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
;
const downloadFile = (url, fileName)=>{
    fetch(url, {
        method: "GET"
    }).then((response)=>response.blob()).then((blob)=>{
        const url2 = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url2;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
    });
};
const getAudioSrc = (src, config)=>{
    if (src?.url) {
        return src.url;
    }
    if (typeof src === "object") {
        if (config && config.getAudioUrl) {
            return config.getAudioUrl(src);
        } else {
            console.error("must set getAudioUrl in plugin config when using custom audio source!", src);
        }
    }
    return src;
};
const playbackRates = [
    {
        text: "0.25",
        rate: 0.25
    },
    {
        text: "0.5",
        rate: 0.5
    },
    {
        text: "0.75",
        rate: 0.75
    },
    {
        text: "Normal",
        rate: 1
    },
    {
        text: "1.25",
        rate: 1.25
    },
    {
        text: "1.5",
        rate: 1.5
    },
    {
        text: "1.75",
        rate: 1.75
    },
    {
        text: "2",
        rate: 2
    }
];
const AUDIO_ACTION_NAMES = {
    fileDownloaded: "fileDownloaded",
    playAudio: "playAudio",
    changeTitle: "changeTitle",
    changeCreator: "changeCreator",
    changeCover: "changeCover",
    downloadAudio: "downloadAudio"
};
const AUDIO_BI_VALUES = {
    PLAY: "play",
    PAUSE: "pause",
    PLAYBACK_COMPLETED: "playbackCompleted",
    YES: "yes",
    NO: "no",
    click: "Click"
};
const AUDIO_TYPES = {
    custom: "File Upload",
    spotify: "Spotify",
    soundCloud: "SoundCloud"
};
const audioFileTypes = ".mp3,.pcm,.wav,.aiff,.aif,.aac,.ogg,.wma,.m4a,.flac";
const INSERT_AUDIO_MODAL_ID = "AUDIO.insert";
const AUDIO_SETTINGS_MODAL_ID = "AUDIO.settings";
const AUDIO_INSERT_AUDIO_MODAL_ID = "AUDIO.insertAudio";
const AUDIO_INSERT_SPOTIFY_MODAL_ID = "AUDIO.insertSpotify";
const AUDIO_INSERT_SOUNDCLOUD_MODAL_ID = "AUDIO.insertSoundCloud";
const AUDIO_REPLACE_MODAL_ID = "AUDIO.replace";
const AUDIO_BUTTONS = {
    size: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO}.size`,
    alignment: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO}.alignment`
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/converters/audio-converter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "audioConverter",
    ()=>audioConverter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$pm$2d$converters$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/pm-converters/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$pm$2d$converters$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/pm-converters/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/next-schema/generated/ricos_document.js [app-client] (ecmascript)");
;
;
;
const audioConverter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$pm$2d$converters$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["definePmNodeConverter"])({
    toPm: {
        types: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO
        ],
        convert: (node)=>{
            const { id = "", audioData } = node || {};
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO,
                attrs: {
                    id,
                    containerData: audioData?.containerData ?? null,
                    audio: audioData?.audio ?? null,
                    disableDownload: audioData?.disableDownload ?? null,
                    coverImage: audioData?.coverImage ?? null,
                    name: audioData?.name ?? null,
                    authorName: audioData?.authorName ?? null,
                    html: audioData?.html ?? null,
                    animation: audioData?.animation ?? null
                }
            };
        }
    },
    fromPm: {
        types: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO
        ],
        convert: (node)=>{
            const attributes = node.attrs || {};
            const { id, ...data } = attributes;
            const { loading, error, ...filteredData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$pm$2d$converters$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeNullValues"])(data);
            if (loading || error) {
                return void 0;
            }
            const result = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO,
                id,
                nodes: [],
                audioData: filteredData
            };
            return result;
        }
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/defaults.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_CONFIGS",
    ()=>DEFAULT_CONFIGS,
    "RICOS_DEFAULTS",
    ()=>RICOS_DEFAULTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/common.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2d$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/url-resolvers.js [app-client] (ecmascript)");
;
;
const commonConfig = {
    getAudioUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$url$2d$resolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAudioUrl"]
};
const DEFAULT_CONFIGS = Object.freeze({
    viewer: {
        ...commonConfig,
        size: "content",
        alignment: "center"
    },
    editor: {
        ...commonConfig
    }
});
const RICOS_DEFAULTS = Object.freeze({
    containerData: {
        width: {
            size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginContainerData_Width_Type"].CONTENT
        },
        alignment: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$common$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginContainerData_Alignment"].CENTER,
        textWrap: true
    }
});
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/data-hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUDIO_CONTEXT_COMMON_MENU",
    ()=>AUDIO_CONTEXT_COMMON_MENU,
    "AUDIO_CONTEXT_MENU",
    ()=>AUDIO_CONTEXT_MENU,
    "AUDIO_CREATOR",
    ()=>AUDIO_CREATOR,
    "AUDIO_PLAYBACK_SPEED_MENU",
    ()=>AUDIO_PLAYBACK_SPEED_MENU,
    "AUDIO_SLIDER",
    ()=>AUDIO_SLIDER,
    "AUDIO_TITLE",
    ()=>AUDIO_TITLE,
    "EMBED_TAB_SUBMIT_BUTTON",
    ()=>EMBED_TAB_SUBMIT_BUTTON,
    "EMBED_TAB_URL_INPUT",
    ()=>EMBED_TAB_URL_INPUT,
    "INSERT_AUDIO_BUTTON",
    ()=>INSERT_AUDIO_BUTTON,
    "INSERT_AUDIO_MODAL",
    ()=>INSERT_AUDIO_MODAL,
    "INSERT_AUDIO_MODAL_SOURCE_TOGGLE",
    ()=>INSERT_AUDIO_MODAL_SOURCE_TOGGLE,
    "INSERT_SOUNDCLOUD_BUTTON",
    ()=>INSERT_SOUNDCLOUD_BUTTON,
    "INSERT_SPOTIFY_BUTTON",
    ()=>INSERT_SPOTIFY_BUTTON,
    "PLUGIN_TOOLBAR_AUDIO_SETTINGS_BUTTON",
    ()=>PLUGIN_TOOLBAR_AUDIO_SETTINGS_BUTTON,
    "ROOT",
    ()=>ROOT,
    "SETTINGS_AUDIO_COVER_IMAGE",
    ()=>SETTINGS_AUDIO_COVER_IMAGE,
    "SETTINGS_AUDIO_NAME_INPUT",
    ()=>SETTINGS_AUDIO_NAME_INPUT,
    "SETTINGS_AUTHOR_NAME_INPUT",
    ()=>SETTINGS_AUTHOR_NAME_INPUT,
    "SETTINGS_DOWNLOAD_TOGGLE",
    ()=>SETTINGS_DOWNLOAD_TOGGLE,
    "SETTINGS_MODAL",
    ()=>SETTINGS_MODAL,
    "UPLOAD_TAB_UPLOAD_BUTTON",
    ()=>UPLOAD_TAB_UPLOAD_BUTTON
]);
const ROOT = "audio-viewer";
const AUDIO_TITLE = "audio-title";
const AUDIO_CREATOR = "audio-creator";
const AUDIO_SLIDER = "audio-slider";
const PLUGIN_TOOLBAR_AUDIO_SETTINGS_BUTTON = "plugin-toolbar-audio-settings-button";
const INSERT_AUDIO_BUTTON = "insert-audio-button";
const INSERT_SOUNDCLOUD_BUTTON = "insert-soundcloud-button";
const INSERT_SPOTIFY_BUTTON = "insert-spotify-button";
const INSERT_AUDIO_MODAL = "insert-audio-modal";
const INSERT_AUDIO_MODAL_SOURCE_TOGGLE = "insert-audio-modal-embed-source-toggle";
const EMBED_TAB_URL_INPUT = "insert-audio-modal-embed-input";
const EMBED_TAB_SUBMIT_BUTTON = "insert-audio-modal-action-button-save";
const UPLOAD_TAB_UPLOAD_BUTTON = "insert-audio-modal-custom-upload";
const SETTINGS_MODAL = "audio-settings-modal";
const SETTINGS_AUDIO_NAME_INPUT = "settings-audio-name-input";
const SETTINGS_AUTHOR_NAME_INPUT = "settings-author-name-input";
const SETTINGS_AUDIO_COVER_IMAGE = "settings-cover-image";
const SETTINGS_DOWNLOAD_TOGGLE = "settings-download-toggle";
const AUDIO_CONTEXT_MENU = "audio-context-menu";
const AUDIO_CONTEXT_COMMON_MENU = "audio-context-common-menu";
const AUDIO_PLAYBACK_SPEED_MENU = "audio-playback-speed-menu";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/audio-embed-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>audio_embed_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "9f0275f6";
const injectCss = ()=>{
    var css = `.AVuCz{--wds-input-value-font-size-medium:14px}`;
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
var audio_embed_default = {
    "input": "AVuCz"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/modals/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSoundcloudUrl",
    ()=>isSoundcloudUrl
]);
const MATCH_SOUNDCLOUD_URL = /^https?:\/\/(www\.)?(on\.)?soundcloud\.com\/(.)+(\/(.)+)?/;
const isSoundcloudUrl = (url)=>MATCH_SOUNDCLOUD_URL.test(url);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/modals/audio-embed.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioEmbed",
    ()=>AudioEmbed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$converters$2f$generate$2d$random$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/converters/generate-random-id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/dev-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/editor-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$events$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/plugins-events-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$fetch$2d$embed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/fetch-embed-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$contains$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/link/contains-url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$request$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/request-service-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$react$2d$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/wix-react-player/react-player.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/wix-rich-content-common/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$embed$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/audio-embed-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/modals/utils.js [app-client] (ecmascript)");
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
const AudioEmbed = ({ componentData, closeModal, nodeId, logBi })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const { getPublicCommands } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContext"]);
    const pluginsEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$events$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsEventsContext"]);
    const { fetchOembedWithAuthFromDevContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DevContext"]);
    const { makeRequest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$request$2d$service$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestService"])();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(componentData?.audio?.src?.url || "");
    const [submittedInvalidUrl, setSubmittedInvalidUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onEmbedClick = async ()=>{
        pluginsEvents.publishPluginPopoverClick?.({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
            buttonName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDIA_POPOVERS_BUTTONS_NAMES_BI"].embed
        });
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMBED_TAB_SUBMIT_BUTTON"]
        });
        const { audio, name, coverImage, authorName, disableDownload, ...rest } = componentData;
        if (url && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$contains$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsUrl"])(url) || !hasValidFilePath(url))) {
            setSubmittedInvalidUrl(true);
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSoundcloudUrl"])(url)) {
            await fetchAndEmbedAudio(url, rest);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$react$2d$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactPlayer"].canPlay(url)) {
            updateRicosDocument({
                audio: {
                    src: {
                        url
                    }
                }
            });
            closeModal();
        } else {
            await fetchAndEmbedAudio(url, rest);
        }
    };
    const fetchAndEmbedAudio = async (url2, data)=>{
        try {
            const { html } = await fetchOembedWithAuthFromDevContext?.(url2) || await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$fetch$2d$embed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOembedWithAuth"]?.(url2, makeRequest) || {};
            if (html) {
                updateRicosDocument({
                    ...data,
                    audio: {
                        src: {
                            url: url2
                        }
                    },
                    html
                });
                closeModal();
            } else {
                setSubmittedInvalidUrl(true);
                inputRef.current?.focus();
            }
        } catch  {
            setSubmittedInvalidUrl(true);
            inputRef.current?.focus();
        }
    };
    const updateRicosDocument = (audio)=>queueMicrotask(()=>nodeId ? getPublicCommands().setBlock(nodeId, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"], audio) : getPublicCommands().insertBlockWithBlankLines(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"], {
                ...audio,
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$converters$2f$generate$2d$random$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])()
            }));
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
        label: t("AudioModal_Embed_Title"),
        maxLines: 2,
        status: submittedInvalidUrl ? "error" : void 0,
        statusMessage: submittedInvalidUrl ? t("SoundCloudUploadModal_Input_InvalidUrl") : void 0
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
        inputRef: (ref)=>{
            inputRef.current = ref;
        },
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$embed$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input,
        type: "url",
        autocomplete: "off",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMBED_TAB_URL_INPUT"],
        value: url,
        textOverflow: "ellipsis",
        onChange: (e)=>{
            setSubmittedInvalidUrl(false);
            setUrl(e.target.value);
            logBi({
                dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMBED_TAB_URL_INPUT"],
                value: e.target.value
            });
        },
        placeholder: t("EmbedURL_Placeholder"),
        onBlur: ()=>{
            if (url && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$link$2f$contains$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsUrl"])(url)) {
                setSubmittedInvalidUrl(true);
            }
        },
        onKeyDown: (e)=>{
            if (e.key === "Enter") {
                onEmbedClick();
            }
        }
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMBED_TAB_SUBMIT_BUTTON"],
        onClick: onEmbedClick,
        size: "small"
    }, t("AudioModal_Embed_ButtonText")));
};
const hasValidFilePath = (url)=>{
    const urlObj = new URL(url);
    return urlObj.pathname.length > 1;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/handle-audio-upload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHandleFileUploadFn",
    ()=>createHandleFileUploadFn,
    "handleAudioUpload",
    ()=>handleAudioUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$bundled$2d$dependencies$2f$id3js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/bundled-dependencies/id3js.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$upload$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/get-upload-error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$log$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/log-invariant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2d$manager$2f$create$2d$open$2d$media$2d$manager$2d$fn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/media-manager/create-open-media-manager-fn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2d$manager$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/media-manager/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$media$2d$manager$2d$uploader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/media-manager-uploader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$upload$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/upload/upload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$with$2d$file$2d$size$2d$limitation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/with-file-size-limitation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
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
const getAudioPickMedia = ({ services, type, handleFileUpload })=>{
    const devPickMedia = services.devService().pickMedia;
    const editorPickMedia = type === "audio" ? services.editorProps.pickMedia?.pickAudio : services.editorProps.pickMedia?.pickImage;
    const handleFileSelection = services.devService().handleFileSelection ?? createHandleFileSelectionFn(services);
    return devPickMedia ? devPickMedia : editorPickMedia ? editorPickMedia : handleFileSelection ? async ()=>{
        try {
            const data = await new Promise((resolve, reject)=>handleFileSelection(({ data: data2 })=>resolve(data2), {
                    isCoverImage: type === "image"
                }, reject));
            return {
                type: "ready-media",
                media: [
                    data
                ]
            };
        } catch  {
            return {
                type: "cancel"
            };
        }
    } : async ({ mimeType })=>{
        const files = await services.uploadService?.selectFiles({
            accept: mimeType,
            multiple: false
        }) ?? [];
        return {
            type: "file",
            file: files,
            customUploadFn: handleFileUpload
        };
    };
};
const isPickMediaAudioType = (data)=>"type" in data && data.type === "audio";
const isPickMediaImageType = (data)=>"type" in data && data.type === "image";
const getAudioAttributes = ({ type, uploadData, componentData })=>{
    if (type === "audio") {
        if (isPickMediaAudioType(uploadData)) {
            return {
                ...componentData,
                audio: {
                    src: uploadData.src
                },
                name: uploadData.title ?? componentData.name ?? "",
                authorName: uploadData.authorName ?? componentData?.authorName ?? "",
                html: null,
                tempData: void 0,
                loading: void 0
            };
        }
        return {
            ...componentData,
            audio: uploadData?.audio ?? componentData?.audio ?? null,
            name: uploadData?.name ?? componentData?.name ?? "",
            authorName: uploadData?.authorName ?? componentData?.authorName ?? "",
            html: null,
            tempData: void 0,
            loading: void 0
        };
    }
    if (isPickMediaImageType(uploadData)) {
        return {
            ...componentData,
            coverImage: {
                src: uploadData.src,
                width: uploadData.width,
                height: uploadData.height
            },
            tempData: void 0,
            loading: void 0
        };
    }
    return {
        ...componentData,
        coverImage: {
            src: {
                id: uploadData.file_name
            },
            width: uploadData.width,
            height: uploadData.height
        },
        tempData: void 0,
        loading: void 0
    };
};
const handleAudioUpload = async ({ services, publicCommands, nodeId, type, referenceElement })=>{
    const mimeType = type === "audio" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioFileTypes"] : "image/*";
    const handleFileUpload = createHandleFileUploadFn(services);
    const pickMedia = getAudioPickMedia({
        services,
        type,
        handleFileUpload
    });
    const result = await pickMedia({
        mimeType,
        multiple: false
    });
    switch(result.type){
        case "ready-media":
            {
                const id = nodeId || publicCommands.insertBlockWithBlankLines(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RICOS_DEFAULTS"]);
                setTimeout(()=>{
                    const componentData = publicCommands?.getBlockComponentData(id);
                    const updatedData = getAudioAttributes(type === "audio" ? {
                        type: "audio",
                        componentData,
                        uploadData: result.media[0]
                    } : {
                        type: "image",
                        componentData,
                        uploadData: result.media[0]
                    });
                    publicCommands?.setBlock(id, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"], {
                        ...updatedData,
                        tempData: void 0,
                        loading: void 0,
                        error: void 0
                    });
                });
                return;
            }
        case "file":
            {
                const file = result.file[0];
                if (file) {
                    const tags = await getAudioTags(file);
                    const targetNodeId = nodeId || publicCommands.insertBlockWithBlankLines(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"], {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RICOS_DEFAULTS"],
                        ...tags,
                        loading: true
                    });
                    const trackBi = services.uploadService?.trackUploadBi(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"], file.size, file.name);
                    try {
                        const url = URL.createObjectURL(file);
                        await Promise.resolve();
                        const componentData = publicCommands?.getBlockComponentData(targetNodeId);
                        publicCommands?.setBlock(targetNodeId, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"], {
                            ...componentData,
                            name: componentData.name || file.name.split(".")[0],
                            tempData: url,
                            loading: true,
                            error: null
                        });
                        trackBi?.start();
                        const uploadFn = result.customUploadFn || handleFileUpload;
                        if (!uploadFn) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$log$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logInvariant"])(Error("No upload function provided"));
                            throw new Error("No upload function provided");
                        }
                        const uploadedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$upload$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upload"])(uploadFn, file);
                        const updatedData = getAudioAttributes({
                            type,
                            componentData: publicCommands?.getBlockComponentData(targetNodeId),
                            uploadData: uploadedFile.data
                        });
                        publicCommands?.setBlock(targetNodeId, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"], updatedData);
                        URL.revokeObjectURL(url);
                        trackBi?.success();
                    } catch (error) {
                        const componentData = publicCommands?.getBlockComponentData(targetNodeId);
                        publicCommands?.setBlock(targetNodeId, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"], {
                            ...componentData,
                            error,
                            loading: null
                        });
                        trackBi?.error(error);
                        services.uploadService?.notifyError(error);
                    }
                } else {
                    console.error("No file selected");
                }
                return;
            }
        case "cancel":
            {
                services.modals.notifyExternalModalClosed({
                    focusReturnElement: referenceElement
                });
                return;
            }
        default:
            {
                console.error("Unhandeled media picker result:", result);
                return;
            }
    }
};
const getAudioTags = async (file)=>{
    try {
        const tags = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$bundled$2d$dependencies$2f$id3js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromFile"])(file);
        return {
            name: tags?.title,
            authorName: tags?.artist
        };
    } catch (error) {
        console.error(error);
        return {};
    }
};
const createHandleFileUploadFn = (services)=>{
    const { metaSiteId, uid, siteOwnerId } = services.wixInstance();
    if (!metaSiteId) {
        return void 0;
    }
    const audioUpload = (file, updateEntity)=>{
        const upload2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$media$2d$manager$2d$uploader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUploadFn"])(services);
        const isCoverImage = file.type.includes("image");
        const mediaType = isCoverImage ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaType"].IMAGE : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaType"].AUDIO;
        return upload2(file, mediaType).then((res)=>{
            if (isCoverImage) {
                const { file_name, original_file_name, height, width } = res;
                return updateEntity({
                    data: {
                        id: file_name,
                        height,
                        width,
                        original_file_name,
                        file_name
                    }
                });
            } else {
                const { file_output: { audio } } = res;
                updateEntity({
                    data: {
                        audio: {
                            src: {
                                id: audio[0].url
                            }
                        }
                    }
                });
            }
        }).catch((error)=>{
            const isOwner = siteOwnerId === uid;
            const mediaUploadError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$get$2d$upload$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUploadError"])(error, metaSiteId, isOwner);
            updateEntity({
                error: mediaUploadError
            });
        });
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$with$2d$file$2d$size$2d$limitation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withFileSizeLimitation"])(audioUpload, services.editorProps.fileUploadSizeLimit);
};
const createHandleFileSelectionFn = (services)=>{
    const openMediaManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2d$manager$2f$create$2d$open$2d$media$2d$manager$2d$fn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOpenMediaManagerFn"])(services.modals);
    if (!openMediaManager) {
        return void 0;
    }
    const audioUpload = (updateEntity, options, onCancel)=>{
        if (options.isCoverImage) {
            return openMediaManager({
                mediaType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2d$manager$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerMediaType"].IMAGE,
                appDefId: services.wixInstance().appDefId
            }).then((items)=>{
                const file = items[0];
                const { uri, width, height, title } = file;
                updateEntity({
                    data: {
                        id: uri,
                        file_name: uri,
                        original_file_name: title,
                        width,
                        height
                    }
                });
            }).catch(onCancel);
        }
        return openMediaManager({
            mediaType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$media$2d$manager$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaManagerMediaType"].AUDIO,
            appDefId: services.wixInstance().appDefId
        }).then((items)=>{
            const file = items[0];
            const { audio } = file.fileOutput;
            const name = file.title.split(".")[0];
            updateEntity({
                data: {
                    audio: {
                        src: {
                            id: audio[0].url
                        }
                    },
                    name
                }
            });
        }).catch(onCancel);
    };
    return audioUpload;
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/modals/audio-upload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioUpload",
    ()=>AudioUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FileUpload$2f$FileUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/FileUpload/FileUpload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/editor-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$modal$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/modal-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$events$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/plugins-events-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$upload$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/upload-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/dev-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$wix$2d$instance$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/request-service-provider/wix-instance-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$some$2d$editor$2d$props$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/some-editor-props-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/wix-rich-content-common/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$handle$2d$audio$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/handle-audio-upload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
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
const AudioUpload = ({ nodeId, closeModal, logBi })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const { getPublicCommands } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$editor$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContext"]);
    const { uploadService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$upload$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadContext"]);
    const pluginsEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$events$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsEventsContext"]);
    const wixInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$request$2d$service$2d$provider$2f$wix$2d$instance$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWixInstanceService"])();
    const editorProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$some$2d$editor$2d$props$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorProps"])();
    const { metaSiteId } = wixInstance();
    const modalService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$modal$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalServiceContext"]);
    const devService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$dev$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevService"])();
    const publicCommands = getPublicCommands();
    const handleUploadClick = async ()=>{
        pluginsEvents.publishPluginPopoverClick?.({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
            buttonName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDIA_POPOVERS_BUTTONS_NAMES_BI"].upload
        });
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UPLOAD_TAB_UPLOAD_BUTTON"]
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$handle$2d$audio$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleAudioUpload"])({
            services: {
                uploadService,
                devService,
                wixInstance,
                editorProps,
                modals: modalService
            },
            publicCommands,
            nodeId,
            type: "audio"
        });
        closeModal();
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
        label: t("AudioModal_Upload_Title"),
        maxLines: 2
    }, metaSiteId || devService().handleFileSelection || devService().handleFileUpload || editorProps.pickMedia?.pickAudio ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FileUpload$2f$FileUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUpload"], {
        onChange: ()=>{},
        accept: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioFileTypes"]
    }, ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UPLOAD_TAB_UPLOAD_BUTTON"],
            onClick: handleUploadClick,
            fullWidth: true,
            size: "small"
        }, t("AudioModal_Upload_ButtonText"))) : null);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/modals/insert-modal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InsertModal",
    ()=>InsertModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SegmentedToggle$2f$SegmentedToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/SegmentedToggle/SegmentedToggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$LinkSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/LinkSmall.js [app-client] (ecmascript) <export default as LinkSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$UploadExportSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadExportSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/UploadExportSmall.js [app-client] (ecmascript) <export default as UploadExportSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$modal$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/modal-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$events$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/plugins-events-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/bi-context-provider/bi-context-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/wix-rich-content-common/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2f$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/panel/panel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2d$header$2f$panel$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/panel-header/panel-header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$audio$2d$embed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/modals/audio-embed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$audio$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/modals/audio-upload.js [app-client] (ecmascript)");
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
const SourceOptionValue = {
    EMBED: "embed",
    UPLOAD: "upload"
};
const InsertModal = ({ nodeId, componentData, embedType, modalId })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const modalService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$modal$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalServiceContext"]) || {};
    const pluginsEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$events$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsEventsContext"]);
    const logBi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBiNext"])({
        pluginId: "audio",
        modalId,
        nodeId
    });
    const [selectedSource, setSelectedSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(embedType || componentData?.audio?.src?.url ? "embed" : "upload");
    const onSourceToggleClick = (_, value)=>{
        selectedSource !== value && pluginsEvents.publishPluginPopoverTabSwitch?.({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
            buttonName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDIA_POPOVERS_TABS_NAMES_BI"][value.toLowerCase()]
        });
        setSelectedSource(value);
        logBi({
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_AUDIO_MODAL_SOURCE_TOGGLE"],
            value
        });
    };
    const closeModal = ()=>modalService.closeModal(modalId);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2f$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
        closeButtonProps: {
            onClick: closeModal
        },
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_AUDIO_MODAL"],
        height: "fit-content"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2d$header$2f$panel$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelHeader"], {
        title: t("Audio_Modal_Header_Title")
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        direction: "vertical",
        padding: "SP3",
        gap: "SP3"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
        label: t("Audio_Modal_Toggle_Source_Label")
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SegmentedToggle$2f$SegmentedToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SegmentedToggle"], {
        defaultSelected: selectedSource,
        size: "small",
        onClick: onSourceToggleClick,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_AUDIO_MODAL_SOURCE_TOGGLE"]
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SegmentedToggle$2f$SegmentedToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SegmentedToggle"].Button, {
        value: SourceOptionValue.EMBED,
        prefixIcon: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$LinkSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkSmall$3e$__["LinkSmall"], null)
    }, t("MediaModal_Tabs_Embed")), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$SegmentedToggle$2f$SegmentedToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SegmentedToggle"].Button, {
        value: SourceOptionValue.UPLOAD,
        prefixIcon: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$UploadExportSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadExportSmall$3e$__["UploadExportSmall"], null)
    }, t("MediaModal_Tabs_Upload")))), selectedSource === "embed" && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$audio$2d$embed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioEmbed"], {
        componentData,
        closeModal,
        logBi
    }), selectedSource === "upload" && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$audio$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioUpload"], {
        nodeId,
        closeModal,
        logBi
    })));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/types.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "audioButtonsTypes",
    ()=>audioButtonsTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
;
const audioButtonsTypes = {
    audio: "audio",
    soundCloud: "soundCloud",
    spotify: "spotify"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/get-add-buttons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAddButtons",
    ()=>getAddButtons,
    "toolbarsToAddIn",
    ()=>toolbarsToAddIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sound$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Sound.js [app-client] (ecmascript) <export default as Sound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SoundCloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SoundCloud$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/SoundCloud.js [app-client] (ecmascript) <export default as SoundCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Spotify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spotify$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Spotify.js [app-client] (ecmascript) <export default as Spotify>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/editor-common/consts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-types/toolbar-enums.js [app-client] (ecmascript) <export ToolbarType as TOOLBARS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$insert$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/modals/insert-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/types.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
const toolbarsToAddIn = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__["TOOLBARS"].FOOTER,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__["TOOLBARS"].SIDE,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$toolbar$2d$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolbarType__as__TOOLBARS$3e$__["TOOLBARS"].MOBILE
];
const getAddButtons = (config, services)=>{
    const { exposeButtons = [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["audioButtonsTypes"].audio
    ], disableDownload = true } = config || {};
    const { modals, context: { isMobile } } = services;
    const toggleInsertModal = ({ referenceElement, id, embedType })=>{
        modals?.togglePluginPanel({
            id,
            Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$insert$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertModal"],
            componentProps: {
                componentData: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RICOS_DEFAULTS"],
                    disableDownload
                },
                modalId: id,
                embedType
            },
            isMobile,
            positioning: {
                referenceElement,
                placement: "bottom"
            },
            mobileLayout: "drawer"
        });
    };
    const buttonsMap = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["audioButtonsTypes"].audio]: {
            id: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO}.audio`,
            label: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["INSERT_PLUGIN_BUTTONS"].AUDIO,
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_AUDIO_BUTTON"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sound$3e$__["Sound"],
            tooltip: "AudioPlugin_InsertButton_Tooltip",
            toolbars: toolbarsToAddIn,
            command: ({ referenceElement })=>{
                toggleInsertModal({
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_INSERT_AUDIO_MODAL_ID"],
                    embedType: false,
                    referenceElement
                });
                return true;
            },
            menuConfig: {
                tags: "Audio_plugin_search_tags"
            }
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["audioButtonsTypes"].soundCloud]: {
            id: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO}.soundCloud`,
            label: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["INSERT_PLUGIN_BUTTONS"].SOUND_CLOUD,
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_SOUNDCLOUD_BUTTON"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SoundCloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SoundCloud$3e$__["SoundCloud"],
            tooltip: "SoundCloudPlugin_InsertButton_Tooltip",
            toolbars: toolbarsToAddIn,
            command: ({ referenceElement })=>{
                toggleInsertModal({
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_INSERT_SOUNDCLOUD_MODAL_ID"],
                    embedType: true,
                    referenceElement
                });
                return true;
            },
            menuConfig: {
                tags: "SoundCloud_plugin_search_tags",
                group: "embed"
            }
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["audioButtonsTypes"].spotify]: {
            id: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO}.spotify`,
            label: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["INSERT_PLUGIN_BUTTONS"].SPOTIFY,
            dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_SPOTIFY_BUTTON"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Spotify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spotify$3e$__["Spotify"],
            tooltip: "Spotify_InsertButton_Tooltip",
            toolbars: toolbarsToAddIn,
            command: ({ referenceElement })=>{
                toggleInsertModal({
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_INSERT_SPOTIFY_MODAL_ID"],
                    embedType: true,
                    referenceElement
                });
                return true;
            },
            menuConfig: {
                tags: "AudioPlugin_InsertButton",
                group: "embed"
            }
        }
    };
    return exposeButtons.map((buttonType)=>buttonsMap[buttonType]).filter((x)=>!!x);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/settings-modal-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>settings_modal_default,
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = "5c9db80d";
const injectCss = ()=>{
    var css = `.icBwJ{background-color:unset;--wsr-color-D10-66:rgba(0,0,0,.5)}`;
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
var settings_modal_default = {
    "imageViewer": "icBwJ"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/modals/settings-modal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioSettingsModal",
    ()=>AudioSettingsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/Divider/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/FormField/FormField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ImageViewer$2f$ImageViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/ImageViewer/ImageViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+design-system@1.315.0__9378fc8999335755aeb26db4d40a88a4/node_modules/@wix/design-system/dist/esm/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$modal$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/modal-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$events$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/plugins-events-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$z$2d$index$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/z-index-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/bi-context-provider/bi-context-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$log$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/log-invariant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$lib$2f$image$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/wix-rich-content-common/lib/image-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2f$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/panel/panel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2d$header$2f$panel$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/panel-header/panel-header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$toggle$2d$button$2f$toggle$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/toggle-button/toggle-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$ui$2d$components$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/ui-components-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$node$2d$attrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/use-node-attrs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$settings$2d$modal$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/settings-modal-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
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
const AudioSettingsModal = ({ nodeId, onFileSelect })=>{
    const { t, environment } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const modalService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$modal$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalServiceContext"]) || {};
    const pluginsEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$events$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsEventsContext"]);
    const zIndexService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$z$2d$index$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZIndexContext"]);
    const containerEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$ui$2d$components$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanelContainerElement"])();
    const { patchPmNodeAttrs, pmNodeAttrs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$use$2d$node$2d$attrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodeAttrs"])(nodeId, "AUDIO");
    const logBi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$bi$2d$context$2d$provider$2f$bi$2d$context$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBiNext"])({
        pluginId: "audio",
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_SETTINGS_MODAL_ID"],
        nodeId
    });
    if (!pmNodeAttrs) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$log$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logInvariant"])(new Error("Audio settings: node attrs not found"));
        return null;
    }
    const closeModal = ()=>{
        modalService.closeModal(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_SETTINGS_MODAL_ID"]);
    };
    const imgSrc = pmNodeAttrs.coverImage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$rich$2d$content$2d$common$2f$lib$2f$image$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])({
        file_name: pmNodeAttrs.coverImage.src?.id || pmNodeAttrs.coverImage?.src.id
    }, void 0, {
        requiredWidth: 120,
        requiredHeight: 120,
        requiredQuality: 70
    });
    const onInputBlur = (actionName, value)=>{
        pluginsEvents.publishPluginChangeSettings?.({
            nodeId,
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
            actionName,
            value
        });
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2f$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
        closeButtonProps: {
            onClick: closeModal
        },
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SETTINGS_MODAL"]
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$panel$2d$header$2f$panel$2d$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelHeader"], {
        title: t("AudioPlugin_Settings_Header")
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        direction: "vertical",
        padding: "SP3",
        gap: "SP2",
        overflow: "auto"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
        label: t("AudioPlugin_Settings_AudioName_Label")
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
        placeholder: t("AudioPlugin_Settings_AudioName_Label_Placeholder"),
        value: pmNodeAttrs.name ?? void 0,
        onBlur: (e)=>{
            onInputBlur(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_ACTION_NAMES"].changeTitle, e.target.value);
        },
        onChange: (e)=>{
            patchPmNodeAttrs({
                name: e.target.value
            });
            logBi({
                dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SETTINGS_AUDIO_NAME_INPUT"],
                value: e.target.value
            });
            pluginsEvents.publishMediaPluginsDetails?.({
                pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
                nodeId,
                creator: pmNodeAttrs.authorName ?? void 0,
                title: e.target.value,
                track_duration: pmNodeAttrs.audio?.duration?.toString(),
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPES"].custom,
                url: pmNodeAttrs.audio?.src?.id ?? ""
            });
        },
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SETTINGS_AUDIO_NAME_INPUT"],
        size: "small"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
        label: t("AudioPlugin_Settings_AuthorName_Label")
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
        placeholder: t("AudioPlugin_Settings_AuthorName_Label_Placeholder"),
        value: pmNodeAttrs.authorName ?? void 0,
        onBlur: (e)=>{
            onInputBlur(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_ACTION_NAMES"].changeCreator, e.target.value);
        },
        onChange: (e)=>{
            patchPmNodeAttrs({
                authorName: e.target.value
            });
            logBi({
                dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SETTINGS_AUTHOR_NAME_INPUT"],
                value: e.target.value
            });
            pluginsEvents.publishMediaPluginsDetails?.({
                pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
                nodeId,
                creator: e.target.value,
                title: pmNodeAttrs.name ?? void 0,
                track_duration: pmNodeAttrs.audio?.duration?.toString(),
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPES"].custom,
                url: pmNodeAttrs.audio?.src?.id ?? ""
            });
        },
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SETTINGS_AUTHOR_NAME_INPUT"],
        size: "small"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$FormField$2f$FormField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
        label: t("AudioPlugin_Settings_CoverImage_Label")
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$ImageViewer$2f$ImageViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageViewer"], {
        className: environment === "liveSite" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$settings$2d$modal$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].imageViewer : void 0,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SETTINGS_AUDIO_COVER_IMAGE"],
        imageUrl: imgSrc,
        width: 120,
        height: 120,
        removeRoundedBorders: environment === "liveSite",
        onAddImage: ()=>{
            pluginsEvents.publishPluginChangeSettings?.({
                pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
                nodeId,
                actionName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_ACTION_NAMES"].changeCover,
                value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_BI_VALUES"].YES
            });
            onFileSelect();
        },
        onUpdateImage: ()=>{
            pluginsEvents.publishPluginChangeSettings?.({
                pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
                nodeId,
                actionName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_ACTION_NAMES"].changeCover,
                value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_BI_VALUES"].YES
            });
            onFileSelect(0);
        },
        onRemoveImage: ()=>{
            patchPmNodeAttrs({
                coverImage: null
            });
            logBi({
                dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SETTINGS_AUDIO_COVER_IMAGE"]
            });
            pluginsEvents.publishMediaPluginsDetails?.({
                pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
                nodeId,
                creator: pmNodeAttrs.authorName ?? void 0,
                title: pmNodeAttrs.name ?? void 0,
                track_duration: pmNodeAttrs.audio?.duration?.toString(),
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPES"].custom,
                url: pmNodeAttrs.audio?.src?.id ?? ""
            });
            pluginsEvents.publishPluginChangeSettings?.({
                nodeId,
                pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
                actionName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_ACTION_NAMES"].changeCover,
                value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_BI_VALUES"].NO
            });
        },
        tooltipProps: {
            appendTo: containerEl,
            zIndex: zIndexService.getZIndex("TOOLTIP")
        },
        addImageInfo: t("AudioPlugin_Settings_CoverImage_AddImage"),
        removeImageInfo: t("AudioPlugin_Settings_CoverImage_RemoveImage"),
        updateImageInfo: t("AudioPlugin_Settings_CoverImage_UpdateImage")
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$design$2d$system$40$1$2e$315$2e$0_$5f$9378fc8999335755aeb26db4d40a88a4$2f$node_modules$2f40$wix$2f$design$2d$system$2f$dist$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$toggle$2d$button$2f$toggle$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
        checked: !pmNodeAttrs.disableDownload,
        title: t("AudioPlugin_Settings_AudioCanBeDownloaded_Label"),
        size: "small",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SETTINGS_DOWNLOAD_TOGGLE"],
        onChange: ()=>{
            const disableDownload = !pmNodeAttrs.disableDownload;
            patchPmNodeAttrs({
                disableDownload
            });
            logBi({
                dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SETTINGS_DOWNLOAD_TOGGLE"],
                value: !!pmNodeAttrs.disableDownload
            });
            pluginsEvents.publishPluginChangeSettings?.({
                pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
                nodeId,
                actionName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_ACTION_NAMES"].downloadAudio,
                value: disableDownload ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_BI_VALUES"].YES : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_BI_VALUES"].NO
            });
            pluginsEvents.publishMediaPluginsDetails?.({
                pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
                nodeId,
                creator: pmNodeAttrs.authorName ?? void 0,
                title: pmNodeAttrs.name ?? void 0,
                track_duration: pmNodeAttrs.audio?.duration?.toString(),
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPES"].custom,
                url: pmNodeAttrs.audio?.src?.id ?? ""
            });
        },
        infoContent: t("AudioPlugin_Settings_AudioCanBeDownloaded_Tooltip"),
        tooltipAppendTo: containerEl
    })));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/get-toolbar-buttons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getToolbarButtons",
    ()=>getToolbarButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$is$2d$custom$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/is-custom-upload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$animation$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-animation-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$delete$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-delete-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$node$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-node-alignment-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$replace$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-replace-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$settings$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/create-settings-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$node$2d$size$2d$button$2f$create$2d$node$2d$size$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/node-size-button/create-node-size-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$create$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/plugin-toolbar/separator/create-separator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/resolvers/get-node-in-selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$handle$2d$audio$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/handle-audio-upload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$ricos$2d$toolbars$2f$plugin$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/toolbars-v3/ricos-toolbars/plugin/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$insert$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/modals/insert-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$settings$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/modals/settings-modal.js [app-client] (ecmascript)");
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
const isCustomAudioResolver = (content)=>{
    if (Array.isArray(content) && content.length > 0) {
        return !!content[content.length - 1].attrs?.audio?.src?.id || !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$is$2d$custom$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCustomUpload"])(content[content.length - 1].attrs?.audio?.src?.url);
    }
    return false;
};
const getToolbarButtons = (config, services)=>{
    const { modals } = services;
    const settingsButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$settings$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSettingsButton"])({
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_SETTINGS_MODAL_ID"],
        attributes: {
            visible: isCustomAudioResolver
        },
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLUGIN_TOOLBAR_AUDIO_SETTINGS_BUTTON"],
        showLabel: true,
        command: ({ referenceElement, attributes: { selectedNode }, publicCommands })=>{
            const { uploadService, updateService } = services;
            modals?.togglePluginPanel({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_SETTINGS_MODAL_ID"],
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$settings$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioSettingsModal"],
                componentProps: {
                    nodeId: selectedNode.attrs.id,
                    onFileSelect: ()=>{
                        if (uploadService && updateService) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$handle$2d$audio$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleAudioUpload"])({
                                services,
                                publicCommands,
                                nodeId: selectedNode.attrs.id,
                                type: "image",
                                referenceElement
                            });
                        }
                    }
                },
                isMobile: services.context.isMobile,
                positioning: {
                    referenceElement: referenceElement?.closest(`[data-hook~=${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$toolbars$2d$v3$2f$ricos$2d$toolbars$2f$plugin$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOATING_PLUGIN_TOOLBAR"]}]`) ?? referenceElement,
                    placement: "right-start"
                },
                focusReturnElement: referenceElement
            });
        }
    });
    const separator1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$create$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeparator"])({
        visible: isCustomAudioResolver,
        selectedNode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$resolvers$2f$get$2d$node$2d$in$2d$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeInSelection"]
    });
    const sizeButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$node$2d$size$2d$button$2f$create$2d$node$2d$size$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNodeSizeButton"])({
        services,
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_BUTTONS"].size,
        options: [
            "SMALL",
            "CONTENT"
        ]
    });
    const alignmentButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$node$2d$alignment$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNodeAlignmentButton"])({
        services,
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_BUTTONS"].alignment
    });
    const replaceButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$replace$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createReplaceButton"])({
        modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_REPLACE_MODAL_ID"],
        command: ({ referenceElement, attributes: { selectedNode } })=>{
            const { audio: { src }, id } = selectedNode.attrs;
            modals?.togglePluginPanel({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_REPLACE_MODAL_ID"],
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$insert$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertModal"],
                componentProps: {
                    componentData: selectedNode.attrs,
                    nodeId: id,
                    embedType: src.url,
                    modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_REPLACE_MODAL_ID"]
                },
                isMobile: services.context.isMobile,
                positioning: {
                    referenceElement,
                    placement: "bottom"
                },
                mobileLayout: "drawer"
            });
        }
    });
    const separator2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$separator$2f$create$2d$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeparator"])();
    const animation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$animation$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnimationButton"])(services);
    const deleteButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$plugin$2d$toolbar$2f$create$2d$delete$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDeleteButton"])();
    if (services.context.environment === "wixel") {
        return [
            settingsButton,
            replaceButton,
            sizeButton,
            alignmentButton,
            animation,
            deleteButton
        ];
    }
    return [
        settingsButton,
        separator1,
        sizeButton,
        alignmentButton,
        replaceButton,
        animation,
        separator2,
        deleteButton
    ];
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/converters/from-pm-audio-any-state.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromPmAudioAnyState",
    ()=>fromPmAudioAnyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/next-schema/generated/ricos_document.js [app-client] (ecmascript)");
;
const fromPmAudioAnyState = (pmAudioNode)=>{
    const { id, ...audioData } = pmAudioNode?.attrs || {};
    const audio = audioData.audio ? audioData.audio : audioData.tempData ? fallbackAudio : fallbackAudio;
    return {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO,
        id,
        audioData: {
            ...audio ? {
                audio
            } : {},
            ...audioData.containerData ? {
                containerData: audioData.containerData
            } : {},
            ...audioData.disableDownload ? {
                disableDownload: audioData.disableDownload
            } : {},
            ...audioData.coverImage ? {
                coverImage: audioData.coverImage
            } : {},
            ...audioData.name ? {
                name: audioData.name
            } : {},
            ...audioData.authorName ? {
                authorName: audioData.authorName
            } : {},
            ...audioData.html ? {
                html: audioData.html
            } : {}
        }
    };
};
const fallbackAudio = {
    src: {
        id: "16f8d7_2ddc0cacfe7741b686d158405ad90527.mp3"
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/audio-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>audio_default
]);
var audio_default = {
    "fontElementMap": "pcW-8",
    "container": "ry9GP",
    "coverImageContainer": "pHGNm",
    "customPlayer": "oO6BC",
    "slim": "wmrNl",
    "playPauseButton": "tdmoP",
    "coverImage": "Ux8Vj",
    "trackDetailsContainer": "m2Fzl",
    "controlsContainer": "j1Eaa",
    "controlsGroup": "R8tmr",
    "sliderContainer": "QWudD",
    "audioDuration": "KGSVu",
    "isLoading": "fgK0N",
    "audioDetails": "UD0mS",
    "authorName": "_3WPUn",
    "title": "rF5HN",
    "dropdownMenuWrapper": "aF0j6",
    "dropdownSelectedButton": "PDwkC",
    "dropdownContent": "EG3kV",
    "dropdownContentWithIcon": "_0XpLA",
    "audioLoader": "hG8zE"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/viewer/audio-embed-viewer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>audio_embed_viewer_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$events$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/plugins-events-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/next-schema/generated/ricos_document.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$html$2f$viewer$2f$html$2d$viewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-html/viewer/html-viewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/consts.js [app-client] (ecmascript)");
;
;
;
;
;
;
const AudioEmbedViewer = ({ node, settings })=>{
    const pluginsEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$plugins$2d$events$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginsEventsContext"]) || {};
    const nodeId = node.id;
    const html = node.audioData?.html;
    const url = node.audioData?.audio?.src?.url ?? "";
    const htmlCompProps = {
        htmlData: {
            html,
            source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$next$2d$schema$2f$generated$2f$ricos_document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLData_Source"].HTML,
            containerData: {
                width: {
                    custom: "100%"
                },
                height: {
                    custom: "100%"
                },
                url
            }
        },
        settings
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioEmbedViewer.useEffect": ()=>{
            nodeId && pluginsEvents?.publishMediaPluginsDetails?.({
                pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
                nodeId,
                creator: void 0,
                title: void 0,
                track_duration: void 0,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPES"].spotify,
                url
            });
        }
    }["AudioEmbedViewer.useEffect"], []);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$html$2f$viewer$2f$html$2d$viewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HtmlViewer"], {
        ...htmlCompProps
    });
};
var audio_embed_viewer_default = AudioEmbedViewer;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/icon-button-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>icon_button_default
]);
var icon_button_default = {
    "audioIconButton": "f7y1x"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/icon-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconButton",
    ()=>IconButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$icon$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/icon-button-scss.js [app-client] (ecmascript)");
;
;
const IconButton = ({ children, isLoading, icon, ...props })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$icon$2d$button$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].audioIconButton,
        type: "button",
        disabled: isLoading,
        ...props
    }, icon), children);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/audio-action-icons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioActionIcons",
    ()=>AudioActionIcons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PauseFilledSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseFilledSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/PauseFilledSmall.js [app-client] (ecmascript) <export default as PauseFilledSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PlayFilledSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayFilledSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/PlayFilledSmall.js [app-client] (ecmascript) <export default as PlayFilledSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Components$2f$double$2d$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/Components/double-loader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/audio-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const AudioActionIcons = ({ isPlaying, handlePause, handlePlay, disabled, isLoading, helpers })=>{
    const { tabIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const onClick = ()=>{
        const ACTION_BI_VALUE = isPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_BI_VALUES"].PAUSE : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_BI_VALUES"].PLAY;
        helpers?.onViewerAction?.(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_ACTION_NAMES"].playAudio, ACTION_BI_VALUE);
        isPlaying ? handlePause() : handlePlay();
    };
    const onKeyDown = (e)=>{
        if (e.key === "Enter") {
            onClick();
        }
    };
    const ComponentIcon = disabled || !isPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PlayFilledSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayFilledSmall$3e$__["PlayFilledSmall"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$PauseFilledSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseFilledSmall$3e$__["PauseFilledSmall"];
    const ariaLabel = isPlaying ? "pause" : "play";
    return isLoading ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].audioLoader
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Components$2f$double$2d$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleLoader"], null)) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        type: "button",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].playPauseButton,
        onClick,
        onKeyDown,
        "aria-label": ariaLabel,
        tabIndex
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ComponentIcon, null));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/audio-details.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioDetails",
    ()=>AudioDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/audio-scss.js [app-client] (ecmascript)");
;
;
;
const AudioDetails = ({ authorName, title })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].audioDetails
    }, title && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].title,
        "data-hook": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TITLE"],
        title
    }, title), authorName && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].authorName,
        "data-hook": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CREATOR"],
        title: authorName
    }, authorName));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/audio-duration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioDuration",
    ()=>AudioDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/audio-scss.js [app-client] (ecmascript)");
;
;
;
const Duration = ({ seconds })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("time", {
        dateTime: `P${Math.round(seconds)}S`
    }, format(seconds));
};
function format(seconds) {
    const date = new Date(seconds * 1e3);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = pad(date.getUTCSeconds());
    if (hh) {
        return `${hh}:${pad(mm)}:${ss}`;
    }
    return `${mm}:${ss}`;
}
function pad(string) {
    return ("0" + string).slice(-2);
}
const AudioDuration = ({ played, duration, isLoading })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].audioDuration, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isLoading]: isLoading
        })
    }, isLoading ? "--:--" : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Duration, {
        seconds: played > 0 ? played * duration : duration
    }));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/dropdown-menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$focus$2d$manager$2f$focus$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/_shared/focus-manager/focus-manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/audio-scss.js [app-client] (ecmascript)");
;
;
;
;
const optionElement = (option)=>{
    const selected = option?.selected;
    const content = option.icon ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dropdownContentWithIcon
    }, option.icon(), option.text) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dropdownContent
    }, option.text);
    const onKeyDown = (e)=>{
        if (e.key === "Enter") {
            option.onClick();
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        key: option.text,
        className: selected ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dropdownSelectedButton : "",
        onKeyDown,
        onClick: option.onClick,
        "data-hook": option?.dataHook,
        type: "button"
    }, content);
};
const DropdownMenu = ({ options, onClose, dataHook })=>{
    const { jsdomMode } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const onKeyDown = (e)=>{
        if (e.key === "Escape") {
            onClose();
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$focus$2d$manager$2f$focus$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusManager"], {
        onKeyDown,
        jsdomMode
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dropdownMenuWrapper,
        role: "menu",
        "data-hook": dataHook
    }, options.map((option)=>optionElement(option))));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/context-menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextMenu",
    ()=>ContextMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$ClickOutside$2f$click$2d$outside$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/ClickOutside/click-outside.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$dropdown$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/dropdown-menu.js [app-client] (ecmascript)");
;
;
;
;
const ContextMenu = ({ onClickOutside, contextMenuData, playBackMenuData, showContextMenu, showPlaybackMenu })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$ClickOutside$2f$click$2d$outside$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClickOutside"], {
        onClickOutside
    }, showContextMenu && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$dropdown$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CONTEXT_COMMON_MENU"],
        options: contextMenuData,
        onClose: onClickOutside
    }), showPlaybackMenu && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$dropdown$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_PLAYBACK_SPEED_MENU"],
        options: playBackMenuData,
        onClose: onClickOutside
    }));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/sound-control-scss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>sound_control_default
]);
var sound_control_default = {
    "root": "_3AVni",
    "sliderContainer": "T6wws"
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/data-hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUDIO_VOLUME_SLIDER",
    ()=>AUDIO_VOLUME_SLIDER
]);
const AUDIO_VOLUME_SLIDER = "audio-volume-slider";
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/sound-control.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SoundControl",
    ()=>SoundControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SoundOffSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SoundOffSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/SoundOffSmall.js [app-client] (ecmascript) <export default as SoundOffSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SoundSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SoundSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/SoundSmall.js [app-client] (ecmascript) <export default as SoundSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Components$2f$slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/Components/slider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$sound$2d$control$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/sound-control-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$icon$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/icon-button.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const SoundControl = ({ volume, muted, handleMute, handleVolumeChange, disabled })=>{
    const { t, tabIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const onKeyDown = (e)=>{
        if (e.key === "Enter") {
            handleMute();
            return;
        }
    };
    const SoundIconComponent = muted ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SoundOffSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SoundOffSmall$3e$__["SoundOffSmall"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SoundSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SoundSmall$3e$__["SoundSmall"];
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$sound$2d$control$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root)
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$icon$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
        onKeyDown,
        "aria-label": muted ? t("Audio_Plugin_Volume_Control_Unmute_AriaLabel") : t("Audio_Plugin_Volume_Control_Mute_AriaLabel"),
        tabIndex,
        isLoading: disabled,
        icon: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SoundIconComponent, {
            onClick: handleMute
        })
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$sound$2d$control$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sliderContainer)
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Components$2f$slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
        min: 0,
        max: 1,
        step: "0.1",
        value: volume,
        onChange: handleVolumeChange,
        onChangeCommitted: handleVolumeChange,
        languageDir: "ltr",
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_VOLUME_SLIDER"],
        trackSize: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDER_TRACK_SIZE"].small,
        tabIndex,
        ariaLabel: t("Audio_Plugin_Volume_Control_Slider_AriaLabel"),
        className: "has-custom-focus"
    })));
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/viewer/react-player-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactPlayerWrapper",
    ()=>ReactPlayerWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$MoreSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/MoreSmall.js [app-client] (ecmascript) <export default as MoreSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-context/ricos-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$react$2d$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/wix-react-player/react-player.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Components$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/Components/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Components$2f$slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/Components/slider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Icons$2f$download$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/Icons/download-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Icons$2f$playback$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ui-components/Icons/playback-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$icon$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/icon-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$audio$2d$action$2d$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/audio-action-icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$audio$2d$details$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/audio-details.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$audio$2d$duration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/audio-duration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$context$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/context-menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$sound$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/components/sound-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/audio-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
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
const ReactPlayerWrapper = ({ url, authorName, name, disableDownload, coverImage, helpers, disabled, isLoading, saveDurationToData, initialDuration })=>{
    const { tabIndex, t, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$context$2f$ricos$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosContext"]);
    const [URL, setURL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(url);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDuration || 0);
    const [seeking, setSeeking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [played, setPlayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [lastVolume, setLastVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [playbackRate, setPlaybackRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [showPlaybackMenu, setShowPlaybackMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showContextMenu, setShowContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStoppedBySeek, setIsStoppedBySeek] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const slimDesign = !authorName && !name;
    const reactPlayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onDownload = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadFile"])(URL, name || "untitled");
    const playBackMenuData = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playbackRates"].map(({ text, rate })=>({
            text,
            onClick: ()=>{
                setPlaybackRate(rate);
                setShowPlaybackMenu(false);
            },
            selected: playbackRate === rate
        }));
    const contextMenuOptions = {
        download: {
            text: "Download",
            onClick: ()=>{
                helpers?.onViewerAction?.(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_ACTION_NAMES"].fileDownloaded, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_BI_VALUES"].click);
                onDownload();
                setShowContextMenu(false);
            },
            dataHook: "audio-download-icon",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Icons$2f$download$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DownloadIcon"]
        },
        playback: {
            text: "Playback Speed",
            onClick: ()=>{
                setShowContextMenu(false);
                setShowPlaybackMenu(true);
            },
            dataHook: "audio-playback-icon",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Icons$2f$playback$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaybackIcon"]
        }
    };
    const contextMenuData = disableDownload ? [
        contextMenuOptions.playback
    ] : [
        contextMenuOptions.download,
        contextMenuOptions.playback
    ];
    const handleProgress = (state)=>{
        if (!seeking) {
            setPlayed(state.played);
        }
    };
    const onEnded = ()=>helpers?.onViewerAction?.(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_ACTION_NAMES"].playAudio, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_BI_VALUES"].PLAYBACK_COMPLETED);
    const handleDuration = (num)=>{
        setDuration(num);
        saveDurationToData(num);
        helpers?.mediaPluginsDetails?.({
            pluginId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
            creator: authorName,
            title: name,
            track_duration: num?.toString(),
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPES"].custom,
            url
        });
    };
    const handleSeekChange = (num)=>{
        isPlaying && setIsStoppedBySeek(true);
        handlePause();
        setSeeking(true);
        setPlayed(num);
    };
    const handlePlay = ()=>setIsPlaying(true);
    const handlePause = ()=>setIsPlaying(false);
    const handleContextMenuClick = ()=>{
        showContextMenu || showPlaybackMenu ? onClickOutside() : setShowContextMenu(true);
    };
    const handleSeekMouseUp = (num)=>{
        reactPlayerRef?.current?.seekTo(num);
        setSeeking(false);
        isStoppedBySeek && handlePlay();
        setIsStoppedBySeek(false);
    };
    const handleMute = ()=>{
        if (volume !== 0) {
            setLastVolume(volume);
            setVolume(0);
        } else {
            setVolume(lastVolume);
        }
    };
    const onClickOutside = ()=>{
        setShowContextMenu(false);
        setShowPlaybackMenu(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReactPlayerWrapper.useEffect": ()=>{
            handlePause();
            setURL(url);
        }
    }["ReactPlayerWrapper.useEffect"], [
        url
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReactPlayerWrapper.useEffect": ()=>{
            reactPlayerRef.current?.seekTo(0);
        }
    }["ReactPlayerWrapper.useEffect"], []);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].customPlayer, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].slim]: slimDesign
        })
    }, coverImage?.src && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Components$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        containerProps: {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].coverImageContainer
        },
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].coverImage,
        uri: coverImage.src,
        width: 350,
        height: 350,
        displayMode: "fill",
        alt: t("Audio_Plugin_Cover_Alt")
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].trackDetailsContainer
    }, !slimDesign && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$audio$2d$details$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioDetails"], {
        authorName,
        title: name
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].controlsContainer
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].controlsGroup, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sliderContainer)
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$audio$2d$action$2d$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioActionIcons"], {
        handlePlay,
        handlePause,
        isPlaying,
        disabled,
        isLoading,
        helpers
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$Components$2f$slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
        languageDir: "ltr",
        value: played,
        dataHook: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_SLIDER"],
        onChange: handleSeekChange,
        onChangeCommitted: handleSeekMouseUp,
        step: "any",
        min: 0,
        max: 1,
        thumbVisibility: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDER_THUMB_VISIBILITY"].hover,
        trackSize: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ui$2d$components$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDER_TRACK_SIZE"].small,
        tabIndex,
        disabled: isLoading,
        ariaLabel: t("Audio_Plugin_Elapsed_Time_Slider_AriaLabel"),
        ariaProps: {
            "aria-valuenow": played,
            "aria-valuetext": `${formatTime(played * duration)} of ${formatTime(duration)}`
        }
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$audio$2d$duration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioDuration"], {
        isLoading,
        played,
        duration
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].controlsGroup
    }, !isMobile && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$sound$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SoundControl"], {
        volume,
        handleMute,
        muted: volume === 0,
        handleVolumeChange: setVolume,
        disabled: isLoading
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$icon$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
        tabIndex,
        isLoading,
        onClick: handleContextMenuClick,
        "aria-label": t("Audio_Plugin_More_Actions_Button_AriaLabel"),
        "data-hook": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CONTEXT_MENU"],
        "aria-haspopup": "true",
        icon: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$MoreSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreSmall$3e$__["MoreSmall"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].audio_contextMenuIcon
        })
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$components$2f$context$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenu"], {
        "data-hook": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CONTEXT_MENU"],
        onClickOutside,
        contextMenuData,
        playBackMenuData,
        showContextMenu,
        showPlaybackMenu
    })))))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$react$2d$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactPlayer"], {
        previewAriaLabel: "Play audio",
        url: URL,
        ref: reactPlayerRef,
        playing: disabled ? false : isPlaying,
        playbackRate,
        onPause: handlePause,
        onPlay: handlePlay,
        width: 0,
        height: 0,
        controls: false,
        volume,
        onProgress: handleProgress,
        onDuration: handleDuration,
        "data-loaded": !isLoading,
        onEnded,
        config: {
            file: {
                forceAudio: true
            }
        }
    }));
};
const formatTime = (totalSeconds)=>{
    if (isNaN(totalSeconds) || totalSeconds < 0) {
        return "0:00";
    }
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const secondsStr = seconds.toString().padStart(2, "0");
    const minutesStr = minutes.toString().padStart(2, "0");
    if (hours > 0) {
        return `${hours}:${minutesStr}:${secondsStr}`;
    } else {
        return `${minutes}:${secondsStr}`;
    }
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/viewer/audio-viewer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>audio_viewer_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/statics/styles/audio-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$viewer$2f$audio$2d$embed$2d$viewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/viewer/audio-embed-viewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$viewer$2f$react$2d$player$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/viewer/react-player-wrapper.js [app-client] (ecmascript)");
;
;
;
;
;
;
const AudioViewer = ({ node, settings, disabled, isLoading, updateAttributes })=>{
    const { audio, authorName, name, coverImage, disableDownload, html } = node.audioData || {};
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAudioSrc"])(audio?.src, settings);
    const shouldEmbed = !!html;
    const saveDurationToData = (duration)=>updateAttributes?.({
            audio: {
                ...audio,
                duration
            }
        });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$statics$2f$styles$2f$audio$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].container,
        "data-hook": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOT"]
    }, !shouldEmbed ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$viewer$2f$react$2d$player$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactPlayerWrapper"], {
        url,
        name,
        authorName,
        coverImage: {
            src: coverImage?.src.id
        },
        disableDownload,
        helpers: {},
        disabled,
        isLoading,
        saveDurationToData,
        initialDuration: audio?.duration
    }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$viewer$2f$audio$2d$embed$2d$viewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        node,
        settings
    }));
};
var audio_viewer_default = AudioViewer;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/tiptap/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Audio",
    ()=>Audio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$converters$2f$from$2d$pm$2d$audio$2d$any$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/converters/from-pm-audio-any-state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$viewer$2f$audio$2d$viewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/viewer/audio-viewer.js [app-client] (ecmascript)");
;
;
;
const Audio = ({ settings, node, updateAttributes })=>{
    const { loading } = node.attrs;
    const ricosNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$converters$2f$from$2d$pm$2d$audio$2d$any$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromPmAudioAnyState"])(node);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$viewer$2f$audio$2d$viewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        node: ricosNode,
        updateAttributes,
        settings,
        isLoading: loading
    });
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/tiptap/tiptap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tiptapExtensions",
    ()=>tiptapExtensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$statics$2f$styles$2f$general$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/editor-common/statics/styles/general-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$extensions$2f$create$2d$ricos$2d$extension$2f$create$2d$ricos$2d$node$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap-extensions/create-ricos-extension/create-ricos-node-extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/data-hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$tiptap$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/tiptap/component.js [app-client] (ecmascript)");
;
;
;
;
;
;
const name = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIPTAP_AUDIO_TYPE"];
const tiptapExtensions = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2d$extensions$2f$create$2d$ricos$2d$extension$2f$create$2d$ricos$2d$node$2d$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRicosNodeExtension"])({
        groups: [
            "overlay",
            "draggable",
            "not-overtypable",
            {
                group: "resizable",
                options: {
                    minWidth: 90
                }
            }
        ],
        type: "react-node",
        name,
        reconfigure: (config, _extensions, _props, settings)=>({
                ...config,
                addOptions: ()=>settings
            }),
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$tiptap$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Audio"],
        renderingOptions: {
            onDragStart ({ editor, dragHandle, target, event }) {
                if (!this.dom || !dragHandle || this.contentDOM?.contains(target)) {
                    return;
                }
                const audioRoot = this.dom.querySelector(`[data-hook="${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$data$2d$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOT"]}"]`) ?? this.dom;
                const nativeEvent = "nativeEvent" in event ? event.nativeEvent : event;
                const rootBox = audioRoot.getBoundingClientRect();
                const clientX = nativeEvent.clientX;
                const clientY = nativeEvent.clientY;
                const x = Math.min(Math.max(clientX - rootBox.left, 0), rootBox.width - 1);
                const y = Math.min(Math.max(clientY - rootBox.top, 0), rootBox.height - 1);
                audioRoot.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$statics$2f$styles$2f$general$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dragImageView);
                audioRoot.style.overflow = "hidden";
                audioRoot.style.isolation = "isolate";
                event.dataTransfer?.setDragImage(audioRoot, x, y);
                setTimeout(()=>{
                    audioRoot.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$editor$2d$common$2f$statics$2f$styles$2f$general$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dragImageView);
                    audioRoot.style.overflow = "";
                    audioRoot.style.isolation = "";
                }, 0);
                const selection = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$state$40$1$2e$4$2e$4$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSelection"].create(editor.view.state.doc, this.getPos());
                const transaction = editor.view.state.tr.setSelection(selection);
                editor.view.dispatch(transaction);
            }
        },
        createExtensionConfig () {
            return {
                name: this.name,
                group: "block smartBlockCellContent layoutCellContent collapsibleListItemBodyContent tableCellContent",
                selectable: true,
                draggable: true,
                addAttributes: ()=>({
                        containerData: null,
                        audio: null,
                        disableDownload: null,
                        coverImage: null,
                        name: null,
                        authorName: null,
                        html: null,
                        loading: {
                            default: false
                        },
                        error: null
                    }),
                addCommands () {
                    return {};
                }
            };
        }
    })
];
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/viewer-styles-inject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "injectCss",
    ()=>injectCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_08fb079d488a2f3c22f7836c5d8e9a02/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var styleDataHash = 'a3a4c38c';
const injectCss = ()=>{
    var css = `.bOhO9{border:0;height:100%;overflow:hidden;width:100%}.xKipO{height:100%;max-width:100%;position:relative;width:100%}._1l14r{background:rgba(51,51,51,.05);bottom:0;left:0;position:absolute;right:0;top:0}._3AVni{position:relative}._3AVni,._3AVni .T6wws{display:flex;justify-content:center}._3AVni .T6wws{--ricos-slider-unfilled-color:var(
    --ricos-custom-audio-slider-color,var(
      --ricos-native-secondary-bg-color-background-color,rgba(var(--ricos-text-color-low-tuple,150,150,150),0.2)
    )
  );align-items:center;background-color:var(--ricos-custom-audio-background-color,#fff);border:1px solid var(--ricos-custom-audio-border-color,#ededed);border-radius:var(--ricos-native-whitebox-border-radius,0);bottom:62px;box-shadow:0 4px 8px 0 rgba(0,0,0,.1),0 0 4px 0 rgba(0,0,0,.1);clip-path:inset(50%);max-height:32px;min-height:32px;position:absolute;transform:rotate(270deg);width:116px}._3AVni .T6wws input[type=range]{outline:none;width:100px}._3AVni .T6wws:has(input[type=range]:focus-visible){clip-path:none;outline:5px auto Highlight!important;outline:5px auto -webkit-focus-ring-color!important}._3AVni:hover .T6wws{clip-path:none}._3AVni:has(button:focus-visible) .T6wws{clip-path:none}.f7y1x{align-items:center;background:transparent;border-color:var(--ricos-custom-audio-component-border-color,rgba(var(--ricos-action-color-tuple,2,97,255),.2));border-radius:50%;border-style:solid;border-width:1px;color:var(--ricos-custom-audio-action-color,var(--ricos-action-color,#116dff));cursor:pointer;display:flex;height:30px;justify-content:center;min-width:30px;padding:0;width:30px}@supports (color:rgb(from #000 r g b/0.1)){.f7y1x{border-color:var(--ricos-custom-audio-component-border-color,rgb(from var(--ricos-action-color,#116dff) r g b/.2))}}.f7y1x[disabled]{border-color:rgba(var(--ricos-text-color-tuple,33,33,33),.2);color:rgba(var(--ricos-text-color-tuple,33,33,33),.2)}@supports (color:rgb(from #000 r g b/0.1)){.f7y1x[disabled]{border-color:rgb(from var(--ricos-text-color,#212121) r g b/.2);color:rgb(from var(--ricos-text-color,#212121) r g b/.2)}}.glob_fontElementMap,.pcW-8{font-family:var(--ricos-font-family,unset)}.ry9GP{container-type:inline-size;print-color-adjust:exact}.pHGNm{flex:0 0 auto}.oO6BC{background-color:var(--ricos-custom-audio-background-color);border-color:var(--ricos-custom-audio-component-border-color,var(--ricos-custom-audio-border-color,rgba(var(--ricos-text-color-tuple,33,33,33),.2)));border-style:solid;border-width:1px;direction:ltr!important;display:flex;height:120px;min-width:320px;position:relative;width:100%}@supports (color:rgb(from #000 r g b/0.1)){.oO6BC{border-color:var(--ricos-custom-audio-component-border-color,rgb(from var(--ricos-custom-audio-border-color,var(--ricos-text-color,#212121)) r g b/.2))}}.oO6BC.wmrNl{height:66px}@supports not (contain:inline-size){@media only screen and (max-width:350px){.oO6BC,.oO6BC.wmrNl{flex-direction:column;height:auto;min-width:90px}}}@container (width < 350px){.oO6BC,.oO6BC.wmrNl{flex-direction:column;height:auto;min-width:90px}}.tdmoP{align-items:center;background-color:var(--ricos-custom-audio-action-color,var(--ricos-action-color,#116dff));border:none;border-radius:50%;color:var(--ricos-custom-audio-action-text-color,var(--ricos-text-on-action-color,var(--ricos-background-color,#fff)));cursor:pointer;display:flex;flex-shrink:0;height:30px;justify-content:center;width:30px}.tdmoP:active{filter:brightness(.9)}.Ux8Vj{--ricos-audio-player-image-size:118px;height:var(--ricos-audio-player-image-size);max-height:var(--ricos-audio-player-image-size);max-width:var(--ricos-audio-player-image-size);overflow:hidden;width:var(--ricos-audio-player-image-size)}.wmrNl .Ux8Vj{--ricos-audio-player-image-size:64px}@supports not (contain:inline-size){@media only screen and (max-width:350px){.Ux8Vj{max-height:190px;max-width:100%;width:100%}.Ux8Vj,.wmrNl .Ux8Vj{--ricos-audio-player-image-size:190px}}}@container (width < 350px){.Ux8Vj{max-height:190px;max-width:100%;width:100%}.Ux8Vj,.wmrNl .Ux8Vj{--ricos-audio-player-image-size:190px}}.m2Fzl{align-items:flex-start;flex-direction:column;justify-content:space-between;padding:18px}.j1Eaa,.m2Fzl{display:flex;gap:12px;width:100%}.j1Eaa{align-items:center;justify-content:center;position:relative}@supports not (contain:inline-size){@media only screen and (max-width:250px){.j1Eaa{flex-direction:column}}}@container (width < 250px){.j1Eaa{flex-direction:column}}.R8tmr{align-items:center;display:flex;gap:12px;justify-content:center;position:relative}@supports not (contain:inline-size){@media only screen and (max-width:250px){.R8tmr{justify-content:space-between;width:100%}}}@container (width < 250px){.R8tmr{justify-content:space-between;width:100%}}@supports not (contain:inline-size){@media only screen and (max-width:120px){.R8tmr{flex-direction:column}}}@container (width < 120px){.R8tmr{flex-direction:column}}.QWudD{flex-grow:1;--ricos-slider-unfilled-color:var(
    --ricos-custom-audio-slider-color,var(
      --ricos-native-secondary-bg-color-background-color,rgba(var(--ricos-text-color-low-tuple,150,150,150),0.2)
    )
  )}.KGSVu{color:var(--ricos-custom-audio-title-color,var(--ricos-native-text-color,var(--ricos-text-color,#212121)));font-size:15px;min-width:fit-content}.KGSVu.fgK0N{color:rgba(var(--ricos-text-color-tuple,33,33,33),.2)}@supports (color:rgb(from #000 r g b/0.1)){.KGSVu.fgK0N{color:rgb(from var(--ricos-text-color,#212121) r g b/.2)}}.UD0mS{display:flex;flex-direction:column;font-family:var(--ricos-custom-p-font-family,unset);width:100%}.UD0mS ._3WPUn{color:var(--ricos-custom-audio-subtitle-color,var(--ricos-native-text-color,var(--ricos-text-color-low,#646464)));font-size:14px;font-weight:400;line-height:1.28;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@supports not (contain:inline-size){@media only screen and (max-width:120px){.UD0mS ._3WPUn{overflow:hidden;white-space:normal}}}@container (width < 120px){.UD0mS ._3WPUn{overflow:hidden;white-space:normal}}.UD0mS .rF5HN{color:var(--ricos-custom-audio-title-color,var(--ricos-native-text-color,var(--ricos-text-color,#212121)));font-size:16px;font-weight:400;line-height:1.5;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@supports not (contain:inline-size){@media only screen and (max-width:120px){.UD0mS .rF5HN{overflow:hidden;white-space:normal}}}@container (width < 120px){.UD0mS .rF5HN{overflow:hidden;white-space:normal}}.aF0j6{align-items:flex-start;background-color:var(--ricos-custom-audio-background-color,#fff);border:1px solid var(--ricos-custom-audio-border-color,#ededed);border-radius:var(--ricos-native-whitebox-border-radius,0);bottom:30px;box-shadow:0 4px 8px 0 rgba(0,0,0,.1),0 0 4px 0 rgba(0,0,0,.1);display:flex;flex-direction:column;max-height:160px;overflow:scroll;padding:8px 0;position:absolute;right:0;width:160px;-ms-overflow-style:none;scrollbar-width:none}.aF0j6::-webkit-scrollbar{display:none}.aF0j6 button{background-color:var(--ricos-custom-audio-background-color,#fff);border:none;cursor:pointer;height:36px;min-height:36px;padding-left:10px;text-align:left;width:100%}.aF0j6 button:hover{background-color:rgba(var(--ricos-text-color-tuple,0,0,0),.06)}@supports (color:rgb(from #000 r g b/0.1)){.aF0j6 button:hover{background-color:rgb(from var(--ricos-text-color,#000) r g b/.06)}}.aF0j6 button svg{color:#000;fill:#000}.aF0j6 .PDwkC{background-color:rgba(var(--ricos-action-color-fallback-tuple,2,97,255),.1);color:var(--ricos-action-color-fallback,#0261ff)}@supports (color:rgb(from #000 r g b/0.1)){.aF0j6 .PDwkC{background-color:rgb(from var(--ricos-action-color,#116dff) min(r,150) min(g,150) min(b,150)/.1);color:rgb(from var(--ricos-action-color,#116dff) min(r,150) min(g,150) min(b,150))}}.EG3kV,._0XpLA{align-items:center;display:flex;font-size:14px;justify-content:start}._0XpLA{gap:8px}._0XpLA svg{height:16px;width:16px}.hG8zE{align-items:center;background-color:var(--ricos-custom-audio-action-color,var(--ricos-action-color,#116dff));border-radius:50%;color:var(--ricos-custom-audio-action-text-color,var(--ricos-text-on-action-color,var(--ricos-background-color,#fff)));display:flex;height:30px;justify-content:center;min-width:30px;width:30px}`;
    var isTest = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_08fb079d488a2f3c22f7836c5d8e9a02$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === 'test';
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
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/editor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pluginAudio",
    ()=>pluginAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sound$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/Sound.js [app-client] (ecmascript) <export default as Sound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SoundCloudSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SoundCloudSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/SoundCloudSmall.js [app-client] (ecmascript) <export default as SoundCloudSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SoundSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SoundSmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/SoundSmall.js [app-client] (ecmascript) <export default as SoundSmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SpotifySmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SpotifySmall$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+wix-ui-icons-common@3.189.11_react@19.2.4/node_modules/@wix/wix-ui-icons-common/dist/esm/lazy/general/dist/components/SpotifySmall.js [app-client] (ecmascript) <export default as SpotifySmall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-schema/legacy/wix/rich_content/v1/rich_content.enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$ricos$2d$plugin$2d$toolbar$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-types/ricos-plugin-toolbar-names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$plugin$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-types/plugin-types.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/tiptap/helpers/pos-to-dom-rect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$converters$2f$audio$2d$converter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/converters/audio-converter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$get$2d$add$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/get-add-buttons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$get$2d$toolbar$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/get-toolbar-buttons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$insert$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/modals/insert-modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$tiptap$2f$tiptap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/tiptap/tiptap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/ricos-content/consts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/types.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$viewer$2d$styles$2d$inject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/plugin-audio/viewer-styles-inject.js [app-client] (ecmascript)");
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
const pluginAudio = (config = {})=>{
    return {
        config: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONFIGS"].editor,
            ...config,
            type: "audio"
        },
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$content$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_TYPE"],
        tiptapExtensions: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$tiptap$2f$tiptap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tiptapExtensions"],
        pmMarkConverters: [],
        pmNodeConverters: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$converters$2f$audio$2d$converter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioConverter"]
        ],
        toolbar: {
            names: [
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$ricos$2d$plugin$2d$toolbar$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RicosPluginToolbarNames"].AUDIO
            ],
            getButtons: (config2, services)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$get$2d$toolbar$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToolbarButtons"])(config2, services)
        },
        getAddButtons: (config2, services)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$get$2d$add$2d$buttons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddButtons"])(config2, services),
        getQuickActions: ({ config: config2, pluginServices })=>{
            const { disableDownload = true, exposeButtons = [
                "audio"
            ] } = config2 || {};
            const isMobile = pluginServices.context.isMobile;
            const actions = [];
            if (exposeButtons.includes(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["audioButtonsTypes"].audio)) {
                actions.push({
                    id: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO}.audio`,
                    title: "QuickActionsPlugin_ActionTitle_AudioFile",
                    icon: isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$Sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sound$3e$__["Sound"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SoundSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SoundSmall$3e$__["SoundSmall"],
                    section: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$plugin$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["quickActionsModalSections"].Media,
                    tags: [
                        "music",
                        "sound",
                        "podcast",
                        "voice",
                        "recording",
                        "song",
                        "clip",
                        "track"
                    ],
                    command: ({ modalService, editor, referenceElement })=>{
                        modalService.togglePluginPanel({
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_INSERT_AUDIO_MODAL_ID"],
                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$insert$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertModal"],
                            componentProps: {
                                componentData: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RICOS_DEFAULTS"],
                                    disableDownload
                                },
                                modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_INSERT_AUDIO_MODAL_ID"]
                            },
                            isMobile,
                            positioning: {
                                referenceElement: referenceElement ?? {
                                    getBoundingClientRect: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posToDOMRect"])(editor.view, editor.view.state.selection.from, editor.view.state.selection.to)
                                },
                                placement: isMobile ? "bottom" : "bottom-start"
                            },
                            mobileLayout: "drawer"
                        });
                    }
                });
            }
            if (exposeButtons.includes(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["audioButtonsTypes"].soundCloud)) {
                actions.push({
                    id: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO}.soundCloud`,
                    title: "QuickActionsPlugin_ActionTitle_SoundCloud",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SoundCloudSmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SoundCloudSmall$3e$__["SoundCloudSmall"],
                    section: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$plugin$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["quickActionsModalSections"].Embed,
                    tags: [
                        "music",
                        "sound",
                        "podcast",
                        "voice",
                        "recording",
                        "song",
                        "clip",
                        "link",
                        "streaming",
                        "track",
                        "soundcloud"
                    ],
                    command: ({ modalService, editor, referenceElement })=>{
                        modalService.togglePluginPanel({
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_INSERT_SOUNDCLOUD_MODAL_ID"],
                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$insert$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertModal"],
                            componentProps: {
                                componentData: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RICOS_DEFAULTS"]
                                },
                                modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_INSERT_SOUNDCLOUD_MODAL_ID"],
                                embedType: true
                            },
                            isMobile,
                            positioning: {
                                referenceElement: referenceElement ?? {
                                    getBoundingClientRect: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posToDOMRect"])(editor.view, editor.view.state.selection.from, editor.view.state.selection.to)
                                },
                                placement: isMobile ? "bottom" : "bottom-start"
                            },
                            mobileLayout: "drawer"
                        });
                    }
                });
            }
            if (exposeButtons.includes(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["audioButtonsTypes"].spotify)) {
                actions.push({
                    id: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$schema$2f$legacy$2f$wix$2f$rich_content$2f$v1$2f$rich_content$2e$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node_Type"].AUDIO}.spotify`,
                    title: "QuickActionsPlugin_ActionTitle_SpotifyTrack",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$wix$2d$ui$2d$icons$2d$common$40$3$2e$189$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$wix$2f$wix$2d$ui$2d$icons$2d$common$2f$dist$2f$esm$2f$lazy$2f$general$2f$dist$2f$components$2f$SpotifySmall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SpotifySmall$3e$__["SpotifySmall"],
                    section: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$ricos$2d$types$2f$plugin$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["quickActionsModalSections"].Embed,
                    tags: [
                        "music",
                        "sound",
                        "podcast",
                        "voice",
                        "recording",
                        "song",
                        "clip",
                        "link",
                        "streaming",
                        "track",
                        "playlist",
                        "spotify"
                    ],
                    command: ({ modalService, editor, referenceElement })=>{
                        modalService.togglePluginPanel({
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_INSERT_SPOTIFY_MODAL_ID"],
                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$modals$2f$insert$2d$modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertModal"],
                            componentProps: {
                                componentData: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RICOS_DEFAULTS"]
                                },
                                modalId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$consts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_INSERT_SPOTIFY_MODAL_ID"],
                                embedType: true
                            },
                            isMobile,
                            positioning: {
                                referenceElement: referenceElement ?? {
                                    getBoundingClientRect: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$tiptap$2f$helpers$2f$pos$2d$to$2d$dom$2d$rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posToDOMRect"])(editor.view, editor.view.state.selection.from, editor.view.state.selection.to)
                                },
                                placement: isMobile ? "bottom" : "bottom-start"
                            },
                            mobileLayout: "drawer"
                        });
                    }
                });
            }
            return actions;
        }
    };
};
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$11$2e$2_$40$babel$2b$c_967d2a9d5f0144a013b2d9a49aefa898$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$plugin$2d$audio$2f$viewer$2d$styles$2d$inject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectCss"])();
}),
]);

//# sourceMappingURL=0rv~_%40wix_ricos_dist_es_plugin-audio_04238t0._.js.map