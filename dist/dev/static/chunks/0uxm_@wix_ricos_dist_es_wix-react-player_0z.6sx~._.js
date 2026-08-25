(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEPRECATED_CONFIG_PROPS",
    ()=>DEPRECATED_CONFIG_PROPS,
    "SUPPORTED_PROPS",
    ()=>SUPPORTED_PROPS,
    "defaultProps",
    ()=>defaultProps
]);
const SUPPORTED_PROPS = [
    "url",
    "playing",
    "loop",
    "controls",
    "volume",
    "muted",
    "playbackRate",
    "width",
    "height",
    "style",
    "progressInterval",
    "playsinline",
    "pip",
    "light",
    "playIcon",
    "previewTabIndex",
    "previewAriaLabel",
    "wrapper",
    "config",
    "onReady",
    "onStart",
    "onPlay",
    "onPause",
    "onBuffer",
    "onBufferEnd",
    "onEnded",
    "onError",
    "onDuration",
    "onSeek",
    "onProgress",
    "onEnablePIP",
    "onDisablePIP"
];
const defaultProps = {
    playing: false,
    loop: false,
    controls: false,
    volume: null,
    muted: false,
    playbackRate: 1,
    width: "640px",
    height: "360px",
    style: {},
    progressInterval: 1e3,
    playsinline: false,
    pip: false,
    light: false,
    wrapper: "div",
    previewTabIndex: 0,
    previewAriaLabel: "",
    config: {
        soundcloud: {
            options: {
                visual: true,
                // Undocumented, but makes player fill container and look better
                buying: false,
                liking: false,
                download: false,
                sharing: false,
                show_comments: false,
                show_playcount: false
            }
        },
        youtube: {
            playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1
            },
            embedOptions: {},
            preload: false
        },
        facebook: {
            appId: "1309697205772819",
            version: "v3.3",
            playerId: null
        },
        dailymotion: {
            params: {
                api: 1,
                "endscreen-enable": false
            },
            preload: false
        },
        vimeo: {
            playerOptions: {
                autopause: false,
                byline: false,
                portrait: false,
                title: false
            },
            preload: false
        },
        file: {
            attributes: {},
            tracks: [],
            forceVideo: false,
            forceAudio: false,
            forceHLS: false,
            forceDASH: false,
            hlsOptions: {},
            hlsVersion: "0.13.1",
            dashVersion: "2.9.2"
        },
        wistia: {
            options: {}
        },
        mixcloud: {
            options: {
                hide_cover: 1
            }
        },
        twitch: {
            options: {},
            playerId: null
        }
    },
    onReady () {},
    onStart () {},
    onPlay () {},
    onPause () {},
    onBuffer () {},
    onBufferEnd () {},
    onEnded () {},
    onError () {},
    onDuration () {},
    onSeek () {},
    onProgress () {},
    onEnablePIP () {},
    onDisablePIP () {}
};
const DEPRECATED_CONFIG_PROPS = [
    "soundcloudConfig",
    "youtubeConfig",
    "facebookConfig",
    "dailymotionConfig",
    "vimeoConfig",
    "fileConfig",
    "wistiaConfig"
];
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callPlayer",
    ()=>callPlayer,
    "getConfig",
    ()=>getConfig,
    "getSDK",
    ()=>getSDK,
    "isEqual",
    ()=>isEqual,
    "isMediaStream",
    ()=>isMediaStream,
    "omit",
    ()=>omit,
    "parseEndTime",
    ()=>parseEndTime,
    "parseStartTime",
    ()=>parseStartTime,
    "queryString",
    ()=>queryString,
    "randomString",
    ()=>randomString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$load$2d$script$40$2$2e$0$2e$0$2f$node_modules$2f$load$2d$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/load-script@2.0.0/node_modules/load-script/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$clone$2d$deep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/clone-deep.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$deep$2d$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/_shared/deep-merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/props.js [app-client] (ecmascript)");
;
;
;
;
;
const MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
const MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
const MATCH_START_STAMP = /(\d+)(h|m|s)/g;
const MATCH_NUMERIC = /^\d+$/;
function parseTimeParam(url, pattern) {
    const match = url.match(pattern);
    if (match) {
        const stamp = match[1];
        if (stamp.match(MATCH_START_STAMP)) {
            return parseTimeString(stamp);
        }
        if (MATCH_NUMERIC.test(stamp)) {
            return parseInt(stamp);
        }
    }
    return void 0;
}
function parseTimeString(stamp) {
    let seconds = 0;
    let array = MATCH_START_STAMP.exec(stamp);
    while(array !== null){
        const [, count, period] = array;
        if (period === "h") {
            seconds += parseInt(count, 10) * 60 * 60;
        }
        if (period === "m") {
            seconds += parseInt(count, 10) * 60;
        }
        if (period === "s") {
            seconds += parseInt(count, 10);
        }
        array = MATCH_START_STAMP.exec(stamp);
    }
    return seconds;
}
function parseStartTime(url) {
    return parseTimeParam(url, MATCH_START_QUERY);
}
function parseEndTime(url) {
    return parseTimeParam(url, MATCH_END_QUERY);
}
function randomString() {
    return Math.random().toString(36).substr(2, 5);
}
function queryString(object) {
    return Object.keys(object).map((key)=>`${key}=${object[key]}`).join("&");
}
const requests = {};
function getSDK(url, sdkGlobal, sdkReady = null, isLoaded = ()=>true, fetchScript = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$load$2d$script$40$2$2e$0$2e$0$2f$node_modules$2f$load$2d$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
    if (window[sdkGlobal] && isLoaded(window[sdkGlobal])) {
        return Promise.resolve(window[sdkGlobal]);
    }
    return new Promise((resolve, reject)=>{
        if (requests[url]) {
            requests[url].push({
                resolve,
                reject
            });
            return;
        }
        requests[url] = [
            {
                resolve,
                reject
            }
        ];
        const onLoaded = (sdk)=>{
            requests[url].forEach((request)=>request.resolve(sdk));
        };
        if (sdkReady) {
            const previousOnReady = window[sdkReady];
            window[sdkReady] = function() {
                if (previousOnReady) {
                    previousOnReady();
                }
                onLoaded(window[sdkGlobal]);
            };
        }
        fetchScript(url, (err)=>{
            if (err) {
                requests[url].forEach((request)=>request.reject(err));
                requests[url] = null;
            } else if (!sdkReady) {
                onLoaded(window[sdkGlobal]);
            }
        });
    });
}
function getConfig(props, defaultProps, showWarning) {
    let config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$deep$2d$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$clone$2d$deep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneDeep"])(defaultProps.config), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$clone$2d$deep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneDeep"])(props.config));
    for (const p of __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPRECATED_CONFIG_PROPS"]){
        if (props[p]) {
            const key = p.replace(/Config$/, "");
            config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$_shared$2f$deep$2d$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepMerge"])(config, {
                [key]: props[p]
            });
            if (showWarning) {
                const link = "https://github.com/CookPete/react-player#config-prop";
                const message = `ReactPlayer: %c${p} %cis deprecated, please use the config prop instead – ${link}`;
                console.warn(message, "font-weight: bold", "");
            }
        }
    }
    return config;
}
function omit(object, ...arrays) {
    const omitKeys = [].concat(...arrays);
    const output = {};
    const keys = Object.keys(object);
    for (const key of keys){
        if (omitKeys.indexOf(key) === -1) {
            output[key] = object[key];
        }
    }
    return output;
}
function callPlayer(method, ...args) {
    if (!this.player || !this.player[method]) {
        let message = `ReactPlayer: ${this.constructor.displayName} player could not call %c${method}%c – `;
        if (!this.player) {
            message += "The player was not available";
        } else if (!this.player[method]) {
            message += "The method was not available";
        }
        console.warn(message, "font-weight: bold", "");
        return null;
    }
    return this.player[method](...args);
}
function isObject(val) {
    return val !== null && typeof val === "object";
}
function isEqual(a, b) {
    if (typeof a === "function" && typeof b === "function") {
        return true;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(a) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(b)) {
        return true;
    }
    if (a instanceof Array && b instanceof Array) {
        if (a.length !== b.length) {
            return false;
        }
        for(let i = 0; i !== a.length; i++){
            if (!isEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    if (isObject(a) && isObject(b)) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        for (const key of Object.keys(a)){
            if (!isEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return a === b;
}
function isMediaStream(url) {
    return typeof window !== "undefined" && typeof window.MediaStream !== "undefined" && url instanceof window.MediaStream;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/player.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Player",
    ()=>Player
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)");
;
;
;
const SEEK_ON_PLAY_EXPIRY = 5e3;
class Player extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        this.mounted = false;
        this.isReady = false;
        this.isPlaying = false;
        // Track playing state internally to prevent bugs
        this.isLoading = true;
        // Use isLoading to prevent onPause when switching URL
        this.loadOnReady = null;
        this.startOnPlay = true;
        this.seekOnPlay = null;
        this.onDurationCalled = false;
        this.durationCheckAttempts = 0;
        this.maxDurationCheckAttempts = 50;
        this.getInternalPlayer = (key)=>{
            if (!this.player) {
                return null;
            }
            return this.player[key];
        };
        this.progress = ()=>{
            if (this.props.url && this.player && this.isReady) {
                const playedSeconds = this.getCurrentTime() || 0;
                const loadedSeconds = this.getSecondsLoaded();
                const duration = this.getDuration();
                if (duration) {
                    const progress = {
                        playedSeconds,
                        played: playedSeconds / duration
                    };
                    if (loadedSeconds !== null) {
                        progress.loadedSeconds = loadedSeconds;
                        progress.loaded = loadedSeconds / duration;
                    }
                    if (progress.playedSeconds !== this.prevPlayed || // @ts-expect-error
                    progress.loadedSeconds !== this.prevLoaded) {
                        this.props.onProgress(progress);
                    }
                    this.prevPlayed = progress.playedSeconds;
                    this.prevLoaded = progress.loadedSeconds;
                }
            }
            this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval);
        };
        this.handleReady = ()=>{
            if (!this.mounted) {
                return;
            }
            this.isReady = true;
            this.isLoading = false;
            this.durationCheckAttempts = 0;
            const { onReady, playing, volume, muted } = this.props;
            onReady();
            if (!muted && volume !== null) {
                this.player.setVolume(volume);
            }
            if (this.loadOnReady) {
                this.player.load(this.loadOnReady, true);
                this.loadOnReady = null;
            } else if (playing) {
                this.player.play();
            }
            this.handleDurationCheck();
        };
        this.handlePlay = ()=>{
            this.isPlaying = true;
            this.isLoading = false;
            const { onStart, onPlay, playbackRate } = this.props;
            if (this.startOnPlay) {
                if (this.player.setPlaybackRate && playbackRate !== 1) {
                    this.player.setPlaybackRate(playbackRate);
                }
                onStart();
                this.startOnPlay = false;
            }
            onPlay();
            if (this.seekOnPlay) {
                this.seekTo(this.seekOnPlay);
                this.seekOnPlay = null;
            }
            this.handleDurationCheck();
        };
        this.handlePause = (e)=>{
            this.isPlaying = false;
            if (!this.isLoading) {
                this.props.onPause(e);
            }
        };
        this.handleEnded = ()=>{
            const { activePlayer, loop, onEnded } = this.props;
            if (activePlayer.loopOnEnded && loop) {
                this.seekTo(0);
            }
            if (!loop) {
                this.isPlaying = false;
                onEnded();
            }
        };
        this.handleError = (...args)=>{
            this.isLoading = false;
            this.props.onError(...args);
        };
        this.handleDurationCheck = ()=>{
            clearTimeout(this.durationCheckTimeout);
            const duration = this.getDuration();
            if (duration) {
                if (!this.onDurationCalled) {
                    this.props.onDuration(duration);
                    this.onDurationCalled = true;
                }
                return;
            }
            if (this.durationCheckAttempts >= this.maxDurationCheckAttempts) {
                return;
            }
            this.durationCheckAttempts += 1;
            this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100);
        };
        this.handleLoaded = ()=>{
            this.isLoading = false;
        };
        this.ref = (player)=>{
            if (player) {
                this.player = player;
            }
        };
    }
    componentDidMount() {
        this.mounted = true;
        this.player.load(this.props.url);
        this.progress();
    }
    componentWillUnmount() {
        clearTimeout(this.progressTimeout);
        clearTimeout(this.durationCheckTimeout);
        if (this.isReady) {
            this.player.stop();
        }
        if (this.player.disablePIP) {
            this.player.disablePIP();
        }
        this.mounted = false;
    }
    componentDidUpdate(prevProps) {
        const { url, playing, volume, muted, playbackRate, pip, loop, activePlayer } = this.props;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEqual"])(prevProps.url, url)) {
            if (this.isLoading && !activePlayer.forceLoad) {
                console.warn(`ReactPlayer: the attempt to load ${url} is being deferred until the player has loaded`);
                this.loadOnReady = url;
                return;
            }
            this.isLoading = true;
            this.startOnPlay = true;
            this.onDurationCalled = false;
            this.player.load(url, this.isReady);
        }
        if (!prevProps.playing && playing && !this.isPlaying) {
            this.player.play();
        }
        if (prevProps.playing && !playing && this.isPlaying) {
            this.player.pause();
        }
        if (!prevProps.pip && pip && this.player.enablePIP) {
            this.player.enablePIP();
        }
        if (prevProps.pip && !pip && this.player.disablePIP) {
            this.player.disablePIP();
        }
        if (prevProps.volume !== volume && volume !== null) {
            this.player.setVolume(volume);
        }
        if (prevProps.muted !== muted) {
            if (muted) {
                this.player.mute();
            } else {
                this.player.unmute();
                if (volume !== null) {
                    setTimeout(()=>this.player.setVolume(volume));
                }
            }
        }
        if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
            this.player.setPlaybackRate(playbackRate);
        }
        if (prevProps.loop !== loop && this.player.setLoop) {
            this.player.setLoop(loop);
        }
    }
    getDuration() {
        if (!this.isReady) {
            return null;
        }
        return this.player.getDuration();
    }
    getCurrentTime() {
        if (!this.isReady) {
            return null;
        }
        return this.player.getCurrentTime();
    }
    getSecondsLoaded() {
        if (!this.isReady) {
            return null;
        }
        return this.player.getSecondsLoaded();
    }
    seekTo(amount, type) {
        if (!this.isReady && amount !== 0) {
            this.seekOnPlay = amount;
            setTimeout(()=>{
                this.seekOnPlay = null;
            }, SEEK_ON_PLAY_EXPIRY);
            return;
        }
        const isFraction = !type ? amount > 0 && amount < 1 : type === "fraction";
        if (isFraction) {
            const duration = this.player.getDuration();
            if (!duration) {
                console.warn("ReactPlayer: could not seek using fraction – duration not yet available");
                return;
            }
            this.player.seekTo(duration * amount);
            return;
        }
        this.player.seekTo(amount);
    }
    render() {
        const Player2 = this.props.activePlayer;
        if (!Player2) {
            return null;
        }
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Player2, {
            ...this.props,
            ref: this.ref,
            onReady: this.handleReady,
            onPlay: this.handlePlay,
            onPause: this.handlePause,
            onEnded: this.handleEnded,
            onLoaded: this.handleLoaded,
            onError: this.handleError
        });
    }
}
Player.displayName = "Player";
Player.defaultProps = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultProps"];
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/file-player.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilePlayer",
    ()=>FilePlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)");
;
;
const IOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent) && // @ts-expect-error
!window.MSStream;
const AUDIO_EXTENSIONS = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
const HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
const HLS_SDK_URL = "https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js";
const HLS_GLOBAL = "Hls";
const DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
const DASH_SDK_URL = "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js";
const DASH_GLOBAL = "dashjs";
const MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;
function canPlay(url) {
    if (url instanceof Array) {
        for (const item of url){
            if (typeof item === "string" && canPlay(item)) {
                return true;
            }
            if (canPlay(item.src)) {
                return true;
            }
        }
        return false;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMediaStream"])(url)) {
        return true;
    }
    return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url);
}
function supportsWebKitPresentationMode(video) {
    if (!video) {
        video = document.createElement("video");
    }
    return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === "function" && !/iPhone|iPod/.test(navigator.userAgent);
}
function canEnablePIP(url) {
    return canPlay(url) && // @ts-expect-error
    (!!document.pictureInPictureEnabled || supportsWebKitPresentationMode()) && !AUDIO_EXTENSIONS.test(url);
}
class FilePlayer extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        // Proxy methods to prevent listener leaks
        this.onReady = (...args)=>this.props.onReady(...args);
        this.onPlay = (...args)=>this.props.onPlay(...args);
        this.onBuffer = (...args)=>this.props.onBuffer(...args);
        this.onBufferEnd = (...args)=>this.props.onBufferEnd(...args);
        this.onPause = (...args)=>this.props.onPause(...args);
        this.onEnded = (...args)=>this.props.onEnded(...args);
        this.onError = (...args)=>this.props.onError(...args);
        this.onEnablePIP = (...args)=>this.props.onEnablePIP(...args);
        this.onDisablePIP = (e)=>{
            const { onDisablePIP, playing } = this.props;
            onDisablePIP(e);
            if (playing) {
                this.play();
            }
        };
        this.onPresentationModeChange = (e)=>{
            if (this.player && supportsWebKitPresentationMode(this.player)) {
                const { webkitPresentationMode } = this.player;
                if (webkitPresentationMode === "picture-in-picture") {
                    this.onEnablePIP(e);
                } else if (webkitPresentationMode === "inline") {
                    this.onDisablePIP(e);
                }
            }
        };
        this.onSeek = (e)=>{
            this.props.onSeek(e.target.currentTime);
        };
        this.mute = ()=>{
            this.player.muted = true;
        };
        this.unmute = ()=>{
            this.player.muted = false;
        };
        this.renderSourceElement = (source, index)=>{
            if (typeof source === "string") {
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("source", {
                    key: index,
                    src: source
                });
            }
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("source", {
                key: index,
                ...source
            });
        };
        this.renderTrack = (track, index)=>{
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("track", {
                key: index,
                ...track
            });
        };
        this.ref = (player)=>{
            if (this.player) {
                this.prevPlayer = this.player;
            }
            this.player = player;
        };
    }
    componentDidMount() {
        this.addListeners(this.player);
        if (IOS) {
            this.player.load();
        }
    }
    componentDidUpdate(prevProps) {
        if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
            this.removeListeners(this.prevPlayer);
            this.addListeners(this.player);
        }
    }
    componentWillUnmount() {
        this.removeListeners(this.player);
        if (this.hls) {
            this.hls.destroy();
        }
    }
    addListeners(player) {
        const { playsinline } = this.props;
        player.addEventListener("canplay", this.onReady);
        player.addEventListener("play", this.onPlay);
        player.addEventListener("waiting", this.onBuffer);
        player.addEventListener("playing", this.onBufferEnd);
        player.addEventListener("pause", this.onPause);
        player.addEventListener("seeked", this.onSeek);
        player.addEventListener("ended", this.onEnded);
        player.addEventListener("error", this.onError);
        player.addEventListener("enterpictureinpicture", this.onEnablePIP);
        player.addEventListener("leavepictureinpicture", this.onDisablePIP);
        player.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange);
        if (playsinline) {
            player.setAttribute("playsinline", "");
            player.setAttribute("webkit-playsinline", "");
            player.setAttribute("x5-playsinline", "");
        }
    }
    removeListeners(player) {
        player.removeEventListener("canplay", this.onReady);
        player.removeEventListener("play", this.onPlay);
        player.removeEventListener("waiting", this.onBuffer);
        player.removeEventListener("playing", this.onBufferEnd);
        player.removeEventListener("pause", this.onPause);
        player.removeEventListener("seeked", this.onSeek);
        player.removeEventListener("ended", this.onEnded);
        player.removeEventListener("error", this.onError);
        player.removeEventListener("enterpictureinpicture", this.onEnablePIP);
        player.removeEventListener("leavepictureinpicture", this.onDisablePIP);
        player.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange);
    }
    shouldUseAudio(props) {
        if (props.config.file.forceVideo) {
            return false;
        }
        if (props.config.file.attributes.poster) {
            return false;
        }
        return AUDIO_EXTENSIONS.test(props.url) || props.config.file.forceAudio;
    }
    shouldUseHLS(url) {
        return HLS_EXTENSIONS.test(url) && !IOS || this.props.config.file.forceHLS;
    }
    shouldUseDASH(url) {
        return DASH_EXTENSIONS.test(url) || this.props.config.file.forceDASH;
    }
    load(url) {
        const { hlsVersion, dashVersion } = this.props.config.file;
        if (this.shouldUseHLS(url)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSDK"])(HLS_SDK_URL.replace("VERSION", hlsVersion), HLS_GLOBAL).then((Hls)=>{
                this.hls = new Hls(this.props.config.file.hlsOptions);
                this.hls.on(Hls.Events.ERROR, (e, data)=>{
                    this.props.onError(e, data, this.hls, Hls);
                });
                this.hls.loadSource(url);
                this.hls.attachMedia(this.player);
            });
        }
        if (this.shouldUseDASH(url)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSDK"])(DASH_SDK_URL.replace("VERSION", dashVersion), DASH_GLOBAL).then((dashjs)=>{
                this.dash = dashjs.MediaPlayer().create();
                this.dash.initialize(this.player, url, this.props.playing);
                this.dash.on("error", this.props.onError);
                this.dash.getDebug().setLogToBrowserConsole(false);
            });
        }
        if (url instanceof Array) {
            this.player.load();
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMediaStream"])(url)) {
            try {
                this.player.srcObject = url;
            } catch  {
                this.player.src = window.URL.createObjectURL(url);
            }
        }
    }
    play() {
        const promise = this.player.play();
        if (promise) {
            promise.catch(this.props.onError);
        }
    }
    pause() {
        this.player.pause();
    }
    stop() {
        this.player.removeAttribute("src");
        if (this.dash) {
            this.dash.reset();
        }
    }
    seekTo(seconds) {
        this.player.currentTime = seconds;
    }
    setVolume(fraction) {
        this.player.volume = fraction;
    }
    enablePIP() {
        if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
            this.player.requestPictureInPicture();
        } else if (supportsWebKitPresentationMode(this.player) && this.player.webkitPresentationMode !== "picture-in-picture") {
            this.player.webkitSetPresentationMode("picture-in-picture");
        }
    }
    disablePIP() {
        if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
            document.exitPictureInPicture();
        } else if (supportsWebKitPresentationMode(this.player) && this.player.webkitPresentationMode !== "inline") {
            this.player.webkitSetPresentationMode("inline");
        }
    }
    setPlaybackRate(rate) {
        this.player.playbackRate = rate;
    }
    getDuration() {
        if (!this.player) {
            return null;
        }
        const { duration, seekable } = this.player;
        if (duration === Infinity && seekable.length > 0) {
            return seekable.end(seekable.length - 1);
        }
        return duration;
    }
    getCurrentTime() {
        if (!this.player) {
            return null;
        }
        return this.player.currentTime;
    }
    getSecondsLoaded() {
        if (!this.player) {
            return null;
        }
        const { buffered } = this.player;
        if (buffered.length === 0) {
            return 0;
        }
        const end = buffered.end(buffered.length - 1);
        const duration = this.getDuration();
        if (end > duration) {
            return duration;
        }
        return end;
    }
    getSource(url) {
        const useHLS = this.shouldUseHLS(url);
        const useDASH = this.shouldUseDASH(url);
        if (url instanceof Array || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMediaStream"])(url) || useHLS || useDASH) {
            return void 0;
        }
        if (MATCH_DROPBOX_URL.test(url)) {
            return url.replace("www.dropbox.com", "dl.dropboxusercontent.com");
        }
        return url;
    }
    render() {
        const { url, playing, loop, controls, muted, config, width, height } = this.props;
        const useAudio = this.shouldUseAudio(this.props);
        const Element = useAudio ? "audio" : "video";
        const style = {
            width: width === "auto" ? width : "100%",
            height: height === "auto" ? height : "100%"
        };
        if (!useAudio) {
            style.display = "block";
        }
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Element, {
            ref: this.ref,
            src: this.getSource(url),
            style,
            preload: "auto",
            autoPlay: playing || void 0,
            controls,
            muted,
            loop,
            ...config.file.attributes
        }, url instanceof Array && url.map(this.renderSourceElement), config.file.tracks.map(this.renderTrack));
    }
}
FilePlayer.displayName = "FilePlayer";
FilePlayer.canPlay = canPlay;
FilePlayer.canEnablePIP = canEnablePIP;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/dailymotion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DailyMotion",
    ()=>DailyMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)");
;
;
const SDK_URL = "https://api.dmcdn.net/all.js";
const SDK_GLOBAL = "DM";
const SDK_GLOBAL_READY = "dmAsyncInit";
const MATCH_URL = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
class DailyMotion extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        this.callPlayer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callPlayer"];
        this.onDurationChange = ()=>{
            const duration = this.getDuration();
            this.props.onDuration(duration);
        };
        this.mute = ()=>{
            this.callPlayer("setMuted", true);
        };
        this.unmute = ()=>{
            this.callPlayer("setMuted", false);
        };
        this.ref = (container)=>{
            this.container = container;
        };
    }
    load(url) {
        const { controls, config, onError, playing } = this.props;
        const [, id] = url.match(MATCH_URL);
        if (this.player) {
            this.player.load(id, {
                start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStartTime"])(url),
                autoplay: playing
            });
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSDK"])(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, (DM)=>DM.player).then((DM)=>{
            if (!this.container) {
                return;
            }
            const Player = DM.player;
            this.player = new Player(this.container, {
                width: "100%",
                height: "100%",
                video: id,
                params: {
                    controls,
                    autoplay: this.props.playing,
                    mute: this.props.muted,
                    start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStartTime"])(url),
                    origin: window.location.origin,
                    ...config.dailymotion.params
                },
                events: {
                    apiready: this.props.onReady,
                    seeked: ()=>this.props.onSeek(this.player.currentTime),
                    video_end: this.props.onEnded,
                    durationchange: this.onDurationChange,
                    pause: this.props.onPause,
                    playing: this.props.onPlay,
                    waiting: this.props.onBuffer,
                    error: (event)=>onError(event)
                }
            });
        }, onError);
    }
    play() {
        this.callPlayer("play");
    }
    pause() {
        this.callPlayer("pause");
    }
    stop() {}
    seekTo(seconds) {
        this.callPlayer("seek", seconds);
    }
    setVolume(fraction) {
        this.callPlayer("setVolume", fraction);
    }
    getDuration() {
        return this.player.duration || null;
    }
    getCurrentTime() {
        return this.player.currentTime;
    }
    getSecondsLoaded() {
        return this.player.bufferedTime;
    }
    render() {
        const { display } = this.props;
        const style = {
            width: "100%",
            height: "100%",
            display
        };
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: this.ref
        }));
    }
}
DailyMotion.displayName = "DailyMotion";
DailyMotion.canPlay = (url)=>MATCH_URL.test(url);
DailyMotion.loopOnEnded = true;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/facebook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Facebook",
    ()=>Facebook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)");
;
;
const SDK_URL = "https://connect.facebook.net/en_US/sdk.js";
const SDK_GLOBAL = "FB";
const SDK_GLOBAL_READY = "fbAsyncInit";
const MATCH_URL = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
const PLAYER_ID_PREFIX = "facebook-player-";
const DEFAULT_EMBED_WIDTH = 560;
const EMBED_ASPECT_RATIO = 9 / 16;
const EMBED_READY_TIMEOUT_MS = 5e3;
let facebookSdkInitialized = false;
function getContainerWidth(element) {
    if (element.offsetWidth > 0) {
        return element.offsetWidth;
    }
    const videoContainer = element.closest('[data-hook="video-player"]');
    if (videoContainer instanceof HTMLElement && videoContainer.offsetWidth > 0) {
        return videoContainer.offsetWidth;
    }
    let parent = element.parentElement;
    while(parent){
        if (parent.offsetWidth > 0) {
            return parent.offsetWidth;
        }
        parent = parent.parentElement;
    }
    return DEFAULT_EMBED_WIDTH;
}
function getEmbedDimensions(element) {
    const width = getContainerWidth(element);
    return {
        width,
        height: Math.round(width * EMBED_ASPECT_RATIO)
    };
}
function applyEmbedDimensions(element) {
    const { width, height } = getEmbedDimensions(element);
    element.setAttribute("data-width", String(width));
    element.setAttribute("data-height", String(height));
}
class Facebook extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        this.callPlayer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callPlayer"];
        this.playerID = this.props.config.facebook.playerId || `${PLAYER_ID_PREFIX}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomString"])()}`;
        this.container = null;
        this.eventsSubscribed = false;
        this.readyNotified = false;
        this.embedObserver = null;
        this.embedReadyTimeout = null;
        this.mute = ()=>{
            if (!this.player) {
                return;
            }
            this.callPlayer("mute");
        };
        this.unmute = ()=>{
            if (!this.player) {
                return;
            }
            this.callPlayer("unmute");
        };
    }
    componentWillUnmount() {
        this.embedObserver?.disconnect();
        if (this.embedReadyTimeout) {
            clearTimeout(this.embedReadyTimeout);
        }
    }
    notifyEmbedReady(element) {
        const iframe = element.querySelector("iframe");
        if (!iframe) {
            return;
        }
        iframe.style.visibility = "visible";
        if (this.readyNotified) {
            return;
        }
        this.readyNotified = true;
        this.props.onReady();
    }
    observeEmbedRender(element) {
        this.embedObserver?.disconnect();
        if (this.embedReadyTimeout) {
            clearTimeout(this.embedReadyTimeout);
        }
        if (element.querySelector("iframe")) {
            this.notifyEmbedReady(element);
            return;
        }
        this.embedObserver = new MutationObserver(()=>{
            if (element.querySelector("iframe")) {
                this.embedObserver?.disconnect();
                if (this.embedReadyTimeout) {
                    clearTimeout(this.embedReadyTimeout);
                }
                this.notifyEmbedReady(element);
            }
        });
        this.embedObserver.observe(element, {
            childList: true,
            subtree: true
        });
        this.embedReadyTimeout = setTimeout(()=>{
            this.embedObserver?.disconnect();
            if (this.readyNotified) {
                return;
            }
            this.readyNotified = true;
            this.props.onReady();
        }, EMBED_READY_TIMEOUT_MS);
    }
    setupFacebookEvents(element) {
        if (this.eventsSubscribed) {
            return;
        }
        this.eventsSubscribed = true;
        const FB = window[SDK_GLOBAL];
        FB.Event.subscribe("xfbml.render", ()=>{
            this.props.onLoaded();
            this.notifyEmbedReady(element);
        });
        FB.Event.subscribe("xfbml.ready", (msg)=>{
            if (msg.type === "video" && msg.id === this.playerID) {
                this.player = msg.instance;
                this.player.subscribe("startedPlaying", this.props.onPlay);
                this.player.subscribe("paused", this.props.onPause);
                this.player.subscribe("finishedPlaying", this.props.onEnded);
                this.player.subscribe("startedBuffering", this.props.onBuffer);
                this.player.subscribe("finishedBuffering", this.props.onBufferEnd);
                this.player.subscribe("error", this.props.onError);
                if (!this.props.muted) {
                    this.callPlayer("unmute");
                }
                this.notifyEmbedReady(element);
            }
        });
    }
    parseEmbed(element) {
        applyEmbedDimensions(element);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSDK"])(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then((FB)=>{
            if (!facebookSdkInitialized) {
                FB.init({
                    appId: this.props.config.facebook.appId,
                    xfbml: true,
                    version: this.props.config.facebook.version
                });
                facebookSdkInitialized = true;
            }
            this.setupFacebookEvents(element);
            FB.XFBML.parse(element);
            this.observeEmbedRender(element);
        });
    }
    load(_url, _isReady) {
        const element = this.container ?? document.getElementById(this.playerID);
        if (!element) {
            return;
        }
        this.readyNotified = false;
        const startLoad = ()=>{
            this.parseEmbed(element);
        };
        if (element.offsetWidth === 0) {
            requestAnimationFrame(()=>{
                requestAnimationFrame(startLoad);
            });
            return;
        }
        startLoad();
    }
    play() {
        if (!this.player) {
            return;
        }
        this.callPlayer("play");
    }
    pause() {
        if (!this.player) {
            return;
        }
        this.callPlayer("pause");
    }
    stop() {}
    seekTo(seconds) {
        if (!this.player) {
            return;
        }
        this.callPlayer("seek", seconds);
    }
    setVolume(fraction) {
        if (!this.player) {
            return;
        }
        this.callPlayer("setVolume", fraction);
    }
    getDuration() {
        if (!this.player) {
            return null;
        }
        return this.callPlayer("getDuration");
    }
    getCurrentTime() {
        if (!this.player) {
            return null;
        }
        return this.callPlayer("getCurrentPosition");
    }
    getSecondsLoaded() {
        return null;
    }
    render() {
        const style = {
            width: "100%",
            height: "100%"
        };
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: (element)=>{
                this.container = element;
            },
            style,
            id: this.playerID,
            className: "fb-video",
            "data-href": this.props.url,
            "data-autoplay": this.props.playing ? "true" : "false",
            "data-allowfullscreen": "true",
            "data-controls": this.props.controls ? "true" : "false"
        });
    }
}
Facebook.displayName = "Facebook";
Facebook.canPlay = (url)=>MATCH_URL.test(url);
Facebook.loopOnEnded = true;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/mixcloud.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mixcloud",
    ()=>Mixcloud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)");
;
;
const SDK_URL = "https://widget.mixcloud.com/media/js/widgetApi.js";
const SDK_GLOBAL = "Mixcloud";
const MATCH_URL = /mixcloud\.com\/([^/]+\/[^/]+)/;
class Mixcloud extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        this.callPlayer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callPlayer"];
        this.duration = null;
        this.currentTime = null;
        this.secondsLoaded = null;
        this.mute = ()=>{};
        this.unmute = ()=>{};
        this.ref = (iframe)=>{
            this.iframe = iframe;
        };
    }
    load(_url) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSDK"])(SDK_URL, SDK_GLOBAL).then((Mixcloud2)=>{
            this.player = Mixcloud2.PlayerWidget(this.iframe);
            this.player.ready.then(()=>{
                this.player.events.play.on(this.props.onPlay);
                this.player.events.pause.on(this.props.onPause);
                this.player.events.ended.on(this.props.onEnded);
                this.player.events.error.on(this.props.error);
                this.player.events.progress.on((seconds, duration)=>{
                    this.currentTime = seconds;
                    this.duration = duration;
                });
                this.props.onReady();
            });
        }, this.props.onError);
    }
    play() {
        this.callPlayer("play");
    }
    pause() {
        this.callPlayer("pause");
    }
    stop() {}
    seekTo(seconds) {
        this.callPlayer("seek", seconds);
    }
    setVolume(_fraction) {}
    getDuration() {
        return this.duration;
    }
    getCurrentTime() {
        return this.currentTime;
    }
    getSecondsLoaded() {
        return null;
    }
    render() {
        const { url, config } = this.props;
        const id = url.match(MATCH_URL)[1];
        const style = {
            width: "100%",
            height: "100%"
        };
        const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryString"])({
            ...config.mixcloud.options,
            feed: `/${id}/`
        });
        return(// oxlint-disable-next-line jsx-a11y/iframe-has-title
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("iframe", {
            key: id,
            ref: this.ref,
            style,
            src: `https://www.mixcloud.com/widget/iframe/?${query}`,
            frameBorder: "0"
        }));
    }
}
Mixcloud.displayName = "Mixcloud";
Mixcloud.canPlay = (url)=>MATCH_URL.test(url);
Mixcloud.loopOnEnded = true;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/soundcloud.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SoundCloud",
    ()=>SoundCloud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)");
;
;
const SDK_URL = "https://w.soundcloud.com/player/api.js";
const SDK_GLOBAL = "SC";
const MATCH_URL = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
class SoundCloud extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        this.callPlayer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callPlayer"];
        this.duration = null;
        this.currentTime = null;
        this.fractionLoaded = null;
        this.mute = ()=>{
            this.setVolume(0);
        };
        this.unmute = ()=>{
            if (this.props.volume !== null) {
                this.setVolume(this.props.volume);
            }
        };
        this.ref = (iframe)=>{
            this.iframe = iframe;
        };
    }
    load(url, isReady) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSDK"])(SDK_URL, SDK_GLOBAL).then((SC)=>{
            if (!this.iframe) {
                return;
            }
            const { PLAY, PLAY_PROGRESS, PAUSE, FINISH, ERROR } = SC.Widget.Events;
            if (!isReady) {
                this.player = SC.Widget(this.iframe);
                this.player.bind(PLAY, this.props.onPlay);
                this.player.bind(PAUSE, this.props.onPause);
                this.player.bind(PLAY_PROGRESS, (e)=>{
                    this.currentTime = e.currentPosition / 1e3;
                    this.fractionLoaded = e.loadedProgress;
                });
                this.player.bind(FINISH, ()=>this.props.onEnded());
                this.player.bind(ERROR, (e)=>this.props.onError(e));
            }
            this.player.load(url, {
                ...this.props.config.soundcloud.options,
                callback: ()=>{
                    this.player.getDuration((duration)=>{
                        this.duration = duration / 1e3;
                        this.props.onReady();
                    });
                }
            });
        });
    }
    play() {
        this.callPlayer("play");
    }
    pause() {
        this.callPlayer("pause");
    }
    stop() {}
    seekTo(seconds) {
        this.callPlayer("seekTo", seconds * 1e3);
    }
    setVolume(fraction) {
        this.callPlayer("setVolume", fraction * 100);
    }
    getDuration() {
        return this.duration;
    }
    getCurrentTime() {
        return this.currentTime;
    }
    getSecondsLoaded() {
        return this.fractionLoaded * this.duration;
    }
    render() {
        const { display } = this.props;
        const style = {
            width: "100%",
            height: "100%",
            display
        };
        return(// oxlint-disable-next-line jsx-a11y/iframe-has-title
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("iframe", {
            ref: this.ref,
            src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,
            style,
            frameBorder: 0,
            allow: "autoplay"
        }));
    }
}
SoundCloud.displayName = "SoundCloud";
SoundCloud.canPlay = (url)=>MATCH_URL.test(url);
SoundCloud.loopOnEnded = true;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/streamable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Streamable",
    ()=>Streamable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)");
;
;
const SDK_URL = "https://cdn.embed.ly/player-0.1.0.min.js";
const SDK_GLOBAL = "playerjs";
const MATCH_URL = /streamable\.com\/([a-z0-9]+)$/;
class Streamable extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        this.callPlayer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callPlayer"];
        this.duration = null;
        this.currentTime = null;
        this.secondsLoaded = null;
        this.mute = ()=>{
            this.callPlayer("mute");
        };
        this.unmute = ()=>{
            this.callPlayer("unmute");
        };
        this.ref = (iframe)=>{
            this.iframe = iframe;
        };
    }
    load(_url) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSDK"])(SDK_URL, SDK_GLOBAL).then((playerjs)=>{
            if (!this.iframe) {
                return;
            }
            this.player = new playerjs.Player(this.iframe);
            this.player.setLoop(this.props.loop);
            this.player.on("ready", this.props.onReady);
            this.player.on("play", this.props.onPlay);
            this.player.on("pause", this.props.onPause);
            this.player.on("seeked", this.props.onSeek);
            this.player.on("ended", this.props.onEnded);
            this.player.on("error", this.props.onError);
            this.player.on("timeupdate", ({ duration, seconds })=>{
                this.duration = duration;
                this.currentTime = seconds;
            });
            this.player.on("buffered", ({ percent })=>{
                if (this.duration) {
                    this.secondsLoaded = this.duration * percent;
                }
            });
            if (this.props.muted) {
                this.player.mute();
            }
        }, this.props.onError);
    }
    play() {
        this.callPlayer("play");
    }
    pause() {
        this.callPlayer("pause");
    }
    stop() {}
    seekTo(seconds) {
        this.callPlayer("setCurrentTime", seconds);
    }
    setVolume(fraction) {
        this.callPlayer("setVolume", fraction * 100);
    }
    setLoop(loop) {
        this.callPlayer("setLoop", loop);
    }
    getDuration() {
        return this.duration;
    }
    getCurrentTime() {
        return this.currentTime;
    }
    getSecondsLoaded() {
        return this.secondsLoaded;
    }
    render() {
        const id = this.props.url.match(MATCH_URL)[1];
        const style = {
            width: "100%",
            height: "100%"
        };
        return(// oxlint-disable-next-line jsx-a11y/iframe-has-title
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("iframe", {
            ref: this.ref,
            src: `https://streamable.com/o/${id}`,
            frameBorder: "0",
            scrolling: "no",
            style,
            allowFullScreen: true
        }));
    }
}
Streamable.displayName = "Streamable";
Streamable.canPlay = (url)=>MATCH_URL.test(url);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/twitch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Twitch",
    ()=>Twitch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)");
;
;
const SDK_URL = "https://player.twitch.tv/js/embed/v1.js";
const SDK_GLOBAL = "Twitch";
const MATCH_VIDEO_URL = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
const MATCH_CHANNEL_URL = /(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/;
const PLAYER_ID_PREFIX = "twitch-player-";
class Twitch extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        this.callPlayer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callPlayer"];
        this.playerID = this.props.config.twitch.playerId || `${PLAYER_ID_PREFIX}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomString"])()}`;
        this.mute = ()=>{
            this.callPlayer("setMuted", true);
        };
        this.unmute = ()=>{
            this.callPlayer("setMuted", false);
        };
    }
    load(url, isReady) {
        const { playsinline, onError, config, controls } = this.props;
        const isChannel = MATCH_CHANNEL_URL.test(url);
        const id = isChannel ? url.match(MATCH_CHANNEL_URL)[1] : url.match(MATCH_VIDEO_URL)[1];
        if (isReady) {
            if (isChannel) {
                this.player.setChannel(id);
            } else {
                this.player.setVideo("v" + id);
            }
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSDK"])(SDK_URL, SDK_GLOBAL).then((Twitch2)=>{
            this.player = new Twitch2.Player(this.playerID, {
                video: isChannel ? "" : id,
                channel: isChannel ? id : "",
                height: "100%",
                width: "100%",
                playsinline,
                autoplay: this.props.playing,
                muted: this.props.muted,
                // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
                controls: isChannel ? true : controls,
                ...config.twitch.options
            });
            const { READY, PLAYING, PAUSE, ENDED, ONLINE, OFFLINE } = Twitch2.Player;
            this.player.addEventListener(READY, this.props.onReady);
            this.player.addEventListener(PLAYING, this.props.onPlay);
            this.player.addEventListener(PAUSE, this.props.onPause);
            this.player.addEventListener(ENDED, this.props.onEnded);
            this.player.addEventListener(ONLINE, this.props.onLoaded);
            this.player.addEventListener(OFFLINE, this.props.onLoaded);
        }, onError);
    }
    play() {
        this.callPlayer("play");
    }
    pause() {
        this.callPlayer("pause");
    }
    stop() {
        this.callPlayer("pause");
    }
    seekTo(seconds) {
        this.callPlayer("seek", seconds);
    }
    setVolume(fraction) {
        this.callPlayer("setVolume", fraction);
    }
    getDuration() {
        return this.callPlayer("getDuration");
    }
    getCurrentTime() {
        return this.callPlayer("getCurrentTime");
    }
    getSecondsLoaded() {
        return null;
    }
    render() {
        const style = {
            width: "100%",
            height: "100%"
        };
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style,
            id: this.playerID,
            loading: "lazy"
        });
    }
}
Twitch.displayName = "Twitch";
Twitch.canPlay = (url)=>MATCH_VIDEO_URL.test(url) || MATCH_CHANNEL_URL.test(url);
Twitch.loopOnEnded = true;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/vimeo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Vimeo",
    ()=>Vimeo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)");
;
;
const SDK_URL = "https://player.vimeo.com/api/player.js";
const SDK_GLOBAL = "Vimeo";
const MATCH_URL = /vimeo\.com\/.+/;
const MATCH_FILE_URL = /vimeo\.com\/external\/[0-9]+\..+/;
class Vimeo extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        this.callPlayer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callPlayer"];
        this.duration = null;
        this.currentTime = null;
        this.secondsLoaded = null;
        this.mute = ()=>{
            this.setVolume(0);
        };
        this.unmute = ()=>{
            if (this.props.volume !== null) {
                this.setVolume(this.props.volume);
            }
        };
        this.ref = (container)=>{
            this.container = container;
        };
    }
    load(url) {
        this.duration = null;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSDK"])(SDK_URL, SDK_GLOBAL).then((Vimeo2)=>{
            if (!this.container) {
                return;
            }
            this.player = new Vimeo2.Player(this.container, {
                url,
                autoplay: this.props.playing,
                muted: this.props.muted,
                loop: this.props.loop,
                playsinline: this.props.playsinline,
                controls: this.props.controls,
                ...this.props.config.vimeo.playerOptions
            });
            this.player.ready().then(()=>{
                const iframe = this.container.querySelector("iframe");
                iframe.style.width = "100%";
                iframe.style.height = "100%";
            }).catch(this.props.onError);
            this.player.on("loaded", ()=>{
                this.props.onReady();
                this.refreshDuration();
            });
            this.player.on("play", ()=>{
                this.props.onPlay();
                this.refreshDuration();
            });
            this.player.on("pause", this.props.onPause);
            this.player.on("seeked", (e)=>this.props.onSeek(e.seconds));
            this.player.on("ended", this.props.onEnded);
            this.player.on("error", this.props.onError);
            this.player.on("timeupdate", ({ seconds })=>{
                this.currentTime = seconds;
            });
            this.player.on("progress", ({ seconds })=>{
                this.secondsLoaded = seconds;
            });
        }, this.props.onError);
    }
    refreshDuration() {
        this.player.getDuration().then((duration)=>{
            this.duration = duration;
        });
    }
    play() {
        const promise = this.callPlayer("play");
        if (promise) {
            promise.catch(this.props.onError);
        }
    }
    pause() {
        this.callPlayer("pause");
    }
    stop() {
        this.callPlayer("unload");
    }
    seekTo(seconds) {
        this.callPlayer("setCurrentTime", seconds);
    }
    setVolume(fraction) {
        this.callPlayer("setVolume", fraction);
    }
    setLoop(loop) {
        this.callPlayer("setLoop", loop);
    }
    setPlaybackRate(rate) {
        this.callPlayer("setPlaybackRate", rate);
    }
    getDuration() {
        return this.duration;
    }
    getCurrentTime() {
        return this.currentTime;
    }
    getSecondsLoaded() {
        return this.secondsLoaded;
    }
    render() {
        const { display } = this.props;
        const style = {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display
        };
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            key: this.props.url,
            ref: this.ref,
            style
        });
    }
}
Vimeo.displayName = "Vimeo";
Vimeo.forceLoad = true;
// Prevent checking isLoading when URL changes
Vimeo.canPlay = (url)=>{
    if (MATCH_FILE_URL.test(url)) {
        return false;
    }
    return MATCH_URL.test(url);
};
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/wistia.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wistia",
    ()=>Wistia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)");
;
;
const SDK_URL = "https://fast.wistia.com/assets/external/E-v1.js";
const SDK_GLOBAL = "Wistia";
const MATCH_URL = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/;
class Wistia extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        this.callPlayer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callPlayer"];
        // Proxy methods to prevent listener leaks
        this.onPlay = (...args)=>this.props.onPlay(...args);
        this.onPause = (...args)=>this.props.onPause(...args);
        this.onSeek = (...args)=>this.props.onSeek(...args);
        this.onEnded = (...args)=>this.props.onEnded(...args);
        this.mute = ()=>{
            this.callPlayer("mute");
        };
        this.unmute = ()=>{
            this.callPlayer("unmute");
        };
    }
    getID(url) {
        return url && url.match(MATCH_URL)[1];
    }
    load(url) {
        const { playing, muted, controls, onReady, config, onError } = this.props;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSDK"])(SDK_URL, SDK_GLOBAL).then(()=>{
            window._wq = window._wq || [];
            window._wq.push({
                id: this.getID(url),
                options: {
                    autoPlay: playing,
                    silentAutoPlay: "allow",
                    muted,
                    controlsVisibleOnLoad: controls,
                    ...config.wistia.options
                },
                onReady: (player)=>{
                    this.player = player;
                    this.unbind();
                    this.player.bind("play", this.onPlay);
                    this.player.bind("pause", this.onPause);
                    this.player.bind("seek", this.onSeek);
                    this.player.bind("end", this.onEnded);
                    onReady();
                }
            });
        }, onError);
    }
    unbind() {
        this.player.unbind("play", this.onPlay);
        this.player.unbind("pause", this.onPause);
        this.player.unbind("seek", this.onSeek);
        this.player.unbind("end", this.onEnded);
    }
    play() {
        this.callPlayer("play");
    }
    pause() {
        this.callPlayer("pause");
    }
    stop() {
        this.unbind();
        this.callPlayer("remove");
    }
    seekTo(seconds) {
        this.callPlayer("time", seconds);
    }
    setVolume(fraction) {
        this.callPlayer("volume", fraction);
    }
    setPlaybackRate(rate) {
        this.callPlayer("playbackRate", rate);
    }
    getDuration() {
        return this.callPlayer("duration");
    }
    getCurrentTime() {
        return this.callPlayer("time");
    }
    getSecondsLoaded() {
        return null;
    }
    render() {
        const id = this.getID(this.props.url);
        const className = `wistia_embed wistia_async_${id}`;
        const style = {
            width: "100%",
            height: "100%"
        };
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            key: id,
            className,
            style
        });
    }
}
Wistia.displayName = "Wistia";
Wistia.canPlay = (url)=>MATCH_URL.test(url);
Wistia.loopOnEnded = true;
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/youtube.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YouTube",
    ()=>YouTube
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)");
;
;
const SDK_URL = "https://www.youtube.com/iframe_api";
const SDK_GLOBAL = "YT";
const SDK_GLOBAL_READY = "onYouTubeIframeAPIReady";
const MATCH_URL = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/;
const MATCH_PLAYLIST = /list=([a-zA-Z0-9_-]+)/;
function parsePlaylist(url) {
    if (MATCH_PLAYLIST.test(url)) {
        const [, playlistId] = url.match(MATCH_PLAYLIST);
        return {
            listType: "playlist",
            list: playlistId
        };
    }
    return {};
}
class YouTube extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        this.callPlayer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callPlayer"];
        this.onStateChange = ({ data })=>{
            const { onPlay, onPause, onBuffer, onBufferEnd, onEnded, onReady, loop } = this.props;
            const { PLAYING, PAUSED, BUFFERING, ENDED, CUED } = window[SDK_GLOBAL].PlayerState;
            if (data === PLAYING) {
                onPlay();
                onBufferEnd();
            }
            if (data === PAUSED) {
                onPause();
            }
            if (data === BUFFERING) {
                onBuffer();
            }
            if (data === ENDED) {
                const isPlaylist = !!this.callPlayer("getPlaylist");
                if (loop && !isPlaylist) {
                    this.play();
                }
                onEnded();
            }
            if (data === CUED) {
                onReady();
            }
        };
        this.mute = ()=>{
            this.callPlayer("mute");
        };
        this.unmute = ()=>{
            this.callPlayer("unMute");
        };
        this.ref = (container)=>{
            this.container = container;
        };
    }
    load(url, isReady) {
        const { playing, muted, playsinline, controls, loop, config, onError } = this.props;
        const { playerVars, embedOptions } = config.youtube;
        const id = url && url.match(MATCH_URL)[1];
        if (isReady) {
            if (MATCH_PLAYLIST.test(url)) {
                this.player.loadPlaylist(parsePlaylist(url));
                return;
            }
            this.player.cueVideoById?.({
                videoId: id,
                startSeconds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStartTime"])(url) || playerVars.start,
                endSeconds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEndTime"])(url) || playerVars.end
            });
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSDK"])(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, (YT)=>YT.loaded).then((YT)=>{
            if (!this.container) {
                return;
            }
            this.player = new YT.Player(this.container, {
                width: "100%",
                height: "100%",
                videoId: id,
                playerVars: {
                    autoplay: playing ? 1 : 0,
                    mute: muted ? 1 : 0,
                    controls: controls ? 1 : 0,
                    start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStartTime"])(url),
                    end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEndTime"])(url),
                    origin: window.location.origin,
                    playsinline,
                    ...parsePlaylist(url),
                    ...playerVars
                },
                events: {
                    onReady: ()=>{
                        if (loop) {
                            this.player.setLoop(true);
                        }
                        this.props.onReady();
                    },
                    onStateChange: this.onStateChange,
                    onError: (event)=>onError(event.data)
                },
                ...embedOptions
            });
        }, onError);
    }
    play() {
        this.callPlayer("playVideo");
    }
    pause() {
        this.callPlayer("pauseVideo");
    }
    stop() {
        if (!document.body.contains(this.callPlayer("getIframe"))) {
            return;
        }
        this.callPlayer("stopVideo");
    }
    seekTo(amount) {
        this.callPlayer("seekTo", amount);
        if (!this.props.playing) {
            this.pause();
        }
    }
    setVolume(fraction) {
        this.callPlayer("setVolume", fraction * 100);
    }
    setPlaybackRate(rate) {
        this.callPlayer("setPlaybackRate", rate);
    }
    setLoop(loop) {
        this.callPlayer("setLoop", loop);
    }
    getDuration() {
        return this.callPlayer("getDuration");
    }
    getCurrentTime() {
        return this.callPlayer("getCurrentTime");
    }
    getSecondsLoaded() {
        return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
    }
    render() {
        const { display } = this.props;
        const style = {
            width: "100%",
            height: "100%",
            display
        };
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: this.ref,
            loading: "lazy"
        }));
    }
}
YouTube.displayName = "YouTube";
YouTube.canPlay = (url)=>MATCH_URL.test(url);
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "players",
    ()=>players
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$dailymotion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/dailymotion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/facebook.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$file$2d$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/file-player.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$mixcloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/mixcloud.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$soundcloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/soundcloud.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$streamable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/streamable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$twitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/twitch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$vimeo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/vimeo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$wistia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/wistia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/youtube.js [app-client] (ecmascript)");
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
const players = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YouTube"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$soundcloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SoundCloud"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$vimeo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vimeo"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Facebook"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$streamable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Streamable"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$wistia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wistia"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$twitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Twitch"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$dailymotion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DailyMotion"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$mixcloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mixcloud"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$file$2d$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilePlayer"]
];
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/preload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderPreloadPlayers",
    ()=>renderPreloadPlayers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/player.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$dailymotion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/dailymotion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$soundcloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/soundcloud.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$vimeo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/vimeo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/youtube.js [app-client] (ecmascript)");
;
;
;
;
;
;
const PRELOAD_PLAYERS = [
    {
        Player: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YouTube"],
        configKey: "youtube",
        url: "https://www.youtube.com/watch?v=GlCmAC4MHek"
    },
    {
        Player: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$soundcloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SoundCloud"],
        configKey: "soundcloud",
        url: "https://soundcloud.com/seucheu/john-cage-433-8-bit-version"
    },
    {
        Player: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$vimeo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vimeo"],
        configKey: "vimeo",
        url: "https://vimeo.com/300970506"
    },
    {
        Player: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$dailymotion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DailyMotion"],
        configKey: "dailymotion",
        url: "http://www.dailymotion.com/video/xqdpyk"
    }
];
function renderPreloadPlayers(url, controls, config) {
    const players = [];
    for (const player of PRELOAD_PLAYERS){
        if (!player.Player.canPlay(url) && config[player.configKey].preload) {
            players.push(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Player"], {
                key: player.Player.displayName,
                activePlayer: player.Player,
                url: player.url,
                controls,
                playing: true,
                muted: true,
                display: "none"
            }));
        }
    }
    return players;
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/preview.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Preview",
    ()=>Preview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ICON_SIZE = "64px";
class Preview extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.mounted = false;
        this.state = {
            image: typeof props.light === "string" ? props.light : null,
            // null = orientation unknown → default to `cover` (see render). Set once the
            // poster's natural dimensions are known so portrait frames use `contain`.
            isPortrait: null
        };
    }
    componentDidMount() {
        this.mounted = true;
        this.fetchImage(this.props);
    }
    componentDidUpdate(prevProps) {
        const { url, light } = this.props;
        if (prevProps.url !== url || prevProps.light !== light) {
            this.fetchImage(this.props);
        }
    }
    componentWillUnmount() {
        this.mounted = false;
    }
    fetchImage({ url, light }) {
        if (typeof light === "string") {
            this.setState({
                image: light,
                isPortrait: null
            });
            this.detectOrientation(light);
            return;
        }
        this.setState({
            image: null,
            isPortrait: null
        });
        return window.fetch(`https://noembed.com/embed?url=${url}`).then((response)=>response.json()).then((data)=>{
            if (data.thumbnail_url && this.mounted) {
                const image = data.thumbnail_url.replace("height=100", "height=480");
                this.setState({
                    image
                });
                this.detectOrientation(image);
            }
        });
    }
    // Probe the poster's intrinsic dimensions so a portrait frame can be shown in
    // full (`contain`) instead of upscaled-and-cropped by `cover` inside the fixed
    // 16:9 box. Reuses the same URL the CSS background loads, so the browser cache
    // dedupes the request.
    detectOrientation(src) {
        if (typeof window === "undefined" || typeof Image === "undefined" || !src) {
            return;
        }
        const probe = new Image();
        probe.onload = ()=>{
            if (this.mounted) {
                this.setState({
                    isPortrait: probe.naturalHeight > probe.naturalWidth
                });
            }
        };
        probe.src = src;
    }
    render() {
        const { onClick, playIcon, previewTabIndex, previewAriaLabel } = this.props;
        const { image, isPortrait } = this.state;
        const flexCenter = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
        const styles = {
            preview: {
                width: "100%",
                height: "100%",
                backgroundImage: image ? `url(${image.startsWith("data:") ? `"${image}"` : image})` : void 0,
                // Portrait posters fit whole (with letterbox bars) so they aren't
                // upscaled-and-cropped; landscape/square/unknown keep filling the box.
                backgroundSize: isPortrait ? "contain" : "cover",
                backgroundPosition: "center",
                // `contain` can leave the poster smaller than the box, so stop it tiling
                // into the gaps (no effect when `cover` fills the box).
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
                border: "none",
                padding: 0,
                ...flexCenter
            },
            shadow: {
                background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                borderRadius: ICON_SIZE,
                width: ICON_SIZE,
                height: ICON_SIZE,
                ...flexCenter
            },
            playIcon: {
                borderStyle: "solid",
                borderWidth: "16px 0 16px 26px",
                borderColor: "transparent transparent transparent white",
                marginLeft: "7px"
            }
        };
        const defaultPlayIcon = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style: styles.shadow,
            className: "react-player__shadow"
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style: styles.playIcon,
            className: "react-player__play-icon"
        }));
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            type: "button",
            style: styles.preview,
            className: "react-player__preview",
            onClick,
            tabIndex: previewTabIndex,
            ...previewAriaLabel ? {
                "aria-label": previewAriaLabel
            } : {}
        }, playIcon || defaultPlayIcon);
    }
}
;
}),
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/react-player.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactPlayer",
    ()=>ReactPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/next@16.2.6_@babel+core@7.2_40a7effce8bcad24669d45809ebe449e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/player.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$file$2d$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/file-player.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/players/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$preload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/preload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$preview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/preview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.10.1_@babel+c_9bce69c65afcd4f142ef19eac60785d5/node_modules/@wix/ricos/dist/es/wix-react-player/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
let customPlayers = [];
class ReactPlayer extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(props){
        super(props);
        this.handleClickPreview = ()=>{
            this.setState({
                showPreview: false
            });
        };
        this.showPreview = ()=>{
            this.setState({
                showPreview: true
            });
        };
        this.getDuration = ()=>{
            if (!this.player) {
                return null;
            }
            return this.player.getDuration();
        };
        this.getCurrentTime = ()=>{
            if (!this.player) {
                return null;
            }
            return this.player.getCurrentTime();
        };
        this.getSecondsLoaded = ()=>{
            if (!this.player) {
                return null;
            }
            return this.player.getSecondsLoaded();
        };
        this.getInternalPlayer = (key = "player")=>{
            if (!this.player) {
                return null;
            }
            return this.player.getInternalPlayer(key);
        };
        this.seekTo = (fraction, type)=>{
            if (!this.player) {
                return null;
            }
            this.player.seekTo(fraction, type);
        };
        this.handleReady = ()=>{
            this.props.onReady?.();
        };
        this.wrapperRef = (wrapper)=>{
            this.wrapper = wrapper;
        };
        this.activePlayerRef = (player)=>{
            this.player = player;
        };
        this.config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])(props, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultProps"], true);
        this.state = {
            showPreview: !!props.light
        };
    }
    componentDidMount() {
        if (this.props.progressFrequency) {
            const message = "ReactPlayer: %cprogressFrequency%c is deprecated, please use %cprogressInterval%c instead";
            console.warn(message, "font-weight: bold", "", "font-weight: bold", "");
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEqual"])(this.props, nextProps) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEqual"])(this.state, nextState);
    }
    componentDidUpdate(prevProps) {
        const { light } = this.props;
        this.config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])(this.props, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultProps"]);
        if (!prevProps.light && light) {
            this.setState({
                showPreview: true
            });
        }
        if (prevProps.light && !light) {
            this.setState({
                showPreview: false
            });
        }
    }
    getActivePlayer(url) {
        const allPlayers = [
            ...customPlayers,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["players"]
        ];
        for (const Player2 of allPlayers){
            if (Player2.canPlay(url)) {
                return Player2;
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$file$2d$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilePlayer"];
    }
    renderActivePlayer(url, activePlayer) {
        if (!url) {
            return null;
        }
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Player"], {
            ...this.props,
            key: activePlayer.displayName,
            ref: this.activePlayerRef,
            config: this.config,
            activePlayer,
            onReady: this.handleReady
        });
    }
    sortPlayers(a, b) {
        if (a && b) {
            return a.key < b.key ? -1 : 1;
        }
        return 0;
    }
    render() {
        const { url, controls, style, width, height, light, playIcon, wrapper: Wrapper, previewTabIndex, previewAriaLabel } = this.props;
        const showPreview = this.state.showPreview && url;
        const otherProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omit"])(this.props, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_PROPS"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPRECATED_CONFIG_PROPS"]);
        const activePlayer = this.getActivePlayer(url);
        const renderedActivePlayer = this.renderActivePlayer(url, activePlayer);
        const preloadPlayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$preload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPreloadPlayers"])(url, controls, this.config);
        const players2 = [
            renderedActivePlayer,
            ...preloadPlayers
        ].sort(this.sortPlayers);
        const preview = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$preview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Preview"], {
            url,
            light,
            playIcon,
            onClick: this.handleClickPreview,
            previewTabIndex,
            previewAriaLabel
        });
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$2_40a7effce8bcad24669d45809ebe449e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Wrapper, {
            ref: this.wrapperRef,
            style: {
                ...style,
                width,
                height
            },
            ...otherProps
        }, showPreview ? preview : players2);
    }
}
ReactPlayer.addCustomPlayer = (player)=>{
    customPlayers.push(player);
};
ReactPlayer.removeCustomPlayers = ()=>{
    customPlayers = [];
};
ReactPlayer.displayName = "ReactPlayer";
ReactPlayer.defaultProps = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultProps"];
ReactPlayer.canPlay = (url)=>{
    const allPlayers = [
        ...customPlayers,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["players"]
    ];
    for (const Player2 of allPlayers){
        if (Player2.canPlay(url)) {
            return true;
        }
    }
    return false;
};
ReactPlayer.canEnablePIP = (url)=>{
    const allPlayers = [
        ...customPlayers,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Github$2f$ptsl$2d$2026$2f$node_modules$2f2e$pnpm$2f40$wix$2b$ricos$40$11$2e$10$2e$1_$40$babel$2b$c_9bce69c65afcd4f142ef19eac60785d5$2f$node_modules$2f40$wix$2f$ricos$2f$dist$2f$es$2f$wix$2d$react$2d$player$2f$players$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["players"]
    ];
    for (const Player2 of allPlayers){
        if (Player2.canEnablePIP && Player2.canEnablePIP(url)) {
            return true;
        }
    }
    return false;
};
;
}),
]);

//# sourceMappingURL=0uxm_%40wix_ricos_dist_es_wix-react-player_0z.6sx~._.js.map