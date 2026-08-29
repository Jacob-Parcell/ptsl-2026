(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Github/ptsl-2026/node_modules/.pnpm/@wix+ricos@11.11.2_@babel+c_967d2a9d5f0144a013b2d9a49aefa898/node_modules/@wix/ricos/dist/es/bundled-dependencies/wix-web-bi-logger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "webBiLogger",
    ()=>webBiLogger
]);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod)=>function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
// ../../node_modules/@wix/wix-bi-logger-client/dist/assert.js
var require_assert = __commonJS({
    "../../node_modules/@wix/wix-bi-logger-client/dist/assert.js" (exports, module) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self2, call) {
            if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self2;
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
        var AssertionError = function(_Error) {
            _inherits(AssertionError2, _Error);
            function AssertionError2(message) {
                _classCallCheck(this, AssertionError2);
                var _this = _possibleConstructorReturn(this, (AssertionError2.__proto__ || Object.getPrototypeOf(AssertionError2)).call(this, message));
                _this.name = _this.constructor.name;
                return _this;
            }
            return AssertionError2;
        }(Error);
        function assertDefined(target, message) {
            if (target === void 0) {
                throw new AssertionError(message);
            }
        }
        function assertObject(target, message) {
            if (target !== void 0 && ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" || Array.isArray(target) || target === null)) {
                throw new AssertionError(message);
            }
        }
        function assertOk(target, message) {
            if (!target) {
                throw new AssertionError(message);
            }
        }
        function assertFunc(target, message) {
            if (target !== void 0 && typeof target !== "function") {
                throw new AssertionError(message);
            }
        }
        function assertBoolean(target, message) {
            if (target !== void 0 && typeof target !== "boolean") {
                throw new AssertionError(message);
            }
        }
        function assertNumber(target, message) {
            if (target !== void 0 && typeof target !== "number") {
                throw new AssertionError(message);
            }
        }
        function assertArray(target, message) {
            if (typeof Array.isArray === "function") {
                if (!Array.isArray(target)) {
                    throw new AssertionError(message);
                }
            } else if (Object.prototype.toString.call(target) !== "[object Array]") {
                throw new AssertionError(message);
            }
        }
        module.exports.defined = assertDefined;
        module.exports.object = assertObject;
        module.exports.ok = assertOk;
        module.exports.func = assertFunc;
        module.exports.boolean = assertBoolean;
        module.exports.number = assertNumber;
        module.exports.array = assertArray;
        module.exports.AssertionError = AssertionError;
    }
});
// ../../node_modules/@wix/wix-bi-logger-client/dist/utils/collections.js
var require_collections = __commonJS({
    "../../node_modules/@wix/wix-bi-logger-client/dist/utils/collections.js" (exports, module) {
        "use strict";
        module.exports.mapValues = function(collection, iteratee) {
            if (!collection) {
                return {};
            }
            return Object.keys(collection).reduce(function(acc, key) {
                acc[key] = iteratee(collection[key], key, collection);
                return acc;
            }, {});
        };
        module.exports.filterValues = function(collection, iteratee) {
            if (!collection) {
                return {};
            }
            return Object.keys(collection).reduce(function(acc, key) {
                var keep = iteratee(collection[key], key, collection);
                if (keep) {
                    acc[key] = collection[key];
                }
                return acc;
            }, {});
        };
    }
});
// ../../node_modules/@wix/wix-bi-logger-client/dist/utils/promise.js
var require_promise = __commonJS({
    "../../node_modules/@wix/wix-bi-logger-client/dist/utils/promise.js" (exports, module) {
        "use strict";
        module.exports.timedPromise = function(promise, _ref) {
            var message = _ref.message, timeout = _ref.timeout;
            var timeoutPromise = new Promise(function(resolve, reject) {
                setTimeout(reject, timeout, message ? "Timeout: " + message : "Timeout");
            });
            return Promise.race([
                promise,
                timeoutPromise
            ]);
        };
        module.exports.allAsObject = function(promiseObject) {
            var keys = Object.keys(promiseObject);
            return Promise.all(keys.map(function(key) {
                return promiseObject[key];
            })).then(function(resolved) {
                return resolved.reduce(function(acc, value, i) {
                    acc[keys[i]] = value;
                    return acc;
                }, {});
            });
        };
    }
});
// ../../node_modules/@wix/wix-bi-logger-client/dist/utils/log.js
var require_log = __commonJS({
    "../../node_modules/@wix/wix-bi-logger-client/dist/utils/log.js" (exports, module) {
        "use strict";
        module.exports = {
            error: function error() {
                if (console && console.error) {
                    var _console;
                    (_console = console).error.apply(_console, arguments);
                }
            }
        };
    }
});
// ../../node_modules/@wix/wix-bi-logger-client/dist/utils/debounce.js
var require_debounce = __commonJS({
    "../../node_modules/@wix/wix-bi-logger-client/dist/utils/debounce.js" (exports, module) {
        "use strict";
        function debounce(func, wait, immediate) {
            var timeout = void 0;
            return function() {
                var context = this;
                var args = arguments;
                var later = function later2() {
                    timeout = null;
                    if (!immediate) {
                        func.apply(context, args);
                    }
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) {
                    func.apply(context, args);
                }
            };
        }
        module.exports = debounce;
    }
});
// ../../node_modules/@wix/wix-bi-logger-client/dist/utils/throttle.js
var require_throttle = __commonJS({
    "../../node_modules/@wix/wix-bi-logger-client/dist/utils/throttle.js" (exports, module) {
        "use strict";
        function throttle(func, wait) {
            var timeout = void 0;
            return function() {
                for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                if (!timeout) {
                    timeout = setTimeout(function() {
                        func.apply(void 0, args);
                        timeout = null;
                    }, wait);
                }
            };
        }
        module.exports = throttle;
    }
});
// ../../node_modules/@wix/wix-bi-logger-client/dist/utils/batch-queue.js
var require_batch_queue = __commonJS({
    "../../node_modules/@wix/wix-bi-logger-client/dist/utils/batch-queue.js" (exports, module) {
        "use strict";
        var _createClass = /* @__PURE__ */ function() {
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
        var _slicedToArray = /* @__PURE__ */ function() {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                    for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally{
                    try {
                        if (!_n && _i["return"]) _i["return"]();
                    } finally{
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            return function(arr, i) {
                if (Array.isArray(arr)) {
                    return arr;
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
            };
        }();
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
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var debounce = require_debounce();
        var throttle = require_throttle();
        var createEvent = function createEvent2(event, context, startTime) {
            return {
                dt: Date.now() - startTime,
                f: event,
                context
            };
        };
        var createBatch = function createBatch2(events, startTime) {
            return {
                dt: Date.now() - startTime,
                e: events,
                g: {}
            };
        };
        var optimizeBatch = function optimizeBatch2(batch) {
            var fieldCounts = {};
            var batchLen = batch.e.length;
            var events = batch.e.map(function(event) {
                var fields = Object.keys(event.f).map(function(field) {
                    var value = event.f[field];
                    var key = field + "|" + value;
                    fieldCounts[key] = fieldCounts[key] || 0;
                    fieldCounts[key]++;
                    return [
                        field,
                        value,
                        key
                    ];
                });
                return _extends({}, event, {
                    f: fields
                });
            });
            var globalFields = {};
            events = events.map(function(event) {
                var fields = event.f.reduce(function(res, _ref) {
                    var _ref2 = _slicedToArray(_ref, 3), field = _ref2[0], value = _ref2[1], key = _ref2[2];
                    if (fieldCounts[key] === batchLen) {
                        globalFields[field] = value;
                    } else {
                        res[field] = value;
                    }
                    return res;
                }, {});
                return _extends({}, event, {
                    f: fields
                });
            });
            return _extends({}, batch, {
                e: events,
                g: globalFields
            });
        };
        var BatchQueue = function() {
            function BatchQueue2() {
                _classCallCheck(this, BatchQueue2);
                this._initilized = false;
            }
            _createClass(BatchQueue2, [
                {
                    key: "_reset",
                    value: function _reset() {
                        var _this = this;
                        this._startTime = Date.now();
                        this._resolve = null;
                        this._promise = new Promise(function(resolve) {
                            return _this._resolve = resolve;
                        });
                    }
                },
                {
                    key: "init",
                    value: function init(_ref3, flushHandler) {
                        var _this2 = this;
                        var delayMs = _ref3.delayMs, maxBatchSize = _ref3.maxBatchSize, useThrottle = _ref3.useThrottle, optimizeBatch2 = _ref3.optimizeBatch;
                        if (this._initilized) {
                            return;
                        }
                        this._maxBatchSize = maxBatchSize;
                        this._optimizeBatch = optimizeBatch2;
                        this._queue = [];
                        this._flushHandler = flushHandler;
                        this._flushDebounced = useThrottle ? throttle(function() {
                            return _this2.flush();
                        }, delayMs) : debounce(function() {
                            return _this2.flush();
                        }, delayMs);
                        this._initilized = true;
                        this._reset();
                    }
                },
                {
                    key: "flush",
                    value: function flush() {
                        if (!this._queue.length) {
                            return Promise.resolve();
                        }
                        var events = this._queue.splice(0, this._queue.length);
                        var resolve = this._resolve;
                        var startTime = this._startTime;
                        this._reset();
                        var batch = createBatch(events, startTime);
                        if (this._optimizeBatch) {
                            batch = optimizeBatch(batch);
                        }
                        return this._flushHandler(batch).then(resolve);
                    }
                },
                {
                    key: "feed",
                    value: function feed(event, context) {
                        this._queue.push(createEvent(event, context, this._startTime));
                        if (this._queue.length === this._maxBatchSize) {
                            return this.flush();
                        }
                        this._flushDebounced();
                        return this._promise;
                    }
                }
            ]);
            return BatchQueue2;
        }();
        module.exports = BatchQueue;
    }
});
// ../../node_modules/@wix/wix-bi-logger-client/dist/consent-policy.js
var require_consent_policy = __commonJS({
    "../../node_modules/@wix/wix-bi-logger-client/dist/consent-policy.js" (exports, module) {
        "use strict";
        var DefaultConsentPolicy = {
            functional: true,
            analytics: true,
            __default: true
        };
        var getPolicy = function getPolicy2(consentPolicyGetter) {
            return typeof consentPolicyGetter === "function" && consentPolicyGetter() || DefaultConsentPolicy;
        };
        var shouldMuteNonEssentials = function shouldMuteNonEssentials2(policy) {
            return policy.functional === false || policy.analytics === false;
        };
        var shouldMuteByCategory = function shouldMuteByCategory2(policy, category) {
            if (category === "essential") {
                return false;
            }
            if (category === "functional" || category === "analytics") {
                return policy[category] === false;
            }
            return shouldMuteNonEssentials(policy);
        };
        module.exports = {
            shouldMuteNonEssentials,
            shouldMuteByCategory,
            getPolicy
        };
    }
});
// ../../node_modules/@wix/wix-bi-logger-client/dist/bi-logger.js
var require_bi_logger = __commonJS({
    "../../node_modules/@wix/wix-bi-logger-client/dist/bi-logger.js" (exports, module) {
        "use strict";
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
        var _createClass = /* @__PURE__ */ function() {
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
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for(var i in obj){
                if (keys.indexOf(i) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                target[i] = obj[i];
            }
            return target;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var assert = require_assert();
        var _require = require_collections();
        var mapValues = _require.mapValues;
        var filterValues = _require.filterValues;
        var promise = require_promise();
        var log = require_log();
        var BatchQueue = require_batch_queue();
        var _require2 = require_consent_policy();
        var shouldMuteByCategory = _require2.shouldMuteByCategory;
        var shouldMuteNonEssentials = _require2.shouldMuteNonEssentials;
        var getPolicy = _require2.getPolicy;
        var BiLogger = function() {
            function BiLogger2(options, context) {
                _classCallCheck(this, BiLogger2);
                this._publishers = options.publishers;
                this._validators = options.validators || [];
                this._defaults = options.defaults;
                this._ownDefaults = {};
                this._events = options.events || {};
                this._context = context || {};
                this._defaultValueTimeout = options.defaultValueTimeout || 5e3;
                this._defaultContinueOnFail = options.defaultContinueOnFail || false;
                this._onPublisherFailHandler = options.onPublisherFailHandler || BiLogger2._defaultPublisherFailHandler;
                this._isMuted = options.isMuted || function() {
                    return false;
                };
                this._eventTransformer = options.eventTransformer || function(event) {
                    return event;
                };
                this._payloadTransformer = options.payloadTransformer || function(payload) {
                    return payload;
                };
                this._consentPolicyGetter = options.consentPolicyGetter || function() {
                    return null;
                };
                this._nonEssentialDefaults = options.nonEssentialDefaults || {};
                this._maxBatchSize = options.maxBatchSize || 100;
                this._globalBatchQueue = options.globalBatchQueue;
            }
            _createClass(BiLogger2, [
                {
                    key: "report",
                    value: function report(data) {
                        assert.defined(data, "Data must be provided");
                        assert.object(data, "Data must be an object");
                        var src = data.src, evid = data.evid, params = data.params, context = _objectWithoutProperties(data, [
                            "src",
                            "evid",
                            "params"
                        ]);
                        return this.log(_extends({
                            src,
                            evid
                        }, params), context);
                    }
                },
                {
                    key: "log",
                    value: function log2(eventOrKey, eventOrContextOrUndefined, contextOrUndefined) {
                        var _this = this;
                        assert.defined(eventOrKey, "Event object or event key must be provided.");
                        var _extractEventAndConte = this._extractEventAndContext(eventOrKey, eventOrContextOrUndefined, contextOrUndefined), event = _extractEventAndConte.event, context = _extractEventAndConte.context;
                        var policy = getPolicy(this._consentPolicyGetter);
                        var fullContext = _extends({}, this._context, context);
                        if (this._isMuted() || shouldMuteByCategory(policy, fullContext.category)) {
                            return Promise.resolve();
                        }
                        if (fullContext.useBatch) {
                            var queue = this._initQueue(fullContext, policy);
                            var transformAndQueue = function transformAndQueue2(_event) {
                                var transformedEvent = _this._eventTransformer(_event, fullContext);
                                return queue.feed(transformedEvent, fullContext);
                            };
                            if (this._globalBatchQueue) {
                                return this._getDefaults(this._defaults).then(function(defaults) {
                                    var fullEvent2 = _extends({}, defaults, _this._getDynamicNonEssentialDefaults(policy), _this._getStaticNonEssentialDefaults(policy), event, _this._getPolicyFields(policy, fullContext.category));
                                    return transformAndQueue(fullEvent2);
                                });
                            } else {
                                var fullEvent = _extends({}, this._getDynamicDefaults(this._defaults), this._getDynamicNonEssentialDefaults(policy), event, this._getPolicyFields(policy, fullContext.category));
                                return transformAndQueue(fullEvent);
                            }
                        }
                        return this._getDefaults(this._defaults).then(function(defaults) {
                            var fullEvent2 = Object.assign(defaults, _this._getDynamicNonEssentialDefaults(policy), _this._getStaticNonEssentialDefaults(policy), event, _this._getPolicyFields(policy, fullContext.category));
                            var validatorsResult = _this._validators.length === 0 ? true : _this._validators.some(function(validator) {
                                return validator.match(fullEvent2) && (validator.execute(fullEvent2) || true);
                            });
                            if (!validatorsResult) {
                                throw new Error("No validator accepted the event. Source: " + fullEvent2.src + " Evid: " + (fullEvent2.evid || fullEvent2.evtId));
                            }
                            var transformedEvent = _this._eventTransformer(fullEvent2, fullContext);
                            transformedEvent = _this._payloadTransformer(transformedEvent, fullContext);
                            return _this._send(transformedEvent, fullContext);
                        });
                    }
                },
                {
                    key: "flush",
                    value: function flush() {
                        if (!this._queue) {
                            return Promise.resolve();
                        }
                        return this._queue.flush();
                    }
                },
                {
                    key: "updateDefaults",
                    value: function updateDefaults(defaults) {
                        assert.defined(defaults, "Defaults must be provided");
                        assert.object(defaults, "Defaults must be an object");
                        Object.assign(this._ownDefaults, defaults);
                        return this;
                    }
                },
                {
                    key: "_send",
                    value: function _send(payload) {
                        var _this2 = this;
                        var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        return Promise.all(this._publishers.map(function(publisher) {
                            var cloned = _extends({}, payload);
                            return Promise.resolve().then(function() {
                                return publisher(cloned, context);
                            }).catch(function(error) {
                                return _this2._onPublisherFailHandler(error, {
                                    publisherName: publisher.name,
                                    payload
                                });
                            });
                        })).then(function() {
                            return void 0;
                        });
                    }
                },
                {
                    key: "_extractEventAndContext",
                    value: function _extractEventAndContext(eventOrKey, eventOrContextOrUndefined, contextOrUndefined) {
                        var event = void 0;
                        var context = {};
                        if (typeof eventOrKey !== "string") {
                            event = eventOrKey;
                            context = eventOrContextOrUndefined || context;
                        } else {
                            event = this._events[eventOrKey];
                            if (!event) {
                                throw new assert.AssertionError("Event with key '" + eventOrKey + "' not found in event map.");
                            }
                            if (eventOrContextOrUndefined) {
                                event = _extends({}, event, eventOrContextOrUndefined);
                                context = contextOrUndefined || context;
                            }
                        }
                        return {
                            event,
                            context
                        };
                    }
                },
                {
                    key: "_initQueue",
                    value: function _initQueue(context, policy) {
                        var _this3 = this;
                        if (this._queue) {
                            return this._queue;
                        }
                        this._queue = this._globalBatchQueue || new BatchQueue();
                        var onFlush = function onFlush2(batch) {
                            if (!_this3._globalBatchQueue) {
                                batch.g = Object.assign(_this3._getStaticDefaults(_this3._defaults), _this3._getStaticNonEssentialDefaults(policy));
                            }
                            var transformedPayload = _this3._payloadTransformer(batch, context);
                            return _this3._send(transformedPayload, context);
                        };
                        this._queue.init({
                            delayMs: context.useBatch === true ? 300 : context.useBatch,
                            maxBatchSize: this._maxBatchSize,
                            useThrottle: !!this._globalBatchQueue,
                            optimizeBatch: !!this._globalBatchQueue
                        }, onFlush);
                        return this._queue;
                    }
                },
                {
                    key: "_handleDefaultsError",
                    value: function _handleDefaultsError(err) {
                        if (this._defaultContinueOnFail) {
                            log.error(err);
                            return null;
                        }
                        return Promise.reject(err);
                    }
                },
                {
                    key: "_getDynamicNonEssentialDefaults",
                    value: function _getDynamicNonEssentialDefaults(policy) {
                        if (!shouldMuteNonEssentials(policy)) {
                            return this._getDynamicDefaults(this._nonEssentialDefaults);
                        }
                    }
                },
                {
                    key: "_getStaticNonEssentialDefaults",
                    value: function _getStaticNonEssentialDefaults(policy) {
                        if (!shouldMuteNonEssentials(policy)) {
                            return this._getStaticDefaults(this._nonEssentialDefaults);
                        }
                    }
                },
                {
                    key: "_withOwnDefaults",
                    value: function _withOwnDefaults(defaults) {
                        return Object.assign({}, defaults, this._ownDefaults);
                    }
                },
                {
                    key: "_getDynamicDefaults",
                    value: function _getDynamicDefaults(defaults) {
                        defaults = this._withOwnDefaults(defaults);
                        var dynamicDefaults = filterValues(defaults, function(v) {
                            return typeof v === "function";
                        });
                        return mapValues(dynamicDefaults, function(v) {
                            return v();
                        });
                    }
                },
                {
                    key: "_getStaticDefaults",
                    value: function _getStaticDefaults(defaults) {
                        defaults = this._withOwnDefaults(defaults);
                        var staticDefaults = filterValues(defaults, function(v) {
                            return typeof v !== "function";
                        });
                        return staticDefaults;
                    }
                },
                {
                    key: "_getDefaults",
                    value: function _getDefaults(defaults) {
                        var _this4 = this;
                        defaults = this._withOwnDefaults(defaults);
                        if (!defaults) {
                            return Promise.resolve({});
                        }
                        var promises = mapValues(defaults, function(value, key) {
                            if (typeof value === "function") {
                                try {
                                    value = value();
                                } catch (err) {
                                    return _this4._handleDefaultsError(err);
                                }
                            }
                            if (value && typeof value.then === "function") {
                                return promise.timedPromise(value, {
                                    message: "Cannot get default value '" + key + " for BI Event'",
                                    timeout: _this4._defaultValueTimeout
                                }).catch(function(err) {
                                    return _this4._handleDefaultsError(err);
                                });
                            }
                            return value;
                        });
                        return promise.allAsObject(promises);
                    }
                },
                {
                    key: "_encodePolicyValue",
                    value: function _encodePolicyValue(policy, key) {
                        if (!policy) {
                            return 1;
                        }
                        if (typeof policy[key] === "boolean") {
                            return policy[key] ? 1 : 0;
                        }
                        return policy[key];
                    }
                },
                {
                    key: "_getPolicyFields",
                    value: function _getPolicyFields(policy, category) {
                        return {
                            _isca: this._encodePolicyValue(policy, "analytics"),
                            _iscf: this._encodePolicyValue(policy, "functional"),
                            _ispd: policy.__default ? 1 : 0,
                            _ise: category === "essential" ? 1 : 0
                        };
                    }
                }
            ], [
                {
                    key: "_defaultPublisherFailHandler",
                    value: function _defaultPublisherFailHandler(error, _ref) {
                        var publisherName = _ref.publisherName;
                        return publisherName;
                    }
                }
            ]);
            return BiLogger2;
        }();
        module.exports = BiLogger;
    }
});
// ../../node_modules/@wix/wix-bi-logger-client/dist/bi-logger-manager.js
var require_bi_logger_manager = __commonJS({
    "../../node_modules/@wix/wix-bi-logger-client/dist/bi-logger-manager.js" (exports, module) {
        "use strict";
        var _createClass = /* @__PURE__ */ function() {
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
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var assert = require_assert();
        var BiLoggerManager = function() {
            function BiLoggerManager2() {
                _classCallCheck(this, BiLoggerManager2);
                this.reset();
            }
            _createClass(BiLoggerManager2, [
                {
                    key: "reset",
                    value: function reset() {
                        this._handlers = [];
                    }
                },
                {
                    key: "onLoggerCreated",
                    value: function onLoggerCreated(handler) {
                        var _this = this;
                        assert.defined(handler, "Handler must be provided.");
                        assert.func(handler, "Handler must be a function.");
                        this._handlers.push(handler);
                        return function() {
                            var index = _this._handlers.indexOf(handler);
                            if (index !== -1) {
                                _this._handlers.splice(index, 1);
                            }
                        };
                    }
                },
                {
                    key: "notifyLoggerCreated",
                    value: function notifyLoggerCreated(logger) {
                        this._handlers.forEach(function(handler) {
                            return handler(logger);
                        });
                    }
                }
            ]);
            return BiLoggerManager2;
        }();
        module.exports = {
            manager: new BiLoggerManager(),
            BiLoggerManager
        };
    }
});
// ../../node_modules/@wix/wix-bi-logger-client/dist/bi-logger-factory.js
var require_bi_logger_factory = __commonJS({
    "../../node_modules/@wix/wix-bi-logger-client/dist/bi-logger-factory.js" (exports, module) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _createClass = /* @__PURE__ */ function() {
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
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var assert = require_assert();
        var BiLogger = require_bi_logger();
        var biLoggerManager = require_bi_logger_manager();
        var BatchQueue = require_batch_queue();
        var BiLoggerFactory = function() {
            function BiLoggerFactory2() {
                _classCallCheck(this, BiLoggerFactory2);
                this._publishers = [];
                this._validators = [];
                this._defaults = {};
                this._nonEssentialDefaults = {};
                this._events = {};
                this._isMuted = false;
                this._eventTransformer = null;
                this._payloadTransformer = null;
                this._consentPolicyGetter = null;
                this._maxBatchSize = null;
                this._batchQueue = null;
            }
            _createClass(BiLoggerFactory2, [
                {
                    key: "addPublisher",
                    value: function addPublisher(publisher) {
                        assert.defined(publisher, "Publisher must be provided");
                        assert.ok(typeof publisher === "function", "Expected a publisher function");
                        this._publishers.push(publisher);
                        return this;
                    }
                },
                {
                    key: "addValidator",
                    value: function addValidator(validator) {
                        assert.defined(validator, "Validator must be provided");
                        assert.ok((typeof validator === "undefined" ? "undefined" : _typeof(validator)) === "object" && validator, "Expected a validator object");
                        assert.ok(validator.execute && validator.match, "Provided validator does not match the interface");
                        this._validators.push(validator);
                        return this;
                    }
                },
                {
                    key: "setDefaults",
                    value: function setDefaults(defaults) {
                        assert.defined(defaults, "Defaults must be provided");
                        assert.object(defaults, "Defaults must be an object");
                        this._defaults = defaults;
                        return this;
                    }
                },
                {
                    key: "updateDefaults",
                    value: function updateDefaults(defaults) {
                        assert.defined(defaults, "Defaults must be provided");
                        assert.object(defaults, "Defaults must be an object");
                        Object.assign(this._defaults, defaults);
                        return this;
                    }
                },
                {
                    key: "updateNonEssentialDefaults",
                    value: function updateNonEssentialDefaults(defaults) {
                        assert.defined(defaults, "Non-essential Defaults must be provided");
                        assert.object(defaults, "Non-essential Defaults must be an object");
                        Object.assign(this._nonEssentialDefaults, defaults);
                        return this;
                    }
                },
                {
                    key: "setEvents",
                    value: function setEvents(events) {
                        assert.defined(events, "Events must be provided");
                        assert.object(events, "Events must be an object");
                        this._events = events;
                        return this;
                    }
                },
                {
                    key: "setDefaultValueTimeout",
                    value: function setDefaultValueTimeout(defaultValueTimeout) {
                        assert.defined(defaultValueTimeout, "Default Value Timeout must be provided");
                        this._defaultValueTimeout = defaultValueTimeout;
                        return this;
                    }
                },
                {
                    key: "setDefaultContinueOnFail",
                    value: function setDefaultContinueOnFail(defaultContinueOnFail) {
                        assert.defined(defaultContinueOnFail, "Default Continue On Fail must be provided");
                        this._defaultContinueOnFail = defaultContinueOnFail;
                        return this;
                    }
                },
                {
                    key: "setPublisherFailHandler",
                    value: function setPublisherFailHandler(onPublisherFailHandler) {
                        assert.defined(onPublisherFailHandler, "Publisher Fail Handler must be provided");
                        this._onPublisherFailHandler = onPublisherFailHandler;
                        return this;
                    }
                },
                {
                    key: "setMuted",
                    value: function setMuted(isMuted) {
                        assert.defined(isMuted, "Is Muted must be provided");
                        assert.boolean(isMuted, "Is Muted must be a boolean");
                        this._isMuted = isMuted;
                        return this;
                    }
                },
                {
                    key: "setMaxBatchSize",
                    value: function setMaxBatchSize(maxBatchSize) {
                        assert.defined(maxBatchSize, "Max Batch Size must be provided");
                        assert.number(maxBatchSize, "Max Batch Size must be a number");
                        assert.ok(maxBatchSize > 0, "Max Batch Size must be higher than 0");
                        this._maxBatchSize = maxBatchSize;
                        return this;
                    }
                },
                {
                    key: "setGlobalBatchQueue",
                    value: function setGlobalBatchQueue(batchQueue) {
                        assert.defined(batchQueue, "Global Batch Queue must be provided");
                        assert.ok(batchQueue instanceof BatchQueue, "Global Batch Queue must be an instance of BatchQueue");
                        this._globalBatchQueue = batchQueue;
                        return this;
                    }
                },
                {
                    key: "withEventTransformer",
                    value: function withEventTransformer(transformer) {
                        assert.defined(transformer, "Event Transformer must be provided");
                        assert.func(transformer, "Event Transformer must be a function");
                        this._eventTransformer = transformer;
                        return this;
                    }
                },
                {
                    key: "withPayloadTransformer",
                    value: function withPayloadTransformer(transformer) {
                        assert.defined(transformer, "Payload Transformer must be provided");
                        assert.func(transformer, "Payload Transformer must be a function");
                        this._payloadTransformer = transformer;
                        return this;
                    }
                },
                {
                    key: "withConsentPolicyGetter",
                    value: function withConsentPolicyGetter(getter) {
                        assert.defined(getter, "Consent Policy Getter must be provided");
                        assert.func(getter, "Consent Policy Getter must be a function");
                        this._consentPolicyGetter = getter;
                        return this;
                    }
                },
                {
                    key: "logger",
                    value: function logger(context) {
                        var _this = this;
                        var logger2 = new BiLogger({
                            publishers: this._publishers,
                            validators: this._validators,
                            defaults: this._defaults,
                            events: this._events,
                            defaultValueTimeout: this._defaultValueTimeout,
                            defaultContinueOnFail: this._defaultContinueOnFail,
                            onPublisherFailHandler: this._onPublisherFailHandler,
                            isMuted: function isMuted() {
                                return _this._isMuted;
                            },
                            eventTransformer: this._eventTransformer,
                            payloadTransformer: this._payloadTransformer,
                            consentPolicyGetter: this._consentPolicyGetter,
                            nonEssentialDefaults: this._nonEssentialDefaults,
                            maxBatchSize: this._maxBatchSize,
                            globalBatchQueue: this._globalBatchQueue
                        }, context);
                        biLoggerManager.manager.notifyLoggerCreated(logger2);
                        return logger2;
                    }
                }
            ]);
            return BiLoggerFactory2;
        }();
        module.exports = BiLoggerFactory;
    }
});
// ../../node_modules/@wix/wix-bi-logger-client/dist/index.js
var require_dist = __commonJS({
    "../../node_modules/@wix/wix-bi-logger-client/dist/index.js" (exports, module) {
        "use strict";
        var BiLoggerClientFactory = require_bi_logger_factory();
        var BiLogger = require_bi_logger();
        var biLoggerManager = require_bi_logger_manager();
        var BatchQueue = require_batch_queue();
        module.exports.BiLoggerFactory = BiLoggerClientFactory;
        module.exports.BiLogger = BiLogger;
        module.exports.BiLoggerManager = biLoggerManager.BiLoggerManager;
        module.exports.factory = function() {
            return new BiLoggerClientFactory();
        };
        module.exports.manager = biLoggerManager.manager;
        module.exports.createBatchQueue = function() {
            return new BatchQueue();
        };
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/lib/browser.js
var require_browser = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/lib/browser.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.readCookie = exports.sendBeacon = exports.getWindowSize = exports.getDesktopSize = exports.now = void 0;
        var utils_1 = require_utils();
        function now() {
            return typeof performance !== "undefined" && performance && performance.now ? performance.now() : -1;
        }
        exports.now = now;
        function getDesktopSize(window2) {
            var width = window2.screen && window2.screen.width || 0;
            var height = window2.screen && window2.screen.height || 0;
            return "".concat(width, "x").concat(height);
        }
        exports.getDesktopSize = getDesktopSize;
        function getWindowSize(window2) {
            var width = 0;
            var height = 0;
            if (window2.innerWidth) {
                width = window2.innerWidth;
                height = window2.innerHeight;
            } else if (window2.document) {
                if (window2.document.documentElement && window2.document.documentElement.clientWidth) {
                    width = window2.document.documentElement.clientWidth;
                    height = window2.document.documentElement.clientHeight;
                } else if (window2.document.body && window2.document.body.clientWidth) {
                    width = window2.document.body.clientWidth;
                    height = window2.document.body.clientHeight;
                }
            }
            return "".concat(width, "x").concat(height);
        }
        exports.getWindowSize = getWindowSize;
        function sendBeacon(url, data) {
            if (typeof navigator === "undefined" || !navigator || !navigator.sendBeacon) {
                return false;
            }
            return navigator.sendBeacon(url, data);
        }
        exports.sendBeacon = sendBeacon;
        function readCookie(cookieName) {
            if ((0, utils_1.isDataProtocol)() || typeof document === "undefined") {
                return null;
            }
            if (window.__ENABLE_COOKIE_READ_OPTIMIZATION__ && window.__BI_cookie_cache && window.__BI_cookie_cache[cookieName] !== void 0) {
                return window.__BI_cookie_cache[cookieName];
            }
            var cookies = document.cookie.split(";");
            for(var _i = 0, cookies_1 = cookies; _i < cookies_1.length; _i++){
                var cookie = cookies_1[_i];
                var pair = cookie.split("=");
                var name_1 = pair[0];
                var value = pair[1];
                while(name_1[0] === " "){
                    name_1 = name_1.substr(1);
                }
                if (name_1 === cookieName) {
                    if (window.__ENABLE_COOKIE_READ_OPTIMIZATION__) {
                        if (!window.__BI_cookie_cache) {
                            window.__BI_cookie_cache = {};
                        }
                        window.__BI_cookie_cache[cookieName] = value;
                    }
                    return value;
                }
            }
            return "";
        }
        exports.readCookie = readCookie;
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/constants.js
var require_constants = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/constants.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.DefaultCommonConfig = exports.BrandToDomainMap = exports.BrandToHostMap = exports.HeadlessHost = exports.DefaultScreenResolution = exports.DefaultBrand = exports.EventContextMap = exports.BackofficeDomains = exports.LoggerVersion = void 0;
        exports.LoggerVersion = "2.0.987|C";
        exports.BackofficeDomains = [
            ".wix.com",
            ".editorx.com"
        ];
        var EventContextMap;
        (function(EventContextMap2) {
            EventContextMap2["msid"] = "_msid";
            EventContextMap2["clientId"] = "_client_id";
            EventContextMap2["uuid"] = "_uuid";
            EventContextMap2["visitorId"] = "_visitorId";
            EventContextMap2["siteMemberId"] = "_siteMemberId";
            EventContextMap2["brandId"] = "_brandId";
            EventContextMap2["siteBranchId"] = "_siteBranchId";
            EventContextMap2["screenResolution"] = "_sr";
            EventContextMap2["ms"] = "_ms";
            EventContextMap2["lv"] = "_lv";
            EventContextMap2["isHeadless"] = "_isHeadless";
            EventContextMap2["hostingPlatform"] = "_hostingPlatform";
        })(EventContextMap = exports.EventContextMap || (exports.EventContextMap = {}));
        exports.DefaultBrand = "wix";
        exports.DefaultScreenResolution = "0x0";
        exports.HeadlessHost = "VIEWER_HEADLESS";
        exports.BrandToHostMap = {
            wix: "wix",
            editorx: "editorx",
            base44: "base44"
        };
        exports.BrandToDomainMap = {
            base44: /\.base44\.com$/
        };
        exports.DefaultCommonConfig = {
            brand: exports.DefaultBrand
        };
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/lib/env.js
var require_env = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/lib/env.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getGlobal = exports.getWindowIfTop = exports.isBackoffice = exports.isWebWorker = exports.getBrandByDomain = exports.getHost = exports.setHost = void 0;
        var constants_1 = require_constants();
        var host;
        var hostByDomain;
        function setHost(_host) {
            host = _host;
        }
        exports.setHost = setHost;
        function getHost(brand) {
            if (brand === void 0) {
                brand = constants_1.DefaultBrand;
            }
            if (host) {
                return host;
            }
            var hostByDomainOrBrand = "";
            if (typeof hostByDomain === "undefined") {
                hostByDomain = getGlobal(function(window2) {
                    if (!window2.location || !window2.location.hostname) {
                        return null;
                    }
                    var _a = window2.location.hostname.match(/\.(wix|editorx|base44)\.com$/) || [], domain = _a[1];
                    return domain || null;
                }, null);
            }
            hostByDomainOrBrand = hostByDomain || constants_1.BrandToHostMap[brand] || constants_1.BrandToHostMap[constants_1.DefaultBrand];
            return "frog.".concat(hostByDomainOrBrand, ".com");
        }
        exports.getHost = getHost;
        function getBrandByDomain() {
            return getGlobal(function(global2) {
                if (!global2.location || !global2.location.hostname) {
                    return null;
                }
                return Object.keys(constants_1.BrandToDomainMap).find(function(brand) {
                    return constants_1.BrandToDomainMap[brand].test(global2.location.hostname);
                }) || null;
            }, null);
        }
        exports.getBrandByDomain = getBrandByDomain;
        function isWebWorker() {
            return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
        }
        exports.isWebWorker = isWebWorker;
        function isBackoffice() {
            return getWindowIfTop(function(_a) {
                var document2 = _a.document;
                return constants_1.BackofficeDomains.some(function(domain) {
                    return document2.location.host.indexOf(domain) !== -1;
                });
            });
        }
        exports.isBackoffice = isBackoffice;
        function getWindowIfTop(cb) {
            if (typeof window !== "undefined" && window) {
                try {
                    return window.top === window.self ? cb ? cb(window) : window : null;
                } catch (e) {
                    return null;
                }
            }
            return null;
        }
        exports.getWindowIfTop = getWindowIfTop;
        function getGlobal(cb, defaultValue) {
            if (defaultValue === void 0) {
                defaultValue = null;
            }
            if (typeof self !== "undefined" && self) {
                return cb(self) || defaultValue;
            }
            return defaultValue;
        }
        exports.getGlobal = getGlobal;
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/lib/utils.js
var require_utils = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/lib/utils.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.guid = exports.isDataProtocol = exports.buildBiUrl = exports.getCookies = void 0;
        var browser_1 = require_browser();
        var env_1 = require_env();
        var cacheKillerCounter = 0;
        function getCookies(params) {
            return Object.keys(params).reduce(function(res, param) {
                var _a = typeof params[param] === "string" ? {
                    name: params[param]
                } : params[param], name = _a.name, _b = _a.transform, transform = _b === void 0 ? function(x) {
                    return x;
                } : _b;
                var value = transform((0, browser_1.readCookie)(name));
                if (value) {
                    res[param] = value;
                }
                return res;
            }, {});
        }
        exports.getCookies = getCookies;
        function buildBiUrl(_a, params, context) {
            var _b = _a.host, host = _b === void 0 ? "" : _b, _c = _a.endpoint, endpoint = _c === void 0 ? "" : _c;
            if (context === void 0) {
                context = {};
            }
            host = typeof host === "function" ? host() : host;
            host = host || (0, env_1.getHost)();
            endpoint = context.endpoint || endpoint;
            if (!context.useBatch) {
                params._ = "" + /* @__PURE__ */ new Date().getTime() + cacheKillerCounter++;
            }
            var pairs = context.useBatch ? [] : Object.keys(params).map(function(key) {
                return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key]));
            }, []);
            var url = [
                "//".concat(host, "/").concat(endpoint)
            ].concat(pairs.length ? pairs.join("&") : []).join("?");
            if (url.startsWith("//") && isDataProtocol()) {
                url = "https:" + url;
            }
            return url;
        }
        exports.buildBiUrl = buildBiUrl;
        function isDataProtocol() {
            return typeof window !== "undefined" && (window === null || window === void 0 ? void 0 : window.location.protocol) === "data:";
        }
        exports.isDataProtocol = isDataProtocol;
        function guid() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0;
                var v = c === "x" ? r : r & 3 | 8;
                return v.toString(16);
            });
        }
        exports.guid = guid;
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/lib/navigator.js
var require_navigator = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/lib/navigator.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.listen = void 0;
        var env_1 = require_env();
        function hook(obj, fnName, cbHook) {
            if (!obj || !obj[fnName]) {
                return;
            }
            var original = obj[fnName];
            obj[fnName] = function() {
                cbHook.apply(null, arguments);
                return original.apply(obj, arguments);
            };
        }
        function onLoad(cb) {
            setTimeout(function() {
                return (0, env_1.getWindowIfTop)(function(window2) {
                    return cb(window2.location.href);
                });
            });
        }
        function onPushState(cb) {
            (0, env_1.getWindowIfTop)(function(_a) {
                var history = _a.history;
                return [
                    "pushState",
                    "replaceState"
                ].forEach(function(fnName) {
                    hook(history, fnName, function(_, __, url) {
                        return cb(url);
                    });
                });
            });
        }
        function onPopState(cb) {
            (0, env_1.getWindowIfTop)(function(window2) {
                return window2.addEventListener("popstate", function() {
                    return cb(window2.location.href);
                });
            });
        }
        function listen(cb) {
            (0, env_1.getWindowIfTop)(function(window2) {
                var fromUrl = window2.document.referrer;
                [
                    onLoad,
                    onPushState,
                    onPopState
                ].forEach(function(event) {
                    return event(function(toUrl) {
                        cb(fromUrl, toUrl);
                        fromUrl = toUrl;
                    });
                });
            });
        }
        exports.listen = listen;
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/lib/tracker.js
var require_tracker = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/lib/tracker.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.track = void 0;
        var utils_1 = require_utils();
        var navigator_1 = require_navigator();
        var env_1 = require_env();
        var browser_1 = require_browser();
        var IS_TRACKING = "__isTrackingPageViews__";
        var ENDPOINT = "p";
        var SOURCE = 19;
        var EVID = 3;
        function shouldTrack(force) {
            return force || !(0, env_1.isWebWorker)() && (0, env_1.isBackoffice)() && (0, env_1.getWindowIfTop)(function(window2) {
                return !window2[IS_TRACKING];
            });
        }
        function setIsTracking() {
            return (0, env_1.getWindowIfTop)(function(window2) {
                return window2[IS_TRACKING] = true;
            });
        }
        function getLogger(loggerFactory) {
            return loggerFactory({
                endpoint: ENDPOINT
            }).updateDefaults({
                src: SOURCE,
                evid: EVID,
                vsi: (0, utils_1.guid)()
            }).logger();
        }
        function trackBrowsingSession(loggerFactory) {
            var logger = getLogger(loggerFactory);
            var firstInSession = 1;
            (0, navigator_1.listen)(function(fromUrl, toUrl) {
                var _a = (0, env_1.getWindowIfTop)(function(window2) {
                    return {
                        sr: (0, browser_1.getDesktopSize)(window2),
                        wr: (0, browser_1.getWindowSize)(window2)
                    };
                }), sr = _a.sr, wr = _a.wr;
                logger.log({
                    from: fromUrl,
                    to: toUrl,
                    fis: firstInSession,
                    sr,
                    wr
                });
                firstInSession = 0;
            });
        }
        function track(loggerFactory, options) {
            if (options === void 0) {
                options = {
                    force: false
                };
            }
            if (shouldTrack(options.force)) {
                setIsTracking();
                trackBrowsingSession(loggerFactory);
            }
        }
        exports.track = track;
    }
});
// ../../node_modules/@wix/consent-policy-client-accessor/dist/src/consts.js
var require_consts = __commonJS({
    "../../node_modules/@wix/consent-policy-client-accessor/dist/src/consts.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ALLOW_ALL_POLICY = exports.PROPS_ACCESS = exports.METHODS = void 0;
        exports.METHODS = {
            policy: "getCurrentConsentPolicy",
            header: "_getConsentPolicyHeader",
            isMethod: true
        };
        exports.PROPS_ACCESS = {
            policy: "consentPolicy",
            header: "consentPolicyHeader",
            isMethod: false
        };
        exports.ALLOW_ALL_POLICY = {
            essential: true,
            dataToThirdParty: true,
            advertising: true,
            functional: true,
            analytics: true
        };
    }
});
// ../../node_modules/@wix/consent-policy-client-accessor/dist/src/consent-policy-accessor.js
var require_consent_policy_accessor = __commonJS({
    "../../node_modules/@wix/consent-policy-client-accessor/dist/src/consent-policy-accessor.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getConsentPolicyManager = exports.getGlobalAccessor = void 0;
        var consts_1 = require_consts();
        var globalContext;
        function getGlobalAccessor() {
            [
                getGlobalThis,
                getGlobal,
                getSelf,
                getWindow
            ].forEach(function(globalAccessFunc) {
                try {
                    if (!globalContext) {
                        globalContext = globalAccessFunc();
                    }
                } catch (e) {}
            });
            return globalContext;
        }
        exports.getGlobalAccessor = getGlobalAccessor;
        function getWindow() {
            return window;
        }
        function getSelf() {
            return self;
        }
        function getGlobal() {
            return /*TURBOPACK member replacement*/ __turbopack_context__.g;
        }
        function getGlobalThis() {
            return globalThis;
        }
        function getConsentPolicyManager(env) {
            if (env === void 0) {
                env = void 0;
            }
            if (env) {
                globalContext = env;
            }
            if (!globalContext && !env) {
                globalContext = getGlobalAccessor();
            }
            var consentPolicyManager;
            try {
                if (typeof globalContext.commonConfig === "object" && globalContext.commonConfig.consentPolicy) {
                    consentPolicyManager = wrapConsentPolicy(globalContext.commonConfig, consts_1.PROPS_ACCESS);
                }
                if (!consentPolicyManager && typeof globalContext.consentPolicyManager === "object") {
                    consentPolicyManager = wrapConsentPolicy(globalContext.consentPolicyManager, consts_1.METHODS);
                }
                if (!consentPolicyManager && typeof globalContext.Wix === "object" && typeof globalContext.Wix.Utils === "object" && typeof globalContext.Wix.Utils.getCurrentConsentPolicy === "function") {
                    consentPolicyManager = wrapConsentPolicy(globalContext.Wix.Utils, consts_1.METHODS);
                }
            } catch (e) {}
            return consentPolicyManager;
        }
        exports.getConsentPolicyManager = getConsentPolicyManager;
        function wrapConsentPolicy(accessor, conf) {
            return {
                getCurrentConsentPolicy: function() {
                    var extractor = accessor[conf.policy];
                    return conf.isMethod ? extractor() : extractor;
                },
                _getConsentPolicyHeader: function() {
                    var extractor = accessor[conf.header];
                    return conf.isMethod ? extractor() : extractor;
                },
                deleteReference: !conf.isMethod
            };
        }
    }
});
// ../../node_modules/@wix/consent-policy-client-accessor/dist/src/index.js
var require_src = __commonJS({
    "../../node_modules/@wix/consent-policy-client-accessor/dist/src/index.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ConsentPolicyAccessor = void 0;
        var consent_policy_accessor_1 = require_consent_policy_accessor();
        var consts_1 = require_consts();
        var ConsentPolicyAccessor = /** @class */ function() {
            function ConsentPolicyAccessor2(env) {
                if (env) {
                    this.env = env;
                }
                this.consentPolicyAccess = (0, consent_policy_accessor_1.getConsentPolicyManager)(this.env);
            }
            ConsentPolicyAccessor2.prototype.clearReference = function() {
                if (this.consentPolicyAccess && this.consentPolicyAccess.deleteReference) {
                    this.consentPolicyAccess = void 0;
                }
            };
            ConsentPolicyAccessor2.prototype.getCurrentConsentPolicy = function() {
                if (!this.consentPolicyAccess) {
                    this.consentPolicyAccess = (0, consent_policy_accessor_1.getConsentPolicyManager)(this.env);
                }
                var policyObj = this.consentPolicyAccess && this.consentPolicyAccess.getCurrentConsentPolicy() || consts_1.ALLOW_ALL_POLICY;
                this.clearReference();
                return policyObj.policy ? policyObj.policy : policyObj;
            };
            ConsentPolicyAccessor2.prototype.getConsentPolicyHeader = function(valueOnly) {
                if (valueOnly === void 0) {
                    valueOnly = false;
                }
                if (!this.consentPolicyAccess) {
                    this.consentPolicyAccess = (0, consent_policy_accessor_1.getConsentPolicyManager)(this.env);
                }
                var consentPolicyHeaderObj = this.consentPolicyAccess && this.consentPolicyAccess._getConsentPolicyHeader() || {
                    "consent-policy": ""
                };
                this.clearReference();
                return valueOnly ? consentPolicyHeaderObj["consent-policy"] : consentPolicyHeaderObj;
            };
            return ConsentPolicyAccessor2;
        }();
        exports.ConsentPolicyAccessor = ConsentPolicyAccessor;
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/lib/errors.js
var require_errors = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/lib/errors.js" (exports) {
        "use strict";
        var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                } || function(d2, b2) {
                    for(var p in b2)if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                };
                return extendStatics(d, b);
            };
            return function(d, b) {
                if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        }();
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.APINotSupportedError = exports.AssertionError = void 0;
        var AssertionError = /** @class */ function(_super) {
            __extends(AssertionError2, _super);
            function AssertionError2(message) {
                var _this = _super.call(this, message) || this;
                _this.name = _this.constructor.name;
                return _this;
            }
            return AssertionError2;
        }(Error);
        exports.AssertionError = AssertionError;
        var APINotSupportedError = /** @class */ function(_super) {
            __extends(APINotSupportedError2, _super);
            function APINotSupportedError2(message) {
                var _this = _super.call(this, message) || this;
                _this.name = _this.constructor.name;
                return _this;
            }
            return APINotSupportedError2;
        }(Error);
        exports.APINotSupportedError = APINotSupportedError;
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/lib/assert.js
var require_assert2 = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/lib/assert.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ok = exports.object = exports.defined = void 0;
        var errors_1 = require_errors();
        var defined = function(target, message) {
            if (target === void 0) {
                throw new errors_1.AssertionError(message);
            }
        };
        exports.defined = defined;
        var object = function(target, message) {
            if (target !== void 0 && (typeof target !== "object" || Array.isArray(target) || target === null)) {
                throw new errors_1.AssertionError(message);
            }
        };
        exports.object = object;
        var ok = function(target, message) {
            if (!target) {
                throw new errors_1.AssertionError(message);
            }
        };
        exports.ok = ok;
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/types.js
var require_types = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/types.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Errors = exports.EventCategories = exports.PublishMethods = void 0;
        var PublishMethods;
        (function(PublishMethods2) {
            PublishMethods2["Auto"] = "auto";
            PublishMethods2["PostMessage"] = "postMessage";
            PublishMethods2["Fetch"] = "fetch";
        })(PublishMethods = exports.PublishMethods || (exports.PublishMethods = {}));
        var EventCategories;
        (function(EventCategories2) {
            EventCategories2["Essential"] = "essential";
            EventCategories2["Functional"] = "functional";
            EventCategories2["Analytics"] = "analytics";
        })(EventCategories = exports.EventCategories || (exports.EventCategories = {}));
        var Errors;
        (function(Errors2) {
            Errors2[Errors2["Unsupported"] = 0] = "Unsupported";
        })(Errors = exports.Errors || (exports.Errors = {}));
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/lib/transport.js
var require_transport = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/lib/transport.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.postMessageTransport = exports.xhrTransport = exports.fetchTransport = exports.pixelTransport = exports.beaconTransport = void 0;
        var browser_1 = require_browser();
        var errors_1 = require_errors();
        function beaconTransport(url, params, sendInBody) {
            if (sendInBody === void 0) {
                sendInBody = false;
            }
            return new Promise(function(resolve, reject) {
                return (0, browser_1.sendBeacon)(url, sendInBody ? JSON.stringify(params) : void 0) ? resolve() : reject(new Error("Transport Error: Cannot send bi using beacon"));
            });
        }
        exports.beaconTransport = beaconTransport;
        function pixelTransport(url, image) {
            return new Promise(function(resolve, reject) {
                var biImage = image || new window.Image(0, 0);
                biImage.onload = function() {
                    return resolve();
                };
                biImage.onerror = function() {
                    return reject(new Error("Transport Error: Cannot send bi using pixel"));
                };
                biImage.src = url;
            });
        }
        exports.pixelTransport = pixelTransport;
        function fetchTransport(url, params, method, fetchFunction) {
            if (method === void 0) {
                method = "GET";
            }
            if (typeof fetchFunction === "undefined") {
                if (typeof fetch === "undefined") {
                    return Promise.reject(new errors_1.APINotSupportedError("fetch"));
                }
                fetchFunction = fetch;
            }
            var options = {
                method,
                credentials: "include"
            };
            if (method === "POST") {
                options.body = JSON.stringify(params);
            } else {
                options.keepalive = true;
            }
            return fetchFunction(url, options).then(function(response) {
                if (!response.ok) {
                    throw Error("Transport Error: Cannot send bi using fetch. Status: ".concat(response.status));
                }
            });
        }
        exports.fetchTransport = fetchTransport;
        function xhrTransport(url, params, method) {
            if (method === void 0) {
                method = "GET";
            }
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, "".concat(location.protocol).concat(url));
                xhr.onload = resolve;
                xhr.onerror = function() {
                    reject(new Error("Transport Error: Cannot send bi using xhr."));
                };
                xhr.withCredentials = true;
                if (method === "POST") {
                    xhr.send(JSON.stringify(params));
                } else {
                    xhr.send();
                }
            });
        }
        exports.xhrTransport = xhrTransport;
        function postMessageTransport(message, postMessage) {
            if (postMessage === void 0) {
                postMessage = self.postMessage;
            }
            var messageArgs = [
                message
            ];
            if (typeof WorkerGlobalScope === "undefined") {
                messageArgs.push("*");
            }
            return postMessage.apply(self, messageArgs);
        }
        exports.postMessageTransport = postMessageTransport;
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/lib/publishers.js
var require_publishers = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/lib/publishers.js" (exports) {
        "use strict";
        var __assign = exports && exports.__assign || function() {
            __assign = Object.assign || function(t) {
                for(var s, i = 1, n = arguments.length; i < n; i++){
                    s = arguments[i];
                    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        var __rest = exports && exports.__rest || function(s, e) {
            var t = {};
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getTransformers = exports.getPublisher = exports.postMessagePublisher = exports.xhrPublisher = exports.fetchPublisher = exports.beaconPublisher = exports.imagePublisher = exports.resolvePublisher = void 0;
        var utils_1 = require_utils();
        var env_1 = require_env();
        var errors_1 = require_errors();
        var types_1 = require_types();
        var transport_1 = require_transport();
        var getHttpMethod = function(context) {
            return context.useBatch ? "POST" : "GET";
        };
        var resolvePublisher = function(options, publishFunctions) {
            var publisherFactory;
            var publishFunction;
            if (options.publishMethod === types_1.PublishMethods.PostMessage) {
                publisherFactory = postMessagePublisher;
                publishFunction = publishFunctions && publishFunctions[types_1.PublishMethods.PostMessage];
            } else if (options.publishMethod === types_1.PublishMethods.Fetch) {
                publisherFactory = fetchPublisher;
                publishFunction = publishFunctions && publishFunctions[types_1.PublishMethods.Fetch];
            } else if ((0, env_1.isWebWorker)()) {
                publisherFactory = fetchPublisher;
            } else {
                publisherFactory = beaconPublisher;
            }
            return publisherFactory(options, publishFunction);
        };
        exports.resolvePublisher = resolvePublisher;
        function imagePublisher(options) {
            if (options === void 0) {
                options = {};
            }
            return function image(params, context) {
                if (context === void 0) {
                    context = {};
                }
                if (context.useBatch) {
                    throw new errors_1.APINotSupportedError("Can't use image publisher to send batched events.");
                }
                var url = (0, utils_1.buildBiUrl)(options, params, context);
                return (0, transport_1.pixelTransport)(url, context.image);
            };
        }
        exports.imagePublisher = imagePublisher;
        function beaconPublisher(options) {
            if (options === void 0) {
                options = {};
            }
            return function beacon(params, context) {
                if (context === void 0) {
                    context = {};
                }
                var url = (0, utils_1.buildBiUrl)(options, params, context);
                return (0, transport_1.beaconTransport)(url, params, !!context.useBatch).catch(function() {
                    var method = getHttpMethod(context);
                    return context.useBatch ? (0, transport_1.fetchTransport)(url, params, method).catch(function(error) {
                        return error instanceof errors_1.APINotSupportedError ? (0, transport_1.xhrTransport)(url, params, method) : Promise.reject(error);
                    }) : (0, transport_1.pixelTransport)(url, context.image);
                });
            };
        }
        exports.beaconPublisher = beaconPublisher;
        function fetchPublisher(options, fetchFunction) {
            if (options === void 0) {
                options = {};
            }
            return function fetch2(params, context) {
                if (context === void 0) {
                    context = {};
                }
                var url = (0, utils_1.buildBiUrl)(options, params, context);
                var method = getHttpMethod(context);
                return (0, transport_1.fetchTransport)(url, params, method, fetchFunction).catch(function(error) {
                    return error instanceof errors_1.APINotSupportedError ? (0, transport_1.xhrTransport)(url, params, method) : Promise.reject(error);
                });
            };
        }
        exports.fetchPublisher = fetchPublisher;
        function xhrPublisher(options) {
            if (options === void 0) {
                options = {};
            }
            return function xhr(params, context) {
                if (context === void 0) {
                    context = {};
                }
                var url = (0, utils_1.buildBiUrl)(options, params, context);
                var method = getHttpMethod(context);
                return (0, transport_1.xhrTransport)(url, params, method);
            };
        }
        exports.xhrPublisher = xhrPublisher;
        function postMessagePublisher(options, publishFunction) {
            if (options === void 0) {
                options = {};
            }
            return function postMessage(params) {
                return (0, transport_1.postMessageTransport)(params, publishFunction);
            };
        }
        exports.postMessagePublisher = postMessagePublisher;
        function getPublisher(options, publishFunctions) {
            return (0, exports.resolvePublisher)(options, publishFunctions);
        }
        exports.getPublisher = getPublisher;
        var getTransformers = function(factoryOptions, transformer) {
            var _eventTransformer, _payloadTransformer;
            if (transformer) {
                if (typeof transformer !== "function" && transformer.postMessage && factoryOptions.publishMethod === types_1.PublishMethods.PostMessage) {
                    _payloadTransformer = transformer.postMessage;
                } else if (typeof transformer === "function") {
                    _eventTransformer = transformer;
                }
            }
            var eventTransformer = _eventTransformer;
            var payloadTransformer = function(params, publisherContext) {
                if (publisherContext.useBatch) {
                    var getEndpoint_1 = function(context) {
                        return (context === null || context === void 0 ? void 0 : context.endpoint) || publisherContext.endpoint || factoryOptions.endpoint;
                    };
                    params.e = params.e.map(function(e) {
                        var context = e.context, event = __rest(e, [
                            "context"
                        ]);
                        var res = __assign(__assign({}, event), {
                            f: __assign(__assign({}, event.f), {
                                _rp: getEndpoint_1(context)
                            })
                        });
                        return res;
                    });
                }
                return _payloadTransformer ? _payloadTransformer(params) : params;
            };
            return {
                eventTransformer,
                payloadTransformer
            };
        };
        exports.getTransformers = getTransformers;
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/lib/common-config.js
var require_common_config = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/lib/common-config.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getWixHost = exports.getBranchId = exports.getBrand = exports.getCommonConfigValue = void 0;
        var env_1 = require_env();
        var constants_1 = require_constants();
        var resolveCommonConfig = function() {
            return (0, env_1.getGlobal)(function(g) {
                return g.Wix && g.Wix.Utils && g.Wix.Utils.commonConfig || g.commonConfig;
            });
        };
        var getCommonConfigValue = function(key, commonConfig, defaultValue) {
            if (commonConfig === void 0) {
                commonConfig = resolveCommonConfig();
            }
            if (defaultValue === void 0) {
                defaultValue = constants_1.DefaultCommonConfig[key];
            }
            commonConfig = commonConfig && typeof commonConfig.getAll === "function" ? commonConfig.getAll() : commonConfig;
            if (!commonConfig || typeof commonConfig[key] === "undefined") {
                return defaultValue;
            }
            return commonConfig[key];
        };
        exports.getCommonConfigValue = getCommonConfigValue;
        var getBrand = function(commonConfigGetter) {
            return (0, exports.getCommonConfigValue)("brand", commonConfigGetter(), (0, env_1.getBrandByDomain)() || constants_1.DefaultBrand);
        };
        exports.getBrand = getBrand;
        var getBranchId = function(commonConfigGetter) {
            return (0, exports.getCommonConfigValue)("branchId", commonConfigGetter());
        };
        exports.getBranchId = getBranchId;
        var getWixHost = function(commonConfigGetter) {
            return (0, exports.getCommonConfigValue)("host", commonConfigGetter());
        };
        exports.getWixHost = getWixHost;
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/lib/event-defaults.js
var require_event_defaults = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/lib/event-defaults.js" (exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getCommonDefaults = exports.getUserDefaults = exports.transformDefaults = void 0;
        var constants_1 = require_constants();
        var browser_1 = require_browser();
        var common_config_1 = require_common_config();
        var env_1 = require_env();
        var utils_1 = require_utils();
        var transformDefaults = function(context) {
            return Object.keys(context).reduce(function(res, key) {
                var mappedKey = constants_1.EventContextMap[key] || key;
                res[mappedKey] = context[key];
                return res;
            }, {});
        };
        exports.transformDefaults = transformDefaults;
        var getUserDefaults = function() {
            return (0, utils_1.getCookies)({
                clientId: "_wixCIDX",
                uuid: {
                    name: "_wixUIDX",
                    transform: function(value) {
                        return typeof value === "string" && value.split("|")[1];
                    }
                }
            });
        };
        exports.getUserDefaults = getUserDefaults;
        var getCommonDefaults = function(commonConfigGetter, consentPolicyGetter) {
            return (0, exports.transformDefaults)({
                brandId: function() {
                    return (0, common_config_1.getBrand)(commonConfigGetter);
                },
                siteBranchId: function() {
                    return (0, common_config_1.getBranchId)(commonConfigGetter);
                },
                screenResolution: function() {
                    return resolveScreenResolution();
                },
                ms: function() {
                    return Math.round((0, browser_1.now)());
                },
                isHeadless: function() {
                    return resolveIsHeadless(commonConfigGetter);
                },
                hostingPlatform: function() {
                    return (0, common_config_1.getWixHost)(commonConfigGetter);
                },
                lv: constants_1.LoggerVersion
            });
        };
        exports.getCommonDefaults = getCommonDefaults;
        var resolveIsHeadless = function(commonConfigGetter) {
            return (0, common_config_1.getWixHost)(commonConfigGetter) === constants_1.HeadlessHost || void 0;
        };
        var resolveScreenResolution = function() {
            return (0, env_1.getWindowIfTop)(function(window2) {
                return (0, browser_1.getDesktopSize)(window2);
            }) || constants_1.DefaultScreenResolution;
        };
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/logger.js
var require_logger = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/logger.js" (exports) {
        "use strict";
        var __assign = exports && exports.__assign || function() {
            __assign = Object.assign || function(t) {
                for(var s, i = 1, n = arguments.length; i < n; i++){
                    s = arguments[i];
                    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
            if (k2 === void 0) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                desc = {
                    enumerable: true,
                    get: function() {
                        return m[k];
                    }
                };
            }
            Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
            if (k2 === void 0) k2 = k;
            o[k2] = m[k];
        });
        var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
            Object.defineProperty(o, "default", {
                enumerable: true,
                value: v
            });
        } : function(o, v) {
            o["default"] = v;
        });
        var __importStar = exports && exports.__importStar || function(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) {
                for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
            }
            __setModuleDefault(result, mod);
            return result;
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.BiLoggerClientFactory = exports.createBatchQueue = exports.manager = exports.factory = exports.Factory = exports.setHost = exports.EventCategories = exports.PublishMethods = void 0;
        var wix_bi_logger_client_1 = require_dist();
        var consent_policy_client_accessor_1 = require_src();
        var assert = __importStar(require_assert2());
        var publishers_1 = require_publishers();
        var common_config_1 = require_common_config();
        var env_1 = require_env();
        var types_1 = require_types();
        var event_defaults_1 = require_event_defaults();
        var types_2 = require_types();
        Object.defineProperty(exports, "PublishMethods", {
            enumerable: true,
            get: function() {
                return types_2.PublishMethods;
            }
        });
        Object.defineProperty(exports, "EventCategories", {
            enumerable: true,
            get: function() {
                return types_2.EventCategories;
            }
        });
        var env_2 = require_env();
        Object.defineProperty(exports, "setHost", {
            enumerable: true,
            get: function() {
                return env_2.setHost;
            }
        });
        var Factory = /** @class */ function() {
            function Factory2(options) {
                if (options === void 0) {
                    options = {};
                }
                this.options = options;
                this.commonConfigGetter = function() {
                    return void 0;
                };
                this.initialized = false;
                assert.ok(!options.publishMethod || Object.keys(types_1.PublishMethods).map(function(key) {
                    return types_1.PublishMethods[key];
                }).indexOf(options.publishMethod) !== -1, 'Unsupported publish method "'.concat(options.publishMethod, '"'));
                Factory2.consentPolicyAccessor = Factory2.consentPolicyAccessor || new consent_policy_client_accessor_1.ConsentPolicyAccessor();
                this.loggerClientFactory = (0, wix_bi_logger_client_1.factory)();
            }
            Factory2.prototype.initFactory = function() {
                var _this = this;
                if (this.initialized) {
                    return this.loggerClientFactory;
                }
                this.initialized = true;
                this.updateDefaults((0, event_defaults_1.getCommonDefaults)(this.commonConfigGetter, Factory2.consentPolicyAccessor));
                this.withUserContext((0, event_defaults_1.getUserDefaults)());
                var options = __assign(__assign({}, this.options), {
                    host: this.options.host || function() {
                        return (0, env_1.getHost)((0, common_config_1.getBrand)(_this.commonConfigGetter));
                    }
                });
                var publisher = (0, publishers_1.getPublisher)(options, this.publishFunctions);
                var _a = (0, publishers_1.getTransformers)(options, this.transformer), eventTransformer = _a.eventTransformer, payloadTransformer = _a.payloadTransformer;
                var baseFactory = this.loggerClientFactory.addPublisher(publisher).withConsentPolicyGetter(function() {
                    return Factory2.consentPolicyAccessor.getCurrentConsentPolicy();
                });
                if (eventTransformer) {
                    baseFactory.withEventTransformer(eventTransformer);
                }
                if (payloadTransformer) {
                    baseFactory.withPayloadTransformer(payloadTransformer);
                }
                return baseFactory;
            };
            Factory2.prototype.withTransformer = function(transformer) {
                assert.defined(transformer, "Transformer must be provided");
                assert.ok(typeof transformer === "function" || transformer && typeof transformer[types_1.PublishMethods.PostMessage] === "function", "Valid transformer must be provided");
                this.transformer = transformer;
                return this;
            };
            Factory2.prototype.withPublishFunction = function(publishFunctions) {
                assert.defined(publishFunctions, "Publish functions object must be provided");
                assert.ok(this.options.publishMethod && this.options.publishMethod !== types_1.PublishMethods.Auto, "Publish function can be used only when using a custom publish method");
                assert.ok(publishFunctions && typeof publishFunctions[this.options.publishMethod] === "function", "Valid publish function must be provided");
                this.publishFunctions = publishFunctions;
                return this;
            };
            Factory2.prototype.withUserContext = function(context) {
                assert.defined(context, "User context object must be provided");
                this.updateDefaults((0, event_defaults_1.transformDefaults)(context));
                return this;
            };
            Factory2.prototype.withUoUContext = function(context) {
                assert.defined(context, "UoU context object must be provided");
                this.updateDefaults((0, event_defaults_1.transformDefaults)(context));
                return this;
            };
            Factory2.prototype.withNonEssentialContext = function(context) {
                assert.defined(context, "Non-essential context object must be provided");
                this.loggerClientFactory.updateNonEssentialDefaults((0, event_defaults_1.transformDefaults)(context));
                return this;
            };
            Factory2.prototype.withCommonConfigGetter = function(commonConfigGetter) {
                assert.defined(commonConfigGetter, "Common config getter must be provided");
                assert.ok(typeof commonConfigGetter === "function", "Common config getter must be a function");
                this.commonConfigGetter = commonConfigGetter;
                return this;
            };
            Factory2.prototype.updateDefaults = function(params) {
                this.loggerClientFactory.updateDefaults(params);
                return this;
            };
            Factory2.prototype.setMuted = function(isMuted) {
                this.loggerClientFactory.setMuted(isMuted);
                return this;
            };
            Factory2.prototype.setEvents = function(events) {
                this.loggerClientFactory.setEvents(events);
                return this;
            };
            Factory2.prototype.setGlobalBatchQueue = function(batchQueue) {
                this.loggerClientFactory.setGlobalBatchQueue(batchQueue);
                return this;
            };
            Factory2.prototype.onError = function(handler) {
                this.loggerClientFactory.setPublisherFailHandler(handler);
                return this;
            };
            Factory2.prototype.logger = function(options) {
                if (options === void 0) {
                    options = {};
                }
                var _a = this.options, endpoint = _a.endpoint, useBatch = _a.useBatch;
                var logger = this.initFactory().logger(__assign({
                    endpoint,
                    useBatch
                }, options));
                return logger;
            };
            return Factory2;
        }();
        exports.Factory = Factory;
        var factory = function(options) {
            if (options === void 0) {
                options = {};
            }
            return new Factory(options);
        };
        exports.factory = factory;
        exports.manager = wix_bi_logger_client_1.manager;
        exports.createBatchQueue = wix_bi_logger_client_1.createBatchQueue;
        exports.BiLoggerClientFactory = wix_bi_logger_client_1.BiLoggerFactory;
    }
});
// ../../node_modules/@wix/web-bi-logger/dist/src/tracking-logger.js
var require_tracking_logger = __commonJS({
    "../../node_modules/@wix/web-bi-logger/dist/src/tracking-logger.js" (exports) {
        "use strict";
        var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
            if (k2 === void 0) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                desc = {
                    enumerable: true,
                    get: function() {
                        return m[k];
                    }
                };
            }
            Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
            if (k2 === void 0) k2 = k;
            o[k2] = m[k];
        });
        var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
            Object.defineProperty(o, "default", {
                enumerable: true,
                value: v
            });
        } : function(o, v) {
            o["default"] = v;
        });
        var __importStar = exports && exports.__importStar || function(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) {
                for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
            }
            __setModuleDefault(result, mod);
            return result;
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.BiLoggerClientFactory = exports.EventCategories = exports.createBatchQueue = exports.manager = exports.setHost = exports.factory = void 0;
        var wix_bi_logger_client_1 = require_dist();
        var tracker = __importStar(require_tracker());
        var logger = __importStar(require_logger());
        var factory = function(options) {
            if (options === void 0) {
                options = {};
            }
            var trackSession = options.trackSession || typeof options.trackSession === "undefined";
            if (trackSession) {
                tracker.track(logger.factory, {
                    force: trackSession === "force"
                });
            }
            return logger.factory(options);
        };
        exports.factory = factory;
        exports.setHost = logger.setHost;
        exports.manager = wix_bi_logger_client_1.manager;
        exports.createBatchQueue = wix_bi_logger_client_1.createBatchQueue;
        exports.EventCategories = logger.EventCategories;
        exports.BiLoggerClientFactory = logger.BiLoggerClientFactory;
        exports.default = {
            factory: exports.factory,
            setHost: logger.setHost,
            manager: wix_bi_logger_client_1.manager,
            createBatchQueue: wix_bi_logger_client_1.createBatchQueue,
            EventCategories: logger.EventCategories,
            BiLoggerClientFactory: logger.BiLoggerClientFactory
        };
    }
});
// src/bundled-dependencies/wix-web-bi-logger.ts
var import_web_bi_logger = __toESM(require_tracking_logger());
var webBiLogger = import_web_bi_logger.default;
;
}),
]);

//# sourceMappingURL=0rv~_%40wix_ricos_dist_es_bundled-dependencies_wix-web-bi-logger_02q57zg.js.map